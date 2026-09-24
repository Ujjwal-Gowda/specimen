---
version: "alpha"
name: "Memphis Design"
description: "Loud, joyful anti-modernism: clashing brights and pastels, black outlines, squiggles, dots, zigzags and floating geometric shapes."
colors:
  background: "#FFFBF1"
  surface: "#FFFFFF"
  on-surface: "#111111"
  on-surface-variant: "#3D3D3D"
  primary: "#2D46B9"
  on-primary: "#FFFFFF"
  outline: "#111111"
  paper: "#FFFBF1"
  ink: "#111111"
  canary: "#FFD23F"
  flamingo: "#FF5D8F"
  teal-pop: "#1AC8DB"
  cobalt: "#2D46B9"
  mint-wash: "#BDF2D5"
typography:
  display-lg:
    fontFamily: "Shrikhand"
    fontSize: 4.209rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Shrikhand"
    fontSize: 2.369rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Shrikhand"
    fontSize: 1.333rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "DM Sans"
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
  md: 14px
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

# Memphis Design

*Also known as: Memphis Group style, Memphis Milano.*

## Overview

Loud, joyful anti-modernism: clashing brights and pastels, black outlines, squiggles, dots, zigzags and floating geometric shapes.

**Origin (1981–1987, Milan; web revival 2010s–present).** The Memphis Group was founded by Ettore Sottsass in Milan in December 1980 with designers including Michele De Lucchi, Martine Bedin, Nathalie Du Pasquier, George Sowden, Aldo Cibic and Matteo Thun. It debuted at the Milan furniture fair in September 1981 and took its name from Bob Dylan’s “Stuck Inside of Mobile with the Memphis Blues Again”, which was playing at the founding meeting. It rejected “good taste” modernism in favour of clashing colours, plastic laminates (Sottsass’s “Bacterio” pattern), squiggles, terrazzo and primitive geometric forms. The group disbanded in 1987–88.

**How to recognise it**

- Primary geometric shapes (circles, triangles, half-moons) scattered around content
- Squiggles, zigzags, confetti and dot patterns
- Clashing pastels and brights (canary, flamingo, teal, cobalt) with black
- Thick black outlines and solid offset shadows
- Tilted labels and stickers

**Principles**

- Anti-“good taste”: surprise over harmony
- Pattern and colour as structure
- Play: nothing too serious or too aligned
- Bold outline to hold the chaos together

## Colors

Four or five clashing brights on a warm paper ground, tied together with black outlines.

| Swatch | Hex | Role |
|---|---|---|
| Paper | `#FFFBF1` | background |
| Ink | `#111111` | text / outline |
| Canary | `#FFD23F` | shape |
| Flamingo | `#FF5D8F` | shape |
| Teal Pop | `#1AC8DB` | shape |
| Cobalt | `#2D46B9` | accent |
| Mint Wash | `#BDF2D5` | surface |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Chunky, quirky display faces (fat scripts, stencils, geometric caps) with a friendly geometric sans for body.

- **Display: Shrikhand** — Display / decorative (OFL).
- **Body: DM Sans** — Geometric sans, Colophon Foundry (for Google) (OFL).
- Also fits: Bungee, Righteous, Rubik Mono One, Poppins, Work Sans.

Modular scale: Perfect Fourth (1.333) from a 16px base.

Headlines can take a coloured offset text-shadow. Mix no more than two display faces.

## Layout

Loose, playful grids with shapes breaking out of containers

Layout patterns: Broken grid, Asymmetric grid, Card grid, Centered hero.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Flat geometric illustration, cut-out photography with patterned backgrounds, confetti shapes.

## Elevation & Depth

Solid offset shadows (4–6px) in black

Texture: Dot grids, zigzags, squiggles, terrazzo

## Shapes

Corner radius: Mixed on purpose: pills, circles and hard corners side by side.

Borders: 2–3px solid black

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `5px 5px 0 #111111`.

Signature components: Hero, Card, Badge, Button, CTA band, Marquee band, Team grid.

Cards rotate slightly and use different fills. Badges look like stickers.

### Motion

Springy and playful: bouncing shapes, wobbly hovers, confetti bursts.

Animations: Spring press, Hover lift, Blob morph, Marquee, Confetti burst, 3D tilt.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack. Duration: 250–500ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use black outlines to unify clashing colours
- Do: Scatter shapes in the margins, not over text
- Do: Vary card fills from the palette
- Do: Keep body text on plain paper
- Don't: Don’t put patterns behind paragraphs
- Don't: Don’t use gradients or glass effects
- Don't: Don’t align everything perfectly
- Don't: Don’t use more than five hues
- Accessibility: Busy patterns can overwhelm readers with cognitive or visual impairments, so keep them out of reading areas. Check text on each pastel card fill, and don’t rely on colour alone to distinguish items.

---

**References**

- Example: [Memphis Milano (official)](https://www.memphis-milano.com)
- [Memphis Group — Wikipedia](https://en.wikipedia.org/wiki/Memphis_Group)
- [Ettore Sottsass — Wikipedia](https://en.wikipedia.org/wiki/Ettore_Sottsass)

<!-- Generated by Specimen Atlas from src/data/languages/memphis.ts -->