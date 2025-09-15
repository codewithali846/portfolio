import { Router } from "express";
import { getUsers, register, login, tokenVerify } from "../controllers/users.js";

const router = Router();

router.get("/get", getUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/verify/token", tokenVerify);

export default router;
