import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  // ✅ Fetch from backend when app loads
  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/pricing`); // apni API ka URL
      setPlans(res.data);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    }
  };

  const updatePlan = async (id, updatedPlan) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/pricing/${id}`, updatedPlan);
      // ✅ DB se update hone ke baad state update karo
      setPlans(plans.map(plan => (plan._id === id ? res.data : plan)));
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const addPlan = async (plan) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/pricing`, plan);
      setPlans([...plans, res.data]);
    } catch (err) {
      console.error("Add failed:", err);
    }
  };

  const deletePlan = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/pricing/${id}`);
      setPlans(plans.filter(plan => plan._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <PricingContext.Provider value={{ plans, updatePlan, addPlan, deletePlan }}>
      {children}
    </PricingContext.Provider>
  );
};
