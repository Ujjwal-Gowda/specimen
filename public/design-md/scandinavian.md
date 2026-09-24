---
version: "alpha"
name: "Scandinavian"
description: "Light, calm and warm: off-white and pale wood tones, muted natural colours, simple friendly sans type, generous space and honest materials. Functional, democratic and cosy (hygge)."
colors:
  background: "#F7F5F1"
  surface: "#FFFFFF"
  on-surface: "#2B2B2B"
  on-surface-variant: "#6A665F"
  primary: "#4A6275"
  on-primary: "#FFFFFF"
  outline: "#E0D8CC"
  snow: "#F7F5F1"
  birch: "#E8DFD2"
  charcoal: "#2B2B2B"
  fjord-blue: "#5B7489"
  sage: "#A3B09A"
  clay: "#C8876B"
typography:
  display-lg:
    fontFamily: "DM Sans"
    fontSize: 3.052rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "DM Sans"
    fontSize: 1.953rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "DM Sans"
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
    fontFamily: "IBM Plex Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 4px
  md: 8px
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

# Scandinavian

*Also known as: Nordic design, Scandi, Scandinavian modern.*

## Overview

Light, calm and warm: off-white and pale wood tones, muted natural colours, simple friendly sans type, generous space and honest materials. Functional, democratic and cosy (hygge).

**Origin (1930s–60s design movement; ubiquitous since 2010s).** Scandinavian Modern grew from Danish, Swedish, Finnish and Norwegian craft traditions: Alvar Aalto, Arne Jacobsen, Hans Wegner, Marimekko’s prints. The 1954–57 "Design in Scandinavia" exhibition toured North America and made it a style. Its values — democratic, functional, warm, natural materials, light — shape IKEA, HAY, Muuto and much of today’s calm, airy web design.

**How to recognise it**

- Off-white, pale grey and light wood backgrounds
- Muted natural accents: sage, clay, dusty blue, ochre
- Simple, friendly sans in regular weights
- Lots of daylight and space in photography
- Soft small radii and thin lines

**Principles**

- Function first, beauty through simplicity
- Natural materials and daylight
- Design for everyone — democratic and affordable

## Colors

Light neutral base (white, oat, pale wood) with one or two muted natural accents.

| Swatch | Hex | Role |
|---|---|---|
| Snow | `#F7F5F1` | background |
| Birch | `#E8DFD2` | surface |
| Charcoal | `#2B2B2B` | text |
| Fjord Blue | `#5B7489` | accent |
| Sage | `#A3B09A` | secondary |
| Clay | `#C8876B` | warm accent |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Clean geometric or grotesque sans, regular to medium weights, sentence case; a warm serif for editorial accents.

- **Display: DM Sans** — Geometric sans, Colophon Foundry (for Google) (OFL).
- **Body: DM Sans** — Geometric sans, Colophon Foundry (for Google) (OFL).
- **Mono: IBM Plex Mono** — Monospace, IBM (OFL).
- Also fits: Work Sans, Manrope.

Modular scale: Major Third (1.25) from a 16px base.

Avoid heavy weights; Scandinavian type is quiet and even.

## Layout

Airy 12-column grid with large margins and simple rows.

Layout patterns: Split hero, Card grid, 12-column grid, Masonry.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Daylit interiors, pale wood, plants, knitwear, nature and seasons.

## Elevation & Depth

Almost none; soft shadows only for overlays

Texture: Wood, linen and wool in photography

## Shapes

Corner radius: 4–8px.

Borders: Thin 1px lines in warm grey

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Product card, Navbar, Masonry gallery, Newsletter signup, Footer.

Product cards with lots of white space and small, quiet price labels.

### Motion

Calm and unhurried: soft fades and gentle reveals.

Animations: Fade-in, Fade-up reveal, Hover lift, Ken Burns effect.

Easing: cubic-bezier(0.25, 0.1, 0.25, 1) — ease. Duration: 300–600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Let daylight photography carry the mood
- Do: Use muted natural accents
- Do: Keep weights regular and spacing generous
- Don't: Use saturated primaries
- Don't: Crowd the layout
- Don't: Use heavy drop shadows
- Accessibility: Muted accents often fail contrast as text; keep text charcoal and use accents for fills with dark text.

---

**References**

- Example: [HAY](https://hay.dk)
- Example: [Muuto](https://www.muuto.com)
- Example: [Marimekko](https://www.marimekko.com)
- [Scandinavian design (Wikipedia)](https://en.wikipedia.org/wiki/Scandinavian_design)

<!-- Generated by Specimen Atlas from src/data/languages/scandinavian.ts -->