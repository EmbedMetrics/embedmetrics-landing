/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import LandingPage from "./pages/LandingPage";
import BlogIndexPage from "./pages/blog/BlogIndexPage";
import TermsPage from "./pages/TermsOfServicePage";
import PrivacyPage from "./pages/PrivacyPolicyPage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPostDynamicPage from "./pages/blog/BlogPostDynamicPage";

const components = {
  LandingPage,
  BlogIndexPage,
  BlogPostDynamicPage,
  TermsPage,
  PrivacyPage,
};

function App() {
  // Validate components at runtime once
  React.useEffect(() => {
    // Check for missing components in components map
    const missingInComponents = routes
      .map(({ component }) => component)
      .filter((componentName) => !(componentName in components));

    if (missingInComponents.length > 0) {
      console.warn(
        `[EmbedMetrics Warning] These components are listed in routes.ts but missing in components map:`,
        missingInComponents
      );
    }

    // Check for unused components
    const usedComponentSet = new Set(routes.map((r) => r.component));
    const unusedComponents = Object.keys(components).filter(
      (comp) => !usedComponentSet.has(comp)
    );

    if (unusedComponents.length > 0) {
      console.warn(
        `[EmbedMetrics Warning] These components exist in components map but are not used in routes.ts:`,
        unusedComponents
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => {
          const Component =
            components[component as keyof typeof components] || NotFoundPage;
          return <Route key={path} path={path} element={<Component />} />;
        })}
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
