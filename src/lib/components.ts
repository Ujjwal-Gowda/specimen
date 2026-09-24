import type { Component, LibraryKey } from '../types';

export const LIBS: [LibraryKey, string][] = [
  ['shadcn', 'shadcn/ui'], ['radix', 'Radix'], ['mui', 'MUI'], ['material3', 'Material 3'], ['hig', 'Apple HIG'],
  ['fluent', 'Fluent 2'], ['bootstrap', 'Bootstrap'], ['antd', 'Ant Design'], ['other', 'Also called'],
];

/** "shadcn/ui: Dialog · Radix: Dialog · MUI: Dialog" — the first three library names. */
export const aliasShort = (c: Component) =>
  LIBS.filter(([k]) => k !== 'other' && c.aliases[k]).slice(0, 3).map(([k, l]) => `${l}: ${c.aliases[k]}`).join(' · ');
