import BlogPostLayout from "../../components/BlogPostLayout";
import { blogPosts } from "./blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaHead from "../../components/BlogPostMetaHead";

import rawContent from "./2024-04-22-why-embedmetrics.mdx?raw";
import ContentContainer from "../../components/ContentContainer";

const post = blogPosts.find((p) => p.slug === "why-embedmetrics");
const wordCount = rawContent.split(/\s+/).length;
const readTime = Math.max(1, Math.ceil(wordCount / 200));

export default function WhyEmbedMetricsPage() {
  return (
    <>
      <BlogMetaHead post={post} />
      <Header />
      <ContentContainer>
        <BlogPostLayout
          date={post.date}
          author={{
            name: "Yuriy Plakosh",
            avatar: "/assets/yuriy.jpg",
            role: "Founder",
          }}
          image={post.image}
          imageAlt={post.imageAlt}
          readTime={readTime}
        >
          <post.component />
        </BlogPostLayout>
      </ContentContainer>
      <Footer />
    </>
  );
}
