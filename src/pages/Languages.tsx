import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { languages, purposes } from '../data';
import { LangTile } from '../components/tiles';
import { ChipFilter, PageHead } from '../components/ui';
import { useDocumentTitle } from '../hooks';
import { useAtlas } from '../state/AtlasContext';

const CATEGORIES = [...new Set(languages.map(l => l.category))];

export default function Languages() {
  useDocumentTitle('Design languages');
  const { compare } = useAtlas();
  const [cat, setCat] = useState('');
  const [purpose, setPurpose] = useState('');
  const [text, setText] = useState('');
  const shown = useMemo(() => {
    const t = text.trim().toLowerCase();
    return languages.filter(l => (!cat || l.category === cat)
      && (!purpose || l.purposes.includes(purpose))
      && (!t || [l.name, ...l.aka, l.category, l.era].join(' ').toLowerCase().includes(t)));
  }, [cat, purpose, text]);
  return (
    <div className="page">
      <PageHead eyebrow={`Atlas · ${languages.length} entries`} title="Design languages"
        lede="Movements, platform systems, surface styles and aesthetics — each rendered live with the same mini landing page so you can compare like with like." />
      <div className="filters" role="search">
        <ChipFilter label="Category" options={CATEGORIES.map(c => [c, c])} value={cat} onChange={setCat} />
        <span className="field"><label htmlFor="f-purpose">Purpose</label>
          <select className="select" id="f-purpose" value={purpose} onChange={e => setPurpose(e.target.value)}>
            <option value="">Any</option>{purposes.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select></span>
        <input className="text-input" type="search" placeholder="Filter by name…" aria-label="Filter languages by name" value={text} onChange={e => setText(e.target.value)} />
        <Link className="btn btn--sm" to="/compare">Compare <span>{compare.length}</span> →</Link>
        <span className="count" aria-live="polite">{shown.length} shown</span>
      </div>
      <div className="grid grid--langs">{shown.map(l => <LangTile key={l.id} lang={l} />)}</div>
    </div>
  );
}
