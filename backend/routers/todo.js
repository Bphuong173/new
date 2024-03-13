import express from "express";
const router = express.Router();
import {
  createTasks,
  getAllTasks,
  getSingleTasks,
  updateTasks,
  deleteTasks,
} from "../controllers/todo.js";
import authenToken from "../authen/authen.js";
import { Validation } from "../valadation/valadation.js";
import { yupTodoSchema } from "../models/todomodel.js";
router.get("/", authenToken, getAllTasks);
router.post("/", Validation(yupTodoSchema), authenToken, createTasks);
router.get("/:id", Validation(yupTodoSchema), authenToken, getSingleTasks);
router.put("/:id", Validation(yupTodoSchema), authenToken, updateTasks);
router.delete("/:id", Validation(yupTodoSchema), authenToken, deleteTasks);

export default router;
