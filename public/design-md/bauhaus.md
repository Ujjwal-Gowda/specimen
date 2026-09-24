---
version: "alpha"
name: "Bauhaus"
description: "Geometric, functional and playful: primary colours, circles, squares and triangles, heavy rules and geometric sans type arranged on dynamic diagonals. Modernism with a sense of play."
colors:
  background: "#F4EFE4"
  surface: "#FFFFFF"
  on-surface: "#111111"
  on-surface-variant: "#4A4A4A"
  primary: "#D6281C"
  on-primary: "#FFFFFF"
  outline: "#111111"
  bauhaus-red: "#D6281C"
  bauhaus-yellow: "#F2C12E"
  bauhaus-blue: "#1B4F9C"
  ink-black: "#111111"
  paper: "#F4EFE4"
typography:
  display-lg:
    fontFamily: "Futura"
    fontSize: 5.653rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Futura"
    fontSize: 2.827rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Futura"
    fontSize: 1.414rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Jost*"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Space Mono"
    fontSize: 0.707rem
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

# Bauhaus

*Also known as: Staatliches Bauhaus, Bauhaus Style, Neue Typografie (precursor).*

## Overview

Geometric, functional and playful: primary colours, circles, squares and triangles, heavy rules and geometric sans type arranged on dynamic diagonals. Modernism with a sense of play.

**Origin (1919–1933, Weimar → Dessau → Berlin, Germany).** Founded by Walter Gropius in Weimar in 1919 to unite art, craft and industry; it moved to Dessau (1925) and Berlin before the Nazis closed it in 1933. Typography and graphics came from László Moholy-Nagy and Herbert Bayer, whose lowercase-only "Universal" alphabet (1925) defined the look; Wassily Kandinsky’s colour–form theory tied the primary colours to the triangle (yellow), square (red) and circle (blue). Paul Renner’s Futura (1927) is the face most associated with it, though Renner was not on the faculty.

**How to recognise it**

- Primary red, yellow and blue with black and off-white
- Circles, squares, triangles and half-circles as the main graphic language
- Geometric sans (Futura-like), often lowercase or all caps
- Bold black bars and rules; diagonal or rotated type
- Asymmetric, constructivist-influenced compositions

**Principles**

- Form follows function (Gropius / Sullivan)
- Reduce everything to elementary geometric shapes
- Unify art, craft and industrial production
- Typography as visual communication, not decoration

## Colors

Primary triad (red, yellow, blue) plus black on an off-white paper ground; each colour tied to a shape.

| Swatch | Hex | Role |
|---|---|---|
| Bauhaus Red | `#D6281C` | accent |
| Bauhaus Yellow | `#F2C12E` | secondary |
| Bauhaus Blue | `#1B4F9C` | tertiary |
| Ink Black | `#111111` | text |
| Paper | `#F4EFE4` | background |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Geometric sans with circular bowls; set big, heavy and sometimes rotated. Lowercase-only headings nod to Bayer’s Universal alphabet.

- **Display: Futura** — Geometric sans, Bauer Type Foundry (now Neufville Digital) (Commercial). Free alternatives: Jost*, Josefin Sans.
- **Body: Jost*** — Geometric sans, indestructible type* (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Josefin Sans, DIN 1451 / FF DIN, Bebas Neue, DM Sans.

Modular scale: Augmented Fourth (1.414) from a 16px base.

Futura (Paul Renner, Bauer, 1927) is commercial; Jost is the closest free cut. For display experiments, "Bauhaus 93"-style novelty faces are clichés — prefer geometric sans set with intent.

## Layout

Constructivist asymmetric grid with diagonals and overlapping geometric blocks

Layout patterns: Asymmetric grid, Broken grid, Split screen, Swiss modular grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Geometric compositions, photomontage, black-and-white product and architecture photography, bold shape illustrations.

## Elevation & Depth

None; overlapping flat shapes create depth

Texture: Optional paper grain; mostly flat

## Shapes

Corner radius: 0px or 50% — squares and perfect circles, nothing in between.

Borders: Thick black bars (6–12px) and rules

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Feature grid, CTA band, Stats band, Navbar, Footer.

Section dividers as coloured blocks; buttons as solid primary rectangles or circles.

### Motion

Shapes rotate, slide and stack like building blocks; confident, mechanical timing.

Animations: Clip-path reveal, Stagger reveal, Draw SVG, Scale-in, Marquee.

Easing: cubic-bezier(0.83, 0, 0.17, 1) — easeInOutQuint. Duration: 400–700ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Tie each primary colour to one geometric shape and repeat it
- Do: Use strong diagonals and overlaps to create movement
- Do: Keep type geometric and heavy
- Don't: Use pastel or gradient versions of the primaries
- Don't: Add soft shadows or rounded-rectangle cards
- Don't: Scatter shapes randomly without an underlying grid
- Accessibility: Yellow on off-white fails contrast — never put text in Bauhaus Yellow on light grounds. Rotated text should be decorative only; keep real content horizontal.

---

**References**

- Example: [Bauhaus Dessau Foundation](https://www.bauhaus-dessau.de)
- Example: [Bauhaus-Archiv / Museum für Gestaltung](https://www.bauhaus.de)
- Example: [Klassik Stiftung Weimar (Bauhaus-Museum)](https://www.klassik-stiftung.de)
- [Wikipedia — Bauhaus](https://en.wikipedia.org/wiki/Bauhaus)
- [Wikipedia — Herbert Bayer (Universal typeface)](https://en.wikipedia.org/wiki/Herbert_Bayer)

<!-- Generated by Specimen Atlas from src/data/languages/bauhaus.ts -->