const AppError = require("../utils/appError");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    let error = { ...err };
    error.message = err.message;

    // Wrong mongoose objectID error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new AppError(message, 400);
    }

    // Handling mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new AppError(message, 400);
    }

    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      error = new AppError(message, 400);
    }

    if (err.name === "JsonWebTokenError") {
      new AppError("Invalid token. Please Login again!", 401);
    }
    if (err.name === "TokenExpiredError") {
      new AppError("The token is expired. Please Login again!", 401);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
