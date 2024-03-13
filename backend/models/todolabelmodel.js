import mongoose from "mongoose";
import { connection } from "../connectiondb.js";
import yup from "yup";

// tạo biến schema xác định cấu trúc và thuộc tính của data trong mongoose là schema
const Schema = mongoose.Schema;
//  xác định các thuộc tính của object schema như key, value trong biến Todoschema
const TodoSchema = new Schema({
  task: { type: String, required: true },
  color: { type: String },
  userId: { type: String },
});
// convert từ schema sang model để sử dụng trong biến todomodel
export const todoLabel = connection.model("todoLabel", TodoSchema);
export const yupTodolabelSchema = yup.object({
  task: yup.string().required(),
});
