---
version: "alpha"
name: "Claymorphism"
description: "Puffy, rounded, pastel UI that looks moulded from clay or inflated like a toy. Big radii, double inner shadows and soft outer drop shadows — friendly, tactile, playful."
colors:
  background: "#EDE7FB"
  surface: "#FFFFFF"
  on-surface: "#2B1B4D"
  on-surface-variant: "#5B4E77"
  primary: "#6A45F0"
  on-primary: "#FFFFFF"
  outline: "#ede7fb"
  lavender-mist: "#EDE7FB"
  clay-violet: "#6A45F0"
  peach-puff: "#FFD6C2"
  mint-dough: "#C9F2DF"
  plum-ink: "#2B1B4D"
typography:
  display-lg:
    fontFamily: "Fredoka"
    fontSize: 3.052rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Fredoka"
    fontSize: 1.953rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Fredoka"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Nunito"
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
  sm: 999px
  md: 32px
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

# Claymorphism

*Also known as: Clay UI, Inflated 3D, Puffy UI.*

## Overview

Puffy, rounded, pastel UI that looks moulded from clay or inflated like a toy. Big radii, double inner shadows and soft outer drop shadows — friendly, tactile, playful.

**Origin (2021–present; named by Michal Malewicz (Hype4), 2021).** A soft, toy-like evolution of neumorphism described by Michal Malewicz (Hype4) in 2021, inspired by the popularity of 3D clay renders from tools like Blender and Spline. Elements look inflated or moulded from clay: a large outer shadow plus two inner shadows (light top-left, dark bottom-right) create a puffy volume, and it pairs naturally with pastel colours and 3D illustrations.

**How to recognise it**

- Very large corner radii (24–40px) and pill buttons
- Inner highlight top-left and inner shade bottom-right
- Soft, coloured outer drop shadow that lifts the element
- Pastel palettes (lavender, peach, mint, baby blue)
- 3D clay-style illustrations and characters

**Principles**

- Friendly and approachable over serious
- Volume from inner + outer shadows
- Unlike neumorphism, elements float above a different-coloured background
- Pair with 3D illustration for cohesion

## Colors

Pastel background and surfaces with a saturated but soft primary; shadows tinted with the primary hue instead of grey.

| Swatch | Hex | Role |
|---|---|---|
| Lavender Mist | `#EDE7FB` | background |
| Clay Violet | `#6A45F0` | accent |
| Peach Puff | `#FFD6C2` | secondary surface |
| Mint Dough | `#C9F2DF` | tertiary surface |
| Plum Ink | `#2B1B4D` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Round, bouncy sans at semibold/bold; generous sizes; nothing sharp.

- **Display: Fredoka** — Rounded sans (OFL).
- **Body: Nunito** — Rounded sans (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Baloo 2, Quicksand, DM Sans, Varela Round.

Modular scale: Major Third (1.25) from a 16px base.

Fredoka and Baloo 2 give instant clay energy; pair with Nunito for readable body.

## Layout

Chunky card grids and centred feature blocks, lots of breathing room

Layout patterns: Card grid, Centered hero, Bento grid.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: 3D clay renders (Spline, Blender), toy-like characters and emoji, pastel 3D icons.

## Elevation & Depth

Outer: 8px 8px 16px hue-tinted shadow; inner: inset -6px -6px 12px shade + inset 6px 6px 12px white

Texture: Matte; 3D clay renders provide texture

## Shapes

Corner radius: 28–40px cards, full pill buttons.

Borders: None

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `8px 10px 20px rgba(76, 44, 160, 0.22), inset -6px -6px 12px rgba(76, 44, 160, 0.14), inset 6px 6px 12px rgba(255, 255, 255, 0.9)`.

Signature components: Button, Card, Feature grid, Pricing table, Avatar, Chip.

Inflated pricing tiers, big pill CTAs, soft icon tiles.

### Motion

Squishy and springy — elements squash on press and bounce back.

Animations: Spring press, Scale-in, Blob morph, Confetti burst, Hover lift, Bounce.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack. Duration: 200–400ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Tint shadows with the brand hue, never plain grey
- Do: Pair with 3D clay illustrations or icons
- Do: Keep text dark enough on pastel surfaces
- Don't: Apply it to dense data UI
- Don't: Mix sharp corners with clay elements
- Don't: Overdo pastels until nothing stands out
- Accessibility: Pastel on pastel is a contrast trap — keep text and primary actions strong; don’t rely on the puffy volume alone to show interactivity.

---

**References**

- Example: [Hype4 Academy (Michal Malewicz)](https://hype4.academy)
- Example: [Spline (3D clay-style tools)](https://spline.design)
- Example: [Dribbble — claymorphism tag](https://dribbble.com/tags/claymorphism)
- [Hype4 — design articles by Michal Malewicz](https://hype4.academy)

<!-- Generated by Specimen Atlas from src/data/languages/claymorphism.ts -->