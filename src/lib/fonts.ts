import type { Typeface } from '../types';

/* Google Fonts css2, loaded lazily and once per family spec (family + axes), so a later
   request for heavier weights of an already-loaded family still loads. */
const loaded = new Set<string>();

export function loadFonts(spec: string | null | undefined) {
  if (!spec || typeof document === 'undefined') return;
  const fams: string[] = [];
  String(spec).split('&').forEach(part => {
    const f = part.replace(/^family=/, '').trim().replace(/ /g, '+');
    if (!f || f.startsWith('display=') || loaded.has(f)) return;
    loaded.add(f);
    fams.push(f);
  });
  for (let i = 0; i < fams.length; i += 10) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?${fams.slice(i, i + 10).map(f => `family=${f}`).join('&')}&display=swap`;
    document.head.appendChild(link);
  }
}

export const faceFonts = (tf?: Typeface) => (tf ? tf.previewGoogle || tf.googleFamily || '' : '');
export const faceFamily = (tf?: Typeface) => (tf ? `${tf.previewFamily || `"${tf.name}"`}, system-ui, sans-serif` : 'inherit');
export const standInName = (tf: Typeface) => String(tf.previewFamily || '').split(',')[0].replace(/["']/g, '') || 'system font';
export const isFreeLicense = (license: string) => /OFL|Fontshare|System|Apache|free/i.test(license) && !/personal/i.test(license);

/* a sample that shows off what each classification is about */
const SAMPLES: Record<string, [string, string]> = {
  'old-style': ['Aa Qg', 'Fine ffi ligatures & 1776 old-style figures'], venetian: ['Aa Qg', 'The humanist pen, set in 1470s Venice'],
  transitional: ['Aa Rg', 'Sharper contrast, vertical stress, crisp serifs'], didone: ['Aa Rg', 'Hairline serifs against heavy thick strokes'],
  slab: ['Aa Rg', 'Block serifs built for posters and headlines'], clarendon: ['Aa Rg', 'Bracketed slabs with a confident, warm weight'],
  glyphic: ['Aa Rg', 'Flared strokes carved like an inscription'],
  grotesque: ['Hamburg', 'Hamburgefonstiv 1234567890'], 'neo-grotesque': ['Hamburg', 'Hamburgefonstiv 1234567890'],
  geometric: ['Qoga', 'Circles, straight lines, perfect bowls 0123'], 'humanist-sans': ['Aa Rg', 'Open apertures that read well at small sizes'],
  rounded: ['Aa Rg', 'Soft terminals, friendly and approachable'], monospace: ['{ } =>', 'const x = 0xFF; // 1lI| 0O'],
  display: ['Aa Rg', 'Built for big sizes and short words'], script: ['Aa Rg', 'Connected strokes with a handwritten rhythm'],
  blackletter: ['Aa Rg', 'Broad-nib Gothic letterforms'], condensed: ['HEADLINE', 'TALL, NARROW AND LOUD AT 96PX'],
};
export const sampleWord = (tf: Typeface) => (SAMPLES[tf.classification] ?? ['Aa Rg'])[0];
export const sampleLine = (tf: Typeface) => (SAMPLES[tf.classification] ?? ['', 'The quick brown fox jumps over 1234567890'])[1];
