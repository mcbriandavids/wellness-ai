import Tip from "../models/Tip.js";
import logger from "../utils/logger.js";

export const createNewTip = async (req, res) => {
  try {
    const { mood, goal, activity, duration, intensity } = req.body;

    // Validate input
    if (!mood || !goal || !activity || !duration || !intensity) {
      logger.warn("Incomplete tip data provided");
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new tip
    const newTip = new Tip({
      user: req.session.userId,
      mood,
      goal,
      activity,
      duration,
      intensity,
    });

    await newTip.save();

    logger.info("New tip created successfully");
    res.status(201).json({ message: "Tip created successfully", tip: newTip });
  } catch (error) {
    logger.error("Error creating new tip:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getCreateTipForm = (req, res) => {
  try {
    res.render("tips/createTip", {
      title: "Create a New Wellness Tip",
      error: null,
      formData: {},
    });
    logger.info("Create tip form rendered successfully");
  } catch (error) {
    logger.error("Error rendering create tip form:", error);
    res.status(500).send("Failed to load create tip form.");
  }
};