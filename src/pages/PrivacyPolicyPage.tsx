/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <ContentContainer>
        <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800 text-sm leading-relaxed">
          <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-gray-500 text-sm mb-6">
            Last Updated: April 23, 2025
          </p>

          <p className="mb-4">
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you use EmbedMetrics.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            - <strong>Email address</strong> if you opt in for updates or early
            access
            <br />- <strong>Usage data</strong> collected through analytics
            tools (e.g., pages visited)
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            2. How We Use Information
          </h2>
          <p className="mb-4">
            We use your information to:
            <br />- Provide and improve our service
            <br />- Send product updates or newsletters (only if you opt in)
            <br />- Analyze usage trends
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            3. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell your personal data. We may share it with service
            providers (like email tools or analytics) who help us run our
            business, under strict confidentiality agreements.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">4. Cookies</h2>
          <p className="mb-4">
            We use cookies to understand how our site is used and to improve
            your experience. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">5. Your Choices</h2>
          <p className="mb-4">
            You can opt out of receiving emails by clicking the unsubscribe link
            in any message we send.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">6. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have the following rights:
            <br />- Access to the personal information we hold about you
            <br />- Correction of inaccurate or incomplete personal data
            <br />- Deletion of your personal information (subject to any legal
            obligations)
            <br />- Objection to or restriction of certain uses of your data
            <br />- Portability of your personal data to another provider
            <br />
            To exercise your rights, please contact us at hello@embedmetrics.com
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">7. Data Retention</h2>
          <p className="mb-4">
            We retain your personal data only as long as necessary to fulfill
            the purposes outlined in this policy, comply with legal obligations,
            resolve disputes, and enforce our agreements.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">8. Security</h2>
          <p className="mb-4">
            We take data security seriously and implement reasonable technical
            and organizational measures to protect your personal data. However,
            no method of transmission or storage is 100% secure.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            9. Children's Privacy
          </h2>
          <p className="mb-4">
            Our services are not intended for use by individuals under the age
            of 13. We do not knowingly collect personal information from
            children.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            10. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will post
            the updated version on this page and revise the “Last Updated” date.
            Continued use of our services after changes implies acceptance of
            the new terms.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, please reach out to:{" "}
            <a
              href="mailto:hello@embedmetrics.com"
              className="text-indigo-600 underline"
            >
              hello@embedmetrics.com
            </a>
          </p>
        </main>
      </ContentContainer>
      <Footer />
    </>
  );
}
