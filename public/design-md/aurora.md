---
version: "alpha"
name: "Aurora UI"
description: "Vivid colour used as atmosphere: large blurred blobs of hue behind calm, legible content, often under frosted glass cards. Optimistic, modern and a little dreamy."
colors:
  background: "#F6F7FB"
  surface: "#FFFFFF"
  on-surface: "#0E1330"
  on-surface-variant: "#4A5072"
  primary: "#6B4EFF"
  on-primary: "#FFFFFF"
  outline: "#E3E5F0"
  cloud: "#F6F7FB"
  ink-navy: "#0E1330"
  dusk: "#4A5072"
  electric-violet: "#6B4EFF"
  coral-glow: "#FF7A59"
  aqua-glow: "#22D3EE"
  orchid-glow: "#E040FB"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 3.052rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.035em
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 1.953rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.035em
  title-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 1.25rem
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
    fontFamily: "Geist Mono"
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: 999px
  md: 20px
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

# Aurora UI

*Also known as: Mesh gradient UI, Gradient blur UI, Aurora gradients.*

## Overview

Vivid colour used as atmosphere: large blurred blobs of hue behind calm, legible content, often under frosted glass cards. Optimistic, modern and a little dreamy.

**Origin (2020–present).** Soft, blurred, multi-colour gradients drifting behind content like the northern lights. Stripe’s 2020 homepage, with an animated WebGL mesh gradient behind the hero, became the reference point. Design-trend writers, notably Michal Malewicz, called the look “Aurora UI” in 2021, alongside glassmorphism, which it often accompanies. Design tools (Figma plugins, mesh-gradient generators) and CSS blur filters made it easy to reproduce.

**How to recognise it**

- Large, soft, blurred colour fields (2–4 hues) behind content
- Gradients that slowly drift or morph
- Content on white or translucent frosted cards
- Friendly geometric sans headlines with tight tracking
- Rounded corners and pill buttons, often with gradient fills

**Principles**

- Colour as atmosphere, never behind body text at full strength
- Soft edges everywhere: blur, radius, gentle shadows
- Keep the foreground calm and legible
- Movement is ambient and slow

## Colors

A light (or deep navy) ground with 3–4 saturated glow hues blurred together; one of them doubles as the UI accent.

| Swatch | Hex | Role |
|---|---|---|
| Cloud | `#F6F7FB` | background |
| Ink Navy | `#0E1330` | text |
| Dusk | `#4A5072` | muted text |
| Electric Violet | `#6B4EFF` | accent |
| Coral Glow | `#FF7A59` | gradient |
| Aqua Glow | `#22D3EE` | gradient |
| Orchid Glow | `#E040FB` | gradient |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Modern geometric or grotesk display faces with friendly curves; a clean neutral body face.

- **Display: Plus Jakarta Sans** — Geometric sans, Tokotype (OFL).
- **Body: Inter** — Neo-grotesque, rsms (OFL).
- **Mono: Geist Mono** — Monospace, Vercel (OFL).
- Also fits: General Sans, Satoshi, Manrope, Sora, DM Sans.

Modular scale: Major Third (1.25) from a 16px base.

Headlines 700 weight with -0.03em tracking. Gradient-filled headline words work well in moderation.

## Layout

Centred hero, then card grids and bento sections floating over the gradient

Layout patterns: Centered hero, Bento grid, Card grid, Full-bleed hero.

Density: airy. Spacing follows an 8px base (tokens above).

Imagery: Abstract gradients, 3D renders with soft lighting, product UI on glass cards. Photography only if colour-graded to the palette.

## Elevation & Depth

Large, soft, tinted shadows (e.g. violet at 25–35%)

Texture: Optional film grain over the gradient to avoid banding

## Shapes

Corner radius: 16–24px cards, full pills for buttons and inputs.

Borders: 1px white borders at 60–80% opacity on translucent cards

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 20px 50px -20px rgba(60, 40, 160, 0.35)`.

Signature components: Hero, CTA band, Feature grid, Pricing table, Card, Badge, Newsletter signup.

CTA bands and pricing cards are the natural places for the gradient to glow through frosted surfaces.

### Motion

Ambient and continuous: slowly drifting gradients, morphing blobs, soft blur-in reveals.

Animations: Aurora background, Mesh gradient drift, Blob morph, Blur-in, Fade-up reveal, Film grain overlay.

Easing: ease-in-out (sinusoidal) for ambient loops; cubic-bezier(0.16, 1, 0.3, 1) — easeOutExpo for reveals. Duration: 12–30s ambient loops; 500–800ms reveals.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Blur heavily (40–120px) so hues melt together
- Do: Add fine grain to prevent gradient banding
- Do: Keep text on solid or frosted surfaces
- Do: Pause ambient motion under prefers-reduced-motion
- Don't: Don’t put body text directly on saturated gradients
- Don't: Don’t use more than four hues
- Don't: Don’t animate the gradient quickly
- Don't: Don’t combine with hard neo-brutalist shadows
- Accessibility: Check contrast against the brightest point of the gradient, not the average. Large animated blurs are costly on low-end GPUs, so render as a static image or a single CSS layer and stop the animation when reduced motion is requested.

---

**References**

- Example: [Stripe](https://stripe.com)
- [Stripe DESIGN.md (getdesign.md)](https://getdesign.md/stripe/design-md)
- [MDN — radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [MDN — filter: blur()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur)

<!-- Generated by Specimen Atlas from src/data/languages/aurora.ts -->