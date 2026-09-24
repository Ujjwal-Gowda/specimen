---
version: "alpha"
name: "Swiss Punk"
description: "Swiss grids deliberately broken: stepped and angled type, wide letterspacing, layered halftones, bars and rules. Still sans-serif and systematic underneath, but noisy, playful and expressive."
colors:
  background: "#F1EEE6"
  surface: "#FFFFFF"
  on-surface: "#121212"
  on-surface-variant: "#55544F"
  primary: "#C4006B"
  on-primary: "#FFFFFF"
  outline: "#121212"
  offset-black: "#121212"
  newsprint: "#F1EEE6"
  process-magenta: "#E5007D"
  cyan-film: "#00A0C6"
  halftone-grey: "#8A8A85"
typography:
  display-lg:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: 3.052rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: 0.02em
  headline-md:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: 1.953rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0.02em
  title-md:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: 1.25rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Univers"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Space Mono"
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

# Swiss Punk

*Also known as: New Wave typography, Basel New Wave, Postmodern typography.*

## Overview

Swiss grids deliberately broken: stepped and angled type, wide letterspacing, layered halftones, bars and rules. Still sans-serif and systematic underneath, but noisy, playful and expressive.

**Origin (1970s–80s, Basel → California).** Wolfgang Weingart, teaching at the Basel School of Design from 1968, broke the rules of the International Typographic Style he had been taught: letterspacing opened up, lines stepped and overlapped, type was set at angles, layered with halftone film and texture. Students including April Greiman and Dan Friedman brought it to the US, where it fed California New Wave and later the digital experiments of Emigre. It is Swiss rigour turned inside out.

**How to recognise it**

- Neo-grotesque type set stepped, rotated or letterspaced wide
- Overlapping layers, halftone screens and film textures
- Thick bars, rules and dots used as graphic elements
- A Swiss grid that is visibly being broken
- Limited palette, often black plus one or two spot colours

**Principles**

- Know the grid, then break it on purpose
- Typography is image, not just text
- Layering and texture create depth and energy

## Colors

Black and paper with one or two bold spot colours; overprint-style layering.

| Swatch | Hex | Role |
|---|---|---|
| Offset Black | `#121212` | text |
| Newsprint | `#F1EEE6` | background |
| Process Magenta | `#E5007D` | accent |
| Cyan Film | `#00A0C6` | secondary |
| Halftone Grey | `#8A8A85` | texture |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Akzidenz, Helvetica and Univers, but set like image: extreme tracking, steps, rotation, mixed sizes on one line.

- **Display: Akzidenz-Grotesk** — Grotesque, H. Berthold AG (Commercial). Free alternatives: Archivo, Work Sans.
- **Body: Univers** — Neo-grotesque, Deberny & Peignot (now Linotype/Monotype) (Commercial). Free alternatives: Inter, Archivo.
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Neue Helvetica, Inter.

Modular scale: Irregular — sizes jump rather than step from a 16px base.

Wide letterspacing on small caps text is a signature move.

## Layout

A strict grid that elements visibly escape: rotated blocks, stepped lines.

Layout patterns: Broken grid, Asymmetric grid, Swiss modular grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: High-contrast halftone photos, cut-outs, overlapping film and geometric shapes.

## Elevation & Depth

Layered, overprinted flat planes

Texture: Halftone dots, film grain, screen patterns

## Shapes

Corner radius: 0px.

Borders: Thick bars and hairline rules as composition

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Marquee band, Blog card, Navbar.

Works best in posters, event pages and editorial headers rather than dense UI.

### Motion

Jumpy and typographic — letters shift, step and overlap.

Animations: Split-text reveal, Kinetic typography, Clip-path reveal, Glitch effect.

Easing: steps(6) or cubic-bezier(0.7, 0, 0.3, 1). Duration: 300–700ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Start from a real grid so the breaks read as intentional
- Do: Use letterspacing and rotation on short phrases
- Do: Layer a halftone texture under type
- Don't: Break body text — keep paragraphs readable
- Don't: Use more than two spot colours
- Don't: Rotate interactive controls
- Accessibility: Keep rotated or overlapped type decorative; real content and navigation stay horizontal and in reading order.

---

**References**

- Example: [April Greiman](https://www.aprilgreiman.com)
- [Wolfgang Weingart (Wikipedia)](https://en.wikipedia.org/wiki/Wolfgang_Weingart)
- [April Greiman (Wikipedia)](https://en.wikipedia.org/wiki/April_Greiman)

<!-- Generated by Specimen Atlas from src/data/languages/swiss-punk.ts -->