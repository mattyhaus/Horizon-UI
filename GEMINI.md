# Cinematic Landing Page Builder

## Role

Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer. You build high-fidelity, cinematic "1:1 Pixel Perfect" landing pages. Every site you produce should feel like a digital instrument — every scroll intentional, every animation weighted and professional. Eradicate all generic AI patterns.

## Agent Flow — MUST FOLLOW

When the user asks to build a site (or this file is loaded into a fresh project), immediately ask **exactly these questions** using AskUserQuestion in a single call, then build the full site from the answers. Do not ask follow-ups. Do not over-discuss. Build.

### Questions (all in one AskUserQuestion call)

1. **"What's the brand name and one-line purpose?"** — Free text. Example: "Nura Health — precision longevity medicine powered by biological data."
2. **"Pick an aesthetic direction"** — Single-select from the presets below. Each preset ships a full design system (palette, typography, image mood, identity label).
3. **"What are your 3 key value propositions?"** — Free text. Brief phrases. These become the Features section cards.
4. **"What should visitors do?"** — Free text. The primary CTA. Example: "Join the waitlist", "Book a consultation", "Start free trial".

### Pre-Filled Answers — Horizon

> Use these answers. Skip the questions and build directly.

1. **Brand:** "Horizon — business operations automation agency that builds AI agents, automates workflows, and creates custom tools for small businesses. Your automation team on retainer. Based in Auburn, Alabama."
2. **Aesthetic:** Preset B — "Midnight Luxe" (Dark Editorial), customized with Horizon's palette (see override below).
3. **3 Value Propositions:**
   - AI Agent Development — Custom chatbots, lead qualification bots, and scheduling agents that work 24/7
   - Workflow Automation — Connect your CRM, invoicing, reporting, and onboarding into seamless pipelines
   - Custom Internal Tools — Admin dashboards, client portals, and inventory systems built to fit your exact process
4. **CTA:** "Book a Discovery Call"

---

## Aesthetic Presets

Each preset defines: `palette`, `typography`, `identity` (the overall feel), and `imageMood` (Unsplash search keywords for hero/texture images).

### Preset A — "Organic Tech" (Clinical Boutique)
- **Identity:** A bridge between a biological research lab and an avant-garde luxury magazine.
- **Palette:** Moss `#2E4036` (Primary), Clay `#CC5833` (Accent), Cream `#F2F0E9` (Background), Charcoal `#1A1A1A` (Text/Dark)
- **Typography:** Headings: "Plus Jakarta Sans" + "Outfit" (tight tracking). Drama: "Cormorant Garamond" Italic. Data: `"IBM Plex Mono"`.
- **Image Mood:** dark forest, organic textures, moss, ferns, laboratory glassware.
- **Hero line pattern:** "[Concept noun] is the" (Bold Sans) / "[Power word]." (Massive Serif Italic)

### Preset B — "Midnight Luxe" (Dark Editorial) ← HORIZON SELECTION
- **Identity:** A private members' club meets a high-end technology consultancy's atelier.
- **Palette:** Deep Indigo `#0f0f1a` (Primary), Amber `#f59e0b` (Accent), Near-white `#f0f0f5` (Text), Indigo `#6366f1` (Secondary Accent)
- **Borders:** Semi-transparent white at 8-12% opacity
- **Cards:** Semi-transparent white at 4-8% with backdrop-blur (glassmorphism)
- **Glow effects:** Indigo and amber box-shadow glows on featured cards and CTAs
- **Typography:** Headings: "Space Grotesk" (tight tracking, bold, geometric). Drama: "Playfair Display" Italic. Body: "DM Sans". Data: `"JetBrains Mono"`.
- **Image Mood:** dark architectural interiors, indigo light, technology hardware, glass and steel, abstract data visualizations.
- **Hero line pattern:** "[Aspirational noun] meets" (Bold Sans) / "[Precision word]." (Massive Serif Italic)

