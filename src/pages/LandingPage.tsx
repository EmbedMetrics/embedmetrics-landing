import React from "react";
import logo from "../assets/EmbedMetrics.svg";
import {
  Brain,
  BarChart3,
  Globe,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import Booker from "../components/Booker";

export default function LandingPage() {
  // Simple carousel state for the preview section
  const carouselImages = [
    "/assets/Acme_Analytics_1.png",
    "/assets/Acme_Analytics_2.png",
    "/assets/Acme_Analytics_3.png",
    "/assets/Acme_Analytics_4.png",
    "/assets/Acme_Analytics_5.png",
  ];

  const [slideIndex, setSlideIndex] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % carouselImages.length);
    }, 5000);
    setIntervalId(id);
    return () => {
      window.clearInterval(id);
      setIntervalId(null);
    };
  }, []);

  // Pause when not visible
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) pauseCarousel();
        else resumeCarousel();
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pauseCarousel = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resumeCarousel = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced && !intervalId) {
      const id = window.setInterval(() => {
        setSlideIndex((i) => (i + 1) % carouselImages.length);
      }, 5000);
      setIntervalId(id);
    }
  };

  return (
    <>
      <MetaHead />
      <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50 text-gray-800 overflow-hidden">
        <Header />

        <ContentContainer>
          {/* Hero Section */}
          <section
            role="region"
            aria-labelledby="hero-heading"
            className="relative isolate flex flex-col items-center justify-center flex-grow py-20 text-center"
          >
            {/* FULL-BLEED background layer */}
            <div aria-hidden className="em-hero-bg">
              <div className="em-hero-grid" />
              <div className="em-hero-glow" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-xs tracking-widest text-indigo-600 uppercase mb-2">
                For SaaS product teams who need to ship analytics faster
              </h2>
              <h1
                id="hero-heading"
                className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 text-gray-900 max-w-4xl"
              >
                AI-native analytics that lives inside your app
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6" />
              <p className="sm:text-lg text-gray-600 max-w-xl mb-8 px-4">
                Drop in a chat widget. Let users ask in plain English. Get
                instant answers, not dashboards.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
                data-cta="book-demo-hero"
              >
                <Booker />
              </motion.div>

              {/* Screenshot with neutral spotlight */}
              <div className="mt-5 w-full max-w-3xl px-4 em-screenshot-wrap">
                <picture>
                  <source
                    srcSet="/assets/Acme_Analytics_Welcome.avif"
                    type="image/avif"
                  />
                  <source
                    srcSet="/assets/Acme_Analytics_Welcome.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/Acme_Analytics_Welcome.png"
                    width={1920}
                    height={1080}
                    alt="EmbedMetrics showing KPIs, a chart, and follow-up prompts inside an app"
                    decoding="async"
                    loading="eager"
                    className="w-full rounded-2xl shadow-xl ring-1 ring-black/10"
                  />
                </picture>
                <p className="mt-3 text-sm text-gray-500">
                  Inside your app: instant KPIs, chart, and follow-ups.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Problem Framing */}
          <section className="em-hairline w-full max-w-4xl mx-auto px-6 py-16 mt-10">
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-8 sm:p-10">
              <h3 className="text-left text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Why Now
              </h3>
              <div className="w-12 h-1 bg-indigo-500/70 rounded mb-6" />
              <div className="space-y-4 text-left">
                <p className="sm:text-lg text-gray-700">
                  Dashboards are at a turning point.{" "}
                  <strong>Most users don't open them.</strong> They just want
                  quick answers.
                </p>
                <p className="sm:text-lg text-gray-700">
                  EmbedMetrics puts answers{" "}
                  <strong>directly inside your app</strong>. No context
                  switching, no dashboard builders, no friction.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <div className="em-hairline w-full max-w-6xl py-16 px-4 sm:px-6">
            <h2 className="sm:text-3xl font-semibold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              {[
                {
                  Icon: Globe,
                  title: "Embed Anywhere",
                  desc: (
                    <>
                      Add the widget to your app:{" "}
                      <pre className="block mt-2 px-3 py-2 bg-gray-50 text-sm font-mono text-gray-800 rounded ring-1 ring-black/5 overflow-x-auto whitespace-pre-wrap break-words">
                        {`<EmbedMetricsApp appId='YOUR_APP_ID'
token='YOUR_TOKEN' />`}
                      </pre>
                    </>
                  ),
                },
                {
                  Icon: Brain,
                  title: "Ask in Plain English",
                  desc: (
                    <>
                      <div className="text-gray-600 mb-1">Examples:</div>
                      <ul className="text-gray-600 list-disc pl-5 space-y-1">
                        <li>"What were our top products last month?"</li>
                        <li>"Break down revenue by region in 2024".</li>
                      </ul>
                    </>
                  ),
                },
                {
                  Icon: BarChart3,
                  title: "Get Instant Insights",
                  desc: "Answers appear as charts, KPIs, or summaries. Instantly, from your data.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="bg-white rounded-xl ring-1 ring-black/5 hover:ring-black/10 shadow-sm hover:shadow-lg transition-shadow p-6 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <Icon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">
                    {title}
                  </h3>
                  <div className="text-gray-600">{desc}</div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-indigo-600">
                <a
                  href="/about#how-it-works"
                  className="hover:text-indigo-700 transition-colors"
                >
                  See the full flow →
                </a>
              </p>
            </div>
          </div>

          {/* Product Preview Screenshot (carousel) */}
          <section className="em-hairline w-full max-w-4xl mx-auto text-center px-6 py-16">
            <h2 className="sm:text-3xl font-semibold text-center text-gray-900 mb-12">
              What it looks like
            </h2>
            <p className="text-gray-600 mb-8">
              Ask a plain-English question. Get an instant, visual answer,
              powered by your data.
            </p>
            <div
              ref={containerRef}
              className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden mx-auto relative"
              onMouseEnter={pauseCarousel}
              onMouseLeave={resumeCarousel}
              onFocus={pauseCarousel}
              onBlur={resumeCarousel}
              role="region"
              aria-label="Product screenshots"
              aria-roledescription="carousel"
              aria-live="polite"
            >
              {/* Slide */}
              <img
                id="carousel-slide"
                src={carouselImages[slideIndex]}
                alt="EmbedMetrics preview"
                className="block w-full select-none"
              />
              {/* Controls */}
              <button
                type="button"
                aria-label="Previous"
                data-cta="carousel-prev"
                onClick={() =>
                  setSlideIndex(
                    (slideIndex - 1 + carouselImages.length) %
                      carouselImages.length
                  )
                }
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow ring-1 ring-gray-200"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next"
                data-cta="carousel-next"
                onClick={() =>
                  setSlideIndex((slideIndex + 1) % carouselImages.length)
                }
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow ring-1 ring-gray-200"
              >
                ›
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-pressed={i === slideIndex}
                    aria-controls="carousel-slide"
                    onClick={() => setSlideIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === slideIndex ? "bg-indigo-600 w-4" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Trust or Quote Section */}
          <section className="em-hairline w-full max-w-4xl mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto rounded-2xl p-8 shadow-md em-section-wash-b">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/yuriy.jpg"
                    alt="Yuriy Plakosh, Founder of EmbedMetrics"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-sm shadow-indigo-200"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-gray-700 italic text-lg mb-3">
                    "
                    <strong>
                      Analytics should feel like a conversation, not a
                      dashboard.
                    </strong>
                    "
                  </p>
                  <p className="text-sm text-gray-500">
                    – Yuriy Plakosh, Founder
                  </p>
                  <p className="text-sm text-indigo-600 mt-4">
                    <a
                      href="/about#how-it-works"
                      className="hover:text-indigo-700 transition-colors"
                    >
                      Learn how it works →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Built for Product Teams */}
          <section className="em-hairline w-full px-6 py-16">
            <div className="max-w-5xl mx-auto rounded-2xl em-section-wash-a">
              <div className="px-4 sm:px-6 py-8">
                <h2 className="sm:text-3xl font-semibold text-gray-900 mb-8">
                  Built for Product Teams
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    <>
                      <strong>Native UX</strong>: Themeable React component
                    </>,
                    <>
                      <strong>Fast Setup</strong>: Secure API; simple embed
                    </>,
                    <>
                      <strong>Flexible Data</strong>: Start with a scoped
                      dataset upload via API so users get instant answers.
                      Designed to scale to live sources as your needs grow.
                    </>,
                    <>
                      <strong>Multi‑turn</strong>: Follow‑ups stay in context
                    </>,
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex min-h-28 items-start gap-3 bg-white rounded-xl ring-1 ring-black/8 p-4 shadow-sm"
                    >
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Who it's for micro-row */}
                <div className="bg-white rounded-xl ring-1 ring-black/8 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Who it's for
                  </h3>
                  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    {[
                      {
                        title: "SaaS platforms",
                        desc: "that want native, insight-driven UX",
                      },
                      {
                        title: "Enterprise teams",
                        desc: "replacing dashboards with in-context answers",
                      },
                      {
                        title: "Product and data teams",
                        desc: "who want to reduce friction and shorten the path to insight",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">
                          <strong className="text-gray-900">
                            {item.title}
                          </strong>{" "}
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Security */}
          <section className="em-hairline w-full px-6 py-16">
            <div className="max-w-5xl mx-auto rounded-2xl em-section-wash-b">
              <div className="px-4 sm:px-6 py-8">
                <h2 className="sm:text-3xl font-semibold text-gray-900 mb-8">
                  Trust & Security
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Encrypted in transit (TLS)",
                    <>
                      <strong>Per‑app token isolation</strong> for stronger data
                      separation
                    </>,
                    "Your data is never sold or shared",
                    "Clear data handling docs available on request",
                    <>
                      <strong>Structured processing pipeline</strong> for
                      consistent, reviewable outputs
                    </>,
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white rounded-xl ring-1 ring-black/8 p-4 shadow-sm"
                    >
                      <ShieldCheck className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="em-hairline text-center py-16">
            <p className="text-gray-700 text-lg font-medium mb-6">
              Ready to give your users answers, not dashboards?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
              data-cta="book-demo-final"
            >
              <Booker />
            </motion.div>
          </section>
        </ContentContainer>

        <Footer />
      </div>
    </>
  );
}
