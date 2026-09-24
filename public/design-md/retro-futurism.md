---
version: "alpha"
name: "Retro-futurism"
description: "Yesterday’s tomorrow: space-age curves, orbit rings and starbursts, warm cream and rocket orange with deep space blue, wide extended or rounded techno type, mission-patch badges."
colors:
  background: "#F2E8D5"
  surface: "#FBF5E9"
  on-surface: "#14213D"
  on-surface-variant: "#4A5468"
  primary: "#C9451F"
  on-primary: "#FFFFFF"
  outline: "#14213D"
  launch-cream: "#F2E8D5"
  deep-space: "#14213D"
  rocket-orange: "#E4572E"
  orbit-teal: "#2A9D8F"
  moon-grey: "#A8A29E"
typography:
  display-lg:
    fontFamily: "Michroma"
    fontSize: 7.594rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0.04em
  headline-md:
    fontFamily: "Michroma"
    fontSize: 3.375rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.04em
  title-md:
    fontFamily: "Michroma"
    fontSize: 1.5rem
    fontWeight: 400
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
    fontSize: 0.667rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 999px
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

# Retro-futurism

*Also known as: Space Age, Raygun Gothic, Atompunk, Googie.*

## Overview

Yesterday’s tomorrow: space-age curves, orbit rings and starbursts, warm cream and rocket orange with deep space blue, wide extended or rounded techno type, mission-patch badges.

**Origin (1950s–60s visions of the future; revived continuously).** The future as imagined in the past: Googie coffee-shop architecture and the 1962 Seattle Space Needle, NASA mission patches and Apollo-era graphics, "The Jetsons" (1962), 2001: A Space Odyssey (1968) and pulp sci-fi covers. The term "retrofuturism" was popularised in the 1980s. Today it covers both 1950s atomic optimism (atompunk, raygun gothic) and 1970s NASA-worm and space-program graphics.

**How to recognise it**

- Orbit rings, rockets, starbursts and planets
- Wide, extended or rounded techno lettering
- Cream, rocket orange and deep space navy
- Mission-patch badges and chevrons
- Grain and halftone print texture on illustration

**Principles**

- Optimism about technology
- Streamlined, aerodynamic forms
- Science as spectacle

## Colors

Warm cream ground with deep navy and a rocket-orange accent, plus a teal or mint secondary.

| Swatch | Hex | Role |
|---|---|---|
| Launch Cream | `#F2E8D5` | background |
| Deep Space | `#14213D` | text |
| Rocket Orange | `#E4572E` | accent |
| Orbit Teal | `#2A9D8F` | secondary |
| Moon Grey | `#A8A29E` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Extended or geometric techno display type in caps; a clean geometric sans for text.

- **Display: Michroma** — Display / decorative (OFL).
- **Body: Jost*** — Geometric sans, indestructible type* (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Audiowide, Orbitron, Futura, DM Sans.

Modular scale: Perfect Fifth (1.5) from a 16px base.

NASA’s 1975 "worm" logo and Eurostile are the reference points; Michroma is a free extended face in that spirit.

## Layout

Centred, badge-like compositions and bold split heroes.

Layout patterns: Centered hero, Split hero, Card grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Rockets, satellites, planets, astronauts and mid-century illustrated cities of tomorrow.

## Elevation & Depth

Flat with halftone shading

Texture: Print grain, halftone, star fields

## Shapes

Corner radius: Large curves, capsules and circles.

Borders: Orbit rings, chevrons and double lines

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Stats band, Timeline, Badge, Progress bar.

A mission-patch badge and a countdown-style stats band suit it well.

### Motion

Orbital and floaty: things rotate, launch and drift.

Animations: Particles, Parallax scrolling, Scale-in, Count-up, Spinner.

Easing: cubic-bezier(0.22, 1, 0.36, 1) — easeOutQuint. Duration: 500–900ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use orbit rings and starbursts as structure
- Do: Keep to three or four print colours
- Do: Set short headings in extended caps
- Don't: Set body text in extended faces
- Don't: Mix in glossy 3D gradients
- Don't: Crowd the stars behind text
- Accessibility: Extended faces are wide and hard to read in long lines — keep them for headings. Animated star fields should stop under reduced motion.

---

**References**

- Example: [NASA Graphics Standards Manual](https://standardsmanual.com/products/nasa-graphics-standards-manual)
- [Retrofuturism (Wikipedia)](https://en.wikipedia.org/wiki/Retrofuturism)
- [Googie architecture (Wikipedia)](https://en.wikipedia.org/wiki/Googie_architecture)

<!-- Generated by Specimen Atlas from src/data/languages/retro-futurism.ts -->