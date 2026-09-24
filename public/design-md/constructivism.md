---
version: "alpha"
name: "Russian Constructivism"
description: "Dynamic diagonals, red and black on cream, heavy condensed sans lettering, photomontage and geometric blocks. Propaganda-poster energy: urgent, directional and graphic."
colors:
  background: "#EFE6D2"
  surface: "#F8F2E4"
  on-surface: "#141414"
  on-surface-variant: "#4E4A43"
  primary: "#C8102E"
  on-primary: "#FFFFFF"
  outline: "#141414"
  constructivist-red: "#C8102E"
  ink-black: "#141414"
  aged-paper: "#EFE6D2"
  print-grey: "#7A746A"
typography:
  display-lg:
    fontFamily: "Bebas Neue"
    fontSize: 5.653rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0.02em
  headline-md:
    fontFamily: "Bebas Neue"
    fontSize: 2.827rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.02em
  title-md:
    fontFamily: "Bebas Neue"
    fontSize: 1.414rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Archivo"
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

# Russian Constructivism

*Also known as: Constructivism, Soviet avant-garde.*

## Overview

Dynamic diagonals, red and black on cream, heavy condensed sans lettering, photomontage and geometric blocks. Propaganda-poster energy: urgent, directional and graphic.

**Origin (1915–1930s, Soviet Russia).** An art and design movement that rejected "art for art’s sake" in favour of art in service of society. Alexander Rodchenko, Varvara Stepanova, El Lissitzky, Gustav Klutsis and the Stenberg brothers made posters, books and photomontage with diagonal compositions, bold sans lettering and red and black on paper. Lissitzky’s "Beat the Whites with the Red Wedge" (1919) and Rodchenko’s 1924 Lengiz "Books!" poster are its icons. It deeply influenced Bauhaus and later Swiss design.

**How to recognise it**

- Strong diagonals and angled text
- Red, black and cream (sometimes a little grey)
- Heavy condensed sans capitals
- Photomontage with cut-out figures
- Circles, bars and wedges as composition

**Principles**

- Design is a tool for society, not decoration
- Diagonals create movement and urgency
- Type, photo and geometry combine into one message

## Colors

Revolutionary red and black on aged paper; nothing else.

| Swatch | Hex | Role |
|---|---|---|
| Constructivist Red | `#C8102E` | accent |
| Ink Black | `#141414` | text |
| Aged Paper | `#EFE6D2` | background |
| Print Grey | `#7A746A` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Heavy, condensed, all-caps sans lettering — often hand-drawn originally — set on diagonals and stacked.

- **Display: Bebas Neue** — Condensed / compressed, Dharma Type (OFL).
- **Body: Archivo** — Grotesque, Omnibus-Type (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Oswald, Russo One, Futura.

Modular scale: Augmented Fourth (1.414) from a 16px base.

Original lettering was drawn by hand; condensed grotesques are the modern stand-in.

## Layout

Diagonal axes (often 15–45°) across a simple grid.

Layout patterns: Asymmetric grid, Broken grid, Full-bleed hero.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Black-and-white photomontage of workers, crowds and machines; geometric shapes.

## Elevation & Depth

Flat, overlapping planes

Texture: Paper grain, halftone photomontage

## Shapes

Corner radius: 0px.

Borders: Thick bars and wedges

## Components

Borders: 3px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, CTA band, Stats band, Marquee band.

Best as a hero or campaign treatment; keep forms and tables upright and plain.

### Motion

Forceful and directional: elements slide in on diagonals.

Animations: Clip-path reveal, Fade-up reveal, Kinetic typography, Marquee.

Easing: cubic-bezier(0.7, 0, 0.2, 1). Duration: 400–700ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Commit to one strong diagonal
- Do: Keep to red, black and paper
- Do: Use photomontage with hard cut edges
- Don't: Rotate body copy or buttons
- Don't: Add gradients or soft shadows
- Don't: Use it where the political connotation hurts the brand
- Accessibility: Keep diagonal type decorative; body text and controls stay horizontal. Red on black fails contrast — use red on paper.

---

**References**

- [Constructivism (Wikipedia)](https://en.wikipedia.org/wiki/Constructivism_(art))
- [El Lissitzky (Wikipedia)](https://en.wikipedia.org/wiki/El_Lissitzky)
- [Alexander Rodchenko (Wikipedia)](https://en.wikipedia.org/wiki/Alexander_Rodchenko)

<!-- Generated by Specimen Atlas from src/data/languages/constructivism.ts -->