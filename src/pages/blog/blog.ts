/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { blogMeta } from "./blogMeta";

// Import your posts manually
import WhyEmbedMetrics from "./2025-04-22-why-embedmetrics.mdx";
import VpSalesWeeklyReviewContent from "./2025-06-17-vp-sales-weekly-review-without-dashboards.mdx";

export const blogPosts = blogMeta.map((meta) => {
  let component;
  if (meta.slug === "why-embedmetrics") component = WhyEmbedMetrics;
  if (meta.slug === "vp-sales-weekly-review-without-dashboards")
    component = VpSalesWeeklyReviewContent;
  return { ...meta, component };
});
