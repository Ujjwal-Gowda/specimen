import type { Language } from '../../types';

const grunge: Language = {
  id: 'grunge',
  name: 'Grunge',
  aka: ['Grunge typography', 'Ray Gun style', '90s distressed'],
  category: 'Movement',
  era: '1990s, California (Ray Gun, Emigre)',
  origin: 'Associated above all with David Carson’s art direction of Ray Gun magazine (1992–95) and the experimental faces of Emigre and FontShop’s FUSE project. Early Macs and cheap photocopiers let designers distort, overlap and degrade type; legibility became optional. Carson famously set an interview with Bryan Ferry entirely in the dingbat font Zapf Dingbats. The look spread to music, skate and snowboard brands.',
  summary: 'Distressed, photocopied, torn and collaged: typewriter and stencil type, overlapping layers, tape, grit and deliberately broken legibility. Raw, rebellious and handmade.',
  identify: [
    'Photocopied, stained or torn textures',
    'Typewriter, stencil and distressed type mixed together',
    'Overlapping, cropped and rotated text blocks',
    'Tape, staples, handwriting and collage',
    'Muted, dirty colours with one loud accent',
  ],
  principles: ['Expression over legibility', 'The handmade and imperfect is honest', 'Every layout is a one-off'],
  color: {
    strategy: 'Dirty neutrals (newsprint, coffee, black) with one loud accent like safety orange or acid green.',
    palette: [
      { name: 'Photocopy Black', hex: '#1B1A17', role: 'text' },
      { name: 'Coffee Stain', hex: '#D8CDB6', role: 'background' },
      { name: 'Newsprint', hex: '#ECE6D8', role: 'surface' },
      { name: 'Safety Orange', hex: '#E4521B', role: 'accent' },
      { name: 'Faded Ink', hex: '#6A6356', role: 'muted' },
    ],
  },
  typography: {
    approach: 'Typewriter and distressed faces for texture, condensed sans for shouting; mix freely, crop and overlap.',
    display: ['special-elite', 'anton', 'bebas-neue'],
    body: ['courier-prime'],
    mono: ['courier-prime'],
    scale: 'Irregular',
    notes: 'Emigre’s Template Gothic and FUSE experiments are the originals; Special Elite is a free distressed typewriter.',
  },
  shape: {
    radius: '0px, with torn or rough edges',
    borders: 'Tape strips, rough outlines',
    elevation: 'Collage layering with rough shadows',
    texture: 'Photocopy noise, paper grain, stains, scratches',
  },
  layout: {
    grid: 'No grid: collage, overlaps and crops.',
    layouts: ['broken-grid', 'asymmetric-grid', 'masonry'],
    density: 'dense',
  },
  imagery: 'High-contrast black-and-white photos, xerox texture, hand-cut collage, band and skate photography.',
  motion: {
    character: 'Jittery and lo-fi: flickers, shakes, film-gate wobble.',
    animations: ['glitch', 'shake-error', 'noise-grain', 'neon-flicker'],
    easing: 'steps(3) — stop-motion',
    duration: '80–300ms',
  },
  components: {
    signature: ['hero', 'gallery-masonry', 'blog-card', 'newsletter-signup'],
    notes: 'Keep interactive components plain and legible under the chaos.',
  },
  purposes: ['event', 'portfolio', 'personal-blog', 'agency'],
  avoidFor: ['fintech', 'healthcare', 'government', 'saas'],
  pairsWith: ['brutalism', 'maximalism', 'swiss-punk'],
  dos: [
    'Use texture and collage behind content, not over it',
    'Mix a distressed display face with a clean body face',
    'Crop photos aggressively',
  ],
  donts: [
    'Distress body copy or form labels',
    'Use it for trust-critical products',
    'Let texture files bloat page weight',
  ],
  a11y: 'Distressed type fails at small sizes; keep reading text clean and above 4.5:1 contrast, and give images real alt text.',
  examples: [
    { name: 'David Carson Design', url: 'https://www.davidcarsondesign.com' },
  ],
  references: [
    {
      label: 'David Carson (Wikipedia)',
      url: 'https://en.wikipedia.org/wiki/David_Carson_(graphic_designer)',
    },
    { label: 'Ray Gun (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Ray_Gun_(magazine)' },
    { label: 'Emigre', url: 'https://www.emigre.com' },
  ],
  tokens: {
    colors: {
      bg: '#D8CDB6',
      surface: '#ECE6D8',
      text: '#1B1A17',
      muted: '#4F4A40',
      accent: '#B8400F',
      accentText: '#FFFFFF',
      border: '#1B1A17',
    },
    fonts: {
      display: '"Special Elite", "Courier New", monospace',
      body: '"Courier Prime", "Courier New", monospace',
      mono: '"Courier Prime", monospace',
    },
    googleFonts: 'family=Special+Elite&family=Courier+Prime:wght@400;700&family=Anton',
    radius: '0px',
    radiusSm: '0px',
    borderWidth: '2px',
    shadow: '4px 5px 0 rgba(27,26,23,.35)',
    displayWeight: 400,
    displayTracking: '0em',
    displayTransform: 'uppercase',
  },
  sample: {
    brand: 'STATIC',
    eyebrow: 'issue 07 // xerox special',
    headline: 'Loud. Cheap. Photocopied.',
    body: 'Twelve bands, one basement, no rules. Bring earplugs.',
    cta: 'Grab a copy',
    media: 'Xerox collage',
  },
};

export default grunge;
