import mongoose from "mongoose";
// export const connection = mongoose.createConnection(
//   "mongodb://localhost:27017/todo"
// );
// export const connection = mongoose.createConnection(
//   "mongodb://mongo:27017/todo"
// );
export const connection = mongoose.createConnection(
  "mongodb+srv://doadmin:ldw649N0f8V1m32M@database-674b0ce7.mongo.ondigitalocean.com/admin"
);
connection.on("open", () => {
  console.log("Mongoose connection");
});
connection.on("erro", () => {
  console.log("Mongoose connection error");
});
