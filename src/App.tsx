import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WhyEmbedMetricsPage from "./pages/blog/WhyEmbedMetricsPage";
import BlogIndexPage from "./pages/blog/BlogIndexPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
