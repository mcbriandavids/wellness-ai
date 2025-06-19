import { router } from "../utils/router.js";
import { ensureAuth } from "../middleware/authMiddleware.js";
import generateTip from "../controllers/tip/generateTipController.js";
import getTipsForm from "../controllers/tip/getTipControllerForm.js";
import { createNewTip } from "./createNewTip.js";
import openaiDevController from "../controllers/openaiDevController.js";

// Traditional tip creation
router.get("/", ensureAuth, getTipsForm);
router.get("/tip", ensureAuth, getTipsForm);

router.post("/", ensureAuth, createNewTip);

// AI-generated tip
router.post("/tip", ensureAuth, generateTip);
router.post("/generate", ensureAuth, generateTip);

// AI-generated tip form
router.get("/form", ensureAuth, (req, res) => {
  res.render("tips/form");
});

// Development/test route for OpenAI controller
router.post("/devtest", openaiDevController);

export default router;
