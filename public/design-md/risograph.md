---
version: "alpha"
name: "Risograph"
description: "Two or three fluorescent spot inks overprinting on paper: grain, halftones, visible misregistration and multiply blending. Crafty, indie and warm."
colors:
  background: "#F5F0E6"
  surface: "#FFFDF7"
  on-surface: "#26315A"
  on-surface-variant: "#55607F"
  primary: "#0078BF"
  on-primary: "#FFFFFF"
  outline: "#26315A"
  fluorescent-pink: "#FF48B0"
  riso-blue: "#0078BF"
  riso-yellow: "#FFE800"
  uncoated-paper: "#F5F0E6"
  overprint-navy: "#26315A"
typography:
  display-lg:
    fontFamily: "Bricolage Grotesque"
    fontSize: 4.209rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: 2.369rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: 1.333rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Work Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Space Mono"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 6px
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

# Risograph

*Also known as: Riso print, Riso aesthetic, Zine style.*

## Overview

Two or three fluorescent spot inks overprinting on paper: grain, halftones, visible misregistration and multiply blending. Crafty, indie and warm.

**Origin (Riso Kagaku duplicators from 1986; design trend 2010s–present).** Risograph machines (Riso Kagaku, Japan, 1986) were built for cheap high-volume office copying. Artists and independent publishers adopted them for zines and posters: each colour is a separate stencil drum with vivid soy-based spot inks (Fluorescent Pink, Blue, Yellow), producing grainy textures, overprinted colour mixes and slightly misregistered layers. The look moved to the web as a warm, crafty counterpoint to slick digital gradients.

**How to recognise it**

- Two or three spot colours only (Riso Pink, Blue, Yellow, Teal)
- Overprint colour mixes where layers overlap (multiply)
- Visible grain and halftone dots
- Slight misregistration between colour layers
- Off-white, uncoated paper background

**Principles**

- Limit the palette to the drums you have
- Imperfection is the charm
- Layers, not effects

## Colors

Two or three fluorescent spot inks on paper, mixed only by overprinting (mix-blend-mode: multiply).

| Swatch | Hex | Role |
|---|---|---|
| Fluorescent Pink | `#FF48B0` | accent |
| Riso Blue | `#0078BF` | primary |
| Riso Yellow | `#FFE800` | highlight |
| Uncoated Paper | `#F5F0E6` | background |
| Overprint Navy | `#26315A` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Chunky grotesks and friendly soft serifs, set big and printed in one ink; body in a sturdy sans.

- **Display: Bricolage Grotesque** — Display / decorative (OFL).
- **Body: Work Sans** — Grotesque (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Archivo Black, Young Serif, Archivo.

Modular scale: Perfect Fourth (1.333) from a 16px base.

Offset one colour layer by 1–2px to fake misregistration on headings.

## Layout

Zine-like: loose modular grid with stickers and callouts.

Layout patterns: Swiss modular grid, Masonry, Asymmetric grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Grainy duotone photos and illustrations with visible halftone, printed in spot colours.

## Elevation & Depth

None — overprint layers

Texture: Grain, halftone dots, paper fibre

## Shapes

Corner radius: 0–12px, often hand-cut.

Borders: Thick ink outlines

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Card, Blog card, Product card, Newsletter signup, Tag.

Cards look like printed stickers; tags look like stamped labels.

### Motion

Tactile and playful: layers shift slightly out of register on hover.

Animations: Hover lift, Film grain overlay, Stagger reveal, Clip-path reveal.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack. Duration: 200–500ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Pick two or three inks and stick to them
- Do: Use mix-blend-mode: multiply for overlaps
- Do: Add grain with an SVG noise filter
- Don't: Use full-colour photos
- Don't: Make text fluorescent pink on paper
- Don't: Use drop shadows
- Accessibility: Fluorescent inks on paper have weak contrast; set text in the darkest ink (or overprint navy).

---

**References**

- Example: [Stencil — Riso colour library](https://www.stencil.wiki/colors)
- [Risograph (Wikipedia)](https://en.wikipedia.org/wiki/Risograph)

<!-- Generated by Specimen Atlas from src/data/languages/risograph.ts -->