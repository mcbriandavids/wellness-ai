import logger from "../../utils/logger.js";

const getTipsForm = async (req, res) => {
  try {
    // Render a form for users to submit their mood, goal, etc.
    res.render("tips/tip", {
      title: "Get Personalized Wellness Tips",
      error: null,
      formData: {},
    });
    logger.info("Tips form rendered successfully");
  } catch (error) {
    logger.error("Error rendering tips form:", error);
    res.status(500).send("Failed to load tips form.");
  }
};

export default getTipsForm;
