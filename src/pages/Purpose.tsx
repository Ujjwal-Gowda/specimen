import { Link, useNavigate, useParams } from 'react-router';
import { get, nameOf, resolve } from '../data';
import { faceFamily, faceFonts } from '../lib/fonts';
import { useDocumentTitle, useFonts } from '../hooks';
import { useAtlas } from '../state/AtlasContext';
import { LangFrame } from '../components/previews';
import { Crumbs, EntityChips, ExtLinks, NotFound, Panel, Pin } from '../components/ui';

export default function Purpose() {
  const { id = '' } = useParams();
  const p = get('purposes', id);
  const { setBrief } = useAtlas();
  const navigate = useNavigate();
  useDocumentTitle(p?.name ?? 'Not found');
  const faces = resolve('typefaces', p?.typefaces);
  useFonts(...faces.map(faceFonts));
  if (!p) return <NotFound />;
  const ranked = resolve('languages', p.languages);
  const start = () => {
    setBrief(b => ({ ...b, purpose: p.id, language: ranked[0] && !b.language.includes(ranked[0].id) ? [...b.language, ranked[0].id] : b.language }));
    navigate('/brief');
  };
  return (
    <div className="page">
      <Crumbs trail={[['/purposes', 'By purpose'], [null, p.name]]} />
      <header className="detail-head">
        <div className="page-head"><p className="eyebrow">Purpose</p><h1>{p.name}</h1><p className="lede">{p.goals}</p></div>
        <div className="actions"><button className="btn btn--marker" type="button" onClick={start}>Start a brief for this</button><Pin kind="purpose" id={p.id} /></div>
      </header>
      <div className="detail-grid">
        <div className="page" style={{ gap: 32 }}>
          <section className="section"><h2 className="sec">Recommended design languages</h2>
            <div className="previews-strip rank">{ranked.map(l => (
              <div className="mini" key={l.id}><header><Link to={`/language/${l.id}`}>{l.name}</Link><Pin kind="language" id={l.id} /></header><LangFrame lang={l} compact /></div>
            ))}</div></section>
          <section className="section"><h2 className="sec">Typical page, top to bottom</h2>
            <ol className="skeleton-page">{p.sections.filter(s => get('components', s)).map(s => <li key={s}><Link to={`/component/${s}`}>{nameOf('components', s)}</Link></li>)}</ol></section>
          <section className="section"><h2 className="sec">Typefaces that suit it</h2>
            <div className="panel face-row">{faces.map(tf => (
              <div className="face-line" key={tf.id}><span className="role">{nameOf('classifications', tf.classification)}</span>
                <Link className="sample" to={`/typeface/${tf.id}`} style={{ fontFamily: faceFamily(tf), color: 'inherit', textDecoration: 'none' }}>{tf.name}<small>{tf.license}</small></Link></div>
            ))}</div></section>
          <div className="two-col">
            <section className="section"><h3 className="sub">Layouts</h3><EntityChips kind="layout" ids={p.layouts} /></section>
            <section className="section"><h3 className="sub">Motion</h3><EntityChips kind="animation" ids={p.animations} /></section>
          </div>
          <section className="section"><h3 className="sub">Colour</h3><p>{p.color}</p></section>
        </div>
        <aside>
          <Panel title="Audience"><p className="small" style={{ margin: 0 }}>{p.audience}</p></Panel>
          <Panel title="Tone"><p className="small" style={{ margin: 0 }}>{p.tone}</p></Panel>
          <Panel title="Avoid"><EntityChips kind="language" ids={p.avoid} variant="chip--bad" /></Panel>
          <Panel title="Real examples"><ExtLinks items={p.examples} /></Panel>
        </aside>
      </div>
    </div>
  );
}
