# PostHog Analytics Setup & Funnel Tracking

## Overview

This project uses PostHog for comprehensive analytics tracking, including conversion funnels, user engagement, and feature usage.

## 🚀 **Quick Start**

### 1. Environment Variables

Ensure these are set in your `.env` file:

```bash
VITE_PUBLIC_POSTHOG_KEY=your_posthog_api_key
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### 2. Configuration

**Important**: Auto pageview capture is disabled to prevent duplicate events. We use custom `page_view` events instead of PostHog's built-in `$pageview`.

```typescript
// PostHog config in main.tsx
{
  capture_pageview: false, // Disable auto pageview capture
  capture_pageleave: false, // Disable auto pageleave capture
  autocapture: false, // Disable PostHog autocapture for a curated schema
  opt_out_capturing_by_default: true, // Start disabled, opt-in only when DNT is off
}
```

**Respect DNT**: The SDK starts opted-out and only opts in when Do Not Track is off, ensuring privacy compliance.

### 3. Automatic Tracking

The following events are tracked automatically:

- **Page Views** - Every page navigation (custom `page_view` event)
- **Scroll Depth** - 25%, 50%, 75%, 90%, 100% thresholds
- **Exit Intent** - When users move mouse to top of page
- **UTM Parameters** - First-touch UTM parameters captured and persisted per-session. We ignore subsequent UTMs in the same tab/session.
- **Previous Page** - Internal SPA navigation tracking (e.g., "landing" → "about")
- **Device Type** - Mobile/desktop/tablet detection
- **User Type** - New vs returning visitor

## 📊 **Funnel Events**

### Event Types

```typescript
enum FunnelEvents {
  PAGE_VIEW = "page_view",
  SCROLL_DEPTH = "scroll_depth",
  CTA_CLICK = "cta_click",
  DEMO_MODAL_OPEN = "demo_modal_open",
  DEMO_FORM_START = "demo_form_start",
  DEMO_BOOKED = "demo_booked",
  BLOG_READ = "blog_read",
  FEATURE_VIEW = "feature_view",
  EXIT_INTENT = "exit_intent",
}
```

### Funnel Stages

```typescript
enum FunnelStages {
  AWARENESS = "awareness", // Landing page
  INTEREST = "interest", // About page
  CONSIDERATION = "consideration", // Blog content
  INTENT = "intent", // Demo interest
  CONVERSION = "conversion", // Demo booked
}
```

## 🎯 **Manual Event Tracking**

### Using the Hook

```typescript
import { useAnalytics } from "../hooks/useAnalytics";

function MyComponent() {
  const { trackCTAClick, trackFeatureInterest } = useAnalytics();

  const handleButtonClick = () => {
    trackCTAClick("hero-section", "Get Started");
  };

  return <button onClick={handleButtonClick}>Get Started</button>;
}
```

### Available Tracking Functions

- `trackPageView(pageName, properties?)` - Track page views
- `trackCTAClick(location, text, properties?)` - Track button clicks
- `trackDemoInterest(action, properties?)` - Track demo funnel
- `trackScrollDepth(depth)` - Track scroll progress
- `trackBlogEngagement(action, slug, properties?)` - Track blog activity
- `trackFeatureInterest(featureName, properties?)` - Track feature views
- `trackExitIntent(properties?)` - Track exit intent

**Note**: For external CTAs (mailto, Calendly, external domains), use the optional fourth parameter to ensure reliable event delivery:

```typescript
onClick={() => trackCTAClick("hero", "Book a Demo", undefined, { send_instantly: true })}
```

**Pro Tip**: For true cross-origin navigations, consider combining `send_instantly: true` with `preventDefault()` + `setTimeout()` to maximize deliverability:

## 🔍 **PostHog Dashboard Setup**

### 1. Create Funnels

In PostHog, create funnels with these steps:

1. **Landing Page View** → `page_view` where `page_name = 'landing'`
2. **About Page View** → `page_view` where `page_name = 'about'`
3. **Demo Interest** → `cta_click` where `cta_text` equals 'Book a Demo' and `page_name = 'landing'`
   (Alternatively, filter by `cta_id` in `['hero:book-a-demo','final:book-a-demo']`)
4. **Demo Booked** → `demo_booked`

### 2. Key Metrics to Track

- **Conversion Rate**: Landing → Demo Booked
- **Engagement**: Scroll depth distribution
- **Feature Interest**: Which sections get most views (each section fires once per page view)
- **Exit Points**: Where users leave the funnel

**Pro Tip**: After building the funnel, add a trends or bar chart on `feature_view` filtered to `page_name='landing'` and **break down by `feature_name`** to see which sections (`how-it-works`, `product-preview`, `product-teams`, `trust-security`) drive engagement.

**Page Types**:

- `landing` - Homepage with features
- `about` - Company/product information
- `blog` - Blog index page
- `blog-post` - Individual blog articles (`/blog/:slug`)
- `privacy` / `terms` - Legal pages
- `not-found` - 404 error page

### 3. Custom Properties

Each event includes:

- `page_name` - Current page
- `funnel_stage` - Current funnel stage
- `device_type` - Mobile/desktop/tablet
- `user_type` - New/returning visitor
- `utm_*` - First-touch UTM parameters (persisted across SPA navigation, per-session)
- `page_url` - Full page URL
- `referrer` - Referring page
- `cta_id` - Unique identifier for CTA buttons (e.g., "hero:book-a-demo")
- `feature_name` - Name of feature sections for feature_view events

**Page View Events** also include:

- `previous_page` - Prior in-app page (SPA only)

## 📱 **Mobile vs Desktop Tracking**

### Scroll Tracking

- **Desktop**: Tracks scroll depth with mouse wheel
- **Mobile**: Tracks scroll depth with touch/swipe
- **Thresholds**: 25%, 50%, 75%, 90%, 100%
- **Performance**: Uses `requestAnimationFrame` for smooth tracking

### Exit Intent

- **Desktop**: Tracks mouse leaving top of page
- **Mobile**: Not applicable (no mouse)

## 🎨 **Feature Interest Tracking**

### Automatic Tracking

Add `data-feature="feature-name"` to any section:

```tsx
<section data-feature="pricing">
  <h2>Pricing Plans</h2>
  {/* Content */}
