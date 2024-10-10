import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRout from "./route/book.rout.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect("mongodb://localhost:27017/bookstor");

  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

app.use("/", bookRout);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
