import { useEffect, type ReactNode } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import type { Language } from '../types';
import { get, languages, nameOf, resolve } from '../data';
import { appUrl } from '../lib/util';
import { useDocumentTitle } from '../hooks';
import { MAX_COMPARE, useAtlas } from '../state/AtlasContext';
import { LangFrame } from '../components/previews';
import { CopyButton, PageHead, Pin } from '../components/ui';

export default function Compare() {
  useDocumentTitle('Compare');
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { compare, setCompare } = useAtlas();
  /* a shared ?ids= link shows that set (and adopts it as the current selection) */
  const fromUrl = [...new Set((params.get('ids') ?? '').split(',').filter(x => get('languages', x)))].slice(0, MAX_COMPARE);
  const urlKey = fromUrl.join(',');
  useEffect(() => { if (urlKey) setCompare(urlKey.split(',')); }, [urlKey, setCompare]);
  const ids = urlKey ? fromUrl : compare;
  const langs = resolve('languages', ids);
  const link = (client = false) => appUrl(`/compare?ids=${ids.join(',')}${client ? '&client=1' : ''}`);
  const sync = (next: string[]) => { setCompare(next); navigate(next.length ? `/compare?ids=${next.join(',')}` : '/compare', { replace: true }); };

  const faces = (list: string[]) => list.slice(0, 2).map(id => nameOf('typefaces', id)).join(', ') || '—';
  const rows: [string, (l: Language) => ReactNode][] = [
    ['Category', l => l.category], ['Era', l => l.era],
    ['Palette', l => <div className="chips">{l.color.palette.slice(0, 6).map(s => <span key={s.name} title={`${s.name} ${s.hex}`} style={{ display: 'inline-block', width: 22, height: 22, borderRadius: 6, border: '1px solid var(--rule)', background: s.hex }} />)}</div>],
    ['Display type', l => faces(l.typography.display)], ['Body type', l => faces(l.typography.body)],
    ['Radius', l => l.shape.radius || '—'], ['Elevation', l => l.shape.elevation || '—'], ['Motion', l => l.motion.character || '—'],
    ['Best for', l => l.purposes.map(x => nameOf('purposes', x)).join(', ') || '—'],
    ['Avoid for', l => l.avoidFor.map(x => nameOf('purposes', x)).join(', ') || '—'],
  ];
  return (
    <div className="page">
      <PageHead eyebrow="Decide" title="Compare" lede="Up to four design languages side by side, same content, same components. Share the link so a client can weigh in." />
      <div className="actions">
        <span className="field"><label htmlFor="cmp-add">Add</label>
          <select className="select" id="cmp-add" value="" onChange={e => e.target.value && sync([...ids, e.target.value].slice(-MAX_COMPARE))}>
            <option value="">Choose a language…</option>
            {languages.filter(l => !ids.includes(l.id)).map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
          </select></span>
        {langs.length > 0 && <>
          <CopyButton text={link()} label="Copy share link" message="Compare link copied" />
          <CopyButton text={link(true)} label="Copy client link" message="Client link copied — it opens in the simplified client view" className="btn btn--ghost btn--sm builder-only" />
          <button className="btn btn--ghost btn--sm" type="button" onClick={() => sync([])}>Clear</button>
        </>}
      </div>
      {langs.length ? <>
        <div className="compare-grid" style={{ ['--n' as string]: langs.length }}>{langs.map(l => (
          <div className="mini" key={l.id}>
            <header><Link to={`/language/${l.id}`}>{l.name}</Link>
              <span className="actions"><Pin kind="language" id={l.id} />
                <button className="icon-x" type="button" aria-label={`Remove ${l.name} from compare`} onClick={() => sync(ids.filter(x => x !== l.id))}>×</button></span></header>
            <LangFrame lang={l} />
          </div>
        ))}</div>
        <div className="compare-rows" style={{ ['--n' as string]: langs.length }}>
          {rows.map(([label, fn]) => <div key={label}><b>{label}</b>{langs.map(l => <div key={l.id}>{fn(l)}</div>)}</div>)}
        </div>
      </> : <div className="empty">Nothing to compare yet. Add languages above, or press “Compare” on any design language.</div>}
    </div>
  );
}
