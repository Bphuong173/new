import express from "express";
const router = express.Router();

import {
  createTasksLabel,
  getAllTasksLabel,
  getSingleTasksLabel,
  updateTasksLabel,
  deleteTasksLabel,
} from "../controllers/todoLabel.js";
import authenToken from "../authen/authen.js";

router.get("/", authenToken, getAllTasksLabel);
router.post("/", authenToken, createTasksLabel);
router.get("/:id", getSingleTasksLabel);
router.put("/:id", updateTasksLabel);
router.delete("/:id", deleteTasksLabel);

export default router;
