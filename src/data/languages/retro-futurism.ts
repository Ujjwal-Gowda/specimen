import type { Language } from '../../types';

const retroFuturism: Language = {
  id: 'retro-futurism',
  name: 'Retro-futurism',
  aka: ['Space Age', 'Raygun Gothic', 'Atompunk', 'Googie'],
  category: 'Aesthetic',
  era: '1950s–60s visions of the future; revived continuously',
  origin: 'The future as imagined in the past: Googie coffee-shop architecture and the 1962 Seattle Space Needle, NASA mission patches and Apollo-era graphics, "The Jetsons" (1962), 2001: A Space Odyssey (1968) and pulp sci-fi covers. The term "retrofuturism" was popularised in the 1980s. Today it covers both 1950s atomic optimism (atompunk, raygun gothic) and 1970s NASA-worm and space-program graphics.',
  summary: 'Yesterday’s tomorrow: space-age curves, orbit rings and starbursts, warm cream and rocket orange with deep space blue, wide extended or rounded techno type, mission-patch badges.',
  identify: [
    'Orbit rings, rockets, starbursts and planets',
    'Wide, extended or rounded techno lettering',
    'Cream, rocket orange and deep space navy',
    'Mission-patch badges and chevrons',
    'Grain and halftone print texture on illustration',
  ],
  principles: ['Optimism about technology', 'Streamlined, aerodynamic forms', 'Science as spectacle'],
  color: {
    strategy: 'Warm cream ground with deep navy and a rocket-orange accent, plus a teal or mint secondary.',
    palette: [
      { name: 'Launch Cream', hex: '#F2E8D5', role: 'background' },
      { name: 'Deep Space', hex: '#14213D', role: 'text' },
      { name: 'Rocket Orange', hex: '#E4572E', role: 'accent' },
      { name: 'Orbit Teal', hex: '#2A9D8F', role: 'secondary' },
      { name: 'Moon Grey', hex: '#A8A29E', role: 'muted' },
    ],
  },
  typography: {
    approach: 'Extended or geometric techno display type in caps; a clean geometric sans for text.',
    display: ['michroma', 'audiowide', 'orbitron', 'futura'],
    body: ['jost', 'dm-sans'],
    mono: ['space-mono'],
    scale: 'Perfect Fifth (1.5)',
    notes: 'NASA’s 1975 "worm" logo and Eurostile are the reference points; Michroma is a free extended face in that spirit.',
  },
  shape: {
    radius: 'Large curves, capsules and circles',
    borders: 'Orbit rings, chevrons and double lines',
    elevation: 'Flat with halftone shading',
    texture: 'Print grain, halftone, star fields',
  },
  layout: {
    grid: 'Centred, badge-like compositions and bold split heroes.',
    layouts: ['centered-hero', 'split-hero', 'card-grid'],
    density: 'balanced',
  },
  imagery: 'Rockets, satellites, planets, astronauts and mid-century illustrated cities of tomorrow.',
  motion: {
    character: 'Orbital and floaty: things rotate, launch and drift.',
    animations: ['particles', 'parallax', 'scale-in', 'count-up', 'spinner-rotate'],
    easing: 'cubic-bezier(0.22, 1, 0.36, 1) — easeOutQuint',
    duration: '500–900ms',
  },
  components: {
    signature: ['hero', 'stats-band', 'timeline', 'badge', 'progress-bar'],
    notes: 'A mission-patch badge and a countdown-style stats band suit it well.',
  },
  purposes: ['event', 'education', 'ai-product', 'kids', 'gaming'],
  avoidFor: ['healthcare', 'government'],
  pairsWith: ['mid-century-modern', 'y2k', 'vaporwave'],
  dos: [
    'Use orbit rings and starbursts as structure',
    'Keep to three or four print colours',
    'Set short headings in extended caps',
  ],
  donts: ['Set body text in extended faces', 'Mix in glossy 3D gradients', 'Crowd the stars behind text'],
  a11y: 'Extended faces are wide and hard to read in long lines — keep them for headings. Animated star fields should stop under reduced motion.',
  examples: [
    {
      name: 'NASA Graphics Standards Manual',
      url: 'https://standardsmanual.com/products/nasa-graphics-standards-manual',
    },
  ],
  references: [
    { label: 'Retrofuturism (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Retrofuturism' },
    { label: 'Googie architecture (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Googie_architecture' },
  ],
  tokens: {
    colors: {
      bg: '#F2E8D5',
      surface: '#FBF5E9',
      text: '#14213D',
      muted: '#4A5468',
      accent: '#C9451F',
      accentText: '#FFFFFF',
      border: '#14213D',
    },
    fonts: {
      display: '"Michroma", "Orbitron", sans-serif',
      body: '"Jost", system-ui, sans-serif',
      mono: '"Space Mono", monospace',
    },
    googleFonts: 'family=Michroma&family=Jost:wght@400;600&family=Space+Mono',
    radius: '999px',
    radiusSm: '999px',
    borderWidth: '2px',
    shadow: 'none',
    displayWeight: 400,
    displayTracking: '0.04em',
    displayTransform: 'uppercase',
  },
  sample: {
    brand: 'ORBITAL',
    eyebrow: 'T-minus 10 days',
    headline: 'Tomorrow, launched today',
    body: 'Book a seat on the first commercial loop around the moon — window seats go fast.',
    cta: 'Reserve a seat',
    media: 'Lunar loop',
  },
};

export default retroFuturism;
