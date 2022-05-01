const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

process.on("uncaughtException", (err) => {
  console.log("Unhandled Exception 💥 Shutting Down");
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

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

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(process.env.NODE_ENV);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`App is running of port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection 💥 Shutting Down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM recievd. Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated!");
  });
});

// Requiring socket.io which returns a function which needs to be called with the server parameter
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket");

  socket.on("setup", (userData) => {
    socket.join(userData.id);
    socket.emit("connected");
  });

  socket.on("join room", (user) => {
    socket.join(user.id);
  });

  socket.on("send notification", (obj) => {
    socket.in(obj.jobHunterId).emit("recieve", {
      ...obj,
      content: `A recruiter viewed your ${obj.action}`,
    });
  });
});
