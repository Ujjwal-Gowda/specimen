---
version: "alpha"
name: "Psychedelic"
description: "Swirling, melting lettering that fills the shape, vibrating complementary colours, Op Art patterns and Art Nouveau curves. Loud, warped and hallucinatory."
colors:
  background: "#2A0E3A"
  surface: "#3A1650"
  on-surface: "#FFF4E0"
  on-surface-variant: "#E3C9F0"
  primary: "#FF6A13"
  on-primary: "#2A0E3A"
  outline: "#FF3EA5"
  acid-orange: "#FF6A13"
  electric-violet: "#6B2FBF"
  day-glo-pink: "#FF3EA5"
  lime-trip: "#B6E800"
  midnight-plum: "#2A0E3A"
typography:
  display-lg:
    fontFamily: "Shrikhand"
    fontSize: 11.089rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Shrikhand"
    fontSize: 4.236rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Shrikhand"
    fontSize: 1.618rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Outfit"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.618rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 28px
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

# Psychedelic

*Also known as: Psychedelic poster art, 60s psychedelia, Fillmore poster style.*

## Overview

Swirling, melting lettering that fills the shape, vibrating complementary colours, Op Art patterns and Art Nouveau curves. Loud, warped and hallucinatory.

**Origin (1966–1972, San Francisco & London).** Born on concert posters for the Fillmore and Avalon Ballroom in San Francisco: Wes Wilson, Victor Moscoso, Rick Griffin, Stanley Mouse and Alton Kelley, and in London Martin Sharp and Hapshash and the Coloured Coat. Wilson borrowed the swelling lettering of Vienna Secession artist Alfred Roller and bent it to fill every shape; Moscoso used vibrating complementary colours (Op Art) to make posters that seemed to move.

**How to recognise it**

- Lettering that bends and swells to fill a shape
- Vibrating complementary colours (orange/blue, red/green, pink/green)
- Swirls, concentric rings and Op Art patterns
- Art Nouveau-derived curves and figures
- Legibility deliberately challenged

**Principles**

- Colour that vibrates the eye
- Lettering as image
- Every surface is filled and flowing

## Colors

Clashing, fully saturated complementary pairs placed side by side so the edges vibrate.

| Swatch | Hex | Role |
|---|---|---|
| Acid Orange | `#FF6A13` | accent |
| Electric Violet | `#6B2FBF` | primary |
| Day-Glo Pink | `#FF3EA5` | secondary |
| Lime Trip | `#B6E800` | highlight |
| Midnight Plum | `#2A0E3A` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Swelling, soft display faces set big and warped; the body needs a very plain face to stay readable.

- **Display: Shrikhand** — Display / decorative (OFL).
- **Body: Outfit** — Geometric sans, Outfit.io (OFL).
- Also fits: Righteous, Monoton, DM Sans.

Modular scale: Golden Ratio (1.618) from a 16px base.

Real psychedelic lettering was hand-drawn to fit each poster; CSS can mimic it with SVG textPath or variable-font axes.

## Layout

Centred, symmetrical poster compositions filled edge to edge.

Layout patterns: Centered hero, Full-bleed hero, Broken grid.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Marbled and liquid-light patterns, swirling figures, eyes, flowers, mandalas.

## Elevation & Depth

Flat, layered colour

Texture: Concentric rings, marbling, Op Art stripes

## Shapes

Corner radius: Organic blobs and circles.

Borders: Thick wavy outlines

## Components

Borders: 3px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Marquee band, CTA band.

A poster-style hero; everything else should calm down.

### Motion

Liquid and hypnotic: slow morphing blobs, hue cycling, rotating rings.

Animations: Blob morph, Mesh gradient drift, SVG morph, Marquee.

Easing: cubic-bezier(0.45, 0, 0.55, 1) — easeInOutQuad. Duration: 4–12s loops.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Warp display type into a shape
- Do: Put complementary colours side by side for vibration
- Do: Keep body text plain and high-contrast
- Don't: Vibrate colours behind reading text
- Don't: Animate fast hue flashing
- Don't: Use it for trust-critical information
- Accessibility: Vibrating colour pairs and moving patterns can trigger migraines — keep them away from text and stop loops under prefers-reduced-motion.

---

**References**

- [Psychedelic art (Wikipedia)](https://en.wikipedia.org/wiki/Psychedelic_art)
- [Wes Wilson (Wikipedia)](https://en.wikipedia.org/wiki/Wes_Wilson)

<!-- Generated by Specimen Atlas from src/data/languages/psychedelic.ts -->