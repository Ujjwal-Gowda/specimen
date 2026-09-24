# Specimen — design language atlas · project brief

## The original ask (paraphrased)
A reference project covering design languages, typography and
everything else that goes into making a website in different styles for different
purposes — which typefaces, components and animations belong with which design
language. Use it to pick parts when building a site, or show it to clients so they can
choose what they prefer. Use exact names everywhere, go into detail, pull from Refero and
other sources, include DESIGN.md files (or links to them), then have critics rate it and
iterate (max 3 rounds, stop at > 8/10).

## The improved brief

**Job of the product.** A static website (originally zero-build, now Vite + React) that works two ways:
1. **Builder's reference** — look up the exact name of any design language, typeface,
   type classification, component, layout pattern or animation, plus what it pairs with.
2. **Client picker** — a client browses live previews, adds favourites to a brief,
   and sends back a share link. The link opens the same brief on the builder's machine,
   ready to export as Markdown or as a DESIGN.md file.

**Scope — each entity carries its canonical name, its aliases, and cross-references.**

| Library | What each entry carries |
|---|---|
| Design languages (28) | name + aka, origin/era, how to recognise it, principles, palette with named swatches, typography (typeface IDs + scale), shape/elevation, layout, imagery, motion, signature components, best/worst purposes, hybrids it pairs with, do/don't, accessibility notes, real example sites, references, **live themed preview**, **generated DESIGN.md** |
| Typefaces (~90) | exact family name, classification, designer, foundry, year, licence, variable axes, free alternatives for commercial faces, personality, pairings, live specimen |
| Type system | classifications (Vox-ATypI + common names), named modular scales, named pairings, glossary of terms |
| Components (~75) | canonical name + what each major library calls it (shadcn/ui, Radix, MUI, Material 3, Apple HIG, Fluent 2, Bootstrap, Ant Design), anatomy, variants, states, WAI-ARIA pattern, when to use; previews re-theme to any design language |
| Layouts (~22) | named grid/section patterns with wireframes |
| Animations (~50) | name + aka, category, technique, easing curve by name, duration, libraries, accessibility, **live demo** |
| Purposes (~20) | site types → ranked design languages, typefaces, required sections, motion, colour, real examples |
| Colour | named harmonies, the 60-30-10 rule, OKLCH, dark-mode strategies |

**Quality bar.** Real names only, no invented ones. Commercial fonts are flagged as such
and always come with a free alternative. Every preview is live HTML/CSS, never a
screenshot. Works offline apart from Google Fonts. Keyboard-accessible, respects
reduced motion, works at 400px wide.

**Sources.** Refero,
Google Labs DESIGN.md spec (github.com/google-labs-code/design.md), VoltAgent
awesome-design-md / getdesign.md, official docs: m3.material.io,
developer.apple.com/design, fluent2.microsoft.design, WAI-ARIA APG (w3.org/WAI/ARIA/apg),
Google Fonts, Fontshare, foundry sites.

**Review loop.** After the build, three critics (visual designer, front-end developer,
typographer/content strategist) score it out of 10. If the average is > 8, stop.
Otherwise apply their fixes and re-score, at most 3 rounds.
