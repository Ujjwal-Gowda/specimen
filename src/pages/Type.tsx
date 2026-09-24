import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { classifications, get, nameOf, pairings, typeScales, typeTerms, typefaces } from '../data';
import { isFreeLicense } from '../lib/fonts';
import { useDocumentTitle } from '../hooks';
import { PairSpecimen } from '../components/previews';
import { FaceTile } from '../components/tiles';
import { Aka, Bullets, ChipFilter, EntityChips, PageHead, Pin } from '../components/ui';

const CLASSES_USED = [...new Set(typefaces.map(t => t.classification))];
/* faces that render in their real design first */
const SORTED = [...typefaces].sort((a, b) => Number(!!b.googleFamily) - Number(!!a.googleFamily));
const SECTIONS: [string, string][] = [['faces', 'Typefaces'], ['classifications', 'Classifications'], ['pairings', 'Pairings'], ['scales', 'Type scales'], ['glossary', 'Glossary']];

function ScaleDemo() {
  const withRatio = typeScales.filter(s => s.ratio);
  const [id, setId] = useState(() => withRatio.find(s => /fourth/i.test(s.name) && !/aug/i.test(s.name))?.id ?? withRatio[0]?.id);
  const s = withRatio.find(x => x.id === id);
  return (
    <div className="panel">
      <span className="field"><label htmlFor="scale-pick">Preview</label>
        <select className="select" id="scale-pick" value={id} onChange={e => setId(e.target.value)}>
          {withRatio.map(x => <option key={x.id} value={x.id}>{x.name} ({x.ratio})</option>)}
        </select></span>
      <div className="scale-demo" style={{ marginTop: 12 }}>
        {s && [5, 4, 3, 2, 1, 0, -1].map(step => {
          const px = 16 * Math.pow(s.ratio!, step);
          return <div key={step}><span>{px.toFixed(1)}px</span><p style={{ fontSize: px }}>{step >= 3 ? 'Display heading' : step >= 1 ? 'Section title' : step === 0 ? 'Body text at the base size' : 'Caption / label'}</p></div>;
        })}
      </div>
    </div>
  );
}

export default function Type() {
  useDocumentTitle('Typography');
  const [params] = useSearchParams();
  const [cls, setCls] = useState('');
  const [lic, setLic] = useState('');
  const [google, setGoogle] = useState(false);
  const [text, setText] = useState('');
  const shown = useMemo(() => {
    const t = text.trim().toLowerCase();
    return SORTED.filter(tf => (!cls || tf.classification === cls)
      && (!lic || (isFreeLicense(tf.license) ? 'free' : 'paid') === lic)
      && (!google || !!tf.googleFamily)
      && (!t || [tf.name, tf.designer, tf.foundry, nameOf('classifications', tf.classification)].join(' ').toLowerCase().includes(t)));
  }, [cls, lic, google, text]);

  const focus = params.get('focus'); const sec = params.get('sec');
  useEffect(() => {
    const target = focus ? document.getElementById(`pair-${focus}`) : sec ? document.getElementById(`sec-${sec}`) : null;
    if (target) setTimeout(() => target.scrollIntoView({ block: 'start' }), 60);
  }, [focus, sec]);

  return (
    <div className="page">
      <PageHead eyebrow="Atlas · Typography" title="Typography"
        lede={`${typefaces.length} typefaces by their exact published names, the classification each belongs to, named pairings, modular scales and the vocabulary to talk about all of it. Commercial faces are flagged and come with free alternatives.`}>
      </PageHead>
      <nav className="chips chips--scroll" aria-label="Sections on this page">{SECTIONS.map(([k, l]) => <Link key={k} className="chip" to={`/type?sec=${k}`} replace>{l}</Link>)}</nav>

      <section className="section" id="sec-faces">
        <h2 className="sec">Typefaces</h2>
        <div className="filters" role="search">
          <ChipFilter label="Classification" options={CLASSES_USED.map(c => [c, nameOf('classifications', c)])} value={cls} onChange={setCls} />
          <ChipFilter label="Licence" allLabel="Any licence" options={[['free', 'Free'], ['paid', 'Commercial / personal']]} value={lic} onChange={setLic} />
          <span className="field"><input type="checkbox" id="f-google" checked={google} onChange={e => setGoogle(e.target.checked)} /><label htmlFor="f-google">On Google Fonts</label></span>
          <input className="text-input" type="search" placeholder="Name, designer, foundry…" aria-label="Filter typefaces" value={text} onChange={e => setText(e.target.value)} />
          <span className="count" aria-live="polite">{shown.length} shown</span>
        </div>
        <p className="small muted">Faces that render in their real design come first. Commercial and system faces show a free stand-in and are labelled as such.</p>
        <div className="grid grid--faces">{shown.map(tf => <FaceTile key={tf.id} tf={tf} />)}</div>
      </section>

      <section className="section" id="sec-classifications">
        <h2 className="sec">Classifications</h2>
        <p className="muted">Based on the Vox-ATypI system, with the everyday names designers actually use.</p>
        <div className="grid grid--purposes">{classifications.map(c => (
          <article className="tile" key={c.id}><div className="tile__body">
            <p className="tile__meta"><span>{c.era}</span></p>
            <h3 className="tile__title">{c.name}</h3>
            <Aka items={c.aka} />
            <p className="small">{c.origin}</p>
            <Bullets items={c.traits} />
            {c.landmark.length > 0 && <p className="small"><b>Landmarks:</b> {c.landmark.join(', ')}</p>}
            <EntityChips kind="typeface" ids={c.examples} />
          </div></article>
        ))}</div>
      </section>

      <section className="section" id="sec-pairings">
        <h2 className="sec">Named pairings</h2>
        <div className="grid grid--faces">{pairings.map(p => {
          const d = get('typefaces', p.display); const b = get('typefaces', p.body);
          return (
            <article className="tile pair-card" id={`pair-${p.id}`} key={p.id}>
              <PairSpecimen name={p.name} display={d} body={b} />
              <div className="tile__body">
                <p className="tile__meta"><span>{d?.name ?? p.display} + {b?.name ?? p.body}{p.mono ? ` + ${nameOf('typefaces', p.mono)}` : ''}</span></p>
                <p className="small">{p.why}</p>
                <EntityChips kind="language" ids={p.languages} />
                <div className="tile__actions"><Pin kind="pairing" id={p.id} label={p.name} /></div>
              </div>
            </article>
          );
        })}</div>
      </section>

      <section className="section" id="sec-scales">
        <h2 className="sec">Modular type scales</h2>
        <div className="two-col">
          <div className="table-wrap"><table className="data"><thead><tr><th>Name</th><th>Ratio</th><th>Interval</th><th>Feel</th></tr></thead><tbody>
            {typeScales.map(s => <tr key={s.id}><td><b>{s.name}</b></td><td className="num">{s.ratio ?? '—'}</td><td>{s.musical}</td><td>{s.feel || s.goodFor}</td></tr>)}
          </tbody></table></div>
          <ScaleDemo />
        </div>
      </section>

      <section className="section" id="sec-glossary">
        <h2 className="sec">Glossary</h2>
        <dl className="glossary">{typeTerms.map(t => <div key={t.term}><dt>{t.term}</dt><dd>{t.def}</dd></div>)}</dl>
      </section>
    </div>
  );
}
