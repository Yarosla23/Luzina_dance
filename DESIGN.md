# DESIGN.md — Танцевальная Душа

## 1. Brand and intent

**Product:** dance studio website for new and experienced dancers, camp participants, and the studio community.

**Primary goal:** help a visitor feel the studio's character, choose a direction and level, understand the schedule, and contact the studio.

**Visual thesis:** **After rehearsal / stage lights.** The interface feels like a dance studio after the lights go down: near-black stage space, ripe-cherry velvet, luminous white type, soft silhouettes, and real red-lit photography.

**Signature idea:** oversized editorial headlines meet fluid, asymmetrically rounded portrait frames inspired by the arc of a dancer's movement. The composition should feel choreographed, not decorated.

## 2. Color system

| Token | Value | Use |
| --- | --- | --- |
| Stage black | `#080607` | main background |
| Velvet black | `#13090C` | alternate sections and panels |
| Ripe cherry | `#8B1538` | brand fields, primary controls |
| Bright cherry | `#B91E4B` | active states and restrained highlights |
| Bone | `#F4F0EE` | primary text and light surfaces |
| White | `#FFFFFF` | highest-emphasis text |
| Smoke | `#B9AFB2` | secondary copy |
| Hairline | `rgba(255,255,255,.14)` | borders and dividers |

Never introduce teal, orange, gold, rainbow gradients, or multiple unrelated accent colors.

## 3. Typography

- Display: `Bodoni MT`, `Didot`, `Georgia`, serif fallback. High contrast, large scale, short lines.
- Body and UI: `Arial`, `Helvetica Neue`, system sans-serif. Compact and highly legible.
- Utility labels: uppercase sans-serif, 0.12–0.18em tracking, 11–12px minimum.
- Headlines use sentence case. Avoid title case in Russian.
- Keep body copy at 16px or larger and line-height around 1.65.

## 4. Layout and composition

- Content width: 1440px maximum, 24px mobile gutters, 32–48px desktop gutters.
- Use asymmetric 12-column compositions and strong alignment lines.
- Shape language is soft and controlled: `16px` for compact elements, `24px` for cards, `32px` for major panels, and asymmetric `32–72px` corners for hero photography.
- Use full pills for primary controls, filters, and compact statuses. Do not make long content sections into capsules.
- Prefer hairline borders, solid surfaces, and image crops over glass cards and floating blobs.
- Alternate black, velvet, ripe-cherry, and occasional bone sections to create stage-like rhythm.
- Use real studio photography. Do not add stock images, fake partner logos, or decorative avatars.
- Home-page narrative order: hero hook → directions → method → weekly rhythm → studio space → team → extended formats → location → final enrollment CTA.
- On large screens, directions may become one pinned horizontal chapter. The semantic DOM order remains vertical and complete; mobile and reduced-motion layouts use a regular grid.

## 5. Components

### Header

- Fixed floating capsule on desktop and a compact softly rounded bar on mobile; use a near-black solid surface and a fine border.
- Wordmark remains readable at 375px.
- Active navigation uses white text and a restrained cherry marker.

### Buttons

- Minimum target 44×44px.
- Primary: ripe-cherry fill, white text, full pill shape.
- Secondary: transparent or bone fill with strong contrast.
- Clear `focus-visible` outline on every interactive element.

### Cards and imagery

- Image-led cards use `24–32px` corners; hero portraits may use one larger corner to suggest a moving silhouette.
- Hover motion is small: 1–2% image scale and a slight border/contrast change.
- Do not place every text block inside a card.

### Forms, filters, and dialogs

- Labels remain visible; do not rely on placeholders.
- Interactive controls have hover, focus, active, disabled, loading, empty, and error treatments when those states exist.
- Dialog close and zoom controls are at least 44px and keyboard accessible.

## 6. Motion

**Personality:** premium and energetic, like a prepared stage entrance.

- Quick interaction: `160ms`.
- Standard reveal: `420ms`.
- Hero/editorial motion: up to `760ms`.
- Default easing: `cubic-bezier(.22,1,.36,1)` or Framer Motion `[0.22, 1, 0.36, 1]`.
- Animate opacity and transforms; avoid layout-heavy animation.
- Use one prominent hero sequence per page. Other reveals should be quieter.
- The home page uses GSAP + ScrollTrigger for the hero sequence, reading progress, the directions chapter, and restrained media parallax. Lenis is the only smooth-scroll engine.
- Scroll motion follows the page narrative: entrance at the hero, lateral discovery for directions, quiet vertical reveals for supporting content, and a static final CTA.
- Honor `prefers-reduced-motion`: remove travel, parallax, pinned storytelling, and infinite sweeps while preserving content.

## 7. Accessibility and responsive rules

- Normal text must meet WCAG AA contrast (4.5:1).
- All controls must work by keyboard and show a visible focus state.
- Touch targets are at least 44×44px.
- Images use meaningful Russian alt text; decorative visuals use empty alt text or `aria-hidden`.
- Validate at 375, 768, 1024, and 1440px.
- At 375px: no clipped display type, no horizontal scroll, single-column cards, usable mobile menu.
- At 768px: preserve hierarchy without forcing desktop overlaps.
- At 1024px+: introduce asymmetric layouts and editorial image overlaps.

## 8. Content rules

- Speak to visitors about classes, movement, confidence, teachers, level, and community.
- Future photography may be represented by honest labeled placeholders until real studio media is available.
- Do not describe the implementation or page structure.
- Do not invent reviews, awards, attendance numbers, partners, dates, prices, or guarantees.
- Mark unknown dates, prices, and locations honestly and direct visitors to the studio contact.
- Calls to action use specific Russian verbs: `Выбрать группу`, `Посмотреть расписание`, `Написать в Telegram`.

## 9. Do / don't

**Do:** use expressive crops, black space, ripe-cherry fields, white editorial type, fluid corners, real schedule and coach data, restrained motion.

**Don't:** use generic SaaS glassmorphism, bento dashboards, decorative emojis, warm gold, teal glows, identical radii on every element, bubble-like toy styling, fake testimonials, or self-referential copy.
