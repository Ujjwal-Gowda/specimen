---
version: "alpha"
name: "Corporate Memphis"
description: "Friendly, inclusive-looking flat illustration of people at work and play, set on pastel blobs with rounded sans type: approachable, optimistic and deliberately neutral."
colors:
  background: "#FFF9F2"
  surface: "#FFFFFF"
  on-surface: "#22223B"
  on-surface-variant: "#5C5C7A"
  primary: "#4C3BCF"
  on-primary: "#FFFFFF"
  outline: "#EDE3D6"
  cream: "#FFF9F2"
  charcoal: "#22223B"
  indigo: "#4C3BCF"
  lilac: "#C9B6FF"
  peach: "#FFB199"
  sunny: "#FFD66B"
  seafoam: "#7ED8C2"
typography:
  display-lg:
    fontFamily: "Poppins"
    fontSize: 3.052rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Poppins"
    fontSize: 1.953rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-md:
    fontFamily: "Poppins"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Nunito"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "ui-monospace"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 24px
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

# Corporate Memphis

*Also known as: Alegria style, Big Tech art style, Flat human illustration.*

## Overview

Friendly, inclusive-looking flat illustration of people at work and play, set on pastel blobs with rounded sans type: approachable, optimistic and deliberately neutral.

**Origin (2017–present).** The flat, pastel illustration style of faceless people with small heads, oversized limbs and non-realistic skin tones. Its best-known source is Alegria, an illustration system created by the studio Buck for Facebook in 2017. It spread across tech onboarding screens and landing pages (Slack, Airbnb, Google and countless startups) and through free kits such as Pablo Stanley’s Humaaans (2018). Around 2020 the nickname “Corporate Memphis”, a nod to Memphis Design’s colours and shapes, became shorthand for, and a critique of, its ubiquity.

**How to recognise it**

- Flat illustrated figures with tiny heads and long, bendy limbs
- Skin in purples, blues and oranges rather than realistic tones
- Pastel organic blobs behind illustrations and sections
- Rounded geometric sans type, soft pill buttons
- Lots of white or cream space; no photography

**Principles**

- Approachability: nothing intimidating or technical
- Inclusivity through abstraction
- Soft shapes and pastel colour
- Illustration explains abstract software

## Colors

Cream ground, a strong indigo for actions, and a bouquet of pastels (lilac, peach, sunny, seafoam) for illustration and blobs.

| Swatch | Hex | Role |
|---|---|---|
| Cream | `#FFF9F2` | background |
| Charcoal | `#22223B` | text |
| Indigo | `#4C3BCF` | accent |
| Lilac | `#C9B6FF` | illustration |
| Peach | `#FFB199` | illustration |
| Sunny | `#FFD66B` | illustration |
| Seafoam | `#7ED8C2` | illustration |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Rounded geometric or friendly grotesk headlines; soft humanist or geometric body.

- **Display: Poppins** — Geometric sans, Indian Type Foundry (OFL).
- **Body: Nunito** — Rounded sans (OFL).
- Also fits: Plus Jakarta Sans, Circular, GT Walsheim, DM Sans, Figtree.

Modular scale: Major Third (1.25) from a 16px base.

Semibold/bold headlines, sentence case, generous line height. Avoid condensed or high-contrast faces.

## Layout

Alternating split sections (illustration / copy), feature card grids

Layout patterns: Split hero, Z-pattern, Card grid, Centered hero.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Commissioned or kit-based flat vector illustration of people, objects and abstract shapes. Lottie animations of the same characters.

## Elevation & Depth

Soft tinted shadows or none

Texture: Flat fills and organic blobs

## Shapes

Corner radius: 20–28px cards, full pills for buttons.

Borders: Rare; separation through pastel fills

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 10px 30px -12px rgba(76, 59, 207, 0.25)`.

Signature components: Hero, Feature grid, Testimonial, Empty state, Pricing table, FAQ accordion, CTA band.

Empty states and onboarding are where the illustrations shine.

### Motion

Gentle and friendly: illustrations wave, blobs morph, cards lift.

Animations: Fade-up reveal, Stagger reveal, Blob morph, Hover lift, Spring press, Draw SVG.

Easing: cubic-bezier(0.34, 1.3, 0.64, 1) — soft overshoot. Duration: 300–600ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Commission a distinct character style to avoid looking generic
- Do: Use illustration to explain, not decorate
- Do: Keep a single strong accent for actions
- Do: Tint blobs from the illustration palette
- Don't: Don’t use off-the-shelf kits unmodified on a brand site
- Don't: Don’t mix illustration styles
- Don't: Don’t use it for premium or luxury positioning
- Don't: Don’t let blobs sit behind body text
- Accessibility: Decorative illustrations get empty alt text; explanatory ones need descriptive alt. Pastel fills need dark text (#22223B passes on all palette pastels).

---

**References**

- Example: [Humaaans (illustration kit)](https://www.humaaans.com)
- [Corporate Memphis — Wikipedia](https://en.wikipedia.org/wiki/Corporate_Memphis)
- [Memphis Group — Wikipedia (the original)](https://en.wikipedia.org/wiki/Memphis_Group)

<!-- Generated by Specimen Atlas from src/data/languages/corporate-memphis.ts -->