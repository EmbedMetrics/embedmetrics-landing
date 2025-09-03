/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Users,
  Zap,
  Target,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import QualityAssuranceMetaHead from "../components/QualityAssuranceMetaHead";
import { useAnalytics } from "../hooks/useAnalytics";

export default function QualityAssurancePage() {
  const { trackCTAClick } = useAnalytics();
  const shouldReduce = useReducedMotion();

  return (
    <>
      <QualityAssuranceMetaHead />
      <div className="relative min-h-screen flex flex-col bg-white text-gray-900">
        <Header />

        <ContentContainer>
          <main className="px-6">
            {/* Hero Section */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="py-24"
            >
              <div className="max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-8">
                  <Shield className="w-4 h-4 mr-2" />
                  Quality Assurance Solution
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transforming QA with
                  <span className="block">Embedded Analytics</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
                  QA teams face constant pressure to test faster, manage more
                  complexity, and make better release decisions. Traditional
                  dashboards slow them down with clunky navigation, manual
                  reporting, and disconnected data sources.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
                  EmbedMetrics integrates directly into test management
                  platforms, giving teams instant, conversational access to
                  quality insights—without leaving their workflows. This case
                  study shows how embedding analytics reduces reporting
                  overhead, improves collaboration, and speeds up
                  decision-making.
                </p>
                <div className="flex justify-start">
                  <button
                    data-cal-namespace="embedmetrics-demo"
                    data-cal-link="yuriy-plakosh/embedmetrics-demo"
                    data-cal-config='{"layout":"month_view"}'
                    className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-sm hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-[.98] whitespace-nowrap"
                    onClick={() => trackCTAClick("qa-hero", "Book a Demo")}
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </motion.section>

            {/* The Challenge */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-20"
            >
              <div className="max-w-4xl mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Challenge
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Modern QA teams juggle automated, manual, and exploratory
                  testing across fast release cycles. Yet:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8">
                  <BarChart3 className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Manual Reporting
                  </h3>
                  <p className="text-gray-600">
                    Reports require manual exports and data stitching across
                    disconnected systems.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8">
                  <Target className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Slow Dashboards
                  </h3>
                  <p className="text-gray-600">
                    Dashboards load slowly and lack flexibility, interrupting
                    workflow momentum.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8 md:col-span-2 lg:col-span-1">
                  <Users className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Fragmented Insights
                  </h3>
                  <p className="text-gray-600">
                    Quality metrics scattered across tools, making release
                    readiness assessment difficult.
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mt-12">
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  This reporting burden wastes valuable time that could be spent
                  improving product quality.
                </p>
              </div>
            </motion.section>

            {/* The Solution */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="max-w-4xl mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Solution
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  EmbedMetrics embeds analytics where QA teams already work. The
                  platform removes context switching and delivers insights in
                  seconds.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Conversational queries
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ask questions like "What's our automation coverage trend?"
                    or "Which tests are flaky this sprint?" and get instant,
                    visual answers.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Seamless integration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built with React/JS components, the solution respects
                    enterprise security standards, supports JWT authentication,
                    and adapts to existing branding.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8 md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Data pipelines
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Raw test results are processed into reliable insights,
                    giving teams confidence in their decisions.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Key Benefits */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-20"
            >
              <div className="max-w-4xl mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  QA teams using embedded analytics see immediate improvements
                  across their entire workflow.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <div>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Faster decisions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hours of manual reporting are replaced by instant insights
                    during standups and release reviews. Teams can respond to
                    quality issues in minutes, not days.
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Clear visibility
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Automation trends, flaky test detection, and defect patterns
                    are available on demand. No more hunting for metrics across
                    disconnected tools.
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Better collaboration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    QA, dev, and product managers share a single source of truth
                    for quality metrics. Everyone stays aligned on release
                    readiness and quality standards.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Security and Scalability */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-20"
            >
              <div className="max-w-4xl mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Security and Scalability
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  The solution is designed for enterprise use:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8">
                  <Shield className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Security First
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• App isolation protects data in multi-app setups</li>
                    <li>
                      • Role-based access controls align with organizational
                      hierarchies
                    </li>
                    <li>• Enterprise security standards and compliance</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-black/8">
                  <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Scalable Architecture
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Admin console for oversight of datasets and usage</li>
                    <li>• Custom analytical models aligned to KPIs</li>
                    <li>• Integration with existing enterprise tools</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-20"
            >
              <div className="max-w-4xl">
                <div className="bg-white pr-8 sm:pr-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Results
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    QA teams using embedded analytics experience:
                  </p>
                  <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span>
                        Reduced reporting overhead—more time for strategic
                        quality improvements.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span>
                        Faster triage and resolution during release crunch
                        times.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span>
                        Higher adoption of quality metrics, since analytics live
                        directly inside familiar workflows.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Looking Ahead & Conclusion */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-24"
            >
              <div className="max-w-4xl">
                <div className="bg-white pr-8 sm:pr-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Looking Ahead
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The foundation is ready for advanced features:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-700 mb-8">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>
                        Predictive insights into risk and optimization
                        opportunities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>
                        Expanded integration with additional testing tools.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>
                        Custom analytical models aligned to each organization's
                        KPIs.
                      </span>
                    </li>
                  </ul>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    EmbedMetrics proves that analytics don't belong in separate
                    dashboards. By embedding insights directly into QA
                    workflows, teams save time, collaborate more effectively,
                    and make faster, data-driven decisions while maintaining
                    enterprise-grade security and governance.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="py-24"
            >
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your QA Analytics?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed text-left">
                  See how EmbedMetrics can embed analytics directly into your QA
                  workflows for instant, conversational insights.
                </p>
                <div className="flex justify-start">
                  <button
                    data-cal-namespace="embedmetrics-demo"
                    data-cal-link="yuriy-plakosh/embedmetrics-demo"
                    data-cal-config='{"layout":"month_view"}'
                    className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-sm hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-[.98] whitespace-nowrap"
                    onClick={() => trackCTAClick("qa-cta", "Book a Demo")}
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </motion.section>
          </main>
        </ContentContainer>

        <Footer />
      </div>
    </>
  );
}
