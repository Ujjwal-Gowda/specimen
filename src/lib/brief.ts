/* The brief: what a client or builder pinned. Anything read from storage or a share link
   is untrusted, so cleanBrief keeps only IDs that exist and bounded strings. */
import { KINDS, get, nameOf, resolve, type Kind } from '../data';
import { designMd } from './designMd';
import { aliasShort } from './components';

export type ListKind = Exclude<Kind, 'purpose'>;
export const LIST_KINDS: ListKind[] = ['language', 'typeface', 'pairing', 'component', 'layout', 'animation', 'resource'];

export type Brief = { [K in ListKind]: string[] } & {
  purpose: string | null;
  notes: string;
  title: string;
  itemNotes: Record<string, string>;
};

export const emptyBrief = (): Brief => ({
  purpose: null, language: [], typeface: [], pairing: [], component: [], layout: [], animation: [], resource: [],
  notes: '', title: '', itemNotes: {},
});

export function cleanBrief(raw: unknown): Brief {
  const b = emptyBrief();
  if (!raw || typeof raw !== 'object') return b;
  const r = raw as Record<string, unknown>;
  for (const k of LIST_KINDS) {
    const v = r[k];
    b[k] = Array.isArray(v) ? [...new Set(v.filter((id): id is string => typeof id === 'string' && !!get(KINDS[k].coll, id)))] : [];
  }
  b.purpose = typeof r.purpose === 'string' && get('purposes', r.purpose) ? r.purpose : null;
  b.notes = typeof r.notes === 'string' ? r.notes.slice(0, 5000) : '';
  b.title = typeof r.title === 'string' ? r.title.slice(0, 200) : '';
  if (r.itemNotes && typeof r.itemNotes === 'object') {
    for (const [k, v] of Object.entries(r.itemNotes as Record<string, unknown>)) {
      /* keep only notes for items still in the brief, so removed picks' notes never ship in a link */
      const [kind, ...rest] = k.split(':');
      const listed = (LIST_KINDS as string[]).includes(kind) && b[kind as ListKind].includes(rest.join(':'));
      if (listed && typeof v === 'string' && v.trim()) b.itemNotes[k] = v.slice(0, 500);
    }
  }
  return b;
}

export const briefCount = (b: Brief) => LIST_KINDS.reduce((s, k) => s + b[k].length, 0) + (b.purpose ? 1 : 0);
export const inBrief = (b: Brief, kind: Kind, id: string) => (kind === 'purpose' ? b.purpose === id : b[kind].includes(id));

export function toggled(b: Brief, kind: Kind, id: string): Brief {
  if (kind === 'purpose') return { ...b, purpose: b.purpose === id ? null : id };
  const arr = b[kind];
  if (!arr.includes(id)) return { ...b, [kind]: [...arr, id] };
  const itemNotes = { ...b.itemNotes };
  delete itemNotes[`${kind}:${id}`];
  return { ...b, [kind]: arr.filter(x => x !== id), itemNotes };
}

/* URL-safe base64 of UTF-8 JSON */
export const encodeBrief = (b: Brief) => {
  const bytes = new TextEncoder().encode(JSON.stringify(b));
  let bin = '';
  bytes.forEach(x => { bin += String.fromCharCode(x); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
export const decodeBrief = (s: string): Brief => {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/'));
  return cleanBrief(JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, ch => ch.charCodeAt(0)))));
};
export const briefRoute = (b: Brief) => `/brief?s=${encodeBrief(b)}`;

export function briefMarkdown(b: Brief, shareLink: string, today = new Date()): string {
  const L: string[] = [];
  const title = b.title || (b.purpose ? `${nameOf('purposes', b.purpose)} website` : 'Website');
  L.push(`# ${title} — design brief`, '', `_Made with Specimen Atlas · ${today.toISOString().slice(0, 10)}_`, '');
  const p = get('purposes', b.purpose);
  if (p) L.push('## Purpose', '', `**${p.name}** — ${p.goals}`, '');
  const sec = <K extends ListKind>(kind: K, heading: string, fmt: (id: string) => string) => {
    const ids = b[kind].filter(id => get(KINDS[kind].coll, id));
    if (!ids.length) return;
    L.push(`## ${heading}`, '');
    ids.forEach(id => {
      L.push(`- ${fmt(id)}`);
      const n = b.itemNotes[`${kind}:${id}`];
      if (n) L.push(`  - _Why:_ ${n}`);
    });
    L.push('');
  };
  sec('language', 'Design language', id => { const l = get('languages', id)!; return `**${l.name}**${l.aka.length ? ` (aka ${l.aka.join(', ')})` : ''} — ${l.summary}`; });
  sec('typeface', 'Typefaces', id => {
    const t = get('typefaces', id)!;
    const alt = t.freeAlternatives.length ? `; free alternatives: ${t.freeAlternatives.map(x => nameOf('typefaces', x)).join(', ')}` : '';
    return `**${t.name}** — ${nameOf('classifications', t.classification)}; ${t.foundry}; licence: ${t.license || '?'}${alt}`;
  });
  sec('pairing', 'Font pairings', id => { const x = get('pairings', id)!; return `**${x.name}** — ${nameOf('typefaces', x.display)} + ${nameOf('typefaces', x.body)}. ${x.why}`; });
  sec('component', 'Components', id => { const c = get('components', id)!; const a = aliasShort(c); return `**${c.name}**${a ? ` (${a})` : ''}`; });
  sec('layout', 'Layouts', id => { const x = get('layouts', id)!; return `**${x.name}** — ${x.summary}`; });
  sec('animation', 'Motion', id => { const a = get('animations', id)!; return `**${a.name}** — ${a.category}; easing ${a.easing || '—'}; ${a.duration}`; });
  sec('resource', 'Resources', id => { const r = get('resources', id)!; return `**[${r.name}](${r.url})** — ${r.description}`; });
  if (b.notes) L.push('## Notes', '', b.notes, '');
  L.push('---', '', `Open this brief: ${shareLink}`);
  return L.join('\n');
}

/** A DESIGN.md for the brief's first language, with its fonts swapped for the brief's picks. */
export function briefDesignMd(b: Brief): string | null {
  const lang = get('languages', b.language[0]);
  if (!lang) return null;
  const faces = resolve('typefaces', b.typeface);
  const pair = get('pairings', b.pairing[0]);
  const mono = faces.find(f => f.classification === 'monospace');
  const nonMono = faces.filter(f => f.classification !== 'monospace');
  return designMd(lang, {
    display: pair ? pair.display : nonMono[0]?.id,
    body: pair ? pair.body : (nonMono[1] ?? nonMono[0])?.id,
    mono: mono?.id,
    title: b.title || undefined,
    notes: b.notes || undefined,
  });
}
