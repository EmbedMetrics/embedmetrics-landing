// src/routes.ts
export interface RouteConfig {
  path: string;
  component: string;
  priority?: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: "LandingPage",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/blog",
    component: "BlogIndexPage",
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/blog/why-embedmetrics",
    component: "WhyEmbedMetricsPage",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/terms",
    component: "TermsPage",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/privacy",
    component: "PrivacyPage",
    priority: 0.3,
    changefreq: "yearly",
  },
];
