/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Helmet } from "react-helmet-async";

export default function MetaHead() {
  return (
    <Helmet>
      <title>
        EmbedMetrics – AI-Native Analytics for SaaS and Product Teams
      </title>

      <meta
        name="description"
        content="EmbedMetrics is an AI-native analytics assistant for SaaS and product teams. Drop in a chat widget and let users ask questions in plain English. No dashboards. Just answers."
      />

      <meta
        property="og:title"
        content="EmbedMetrics – AI-Native Analytics for SaaS and Product Teams"
      />
      <meta
        property="og:description"
        content="Let users ask data questions right inside your app. EmbedMetrics delivers fast, conversational analytics for SaaS and product teams."
      />
      <meta property="og:image" content="/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://embedmetrics.com" />
    </Helmet>
  );
}
