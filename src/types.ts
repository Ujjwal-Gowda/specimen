/* Data shapes for everything in src/data. Cross-references are plain string IDs;
   `npm run validate` (tools/validate.ts) checks that every one resolves. */

export type LanguageCategory = 'Movement' | 'Platform system' | 'Surface style' | 'Aesthetic' | 'Layout-led';

export interface Swatch { name: string; hex: string; role?: string }
export interface ExtLink { name?: string; label?: string; url: string }

export interface LanguageTokens {
  colors: { bg: string; surface: string; text: string; muted: string; accent: string; accentText: string; border: string };
  fonts: { display: string; body: string; mono: string };
  /** Google Fonts css2 query, e.g. `family=Inter:wght@400;700&family=...`, or '' */
  googleFonts: string;
  radius: string;
  radiusSm: string;
  borderWidth: string;
  shadow: string;
  displayWeight: number;
  displayTracking: string;
  displayTransform: string;
}

export interface Language {
  id: string;
  name: string;
  aka: string[];
  category: LanguageCategory;
  era: string;
  origin: string;
  summary: string;
  identify: string[];
  principles: string[];
  color: { strategy: string; palette: Swatch[] };
  typography: { approach: string; display: string[]; body: string[]; mono: string[]; scale: string; notes?: string };
  shape: { radius: string; borders: string; elevation: string; texture: string };
  layout: { grid: string; layouts: string[]; density: string };
  imagery: string;
  motion: { character: string; animations: string[]; easing: string; duration: string };
  components: { signature: string[]; notes: string };
  purposes: string[];
  avoidFor: string[];
  pairsWith: string[];
  dos: string[];
  donts: string[];
  a11y: string;
  examples: ExtLink[];
  references: ExtLink[];
  tokens: LanguageTokens;
  /** Copy for the live mini landing page. `media` captions the art-directed image slot. */
  sample: { brand: string; eyebrow: string; headline: string; body: string; cta: string; media?: string };
}

export interface Typeface {
  id: string;
  name: string;
  classification: string;
  vox?: string;
  designer: string;
  foundry: string;
  year: number | string | null;
  license: string;
  source: { label: string; url: string } | null;
  /** Google Fonts css2 family spec, or null when the face is not on Google Fonts */
  googleFamily: string | null;
  /** CSS family used for the specimen (a free lookalike when commercial) */
  previewFamily: string;
  previewGoogle?: string;
  previewNote?: string;
  freeAlternatives: string[];
  variable: boolean;
  axes: string;
  personality: string[];
  bestFor: string;
  languages: string[];
  pairsWith: string[];
  notes: string;
}

export interface Classification {
  id: string;
  name: string;
  aka: string[];
  era: string;
  origin: string;
  traits: string[];
  goodFor: string;
  examples: string[];
  landmark: string[];
}

export interface TypeScale { id: string; name: string; ratio: number | null; musical: string; feel: string; goodFor: string }
export interface Pairing { id: string; name: string; display: string; body: string; mono?: string; why: string; languages: string[]; purposes: string[] }
export interface TypeTerm { term: string; def: string }

export type LibraryKey = 'shadcn' | 'radix' | 'mui' | 'material3' | 'hig' | 'fluent' | 'bootstrap' | 'antd' | 'other';

export interface Component {
  id: string;
  name: string;
  category: string;
  aliases: Partial<Record<LibraryKey, string>>;
  summary: string;
  anatomy: string[];
  variants: string[];
  states: string[];
  aria: string;
  whenToUse: string;
  avoid: string;
  languages: string[];
  /** Static markup built from the .ui-* primitives (styles/ui.css). Trusted, authored in this repo. */
  preview: string;
}

export interface Layout {
  id: string;
  name: string;
  aka: string[];
  summary: string;
  bestFor: string;
  languages: string[];
  wire: { cols?: string; rows?: string; areas: string[]; labels?: Record<string, string> };
}

export interface Animation {
  id: string;
  name: string;
  aka: string[];
  category: string;
  summary: string;
  technique: string;
  snippet: string;
  easing: string;
  duration: string;
  libraries: ExtLink[];
  languages: string[];
  a11y: string;
}

export interface Purpose {
  id: string;
  name: string;
  goals: string;
  audience: string;
  tone: string;
  languages: string[];
  avoid: string[];
  typefaces: string[];
  layouts: string[];
  sections: string[];
  animations: string[];
  color: string;
  examples: ExtLink[];
}

export interface ColorReference {
  harmonies: { name: string; def: string; example: string[] }[];
  rules: { name: string; def: string }[];
  models: { name: string; def: string; css: string }[];
  darkMode: { name: string; def: string }[];
}

export type Pricing = 'Free' | 'Freemium' | 'Free trial' | 'Paid';

/** A website or tool on the Resources page. */
export interface Resource {
  id: string;
  name: string;
  url: string;
  /** ResourceCategory ids; the first is the primary one */
  categories: string[];
  pricing: Pricing;
  /** Source code (or font files) under an open-source licence */
  openSource?: boolean;
  description: string;
  pros: string[];
  cons: string[];
  /** One line: when to reach for it */
  bestFor: string;
}

export interface ResourceCategory {
  id: string;
  name: string;
  /** The need, phrased as the question someone arrives with */
  need: string;
  /** Optional in-app route that covers the same ground */
  related?: { label: string; href: string };
}
