const { Router } = require("express");

const booksRouter = require("./books-Route");
const usersRouter = require("./users-Route");

const router = Router({ mergeParams: true });

router.use("/books", booksRouter);
router.use("/users", usersRouter);

module.exports = router;