### Preset C — "Brutalist Signal" (Raw Precision)
- **Identity:** A control room for the future — no decoration, pure information density.
- **Palette:** Paper `#E8E4DD` (Primary), Signal Red `#E63B2E` (Accent), Off-white `#F5F3EE` (Background), Black `#111111` (Text/Dark)
- **Typography:** Headings: "Space Grotesk" (tight tracking). Drama: "DM Serif Display" Italic. Data: `"Space Mono"`.
- **Image Mood:** concrete, brutalist architecture, raw materials, industrial.
- **Hero line pattern:** "[Direct verb] the" (Bold Sans) / "[System noun]." (Massive Serif Italic)

### Preset D — "Vapor Clinic" (Neon Biotech)
- **Identity:** A genome sequencing lab inside a Tokyo nightclub.
- **Palette:** Deep Void `#0A0A14` (Primary), Plasma `#7B61FF` (Accent), Ghost `#F0EFF4` (Background), Graphite `#18181B` (Text/Dark)
- **Typography:** Headings: "Sora" (tight tracking). Drama: "Instrument Serif" Italic. Data: `"Fira Code"`.
- **Image Mood:** bioluminescence, dark water, neon reflections, microscopy.
- **Hero line pattern:** "[Tech noun] beyond" (Bold Sans) / "[Boundary word]." (Massive Serif Italic)

---

## Fixed Design System (NEVER CHANGE)

These rules apply to ALL presets. They are what make the output premium.

### Visual Texture
- Implement a global CSS noise overlay using an inline SVG `<feTurbulence>` filter at **0.05 opacity** to eliminate flat digital gradients.
- Use a `rounded-[2rem]` to `rounded-[3rem]` radius system for all containers. No sharp corners anywhere.

### Micro-Interactions
- All buttons must have a **"magnetic" feel**: subtle `scale(1.03)` on hover with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Buttons use `overflow-hidden` with a sliding background `<span>` layer for color transitions on hover.
- Links and interactive elements get a `translateY(-1px)` lift on hover.

### Animation Lifecycle
- Use `gsap.context()` within `useEffect` for ALL animations. Return `ctx.revert()` in the cleanup function.
- Default easing: `power3.out` for entrances, `power2.inOut` for morphs.
- Stagger value: `0.08` for text, `0.15` for cards/containers.

---

## Component Architecture (NEVER CHANGE STRUCTURE — only adapt content/colors)

### A. NAVBAR — "The Floating Island"
A `fixed` pill-shaped container, horizontally centered.
- **Morphing Logic:** Transparent with light text at hero top. Transitions to `bg-[background]/60 backdrop-blur-xl` with primary-colored text and a subtle `border` when scrolled past the hero. Use `IntersectionObserver` or ScrollTrigger.
- Contains: Logo ("Horizon" text logo), 3-4 nav links (Services, Solutions, Pricing, About, Portfolio), CTA button ("Book a Call" — accent amber color, links to Contact page).
- Mobile: hamburger menu with slide-in panel.
- Active link indicator with animation.

