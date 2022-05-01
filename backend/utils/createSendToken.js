const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

module.exports = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  //This might not run
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;

  res.cookie("token", token, cookieOption);

  //Remove password from output
  user.password = undefined;

  if (user.role === "job hunter") {
    res.status(statusCode).json({
      status: "success",

      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo.url ? user.photo : null,
        role: user.role,
        token,
      },
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo.url ? user.photo : null,
        role: user.role,
        token,
      },
    });
  }
};
