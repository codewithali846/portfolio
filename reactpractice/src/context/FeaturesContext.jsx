import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const FeaturesContext = createContext();

export const FeaturesProvider = ({ children }) => {
  const API = `${import.meta.env.API_BACKEND}/features`;

 
  const defaultFeatures = [
    {
      _id: "1",
      title: "Business Strategy",
      description:
        "We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
      icon: "FaLightbulb",
    },
    {
      _id: "2",
      title: "App Development",
      description:
        "We’ll handle everything from the app development process until it is time to make your project live.",
      icon: "FaRocket",
    },
    {
      _id: "3",
      title: "Mobile App",
      description:
        "Using our expertise in mobile application development to create beautiful pixel-perfect designs.",
      icon: "FaMobileAlt",
    },
    {
      _id: "4",
      title: "SEO Optimisation",
      description:
        "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!",
      icon: "FaSearch",
    },
    {
      _id: "5",
      title: "UX Consulting",
      description:
        "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically...",
      icon: "FaCogs",
    },
    {
      _id: "6",
      title: "Cloud Integration",
      description:
        "We help you connect your tools and apps with cloud systems to enhance accessibility and speed.",
      icon: "FaCloud",
    },
  ];

  const [features, setFeatures] = useState(defaultFeatures);

  // ✅ Fetch features from backend
  const fetchFeatures = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        // Normalize backend data (add default icon if missing)
        const normalized = data.map((f) => ({
          _id: f._id,
          title: f.title,
          description: f.description,
          icon: f.icon || "FaLightbulb",
        }));

        setFeatures([...defaultFeatures, ...normalized]);
      } else {
        setFeatures(defaultFeatures);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch features");
      setFeatures(defaultFeatures); // fallback
    }
  };

  // ✅ Add feature
  const addFeature = async (feature) => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feature),
      });
      const newFeature = await res.json();

      setFeatures((prev) => [
        ...prev,
        { ...newFeature, icon: newFeature.icon || "FaLightbulb" },
      ]);
      toast.success("Feature added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add feature");
    }
  };

  // ✅ Update feature
  const updateFeature = async (id, updated) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      setFeatures((prev) =>
        prev.map((f) =>
          f._id === id ? { ...f, ...updated, icon: updated.icon || "FaLightbulb" } : f
        )
      );
      toast.success("Feature updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update feature");
    }
  };

  // ✅ Delete feature
  const deleteFeature = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      setFeatures((prev) => prev.filter((f) => f._id !== id));
      toast.error("Feature deleted!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete feature");
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <FeaturesContext.Provider
      value={{ features, addFeature, updateFeature, deleteFeature, fetchFeatures }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};
