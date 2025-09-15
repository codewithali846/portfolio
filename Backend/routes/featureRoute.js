import express from "express";
import {
  getFeatures,
  getFeatureById,
  createFeature,
  updateFeature,
  deleteFeature
} from "../controllers/featureController.js";

const router = express.Router();

router.get("/", getFeatures);
router.get("/:id", getFeatureById);
router.post("/", createFeature);
router.put("/:id", updateFeature);
router.delete("/:id", deleteFeature);

export default router;
