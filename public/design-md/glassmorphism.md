---
version: "alpha"
name: "Glassmorphism"
description: "Translucent, blurred panels floating over colourful gradient or blob backgrounds, with thin light borders and soft shadows. Layered, luminous and modern."
colors:
  background: "#1B1340"
  surface: "#362f57"
  on-surface: "#FFFFFF"
  on-surface-variant: "#cdcbd5"
  primary: "#F5F3FF"
  on-primary: "#2A1B6E"
  outline: "#6b6683"
  deep-indigo: "#1B1340"
  electric-violet: "#7B2FF7"
  hot-magenta: "#F107A3"
  aqua: "#00D2FF"
  glass-white: "#FFFFFF"
typography:
  display-lg:
    fontFamily: "Outfit"
    fontSize: 3.052rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Outfit"
    fontSize: 1.953rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Outfit"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Outfit"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 14px
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

# Glassmorphism

*Also known as: Frosted glass UI, Glass UI, Backdrop blur style.*

## Overview

Translucent, blurred panels floating over colourful gradient or blob backgrounds, with thin light borders and soft shadows. Layered, luminous and modern.

**Origin (2020–present; named by Michal Malewicz (Hype4), late 2020).** Frosted glass has long roots — Windows Vista Aero (2006), iOS 7’s blurred control centre (2013), macOS vibrancy and Microsoft Fluent’s Acrylic (2017). The term "glassmorphism" was coined by designer Michal Malewicz of Hype4 in late 2020 after macOS Big Sur, and exploded on Dribbble. CSS backdrop-filter made it practical in browsers.

**How to recognise it**

- Semi-transparent white panels (10–40% opacity) with backdrop blur
- Vivid gradient or colourful blob background behind the glass
- Thin 1px light border that catches "light" on the edge
- Soft, diffuse shadows and rounded corners (16–24px)
- Layers overlapping to show depth

**Principles**

- Depth through translucency, not shadow alone
- The background must be colourful for the glass to read
- Keep hierarchy clear with opacity levels
- Light edges define shapes

## Colors

Saturated gradient backdrop (violet, magenta, cyan, orange orbs) with white-alpha glass surfaces and white text.

| Swatch | Hex | Role |
|---|---|---|
| Deep Indigo | `#1B1340` | background base |
| Electric Violet | `#7B2FF7` | orb 1 |
| Hot Magenta | `#F107A3` | orb 2 |
| Aqua | `#00D2FF` | orb 3 |
| Glass White | `#FFFFFF` | surface at 12–20% opacity |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Clean geometric sans in light-to-semibold weights; white text with slight shadow for legibility on glass.

- **Display: Outfit** — Geometric sans, Outfit.io (OFL).
- **Body: Outfit** — Geometric sans, Outfit.io (OFL).
- **Mono: JetBrains Mono** — Monospace, JetBrains (OFL).
- Also fits: Poppins, Plus Jakarta Sans, Sora, Inter, DM Sans.

Modular scale: Major Third (1.25) from a 16px base.

Poppins and Inter dominate Dribbble glass shots; Outfit and Sora feel fresher.

## Layout

Floating card stacks over a full-bleed backdrop; dashboard widgets

Layout patterns: Centered hero, Dashboard shell, Card grid, Bento grid.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Abstract gradient blobs, 3D renders, blurred photography, colourful mesh gradients.

## Elevation & Depth

Soft, large-radius shadows: 0 8px 32px rgba(0,0,0,0.25)

Texture: backdrop-filter: blur(12–24px) saturate(160%); optional noise grain

## Shapes

Corner radius: 16–24px.

Borders: 1px solid rgba(255,255,255,0.3–0.5)

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 8px 32px rgba(10, 5, 40, 0.35)`.

Signature components: Card, Navbar, Dialog, Pricing table, Stats band, Bottom sheet.

Glass cards, glass nav bars, glass credit cards and login forms.

### Motion

Floating and drifting — orbs move slowly, cards parallax and tilt.

Animations: Blob morph, Mesh gradient drift, 3D tilt, Blur-in, Parallax scrolling, Border beam.

Easing: cubic-bezier(0.22, 1, 0.36, 1) — easeOutQuint. Duration: 400–800ms; ambient loops 10–30s.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Put glass over colourful, not flat, backgrounds
- Do: Use a light 1px border so edges stay defined
- Do: Provide a solid fallback when backdrop-filter is unsupported or transparency is reduced
- Don't: Put small body text on low-opacity glass
- Don't: Stack many blurred layers — backdrop-filter is costly on mobile
- Don't: Use it on busy photographic backgrounds where text can’t be guaranteed legible
- Accessibility: Contrast varies with what’s behind the glass — test the worst case. Honour prefers-reduced-transparency with a more opaque surface.

---

**References**

- Example: [Hype4 Academy (Michal Malewicz)](https://hype4.academy)
- Example: [Glassmorphism CSS Generator (ui.glass)](https://ui.glass/generator/)
- Example: [CSS Glass generator](https://css.glass)
- [Nielsen Norman Group — Glassmorphism: Definition and Best Practices](https://www.nngroup.com/articles/glassmorphism/)
- [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

<!-- Generated by Specimen Atlas from src/data/languages/glassmorphism.ts -->