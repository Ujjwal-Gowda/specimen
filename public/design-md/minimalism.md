---
version: "alpha"
name: "Minimalism"
description: "Everything non-essential removed. Generous white space, a restrained palette, one typeface and a single accent, so content and product photography carry the page."
colors:
  background: "#FAFAF8"
  surface: "#FFFFFF"
  on-surface: "#1A1A1A"
  on-surface-variant: "#6E6E6A"
  primary: "#1A1A1A"
  on-primary: "#FAFAF8"
  outline: "#E6E6E1"
  off-white: "#FAFAF8"
  ink: "#1A1A1A"
  stone: "#6E6E6A"
  hairline: "#E6E6E1"
  moss: "#3D5A40"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: 3.052rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline-md:
    fontFamily: "Inter"
    fontSize: 1.953rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.025em
  title-md:
    fontFamily: "Inter"
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Inter"
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

# Minimalism

*Also known as: Minimal Design, Less is More, Reductive design.*

## Overview

Everything non-essential removed. Generous white space, a restrained palette, one typeface and a single accent, so content and product photography carry the page.

**Origin (1960s industrial design → 2010s web).** Traces to Ludwig Mies van der Rohe’s "less is more" and to Dieter Rams, whose work at Braun (1955–1995) and "Ten Principles for Good Design" (ending in "Good design is as little design as possible") shaped Jonathan Ive’s Apple. On the web it rose with responsive design and the flat era: a single typeface, lots of white space, and content-first pages. Japanese "ma" (negative space) and Muji’s "no-brand" identity are close cousins.

**How to recognise it**

- Large areas of empty space around few elements
- Neutral palette; one accent colour or none
- One sans family in two weights
- Hairline dividers instead of boxes and cards
- Product or content photography on plain grounds

**Principles**

- As little design as possible (Rams, principle 10)
- Every element must justify its existence
- Negative space is a design element, not leftover
- Hierarchy through spacing and scale before colour

## Colors

Near-white ground, near-black ink, warm or cool neutral greys; accent optional and tiny.

| Swatch | Hex | Role |
|---|---|---|
| Off White | `#FAFAF8` | background |
| Ink | `#1A1A1A` | text |
| Stone | `#6E6E6A` | muted |
| Hairline | `#E6E6E1` | border |
| Moss | `#3D5A40` | accent (optional) |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

A single neutral sans at regular and medium weights, generous line height, modest sizes. Headlines are quiet — size contrast rather than heavy weight.

- **Display: Inter** — Neo-grotesque, rsms (OFL).
- **Body: Inter** — Neo-grotesque, rsms (OFL).
- **Mono: JetBrains Mono** — Monospace, JetBrains (OFL).
- Also fits: Neue Haas Grotesk Display, Söhne, Instrument Sans, Avenir, Public Sans.

Modular scale: Major Third (1.25) from a 16px base.

Söhne (Klim) and Neue Haas Grotesk are the premium choices; Inter and Instrument Sans are excellent free equivalents.

## Layout

Simple 12-column grid, wide margins, one idea per viewport

Layout patterns: Centered hero, Single-column long-form, Card grid, Split hero.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Studio product photography on seamless backgrounds, lots of negative space, muted tones.

## Elevation & Depth

None or a single very soft shadow on overlays

Texture: None

## Shapes

Corner radius: 0–4px.

Borders: 1px hairlines in a light neutral

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Navbar, Hero, Product card, FAQ accordion, Newsletter signup, Footer, Collapsible.

Text links over buttons where possible; ghost buttons; plenty of padding in every component.

### Motion

Barely-there: gentle fades and small translations, never decorative.

Animations: Fade-in, Fade-up reveal, Underline slide, Accordion expand, Page transition, Zoom on scroll.

Easing: cubic-bezier(0.25, 1, 0.5, 1) — easeOutQuart. Duration: 200–500ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Remove before you add — cut decoration, then cut copy
- Do: Use spacing as your main hierarchy tool
- Do: Keep the palette to neutrals plus at most one accent
- Don't: Confuse minimal with empty: key information still needs emphasis
- Don't: Hide navigation or affordances to look cleaner (mystery-meat UI)
- Don't: Use very light grey text that fails contrast
- Accessibility: Common failure: pale grey body text and ghost buttons with low-contrast borders. Keep text ≥ 4.5:1 and make interactive elements obviously interactive.

---

**References**

- Example: [MUJI](https://www.muji.com)
- Example: [Vitsœ](https://www.vitsoe.com)
- Example: [COS](https://www.cos.com)
- [Vitsœ — Dieter Rams: ten principles for good design](https://www.vitsoe.com/gb/about/good-design)
- [Nielsen Norman Group — The Characteristics of Minimalism in Web Design](https://www.nngroup.com/articles/characteristics-minimalism/)

<!-- Generated by Specimen Atlas from src/data/languages/minimalism.ts -->