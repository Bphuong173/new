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
import { Validation } from "../valadation/valadation.js";
import { yupTodolabelSchema } from "../models/todolabelmodel.js";

router.get("/", authenToken, getAllTasksLabel);
router.post("/", Validation(yupTodolabelSchema), authenToken, createTasksLabel);
router.get(
  "/:id",
  Validation(yupTodolabelSchema),
  authenToken,
  getSingleTasksLabel
);
router.put(
  "/:id",
  Validation(yupTodolabelSchema),
  authenToken,
  updateTasksLabel
);
router.delete(
  "/:id",

  authenToken,
  deleteTasksLabel
);

export default router;
