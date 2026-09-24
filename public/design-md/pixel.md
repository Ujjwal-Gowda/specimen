---
version: "alpha"
name: "Pixel Art / 8-bit UI"
description: "Chunky pixels, bitmap fonts, limited palettes and game-UI conventions (dialog boxes, health bars, “PRESS START”) used as a playful, nostalgic interface."
colors:
  background: "#1D2B53"
  surface: "#000000"
  on-surface: "#FFF1E8"
  on-surface-variant: "#C2C3C7"
  primary: "#FFEC27"
  on-primary: "#000000"
  outline: "#FFF1E8"
  pico-8-dark-blue: "#1D2B53"
  pico-8-black: "#000000"
  pico-8-white: "#FFF1E8"
  pico-8-light-grey: "#C2C3C7"
  pico-8-yellow: "#FFEC27"
  pico-8-red: "#FF004D"
  pico-8-blue: "#29ADFF"
  pico-8-green: "#00E436"
typography:
  display-lg:
    fontFamily: "Press Start 2P"
    fontSize: 3.052rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Press Start 2P"
    fontSize: 1.953rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Press Start 2P"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "VT323"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "VT323"
    fontSize: 0.8rem
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

# Pixel Art / 8-bit UI

*Also known as: 8-bit aesthetic, Retro game UI, Bitmap UI.*

## Overview

Chunky pixels, bitmap fonts, limited palettes and game-UI conventions (dialog boxes, health bars, “PRESS START”) used as a playful, nostalgic interface.

**Origin (1977–1990s home consoles and computers; revival 2010s–present).** Draws on the low-resolution graphics of 8- and 16-bit machines: the Atari 2600 (1977), the Nintendo Famicom (1983; NES in North America 1985) and the Game Boy (1989), whose four-shade green screen is iconic. Also early bitmap interfaces, like Susan Kare’s icons and Chicago typeface for the 1984 Macintosh. The modern revival is fed by indie games, the fantasy console PICO-8 (Lexaloffle, 2015) with its fixed 16-colour palette, and CSS kits like NES.css.

**How to recognise it**

- Bitmap/pixel fonts (Press Start 2P, Silkscreen, VT323)
- Hard, stepped pixel borders with cut corners
- Limited, fixed palettes (PICO-8, NES, Game Boy greens)
- Game conventions: dialog boxes, HP/XP bars, blinking “PRESS START”
- No anti-aliasing, no blur, no gradients (or dithered ones)

**Principles**

- Constraint: fixed grid, fixed palette
- Every element snaps to the pixel grid
- Game logic as UI metaphor
- Charm and nostalgia

## Colors

A fixed retro palette. This preview uses PICO-8’s 16 colours: dark blue ground, peach-white text, yellow action.

| Swatch | Hex | Role |
|---|---|---|
| PICO-8 Dark Blue | `#1D2B53` | background |
| PICO-8 Black | `#000000` | surface |
| PICO-8 White | `#FFF1E8` | text |
| PICO-8 Light Grey | `#C2C3C7` | muted text |
| PICO-8 Yellow | `#FFEC27` | accent |
| PICO-8 Red | `#FF004D` | danger / badge |
| PICO-8 Blue | `#29ADFF` | secondary |
| PICO-8 Green | `#00E436` | success |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

A bitmap display face for headings and buttons, a more legible pixel or mono face for body.

- **Display: Press Start 2P** — Display / decorative (OFL).
- **Body: VT323** — Monospace (OFL).
- **Mono: VT323** — Monospace (OFL).
- Also fits: Silkscreen, Space Mono.

Modular scale: Integer steps (8 / 16 / 24 / 32px) to keep pixels crisp from a 16px base.

Press Start 2P is designed on an 8px grid, so use multiples of 8px. Turn off smoothing (-webkit-font-smoothing: none) where supported.

## Layout

Tile-based grid on multiples of 8px

Layout patterns: Centered hero, Card grid, Fullpage scroll-snap, Horizontal scroll section.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Pixel-art sprites and scenes (image-rendering: pixelated), tile maps, sprite sheets.

## Elevation & Depth

Hard 4px offset shadows

Texture: Dithering, starfields, tile patterns

## Shapes

Corner radius: 0px; cut corners made with stepped box-shadows.

Borders: 4px pixel borders (box-shadow technique)

## Components

Borders: 4px solid outline on secondary buttons, inputs and cards. Card shadow: `4px 4px 0 #000000`.

Signature components: Dialog, Progress bar, Button, Card, Rating, Avatar, Toast.

Progress bars become HP/XP bars; dialogs become RPG text boxes; ratings become hearts or stars.

### Motion

Stepped, frame-based animation: blinking text, sprite frames, pixel dissolves, bouncy presses.

Animations: Pixel dissolve, Spring press, Typewriter effect, Glitch effect, Dots loader, Confetti burst.

Easing: steps(n) — frame-by-frame. Duration: 100–150ms per frame; 1s blink cycle.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Size pixel fonts in multiples of their design grid
- Do: Stick to a fixed palette
- Do: Use image-rendering: pixelated for sprites
- Do: Keep long text in a readable face
- Don't: Don’t mix smooth gradients with pixel borders
- Don't: Don’t set paragraphs in Press Start 2P
- Don't: Don’t scale pixel art by non-integer factors
- Don't: Don’t blink things indefinitely
- Accessibility: Pixel fonts are hard to read at small sizes and for dyslexic readers, so use them for short labels and keep body text in VT323 at 18px+ or a regular mono. Blinking “PRESS START” must honour reduced motion.

---

**References**

- Example: [PICO-8 (Lexaloffle)](https://www.lexaloffle.com/pico-8.php)
- [Pixel art — Wikipedia](https://en.wikipedia.org/wiki/Pixel_art)
- [NES.css](https://nostalgic-css.github.io/NES.css/)
- [Press Start 2P — Google Fonts](https://fonts.google.com/specimen/Press+Start+2P)

<!-- Generated by Specimen Atlas from src/data/languages/pixel.ts -->