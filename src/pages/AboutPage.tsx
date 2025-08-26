/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap, Shield, Code } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import AboutMetaHead from "../components/AboutMetaHead";
import { BookDemoLink } from "./blog/MDXComponents";

export default function AboutPage() {
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const sections = [
      "what",
      "mission",
      "why-now",
      "different",
      "who",
      "how-it-works",
      "founder",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the middle third of viewport
        threshold: 0.1,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "what", label: "What" },
    { id: "mission", label: "Mission" },
    { id: "why-now", label: "Why Now" },
    { id: "different", label: "Why We're Different" },
    { id: "who", label: "Who" },
    { id: "how-it-works", label: "How" },
    { id: "founder", label: "Founder" },
  ];

  return (
    <>
      <AboutMetaHead />
      <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
        <Header />

        {/* Lightweight Anchor Navigation - Outside overflow-hidden container */}
        <div className="sticky top-20 z-20 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-sm ring-1 ring-black/5 px-6 py-3 mx-auto w-fit">
            <nav
              aria-label="About sections"
              className="flex items-center gap-6 text-sm"
            >
              {navItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={
                      activeSection === item.id ? "true" : undefined
                    }
                    className={`transition-colors ${
                      activeSection === item.id
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-600 hover:text-indigo-600"
                    }`}
                  >
                    {item.label}
                  </a>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-300">•</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        <ContentContainer>
          <main className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative text-center mb-16"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
                About EmbedMetrics
              </h1>
              <div className="em-hairline max-w-4xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10">
                <p className="text-xl font-semibold text-gray-800 mb-6 max-w-[65ch] mx-auto">
                  <strong>
                    We help SaaS companies give users quick answers from data,
                    without needing dashboards or analysts.
                  </strong>
                </p>
                <p className="text-lg text-gray-700 max-w-[65ch] mx-auto">
                  Instead of building complex charts, teams drop our chat widget
                  into their app. Users type a question like{" "}
                  <em className="text-indigo-600">
                    "How many new signups did we get this week?"
                  </em>{" "}
                  and get an instant answer, visualized as a KPI{" "}
                  <strong>right inside your app</strong>.
                </p>
              </div>
            </motion.section>

            <article className="space-y-20">
              {/* What is EmbedMetrics */}
              <motion.section
                id="what"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      What is EmbedMetrics?
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <div className="space-y-6 text-lg text-gray-700">
                    <p className="max-w-[65ch]">
                      EmbedMetrics is an AI-native analytics assistant that
                      replaces static dashboards with in-app, conversational
                      answers. It helps product and data teams deliver real-time
                      insights inside their app, without building reports,
                      charts, or drilldowns manually.
                    </p>

                    <p className="max-w-[65ch]">
                      Instead of asking users to explore dashboards,
                      EmbedMetrics lets them simply ask:
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 ring-1 ring-indigo-100">
                      <div className="space-y-2 text-indigo-800">
                        <p className="italic">
                          "How did signups trend last quarter?"
                        </p>
                        <p className="italic">
                          "Break that down by product tier."
                        </p>
                        <p className="italic">
                          "What changed since last week?"
                        </p>
                      </div>
                    </div>

                    <p className="max-w-[65ch]">
                      Answers appear in context, as structured KPIs, charts, or
                      comparisons. <strong>Instantly.</strong>
                    </p>

                    <p className="max-w-[65ch]">
                      This shortens the time from question to insight, drives
                      user engagement, and removes the need to maintain
                      traditional dashboards.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Our Mission */}
              <motion.section
                id="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10 em-section-wash-a">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Our Mission
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <p className="text-lg text-gray-700 max-w-[65ch]">
                    Our mission is to make data feel like a natural part of
                    every product experience, not a separate tool you have to
                    open or learn.
                  </p>
                </div>
              </motion.section>

              {/* Why Now */}
              <motion.section
                id="why-now"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Why Now?
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <div className="grid gap-6 md:grid-cols-1">
                    {[
                      {
                        title: "Dashboards are at a turning point",
                        desc: "Most users don't open them. They just want quick answers.",
                      },
                      {
                        title: "Users expect answers, not interfaces",
                        desc: "And they prefer natural language.",
                      },
                      {
                        title: "AI-native UX is the new default",
                        desc: "Embedding a smart assistant makes more sense than embedding static charts.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-indigo-50/50 rounded-xl ring-1 ring-indigo-100"
                      >
                        <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </p>
                          <p className="text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* What Makes EmbedMetrics Different */}
              <motion.section
                id="different"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10 em-section-wash-b">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      What Makes EmbedMetrics Different?
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        icon: <Code className="w-6 h-6 text-indigo-600" />,
                        title: "AI-native interface",
                        desc: "Natural language in, visual answers out, without dashboard overhead.",
                      },
                      {
                        icon: <Shield className="w-6 h-6 text-indigo-600" />,
                        title: "Structured processing pipeline",
                        desc: "AI extracts intent, but all queries and visualizations are generated through a secure, rule-based engine. This ensures consistent, transparent outputs that teams can trust.",
                      },
                      {
                        icon: <Target className="w-6 h-6 text-indigo-600" />,
                        title: "Fully embeddable",
                        desc: "Lightweight React widget, customizable themes, JWT support.",
                      },
                      {
                        icon: <Users className="w-6 h-6 text-indigo-600" />,
                        title: "Self-service admin tools",
                        desc: "Easily configure apps, connect data, and manage your models.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-6 bg-white rounded-xl ring-1 ring-black/8 shadow-sm"
                      >
                        <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 max-w-[65ch]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Who We're For */}
              <motion.section
                id="who"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Who We're For
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <div className="grid gap-6 md:grid-cols-1">
                    {[
                      {
                        title: "SaaS platforms",
                        desc: "that want native, insight-driven UX.",
                      },
                      {
                        title: "Enterprise teams",
                        desc: "replacing dashboards with in-context answers.",
                      },
                      {
                        title: "Product and data teams",
                        desc: "who want to reduce friction and shorten the path to insight.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-indigo-50/50 rounded-xl ring-1 ring-indigo-100"
                      >
                        <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            <strong className="text-gray-900">
                              {item.title}
                            </strong>{" "}
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* How It Works */}
              <motion.section
                id="how-it-works"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10 em-section-wash-a">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      How It Works
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <div className="space-y-4">
                    {[
                      "Embed the React chat widget in your app.",
                      "Connect your data.",
                      "Users ask questions in plain English.",
                      "Our backend interprets intent and routes it through a structured engine that generates trusted queries and visual insights.",
                      "Admins manage apps, models, and usage through a self-serve console.",
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl ring-1 ring-black/8 shadow-sm"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 pt-1 max-w-[65ch]">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* From the Founder */}
              <motion.section
                id="founder"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20"
              >
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10 em-section-wash-b">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      From the Founder
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mb-8" />

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src="/assets/yuriy.jpg"
                        alt="Yuriy Plakosh, Founder of EmbedMetrics"
                        width={256}
                        height={256}
                        loading="lazy"
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-sm shadow-indigo-200 ring-2 ring-white"
                      />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p className="text-lg text-gray-700 mb-4 max-w-[65ch]">
                        I'm Yuriy Plakosh, the founder of EmbedMetrics. I've
                        built data platforms for SaaS and enterprise teams. I
                        started this product because I believe analytics should
                        feel like asking a smart teammate, not building a
                        dashboard.
                      </p>
                      <p className="text-gray-600 max-w-[65ch]">
                        This is a founder-led, product-driven effort grounded in
                        real-world experience, not hype.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Try EmbedMetrics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="em-hairline w-full max-w-5xl mx-auto px-6 py-20 text-center"
              >
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-sm ring-1 ring-indigo-100 p-8 sm:p-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Book a Demo
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-indigo-500/70 rounded mx-auto mb-8" />

                  <p className="text-lg text-gray-700 mb-6 max-w-[65ch] mx-auto">
                    Ready to embed AI-native analytics in your app?
                  </p>
                  <div className="bg-white rounded-xl p-6 ring-1 ring-indigo-200 shadow-sm max-w-md mx-auto">
                    <BookDemoLink>
                      <span className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors w-full">
                        Book a Demo
                      </span>
                    </BookDemoLink>
                  </div>
                </div>
              </motion.section>
            </article>
          </main>
        </ContentContainer>
        <Footer />
      </div>
    </>
  );
}
