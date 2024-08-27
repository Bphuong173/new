import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const authenToken = async (req:Request, res:Response, next:NextFunction) => {
  // Lấy token từ header
  const token = req.header("Authorization");
  // Kiểm tra token tồn tại
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    // Xác thực token và lấy thông tin user
    // decoded là 1 đối tượng chứa các thông tin
    const decoded = jwt.verify(token, "tanhkute");
    if (typeof decoded !== 'string' && 'userId' in decoded) {
      const foundUser = await prisma.user.findUnique({
        where:{
          id: decoded.userId
        }
      });
      if (!foundUser) {
        return res.status(401).json({ message: "User not found" });
      }
    req.user = foundUser;
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
export default authenToken;
