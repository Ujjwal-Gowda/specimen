import type { Language } from '../../types';

const neumorphism: Language = {
  id: 'neumorphism',
  name: 'Neumorphism',
  aka: ['Soft UI', 'Neomorphism', 'New Skeuomorphism'],
  category: 'Surface style',
  era: '2019–2021 peak; Dribbble trend from Alexander Plyuto’s "Skeuomorph Mobile Banking" (Dec 2019)',
  origin: 'Took off after Alexander Plyuto’s Dribbble shot "Skeuomorph Mobile Banking" (December 2019). Designer Jason Kelley reportedly called it "new skeuomorphism", contracted to "neumorphism"; Michal Malewicz’s article "Neumorphism in user interfaces" popularised the name. Elements appear extruded from, or pressed into, a single soft surface using two opposing shadows (light top-left, dark bottom-right). Its low contrast made it notorious for accessibility problems.',
  summary: 'Elements extruded from — or pressed into — the same soft-coloured surface using paired light and dark shadows. Tactile, calm and monochrome, but low-contrast by nature.',
  identify: [
    'Background and elements share the same colour',
    'Dual shadows: light (top-left) and dark (bottom-right)',
    'Pressed/inset states for active buttons and inputs',
    'Soft, rounded shapes; pastel or grey monochrome palette',
    'Very few borders — edges come from shadow only',
  ],
  principles: [
    'Light source is always top-left and consistent',
    'Depth through extrusion, not colour',
    'One surface colour, tonal variations only',
    'Use accent colour only for critical state',
  ],
  color: {
    strategy: 'Monochromatic soft surface (#E0E5EC classic), with light and dark tints of the same hue for shadows; one small accent.',
    palette: [
      { name: 'Soft Surface', hex: '#E0E5EC', role: 'background & surface' },
      { name: 'Highlight', hex: '#FFFFFF', role: 'light shadow' },
      { name: 'Shade', hex: '#A3B1C6', role: 'dark shadow' },
      { name: 'Slate Ink', hex: '#2F3A4A', role: 'text' },
      { name: 'Indigo Accent', hex: '#3D56B2', role: 'accent' },
    ],
  },
  typography: {
    approach: 'Rounded or geometric sans, medium weights, generous size to offset low surface contrast.',
    display: ['nunito', 'poppins', 'quicksand', 'manrope'],
    body: ['nunito', 'manrope', 'dm-sans'],
    mono: ['jetbrains-mono'],
    scale: 'Minor Third (1.2)',
    notes: 'Keep text darker than feels natural — the soft surface already lowers perceived contrast.',
  },
  shape: {
    radius: '12–30px, circles for icon buttons',
    borders: 'None (or 1px with same-hue highlight)',
    elevation: 'Raised: 9px 9px 16px rgba(163,177,198,.6), -9px -9px 16px rgba(255,255,255,.5); Pressed: the same as inset',
    texture: 'Optional subtle gradient from light to shade on raised surfaces',
  },
  layout: {
    grid: 'Centred control panels, dashboards and mobile-first widget grids',
    layouts: ['centered-hero', 'dashboard-shell', 'card-grid'],
    density: 'airy',
  },
  imagery: 'Minimal — icons, dials, sliders, device controls. Photography rarely.',
  motion: {
    character: 'Soft press and release — shadows swap from outset to inset.',
    animations: ['spring-press', 'fade-in', 'progress-fill', 'count-up'],
    easing: 'cubic-bezier(0.4, 0, 0.2, 1) — standard ease',
    duration: '150–250ms',
  },
  components: {
    signature: ['button', 'switch', 'slider', 'icon-button', 'card', 'progress-bar'],
    notes: 'Smart-home controls, music players, calculators, dials.',
  },
  purposes: ['wellness', 'portfolio', 'ai-product'],
  avoidFor: ['government', 'healthcare', 'docs', 'fintech', 'ecommerce'],
  pairsWith: ['minimalism', 'claymorphism', 'skeuomorphism'],
  dos: [
    'Use it for a few hero controls, not a whole product',
    'Add clear state changes (colour or icon) besides the shadow',
    'Keep text contrast ≥ 4.5:1 even if the shapes are soft',
  ],
  donts: [
    'Rely on shadows alone to show buttons vs. static cards',
    'Use on dark or saturated backgrounds (it muddies)',
    'Build forms entirely in soft UI — inputs become invisible',
  ],
  a11y: 'The style’s weakest point: element boundaries often fall below 3:1 (WCAG 1.4.11 Non-text Contrast). Add borders or colour for state and keep focus rings.',
  examples: [
    { name: 'Neumorphism.io generator', url: 'https://neumorphism.io' },
    { name: 'Dribbble — neumorphism tag', url: 'https://dribbble.com/tags/neumorphism' },
    { name: 'GitHub — neumorphism topic', url: 'https://github.com/topics/neumorphism' },
  ],
  references: [
    {
      label: 'Michal Malewicz — Neumorphism in user interfaces (UX Collective)',
      url: 'https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6',
    },
    {
      label: 'WCAG 2.2 — 1.4.11 Non-text Contrast',
      url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html',
    },
  ],
  tokens: {
    colors: {
      bg: '#E0E5EC',
      surface: '#E0E5EC',
      text: '#2F3A4A',
      muted: '#5A6475',
      accent: '#3D56B2',
      accentText: '#FFFFFF',
      border: 'transparent',
    },
    fonts: {
      display: '"Nunito", "Varela Round", system-ui, sans-serif',
      body: '"Nunito", system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    googleFonts: 'family=Nunito:wght@400;600;800&family=JetBrains+Mono',
    radius: '22px',
    radiusSm: '14px',
    borderWidth: '0px',
    shadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.55)',
    displayWeight: 800,
    displayTracking: '-0.01em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Hearth',
    eyebrow: 'Smart home, softly',
    headline: 'Every room at your fingertip',
    body: 'Lights, heat and music on one calm panel. No clutter, no apps within apps.',
    cta: 'Explore',
    media: 'Thermostat dial',
  },
};

export default neumorphism;
