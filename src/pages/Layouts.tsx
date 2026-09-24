import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { layouts } from '../data';
import { useDocumentTitle } from '../hooks';
import { LayoutTile } from '../components/tiles';
import { PageHead } from '../components/ui';

export default function Layouts() {
  useDocumentTitle('Layouts');
  const [params] = useSearchParams();
  const focus = params.get('focus');
  const [text, setText] = useState('');
  const shown = useMemo(() => {
    const t = text.trim().toLowerCase();
    return layouts.filter(x => !t || [x.name, ...x.aka].join(' ').toLowerCase().includes(t));
  }, [text]);
  useEffect(() => {
    const el = focus && document.getElementById(`layout-${focus}`);
    if (el) setTimeout(() => el.scrollIntoView({ block: 'center' }), 60);
  }, [focus]);
  return (
    <div className="page">
      <PageHead eyebrow={`Atlas · ${layouts.length} entries`} title="Layouts" lede="Named grid systems and page structures, drawn as wireframes." />
      <div className="filters" role="search">
        <input className="text-input" type="search" placeholder="Filter layouts…" aria-label="Filter layouts" value={text} onChange={e => setText(e.target.value)} />
        <span className="count" aria-live="polite">{shown.length} shown</span>
      </div>
      <div className="grid grid--layouts">{shown.map(x => <LayoutTile key={x.id} layout={x} highlight={x.id === focus} />)}</div>
    </div>
  );
}
