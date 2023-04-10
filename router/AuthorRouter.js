const express = require("express");
const Author = require("../models/Author");
const AuthorRouter = express.Router();

AuthorRouter.get("/", async (req, res) => {
  let authors = await Author.find({});
  return res.status(200).send({
    success: true,
    authors,
  });
});

AuthorRouter.post("/author", async (req, res) => {
  try {
    const { name, surname, age } = req.body;
    if (!name || !surname || !age) {
      return res.status(400).send({
        success: false,
        message: "Faltan datos por completar",
      });
    }

    let author = new Author({
      name,
      surname,
      age,
    });

    await author.save();
    return res.status(200).send({
      success: true,
      message: "Autor creado correctamente!",
      author,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = AuthorRouter;
