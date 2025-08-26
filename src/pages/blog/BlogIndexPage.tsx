/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { blogMeta } from "./blogMeta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaIndexHead from "../../components/BlogMetaIndexHead";
import ContentContainer from "../../components/ContentContainer";

// Date formatter instance outside component to avoid re-creation
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function BlogIndexPage() {
  const shouldReduce = useReducedMotion();

  // Format date as 'Month Day, Year' with UTC handling
  const formatDate = (dateString: string) => {
    return dateFormatter.format(new Date(dateString + "T00:00:00.000Z"));
  };

  return (
    <>
      <BlogMetaIndexHead />
      <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
        <Header />

        <ContentContainer>
          <main className="max-w-5xl mx-auto px-6 py-20">
            {/* Page Header */}
            <motion.header
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                Insights from the Team Behind EmbedMetrics
              </h1>
              <div className="em-hairline max-w-4xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-black/8 p-8 sm:p-10">
                <p className="text-lg text-gray-700 max-w-[65ch] mx-auto">
                  We're sharing the journey of building AI-native,
                  developer-first embedded analytics — and everything we're
                  learning along the way.
                </p>
              </div>
            </motion.header>

            {/* Section Label */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-12"
            >
              <h2 className="sr-only">Latest Posts</h2>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                Latest Posts
              </p>
            </motion.div>

            {/* Posts Grid */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogMeta.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:ring-black/10"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    aria-label={`Read: ${post.title}`}
                    className="block h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        width={960}
                        height={540}
                        sizes="(min-width:1024px) 320px, (min-width:768px) 45vw, 100vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding="async"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-medium">
                          {formatDate(post.date)}
                        </p>
                        <span className="text-indigo-600 text-sm font-medium group-hover:text-indigo-700 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="em-hairline mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-sm ring-1 ring-indigo-100 p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Want to learn more?
                </h2>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  Explore our product, see how it works, or get in touch to
                  discuss how EmbedMetrics can help your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors ring-1 ring-indigo-200"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </main>
        </ContentContainer>

        <Footer />
      </div>
    </>
  );
}
