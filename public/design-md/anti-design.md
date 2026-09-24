---
version: "alpha"
name: "Anti-design"
description: "Rules deliberately broken: default fonts at odd sizes, clashing colours, overlapping and misaligned elements, raw links and unexpected interactions. Anti-polish as a statement."
colors:
  background: "#FFFFFF"
  surface: "#EFEFEF"
  on-surface: "#000000"
  on-surface-variant: "#444444"
  primary: "#0000EE"
  on-primary: "#FFFFFF"
  outline: "#000000"
  browser-white: "#FFFFFF"
  default-black: "#000000"
  link-blue: "#0000EE"
  visited-purple: "#551A8B"
  clash-green: "#00FF41"
typography:
  display-lg:
    fontFamily: "Times New Roman"
    fontSize: 3.052rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.04em
  headline-md:
    fontFamily: "Times New Roman"
    fontSize: 1.953rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.04em
  title-md:
    fontFamily: "Times New Roman"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Times New Roman"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Courier Prime"
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

# Anti-design

*Also known as: Ugly design, Anti-UX, New Ugly.*

## Overview

Rules deliberately broken: default fonts at odd sizes, clashing colours, overlapping and misaligned elements, raw links and unexpected interactions. Anti-polish as a statement.

**Origin (Italian Radical Design 1960s–70s; web revival 2018–present).** The name comes from the Italian Radical Design movement (Archizoom, Superstudio, Ettore Sottsass) that attacked functionalist "good design". On the web it describes sites that deliberately ignore conventions — default browser styles, clashing fonts, overlapping elements, cursor tricks — seen in fashion (Balenciaga’s 2019 site), art-school portfolios and music. It overlaps with web brutalism but is more chaotic and intentionally "wrong".

**How to recognise it**

- Default system fonts (Times, Arial) mixed with odd display faces
- Overlaps, collisions and elements off the grid
- Clashing, unharmonious colours
- Visible HTML defaults: blue underlined links, grey buttons
- Surprising interactions — dragged, stretched, tilted elements

**Principles**

- Ugly on purpose is a point of view
- Reject the template and the trend
- Surprise over comfort

## Colors

Unharmonious, clashing pairs and browser defaults (link blue, visited purple) on white.

| Swatch | Hex | Role |
|---|---|---|
| Browser White | `#FFFFFF` | background |
| Default Black | `#000000` | text |
| Link Blue | `#0000EE` | accent |
| Visited Purple | `#551A8B` | secondary |
| Clash Green | `#00FF41` | highlight |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

System defaults (Times New Roman, Arial, Courier) at unexpected sizes, mixed with one strange display face.

- **Display: Times New Roman** — Transitional serif, Monotype (for The Times, London) (System font). Free alternatives: Libre Baskerville, Source Serif 4.
- **Body: Times New Roman** — Transitional serif, Monotype (for The Times, London) (System font). Free alternatives: Libre Baskerville, Source Serif 4.
- **Mono: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- Also fits: Syne, UnifrakturMaguntia, Courier Prime.

Modular scale: None — sizes jump wildly from a 16px base.

Using the browser’s default serif is itself the statement.

## Layout

No grid — overlapping, absolutely positioned elements.

Layout patterns: Broken grid, Single-column long-form, Masonry.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Low-res JPEGs, stretched photos, clip art, screenshots and cursor trails.

## Elevation & Depth

Random, clashing drop shadows

Texture: Low-res images, MS Paint marks

## Shapes

Corner radius: Default (0px) or absurd (999px) — never tasteful.

Borders: Default 2px outset buttons, raw borders

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `7px -5px 0 #00FF41`.

Signature components: Link, Button, Marquee band, Masonry gallery.

Keep the actual buy/submit controls findable — anti-design that loses sales is just bad design.

### Motion

Unexpected and janky: elements follow the cursor, jitter or snap.

Animations: Custom cursor, Marquee, Shake, Glitch effect.

Easing: linear or steps(2). Duration: anything.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Break conventions knowingly and consistently
- Do: Keep the core task usable
- Do: Use it for brands with an audience that gets the joke
- Don't: Break keyboard navigation or focus
- Don't: Hide the primary action
- Don't: Mistake carelessness for concept
- Accessibility: Visual chaos is fine; semantic chaos is not. Keep reading order, headings, focus and labels correct underneath.

---

**References**

- Example: [Balenciaga](https://www.balenciaga.com)
- [Anti-design (Wikipedia)](https://en.wikipedia.org/wiki/Anti-design)
- [Brutalist Websites](https://brutalistwebsites.com)

<!-- Generated by Specimen Atlas from src/data/languages/anti-design.ts -->