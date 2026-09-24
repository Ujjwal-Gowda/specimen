import { useMemo, useState } from 'react';
import { animations } from '../data';
import { prefersReducedMotion } from '../lib/util';
import { useDocumentTitle } from '../hooks';
import { AnimTile } from '../components/tiles';
import { ChipFilter, PageHead } from '../components/ui';

const CATEGORIES = [...new Set(animations.map(a => a.category))];

export default function Motion() {
  useDocumentTitle('Motion');
  const [cat, setCat] = useState('');
  const [text, setText] = useState('');
  const shown = useMemo(() => {
    const t = text.trim().toLowerCase();
    return animations.filter(a => (!cat || a.category === cat) && (!t || [a.name, ...a.aka, a.category].join(' ').toLowerCase().includes(t)));
  }, [cat, text]);
  return (
    <div className="page">
      <PageHead eyebrow={`Atlas · ${animations.length} entries`} title="Motion"
        lede={<>Named animations and interactions with live demos. Scroll demos scroll inside their own box; hover demos react to your pointer.{prefersReducedMotion() && <> <b>Reduced motion is on</b> — demos show their end state.</>}</>} />
      <div className="filters" role="search">
        <ChipFilter label="Category" options={CATEGORIES.map(c => [c, c])} value={cat} onChange={setCat} />
        <input className="text-input" type="search" placeholder="Filter — “parallax”, “ticker”…" aria-label="Filter animations" value={text} onChange={e => setText(e.target.value)} />
        <span className="count" aria-live="polite">{shown.length} shown</span>
      </div>
      <div className="grid grid--motion">{shown.map(a => <AnimTile key={a.id} anim={a} />)}</div>
    </div>
  );
}
