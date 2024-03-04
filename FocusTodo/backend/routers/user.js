import express from "express";
import multer from "multer";
import { uploadAvatar } from "../controllers/user.js";
const router = express.Router();

import { createUser, getUser } from "../controllers/user.js";
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

const upload = multer({ storage: storage });

router.post("/avatar", upload.single("avatar"), uploadAvatar);
router.post("/register", createUser);
router.post("/login", getUser);

export default router;
