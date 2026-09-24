import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import '../tools/node-dom-shim';
import { validate } from '../src/lib/validate';

const cssFor = (id: string) => {
  const f = path.resolve(__dirname, '../src/styles/languages', `${id}.css`);
  return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null;
};

describe('atlas data', () => {
  it('has no broken cross-references, duplicates or missing demos/styles', async () => {
    const { demos } = await import('../src/demos');
    const { errors } = validate({ demoIds: Object.keys(demos), cssFor });
    expect(errors).toEqual([]);
  });
});
