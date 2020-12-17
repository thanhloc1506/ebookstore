var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "thanhloc0160",
  insecureAuth: true,
  database: "EBOOKSTORE",
});

var results = {};
con.connect( results, function (err) {
  if (err) throw err;
  con.query("SELECT * FROM sach", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    return result
  });
 
});

const books = (results) => {
  return results
}

module.exports = books;