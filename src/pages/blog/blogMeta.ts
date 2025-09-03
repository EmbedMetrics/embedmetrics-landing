// Author type definition
export type Author = {
  name: string;
  avatar: string;
  role: string;
};

// Blog post metadata shared between blog index and post pages
export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
  excerpt: string;
  author: Author;
};

export const blogMeta: BlogPostMeta[] = [
  {
    slug: "career-growth-in-startups",
    title: "How Startups Can Support Career Growth",
    date: "2025-09-02",
    image: "/assets/career-growth-in-startups.png",
    imageAlt:
      "Flat illustration of a staircase with five steps labeled Check-ins, Mentorship, Stretch Projects, Learning Resources, and Knowledge Sharing, showing a person climbing upward to represent career growth in startups.",
    description:
      "Discover how startups can drive career growth with check-ins, mentorship, stretch projects, and learning opportunities. Learn why small teams can accelerate development faster than big companies.",
    excerpt:
      "Career growth is one of the top reasons people join or leave a company. In fast-moving startups, it matters even more. The pace is high. The challenges are new. The opportunities to learn arrive every week. But too often, career growth is seen as something that only big companies can provide. The truth is different. Startups have powerful ways to help people grow if they are intentional about it.",
    author: {
      name: "Kateryna Plakosh",
      avatar: "/assets/kateryna.png", // Placeholder until you provide the image
      role: "Founder",
    },
  },
  {
    slug: "ai-native-analytics",
    title: 'What Does "AI-Native Analytics" Really Mean?',
    date: "2025-08-26",
    image: "/assets/AI-Native-Analytics-conversational-interface.png",
    imageAlt:
      "Developer embedding an AI-native analytics assistant directly inside a SaaS app interface.",
    description:
      "AI-powered and AI-first analytics still orbit around dashboards. AI-native is different—built ground-up for conversational workflows, embedded directly into SaaS apps.",
    excerpt:
      "Explore why AI-native analytics is more than AI on top of BI. It's a ground-up redesign: embedded, conversational, and built for the next generation of SaaS.",
    author: {
      name: "Yuriy Plakosh",
      avatar: "/assets/yuriy.jpg",
      role: "Founder",
    },
  },
  {
    slug: "why-embedmetrics",
    title: "Why EmbedMetrics",
    date: "2025-06-18",
    image: "/assets/EmbedMetrics-embeded-into-CRM-application.png",
    imageAlt:
      "EmbedMetrics Smart Assistant inside a CRM dashboard, answering a query about MRR trends with a line chart.",
    description:
      "Dashboards are at a turning point. EmbedMetrics is a smart, AI-native assistant that replaces static dashboards with in-app answers, built for SaaS teams and developers.",
    excerpt:
      "Dashboards have become a wall instead of a window. This is the story behind EmbedMetrics—an AI-native assistant that replaces static dashboards with smart, in-app answers.",
    author: {
      name: "Yuriy Plakosh",
      avatar: "/assets/yuriy.jpg",
      role: "Founder",
    },
  },
  {
    slug: "vp-sales-weekly-review-without-dashboards",
    title:
      "How a VP of Sales Runs Her Weekly Performance Review Without Dashboards",
    date: "2025-06-18",
    image:
      "/assets/Lina-using-EmbedMetrics-for-regional-performance-review.png",
    imageAlt: "VP of Sales reviewing regional performance via AI assistant",
    description:
      "Skip dashboards. See how a global VP of Sales reviews weekly performance using an embedded, AI-native assistant that delivers real-time answers from data.",
    excerpt:
      "Walk through a VP of Sales' weekly workflow. No dashboards, just in-app answers from a smart, AI-native assistant.",
    author: {
      name: "Yuriy Plakosh",
      avatar: "/assets/yuriy.jpg",
      role: "Founder",
    },
  },
];
