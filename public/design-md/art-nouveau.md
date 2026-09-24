---
version: "alpha"
name: "Art Nouveau"
description: "Organic, ornamental and flowing: whiplash curves, botanical ornament, framed panels, muted golds and greens, and decorative hand-drawn lettering. Craft and nature as luxury."
colors:
  background: "#F3EAD7"
  surface: "#FBF5E8"
  on-surface: "#3B2A1E"
  on-surface-variant: "#6B5646"
  primary: "#5C6B3A"
  on-primary: "#FFFFFF"
  outline: "#C49A3A"
  parchment: "#F3EAD7"
  olive-vine: "#5C6B3A"
  gilded-ochre: "#C49A3A"
  mauve: "#9C6B7E"
  sepia-ink: "#3B2A1E"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 11.089rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 4.236rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 1.618rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "EB Garamond"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.618rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 18px
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

# Art Nouveau

*Also known as: Jugendstil, Modern Style, Secession style.*

## Overview

Organic, ornamental and flowing: whiplash curves, botanical ornament, framed panels, muted golds and greens, and decorative hand-drawn lettering. Craft and nature as luxury.

**Origin (c. 1890–1910, Europe).** A total-art movement that swept Europe around 1900: Alphonse Mucha’s posters in Paris, Hector Guimard’s Métro entrances, Victor Horta in Brussels, Gustav Klimt and the Vienna Secession, Charles Rennie Mackintosh in Glasgow and "Jugendstil" in Germany. It took its forms from nature — whiplash curves, flowers, vines, flowing hair — and rejected the historicism of the 19th century. Its decorative lettering influenced the 1960s psychedelic posters.

**How to recognise it**

- Whiplash and S-curves, vines, flowers and flowing hair
- Ornamental frames and arches around content
- Muted earth greens, golds, mauves and cream
- Decorative, hand-drawn display lettering
- Idealised figures (Mucha’s women) in portrait panels

**Principles**

- Nature is the source of all form
- Unite fine art and craft — everything can be beautiful
- Line is the protagonist

## Colors

Muted, harmonious naturals — sage, olive, ochre, mauve — with gold highlights on cream.

| Swatch | Hex | Role |
|---|---|---|
| Parchment | `#F3EAD7` | background |
| Olive Vine | `#5C6B3A` | accent |
| Gilded Ochre | `#C49A3A` | ornament |
| Mauve | `#9C6B7E` | secondary |
| Sepia Ink | `#3B2A1E` | text |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Decorative display lettering for titles (the originals were hand-drawn), with a graceful old-style serif for text.

- **Display: Cormorant Garamond** — Old-style serif, Catharsis Fonts (OFL).
- **Body: EB Garamond** — Old-style serif (OFL).
- Also fits: Fraunces, Cinzel, Lora.

Modular scale: Golden Ratio (1.618) from a 16px base.

True Nouveau faces (Arnold Böcklin, Auriol, Eckmann) are commercial or hard to find; Cormorant’s italic carries the mood for free.

## Layout

Symmetrical, framed compositions with arched panels and borders.

Layout patterns: Centered hero, Single-column long-form, Magazine grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Botanical illustration, portraits in decorative frames, stained glass and ironwork.

## Elevation & Depth

Flat, framed panels

Texture: Paper, gold leaf, fine linework

## Shapes

Corner radius: Arches and organic curves.

Borders: Ornamental double rules and curved frames

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Blog card, Testimonial, Footer.

Frames and dividers carry the style; keep controls simple inside them.

### Motion

Slow and flowing: lines draw themselves, petals unfurl.

Animations: Draw SVG, Fade-in, SVG morph, Ken Burns effect.

Easing: cubic-bezier(0.37, 0, 0.63, 1) — easeInOutSine. Duration: 800–1600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use one ornamental frame motif consistently
- Do: Keep the palette muted with gold highlights
- Do: Use SVG line ornament that scales
- Don't: Use raster ornament that blurs
- Don't: Set body text in decorative faces
- Don't: Over-frame every element
- Accessibility: Ornament must be decorative (aria-hidden); gold on cream usually fails as text — use sepia ink.

---

**References**

- [Art Nouveau (Wikipedia)](https://en.wikipedia.org/wiki/Art_Nouveau)
- [Alphonse Mucha (Wikipedia)](https://en.wikipedia.org/wiki/Alphonse_Mucha)

<!-- Generated by Specimen Atlas from src/data/languages/art-nouveau.ts -->