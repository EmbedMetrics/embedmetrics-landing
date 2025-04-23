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
