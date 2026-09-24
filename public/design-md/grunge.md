---
version: "alpha"
name: "Grunge"
description: "Distressed, photocopied, torn and collaged: typewriter and stencil type, overlapping layers, tape, grit and deliberately broken legibility. Raw, rebellious and handmade."
colors:
  background: "#D8CDB6"
  surface: "#ECE6D8"
  on-surface: "#1B1A17"
  on-surface-variant: "#4F4A40"
  primary: "#B8400F"
  on-primary: "#FFFFFF"
  outline: "#1B1A17"
  photocopy-black: "#1B1A17"
  coffee-stain: "#D8CDB6"
  newsprint: "#ECE6D8"
  safety-orange: "#E4521B"
  faded-ink: "#6A6356"
typography:
  display-lg:
    fontFamily: "Special Elite"
    fontSize: 3.052rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Special Elite"
    fontSize: 1.953rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Special Elite"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Courier Prime"
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

# Grunge

*Also known as: Grunge typography, Ray Gun style, 90s distressed.*

## Overview

Distressed, photocopied, torn and collaged: typewriter and stencil type, overlapping layers, tape, grit and deliberately broken legibility. Raw, rebellious and handmade.

**Origin (1990s, California (Ray Gun, Emigre)).** Associated above all with David Carson’s art direction of Ray Gun magazine (1992–95) and the experimental faces of Emigre and FontShop’s FUSE project. Early Macs and cheap photocopiers let designers distort, overlap and degrade type; legibility became optional. Carson famously set an interview with Bryan Ferry entirely in the dingbat font Zapf Dingbats. The look spread to music, skate and snowboard brands.

**How to recognise it**

- Photocopied, stained or torn textures
- Typewriter, stencil and distressed type mixed together
- Overlapping, cropped and rotated text blocks
- Tape, staples, handwriting and collage
- Muted, dirty colours with one loud accent

**Principles**

- Expression over legibility
- The handmade and imperfect is honest
- Every layout is a one-off

## Colors

Dirty neutrals (newsprint, coffee, black) with one loud accent like safety orange or acid green.

| Swatch | Hex | Role |
|---|---|---|
| Photocopy Black | `#1B1A17` | text |
| Coffee Stain | `#D8CDB6` | background |
| Newsprint | `#ECE6D8` | surface |
| Safety Orange | `#E4521B` | accent |
| Faded Ink | `#6A6356` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Typewriter and distressed faces for texture, condensed sans for shouting; mix freely, crop and overlap.

- **Display: Special Elite** — Monospace, Astigmatic (Apache 2.0).
- **Body: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- **Mono: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- Also fits: Anton, Bebas Neue.

Modular scale: Irregular from a 16px base.

Emigre’s Template Gothic and FUSE experiments are the originals; Special Elite is a free distressed typewriter.

## Layout

No grid: collage, overlaps and crops.

Layout patterns: Broken grid, Asymmetric grid, Masonry.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: High-contrast black-and-white photos, xerox texture, hand-cut collage, band and skate photography.

## Elevation & Depth

Collage layering with rough shadows

Texture: Photocopy noise, paper grain, stains, scratches

## Shapes

Corner radius: 0px, with torn or rough edges.

Borders: Tape strips, rough outlines

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `4px 5px 0 rgba(27,26,23,.35)`.

Signature components: Hero, Masonry gallery, Blog card, Newsletter signup.

Keep interactive components plain and legible under the chaos.

### Motion

Jittery and lo-fi: flickers, shakes, film-gate wobble.

Animations: Glitch effect, Shake, Film grain overlay, Neon flicker.

Easing: steps(3) — stop-motion. Duration: 80–300ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use texture and collage behind content, not over it
- Do: Mix a distressed display face with a clean body face
- Do: Crop photos aggressively
- Don't: Distress body copy or form labels
- Don't: Use it for trust-critical products
- Don't: Let texture files bloat page weight
- Accessibility: Distressed type fails at small sizes; keep reading text clean and above 4.5:1 contrast, and give images real alt text.

---

**References**

- Example: [David Carson Design](https://www.davidcarsondesign.com)
- [David Carson (Wikipedia)](https://en.wikipedia.org/wiki/David_Carson_(graphic_designer))
- [Ray Gun (Wikipedia)](https://en.wikipedia.org/wiki/Ray_Gun_(magazine))
- [Emigre](https://www.emigre.com)

<!-- Generated by Specimen Atlas from src/data/languages/grunge.ts -->