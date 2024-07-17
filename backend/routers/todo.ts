import express from "express";
const router = express.Router();
import {
  createTasks,
  getAllTasks,
  getSingleTasks,
  updateTasks,
  deleteTasks,
} from "../controllers/todo";
import authenToken from "../authen/authen";
import { Validation } from "../valadation/valadation";
import { yupTodoSchema } from "../models/todomodel";
router.get("/", authenToken, getAllTasks);
router.post("/",Validation(yupTodoSchema), authenToken, createTasks);
router.get("/:id",Validation(yupTodoSchema), authenToken, getSingleTasks);
router.put("/:id",Validation(yupTodoSchema), authenToken, updateTasks);
router.delete("/:id", authenToken, deleteTasks);

export default router;



