import { router } from "../utils/router.js";
import { ensureAuth } from "../middleware/authMiddleware.js";
import generateTip from "../controllers/tip/generateTipController.js";
import getTipsForm from "../controllers/tip/getTipControllerForm.js";
import { createNewTip } from "../controllers/tip/createNewTip.js";
import { tipValidation, aiTipValidation } from "../middleware/validators.js";

// Traditional tip creation
router.get("/", ensureAuth, getTipsForm);
router.get("/tip", ensureAuth, getTipsForm);

router.post("/", ensureAuth, tipValidation, createNewTip);

// AI-generated tip
router.post("/tip", ensureAuth, aiTipValidation, generateTip);
router.post("/generate", ensureAuth, aiTipValidation, generateTip);

// AI-generated tip form
router.get("/form", ensureAuth, (req, res) => {
  res.render("tips/form");
});

export default router;
