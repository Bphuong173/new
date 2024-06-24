import { user } from "../models/usermodel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(
  "99288234114-5cev3rks5teiaf5j6mojaspct9rj394m.apps.googleusercontent.com"
);

export const createUser = asyncHandler(async (req, res) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
  const newUsermodel = new user({
    name: req.body.name,
    email: req.body.email,
    password: hash,
  });
  await newUsermodel.save();
  res.send(JSON.stringify(newUsermodel));
});

export const getUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await user.findOne({ email });
  if (!foundUser) {
    res.status(401).send("not valid");
    return;
  }
  const match = bcrypt.compareSync(password.toString(), foundUser.password);
  if (match) {
    const token = jwt.sign(
      { email: foundUser.email, userId: foundUser.id },
      "tanhkute"
    );
    // Gửi JWT lại cho client
    res.send(token);
  } else {
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
    const avatarPath = req.file.path;

    // Lưu đường dẫn avatar vào avatar của schema user
    await user.findByIdAndUpdate(userId, {
      avatar: avatarPath,
    });
    res.send("http://localhost:5500/" + avatarPath);
  } catch (error) {
    console.error("Error uploading avatar:", error);
    res.status(500).send(`Error uploading avatar: ${error.message}`);
  }
};
export const googleLogin = asyncHandler(async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "99288234114-5cev3rks5teiaf5j6mojaspct9rj394m.apps.googleusercontent.com",
    });
    const { name, email } = ticket.getPayload();

    let existingUser = await user.findOne({ email });

    if (!existingUser) {
      const newUser = new user({
        name,
        email,
        password: bcrypt.hashSync("random_password", 10), // Tạo password ngẫu nhiên
      });
      existingUser = await newUser.save();
    }

    const jwtToken = jwt.sign(
      { email: existingUser.email, userId: existingUser.id },
      "tanhkute"
    );

    res.json({ token: jwtToken });
  } catch (error) {
    console.error("Google login error:", error.message);
    res.status(401).send("Đăng nhập bằng Google thất bại");
  }
});
