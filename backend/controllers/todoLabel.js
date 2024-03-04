import { todoLabel } from "../models/todolabelmodel.js";
import jwt from "jsonwebtoken";

export const getAllTasksLabel = async (req, res) => {
  const token = req.headers["authorization"];
  const decoded = jwt.verify(token, "tanhkute");
  // Gán thông tin user vào request
  req.user = decoded;

  const userId = req.user.userId;
  const data = await todoLabel.find({ userId: userId }).exec();
  res.send(JSON.stringify(data));
};
export const createTasksLabel = async (req, res) => {
  const token = req.headers["authorization"];
  const decoded = jwt.verify(token, "tanhkute");
  // Trích xuất userId từ mã token
  req.user = decoded;
  const userId = req.user.userId;
  const newTodomodel = new todoLabel({
    task: req.body.task,
    color: req.body.color,
    userId: userId,
  });
  newTodomodel.save();

  res.send(JSON.stringify(newTodomodel));
};
export const getSingleTasksLabel = async (req, res) => {
  const { id } = req.params;
  const singleTodo = await todoLabel.findById(id);
  res.send(JSON.stringify(singleTodo));
};
export const updateTasksLabel = async (req, res) => {
  const { id } = req.params;
  const updateTodo = await todoLabel.findOneAndUpdate(
    { _id: id },
    { $set: { task: req.body.task, color: req.body.color } }
  );
  res.send(JSON.stringify(updateTodo));
};
export const deleteTasksLabel = async (req, res) => {
  const { id } = req.params;
  const removeTodo = await todoLabel.deleteOne({ _id: id });
  res.send(JSON.stringify(removeTodo));
};
