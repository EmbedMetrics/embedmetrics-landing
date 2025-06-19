/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import logo from "../assets/EmbedMetrics.svg";
import { Brain, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import { useEarlyAccess } from "../components/EarlyAccessContext";

function LandingPage() {
  const { open } = useEarlyAccess();

  return (
    <>
      <MetaHead />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
        <Header />

        <ContentContainer>
          <section
            role="region"
            aria-labelledby="hero-heading"
            className="flex flex-col items-center justify-center flex-grow py-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <img
                src={logo}
                alt="EmbedMetrics Logo"
                className="w-20 h-20 mb-6"
              />
              <h2
                id="hero-heading"
                className="text-xs tracking-widest text-indigo-600 uppercase mb-2 text-center"
              >
                Smart data assistant for your app
              </h2>
              <h1 className="text-xl sm:text-3xl font-bold leading-snug mb-4 text-gray-900 max-w-3xl text-center">
                AI-native analytics that lives inside your app
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-2 px-4 text-center">
                Built for product teams. Loved by users.
              </p>

              <p className="text-sm text-gray-500 mb-8 px-4 text-center">
                No dashboards. Just answers.
              </p>

              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={open}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Get Early Access
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* How It Works Section */}
          <div className="w-full max-w-6xl py-16 px-4 sm:px-6">
            <h2 className="text-base sm:text-3xl font-semibold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              {[
                {
                  Icon: Globe,
                  title: "Embed Anywhere",
                  desc: "Embed with one line of code.",
                },
                {
                  Icon: Brain,
                  title: "Ask in Plain English",
                  desc: 'Type a question like "What were our top products last month?"',
                },
                {
                  Icon: BarChart3,
                  title: "Get Instant Insights",
                  desc: "EmbedMetrics delivers answers in charts, summaries, or KPIs — powered by your data.",
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
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ContentContainer>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
