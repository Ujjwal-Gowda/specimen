/* Writes public/design-md/<id>.md for every design language, plus an index, using the
   same generator the site uses. Usage: npm run design-md */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages } from '../src/data';
import { designMd } from '../src/lib/designMd';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'design-md');
fs.mkdirSync(outDir, { recursive: true });

const rows = languages.map(l => {
  fs.writeFileSync(path.join(outDir, `${l.id}.md`), designMd(l));
  return `| [${l.name}](./${l.id}.md) | ${l.category} | ${l.aka.join(', ')} |`;
});
fs.writeFileSync(path.join(outDir, 'README.md'), [
  '# DESIGN.md files', '',
  'One file per design language, in the Google Labs DESIGN.md format (alpha):',
  'YAML front matter tokens + prose sections (Overview, Colors, Typography, Layout,',
  "Elevation & Depth, Shapes, Components, Do's and Don'ts).",
  'Spec: https://github.com/google-labs-code/design.md', '',
  'Drop one into a project root as `DESIGN.md` and point your coding agent at it.',
  'Regenerate with `npm run design-md`.', '',
  '| Design language | Category | Also known as |', '|---|---|---|', ...rows, '',
  "## Real brands' DESIGN.md files", '',
  'Extracted from live sites by the awesome-design-md project — https://github.com/VoltAgent/awesome-design-md',
  'Each is at `https://getdesign.md/<brand>/design-md`, e.g. apple, stripe, linear.app, vercel, notion, figma, framer, raycast, airbnb, spotify, nike, ibm, theverge, wired.', '',
].join('\n'));
console.log(`wrote ${rows.length} DESIGN.md files to public/design-md/`);
