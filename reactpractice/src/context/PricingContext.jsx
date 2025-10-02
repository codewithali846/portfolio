import React, { createContext, useState, useEffect } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/pricing`; // Replace with your live backend URL

  // Fetch all plans
  const fetchPlans = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch plans");
      const data = await res.json();
      setPlans(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  // Add plan
  const addPlan = async (plan) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plan),
      });
      if (!res.ok) throw new Error("Failed to add plan");
      const data = await res.json();
      setPlans(prev => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };

  // Update plan
  const updatePlan = async (id, updatedPlan) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPlan),
      });
      if (!res.ok) throw new Error("Failed to update plan");
      const data = await res.json();
      setPlans(prev => prev.map(plan => (plan._id === id ? data : plan)));
    } catch (err) {
      console.error(err);
    }
  };

  // Delete plan
  const deletePlan = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete plan");
      setPlans(prev => prev.filter(plan => plan._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PricingContext.Provider value={{ plans, addPlan, updatePlan, deletePlan }}>
      {children}
    </PricingContext.Provider>
  );
};
