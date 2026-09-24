/* Small presentational pieces shared by every page. */
import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router';
import { KINDS, get, type Kind } from '../data';
import type { ExtLink } from '../types';
import { copyText, hostOf } from '../lib/util';
import { useAtlas } from '../state/AtlasContext';
import { useDocumentTitle } from '../hooks';

export function Bullets({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return <ul className="bullets">{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
}

export function ExtLinks({ items }: { items?: ExtLink[] }) {
  if (!items?.length) return <p className="muted small">—</p>;
  return (
    <ul className="bullets">
      {items.map(x => (
        <li key={x.url}><a href={x.url} target="_blank" rel="noopener">{x.name || x.label}</a> <span className="muted small">{hostOf(x.url)}</span></li>
      ))}
    </ul>
  );
}

export function Aka({ items, label = true, max }: { items?: string[]; label?: boolean; max?: number }) {
  if (!items?.length) return null;
  const list = max ? items.slice(0, max) : items;
  return <p className="aka">{label && <b>Also called </b>}{list.join(' · ')}</p>;
}

/** Links to atlas entries by ID; unknown IDs are dropped. */
export function EntityChips({ kind, ids, variant = '' }: { kind: Kind; ids?: string[]; variant?: string }) {
  const k = KINDS[kind];
  const list = (ids ?? []).filter(id => get(k.coll, id));
  if (!list.length) return <p className="muted small">—</p>;
  return <div className="chips">{list.map(id => <Link key={id} className={`chip ${variant}`} to={k.href(id)}>{get(k.coll, id)!.name}</Link>)}</div>;
}

export function Crumbs({ trail }: { trail: [string | null, string][] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map(([href, label], i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {href ? <Link to={href}>{label}</Link> : <span aria-current="page">{label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHead({ eyebrow, title, lede, children }: { eyebrow?: ReactNode; title: ReactNode; lede?: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children}
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}

export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return <div className="panel"><h3>{title}</h3>{children}</div>;
}

const PIN_SVG = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6z" /></svg>;
const HEART_SVG = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14s-5.5-3.4-5.5-7.3A3 3 0 0 1 8 4.8a3 3 0 0 1 5.5 1.9C13.5 10.6 8 14 8 14z" /></svg>;

/** "Add to brief" — a heart and "I like this" in client mode. */
export function Pin({ kind, id, label }: { kind: Kind; id: string; label?: string }) {
  const { isPinned, togglePin, clientMode } = useAtlas();
  const on = isPinned(kind, id);
  const name = label ?? get(KINDS[kind].coll, id)?.name ?? id;
  const text = clientMode ? (on ? 'Liked' : 'I like this') : (on ? 'In brief' : 'Add to brief');
  return (
    <button className="pin" type="button" aria-pressed={on} aria-label={clientMode ? `Like ${name}` : `Add ${name} to brief`} onClick={() => togglePin(kind, id)}>
      {clientMode ? HEART_SVG : PIN_SVG}<span>{text}</span>
    </button>
  );
}

export function CompareButton({ id, name, className = 'pin' }: { id: string; name: string; className?: string }) {
  const { compare, toggleCompare } = useAtlas();
  const on = compare.includes(id);
  return <button className={className} type="button" aria-pressed={on} aria-label={`Compare ${name}`} onClick={() => toggleCompare(id)}>{on ? 'Comparing' : 'Compare'}</button>;
}

export function CopyButton({ text, label = 'Copy', ariaLabel, message, className = 'btn btn--ghost btn--sm', style }: { text: string; label?: ReactNode; ariaLabel?: string; message?: string; className?: string; style?: CSSProperties }) {
  const { toast } = useAtlas();
  return <button className={className} style={style} type="button" aria-label={ariaLabel} onClick={async () => { await copyText(text); toast(message ?? `Copied ${text.length > 24 ? 'snippet' : text}`); }}>{label}</button>;
}

export function CodeBox({ code, copy }: { code: string; copy?: boolean }) {
  return (
    <div className="codebox">
      <pre tabIndex={0}>{code}</pre>
      {copy && <CopyButton text={code} style={{ background: 'var(--card)' }} />}
    </div>
  );
}

/** A row of toggle chips; `''` means "All". */
export function ChipFilter({ options, value, onChange, allLabel = 'All', label }: { options: [string, string][]; value: string; onChange: (v: string) => void; allLabel?: string; label: string }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {[['', allLabel] as [string, string], ...options].map(([v, l]) => (
        <button key={v || '_all'} className="chip" type="button" aria-pressed={value === v} onClick={() => onChange(v)}>{l}</button>
      ))}
    </div>
  );
}

export function NotFound() {
  useDocumentTitle('Not found');
  return <div className="page"><PageHead title="Not found" lede={<>That entry doesn't exist. Try the search (<kbd>/</kbd>).</>} /></div>;
}
