/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Helmet } from "react-helmet-async";

export default function QualityAssuranceMetaHead() {
  return (
    <Helmet>
      <title>Transforming QA with Embedded Analytics – EmbedMetrics</title>

      <meta
        name="description"
        content="EmbedMetrics integrates directly into test management platforms, giving QA teams instant, conversational access to quality insights without leaving their workflows. Reduce reporting overhead and improve decision-making."
      />

      <meta
        property="og:title"
        content="Transforming QA with Embedded Analytics – EmbedMetrics"
      />
      <meta
        property="og:description"
        content="EmbedMetrics integrates directly into test management platforms, giving QA teams instant, conversational access to quality insights without leaving their workflows. Reduce reporting overhead and improve decision-making."
      />
      <meta property="og:image" content="/embedmetrics-preview.png" />
      <meta
        property="og:url"
        content="https://embedmetrics.com/solutions/quality-assurance"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="canonical"
        href="https://embedmetrics.com/solutions/quality-assurance"
      />
    </Helmet>
  );
}
