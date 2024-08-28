import multer from "multer";
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".png");
    },
});
export const upload = multer({ storage: storage });
