import { createContext, useState } from "react";
import axios from "axios";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/contact`);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/contact/${id}`); // ✅ fixed route
      setContacts(contacts.filter(c => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, fetchContacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
