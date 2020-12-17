const { Router } = require("express");
const { getAllBooks } = require("../services/books-service");
const booksRouter = Router({ mergeParams: true });

booksRouter.get("/", (req, res) => {
  getAllBooks((error, books) => {
    res.render("home", { books });
  });
});
