---
version: "alpha"
name: "Y2K Aesthetic"
description: "Glossy, chrome and bubbly: metallic gradients, translucent plastics, pill-shaped Aqua buttons and techno display type, all with naive optimism about the future."
colors:
  background: "#EAF4FF"
  surface: "#F7FAFF"
  on-surface: "#0A1A3A"
  on-surface-variant: "#3E4C63"
  primary: "#0062D6"
  on-primary: "#FFFFFF"
  outline: "#A9B8CC"
  ice: "#EAF4FF"
  chrome: "#C9D3DE"
  deep-navy: "#0A1A3A"
  steel: "#3E4C63"
  aqua-blue: "#0062D6"
  bubblegum: "#FF6EC7"
  lime-pop: "#B6FF3B"
typography:
  display-lg:
    fontFamily: "Orbitron"
    fontSize: 3.052rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: 0.01em
  headline-md:
    fontFamily: "Orbitron"
    fontSize: 1.953rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0.01em
  title-md:
    fontFamily: "Orbitron"
    fontSize: 1.25rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Outfit"
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
  md: 20px
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

# Y2K Aesthetic

*Also known as: Cyber Y2K, Y2K Futurism, Frutiger Aero (adjacent), Millennium aesthetic.*

## Overview

Glossy, chrome and bubbly: metallic gradients, translucent plastics, pill-shaped Aqua buttons and techno display type, all with naive optimism about the future.

**Origin (1997–2004 original; revival from ~2019).** The optimistic tech-futurism of the turn of the millennium: the translucent Bondi Blue iMac G3 (1998), Apple’s Aqua interface for Mac OS X (unveiled January 2000) with its lickable glossy buttons, chrome logotypes, bubbles, blobby 3D renders, Winamp skins and pop music videos. The Consumer Aesthetics Research Institute (CARI) catalogues it as “Y2K Futurism” and documents related strands, including “Frutiger Aero”, the glossy nature-meets-technology look of roughly 2004–2013 (Windows Vista and 7, aqua skies, Frutiger-family type). Gen-Z fashion and social media revived Y2K around 2019–2020.

**How to recognise it**

- Chrome or liquid-metal gradient text and logos
- Glossy pill buttons with a white highlight across the top half (Aqua style)
- Translucent, icy blues with pops of bubblegum pink and lime
- Orbs, bubbles, blobs and lens flares
- Wide, techno or extended display type (Eurostile/Orbitron-like)

**Principles**

- Everything is shiny: gloss, chrome, highlight
- Technology as fun and friendly
- Rounded, inflatable shapes
- Playful excess over restraint

## Colors

Icy blue and silver chrome base with candy accents (bubblegum pink, lime) for badges and highlights.

| Swatch | Hex | Role |
|---|---|---|
| Ice | `#EAF4FF` | background |
| Chrome | `#C9D3DE` | surface / metallic |
| Deep Navy | `#0A1A3A` | text |
| Steel | `#3E4C63` | muted text |
| Aqua Blue | `#0062D6` | accent |
| Bubblegum | `#FF6EC7` | highlight |
| Lime Pop | `#B6FF3B` | highlight |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Extended or techno display faces for headlines and logos, a rounded-geometric body face. For the Frutiger Aero variant, a humanist sans (Frutiger or similar).

- **Display: Orbitron** — Display / decorative (OFL).
- **Body: Outfit** — Geometric sans, Outfit.io (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Michroma, Audiowide, Syne, Unbounded, Sora, Frutiger.

Modular scale: Major Third (1.25) from a 16px base.

Chrome text works with gradient + background-clip: text plus a thin text-stroke. Keep body copy in a normal-width face.

## Layout

Loose, collage-like; centred heroes with floating 3D objects

Layout patterns: Centered hero, Card grid, Broken grid, Full-bleed hero.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: 3D chrome objects, blobs and bubbles, translucent tech products, butterfly and star motifs; low-poly or glossy renders.

## Elevation & Depth

Inner highlights plus soft blue drop shadows (“bevel and gloss”)

Texture: Gloss highlights, lens flares, bubbles

## Shapes

Corner radius: Pill (999px) buttons, 18–24px cards.

Borders: 1px darker rims under glossy surfaces

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `inset 0 1px 0 rgba(255,255,255,0.9), 0 6px 16px rgba(0,60,140,0.25)`.

Signature components: Button, Badge, Chip, Card, Product card, Marquee band, Navbar.

Buttons are the signature: glossy Aqua pills. Product cards float with chrome frames.

### Motion

Bouncy and shiny: shine sweeps across buttons, floating orbs, springy presses.

Animations: Shine sweep, Blob morph, Mesh gradient drift, 3D tilt, Spring press, Glitch effect, Marquee.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack (overshoot). Duration: 300–600ms interactions; 8–20s ambient floats.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Commit to gloss: highlights, bevels and chrome
- Do: Use candy colours as small accents on icy neutrals
- Do: Keep body text plain and readable
- Do: Reference the era knowingly (Aqua, iMac G3)
- Don't: Don’t apply chrome gradients to body text
- Don't: Don’t mix with flat or brutalist styles in the same component
- Don't: Don’t use low-contrast light-blue text
- Don't: Don’t forget to test gloss effects in dark mode
- Accessibility: Chrome gradients reduce contrast at their light stops, so keep them for large display text and logos only. Glossy buttons need a text colour that passes against the lightest part of the gradient.

---

**References**

- Example: [Poolsuite](https://poolsuite.net)
- [Consumer Aesthetics Research Institute (CARI)](https://cari.institute)
- [Y2K aesthetic — Wikipedia](https://en.wikipedia.org/wiki/Y2K_aesthetic)
- [Frutiger Aero — Wikipedia](https://en.wikipedia.org/wiki/Frutiger_Aero)

<!-- Generated by Specimen Atlas from src/data/languages/y2k.ts -->