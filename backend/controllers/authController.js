const User = require("../models/userModel");
const Recruiter = require("../models/recruiterModel");
const handlerFactory = require("./handlerFactory");

/***********SIGNUP**********/
// POST -> /api/v1/users/signup
exports.signupUser = handlerFactory.signup(User);
// POST -> /api/v1/recruiter/signup
exports.signupRecruiter = handlerFactory.signup(Recruiter);

/***********LOGIN**********/
// POST -> /api/v1/users/login
exports.loginUser = handlerFactory.login(User);
// POST -> /api/v1/recruiter/login
exports.loginRecruiter = handlerFactory.login(Recruiter);

/***********FORGOT PASSWORD**********/
// POST -> /api/v1/users/forgotPassword
exports.forgotPasswordUser = handlerFactory.forgotPassword(User, "jobHunter");
// POST -> /api/v1/recruiter/forgotPassword
exports.forgotPasswordRecruiter = handlerFactory.forgotPassword(
  Recruiter,
  "recruiter"
);

/***********RESET PASSWORD**********/
// POST -> /api/v1/users/resetPassword
exports.resetPasswordUser = handlerFactory.resetPassword(User);
// POST -> /api/v1/recruiter/resetPassword
exports.resetPasswordRecruiter = handlerFactory.resetPassword(Recruiter);
