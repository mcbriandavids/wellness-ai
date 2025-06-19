import { router } from "../utils/router.js";
import login from "../controllers/auth/loginController.js";
import logout from "../controllers/auth/logoutController.js";
import register from "../controllers/auth/registerController.js";
import getRegisterPage from "../controllers/auth/getRegisterController.js";
import { ensureGuest, ensureAdmin } from "../middleware/authMiddleware.js";

router.get("/login", ensureGuest, login);
router.post("/login", ensureGuest, login);
router.get("/logout", logout);

router.get("/register",  getRegisterPage);
router.post("/register", ensureGuest, register);

export default router;
