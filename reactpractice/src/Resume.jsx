import { useState } from "react";
import { motion } from "framer-motion";

// ✅ SkillBar Component
const SkillBar = ({ name, value }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-white">{name}</span>
      <span className="text-sm font-medium text-blue-400">{value}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-blue-500 to-blue-300 h-3 rounded-full"
      />
    </div>
  </div>
);

// ✅ Skills Data (Only Required Skills)
const skills = {
  frontend: [
    { name: "HTML", value: 70 },
    { name: "CSS", value: 75 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 70 },
    { name: "Next.js", value: 60 },
  ],
  backend: [
    { name: "MongoDB", value: 90 },
    { name: "Express", value: 60 },
  ],
};

// ✅ Professional Skills Section
const ProfessionalSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
      {/* Frontend Skills */}
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
          Frontend Skills
        </h2>
        {skills.frontend.map((skill, index) => (
          <SkillBar key={index} name={skill.name} value={skill.value} />
        ))}
      </div>

      {/* Backend Skills */}
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
          Backend Skills
        </h2>
        {skills.backend.map((skill, index) => (
          <SkillBar key={index} name={skill.name} value={skill.value} />
        ))}
      </div>
    </div>
  );
};

// ✅ Placeholder Timeline Component
const Timeline = () => (
  <div className="text-white text-center p-10">
    <p className="text-lg">Timeline content coming soon...</p>
  </div>
);

// ✅ Main Resume Component
const Resume = () => {
  const [activeTab, setActiveTab] = useState("professional skills");

  const tabs = ["professional skills"]; // ✅ sirf skills tab rakha
  const label = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const content = {
    "professional skills": <ProfessionalSkills />,
  };

  return (
    <div className="bg-black min-h-screen py-24 px-4">
      {/* Heading */}
      <h1 className="text-white text-center tracking-wide text-base">
        7+ Years of Experience
      </h1>
      <h1 className="text-4xl md:text-6xl bg-gradient-to-br from-blue-800 to-blue-200 text-transparent bg-clip-text font-bold text-center mt-2">
        My Resume
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-800 to-blue-400 text-white shadow-lg"
                : "text-white hover:bg-blue-600"
            }`}
          >
            {label(tab)}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex justify-center"
      >
        {content[activeTab]}
      </motion.div>
    </div>
  );
};

export default Resume;
