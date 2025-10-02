import React, { createContext, useState, useEffect } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const initialPlans = [
    {
      _id: 1,
      name: "Static",
      price: "$20.00",
      delivery: "2 Days Delivery",
      revision: "Unlimited Revision",
      description: "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.",
      features: ["1 Page with Elementor", "Design Customization", "Responsive Design", "Content Upload"],
    },
    {
      _id: 2,
      name: "Standard",
      price: "$40.00",
      delivery: "4 Days Delivery",
      revision: "Unlimited Revision",
      description: "Perfect for multipage Elementor websites with customization and plugins.",
      features: ["Design Customization", "2 Plugins/Extensions", "Multipage Elementor", "Content Upload"],
    },
    {
      _id: 3,
      name: "Premium",
      price: "$60.00",
      delivery: "7 Days Delivery",
      revision: "Unlimited Revision",
      description: "Advanced package with premium design tools like Figma & XD, plus extra plugins.",
      features: ["Design Figma", "Maintain Design", "Content Upload", "Design With XD", "8 Plugins/Extensions"],
    },
  ];

  const [plans, setPlans] = useState(() => {
    // Agar localStorage mein data hai, use karo, warna initialPlans
    const storedPlans = localStorage.getItem("plans");
    return storedPlans ? JSON.parse(storedPlans) : initialPlans;
  });

  // localStorage update karna jab plans change ho
  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

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