</section>
```

**Note**: UTM parameters are captured on first page load and persisted per-session using `sessionStorage`. This means UTMs persist across SPA navigation within the same browser tab/session, but are reset when the user closes the tab or starts a new session.

**Header/Footer Navigation**: Navigation links in header and footer are tracked as `cta_click` events with `cta_location="header|footer"` and `is_navigation: true` to distinguish them from conversion CTAs. Outbound links (social media, email) use `send_instantly: true` for reliable delivery and include `destination_url` for tracking.

**Current features tracked on Landing page:**

- `how-it-works` - How It Works section
- `product-preview` - Product carousel section
- `product-teams` - Built for Product Teams section
- `trust-security` - Trust & Security section

### Manual Tracking

```typescript
trackFeatureInterest("pricing", {
  company_size: "enterprise",
  industry: "saas",
});
```

## 📈 **Performance Considerations**

### Performance

- **Scroll events**: Uses `requestAnimationFrame` for smooth performance
- **Exit intent**: Uses `requestAnimationFrame` for smooth performance
- **Feature tracking**: 50% viewport threshold, fires once per feature per page view
- **Resize handling**: Automatically resets scroll tracking on viewport changes

### Memory Management

- Event listeners are properly cleaned up
- Intersection observers disconnect on unmount
- No memory leaks from tracking components
- Proper cleanup on SPA route changes

## 🧪 **Testing & Development**

### Development Mode

- `debug: true` in development
- Console logs for all events
- PostHog debug panel enabled

### Production Mode

- `debug: false` in production
- No console logs
- Optimized for performance

## 🔒 **Privacy & Compliance**

### Data Collected

- Page views and navigation
- Button clicks and interactions
- Scroll behavior
- Feature interest
- Device and browser info
- UTM parameters (from URL)

### Data NOT Collected

- Personal information
- Form input content
- Sensitive user data
- We don't collect PII. Enable IP anonymization or disable geo-IP in PostHog Project Settings → Privacy.

### Error Tracking

- `capture_exceptions: true` is enabled by default
- Includes JavaScript error stack traces for debugging
- Consider disabling in production if error payloads are a concern

### GDPR Compliance

- PostHog provides GDPR compliance tools
- User consent can be managed
- Data retention policies configurable
- IP anonymization available in PostHog settings

## 🚨 **Troubleshooting**

### Common Issues

1. **Events not appearing**: Check PostHog API key and host
2. **Scroll tracking not working**: Ensure ScrollTracker component is mounted
3. **Exit intent not firing**: Check mouse event listeners
4. **Feature tracking missing**: Verify `data-feature` attributes
5. **Duplicate pageview events**: Ensure `capture_pageview: false` is set

### Debug Mode

Enable debug mode to see all events in console:

```typescript
// In PostHog config
{
  capture_pageview: false,
  capture_pageleave: false,
  autocapture: false, // Disable PostHog autocapture for a curated schema
  debug: true
}
```

### QA Testing Checklist

1. **Page Views**: Navigate between pages, confirm single `page_view` event per page
2. **Scroll Tracking**: Scroll to 55%, confirm `scroll_depth: 50` event
3. **CTA Clicks**: Click "Book a Demo" buttons, confirm `cta_click` events with correct `cta_id` values
4. **Feature Views**: Scroll past feature sections, confirm one `feature_view` per section
5. **Exit Intent**: Move mouse to top and leave viewport, confirm single `exit_intent` event
6. **Route Changes**: Navigate between pages, confirm tracking resets properly
7. **Funnel Filter**: Verify CTA filter matches (`cta_text='Book a Demo'` or `cta_id` in `['hero:book-a-demo','final:book-a-demo']`)
8. **UTM Persistence**: Navigate with different UTM strings within same tab, verify only first UTMs appear on subsequent events
9. **Feature Breakdown**: Create a separate chart on `feature_view` filtered to `page_name='landing'` and break down by `feature_name` to ensure clean section names
10. **External CTAs**: Test external links with `send_instantly: true` for reliable delivery
11. **Previous Page Tracking**: Verify `previous_page` transitions correctly (e.g., `landing → about → blog-post`)
12. **No Duplicate Page Views**: Confirm no duplicate `page_view` events on rapid re-renders
13. **Not-Found Page Views**: Hit a bogus path and confirm `page_view` with `page_name='not-found'` and `content_type='not-found'`

## 📚 **Additional Resources**

- [PostHog Documentation](https://posthog.com/docs)
- [Funnel Analysis Guide](https://posthog.com/docs/user-guides/funnels)
- [Event Tracking Best Practices](https://posthog.com/docs/user-guides/events)
- [Privacy & Compliance](https://posthog.com/docs/privacy)
- [IP Anonymization](https://posthog.com/docs/privacy/ip-anonymization)
