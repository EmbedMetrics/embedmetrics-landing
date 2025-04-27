/*
 * Copyright (c) 2025 EmbedMetrics, Inc. All Rights Reserved. Confidentiality & Proprietary.
 */
import { writeFileSync } from "fs";
import { routes } from "../src/routes";

const baseUrl = "https://embedmetrics.com";

const urls = routes.map(({ path, changefreq = "monthly", priority = 0.5 }) => {
  return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

writeFileSync("dist/sitemap.xml", sitemap);

console.log("✅ Smart Sitemap generated from routes.ts at dist/sitemap.xml");
