import logger from "../../utils/logger.js";
const logoutController = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      logger.error("Error destroying session:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.redirect("/");
  });
};

export default logoutController;
