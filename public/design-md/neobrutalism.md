---
version: "alpha"
name: "Neo-Brutalism"
description: "Thick black outlines, flat saturated fills and hard offset drop shadows on bold grotesk type. Playful, loud and tactile — buttons look like stickers you can press."
colors:
  background: "#FFF6DA"
  surface: "#FFFFFF"
  on-surface: "#000000"
  on-surface-variant: "#2B2B2B"
  primary: "#FF90E8"
  on-primary: "#000000"
  outline: "#000000"
  gumroad-pink: "#FF90E8"
  butter-yellow: "#FFC900"
  lime: "#B8FF5A"
  pool-cyan: "#23A094"
  ink: "#000000"
  cream: "#FFF6DA"
typography:
  display-lg:
    fontFamily: "Archivo Black"
    fontSize: 5.653rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Archivo Black"
    fontSize: 2.827rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Archivo Black"
    fontSize: 1.414rem
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
    fontFamily: "Space Mono"
    fontSize: 0.707rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 6px
  md: 6px
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

# Neo-Brutalism

*Also known as: Neubrutalism, Neo-brutalist UI, Brutal-pop.*

## Overview

Thick black outlines, flat saturated fills and hard offset drop shadows on bold grotesk type. Playful, loud and tactile — buttons look like stickers you can press.

**Origin (2020–present; popularised by Gumroad’s 2021 rebrand and Figma/FigJam marketing).** A friendlier, product-ready descendant of web brutalism. It keeps the raw black outlines and flat blocks but adds saturated candy colours, hard offset shadows and chunky type. Gumroad’s 2021 redesign (pink #FF90E8, thick borders), FigJam’s launch visuals and many indie SaaS and Web3 sites made it mainstream; Nielsen Norman Group documented it as "neobrutalism" in 2024.

**How to recognise it**

- 2–4px solid black borders on everything interactive
- Hard, unblurred offset shadows (4px 4px 0 #000)
- Saturated flat colours — pink, yellow, lime, cyan
- Chunky grotesk or display type, often oversized
- Buttons that "press" by moving into their shadow

**Principles**

- Make affordances loud and obvious
- Contrast over subtlety
- Personality over polish
- Everything is a flat object on a flat plane

## Colors

Cream or white ground, black ink and outlines, 2–4 saturated flat accents used as block fills.

| Swatch | Hex | Role |
|---|---|---|
| Gumroad Pink | `#FF90E8` | accent |
| Butter Yellow | `#FFC900` | secondary |
| Lime | `#B8FF5A` | highlight |
| Pool Cyan | `#23A094` | tertiary |
| Ink | `#000000` | text & borders |
| Cream | `#FFF6DA` | background |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Heavy grotesk or wide display face for headlines, friendly grotesk for body; tight tracking, big sizes.

- **Display: Archivo Black** — Grotesque, Omnibus-Type (OFL).
- **Body: Space Grotesk** — Grotesque, Florian Karsten Typefaces (OFL).
- **Mono: Space Mono** — Monospace, Colophon Foundry (for Google Design) (OFL).
- Also fits: Cabinet Grotesk, Clash Display, DM Sans, Work Sans.

Modular scale: Augmented Fourth (1.414) from a 16px base.

Gumroad uses Mabry Pro (commercial, Colophon). Archivo Black + Space Grotesk is a strong free pairing.

## Layout

Chunky card grids and stacked blocks; slightly rotated stickers and badges

Layout patterns: Card grid, Bento grid, Split hero, Broken grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Outlined illustrations, stickers, emoji-like icons, photos inside bordered frames, hand-drawn doodles.

## Elevation & Depth

Hard offset shadow: 4px 4px 0 0 #000 (moves to 0 0 on press)

Texture: None; occasional halftone or grid-paper backgrounds

## Shapes

Corner radius: 0–8px (square or slightly rounded).

Borders: 2–4px solid #000 on buttons, cards, inputs and images

## Components

Borders: 3px solid outline on secondary buttons, inputs and cards. Card shadow: `4px 4px 0 0 #000000`.

Signature components: Button, Card, Badge, Marquee band, Pricing table, FAQ accordion, Text input.

Sticker badges, marquee bands, bordered pricing cards, press-in buttons.

### Motion

Tactile and bouncy — buttons press into their shadows, stickers wobble.

Animations: Spring press, Hover lift, Marquee, Shake, Confetti burst, Bounce, Text highlight.

Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack. Duration: 100–250ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use one consistent border width and shadow offset across the UI
- Do: Animate the shadow on press so buttons feel physical
- Do: Limit to 2–4 accents so it stays coherent
- Don't: Blur the shadows — hard offsets are the signature
- Don't: Mix thin and thick borders randomly
- Don't: Use it for sombre or trust-critical subjects
- Accessibility: Black text on the bright accents passes easily; white text on pink or yellow does not. Keep a visible focus ring in addition to the shadow.

---

**References**

- Example: [Gumroad](https://gumroad.com)
- Example: [neobrutalism components](https://www.neobrutalism.dev)
- Example: [FigJam](https://www.figma.com/figjam/)
- [Nielsen Norman Group — Neobrutalism: Definition and Best Practices](https://www.nngroup.com/articles/neobrutalism/)

<!-- Generated by Specimen Atlas from src/data/languages/neobrutalism.ts -->