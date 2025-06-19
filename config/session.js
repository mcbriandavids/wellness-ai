import session from "express-session";
import MongoStore from "connect-mongo";
import config from "./dotenvconfig.js";

const sessions = session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: config.MONGODB_URI,
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60, // 14 days Time to Live
  }),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days in milliseconds
    secure: config.NODE_ENV === "production", // Use secure cookies in production
    httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
  },
});

export default sessions;
