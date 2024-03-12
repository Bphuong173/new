import { todoLabel } from "../models/todolabelmodel.js";

export const getAllTasksLabel = async (req, res) => {
  const userId = req.user.userId;
  const page = parseInt(req.query.page) || 1;
  // console.log(page);
  const limit = parseInt(req.query.limit) || 10;
  // console.log(limit);
  const skip = (page - 1) * limit;
  // console.log(skip);

  const totalRecords = await todoLabel.countDocuments({ userId: userId }); // Tổng số todoLabel

  const totalPages = Math.ceil(totalRecords / limit); // Tổng số trang

  const data = await todoLabel
    .find({ userId: userId })
    .skip(skip)
    .limit(limit)
    .exec();
  const paginationLabel = {
    total_records: totalRecords,
    current_page: page,
    total_pages: totalPages,
    next_page: page < totalPages ? page + 1 : null,
    prev_page: page > 1 ? page - 1 : null,
  };
  const response = {
    data,
    paginationLabel,
  };
  res.json(response);
};
export const createTasksLabel = async (req, res) => {
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
