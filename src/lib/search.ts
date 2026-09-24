import {
  animations, classifications, color, components, languages, layouts, nameOf, pairings, purposes,
  resourceCategories, resources, typeScales, typeTerms, typefaces, KINDS,
} from '../data';
import { aliasShort } from './components';

export interface SearchEntry { kind: string; name: string; sub: string; href: string; hay: string }

const entries: SearchEntry[] = [];
const add = (kind: string, name: string, sub: string, href: string, extra = '') =>
  entries.push({ kind, name, sub, href, hay: `${name} ${sub} ${extra}`.toLowerCase() });

languages.forEach(l => add('Language', l.name, l.aka.join(', '), KINDS.language.href(l.id), l.category));
typefaces.forEach(t => add('Typeface', t.name, `${nameOf('classifications', t.classification)} · ${t.foundry}`, KINDS.typeface.href(t.id), t.designer));
classifications.forEach(c => add('Class', c.name, c.aka.join(', '), '/type?sec=classifications'));
pairings.forEach(p => add('Pairing', p.name, `${nameOf('typefaces', p.display)} + ${nameOf('typefaces', p.body)}`, KINDS.pairing.href(p.id)));
components.forEach(c => add('Component', c.name, aliasShort(c), KINDS.component.href(c.id), Object.values(c.aliases).join(' ')));
layouts.forEach(x => add('Layout', x.name, x.aka.join(', '), KINDS.layout.href(x.id)));
animations.forEach(a => add('Animation', a.name, a.aka.join(', '), KINDS.animation.href(a.id), a.category));
purposes.forEach(p => add('Purpose', p.name, p.audience, KINDS.purpose.href(p.id)));
resources.forEach(r => add('Resource', r.name, r.bestFor, KINDS.resource.href(r.id), `${r.categories.map(c => resourceCategories.find(x => x.id === c)?.name ?? c).join(' ')} ${r.description}`));
typeTerms.forEach(t => add('Term', t.term, t.def, '/type?sec=glossary'));
typeScales.forEach(s => add('Type scale', s.name, s.ratio ? String(s.ratio) : '', '/type?sec=scales'));
color.harmonies.forEach(h => add('Colour', h.name, 'Harmony', '/color'));

export function search(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...entries.filter(x => x.kind === 'Purpose'), ...entries.filter(x => x.kind === 'Language').slice(0, 12)];
  const words = q.split(/\s+/);
  return entries
    .filter(x => words.every(w => x.hay.includes(w)))
    .map(x => { const n = x.name.toLowerCase(); return { x, s: n.startsWith(q) ? 0 : n.includes(q) ? 1 : 2 }; })
    .sort((a, b) => a.s - b.s || a.x.name.length - b.x.name.length)
    .slice(0, 40)
    .map(r => r.x);
}
