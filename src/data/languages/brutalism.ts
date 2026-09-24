import type { Language } from '../../types';

const brutalism: Language = {
  id: 'brutalism',
  name: 'Web Brutalism',
  aka: ['Brutalist Web Design', 'Raw HTML aesthetic', 'Anti-design (adjacent)'],
  category: 'Aesthetic',
  era: '2014–present; named by Pascal Deville’s brutalistwebsites.com (2014)',
  origin: 'Borrowed from Brutalist architecture (béton brut, "raw concrete" — Le Corbusier, Alison & Peter Smithson), web brutalism is a reaction against templated, polished UI. Pascal Deville’s brutalistwebsites.com (2014) catalogued sites that look deliberately unstyled: default fonts, visible structure, harsh contrasts. David Bryant Copeland’s "Brutalist Web Design" guidelines (2017) framed a gentler, principle-based version: content is readable on all reasonable screens, only hyperlinks and buttons respond to clicks, decoration only when it helps.',
  summary: 'Raw, honest and often confrontational: browser-default fonts, visible borders, blue underlined links, unapologetic layouts and almost no styling. Honest to the medium, intentionally unpolished.',
  identify: [
    'System or default fonts — Times New Roman, Courier, Arial — or monospace everywhere',
    'Blue underlined links, visited purple, visible borders and tables',
    'Harsh contrast, clashing colours or pure black-and-white',
    'Dense text, little white-space polish, left-heavy layouts',
    'Visible structure: boxes, rules, raw lists',
  ],
  principles: [
    'Honesty to materials: HTML looks like HTML',
    'Content first; decoration only when it serves the content',
    'Only links and buttons respond to clicks (Copeland)',
    'Reject the homogenised template look',
  ],
  color: {
    strategy: 'Pure black on white, or deliberately clashing high-saturation colours; browser link colours as accents.',
    palette: [
      { name: 'Pure White', hex: '#FFFFFF', role: 'background' },
      { name: 'Pure Black', hex: '#000000', role: 'text' },
      { name: 'Link Blue', hex: '#0000EE', role: 'accent' },
      { name: 'Visited Purple', hex: '#551A8B', role: 'secondary' },
      { name: 'Highlighter Yellow', hex: '#FFFF00', role: 'highlight' },
    ],
  },
  typography: {
    approach: 'Default serif or monospace faces, big unrefined sizes, no tracking adjustments. Hierarchy with <h1>-sized jumps, not finesse.',
    display: ['courier-prime', 'space-mono', 'ibm-plex-mono', 'helvetica-neue'],
    body: ['courier-prime', 'ibm-plex-mono'],
    mono: ['courier-prime', 'jetbrains-mono'],
    scale: 'Browser default heading scale (h1 2em → h6 0.67em)',
    notes: 'Times New Roman and Arial are system fonts — part of the point. Space Mono / Courier Prime give a raw typewriter voice.',
  },
  shape: {
    radius: '0px',
    borders: '2–4px solid black, table borders, dashed outlines',
    elevation: 'None',
    texture: 'None, or pixelated/low-res imagery used on purpose',
  },
  layout: {
    grid: 'Often no grid — single column of raw content, or deliberately broken grids and overlapping boxes',
    layouts: ['single-column-longform', 'broken-grid', 'holy-grail'],
    density: 'dense',
  },
  imagery: 'Unedited photos, screenshots, low-res or dithered images, ASCII art, no stock photography.',
  motion: {
    character: 'Little or none; when used, abrupt (steps(), instant state changes, marquee).',
    animations: ['marquee-scroll', 'glitch', 'typewriter'],
    easing: 'steps(4) or linear — no smoothing',
    duration: '0–200ms',
  },
  components: {
    signature: ['link', 'data-table', 'navbar', 'footer', 'code-block', 'divider'],
    notes: 'Text links over buttons; raw <table> data; <marquee>-style banners.',
  },
  purposes: ['portfolio', 'agency', 'personal-blog', 'event'],
  avoidFor: ['healthcare', 'fintech', 'government', 'kids'],
  pairsWith: ['swiss', 'terminal', 'neobrutalism', 'kinetic-type'],
  dos: [
    'Commit fully — half-brutal looks broken, not intentional',
    'Keep it fast and semantic; brutalism is honest HTML',
    'Use the rawness to foreground strong content',
  ],
  donts: [
    'Sacrifice usability: navigation must still be obvious',
    'Use it for trust-critical products (banking, health)',
    'Confuse brutalism with neo-brutalism’s polished colour pops',
  ],
  a11y: 'Plain HTML is often very accessible — keep it that way: real headings, underlined links, focus outlines. Clashing colour combos must still pass contrast.',
  examples: [
    { name: 'Brutalist Websites (Pascal Deville)', url: 'https://brutalistwebsites.com' },
    { name: 'Craigslist', url: 'https://www.craigslist.org' },
    { name: 'Berkshire Hathaway', url: 'https://www.berkshirehathaway.com' },
  ],
  references: [
    { label: 'Brutalist Web Design — David Bryant Copeland', url: 'https://brutalist-web.design' },
    {
      label: 'Nielsen Norman Group — Brutalism and Antidesign',
      url: 'https://www.nngroup.com/articles/brutalism-antidesign/',
    },
  ],
  tokens: {
    colors: {
      bg: '#FFFFFF',
      surface: '#FFFFFF',
      text: '#000000',
      muted: '#333333',
      accent: '#0000EE',
      accentText: '#FFFFFF',
      border: '#000000',
    },
    fonts: {
      display: '"Times New Roman", Times, serif',
      body: '"Courier Prime", "Courier New", Courier, monospace',
      mono: '"Courier Prime", "Courier New", monospace',
    },
    googleFonts: 'family=Courier+Prime:wght@400;700',
    radius: '0px',
    radiusSm: '0px',
    borderWidth: '2px',
    shadow: 'none',
    displayWeight: 700,
    displayTracking: '0em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'INDEX.HTML',
    eyebrow: 'last updated 22/09/2026',
    headline: 'THIS IS A WEBSITE.',
    body: 'No framework. No tracking. Just text, links and a few pictures of things I made this year.',
    cta: 'Read the log',
    media: 'Index of /img',
  },
};

export default brutalism;
