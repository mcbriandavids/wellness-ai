require("dotenv").config();

const config = {
  SERVER_PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/wellness-ai",
  MONGODBURI: process.env.MONGODBURI,
  APP_NAME: process.env.APP_NAME || "Wellness AI",
  APP_VERSION: process.env.APP_VERSION || "1.0.0",
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "my_openai_api_key",
  OPENAI_API_BASE: process.env.OPENAI_API_BASE || "https://api.openai.com/v1",
};
module.exports = config;
