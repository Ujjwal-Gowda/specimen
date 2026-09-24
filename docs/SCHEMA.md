# Data schema & canonical IDs

All data lives in `src/data/` as typed TypeScript modules; the authoritative shapes are
the interfaces in `src/types.ts` (this document explains them). Cross-references are plain
string IDs; `npm run validate` (and `npm test`) fail on any ID that doesn't resolve, so the
lists below are a guide, not the source of truth.

---

## Canonical ID lists

### Design languages — 47
swiss, bauhaus, minimalism, flat, material3, liquid-glass, fluent2, brutalism,
neobrutalism, glassmorphism, neumorphism, claymorphism, skeuomorphism, bento,
editorial, quiet-luxury, dark-saas, aurora, y2k, vaporwave, memphis,
corporate-memphis, terminal, organic, art-deco, pixel, maximalism, kinetic-type,
art-nouveau, constructivism, mid-century-modern, psychedelic, swiss-punk, grunge,
material-1, metro, ibm-carbon, scandinavian, wabi-sabi, utilitarian, frutiger-aero,
retro-futurism, cyberpunk, acid-graphics, anti-design, risograph, solarpunk

### Typefaces (`ATLAS.typefaces`)
Neo-grotesque / grotesque: helvetica-neue, neue-haas-grotesk, akzidenz-grotesk, inter,
roboto, sf-pro, segoe-ui-variable, suisse-intl, neue-montreal, geist, sohne, gt-america,
aeonik, switzer, schibsted-grotesk, hanken-grotesk, archivo, archivo-black, public-sans,
work-sans, instrument-sans, mona-sans, onest, figtree
Geometric: futura, jost, poppins, montserrat, dm-sans, plus-jakarta-sans, manrope,
outfit, sora, circular, gt-walsheim, satoshi, general-sans, josefin-sans, urbanist
Humanist sans: gill-sans, open-sans, source-sans-3, lato, ibm-plex-sans, nunito,
fira-sans, frutiger
Rounded / soft: quicksand, fredoka, baloo-2, varela-round
Grotesk display / quirky: space-grotesk, syne, unbounded, clash-display,
cabinet-grotesk, bricolage-grotesque, neue-machina, big-shoulders-display
Condensed / impact: bebas-neue, anton, oswald, league-gothic, druk, barlow-condensed
Serif — old-style / garalde: eb-garamond, cormorant-garamond, libre-caslon, lora,
crimson-pro
Serif — transitional: libre-baskerville, source-serif-4, newsreader, merriweather,
tiempos, gt-sectra, ibm-plex-serif
Serif — didone / high-contrast display: playfair-display, bodoni-moda, dm-serif-display,
abril-fatface, instrument-serif, canela, ogg, pp-editorial-new, gloock
Serif — soft / wonky: fraunces, young-serif, recoleta
Slab: roboto-slab, zilla-slab, alfa-slab-one, rockwell, arvo
Monospace: jetbrains-mono, ibm-plex-mono, geist-mono, space-mono, fira-code,
courier-prime, berkeley-mono, vt323
Display / decorative: poiret-one, limelight, cinzel, monoton, bungee, righteous,
shrikhand, rubik-mono-one, orbitron, audiowide, michroma, press-start-2p, silkscreen,
unifrakturmaguntia
Script / hand: pacifico, caveat, dancing-script

### Type classifications (`ATLAS.classifications`)
old-style, transitional, didone, slab, clarendon, grotesque, neo-grotesque, geometric,
humanist-sans, rounded, monospace, display,
script, blackletter, condensed

### Components (`ATLAS.components`)
Navigation: navbar, mega-menu, sidebar-nav, breadcrumb, tabs, segmented-control,
pagination, stepper, command-palette, footer, bottom-nav, search-bar
Page sections: hero, cta-band, logo-cloud, feature-grid, bento-grid, testimonial,
testimonial-wall, pricing-table, comparison-table, faq-accordion, stats-band, timeline,
team-grid, newsletter-signup, blog-card, product-card, gallery-masonry, marquee-band,
cookie-banner
Actions: button, icon-button, fab, link, toggle-group, dropdown-menu, context-menu
Inputs: input, textarea, select, combobox, checkbox, radio-group, switch, slider,
date-picker, file-upload, otp-input, rating
Feedback: toast, alert-banner, progress-bar, spinner, skeleton, empty-state, badge,
tooltip
Overlays: dialog, alert-dialog, drawer, sheet, popover, lightbox
Data display: card, avatar, avatar-group, chip, tag, data-table, accordion, carousel,
code-block, kbd, divider, video-player, scroll-progress

