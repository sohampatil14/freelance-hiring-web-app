const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { decode } = require("punycode");

exports.protect = (Model) =>
  catchAsync(async (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return next(
        new AppError("You are not logged in. Please login to get access!", 401)
      );
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    const currentUser = await Model.findById(decoded.id);
    if (!currentUser)
      return next(
        new AppError("The user belonging to the token does not exist", 401)
      );

    //Grant access to protected route
    req.user = currentUser;
    next();
  });
