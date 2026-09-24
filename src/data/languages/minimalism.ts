import type { Language } from '../../types';

const minimalism: Language = {
  id: 'minimalism',
  name: 'Minimalism',
  aka: ['Minimal Design', 'Less is More', 'Reductive design'],
  category: 'Movement',
  era: '1960s industrial design → 2010s web',
  origin: 'Traces to Ludwig Mies van der Rohe’s "less is more" and to Dieter Rams, whose work at Braun (1955–1995) and "Ten Principles for Good Design" (ending in "Good design is as little design as possible") shaped Jonathan Ive’s Apple. On the web it rose with responsive design and the flat era: a single typeface, lots of white space, and content-first pages. Japanese "ma" (negative space) and Muji’s "no-brand" identity are close cousins.',
  summary: 'Everything non-essential removed. Generous white space, a restrained palette, one typeface and a single accent, so content and product photography carry the page.',
  identify: [
    'Large areas of empty space around few elements',
    'Neutral palette; one accent colour or none',
    'One sans family in two weights',
    'Hairline dividers instead of boxes and cards',
    'Product or content photography on plain grounds',
  ],
  principles: [
    'As little design as possible (Rams, principle 10)',
    'Every element must justify its existence',
    'Negative space is a design element, not leftover',
    'Hierarchy through spacing and scale before colour',
  ],
  color: {
    strategy: 'Near-white ground, near-black ink, warm or cool neutral greys; accent optional and tiny.',
    palette: [
      { name: 'Off White', hex: '#FAFAF8', role: 'background' },
      { name: 'Ink', hex: '#1A1A1A', role: 'text' },
      { name: 'Stone', hex: '#6E6E6A', role: 'muted' },
      { name: 'Hairline', hex: '#E6E6E1', role: 'border' },
      { name: 'Moss', hex: '#3D5A40', role: 'accent (optional)' },
    ],
  },
  typography: {
    approach: 'A single neutral sans at regular and medium weights, generous line height, modest sizes. Headlines are quiet — size contrast rather than heavy weight.',
    display: ['inter', 'neue-haas-grotesk', 'sohne', 'instrument-sans', 'avenir'],
    body: ['inter', 'instrument-sans', 'public-sans'],
    mono: ['jetbrains-mono'],
    scale: 'Major Third (1.25)',
    notes: 'Söhne (Klim) and Neue Haas Grotesk are the premium choices; Inter and Instrument Sans are excellent free equivalents.',
  },
  shape: {
    radius: '0–4px',
    borders: '1px hairlines in a light neutral',
    elevation: 'None or a single very soft shadow on overlays',
    texture: 'None',
  },
  layout: {
    grid: 'Simple 12-column grid, wide margins, one idea per viewport',
    layouts: ['centered-hero', 'single-column-longform', 'card-grid', 'split-hero'],
    density: 'airy',
  },
  imagery: 'Studio product photography on seamless backgrounds, lots of negative space, muted tones.',
  motion: {
    character: 'Barely-there: gentle fades and small translations, never decorative.',
    animations: ['fade-in', 'fade-up-reveal', 'underline-slide', 'accordion-expand', 'page-transition', 'zoom-on-scroll'],
    easing: 'cubic-bezier(0.25, 1, 0.5, 1) — easeOutQuart',
    duration: '200–500ms',
  },
  components: {
    signature: ['navbar', 'hero', 'product-card', 'faq-accordion', 'newsletter-signup', 'footer', 'collapsible'],
    notes: 'Text links over buttons where possible; ghost buttons; plenty of padding in every component.',
  },
  purposes: ['portfolio', 'ecommerce', 'luxury-brand', 'wellness', 'personal-blog', 'agency'],
  avoidFor: ['kids', 'gaming'],
  pairsWith: ['swiss', 'quiet-luxury', 'editorial', 'bento'],
  dos: [
    'Remove before you add — cut decoration, then cut copy',
    'Use spacing as your main hierarchy tool',
    'Keep the palette to neutrals plus at most one accent',
  ],
  donts: [
    'Confuse minimal with empty: key information still needs emphasis',
    'Hide navigation or affordances to look cleaner (mystery-meat UI)',
    'Use very light grey text that fails contrast',
  ],
  a11y: 'Common failure: pale grey body text and ghost buttons with low-contrast borders. Keep text ≥ 4.5:1 and make interactive elements obviously interactive.',
  examples: [
    { name: 'MUJI', url: 'https://www.muji.com' },
    { name: 'Vitsœ', url: 'https://www.vitsoe.com' },
    { name: 'COS', url: 'https://www.cos.com' },
  ],
  references: [
    {
      label: 'Vitsœ — Dieter Rams: ten principles for good design',
      url: 'https://www.vitsoe.com/gb/about/good-design',
    },
    {
      label: 'Nielsen Norman Group — The Characteristics of Minimalism in Web Design',
      url: 'https://www.nngroup.com/articles/characteristics-minimalism/',
    },
  ],
  tokens: {
    colors: {
      bg: '#FAFAF8',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      muted: '#6E6E6A',
      accent: '#1A1A1A',
      accentText: '#FAFAF8',
      border: '#E6E6E1',
    },
    fonts: {
      display: '"Inter", "Helvetica Neue", Arial, sans-serif',
      body: '"Inter", "Helvetica Neue", Arial, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
    googleFonts: 'family=Inter:wght@400;500&family=JetBrains+Mono',
    radius: '2px',
    radiusSm: '2px',
    borderWidth: '1px',
    shadow: 'none',
    displayWeight: 500,
    displayTracking: '-0.025em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Oku',
    eyebrow: 'Ceramics, made in Seto',
    headline: 'Fewer, better things',
    body: 'Stoneware for everyday use, thrown by hand in small batches and glazed in three colours.',
    cta: 'Shop the range',
    media: 'Vase, ash glaze',
  },
};

export default minimalism;
