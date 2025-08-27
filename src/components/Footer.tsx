/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useAnalytics } from "../hooks/useAnalytics";
import { Link } from "react-router-dom";
import type { MouseEvent as ReactMouseEvent } from "react";

export default function Footer() {
  const { trackCTAClick } = useAnalytics();

  // Handler for outbound links (captures middle-clicks and new tab opens)
  const handleOutbound =
    (name: string) => (e: ReactMouseEvent<HTMLAnchorElement>) => {
      // Only left (0) and middle (1) clicks
      if (e.type === "auxclick" && (e as any).button !== 1) return;
      if (e.type === "click" && (e as any).button !== 0) return;

      trackCTAClick(
        "footer",
        name,
        {
          destination_url: (e.currentTarget as HTMLAnchorElement).href,
          is_navigation: true, // outbound is still navigation
        },
        { send_instantly: true }
      );
    };

  return (
    <footer className="border-t border-gray-200 mt-12 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul>
            <li>
              <Link
                to="/blog"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() =>
                  trackCTAClick("footer", "Blog", { is_navigation: true })
                }
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <ul>
            <li>
              <a
                href="mailto:hello@embedmetrics.com"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={handleOutbound("Email")}
                onAuxClick={handleOutbound("Email")}
              >
                hello@embedmetrics.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/embedmetrics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-indigo-600 hover:text-indigo-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleOutbound("LinkedIn")}
              onAuxClick={handleOutbound("LinkedIn")}
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/EmbedMetrics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-indigo-600 hover:text-indigo-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleOutbound("X")}
              onAuxClick={handleOutbound("X")}
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul>
            <li>
              <Link
                to="/terms"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() =>
                  trackCTAClick("footer", "Terms of Service", {
                    is_navigation: true,
                  })
                }
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() =>
                  trackCTAClick("footer", "Privacy Policy", {
                    is_navigation: true,
                  })
                }
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8 pb-6">
        © {new Date().getFullYear()} EmbedMetrics, Inc. All rights reserved.
      </div>
    </footer>
  );
}
