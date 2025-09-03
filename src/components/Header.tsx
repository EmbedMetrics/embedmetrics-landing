/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield, CheckCircle2, Users, Target } from "lucide-react";
import logo from "../assets/EmbedMetrics.svg";
import Booker from "./Booker";
import { useAnalytics } from "../hooks/useAnalytics";

interface SolutionItem {
  id: string;
  title: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  available: boolean;
}

const solutions: SolutionItem[] = [
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    path: "/solutions/quality-assurance",
    icon: Shield,
    available: true,
  },
  {
    id: "task-management",
    title: "Task Management",
    path: "/solutions/task-management",
    icon: CheckCircle2,
    available: false,
  },
  {
    id: "crm",
    title: "CRM",
    path: "/solutions/crm",
    icon: Users,
    available: false,
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    path: "/solutions/marketing-automation",
    icon: Target,
    available: false,
  },
];

export default function Header() {
  const { trackCTAClick } = useAnalytics();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

      {/* Desktop Navigation - Centered */}
      <nav className="hidden sm:flex text-base items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div>
            <button
              className="text-gray-700 hover:text-indigo-600 whitespace-nowrap flex items-center bg-transparent border-0 cursor-pointer p-0"
              aria-haspopup="true"
              aria-expanded={isSolutionsDropdownOpen}
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                  dropdownTimeoutRef.current = null;
                }
                setIsSolutionsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsSolutionsDropdownOpen(false);
                }, 150);
              }}
              onFocus={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                  dropdownTimeoutRef.current = null;
                }
                setIsSolutionsDropdownOpen(true);
              }}
              onBlur={() => {
                // Delay closing to allow focus to move to dropdown items
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsSolutionsDropdownOpen(false);
                }, 150);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                } else if (e.key === "Escape") {
                  e.preventDefault();
                  setIsSolutionsDropdownOpen(false);
                } else if (e.key === "ArrowDown" && !isSolutionsDropdownOpen) {
                  e.preventDefault();
                  setIsSolutionsDropdownOpen(true);
                }
              }}
              onClick={(e) => {
                e.preventDefault(); // Prevent any default button behavior
                setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
              }}
            >
              Solutions
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isSolutionsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Solutions Dropdown */}
          {isSolutionsDropdownOpen && (
            <div
              className="solutions-dropdown absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2 z-50"
              role="menu"
              aria-label="Solutions menu"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                  dropdownTimeoutRef.current = null;
                }
                setIsSolutionsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsSolutionsDropdownOpen(false);
                }, 150);
              }}
              onFocus={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                  dropdownTimeoutRef.current = null;
                }
              }}
              onBlur={() => {
                // Close dropdown when focus leaves the entire dropdown area
                setTimeout(() => {
                  if (!document.activeElement?.closest(".solutions-dropdown")) {
                    setIsSolutionsDropdownOpen(false);
                  }
                }, 150);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  setIsSolutionsDropdownOpen(false);
                  // Return focus to the trigger button
                  const trigger = document.querySelector(
                    '[aria-haspopup="true"]'
                  ) as HTMLElement;
                  trigger?.focus();
                }
              }}
            >
              <Link
                to="/solutions"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 border-b border-gray-100"
                onClick={() => {
                  setIsSolutionsDropdownOpen(false);
                  trackCTAClick("header", "All Solutions", {
                    is_navigation: true,
                  });
                }}
              >
                <div className="flex items-center">
                  <span className="font-medium">All Solutions</span>
                </div>
              </Link>
              {solutions.map((solution) => (
                <div key={solution.id}>
                  {solution.available ? (
                    <Link
                      to={solution.path}
                      className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-indigo-600"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        trackCTAClick("header", `Solution: ${solution.title}`, {
                          is_navigation: true,
                        });
                      }}
                    >
                      <div className="flex items-center">
                        <solution.icon className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">
                          {solution.title}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="block px-4 py-3 text-sm opacity-60 cursor-not-allowed">
                      <div className="flex items-center">
                        <solution.icon className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">
                          {solution.title}
                        </span>
                        <span className="text-xs text-amber-600 font-medium whitespace-nowrap ml-2">
                          (Coming Soon)
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
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
      </nav>

      {/* Book a Demo Button */}
      <div className="flex-shrink-0">
        <Booker onOpen={() => trackCTAClick("header", "Book a Demo")} />
      </div>

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
                {/* Solutions Section */}
                <div>
                  <button
                    onClick={() =>
                      setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
                    }
                    className="w-full text-left text-gray-700 hover:text-indigo-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    Solutions
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isMobileSolutionsOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/solutions"
                        className="block text-gray-600 hover:text-indigo-600 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          closeMobileMenu();
                          setIsMobileSolutionsOpen(false);
                          trackCTAClick("header", "All Solutions", {
                            is_navigation: true,
                          });
                        }}
                      >
                        All Solutions
                      </Link>
                      {solutions.map((solution) => (
                        <Link
                          key={solution.id}
                          to={solution.path}
                          className={`flex items-center py-2 px-3 rounded-md hover:bg-gray-50 transition-colors ${
                            !solution.available
                              ? "opacity-60 text-gray-500"
                              : "text-gray-600 hover:text-indigo-600"
                          }`}
                          onClick={() => {
                            closeMobileMenu();
                            setIsMobileSolutionsOpen(false);
                            trackCTAClick(
                              "header",
                              `Solution: ${solution.title}`,
                              {
                                is_navigation: true,
                              }
                            );
                          }}
                        >
                          <div className="flex items-center">
                            <solution.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="whitespace-nowrap">
                              {solution.title}
                            </span>
                            {!solution.available && (
                              <span className="text-xs text-amber-600 whitespace-nowrap ml-2">
                                (Soon)
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
                <Booker onOpen={() => trackCTAClick("header", "Book a Demo")} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
