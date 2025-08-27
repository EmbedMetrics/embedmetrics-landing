/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAnalytics } from "../hooks/useAnalytics";

const NotFoundPage: React.FC = () => {
  const { trackCTAClick } = useAnalytics();

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>404 Not Found – EmbedMetrics</title>
        <meta
          name="description"
          content="Sorry, the page you're looking for does not exist on EmbedMetrics."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex flex-col flex-grow items-center justify-center text-center px-8 pt-24 pb-8">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <img
          src="/assets/404-illustration.png"
          alt="Page not found"
          className="w-64 h-auto mb-8"
        />
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-indigo-600 hover:underline text-lg"
          aria-label="Back to Home"
          onClick={() =>
            trackCTAClick("not-found", "Back to Home", { is_navigation: true })
          }
        >
          ← Back to Home
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFoundPage;
