import { useContext, useState } from "react";
import { PricingContext } from "../context/PricingContext";
import toast, { Toaster } from "react-hot-toast"; // ✅ Import toast

export default function AdminPricing() {
  const { plans, updatePlan } = useContext(PricingContext);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", description: "" });

  const startEdit = (plan) => {
    setEditingId(plan._id);
    setFormData({ name: plan.name, price: plan.price, description: plan.description });
  };

  const saveEdit = () => {
    updatePlan(editingId, formData);
    setEditingId(null);
    toast.success("Plan updated successfully!"); // ✅ Show success toast
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg w-full text-white">
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Add Toaster */}
      <h2 className="text-2xl font-bold mb-4">Edit Pricing Plans</h2>

      {plans.map(plan => (
        <div key={plan._id} className="border-b border-gray-700 py-3 flex justify-between items-center">
          {editingId === plan._id ? (
            <div className="flex flex-col gap-2">
              <input
                className="p-1 rounded text-black"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="p-1 rounded text-black"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <textarea
                className="p-1 rounded text-black"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <button
                onClick={saveEdit}
                className="bg-green-500 px-3 py-1 rounded mt-1"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <div>
                <p className="font-semibold">{plan.name}</p>
                <p>{plan.price}</p>
              </div>
              <button
                onClick={() => startEdit(plan)}
                className="bg-blue-500 px-3 py-1 rounded"
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
