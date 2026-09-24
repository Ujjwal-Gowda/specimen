import { useParams } from 'react-router';
import { get } from '../data';
import { useDocumentTitle } from '../hooks';
import { DemoStage } from '../components/previews';
import { Aka, CodeBox, Crumbs, EntityChips, ExtLinks, NotFound, Panel, Pin } from '../components/ui';

export default function Animation() {
  const { id = '' } = useParams();
  const a = get('animations', id);
  useDocumentTitle(a?.name ?? 'Not found');
  if (!a) return <NotFound />;
  return (
    <div className="page">
      <Crumbs trail={[['/motion', 'Motion'], [null, a.name]]} />
      <header className="detail-head">
        <div className="page-head"><p className="eyebrow">{a.category}</p><h1>{a.name}</h1><Aka items={a.aka} /><p className="lede">{a.summary}</p></div>
        <div className="actions"><Pin kind="animation" id={a.id} /></div>
      </header>
      <DemoStage key={a.id} id={a.id} name={a.name} big />
      <div className="detail-grid">
        <div className="page" style={{ gap: 28 }}>
          <section className="section"><h2 className="sec">How it's built</h2><p>{a.technique}</p></section>
          {a.snippet && <section className="section"><h2 className="sec">Snippet</h2><CodeBox code={a.snippet} copy /></section>}
          <section className="section"><h2 className="sec">Accessibility</h2><p>{a.a11y}</p></section>
        </div>
        <aside>
          <Panel title="Timing"><dl className="facts"><dt>Easing</dt><dd><code>{a.easing || '—'}</code></dd><dt>Duration</dt><dd>{a.duration || '—'}</dd></dl></Panel>
          <Panel title="Libraries"><ExtLinks items={a.libraries} /></Panel>
          <Panel title="Fits these languages"><EntityChips kind="language" ids={a.languages} /></Panel>
        </aside>
      </div>
    </div>
  );
}
