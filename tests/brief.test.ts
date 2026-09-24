import { describe, expect, it } from 'vitest';
import { briefCount, briefDesignMd, briefMarkdown, cleanBrief, decodeBrief, emptyBrief, encodeBrief, toggled } from '../src/lib/brief';

describe('brief', () => {
  it('round-trips through the share-link encoding, including non-ASCII notes', () => {
    const b = { ...emptyBrief(), language: ['swiss'], typeface: ['inter'], resource: ['refero'], notes: 'Café — “quotes” ✓', title: 'Test' };
    expect(decodeBrief(encodeBrief(b))).toEqual(b);
  });

  it('drops unknown ids, wrong types and oversized strings from untrusted input', () => {
    const b = cleanBrief({ language: ['swiss', 'nope', 42, 'swiss'], purpose: 'not-a-purpose', notes: 'x'.repeat(9000), itemNotes: { 'language:swiss': 1, 'language:nope': 'x', 'language:swiss ': 'y' } });
    expect(b.language).toEqual(['swiss']);
    expect(b.purpose).toBeNull();
    expect(b.notes).toHaveLength(5000);
    expect(b.itemNotes).toEqual({});
    expect(cleanBrief('garbage')).toEqual(emptyBrief());
  });

  it('toggles items and counts them', () => {
    let b = toggled(emptyBrief(), 'language', 'swiss');
    b = toggled(b, 'purpose', 'saas');
    expect(briefCount(b)).toBe(2);
    expect(briefCount(toggled(b, 'language', 'swiss'))).toBe(1);
  });

  it('exports Markdown and a DESIGN.md that uses the brief fonts', () => {
    const b = { ...emptyBrief(), language: ['swiss'], typeface: ['inter'], purpose: 'saas' };
    expect(briefMarkdown(b, 'https://x/#/brief')).toContain('## Design language');
    const md = briefDesignMd(b)!;
    expect(md.startsWith('---\nversion: "alpha"')).toBe(true);
    expect(md).toContain('fontFamily: "Inter"');
    expect(briefDesignMd(emptyBrief())).toBeNull();
  });
});

describe('brief item notes', () => {
  it('drops a note when its item is removed, and ignores orphan notes from links', () => {
    let b = toggled(emptyBrief(), 'language', 'swiss');
    b = { ...b, itemNotes: { 'language:swiss': 'feels like us' } };
    expect(toggled(b, 'language', 'swiss').itemNotes).toEqual({});
    expect(cleanBrief({ language: ['swiss'], itemNotes: { 'language:swiss': 'keep', 'language:bento': 'private' } }).itemNotes)
      .toEqual({ 'language:swiss': 'keep' });
  });
});
