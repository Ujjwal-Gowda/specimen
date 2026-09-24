/* Usage: npm run validate   (exit 1 on errors) */
import './node-dom-shim';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validate } from '../src/lib/validate';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { demos } = await import('../src/demos');
const cssFor = (id: string) => {
  const f = path.join(root, 'src/styles/languages', `${id}.css`);
  return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null;
};
const { errors, warnings, counts } = validate({ demoIds: Object.keys(demos), cssFor });
console.log('counts', JSON.stringify(counts), 'demos', Object.keys(demos).length);
warnings.forEach(w => console.log('WARN ', w));
errors.forEach(e => console.log('ERROR', e));
console.log(`${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
