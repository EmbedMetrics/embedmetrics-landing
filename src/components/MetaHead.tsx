import { Helmet } from "react-helmet-async";

export default function MetaHead() {
  return (
    <Helmet>
      <title>
        EmbedMetrics – Embeddable Analytics for Devs. AI-Powered. Users Love It.
      </title>
      <meta
        name="description"
        content="Embeddable analytics for devs. Embedded intelligence for your users. Deliver AI-powered insights — right inside your app."
      />
      <meta
        property="og:title"
        content="EmbedMetrics – Embeddable Analytics for Devs. AI-Powered. Users Love It."
      />
      <meta
        property="og:description"
        content="Embeddable analytics for devs. Embedded intelligence for your users. Deliver AI-powered insights — right inside your app."
      />
      <meta property="og:image" content="/embedmetrics-preview.png" />
      <meta property="og:url" content="https://embedmetrics.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
