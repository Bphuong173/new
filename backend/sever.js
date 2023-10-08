import express from "express";
import bodyParser from "body-parser";
import todo from "./routers/todo.js";
import todoLabel from "./routers/todoLabel.js";
import cors from "cors";
const app = express();
const PORT = 5500;
app.use(cors());
app.use(bodyParser.json());

app.use("/todo", todo);
app.use("/todoLabel", todoLabel);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broken!");
});
app.listen(PORT, () =>
  console.log(`sever listening on port: http://localhost:${PORT}`)
);
