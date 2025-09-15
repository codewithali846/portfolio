import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { requireAuth, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);   // sirf ek dafa admin create hoga
router.post("/login", login);
router.post("/logout", logout);

// Example: Protected admin-only route
router.get("/check-auth", requireAuth, requireAdmin, (req, res) => {
  res.json({ message: "You are authorized as Admin" });
});

export default router;
