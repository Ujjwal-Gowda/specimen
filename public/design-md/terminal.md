---
version: "alpha"
name: "Terminal / CLI Aesthetic"
description: "The interface pretends to be a terminal: monospace type, prompt glyphs, blinking cursors, phosphor colours and scanlines, signalling speed, power and developer credibility."
colors:
  background: "#0C0F0A"
  surface: "#11160F"
  on-surface: "#C8F7C5"
  on-surface-variant: "#7FB386"
  primary: "#33FF66"
  on-primary: "#0C0F0A"
  outline: "#24452A"
  phosphor-black: "#0C0F0A"
  crt-glass: "#11160F"
  p1-green: "#33FF66"
  soft-phosphor: "#C8F7C5"
  comment-green: "#7FB386"
  p3-amber: "#FFB000"
  grid-line: "#24452A"
typography:
  display-lg:
    fontFamily: "VT323"
    fontSize: 2.488rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-md:
    fontFamily: "VT323"
    fontSize: 1.728rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  title-md:
    fontFamily: "VT323"
    fontSize: 1.2rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: 0.833rem
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

# Terminal / CLI Aesthetic

*Also known as: Hacker UI, Command-line aesthetic, Phosphor terminal.*

## Overview

The interface pretends to be a terminal: monospace type, prompt glyphs, blinking cursors, phosphor colours and scanlines, signalling speed, power and developer credibility.

**Origin (Roots in 1970s–80s video terminals (DEC VT100, 1978); web revival 2010s–present).** Evokes text terminals like the DEC VT100 (1978) and phosphor CRT monitors (green P1 and amber P3 phosphor), plus MS-DOS and Unix shells. On the web it shows up in developer tools, AI agents and personal sites: monospace everything, prompt glyphs ($, >, ❯), blinking block cursors, ASCII art and bracketed commands. Warp, Charm and many CLI-first products use it to signal “built for developers”.

**How to recognise it**

- Monospace type for everything, including headlines
- Prompt glyphs ($ ❯ >), blinking block cursor, typed-out text
- Green or amber phosphor on black; optional scanlines/CRT glow
- Bracketed or underscored buttons: [ Run ] or run_
- ASCII art, box-drawing characters, dashed borders

**Principles**

- Function signalled through form: text is the UI
- Keyboard-first and copy-pasteable
- Honest, unadorned, fast
- One accent colour, like a terminal theme

## Colors

Phosphor-black ground with one terminal colour (green or amber) for text and actions, plus a dim variant for comments.

| Swatch | Hex | Role |
|---|---|---|
| Phosphor Black | `#0C0F0A` | background |
| CRT Glass | `#11160F` | surface |
| P1 Green | `#33FF66` | accent |
| Soft Phosphor | `#C8F7C5` | text |
| Comment Green | `#7FB386` | muted text |
| P3 Amber | `#FFB000` | secondary |
| Grid Line | `#24452A` | border |

Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).

## Typography

Monospace throughout. Use a bitmap-style mono (VT323) for retro display, or a modern coding face for clarity.

- **Display: VT323** — Monospace (OFL).
- **Body: JetBrains Mono** — Monospace, JetBrains (OFL).
- **Mono: JetBrains Mono** — Monospace, JetBrains (OFL).
- Also fits: IBM Plex Mono, Berkeley Mono, Fira Code.

Modular scale: Minor Third (1.2) from a 16px base.

Enable coding ligatures (Fira Code, JetBrains Mono) only in code, not prose. Keep line length ≤ 80ch, the terminal convention.

## Layout

Single column at ~80ch or split panes like a terminal multiplexer

Layout patterns: Single-column long-form, Docs layout, Dashboard shell, Holy Grail layout.

Density: dense. Spacing follows an 8px base (tokens above).

Imagery: ASCII art, terminal recordings (asciinema), screenshots of CLI output. No photography.

## Elevation & Depth

Phosphor glow (text-shadow) instead of shadows

Texture: Scanlines, slight CRT vignette

## Shapes

Corner radius: 0px.

Borders: 1px solid or dashed lines; box-drawing characters

## Components

Borders: 1px solid outline on secondary buttons, inputs and cards. Card shadow: `0 0 12px rgba(51, 255, 102, 0.2)`.

Signature components: Code block, Keyboard key, Command palette, Navbar, Data table, Progress bar, Alert banner.

The install command in a copyable code block is often the primary CTA.

### Motion

Typed, stepped and glitchy: typewriter text, blinking cursors, scramble effects.

Animations: Typewriter effect, Text scramble, Glitch effect, Film grain overlay, Neon flicker, Count-up.

Easing: steps(n) for typing and blinking; linear. Duration: 30–60ms per character; 1s cursor blink.

Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.

## Do's and Don'ts

- Do: Make install commands copyable with one click
- Do: Keep a readable modern mono for body text
- Do: Use the blinking cursor once, not everywhere
- Do: Offer a light theme for long reading
- Don't: Don’t typewriter-animate important content that users must wait for
- Don't: Don’t use pure #00FF00 on #000000 for long text (it vibrates)
- Don't: Don’t overdo scanlines: they reduce legibility
- Don't: Don’t fake commands that don’t work
- Accessibility: Typed-out text must be present in the DOM (or aria-live) immediately. Screen readers should not wait for animation. Blinking must stop after 5 seconds or honour reduced motion (WCAG 2.2.2). Pure green on black can cause halation, so soften it (#C8F7C5 for body).

---

**References**

- Example: [Warp](https://www.warp.dev)
- Example: [Charm](https://charm.sh)
- [Warp DESIGN.md (getdesign.md)](https://getdesign.md/warp/design-md)
- [Ollama DESIGN.md (getdesign.md)](https://getdesign.md/ollama/design-md)
- [VT100 — Wikipedia](https://en.wikipedia.org/wiki/VT100)
- [WCAG 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

<!-- Generated by Specimen Atlas from src/data/languages/terminal.ts -->