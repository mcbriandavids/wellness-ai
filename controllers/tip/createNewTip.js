import Tip from "../../models/Tip.js";
import { validationResult } from "express-validator";

export const createNewTip = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("tips/tip", {
      error: errors.array()[0].msg,
      oldInput: req.body,
    });
  }
  try {
    const tip = new Tip({
      user: req.session.userId,
      content: req.body.content,
      // Add mood, goal, etc. if present in your form and model
    });
    await tip.save();
    res.redirect("/dashboard");
  } catch (err) {
    res.render("tips/tip", {
      error: "Failed to save tip.",
      oldInput: req.body,
    });
  }
};
