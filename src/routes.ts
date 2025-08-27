/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

export interface RouteConfig {
  path: string;
  component: string;
  pageName: string; // Analytics page name
  priority?: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: "LandingPage",
    pageName: "landing",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/about",
    component: "AboutPage",
    pageName: "about",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/blog",
    component: "BlogIndexPage",
    pageName: "blog",
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    path: "/terms",
    component: "TermsPage",
    pageName: "terms",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/privacy",
    component: "PrivacyPage",
    pageName: "privacy",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/blog/:slug",
    component: "BlogPostDynamicPage",
    pageName: "blog-post",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "*",
    component: "NotFoundPage",
    pageName: "not-found",
    priority: 0.1,
    changefreq: "yearly",
  },
];
