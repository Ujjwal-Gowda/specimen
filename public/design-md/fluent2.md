---
version: "alpha"
name: "Fluent 2 Design System"
description: "Microsoft’s calm, productivity-focused system: neutral surfaces, the Communication Blue brand ramp, 4–8px radii, Segoe UI Variable, layered Mica/Acrylic materials and precise token-driven components."
colors:
  background: "#FAFAFA"
  surface: "#FFFFFF"
  on-surface: "#242424"
  on-surface-variant: "#616161"
  primary: "#0F6CBD"
  on-primary: "#FFFFFF"
  outline: "#D1D1D1"
  brand-80-communication-blue: "#0F6CBD"
  brand-70-hover: "#115EA3"
  neutral-foreground-1: "#242424"
  neutral-foreground-3: "#616161"
  neutral-background-2: "#FAFAFA"
  neutral-stroke-1: "#D1D1D1"
typography:
  display-lg:
    fontFamily: "Segoe UI Variable"
    fontSize: 3.052rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Segoe UI Variable"
    fontSize: 1.953rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Segoe UI Variable"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Segoe UI Variable"
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
  md: 8px
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

# Fluent 2 Design System

*Also known as: Microsoft Fluent, Fluent UI, Fluent Design System (2017, v1).*

## Overview

Microsoft’s calm, productivity-focused system: neutral surfaces, the Communication Blue brand ramp, 4–8px radii, Segoe UI Variable, layered Mica/Acrylic materials and precise token-driven components.

**Origin (2017 (Fluent Design) → 2023 Fluent 2, Microsoft).** Microsoft introduced the Fluent Design System in 2017 as the successor to Metro, built on light, depth, motion, material and scale (Acrylic and Reveal highlight). Fluent 2, launched in 2023, unified Windows 11, Microsoft 365 and Teams: Segoe UI Variable, rounded corners, Mica and Acrylic materials, a global token system (alias and global tokens) and the Fluent UI React v9 / Web Components libraries.

**How to recognise it**

- Neutral greys with a single brand blue (#0F6CBD)
- Small radii (4px controls, 8px cards/dialogs)
- Segoe UI Variable with a restrained type ramp
- Mica (desktop-tinted) and Acrylic (blurred) backgrounds
- Fluent System Icons in regular/filled pairs
- Subtle two-layer shadows (shadow2 … shadow64)

**Principles**

- Natural on every device — adapt to each platform
- Built for focus: calm, productive, unobtrusive
- One for all, all for one: inclusive and accessible by default
- Unmistakably Microsoft

## Colors

Neutral ramp for 90% of UI; brand ramp (10–160) for interactive emphasis; shared status colours.

| Swatch | Hex | Role |
|---|---|---|
| Brand 80 (Communication Blue) | `#0F6CBD` | accent |
| Brand 70 (hover) | `#115EA3` | accent hover |
| Neutral Foreground 1 | `#242424` | text |
| Neutral Foreground 3 | `#616161` | muted |
| Neutral Background 2 | `#FAFAFA` | background |
| Neutral Stroke 1 | `#D1D1D1` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Segoe UI Variable with named ramp styles: Caption 2/1, Body 1/2, Subtitle 2/1, Title 3/2/1, Large Title, Display. Semibold (600) for emphasis, rarely Bold.

- **Display: Segoe UI Variable** — Humanist sans, Microsoft (System font). Free alternatives: Open Sans, Source Sans 3.
- **Body: Segoe UI Variable** — Humanist sans, Microsoft (System font). Free alternatives: Open Sans, Source Sans 3.
- **Mono: Fira Code** — Monospace (OFL).
- Also fits: Open Sans.

Modular scale: Fluent type ramp: Caption 1 12/16, Body 1 14/20, Subtitle 1 20/28, Title 1 32/40, Large Title 40/52, Display 68/92 from a 16px base.

Segoe UI Variable ships with Windows 11 and is not licensed for web embedding; use the system stack with Open Sans or Noto Sans as fallback.

## Layout

4px base spacing grid; responsive breakpoints small/medium/large; app shells with nav pane

Layout patterns: Dashboard shell, Docs layout, Card grid, Holy Grail layout.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Soft 3D Fluent emoji and illustrations, product screenshots in device frames, abstract gradient "bloom" wallpapers.

## Elevation & Depth

shadow2 to shadow64 — each a key + ambient shadow pair

Texture: Mica (wallpaper-tinted opaque) and Acrylic (blurred translucent) materials

## Shapes

Corner radius: borderRadiusSmall 2px, Medium 4px, Large 6px, XLarge 8px, Circular.

Borders: 1px neutral strokes; accessible 2px focus stroke

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14)`.

Signature components: Button, Data table, Dialog, Sidebar navigation, Tabs, Toast, Avatar, Dropdown menu, Toolbar, Split button, Tree view.

Fluent UI React v9 names: Button, CompoundButton, SplitButton, DataGrid, Dialog, Drawer, TabList, Toast, Persona, Menu, Combobox.

### Motion

Purposeful and quick — connected animations between states, decelerate on enter.

Animations: Fade-in, Toast slide-in, Accordion expand, Shared element transition, Spinner, Shimmer skeleton, Button loading morph.

Easing: cubic-bezier(0, 0, 0, 1) — curveDecelerateMid; cubic-bezier(0.33, 0, 0.67, 1) — curveEasyEase. Duration: durationFast 150ms, durationNormal 200ms, durationSlow 300ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use alias tokens (colorNeutralForeground1, colorBrandBackground) not raw hex
- Do: Pair every icon with its filled variant for selected states
- Do: Keep density appropriate to productivity use
- Don't: Use large radii or heavy shadows — Fluent is precise and calm
- Don't: Put Acrylic behind text-heavy content
- Don't: Invent new blues outside the brand ramp
- Accessibility: Built for high-contrast mode: test with Windows High Contrast / forced-colors. Focus indicator is a 2px stroke that must never be removed.

---

**References**

- Example: [Fluent 2 Design System](https://fluent2.microsoft.design)
- Example: [Fluent UI React v9 docs](https://react.fluentui.dev)
- Example: [Microsoft 365](https://www.microsoft.com/microsoft-365)
- [Fluent 2 — official site](https://fluent2.microsoft.design)
- [microsoft/fluentui (GitHub)](https://github.com/microsoft/fluentui)

<!-- Generated by Specimen Atlas from src/data/languages/fluent2.ts -->