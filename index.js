import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./Routes/user.route.js";
dotenv.config(); // Configure the dotenv package
const app = express(); // Create an express app
const port = 3000; // Set the port to 3000

mongoose // Connect to the MongoDB database
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("The connection with mongoDB is successful");
  })
  .catch(() => {
    console.log("The connection with mongoDB is not successful");
  });

app.get("/", (req, res) => {
  res.send("Hello World! Everybody this me");
}); // Route for root URL

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); // Listen for incoming requests on the specified port
