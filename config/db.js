import mongoose from "mongoose";
import logger from "../utils/logger.js";
import config from "../config/dotenvconfig.js";

const db = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    logger.info("✅ MongoDB connected successfully"); // Log the successful connection
  } catch (error) {
    logger.info("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
export default db;
