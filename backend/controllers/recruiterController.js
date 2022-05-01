const cloudinary = require("cloudinary");

const Recruiter = require("../models/recruiterModel");
const catchAsync = require("../utils/catchAsync");
const handlerFactory = require("./handlerFactory");

exports.getAllRecruiter = handlerFactory.getAll(Recruiter);
exports.getRecruiter = handlerFactory.getOne(Recruiter);
exports.getMe = handlerFactory.getMe(Recruiter);

exports.getMyCollections = handlerFactory.getMyCollections(Recruiter);
exports.saveProjectToCollection =
  handlerFactory.saveProjectToCollection(Recruiter);
exports.removeProjectFromCollection =
  handlerFactory.removeProjectFromCollection(Recruiter);

// Update Profile
// Update User Profile ==> /api/v1/recruiter/updateMe
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
  if (req?.body?.photo !== "") {
    // Update new photo
    const file = req.body.photo;

    // TODO: Check if the user has not changes his photo. If yes not perform these steps
    // delete previous image from cloudinary
    if (req.user?.photo?.public_id) {
      cloudinary.v2.uploader.destroy(req.user.photo.public_id);
    }

    // add new image
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: process.env.CLOUDINARY_COMPANY_LOGO,
      width: 150,
      crop: "scale",
    });

    newUserData.photo = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  if (req.body.photo === "") delete newUserData.photo;

  const updatedUser = await Recruiter.findByIdAndUpdate(
    req.user.id,
    newUserData,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: {
      user: updatedUser,
    },
  });
});
