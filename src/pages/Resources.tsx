import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import type { Pricing, Resource } from '../types';
import { resourceCategories, resources } from '../data';
import { hostOf } from '../lib/util';
import { useDocumentTitle } from '../hooks';
import { ChipFilter, PageHead, Pin } from '../components/ui';

/* How much it costs to use. Open source is its own option: it overlaps with the pricing ones. */
const ACCESS: { id: string; label: string; hint: string; test: (r: Resource) => boolean }[] = [
  { id: 'free', label: 'Completely free', hint: 'No paid plan needed for any feature', test: r => r.pricing === 'Free' },
  { id: 'oss', label: 'Open source', hint: 'Code or font files under an open-source licence', test: r => !!r.openSource },
  { id: 'freemium', label: 'Free tier', hint: 'Useful for free, with paid upgrades', test: r => r.pricing === 'Freemium' },
  { id: 'trial', label: 'Free trial', hint: 'Try free, then pay', test: r => r.pricing === 'Free trial' },
  { id: 'paid', label: 'Paid only', hint: 'No free use', test: r => r.pricing === 'Paid' },
];
const PRICE_LABEL: Record<Pricing, string> = { Free: 'Free', Freemium: 'Free tier', 'Free trial': 'Free trial', Paid: 'Paid' };
const catName = (id: string) => resourceCategories.find(c => c.id === id)?.name ?? id;

function ResourceCard({ r, highlight }: { r: Resource; highlight: boolean }) {
  return (
    <article className="tile res-card" id={`res-${r.id}`} style={highlight ? { boxShadow: '0 0 0 3px var(--marker)' } : undefined}>
      <div className="tile__body">
        <p className="tile__meta"><span>{r.categories.map(catName).join(' · ')}</span></p>
        <div className="res-card__head">
          <h3 className="tile__title"><a href={r.url} target="_blank" rel="noopener">{r.name} <span aria-hidden="true">↗</span></a></h3>
          <span className="price-tags">
            <span className={`price price--${r.pricing.toLowerCase().replace(' ', '-')}`}>{PRICE_LABEL[r.pricing]}</span>
            {r.openSource && <span className="price price--oss">Open source</span>}
          </span>
        </div>
        <p className="muted small res-card__host">{hostOf(r.url)}</p>
        <p className="small">{r.description}</p>
        <p className="small"><b>Best for:</b> {r.bestFor}</p>
        <div className="pro-con">
          <div className="do"><h4>Pros</h4><ul className="bullets">{r.pros.map(p => <li key={p}>{p}</li>)}</ul></div>
          <div className="dont"><h4>Cons</h4><ul className="bullets">{r.cons.map(c => <li key={c}>{c}</li>)}</ul></div>
        </div>
        <div className="tile__actions"><Pin kind="resource" id={r.id} /></div>
      </div>
    </article>
  );
}

export default function Resources() {
  useDocumentTitle('Resources');
  /* filters live in the URL, so a filtered view can be shared and Back restores it */
  const [params, setParams] = useSearchParams();
  const focus = params.get('focus');
  const catParam = params.get('cat') ?? '';
  const accessParam = params.get('access') ?? '';
  const cat = resourceCategories.some(c => c.id === catParam) ? catParam : '';
  const access = ACCESS.some(a => a.id === accessParam) ? accessParam : '';
  const [text, setText] = useState('');
  const setFilter = (key: 'cat' | 'access', value: string) => setParams(prev => {
    const next = new URLSearchParams(prev);
    if (value) next.set(key, value); else next.delete(key);
    next.delete('focus');
    return next;
  }, { replace: true });
  const setCat = (v: string) => setFilter('cat', v);
  const setAccess = (v: string) => setFilter('access', v);
  const shown = useMemo(() => {
    if (focus) return resources; // deep link to one resource: show everything so it can be found
    const t = text.trim().toLowerCase();
    const accessTest = ACCESS.find(a => a.id === access)?.test;
    return resources.filter(r => (!cat || r.categories.includes(cat)) && (!accessTest || accessTest(r))
      && (!t || [r.name, r.description, r.bestFor, ...r.pros].join(' ').toLowerCase().includes(t)));
  }, [cat, access, text, focus]);
  /* counts per access option, within the current need */
  const inCat = cat ? resources.filter(r => r.categories.includes(cat)) : resources;
  const groups = resourceCategories.map(c => ({ c, items: shown.filter(r => (cat ? r.categories.includes(c.id) : r.categories[0] === c.id)) })).filter(g => g.items.length);

  useEffect(() => {
    const el = focus && document.getElementById(`res-${focus}`);
    if (el) setTimeout(() => el.scrollIntoView({ block: 'center' }), 60);
  }, [focus]);

  return (
    <div className="page">
      <PageHead eyebrow={`Toolbox · ${resources.length} sites and tools`} title="Resources"
        lede="The websites and tools worth knowing for each job — inspiration, components, motion, fonts, colour, icons, imagery, generators, mockups, learning, accessibility and building — each with what it's good at and where it falls short." />
      <div className="filters" role="search">
        <ChipFilter label="Need" options={resourceCategories.map(c => [c.id, c.name])} value={cat} onChange={setCat} allLabel="Every need" />
        <div className="chips" role="group" aria-label="Cost">
          <button className="chip" type="button" aria-pressed={access === ''} onClick={() => setAccess('')}>Any cost <span className="chip__n">{inCat.length}</span></button>
          {ACCESS.map(a => (
            <button key={a.id} className="chip" type="button" title={a.hint} aria-pressed={access === a.id} onClick={() => setAccess(access === a.id ? '' : a.id)}>
              {a.label} <span className="chip__n">{inCat.filter(a.test).length}</span>
            </button>
          ))}
        </div>
        <input className="text-input" type="search" placeholder="Filter — “icons”, “tailwind”, “contrast”…" aria-label="Filter resources" value={text} onChange={e => setText(e.target.value)} />
        <span className="count" aria-live="polite">{shown.length} shown</span>
      </div>
      {groups.length ? groups.map(({ c, items }) => (
        <section className="section" key={c.id} aria-labelledby={`rc-${c.id}`}>
          <div className="detail-head">
            <div><h2 className="sec" id={`rc-${c.id}`}>{c.name}</h2><p className="muted" style={{ margin: 0 }}>{c.need}</p></div>
            {c.related && <Link className="btn btn--ghost btn--sm" to={c.related.href}>In the atlas: {c.related.label} →</Link>}
          </div>
          <div className="grid grid--res">{items.map(r => <ResourceCard key={r.id} r={r} highlight={r.id === focus} />)}</div>
        </section>
      )) : <div className="empty">No resources match those filters.</div>}
    </div>
  );
}
