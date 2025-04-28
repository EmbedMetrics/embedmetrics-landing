/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */
import { Helmet } from "react-helmet-async";

export default function BlogMetaIndexHead() {
  return (
    <Helmet>
      <title>
        EmbedMetrics Blog – Product, Engineering, and AI in Analytics
      </title>
      <meta
        name="description"
        content="Read the latest from EmbedMetrics on building embeddable analytics, conversational UIs, and the future of AI-powered insights."
      />
      <meta
        property="og:title"
        content="EmbedMetrics Blog – Product, Engineering, and AI in Analytics"
      />
      <meta
        property="og:description"
        content="Insights on embedded analytics, developer experience, and building intuitive AI-powered products."
      />
      <meta property="og:image" content="/assets/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com/blog" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
