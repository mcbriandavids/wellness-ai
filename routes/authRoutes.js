import { router } from "../utils/router.js";
import login from "../controllers/auth/loginController.js";
import getLoginPage from "../controllers/auth/getLoginController.js";
import logout from "../controllers/auth/logoutController.js";
import register from "../controllers/auth/registerController.js";
import getRegisterPage from "../controllers/auth/getRegisterController.js";
import { ensureGuest, ensureAdmin } from "../middleware/authMiddleware.js";
import {
  registerValidation,
  loginValidation,
} from "../middleware/validators.js";

router.get("/login", ensureGuest, getLoginPage);
router.post("/login", ensureGuest, loginValidation, login);
router.get("/logout", logout);

router.get("/register", getRegisterPage);
router.post("/register", ensureGuest, registerValidation, register);

export default router;
