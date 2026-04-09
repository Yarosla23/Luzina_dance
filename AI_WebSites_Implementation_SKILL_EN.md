# AI WebSites Implementation Skill

## Purpose

This skill turns a video reference, screenshot, website reference, text prompt, uploaded project file, or rough product idea into a ready-to-build modern website implementation.

It is designed for landing pages, cinematic hero sections, SaaS websites, AI product pages, creative studio sites, portfolios, NFT/Web3 pages, DeFi dashboards, security pages, and visually rich promotional websites.

The core goal is not only to write code. The agent must:

1. Analyze the reference carefully.
2. Identify the visual system, stack, dependencies, assets, services, and interaction patterns.
3. Ask the user for missing decisions at the right stage.
4. Propose a section architecture.
5. Choose a suitable implementation stack.
6. Build reusable components.
7. Deliver responsive, animated, production-aware code.
8. Provide setup, launch, and QA instructions.

---

## When to Use This Skill

Use this skill when the user asks to:

- “Build a website like this video.”
- “Recreate this landing page.”
- “Make a hero section like this reference.”
- “Analyze the video and implement it.”
- “Create a prompt for a site like this.”
- “Create a React/Vite/Tailwind website.”
- “Generate a website from sections.”
- “Use the style from the project files.”
- “Make a cinematic, animated, glassmorphism, AI, SaaS, Web3, portfolio, or studio website.”

---

## Operating Principle

The agent works in phases:

1. **Input Collection**
2. **Reference and File Analysis**
3. **Service and Asset Mapping**
4. **Section Planning**
5. **Technical Stack Selection**
6. **Design System Definition**
7. **Implementation Plan**
8. **Code Generation**
9. **Integration Setup**
10. **Responsive QA**
11. **Deployment Guidance**

The agent should not jump directly into code if major decisions are missing. It should ask focused, stage-specific questions.

---

# 1. Stage-Based User Question Flow

## Rule

Ask questions in stages. Do not overwhelm the user with a long questionnaire unless they explicitly ask for a full brief.

At each stage:

- Ask only the decisions required to continue.
- Offer smart defaults.
- If the user says “do it yourself,” choose defaults and continue.
- If the reference contains the answer, do not ask again.
- Mark assumptions clearly when the information is not visible.

---

## Stage 0 — Clarify the Goal

Ask only when the user has not clearly stated the output type.

Questions:

1. Do you need a full website, a single hero section, or a reusable prompt/specification?
2. Should I produce production code, a no-code prompt, or a detailed step-by-step guide?
3. Should the result match the reference exactly or use it as inspiration?

Default if unclear:

- Build a full responsive landing page.
- Use the reference as the primary visual direction.
- Deliver React + Vite + TypeScript + Tailwind code.

---

## Stage 1 — Reference Analysis

If the user provides a video, screenshot, link, or project file, analyze:

- Website type.
- Visual style.
- Sections visible.
- Fonts.
- Color palette.
- Media assets.
- Animations.
- Navigation behavior.
- CTA logic.
- Forms and integrations.
- External services used.
- Implementation stack if visible.

If the video cannot be accessed directly, use:

- Uploaded text specifications.
- Screenshots.
- User description.
- Project files.
- Clearly labeled assumptions.

Do not invent hidden details.

---

## Stage 2 — Section Selection

After analyzing the reference, ask the user which sections to include.

Recommended question:

“Which sections should I build? I can recreate only the visible sections or expand it into a full landing page.”

Offer options:

1. Hero only.
2. Hero + features/capabilities.
3. Full landing page.
4. Full landing page + form/integrations.
5. Exact reference recreation.
6. Expanded commercial version.

Default section set for a premium landing page:

1. Navbar
2. Hero
3. Social proof / partners
4. Capabilities / features
5. About / philosophy
6. Services / product cards
7. Testimonials
8. Pricing or plans
9. CTA
10. Footer

---

## Stage 3 — Content Requirements

Ask only for missing brand/content details.

Questions:

1. Brand/project name?
2. Main headline?
3. Short description?
4. Primary CTA text?
5. Secondary CTA text?
6. Contact email or form destination?
7. Real assets or placeholder assets?

Default if user does not provide content:

- Generate polished placeholder copy that matches the niche.
- Mark it as editable.

