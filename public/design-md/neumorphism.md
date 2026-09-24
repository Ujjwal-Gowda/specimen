---
version: "alpha"
name: "Neumorphism"
description: "Elements extruded from — or pressed into — the same soft-coloured surface using paired light and dark shadows. Tactile, calm and monochrome, but low-contrast by nature."
colors:
  background: "#E0E5EC"
  surface: "#E0E5EC"
  on-surface: "#2F3A4A"
  on-surface-variant: "#5A6475"
  primary: "#3D56B2"
  on-primary: "#FFFFFF"
  outline: "#e0e5ec"
  soft-surface: "#E0E5EC"
  highlight: "#FFFFFF"
  shade: "#A3B1C6"
  slate-ink: "#2F3A4A"
  indigo-accent: "#3D56B2"
typography:
  display-lg:
    fontFamily: "Nunito"
    fontSize: 2.488rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Nunito"
    fontSize: 1.728rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Nunito"
    fontSize: 1.2rem
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Nunito"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: 0.833rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 14px
  md: 22px
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

# Neumorphism

*Also known as: Soft UI, Neomorphism, New Skeuomorphism.*

## Overview

Elements extruded from — or pressed into — the same soft-coloured surface using paired light and dark shadows. Tactile, calm and monochrome, but low-contrast by nature.

**Origin (2019–2021 peak; Dribbble trend from Alexander Plyuto’s "Skeuomorph Mobile Banking" (Dec 2019)).** Took off after Alexander Plyuto’s Dribbble shot "Skeuomorph Mobile Banking" (December 2019). Designer Jason Kelley reportedly called it "new skeuomorphism", contracted to "neumorphism"; Michal Malewicz’s article "Neumorphism in user interfaces" popularised the name. Elements appear extruded from, or pressed into, a single soft surface using two opposing shadows (light top-left, dark bottom-right). Its low contrast made it notorious for accessibility problems.

**How to recognise it**

- Background and elements share the same colour
- Dual shadows: light (top-left) and dark (bottom-right)
- Pressed/inset states for active buttons and inputs
- Soft, rounded shapes; pastel or grey monochrome palette
- Very few borders — edges come from shadow only

**Principles**

- Light source is always top-left and consistent
- Depth through extrusion, not colour
- One surface colour, tonal variations only
- Use accent colour only for critical state

## Colors

Monochromatic soft surface (#E0E5EC classic), with light and dark tints of the same hue for shadows; one small accent.

| Swatch | Hex | Role |
|---|---|---|
| Soft Surface | `#E0E5EC` | background & surface |
| Highlight | `#FFFFFF` | light shadow |
| Shade | `#A3B1C6` | dark shadow |
| Slate Ink | `#2F3A4A` | text |
| Indigo Accent | `#3D56B2` | accent |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Rounded or geometric sans, medium weights, generous size to offset low surface contrast.

- **Display: Nunito** — Rounded sans (OFL).
- **Body: Nunito** — Rounded sans (OFL).
- **Mono: JetBrains Mono** — Monospace, JetBrains (OFL).
- Also fits: Poppins, Quicksand, Manrope, DM Sans.

Modular scale: Minor Third (1.2) from a 16px base.

Keep text darker than feels natural — the soft surface already lowers perceived contrast.

## Layout

Centred control panels, dashboards and mobile-first widget grids

Layout patterns: Centered hero, Dashboard shell, Card grid.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Minimal — icons, dials, sliders, device controls. Photography rarely.

## Elevation & Depth

Raised: 9px 9px 16px rgba(163,177,198,.6), -9px -9px 16px rgba(255,255,255,.5); Pressed: the same as inset

Texture: Optional subtle gradient from light to shade on raised surfaces

## Shapes

Corner radius: 12–30px, circles for icon buttons.

Borders: None (or 1px with same-hue highlight)

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.55)`.

Signature components: Button, Switch, Slider, Icon button, Card, Progress bar.

Smart-home controls, music players, calculators, dials.

### Motion

Soft press and release — shadows swap from outset to inset.

Animations: Spring press, Fade-in, Progress bar fill, Count-up.

Easing: cubic-bezier(0.4, 0, 0.2, 1) — standard ease. Duration: 150–250ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use it for a few hero controls, not a whole product
- Do: Add clear state changes (colour or icon) besides the shadow
- Do: Keep text contrast ≥ 4.5:1 even if the shapes are soft
- Don't: Rely on shadows alone to show buttons vs. static cards
- Don't: Use on dark or saturated backgrounds (it muddies)
- Don't: Build forms entirely in soft UI — inputs become invisible
- Accessibility: The style’s weakest point: element boundaries often fall below 3:1 (WCAG 1.4.11 Non-text Contrast). Add borders or colour for state and keep focus rings.

---

**References**

- Example: [Neumorphism.io generator](https://neumorphism.io)
- Example: [Dribbble — neumorphism tag](https://dribbble.com/tags/neumorphism)
- Example: [GitHub — neumorphism topic](https://github.com/topics/neumorphism)
- [Michal Malewicz — Neumorphism in user interfaces (UX Collective)](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
- [WCAG 2.2 — 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

<!-- Generated by Specimen Atlas from src/data/languages/neumorphism.ts -->