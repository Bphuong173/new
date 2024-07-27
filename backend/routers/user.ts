import express from "express";
import authenToken from "../authen/authen";
import { uploadAvatar } from "../controllers/user";
import { upload } from "../storage/storage";
const router = express.Router();
import { createUser, getUser, googleLogin } from "../controllers/user";
import { yupRegisterSchema, yupLoginSchema } from "../models/usermodel";
import { Validation } from "../valadation/valadation";

router.post("/avatar", authenToken, upload.single("avatar"), uploadAvatar);
router.post("/register",Validation(yupRegisterSchema), createUser);
router.post("/login",Validation(yupLoginSchema), getUser);
router.post("/google-login", googleLogin);

export default router;
