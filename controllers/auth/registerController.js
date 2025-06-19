import bcrypt from "bcrypt";
import User from "../../models/User.js";
import logger from "../../utils/logger.js";

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    logger.info("Checking if user already exists");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.warn("User already exists with this email");
      return res.status(400).json({ message: "User already exist" });
    }
    // Hash the password and create a new user
    logger.info("Hashing password and creating new user");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    logger.info("User registered successfully");

    // Set session user
    req.session.user = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    };
    // Redirect to Dashboard page
    logger.info("Redirecting to dashboard page");
    res.redirect("/login");
  } catch (error) {
    logger.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default registerController;
