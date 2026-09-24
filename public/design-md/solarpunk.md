---
version: "alpha"
name: "Solarpunk"
description: "Hopeful green futures: lush greens and sunlit golds, organic curves, Art Nouveau-inspired ornament meeting clean tech, plants growing through architecture. Optimistic, communal and handmade."
colors:
  background: "#F6F1E3"
  surface: "#FFFBF0"
  on-surface: "#2E2A20"
  on-surface-variant: "#5D5847"
  primary: "#2F6B3A"
  on-primary: "#FFFFFF"
  outline: "#D8CFB4"
  canopy-green: "#2F6B3A"
  solar-gold: "#F2B632"
  sky: "#8EC5E8"
  linen: "#F6F1E3"
  soil: "#2E2A20"
typography:
  display-lg:
    fontFamily: "Fraunces"
    fontSize: 3.052rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Fraunces"
    fontSize: 1.953rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Fraunces"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Nunito"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 24px
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

# Solarpunk

*Also known as: Eco-futurism, Green futurism.*

## Overview

Hopeful green futures: lush greens and sunlit golds, organic curves, Art Nouveau-inspired ornament meeting clean tech, plants growing through architecture. Optimistic, communal and handmade.

**Origin (Named c. 2008–2014; design trend 2020s).** A literary and art movement imagining hopeful, sustainable futures: solar panels and gardens on every roof, Art Nouveau-inspired architecture, community and craft. The term appeared around 2008 and spread through a 2014 Tumblr manifesto and anthologies like "Sunvault" (2017). Visually it borrows from Art Nouveau, Studio Ghibli and biophilic architecture, and it is increasingly used by climate-tech and regenerative brands.

**How to recognise it**

- Lush greens with sunlit gold and sky blue
- Plants and gardens integrated with technology
- Organic, Art Nouveau-flavoured curves and arches
- Stained-glass and hand-drawn illustration
- Soft, warm light

**Principles**

- Optimism: the future can be green and just
- Technology in harmony with nature and community
- Repair, craft and local over disposable

## Colors

Leafy greens and warm solar golds on cream, with sky blue for air and water.

| Swatch | Hex | Role |
|---|---|---|
| Canopy Green | `#2F6B3A` | accent |
| Solar Gold | `#F2B632` | highlight |
| Sky | `#8EC5E8` | secondary |
| Linen | `#F6F1E3` | background |
| Soil | `#2E2A20` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Soft, warm serif display with organic character, paired with a friendly humanist sans.

- **Display: Fraunces** — Old-style serif, Undercase Type (OFL).
- **Body: Nunito** — Rounded sans (OFL).
- Also fits: Young Serif, Figtree.

Modular scale: Major Third (1.25) from a 16px base.

Fraunces’ "SOFT" and "WONK" axes give the handmade warmth.

## Layout

Airy, rounded card grids with arched image frames.

Layout patterns: Split hero, Card grid, Scrollytelling.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Illustrated green cities, rooftop gardens, solar arrays, people working together; warm golden-hour photography.

## Elevation & Depth

Soft, sunlit shadows

Texture: Paper, leaves, dappled light

## Shapes

Corner radius: 16–32px and arches.

Borders: Thin botanical line ornament

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 10px 30px rgba(47,107,58,.12)`.

Signature components: Hero, Feature grid, Stats band, Timeline, Newsletter signup.

Impact stats (tonnes saved, trees planted) in a stats band are typical.

### Motion

Growing and breathing: vines draw in, leaves sway gently.

Animations: Draw SVG, Fade-up reveal, Parallax scrolling, Blob morph.

Easing: cubic-bezier(0.33, 1, 0.68, 1) — easeOutCubic. Duration: 500–1000ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Show people and nature together
- Do: Use arched frames for imagery
- Do: Back optimism with real numbers
- Don't: Greenwash with leaves on unrelated products
- Don't: Use cold greys and neon
- Don't: Make it look like a stock "eco" template
- Accessibility: Gold highlights fail as text on cream; keep text in soil brown or canopy green.

---

**References**

- [Solarpunk (Wikipedia)](https://en.wikipedia.org/wiki/Solarpunk)

<!-- Generated by Specimen Atlas from src/data/languages/solarpunk.ts -->