---

## Stage 4 — Technical Stack Decision

Ask if the output format is not clear.

Options:

1. **CDN-only single HTML file** — best for quick tutorial-style recreation.
2. **React + Vite + TypeScript + Tailwind CSS** — best default for real projects.
3. **Next.js** — use when SEO, routing, SSR, or app structure matters.
4. **No-code prompt** — for Framer, Webflow, Lovable, Bolt, Replit, Google AI Studio.
5. **Component only** — if the user wants one section.

Default:

- React + Vite + TypeScript + Tailwind CSS.

For Aetheris-style video recreation:

- Use CDN-only HTML if the user wants the exact tutorial-like implementation.
- Use Vite if the user wants maintainable production code.

---

## Stage 5 — Services and Integrations

Ask the user what external services should be connected.

Recommended question:

“Which services should be connected: forms, Telegram, CRM, analytics, payments, hosting, or AI generation tools?”

If user is unsure, suggest:

- Netlify or Vercel for hosting.
- Formspree or Tally for forms.
- Telegram Bot + Make for lead notifications.
- Google Analytics or Plausible for analytics.
- Stripe Payment Links for payments.

---

## Stage 6 — Implementation Checkpoint

Before generating code for a full website, summarize:

- Stack.
- Sections.
- Services.
- Design direction.
- Assets.
- Assumptions.

Ask:

“Confirm this plan or tell me what to change.”

If the user asked to proceed immediately, do not wait for confirmation; implement with defaults and state assumptions.

---

# 2. Project Pattern Analysis

The project files show repeated implementation patterns across cinematic landing pages, SaaS pages, creative studio websites, NFT/Web3 pages, portfolio pages, and AI/video-background websites.

## Core Stack Patterns

### Default Production Stack

Use this unless the user asks otherwise:

```json
{
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "typescript": "latest",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^3.4.x",
    "postcss": "latest",
    "autoprefixer": "latest",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.x or ^12.x"
  }
}
```

### CDN-Only Tutorial Stack

