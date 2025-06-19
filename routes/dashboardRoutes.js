import { router } from "../utils/router.js";
import { ensureAuth, ensureGuest } from "../middleware/authMiddleware.js";
import { getDashboard } from "../controllers/dashboard/getDashboardController.js";

router.get("/dashboard", ensureAuth, getDashboard);

export default router;
// This code sets up a route for the dashboard page, ensuring that only authenticated users can access it.
// The `ensureAuth` middleware checks if the user is authenticated before allowing access to the dashboard.
