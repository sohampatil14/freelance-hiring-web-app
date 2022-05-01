const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/userModel");
const Recruiter = require("../models/recruiterModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful!"));

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const recruiters = JSON.parse(
  fs.readFileSync(`${__dirname}/recruiters.json`, "utf-8")
);

const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    // await Recruiter.create(recruiters, { validateBeforeSave: false });
    console.log("Added successfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    // await Recruiter.deleteMany();
    console.log("Done deletion");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
