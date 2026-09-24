import type { Language } from '../../types';

const neobrutalism: Language = {
  id: 'neobrutalism',
  name: 'Neo-Brutalism',
  aka: ['Neubrutalism', 'Neo-brutalist UI', 'Brutal-pop'],
  category: 'Aesthetic',
  era: '2020–present; popularised by Gumroad’s 2021 rebrand and Figma/FigJam marketing',
  origin: 'A friendlier, product-ready descendant of web brutalism. It keeps the raw black outlines and flat blocks but adds saturated candy colours, hard offset shadows and chunky type. Gumroad’s 2021 redesign (pink #FF90E8, thick borders), FigJam’s launch visuals and many indie SaaS and Web3 sites made it mainstream; Nielsen Norman Group documented it as "neobrutalism" in 2024.',
  summary: 'Thick black outlines, flat saturated fills and hard offset drop shadows on bold grotesk type. Playful, loud and tactile — buttons look like stickers you can press.',
  identify: [
    '2–4px solid black borders on everything interactive',
    'Hard, unblurred offset shadows (4px 4px 0 #000)',
    'Saturated flat colours — pink, yellow, lime, cyan',
    'Chunky grotesk or display type, often oversized',
    'Buttons that "press" by moving into their shadow',
  ],
  principles: [
    'Make affordances loud and obvious',
    'Contrast over subtlety',
    'Personality over polish',
    'Everything is a flat object on a flat plane',
  ],
  color: {
    strategy: 'Cream or white ground, black ink and outlines, 2–4 saturated flat accents used as block fills.',
    palette: [
      { name: 'Gumroad Pink', hex: '#FF90E8', role: 'accent' },
      { name: 'Butter Yellow', hex: '#FFC900', role: 'secondary' },
      { name: 'Lime', hex: '#B8FF5A', role: 'highlight' },
      { name: 'Pool Cyan', hex: '#23A094', role: 'tertiary' },
      { name: 'Ink', hex: '#000000', role: 'text & borders' },
      { name: 'Cream', hex: '#FFF6DA', role: 'background' },
    ],
  },
  typography: {
    approach: 'Heavy grotesk or wide display face for headlines, friendly grotesk for body; tight tracking, big sizes.',
    display: ['archivo-black', 'space-grotesk', 'cabinet-grotesk', 'clash-display'],
    body: ['space-grotesk', 'dm-sans', 'work-sans'],
    mono: ['space-mono'],
    scale: 'Augmented Fourth (1.414)',
    notes: 'Gumroad uses Mabry Pro (commercial, Colophon). Archivo Black + Space Grotesk is a strong free pairing.',
  },
  shape: {
    radius: '0–8px (square or slightly rounded)',
    borders: '2–4px solid #000 on buttons, cards, inputs and images',
    elevation: 'Hard offset shadow: 4px 4px 0 0 #000 (moves to 0 0 on press)',
    texture: 'None; occasional halftone or grid-paper backgrounds',
  },
  layout: {
    grid: 'Chunky card grids and stacked blocks; slightly rotated stickers and badges',
    layouts: ['card-grid', 'bento-layout', 'split-hero', 'broken-grid'],
    density: 'balanced',
  },
  imagery: 'Outlined illustrations, stickers, emoji-like icons, photos inside bordered frames, hand-drawn doodles.',
  motion: {
    character: 'Tactile and bouncy — buttons press into their shadows, stickers wobble.',
    animations: ['spring-press', 'hover-lift', 'marquee-scroll', 'shake-error', 'confetti', 'bounce', 'text-highlight'],
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1) — easeOutBack',
    duration: '100–250ms',
  },
  components: {
    signature: ['button', 'card', 'badge', 'marquee-band', 'pricing-table', 'faq-accordion', 'input'],
    notes: 'Sticker badges, marquee bands, bordered pricing cards, press-in buttons.',
  },
  purposes: ['saas', 'devtool', 'ecommerce', 'event', 'web3', 'portfolio', 'ai-product'],
  avoidFor: ['healthcare', 'luxury-brand', 'government'],
  pairsWith: ['brutalism', 'memphis', 'bento', 'y2k'],
  dos: [
    'Use one consistent border width and shadow offset across the UI',
    'Animate the shadow on press so buttons feel physical',
    'Limit to 2–4 accents so it stays coherent',
  ],
  donts: [
    'Blur the shadows — hard offsets are the signature',
    'Mix thin and thick borders randomly',
    'Use it for sombre or trust-critical subjects',
  ],
  a11y: 'Black text on the bright accents passes easily; white text on pink or yellow does not. Keep a visible focus ring in addition to the shadow.',
  examples: [
    { name: 'Gumroad', url: 'https://gumroad.com' },
    { name: 'neobrutalism components', url: 'https://www.neobrutalism.dev' },
    { name: 'FigJam', url: 'https://www.figma.com/figjam/' },
  ],
  references: [
    {
      label: 'Nielsen Norman Group — Neobrutalism: Definition and Best Practices',
      url: 'https://www.nngroup.com/articles/neobrutalism/',
    },
  ],
  tokens: {
    colors: {
      bg: '#FFF6DA',
      surface: '#FFFFFF',
      text: '#000000',
      muted: '#2B2B2B',
      accent: '#FF90E8',
      accentText: '#000000',
      border: '#000000',
    },
    fonts: {
      display: '"Archivo Black", "Arial Black", sans-serif',
      body: '"Space Grotesk", system-ui, sans-serif',
      mono: '"Space Mono", ui-monospace, monospace',
    },
    googleFonts: 'family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&family=Space+Mono',
    radius: '6px',
    radiusSm: '6px',
    borderWidth: '3px',
    shadow: '4px 4px 0 0 #000000',
    displayWeight: 400,
    displayTracking: '-0.02em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Stickerbox',
    eyebrow: 'For indie creators',
    headline: 'Sell your stuff. Loudly.',
    body: 'Drop a link, set a price, get paid. No storefront setup, no monthly fee, no nonsense.',
    cta: 'Start selling',
    media: 'Sticker drop',
  },
};

export default neobrutalism;
