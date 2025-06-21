const getLoginController = (req, res) => {
  res.render("auth/login", { error: null, oldInput: {} });
};

export default getLoginController;
