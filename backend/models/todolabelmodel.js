import mongoose from "mongoose";
import { connection } from "../connectiondb.js";
// tạo biến schema xác định cấu trúc và thuộc tính của data trong mongoose là schema
const Schema = mongoose.Schema;
//  xác định các thuộc tính của object schema như key, value trong biến Todoschema
const TodoSchema = new Schema({
  task: { type: String, require: true },
  color: { type: String, require: true },
});
// convert từ schema sang model để sử dụng trong biến todomodel
export const todoLabel = connection.model("todoLabel", TodoSchema);