Use for single-file implementation, fast reproduction, or AI Studio style demos:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
<script src="https://unpkg.com/framer-motion@11.11.17/dist/framer-motion.js"></script>
```

### React 19 / Tailwind v4 Pattern

Use only when a project file or user request specifies it:

- React 19
- Tailwind CSS v4
- `motion/react`
- CSS theme variables inside `index.css`

### CSS-Only Animation Pattern

Use when the reference has simple transitions or when the user wants fewer dependencies:

- Tailwind transitions.
- CSS keyframes.
- No Framer Motion.
- Good for simple hero sections, drawers, hover states, and fades.

### Spline / 3D Pattern

Use only when 3D background is required:

- `@splinetool/react-spline`
- `@splinetool/runtime`
- React lazy loading with Suspense.

---

# 3. Main Services and External Tools

The agent must recognize and offer these services during development.

## AI Website Generation Services

| Service | Use Case | Ask User When |
|---|---|---|
| Google AI Studio | Generate or prototype websites with Gemini | User wants AI-generated site/prompt workflow |
| Gemini | Prompt-to-code or visual implementation assistance | User references Google AI Studio or Gemini |
| ChatGPT | Planning, code, prompt generation | Always available as assistant context |
| Claude | Optional code review / long-context prompt generation | User requests multi-model workflow |
| Lovable | No-code/low-code app generation | User wants no-code implementation |
| Bolt | Fast AI app/web generation | User wants quick prototype |
| Replit | Browser-based code + hosting | User wants editable cloud project |
| Cursor | Local AI coding IDE | User wants developer workflow |
| v0 | UI generation with React/Tailwind/shadcn | User wants shadcn-style UI blocks |

## Hosting and Deployment

| Service | Use Case | Notes |
|---|---|---|
| Vercel | Best for React, Vite, Next.js | Default for production frontend |
| Netlify | Static sites, forms, simple deploys | Good for single HTML/Vite sites |
| Cloudflare Pages | Fast static hosting/CDN | Good for performance |
| GitHub Pages | Free static hosting | Good for simple demos |
| Render | Full-stack apps | Use when backend is required |
| Railway | Full-stack, database, API | Use for backend-heavy apps |
| Firebase Hosting | Google ecosystem | Good with Firebase Auth/DB |
| Supabase Hosting/Edge | Backend-adjacent services | Use with Supabase stack |

## Asset Hosting and Media

| Service | Use Case |
|---|---|
| CloudFront | Video backgrounds, CDN media |
| Cloudflare R2 | Object storage for videos/images |
| AWS S3 | Asset storage |
| Uploadcare | Image upload and transformation |
| Cloudinary | Image/video optimization |
| images.higgs.ai | Optimized image proxy used in project files |
| motionsites.ai | GIF previews and website reference assets |
| Unsplash | Placeholder photography |
| Pexels | Placeholder avatars and photos |
| LottieFiles | JSON animations |
| Rive | Interactive animations |
| Spline | 3D scenes |

## Fonts and Icons

| Service / Package | Use Case |
|---|---|
| Google Fonts | Primary font source |
| db.onlinewebfonts.com | Specialty web fonts from project files |
| Webflow CDN fonts | PP Neue Montreal and similar fonts |
| Local `.woff2` | Premium brand fonts |
| lucide-react | Default icon package |
| Inline SVG | Exact icon recreation or CDN-only implementation |
| Material Icons SVG paths | Card icons or reference-accurate icons |

## Forms and Lead Capture

| Service | Use Case |
|---|---|
| Formspree | Simple HTML/React forms |
| Tally | No-code forms and embeds |
| Typeform | Premium multi-step forms |
| Netlify Forms | Static site forms |
| Basin | Form backend |
| Google Forms | Simple fallback |
| Airtable Forms | Leads into Airtable |

Ask the user:

- Should the form send to email?
- Should leads go to Telegram?
- Should leads go to CRM?
- Should the form be embedded or custom-coded?

## Automation and Notifications

| Service | Use Case |
|---|---|
| Make.com | Form → Telegram/CRM/email automation |
| Zapier | Simple automation workflows |
| Telegram Bot API | Instant lead notifications |
| Slack Webhooks | Team notifications |
| Discord Webhooks | Community notifications |
| EmailJS | Client-side email sending |
| Resend | Transactional emails |
| SendGrid | Transactional emails |
| Mailchimp | Email campaigns |
| Brevo | Email campaigns and CRM-lite |

## CRM and Databases

| Service | Use Case |
|---|---|
| HubSpot | CRM for leads |
| Pipedrive | Sales pipeline |
| Airtable | Lightweight database/CRM |
| Notion | Simple lead storage |
| Google Sheets | Simple lead log |
| Supabase | Database + auth + API |
| Firebase | Auth, database, hosting |
| Neon | Postgres database |
| PlanetScale | MySQL database |

## Analytics and Monitoring

| Service | Use Case |
|---|---|
| Google Analytics | Standard analytics |
| Plausible | Privacy-friendly analytics |
| Fathom | Privacy-friendly analytics |
| PostHog | Product analytics/session events |
| Microsoft Clarity | Session recordings/heatmaps |
| Hotjar | Heatmaps and recordings |
| Sentry | Error monitoring |

Ask the user:

- Should CTA clicks be tracked?
- Should form submissions be tracked?
- Should privacy-friendly analytics be used?

## Payments and Commerce

| Service | Use Case |
|---|---|
| Stripe Payment Links | Simple payment CTA |
| Stripe Checkout | Custom checkout flow |
| Lemon Squeezy | Digital products/SaaS |
| Paddle | SaaS billing |
| Gumroad | Digital product sales |
| Shopify Buy Button | Product commerce |

Only add payments if the user explicitly needs payment, booking deposit, product checkout, or paid plan signup.

## Domains and DNS

| Service | Use Case |
|---|---|
| Namecheap | Domain purchase |
| GoDaddy | Domain purchase |
| Cloudflare Registrar | Domain + DNS |
| Google Domains / Squarespace Domains | Domain management |
| Porkbun | Affordable domains |

Ask during deployment:

- Do you already have a domain?
- Which hosting service will be used?
- Should I include DNS instructions?

---

# 4. Section Architecture Decision Tree

## Hero Section

Always include unless user says otherwise.

Possible variants:

1. Fullscreen video hero.
2. 3D Spline hero.
3. Static image hero.
4. Dashboard preview hero.
5. Product mockup hero.
6. Portfolio portrait hero.
7. Carousel hero.

Ask:

- Should the hero use video, 3D, image, gradient, or product UI?
- Should the video loop normally or use custom fade-loop?

Default:

- Fullscreen video hero for cinematic references.
- Static or dashboard hero for SaaS references.

## Navbar

Variants:

1. Fixed floating pill.
2. Transparent top navbar.
3. Glass center nav.
4. Mobile hamburger drawer.
5. No mobile menu; hide links on mobile.

Ask:

- Should the navigation be functional anchors or visual only?
- Should mobile include a hamburger menu?

Default:

- Fixed/floating navbar with anchors.
- Hamburger drawer if more than 3 links.

## Social Proof / Partners

Use when reference has logos, partner names, stats, or credibility blocks.

Ask:

- Use real logos/names or placeholder names?

Default:

- Text logos if no assets are provided.

## Features / Capabilities

Use for SaaS, AI, creative tools, Web3, security, DeFi, or product pages.

Card types:

- Glass cards.
- Dark solid cards.
- Video cards.
- Icon cards.
- Dashboard/stat cards.

Ask:

- How many feature cards?
- Should cards include icons, tags, video, images, or metrics?

Default:

- 3 feature cards.

## About / Philosophy

Use for studio, portfolio, creator, agency, and cinematic sites.

Variants:

- Big editorial heading.
- Scroll-linked text reveal.
- Video/image block.
- Founder story.

Ask:

- Should About be personal, brand-focused, or product-focused?

## Services / Products

Use when the site sells a service or product.

Ask:

- What services/products should be listed?
- Should each service have price, CTA, image, or video?

Default:

- 2–5 services.

## Testimonials

Use if credibility matters.

Ask:

- Use real testimonials or generate placeholders?
- Static cards or carousel?

Default:

- 3 static cards unless the reference uses carousel.

## Pricing

Use for SaaS, memberships, studios, and productized services.

Ask:

- Do you have pricing or should I create placeholder plans?

Default:

- Do not include pricing unless requested or visible in reference.

## CTA / Lead Capture

Use for conversion-focused landing pages.

Ask:

- Should CTA open a form, go to booking, Telegram, Stripe, or email?

Default:

- Link to `#contact` or open a simple form.

