import Contact from "../models/Contact.js";

// Create a new contact message
export const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all contact messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a contact message
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
