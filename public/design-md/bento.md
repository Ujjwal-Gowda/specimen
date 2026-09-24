---
version: "alpha"
name: "Bento Grid UI"
description: "A modular grid of rounded tiles in different sizes, each holding one feature, stat or visual. Scannable, dense yet tidy, and perfect for summarising many features at once."
colors:
  background: "#F5F5F7"
  surface: "#FFFFFF"
  on-surface: "#1D1D1F"
  on-surface-variant: "#6E6E73"
  primary: "#0071E3"
  on-primary: "#FFFFFF"
  outline: "#E8E8ED"
  light-grid: "#F5F5F7"
  tile-white: "#FFFFFF"
  graphite: "#1D1D1F"
  secondary-grey: "#6E6E73"
  action-blue: "#0071E3"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: 3.052rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.035em
  headline-md:
    fontFamily: "Inter"
    fontSize: 1.953rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.035em
  title-md:
    fontFamily: "Inter"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Inter"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Geist Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 22px
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

# Bento Grid UI

*Also known as: Bento grid, Bento box layout, Apple keynote grid.*

## Overview

A modular grid of rounded tiles in different sizes, each holding one feature, stat or visual. Scannable, dense yet tidy, and perfect for summarising many features at once.

**Origin (2022–present; Apple keynote summary slides → Linear, Vercel, Framer marketing sites).** Named after the compartmentalised Japanese bento lunch box. Apple’s WWDC and iPhone keynote summary slides (from around 2022) packed many features into a grid of rounded tiles of different sizes; the pattern spread to product marketing sites such as Linear, Vercel, Raycast and Framer templates. Windows 8 Live Tiles and Pinterest-style dashboards are earlier relatives. bentogrids.com curates examples.

**How to recognise it**

- Rounded rectangles (16–28px) of varying spans in one tight grid
- Each tile = one idea: a stat, a screenshot, a short line
- Consistent gaps (8–16px) and aligned edges
- Mix of text tiles, visual tiles and interactive tiles
- Neutral grounds (light grey or near-black) so tile content pops

**Principles**

- One message per tile
- Size = importance: the hero tile gets the biggest span
- Consistent gutters and radii make variety feel orderly
- Tiles should read in any order

## Colors

Neutral grid ground; tiles in white/near-black with one or two accent tiles; product visuals supply colour.

| Swatch | Hex | Role |
|---|---|---|
| Light Grid | `#F5F5F7` | background |
| Tile White | `#FFFFFF` | surface |
| Graphite | `#1D1D1F` | text / dark tile |
| Secondary Grey | `#6E6E73` | muted |
| Action Blue | `#0071E3` | accent |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Tight, confident sans headlines inside tiles, big numerals for stats, small muted captions.

- **Display: Inter** — Neo-grotesque, rsms (OFL).
- **Body: Inter** — Neo-grotesque, rsms (OFL).
- **Mono: Geist Mono** — Monospace, Vercel (OFL).
- Also fits: Geist, SF Pro, Söhne.

Modular scale: Major Third (1.25) from a 16px base.

Linear uses Inter (Display), Vercel uses Geist; Apple uses SF Pro.

## Layout

CSS Grid with 4–6 columns and row spans (grid-template-areas); collapses to 1–2 columns on mobile

Layout patterns: Bento grid, Card grid, Centered hero.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Product UI crops, 3D objects, icons and big numbers inside tiles.

## Elevation & Depth

Flat; occasional soft hover lift

Texture: Optional gradients or noise inside hero tiles

## Shapes

Corner radius: 16–28px tiles, concentric inner radii.

Borders: None or 1px very subtle on light grounds

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Bento grid, Feature grid, Stats band, Card, Hero, Chart.

The bento-grid section itself is the signature component; works for features, integrations, team, testimonials.

### Motion

Tiles stagger in, hover reveals detail, micro-interactions inside tiles.

Animations: Stagger reveal, Hover lift, Spotlight hover, Count-up, 3D tilt, Border beam, Zoom on scroll, Magnetic button.

Easing: cubic-bezier(0.16, 1, 0.3, 1) — easeOutExpo. Duration: 400–700ms (stagger 60–90ms).

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Plan the grid with grid-template-areas and give the key message the biggest tile
- Do: Keep gaps and radii identical across all tiles
- Do: Design the mobile stack order deliberately
- Don't: Cram paragraphs into small tiles
- Don't: Use random tile sizes without hierarchy
- Don't: Let tiles become identical cards — vary the content type
- Accessibility: Keep DOM order logical (grid visual order can differ from reading order). Interactive tiles need focus states and must not rely on hover to show content.

---

**References**

- Example: [Linear](https://linear.app)
- Example: [Vercel](https://vercel.com)
- Example: [Apple](https://www.apple.com)
- [Bento Grids — curated examples](https://bentogrids.com)
- [DESIGN.md — Linear (getdesign.md)](https://getdesign.md/linear.app/design-md)
- [DESIGN.md — Vercel (getdesign.md)](https://getdesign.md/vercel/design-md)

<!-- Generated by Specimen Atlas from src/data/languages/bento.ts -->