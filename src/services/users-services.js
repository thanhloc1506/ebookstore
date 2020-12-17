
let {User} = require("./userModel")
let bcrypt = require('bcrypt')

// Cập nhật thông tin cá nhân.
const updateAccount = (updateInfo) => {

}

// Cập nhật thông tin thanh toán.
const updatePayment = (updateInfo) => {

}

// Cập nhật giao dịch mua hàng.
const updateTransaction = (updateInfo) => {

}

// Xem danh sách sách theo tác giả.
const findBookByAuthor = (authorName) => {

}

// Xem danh sách sách theo thể loại.
const findBookByType = (typeBook) => {

}

// Xem danh sách sách theo từ khóa.
const findBookByFeild = (Feild) => {

}

// Xem danh sách sách theo năm xuất bản.
const findBookByYear = (Year) => {

}

// Xem danh sách sách mà mình đã mua trong một tháng.
const findBoughtBookOfMonth = () => {

}

// Xem danh sách các giao dịch mà mình đã thực hiện trong một tháng.
const findTransactionOfMonth = () => {

}

// Xem danh sách các giao dịch gặp sự cố mà mình đã thực hiện trong một tháng
const findProblemTransactionOfMonth = () =>{

}

// Xem danh sách các giao dịch mà mình đã thực hiện nhưng chưa hoàn tất.
const findTransactionNotFinish = () => {

}

// Xem danh sách tác giả của cùng một thể loại
const findListOfAuthorByType = () => {

}

// Xem danh sách tác giả của cùng một số từ khóa.
const findListOfAuthorByFeild = () => {

}

// Xem tổng số sách theo từng thể loại mà mình đã mua trong một tháng.
const getCountBoughtBookOfMonth = () => {

}

// Xem các giao dịch vừa có sách truyền thống vừa có sách điện tử được mua hoặc thuê mà mình đã thực hiện trong một tháng
const findTransaction = () => {
    
}



let findUser = async (body) => {
  return await User.findOne({
    where: {
      email: body.email,
    },
  });
}

let register = async (body) => {
  let user = await findUser(body);
  if(user == null){ //Kiểm tra xem email đã được sử dụng chưa
    bcrypt.hash(body.password, 10, async (err, hash) => { //Mã hóa mật khẩu trước khi lưu vào db
      if (err) {return next(err);}
      await User.create({
        username: body.username,
        email: body.email,
        role: "customer",
        password: hash,
      });
    })
    return true;
  }else{
    return false;
  }
}

module.exports = {
  register,
};