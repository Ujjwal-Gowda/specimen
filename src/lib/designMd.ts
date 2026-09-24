/* DESIGN.md generator — Google Labs DESIGN.md format (alpha): YAML front matter tokens
   + prose sections in the canonical order Overview, Colors, Typography, Layout,
   Elevation & Depth, Shapes, Components, Do's and Don'ts.
   https://github.com/google-labs-code/design.md
   Used by the site and by tools/build-design-md.ts, so both always agree. */
import type { Language } from '../types';
import { get, nameOf, type CollectionName } from '../data';

const kebab = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const q = (s: unknown) => `"${String(s ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
const firstFamily = (stack: string) => String(stack || '').split(',')[0].replace(/["'*]/g, '').trim();

/** DESIGN.md colours must be hex: blend rgba()/transparent over the background. */
export function toHex(v: string, bg = '#ffffff'): string {
  const str = String(v || '').trim();
  if (/^#[0-9a-f]{3,8}$/i.test(str)) return str.length === 4 ? '#' + str.slice(1).split('').map(x => x + x).join('') : str.slice(0, 7);
  const rgb = (h: string) => { const x = toHex(h); return [1, 3, 5].map(i => parseInt(x.slice(i, i + 2), 16)); };
  const base = /^#/.test(bg) ? rgb(bg) : [255, 255, 255];
  const hex = (ns: number[]) => '#' + ns.map(n => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0')).join('');
  if (str === 'transparent') return hex(base);
  const m = str.match(/rgba?\(([^)]+)\)/i);
  if (!m) return str;
  const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return hex([r, g, b].map((c, i) => c * a + base[i] * (1 - a)));
}

/** "Perfect Fourth (1.333)" → 1.333 */
const ratioOf = (scale: string) => { const m = String(scale || '').match(/(\d\.\d+)/); return m ? parseFloat(m[1]) : 1.25; };
const rem = (px: number) => `${+(px / 16).toFixed(3)}rem`;

export interface DesignMdOverrides { display?: string; body?: string; mono?: string; title?: string; notes?: string }

export function designMd(lang: Language, over: DesignMdOverrides = {}): string {
  const t = lang.tokens;
  const c = t.colors;
  const ty = lang.typography;
  const r = ratioOf(ty.scale);
  const displayId = over.display || ty.display[0];
  const bodyId = over.body || ty.body[0];
  const monoId = over.mono || ty.mono[0];
  const faceName = (id: string | undefined, stack: string) => get('typefaces', id)?.name ?? firstFamily(stack);
  const display = faceName(displayId, t.fonts.display);
  const body = faceName(bodyId, t.fonts.body);
  const mono = faceName(monoId, t.fonts.mono);
  const size = (step: number) => rem(16 * Math.pow(r, step));
  const names = (ids: string[], coll: CollectionName) => ids.map(id => nameOf(coll, id));
  const list = (arr: string[]) => arr.map(x => `- ${x}`);
  const L: string[] = [];
  const push = (...lines: string[]) => L.push(...lines);

  /* ---------- front matter ---------- */
  push('---', 'version: "alpha"', `name: ${q(over.title || lang.name)}`, `description: ${q(lang.summary)}`, 'colors:');
  const colorTokens: [string, string][] = [
    ['background', c.bg], ['surface', c.surface], ['on-surface', c.text], ['on-surface-variant', c.muted],
    ['primary', c.accent], ['on-primary', c.accentText], ['outline', c.border],
  ];
  const bgHex = toHex(c.bg);
  colorTokens.forEach(([k, v]) => v && push(`  ${k}: ${q(toHex(v, bgHex))}`));
  const seen = new Set(colorTokens.map(([k]) => k));
  lang.color.palette.forEach(sw => {
    const key = kebab(sw.name);
    if (!seen.has(key)) { seen.add(key); push(`  ${key}: ${q(toHex(sw.hex, bgHex))}`); }
  });

  push('typography:');
  const typeRows: [string, string, number, number, string][] = [
    ['display-lg', display, 5, t.displayWeight || 700, t.displayTracking || '-0.02em'],
    ['headline-md', display, 3, t.displayWeight || 700, t.displayTracking || '-0.01em'],
    ['title-md', display, 1, t.displayWeight || 600, '0em'],
    ['body-md', body, 0, 400, '0em'],
    ['label-sm', mono || body, -1, 400, '0.04em'],
  ];
  const lh: Record<string, number> = { 'display-lg': 1.05, 'headline-md': 1.15, 'title-md': 1.25, 'body-md': 1.55, 'label-sm': 1.4 };
  typeRows.forEach(([k, fam, step, w, ls]) =>
    push(`  ${k}:`, `    fontFamily: ${q(fam)}`, `    fontSize: ${size(step)}`, `    fontWeight: ${w}`, `    lineHeight: ${lh[k]}`, `    letterSpacing: ${ls}`));

  push('rounded:', `  sm: ${t.radiusSm || '4px'}`, `  md: ${t.radius || '8px'}`, '  full: 9999px');
  push('spacing:', '  xs: 4px', '  sm: 8px', '  md: 16px', '  lg: 24px', '  xl: 40px', '  2xl: 64px');
  push('components:',
    '  button-primary:', '    backgroundColor: "{colors.primary}"', '    textColor: "{colors.on-primary}"', '    rounded: "{rounded.sm}"', '    padding: 12px 20px',
    '  button-secondary:', '    backgroundColor: "{colors.background}"', '    textColor: "{colors.on-surface}"', '    rounded: "{rounded.sm}"', '    padding: 12px 20px',
    '  card:', '    backgroundColor: "{colors.surface}"', '    textColor: "{colors.on-surface}"', '    rounded: "{rounded.md}"', '    padding: "{spacing.lg}"',
    '  input:', '    backgroundColor: "{colors.background}"', '    textColor: "{colors.on-surface}"', '    rounded: "{rounded.sm}"', '    height: 40px',
    '  badge:', '    backgroundColor: "{colors.primary}"', '    textColor: "{colors.on-primary}"', '    rounded: "{rounded.full}"', '    padding: 2px 8px',
    '---', '');

  /* ---------- prose ---------- */
  push(`# ${over.title || lang.name}`, '');
  if (lang.aka.length) push(`*Also known as: ${lang.aka.join(', ')}.*`, '');
  push('## Overview', '', lang.summary, '');
  if (lang.origin) push(`**Origin (${lang.era || 'history'}).** ${lang.origin}`, '');
  if (lang.identify.length) push('**How to recognise it**', '', ...list(lang.identify), '');
  if (lang.principles.length) push('**Principles**', '', ...list(lang.principles), '');
  if (over.notes) push('**Project notes**', '', over.notes, '');

  push('## Colors', '', lang.color.strategy, '', '| Swatch | Hex | Role |', '|---|---|---|');
  lang.color.palette.forEach(sw => push(`| ${sw.name} | \`${sw.hex}\` | ${sw.role || ''} |`));
  push('', 'Text on background and text on primary must hold WCAG AA contrast (4.5:1 for body text).', '');

  push('## Typography', '');
  if (ty.approach) push(ty.approach, '');
  const faceLine = (role: string, id?: string) => {
    const tf = get('typefaces', id);
    if (!tf) return null;
    const cls = get('classifications', tf.classification)?.name ?? tf.classification;
    const alt = tf.freeAlternatives.length ? ` Free alternatives: ${names(tf.freeAlternatives, 'typefaces').join(', ')}.` : '';
    return `- **${role}: ${tf.name}** — ${cls}${tf.foundry ? `, ${tf.foundry}` : ''}${tf.license ? ` (${tf.license})` : ''}.${alt}`;
  };
  [faceLine('Display', displayId), faceLine('Body', bodyId), faceLine('Mono', monoId)].forEach(l => l && push(l));
  const others = [...new Set([...ty.display, ...ty.body])].filter(id => id !== displayId && id !== bodyId);
  if (others.length) push(`- Also fits: ${names(others, 'typefaces').join(', ')}.`);
  push('', `Modular scale: ${ty.scale || 'Major Third (1.25)'} from a 16px base.`);
  if (ty.notes) push('', ty.notes);
  push('');

  const lay = lang.layout;
  push('## Layout', '');
  if (lay.grid) push(lay.grid, '');
  if (lay.layouts.length) push(`Layout patterns: ${names(lay.layouts, 'layouts').join(', ')}.`, '');
  if (lay.density) push(`Density: ${lay.density}. Spacing follows an 8px base (tokens above).`, '');
  if (lang.imagery) push(`Imagery: ${lang.imagery}`, '');

  const sh = lang.shape;
  push('## Elevation & Depth', '', sh.elevation || '—', '');
  if (sh.texture) push(`Texture: ${sh.texture}`, '');
  push('## Shapes', '', `Corner radius: ${sh.radius || t.radius || '—'}.`, '');
  if (sh.borders) push(`Borders: ${sh.borders}`, '');

  push('## Components', '');
  push(`Borders: ${t.borderWidth || '1px'} solid outline on secondary buttons, inputs and cards. Card shadow: \`${t.shadow || 'none'}\`.`, '');
  if (lang.components.signature.length) push(`Signature components: ${names(lang.components.signature, 'components').join(', ')}.`, '');
  if (lang.components.notes) push(lang.components.notes, '');
  const mo = lang.motion;
  push('### Motion', '');
  if (mo.character) push(mo.character, '');
  if (mo.animations.length) push(`Animations: ${names(mo.animations, 'animations').join(', ')}.`, '');
  if (mo.easing) push(`Easing: ${mo.easing}.${mo.duration ? ` Duration: ${mo.duration}.` : ''}`, '');
  push('Honour `prefers-reduced-motion: reduce` — replace movement with a short fade or none.', '');

  push("## Do's and Don'ts", '');
  lang.dos.forEach(d => push(`- Do: ${d}`));
  lang.donts.forEach(d => push(`- Don't: ${d}`));
  if (lang.a11y) push(`- Accessibility: ${lang.a11y}`);
  push('');
  if (lang.examples.length || lang.references.length) {
    push('---', '', '**References**', '');
    lang.examples.forEach(e => push(`- Example: [${e.name}](${e.url})`));
    lang.references.forEach(e => push(`- [${e.label}](${e.url})`));
    push('');
  }
  push(`<!-- Generated by Specimen Atlas from src/data/languages/${lang.id}.ts -->`);
  return L.join('\n');
}
