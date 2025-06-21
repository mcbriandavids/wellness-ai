import User from "../../models/User.js";

export const listUsers = async (req, res) => {
  const users = await User.find().sort({ created_at: -1 });
  res.render("admin/users", { user: req.session.user, users });
};

export const makeAdmin = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { isAdmin: true });
  res.redirect("/admin/users");
};

export const removeUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/admin/users");
};
