const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const recruiterSchema = mongoose.Schema({
  name: {
    type: "String",
    required: [true, "A recruiter must have a company name"],
  },
  email: {
    type: "String",
    required: [true, "A recruiter must have a company email"],
  },
  photo: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  website: {
    type: "String",
  },
  description: {
    type: String,
  },
  role: {
    type: String,
    default: "recruiter",
  },
  collections: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Project",
    },
  ],
  password: {
    type: String,
    required: [true, "A recruiter must have a password"],
    minlength: [8, "A password must have atleast 8 character"],
    select: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

// Encrypt Password before save
recruiterSchema.pre("save", async function (next) {
  //Only run this function if password is modified
  if (!this.isModified("password")) return next();

  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

recruiterSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

recruiterSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
module.exports = Recruiter;
