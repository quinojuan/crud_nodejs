const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const AuthorRouter = require("./router/AuthorRouter");

app.use(express.json({ extended: true }));
app.use(express.urlencoded());

//ENRUTADO
app.use("/api", AuthorRouter);

// conexión BBDD
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
