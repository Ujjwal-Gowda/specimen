---
version: "alpha"
name: "Mid-century Modern"
description: "Warm, optimistic modernism: mustard, teal, orange and olive on cream, cut-paper geometric shapes, atomic starbursts, playful hand-cut layouts and friendly geometric type. Saul Bass meets Eames."
colors:
  background: "#F4ECDC"
  surface: "#FBF6EA"
  on-surface: "#3A2A20"
  on-surface-variant: "#6B5A4B"
  primary: "#1F6F6B"
  on-primary: "#FFFFFF"
  outline: "#D9C9AC"
  cream: "#F4ECDC"
  mustard: "#E0A526"
  teal: "#1F6F6B"
  burnt-orange: "#C8552B"
  walnut: "#3A2A20"
typography:
  display-lg:
    fontFamily: "Futura"
    fontSize: 4.209rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Futura"
    fontSize: 2.369rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Futura"
    fontSize: 1.333rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Jost*"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 4px
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

# Mid-century Modern

*Also known as: MCM, Atomic Age design, Mid-century graphic design.*

## Overview

Warm, optimistic modernism: mustard, teal, orange and olive on cream, cut-paper geometric shapes, atomic starbursts, playful hand-cut layouts and friendly geometric type. Saul Bass meets Eames.

**Origin (c. 1945–1969, USA & Europe).** Post-war American and European modernism: Charles and Ray Eames, George Nelson and Herman Miller furniture; Saul Bass’s film titles; Paul Rand’s IBM and ABC logos; Alvin Lustig’s book covers; Blue Note record sleeves by Reid Miles. It blended Bauhaus rigour with optimism, playful geometry, organic "boomerang" and atomic shapes, textured print colour and a new consumer culture.

**How to recognise it**

- Mustard, burnt orange, teal and olive on cream
- Cut-paper shapes, boomerangs and atomic starbursts
- Off-register, slightly textured print colour
- Geometric sans headlines, often lowercase
- Playful asymmetric compositions with lots of air

**Principles**

- Good design for everyday life
- Playful geometry within modernist order
- Warm colour and texture make modernism human

## Colors

Warm earthy brights (mustard, orange, teal, olive) on a cream ground, flat with print texture.

| Swatch | Hex | Role |
|---|---|---|
| Cream | `#F4ECDC` | background |
| Mustard | `#E0A526` | accent |
| Teal | `#1F6F6B` | primary |
| Burnt Orange | `#C8552B` | secondary |
| Walnut | `#3A2A20` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Geometric sans (Futura is the canonical choice) for headlines, often lowercase; a clean sans or book serif for text.

- **Display: Futura** — Geometric sans, Bauer Type Foundry (now Neufville Digital) (Commercial). Free alternatives: Jost*, Josefin Sans.
- **Body: Jost*** — Geometric sans, indestructible type* (OFL).
- Also fits: Josefin Sans, Lora.

Modular scale: Perfect Fourth (1.333) from a 16px base.

Jost is a free Futura-alike with a variable weight axis.

## Layout

Loose modernist grid with generous white space and a single playful focal shape.

Layout patterns: Asymmetric grid, Split hero, Card grid.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Cut-paper illustration, Eames-era furniture, starbursts, simple figures and film-title graphics.

## Elevation & Depth

Flat, layered paper cut-outs

Texture: Print grain, off-register edges

## Shapes

Corner radius: Circles and organic blobs; 0–4px on boxes.

Borders: Few; shape and colour separate areas

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Feature grid, Product card, CTA band.

A single bold shape behind the hero headline does most of the work.

### Motion

Title-sequence playfulness: shapes slide, spin and assemble like Saul Bass credits.

Animations: Stagger reveal, Clip-path reveal, Blob morph, Kinetic typography.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack. Duration: 400–800ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use three or four warm colours on cream
- Do: Cut shapes, don’t draw outlines
- Do: Leave generous air around the focal shape
- Don't: Use pure white or black
- Don't: Add gradients or glossy shadows
- Don't: Fill every space
- Accessibility: Mustard and orange fail as text on cream; keep text in walnut or teal.

---

**References**

- Example: [Herman Miller](https://www.hermanmiller.com)
- Example: [Eames Office](https://www.eamesoffice.com)
- [Mid-century modern (Wikipedia)](https://en.wikipedia.org/wiki/Mid-century_modern)
- [Saul Bass (Wikipedia)](https://en.wikipedia.org/wiki/Saul_Bass)

<!-- Generated by Specimen Atlas from src/data/languages/mid-century-modern.ts -->