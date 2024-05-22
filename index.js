const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("The connection with mongoDB is successful");
  })
  .catch(() => {
    console.log("The connection with mongoDB is not successful");
  });

app.get("/", (req, res) => {
  res.send("Hello World! jsjhsEverybody this me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
