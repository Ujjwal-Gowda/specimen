---
version: "alpha"
name: "Maximalism"
description: "Everything turned up: clashing colour, patterns, stickers, rotated elements and stacked type, all held together by bold outlines and confident art direction."
colors:
  background: "#FFF4D6"
  surface: "#C6FF00"
  on-surface: "#140A1F"
  on-surface-variant: "#3B2A4D"
  primary: "#FF2E88"
  on-primary: "#140A1F"
  outline: "#140A1F"
  cream: "#FFF4D6"
  night-ink: "#140A1F"
  hot-pink: "#FF2E88"
  electric-blue: "#2B59FF"
  acid-lime: "#C6FF00"
  tangerine: "#FF7A00"
typography:
  display-lg:
    fontFamily: "Bricolage Grotesque"
    fontSize: 7.594rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.045em
  headline-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: 3.375rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.045em
  title-md:
    fontFamily: "Bricolage Grotesque"
    fontSize: 1.5rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "DM Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Space Mono"
    fontSize: 0.667rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 18px
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

# Maximalism

*Also known as: Dopamine design, More is more, Dopamine decor (interiors).*

## Overview

Everything turned up: clashing colour, patterns, stickers, rotated elements and stacked type, all held together by bold outlines and confident art direction.

**Origin (2020s revival; roots in Victorian decoration, 1960s psychedelia and Memphis).** A reaction against a decade of flat, minimal UI: saturated clashing colour, layered patterns, collage, stickers, stacked typefaces and dense, playful composition. “Dopamine dressing” and “dopamine decor” trended around 2021–2022, and brands borrowed the energy for the web. Its lineage runs from Victorian ornament through 1960s psychedelic posters (Wes Wilson, Victor Moscoso), Memphis Design and 1990s rave flyers to today’s brand-led e-commerce and culture sites.

**How to recognise it**

- Four or more saturated, clashing colours in one view
- Patterned backgrounds (stripes, checks, dots)
- Sticker badges, starbursts and rotated elements
- Huge, stacked, multi-shadow headlines
- Dense layouts with overlapping collage

**Principles**

- Joy and energy over calm
- Curated chaos: bold outlines and a grid keep it usable
- Personality in every component
- Surprise on every scroll

## Colors

A loud, clashing set (hot pink, electric blue, acid lime, tangerine) on warm cream, anchored by near-black outlines and text.

| Swatch | Hex | Role |
|---|---|---|
| Cream | `#FFF4D6` | background |
| Night Ink | `#140A1F` | text / outline |
| Hot Pink | `#FF2E88` | accent |
| Electric Blue | `#2B59FF` | secondary |
| Acid Lime | `#C6FF00` | highlight |
| Tangerine | `#FF7A00` | highlight |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Several expressive display faces at once (fat script, ultra-bold grotesk, chunky caps), unified by scale and colour; a sturdy sans for body.

- **Display: Bricolage Grotesque** — Display / decorative (OFL).
- **Body: DM Sans** — Geometric sans, Colophon Foundry (for Google) (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Shrikhand, Bungee, Abril Fatface, Syne, Fraunces, Space Grotesk, Work Sans.

Modular scale: Perfect Fifth (1.5) or larger from a 16px base.

Stack multiple coloured text-shadows on headlines. Keep body copy in one calm face.

## Layout

Dense grids with overlaps, rotations and elements breaking out

Layout patterns: Broken grid, Asymmetric grid, Masonry, Horizontal scroll section.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Collaged cut-out photography, stickers, 3D objects, patterns, hand-drawn doodles.

## Elevation & Depth

Stacked hard offset shadows

Texture: Stripes, checkerboards, halftone, stickers

## Shapes

Corner radius: Everything: pills, circles, hard corners, star shapes.

Borders: 3px near-black outlines

## Components

Borders: 3px solid outline on secondary buttons, inputs and cards. Card shadow: `6px 6px 0 #140A1F`.

Signature components: Marquee band, Hero, Badge, Product card, Masonry gallery, CTA band, Chip.

Sticker-style badges and scrolling marquee bands are the signature devices.

### Motion

High-energy: marquees, confetti, tilting cards, cursor trails, kinetic type.

Animations: Marquee, Confetti burst, 3D tilt, Spring press, Kinetic typography, Custom cursor, Mesh gradient drift.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack. Duration: 200–500ms; continuous marquees.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Anchor chaos with consistent outlines and one text colour
- Do: Keep one calm reading column
- Do: Rotate a few elements, not all
- Do: Pause marquees on hover and for reduced motion
- Don't: Don’t let patterns sit behind body text
- Don't: Don’t animate everything at once
- Don't: Don’t lose the primary CTA in the noise
- Don't: Don’t use it where trust or calm is needed
- Accessibility: Visual noise can be disabling, so provide a clear reading path and a strong focus style. Moving marquees need pause controls (WCAG 2.2.2). Check contrast on every coloured card fill.

---

**References**

- Example: [MSCHF](https://mschf.com)
- [Maximalism — Wikipedia](https://en.wikipedia.org/wiki/Maximalism)
- [Psychedelic art — Wikipedia](https://en.wikipedia.org/wiki/Psychedelic_art)

<!-- Generated by Specimen Atlas from src/data/languages/maximalism.ts -->