---
version: "alpha"
name: "Cyberpunk"
description: "Neon on near-black: cyan, magenta and hazard yellow, clipped-corner panels, HUD readouts, scanlines and glitches, with squared techno type. Dense, electric and slightly hostile."
colors:
  background: "#0A0A12"
  surface: "#12121E"
  on-surface: "#E8ECF4"
  on-surface-variant: "#9AA0B4"
  primary: "#FCEE0A"
  on-primary: "#0A0A12"
  outline: "#00F0FF"
  night-city-black: "#0A0A12"
  hazard-yellow: "#FCEE0A"
  neon-cyan: "#00F0FF"
  hot-magenta: "#FF2A6D"
  steel: "#9AA0B4"
typography:
  display-lg:
    fontFamily: "Rajdhani"
    fontSize: 4.209rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.06em
  headline-md:
    fontFamily: "Rajdhani"
    fontSize: 2.369rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.06em
  title-md:
    fontFamily: "Rajdhani"
    fontSize: 1.333rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Rajdhani"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Share Tech Mono"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 0px
  md: 0px
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

# Cyberpunk

*Also known as: Cyberpunk UI, Neon noir, Techwear UI.*

## Overview

Neon on near-black: cyan, magenta and hazard yellow, clipped-corner panels, HUD readouts, scanlines and glitches, with squared techno type. Dense, electric and slightly hostile.

**Origin (1980s fiction → 2020s interfaces).** From William Gibson’s "Neuromancer" (1984), Ridley Scott’s "Blade Runner" (1982) and "Ghost in the Shell" (1995) — "high tech, low life". Its interface language — neon on black, angular clipped panels, glitching HUD text, hazard yellow and Japanese signage — was codified for games by "Deus Ex" and CD Projekt Red’s "Cyberpunk 2077" (2020), whose yellow-and-cyan UI is the modern reference.

**How to recognise it**

- Near-black backgrounds with neon cyan, magenta or hazard yellow
- Panels with 45° clipped corners and thin outline frames
- HUD details: coordinates, IDs, barcodes, tick marks
- Squared or condensed techno type, often uppercase
- Glitch, scanline and chromatic-aberration effects

**Principles**

- Information overload is the atmosphere
- Light comes from the interface itself — neon glows on dark
- Angular, industrial geometry over soft curves

## Colors

Near-black base with one dominant neon and one clashing secondary; glow via shadows.

| Swatch | Hex | Role |
|---|---|---|
| Night City Black | `#0A0A12` | background |
| Hazard Yellow | `#FCEE0A` | accent |
| Neon Cyan | `#00F0FF` | secondary |
| Hot Magenta | `#FF2A6D` | alert |
| Steel | `#9AA0B4` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Squared, wide or condensed techno sans for headings (uppercase, tracked), a monospace for readouts.

- **Display: Rajdhani** — Display / decorative, Indian Type Foundry (OFL).
- **Body: Rajdhani** — Display / decorative, Indian Type Foundry (OFL).
- **Mono: Share Tech Mono** — Monospace, Carrois Type Design (OFL).
- Also fits: Orbitron, Russo One, Audiowide, Share Tech Mono.

Modular scale: Perfect Fourth (1.333) from a 16px base.

Rajdhani is readable enough for body text; keep Orbitron to short headings.

## Layout

Dense HUD-style panels; asymmetric modules with data readouts.

Layout patterns: Dashboard shell, Broken grid, Bento grid.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Night cityscapes, rain and neon signs, chrome and implants, glitch art.

## Elevation & Depth

Glow (coloured box-shadow) instead of shadow

Texture: Scanlines, noise, chromatic aberration

## Shapes

Corner radius: 0px with clip-path corner cuts.

Borders: 1px neon outlines, notched corners

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 0 18px rgba(0,240,255,.35)`.

Signature components: Navbar, Card, Progress bar, Data table, Badge, Command palette.

Clip-path corners on buttons and cards are the fastest way to the look.

### Motion

Snappy and electric: glitches, flickers, text scrambles and scanning lines.

Animations: Glitch effect, Text scramble, Neon flicker, Border beam, Typewriter effect.

Easing: steps(4) or cubic-bezier(0.9, 0, 0.1, 1). Duration: 80–300ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Keep one dominant neon
- Do: Use clip-path corners and thin outlines
- Do: Put real data in the HUD details
- Don't: Glitch body text
- Don't: Put yellow on cyan
- Don't: Let glow reduce text contrast
- Accessibility: Neon on black passes contrast easily; the risk is flicker and glitch — stop all of it under prefers-reduced-motion and avoid flashes above 3 per second.

---

**References**

- Example: [Cyberpunk 2077](https://www.cyberpunk.net)
- [Cyberpunk (Wikipedia)](https://en.wikipedia.org/wiki/Cyberpunk)
- [CARI — Cyberpunk](https://cari.institute/aesthetics/cyberpunk)

<!-- Generated by Specimen Atlas from src/data/languages/cyberpunk.ts -->