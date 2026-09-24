---
version: "alpha"
name: "IBM Carbon"
description: "IBM’s enterprise design system: square corners, a strict 2x grid, IBM Plex everywhere and a restrained blue-60 accent. Built for dense, data-heavy software that must stay calm and legible for hours."
colors:
  background: "#FFFFFF"
  surface: "#F4F4F4"
  on-surface: "#161616"
  on-surface-variant: "#525252"
  primary: "#0F62FE"
  on-primary: "#FFFFFF"
  outline: "#C6C6C6"
  white: "#FFFFFF"
  gray-10: "#F4F4F4"
  gray-100: "#161616"
  gray-70: "#525252"
  blue-60: "#0F62FE"
  red-60: "#DA1E28"
  green-50: "#24A148"
typography:
  display-lg:
    fontFamily: "IBM Plex Sans"
    fontSize: 3.052rem
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 1.953rem
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 1.25rem
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "IBM Plex Sans"
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

# IBM Carbon

*Also known as: Carbon Design System, IBM Design Language.*

## Overview

IBM’s enterprise design system: square corners, a strict 2x grid, IBM Plex everywhere and a restrained blue-60 accent. Built for dense, data-heavy software that must stay calm and legible for hours.

**Origin (2017–present, IBM).** Carbon is IBM’s open-source design system, launched in 2017 to unify IBM’s software products under the IBM Design Language. It inherits the "2x Grid" and the IBM Plex type family (Mike Abbink with Bold Monday, 2017), which replaced Helvetica across IBM. Carbon ships React, Web Components, Angular and Vue implementations, and is known for its rigorous data-dense enterprise components, four themes (White, Gray 10, Gray 90, Gray 100) and its expressive-versus-productive type sets.

**How to recognise it**

- Square corners on almost everything; buttons flush to container edges
- IBM Plex Sans / Mono / Serif throughout
- Blue 60 (#0F62FE) as the one interactive colour on neutral greys
- Bottom-border text inputs on a light grey fill
- Dense data tables, tiles and side navigation with thin dividers

**Principles**

- Productive before expressive: clarity for repeated daily use
- The 2x Grid — every dimension is a multiple of 8 (with 2 and 4 for fine detail)
- Colour is functional: status and interaction, not decoration
- Accessible by default (WCAG 2.1 AA across components)

## Colors

Neutral grey layers (white, Gray 10, Gray 100) with IBM Blue 60 for interaction and a fixed support palette for status.

| Swatch | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | background |
| Gray 10 | `#F4F4F4` | layer / field |
| Gray 100 | `#161616` | text |
| Gray 70 | `#525252` | secondary text |
| Blue 60 | `#0F62FE` | interactive |
| Red 60 | `#DA1E28` | error |
| Green 50 | `#24A148` | success |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

IBM Plex Sans for everything, with Plex Mono for code and data and Plex Serif for editorial moments. Carbon defines separate "productive" (compact) and "expressive" (fluid, larger) type sets.

- **Display: IBM Plex Sans** — Grotesque, IBM (OFL).
- **Body: IBM Plex Sans** — Grotesque, IBM (OFL).
- **Mono: IBM Plex Mono** — Monospace, IBM (OFL).
- Also fits: IBM Plex Sans Condensed, IBM Plex Serif.

Modular scale: Carbon type scale (custom, 12 → 156px); roughly Major Third (1.25) from a 16px base.

Light (300) weight for large expressive headings is a Carbon signature.

## Layout

The 2x Grid: 16 columns at large widths, 32px gutters, mini unit of 8px.

Layout patterns: Dashboard shell, Docs layout, 12-column grid, Swiss modular grid.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Product screenshots, data visualisation and the IBM line-art illustration style; photography is candid and cool.

## Elevation & Depth

Mostly flat; layering by background grey steps, shadows only on overlays

Texture: None

## Shapes

Corner radius: 0px (square).

Borders: 1px dividers; inputs have a bottom border only; focus is a 2px inset blue ring

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Data table, Sidebar navigation, Tabs, Toast, Text input, Breadcrumb, Chart.

Carbon’s data table (sorting, batch actions, expandable rows) and UI shell (header + side nav) are the parts most teams adopt.

### Motion

Two modes: productive (fast, efficient) and expressive (slightly longer, for moments that matter).

Animations: Fade-in, Accordion expand, Toast slide-in, Shimmer skeleton, Progress bar fill.

Easing: cubic-bezier(0.2, 0, 0.38, 0.9) — Carbon standard productive. Duration: 70–240ms (fast-01 to moderate-02).

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use the 8px mini unit and 16-column grid
- Do: Keep Blue 60 for interactive elements only
- Do: Use the Gray 10 / White layering to separate regions
- Don't: Round the corners — it stops looking like Carbon
- Don't: Add decorative colour or gradients
- Don't: Mix in another type family
- Accessibility: Carbon components target WCAG 2.1 AA; keep the 2px focus ring and do not rely on the blue alone to show state.

---

**References**

- Example: [Carbon Design System](https://carbondesignsystem.com)
- Example: [IBM](https://www.ibm.com)
- [Carbon — Elements & guidelines](https://carbondesignsystem.com/elements/color/overview/)
- [IBM Design Language](https://www.ibm.com/design/language/)
- [IBM Plex](https://www.ibm.com/plex/)

<!-- Generated by Specimen Atlas from src/data/languages/ibm-carbon.ts -->