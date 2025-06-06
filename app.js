const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan"); // ✅ Import logger
const path = require("path");
const db = require("./config/db"); // ✅ Import database configuration
const { logger } = require("./utils/logger"); // ✅ Import logger utility
const { SERVER_PORT } = require("./config/dotenvconfig"); // ✅ Import server port from config

db();

const app = express();

// ✅ Use morgan for logging HTTP requests
app.use(
  morgan("dev", {
    stream: {
      write: (message) => logger.info(message.trim()), // Log HTTP requests using the custom logger
    },
  })
);

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Routes
// const indexRoutes = require("./routes/index");
// const authRoutes = require("./routes/auth");
// const tipsRoutes = require("./routes/tips");

// app.use("/", indexRoutes);
// app.use("/", authRoutes);
// app.use("/tips", tipsRoutes);

// Server

// Start the server
app.listen(SERVER_PORT, () => {
  logger.info(` 🏩 🍀 🌿  Server is running on port ${SERVER_PORT} 😇 😇 🌿🌿`);
});
