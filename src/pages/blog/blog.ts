import { BlogPostMeta } from "../../model/BlogPostMeta";

// Import your posts manually
import WhyEmbedMetrics from "./2024-04-22-why-embedmetrics.mdx";

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "why-embedmetrics",
    title: "Why I’m Building EmbedMetrics (and What’s Coming Next)",
    date: "2025-04-22",
    image: "/assets/developer-using-embedmetrics-why-embedmetrics.png",
    imageAlt:
      "Flat illustration of a developer interacting with EmbedMetrics, an embeddable analytics platform",
    description:
      "Why we're rethinking embedded analytics: AI-native, dev-first, and built for real user needs. A behind-the-scenes look at EmbedMetrics.",
    excerpt:
      "A behind-the-scenes look at why I'm building EmbedMetrics — rethinking embedded analytics from the ground up with an AI-native core, designed for developers and built for real user needs.",
    component: WhyEmbedMetrics,
  },
];
