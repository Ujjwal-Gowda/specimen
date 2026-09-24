import type { Language } from '../../types';

const aurora: Language = {
  id: 'aurora',
  name: 'Aurora UI',
  aka: ['Mesh gradient UI', 'Gradient blur UI', 'Aurora gradients'],
  category: 'Surface style',
  era: '2020–present',
  origin: 'Soft, blurred, multi-colour gradients drifting behind content like the northern lights. Stripe’s 2020 homepage, with an animated WebGL mesh gradient behind the hero, became the reference point. Design-trend writers, notably Michal Malewicz, called the look “Aurora UI” in 2021, alongside glassmorphism, which it often accompanies. Design tools (Figma plugins, mesh-gradient generators) and CSS blur filters made it easy to reproduce.',
  summary: 'Vivid colour used as atmosphere: large blurred blobs of hue behind calm, legible content, often under frosted glass cards. Optimistic, modern and a little dreamy.',
  identify: [
    'Large, soft, blurred colour fields (2–4 hues) behind content',
    'Gradients that slowly drift or morph',
    'Content on white or translucent frosted cards',
    'Friendly geometric sans headlines with tight tracking',
    'Rounded corners and pill buttons, often with gradient fills',
  ],
  principles: [
    'Colour as atmosphere, never behind body text at full strength',
    'Soft edges everywhere: blur, radius, gentle shadows',
    'Keep the foreground calm and legible',
    'Movement is ambient and slow',
  ],
  color: {
    strategy: 'A light (or deep navy) ground with 3–4 saturated glow hues blurred together; one of them doubles as the UI accent.',
    palette: [
      { name: 'Cloud', hex: '#F6F7FB', role: 'background' },
      { name: 'Ink Navy', hex: '#0E1330', role: 'text' },
      { name: 'Dusk', hex: '#4A5072', role: 'muted text' },
      { name: 'Electric Violet', hex: '#6B4EFF', role: 'accent' },
      { name: 'Coral Glow', hex: '#FF7A59', role: 'gradient' },
      { name: 'Aqua Glow', hex: '#22D3EE', role: 'gradient' },
      { name: 'Orchid Glow', hex: '#E040FB', role: 'gradient' },
    ],
  },
  typography: {
    approach: 'Modern geometric or grotesk display faces with friendly curves; a clean neutral body face.',
    display: ['plus-jakarta-sans', 'general-sans', 'satoshi', 'manrope', 'sora'],
    body: ['inter', 'dm-sans'],
    mono: ['geist-mono'],
    scale: 'Major Third (1.25)',
    notes: 'Headlines 700 weight with -0.03em tracking. Gradient-filled headline words work well in moderation.',
  },
  shape: {
    radius: '16–24px cards, full pills for buttons and inputs',
    borders: '1px white borders at 60–80% opacity on translucent cards',
    elevation: 'Large, soft, tinted shadows (e.g. violet at 25–35%)',
    texture: 'Optional film grain over the gradient to avoid banding',
  },
  layout: {
    grid: 'Centred hero, then card grids and bento sections floating over the gradient',
    layouts: ['centered-hero', 'bento-layout', 'card-grid', 'full-bleed-hero'],
    density: 'airy',
  },
  imagery: 'Abstract gradients, 3D renders with soft lighting, product UI on glass cards. Photography only if colour-graded to the palette.',
  motion: {
    character: 'Ambient and continuous: slowly drifting gradients, morphing blobs, soft blur-in reveals.',
    animations: ['aurora-bg', 'gradient-drift', 'blob-morph', 'blur-in', 'fade-up-reveal', 'noise-grain'],
    easing: 'ease-in-out (sinusoidal) for ambient loops; cubic-bezier(0.16, 1, 0.3, 1) — easeOutExpo for reveals',
    duration: '12–30s ambient loops; 500–800ms reveals',
  },
  components: {
    signature: ['hero', 'cta-band', 'feature-grid', 'pricing-table', 'card', 'badge', 'newsletter-signup'],
    notes: 'CTA bands and pricing cards are the natural places for the gradient to glow through frosted surfaces.',
  },
  purposes: ['ai-product', 'saas', 'fintech', 'web3', 'event', 'wellness'],
  avoidFor: ['government', 'editorial-news', 'docs'],
  pairsWith: ['glassmorphism', 'dark-saas', 'bento', 'minimalism'],
  dos: [
    'Blur heavily (40–120px) so hues melt together',
    'Add fine grain to prevent gradient banding',
    'Keep text on solid or frosted surfaces',
    'Pause ambient motion under prefers-reduced-motion',
  ],
  donts: [
    'Don’t put body text directly on saturated gradients',
    'Don’t use more than four hues',
    'Don’t animate the gradient quickly',
    'Don’t combine with hard neo-brutalist shadows',
  ],
  a11y: 'Check contrast against the brightest point of the gradient, not the average. Large animated blurs are costly on low-end GPUs, so render as a static image or a single CSS layer and stop the animation when reduced motion is requested.',
  examples: [
    { name: 'Stripe', url: 'https://stripe.com' },
  ],
  references: [
    { label: 'Stripe DESIGN.md (getdesign.md)', url: 'https://getdesign.md/stripe/design-md' },
    {
      label: 'MDN — radial-gradient()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient',
    },
    {
      label: 'MDN — filter: blur()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur',
    },
  ],
  tokens: {
    colors: {
      bg: '#F6F7FB',
      surface: '#FFFFFF',
      text: '#0E1330',
      muted: '#4A5072',
      accent: '#6B4EFF',
      accentText: '#FFFFFF',
      border: '#E3E5F0',
    },
    fonts: {
      display: '"Plus Jakarta Sans", system-ui, sans-serif',
      body: '"DM Sans", system-ui, sans-serif',
      mono: 'ui-monospace, monospace',
    },
    googleFonts: 'family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;700',
    radius: '20px',
    radiusSm: '999px',
    borderWidth: '1px',
    shadow: '0 20px 50px -20px rgba(60, 40, 160, 0.35)',
    displayWeight: 700,
    displayTracking: '-0.035em',
    displayTransform: 'none',
  },
  sample: {
    brand: 'Lumen AI',
    eyebrow: 'Introducing Lumen 2',
    headline: 'Your ideas, rendered in seconds',
    body: 'Describe a scene and Lumen turns it into studio-grade visuals, ready for any channel.',
    cta: 'Try it free',
  },
};

export default aurora;
