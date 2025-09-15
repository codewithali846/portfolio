import mongoose from "mongoose";

const PricingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  delivery: String,
  revision: String,
  description: String,
  features: [String],
});

export default mongoose.model("Pricing", PricingSchema);
