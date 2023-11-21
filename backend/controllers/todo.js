import { todo } from "../models/todomodel.js";
import { todoLabel } from "../models/todolabelmodel.js";
export const getAllTasks = async (req, res) => {
  const data = await todo.find({}).exec();
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
  res.send(JSON.stringify(newData));
};
export const createTasks = async (req, res) => {
  const newTodomodel = new todo({
    task: req.body.task,
    labelId: req.body.labelId,
    time: req.body.time,
    clockCompleted: req.body.clockCompleted,
    countdownActive: false,
    remainingTime: req.body.remainingTime || req.body.time,
  });
  newTodomodel.save();

  res.send(JSON.stringify(newTodomodel));
};
export const getSingleTasks = async (req, res) => {
  const { id } = req.params;
  const singleTodo = await todo.findById(id);
  res.send(JSON.stringify(singleTodo));
};
export const updateTasks = async (req, res) => {
  const { id } = req.params;
  const updateTodo = await todo.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        task: req.body.task,
        labelId: req.body.labelId,
        time: req.body.time,
        clockCompleted: req.body.clockCompleted,
        remainingTime: req.body.remainingTime || req.body.time,
      },
    }
  );
  res.send(JSON.stringify(updateTodo));
};
export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  const removeTodo = await todo.deleteOne({ _id: id });
  res.send(JSON.stringify(removeTodo));
};
