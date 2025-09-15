import { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import { toast, Toaster } from "react-hot-toast"; // import toast

export default function AdminContant() {
  const { contacts, fetchContacts, deleteContact } = useContext(ContactContext);

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteContact(id); // call your existing delete function
      toast.success("Contact deleted successfully!");
      fetchContacts(); // refresh the contacts list
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete contact.");
    }
  };

  return (
    <div className="p-8 py-24">
      {/* Toast container */}
      <Toaster position="top-right" />
      
      <h2 className="text-2xl font-bold mb-6">Admin Contacts Panel</h2>
      <div className="flex flex-col gap-4">
        {contacts.map(c => (
          <div key={c._id} className="bg-gray-900 p-4 rounded shadow flex justify-between items-center">
            <div>
              <p><strong>{c.name}</strong> - {c.subject}</p>
              <p>{c.message}</p>
            </div>
            <button
              onClick={() => handleDelete(c._id)}
              className="bg-red-500 px-3 py-1 rounded text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
