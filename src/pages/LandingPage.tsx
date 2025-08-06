import React from "react";
import logo from "../assets/EmbedMetrics.svg";
import { Brain, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import Booker from "../components/Booker";

function LandingPage() {
  return (
    <>
      <MetaHead />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
        <Header />

        <ContentContainer>
          {/* Hero Section */}
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
              <h2 className="text-xs tracking-widest text-indigo-600 uppercase mb-2">
                For product teams and SaaS platforms
              </h2>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-5xl font-bold leading-snug mb-4 text-gray-900 max-w-3xl"
              >
                AI-native analytics that lives inside your app
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-2 px-4">
                Drop in a chat widget. Let users ask questions in plain English.
                Get instant answers, not dashboards.
              </p>
              <p className="text-sm text-gray-500 mb-8 px-4">
                Built for product teams. Loved by users.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Booker />
              </motion.div>
            </motion.div>
          </section>

          {/* Problem Framing */}
          <section className="w-full max-w-3xl mx-auto text-center px-6 py-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Dashboards are at a turning point
            </h3>
            <p className="text-gray-600">
              Most users don’t open them. They just want quick answers.
              EmbedMetrics brings answers directly into your app, without the
              need to build or maintain dashboards.
            </p>
          </section>

          {/* How It Works Section */}
          <div className="w-full max-w-6xl py-16 px-4 sm:px-6">
            <h2 className="sm:text-3xl font-semibold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              {[
                {
                  Icon: Globe,
                  title: "Embed Anywhere",
                  desc: "Add a single line of code to bring analytics into your app.",
                },
                {
                  Icon: Brain,
                  title: "Ask in Plain English",
                  desc: "Users ask questions like 'What were our top products last month?'",
                },
                {
                  Icon: BarChart3,
                  title: "Get Instant Insights",
                  desc: "They get answers as charts, KPIs, or summaries. Instantly, from your data.",
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

          {/* Product Preview Screenshot */}
          <section className="w-full max-w-4xl mx-auto text-center px-6 py-12">
            <h2 className="sm:text-3xl font-semibold text-center text-gray-900 mb-12">
              What it looks like
            </h2>
            <p className="text-gray-600 mb-6">
              Ask a plain-English question. Get an instant, visual
              answer—powered by your data.
            </p>
            <img
              src="/assets/chat-screenshot.png"
              alt="EmbedMetrics chat example with bar chart"
              className="rounded-xl shadow-md shadow-indigo-100 border border-indigo-100 mx-auto"
            />
          </section>

          {/* Trust or Quote Section */}
          <section className="w-full max-w-3xl mx-auto text-center px-6 py-12">
            <div className="max-w-md mx-auto mb-4">
              <p className="text-gray-700 italic">
                “We built EmbedMetrics to make analytics feel more like a
                conversation than a dashboard.”
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              – Yuriy Plakosh, Founder
            </p>
          </section>

          <section className="text-center py-10">
            <p className="text-gray-700 text-lg font-medium">
              Ready to give your users answers, not dashboards?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full sm:w-auto"
            >
              <Booker />
            </motion.div>
          </section>
        </ContentContainer>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
