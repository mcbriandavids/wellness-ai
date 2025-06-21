import { router } from "../utils/router.js";
import { ensureAuth } from "../middleware/authMiddleware.js";
import { ensureAdmin } from "../middleware/adminMiddleware.js";
import adminDashboard from "../controllers/admin/dashboardController.js";
import {
  listUsers,
  makeAdmin,
  removeUser,
} from "../controllers/admin/usersController.js";
import { listTips, deleteTip } from "../controllers/admin/tipsController.js";

router.get("/dashboard", ensureAuth, ensureAdmin, adminDashboard);
router.get("/users", ensureAuth, ensureAdmin, listUsers);
router.post("/users/:id/make-admin", ensureAuth, ensureAdmin, makeAdmin);
router.post("/users/:id/delete", ensureAuth, ensureAdmin, removeUser);
router.get("/tips", ensureAuth, ensureAdmin, listTips);
router.post("/tips/:id/delete", ensureAuth, ensureAdmin, deleteTip);

export default router;
