import Pricing from "../models/Pricing.js";

// Get all plans
export const getPricing = async (req, res) => {
  try {
    const plans = await Pricing.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new plan
export const addPricing = async (req, res) => {
  try {
    const plan = new Pricing(req.body);
    await plan.save();
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update plan
export const updatePricing = async (req, res) => {
  try {
    const plan = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete plan
export const deletePricing = async (req, res) => {
  try {
    await Pricing.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
