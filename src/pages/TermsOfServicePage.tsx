import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <ContentContainer>
        <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800 text-sm leading-relaxed">
          <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>

          <p className="text-gray-500 text-sm mb-6">
            Last Updated: April 23, 2025
          </p>

          <p className="mb-4">
            These Terms of Service ("Terms") govern your use of EmbedMetrics. By
            accessing or using our website or services, you agree to these
            Terms.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">1. Use of Service</h2>
          <p className="mb-4">
            You may use our services only in compliance with these Terms and all
            applicable laws. You agree not to misuse or attempt to disrupt our
            service.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            2. Intellectual Property
          </h2>
          <p className="mb-4">
            All content, branding, and software associated with EmbedMetrics are
            the property of the company or its licensors. You may not copy,
            reproduce, or distribute any content without permission.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            3. Early Access and Feedback
          </h2>
          <p className="mb-4">
            If you participate in our early access program, you agree not to
            publicly disclose features unless otherwise permitted. You may
            submit feedback or suggestions, which we may use without obligation
            or compensation.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            4. Limitation of Liability
          </h2>
          <p className="mb-4">
            Our service is provided “as is” without warranties of any kind. To
            the extent permitted by law, EmbedMetrics shall not be liable for
            any indirect, incidental, or consequential damages arising from use
            of the service.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">
            5. Changes to Terms
          </h2>
          <p className="mb-4">
            We may update these Terms from time to time. Continued use of our
            services after changes means you accept the new terms.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">6. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of the state of Georgia, USA,
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-2">7. Contact Us</h2>
          <p>
            For questions about these Terms, contact us at:
            <br />
            📧{" "}
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
