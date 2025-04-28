/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Helmet } from "react-helmet-async";

export default function MetaHead() {
  return (
    <Helmet>
      <title>
        EmbedMetrics – AI-native analytics that lives inside your app
      </title>

      <meta
        name="description"
        content="EmbedMetrics is a smart, AI-native data assistant that lives inside your app. Built for product teams. Loved by users. No dashboards. Just answers."
      />

      <meta
        property="og:title"
        content="EmbedMetrics – AI-native analytics that lives inside your app"
      />
      <meta
        property="og:description"
        content="AI-native analytics that lives inside your app. Built for product teams. Loved by users. No dashboards. Just answers."
      />
      <meta property="og:image" content="/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
