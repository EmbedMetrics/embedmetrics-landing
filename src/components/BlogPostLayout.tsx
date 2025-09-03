/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShareLinks from "./ShareLinks";
import { useAnalytics } from "../hooks/useAnalytics";
import { Author } from "../pages/blog/blogMeta";

type Props = {
  children: React.ReactNode;
  date: string;
  readTime: number;
  author: Author;
  image?: string;
  imageAlt?: string;
  slug?: string;
  postTitle?: string;
};

export default function BlogPostLayout({
  children,
  date,
  readTime,
  author,
  image,
  imageAlt,
  slug,
  postTitle,
}: Props) {
  const { trackCTAClick } = useAnalytics();
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://embedmetrics.com/blog";
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Author Info */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 mb-8 lg:mb-0"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sticky top-24 mt-113">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {author.name}
                  </p>
                  <p className="text-gray-500 text-xs">{author.role}</p>
                </div>
              </div>
              <div className="w-12 h-1 bg-indigo-500/70 rounded mb-4" />
              <div className="text-sm text-gray-500">
                <p>{date}</p>
                <p>{readTime} min read</p>
              </div>
            </div>
          </motion.aside>

          {/* Right Column - Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 max-w-4xl"
          >
            {/* Back to Blog Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 transition-colors group"
                onClick={() =>
                  trackCTAClick("blog-post", "Back to Blog", {
                    is_navigation: true,
                  })
                }
              >
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                Back to Blog
              </Link>
            </motion.div>

            {/* Featured Image */}
            {image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={imageAlt || "Blog post image"}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover max-h-96"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.div>
            )}

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-10"
            >
              <div className="prose prose-indigo prose-lg max-w-none [&>img]:rounded-xl [&>img]:ring-1 [&>img]:ring-black/5 [&>img]:shadow-sm [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mb-3 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:text-gray-700 [&>ol]:text-gray-700 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-indigo-200 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>code]:bg-gray-50 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>pre]:bg-gray-50 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:ring-1 [&>pre]:ring-black/5 [&>pre]:overflow-x-auto">
                {children}
              </div>
            </motion.div>

            {/* Share Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <ShareLinks
                url={
                  typeof window !== "undefined"
                    ? window.location.href
                    : "https://embedmetrics.com"
                }
                slug={slug}
                postTitle={postTitle}
              />
            </motion.div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
