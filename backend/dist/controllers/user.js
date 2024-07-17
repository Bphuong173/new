import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client("99288234114-5cev3rks5teiaf5j6mojaspct9rj394m.apps.googleusercontent.com");
export const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // const avatarPath = req.file.path;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    const newUsermodel = await prisma.user.create({
        data: {
            name,
            email,
            password: hash,
            // avatar: avatarPath,
        }
    });
    res.send(JSON.stringify(newUsermodel));
});
export const getUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await prisma.user.findUnique({
        where: { email }
    });
    if (!foundUser) {
        res.status(401).send("not valid");
        return;
    }
    const match = bcrypt.compareSync(password.toString(), foundUser.password);
    if (match) {
        const token = jwt.sign({ email: foundUser.email, userId: foundUser.userId }, "tanhkute");
        // Gửi JWT lại cho client
        res.send(token);
    }
    else {
        res.status(401).send("not valid");
    }
});
// Controller để xử lý việc upload avatar
export const uploadAvatar = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, "tanhkute");
    req.user = decoded;
    try {
        const userId = req.user.userId;
        const email = req.user.email;
        const avatarPath = req.file.path;
        // Lưu đường dẫn avatar vào avatar của schema user
        await prisma.user.update({
            where: { userId: userId,
                email: email
            },
            data: {
                avatar: avatarPath
            }
        });
        res.send("http://localhost:5500/" + avatarPath);
    }
    catch (error) {
        console.error("Error uploading avatar:", error);
        res.status(500).send(`Error uploading avatar: ${error.message}`);
    }
};
export const googleLogin = asyncHandler(async (req, res) => {
    const { token } = req.body;
    const avatarPath = req.file.path;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "99288234114-5cev3rks5teiaf5j6mojaspct9rj394m.apps.googleusercontent.com",
        });
        // const { name, email } = ticket.getPayload();
        const payload = ticket.getPayload();
        const name = payload?.name ?? 'Anonymous';
        const email = payload?.email ?? 'unknown@example.com';
        let existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (!existingUser) {
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    avatar: avatarPath,
                    password: bcrypt.hashSync('random_password', 10), // Create a random password
                },
            });
            existingUser = newUser;
        }
        const jwtToken = jwt.sign({ email: existingUser.email, userId: existingUser.id }, "tanhkute");
        res.json({ token: jwtToken });
    }
    catch (error) {
        console.error("Google login error:", error.message);
        res.status(401).send("Đăng nhập bằng Google thất bại");
    }
});
