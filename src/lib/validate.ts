/* Data integrity checks shared by `npm run validate` and the test suite: unique IDs,
   cross-references that resolve, required fields, token contrast, resource hygiene. */
import {
  animations, classifications, components, languages, layouts, pairings, purposes, resourceCategories, resources, typefaces,
  type CollectionName,
} from '../data';

export interface ValidationResult { errors: string[]; warnings: string[]; counts: Record<string, number> }

function luminance(hex: string) {
  const m = String(hex || '').trim().match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (!m) return null;
  const h = m[1].length === 3 ? m[1].split('').map(x => x + x).join('') : m[1];
  const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255).map(v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a: string, b: string) {
  const x = luminance(a); const y = luminance(b);
  if (x == null || y == null) return null;
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/**
 * @param demoIds  ids that have a live demo (the demos module needs a DOM, so callers pass them in)
 * @param cssFor   returns a language's stylesheet text, or null if it has none
 */
export function validate({ demoIds, cssFor }: { demoIds?: string[]; cssFor?: (id: string) => string | null } = {}): ValidationResult {
  const errors: string[] = []; const warnings: string[] = [];
  const lists = { languages, typefaces, classifications, pairings, components, layouts, animations, purposes, resources };
  const ids = {} as Record<CollectionName, Set<string>>;
  for (const [k, list] of Object.entries(lists) as [CollectionName, { id: string; name: string }[]][]) {
    ids[k] = new Set();
    for (const x of list) {
      if (!x.id) errors.push(`${k}: entry without id (${x.name})`);
      if (ids[k].has(x.id)) errors.push(`${k}: duplicate id ${x.id}`);
      ids[k].add(x.id);
    }
  }
  const ref = (where: string, coll: CollectionName, arr: (string | undefined)[] = []) =>
    arr.forEach(id => { if (id && !ids[coll].has(id)) errors.push(`${where} → unknown ${coll} id "${id}"`); });

  for (const l of languages) {
    const w = `language ${l.id}`;
    (['name', 'summary', 'origin', 'era'] as const).forEach(f => { if (!l[f]) errors.push(`${w}: missing ${f}`); });
    if (l.identify.length < 3) warnings.push(`${w}: fewer than 3 "identify" bullets`);
    if (l.color.palette.length < 3) warnings.push(`${w}: palette has fewer than 3 swatches`);
    ref(w, 'typefaces', [...l.typography.display, ...l.typography.body, ...l.typography.mono]);
    ref(w, 'layouts', l.layout.layouts);
    ref(w, 'animations', l.motion.animations);
    ref(w, 'components', l.components.signature);
    ref(w, 'purposes', [...l.purposes, ...l.avoidFor]);
    ref(w, 'languages', l.pairsWith);
    if (l.pairsWith.includes(l.id)) errors.push(`${w}: pairs with itself`);
    const c = l.tokens.colors;
    const cr = contrast(c.text, c.bg); const ca = contrast(c.accentText, c.accent);
    if (cr && cr < 4.5) warnings.push(`${w}: text/bg contrast ${cr.toFixed(2)}`);
    if (ca && ca < 4.5) warnings.push(`${w}: accentText/accent contrast ${ca.toFixed(2)}`);
    if (cssFor) {
      const css = cssFor(l.id);
      if (css == null) errors.push(`${w}: no stylesheet styles/languages/${l.id}.css`);
      else {
        if (!css.includes(`.lang-${l.id}`)) errors.push(`${w}: stylesheet never targets .lang-${l.id}`);
        if (!new RegExp(`\\.lang-${l.id}\\b[^{}]*\\.ui-media`).test(css)) warnings.push(`${w}: no .ui-media art direction`);
      }
    }
  }
  for (const t of typefaces) {
    const w = `typeface ${t.id}`;
    ref(w, 'typefaces', [...t.freeAlternatives, ...t.pairsWith]);
    ref(w, 'languages', t.languages);
    if (!ids.classifications.has(t.classification)) errors.push(`${w}: unknown classification ${t.classification}`);
    if (/Commercial|personal/i.test(t.license) && !t.freeAlternatives.length) warnings.push(`${w}: commercial without free alternative`);
    if (!t.googleFamily && !t.previewGoogle && !/System/i.test(t.license)) warnings.push(`${w}: no way to preview (no googleFamily/previewGoogle)`);
  }
  for (const c of classifications) ref(`class ${c.id}`, 'typefaces', c.examples);
  for (const p of pairings) { const w = `pairing ${p.id}`; ref(w, 'typefaces', [p.display, p.body, p.mono]); ref(w, 'languages', p.languages); ref(w, 'purposes', p.purposes); }
  for (const c of components) ref(`component ${c.id}`, 'languages', c.languages);
  for (const x of layouts) ref(`layout ${x.id}`, 'languages', x.languages);
  for (const a of animations) {
    ref(`animation ${a.id}`, 'languages', a.languages);
    if (demoIds && !demoIds.includes(a.id)) errors.push(`animation ${a.id}: no demo`);
  }
  for (const p of purposes) {
    const w = `purpose ${p.id}`;
    ref(w, 'languages', [...p.languages, ...p.avoid]);
    ref(w, 'typefaces', p.typefaces); ref(w, 'layouts', p.layouts); ref(w, 'components', p.sections); ref(w, 'animations', p.animations);
  }
  const catIds = new Set(resourceCategories.map(c => c.id));
  const urls = new Set<string>();
  for (const r of resources) {
    const w = `resource ${r.id}`;
    if (!/^https:\/\//.test(r.url)) errors.push(`${w}: url must be https`);
    if (urls.has(r.url)) errors.push(`${w}: duplicate url ${r.url}`);
    urls.add(r.url);
    if (!r.categories.length) errors.push(`${w}: no category`);
    r.categories.forEach(c => { if (!catIds.has(c)) errors.push(`${w}: unknown category ${c}`); });
    if (!r.pros.length || !r.cons.length) errors.push(`${w}: needs at least one pro and one con`);
    if (!['Free', 'Freemium', 'Free trial', 'Paid'].includes(r.pricing)) errors.push(`${w}: unknown pricing ${r.pricing}`);
    if (!r.description || !r.bestFor) errors.push(`${w}: missing description or bestFor`);
  }
  for (const c of resourceCategories) if (!resources.some(r => r.categories[0] === c.id)) warnings.push(`resource category ${c.id}: empty`);

  const counts = Object.fromEntries(Object.entries(ids).map(([k, v]) => [k, v.size]));
  return { errors, warnings, counts };
}
