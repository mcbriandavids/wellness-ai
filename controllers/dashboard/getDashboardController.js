import User from "../../models/User.js";
import Tip from "../../models/Tip.js";
import logger from "../../utils/logger.js";

const getDashboard = async (req, res) => {
  try {
    const user =
      req.session.user || (await User.findById(req.session.userId).lean());

    if (!user) {
      logger.warn("User not found in session or DB");
      return res.redirect("/login");
    }

    const tips = await Tip.find({ user: user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.render("auth/dashboard", {
      user,
      tips,
    });
  } catch (err) {
    logger.error("Dashboard error:", err);
    res.redirect("/");
  }
};

export { getDashboard };
