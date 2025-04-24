import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul>
            <li>
              <a
                href="/blog"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Blog
              </a>
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
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/EmbedMetrics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-indigo-600 hover:text-indigo-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul>
            <li>
              <a
                href="/terms"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Privacy Policy
              </a>
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
