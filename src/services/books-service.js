var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "thanhloc0160",
  insecureAuth: true,
  database: "EBOOKSTORE",
});

var books = {};
con.connect( books, function (err) {
  if (err) throw err;
  con.query("SELECT * FROM sach", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    // return result
    books = result
  });
 
});


// Cập nhật thông tin giao dịch khi giao dịch trực tuyến gặp sự cố
// Cập nhật thông tin về sách khi sách được xuất kho.
// Cập nhật thông tin về sách khi sách được nhập kho.
const updateBook = () =>{

}

// Lấy tất cả sách
const getallBook = () =>{

}

// Xem tất cả các sách tính theo ISBN được mua trong một ngày.
const findBookByISBN = (ISBN, time = 0) => {

}

// Xem tổng số sách tính theo mỗi ISBN được mua trong một ngày.
const getCountOfBookISBN = (ISBN, type = 0) => {

}

// Xem tổng số sách điện tử được mua trong một ngày.
// Xem tổng số sách điện tử được thuê trong một ngày.
const getCountBoughtEBook = () => {

}

// Xem tổng số sách truyền thống tính theo mỗi ISBN được mua trong một ngày.
const getCountBoughtBook = (ISBN, type = 0) => {

}

// Xem danh sách tác giả có số sách được mua nhiều nhất trong một ngày.
// Xem danh sách tác giả có số sách được mua nhiều nhất trong một tháng.
const getNameOfAuthor = (time) => {

}

// Xem danh sách mua hàng được thanh toán bằng thẻ trong một ngày.
const getListOfPayByCard = (time) => {

}

// Xem danh sách mua hàng được thanh toán bằng thẻ gặp sự cố trong một ngày.
const getListOfProlemPay = () => {

}

// Xem danh sách kho hàng được xuất kho nhiều nhất trong một tháng
const getWareHouse = () => {

}

// const createBook = (inputBook) => {
//     return new Promise((resolve, reject) => {
     
//   };


  const getAllBooks = (callback) => {
    // console.log(books)
    callback(null, books)
  };


module.exports = {
    // createBook,
    getAllBooks
}