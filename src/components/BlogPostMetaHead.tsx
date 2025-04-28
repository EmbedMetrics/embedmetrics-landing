/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { BlogPostMeta } from "../model/BlogPostMeta";

type Props = {
  post: BlogPostMeta;
};

export default function BlogMetaHead({ post }: Props) {
  const {
    title,
    description = "Explore insights on embedded analytics and product development from the EmbedMetrics team.",
    image,
    imageAlt = "Illustration representing the blog post topic",
    ogImage,
    slug,
  } = post;

  const url = `https://embedmetrics.com/blog/${slug}`;
  const ogImg = ogImage || image;

  return (
    <Helmet>
      <title>{title} | EmbedMetrics</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}
