/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/EmbedMetrics.svg";
import Booker from "./Booker";
import { useAnalytics } from "../hooks/useAnalytics";

export default function Header() {
  const { trackCTAClick } = useAnalytics();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      trackCTAClick("header", "Mobile menu", {
        state: next ? "open" : "close",
        is_navigation: true,
      });
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-4 sm:px-6 flex justify-between items-center text-sm">
      <Link
        to="/"
        className="flex items-center space-x-2 min-w-0"
        onClick={() => {
          closeMobileMenu();
          trackCTAClick("header", "Logo", { is_navigation: true });
        }}
      >
        <img src={logo} alt="Logo" className="w-8 h-8 flex-shrink-0" />
        <span className="font-semibold text-base sm:text-lg md:text-xl text-gray-900">
          EmbedMetrics
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex text-base items-center space-x-6 ml-4">
        <Link
          to="/blog"
          className="text-gray-700 hover:text-indigo-600 whitespace-nowrap"
          onClick={() =>
            trackCTAClick("header", "Blog", { is_navigation: true })
          }
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-indigo-600 whitespace-nowrap"
          onClick={() =>
            trackCTAClick("header", "About", { is_navigation: true })
          }
        >
          About
        </Link>
        <div className="flex-shrink-0">
          <div onClick={() => trackCTAClick("header", "Book a Demo")}>
            <Booker />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="sm:hidden p-2 text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="font-semibold text-gray-900">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col flex-1 p-4 space-y-4">
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-indigo-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    closeMobileMenu();
                    trackCTAClick("header", "Blog", { is_navigation: true });
                  }}
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-indigo-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    closeMobileMenu();
                    trackCTAClick("header", "About", { is_navigation: true });
                  }}
                >
                  About
                </Link>
              </nav>

              {/* Mobile Book Demo Button */}
              <div className="p-4 border-t border-gray-200">
                <Booker />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
