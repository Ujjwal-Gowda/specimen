---
version: "alpha"
name: "Liquid Glass"
description: "Content-first UI where navigation and controls are floating layers of refractive glass. Concentric rounded shapes, capsule buttons, SF Pro type and vivid content showing through."
colors:
  background: "#E9ECF2"
  surface: "#f2f4f7"
  on-surface: "#1D1D1F"
  on-surface-variant: "#48484A"
  primary: "#0071E3"
  on-primary: "#FFFFFF"
  outline: "#f8f9fb"
  system-blue: "#007AFF"
  apple-com-link-blue: "#0071E3"
  label: "#1D1D1F"
  secondary-label: "#48484A"
  glass-fill: "#FFFFFF"
  system-gray-6: "#F2F2F7"
typography:
  display-lg:
    fontFamily: "SF Pro"
    fontSize: 3.052rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-md:
    fontFamily: "SF Pro"
    fontSize: 1.953rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.03em
  title-md:
    fontFamily: "SF Pro"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "SF Pro"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "SF Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 28px
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

# Liquid Glass

*Also known as: Apple Liquid Glass, Apple Human Interface Guidelines (2025), iOS 26 design.*

## Overview

Content-first UI where navigation and controls are floating layers of refractive glass. Concentric rounded shapes, capsule buttons, SF Pro type and vivid content showing through.

**Origin (June 2025–present, Apple (iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, visionOS 26)).** Announced at WWDC 2025 as Apple’s broadest redesign since iOS 7, drawing on visionOS. Liquid Glass is a translucent, dynamic material that refracts and reflects what’s behind it, with specular highlights that respond to movement. Controls, tab bars and sidebars float above content as glass capsules that morph and shrink as you scroll. It extends Apple’s Human Interface Guidelines (HIG), which also define SF Pro, SF Symbols, concentric corner radii and system colours.

**How to recognise it**

- Floating capsule-shaped toolbars and tab bars over full-bleed content
- Translucent glass with refraction, specular edge highlights and colour pick-up
- Concentric corner radii — inner radius = outer radius minus padding
- SF Pro type, SF Symbols icons, system blue tint
- Controls that morph and minimise as content scrolls

**Principles**

- Hierarchy: controls float above content and defer to it
- Harmony: shapes are concentric with the hardware’s rounded corners
- Consistency: one material across platforms
- Legibility first: glass adapts (clear vs tinted) to keep text readable

## Colors

Colour comes from content; UI is neutral glass with a single tint (system blue by default). Semantic system colours adapt to light/dark.

| Swatch | Hex | Role |
|---|---|---|
| System Blue | `#007AFF` | tint |
| Apple.com Link Blue | `#0071E3` | accent (AA with white) |
| Label | `#1D1D1F` | text |
| Secondary Label | `#48484A` | muted |
| Glass Fill | `#FFFFFF` | surface at 30–45% opacity |
| System Gray 6 | `#F2F2F7` | grouped background |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

SF Pro with optical sizes (Display ≥ 20pt, Text below) and Dynamic Type styles: Large Title, Title 1–3, Headline, Body, Callout, Subheadline, Footnote, Caption 1–2. Bold, tight large titles.

- **Display: SF Pro** — Neo-grotesque, Apple (System font). Free alternatives: Inter, Geist.
- **Body: SF Pro** — Neo-grotesque, Apple (System font). Free alternatives: Inter, Geist.
- **Mono: SF Mono** — Monospace, Apple (System font). Free alternatives: JetBrains Mono, Geist Mono.
- Also fits: New York, Inter.

Modular scale: Apple Dynamic Type (Large Title 34pt, Title 1 28pt, Body 17pt, Footnote 13pt) from a 16px base.

SF Pro is licensed only for Apple platforms/mockups. On the web use the system stack (-apple-system) with Inter as fallback. Apple’s system faces: SF Pro (sans, optical sizes Text/Display), New York (serif) and SF Mono.

## Layout

Full-bleed content with floating chrome; adaptive layouts (compact/regular size classes); sidebars inset as glass panels

Layout patterns: Full-bleed hero, Centered hero, Bento grid, Scrollytelling.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Vivid, full-bleed photography and wallpapers that make the glass visible; product renders; no flat illustration.

## Elevation & Depth

Layering and blur rather than shadow; soft ambient shadow under floating glass

Texture: Refraction, saturation boost and blur of underlying content

## Shapes

Corner radius: Concentric: capsules for controls (height/2), 24–34px on sheets and cards.

Borders: 1px inner specular highlight on glass edges

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 10px 30px rgba(20, 30, 60, 0.14)`.

Signature components: Navbar, Bottom navigation, Segmented control, Bottom sheet, Toggle group, Search bar, Switch, Toolbar.

HIG names: Tab bar, Toolbar, Sidebar, Sheet, Segmented control, Toggle, Search field, Menu, Popover.

### Motion

Fluid spring physics: glass morphs, lenses flex, toolbars shrink on scroll.

Animations: Shared element transition, Spring press, Blur-in, Scale-in, Modal zoom, Smooth scroll, Zoom on scroll, Sticky stack, Horizontal scroll section.

Easing: Spring (response ≈ 0.5s, damping ≈ 0.8) — on the web approximate with CSS linear() or cubic-bezier(0.32, 0.72, 0, 1). Duration: 350–500ms (spring-settled).

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Put glass only on the navigation and control layer, never on content
- Do: Keep corner radii concentric with their containers
- Do: Test legibility over busy and bright content; fall back to a tinted/frosted variant
- Don't: Stack glass on glass on glass
- Don't: Put long body text on transparent material
- Don't: Fake it with a flat white 50% overlay — it needs blur and saturation
- Accessibility: Respect "Reduce Transparency" (prefers-reduced-transparency) and "Increase Contrast"; provide an opaque fallback. Text on glass must still meet 4.5:1 against the worst-case background.

---

**References**

- Example: [Apple](https://www.apple.com)
- Example: [Apple Developer — Design](https://developer.apple.com/design/)
- Example: [Apple — macOS](https://www.apple.com/macos/)
- [Apple HIG — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [DESIGN.md — Apple (getdesign.md)](https://getdesign.md/apple/design-md)

<!-- Generated by Specimen Atlas from src/data/languages/liquid-glass.ts -->