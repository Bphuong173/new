import mongoose from "mongoose";
// export const connection = mongoose.createConnection(
//   "mongodb://localhost:27017/todo"
// );
// export const connection = mongoose.createConnection(
//   "mongodb://mongo:27017/todo"
// );
export const connection = mongoose.createConnection(
  "mongodb+srv://doadmin:2wKQ87e013IDPG56@databaseBP-0b3b150e.mongo.ondigitalocean.com/admin?tls=true&authSource=admin"
);
connection.on("open", () => {
  console.log("Mongoose connection");
});
connection.on("erro", () => {
  console.log("Mongoose connection error");
});
