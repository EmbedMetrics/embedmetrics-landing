/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */
import BlogPostLayout from "../../components/BlogPostLayout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaHead from "../../components/BlogPostMetaHead";
import rawContent from "./2025-06-17-vp-sales-weekly-review-without-dashboards.mdx?raw";
import ContentContainer from "../../components/ContentContainer";
import { blogMeta } from "./blogMeta";
import VpSalesWeeklyReviewContent from "./2025-06-17-vp-sales-weekly-review-without-dashboards.mdx";

const post = {
  ...blogMeta.find(
    (m) => m.slug === "vp-sales-weekly-review-without-dashboards"
  ),
  component: VpSalesWeeklyReviewContent,
};
const wordCount = rawContent.split(/\s+/).length;
const readTime = Math.max(1, Math.ceil(wordCount / 200));

export default function VpSalesWeeklyReviewPage() {
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
          <VpSalesWeeklyReviewContent />
        </BlogPostLayout>
      </ContentContainer>
      <Footer />
    </>
  );
}
