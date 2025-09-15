import { useContext, useState, useEffect } from "react";
import { PricingContext } from "./context/PricingContext";

export default function Pricing() {
  const { plans } = useContext(PricingContext);
  const [activePlan, setActivePlan] = useState(null);

  useEffect(() => {
    if (plans.length > 0) setActivePlan(plans[0]);
  }, [plans]);

  if (!activePlan) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-24 px-6 md:px-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
          Our Pricing Plans
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
          Choose a plan that fits your needs. Our packages are designed for individuals, startups, and professionals.
        </p>
      </div>

      {/* Plan Tabs */}
      <div className="flex justify-center space-x-4 mb-12 flex-wrap">
        {plans.map((plan) => (
          <button
            key={plan._id}
            onClick={() => setActivePlan(plan)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activePlan._id === plan._id
                ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Pricing Card */}
      <div className="flex justify-center">
        <div className="bg-gray-800 rounded-3xl shadow-2xl p-10 max-w-lg w-full transform transition duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">{activePlan.name}</h2>
          <p className="text-gray-400 mb-6">{activePlan.description}</p>

          <div className="text-5xl font-extrabold mb-6">
            {activePlan.price}
          </div>

          <ul className="space-y-3 text-gray-300 mb-8">
            {activePlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✔</span> {feature}
              </li>
            ))}
          </ul>

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4">
            ORDER NOW
          </button>

          <p className="text-gray-400 text-sm text-center">
            {activePlan.delivery} • {activePlan.revision}
          </p>
        </div>
      </div>
    </div>
  );
}
