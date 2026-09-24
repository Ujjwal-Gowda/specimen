---
version: "alpha"
name: "Editorial / Magazine Design"
description: "Pages composed like spreads: a strong serif display voice, generous measure-controlled body text, rules, bylines, pull quotes and art-directed imagery. Hierarchy comes from typography and whitespace, not from UI chrome."
colors:
  background: "#F7F4EE"
  surface: "#FFFFFF"
  on-surface: "#141414"
  on-surface-variant: "#5A5652"
  primary: "#C8102E"
  on-primary: "#FFFFFF"
  outline: "#D9D3C7"
  newsprint: "#F7F4EE"
  ink: "#141414"
  graphite: "#5A5652"
  editorial-red: "#C8102E"
  column-rule: "#D9D3C7"
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: 7.594rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: 3.375rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Playfair Display"
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Newsreader"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "IBM Plex Mono"
    fontSize: 0.667rem
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

# Editorial / Magazine Design

*Also known as: Magazine layout, Editorial web design, Print-inspired web.*

## Overview

Pages composed like spreads: a strong serif display voice, generous measure-controlled body text, rules, bylines, pull quotes and art-directed imagery. Hierarchy comes from typography and whitespace, not from UI chrome.

**Origin (1930s–present in print (Harper’s Bazaar, 1934–58); on the web from 2012 onward).** Rooted in magazine art direction: Alexey Brodovitch at Harper’s Bazaar (1934–1958), Willy Fleckhaus at twen (1959–1970) and Neville Brody at The Face (1981–1986). The web version took off in 2012, when The New York Times published “Snow Fall”, a long-form, scroll-driven feature that made immersive editorial layouts a genre. Since then, publications such as The Verge, Bloomberg Businessweek and The New Yorker have shown that a digital page can carry the typographic authority of print.

**How to recognise it**

- High-contrast serif headlines (Didone or transitional) set large, often with italics
- Bylines, dates, section labels, drop caps and pull quotes
- Hairline and double rules separating stories and columns
- Multi-column grids with asymmetric image placement and captions
- Body text set to a 60–75 character measure with old-style figures

**Principles**

- Typography is the interface: hierarchy through size, weight, style and space
- Art direction per story: the layout serves the content, not a template
- Reading comfort first: measure, leading and contrast tuned for long form
- Restrained colour: ink on paper, with one editorial accent

## Colors

Ink-on-paper neutrals with a single editorial accent used for section labels, links and kickers.

| Swatch | Hex | Role |
|---|---|---|
| Newsprint | `#F7F4EE` | background |
| Ink | `#141414` | text |
| Graphite | `#5A5652` | muted text |
| Editorial Red | `#C8102E` | accent |
| Column Rule | `#D9D3C7` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Serif display for headlines and deks, a text-optimised serif for body, and a mono or grotesk for metadata (bylines, timestamps, captions).

- **Display: Playfair Display** — Didone (OFL).
- **Body: Newsreader** — Transitional serif, Production Type (for Google) (OFL).
- **Mono: IBM Plex Mono** — Monospace, IBM (OFL).
- Also fits: PP Editorial New, GT Sectra, Instrument Serif, Source Serif 4, Libre Baskerville.

Modular scale: Perfect Fifth (1.5) from a 16px base.

Use optical sizes where available (Newsreader, Source Serif 4). Enable old-style figures ("onum") in body copy and small caps for kickers. Keep the body measure at 60–75 characters.

## Layout

12-column grid with asymmetric image spans; single-column long-form for features

Layout patterns: Magazine grid, Single-column long-form, Asymmetric grid, Scrollytelling, 12-column grid.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: Art-directed photography, full-bleed or cropped deliberately, always with captions and credits. Illustrations commissioned per story.

## Elevation & Depth

None; depth comes from layering type over imagery

Texture: Optional paper tone; photographs carry the texture

## Shapes

Corner radius: 0px — print has no rounded corners.

Borders: Hairline (1px) column rules; 3px double rules above sections

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `none`.

Signature components: Navbar, Blog card, Breadcrumb, Newsletter signup, Divider, Masonry gallery, Pagination, Footer.

Story cards are headline-first: kicker, headline, dek, byline, with an optional image. The newsletter sign-up is a core conversion component.

### Motion

Quiet and purposeful. Motion reveals the story (pinned scrollytelling, image reveals) instead of decorating the UI.

Animations: Fade-up reveal, Split-text reveal, Parallax scrolling, Pinned section, Scroll progress indicator, Image reveal on hover.

Easing: cubic-bezier(0.22, 1, 0.36, 1) — easeOutQuint. Duration: 500–900ms for reveals; scroll-linked for scrollytelling.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Set a real type scale and stick to it
- Do: Give every image a caption and credit
- Do: Use a reading-progress indicator on long features
- Do: Let one story per page break the grid
- Don't: Don’t use pill buttons or heavy shadows
- Don't: Don’t justify text on the web without hyphenation
- Don't: Don’t run body text wider than 75 characters
- Don't: Don’t use more than two serif families
- Accessibility: Long-form text needs ≥ 16px body, 1.5+ line height and a strong ink/paper contrast. Drop caps must not break screen-reader text (style ::first-letter; never split the letter into its own element). Scrollytelling must still work with reduced motion.

---

**References**

- Example: [The New Yorker](https://www.newyorker.com)
- Example: [The New York Times](https://www.nytimes.com)
- Example: [The Verge](https://www.theverge.com)
- Example: [WIRED](https://www.wired.com)
- [NYT “Snow Fall” (2012)](https://www.nytimes.com/projects/2012/snow-fall/)
- [The Verge DESIGN.md (getdesign.md)](https://getdesign.md/theverge/design-md)
- [WIRED DESIGN.md (getdesign.md)](https://getdesign.md/wired/design-md)
- [Butterick’s Practical Typography](https://practicaltypography.com)

<!-- Generated by Specimen Atlas from src/data/languages/editorial.ts -->