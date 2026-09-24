---
version: "alpha"
name: "Material Design 3"
description: "Google’s open design system: tonal colour roles generated from a seed colour, rounded shapes, pill buttons, state layers and a documented component set for Android, Web and Flutter."
colors:
  background: "#FEF7FF"
  surface: "#F3EDF7"
  on-surface: "#1D1B20"
  on-surface-variant: "#49454F"
  primary: "#6750A4"
  on-primary: "#FFFFFF"
  outline: "#CAC4D0"
  primary-baseline: "#6750A4"
  primary-container: "#EADDFF"
  secondary-container: "#E8DEF8"
  tertiary: "#7D5260"
  surface-container: "#F3EDF7"
  outline-variant: "#CAC4D0"
typography:
  display-lg:
    fontFamily: "Google Sans"
    fontSize: 3.052rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Google Sans"
    fontSize: 1.953rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Google Sans"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Roboto Flex"
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
  sm: 999px
  md: 16px
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

# Material Design 3

*Also known as: Material You, M3, Material 3 Expressive (2025 update).*

## Overview

Google’s open design system: tonal colour roles generated from a seed colour, rounded shapes, pill buttons, state layers and a documented component set for Android, Web and Flutter.

**Origin (2021–present, Google (Android 12 onward)).** Google introduced Material Design in 2014 (Matías Duarte) with the "paper and ink" metaphor and z-depth shadows. Material You / Material Design 3 arrived with Android 12 at Google I/O 2021: dynamic colour extracted from the user’s wallpaper via the HCT colour space (Hue, Chroma, Tone), tonal palettes, larger shape radii and tonal (colour-based) elevation instead of heavy shadows. "Material 3 Expressive" (2025) added springier motion, more shape variety and bolder type.

**How to recognise it**

- Tonal colour roles: primary, secondary, tertiary and their "container" / "on-" pairs
- Pill-shaped buttons (Filled, Tonal, Outlined, Text, Elevated)
- Large rounded corners (12–28px) on cards, sheets and dialogs
- Surfaces tinted with the primary colour instead of shadows
- Roboto / Roboto Flex / Google Sans type scale roles (Display, Headline, Title, Body, Label)
- Ripple and state-layer feedback on press

**Principles**

- Personal: colour adapts to the user (dynamic colour)
- Adaptive: layouts respond across window size classes (compact, medium, expanded)
- Expressive: shape, motion and type convey brand
- Accessible by default: colour roles guarantee contrast pairs

## Colors

Seed colour → HCT tonal palettes → semantic roles. Use role pairs (primary / onPrimary, primaryContainer / onPrimaryContainer, surfaceContainer…) rather than raw hex.

| Swatch | Hex | Role |
|---|---|---|
| Primary (baseline) | `#6750A4` | accent |
| On Primary | `#FFFFFF` | accent text |
| Primary Container | `#EADDFF` | tonal fill |
| Secondary Container | `#E8DEF8` | tonal button |
| Tertiary | `#7D5260` | contrast accent |
| Surface | `#FEF7FF` | background |
| Surface Container | `#F3EDF7` | surface |
| On Surface | `#1D1B20` | text |
| Outline Variant | `#CAC4D0` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Fifteen named type roles: Display L/M/S, Headline L/M/S, Title L/M/S, Body L/M/S, Label L/M/S. Display styles are Regular (400) weight, not bold.

- **Display: Google Sans** — Geometric sans, Google (Commercial). Free alternatives: Outfit, DM Sans, Plus Jakarta Sans.
- **Body: Roboto Flex** — Neo-grotesque, Google (OFL).
- **Mono: JetBrains Mono** — Monospace, JetBrains (OFL).
- Also fits: Roboto.

Modular scale: M3 type scale: Display Large 57/64, Headline Large 32/40, Title Large 22/28, Body Large 16/24, Label Large 14/20 from a 16px base.

Roboto and Roboto Flex are the defaults; Google Sans / Google Sans Flex are Google-only brand faces. Any brand face can be mapped onto the role names. Google Sans is Google’s own brand face (Google Sans Flex/Text); Roboto Flex is the variable default in the M3 type scale.

## Layout

Window size classes: compact < 600dp (4 columns), medium 600–839dp (8), expanded ≥ 840dp (12); navigation bar → rail → drawer

Layout patterns: Card grid, Dashboard shell, Docs layout, Centered hero.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Rounded image containers, friendly illustration, product screenshots inside device frames; shapes from the M3 shape library as decorative masks.

## Elevation & Depth

Levels 0–5 expressed mainly as surface tint (surfaceContainerLowest → Highest); shadows only on raised elements

Texture: None

## Shapes

Corner radius: Shape scale: extra-small 4px, small 8px, medium 12px, large 16px, extra-large 28px, full (pill).

Borders: Outline (1px) only on Outlined variants

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Button, Floating action button, Card, Chip, Navbar, Bottom navigation, Bottom sheet, Dialog, Switch, Segmented control, Toast, Navigation rail, Split button, Toolbar.

Official names: Common buttons, FAB / Extended FAB, Navigation bar / rail / drawer, Top app bar, Bottom sheet, Snackbar, Segmented buttons, Chips (assist, filter, input, suggestion).

### Motion

Emphasized easing and container transform; in Expressive, spring-based motion with slight overshoot.

Animations: Material ripple, Shared element transition, Fade-up reveal, Scale-in, Toast slide-in, Accordion expand, Button loading morph, Pulse / Ping.

Easing: cubic-bezier(0.2, 0, 0, 1) — M3 Emphasized / Standard; cubic-bezier(0.05, 0.7, 0.1, 1) — Emphasized Decelerate. Duration: Short 50–200ms, Medium 250–400ms, Long 450–600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Generate the palette from one seed colour with Material Theme Builder
- Do: Use the role pairs so contrast is guaranteed
- Do: Choose one button emphasis level per action hierarchy (Filled > Tonal > Outlined > Text)
- Don't: Hard-code hex values in components instead of roles
- Don't: Put more than one FAB on a screen
- Don't: Mix M2 shadows with M3 tonal elevation
- Accessibility: Colour roles are built for ≥ 4.5:1 pairs; keep touch targets ≥ 48×48dp and never drop the state layer that shows focus.

---

**References**

- Example: [Material Design 3](https://m3.material.io)
- Example: [Android](https://www.android.com)
- Example: [Google Store](https://store.google.com)
- [Material Design 3 — official guidelines](https://m3.material.io)
- [M3 — Color system overview](https://m3.material.io/styles/color/system/overview)
- [Material Web components (GitHub)](https://github.com/material-components/material-web)

<!-- Generated by Specimen Atlas from src/data/languages/material3.ts -->