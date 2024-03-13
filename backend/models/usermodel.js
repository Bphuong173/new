import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { connection } from "../connectiondb.js";
import yup from "yup";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userId: { type: String, default: uuidv4() },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
});
export const user = connection.model("user", UserSchema);
export const yupRegisterSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export const yupLoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
