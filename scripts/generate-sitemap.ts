/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { writeFileSync } from "fs";
import { routes } from "../src/routes";
import { blogMeta } from "../src/pages/blog/blogMeta";

const baseUrl = "https://embedmetrics.com";

const staticRoutes = routes.filter((r) => !r.path.includes(":"));
const urls = [
  ...staticRoutes.map(({ path, changefreq = "monthly", priority = 0.5 }) => {
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }),
  // Add blog post URLs
  ...blogMeta.map((post) => {
    return `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

writeFileSync("dist/sitemap.xml", sitemap);

console.log(
  "✅ Smart Sitemap generated from routes.ts and blogMeta at dist/sitemap.xml"
);
