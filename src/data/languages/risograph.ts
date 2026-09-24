import type { Language } from '../../types';

const risograph: Language = {
  id: 'risograph',
  name: 'Risograph',
  aka: ['Riso print', 'Riso aesthetic', 'Zine style'],
  category: 'Surface style',
  era: 'Riso Kagaku duplicators from 1980; design trend 2010s–present',
  origin: 'Risograph machines (Riso Kagaku, Japan, first sold in 1980) were built for cheap high-volume office copying. Artists and independent publishers adopted them for zines and posters: each colour is a separate stencil drum with vivid soy-based spot inks (Fluorescent Pink, Blue, Yellow), producing grainy textures, overprinted colour mixes and slightly misregistered layers. The look moved to the web as a warm, crafty counterpoint to slick digital gradients.',
  summary: 'Two or three fluorescent spot inks overprinting on paper: grain, halftones, visible misregistration and multiply blending. Crafty, indie and warm.',
  identify: [
    'Two or three spot colours only (Riso Pink, Blue, Yellow, Teal)',
    'Overprint colour mixes where layers overlap (multiply)',
    'Visible grain and halftone dots',
    'Slight misregistration between colour layers',
    'Off-white, uncoated paper background',
  ],
  principles: ['Limit the palette to the drums you have', 'Imperfection is the charm', 'Layers, not effects'],
  color: {
    strategy: 'Two or three fluorescent spot inks on paper, mixed only by overprinting (mix-blend-mode: multiply).',
    palette: [
      { name: 'Fluorescent Pink', hex: '#FF48B0', role: 'accent' },
      { name: 'Riso Blue', hex: '#0078BF', role: 'primary' },
      { name: 'Riso Yellow', hex: '#FFE800', role: 'highlight' },
      { name: 'Uncoated Paper', hex: '#F5F0E6', role: 'background' },
      { name: 'Overprint Navy', hex: '#26315A', role: 'text' },
    ],
  },
  typography: {
    approach: 'Chunky grotesks and friendly soft serifs, set big and printed in one ink; body in a sturdy sans.',
    display: ['bricolage-grotesque', 'archivo-black', 'young-serif'],
    body: ['work-sans', 'archivo'],
    mono: ['space-mono'],
    scale: 'Perfect Fourth (1.333)',
    notes: 'Offset one colour layer by 1–2px to fake misregistration on headings.',
  },
  shape: {
    radius: '0–12px, often hand-cut',
    borders: 'Thick ink outlines',
    elevation: 'None — overprint layers',
    texture: 'Grain, halftone dots, paper fibre',
  },
  layout: {
    grid: 'Zine-like: loose modular grid with stickers and callouts.',
    layouts: ['modular-grid', 'masonry', 'asymmetric-grid'],
    density: 'balanced',
  },
  imagery: 'Grainy duotone photos and illustrations with visible halftone, printed in spot colours.',
  motion: {
    character: 'Tactile and playful: layers shift slightly out of register on hover.',
    animations: ['hover-lift', 'noise-grain', 'stagger-reveal', 'clip-path-reveal'],
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack',
    duration: '200–500ms',
  },
  components: {
    signature: ['card', 'blog-card', 'product-card', 'newsletter-signup', 'tag'],
    notes: 'Cards look like printed stickers; tags look like stamped labels.',
  },
  purposes: ['event', 'portfolio', 'personal-blog', 'restaurant', 'nonprofit', 'education'],
  avoidFor: ['fintech', 'healthcare', 'government'],
  pairsWith: ['swiss-punk', 'neobrutalism', 'organic'],
  dos: [
    'Pick two or three inks and stick to them',
    'Use mix-blend-mode: multiply for overlaps',
    'Add grain with an SVG noise filter',
  ],
  donts: ['Use full-colour photos', 'Make text fluorescent pink on paper', 'Use drop shadows'],
  a11y: 'Fluorescent inks on paper have weak contrast; set text in the darkest ink (or overprint navy).',
  examples: [
    { name: 'Stencil — Riso colour library', url: 'https://www.stencil.wiki/colors' },
  ],
  references: [
    { label: 'Risograph (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Risograph' },
  ],
  tokens: {
    colors: {
      bg: '#F5F0E6',
      surface: '#FFFDF7',
      text: '#26315A',
      muted: '#55607F',
      accent: '#0078BF',
      accentText: '#FFFFFF',
      border: '#26315A',
    },
    fonts: {
      display: '"Bricolage Grotesque", system-ui, sans-serif',
      body: '"Work Sans", system-ui, sans-serif',
      mono: '"Space Mono", monospace',
    },
    googleFonts: 'family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Work+Sans:wght@400;600&family=Space+Mono',
    radius: '6px',
    radiusSm: '999px',
    borderWidth: '2px',
    shadow: 'none',
    displayWeight: 800,
    displayTracking: '-0.02em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Inkwell Press',
    eyebrow: 'Zine fair · Sat 12',
    headline: 'Printed in two colours',
    body: 'Forty makers, a Riso studio and free stickers for anyone who asks nicely.',
    cta: 'Get the map',
    media: 'Overprint',
  },
};

export default risograph;
