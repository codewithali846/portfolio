import React, { useState } from "react";

export default function Blogs() {
  const posts = [
    {
      id: 1,
      category: "Personal Portfolio Images",
      location: "Canada",
      title: "T-shirt design is the part of design",
      readTime: "2 min read",
      summary: "Short blog about T-shirt design being part of design process.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      content:
        "This blog explains how T-shirt design is an integral part of design and branding.",
    },
    {
      id: 2,
      category: "Personal Portfolio Images",
      location: "Development",
      title: "The services provide for design",
      readTime: "2 hour read",
      summary: "Overview of services provided for design and development.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      content:
        "This blog describes the services provided in modern design and development workflows.",
    },
    {
      id: 3,
      category: "Personal Portfolio Images",
      location: "Application",
      title: "Mobile app landing design & app maintain",
      readTime: "5 min read",
      summary: "About mobile app landing design and its maintenance.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      content:
        "This blog shows how to design mobile app landing pages and maintain them effectively.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24">
      {/* Page Header */}
      <header className="py-10 text-center">
        <p className="mt-2 text-gray-400 text-lg">
          Visit my blog and keep your feedback
        </p>
        <h1 className="text-5xl bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text font-extrabold mt-4">
          My Blog
        </h1>
      </header>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-indigo-600/40 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-40 lg:h-44 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category */}
                <div className="absolute left-3 top-3">
                  <span className="inline-block bg-gray-800/90 text-xs font-medium px-3 py-1 rounded-full shadow text-white">
                    {post.category}
                  </span>
                </div>
                {/* Read Time */}
                <div className="absolute right-3 top-3">
                  <span className="inline-block bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-400">{post.location}</div>
                  <button
                    onClick={() => setActive(post)}
                    className="text-xs underline text-indigo-400 hover:text-indigo-300"
                  >
                    Read
                  </button>
                </div>

                <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:text-indigo-400 transition-colors">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(post);
                    }}
                    className="block"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="text-sm text-gray-400 mb-4">{post.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />

          {/* Modal Box */}
          <div className="relative z-10 max-w-3xl w-full bg-gray-900/90 backdrop-blur-md text-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh] transition-all duration-500">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-400">
                    {active.title}
                  </h3>
                  <div className="text-sm text-gray-400 mt-1">
                    {active.category} • {active.readTime}
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="ml-4 rounded-full p-2 hover:bg-gray-800"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>

              <div className="mt-5 text-gray-300 leading-relaxed">
                <p>{active.content}</p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActive(null)}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
