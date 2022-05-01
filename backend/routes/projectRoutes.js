const express = require("express");
const { route } = require("express/lib/application");
const authController = require("../controllers/authController");
const projectController = require("../controllers/projectController");
const { protect } = require("../middlewares/auth");
const User = require("../models/userModel");

const router = express.Router();

router
  .route("/")
  .post(projectController.getAllProjects)
  .post(protect(User), projectController.addProject);

router.post(
  "/addMultiple",
  protect(User),
  projectController.addMultipleProjects
);

router.get("/me", protect(User), projectController.getMyProjects);

router
  .route("/:id")
  .get(projectController.getProject)
  .patch(protect(User), projectController.updateProject)
  .delete(protect(User), projectController.deleteProject);

module.exports = router;
