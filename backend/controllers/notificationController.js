const Notification = require("../models/notificationModal");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addNotification = catchAsync(async (req, res, next) => {
  const doc = await Notification.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getMyNotifications = catchAsync(async (req, res, next) => {
  const user = req.user._id;

  const doc = await Notification.find({ user });

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.updateReadStatus = catchAsync(async (req, res, next) => {
  const doc = await Notification.findByIdAndUpdate(
    req.params.id,
    {
      isRead: true,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
