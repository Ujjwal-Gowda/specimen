---
version: "alpha"
name: "Utilitarian"
description: "Honest, instrument-like design: light greys, a single signal orange, monospaced labels and spec tables, dot-matrix numerals, modular panels and precise hairlines. Every element labelled, nothing decorative."
colors:
  background: "#E6E6E3"
  surface: "#F7F7F5"
  on-surface: "#1A1A1A"
  on-surface-variant: "#5E5E5A"
  primary: "#FF5A1F"
  on-primary: "#1A1A1A"
  outline: "#C9C9C4"
  chassis-grey: "#E6E6E3"
  panel-white: "#F7F7F5"
  graphite: "#1A1A1A"
  signal-orange: "#FF5A1F"
  label-grey: "#6E6E6A"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: 1.802rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-md:
    fontFamily: "Geist"
    fontSize: 1.424rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.03em
  title-md:
    fontFamily: "Geist"
    fontSize: 1.125rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Geist"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Geist Mono"
    fontSize: 0.889rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 6px
  md: 10px
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

# Utilitarian

*Also known as: Industrial design UI, Teenage Engineering style, Dieter Rams style.*

## Overview

Honest, instrument-like design: light greys, a single signal orange, monospaced labels and spec tables, dot-matrix numerals, modular panels and precise hairlines. Every element labelled, nothing decorative.

**Origin (Braun 1950s–70s → consumer tech 2010s–present).** Rooted in Dieter Rams’s work at Braun (1955–1995) and his "Ten principles for good design" ("as little design as possible"), carried forward by Teenage Engineering (OP-1, 2011), Nothing (2020) and Playdate. On the web it looks like a product manual or instrument panel: monospaced and grotesk labels, grids of spec data, dot-matrix type, a single signal orange, and generous greys.

**How to recognise it**

- Neutral light-grey or off-white panels like a device chassis
- One signal colour — orange or red — for the key control
- Monospaced or technical labels, often lowercase or tiny caps
- Spec tables, part numbers and diagrams
- Dot-matrix or LED-style numerals

**Principles**

- As little design as possible
- Form follows function; label everything
- Honest materials and visible structure

## Colors

Neutral greys and off-white with one signal orange; black for text and details.

| Swatch | Hex | Role |
|---|---|---|
| Chassis Grey | `#E6E6E3` | background |
| Panel White | `#F7F7F5` | surface |
| Graphite | `#1A1A1A` | text |
| Signal Orange | `#FF5A1F` | accent |
| Label Grey | `#6E6E6A` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

A precise grotesk plus a monospace for labels, specs and numbers; small sizes, careful spacing.

- **Display: Geist** — Neo-grotesque, Vercel (OFL).
- **Body: Geist** — Neo-grotesque, Vercel (OFL).
- **Mono: Geist Mono** — Monospace, Vercel (OFL).
- Also fits: Space Grotesk, Inter.

Modular scale: Major Second (1.125) from a 16px base.

Nothing’s dot-matrix "Ndot" and Teenage Engineering’s custom type are proprietary; a monospace carries the feel.

## Layout

Strict modular panels, like a device face or manual page.

Layout patterns: Swiss modular grid, Bento grid, Dashboard shell.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Product shots on grey, exploded diagrams, line drawings with callouts.

## Elevation & Depth

Flat; recessed wells for inputs

Texture: Matte plastic, anodised aluminium

## Shapes

Corner radius: 4–12px, like machined corners.

Borders: 1px hairlines and panel seams

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Toggle group, Switch, Slider, Data table, Keyboard key, Stats band.

Controls look like physical switches and sliders; specs sit in tables.

### Motion

Mechanical and precise: toggles click, counters tick.

Animations: Count-up, Spring press, Typewriter effect, Progress bar fill.

Easing: cubic-bezier(0.2, 0, 0, 1) — sharp ease-out. Duration: 120–250ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Label every control and value
- Do: Use one signal colour for the primary action
- Do: Show real specs and numbers
- Don't: Decorate
- Don't: Use more than one accent colour
- Don't: Hide structure behind effects
- Accessibility: Tiny labels are the risk — keep them ≥ 12px with 4.5:1 contrast; orange on grey fails as text.

---

**References**

- Example: [Teenage Engineering](https://teenage.engineering)
- Example: [Nothing](https://nothing.tech)
- [Vitsœ — Dieter Rams: ten principles](https://www.vitsoe.com/us/about/good-design)
- [Dieter Rams (Wikipedia)](https://en.wikipedia.org/wiki/Dieter_Rams)

<!-- Generated by Specimen Atlas from src/data/languages/utilitarian.ts -->