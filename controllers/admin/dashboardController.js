import User from "../../models/User.js";
import Tip from "../../models/Tip.js";

const adminDashboard = async (req, res) => {
  const userCount = await User.countDocuments();
  const tipCount = await Tip.countDocuments();
  const users = await User.find().sort({ created_at: -1 }).limit(5);
  const tips = await Tip.find().sort({ created_at: -1 }).limit(5);
  res.render("admin/dashboard", {
    user: req.session.user,
    userCount,
    tipCount,
    users,
    tips,
  });
};

export default adminDashboard;
