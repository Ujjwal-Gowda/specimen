import { Link, useParams } from 'react-router';
import { get, nameOf, resolve } from '../data';
import { designMd } from '../lib/designMd';
import { download } from '../lib/util';
import { faceFamily, faceFonts } from '../lib/fonts';
import { useDocumentTitle, useFonts } from '../hooks';
import { CompFrame, LangFrame } from '../components/previews';
import { LayoutTile } from '../components/tiles';
import { Aka, Bullets, CodeBox, CompareButton, CopyButton, Crumbs, EntityChips, ExtLinks, NotFound, Panel, Pin } from '../components/ui';

export default function Language() {
  const { id = '' } = useParams();
  const l = get('languages', id);
  useDocumentTitle(l?.name ?? 'Not found');
  const ty = l?.typography;
  const faceRows = ty ? ([['Display', ty.display], ['Body', ty.body], ['Mono', ty.mono]] as const)
    .flatMap(([role, ids]) => resolve('typefaces', ids).map((tf, i) => [i === 0 ? role : '', tf, `${role}-${tf.id}`] as const)) : [];
  useFonts(...faceRows.map(([, tf]) => faceFonts(tf)));
  if (!l || !ty) return <NotFound />;

  const md = designMd(l);
  const sigComps = resolve('components', l.components.signature);
  const lays = resolve('layouts', l.layout.layouts);
  return (
    <div className="page">
      <Crumbs trail={[['/languages', 'Design languages'], [null, l.name]]} />
      <header className="detail-head">
        <div className="page-head">
          <p className="eyebrow">{l.category} · {l.era}</p>
          <h1>{l.name}</h1>
          <Aka items={l.aka} />
          <p className="lede">{l.summary}</p>
        </div>
        <div className="actions">
          <Pin kind="language" id={l.id} /><CompareButton id={l.id} name={l.name} />
          <button className="btn btn--ghost btn--sm builder-only" type="button" onClick={() => document.getElementById('design-md')?.scrollIntoView({ behavior: 'smooth' })}>DESIGN.md ↓</button>
        </div>
      </header>

      <div className="tile"><LangFrame lang={l} tall /></div>

      <div className="detail-grid">
        <div className="page" style={{ gap: 36 }}>
          <section className="section"><h2 className="sec">Origin</h2><div className="prose"><p>{l.origin}</p></div></section>
          <div className="two-col">
            <section className="section"><h3 className="sub">How to recognise it</h3><Bullets items={l.identify} /></section>
            <section className="section"><h3 className="sub">Principles</h3><Bullets items={l.principles} /></section>
          </div>

          <section className="section">
            <h2 className="sec">Colour</h2>
            <p className="muted">{l.color.strategy}</p>
            <div className="swatches">{l.color.palette.map(sw => (
              <CopyButton key={sw.name + sw.hex} text={sw.hex} className="swatch" ariaLabel={`Copy ${sw.name} ${sw.hex}`}
                label={<><i style={{ background: sw.hex }} /><span><b>{sw.name}</b><code>{sw.hex} · {sw.role ?? ''}</code></span></>} />
            ))}</div>
          </section>

          <section className="section">
            <h2 className="sec">Typography</h2>
            <p className="muted">{ty.approach}</p>
            <div className="panel face-row">{faceRows.map(([role, tf, key]) => (
              <div className="face-line" key={key}>
                <span className="role">{role}</span>
                <Link className="sample" to={`/typeface/${tf.id}`} style={{ fontFamily: faceFamily(tf), color: 'inherit', textDecoration: 'none' }}>
                  {tf.name}<small>{nameOf('classifications', tf.classification)} · {tf.license}{tf.previewNote ? ` · ${tf.previewNote}` : ''}</small>
                </Link>
              </div>
            ))}</div>
            <p className="small"><b>Scale:</b> {ty.scale || '—'}{ty.notes ? ` — ${ty.notes}` : ''}</p>
          </section>

          <div className="two-col">
            <section className="section"><h3 className="sub">Shape &amp; depth</h3>
              <dl className="facts"><dt>Radius</dt><dd>{l.shape.radius || '—'}</dd><dt>Borders</dt><dd>{l.shape.borders || '—'}</dd><dt>Elevation</dt><dd>{l.shape.elevation || '—'}</dd><dt>Texture</dt><dd>{l.shape.texture || '—'}</dd></dl>
            </section>
            <section className="section"><h3 className="sub">Layout &amp; imagery</h3>
              <dl className="facts"><dt>Grid</dt><dd>{l.layout.grid || '—'}</dd><dt>Density</dt><dd>{l.layout.density || '—'}</dd><dt>Imagery</dt><dd>{l.imagery || '—'}</dd></dl>
            </section>
          </div>

          {lays.length > 0 && <section className="section"><h2 className="sec">Layout patterns</h2><div className="grid grid--layouts">{lays.map(x => <LayoutTile key={x.id} layout={x} compact />)}</div></section>}

          <section className="section">
            <h2 className="sec">Motion</h2>
            <p className="muted">{l.motion.character}</p>
            <p className="small"><b>Easing:</b> <code>{l.motion.easing || '—'}</code>{l.motion.duration && <> · <b>Duration:</b> {l.motion.duration}</>}</p>
            <EntityChips kind="animation" ids={l.motion.animations} />
          </section>

          {sigComps.length > 0 && <section className="section"><h2 className="sec">Signature components, rendered in this style</h2>
            <p className="muted">{l.components.notes}</p>
            <div className="previews-strip">{sigComps.map(c => (
              <div className="mini" key={c.id}><header><Link to={`/component/${c.id}`}>{c.name}</Link><Pin kind="component" id={c.id} /></header><CompFrame comp={c} langId={l.id} /></div>
            ))}</div></section>}

          <section className="section"><h2 className="sec">Do &amp; don't</h2>
            <div className="do-dont"><div className="do"><h4>Do</h4><Bullets items={l.dos} /></div><div className="dont"><h4>Don't</h4><Bullets items={l.donts} /></div></div>
            {l.a11y && <p className="small"><b>Accessibility:</b> {l.a11y}</p>}
          </section>

          <section className="section builder-only" id="design-md">
            <div className="detail-head"><h2 className="sec">DESIGN.md</h2><div className="actions">
              <CopyButton text={md} label="Copy" message="DESIGN.md copied" className="btn btn--sm" />
              <button className="btn btn--ghost btn--sm" type="button" onClick={() => download(`${l.id}.DESIGN.md`, md)}>Download</button>
            </div></div>
            <p className="muted small">Google Labs <a href="https://github.com/google-labs-code/design.md" target="_blank" rel="noopener">DESIGN.md format</a> (alpha): tokens in the front matter, rationale in prose. Drop it into a project and a coding agent will build in this style. Also saved as <code>design-md/{l.id}.md</code>.</p>
            <CodeBox code={md} />
          </section>
        </div>

        <aside>
          <Panel title="Best for"><EntityChips kind="purpose" ids={l.purposes} variant="chip--good" /></Panel>
          <Panel title="Avoid for"><EntityChips kind="purpose" ids={l.avoidFor} variant="chip--bad" /></Panel>
          <Panel title="Pairs well with"><EntityChips kind="language" ids={l.pairsWith} /></Panel>
          <Panel title="Live examples"><ExtLinks items={l.examples} /></Panel>
          <Panel title="References"><ExtLinks items={l.references} /></Panel>
        </aside>
      </div>
    </div>
  );
}
