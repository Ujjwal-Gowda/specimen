---
version: "alpha"
name: "Metro"
description: "Flat, bold and typographic: solid-colour square Live Tiles, huge light-weight Segoe headings (often lowercase and cropped at the edge), no chrome, no gradients. Content over chrome."
colors:
  background: "#1D1D1D"
  surface: "#2B2B2B"
  on-surface: "#FFFFFF"
  on-surface-variant: "#BDBDBD"
  primary: "#0050EF"
  on-primary: "#FFFFFF"
  outline: "#3A3A3A"
  cobalt: "#0050EF"
  emerald: "#008A00"
  crimson: "#A20025"
  mango: "#F09609"
  metro-black: "#1D1D1D"
  white: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "Segoe UI Variable"
    fontSize: 7.594rem
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Segoe UI Variable"
    fontSize: 3.375rem
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Segoe UI Variable"
    fontSize: 1.5rem
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Segoe UI Variable"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Consolas"
    fontSize: 0.667rem
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

# Metro

*Also known as: Microsoft design language, Modern UI, Windows Phone UI.*

## Overview

Flat, bold and typographic: solid-colour square Live Tiles, huge light-weight Segoe headings (often lowercase and cropped at the edge), no chrome, no gradients. Content over chrome.

**Origin (2010–2015, Microsoft).** Microsoft’s typography-first design language, launched with Windows Phone 7 (2010) and carried into Windows 8, Xbox and Outlook.com. Inspired by transit wayfinding signage and Swiss design, it dropped chrome, gradients and skeuomorphism for flat coloured "Live Tiles", huge lowercase Segoe headings bleeding off-screen and "content not chrome". It prefigured the industry’s move to flat design and evolved into Fluent (2017).

**How to recognise it**

- Solid-colour square and rectangular tiles in a grid
- Very large, light Segoe UI headings, often lowercase
- Panorama/pivot headings that run off the screen edge
- No rounded corners, gradients or shadows
- White monochrome glyph icons

**Principles**

- Content, not chrome
- Typography is the interface
- Authentically digital — no imitation of physical materials
- Alive in motion

## Colors

Black or white base with one user-chosen accent from a fixed set; tiles in solid accent colours.

| Swatch | Hex | Role |
|---|---|---|
| Cobalt | `#0050EF` | accent |
| Emerald | `#008A00` | tile |
| Crimson | `#A20025` | tile |
| Mango | `#F09609` | tile |
| Metro Black | `#1D1D1D` | background |
| White | `#FFFFFF` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Segoe UI (Light and Semilight for display, Regular for body), large sizes, lowercase headings, generous left alignment.

- **Display: Segoe UI Variable** — Humanist sans, Microsoft (System font). Free alternatives: Open Sans, Source Sans 3.
- **Body: Segoe UI Variable** — Humanist sans, Microsoft (System font). Free alternatives: Open Sans, Source Sans 3.
- Also fits: Open Sans.

Modular scale: Metro type ramp (42/20/15/11pt), roughly Perfect Fifth (1.5) from a 16px base.

Open Sans Light is a close free stand-in for Segoe UI Light.

## Layout

Tile grid with 10–12px gutters; horizontally panning hubs.

Layout patterns: Bento grid, Horizontal scroll section, Swiss modular grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Full-bleed photos inside tiles; monochrome line icons.

## Elevation & Depth

None — completely flat

Texture: None

## Shapes

Corner radius: 0px.

Borders: None; tiles separated by small gaps

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Bento grid, Tabs, Navbar, Toggle group, Switch.

Live Tiles and the "pivot" tab control (big lowercase tab labels) define it.

### Motion

Kinetic and physical: tiles flip, pages turnstile, headings slide in parallax.

Animations: Card flip, Stagger reveal, Horizontal scroll section, Page transition.

Easing: cubic-bezier(0.1, 0.9, 0.2, 1) — exponential out. Duration: 250–400ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use big, light, lowercase headings
- Do: Keep tiles solid and square
- Do: Let headings bleed off the edge
- Don't: Add gradients, shadows or rounded corners
- Don't: Use more than a few tile colours at once
- Don't: Put long text in tiles
- Accessibility: Light-weight type needs large sizes; white on Mango or Lime fails contrast — use dark text there.

---

**References**

- [Metro (design language) — Wikipedia](https://en.wikipedia.org/wiki/Metro_(design_language))

<!-- Generated by Specimen Atlas from src/data/languages/metro.ts -->