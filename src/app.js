const express = require("express");
const exphbs = require("express-handlebars");
// const {nhanvien} = require("./middlewares/auth")
const {
  // createBook,
  getAllBooks,
} = require("./services/books-service");

// const router = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");


app.use(express.json());

// app.use("/api", router);


app.get("/", (req, res) => {
  getAllBooks((error, books) => {
    res.render("home", { books });
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