## Footer

Include for full websites.

Ask:

- Minimal footer or full footer with links/legal/social?

Default:

- Minimal footer with copyright, links, and contact.

---

# 5. Visual Pattern Library

## Fullscreen Video Background

Use for cinematic pages.

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={VIDEO_URL} type="video/mp4" />
</video>
```

Use poster fallback if available:

```tsx
poster="/poster.jpg"
```

Mobile note:

- Always use `muted` and `playsInline`.
- Add `preload="auto"` for hero videos.
- Avoid huge videos if performance matters.

---

## Custom Fading Video Loop

Use when the video should loop smoothly with no visible jump.

Rules:

- Do not use `loop`.
- Start at opacity `0`.
- Fade in over `500ms` on `loadeddata` or `canplay`.
- Fade out when `duration - currentTime <= 0.55`.
- On `ended`, set opacity `0`, wait `100ms`, reset `currentTime = 0`, play again, fade in.
- Use `requestAnimationFrame`.
- Cancel previous rAF before starting a new fade.
- Read current opacity at fade start so animations resume smoothly.

Pseudo-logic:

```ts
const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

function fadeTo(target: number, duration: number) {
  cancelAnimationFrame(previousRaf);
  const startOpacity = Number(video.style.opacity || 0);
  const start = performance.now();

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const value = startOpacity + (target - startOpacity) * progress;
    video.style.opacity = String(value);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
```

---

## Liquid Glass CSS

Use on:

- Navbar pills.
- CTA buttons.
- Cards.
- Chips.
- Social icons.
- Video overlays.

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

For primary CTA, create a stronger version:

```css
.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
```

---

## Cinematic Typography

Common font choices:

| Style | Fonts |
|---|---|
| Space / cinematic / editorial | Instrument Serif + Barlow/Inter |
| Creative studio | Instrument Serif + Almarai/Inter |
| SaaS | Inter, Manrope, Sora, Readex Pro |
| Security / AI | Sora, Readex Pro, Inter |
| Portfolio / creator | Kanit, PP Neue Montreal, custom serif |
| NFT / bold visual | Anton + Condiment + monospace |

Hero heading rules:

- Use large responsive sizes.
- Use tight tracking.
- Use low line-height.
- Avoid overly long line breaks on mobile.

Examples:

```tsx
className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.04em]"
```

or:

```tsx
style={{ fontSize: 'clamp(48px, 9vw, 128px)' }}
```

---

## Word-by-Word Blur Animation

Use for premium hero headlines.

```tsx
const words = text.split(' ');

