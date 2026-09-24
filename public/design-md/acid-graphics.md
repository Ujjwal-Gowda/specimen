---
version: "alpha"
name: "Acid Graphics"
description: "Rave-flyer chaos in 3D chrome: liquid metal, acid green on black, warped grids, tribal and star linework, stretched grotesks and micro tech type. Hyper, loud and futuristic."
colors:
  background: "#0B0B0B"
  surface: "#161616"
  on-surface: "#E6E9EE"
  on-surface-variant: "#9AA0A8"
  primary: "#C6FF00"
  on-primary: "#0B0B0B"
  outline: "#3A3D42"
  void: "#0B0B0B"
  acid-green: "#C6FF00"
  uv-purple: "#8B5CF6"
  chrome: "#D9DDE3"
  gunmetal: "#4B5058"
typography:
  display-lg:
    fontFamily: "Unbounded"
    fontSize: 5.653rem
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Unbounded"
    fontSize: 2.827rem
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Unbounded"
    fontSize: 1.414rem
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Space Grotesk"
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
  sm: 999px
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

# Acid Graphics

*Also known as: Acid design, Neo-Y2K, Acidwave.*

## Overview

Rave-flyer chaos in 3D chrome: liquid metal, acid green on black, warped grids, tribal and star linework, stretched grotesks and micro tech type. Hyper, loud and futuristic.

**Origin (Late 1980s–90s rave flyers; revived c. 2018–present).** Rooted in acid house and rave flyers of the late 1980s and 1990s (the smiley, techno flyers, The Designers Republic’s work for Warp Records and Wipeout) and in Y2K chrome. Its 2010s–20s revival — sometimes called Neo-Y2K or Acid — mixes liquid chrome, wireframe and 3D, blurred gradients, tribal and gothic linework, tiny tech type and stretched sans, often on black. It is popular in music, streetwear and club culture.

**How to recognise it**

- Liquid chrome and holographic 3D forms
- Acid green, UV purple or silver on black
- Warped grids, wireframes and star/tribal line ornaments
- Stretched, extended or blurred sans type with tiny tech labels
- Collage of stickers, barcodes and symbols

**Principles**

- Maximum energy, minimum restraint
- Chrome and code: the machine aesthetic
- Micro-typography as texture

## Colors

Black base with acid green or UV purple and chrome silver; gradients blurred and iridescent.

| Swatch | Hex | Role |
|---|---|---|
| Void | `#0B0B0B` | background |
| Acid Green | `#C6FF00` | accent |
| UV Purple | `#8B5CF6` | secondary |
| Chrome | `#D9DDE3` | text |
| Gunmetal | `#4B5058` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Wide, stretched or ultra-bold display grotesks, plus tiny monospaced labels scattered as texture.

- **Display: Unbounded** — Display / decorative, NaN (for Unbounded) (OFL).
- **Body: Space Grotesk** — Grotesque, Florian Karsten Typefaces (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Syne, PP Neue Machina.

Modular scale: Augmented Fourth (1.414) from a 16px base.

Stretching type with transform: scaleX() is common but distorts glyphs — prefer faces with a width axis.

## Layout

Collage over a visible technical grid; tiny labels at the corners.

Layout patterns: Broken grid, Full-bleed hero, Bento grid.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: 3D chrome blobs, wireframe spheres, flames, stars, barcodes, smileys.

## Elevation & Depth

Chrome highlights and glow

Texture: Noise, holographic gradients, warped grids

## Shapes

Corner radius: Mixed: sharp frames with pill stickers.

Borders: Thin wireframe lines, crosshairs

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 0 24px rgba(198,255,0,.25)`.

Signature components: Hero, Marquee band, Product card, Badge.

Streetwear product cards with sticker badges and micro labels.

### Motion

Pulsing and liquid: chrome ripples, marquees and glitch cuts.

Animations: Image distortion, Marquee, Glitch effect, Mesh gradient drift, Particles.

Easing: cubic-bezier(0.83, 0, 0.17, 1) — easeInOutQuint. Duration: 200–800ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use one acid accent on black
- Do: Scatter micro labels as texture
- Do: Keep 3D chrome as hero art, not UI
- Don't: Put tiny type where people must read it
- Don't: Stretch body text
- Don't: Stack every effect at once
- Accessibility: Micro type and chrome text fail contrast and size; keep real content at 16px+ and plain colour.

---

**References**

- [The Designers Republic (Wikipedia)](https://en.wikipedia.org/wiki/The_Designers_Republic)
- [Acid house (Wikipedia)](https://en.wikipedia.org/wiki/Acid_house)

<!-- Generated by Specimen Atlas from src/data/languages/acid-graphics.ts -->