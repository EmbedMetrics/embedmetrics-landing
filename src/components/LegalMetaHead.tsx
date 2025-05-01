/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */
import { Helmet } from "react-helmet-async";

type Props = {
  page: "terms" | "privacy";
};

const titles = {
  terms: "Terms of Service - EmbedMetrics",
  privacy: "Privacy Policy - EmbedMetrics",
};

const descriptions = {
  terms:
    "Review the terms and conditions for using EmbedMetrics, including compliance and usage policies.",
  privacy:
    "Learn how EmbedMetrics collects, uses, and protects your data when you visit or use our services.",
};

const urls = {
  terms: "https://embedmetrics.com/terms",
  privacy: "https://embedmetrics.com/privacy",
};

export default function LegalMetaHead({ page }: Props) {
  const title = titles[page];
  const description = descriptions[page];
  const url = urls[page];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
