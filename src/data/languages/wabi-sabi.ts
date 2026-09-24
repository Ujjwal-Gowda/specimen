import type { Language } from '../../types';

const wabiSabi: Language = {
  id: 'wabi-sabi',
  name: 'Wabi-sabi',
  aka: ['Japanese minimalism', 'Imperfect beauty'],
  category: 'Aesthetic',
  era: 'Japanese aesthetic rooted in 15th–16th-century tea ceremony',
  origin: 'A Japanese world-view centred on transience and imperfection, shaped by Zen Buddhism and the tea ceremony of Murata Jukō and Sen no Rikyū, who prized rough, handmade, asymmetrical tea bowls over perfect Chinese porcelain. Leonard Koren’s 1994 book "Wabi-Sabi for Artists, Designers, Poets & Philosophers" introduced it to Western design. In interfaces it means calm, earthy, textured minimalism with visible imperfection and plenty of "ma" (negative space).',
  summary: 'Quiet, earthy and imperfect: clay, stone, rice paper and ash tones, uneven hand-made textures, asymmetric calm layouts and lots of empty space (ma). Beauty in the worn and incomplete.',
  identify: [
    'Earthy, desaturated palette: clay, ash, stone, moss',
    'Visible texture: paper fibre, plaster, ceramics',
    'Asymmetric compositions with a lot of empty space',
    'Soft, irregular shapes rather than perfect geometry',
    'Thin, light serif or sans type, often small',
  ],
  principles: [
    'Nothing lasts, nothing is finished, nothing is perfect',
    'Emptiness (ma) is part of the design',
    'Natural, humble materials',
  ],
  color: {
    strategy: 'Low-saturation earth tones with a single muted accent; never pure white or black.',
    palette: [
      { name: 'Rice Paper', hex: '#F1ECE3', role: 'background' },
      { name: 'Ash', hex: '#CFC8BC', role: 'surface' },
      { name: 'Sumi Ink', hex: '#2C2A27', role: 'text' },
      { name: 'Clay', hex: '#9E6B4E', role: 'accent' },
      { name: 'Moss', hex: '#7C8466', role: 'secondary' },
    ],
  },
  typography: {
    approach: 'Quiet, light-weight serif for headings, small and well-spaced; a calm sans for text.',
    display: ['cormorant-garamond', 'newsreader'],
    body: ['hanken-grotesk', 'source-serif-4'],
    mono: [],
    scale: 'Minor Third (1.2)',
    notes: 'Keep sizes small and restrained; space does the emphasis.',
  },
  shape: {
    radius: 'Irregular — slightly uneven radii',
    borders: 'Hairlines in ash',
    elevation: 'None',
    texture: 'Paper fibre, plaster, glaze, stone',
  },
  layout: {
    grid: 'Asymmetric, with large empty areas and objects placed off-centre.',
    layouts: ['asymmetric-grid', 'single-column-longform', 'split-screen'],
    density: 'airy',
  },
  imagery: 'Handmade ceramics, weathered wood, dried flowers, natural light and shadow.',
  motion: {
    character: 'Almost still: slow fades and gentle drift.',
    animations: ['fade-in', 'blur-in', 'ken-burns', 'noise-grain'],
    easing: 'cubic-bezier(0.37, 0, 0.63, 1) — easeInOutSine',
    duration: '800–1600ms',
  },
  components: {
    signature: ['product-card', 'gallery-masonry', 'navbar', 'footer'],
    notes: 'Very few components on each page; generous whitespace around each product.',
  },
  purposes: ['luxury-brand', 'wellness', 'restaurant', 'ecommerce', 'portfolio'],
  avoidFor: ['gaming', 'kids', 'saas', 'devtool'],
  pairsWith: ['quiet-luxury', 'scandinavian', 'organic'],
  dos: [
    'Leave more space than feels comfortable',
    'Use real texture from photography',
    'Keep type small and quiet',
  ],
  donts: ['Use saturated colour', 'Align everything perfectly centred', 'Add bold UI chrome'],
  a11y: 'Low-contrast earth palettes often fail; keep body text in sumi ink at 4.5:1 and size ≥ 16px.',
  examples: [
    { name: 'MUJI', url: 'https://www.muji.com' },
  ],
  references: [
    { label: 'Wabi-sabi (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Wabi-sabi' },
  ],
  tokens: {
    colors: {
      bg: '#F1ECE3',
      surface: '#F8F5EF',
      text: '#2C2A27',
      muted: '#625C53',
      accent: '#8A5A40',
      accentText: '#FFFFFF',
      border: '#CFC8BC',
    },
    fonts: {
      display: '"Cormorant Garamond", Garamond, serif',
      body: '"Hanken Grotesk", system-ui, sans-serif',
      mono: 'ui-monospace, monospace',
    },
    googleFonts: 'family=Cormorant+Garamond:wght@400;500&family=Hanken+Grotesk:wght@400;500',
    radius: '14px 18px 12px 20px',
    radiusSm: '10px 12px 9px 13px',
    borderWidth: '1px',
    shadow: 'none',
    displayWeight: 400,
    displayTracking: '0.01em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Tsuchi',
    eyebrow: 'Handmade in Mashiko',
    headline: 'Bowls that remember the hand',
    body: 'Each piece is thrown once, fired in wood kilns, and never quite the same twice.',
    cta: 'View the collection',
    media: 'Ash glaze',
  },
};

export default wabiSabi;
