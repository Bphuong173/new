import jwt from "jsonwebtoken";
const authenToken = (req, res, next) => {
  // Lấy token từ header
  const token = req.header("Authorization");
  // Kiểm tra token tồn tại
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    // Xác thực token và lấy thông tin user
    const decoded = jwt.verify(token, "tanhkute");
    // Gán thông tin user vào request
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
export default authToken;
