import openai from "../../config/openai.js";
import logger from "../../utils/logger.js";
import { validationResult } from "express-validator";

const generateTip = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("tips/form", {
      error: errors.array()[0].msg,
      oldInput: req.body,
    });
  }
  const { topic } = req.body;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Give me a short and practical wellness tip about: ${topic}. Keep it friendly and actionable.`,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      temperature: 0.7,
    });

    logger.info("Tip generated successfully");

    const tip = response.choices[0].message.content.trim();
    res.render("tips/result", { tip });
  } catch (err) {
    logger.error("Tip generation failed:", err);
    res.render("tips/form", {
      error: "Failed to generate tip. Please try again.",
      oldInput: req.body,
    });
  }
};

export default generateTip;
