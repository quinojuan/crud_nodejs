const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

const URL = process.env.MONGO_DB;

mongoose
  .connect(URL, {})
  .then(() => {
    console.log("DB is now connected");
  })
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