return (
  <p className="flex flex-wrap justify-center row-gap-[0.1em]">
    {words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
        style={{ display: 'inline-block', marginRight: '0.28em' }}
      >
        {word}
      </motion.span>
    ))}
  </p>
);
```

Do not use `&nbsp;` when letter-spacing is strongly negative.

---

## Scroll Reveal Text

Use for About sections.

- Split text into characters.
- Animate opacity based on scroll progress.
- Keep text accessible by preserving readable content or avoiding excessive DOM if performance matters.

---

# 6. Implementation Modes

## Mode A — Exact Video Recreation

Use when the user says:

- “exactly like the video”
- “same as the reference”
- “recreate this”

Process:

1. Identify every visible section.
2. Extract fonts, colors, layout, video behavior, buttons, cards, and animations.
3. Use the same assets if provided.
4. Match spacing and typography closely.
5. Avoid adding unrequested sections.
6. Ask before replacing unavailable assets.

Output:

- Exact implementation plan.
- Code.
- Run instructions.
- List of assumptions.

## Mode B — Inspired Website

Use when the user wants the same style but a different brand.

Process:

1. Preserve visual language.
2. Replace brand/content.
3. Adjust sections to business goal.
4. Keep animation and interaction patterns.

## Mode C — Full Commercial Landing Page

Use when the user wants a complete marketing site.

Default sections:

1. Navbar
2. Hero
3. Partners/social proof
4. Features/capabilities
5. About/philosophy
6. Services/product cards
7. Testimonials
8. Pricing if needed
9. CTA/contact
10. Footer

## Mode D — Prompt for AI Site Builder

Use when the user asks for a prompt for Google AI Studio, Lovable, Bolt, v0, Replit, or another AI builder.

Prompt must include:

- Stack.
- Sections.
- Fonts.
- Colors.
- Assets.
- Layout.
- Animations.
- Responsive behavior.
- Interactions.
- Exact copy.
- Component structure.

---

# 7. Aetheris-Style Video Website Rules

Use this when recreating the cinematic space-travel site pattern.

## Stack

CDN-only version:

- Tailwind CDN
- React 18.3.1 CDN
- ReactDOM 18.3.1 CDN
- Babel Standalone
- Framer Motion CDN
- Google Fonts: Instrument Serif + Barlow

Production version:

- Vite
- React
- TypeScript
- Tailwind
- Framer Motion
- lucide-react or inline SVG

## Required Sections

1. Fullscreen Hero
2. Fullscreen Capabilities

## Hero Requirements

- Black background.
- Fullscreen video, scaled to 120% width/height if reference requires it.
- No dark overlay unless explicitly visible.
- Fixed glass navbar.
- Centered animated headline.
- Badge.
- CTA row.
- Stats cards.
- Partner names.

## Capabilities Requirements

- Fullscreen second video.
- Kicker label.
- Large two-line editorial heading.
- Three liquid-glass cards.
- Icons, tags, titles, and descriptions.

## Video Behavior

- Use custom rAF fade loop.
- No native `loop` when smooth fade-loop is required.

---

# 8. File Structure Recommendations

## For Vite Projects

```txt
src/
  app/
    App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    FadingVideo.tsx
    LiquidGlass.tsx
    FeatureCard.tsx
    Footer.tsx
  sections/
    CapabilitiesSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    TestimonialsSection.tsx
    CTASection.tsx
  hooks/
    useInViewAnimation.ts
    useVideoFadeLoop.ts
  styles/
    fonts.css
    globals.css
  data/
    siteContent.ts
