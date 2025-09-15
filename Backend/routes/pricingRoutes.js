import express from "express";
import { getPricing, addPricing, updatePricing, deletePricing } from "../controllers/pricingController.js";

const router = express.Router();

router.get("/", getPricing);
router.post("/", addPricing);
router.put("/:id", updatePricing);
router.delete("/:id", deletePricing);

export default router;
