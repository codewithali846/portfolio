import React, { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [plans, setPlans] = useState([
    {
      _id: 1,
      name: "Static",
      price: "$5",
      delivery: "2 Days Delivery",
      revision: "Unlimited Revision",
      description: "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.",
      features: ["1 Page with Elementor", "Design Customization", "Responsive Design", "Content Upload"],
    },
    {
      _id: 2,
      name: "Standard",
      price: "$10",
      delivery: "4 Days Delivery",
      revision: "Unlimited Revision",
      description: "Perfect for multipage Elementor websites with customization and plugins.",
      features: ["Design Customization", "2 Plugins/Extensions", "Multipage Elementor", "Content Upload"],
    },
    {
      _id: 3,
      name: "Premium",
      price: "$15",
      delivery: "7 Days Delivery",
      revision: "Unlimited Revision",
      description: "Advanced package with premium design tools like Figma & XD, plus extra plugins.",
      features: ["Design Figma", "Maintain Design", "Content Upload", "Design With XD", "8 Plugins/Extensions"],
    },
  ]);

  const updatePlan = (id, updatedPlan) => {
    setPlans(plans.map(plan => (plan._id === id ? { ...plan, ...updatedPlan } : plan)));
  };

  const addPlan = (plan) => {
    setPlans([...plans, { ...plan, _id: Date.now() }]);
  };

  const deletePlan = (id) => {
    setPlans(plans.filter(plan => plan._id !== id));
  };

  return (
    <PricingContext.Provider value={{ plans, updatePlan, addPlan, deletePlan }}>
      {children}
    </PricingContext.Provider>
  );
};
