---
version: "alpha"
name: "Material Design (2014)"
description: "The original Material: bold primary colour app bars, white paper cards on elevation shadows, a pink or amber accent, Roboto, the floating action button and ripple ink. Flat colour with physical depth."
colors:
  background: "#FAFAFA"
  surface: "#FFFFFF"
  on-surface: "#212121"
  on-surface-variant: "#616161"
  primary: "#3F51B5"
  on-primary: "#FFFFFF"
  outline: "#E0E0E0"
  indigo-500: "#3F51B5"
  indigo-700: "#303F9F"
  pink-a200: "#FF4081"
  grey-50: "#FAFAFA"
  black-87: "#212121"
typography:
  display-lg:
    fontFamily: "Roboto"
    fontSize: 3.052rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Roboto"
    fontSize: 1.953rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Roboto"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Roboto"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Roboto Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 2px
  md: 2px
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

# Material Design (2014)

*Also known as: Material Design 1, Classic Material, Paper & ink.*

## Overview

The original Material: bold primary colour app bars, white paper cards on elevation shadows, a pink or amber accent, Roboto, the floating action button and ripple ink. Flat colour with physical depth.

**Origin (2014–2018, Google).** Announced at Google I/O 2014 under Matías Duarte for Android 5.0 Lollipop. Its metaphor was "quantum paper": flat sheets of paper with real thickness (1dp) casting realistic shadows at defined elevations, bold primary/accent colour pairs, Roboto type, the floating action button, ripple ink feedback and meaningful motion. It was the most widely copied design system of the 2010s before Material 2 (2018) and Material You / M3 (2021).

**How to recognise it**

- Coloured app bar (Indigo, Teal, Red…) with white Roboto title
- White cards casting layered shadows at fixed elevations (2, 6, 8, 24dp)
- Circular floating action button in the accent colour
- Ripple "ink" spreading from each tap
- Uppercase button labels with 2dp radius

**Principles**

- Material is the metaphor: paper and ink with real thickness
- Bold, graphic, intentional colour
- Motion provides meaning

## Colors

A primary colour (500) with dark (700) variant for status bar, plus a contrasting accent (A200) for FABs and highlights, on white/grey 50.

| Swatch | Hex | Role |
|---|---|---|
| Indigo 500 | `#3F51B5` | primary |
| Indigo 700 | `#303F9F` | primary dark |
| Pink A200 | `#FF4081` | accent |
| Grey 50 | `#FAFAFA` | background |
| Black 87% | `#212121` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Roboto throughout: Display, Headline, Title, Subheading, Body, Caption, Button (uppercase, medium).

- **Display: Roboto** — Neo-grotesque, Google (OFL).
- **Body: Roboto** — Neo-grotesque, Google (OFL).

Modular scale: Material 2014 type scale (112/56/45/34/24/20/16/14/12) from a 16px base.

Roboto Medium, uppercase and tracked for buttons is a tell-tale detail.

## Layout

8dp baseline grid with 4dp for type; 16dp/24dp keylines.

Layout patterns: Card grid, Dashboard shell, 12-column grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Bold flat illustration with long shadows, full-bleed photography in cards.

## Elevation & Depth

Layered key + ambient shadows at 1–24dp

Texture: None

## Shapes

Corner radius: 2px (buttons, cards); circles for FAB.

Borders: Almost none — depth replaces borders

## Components

Borders: 0px solid outline on secondary buttons, inputs and cards. Card shadow: `0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px rgba(0,0,0,.2)`.

Signature components: Floating action button, Card, Navbar, Button, Tabs, Toast, Drawer.

The FAB and the snackbar (toast) were introduced by this system.

### Motion

Responsive and physical: ripples on touch, surfaces lift, shared elements transform.

Animations: Material ripple, Shared element transition, Fade-in, Scale-in, Spinner.

Easing: cubic-bezier(0.4, 0, 0.2, 1) — Material standard curve. Duration: 195–375ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use one primary and one accent
- Do: Use elevation, not borders, to separate layers
- Do: Keep ripples on every tappable surface
- Don't: Mix elevations arbitrarily
- Don't: Use the accent for large areas
- Don't: Round cards beyond 2–4px
- Accessibility: White text on the 500 colours passes for most hues but not all (e.g. Amber, Lime) — use the 700 shade or dark text there.

---

**References**

- [Material Design 1 (archived guidelines)](https://m1.material.io)
- [Material Design (Wikipedia)](https://en.wikipedia.org/wiki/Material_Design)

<!-- Generated by Specimen Atlas from src/data/languages/material-1.ts -->