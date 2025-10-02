import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/pricing`);
      setPlans(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const updatePlan = async (id, updatedPlan) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/pricing/${id}`, updatedPlan);
      setPlans(plans.map(plan => (plan._id === id ? res.data : plan)));
    } catch (err) {
      console.error(err);
    }
  };

  const addPlan = async (plan) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/pricing`, plan);
      setPlans([...plans, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlan = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/pricing/${id}`);
      setPlans(plans.filter(plan => plan._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PricingContext.Provider value={{ plans, setPlans, updatePlan, addPlan, deletePlan, loading }}>
      {children}
    </PricingContext.Provider>
  );
};
