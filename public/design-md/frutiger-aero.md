---
version: "alpha"
name: "Frutiger Aero"
description: "Glossy, optimistic Web 2.0: sky-blue gradients, glass and water, bubbles and green nature, humanist sans type and reflective pill buttons. Technology as clean, bright and friendly."
colors:
  background: "#EAF6FF"
  surface: "#FFFFFF"
  on-surface: "#0B3D6B"
  on-surface-variant: "#3E6788"
  primary: "#1479C9"
  on-primary: "#FFFFFF"
  outline: "#A9D3F2"
  aero-sky: "#3AA8E8"
  deep-water: "#0B4F8A"
  fresh-grass: "#6CC24A"
  cloud: "#F4FAFF"
  glass-highlight: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "Frutiger"
    fontSize: 1.802rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Frutiger"
    fontSize: 1.424rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Frutiger"
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Open Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: 0.889rem
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

# Frutiger Aero

*Also known as: Web 2.0 gloss, Aero, Vista-era aesthetic.*

## Overview

Glossy, optimistic Web 2.0: sky-blue gradients, glass and water, bubbles and green nature, humanist sans type and reflective pill buttons. Technology as clean, bright and friendly.

**Origin (c. 2004–2013; revived 2020s).** A name coined in 2017 by Sofi Lee of the Consumer Aesthetics Research Institute for the optimistic look of mid-2000s tech: Windows Vista and 7’s Aero glass, the Wii and early iPhone, glossy "Web 2.0" buttons, skies, bubbles, water droplets, fish and green fields. The name nods to the Frutiger typeface (Adrian Frutiger, 1976) and its lookalikes that dominated the era’s interfaces and signage. It resurfaced online in the 2020s as a nostalgic, eco-futurist mood.

**How to recognise it**

- Sky-blue and grass-green gradients, often with a white horizon glow
- Glassy, reflective buttons with a bright top highlight
- Bubbles, water droplets, lens flares, fish and leaves
- Humanist sans (Frutiger, Segoe, Myriad) in white or dark blue
- Soft drop shadows and reflections under objects

**Principles**

- Optimism: technology and nature in harmony
- Everything is shiny, clean and translucent
- Depth through gloss and reflection rather than flat colour

## Colors

Luminous sky blues and fresh greens with white highlights; saturated but clean.

| Swatch | Hex | Role |
|---|---|---|
| Aero Sky | `#3AA8E8` | accent |
| Deep Water | `#0B4F8A` | text |
| Fresh Grass | `#6CC24A` | secondary |
| Cloud | `#F4FAFF` | background |
| Glass Highlight | `#FFFFFF` | gloss |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Humanist sans throughout — friendly, clear, slightly rounded — in dark blue on light or white on glossy blue.

- **Display: Frutiger** — Humanist sans, Linotype (Monotype) (Commercial). Free alternatives: Source Sans 3, Open Sans.
- **Body: Open Sans** — Humanist sans, Ascender (for Google) (OFL).
- **Mono: JetBrains Mono** — Monospace, JetBrains (OFL).
- Also fits: Segoe UI Variable.

Modular scale: Major Second (1.125) from a 16px base.

Myriad and Segoe UI were the era’s workhorses; Open Sans is the closest free choice.

## Layout

Centred 960px layouts typical of Web 2.0; rounded content panels.

Layout patterns: Centered hero, Card grid, Split hero.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Blue skies with clouds, green hills, water droplets, bubbles, aquariums, glossy 3D icons.

## Elevation & Depth

Soft drop shadows plus reflections

Texture: Gloss highlights, bubbles, lens flare, water

## Shapes

Corner radius: 8–999px; glossy pill buttons.

Borders: 1px light borders with inner white highlights

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 6px 18px rgba(20,121,201,.25)`.

Signature components: Button, Navbar, Card, Search bar, Progress bar.

The glossy capsule button and glass toolbar are the icons of the style.

### Motion

Gentle, floaty and glowing: bubbles drift, highlights sweep.

Animations: Shine sweep, Mesh gradient drift, Fade-in, Scale-in, Particles.

Easing: cubic-bezier(0.25, 0.1, 0.25, 1) — ease. Duration: 300–600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use a bright top highlight on buttons
- Do: Mix sky, water and nature imagery
- Do: Keep text dark blue on light backgrounds for contrast
- Don't: Put small white text on light gloss
- Don't: Overuse lens flares
- Don't: Pair with flat, brutal layouts
- Accessibility: Gloss and gradients reduce contrast; test white-on-blue text and keep body copy on solid light panels.

---

**References**

- [CARI — Frutiger Aero](https://cari.institute/aesthetics/frutiger-aero)
- [Windows Aero (Wikipedia)](https://en.wikipedia.org/wiki/Windows_Aero)

<!-- Generated by Specimen Atlas from src/data/languages/frutiger-aero.ts -->