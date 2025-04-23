import React from "react";
import { Link } from "react-router-dom";
import ShareLinks from "./ShareLinks";

type Props = {
  children: React.ReactNode;
  date: string;
  readTime: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image?: string;
  imageAlt?: string;
};

export default function BlogPostLayout({
  children,
  date,
  readTime,
  author,
  image,
  imageAlt,
}: Props) {
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://embedmetrics.com/blog";
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 text-gray-900">
      <div className="flex flex-col md:flex-row md:items-start md:gap-16">
        {/* Left Column - Author Info */}
        <aside className="md:w-48 mb-8 md:mb-0">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full mb-2"
          />
          <div className="text-sm">
            <p className="font-semibold">{author.name}</p>
            <p className="text-gray-500">{author.role}</p>
            <p className="text-gray-400 mt-2">
              {date} • {readTime} min read
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1">
          {image && (
            <img
              src={image}
              alt={imageAlt || "Blog post image"}
              className="rounded-lg mb-8 w-full object-cover max-h-[400px]"
            />
          )}

          <Link
            to="/blog"
            className="inline-block text-sm text-indigo-600 hover:underline mb-4"
          >
            ← Back to Blog
          </Link>

          <div className="prose prose-indigo prose-lg max-w-none [&>img:first-child]:mb-8">
            {children}
          </div>

          <ShareLinks
            url={
              typeof window !== "undefined"
                ? window.location.href
                : "https://embedmetrics.com"
            }
          />
        </article>
      </div>
    </div>
  );
}
