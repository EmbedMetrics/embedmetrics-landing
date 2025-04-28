/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt?: string;
  description?: string; // used for blog list and meta tag
  ogImage?: string; // optional override for Open Graph image
  excerpt?: string;
  component: React.ComponentType;
};
