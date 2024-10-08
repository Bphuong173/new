import mongoose from "mongoose";
// export const connection = mongoose.createConnection(
//   "mongodb://localhost:27017/todo"
// );
export const connection = mongoose.createConnection(
  "mongodb://mongo:27017/todo"
);
connection.on("open", () => {
  console.log("Mongoose connection");
});
connection.on("erro", () => {
  console.log("Mongoose connection error");
});
