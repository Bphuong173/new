import express from "express";
import authenToken from "../authen/authen.js";
import { uploadAvatar } from "../controllers/user.js";
import { upload } from "../storage/storage.js";
const router = express.Router();
import { createUser, getUser } from "../controllers/user.js";
import { yupRegisterSchema, yupLoginSchema } from "../models/usermodel.js";
import { Validation } from "../valadation/valadation.js";

router.post("/avatar", authenToken, upload.single("avatar"), uploadAvatar);
router.post("/register", Validation(yupRegisterSchema), createUser);
router.post("/login", Validation(yupLoginSchema), getUser);

export default router;
