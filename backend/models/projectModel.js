const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: "String",
    required: [true, "A Project must have a title"],
  },

  description: {
    type: "String",
    required: [true, "A Project must have a description"],
  },

  projectLink: {
    type: "String",
    required: [true, "A Project must have a link"],
  },

  gitHubLink: {
    type: "String",
  },

  tags: [
    {
      type: String,
    },
  ],

  photo: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
