/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import { Link } from "react-router-dom";
import logo from "../assets/EmbedMetrics.svg";
import Booker from "./Booker";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-4 sm:px-6 flex justify-between items-center text-sm">
      <Link to="/" className="flex items-center space-x-2 min-w-0">
        <img src={logo} alt="Logo" className="w-8 h-8 flex-shrink-0" />
        <span className="font-semibold text-base sm:text-lg md:text-xl text-gray-900">
          EmbedMetrics
        </span>
      </Link>

      <nav className="text-base flex items-center space-x-3 sm:space-x-6 ml-4">
        <Link
          to="/blog"
          className="text-gray-700 hover:text-indigo-600 whitespace-nowrap"
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-indigo-600 whitespace-nowrap"
        >
          About
        </Link>
        <div className="flex-shrink-0 hidden sm:block">
          <Booker />
        </div>
      </nav>
    </header>
  );
}
