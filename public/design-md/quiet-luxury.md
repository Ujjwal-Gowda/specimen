---
version: "alpha"
name: "Quiet Luxury"
description: "Luxury signalled by what is left out: no logos shouting, no gradients, no badges. Hairline details, slow motion, generous margins and photography that does the selling."
colors:
  background: "#F3EFE7"
  surface: "#FAF8F3"
  on-surface: "#2B2723"
  on-surface-variant: "#6E655B"
  primary: "#7A5C3E"
  on-primary: "#FFFFFF"
  outline: "#E0D9CC"
  bone: "#F3EFE7"
  linen: "#FAF8F3"
  espresso: "#2B2723"
  taupe: "#6E655B"
  bronze: "#7A5C3E"
  sand: "#E0D9CC"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 11.089rem
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: -0.005em
  headline-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 4.236rem
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.005em
  title-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 1.618rem
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Jost*"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.618rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 0px
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

# Quiet Luxury

*Also known as: Old Money minimal, Luxury minimal, Stealth wealth aesthetic.*

## Overview

Luxury signalled by what is left out: no logos shouting, no gradients, no badges. Hairline details, slow motion, generous margins and photography that does the selling.

**Origin (2022–present; lineage in 1990s minimalist fashion (Jil Sander, Helmut Lang)).** The phrases “quiet luxury” and “stealth wealth” spread through fashion coverage around 2022–2023, driven by brands like The Row, Loro Piana and Brunello Cucinelli, and by the TV series Succession. On the web the look translates to restraint: thin serifs or spare grotesks, tracked uppercase labels, stone and bone palettes, oceans of whitespace and large, calm photography. It descends from the 1990s minimalism of Jil Sander and Helmut Lang and from Aesop’s retail design.

**How to recognise it**

- Very light serif or thin grotesk headlines at large sizes
- Tiny uppercase labels with wide letter-spacing (0.2–0.3em)
- Desaturated bone, stone, taupe and espresso palettes
- Hairline-outlined or text-only buttons, never filled pills
- Huge margins; products shown on plain backdrops

**Principles**

- Restraint as the signal of quality
- Material and craft are the story, told through photography
- Slow pacing: fewer items per screen, unhurried motion
- Consistency down to the smallest label

## Colors

Near-monochrome warm neutrals with a single deep material accent (bronze, espresso or forest).

| Swatch | Hex | Role |
|---|---|---|
| Bone | `#F3EFE7` | background |
| Linen | `#FAF8F3` | surface |
| Espresso | `#2B2723` | text |
| Taupe | `#6E655B` | muted text |
| Bronze | `#7A5C3E` | accent |
| Sand | `#E0D9CC` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

A light, elegant display serif (or an ultra-clean grotesk) paired with a quiet geometric or neo-grotesque for labels and body. Uppercase tracking does much of the branding.

- **Display: Cormorant Garamond** — Old-style serif, Catharsis Fonts (OFL).
- **Body: Jost*** — Geometric sans, indestructible type* (OFL).
- Also fits: Canela, Ogg, Bodoni Moda, Instrument Serif, Suisse Int'l, PP Neue Montreal, Instrument Sans.

Modular scale: Golden Ratio (1.618) from a 16px base.

Display weights of 300–400 only. Labels in uppercase at 10–12px with 0.2–0.32em tracking. Never bold the body.

## Layout

Wide margins, 12-column grid used sparingly; big split-screen product/story pairs

Layout patterns: Full-bleed hero, Split screen, Centered hero, Asymmetric grid, Single-column long-form.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Large editorial product and lifestyle photography: natural light, neutral backdrops, close-ups of material and stitching. No illustration, no stock.

## Elevation & Depth

None

Texture: Paper-toned backgrounds; tactile product photography

## Shapes

Corner radius: 0px.

Borders: 1px hairlines in Sand or Espresso; outlined buttons

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Navbar, Hero, Product card, Masonry gallery, Carousel, Link, Newsletter signup, Footer.

Navigation is minimal (often a centred wordmark). Product cards show image, name and price with no badges. CTAs are underlined text links or hairline buttons.

### Motion

Slow, soft and cinematic: long fades, gentle image zooms, smooth scrolling.

Animations: Fade-in, Clip-path reveal, Ken Burns effect, Smooth scroll, Underline slide, Image reveal on hover.

Easing: cubic-bezier(0.25, 0.1, 0.25, 1) — ease (CSS default), stretched long. Duration: 800–1400ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Let whitespace and photography carry the page
- Do: Track uppercase labels generously
- Do: Use one accent colour at most
- Do: Keep motion slow and rare
- Don't: Don’t add discount badges, countdowns or pop-ups
- Don't: Don’t use bold weights or saturated colours
- Don't: Don’t crowd products into dense grids
- Don't: Don’t use emoji or playful illustration
- Accessibility: Light type on light grounds is the main risk: keep body text at ≥ 4.5:1 (Taupe #6E655B on Bone passes) and avoid weights under 300 for text below 20px. Text-only CTAs need a visible focus state and an underline.

---

**References**

- Example: [Aesop](https://www.aesop.com)
- Example: [The Row](https://www.therow.com)
- Example: [Loro Piana](https://www.loropiana.com)
- Example: [Brunello Cucinelli](https://www.brunellocucinelli.com)
- [Quiet luxury — Wikipedia](https://en.wikipedia.org/wiki/Quiet_luxury)
- [Cormorant Garamond — Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond)

<!-- Generated by Specimen Atlas from src/data/languages/quiet-luxury.ts -->