---
version: "alpha"
name: "Web Brutalism"
description: "Raw, honest and often confrontational: browser-default fonts, visible borders, blue underlined links, unapologetic layouts and almost no styling. Honest to the medium, intentionally unpolished."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  on-surface-variant: "#333333"
  primary: "#0000EE"
  on-primary: "#FFFFFF"
  outline: "#000000"
  pure-white: "#FFFFFF"
  pure-black: "#000000"
  link-blue: "#0000EE"
  visited-purple: "#551A8B"
  highlighter-yellow: "#FFFF00"
typography:
  display-lg:
    fontFamily: "Courier Prime"
    fontSize: 0.135rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "Courier Prime"
    fontSize: 0.301rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "Courier Prime"
    fontSize: 0.67rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Courier Prime"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "Courier Prime"
    fontSize: 1.493rem
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

# Web Brutalism

*Also known as: Brutalist Web Design, Raw HTML aesthetic, Anti-design (adjacent).*

## Overview

Raw, honest and often confrontational: browser-default fonts, visible borders, blue underlined links, unapologetic layouts and almost no styling. Honest to the medium, intentionally unpolished.

**Origin (2014–present; named by Pascal Deville’s brutalistwebsites.com (2014)).** Borrowed from Brutalist architecture (béton brut, "raw concrete" — Le Corbusier, Alison & Peter Smithson), web brutalism is a reaction against templated, polished UI. Pascal Deville’s brutalistwebsites.com (2014) catalogued sites that look deliberately unstyled: default fonts, visible structure, harsh contrasts. David Bryant Copeland’s "Brutalist Web Design" guidelines (2017) framed a gentler, principle-based version: content is readable on all reasonable screens, only hyperlinks and buttons respond to clicks, decoration only when it helps.

**How to recognise it**

- System or default fonts — Times New Roman, Courier, Arial — or monospace everywhere
- Blue underlined links, visited purple, visible borders and tables
- Harsh contrast, clashing colours or pure black-and-white
- Dense text, little white-space polish, left-heavy layouts
- Visible structure: boxes, rules, raw lists

**Principles**

- Honesty to materials: HTML looks like HTML
- Content first; decoration only when it serves the content
- Only links and buttons respond to clicks (Copeland)
- Reject the homogenised template look

## Colors

Pure black on white, or deliberately clashing high-saturation colours; browser link colours as accents.

| Swatch | Hex | Role |
|---|---|---|
| Pure White | `#FFFFFF` | background |
| Pure Black | `#000000` | text |
| Link Blue | `#0000EE` | accent |
| Visited Purple | `#551A8B` | secondary |
| Highlighter Yellow | `#FFFF00` | highlight |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Default serif or monospace faces, big unrefined sizes, no tracking adjustments. Hierarchy with <h1>-sized jumps, not finesse.

- **Display: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- **Body: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- **Mono: Courier Prime** — Monospace, Quote-Unquote Apps (OFL).
- Also fits: Space Mono, IBM Plex Mono, Neue Helvetica.

Modular scale: Browser default heading scale (h1 2em → h6 0.67em) from a 16px base.

Times New Roman and Arial are system fonts — part of the point. Space Mono / Courier Prime give a raw typewriter voice.

## Layout

Often no grid — single column of raw content, or deliberately broken grids and overlapping boxes

Layout patterns: Single-column long-form, Broken grid, Holy Grail layout.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: Unedited photos, screenshots, low-res or dithered images, ASCII art, no stock photography.

## Elevation & Depth

None

Texture: None, or pixelated/low-res imagery used on purpose

## Shapes

Corner radius: 0px.

Borders: 2–4px solid black, table borders, dashed outlines

## Components

Borders: 2px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Link, Data table, Navbar, Footer, Code block, Divider.

Text links over buttons; raw <table> data; <marquee>-style banners.

### Motion

Little or none; when used, abrupt (steps(), instant state changes, marquee).

Animations: Marquee, Glitch effect, Typewriter effect.

Easing: steps(4) or linear — no smoothing. Duration: 0–200ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Commit fully — half-brutal looks broken, not intentional
- Do: Keep it fast and semantic; brutalism is honest HTML
- Do: Use the rawness to foreground strong content
- Don't: Sacrifice usability: navigation must still be obvious
- Don't: Use it for trust-critical products (banking, health)
- Don't: Confuse brutalism with neo-brutalism’s polished colour pops
- Accessibility: Plain HTML is often very accessible — keep it that way: real headings, underlined links, focus outlines. Clashing colour combos must still pass contrast.

---

**References**

- Example: [Brutalist Websites (Pascal Deville)](https://brutalistwebsites.com)
- Example: [Craigslist](https://www.craigslist.org)
- Example: [Berkshire Hathaway](https://www.berkshirehathaway.com)
- [Brutalist Web Design — David Bryant Copeland](https://brutalist-web.design)
- [Nielsen Norman Group — Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign/)

<!-- Generated by Specimen Atlas from src/data/languages/brutalism.ts -->