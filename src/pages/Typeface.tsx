import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { KINDS, get, languages, nameOf, pairings, resolve } from '../data';
import { faceFamily, faceFonts, isFreeLicense } from '../lib/fonts';
import { useDocumentTitle, useFonts } from '../hooks';
import { FaceTile } from '../components/tiles';
import { Crumbs, EntityChips, NotFound, Panel, Pin } from '../components/ui';

const SIZES = [12, 16, 20, 28, 40, 56, 72];

export default function Typeface() {
  const { id = '' } = useParams();
  const tf = get('typefaces', id);
  useDocumentTitle(tf?.name ?? 'Not found');
  useFonts(faceFonts(tf));
  const [sample, setSample] = useState('Sphinx of black quartz, judge my vow');
  if (!tf) return <NotFound />;

  const fam = faceFamily(tf);
  const cls = nameOf('classifications', tf.classification);
  const users = languages.filter(l => [...l.typography.display, ...l.typography.body, ...l.typography.mono].includes(tf.id)).map(l => l.id);
  const pairs = pairings.filter(p => p.display === tf.id || p.body === tf.id);
  const free = isFreeLicense(tf.license);
  return (
    <div className="page">
      <Crumbs trail={[['/type', 'Typography'], ['/type?sec=faces', cls], [null, tf.name]]} />
      <header className="detail-head">
        <div className="page-head">
          <p className="eyebrow">{cls}{tf.year ? ` · ${tf.year}` : ''}</p>
          <h1>{tf.name}</h1>
          <p className="lede">{tf.bestFor}</p>
        </div>
        <div className="actions"><Pin kind="typeface" id={tf.id} />
          {tf.source && <a className="btn btn--ghost btn--sm" href={tf.source.url} target="_blank" rel="noopener">{tf.source.label} ↗</a>}</div>
      </header>
      <div className="detail-grid">
        <div className="page" style={{ gap: 32 }}>
          <div className="panel" style={{ fontFamily: fam }}>
            <p className="big-aa">Aa</p>
            {tf.previewNote && <p className="small muted" style={{ fontFamily: 'var(--f-body)' }}>{tf.previewNote}</p>}
          </div>
          <section className="section"><h2 className="sec">Try it</h2>
            <input className="tester" type="text" value={sample} onChange={e => setSample(e.target.value)} aria-label="Type to test this typeface" />
            <div className="panel waterfall" style={{ fontFamily: fam }}>
              {SIZES.map(px => <div key={px}><span>{px}px</span><p style={{ fontSize: px }}>{sample || 'Type to test'}</p></div>)}
            </div>
          </section>
          <section className="section"><h2 className="sec">Character set</h2>
            <div className="panel glyphs" style={{ fontFamily: fam }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 &amp;@#%?!€$£ “”‘’ — – ( ) [ ] {'{ }'} → fi fl</div>
          </section>
          {tf.notes && <section className="section"><h2 className="sec">Notes</h2><div className="prose"><p>{tf.notes}</p></div></section>}
          {tf.freeAlternatives.length > 0 && <section className="section"><h2 className="sec">Free alternatives</h2>
            <div className="grid grid--faces">{resolve('typefaces', tf.freeAlternatives).map(x => <FaceTile key={x.id} tf={x} />)}</div></section>}
          {pairs.length > 0 && <section className="section"><h2 className="sec">Named pairings with {tf.name}</h2>
            <div className="chips">{pairs.map(p => <Link key={p.id} className="chip" to={KINDS.pairing.href(p.id)}>{p.name} — {nameOf('typefaces', p.display)} + {nameOf('typefaces', p.body)}</Link>)}</div></section>}
        </div>
        <aside>
          <Panel title="Facts"><dl className="facts">
            <dt>Class</dt><dd>{cls}</dd>
            {tf.designer && <><dt>Designer</dt><dd>{tf.designer}</dd></>}
            {tf.foundry && <><dt>Foundry</dt><dd>{tf.foundry}</dd></>}
            {tf.year && <><dt>Year</dt><dd>{tf.year}</dd></>}
            <dt>Licence</dt><dd><span className={`badge ${free ? 'badge--free' : 'badge--paid'}`}>{tf.license || '—'}</span></dd>
            <dt>Variable</dt><dd>{tf.variable ? `Yes${tf.axes ? ` — ${tf.axes}` : ''}` : 'No'}</dd>
            <dt>CSS</dt><dd><code>font-family: {tf.previewFamily || `"${tf.name}"`}</code></dd>
          </dl></Panel>
          <Panel title="Personality"><div className="chips">{tf.personality.map(p => <span key={p} className="chip chip--quiet">{p}</span>)}</div></Panel>
          <Panel title="Pairs with"><EntityChips kind="typeface" ids={tf.pairsWith} /></Panel>
          <Panel title="Used in design languages"><EntityChips kind="language" ids={[...new Set([...tf.languages, ...users])]} /></Panel>
        </aside>
      </div>
    </div>
  );
}
