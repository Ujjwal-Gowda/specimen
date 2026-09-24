---
version: "alpha"
name: "Flat Design"
description: "Solid colours, simple shapes and crisp icons with no gradients, textures or realistic shadows. Clear, colourful and fast — the default look of 2010s apps and dashboards."
colors:
  background: "#FFFFFF"
  surface: "#ECF0F1"
  on-surface: "#2C3E50"
  on-surface-variant: "#566573"
  primary: "#2471A3"
  on-primary: "#FFFFFF"
  outline: "#D5DBDB"
  turquoise: "#1ABC9C"
  peter-river: "#3498DB"
  belize-hole: "#2980B9"
  alizarin: "#E74C3C"
  sun-flower: "#F1C40F"
  midnight-blue: "#2C3E50"
  clouds: "#ECF0F1"
typography:
  display-lg:
    fontFamily: "Lato"
    fontSize: 3.052rem
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Lato"
    fontSize: 1.953rem
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Lato"
    fontSize: 1.25rem
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Open Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Fira Code"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 4px
  md: 6px
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

# Flat Design

*Also known as: Flat UI, Metro-style, Flat 2.0 (with subtle shadows).*

## Overview

Solid colours, simple shapes and crisp icons with no gradients, textures or realistic shadows. Clear, colourful and fast — the default look of 2010s apps and dashboards.

**Origin (2010–2016; Microsoft Metro (2010) → iOS 7 (2013)).** Microsoft’s Metro design language (Zune, Windows Phone 7 in 2010, Windows 8 in 2012) stripped away skeuomorphic texture in favour of typography (Segoe UI), solid colour tiles and content. Google Now cards and Apple’s iOS 7 (Jonathan Ive, 2013) made it the mainstream default, and Designmodo’s "Flat UI" kit (2013) gave the era its named palette (Turquoise, Peter River, Alizarin…). "Flat 2.0" later brought back subtle shadows for affordance after research showed flat buttons were less discoverable.

**How to recognise it**

- Solid fills with no gradients, bevels or texture
- Bright, saturated named palette (Flat UI colours)
- Simple line or glyph icons, often inside coloured circles
- Minimal or no shadows (Flat 2.0 adds one soft level)
- Friendly sans type at medium weights

**Principles**

- Authentically digital — don’t imitate physical materials
- Content over chrome
- Colour and typography carry hierarchy
- Simplicity that scales across screen sizes

## Colors

Several saturated flat hues on white, each assigned a role; dark slate for text. Palette names from Designmodo Flat UI.

| Swatch | Hex | Role |
|---|---|---|
| Turquoise | `#1ABC9C` | success / highlight |
| Peter River | `#3498DB` | primary hue |
| Belize Hole | `#2980B9` | primary (dark) |
| Alizarin | `#E74C3C` | danger |
| Sun Flower | `#F1C40F` | warning |
| Midnight Blue | `#2C3E50` | text |
| Clouds | `#ECF0F1` | surface |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Friendly humanist or geometric sans at regular/bold; clear, legible, no ornament.

- **Display: Lato** — Humanist sans, tyPoland (OFL).
- **Body: Open Sans** — Humanist sans, Ascender (for Google) (OFL).
- **Mono: Fira Code** — Monospace (OFL).
- Also fits: Montserrat, Segoe UI Variable, Source Sans 3, Roboto.

Modular scale: Major Third (1.25) from a 16px base.

Metro used Segoe UI (Light and Semilight at very large sizes). Lato, Open Sans and Montserrat defined the web flat era.

## Layout

12-column responsive grid with card and tile patterns

Layout patterns: Card grid, Centered hero, Z-pattern, Dashboard shell.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Flat vector illustration, long-shadow icons (2013–14), simple geometric characters, solid-colour backgrounds.

## Elevation & Depth

None (Flat 1.0) or one soft 0 2px 4px shadow (Flat 2.0)

Texture: None

## Shapes

Corner radius: 3–6px.

Borders: Rarely; colour blocks separate areas

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Button, Card, Feature grid, Pricing table, Navbar, Badge.

Solid buttons in role colours, icon + label feature grids, coloured tiles.

### Motion

Snappy, cheerful transitions: tiles flip and slide, icons pop.

Animations: Scale-in, Fade-up reveal, Hover lift, Material ripple, Count-up, Bounce, Pulse / Ping.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack (small overshoot). Duration: 200–350ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Give every colour a job and keep it consistent
- Do: Use a slight shadow or border on buttons so they still look clickable (Flat 2.0)
- Do: Pair with clear iconography
- Don't: Make buttons indistinguishable from labels
- Don't: Use every palette colour on one screen
- Don't: Put white text on the lighter flat hues (Peter River, Sun Flower)
- Accessibility: Many classic flat hues (Peter River, Turquoise, Sun Flower) fail 4.5:1 with white text — use their darker shades for text-bearing buttons. Flat buttons need a visible affordance.

---

**References**

- Example: [Duolingo](https://www.duolingo.com)
- Example: [Kurzgesagt](https://kurzgesagt.org)
- Example: [Headspace](https://www.headspace.com)
- [Wikipedia — Flat design](https://en.wikipedia.org/wiki/Flat_design)
- [Wikipedia — Metro (design language)](https://en.wikipedia.org/wiki/Metro_(design_language))
- [Nielsen Norman Group — Flat UI Elements Attract Less Attention](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/)

<!-- Generated by Specimen Atlas from src/data/languages/flat.ts -->