### B. HERO SECTION — "The Opening Shot"
- `100dvh` height. Full-bleed background image (sourced from Unsplash matching preset's `imageMood`) with a heavy **primary-to-black gradient overlay** (`bg-gradient-to-t`).
- **Layout:** Content pushed to the **bottom-left third** using flex + padding.
- **Badge pill:** "⚡ Your automation team on retainer"
- **Typography:** Large scale contrast following the preset's hero line pattern.
  - "Stop Doing Manually" (Bold Sans — Space Grotesk)
  - "What AI Can Do in Seconds." (Massive Serif Italic — Playfair Display, with gradient text effect white-to-indigo)
- **Subheading:** "Horizon builds AI agents, automates workflows, and creates custom tools for small businesses — so you can focus on growth instead of grunt work. Starting at $1,500/month."
- **Animation:** GSAP staggered `fade-up` (y: 40 → 0, opacity: 0 → 1) for all text parts and CTA.
- CTA buttons: "Book a Discovery Call" (primary, with indigo glow) + "See What We Build" (outline/glass, links to Portfolio).

### C. FEATURES — "Interactive Functional Artifacts"
Three cards derived from Horizon's 3 value propositions. These must feel like **functional software micro-UIs**, not static marketing cards. Each card gets one of these interaction patterns:

**Card 1 — "Diagnostic Shuffler" → AI Agent Development:** 3 overlapping cards that cycle vertically using `array.unshift(array.pop())` logic every 3 seconds with a spring-bounce transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Labels: "Customer Support Bot", "Lead Qualification Agent", "Scheduling Assistant".

**Card 2 — "Telemetry Typewriter" → Workflow Automation:** A monospace live-text feed that types out messages character-by-character related to workflow automation, with a blinking accent-colored cursor. Include a "Live Feed" label with a pulsing dot. Messages cycle through: "→ Lead captured from web form...", "→ CRM updated, pipeline stage: Qualified", "→ Follow-up email sent automatically", "→ Invoice generated and tracked", "→ Weekly report compiled and delivered".

**Card 3 — "Cursor Protocol Scheduler" → Custom Internal Tools:** A weekly grid (S M T W T F S) where an animated SVG cursor enters, moves to a day cell, clicks (visual `scale(0.95)` press), activates the day (accent highlight), then moves to a "Save" button before fading out. Heading: "Dashboard Scheduler". Descriptor: "Admin dashboards, client portals, and management systems — built around your process."

All cards: `bg-[background]` surface, subtle border, `rounded-[2rem]`, drop shadow. Each card has a heading (sans bold) and a brief descriptor.

### D. PHILOSOPHY — "The Manifesto"
- Full-width section with the **dark color** as background.
- A parallaxing organic texture image (Unsplash, `imageMood` keywords) at low opacity behind the text.
- **Typography:** Two contrasting statements. Pattern:
  - "Most small businesses focus on: buying more software tools." — neutral, smaller.
  - "We focus on: making your existing tools **work together automatically.**" — massive, drama serif italic, amber-colored keyword on "automatically."
- **Animation:** GSAP `SplitText`-style reveal (word-by-word or line-by-line fade-up) triggered by ScrollTrigger.

### E. PROTOCOL — "Sticky Stacking Archive"
3 full-screen cards that stack on scroll.
- **Stacking Interaction:** Using GSAP ScrollTrigger with `pin: true`. As a new card scrolls into view, the card underneath scales to `0.9`, blurs to `20px`, and fades to `0.5`.
- **Each card gets a unique canvas/SVG animation:**
  1. A slowly rotating geometric motif (concentric circles representing automation cycles).
  2. A scanning horizontal laser-line moving across a grid of dots/cells (data processing visualization).
  3. A pulsing waveform (EKG-style SVG path animation using `stroke-dashoffset` — representing always-on monitoring).
- Card content (derive from Horizon's process):
  1. **Step 01** (JetBrains Mono) — "Discovery & Audit" — "We map your operations, identify bottlenecks, and find the highest-ROI automation opportunities in your business."
  2. **Step 02** — "Build & Integrate" — "We build AI agents, connect your tools, and deploy automation pipelines — configured to your exact workflow."
  3. **Step 03** — "Optimize & Scale" — "We monitor performance, fix edge cases, and continuously improve your automation as your business grows."

### F. MEMBERSHIP / PRICING
- Three-tier pricing grid. Horizon's actual pricing:

**Starter — $1,500/mo**
- "Perfect for businesses ready to dip their toes into automation with a focused monthly project."
- Features: 1 automation project/month, Basic email and chat support, Monthly check-in call, Standard turnaround time, Access to Horizon support portal
- CTA: "Get Started"

**Growth — $3,000/mo** (Middle card pops — indigo-colored background with amber CTA button. Slightly larger scale or `ring` border. Star badge: "Most Popular", gradient price text.)
- "For businesses serious about scaling. Multiple projects, priority support, and weekly optimization."
- Features: 2–3 automation projects/month, Priority support with fast response, Weekly optimization calls, Dedicated Slack channel, Workflow monitoring and alerts, Quarterly business review
- CTA: "Start Growing"

**Partner — $5,000+/mo**
- "An embedded automation partner for your team. Unlimited scope, SLA guarantees, and deep integration."
- Features: Unlimited project scope, Embedded team member experience, SLA-backed response times, Custom integrations and APIs, Proactive optimization and monitoring, Priority feature development, Dedicated account manager
- CTA: "Become a Partner"

Note below cards: "All tiers include a free 30-minute discovery call. No commitment required."

### G. FOOTER
- Deep dark-colored background, `rounded-t-[4rem]`.
- Grid layout: "Horizon" brand name + tagline ("Your automation team on retainer. AI agents, workflow automation, and custom tools for small businesses."), navigation columns, legal links.
- Location: Auburn, Alabama
- Three link columns:
  - **Services**: AI Agents, Automation, Custom Tools, Consulting
  - **Company**: About, Portfolio, Pricing, Contact
  - **Resources**: Blog (Coming Soon), FAQ, Privacy Policy
- Copyright: © 2026 Horizon. All rights reserved.
- **"System Operational" status indicator** with a pulsing green dot and monospace label.

---

## Additional Pages (React Router — Multi-Page Site)

This is a **7-page site** using React Router (`HashRouter`). The Navbar and Footer are shared across all pages. The component architecture above (A–G) defines the **Home page**. The following pages complete the site:

### PAGE: Services (`/services`)

#### Header
- Badge: "What We Do"
- Heading: "Automation That Actually Works for You"
- Subheading: "Four core services, one goal: eliminate the repetitive work that keeps your team from doing what they do best."

#### 4 Service Detail Sections (alternating left/right layout)

**1. AI Agent Development** (badge: "Most Requested")
- Description: "We build intelligent agents that handle conversations, qualify leads, answer questions, and manage scheduling — all without human intervention. Your AI agents work 24/7, never take a sick day, and get smarter over time."
- What's Included (in a glass card):
  - Customer-facing chatbots that actually help
  - Lead qualification and routing agents
  - Knowledge base assistants trained on your docs
  - Scheduling agents integrated with your calendar
  - Data extraction and processing bots

**2. Workflow Automation**
- Description: "Stop copying data between apps. Stop manually sending follow-ups. Stop chasing invoices. We connect your tools into automated pipelines that run themselves."
- What's Included:
  - CRM pipeline automation and lead nurturing
  - Automated reporting and analytics dashboards
  - Invoice processing and payment tracking
  - Employee and client onboarding workflows
  - Social media scheduling and content pipelines

**3. Custom Internal Tools**
- Description: "Off-the-shelf software never quite fits. We build tools shaped around your process — admin dashboards, client portals, and management systems that work the way your team actually works."
- What's Included:
  - Admin dashboards with real-time data
  - Client-facing portals and self-service tools
  - Inventory and resource management systems
  - Project tracking and team coordination tools
  - Data visualization and business intelligence

**4. Operations Consulting** (badge: "Great Starting Point")
- Description: "Not sure where to start? We audit your current operations, map out your bottlenecks, and create a prioritized automation roadmap — so every dollar you invest delivers measurable ROI."
- What's Included:
  - End-to-end process audits
  - Custom automation roadmaps with ROI projections
  - Tech stack evaluation and recommendations

#### Quick-Win Products Section
- Heading: "Not Sure Where to Start?"
- 3 product cards:
  - **AI Readiness Assessment** — Free — "A 30-minute call where we evaluate your current operations and identify the top 3 automation opportunities in your business."
  - **Automation Audit** — $499 — "A deep-dive analysis of your workflows, tools, and bottlenecks — delivered as a detailed report with ROI projections."
  - **Quick-Start Agent** — $999 — "A simple AI agent or automation delivered in one week. Perfect for testing the waters."

#### Bottom CTA
- "Let's Build Something Together"

---

### PAGE: Pricing (`/pricing`)

#### Header
- Badge: "Pricing"
- Heading: "Simple, Predictable Pricing"
- Subheading: "No hourly billing. No surprise invoices. Just a monthly retainer and a team that keeps your automation running and improving."

#### Pricing Tiers
(Same 3-tier grid as the Home page Membership section — Starter, Growth, Partner — fully rendered here with the same interaction patterns.)

#### FAQ Accordion (6 items)
1. **What counts as a project?** — A project is a self-contained automation deliverable — e.g., building a chatbot, automating an invoicing workflow, or creating an internal dashboard. Smaller tasks like tweaks and bug fixes don't count against your limit.
2. **Can I change tiers?** — Absolutely. Upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.
3. **What's the onboarding process?** — 60-minute kickoff call, workflow mapping, first project delivered within 2 weeks.
4. **Do you work with businesses outside Auburn?** — Yes. We work with clients across the U.S. via Slack, video calls, and shared dashboards.
5. **What if I need something not listed?** — Book a discovery call and we'll tell you honestly whether we can help.
6. **How quickly can you start?** — Most clients are onboarded within one week. First deliverable within 2 weeks.

#### Bottom CTA
- "Still Have Questions?" — "Book a free discovery call."

---

### PAGE: About (`/about`)

#### Hero
- Badge: "About Horizon"
- Heading: "Bringing Modern Automation to Small Business"
- Subheading: "We believe every small business deserves access to the same AI and automation tools that power Fortune 500 companies — without the Fortune 500 price tag."

#### Story Section — "Why Horizon Exists"
- Left-bordered text column with 4 paragraphs (stagger reveal):
  1. "Auburn and Opelika are home to a growing community of ambitious small businesses and software companies. These teams are smart, driven, and ready to compete — but most don't have the bandwidth to build custom AI tools or automation in-house."
  2. "That's where Horizon comes in. We started with a simple observation: the tools that help large companies run lean are becoming accessible to everyone, but someone still needs to build, configure, and maintain them."
  3. "Horizon fills that gap. We work on retainer, not by the hour. We learn your business inside and out. And we build automation that actually fits your workflow."
  4. "Based in Auburn, Alabama, we combine local roots with cutting-edge technology. We believe in face-to-face relationships, clear communication, and delivering results you can measure."

#### What Makes Us Different — 4 cards (2x2 grid)
1. **Partnership, Not Projects** — "We don't do one-off gigs. We embed with your team on a retainer, learning your business deeply."
2. **Results Over Complexity** — "We don't build automation for its own sake. Every project starts with a clear business goal."
3. **Plain English, Always** — "We skip the jargon. We make sure you understand exactly what we're building and why."
4. **Built to Last** — "We use modern, proven technology — not bleeding-edge experiments. Reliable, maintainable, scalable."

#### Tech Stack Section — 6 items (3x2 grid)
- Next.js (Web Framework), Tailwind CSS (Styling), Claude AI (AI Platform), Supabase (Backend & Database), Vercel (Hosting & Deployment), Custom Agents (Automation)

#### CTA — "Let's Talk About Your Business"

---

### PAGE: Contact (`/contact`)

#### Header
- Heading: "Let's Talk Automation"
- Subheading: "Whether you have a specific project in mind or just want to explore what AI can do for your business, we'd love to hear from you."

#### Two-Column Layout

**Left Column — Contact Form** (visual only, non-functional)
- Fields: Full Name, Email Address, Company Name, Message (textarea), Budget Range (dropdown: Under $1,500/mo, $1,500–$3,000/mo, $3,000–$5,000/mo, $5,000+/mo)
- Submit button: "Send Message"

**Right Column:**
- Contact info: Email (hello@horizonautomation.com), Location (Auburn, Alabama), Response Time (Within 1 business day)
- Separator
- "Schedule a Discovery Call" — placeholder card with calendar icon and text "Cal.com scheduling widget coming soon"
- Separator
- "What to Expect" — 3 numbered steps:
  1. We review your message
  2. Discovery call — 30-minute conversation
  3. Custom proposal with ROI projections

---

### PAGE: Portfolio (`/portfolio`)

#### Header
- Heading: "What We've Built"
- Subheading: "Real automation projects delivering real results for small businesses."

#### Filterable Grid
- Filter tabs: All, AI Agents, Automation, Custom Tools
- 6 project cards:
  1. **AI Support Agent** (AI Agents) — Built an AI customer support chatbot for a SaaS company. Tech: Claude API, Next.js, Supabase, Webhooks. Outcome: "Reduced response time by 80%, resolved 65% of tickets without humans."
  2. **Invoice Processing Pipeline** (Automation) — Automated invoice extraction and processing for an accounting firm. Tech: Document AI, Zapier, QuickBooks API, Python. Outcome: "Saving 15 hours/week, eliminating processing errors."
  3. **Client Dashboard** (Custom Tools) — Real-time analytics dashboard consolidating Google Analytics, Meta Ads, email data. Tech: Next.js, PostgreSQL, Chart.js, REST APIs. Outcome: "Cut reporting from 4 hours to 10 minutes per client."
  4. **Lead Qualification Bot** (AI Agents) — AI chatbot that qualifies leads and books discovery calls. Tech: Claude API, Cal.com, CRM Integration, Webhooks. Outcome: "3x more qualified leads/month, zero additional headcount."
  5. **Inventory Tracker** (Custom Tools) — Real-time stock tracking with low-stock alerts and reorder triggers. Tech: React, Supabase, Twilio, Shopify API. Outcome: "Eliminated stockouts, reduced excess inventory 30%."
  6. **Employee Onboarding Flow** (Automation) — Automated onboarding from provisioning to scheduling. Tech: Zapier, Google Workspace, Slack API, DocuSign. Outcome: "Reduced setup from 2 days to 2 hours per hire."

#### CTA — "Ready to Build Something Like This?"

---

### PAGE: Solutions (`/solutions`)

#### Header
- Badge: "See the Difference"
- Heading: "See AI Automation in Action"
- Subheading: "Stop losing time to repetitive tasks. See how AI agents and automation transform the way small businesses operate."

#### Before vs After Section (2 comparison blocks, side by side)

**Lead Handling:**
- Before (red-tinted card): Lead submits form → Email sits for hours → Manual qualification → Calendar back-and-forth → Lead goes cold. Pain points: Slow response, Missed leads, Inconsistent follow-up.
- After (green-tinted card): Lead submits form → AI responds in <10s → AI qualifies via conversation → AI books call → Sales rep gets briefing → Rep joins prepared. Benefits: Instant response, 24/7 coverage, Higher conversion.

**Report Generation:**
- Before: Log into 5 platforms → Export CSVs → Copy-paste into template → Build charts manually → Email report → Repeat weekly. Pain points: 4+ hours weekly, Error-prone, Always outdated.
- After: Automation pulls all data → Cleaned and validated → Dashboard updates real-time → Stakeholders access anytime → Alerts on changes → Zero manual effort. Benefits: Real-time data, Zero errors, 10 min vs 4 hours.

#### The AI Employee Section
- Bot icon, heading: "The AI Employee"
- Subheading: "Think of AI agents as tireless team members who handle the repetitive work."
- 4 stat cards:
  - **24/7** — Always On
  - **<10s** — Response Time
  - **100%** — Consistency
  - **Always** — Learning

#### Automation Pipeline Section
- Heading: "How an Automation Pipeline Works"
- 4-step horizontal flow with connecting gradient lines:
  1. **Trigger** (indigo) — Form submission, email, webhook, or schedule
  2. **AI Processing** (indigo) — Classify, extract, analyze, or generate
  3. **Action** (amber) — Update CRM, send email, book meeting, route task
  4. **Report** (green) — Log results, update dashboard, notify team
- Below: "This entire pipeline runs automatically — from the moment a trigger fires to the final report."

#### Metrics Showcase
- Heading: "Results That Speak for Themselves"
- 4 stat cards (with counter animations):
  - **20+** — Hours saved per week (on average)
  - **80%** — Faster response times (vs manual process)
  - **3x** — More leads qualified (without extra staff)
  - **99.9%** — Uptime reliability (always available)

#### CTA — "Ready to Automate?" + "See Our Work"

---

## Floating Chat Widget (visual only)
- Floating button bottom-right corner (indigo, chat bubble icon)
- Clicking opens a small panel with:
  - Header: "Chat with Horizon AI"
  - Welcome message: "Hi! I'm Horizon's AI assistant. How can I help you learn about our automation services?"
  - Input field (disabled/placeholder): "Type a message..."
- This is visual only — no actual chat functionality needed.

---

## Technical Requirements (NEVER CHANGE)

- **Stack:** React 19, Tailwind CSS v3.4.17, GSAP 3 (with ScrollTrigger plugin), Lucide React for icons, React Router v7 (HashRouter for client-side routing).
- **Fonts:** Load via Google Fonts `<link>` tags in `index.html`: Space Grotesk (headings), DM Sans (body), JetBrains Mono (monospace), Playfair Display (drama serif italic).
- **Images:** Use real Unsplash URLs. Select images matching the preset's `imageMood` (dark architectural interiors, indigo light, technology hardware, glass and steel, abstract data visualizations). Never use placeholder URLs.
- **File structure:** Single `App.jsx` with components defined in the same file (or split into `components/` if >600 lines). Single `index.css` for Tailwind directives + noise overlay + custom utilities. Use React Router for 7 pages.
- **No placeholders.** Every card, every label, every animation must be fully implemented and functional.
- **Responsive:** Mobile-first. Stack cards vertically on mobile. Reduce hero font sizes. Collapse navbar into a minimal version.

---

## Build Sequence

After receiving answers to the 4 questions (pre-filled above for Horizon):

1. Map the selected preset (Preset B — Midnight Luxe, with Horizon palette overrides) to its full design tokens (palette, fonts, image mood, identity).
2. Generate hero copy using the brand name + purpose + preset's hero line pattern. Horizon hero: "Stop Doing Manually" / "What AI Can Do in Seconds."
3. Map the 3 value props to the 3 Feature card patterns (Shuffler → AI Agents, Typewriter → Workflow Automation, Scheduler → Custom Tools).
4. Generate Philosophy section contrast statements from the brand purpose (generic software tools vs. automation that works together).
5. Generate Protocol steps from Horizon's process (Discovery & Audit → Build & Integrate → Optimize & Scale).
6. Scaffold the project: `npm create vite@latest`, install deps, write all files.
7. Build all 7 pages with React Router: Home, Services, Pricing, About, Contact, Portfolio, Solutions.
8. Ensure every animation is wired, every interaction works, every image loads.

**Execution Directive:** "Do not build a website; build a digital instrument. Every scroll should feel intentional, every animation should feel weighted and professional. Eradicate all generic AI patterns."

---

## Important Notes

- This is a **UI-only prototype**. Forms don't submit, links between pages should work via React Router, but external links can be # placeholders.
- Make it **responsive** — mobile-first with sm/md/lg breakpoints.
- Every section should have scroll-triggered GSAP animations.
- The site should feel **premium and cinematic** — like something a luxury brand would commission.
- All content is provided above — do not use lorem ipsum.
- Respect `prefers-reduced-motion` — disable animations if user prefers.