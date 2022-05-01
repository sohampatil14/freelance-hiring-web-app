const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
    },

    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [
        Validator.isEmail,
        "Your email is not valid. Please provide valid email",
      ],
    },

    photo: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    title: {
      type: String,
    },

    bio: {
      type: String,
    },

    role: {
      type: String,
      default: "job hunter",
    },

    city: {
      type: String,
    },

    type: {
      type: String,
      enum: {
        values: ["fresher", "intermediate", "professional"],
        message: "Type is either: fresher, intermediate, professional",
      },
    },

    availability: [
      {
        type: String,
        enum: {
          values: ["full time", "part time", "internship"],
          message: "Availability is either: Full Time, Part Time, Internship",
        },
      },
    ],

    preferredLocations: [
      {
        type: String,
      },
    ],

    skills: [
      {
        type: String,
      },
    ],

    certifications: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],

    experience: [
      {
        companyName: {
          type: String,
        },
        jobRole: {
          type: String,
        },
        employmentType: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],

    collections: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Project",
      },
    ],

    protfolioLink: {
      type: String,
    },

    linkedIn: {
      type: String,
    },

    githubLink: {
      type: String,
    },

    password: {
      type: String,
      required: [true, "A user must have a password"],
      minlength: [8, "A password must have atleast 8 character"],
      select: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

userSchema.virtual("projects", {
  ref: "Project",
  foreignField: "user",
  localField: "_id",
});

// Encrypt Password before save
userSchema.pre("save", async function (next) {
  //Only run this function if password is modified
  if (!this.isModified("password")) return next();

  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
