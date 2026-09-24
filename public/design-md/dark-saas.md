---
version: "alpha"
name: "Linear-style Dark UI"
description: "A premium, engineered dark aesthetic: precise hairline borders, restrained colour, glows instead of shadows, and the product UI itself as the hero image."
colors:
  background: "#08090A"
  surface: "#121316"
  on-surface: "#F7F8F8"
  on-surface-variant: "#8A8F98"
  primary: "#5E6AD2"
  on-primary: "#FFFFFF"
  outline: "#23252A"
  void: "#08090A"
  graphite: "#121316"
  snow: "#F7F8F8"
  slate: "#8A8F98"
  linear-indigo: "#5E6AD2"
  hairline: "#23252A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: 3.052rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.04em
  headline-md:
    fontFamily: "Inter"
    fontSize: 1.953rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.04em
  title-md:
    fontFamily: "Inter"
    fontSize: 1.25rem
    fontWeight: 600
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
  sm: 8px
  md: 12px
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

# Linear-style Dark UI

*Also known as: Dark Mode SaaS, “Linear look”, Dark glow UI.*

## Overview

A premium, engineered dark aesthetic: precise hairline borders, restrained colour, glows instead of shadows, and the product UI itself as the hero image.

**Origin (2019–present; popularised by Linear and Vercel).** Linear (founded 2019 by Karri Saarinen, Tuomas Artman and Jori Lallo) set a template for developer-tool marketing sites that has been copied widely: near-black canvas, 1px low-contrast borders, grey-to-white gradient headlines, a soft radial glow behind the product screenshot and tightly tracked Inter. Vercel (with its Geist design system), Raycast, Resend and Supabase each refined the formula, and it became the default look for AI and dev-tool launches.

**How to recognise it**

- Near-black background (#08–#0F), not pure black
- Headlines with a white-to-grey vertical gradient and tight negative tracking
- Soft coloured radial glow behind the hero or product shot
- Cards with 1px borders and a brighter top-edge highlight
- Pill “announcement” badges above the hero; keyboard shortcuts (kbd) in copy

**Principles**

- Precision: every border, radius and gap is on-system
- Show the product: real UI screenshots, not illustrations
- Light as material: glows, gradients and highlights replace shadows
- Keyboard-first, fast-feeling interactions

## Colors

Layered near-blacks and greys with one brand hue (indigo, violet or green) used for glows, focus and primary actions.

| Swatch | Hex | Role |
|---|---|---|
| Void | `#08090A` | background |
| Graphite | `#121316` | surface |
| Snow | `#F7F8F8` | text |
| Slate | `#8A8F98` | muted text |
| Linear Indigo | `#5E6AD2` | accent |
| Hairline | `#23252A` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

One neo-grotesque family for everything, tracked tight in headlines, plus a monospace for code, shortcuts and metadata.

- **Display: Inter** — Neo-grotesque, rsms (OFL).
- **Body: Inter** — Neo-grotesque, rsms (OFL).
- **Mono: Geist Mono** — Monospace, Vercel (OFL).
- Also fits: Geist, Söhne, Switzer.

Modular scale: Major Third (1.25) from a 16px base.

Headlines at 500–600 weight with -0.03 to -0.045em tracking. Avoid 800+ weights. Use tabular figures in metrics.

## Layout

Centred 12-column grid, max width ~1200px; bento feature sections

Layout patterns: Centered hero, Bento grid, Card grid, Sticky sidebar, Dashboard shell.

Density: balanced. Spacing follows an 8px base (tokens above).

Imagery: High-fidelity product screenshots in dark mode, often tilted in perspective or masked with a fade; abstract line/glow graphics; no photography of people.

## Elevation & Depth

Glow and inner highlight rather than drop shadows

Texture: Optional subtle noise or dotted grid backgrounds

## Shapes

Corner radius: 8–16px on cards, 6–8px on buttons, full pills for badges.

Borders: 1px rgba(255,255,255,0.06–0.1) hairlines; brighter top highlight via gradient border

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 0 0 1px rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.45)`.

Signature components: Navbar, Hero, Logo cloud, Bento grid, Command palette, Keyboard key, Feature grid, Code block, Pricing table, Badge.

Navbar is often a floating translucent pill. Features shown in bento tiles with live UI fragments. Changelog and “Now in beta” badges are common.

### Motion

Crisp and subtle: blur-in reveals, spotlight borders that follow the cursor, animated gradients and line drawings.

Animations: Blur-in, Fade-up reveal, Stagger reveal, Spotlight hover, Gradient text sweep, Shine sweep, Draw SVG.

Easing: cubic-bezier(0.16, 1, 0.3, 1) — easeOutExpo. Duration: 300–700ms.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Use near-black, not #000, and layer surfaces 2–4% lighter
- Do: Keep borders hairline and consistent
- Do: Put a real product screenshot in the hero
- Do: Reserve the brand colour for glow, focus and primary actions
- Don't: Don’t use heavy drop shadows on dark backgrounds
- Don't: Don’t set long body copy in grey below 4.5:1
- Don't: Don’t stack multiple glows of different hues
- Don't: Don’t copy Linear’s exact gradient and layout wholesale
- Accessibility: Muted grey text on near-black often fails contrast: Slate #8A8F98 on #08090A is ~6:1, but don’t go darker. Gradient-clipped headlines need a solid colour fallback. Provide a light theme or honour prefers-color-scheme where the product supports it.

---

**References**

- Example: [Linear](https://linear.app)
- Example: [Vercel](https://vercel.com)
- Example: [Raycast](https://www.raycast.com)
- Example: [Resend](https://resend.com)
- Example: [Supabase](https://supabase.com)
- [Linear DESIGN.md (getdesign.md)](https://getdesign.md/linear.app/design-md)
- [Vercel DESIGN.md (getdesign.md)](https://getdesign.md/vercel/design-md)
- [Raycast DESIGN.md (getdesign.md)](https://getdesign.md/raycast/design-md)
- [Resend DESIGN.md (getdesign.md)](https://getdesign.md/resend/design-md)
- [Vercel Geist design system](https://vercel.com/geist)

<!-- Generated by Specimen Atlas from src/data/languages/dark-saas.ts -->