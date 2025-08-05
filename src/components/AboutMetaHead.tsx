/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Helmet } from "react-helmet-async";

export default function AboutMetaHead() {
  return (
    <Helmet>
      <title>
        About EmbedMetrics – AI-native analytics that lives inside your app
      </title>

      <meta
        name="description"
        content="EmbedMetrics is an AI-native analytics assistant that helps SaaS teams deliver in-app answers from data. Created to replace dashboards with in-app, conversational insights by the same team behind data platforms for SaaS and enterprise."
      />

      <meta
        property="og:title"
        content="About EmbedMetrics – AI-native analytics that lives inside your app"
      />
      <meta
        property="og:description"
        content="EmbedMetrics is an AI-native analytics assistant that helps SaaS teams deliver in-app answers from data. Created to replace dashboards with in-app, conversational insights by the same team behind data platforms for SaaS and enterprise."
      />
      <meta property="og:image" content="/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com/about" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://embedmetrics.com/about" />
    </Helmet>
  );
}
