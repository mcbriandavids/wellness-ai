import Tip from "../../models/Tip.js";
import User from "../../models/User.js";

export const listTips = async (req, res) => {
  const tips = await Tip.find().populate("user").sort({ created_at: -1 });
  res.render("admin/tips", { user: req.session.user, tips });
};

export const deleteTip = async (req, res) => {
  await Tip.findByIdAndDelete(req.params.id);
  res.redirect("/admin/tips");
};
