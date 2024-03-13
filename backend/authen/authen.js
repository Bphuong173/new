import jwt from "jsonwebtoken";
import { user } from "../models/usermodel.js";

const authenToken = async (req, res, next) => {
  // Lấy token từ header
  const token = req.header("Authorization");
  // Kiểm tra token tồn tại
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    // Xác thực token và lấy thông tin user
    const decoded = jwt.verify(token, "tanhkute");
    const foundUser = await user.findById(decoded.userId);
    if (!foundUser) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = foundUser;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
export default authenToken;
