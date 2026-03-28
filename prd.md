# GO-SSIP Café & Restro — Website Redesign PRD

**Document Version:** 1.1  
**Status:** Confirmed — Ready for Development  
**Project:** Full Website Redesign — go-ssipcafe.co.in  
**Location:** Central Empire, MM Valley C1 Road, Mumbra, Thane, Maharashtra 400612  
**Contact:** gossipcafe2024@gmail.com · +91 992-056-4615  
**Instagram:** @gossip_cafeandrestro

> **Confirmed decisions:** Next.js 14 + MongoDB + Cloudinary stack. Videos available. Menu shows item names and descriptions only — no prices.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Target Audience](#4-target-audience)
5. [Brand & Design System](#5-brand--design-system)
6. [Site Architecture](#6-site-architecture)
7. [Page Specifications](#7-page-specifications)
8. [Dynamic Features](#8-dynamic-features)
9. [Interaction & Animation Spec](#9-interaction--animation-spec)
10. [Tech Stack & Architecture](#10-tech-stack--architecture)
11. [Data Models](#11-data-models)
12. [Cloudinary Media Strategy](#12-cloudinary-media-strategy)
13. [Content Requirements](#13-content-requirements)
14. [Build Priority Matrix](#14-build-priority-matrix)
15. [Performance Targets](#15-performance-targets)
16. [Out of Scope](#16-out-of-scope)

---

## 1. Executive Summary

GO-SSIP Café & Restro is a premium café and restaurant in Mumbra, Thane, offering international cuisine, specialty coffees, boba, burgers, pizza, and more. The current website (go-ssipcafe.co.in) uses a generic WordPress theme that fails to capture the café's warm, upscale brand identity or leverage its video and photography assets.

This PRD defines the requirements for a complete redesign into a **cinematic, dark-themed, fully dynamic website** built on Next.js 14, MongoDB, and Cloudinary — anchored by video storytelling, immersive scroll animations, and a visual identity derived directly from the brand logo: deep espresso browns, warm amber-gold accents, and cream typography.

The redesign transforms the site from a static information page into a compelling digital experience that drives footfall, increases Instagram engagement, and converts visitors into customers.

---

## 2. Problem Statement

| Problem | Impact |
|---|---|
| Generic WordPress theme with no brand identity | Visitors don't associate the site with the café's warm, premium vibe |
| No video integration | Café ambience video assets sit unused — a missed storytelling opportunity |
| No conversion hooks | No clear CTAs for directions, calls, or WhatsApp — customers drop off |
| Not mobile-first | Most visitors arrive on mobile but the layout doesn't serve the thumb zone |
| Static menu display | No filter, no category browsing — hard to discover dishes |
| Weak social integration | Instagram presence (@gossip_cafeandrestro) is not leveraged on the site |
| No content management | Menu and media updates require a developer |

---

## 3. Goals & Success Metrics

### Primary Goals

- Establish a visually distinctive, brand-aligned digital identity
- Integrate video assets as the centrepiece of the homepage experience
- Drive real-world actions: calls, directions, WhatsApp messages
- Increase Instagram follower acquisition from the website
- Enable the café owner to update menu items and media without developer help

### Success Metrics

| Metric | Target |
|---|---|
| Avg. session duration | 3× increase over current |
| Mobile bounce rate | Reduce by 40% |
| Click-to-call / WhatsApp taps | ≥ 25% of mobile visitors |
| Instagram CTA clicks | 2× current click-through rate |
| Lighthouse Performance (mobile) | ≥ 85 |
| Largest Contentful Paint | ≤ 2.5 seconds |

---

## 4. Target Audience

### Primary Segments

**Young Professionals (22–35)**
Mumbra/Thane residents seeking premium café experiences on weekday evenings. Value aesthetics, ambience photography, and easy access to the menu.

**Families**
Weekend diners looking for an international menu with diverse options. Need clear hours, directions, and a sense of the space before visiting.

**Students & Friend Groups**
The younger weekend crowd attracted to boba, smoothies, and burgers. Highly social-media-driven — heavily influenced by Instagram presence and visual appeal.

### User Behaviour Assumptions

- 70%+ of visits are on mobile devices
- Most visitors have already discovered the café via Instagram or word of mouth and are validating before a visit
- Key actions: browse menu items, get directions, call or WhatsApp, follow on Instagram

---

## 5. Brand & Design System

### 5.1 Logo-Derived Identity

The brand logo uses **warm burnt-orange on deep espresso brown**. The entire visual system extends this palette to create a consistent, immersive brand world. The mood is: *a dimly lit upscale café where the ambient candlelight is the warmest thing in the room.*

### 5.2 Color Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-espresso` | Espresso | `#1a0a00` | Primary page background |
| `--color-dark-roast` | Dark Roast | `#2d1200` | Section backgrounds, nav |
| `--color-sienna` | Burnt Sienna | `#8b3a0a` | Mid-tone accents, hover states |
| `--color-amber` | Amber Gold | `#d47828` | Primary accent, CTAs, active states |
| `--color-honey` | Honey | `#f0a040` | Light accent, hover highlights |
| `--color-cream` | Cream | `#f5ddb0` | Primary text on dark backgrounds |
| `--color-white` | Pure White | `#ffffff` | Text on cards and light sections |

**Light section override (Menu page, Cards):**
- Background: `#faf7f2` (warm off-white)
- Text: `#1a0a00` (espresso)
- Accent: `#d47828` (amber)

### 5.3 Typography

**Display / Hero — Playfair Display (Google Fonts)**
Serif with editorial warmth. Used for hero headlines, section titles, menu category names. Weights: 700 (headline), 400 italic (pull quotes).

**Body / UI — DM Sans (Google Fonts)**
Clean humanist sans-serif. Used for navigation, body copy, descriptions, buttons, hours, contact info. Weights: 400 (body), 500 (labels), 600 (buttons).

**Accent / Labels — Cormorant Garamond (Google Fonts)**
Elegant serif for categorical text. Used for uppercase category labels, badge text, and decorative accents. Style: uppercase, letter-spacing 0.12em, 11–12px.

### 5.4 Type Scale

| Element | Font | Desktop | Mobile | Weight |
|---|---|---|---|---|
| Hero headline | Playfair Display | 64px | 38px | 700 |
| Section title | Playfair Display | 44px | 30px | 700 |
| Card title | Playfair Display | 22px | 20px | 700 |
| Category label | Cormorant Garamond | 12px | 11px | 600, uppercase |
| Body copy | DM Sans | 17px | 16px | 400 |
| Nav links | DM Sans | 15px | 16px | 500 |
| Button text | DM Sans | 14px | 14px | 600 |

### 5.5 Visual Mood System

**Grain texture overlay** — A subtle SVG noise filter (`feTurbulence`) sits atop dark sections at 3–5% opacity, giving depth reminiscent of film photography.

**Warm light leak** — Amber radial gradients (`#d47828` at 15% opacity) at section corners simulate candlelight. Used on hero, about section, and footer.

**Image treatment** — All food and café images use CSS filter `sepia(0.08) saturate(1.15) brightness(1.04) contrast(1.05)` for colour palette consistency. Applied globally via a Tailwind utility class.

**Vignette overlays** — On video sections, a radial gradient overlay (`rgba(0,0,0,0.5)` to transparent) ensures text legibility regardless of video content.

### 5.6 Spacing & Radius

Spacing system: 4px grid. Key values: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120px.

Border radius: Buttons 6px · Menu cards 16px · Gallery thumbnails 12px · Full-bleed sections 0px.

---

## 6. Site Architecture

```
go-ssipcafe.co.in/
├── /                    → Home page
├── /menu                → Menu (all categories, filter UI)
├── /about               → Brand story, values, photo collage
├── /gallery             → Masonry photo + video gallery
├── /contact             → Map, hours, call/WhatsApp CTAs
└── /api/                → Next.js API routes (internal)
    ├── /api/menu        → GET all menu items (MongoDB)
    ├── /api/gallery     → GET gallery media (Cloudinary + MongoDB)
    └── /api/settings    → GET site settings (hours, contact info)
```

### Navigation

Home · Menu · About · Gallery · Contact · **[Call Us]** (amber button, right-aligned)

---

## 7. Page Specifications

### 7.1 Home Page

**Section 1 — Full-Screen Video Hero**
- 100vh viewport height
- Autoplay, muted, looped café ambience video served from Cloudinary CDN
- Fallback: Cloudinary-hosted poster image if video fails within 3 seconds
- Dark vignette overlay ensures text legibility at all times
- Logo mark top-left (small), hero tagline in Playfair Display, one-line subtitle in DM Sans
- Tagline: *"Sip. Savour. Connect."*
- CTAs: "Explore Menu" (amber fill) and "Find Us" (outlined cream)
- Animated scroll-down chevron in cream; fades out after 100px scroll

**Section 2 — About Snippet**
- Two-column split (60/40 desktop, stacked mobile)
- Left: large café interior image (Cloudinary) with grain overlay and amber corner light leak
- Right: brand copy (max 80 words), three icon pillars (Coffee · Cuisine · Community), CTA "Our Story →"

**Section 3 — Featured Menu Highlights**
- Section title: "What We're Famous For"
- 4 featured items fetched from MongoDB (`isFeatured: true`)
- 2×2 grid desktop, horizontal scroll mobile
- Each card: Cloudinary-optimised image, amber category label, item name in Playfair, 1-line description
- Hover: card lifts 4px, amber box-shadow
- CTA: "Explore Full Menu →" links to `/menu`

**Section 4 — Ambience Video Strip**
- Full-width, 21:9 aspect ratio container
- Second café video from Cloudinary, autoplays at 50% viewport visibility (Intersection Observer)
- Amber gradient letterbox overlays top and bottom
- Centred Playfair italic quote or tagline overlay

**Section 5 — Instagram Feed Teaser**
- Section title: "Follow the Vibe"
- 6-photo grid (3×2 desktop, 2×3 mobile) from @gossip_cafeandrestro
- Hover: image dims, heart icon appears
- CTA: "Follow @gossip_cafeandrestro →" opens Instagram in new tab

**Section 6 — Visit Us Strip**
- Dark bar (`#2d1200`), three columns: Hours · Address · Contact
- Hours data fetched from MongoDB settings collection
- Mobile: stacks as tappable cards (tel:, maps deeplink, wa.me link)

**Footer**
- Logo, nav links, Instagram icon, copyright
- Background: `#1a0a00`

---

### 7.2 Menu Page

**Hero**
- Short hero (~50vh) with café image or short video background
- Page title "Our Menu" in Playfair Display, amber underline decoration

**Category Filter Bar**
- Sticky below hero on scroll
- Horizontal scroll on mobile
- Tabs dynamically generated from distinct `category` values in MongoDB
- Active tab: amber ink-underline animation
- Each tab badge shows live item count

**Menu Grid**
- Items fetched from `/api/menu` (SSR on initial load)
- 3 columns desktop · 2 columns tablet · 1 column mobile
- Each item card:
  - Cloudinary-optimised image (`f_auto,q_auto,w_600,h_600,c_fill`)
  - Category label (Cormorant Garamond, uppercase, amber)
  - Item name (Playfair Display)
  - Short description (DM Sans, muted cream)
  - **No price displayed**
  - Veg / Non-Veg dot indicator (green dot / red dot per FSSAI convention)
- Filter is instant client-side — all data pre-loaded, JS toggles visibility, 200ms fade transition

---

### 7.3 About Page

**Hero**
- Full-width video background, 40% opacity with espresso overlay
- Title: "The GO-SSIP Story"

**Brand Story**
- 200–300 word narrative, two-column layout
- Pull quote in Playfair italic with amber left border

**Values Section**
- Three cards: Premium Coffee · International Cuisine · Community First
- SVG icons in amber

**Café Photo Collage**
- Asymmetric masonry grid, 6–8 interior/ambience photos from Cloudinary

---

### 7.4 Gallery Page

**Category Filter** — Tabs: All · Food · Ambience · Events

**Masonry Photo Grid**
- CSS columns: 3 desktop · 2 tablet · 1 mobile
- Images from Cloudinary (`f_auto,q_auto,w_800`)
- Lazy loading with blur-up LQIP placeholders (Cloudinary `e_blur:1000,q_1`)
- Items stagger into view on scroll (Framer Motion, 50ms delay per item)
- Click → fullscreen lightbox (prev/next, keyboard ← → Escape, swipe on touch)

**Video Thumbnails in Gallery**
- Cloudinary auto-thumbnail (`so_auto` — best representative frame)
- Amber play icon overlay
- Click → lightbox with video player (amber progress bar, cream controls)

---

### 7.5 Contact Page

**Hero strip** — Short dark hero, title "Find Us"

**Three-column info (desktop) / stacked (mobile)**

*Column 1 — Location*
- Full address, Google Maps embed
- "Get Directions" button deeplinks to Google Maps app

*Column 2 — Hours*
- Styled table, hours from MongoDB settings
- Live "Open Now" / "Closed" badge — client-side JS, IST timezone

*Column 3 — Get In Touch*
- Click-to-call: `tel:+919920564615`
- WhatsApp: `https://wa.me/919920564615`
- Email: `gossipcafe2024@gmail.com`
- Instagram link

---

## 8. Dynamic Features

### 8.1 Video Features

| Feature | Priority | Notes |
|---|---|---|
| Autoplay muted looping hero video | P1 | Cloudinary CDN, poster fallback |
| Scroll-triggered mid-page ambience video | P1 | Intersection Observer, 50% visibility |
| Video lightbox in Gallery | P2 | Custom brand-styled controls |
| About page background video loop | P2 | Low opacity, plays behind brand copy |

### 8.2 Image Features

| Feature | Priority | Notes |
|---|---|---|
| CSS warm-grade filter on all food images | P1 | Tailwind utility class, applied globally |
| Cloudinary auto WebP conversion | P1 | `f_auto,q_auto` in all image URLs |
| Gallery masonry with lazy loading | P2 | CSS columns, stagger animation |
| LQIP blur-up placeholders | P2 | Cloudinary `e_blur:1000,q_1` placeholder |
| Menu item card hover lift | P1 | `translateY(-4px)`, amber shadow |

### 8.3 Animation & Scroll Effects

| Feature | Priority | Notes |
|---|---|---|
| Hero tagline reveal animation | P1 | Framer Motion `AnimatePresence` + stagger |
| Scroll-triggered fade-up on sections | P1 | Framer Motion `whileInView` |
| Sticky nav: transparent → dark on scroll | P1 | `scrollY` listener, Tailwind transition |
| Menu tab ink-underline animation | P1 | Framer Motion `layoutId` sliding indicator |
| Parallax on hero (30% scroll rate) | P2 | Framer Motion `useScroll` + `useTransform` |
| Gallery image stagger-in | P2 | Framer Motion `staggerChildren` |

### 8.4 Interactive / Functional

| Feature | Priority | Notes |
|---|---|---|
| Menu category filter (instant, client-side) | P1 | State-driven, data pre-loaded |
| Floating WhatsApp + Call button (mobile) | P1 | Fixed position, opens native app |
| Google Maps embed on Contact page | P1 | With "Get Directions" deeplink |
| Live Open/Closed status indicator | P2 | IST timezone, hours from MongoDB |
| Instagram feed embed | P2 | Embedded iframe or oEmbed |
| Mobile nav hamburger menu | P1 | Framer Motion full-screen slide-in overlay |

---

## 9. Interaction & Animation Spec

### 9.1 Navigation

**Desktop**
- Fixed full-width nav bar; logo left · links centre · "Call Us" button right
- On dark hero: fully transparent background
- On scroll past 80px: transitions to `#1a0a00` with 1px amber bottom border (300ms ease)
- Nav links: amber underline slides in from left on hover (`scaleX 0→1`, 200ms)

**Mobile**
- Hamburger icon (3 lines → animated X on open, Framer Motion)
- Full-screen overlay slides in from right (300ms ease-out)
- Links stagger in (50ms each, Framer Motion `staggerChildren`)
- Phone number and Instagram handle pinned at bottom of overlay

### 9.2 Hero Animation Sequence

| Time | Event |
|---|---|
| 0ms | Page loads, video begins playing |
| 300ms | Tagline begins character clip animation (Framer Motion) |
| 800ms | Subtitle fades up (300ms) |
| 1100ms | CTAs fade up, staggered 100ms apart |
| 1500ms | Scroll indicator fades in |
| scroll > 100px | Scroll indicator fades out |

### 9.3 Menu Page

- Filter bar sticks below page header on scroll
- Tab click: Framer Motion `layoutId="tab-underline"` slides amber indicator to active tab
- Grid: `AnimatePresence` fades items out (100ms), filtered items fade in (200ms)
- Item count badges update reactively with filter state

### 9.4 Gallery Lightbox

- Opens on click; background `rgba(0,0,0,0.92)`
- Image/video centred, max 90vw × 90vh
- Prev/Next in cream → amber on hover
- Close button top-right (×)
- Keyboard: ← → Escape · Touch: swipe left/right

### 9.5 Floating Action Buttons (Mobile Only)

- Fixed bottom-right, 16px from edges
- WhatsApp (green circle) above, Call (amber circle) below
- 48×48px each, SVG icon centred
- Tap → opens native app immediately

---

## 10. Tech Stack & Architecture

### Confirmed Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 14 (App Router) | SSR/SSG, routing, API routes, image optimisation |
| Language | TypeScript | 5.x | Type safety across frontend and API routes |
| Styling | Tailwind CSS | 3.x | Utility-first, responsive, design token config |
| Animation | Framer Motion | 11.x | Scroll animations, layout transitions, page transitions |
| Database | MongoDB | 7.x (Atlas) | Menu items, gallery metadata, site settings, hours |
| ODM | Mongoose | 8.x | Schema validation, typed models |
| Media CDN | Cloudinary | Node SDK v2 | Image & video hosting, on-the-fly transforms, delivery |
| Hosting | Vercel | — | Zero-config Next.js deployment, edge CDN |
| Fonts | next/font (Google) | — | Playfair Display, DM Sans, Cormorant Garamond |
| Maps | Google Maps Embed API | — | Static map embed + Directions deeplink |
| Analytics | Vercel Analytics | — | Privacy-first, zero config |

### Architecture Overview

```
Browser
  └── Next.js App (Vercel Edge)
        ├── Pages (SSR / SSG)
        │     ├── / (Home)      — SSG, ISR revalidate 60s
        │     ├── /menu         — SSR, fetches MongoDB per request
        │     ├── /gallery      — SSG, ISR revalidate 300s
        │     ├── /about        — Static (SSG, no revalidation)
        │     └── /contact      — SSG, ISR revalidate 3600s
        └── API Routes
              ├── GET /api/menu      → MongoDB menuItems collection
              ├── GET /api/gallery   → MongoDB galleryItems collection
              └── GET /api/settings  → MongoDB settings collection

MongoDB Atlas
  ├── menuItems       (name, description, category, cloudinaryId, isVeg, isFeatured)
  ├── galleryItems    (type, category, cloudinaryId, dimensions, sortOrder)
  └── settings        (operating_hours, contact_info)

Cloudinary
  ├── /gossip-cafe/videos/   (hero loop, ambience strip, gallery videos)
  ├── /gossip-cafe/menu/     (food photography by category)
  ├── /gossip-cafe/gallery/  (ambience, events, food gallery)
  └── /gossip-cafe/site/     (logo, poster fallback, OG image)
```

### Environment Variables

```bash
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/gossip-cafe

# Cloudinary
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<cloud_name>

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<key>

# App
NEXT_PUBLIC_SITE_URL=https://go-ssipcafe.co.in
```

---

## 11. Data Models

### 11.1 MenuItem

```typescript
interface MenuItem {
  _id: ObjectId;
  name: string;              // "Boba Matcha Latte"
  description: string;       // Short description, max 100 chars
  category: MenuCategory;
  imagePublicId: string;     // Cloudinary public_id
  imageUrl: string;          // Cloudinary base delivery URL
  isVeg: boolean;            // true = green dot, false = red dot
  isFeatured: boolean;       // true = show on homepage Featured section
  isAvailable: boolean;      // false = hidden from public menu
  sortOrder: number;         // Manual ordering within category
  createdAt: Date;
  updatedAt: Date;
}

type MenuCategory =
  | 'coffee'
  | 'boba-smoothie'
  | 'bao-burger'
  | 'pizza-pasta'
  | 'desserts'
  | 'specials';
```

> **No `price` field.** Prices are intentionally excluded from the data model and the UI per client decision.

### 11.2 GalleryItem

```typescript
interface GalleryItem {
  _id: ObjectId;
  type: 'photo' | 'video';
  title?: string;              // Optional caption shown in lightbox
  category: GalleryCategory;
  cloudinaryPublicId: string;
  cloudinaryUrl: string;       // Base delivery URL
  thumbnailUrl: string;        // Auto-generated for videos (so_auto)
  width: number;               // Original width (for aspect ratio reserving)
  height: number;
  sortOrder: number;
  isVisible: boolean;
  createdAt: Date;
}

type GalleryCategory = 'food' | 'ambience' | 'events';
```

### 11.3 SiteSettings

```typescript
interface SiteSettings {
  _id: ObjectId;
  key: string;
  value: Record<string, unknown>;
}

// Example document — operating_hours
{
  key: "operating_hours",
  value: {
    monday:    { open: "15:00", close: "23:00" },
    tuesday:   { open: "15:00", close: "23:00" },
    wednesday: { open: "15:00", close: "23:00" },
    thursday:  { open: "15:00", close: "23:00" },
    friday:    { open: "15:00", close: "23:00" },
    saturday:  { open: "14:00", close: "23:00" },
    sunday:    { open: "14:00", close: "23:00" }
  }
}
```

---

## 12. Cloudinary Media Strategy

### Folder Structure

```
/gossip-cafe/
├── site/
│   ├── logo.svg
│   ├── hero-poster.jpg          ← fallback for hero video
│   └── og-image.jpg             ← Open Graph 1200×630
├── videos/
│   ├── hero-loop.mp4            ← homepage hero, 15–30s loopable
│   └── ambience-strip.mp4       ← mid-page section video
├── menu/
│   ├── coffee/
│   ├── boba-smoothie/
│   ├── bao-burger/
│   └── pizza-pasta/
└── gallery/
    ├── food/
    ├── ambience/
    └── events/
```

### Image Transform Presets

| Use Case | Transform String | Output |
|---|---|---|
| Menu item card | `f_auto,q_auto,w_600,h_600,c_fill` | Square crop, auto WebP |
| Gallery thumbnail | `f_auto,q_auto,w_800,c_fill` | Responsive, auto WebP |
| Gallery LQIP placeholder | `f_auto,q_1,w_40,e_blur:1000` | Tiny blur-up, ~1KB |
| Hero poster fallback | `f_auto,q_80,w_1920` | Full-width, quality 80 |
| Open Graph image | `f_auto,q_80,w_1200,h_630,c_fill` | 1200×630 OG spec |

### Video Delivery

- All videos uploaded as MP4, served via Cloudinary streaming with `f_auto` (delivers WebM to supporting browsers automatically)
- Hero video: `preload="metadata"` — loads first frame quickly for perceived performance
- All other videos: `preload="none"` — loaded only when triggered
- Video gallery thumbnails: auto-generated with `so_auto` (Cloudinary selects best representative frame)

---

## 13. Content Requirements

### Video Assets ✅ Confirmed Available

| Asset | Specs | Required |
|---|---|---|
| Hero video (café atmosphere) | Landscape, min 1080p, 15–30s, MP4 H.264, loopable | Yes |
| Ambience / B-roll video (mid-page) | Landscape, min 1080p, 15–60s, MP4 H.264 | Yes |
| Additional gallery videos | Any orientation, min 720p, MP4 | Optional |

### Image Assets

| Asset | Specs | Required |
|---|---|---|
| Food photos (per menu item) | Min 800×800px, JPG/PNG, well-lit | Yes |
| Café interior / ambience photos | Landscape, min 1280×720px, 8–12 photos | Yes |
| Hero poster / video fallback | Landscape, min 1920×1080px | Yes |
| Logo | SVG preferred; PNG with transparent background acceptable | Yes |

### Text & Information

| Asset | Notes | Required |
|---|---|---|
| Brand story / About copy | 150–250 words | Yes |
| Menu items (all categories) | Name + 1-line description + category + veg/non-veg flag — **no prices** | Yes |
| Operating hours | All 7 days, open/close times | Yes |
| Address confirmation | With Google Maps Place ID if available | Yes |
| Social links | Instagram handle, WhatsApp number | Yes |

---

## 14. Build Priority Matrix

### Phase 1 — Core Launch (Weeks 1–3)

| Feature | Priority |
|---|---|
| Next.js 14 project setup + TypeScript + Tailwind config | P1 |
| MongoDB Atlas connection via Mongoose | P1 |
| Cloudinary SDK setup + upload presets configured | P1 |
| Brand design system (Tailwind tokens, fonts, global styles) | P1 |
| Video hero — Cloudinary delivery, autoplay, poster fallback | P1 |
| Hero animation sequence (Framer Motion) | P1 |
| Sticky nav with scroll transparency → dark transition | P1 |
| Mobile-responsive layout across all 5 pages | P1 |
| Menu page — MongoDB data fetch + category filter UI | P1 |
| Floating WhatsApp + Call CTA (mobile) | P1 |
| Contact page — Google Maps embed + hours from MongoDB | P1 |
| About page (static content, photo collage) | P1 |
| Framer Motion `whileInView` fade-up on all sections | P1 |

### Phase 2 — Enrichment (Weeks 4–6)

| Feature | Priority |
|---|---|
| Gallery page — masonry grid + photo lightbox | P2 |
| Video lightbox for gallery videos | P2 |
| LQIP blur-up placeholders via Cloudinary | P2 |
| Ambience mid-page video strip (Intersection Observer trigger) | P2 |
| Instagram feed embed | P2 |
| Live Open/Closed status indicator (IST, MongoDB hours) | P2 |
| Hero parallax scroll (Framer Motion `useScroll`) | P2 |
| Gallery stagger-in animation (`staggerChildren`) | P2 |
| About page background video loop | P2 |

### Phase 3 — Enhancements (Weeks 7–10)

| Feature | Priority |
|---|---|
| Simple admin panel for menu + gallery CRUD | P3 |
| Menu item 3D flip cards on hover | P3 |
| SEO — Open Graph tags, JSON-LD schema, sitemap.xml, robots.txt | P3 |
| Online table reservation widget (3rd party embed) | P3 |
| `next-pwa` — Progressive Web App / Add to Home Screen | P3 |

---

## 15. Performance Targets

| Metric | Target | Notes |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 85 | Moto G4 simulation |
| Lighthouse Accessibility | ≥ 90 | WCAG 2.1 AA minimum |
| Largest Contentful Paint (LCP) | ≤ 2.5s | Hero poster (Cloudinary) ≤ 150KB |
| First Input Delay (FID) | ≤ 100ms | No blocking JS on initial load |
| Cumulative Layout Shift (CLS) | ≤ 0.1 | `aspect-ratio` on all media containers |
| Total page weight — home, initial JS | ≤ 1.5MB | Excluding video stream |
| Video delivery | Cloudinary CDN only | Never served from Vercel origin |
| Image format | WebP via `f_auto` | JPG/PNG fallback automatic |
| Next.js `<Image>` | Used for all `<img>` tags | Automatic lazy load + blur placeholder |
| MongoDB API response time | ≤ 300ms | Atlas cluster in closest region to Vercel edge |

---

## 16. Out of Scope

The following are explicitly **not** in scope for this project unless separately agreed:

- Menu item prices displayed anywhere on the site
- Online ordering or e-commerce integration
- Loyalty programme or customer accounts
- Email newsletter signup or marketing automation
- Multi-language versions (Hindi / Marathi)
- Blog or editorial content section
- Third-party delivery platform widgets (Swiggy / Zomato)
- Payment integration of any kind
- Authenticated staff dashboard (Phase 3 admin is an unprotected local tool only)

---

*Document prepared for: GO-SSIP Café & Restro, Mumbra, Thane*  
*Prepared by: Claude (Anthropic) — Design & Product Specification*  
*Version 1.1 — March 2026*
*Stack confirmed: Next.js 14 · MongoDB Atlas · Cloudinary · Vercel · Framer Motion*
