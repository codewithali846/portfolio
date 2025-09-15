import { useState } from "react";

const Cards = [
  {
    id: 1,
    image: "/14e844168469409.Y3JvcCwxNjE2LDEyNjQsMCww.png",
    title: "Frontend Development",
    discription:
      "I design responsive, fast, and accessible web interfaces using React.js, Tailwind CSS, and JavaScript. My frontend work focuses on clean UI, component reusability, and user-first design. Whether you're building a portfolio, SaaS platform, or landing page — I ensure the interface is both beautiful and functional across all devices.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    image: "/download (1).jpeg",
    title: "Backend Development",
    discription:
      "I build secure, high-performance backends using Node.js, Express.js, and MongoDB. From user authentication to complex APIs and database relationships, I develop reliable server-side architectures that scale. Whether it’s a REST API, admin system, or full authentication logic, I ensure clean code and optimal performance for your application’s backend.",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "Mongoose"],
  },
  {
    id: 3,
    image: "/download.jpeg",
    title: "Full Stack Web Apps",
    discription:
      "I deliver complete web applications using the MERN stack. From frontend interfaces to backend APIs and databases, I manage full-stack workflows. I focus on app structure, scalability, and user experience. Ideal for MVPs, SaaS platforms, and dashboards needing strong logic, responsive UI, and efficient server communication — all in one.",
    skills: ["MERN Stack", "CRUD Operations", "MVC Architecture", "Role-based Access", "API Integration"],
  },
  {
    id: 4,
    image: "/images.jpeg",
    title: "Dashboard UI/UX Design",
    discription:
      "I create intuitive dashboards for admin panels, analytics, or SaaS apps. Designs are clean, data-driven, and optimized for usability. Charts, tables, and user controls are logically grouped to ensure users can act fast. Whether you're tracking sales, users, or KPIs, I make data visually accessible and interaction smooth.",
    skills: ["Figma", "Tailwind CSS", "Recharts", "UI/UX Design", "Data Visualization"],
  },
  {
    id: 5,
    image: "/images (2).jpeg",
    title: "API Integration & Automation",
    discription:
      "I integrate third-party APIs like Stripe, OpenAI, and SendGrid, and build custom REST APIs as needed. Automations can include payments, email notifications, or data syncing. Secure, efficient, and well-documented integration ensures your app connects smoothly with external services — saving time, reducing error, and enhancing feature power.",
    skills: ["REST APIs", "Stripe / PayPal", "OpenAI API", "SendGrid", "Cron Jobs"],
  },
  {
    id: 6,
    image: "/images (1).jpeg",
    title: "Deployment & DevOps",
    discription:
      "I handle full deployment pipelines using Vercel, Netlify, or DigitalOcean. From domain setup and SSL to CI/CD workflows, your app goes live fast and securely. I optimize build performance, manage environment variables, and ensure your app is production-ready — stable, fast-loading, and accessible worldwide, across all platforms and devices.",
    skills: ["Vercel / Netlify", "DigitalOcean", "GitHub Actions", "NGINX", "CI/CD", "SSL & Domains"],
  },
];

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="bg-black min-h-screen w-full py-24 px-6">
      <h1 className="text-white text-center text-xl mt-8">
        Visit my portfolio and keep your feedback
      </h1>
      <h1 className="text-5xl font-bold text-center mt-4 bg-gradient-to-br from-blue-900 to-blue-100 text-transparent bg-clip-text">
        MY Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6 place-items-center">
        {Cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="bg-black border border-gray-700 rounded-xl overflow-hidden p-5 max-w-sm shadow-md hover:shadow-blue-600 transition-shadow duration-300 cursor-pointer"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-white text-xl font-semibold mt-4">{card.title}</h2>
            <p className="text-white text-sm mt-2 line-clamp-3">{card.discription}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="hide-scrollbar bg-[#1e1e2f] text-white w-full max-w-4xl rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-red-500"
            >
              &times;
            </button>

            {selectedCard.id === 1 && (
              <div className="p-6 text-center ">
                <img src={selectedCard.image} alt={selectedCard.title} className="w-full max-h-80 object-cover rounded-xl mb-4 " />
                <h2 className="text-3xl font-bold text-blue-400">{selectedCard.title}</h2>
                <p className="mt-4 text-gray-300">{selectedCard.discription}</p>
                <ul className="mt-4 list-disc list-inside text-sm text-blue-200">
                  {selectedCard.skills.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            )}

            {selectedCard.id === 2 && (
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={selectedCard.image} alt={selectedCard.title} className="rounded-xl w-full h-full object-cover" />
                <div>
                  <h2 className="text-3xl font-semibold text-green-400">{selectedCard.title}</h2>
                  <p className="mt-4 text-gray-300">{selectedCard.discription}</p>
                  <ul className="mt-4 list-disc text-sm text-gray-200">
                    {selectedCard.skills.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {selectedCard.id === 3 && (
              <div className="p-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-purple-400">{selectedCard.title}</h2>
                <p className="mt-3 text-gray-300">{selectedCard.discription}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-200">
                  {selectedCard.skills.map((s, i) => (
                    <span key={i} className="bg-gray-800 px-2 py-1 rounded">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {selectedCard.id === 4 && (
              <div className="p-6 bg-gradient-to-br from-purple-900 to-black rounded-xl">
                <h2 className="text-2xl font-bold text-white text-center">{selectedCard.title}</h2>
                <p className="mt-4 text-gray-300 text-center">{selectedCard.discription}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-100">
                  {selectedCard.skills.map((s, i) => (
                    <li key={i} className="bg-purple-800 px-2 py-1 rounded text-center">{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCard.id === 5 && (
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <img src={selectedCard.image} className="w-full md:w-1/2 rounded-xl object-cover" alt={selectedCard.title} />
                <div>
                  <h2 className="text-3xl font-bold text-pink-400">{selectedCard.title}</h2>
                  <p className="mt-2 text-gray-300">{selectedCard.discription}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-200">
                    {selectedCard.skills.map((s, i) => <span key={i} className="bg-gray-700 px-2 py-1 rounded">{s}</span>)}
                  </div>
                </div>
              </div>
            )}

            {selectedCard.id === 6 && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-400 text-center">{selectedCard.title}</h2>
                <img src={selectedCard.image} className="w-full max-h-72 object-cover rounded-xl mt-4" alt={selectedCard.title} />
                <p className="mt-4 text-gray-300 text-center">{selectedCard.discription}</p>
                <ul className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-200">
                  {selectedCard.skills.map((s, i) => <li key={i} className="bg-yellow-700 px-3 py-1 rounded-full">{s}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
