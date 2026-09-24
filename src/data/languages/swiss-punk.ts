import type { Language } from '../../types';

const swissPunk: Language = {
  id: 'swiss-punk',
  name: 'Swiss Punk',
  aka: ['New Wave typography', 'Basel New Wave', 'Postmodern typography'],
  category: 'Movement',
  era: '1970s–80s, Basel → California',
  origin: 'Wolfgang Weingart, teaching at the Basel School of Design from 1968, broke the rules of the International Typographic Style he had been taught: letterspacing opened up, lines stepped and overlapped, type was set at angles, layered with halftone film and texture. Students including April Greiman and Dan Friedman brought it to the US, where it fed California New Wave and later the digital experiments of Emigre. It is Swiss rigour turned inside out.',
  summary: 'Swiss grids deliberately broken: stepped and angled type, wide letterspacing, layered halftones, bars and rules. Still sans-serif and systematic underneath, but noisy, playful and expressive.',
  identify: [
    'Neo-grotesque type set stepped, rotated or letterspaced wide',
    'Overlapping layers, halftone screens and film textures',
    'Thick bars, rules and dots used as graphic elements',
    'A Swiss grid that is visibly being broken',
    'Limited palette, often black plus one or two spot colours',
  ],
  principles: [
    'Know the grid, then break it on purpose',
    'Typography is image, not just text',
    'Layering and texture create depth and energy',
  ],
  color: {
    strategy: 'Black and paper with one or two bold spot colours; overprint-style layering.',
    palette: [
      { name: 'Offset Black', hex: '#121212', role: 'text' },
      { name: 'Newsprint', hex: '#F1EEE6', role: 'background' },
      { name: 'Process Magenta', hex: '#E5007D', role: 'accent' },
      { name: 'Cyan Film', hex: '#00A0C6', role: 'secondary' },
      { name: 'Halftone Grey', hex: '#8A8A85', role: 'texture' },
    ],
  },
  typography: {
    approach: 'Akzidenz, Helvetica and Univers, but set like image: extreme tracking, steps, rotation, mixed sizes on one line.',
    display: ['akzidenz-grotesk', 'helvetica-neue', 'univers'],
    body: ['univers', 'inter'],
    mono: ['space-mono'],
    scale: 'Irregular — sizes jump rather than step',
    notes: 'Wide letterspacing on small caps text is a signature move.',
  },
  shape: {
    radius: '0px',
    borders: 'Thick bars and hairline rules as composition',
    elevation: 'Layered, overprinted flat planes',
    texture: 'Halftone dots, film grain, screen patterns',
  },
  layout: {
    grid: 'A strict grid that elements visibly escape: rotated blocks, stepped lines.',
    layouts: ['broken-grid', 'asymmetric-grid', 'modular-grid'],
    density: 'balanced',
  },
  imagery: 'High-contrast halftone photos, cut-outs, overlapping film and geometric shapes.',
  motion: {
    character: 'Jumpy and typographic — letters shift, step and overlap.',
    animations: ['split-text-reveal', 'kinetic-type-anim', 'clip-path-reveal', 'glitch'],
    easing: 'steps(6) or cubic-bezier(0.7, 0, 0.3, 1)',
    duration: '300–700ms',
  },
  components: {
    signature: ['hero', 'marquee-band', 'blog-card', 'navbar'],
    notes: 'Works best in posters, event pages and editorial headers rather than dense UI.',
  },
  purposes: ['event', 'agency', 'portfolio', 'editorial-news'],
  avoidFor: ['healthcare', 'government', 'fintech'],
  pairsWith: ['swiss', 'brutalism', 'kinetic-type'],
  dos: [
    'Start from a real grid so the breaks read as intentional',
    'Use letterspacing and rotation on short phrases',
    'Layer a halftone texture under type',
  ],
  donts: [
    'Break body text — keep paragraphs readable',
    'Use more than two spot colours',
    'Rotate interactive controls',
  ],
  a11y: 'Keep rotated or overlapped type decorative; real content and navigation stay horizontal and in reading order.',
  examples: [
    { name: 'April Greiman', url: 'https://www.aprilgreiman.com' },
  ],
  references: [
    { label: 'Wolfgang Weingart (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Wolfgang_Weingart' },
    { label: 'April Greiman (Wikipedia)', url: 'https://en.wikipedia.org/wiki/April_Greiman' },
  ],
  tokens: {
    colors: {
      bg: '#F1EEE6',
      surface: '#FFFFFF',
      text: '#121212',
      muted: '#55544F',
      accent: '#C4006B',
      accentText: '#FFFFFF',
      border: '#121212',
    },
    fonts: {
      display: '"Inter Tight", "Helvetica Neue", Helvetica, sans-serif',
      body: '"Inter", "Helvetica Neue", sans-serif',
      mono: '"Space Mono", ui-monospace, monospace',
    },
    googleFonts: 'family=Inter+Tight:wght@500;800&family=Inter:wght@400;600&family=Space+Mono:wght@400',
    radius: '0px',
    radiusSm: '0px',
    borderWidth: '2px',
    shadow: 'none',
    displayWeight: 800,
    displayTracking: '0.02em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'BASEL 78',
    eyebrow: 'Typografische Monatsblätter',
    headline: 'Type, broken on purpose',
    body: 'A night of posters, film and letterforms that refuse to sit still.',
    cta: 'Get tickets',
    media: 'Halftone study',
  },
};

export default swissPunk;
