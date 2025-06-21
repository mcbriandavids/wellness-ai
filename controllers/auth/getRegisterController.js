const getRegister = (req, res) => {
  res.render("auth/register", { error: null, oldInput: {} });
};
export default getRegister;
