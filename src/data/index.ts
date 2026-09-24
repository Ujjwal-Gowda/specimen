/* The atlas: every collection plus typed lookups. Plain data only — no React, no DOM —
   so tools/ and tests/ can import it too. */
import type {
  Animation, Classification, Component, Language, Layout, Pairing, Purpose, Resource, Typeface,
} from '../types';
import { languages } from './languages';
import { typefaces } from './typefaces';
import { classifications, pairings, typeScales, typeTerms } from './type-system';
import { components } from './components';
import { layouts } from './layouts';
import { animations } from './animations';
import { purposes } from './purposes';
import { color } from './color';
import { resources, resourceCategories } from './resources';

export {
  languages, typefaces, classifications, pairings, typeScales, typeTerms, components, layouts,
  animations, purposes, color, resources, resourceCategories,
};

interface Collections {
  languages: Language;
  typefaces: Typeface;
  classifications: Classification;
  pairings: Pairing;
  components: Component;
  layouts: Layout;
  animations: Animation;
  purposes: Purpose;
  resources: Resource;
}
export type CollectionName = keyof Collections;

const lists: { [K in CollectionName]: Collections[K][] } = {
  languages, typefaces, classifications, pairings, components, layouts, animations, purposes, resources,
};

const index = Object.fromEntries(
  Object.entries(lists).map(([k, list]) => [k, new Map(list.map(x => [x.id, x]))]),
) as { [K in CollectionName]: Map<string, Collections[K]> };

export function get<K extends CollectionName>(coll: K, id: string | null | undefined): Collections[K] | undefined {
  return id ? index[coll].get(id) : undefined;
}

export const nameOf = (coll: CollectionName, id: string) => get(coll, id)?.name ?? id;

/** Resolve IDs to entries, silently dropping unknown ones. */
export function resolve<K extends CollectionName>(coll: K, ids: readonly string[] | undefined): Collections[K][] {
  return (ids ?? []).map(id => get(coll, id)).filter((x): x is Collections[K] => Boolean(x));
}

/** What can be pinned to a brief, and where each kind lives. */
export const KINDS = {
  language: { coll: 'languages', one: 'Design language', many: 'Design languages', href: (id: string) => `/language/${id}` },
  typeface: { coll: 'typefaces', one: 'Typeface', many: 'Typefaces', href: (id: string) => `/typeface/${id}` },
  pairing: { coll: 'pairings', one: 'Pairing', many: 'Font pairings', href: (id: string) => `/type?sec=pairings&focus=${id}` },
  component: { coll: 'components', one: 'Component', many: 'Components', href: (id: string) => `/component/${id}` },
  layout: { coll: 'layouts', one: 'Layout', many: 'Layouts', href: (id: string) => `/layouts?focus=${id}` },
  animation: { coll: 'animations', one: 'Animation', many: 'Animations', href: (id: string) => `/animation/${id}` },
  purpose: { coll: 'purposes', one: 'Purpose', many: 'Purposes', href: (id: string) => `/purpose/${id}` },
  resource: { coll: 'resources', one: 'Resource', many: 'Resources', href: (id: string) => `/resources?focus=${id}` },
} as const satisfies Record<string, { coll: CollectionName; one: string; many: string; href: (id: string) => string }>;
export type Kind = keyof typeof KINDS;
