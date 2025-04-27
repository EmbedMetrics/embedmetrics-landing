/*
 * Copyright (c) 2025 EmbedMetrics, Inc. All Rights Reserved. Confidentiality & Proprietary.
 */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
        <Link to="/" className="text-indigo-600 hover:underline text-lg">
          ← Back to Home
        </Link>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFoundPage;
