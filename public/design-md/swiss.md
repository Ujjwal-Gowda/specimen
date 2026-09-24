---
version: "alpha"
name: "International Typographic Style"
description: "Objective, grid-driven design where typography does the work. Asymmetric layouts on a mathematical modular grid, a neo-grotesque sans set flush-left/ragged-right, and generous white space — information first, decoration never."
colors:
  background: "#FFFFFF"
  surface: "#F2F2F2"
  on-surface: "#111111"
  on-surface-variant: "#555555"
  primary: "#E30613"
  on-primary: "#FFFFFF"
  outline: "#111111"
  paper-white: "#FFFFFF"
  process-black: "#111111"
  swiss-red: "#E30613"
  concrete-grey: "#F2F2F2"
  graphite: "#555555"
typography:
  display-lg:
    fontFamily: "Neue Haas Grotesk Display"
    fontSize: 4.209rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.035em
  headline-md:
    fontFamily: "Neue Haas Grotesk Display"
    fontSize: 2.369rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.035em
  title-md:
    fontFamily: "Neue Haas Grotesk Display"
    fontSize: 1.333rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Inter"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "IBM Plex Mono"
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

# International Typographic Style

*Also known as: Swiss Style, Swiss Design, Swiss Modernism.*

## Overview

Objective, grid-driven design where typography does the work. Asymmetric layouts on a mathematical modular grid, a neo-grotesque sans set flush-left/ragged-right, and generous white space — information first, decoration never.

**Origin (1950s–60s, Zürich & Basel, Switzerland).** Grew out of the Zürich School of Arts and Crafts and the Basel School of Design after the Second World War, building on Jan Tschichold’s "Die neue Typographie" (1928). Its codifiers were Josef Müller-Brockmann (whose "Grid Systems in Graphic Design", 1981, is still the standard text), Armin Hofmann and Emil Ruder in Basel, and Max Bill. Akzidenz-Grotesk was the early face; Neue Haas Grotesk (Max Miedinger & Eduard Hoffmann, 1957, renamed Helvetica in 1960) and Univers (Adrian Frutiger, 1957) became its signature. The journal "Neue Grafik" (1958–65) spread it worldwide, and it underpins most corporate identity and wayfinding systems since.

**How to recognise it**

- A visible or strongly implied modular grid; elements snap to columns and baselines
- Neo-grotesque sans (Helvetica, Akzidenz, Univers) set flush-left, ragged-right
- Asymmetric composition with large type and lots of deliberate empty space
- Flat colour, often black, white and one signal red
- Photography or pure geometry instead of illustration
- Numbers, rules and captions used as structure, not ornament

**Principles**

- Clarity and objectivity over personal expression
- The grid is the organising principle for every page
- Hierarchy through size, weight and position — not colour or effects
- Asymmetry creates tension and movement; centred layouts are avoided
- Form follows content: every element must earn its place

## Colors

Monochrome ground with one high-chroma signal colour used sparingly for emphasis.

| Swatch | Hex | Role |
|---|---|---|
| Paper White | `#FFFFFF` | background |
| Process Black | `#111111` | text |
| Swiss Red | `#E30613` | accent |
| Concrete Grey | `#F2F2F2` | surface |
| Graphite | `#555555` | muted |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

One neo-grotesque family in a few weights. Big, tight headlines; small, well-leaded body; captions and numbers in the same family. Flush-left, ragged-right, never justified with rivers.

- **Display: Neue Haas Grotesk Display** — Neo-grotesque, Font Bureau (2010); licensed via Linotype/Monotype (Commercial). Free alternatives: Inter, Schibsted Grotesk.
- **Body: Inter** — Neo-grotesque, rsms (OFL).
- **Mono: IBM Plex Mono** — Monospace, IBM (OFL).
- Also fits: Neue Helvetica, Akzidenz-Grotesk, Univers, Suisse Int'l.

Modular scale: Perfect Fourth (1.333) or Golden Ratio (1.618) for posters from a 16px base.

Commercial originals: Neue Haas Grotesk Display/Text (Font Bureau/Monotype), Helvetica Now, Suisse Int’l (Swiss Typefaces). Free stand-ins: Inter / Inter Tight, Archivo, Schibsted Grotesk.

## Layout

12-column modular grid with a baseline grid; content hangs from column lines, deliberate asymmetry

Layout patterns: Swiss modular grid, 12-column grid, Asymmetric grid, Magazine grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Black-and-white or duotone photography, cropped hard to the grid; abstract geometric forms; objective product photography. No illustration or decorative graphics.

## Elevation & Depth

None; depth comes from scale and overlap, never shadow

Texture: None. Flat ink on paper.

## Shapes

Corner radius: 0px — square corners throughout.

Borders: Hairline and heavy rules (1px and 4–8px) as dividers and column markers

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Navbar, Hero, Feature grid, Data table, Timeline, Footer, Divider.

Rules instead of cards. Numbered lists, index-style navigation, large numerals in stats bands.

### Motion

Minimal and mechanical — things slide along grid lines, text reveals line by line. No bounce.

Animations: Clip-path reveal, Split-text reveal, Fade-up reveal, Underline slide, Marquee.

Easing: cubic-bezier(0.65, 0, 0.35, 1) — easeInOutCubic. Duration: 300–600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Set up the grid first and align everything to it
- Do: Use one type family and build hierarchy with size and weight
- Do: Leave large, intentional areas of white space
- Do: Use red (or one colour) only for the most important element
- Don't: Centre-align body copy or use justified text with rivers
- Don't: Add drop shadows, gradients or rounded cards
- Don't: Mix more than two type families
- Don't: Decorate with icons or illustrations that carry no information
- Accessibility: Naturally strong: high contrast and clear hierarchy. Watch small caption sizes (keep ≥ 12px) and make sure red is never the only signal for state.

---

**References**

- Example: [Swissted (Mike Joyce)](https://www.swissted.com)
- Example: [Experimental Jetset](https://www.experimentaljetset.nl)
- Example: [SBB (Swiss Federal Railways)](https://www.sbb.ch)
- Example: [Lars Müller Publishers](https://www.lars-mueller-publishers.com)
- [Wikipedia — International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- [Book — Josef Müller-Brockmann, "Grid Systems in Graphic Design" (1981)](https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann)

<!-- Generated by Specimen Atlas from src/data/languages/swiss.ts -->