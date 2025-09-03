/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Code,
  TrendingUp,
  Users,
  Zap,
  Target,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import SolutionsMetaHead from "../components/SolutionsMetaHead";
import Booker from "../components/Booker";
import { useAnalytics } from "../hooks/useAnalytics";

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  features: string[];
  available: boolean;
}

const solutions: Solution[] = [
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description:
      "Deliver embedded analytics that bring actionable insights into QA workflows. Help your customers’ teams make informed decisions on quality metrics, coverage, and release readiness.",
    icon: Shield,
    path: "/solutions/quality-assurance",
    features: [
      "Test execution analytics",
      "Quality metrics dashboard",
      "Defect trend analysis",
      "Release readiness scoring",
    ],
    available: true,
  },
  {
    id: "task-management",
    title: "Task Management",
    description:
      "Add analytics that streamline project and task tracking. Enable your customers to prioritize work, monitor progress, and optimize team efficiency inside your product.",
    icon: CheckCircle2,
    path: "/solutions/task-management",
    features: [
      "Task completion analytics",
      "Workflow efficiency metrics",
      "Project progress insights",
      "Team productivity tracking",
    ],
    available: false,
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Enhance your CRM platform with embedded analytics that reveal customer behavior, sales opportunities, and relationship health all within the workflow.",
    icon: Users,
    path: "/solutions/crm",
    features: [
      "Customer interaction analytics",
      "Sales opportunity insights",
      "Relationship health metrics",
      "Customer lifecycle tracking",
    ],
    available: false,
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description:
      "Give your customers campaign intelligence without leaving their marketing platform. Deliver embedded analytics that track performance, engagement, and conversion outcomes.",
    icon: Target,
    path: "/solutions/marketing-automation",
    features: [
      "Campaign performance analytics",
      "Customer acquisition metrics",
      "Engagement tracking",
      "Conversion rate optimization",
    ],
    available: false,
  },
];

export default function SolutionsPage() {
  const { trackCTAClick } = useAnalytics();
  const shouldReduce = useReducedMotion();

  return (
    <>
      <SolutionsMetaHead />
      <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800">
        <Header />

        <ContentContainer>
          <main className="px-6 py-20">
            {/* Page Header */}
            <motion.header
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6" />
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                Solutions for SaaS Products
              </h1>
              <div className="em-hairline max-w-4xl pr-8 sm:pr-12">
                <p className="text-lg text-gray-700 max-w-[65ch]">
                  Bring AI-native analytics into your SaaS product. Empower your
                  customers with instant, in-app insights while your team stays
                  focused on core product development.
                </p>
              </div>
            </motion.header>

            {/* Solutions Grid */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            >
              {solutions.map((solution, index) => (
                <motion.article
                  key={solution.id}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`group bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:ring-black/10 ${
                    !solution.available ? "opacity-75" : ""
                  }`}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            {solution.title}
                          </h2>
                          {!solution.available && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {solution.available ? (
                      <Link
                        to={solution.path}
                        className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group-hover:translate-x-1"
                        onClick={() =>
                          trackCTAClick("solutions", `View ${solution.title}`, {
                            is_navigation: true,
                          })
                        }
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center space-x-2 text-gray-400 font-semibold cursor-not-allowed">
                        <span>Coming Soon</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="em-hairline mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-sm ring-1 ring-indigo-100 p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Ready to transform your team's analytics?
                </h2>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  See how EmbedMetrics can bring AI-native analytics directly
                  into your workflows. Let's discuss your specific needs and
                  explore how we can help.
                </p>
                <div className="flex justify-center">
                  <Booker
                    onOpen={() => trackCTAClick("solutions", "Book a Demo")}
                  />
                </div>
              </div>
            </motion.div>
          </main>
        </ContentContainer>

        <Footer />
      </div>
    </>
  );
}