### Animations (`ATLAS.animations`) — each should have a matching demo in `ATLAS.demos`
Entrance: fade-in, fade-up-reveal, stagger-reveal, scale-in, blur-in, clip-path-reveal
Text: split-text-reveal, typewriter, text-scramble, word-rotator, kinetic-type-anim,
gradient-text-sweep
Scroll: parallax, scroll-scrubbed, sticky-stack, horizontal-scroll, pinned-section,
smooth-scroll, zoom-on-scroll, scroll-progress-indicator, count-up
Hover & cursor: hover-lift, magnetic-button, tilt-3d, underline-slide, shine-sweep,
spotlight-hover, cursor-follower, image-reveal-hover
Feedback: ripple, spring-press, button-loading-morph, confetti, shake-error
Loading: shimmer-skeleton, spinner-rotate, dots-loader, progress-fill
Transition: page-transition, shared-element-transition, flip-layout, accordion-expand,
toast-slide, modal-zoom
Ambient: gradient-drift, aurora-bg, blob-morph, noise-grain, glitch, neon-flicker,
ken-burns, marquee-scroll, draw-svg, pixel-dissolve

### Layouts (`ATLAS.layouts`)
split-hero, centered-hero, full-bleed-hero, bento-layout, modular-grid, twelve-col-grid,
asymmetric-grid, broken-grid, z-pattern, f-pattern, masonry, holy-grail, sidebar-docs,
single-column-longform, magazine-multicolumn, card-grid, split-screen, fullpage-snap,
scrollytelling, horizontal-scroll-layout, sticky-sidebar, dashboard-shell

### Purposes (`ATLAS.purposes`)
saas, devtool, ai-product, fintech, healthcare, ecommerce, luxury-brand, agency,
portfolio, editorial-news, docs, restaurant, nonprofit, education, gaming, web3,
real-estate, event, kids, wellness, personal-blog, government

---

## Object shapes

### Language
```js
{
  id: 'swiss', name: 'International Typographic Style', aka: ['Swiss Style'],
  category: 'Movement' | 'Platform system' | 'Surface style' | 'Aesthetic' | 'Layout-led',
  era: '1950s–60s, Zürich & Basel', origin: 'one paragraph',
  summary: '2–3 sentences',
  identify: ['how to recognise it', ...],            // 4–6 bullets
  principles: ['...'],                                // 3–6
  color: { strategy: '...', palette: [{ name: 'Signal Red', hex: '#E30613', role: 'accent' }] },
  typography: { approach: '...', display: [typefaceIds], body: [ids], mono: [ids],
                scale: 'Perfect Fourth (1.333)', notes: '...' },
  shape: { radius: '0px', borders: '...', elevation: '...', texture: '...' },
  layout: { grid: '...', layouts: [layoutIds], density: 'airy | balanced | dense' },
  imagery: '...',
  motion: { character: '...', animations: [animationIds], easing: 'cubic-bezier(...) — name', duration: '...' },
  components: { signature: [componentIds], notes: '...' },
  purposes: [purposeIds], avoidFor: [purposeIds], pairsWith: [languageIds],
  dos: ['...'], donts: ['...'], a11y: '...',
  examples: [{ name: 'Site', url: 'https://...' }],   // real, live sites
  references: [{ label: '...', url: 'https://...' }],
  tokens: {                                           // drives the preview + DESIGN.md
    colors: { bg, surface, text, muted, accent, accentText, border },
    fonts: { display: '"Font", fallback', body: '...', mono: '...' },
    googleFonts: 'family=Inter:wght@400;700&family=...',   // css2 query, or ''
    radius: '0px', radiusSm: '0px', borderWidth: '1px', shadow: 'none',
    displayWeight: 700, displayTracking: '-0.02em', displayTransform: 'none'
  },
  sample: { brand: 'Nordlicht', eyebrow: '...', headline: '...', body: '...', cta: '...' }
}
```

### Typeface
```js
{ id, name: 'Inter', classification: 'neo-grotesque', designer: 'Rasmus Andersson',
  foundry: 'rsms', year: 2017, license: 'OFL' | 'Commercial' | 'Fontshare (ITF Free Font License)' | 'System font' | 'Free for personal use',
  source: { label: 'Google Fonts', url: 'https://...' },
  googleFamily: 'Inter:wght@400;600;800' | null,     // null if not on Google Fonts
  previewFamily: '"Inter"',                          // CSS family used for the specimen (a free lookalike when commercial)
  freeAlternatives: [typefaceIds], variable: true, axes: 'wght 100–900, opsz 14–32',
  personality: ['neutral', 'screen-first'], bestFor: '...', languages: [languageIds],
  pairsWith: [typefaceIds], notes: '...' }
```

### Component
```js
{ id, name: 'Dialog', category: 'Overlays',
  aliases: { shadcn: 'Dialog', radix: 'Dialog', mui: 'Dialog', material3: 'Dialog',
             hig: 'Alert / Sheet', fluent: 'Dialog', bootstrap: 'Modal', antd: 'Modal' },
  summary, anatomy: ['Overlay (scrim)', 'Container', 'Title', ...], variants: [], states: [],
  aria: 'WAI-ARIA APG: Dialog (Modal) — role="dialog", aria-modal, focus trap',
  whenToUse, avoid, languages: [languageIds],
  preview: '<html using .ui-* primitives>' | '' }
```

