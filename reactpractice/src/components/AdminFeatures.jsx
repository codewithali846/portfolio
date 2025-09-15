import { useContext, useState } from "react";
import { FeaturesContext } from "../context/FeaturesContext";

const AdminFeatures = () => {
  const { features, addFeature, updateFeature, deleteFeature } = useContext(FeaturesContext);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    editingId ? updateFeature(editingId, form) : addFeature(form);
    setForm({ title: "", description: "" });
    setEditingId(null);
  };

  const handleEdit = f => setForm({ title: f.title, description: f.description }) || setEditingId(f._id);

  return (
    <div className="p-8 py-24 flex flex-col items-start gap-6">
      <h2 className="text-2xl font-bold">Admin Features Panel</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md">
        <input className="border p-2" placeholder="Title" value={form.title} onChange={e => setForm({...form, title:e.target.value})} required />
        <textarea className="border p-2" placeholder="Description" value={form.description} onChange={e => setForm({...form, description:e.target.value})} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingId ? "Update" : "Add"}</button>
      </form>

      {/* Feature Cards */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {features.map(f => (
          <div key={f._id} className="flex justify-between items-center border p-3 rounded shadow-sm">
            <div>
              <h3 className="font-bold text-sm">{f.title}</h3>
              <p className="text-xs">{f.description}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => handleEdit(f)} className="bg-yellow-400 px-2 py-1 text-xs rounded">Edit</button>
              <button onClick={() => deleteFeature(f._id)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeatures;
