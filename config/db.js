const mongoose = require("mongoose");
const { logger } = require("../utils/logger");
const config = require("../config/dotenvconfig");

const db = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    logger.info("✅ MongoDB connected successfully"); // Log the successful connection
  } catch (error) {
    logger.info("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
module.exports = db;
