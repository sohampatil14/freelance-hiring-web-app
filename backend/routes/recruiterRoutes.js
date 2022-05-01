const express = require("express");
const authController = require("../controllers/authController");
const recruiterController = require("../controllers/recruiterController");
const handlerFactory = require("../controllers/handlerFactory");
const { protect } = require("../middlewares/auth");
const Recruiter = require("../models/recruiterModel");

const router = express.Router();

router.post("/signup", authController.signupRecruiter);
router.post("/login", authController.loginRecruiter);
router.get("/login", authController.loginRecruiter);
router.get("/logout", handlerFactory.logout);

router.post("/forgotPassword", authController.forgotPasswordRecruiter);
router.patch("/resetPassword/:token", authController.resetPasswordRecruiter);

router.route("/me").get(protect(Recruiter), recruiterController.getMe);
router
  .route("/updateMe")
  .patch(protect(Recruiter), recruiterController.updateMe);

// Collection routes
router.get(
  "/collections",
  protect(Recruiter),
  recruiterController.getMyCollections
);

router.post(
  "/collections/:id",
  protect(Recruiter),
  recruiterController.saveProjectToCollection
);

router.delete(
  "/collections/:id",
  protect(Recruiter),
  recruiterController.removeProjectFromCollection
);

router.route("/").get(recruiterController.getAllRecruiter);
router.route("/:id").get(recruiterController.getRecruiter);

module.exports = router;
