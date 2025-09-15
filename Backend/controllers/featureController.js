import Feature from "../models/Feature.js";

// GET all features
export const getFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.json(features);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single feature by ID
export const getFeatureById = async (req, res) => {
  try {
    const feature = await Feature.findById(req.params.id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });
    res.json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE a new feature
export const createFeature = async (req, res) => {
  const { title, description, icon } = req.body;
  try {
    const newFeature = new Feature({ title, description, icon });
    await newFeature.save();
    res.status(201).json(newFeature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a feature
export const updateFeature = async (req, res) => {
  try {
    const updatedFeature = await Feature.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFeature) return res.status(404).json({ message: "Feature not found" });
    res.json(updatedFeature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a feature
export const deleteFeature = async (req, res) => {
  try {
    const deleted = await Feature.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Feature not found" });
    res.json({ message: "Feature deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
