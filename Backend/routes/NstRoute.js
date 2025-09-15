import express from "express";
import { signup } from "../controllers/NstController.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
