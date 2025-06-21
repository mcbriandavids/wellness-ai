export function ensureAdmin(req, res, next) {
  if (req.session.user && req.session.user.isAdmin) {
    return next();
  }
  return res.status(403).render("admin/forbidden", { user: req.session.user });
}
