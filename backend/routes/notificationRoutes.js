const express = require("express");
const { route } = require("express/lib/application");
const { protect } = require("../middlewares/auth");
const User = require("../models/userModel");
const notificationController = require("../controllers/notificationController");
const router = express.Router();

router.route("/").post(notificationController.addNotification);

router.get("/me", protect(User), notificationController.getMyNotifications);
router.get("/updateReadStatus/:id", notificationController.updateReadStatus);

module.exports = router;
