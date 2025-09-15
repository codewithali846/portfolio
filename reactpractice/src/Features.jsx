import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { FeaturesContext } from "./context/FeaturesContext"; // make sure the path is correct

const Features = () => {
  const { features } = useContext(FeaturesContext);

  return (
    <div className="py-24 px-6 md:px-12 bg-black min-h-screen w-full font-sans">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-blue-300 text-sm tracking-widest uppercase">FEATURES</h3>
        <h2 className="bg-gradient-to-br from-blue-700 to-blue-200 text-transparent bg-clip-text text-4xl sm:text-5xl font-extrabold mt-2">
          What I Do
        </h2>
        <p className="text-gray-400 mt-4">
          I deliver creative solutions tailored to your business needs — from app development to SEO optimization.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((service, id) => (
          <motion.div
            key={service._id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-b from-neutral-900 to-black p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-900/20 mb-6">
              <FaArrowRight className="text-3xl text-blue-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
