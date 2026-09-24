import { color } from '../data';
import { useDocumentTitle } from '../hooks';
import { PageHead } from '../components/ui';

export default function Color() {
  useDocumentTitle('Colour');
  return (
    <div className="page">
      <PageHead eyebrow="Atlas · Colour" title="Colour" lede="Harmony names, the rules that keep palettes usable, the colour models worth knowing, and how to do dark mode properly." />
      <section className="section"><h2 className="sec">Harmonies</h2>
        <div className="grid grid--layouts">{color.harmonies.map(h => (
          <article className="tile" key={h.name}>
            <div className="wire" style={{ gridTemplateColumns: `repeat(${h.example.length || 1},1fr)`, minHeight: 110 }}>
              {h.example.map(x => <div key={x} style={{ background: x, borderColor: 'transparent' }} title={x} />)}
            </div>
            <div className="tile__body"><h3 className="tile__title">{h.name}</h3><p className="small">{h.def}</p><p className="small muted"><code>{h.example.join(' ')}</code></p></div>
          </article>
        ))}</div></section>
      <section className="section"><h2 className="sec">Rules</h2><dl className="glossary">{color.rules.map(r => <div key={r.name}><dt>{r.name}</dt><dd>{r.def}</dd></div>)}</dl></section>
      <section className="section"><h2 className="sec">Colour models</h2>
        <div className="table-wrap"><table className="data"><thead><tr><th>Model</th><th>What it is</th><th>CSS</th></tr></thead><tbody>
          {color.models.map(m => <tr key={m.name}><td><b>{m.name}</b></td><td>{m.def}</td><td><code>{m.css}</code></td></tr>)}
        </tbody></table></div></section>
      <section className="section"><h2 className="sec">Dark mode</h2><dl className="glossary">{color.darkMode.map(r => <div key={r.name}><dt>{r.name}</dt><dd>{r.def}</dd></div>)}</dl></section>
    </div>
  );
}
