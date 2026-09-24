import { useMemo, useState } from 'react';
import { components } from '../data';
import { useDocumentTitle } from '../hooks';
import { CompTile } from '../components/tiles';
import { ThemePicker } from '../components/ThemePicker';
import { ChipFilter, PageHead } from '../components/ui';

const CATEGORIES = [...new Set(components.map(c => c.category))];

export default function Components() {
  useDocumentTitle('Components');
  const [cat, setCat] = useState('');
  const [text, setText] = useState('');
  const shown = useMemo(() => {
    const t = text.trim().toLowerCase();
    return components.filter(c => (!cat || c.category === cat)
      && (!t || [c.name, ...Object.values(c.aliases), c.category].join(' ').toLowerCase().includes(t)));
  }, [cat, text]);
  return (
    <div className="page">
      <PageHead eyebrow={`Atlas · ${components.length} entries`} title="Components"
        lede="The canonical name for each UI component and what shadcn/ui, Radix, MUI, Material 3, Apple HIG, Fluent 2, Bootstrap and Ant Design call it. Re-render the whole library in any design language." />
      <div className="filters" role="search">
        <ChipFilter label="Category" options={CATEGORIES.map(c => [c, c])} value={cat} onChange={setCat} />
        <ThemePicker />
        <input className="text-input" type="search" placeholder="Name or alias — “modal”, “snackbar”…" aria-label="Filter components" value={text} onChange={e => setText(e.target.value)} />
        <span className="count" aria-live="polite">{shown.length} shown</span>
      </div>
      <div className="grid grid--comps">{shown.map(c => <CompTile key={c.id} comp={c} />)}</div>
    </div>
  );
}
