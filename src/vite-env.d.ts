/// <reference types="vite/client" />

declare module "*.mdx?raw" {
  const mdxContent: string;
  export default mdxContent;
}

// Augment only your VITE_* keys; let Vite provide MODE/DEV/PROD/etc.
interface ImportMetaEnv {
  readonly VITE_PUBLIC_POSTHOG_KEY?: string;
  readonly VITE_PUBLIC_POSTHOG_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
