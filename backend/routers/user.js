import express from "express";
import authenToken from "../authen/authen.js";
import { uploadAvatar } from "../controllers/user.js";
import { upload } from "../storage/storage.js";
const router = express.Router();
import { createUser, getUser } from "../controllers/user.js";

router.post("/avatar", authenToken, upload.single("avatar"), uploadAvatar);
router.post("/register", createUser);
router.post("/login", getUser);

export default router;
