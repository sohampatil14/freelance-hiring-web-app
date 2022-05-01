const crypto = require("crypto");
const catchAsync = require("../utils/catchAsync");
const createSendToken = require("../utils/createSendToken");
const AppError = require("../utils/appError");
const Email = require("../utils/email");
const Project = require("../models/projectModel");
const APIFeatures = require("../utils/apiFeatures");

exports.signup = (Model) =>
  catchAsync(async (req, res, next) => {
    // Check if email exists
    const user = await Model.findOne({ email: req.body.email });

    // If exists sohwq error
    if (user) return next(new AppError(`Email already exists`, 400));

    // Create new user if all valid
    const newUser = await Model.create(req.body);

    // Send welcomming email

    // Create JWT Token and send
    createSendToken(newUser, 201, req, res);
  });

exports.login = (Model) =>
  catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //1) Check if email and password exists
    if (!email || !password) {
      return next(new AppError("Please provide email and password", 400));
    }

    //2) Check if the email exists and password is correct
    const user = await Model.findOne({ email }).select("+password");

    //checks if user exists and if password is correct or not
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    //3) if everything ok, send the token to client
    createSendToken(user, 200, req, res);
  });

exports.logout = catchAsync((req, res, next) => {
  res.cookie("token", "null", {
    expires: new Date(Date.now() - 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
});

exports.forgotPassword = (Model, type) =>
  catchAsync(async (req, res, next) => {
    //Get the posted email
    if (!req.body.email) {
      return next(new AppError("Please provide your email", 400));
    }

    const user = await Model.findOne({ email: req.body.email });

    if (!user) {
      return next(new AppError("The user with email does not exist", 404));
    }

    //Generate the random reset token
    const resetToken = user.createPasswordResetToken();

    //Save the passwordTokens fields in the database
    await user.save({ validateBeforeSave: false });

    // Send it to the user's email

    try {
      let resetURL;
      if (process.env.NODE_ENV === "DEVELOPMENT") {
        resetURL = `http://localhost:3000/${type}/resetPassword/${resetToken}`;
      } else {
        //TODO: add the hosted url
        resetURL = `http://localhost:3000/${type}/resetPassword/${resetToken}`;
      }

      await new Email(user, resetURL).sendResetPassword();

      res.status(200).json({
        status: "success",
        message: "Link sent to email!",
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return next(
        new AppError(
          "There was an error sending the email. Try again later",
          500
        )
      );
    }
  });

exports.resetPassword = (Model) =>
  catchAsync(async (req, res, next) => {
    //1)Get the user from the token passed
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await Model.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    //2)If the token not is not expired and there is a user, set the new password
    if (!user) {
      next(new AppError("Token is invalid or expired"));
    }

    if (!req.body.password) {
      return next(new AppError("Please provide password"));
    }

    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Password changed successfully",
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query, req.body)
      .filter()
      .keyword()
      .search()
      .sort()
      .limitFields()
      .paginate();

    //EXECUTE QUERY
    const doc = await features.query; // on awaiting, the query will be executed and returns all the matched docs
    // Here the query will contain query.sort().select().skip().limit()

    if (!doc) {
      return next(new AppError("Not found"));
    }

    res.status(200).json({
      success: true,
      results: doc.length,
      data: doc,
    });
  });

exports.getMe = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.user.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

//The popOptions is needed as if any fields gets populated and then shows
exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

// Collection controllers
exports.getMyCollections = (Model) =>
  catchAsync(async (req, res, next) => {
    let collections = await Model.findById(req.user.id).populate({
      path: "collections",
    });

    collections = collections.collections;

    res.status(200).json({
      success: true,
      results: collections.length,
      data: {
        collections,
      },
    });
  });

exports.saveProjectToCollection = (Model) =>
  catchAsync(async (req, res, next) => {
    // As collection is an array in user field so we will push to project id in collection array

    // 1. Check if the project is already added in the array
    const projectFound = await Model.findOne({
      _id: req.user.id,
      collections: { $elemMatch: { $eq: req.params.id } },
    });

    if (projectFound) return next(new AppError("Project already added", 404));

    const project =
      (await Project.findById(req.params.id)) &&
      (await Model.findByIdAndUpdate(
        req.user.id,
        {
          $push: { collections: req.params.id },
        },
        {
          new: true,
        }
      ));

    if (!project) return next(new AppError("Project not found", 404));

    res.status(200).json({
      success: true,
      message: "Project added successfully",
    });
  });

exports.removeProjectFromCollection = (Model) =>
  catchAsync(async (req, res, next) => {
    await Model.findByIdAndUpdate(
      req.user.id,
      {
        $pull: { collections: req.params.id },
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Project removed successfully",
    });
  });
