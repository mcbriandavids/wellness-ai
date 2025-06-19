const ensureAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  res.redirect("/login");
};
const ensureAdmin = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  res.status(403).send("Access denied. Admins only.");
};
const ensureGuest = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return next();
  }
  res.redirect("/dashboard");
};
export { ensureAuth, ensureAdmin, ensureGuest };
// This middleware checks if the user is authenticated, an admin, or a guest.
// It can be used to protect routes and ensure that only authorized users can access certain pages or perform specific actions.
