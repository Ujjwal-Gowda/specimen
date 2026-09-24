---
version: "alpha"
name: "Kinetic Typography / Type-led design"
description: "Typography is the hero image: massive condensed or variable display type, edge-to-edge, often moving, with minimal other decoration."
colors:
  background: "#0D0D0D"
  surface: "#1A1A1A"
  on-surface: "#F2F0EB"
  on-surface-variant: "#A3A09A"
  primary: "#FF4F00"
  on-primary: "#0D0D0D"
  outline: "#2E2E2E"
  off-black: "#0D0D0D"
  carbon: "#1A1A1A"
  paper: "#F2F0EB"
  fog: "#A3A09A"
  electric-orange: "#FF4F00"
  divider: "#2E2E2E"
typography:
  display-lg:
    fontFamily: "Druk"
    fontSize: 3.052rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Druk"
    fontSize: 1.953rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Druk"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "PP Neue Montreal"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Space Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 0px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    height: 40px
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 2px 8px
---

# Kinetic Typography / Type-led design

*Also known as: Big Type, Typographic web design, Oversized type, Motion typography.*

## Overview

Typography is the hero image: massive condensed or variable display type, edge-to-edge, often moving, with minimal other decoration.

**Origin (Film titles from the 1950s; on the web from ~2015, with variable fonts from 2016).** Treats type as the main visual: headlines scaled to fill the viewport, and words that move, stretch or respond to scroll and cursor. Its roots are in film title sequences by Saul Bass (North by Northwest, 1959; Psycho, 1960) and Kyle Cooper (Se7en, 1995), and in Swiss poster typography. On the web, OpenType Font Variations (OpenType 1.8, announced 2016) made fluid weight and width animation possible, and tools like GSAP SplitText made per-letter motion easy. It became the signature of design studios, festivals and portfolios.

**How to recognise it**

- Headlines at 10–20vw that span the full width
- Condensed, ultra-bold or variable display faces
- Scrolling marquees of words; outlined (stroked) type
- Letters splitting, stretching or morphing on scroll/hover
- High-contrast monochrome with one bright accent

**Principles**

- Type is image: scale, weight and motion carry meaning
- Few words, huge presence
- Motion follows the rhythm of the words
- Everything else steps back

## Colors

Monochrome (off-black and paper white) with a single electric accent for highlights and outlined type.

| Swatch | Hex | Role |
|---|---|---|
| Off-Black | `#0D0D0D` | background |
| Carbon | `#1A1A1A` | surface |
| Paper | `#F2F0EB` | text |
| Fog | `#A3A09A` | muted text |
| Electric Orange | `#FF4F00` | accent |
| Divider | `#2E2E2E` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

A condensed, heavy or variable display face used huge; a neutral grotesk for small text; mono for credits and metadata.

- **Display: Druk** — Condensed / compressed, Commercial Type (Commercial). Free alternatives: Anton, Bebas Neue, League Gothic.
- **Body: PP Neue Montreal** — Neo-grotesque, Pangram Pangram (Free for personal use). Free alternatives: Hanken Grotesk, Inter.
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Anton, Bebas Neue, Big Shoulders Display, League Gothic, PP Neue Machina, Unbounded, Geist, Inter.

Modular scale: Fluid, viewport-based (clamp() with vw or cqi units) from a 16px base.

Use variable fonts (wght, wdth axes) for animation. Tight leading (0.85–0.95) and uppercase for condensed display.

## Layout

Full-bleed type blocks; horizontal scroll and pinned sections for sequences

Layout patterns: Full-bleed hero, Fullpage scroll-snap, Scrollytelling, Horizontal scroll section, Single-column long-form.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Minimal. Type is the image; occasional video or photography masked inside letterforms.

## Elevation & Depth

None

Texture: Outlined type (-webkit-text-stroke), occasional grain

## Shapes

Corner radius: 0px on layout; pill buttons are fine.

Borders: Hairline dividers

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Marquee band, Navbar, Link, CTA band, Footer.

The footer often carries a giant wordmark; links underline or swap letters on hover.

### Motion

The words perform: split-letter reveals, marquees, scroll-scrubbed weight and width, scramble effects.

Animations: Kinetic typography, Split-text reveal, Marquee, Scroll-scrubbed animation, Text scramble, Word rotator, Pinned section.

Easing: cubic-bezier(0.76, 0, 0.24, 1) — easeInOutQuart. Duration: 600–1200ms reveals; scroll-linked for scrubbing.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Size display type with clamp() so it fills the width at every breakpoint
- Do: Keep real text in the DOM when splitting letters (aria-label on the parent)
- Do: Limit to one or two moving type moments per page
- Do: Pause marquees under reduced motion
- Don't: Don’t split text into letter spans without an accessible label
- Don't: Don’t use condensed display type for paragraphs
- Don't: Don’t let the headline overflow the viewport on mobile
- Don't: Don’t animate type continuously behind reading content
- Accessibility: Per-letter spans are read letter by letter by some screen readers, so give the parent an aria-label and hide the spans with aria-hidden. Honour prefers-reduced-motion and give moving text a pause control. Viewport-sized type must reflow at 400% zoom (WCAG 1.4.10).

---

**References**

- Example: [Locomotive](https://locomotive.ca)
- [Saul Bass — Wikipedia](https://en.wikipedia.org/wiki/Saul_Bass)
- [GSAP SplitText docs](https://gsap.com/docs/v3/Plugins/SplitText/)
- [MDN — Variable fonts guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [v-fonts.com (variable font catalogue)](https://v-fonts.com)

<!-- Generated by Specimen Atlas from src/data/languages/kinetic-type.ts -->