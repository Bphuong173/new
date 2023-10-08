import express from "express";
const router = express.Router();

import {
  createTasksLabel,
  getAllTasksLabel,
  getSingleTasksLabel,
  updateTasksLabel,
  deleteTasksLabel,
} from "../controllers/todoLabel.js";

router.get("/", getAllTasksLabel);
router.post("/", createTasksLabel);
router.get("/:id", getSingleTasksLabel);
router.put("/:id", updateTasksLabel);
router.delete("/:id", deleteTasksLabel);

export default router;
