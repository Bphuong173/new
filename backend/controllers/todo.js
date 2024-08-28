import { todo } from "../models/todomodel.js";
import { todoLabel } from "../models/todolabelmodel.js";
import mongoose, { trusted } from "mongoose";

export const getAllTasks = async (req, res) => {
  const userId = req.user.userId;
  const lastIdTodo = req.query.lastIdTodo || null;
  let query = { userId: userId };
  if (lastIdTodo && mongoose.Types.ObjectId.isValid(lastIdTodo)) {
    try {
      const objectId = new mongoose.Types.ObjectId(lastIdTodo);
      query = { ...query, _id: { $gt: objectId } };
    } catch (error) {
      console.error("Error converting lastIdTodo to ObjectId:", error);
    }
  } else {
    console.error("Invalid lastIdTodo value:", lastIdTodo);
  }
  const data = await todo.find(query).limit(5).exec();

  const newData = [];
  for (const todoItem of data) {
    let dataTodoLabel = null;
    try {
      if (todoItem.labelId) {
        dataTodoLabel = await todoLabel.findById(todoItem.labelId);
        if (!dataTodoLabel) {
          console.error(
            `Label not found for todo with labelId: ${todoItem.labelId}`
          );
          continue;
        }
      } else {
        console.error(
          `LabelId not provided for todo with _id: ${todoItem._id}`
        );
        continue;
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
    const newTodo = {
      ...todoItem._doc,
      label: dataTodoLabel.task,
    };
    newData.push(newTodo);
  }

  res.json(newData);
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
    notes: req.body.notes,
    createTime: new Date(),
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
  console.log("Received update request for task ID:", id);
  console.log("Request body:", req.body);
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
          labelId: req.body.label,
          time: req.body.time,
          clockCompleted: req.body.clockCompleted,
          notes: req.body.notes,
        },
      },
      { new: true }
    );

    console.log("Updated todo:", updateTodo);
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
// test
