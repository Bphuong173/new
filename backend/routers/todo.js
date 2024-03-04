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

router.get("/", authenToken, getAllTasks);
router.post("/", authenToken, createTasks);
router.get("/:id", getSingleTasks);
router.put("/:id", updateTasks);
router.delete("/:id", deleteTasks);

export default router;
