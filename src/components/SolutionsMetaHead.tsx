/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Helmet } from "react-helmet-async";

export default function SolutionsMetaHead() {
  return (
    <Helmet>
      <title>
        Solutions – EmbedMetrics for Quality Assurance, Engineering, and More
      </title>

      <meta
        name="description"
        content="Discover how EmbedMetrics transforms analytics across different use cases. From quality assurance to engineering workflows, see how AI-native analytics delivers in-app answers that teams actually use."
      />

      <meta
        property="og:title"
        content="Solutions – EmbedMetrics for Quality Assurance, Engineering, and More"
      />
      <meta
        property="og:description"
        content="Discover how EmbedMetrics transforms analytics across different use cases. From quality assurance to engineering workflows, see how AI-native analytics delivers in-app answers that teams actually use."
      />
      <meta property="og:image" content="/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com/solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://embedmetrics.com/solutions" />
    </Helmet>
  );
}
