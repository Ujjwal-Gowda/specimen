---
version: "alpha"
name: "Art Deco"
description: "Geometric glamour: symmetrical compositions, gold hairlines on black, sunburst and chevron ornament, and tall, elegant capitals."
colors:
  background: "#0E0E10"
  surface: "#17171A"
  on-surface: "#F4EBD0"
  on-surface-variant: "#B9A56E"
  primary: "#D4AF37"
  on-primary: "#0E0E10"
  outline: "#5C4B22"
  onyx: "#0E0E10"
  lacquer: "#17171A"
  ivory: "#F4EBD0"
  champagne-gold: "#D4AF37"
  brass: "#B9A56E"
  emerald: "#0F5C4D"
  antique-gold: "#5C4B22"
typography:
  display-lg:
    fontFamily: "Poiret One"
    fontSize: 4.209rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0.06em
  headline-md:
    fontFamily: "Poiret One"
    fontSize: 2.369rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.06em
  title-md:
    fontFamily: "Poiret One"
    fontSize: 1.333rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Josefin Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
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

# Art Deco

*Also known as: Style Moderne, Deco, Streamline Moderne (late variant).*

## Overview

Geometric glamour: symmetrical compositions, gold hairlines on black, sunburst and chevron ornament, and tall, elegant capitals.

**Origin (1920s–1930s; named after the 1925 Paris Exposition).** Named retroactively (the term spread in the 1960s) after the Exposition Internationale des Arts Décoratifs et Industriels Modernes, held in Paris in 1925. Defined by geometric ornament: sunbursts, chevrons, zigzags, stepped ziggurat forms, fans, luxurious materials, and gold on black. Icons include the Chrysler Building (William Van Alen, 1930), A. M. Cassandre’s posters and his typeface Peignot (1937), and the Broadway typeface. The later, sleeker Streamline Moderne of the 1930s added curves and speed lines. On the web it serves hospitality, cocktail bars, galas and Gatsby-themed events.

**How to recognise it**

- Gold (or brass) on black or deep emerald
- Symmetrical, centred compositions
- Sunbursts, fans, chevrons, stepped frames and double rules
- Tall geometric capitals with wide letter-spacing
- Chamfered or stepped corners on frames

**Principles**

- Symmetry and axial composition
- Ornament from pure geometry
- Luxury materials: gold, lacquer, marble
- Verticality and elegance

## Colors

Onyx black ground with champagne gold ornament; ivory text; optional emerald as a jewel tone.

| Swatch | Hex | Role |
|---|---|---|
| Onyx | `#0E0E10` | background |
| Lacquer | `#17171A` | surface |
| Ivory | `#F4EBD0` | text |
| Champagne Gold | `#D4AF37` | accent |
| Brass | `#B9A56E` | muted text |
| Emerald | `#0F5C4D` | jewel tone |
| Antique Gold | `#5C4B22` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Geometric, high-waisted display capitals (Poiret One, Limelight, Cinzel) with wide tracking; a clean geometric sans for body.

- **Display: Poiret One** — Display / decorative (OFL).
- **Body: Josefin Sans** — Geometric sans, Typemade (OFL).
- Also fits: Limelight, Cinzel, Bodoni Moda, Jost*, Cormorant Garamond.

Modular scale: Perfect Fourth (1.333) from a 16px base.

Uppercase headlines with 0.06–0.4em tracking. Poiret One is thin, so use it at large sizes only.

## Layout

Symmetrical, centred axis; modular grid for menus and listings

Layout patterns: Centered hero, Swiss modular grid, Full-bleed hero, Split screen.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Moody, high-contrast photography (cocktails, interiors, architecture), gold line illustrations, geometric patterns.

## Elevation & Depth

None; depth through layered frames

Texture: Sunburst rays, chevrons, fan motifs

## Shapes

Corner radius: 0px; chamfered or stepped corners.

Borders: Gold hairlines, double and stepped frames

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Hero, Navbar, Divider, Card, Button, Pricing table, Footer.

Ornamental dividers and framed menus (priced like pricing tables) are signature elements.

### Motion

Elegant and ceremonial: gold lines drawing in, shine sweeps across gold, slow fades.

Animations: Draw SVG, Shine sweep, Fade-in, Clip-path reveal, Ken Burns effect.

Easing: cubic-bezier(0.65, 0, 0.35, 1) — easeInOutCubic. Duration: 700–1200ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Centre compositions on a strong vertical axis
- Do: Use gold for lines and accents, not for body text
- Do: Frame key content with double or stepped borders
- Do: Keep ornament geometric
- Don't: Don’t use thin display faces for small text
- Don't: Don’t add rounded corners or soft shadows
- Don't: Don’t use more than one jewel tone
- Don't: Don’t let ornament crowd content
- Accessibility: Gold #D4AF37 on black passes (~9:1), but thin display faces at small sizes don’t read well, so keep them ≥ 24px. Uppercase text with wide tracking is slower to read, so keep paragraphs in sentence case.

---

**References**

- [Art Deco — Wikipedia](https://en.wikipedia.org/wiki/Art_Deco)
- [1925 International Exhibition of Modern Decorative and Industrial Arts](https://en.wikipedia.org/wiki/International_Exhibition_of_Modern_Decorative_and_Industrial_Arts)
- [Poiret One — Google Fonts](https://fonts.google.com/specimen/Poiret+One)

<!-- Generated by Specimen Atlas from src/data/languages/art-deco.ts -->