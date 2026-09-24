---
version: "alpha"
name: "Organic Modern"
description: "Warm, tactile and calm: earthy colours, soft serifs, irregular blob shapes and natural photography that feel handmade rather than engineered."
colors:
  background: "#F2EADF"
  surface: "#FBF6EF"
  on-surface: "#2F2A22"
  on-surface-variant: "#6B6255"
  primary: "#B5532E"
  on-primary: "#FFFFFF"
  outline: "#D6C7B2"
  oat: "#F2EADF"
  clay: "#E7D8C6"
  bark: "#2F2A22"
  driftwood: "#6B6255"
  terracotta: "#B5532E"
  sage: "#9CAF88"
  moss: "#56613F"
typography:
  display-lg:
    fontFamily: "Fraunces"
    fontSize: 3.052rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Fraunces"
    fontSize: 1.953rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Fraunces"
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "DM Sans"
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
  md: 28px
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

# Organic Modern

*Also known as: Earthy / Natural, Organic design, Biophilic web design.*

## Overview

Warm, tactile and calm: earthy colours, soft serifs, irregular blob shapes and natural photography that feel handmade rather than engineered.

**Origin (2018–present; lineage in mid-century organic modernism).** Brings the warmth of natural materials to the screen: clay, oat, sage and terracotta palettes, soft “wonky” serifs, hand-cut blob shapes, paper grain and rounded forms. Its lineage runs through the organic modernism of Alvar Aalto and Isamu Noguchi and biophilic design thinking. On the web it became the go-to language for direct-to-consumer wellness, food, skincare and sustainability brands from the late 2010s, helped by soft variable serifs like Fraunces (Undercase Type, 2018–2020).

**How to recognise it**

- Earth palette: oat, clay, terracotta, sage, moss
- Soft or “wonky” serif display type (Fraunces, Recoleta)
- Irregular blob shapes and asymmetric radii
- Paper grain or subtle noise textures
- Natural-light photography of ingredients, hands and plants

**Principles**

- Warmth over precision
- Imperfect, hand-made shapes
- Nature-derived colour only
- Calm pacing and soft motion

## Colors

Warm earth neutrals with a terracotta action colour and sage as a secondary.

| Swatch | Hex | Role |
|---|---|---|
| Oat | `#F2EADF` | background |
| Clay | `#E7D8C6` | surface |
| Bark | `#2F2A22` | text |
| Driftwood | `#6B6255` | muted text |
| Terracotta | `#B5532E` | accent |
| Sage | `#9CAF88` | secondary |
| Moss | `#56613F` | label |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

A soft serif display with personality (optical-size and “softness” axes) paired with a warm geometric or humanist sans.

- **Display: Fraunces** — Old-style serif, Undercase Type (OFL).
- **Body: DM Sans** — Geometric sans, Colophon Foundry (for Google) (OFL).
- Also fits: Recoleta, Young Serif, Gloock, Outfit, Lora.

Modular scale: Major Third (1.25) from a 16px base.

Fraunces’ SOFT and WONK axes give the characteristic wobble. Keep headlines at 400–600 weight.

## Layout

Relaxed splits and asymmetric grids with overlapping shapes

Layout patterns: Split hero, Asymmetric grid, Card grid, Z-pattern.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Natural-light photography of ingredients, textures, hands and plants; hand-drawn line illustrations.

## Elevation & Depth

Minimal; separation through tone

Texture: Paper grain, subtle noise

## Shapes

Corner radius: 24–32px, often asymmetric (e.g. 28px 28px 28px 8px); blob radii on decorative shapes.

Borders: Thin, warm borders or none

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Product card, Testimonial, Newsletter signup, Feature grid, Badge, Footer.

Ingredient/benefit feature grids and product cards with soft shapes are central.

### Motion

Soft and organic: morphing blobs, gentle rises, hand-drawn line reveals.

Animations: Blob morph, Fade-up reveal, Film grain overlay, Parallax scrolling, Draw SVG, Hover lift.

Easing: cubic-bezier(0.45, 0, 0.55, 1) — easeInOutQuad. Duration: 500–1000ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Pull colours from real materials and photography
- Do: Vary radii to feel hand-made
- Do: Use grain subtly to add warmth
- Do: Keep CTAs clearly terracotta
- Don't: Don’t use neon or pure saturated colours
- Don't: Don’t use sharp 0px corners everywhere
- Don't: Don’t over-texture reading areas
- Don't: Don’t fall into generic cream-and-terracotta without real imagery
- Accessibility: Earthy mid-tones are easy to under-contrast, so keep text Bark on Oat (~12:1) and check terracotta buttons with white text (~5:1). Grain overlays must not reduce text contrast.

---

**References**

- Example: [Aesop](https://www.aesop.com)
- [Biophilic design — Wikipedia](https://en.wikipedia.org/wiki/Biophilic_design)
- [Fraunces — Google Fonts](https://fonts.google.com/specimen/Fraunces)

<!-- Generated by Specimen Atlas from src/data/languages/organic.ts -->