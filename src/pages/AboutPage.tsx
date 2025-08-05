/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import AboutMetaHead from "../components/AboutMetaHead";
import { BookDemoLink } from "./blog/MDXComponents";

export default function AboutPage() {
  return (
    <>
      <AboutMetaHead />
      <Header />
      <ContentContainer>
        <main className="max-w-4xl mx-auto px-4 py-16 text-gray-900">
          <article className="prose prose-lg prose-indigo max-w-none [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6">
            <h1>About EmbedMetrics</h1>

            <p className="text-xl font-semibold text-gray-800 mb-8">
              <strong>
                We help SaaS companies give their users quick answers from data,
                without needing dashboards or analysts.
              </strong>
            </p>

            <p>
              Instead of building complex charts, teams drop our chat widget
              into their app. Users type a question like{" "}
              <em>"How many new signups did we get this week?"</em> and receive
              an instant answer, visualized as a KPI inside the app.
            </p>

            <h2>What is EmbedMetrics?</h2>

            <p>
              EmbedMetrics is an AI-native analytics assistant that replaces
              static dashboards with in-app, conversational answers. It helps
              product and data teams deliver real-time insights inside their
              app, without building reports, charts, or drilldowns manually.
            </p>

            <p>
              Instead of asking users to explore dashboards, EmbedMetrics lets
              them simply ask:
            </p>

            <blockquote>
              <em>"How did signups trend last quarter?"</em>
              <br />
              <em>"Break that down by product tier."</em>
              <br />
              <em>"What changed since last week?"</em>
            </blockquote>

            <p>
              Answers appear in context, as structured KPIs, charts, or
              comparisons. Instantly.
            </p>

            <p>
              This shortens the time from question to insight, drives user
              engagement, and removes the need to maintain traditional
              dashboards.
            </p>

            <h2>Our Mission</h2>

            <p>
              Our mission is to make data feel like a natural part of every
              product experience, not a separate tool you have to open or learn.
            </p>

            <h2>Why Now?</h2>

            <ul>
              <li>
                <strong>Dashboards are at a turning point.</strong> Many go
                unused or siloed.
              </li>
              <li>
                <strong>Users expect answers, not interfaces.</strong> And they
                prefer natural language.
              </li>
              <li>
                <strong>AI-native UX is the new default.</strong> Embedding a
                smart assistant makes more sense than embedding static charts.
              </li>
            </ul>

            <h2>What Makes EmbedMetrics Different?</h2>

            <ul>
              <li>
                <strong>AI-native interface:</strong> Natural language in,
                visual answers out, without dashboard overhead.
              </li>
              <li>
                <strong>Structured processing pipeline:</strong> AI extracts
                intent, but all queries and visualizations are generated through
                a secure, rule-based engine. This ensures consistent,
                transparent outputs that teams can trust.
              </li>
              <li>
                <strong>Fully embeddable:</strong> Lightweight React widget,
                customizable themes, JWT support.
              </li>
              <li>
                <strong>Self-service admin tools:</strong> Easily configure
                apps, connect data, and manage your models.
              </li>
            </ul>

            <h2>Who We're For</h2>

            <ul>
              <li>
                <strong>SaaS platforms</strong> that want native, insight-driven
                UX.
              </li>
              <li>
                <strong>Enterprise teams</strong> replacing dashboards with
                in-context answers.
              </li>
              <li>
                <strong>Product and data teams</strong> who want to reduce
                friction and shorten the path to insight.
              </li>
            </ul>

            <h2>How It Works</h2>

            <ol>
              <li>Embed the React chat widget in your app.</li>
              <li>Connect your data.</li>
              <li>Users ask questions in plain English.</li>
              <li>
                Our backend interprets intent and routes it through a structured
                engine that generates trusted queries and visual insights.
              </li>
              <li>
                Admins manage apps, models, and usage through a self-serve
                console.
              </li>
            </ol>

            <h2>From the Founder</h2>

            <p>
              I'm Yuriy Plakosh, the founder of EmbedMetrics. I've built data
              platforms for SaaS and enterprise teams. I started this product
              because I believe analytics should feel like asking a smart
              teammate, not building a dashboard.
            </p>

            <p>
              This is a founder-led, product-driven effort grounded in
              real-world experience, not hype.
            </p>

            <h2>Try EmbedMetrics</h2>

            <p>
              We're currently rolling out to select SaaS teams.
              <strong>
                Want to embed AI-native analytics in your app?{" "}
                <BookDemoLink>Book a demo</BookDemoLink>
              </strong>
            </p>
          </article>
        </main>
      </ContentContainer>
      <Footer />
    </>
  );
}
