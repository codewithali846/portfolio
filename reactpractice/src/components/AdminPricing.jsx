import { useContext, useState } from "react";
import { PricingContext } from "../context/PricingContext";
import toast, { Toaster } from "react-hot-toast";

export default function AdminPricing() {
  const { plans, setPlans, addPlan, updatePlan, deletePlan } = useContext(PricingContext);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "", description: "" });

  const startEdit = (plan) => {
    setEditingId(plan._id);
    setFormData({ name: plan.name, price: plan.price, description: plan.description });
  };

  const saveEdit = async () => {
    await updatePlan(editingId, formData);
    setEditingId(null);
    toast.success("Plan updated successfully!");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      await deletePlan(id);
      toast.success("Plan deleted!");
    }
  };

  const handleAdd = async () => {
    if (!formData.name || !formData.price) return toast.error("Name and Price required!");
    await addPlan(formData);
    setFormData({ name: "", price: "", description: "" });
    toast.success("Plan added successfully!");
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg w-full text-white">
      <Toaster position="top-right" />
      <h2 className="text-2xl font-bold mb-4">Manage Pricing Plans</h2>

      {/* Add new plan */}
      <div className="mb-6 flex flex-col gap-2 w-full">
        <input
          className="p-1 rounded text-black w-full"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="p-1 rounded text-black w-full"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <textarea
          className="p-1 rounded text-black w-full"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <button onClick={handleAdd} className="bg-green-500 px-3 py-1 rounded mt-1 w-full">
          Add Plan
        </button>
      </div>

      {plans.map(plan => (
        <div key={plan._id} className="border-b border-gray-700 py-3 flex justify-between items-center">
          {editingId === plan._id ? (
            <div className="flex flex-col gap-2 w-full">
              <input
                className="p-1 rounded text-black w-full"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="p-1 rounded text-black w-full"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <textarea
                className="p-1 rounded text-black w-full"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <div className="flex gap-2 mt-1">
                <button onClick={saveEdit} className="bg-green-500 px-3 py-1 rounded">Save</button>
                <button onClick={() => setEditingId(null)} className="bg-gray-500 px-3 py-1 rounded">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="font-semibold">{plan.name}</p>
                <p>{plan.price}</p>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => startEdit(plan)} className="bg-blue-500 px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(plan._id)} className="bg-red-500 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
