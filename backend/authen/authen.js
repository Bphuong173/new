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
export const getAllTasksLabel = async (req, res) => {
  const userId = req.user.userId;
  const { page = 1, limit = 10 } = req.query; // default page = 1, limit = 10
  try {
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };
    const data = await todoLabel.paginate({ userId: userId }, options);
    console.log(data);
    const paginationInfo = {
      total_records: data.totalDocs,
      current_page: data.page,
      total_pages: data.totalPages,
      next_page: data.nextPage,
      prev_page: data.prevPage,
    };
    const response = {
      pagination: paginationInfo,
      tasks: data.docs,
    };

    res.send(JSON.stringify(response));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
