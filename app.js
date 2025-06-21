import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import db from "./config/db.js";
import logger from "./utils/logger.js";
import config from "./config/dotenvconfig.js";
import sessions from "./config/session.js";
import authRoutes from "./routes/authRoutes.js";
import tipsRoutes from "./routes/tipsRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Initialize DB
db();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Logger
app.use(
  morgan("dev", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

// Session Middleware
app.use(sessions);

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Body Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.render("home", { user: req.session.user || null });
});

// Routes
app.use("/", authRoutes);
app.use("/tips", tipsRoutes);
app.use("/", dashboardRoutes);
app.use("/admin", adminRoutes);

// Handle Chrome DevTools well-known request with 204 (No Content)
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.status(204).end(); //No content
});

// Start the server
app.listen(config.SERVER_PORT, () => {
  logger.info(
    ` 🏩 🍀 🌿  Server is running on port ${config.SERVER_PORT} 😇 😇 🌿🌿`
  );
});
