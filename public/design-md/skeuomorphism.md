---
version: "alpha"
name: "Skeuomorphism"
description: "Interfaces that imitate real materials and objects — leather, paper, brushed metal, glossy glass buttons, stitching and realistic lighting — so functions feel instantly familiar."
colors:
  background: "#D9D3C7"
  surface: "#F4EFE3"
  on-surface: "#2A2118"
  on-surface-variant: "#5C5042"
  primary: "#2F6FD0"
  on-primary: "#FFFFFF"
  outline: "#9C8F7A"
  linen: "#D9D3C7"
  notepad-paper: "#F4EFE3"
  saddle-leather: "#6B4226"
  aqua-blue: "#2F6FD0"
  walnut-ink: "#2A2118"
  brushed-steel: "#B8BCC2"
typography:
  display-lg:
    fontFamily: "Neue Helvetica"
    fontSize: 2.488rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Neue Helvetica"
    fontSize: 1.728rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Neue Helvetica"
    fontSize: 1.2rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Neue Helvetica"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Courier Prime"
    fontSize: 0.833rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 8px
  md: 10px
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

# Skeuomorphism

*Also known as: Skeuomorphic design, Realism UI, Rich/textured UI.*

## Overview

Interfaces that imitate real materials and objects — leather, paper, brushed metal, glossy glass buttons, stitching and realistic lighting — so functions feel instantly familiar.

**Origin (1980s GUIs → peak 2007–2012 (iPhone OS, Mac OS X); revived in "neo-skeuo" 2020s).** A skeuomorph is a design that keeps ornamental cues from its physical predecessor. Apple’s Macintosh desktop (1984), Mac OS X Aqua (2000) and especially early iPhone OS under Steve Jobs and Scott Forstall (leather-stitched Calendar, felt Game Center, wooden iBooks shelf) made it the dominant digital style until iOS 7 replaced it in 2013. It lives on in audio plug-ins, pro tools and the "tactile" revival in product and game UI.

**How to recognise it**

- Realistic textures: leather, linen, wood, paper, brushed aluminium
- Glossy, bevelled buttons with gradients and highlights
- Embossed/debossed text with text-shadow
- Stitching, torn paper edges, rivets, dials and knobs
- Strong lighting model with inner highlights and cast shadows

**Principles**

- Familiarity: mirror the physical object so functions are obvious
- Consistent light source and material logic
- Rich detail signals craftsmanship
- Controls should look touchable

## Colors

Material-derived colours: linen and paper neutrals, leather browns, Aqua-style glossy blue for actions.

| Swatch | Hex | Role |
|---|---|---|
| Linen | `#D9D3C7` | background |
| Notepad Paper | `#F4EFE3` | surface |
| Saddle Leather | `#6B4226` | secondary |
| Aqua Blue | `#2F6FD0` | accent |
| Walnut Ink | `#2A2118` | text |
| Brushed Steel | `#B8BCC2` | hardware |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Helvetica/Lucida-era system sans with emboss (text-shadow 0 1px 0 white), plus object-specific faces (Marker Felt, typewriter, serif for books).

- **Display: Neue Helvetica** — Neo-grotesque, Linotype (Monotype) (Commercial). Free alternatives: Inter, Public Sans, Work Sans.
- **Body: Neue Helvetica** — Neo-grotesque, Linotype (Monotype) (Commercial). Free alternatives: Inter, Public Sans, Work Sans.
- **Mono: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- Also fits: Archivo, Libre Baskerville, Open Sans, Lora.

Modular scale: Minor Third (1.2) from a 16px base.

iOS 6 used Helvetica Neue; Mac OS X used Lucida Grande. Emboss with a 1px light text-shadow below dark text.

## Layout

Object metaphors: notebooks, shelves, control panels, desks

Layout patterns: Centered hero, Card grid, Dashboard shell.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Photoreal objects, product renders, textures and hardware details.

## Elevation & Depth

Realistic drop shadows, inner shadows for inset wells

Texture: Gradient-built textures: linen, leather grain, brushed metal, paper lines

## Shapes

Corner radius: 6–12px with bevels.

Borders: Dark outer border + light inner highlight (bevel); stitched dashed borders

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 2px 5px rgba(0, 0, 0, 0.35)`.

Signature components: Button, Switch, Slider, Card, Toggle group, Navbar, Toolbar, Menubar.

Glossy capsule buttons, leather-bound nav bars, paper cards, metal toggles.

### Motion

Physical: page curls, knobs turn, switches flip with weight.

Animations: Spring press, FLIP animation, Ken Burns effect, Shine sweep, Card flip.

Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) — easeOutQuad. Duration: 250–500ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Pick one material story and stay consistent
- Do: Keep a single light direction for every highlight and shadow
- Do: Use realism where it clarifies function (dials, switches)
- Don't: Stack unrelated materials (wood + leather + chrome) on one screen
- Don't: Let textures reduce text legibility
- Don't: Ship huge texture images — build them with CSS gradients
- Accessibility: Textures behind text lower contrast; keep text on smooth surfaces. Embossed text must still meet 4.5:1 without the shadow.

---

**References**

- Example: [teenage engineering](https://teenage.engineering)
- Example: [Native Instruments](https://www.native-instruments.com)
- Example: [Universal Audio](https://www.uaudio.com)
- [Wikipedia — Skeuomorph](https://en.wikipedia.org/wiki/Skeuomorph)

<!-- Generated by Specimen Atlas from src/data/languages/skeuomorphism.ts -->