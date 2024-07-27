import express from "express";
const router = express.Router();
import {
  createTasksLabel,
  getAllTasksLabel,
  getSingleTasksLabel,
  updateTasksLabel,
  deleteTasksLabel,
} from "../controllers/todoLabel";
import authenToken from "../authen/authen";
import { Validation } from "../valadation/valadation";
import { yupTodolabelSchema } from "../models/todolabelmodel";

router.get("/", authenToken, getAllTasksLabel);
router.post("/",Validation(yupTodolabelSchema), authenToken, createTasksLabel);
router.get("/:id",Validation(yupTodolabelSchema), authenToken, getSingleTasksLabel);
router.put("/:id",Validation(yupTodolabelSchema), authenToken, updateTasksLabel);
router.delete("/:id",authenToken, deleteTasksLabel);

export default router;


