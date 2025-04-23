import { Link } from "react-router-dom";
import { blogPosts } from "./blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaIndexHead from "../../components/BlogMetaIndexHead";
import ContentContainer from "../../components/ContentContainer";

export default function BlogIndexPage() {
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
              We’re sharing the journey of building AI-native, developer-first
              embedded analytics — and everything we’re learning along the way.
            </p>
          </header>

          {/* Section Label */}
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 text-center">
            Latest Posts
          </p>

          {/* Posts */}
          <div className="flex justify-center md:grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
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
                    <p className="text-sm text-gray-400">{post.date}</p>
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
