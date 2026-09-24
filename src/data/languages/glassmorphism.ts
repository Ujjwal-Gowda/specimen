import type { Language } from '../../types';

const glassmorphism: Language = {
  id: 'glassmorphism',
  name: 'Glassmorphism',
  aka: ['Frosted glass UI', 'Glass UI', 'Backdrop blur style'],
  category: 'Surface style',
  era: '2020–present; named by Michal Malewicz (Hype4), late 2020',
  origin: 'Frosted glass has long roots — Windows Vista Aero (2006), iOS 7’s blurred control centre (2013), macOS vibrancy and Microsoft Fluent’s Acrylic (2017). The term "glassmorphism" was coined by designer Michal Malewicz of Hype4 in late 2020 after macOS Big Sur, and exploded on Dribbble. CSS backdrop-filter made it practical in browsers.',
  summary: 'Translucent, blurred panels floating over colourful gradient or blob backgrounds, with thin light borders and soft shadows. Layered, luminous and modern.',
  identify: [
    'Semi-transparent white panels (10–40% opacity) with backdrop blur',
    'Vivid gradient or colourful blob background behind the glass',
    'Thin 1px light border that catches "light" on the edge',
    'Soft, diffuse shadows and rounded corners (16–24px)',
    'Layers overlapping to show depth',
  ],
  principles: [
    'Depth through translucency, not shadow alone',
    'The background must be colourful for the glass to read',
    'Keep hierarchy clear with opacity levels',
    'Light edges define shapes',
  ],
  color: {
    strategy: 'Saturated gradient backdrop (violet, magenta, cyan, orange orbs) with white-alpha glass surfaces and white text.',
    palette: [
      { name: 'Deep Indigo', hex: '#1B1340', role: 'background base' },
      { name: 'Electric Violet', hex: '#7B2FF7', role: 'orb 1' },
      { name: 'Hot Magenta', hex: '#F107A3', role: 'orb 2' },
      { name: 'Aqua', hex: '#00D2FF', role: 'orb 3' },
      { name: 'Glass White', hex: '#FFFFFF', role: 'surface at 12–20% opacity' },
    ],
  },
  typography: {
    approach: 'Clean geometric sans in light-to-semibold weights; white text with slight shadow for legibility on glass.',
    display: ['outfit', 'poppins', 'plus-jakarta-sans', 'sora'],
    body: ['outfit', 'inter', 'dm-sans'],
    mono: ['jetbrains-mono'],
    scale: 'Major Third (1.25)',
    notes: 'Poppins and Inter dominate Dribbble glass shots; Outfit and Sora feel fresher.',
  },
  shape: {
    radius: '16–24px',
    borders: '1px solid rgba(255,255,255,0.3–0.5)',
    elevation: 'Soft, large-radius shadows: 0 8px 32px rgba(0,0,0,0.25)',
    texture: 'backdrop-filter: blur(12–24px) saturate(160%); optional noise grain',
  },
  layout: {
    grid: 'Floating card stacks over a full-bleed backdrop; dashboard widgets',
    layouts: ['centered-hero', 'dashboard-shell', 'card-grid', 'bento-layout'],
    density: 'airy',
  },
  imagery: 'Abstract gradient blobs, 3D renders, blurred photography, colourful mesh gradients.',
  motion: {
    character: 'Floating and drifting — orbs move slowly, cards parallax and tilt.',
    animations: ['blob-morph', 'gradient-drift', 'tilt-3d', 'blur-in', 'parallax', 'border-beam'],
    easing: 'cubic-bezier(0.22, 1, 0.36, 1) — easeOutQuint',
    duration: '400–800ms; ambient loops 10–30s',
  },
  components: {
    signature: ['card', 'navbar', 'dialog', 'pricing-table', 'stats-band', 'sheet'],
    notes: 'Glass cards, glass nav bars, glass credit cards and login forms.',
  },
  purposes: ['ai-product', 'web3', 'fintech', 'saas', 'portfolio'],
  avoidFor: ['government', 'docs', 'editorial-news'],
  pairsWith: ['aurora', 'liquid-glass', 'dark-saas', 'bento'],
  dos: [
    'Put glass over colourful, not flat, backgrounds',
    'Use a light 1px border so edges stay defined',
    'Provide a solid fallback when backdrop-filter is unsupported or transparency is reduced',
  ],
  donts: [
    'Put small body text on low-opacity glass',
    'Stack many blurred layers — backdrop-filter is costly on mobile',
    'Use it on busy photographic backgrounds where text can’t be guaranteed legible',
  ],
  a11y: 'Contrast varies with what’s behind the glass — test the worst case. Honour prefers-reduced-transparency with a more opaque surface.',
  examples: [
    { name: 'Hype4 Academy (Michal Malewicz)', url: 'https://hype4.academy' },
    { name: 'Glassmorphism CSS Generator (ui.glass)', url: 'https://ui.glass/generator/' },
    { name: 'CSS Glass generator', url: 'https://css.glass' },
  ],
  references: [
    {
      label: 'Nielsen Norman Group — Glassmorphism: Definition and Best Practices',
      url: 'https://www.nngroup.com/articles/glassmorphism/',
    },
    {
      label: 'MDN — backdrop-filter',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    },
  ],
  tokens: {
    colors: {
      bg: '#1B1340',
      surface: 'rgba(255, 255, 255, 0.12)',
      text: '#FFFFFF',
      muted: 'rgba(255, 255, 255, 0.78)',
      accent: '#F5F3FF',
      accentText: '#2A1B6E',
      border: 'rgba(255, 255, 255, 0.35)',
    },
    fonts: {
      display: '"Outfit", "Poppins", system-ui, sans-serif',
      body: '"Outfit", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    googleFonts: 'family=Outfit:wght@300;400;500;600&family=JetBrains+Mono',
    radius: '20px',
    radiusSm: '14px',
    borderWidth: '1px',
    shadow: '0 8px 32px rgba(10, 5, 40, 0.35)',
    displayWeight: 600,
    displayTracking: '-0.02em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Nebula Pay',
    eyebrow: 'Cards for the future',
    headline: 'Money, with a little shine',
    body: 'A virtual card for every subscription, instant freezes and spending that updates while you watch.',
    cta: 'Get your card',
    media: 'Frosted card',
  },
};

export default glassmorphism;
