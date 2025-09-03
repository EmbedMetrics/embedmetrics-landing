import { useParams } from "react-router-dom";
import { blogMeta } from "./blogMeta";
import BlogPostLayout from "../../components/BlogPostLayout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaHead from "../../components/BlogPostMetaHead";
import React, { useRef, useEffect, useState } from "react";
import { BookDemoLink } from "./MDXComponents";
import { useAnalytics } from "../../hooks/useAnalytics";

// Dynamically import all MDX files in this folder
const mdxModules = import.meta.glob("./*.mdx", { eager: true });

// Map slug to component
const slugToComponent: Record<string, React.ComponentType> = {};
Object.entries(mdxModules).forEach(([path, mod]: any) => {
  // Extract slug from filename (with or without date prefix)
  const match = path.match(/\.\/(?:\d{4}-\d{2}-\d{2}-)?(.+)\.mdx$/i);
  if (match) {
    const slug = match[1];
    slugToComponent[slug] = mod.default;
  }
});

export default function BlogPostDynamicPage() {
  const { trackBlogEngagement } = useAnalytics();
  const { slug } = useParams();
  const postMeta = blogMeta.find((m) => m.slug === slug);
  const PostComponent = slug ? slugToComponent[slug] : undefined;
  const contentRef = useRef<HTMLDivElement>(null);
  const [readTime, setReadTime] = useState(1);

  useEffect(() => {
    if (contentRef.current) {
      const text = contentRef.current.textContent || "";
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      setReadTime(Math.max(1, Math.ceil(wordCount / 200)));
    }
  }, [slug]);

  // Track blog post read engagement (gated by time/scroll)
  useEffect(() => {
    if (!postMeta || !slug) return;

    let fired = false;

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 100;
      if (!fired && pct >= 40) {
        trackBlogEngagement("read", slug, {
          post_title: postMeta.title,
          read_time_minutes: readTime,
        });
        fired = true;
        window.removeEventListener("scroll", onScroll);
        clearTimeout(t);
      }
    };

    const t = setTimeout(() => {
      if (!fired) {
        trackBlogEngagement("read", slug, {
          post_title: postMeta.title,
          read_time_minutes: readTime,
        });
        fired = true;
        window.removeEventListener("scroll", onScroll); // optional cleanup
      }
    }, 8000); // 8s on-page

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, [postMeta, slug, trackBlogEngagement, readTime]);

  if (!postMeta || !PostComponent) {
    return (
      <>
        <Header />
        <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 sm:p-10">
              <h1 className="text-2xl font-bold mb-4 text-gray-900">
                Post Not Found
              </h1>
              <p className="text-gray-600">
                Sorry, we couldn't find that blog post.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Format date as 'Month Day, Year'
  const formattedDate = postMeta.date
    ? new Date(postMeta.date + "T00:00:00.000Z").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : postMeta.date;

  return (
    <>
      <BlogMetaHead post={{ ...postMeta, component: PostComponent }} />
      <Header />
      <BlogPostLayout
        date={formattedDate}
        author={postMeta.author}
        image={postMeta.image}
        imageAlt={postMeta.imageAlt}
        readTime={readTime}
        slug={slug}
        postTitle={postMeta.title}
      >
        <div ref={contentRef}>
          {/* @ts-expect-error MDX types do not declare 'components' prop, but it works at runtime */}
          <PostComponent components={{ BookDemoLink }} />
        </div>
      </BlogPostLayout>
      <Footer />
    </>
  );
}
