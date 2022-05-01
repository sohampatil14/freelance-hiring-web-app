const cloudinary = require("cloudinary");
const Project = require("../models/projectModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const handlerFactory = require("./handlerFactory");

exports.getAllUsers = handlerFactory.getAll(User);
exports.getUser = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);
  // Get Projects
  const projects = await Project.find({ user: req.params.id });
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  doc.projects = projects;

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
exports.getMe = handlerFactory.getMe(User, { path: "projects" });

exports.getMyCollections = handlerFactory.getMyCollections(User);
exports.saveProjectToCollection = handlerFactory.saveProjectToCollection(User);
exports.removeProjectFromCollection =
  handlerFactory.removeProjectFromCollection(User);

// Update Profile
// Update User Profile ==> /api/v1/users/updateMe
exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  if (req.body.role) {
    return next(new AppError("User cannot edit role", 400));
  }

  const newUserData = req.body;
  // User Profile Photo
  if (req?.body?.photo !== "" && req?.body?.photo !== undefined) {
    console.log("Hello");
    // Update new photo
    const file = req.body.photo;
    // TODO: Check if the user has not changes his photo. If yes not perform these steps
    // delete previous image from cloudinary

    // TODO: Change this code for update images
    if (req.user?.photo?.public_id) {
      cloudinary.v2.uploader.destroy(req.user.photo.public_id);
    }

    // add new image
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: process.env.CLOUDINARY_USER_PHOTO,
      width: 150,
      crop: "scale",
    });

    newUserData.photo = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  if (req.body.photo === "") delete newUserData.photo;

  // User Certifications
  // TODO: Multiple images updates
  if (req?.body?.certificates) {
    // console.log(req.body.certificates);
    const certifications = req.body.certificates;

    for (let i = 0; i < certifications.length; i++) {
      const result = await cloudinary.v2.uploader.upload(certifications[i], {
        folder: process.env.CLOUDINARY_USER_CERTIFICATES,
      });

      certifications[i] = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    newUserData.certifications = certifications;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: {
      user: updatedUser,
    },
  });
});
