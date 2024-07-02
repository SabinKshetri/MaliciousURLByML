const {
    registerUser,
    loginUser,
    
    forgotPassword,
    verifyOTP,
    changepassword,
  } = require("../controller/authController");
  const { isAuthenticated } = require("../middleware/middleware");
  const catchError = require("../services/catchError");
  
  const router = require("express").Router();
  
  router.route("/api/auth/signup/").post(catchError(registerUser));
  router.route("/api/auth/login").post(catchError(loginUser));

 
  router.route("/auth/forgotpassword").post(catchError(forgotPassword));
  router.route("/auth/verifyotp/:id").post(catchError(verifyOTP));
  router.route("/auth/changepassword/:id").post(catchError(changepassword));
  
  module.exports = router;