### Animation
```js
{ id, name: 'Fade-up reveal', aka: ['Scroll reveal', 'Slide-up fade'], category: 'Entrance',
  summary, technique: 'IntersectionObserver toggles a class; transform + opacity only',
  snippet: 'short CSS/JS', easing: 'cubic-bezier(0.16, 1, 0.3, 1) — easeOutExpo',
  duration: '600–900ms', libraries: [{ name: 'GSAP ScrollTrigger', url }],
  languages: [languageIds], a11y: 'Disable under prefers-reduced-motion' }
```
Demos: `src/demos/{core,extra,more}.js` export `{ 'fade-up-reveal': el => { /* build inside el */ return cleanup } }`

### Layout
```js
{ id, name: 'Bento grid', aka: [], summary, bestFor, languages: [ids],
  wire: { cols: 'repeat(4, 1fr)', rows: 'repeat(3, 56px)', areas: ['a a b c', 'a a d d', 'e f f g'],
          labels: { a: 'Hero tile', b: 'Stat' } } }
```

### Purpose
```js
{ id, name: 'SaaS / B2B software', goals, audience, tone,
  languages: [ranked ids], avoid: [ids], typefaces: [ids], layouts: [ids],
  sections: [componentIds in page order], animations: [ids], color: '...',
  examples: [{ name, url }] }
```

---

### Resource
```ts
{ id, name, url: 'https://…', categories: [resourceCategoryIds], // first = primary
  pricing: 'Free' | 'Freemium' | 'Free trial' | 'Paid', openSource?: true,
  description, pros: ['…'], cons: ['…'], bestFor: 'one line' }
```
Resource categories: inspiration, components, motion, fonts, color, icons, imagery,
generators, mockups, learning, accessibility, build.

---

## The `.ui-*` preview contract (styles/ui.css)

Every design-language preview and every component preview uses the same primitive markup
inside `<div class="ui lang-<id>">`. **css/ui.css** styles the primitives from tokens.
Each language's CSS (styles/languages/<id>.css) then (1) sets the tokens on `.lang-<id>` and
(2) may override primitives, scoped **only** under `.lang-<id>`, to add its signature
(hard shadows, glass blur, extrusion, scanlines, and so on).

Tokens: `--ui-bg --ui-surface --ui-text --ui-muted --ui-accent --ui-accent-text
--ui-border --ui-radius --ui-radius-sm --ui-bw --ui-shadow --ui-font-display
--ui-font-body --ui-font-mono --ui-display-weight --ui-display-tracking
--ui-display-transform`

Primitives:
`.ui-nav .ui-logo .ui-link .ui-btn .ui-btn--ghost .ui-btn--sm .ui-hero .ui-eyebrow
.ui-h1 .ui-h2 .ui-p .ui-row .ui-grid .ui-card .ui-badge .ui-input .ui-switch
.ui-tabs .ui-tab[aria-selected] .ui-avatar .ui-stat .ui-stat-num .ui-list .ui-divider
.ui-kbd .ui-progress .ui-chip`

---

## Round 2 / 3 additions (all shipped)

Languages (+9 planned in round 2, +10 more in round 3): ibm-carbon, frutiger-aero, swiss-punk, grunge,
constructivism, cyberpunk, scandinavian, material-1, metro

Typefaces (+22): univers, din, avenir, gotham, proxima-nova, times-new-roman, georgia,
didot, garamond-premier, baskerville, optima, roboto-flex, google-sans, sf-mono, new-york,
raleway, rubik, rajdhani, share-tech-mono, special-elite, russo-one, ibm-plex-sans-condensed

Classifications (+2): venetian, glyphic

Components (+16): menubar, hover-card, tree-view, split-button, number-field, time-picker,
color-picker, calendar, collapsible, resizable-panels, toolbar, navigation-rail,
announcement-bar, auth-form, contact-form, chart

Animations (+11): pulse-ping, bounce, card-flip, preloader, scroll-velocity-skew,
text-highlight, border-beam, image-distortion, particles, svg-morph, lottie-playback

Preview markup change: the hero is now wrapped as
`<div class="ui-hero-grid"><section class="ui-hero">…</section><div class="ui-media" aria-hidden="true"><span class="ui-media-cap">…</span></div></div>`.
`.ui-media` is an art-directed image slot drawn in CSS only (no images). Every language
should style `.lang-<id> .ui-media` so it evokes that style's imagery (duotone poster for
Swiss, warm paper photo tone for Editorial, stone/linen for Quiet Luxury, blobs for
Organic, product screenshot frame for Dark SaaS, etc.). Optional `sample.media` string =
the caption shown in `.ui-media-cap` (≤ 4 words).
