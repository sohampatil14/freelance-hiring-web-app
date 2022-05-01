const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  isRead: {
    type: Boolean,
    default: false,
  },

  content: {
    type: String,
  },
});

const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;
