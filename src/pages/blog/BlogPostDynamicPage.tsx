import { useParams } from "react-router-dom";
import { blogMeta } from "./blogMeta";
import BlogPostLayout from "../../components/BlogPostLayout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaHead from "../../components/BlogPostMetaHead";
import ContentContainer from "../../components/ContentContainer";
import React, { useRef, useEffect, useState } from "react";
import { BookDemoLink } from "./MDXComponents";

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

  if (!postMeta || !PostComponent) {
    return (
      <>
        <Header />
        <ContentContainer>
          <div className="py-24 text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600">
              Sorry, we couldn't find that blog post.
            </p>
          </div>
        </ContentContainer>
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
      <ContentContainer>
        <BlogPostLayout
          date={formattedDate}
          author={{
            name: "Yuriy Plakosh",
            avatar: "/assets/yuriy.jpg",
            role: "Founder",
          }}
          image={postMeta.image}
          imageAlt={postMeta.imageAlt}
          readTime={readTime}
        >
          <div ref={contentRef}>
            {/* @ts-expect-error MDX types do not declare 'components' prop, but it works at runtime */}
            <PostComponent components={{ BookDemoLink }} />
          </div>
        </BlogPostLayout>
      </ContentContainer>
      <Footer />
    </>
  );
}
