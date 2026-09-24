import type { Language } from '../../types';

const bauhaus: Language = {
  id: 'bauhaus',
  name: 'Bauhaus',
  aka: ['Staatliches Bauhaus', 'Bauhaus Style', 'Neue Typografie (precursor)'],
  category: 'Movement',
  era: '1919–1933, Weimar → Dessau → Berlin, Germany',
  origin: 'Founded by Walter Gropius in Weimar in 1919 to unite art, craft and industry; it moved to Dessau (1925) and Berlin before the Nazis closed it in 1933. Typography and graphics came from László Moholy-Nagy and Herbert Bayer, whose lowercase-only "Universal" alphabet (1925) defined the look; Wassily Kandinsky’s colour–form theory tied the primary colours to the triangle (yellow), square (red) and circle (blue). Paul Renner’s Futura (1927) is the face most associated with it, though Renner was not on the faculty.',
  summary: 'Geometric, functional and playful: primary colours, circles, squares and triangles, heavy rules and geometric sans type arranged on dynamic diagonals. Modernism with a sense of play.',
  identify: [
    'Primary red, yellow and blue with black and off-white',
    'Circles, squares, triangles and half-circles as the main graphic language',
    'Geometric sans (Futura-like), often lowercase or all caps',
    'Bold black bars and rules; diagonal or rotated type',
    'Asymmetric, constructivist-influenced compositions',
  ],
  principles: [
    'Form follows function (Gropius / Sullivan)',
    'Reduce everything to elementary geometric shapes',
    'Unify art, craft and industrial production',
    'Typography as visual communication, not decoration',
  ],
  color: {
    strategy: 'Primary triad (red, yellow, blue) plus black on an off-white paper ground; each colour tied to a shape.',
    palette: [
      { name: 'Bauhaus Red', hex: '#D6281C', role: 'accent' },
      { name: 'Bauhaus Yellow', hex: '#F2C12E', role: 'secondary' },
      { name: 'Bauhaus Blue', hex: '#1B4F9C', role: 'tertiary' },
      { name: 'Ink Black', hex: '#111111', role: 'text' },
      { name: 'Paper', hex: '#F4EFE4', role: 'background' },
    ],
  },
  typography: {
    approach: 'Geometric sans with circular bowls; set big, heavy and sometimes rotated. Lowercase-only headings nod to Bayer’s Universal alphabet.',
    display: ['futura', 'jost', 'josefin-sans', 'din', 'bebas-neue'],
    body: ['jost', 'dm-sans', 'futura'],
    mono: ['space-mono'],
    scale: 'Augmented Fourth (1.414)',
    notes: 'Futura (Paul Renner, Bauer, 1927) is commercial; Jost is the closest free cut. For display experiments, "Bauhaus 93"-style novelty faces are clichés — prefer geometric sans set with intent.',
  },
  shape: {
    radius: '0px or 50% — squares and perfect circles, nothing in between',
    borders: 'Thick black bars (6–12px) and rules',
    elevation: 'None; overlapping flat shapes create depth',
    texture: 'Optional paper grain; mostly flat',
  },
  layout: {
    grid: 'Constructivist asymmetric grid with diagonals and overlapping geometric blocks',
    layouts: ['asymmetric-grid', 'broken-grid', 'split-screen', 'modular-grid'],
    density: 'balanced',
  },
  imagery: 'Geometric compositions, photomontage, black-and-white product and architecture photography, bold shape illustrations.',
  motion: {
    character: 'Shapes rotate, slide and stack like building blocks; confident, mechanical timing.',
    animations: ['clip-path-reveal', 'stagger-reveal', 'draw-svg', 'scale-in', 'marquee-scroll'],
    easing: 'cubic-bezier(0.83, 0, 0.17, 1) — easeInOutQuint',
    duration: '400–700ms',
  },
  components: {
    signature: ['hero', 'feature-grid', 'cta-band', 'stats-band', 'navbar', 'footer'],
    notes: 'Section dividers as coloured blocks; buttons as solid primary rectangles or circles.',
  },
  purposes: ['agency', 'portfolio', 'event', 'education', 'nonprofit'],
  avoidFor: ['healthcare', 'luxury-brand'],
  pairsWith: ['swiss', 'memphis', 'flat', 'neobrutalism'],
  dos: [
    'Tie each primary colour to one geometric shape and repeat it',
    'Use strong diagonals and overlaps to create movement',
    'Keep type geometric and heavy',
  ],
  donts: [
    'Use pastel or gradient versions of the primaries',
    'Add soft shadows or rounded-rectangle cards',
    'Scatter shapes randomly without an underlying grid',
  ],
  a11y: 'Yellow on off-white fails contrast — never put text in Bauhaus Yellow on light grounds. Rotated text should be decorative only; keep real content horizontal.',
  examples: [
    { name: 'Bauhaus Dessau Foundation', url: 'https://www.bauhaus-dessau.de' },
    { name: 'Bauhaus-Archiv / Museum für Gestaltung', url: 'https://www.bauhaus.de' },
    { name: 'Klassik Stiftung Weimar (Bauhaus-Museum)', url: 'https://www.klassik-stiftung.de' },
  ],
  references: [
    { label: 'Wikipedia — Bauhaus', url: 'https://en.wikipedia.org/wiki/Bauhaus' },
    {
      label: 'Wikipedia — Herbert Bayer (Universal typeface)',
      url: 'https://en.wikipedia.org/wiki/Herbert_Bayer',
    },
  ],
  tokens: {
    colors: {
      bg: '#F4EFE4',
      surface: '#FFFFFF',
      text: '#111111',
      muted: '#4A4A4A',
      accent: '#D6281C',
      accentText: '#FFFFFF',
      border: '#111111',
    },
    fonts: {
      display: '"Jost", Futura, "Century Gothic", sans-serif',
      body: '"Jost", Futura, sans-serif',
      mono: '"Space Mono", ui-monospace, monospace',
    },
    googleFonts: 'family=Jost:wght@400;500;700;800&family=Space+Mono',
    radius: '0px',
    radiusSm: '0px',
    borderWidth: '2px',
    shadow: 'none',
    displayWeight: 800,
    displayTracking: '-0.01em',
    displayTransform: 'lowercase',
  },
  sample: {
    brand: 'werkbund',
    eyebrow: 'Summer school 1926',
    headline: 'art and craft, one unity',
    body: 'A six-week workshop in form, colour and material. Weaving, metal, type and print under one roof.',
    cta: 'Apply now',
    media: 'Form study no. 3',
  },
};

export default bauhaus;
