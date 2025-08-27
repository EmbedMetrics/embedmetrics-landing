/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React, { useCallback } from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useAnalytics } from "../hooks/useAnalytics";

type ShareLinksProps = {
  url: string;
  slug?: string;
  postTitle?: string;
};

export default function ShareLinks({ url, slug, postTitle }: ShareLinksProps) {
  const { trackBlogEngagement } = useAnalytics();
  const encodedUrl = encodeURIComponent(url);

  // Handler for share events (captures left/middle clicks and ensures instant delivery)
  const handleShare = useCallback(
    (platform: "x" | "facebook" | "linkedin" | "copy") =>
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        // left-click (0) and middle-click (1)
        const btn = e.button;
        if (e.type === "click" && btn !== 0) return;
        if (e.type === "auxclick" && btn !== 1) return;

        trackBlogEngagement(
          "share",
          slug || "unknown",
          {
            post_title: postTitle,
            destination_url: (e.currentTarget as HTMLAnchorElement).href,
            share_platform: platform,
            is_navigation: true, // outbound navigation
          },
          { send_instantly: true }
        );
      },
    [trackBlogEngagement, slug, postTitle]
  );

  return (
    <footer className="mt-10 border-t border-gray-300 pt-6">
      <p className="text-sm text-gray-500 mb-2 font-medium">Share this post:</p>
      <div className="flex gap-4 items-center text-indigo-600 text-sm">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(
            postTitle || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
          aria-label={`Share "${postTitle || "this post"}" on X`}
          className="flex items-center gap-1 hover:underline"
          onClick={handleShare("x")}
          onAuxClick={handleShare("x")}
        >
          <FaXTwitter className="w-4 h-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          aria-label={`Share "${postTitle || "this post"}" on Facebook`}
          className="flex items-center gap-1 hover:underline"
          onClick={handleShare("facebook")}
          onAuxClick={handleShare("facebook")}
        >
          <FaFacebookF className="w-4 h-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          aria-label={`Share "${postTitle || "this post"}" on LinkedIn`}
          className="flex items-center gap-1 hover:underline"
          onClick={handleShare("linkedin")}
          onAuxClick={handleShare("linkedin")}
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
