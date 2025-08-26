/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */
import { Helmet } from "react-helmet-async";
import { blogMeta } from "../pages/blog/blogMeta";

export default function BlogMetaIndexHead() {
  // Generate JSON-LD structured data for the blog index
  const blogIndexSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "EmbedMetrics Blog",
    description:
      "Insights on embedded analytics, developer experience, and building intuitive AI-native products.",
    url: "https://embedmetrics.com/blog",
    publisher: {
      "@type": "Organization",
      name: "EmbedMetrics",
      url: "https://embedmetrics.com",
    },
    blogPost: blogMeta.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      url: `https://embedmetrics.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Yuriy Plakosh",
      },
    })),
  };

  return (
    <Helmet>
      <title>
        EmbedMetrics Blog – Product, Engineering, and AI in Analytics
      </title>
      <meta
        name="description"
        content="Read the latest from EmbedMetrics on building embeddable analytics, conversational UIs, and the future of AI-native insights."
      />
      <meta
        property="og:title"
        content="EmbedMetrics Blog – Product, Engineering, and AI in Analytics"
      />
      <meta
        property="og:description"
        content="Insights on embedded analytics, developer experience, and building intuitive AI-native products."
      />
      <meta property="og:image" content="/assets/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com/blog" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://embedmetrics.com/blog" />

      <script type="application/ld+json">
        {JSON.stringify(blogIndexSchema)}
      </script>
    </Helmet>
  );
}
