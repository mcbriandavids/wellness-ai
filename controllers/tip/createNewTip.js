import Tip from "../../models/Tip.js";

const createNewTip = async (req, res) => {
  try {
    const tip = new Tip({
      user: req.session.userId,
      content: req.body.content,
      // Add mood, goal, etc. if present in your form and model
    });
    await tip.save();
    res.redirect("/dashboard");
  } catch (err) {
    res.render("tips/tip", { error: "Failed to save tip." });
  }
};

export default createNewTip;
