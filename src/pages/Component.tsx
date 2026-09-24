import { useParams } from 'react-router';
import { get, languages, purposes } from '../data';
import { LIBS } from '../lib/components';
import { useDocumentTitle } from '../hooks';
import { useAtlas } from '../state/AtlasContext';
import { CompFrame } from '../components/previews';
import { ThemePicker } from '../components/ThemePicker';
import { Bullets, Crumbs, EntityChips, NotFound, Panel, Pin } from '../components/ui';

export default function Component() {
  const { id = '' } = useParams();
  const c = get('components', id);
  const { compTheme, setCompTheme } = useAtlas();
  useDocumentTitle(c?.name ?? 'Not found');
  if (!c) return <NotFound />;
  const aliasRows = LIBS.filter(([k]) => c.aliases[k]);
  return (
    <div className="page">
      <Crumbs trail={[['/components', 'Components'], [null, c.name]]} />
      <header className="detail-head">
        <div className="page-head"><p className="eyebrow">{c.category}</p><h1>{c.name}</h1><p className="lede">{c.summary}</p></div>
        <div className="actions"><Pin kind="component" id={c.id} /></div>
      </header>
      <div className="tile">
        <CompFrame comp={c} langId={compTheme} />
        <div className="tile__body">
          <ThemePicker />
          <div className="chips chips--scroll" role="group" aria-label="Render in design language">
            {languages.map(l => <button key={l.id} className="chip" type="button" aria-pressed={l.id === compTheme} onClick={() => setCompTheme(l.id)}>{l.name}</button>)}
          </div>
        </div>
      </div>
      <div className="detail-grid">
        <div className="page" style={{ gap: 32 }}>
          <section className="section builder-only"><h2 className="sec">What each library calls it</h2>
            <div className="table-wrap"><table className="data"><thead><tr><th>Library / system</th><th>Name</th></tr></thead><tbody>
              {aliasRows.length ? aliasRows.map(([k, l]) => <tr key={k}><td>{l}</td><td><b>{c.aliases[k]}</b></td></tr>) : <tr><td colSpan={2}>—</td></tr>}
            </tbody></table></div>
          </section>
          <div className="two-col">
            <section className="section"><h3 className="sub">Anatomy</h3><Bullets items={c.anatomy} /></section>
            <section className="section"><h3 className="sub">Variants</h3><Bullets items={c.variants} />
              <h3 className="sub" style={{ marginTop: 14 }}>States</h3><div className="chips">{c.states.map(s => <span key={s} className="chip chip--quiet">{s}</span>)}</div></section>
          </div>
          <div className="two-col">
            <section className="section"><h3 className="sub">Use it when</h3><p>{c.whenToUse || '—'}</p></section>
            <section className="section"><h3 className="sub">Avoid when</h3><p>{c.avoid || '—'}</p></section>
          </div>
          <section className="section builder-only"><h3 className="sub">Accessibility</h3><p>{c.aria || '—'}</p></section>
        </div>
        <aside>
          <Panel title="Signature in"><EntityChips kind="language" ids={c.languages} /></Panel>
          <Panel title="Used on"><EntityChips kind="purpose" ids={purposes.filter(p => p.sections.includes(c.id)).map(p => p.id)} /></Panel>
        </aside>
      </div>
    </div>
  );
}
