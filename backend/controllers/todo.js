import { todo } from "../models/todomodel.js";
import { todoLabel } from "../models/todolabelmodel.js";

export const getAllTasks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.litmit) || 10;
  const skip = (page - 1) * limit;
  const userId = req.user.userId;
  const totalRecords = await todo.countDocuments({ userId: userId });
  const totalPages = Math.ceil(totalRecords / limit);

  const data = await todo
    .find({ userId: userId })
    .skip(skip)
    .limit(limit)
    .exec();
  const paginationTodo = {
    total_records: totalRecords,
    current_page: page,
    total_pages: totalPages,
    next_page: page < totalPages ? page + 1 : null,
    prev_page: page > 1 ? page - 1 : null,
  };

  const newData = [];
  for (const todo of data) {
    let dataTodoLabel = {};
    try {
      dataTodoLabel = await todoLabel.findById(todo.labelId);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    const newTodo = {
      ...todo._doc,
      label: dataTodoLabel,
    };
    newData.push(newTodo);
  }
  const response = {
    data,
    paginationTodo,
    newData,
  };
  res.json(response);
};
export const createTasks = async (req, res) => {
  const userId = req.user.userId;
  const newTodomodel = new todo({
    task: req.body.task,
    labelId: req.body.labelId,
    time: req.body.time,
    clockCompleted: req.body.clockCompleted,
    countdownTime: req.body.countdownTime,
    userId: userId,
  });
  newTodomodel.save();

  res.send(JSON.stringify(newTodomodel));
};
export const getSingleTasks = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  try {
    const singleTodo = await todo.findById(id, userId);
    if (!singleTodo) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized" });
    }
    res.send(JSON.stringify(singleTodo));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateTasks = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  try {
    const existingTodo = await todo.findOne({ _id: id, userId: userId });
    if (!existingTodo) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized" });
    }

    const updateTodo = await todo.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          task: req.body.task,
          labelId: req.body.labelId,
          time: req.body.time,
          clockCompleted: req.body.clockCompleted,
        },
      }
    );
    res.send(JSON.stringify(updateTodo));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  try {
    const existingTodo = await todo.findOne({ _id: id, userId: userId });
    if (!existingTodo) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized" });
    }

    await todo.deleteOne({ _id: id });
    res.send("Todo deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
