const express = require("express");
const Book = require("../models/Book");
const BookRouter = express.Router();

//CREATE BOOK

BookRouter.post("/book", async (req, res) => {
  try {
    const { title, description, authorId } = req.body;
    if (!title || !description || !authorId) {
      return res.status(400).send({
        success: false,
        message: "Faltan datos por completar!",
      });
    }

    let book = await Book({
      title,
      description,
      author: authorId,
    });
    await book.save();
    return res.status(200).send({
      sucess: true,
      message: "Todo marcha bien Milhouse!",
      book,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = BookRouter