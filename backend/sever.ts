import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./routers/todo";
import todoLabelRouter from "./routers/todoLabel";
import userRouter from "./routers/user";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/todo", todoRouter);
app.use("/todoLabel", todoLabelRouter);
app.use("/uploads", express.static("uploads"));

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  res.status(500).send("Something broken!");
  res.status;
});
app.listen(PORT, () =>
  console.log(`sever listening on port: http://localhost:${PORT}`)
);
