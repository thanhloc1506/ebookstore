// const jwt = require("jsonwebtoken")
// const JWT_SECRET = require("../config");
// const userService = require("../services/user-service");

const { nextTick } = require("process")

// const requireUser = (req, res, next) => {
//   const token = req.headers["x-token"];

//   try {
//     const encode = jwt.verify(token, JWT_SECRET);
//     userService.findById(encode._id).then((user) => {
//       req.user = user
//       next()
//     });
//   } catch (error) {
//     console.log(error)
//     res.status(400).json({ message: "Invalid token" });
//   }
// }

const nhanvien = (req, res, next)=>{
  next()
}
module.exports = {
  nhanvien,
}