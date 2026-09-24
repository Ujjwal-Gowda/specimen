---
version: "alpha"
name: "Wabi-sabi"
description: "Quiet, earthy and imperfect: clay, stone, rice paper and ash tones, uneven hand-made textures, asymmetric calm layouts and lots of empty space (ma). Beauty in the worn and incomplete."
colors:
  background: "#F1ECE3"
  surface: "#F8F5EF"
  on-surface: "#2C2A27"
  on-surface-variant: "#625C53"
  primary: "#8A5A40"
  on-primary: "#FFFFFF"
  outline: "#CFC8BC"
  rice-paper: "#F1ECE3"
  ash: "#CFC8BC"
  sumi-ink: "#2C2A27"
  clay: "#9E6B4E"
  moss: "#7C8466"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 2.488rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0.01em
  headline-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 1.728rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.01em
  title-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 1.2rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Hanken Grotesk"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.833rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 10px 12px 9px 13px
  md: 14px 18px 12px 20px
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

# Wabi-sabi

*Also known as: Japanese minimalism, Imperfect beauty.*

## Overview

Quiet, earthy and imperfect: clay, stone, rice paper and ash tones, uneven hand-made textures, asymmetric calm layouts and lots of empty space (ma). Beauty in the worn and incomplete.

**Origin (Japanese aesthetic rooted in 15th–16th-century tea ceremony).** A Japanese world-view centred on transience and imperfection, shaped by Zen Buddhism and the tea ceremony of Murata Jukō and Sen no Rikyū, who prized rough, handmade, asymmetrical tea bowls over perfect Chinese porcelain. Leonard Koren’s 1994 book "Wabi-Sabi for Artists, Designers, Poets & Philosophers" introduced it to Western design. In interfaces it means calm, earthy, textured minimalism with visible imperfection and plenty of "ma" (negative space).

**How to recognise it**

- Earthy, desaturated palette: clay, ash, stone, moss
- Visible texture: paper fibre, plaster, ceramics
- Asymmetric compositions with a lot of empty space
- Soft, irregular shapes rather than perfect geometry
- Thin, light serif or sans type, often small

**Principles**

- Nothing lasts, nothing is finished, nothing is perfect
- Emptiness (ma) is part of the design
- Natural, humble materials

## Colors

Low-saturation earth tones with a single muted accent; never pure white or black.

| Swatch | Hex | Role |
|---|---|---|
| Rice Paper | `#F1ECE3` | background |
| Ash | `#CFC8BC` | surface |
| Sumi Ink | `#2C2A27` | text |
| Clay | `#9E6B4E` | accent |
| Moss | `#7C8466` | secondary |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Quiet, light-weight serif for headings, small and well-spaced; a calm sans for text.

- **Display: Cormorant Garamond** — Old-style serif, Catharsis Fonts (OFL).
- **Body: Hanken Grotesk** — Grotesque, Hanken Design Co. (OFL).
- Also fits: Newsreader, Source Serif 4.

Modular scale: Minor Third (1.2) from a 16px base.

Keep sizes small and restrained; space does the emphasis.

## Layout

Asymmetric, with large empty areas and objects placed off-centre.

Layout patterns: Asymmetric grid, Single-column long-form, Split screen.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Handmade ceramics, weathered wood, dried flowers, natural light and shadow.

## Elevation & Depth

None

Texture: Paper fibre, plaster, glaze, stone

## Shapes

Corner radius: Irregular — slightly uneven radii.

Borders: Hairlines in ash

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Product card, Masonry gallery, Navbar, Footer.

Very few components on each page; generous whitespace around each product.

### Motion

Almost still: slow fades and gentle drift.

Animations: Fade-in, Blur-in, Ken Burns effect, Film grain overlay.

Easing: cubic-bezier(0.37, 0, 0.63, 1) — easeInOutSine. Duration: 800–1600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Leave more space than feels comfortable
- Do: Use real texture from photography
- Do: Keep type small and quiet
- Don't: Use saturated colour
- Don't: Align everything perfectly centred
- Don't: Add bold UI chrome
- Accessibility: Low-contrast earth palettes often fail; keep body text in sumi ink at 4.5:1 and size ≥ 16px.

---

**References**

- Example: [MUJI](https://www.muji.com)
- [Wabi-sabi (Wikipedia)](https://en.wikipedia.org/wiki/Wabi-sabi)

<!-- Generated by Specimen Atlas from src/data/languages/wabi-sabi.ts -->