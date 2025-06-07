import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan"; // ✅ Import logger
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import db from "./config/db.js"; // ✅ Import database configuration
import logger from "./utils/logger.js"; // ✅ Import logger utility
import config from "./config/dotenvconfig.js"; // ✅ Import server port from config

db();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
app.listen(config.SERVER_PORT, () => {
  logger.info(
    ` 🏩 🍀 🌿  Server is running on port ${config.SERVER_PORT} 😇 😇 🌿🌿`
  );
});