```

## For Single HTML Projects

Use:

```txt
index.html
```

Inside it:

1. Head metadata.
2. Fonts.
3. Tailwind config.
4. Custom CSS.
5. Root div.
6. CDN scripts.
7. Babel script with React components.

---

# 9. Code Quality Rules

## General

- Use semantic HTML where possible.
- Keep components small.
- Avoid duplicated animation logic.
- Use constants for links, videos, cards, nav items.
- Use alt text for images.
- Use `aria-label` on icon-only buttons.
- Use `button` for actions and `a` for links.

## Tailwind

- Use mobile-first classes.
- Use responsive prefixes consistently.
- Avoid arbitrary values unless necessary for visual accuracy.
- Use `clamp()` for fluid typography when reference demands exact scaling.

## Video

- Always include `muted` and `playsInline`.
- Use `preload="auto"` for hero videos.
- Use poster fallback when available.
- Avoid multiple heavy videos on mobile if performance matters.
- For many videos, consider lazy loading below the fold.

## Animation

Use Framer Motion when:

- Word-by-word animation.
- Scroll-linked animation.
- Parallax.
- Staggered entrance.
- Sticky card scaling.

Use CSS-only when:

- Simple fade-up.
- Hover effects.
- Mobile drawer.
- Basic transitions.

Do not overuse animations. They must support the design.

---

# 10. Form and Integration Logic

When the site includes a form, ask the user where submissions should go.

Options:

1. Email only.
2. Telegram notification.
3. CRM.
4. Google Sheet / Airtable / Notion.
5. Payment page.
6. Booking calendar.

## Simple Form Defaults

If the user wants the easiest setup:

- Use Tally or Formspree.

## Telegram Lead Flow

Recommended no-code flow:

```txt
Website form → Tally/Formspree → Make.com → Telegram Bot → CRM/Sheet
```

## Custom Backend Flow

Use when user wants full control:

```txt
Website form → API route/serverless function → Resend email + Telegram Bot + database
```

## Booking Flow

Services:

- Calendly
- Cal.com
- TidyCal

CTA can link to booking URL.

## Payments

Use only when required:

- Stripe Payment Links for simplest payment.
- Stripe Checkout for custom app.
- Lemon Squeezy for digital products/SaaS.

---

# 11. Deployment Logic

Before deployment instructions, ask:

1. Do you want Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another host?
2. Do you already have a domain?
3. Do you need form/backend support?
4. Should environment variables be included?

## Default Deployment Recommendation

- Vercel for React/Vite/Next.
- Netlify for static sites and simple forms.
- Cloudflare Pages for performance-focused static sites.

## Single HTML Deployment

Can deploy to:

- Netlify drag-and-drop.
- GitHub Pages.
- Cloudflare Pages.
- Any static hosting.

## Vite Deployment

Build:

```bash
npm install
npm run build
```

Preview:

```bash
npm run preview
```

Deploy the `dist` folder or connect repository.

---

# 12. QA Checklist

Before final delivery, verify:

## Visual

- Matches reference style.
- Correct fonts.
- Correct colors.
- Correct spacing.
- Correct border radii.
- Liquid glass visible.
- Video positioning correct.
- No unwanted overlays.

## Responsive

- Mobile layout works.
- Tablet layout works.
- Desktop layout works.
- No horizontal scroll.
- Buttons are at least 44px high/tappable.
- Text does not overflow.

## Functionality

- Navbar links work.
- CTA links work.
- Forms submit or show clear placeholder behavior.
- Mobile menu works.
- Video autoplays where possible.
- Animations do not break layout.

## Performance

- Avoid huge unoptimized images.
- Use poster fallback for videos if possible.
- Lazy-load below-fold media.
- Avoid excessive DOM for character animations on long texts.

## Accessibility

- Use readable contrast.
- Add `aria-label` to icon buttons.
- Avoid motion overload.
- Keep text selectable and readable.
- Respect reduced-motion if building production version.

## SEO

- One main H1.
- Meta title.
- Meta description.
- Open Graph tags if publishing.
- Descriptive CTA labels.

---

# 13. Final Response Format

When delivering implementation, include:

1. Short summary of what was built.
2. Stack used.
3. Files created/modified.
4. How to run.
5. Services that still need user credentials or configuration.
6. Assumptions.
7. QA notes.

If providing code in chat, keep it organized by file name.

If creating files, provide downloadable links.

---

# 14. Default Smart Presets

## Preset: Cinematic AI/Space Landing

- Dark background.
- Fullscreen video hero.
- Liquid glass navbar/cards.
- Instrument Serif + Barlow/Inter.
- Framer Motion blur/fade animations.
- Hero + Capabilities + CTA.
- Optional smooth video fade loop.

## Preset: SaaS Product Landing

- Clean navbar.
- Dashboard preview.
- Feature cards.
- Testimonials.
- Pricing optional.
- Inter/Manrope/Sora.
- Formspree/Tally lead form.
- Vercel deployment.

## Preset: Creative Studio

- Large editorial typography.
- Dark or white cinematic style.
- About section.
- Work/project grid.
- Testimonials.
- Pricing or contact CTA.
- Scroll reveal/parallax.

## Preset: Portfolio

- Personal hero.
- Marquee/project previews.
- About.
- Services.
- Projects.
- Contact CTA.
- Footer.

## Preset: NFT/Web3

- Bold display font.
- Dark space background.
- Neon accents.
- Collection grid.
- Social links.
- CTA.

## Preset: Security/AI Enterprise

- Dark minimalist theme.
- Strong hero.
- Trust stats.
- Services/platform sections.
- Contact/quote CTA.
- Sora/Readex Pro.

---

# 15. Agent Behavior Rules

1. Do not claim you watched a video if you only analyzed supporting files or metadata. Say what was available.
2. Do not invent exact UI details when the reference is inaccessible.
3. Ask stage-specific questions, not a massive brief.
4. If the user wants speed, use smart defaults and proceed.
5. If the user wants exactness, prioritize the reference over generic best practices.
6. Always separate confirmed details from assumptions.
7. Prefer production-ready structure for real websites.
8. Prefer CDN-only for tutorial/demo reproduction.
9. Always include responsive behavior.
10. Always include a final QA checklist or run instructions.
11. When integrations require credentials, never invent them. Leave placeholders and explain where to add them.
12. When services may cost money, state that setup/account may be required.

---

# 16. Minimal Stage Prompt Template

Use this when beginning a project:

```txt
I can build this in stages.

