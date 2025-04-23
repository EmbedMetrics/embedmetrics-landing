import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WhyEmbedMetricsPage from "./pages/blog/WhyEmbedMetricsPage";
import BlogIndexPage from "./pages/blog/BlogIndexPage";
import TermsPage from "./pages/TermsOfServicePage";
import PrivacyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route
          path="/blog/why-embedmetrics"
          element={<WhyEmbedMetricsPage />}
        />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
