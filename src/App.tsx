import React from "react";
import logo from "./assets/EmbedMetrics.svg";
import { Brain, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setIsSubmitted(true);

        // Start fade out
        setTimeout(() => setFadeOut(true), 2500);

        // Close modal after fade
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
          setShowModal(false);
        }, 3000);
      })
      .catch(() => {
        alert("Oops! Something went wrong.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-gradient-to-b from-white to-indigo-50 text-gray-800">
      <motion.div
        className="flex flex-col items-center justify-center flex-grow py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={logo} alt="EmbedMetrics Logo" className="w-20 h-20 mb-6" />

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 max-w-2xl">
          Ask Your Data Anything.
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-2 px-4">
          Deliver AI-powered insights — right inside your app.
        </p>

        <p className="text-sm text-gray-500 mb-8 px-4">
          Embeddable analytics made for modern product teams.
        </p>

        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
          >
            Get Early Access
          </motion.button>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <div className="w-full max-w-6xl py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              Icon: Brain,
              title: "Ask in Plain English",
              desc: "Type a question like “What were our top products last month?”",
            },
            {
              Icon: BarChart3,
              title: "Get Instant Insights",
              desc: "See AI-generated answers in charts, summaries, or tables.",
            },
            {
              Icon: Globe,
              title: "Embed Anywhere",
              desc: "Drop the widget into your app with one line of code.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-sm text-gray-400 mt-12 px-4">
        © {new Date().getFullYear()} EmbedMetrics. All rights reserved. |
        hello@embedmetrics.com
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Get Early Access
            </h2>
            {isSubmitted ? (
              <p
                className={`text-gray-700 font-medium text-center transition-opacity duration-500 ${
                  fadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                Thanks! You’re on the list. 🎉
              </p>
            ) : (
              <form
                name="early-access"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="form-name" value="early-access" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  autoFocus
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input type="text" name="bot-field" className="hidden" />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
