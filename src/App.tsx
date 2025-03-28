import React from "react";
import logo from "./assets/EmbedMetrics.svg";
import { Brain, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
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

        <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-8 px-4">
          EmbedMetrics helps SaaS products unlock intuitive, AI-powered
          insights—right inside their app.
        </p>

        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
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
    </div>
  );
}

export default App;
