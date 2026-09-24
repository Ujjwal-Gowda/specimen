---
version: "alpha"
name: "Vaporwave"
description: "Ironic nostalgia for a digital future that never happened: pastel neon sunsets, perspective grids, retro OS chrome and glitchy VHS texture."
colors:
  background: "#1A0B36"
  surface: "#2A1450"
  on-surface: "#FDF6FF"
  on-surface-variant: "#D3B8F0"
  primary: "#FF71CE"
  on-primary: "#1A0B36"
  outline: "#7A4FD0"
  midnight-violet: "#1A0B36"
  hot-pink: "#FF71CE"
  electric-cyan: "#01CDFE"
  mint: "#05FFA1"
  lavender: "#B967FF"
  lemon: "#FFFB96"
  win95-silver: "#C0C0C0"
typography:
  display-lg:
    fontFamily: "Audiowide"
    fontSize: 4.209rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0.03em
  headline-md:
    fontFamily: "Audiowide"
    fontSize: 2.369rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.03em
  title-md:
    fontFamily: "Audiowide"
    fontSize: 1.333rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "VT323"
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

# Vaporwave

*Also known as: Vaporwave aesthetic, Outrun (sibling), Synthwave visuals (sibling).*

## Overview

Ironic nostalgia for a digital future that never happened: pastel neon sunsets, perspective grids, retro OS chrome and glitchy VHS texture.

**Origin (2010–2013 internet music scene; recurring web revival since).** Vaporwave began as a microgenre of electronic music around 2010–2012. Its landmark is “Floral Shoppe” (December 2011), released by Ramona Xavier (Vektroid) as Macintosh Plus. Its visuals remix 1980s–90s consumer culture: Windows 95 dialog boxes, Roman and Greek busts (the Helios bust on Floral Shoppe), palm trees, pink-to-cyan sunsets, wireframe perspective grids, Japanese text, full-width characters and VHS artefacts. Outrun and Synthwave are neon-driving siblings with chrome sunsets and grid horizons.

**How to recognise it**

- Pink, cyan, lavender and mint neon gradients (the “vaporwave palette”)
- Wireframe perspective grid receding to a horizon, striped setting sun
- Windows 95/98 grey bevelled dialogs and buttons
- Full-width Latin text (ＡＥＳＴＨＥＴＩＣ) and Japanese katakana
- Classical busts, palm trees, dolphins, VHS scanlines

**Principles**

- Irony and nostalgia as the core tone
- Collage: mix eras and media freely
- Neon on dark, with retro OS chrome as the frame
- Imperfection: glitch, scanline and VHS noise are features

## Colors

Deep violet ground with the canonical vaporwave neons; Windows-95 silver for UI chrome.

| Swatch | Hex | Role |
|---|---|---|
| Midnight Violet | `#1A0B36` | background |
| Hot Pink | `#FF71CE` | accent |
| Electric Cyan | `#01CDFE` | secondary |
| Mint | `#05FFA1` | highlight |
| Lavender | `#B967FF` | gradient |
| Lemon | `#FFFB96` | gradient |
| Win95 Silver | `#C0C0C0` | UI chrome |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Retro-futurist display type (neon script, techno, or italic chrome), bitmap or mono faces for UI text and system messages.

- **Display: Audiowide** — Display / decorative, Astigmatic (AOETI) (OFL).
- **Body: Space Grotesk** — Grotesque, Florian Karsten Typefaces (OFL).
- **Mono: VT323** — Monospace (OFL).
- Also fits: Monoton, Righteous, Orbitron, Press Start 2P, IBM Plex Mono.

Modular scale: Perfect Fourth (1.333) from a 16px base.

Italic, uppercase display with gradient fill and a hard offset shadow in cyan. Full-width Unicode characters (U+FF01–FF5E) are a signature but hurt screen readers, so use them decoratively with aria-hidden.

## Layout

Centred compositions with a horizon line; floating OS windows as content containers

Layout patterns: Full-bleed hero, Centered hero, Broken grid, Fullpage scroll-snap.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Classical statues, palm trees, sunsets, 3D wireframe terrain, old computer screenshots, stock photos from the 1990s, VHS stills.

## Elevation & Depth

Hard offset shadows in neon colours

Texture: Scanlines, VHS noise, perspective grid

## Shapes

Corner radius: 0px — bevelled Windows-95 chrome.

Borders: 2px bevel: light top-left, dark bottom-right

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `4px 4px 0 #01CDFE`.

Signature components: Dialog, Marquee band, Button, Hero, Masonry gallery, Video player.

Content often lives in fake OS windows (title bar, close button). Buttons use the Win95 bevel.

### Motion

Glitchy and hypnotic: flickering neon, scrolling marquees, drifting gradients, VHS distortions.

Animations: Glitch effect, Neon flicker, Mesh gradient drift, Marquee, Parallax scrolling, Film grain overlay, Text scramble.

Easing: linear for loops; steps() for glitch jumps. Duration: 4–20s loops; 100–300ms glitch bursts.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use the Win95 bevel for UI chrome to ground the collage
- Do: Keep neon for display text and accents
- Do: Add scanlines or grain subtly
- Do: Mark decorative full-width/katakana text aria-hidden
- Don't: Don’t set body copy in neon on violet
- Don't: Don’t flicker or glitch continuously (seizure risk)
- Don't: Don’t use it for anything that needs trust or clarity
- Don't: Don’t forget the irony: played straight it looks dated
- Accessibility: Flicker and glitch effects must stay under 3 flashes per second (WCAG 2.3.1) and stop under prefers-reduced-motion. Full-width characters are read letter by letter by screen readers, so provide a normal-text label.

---

**References**

- Example: [Windows 93](https://www.windows93.net)
- [Vaporwave — Wikipedia](https://en.wikipedia.org/wiki/Vaporwave)
- [Floral Shoppe — Wikipedia](https://en.wikipedia.org/wiki/Floral_Shoppe)
- [WCAG 2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)

<!-- Generated by Specimen Atlas from src/data/languages/vaporwave.ts -->