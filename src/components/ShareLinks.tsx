import React from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type ShareLinksProps = {
  url: string;
};

export default function ShareLinks({ url }: ShareLinksProps) {
  const encodedUrl = encodeURIComponent(url);

  return (
    <footer className="mt-10 border-t border-gray-300 pt-6">
      <p className="text-sm text-gray-500 mb-2 font-medium">Share this post:</p>
      <div className="flex gap-4 items-center text-indigo-600 text-sm">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
          className="flex items-center gap-1 hover:underline"
        >
          <FaXTwitter className="w-4 h-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          className="flex items-center gap-1 hover:underline"
        >
          <FaFacebookF className="w-4 h-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="flex items-center gap-1 hover:underline"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
