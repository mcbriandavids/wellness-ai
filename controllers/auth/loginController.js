import bcrypt from "bcrypt";
import User from "../../models/User.js";
import logger from "../../utils/logger.js";

const loginController = async (req, res) => {
  const { email, password } = req.body || {};
  try {
    // Ensure req.body exists and has email and password
    if (!email || !password) {
      logger.warn("Email or password not provided");
      return res.render("auth/login", {
        error: "Please provide both email and password",
      });
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user || bcrypt.compareSync(password, user.password) === false) {
      logger.warn("Invalid email or password");
      return res.render("auth/login", {
        error: "Invalid email or password",
      });
    }
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    req.session.userId = user._id; // Ensure userId is set for middleware
    logger.info(`User ${user.email}, ${user.name} logged in successfully`);
    console.log(`User ${user.email}, ${user.name} logged in successfully`);
    res.redirect("/dashboard");
  } catch (error) {
    logger.error("Error finding user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default loginController;
