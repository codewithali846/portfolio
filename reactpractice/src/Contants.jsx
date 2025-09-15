import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"; // import toast

export default function Contants() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contact", formData);
      toast.success("Message sent successfully!"); // toast success
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      fetchMessages();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message."); // toast error
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
      toast.error("Failed to fetch messages.");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-4 md:px-24">
      {/* Toast container */}
      <Toaster position="top-right" />

      <h1 className="text-5xl font-extrabold text-blue-400 mb-8 text-center">
        Contact With Me
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <img
            src="myprof.jpg"
            alt="Contact"
            className="rounded-3xl shadow-xl w-64 md:w-full object-cover mb-6 "
          />
          <h2 className="text-2xl font-bold mb-1">Ahsan</h2>
          <p className="text-gray-400 text-center md:text-left">
            I am available for freelance work. Connect with me via the form below.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col w-full md:w-2/3 gap-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md"
            >
              SEND MESSAGE
            </button>
          </form>

          {/* Display fetched messages */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Previous Messages</h2>
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg._id} className="bg-gray-800 p-4 rounded shadow">
                  <p><strong>{msg.name}</strong> ({msg.email})</p>
                  <p className="italic">{msg.subject}</p>
                  <p>{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