Stage 1: recreate the visible reference.
Stage 2: choose sections.
Stage 3: choose stack and services.
Stage 4: implement code.
Stage 5: connect forms/analytics/deployment.

Before I start, confirm:
1. Exact recreation or inspired version?
2. Full site or only visible sections?
3. Preferred output: single HTML, Vite React project, or AI-builder prompt?
4. Should I connect forms, Telegram, CRM, analytics, or payments?
```

If user says “do everything yourself,” proceed with:

- Inspired full landing page.
- React + Vite + TypeScript + Tailwind.
- Framer Motion.
- lucide-react.
- Form placeholder.
- Vercel deployment instructions.

---

# 17. Service Selection Prompt Template

Use this during integrations:

```txt
For services, choose one option per category:

Hosting: Vercel / Netlify / Cloudflare Pages / GitHub Pages
Forms: Formspree / Tally / Typeform / custom backend
Notifications: Email / Telegram / Slack / none
CRM/storage: HubSpot / Airtable / Notion / Google Sheets / Supabase / none
Analytics: Google Analytics / Plausible / PostHog / none
Payments: Stripe / Lemon Squeezy / none
Domain: already have one / need instructions / skip for now
```

If the user does not choose, use:

- Hosting: Vercel
- Forms: Formspree or Tally
- Notifications: Email
- CRM: none
- Analytics: Plausible or Google Analytics placeholder
- Payments: none

---

# 18. Output Safety and Practicality

When providing implementation:

- Do not include secret keys.
- Use environment variables for API keys.
- Use placeholders like `VITE_FORMSPREE_ID` or `VITE_TELEGRAM_BOT_TOKEN` only in backend/serverless context.
- Do not expose Telegram bot token in frontend.
- If using client-side forms, prefer third-party form services.
- For payment, link to a payment provider or use server-side checkout creation.

---

# 19. Completion Definition

A website task is complete when the agent has delivered:

1. Clear architecture.
2. Selected stack.
3. Section structure.
4. Design system.
5. Code or prompt.
6. Asset/service list.
7. Setup instructions.
8. Integration placeholders.
9. Responsive behavior.
10. QA checklist.

