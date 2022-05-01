const cloudinary = require("cloudinary");
const Project = require("../models/projectModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const handlerFactory = require("./handlerFactory");

exports.getAllProjects = handlerFactory.getAll(Project);
exports.getProject = handlerFactory.getOne(Project, {
  path: "user",
  select: "name photo title",
});

exports.getMyProjects = catchAsync(async (req, res, next) => {
  const id = req.user._id;

  const projects = await Project.find({ user: id });

  res.status(201).json({
    status: "success",
    data: {
      data: projects,
    },
  });
});

exports.addProject = catchAsync(async (req, res, next) => {
  const file = req?.files?.photo;

  console.log(req);

  if (!file) {
    return next(new AppError("Project must have an image"));
  }

  const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: process.env.CLOUDINARY_USER_PROJECTS,
    width: 150,
    crop: "scale",
  });

  const photo = {
    public_id: result.public_id,
    url: result.secure_url,
  };

  req.body.photo = photo;
  req.body.user = req.user.id;

  const project = await Project.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: project,
    },
  });
});

exports.addMultipleProjects = catchAsync(async (req, res, next) => {
  if (!req.body.projects) return;

  const projects = req.body.projects;

  for (let i = 0; i < projects.length; i++) {
    const projectImage = projects[i].photo;
    const result = await cloudinary.v2.uploader.upload(projectImage, {
      folder: process.env.CLOUDINARY_USER_PROJECTS,
    });

    projects[i].user = req.user.id;
    projects[i].photo = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  await Project.insertMany(projects);

  res.status(201).json({
    success: "true",
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  // 1. Check if the projects exits
  const project = await Project.findById(req.params.id);

  if (!project) return next(new AppError("Project not found", 404));

  // Only the projects belonging to the user can be updated
  if (req.user.id !== project.user.toString()) {
    return next(new AppError("User not authorized", 404));
  }

  const newProjectData = req.body;

  // User Profile Photo
  if (req?.body?.photo !== "" && req?.body?.photo !== undefined) {
    // Update new photo
    const file = req.body.photo;

    // TODO: Check if the user has not changes his photo. If yes not perform these steps
    // delete previous image from cloudinary
    if (project?.photo?.public_id) {
      cloudinary.v2.uploader.destroy(project.photo.public_id);
    }

    // add new image
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: process.env.CLOUDINARY_USER_PROJECTS,
      width: 150,
      crop: "scale",
    });

    newProjectData.photo = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  if (req.body.photo === "") delete newProjectData.photo;

  // 3.Update the project
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    newProjectData,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: {
      project: updatedProject,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  // 1. Check if the projects exits
  const project = await Project.findById(req.params.id);

  if (!project) return next(new AppError("Project not found", 404));

  // 2. Delete photos from cloudinary
  cloudinary.v2.uploader.destroy(project.photo.public_id);

  // 3. Delete Project
  await Project.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
  });
});
