/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Link } from "react-router-dom";
import { blogMeta } from "./blogMeta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaIndexHead from "../../components/BlogMetaIndexHead";
import ContentContainer from "../../components/ContentContainer";

export default function BlogIndexPage() {
  // Format date as 'Month Day, Year' with UTC handling
  const formatDate = (dateString: string) => {
    return new Date(dateString + "T00:00:00.000Z").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <>
      <BlogMetaIndexHead />
      <Header />
      <ContentContainer>
        <main className="max-w-4xl mx-auto px-4 py-16">
          {/* Page Header */}
          <header className="mb-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Insights from the Team Behind EmbedMetrics
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We're sharing the journey of building AI-native, developer-first
              embedded analytics — and everything we're learning along the way.
            </p>
          </header>

          {/* Section Label */}
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 text-center">
            Latest Posts
          </p>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogMeta.map((post) => (
              <article
                key={post.slug}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition transform max-w-md w-full"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-indigo-600 hover:underline mb-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                      {post.excerpt}
                    </p>
                    <p className="text-sm text-gray-400">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </ContentContainer>
      <Footer />
    </>
  );
}
