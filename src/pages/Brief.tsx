import { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { KINDS, get, purposes } from '../data';
import {
  briefCount, briefDesignMd, briefMarkdown, briefRoute, decodeBrief, emptyBrief, type Brief as BriefT, type ListKind,
} from '../lib/brief';
import { appUrl, copyText, download, hostOf } from '../lib/util';
import { useDocumentTitle } from '../hooks';
import { useAtlas } from '../state/AtlasContext';
import { CompFrame, DemoStage, FaceSpecimen, LangFrame, PairSpecimen, Wire } from '../components/previews';
import { PageHead } from '../components/ui';

const GROUPS: [ListKind, string][] = [
  ['language', 'Design language'], ['typeface', 'Typefaces'], ['pairing', 'Font pairings'], ['component', 'Components'],
  ['layout', 'Layouts'], ['animation', 'Motion'], ['resource', 'Resources'],
];

/** One picked item, shown the way a non-designer judges it: by looking. */
function BriefCard({ kind, id, view, readOnly }: { kind: ListKind; id: string; view: BriefT; readOnly: boolean }) {
  const { setBrief, togglePin, compTheme } = useAtlas();
  const key = `${kind}:${id}`;
  const note = view.itemNotes[key] ?? '';
  let visual = null; let name = id;
  switch (kind) {
    case 'language': { const x = get('languages', id); if (!x) return null; name = x.name; visual = <LangFrame lang={x} compact />; break; }
    case 'typeface': { const x = get('typefaces', id); if (!x) return null; name = x.name; visual = <FaceSpecimen tf={x} />; break; }
    case 'pairing': { const x = get('pairings', id); if (!x) return null; name = x.name; visual = <PairSpecimen name={x.name} display={get('typefaces', x.display)} body={get('typefaces', x.body)} short />; break; }
    case 'layout': { const x = get('layouts', id); if (!x) return null; name = x.name; visual = <Wire wire={x.wire} />; break; }
    case 'component': { const x = get('components', id); if (!x) return null; name = x.name; visual = <CompFrame comp={x} langId={view.language[0] ?? compTheme} />; break; }
    case 'animation': { const x = get('animations', id); if (!x) return null; name = x.name; visual = <DemoStage id={x.id} name={x.name} />; break; }
    case 'resource': { const x = get('resources', id); if (!x) return null; name = x.name; visual = <div className="res-thumb" aria-hidden="true"><b>{x.name}</b><span>{hostOf(x.url)}</span></div>; break; }
  }
  const inputId = `note-${key.replace(/[^a-z0-9]/gi, '-')}`;
  return (
    <article className="tile brief-card">{visual}<div className="tile__body">
      <h3 className="tile__title"><Link to={KINDS[kind].href(id)}>{name}</Link></h3>
      {readOnly ? (note && <p className="small"><b>Why:</b> {note}</p>) : <>
        <label className="small muted" htmlFor={inputId}>Why this one?</label>
        <input className="text-input note-input" id={inputId} type="text" value={note} placeholder="e.g. the colours feel like us" maxLength={500}
          onChange={e => {
            const v = e.target.value;
            setBrief(b => { const itemNotes = { ...b.itemNotes }; if (v.trim()) itemNotes[key] = v; else delete itemNotes[key]; return { ...b, itemNotes }; });
          }} />
        <div className="tile__actions"><button className="btn btn--ghost btn--sm" type="button" onClick={() => togglePin(kind, id)}>Remove</button></div>
      </>}
    </div></article>
  );
}

export default function Brief() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { brief, setBrief, toast, clientMode } = useAtlas();
  const s = params.get('s');
  const shared = useMemo(() => { if (!s) return null; try { return decodeBrief(s); } catch { return null; } }, [s]);
  const brokenLink = !!s && !shared;
  const view = shared ?? brief;
  const readOnly = !!shared;
  useDocumentTitle(readOnly ? 'Shared brief' : 'Brief');

  const total = briefCount(view);
  const firstLang = get('languages', view.language[0]);
  const shareLink = appUrl(briefRoute(view));
  const copy = async (text: string, msg: string) => { await copyText(text); toast(msg); };
  const md = () => briefMarkdown(view, shareLink);

  return (
    <div className="page">
      <PageHead eyebrow="Decide" title={readOnly ? 'Shared brief' : 'Your brief'}
        lede={readOnly ? 'Someone sent you this selection. Save it to keep editing it here.' : 'Everything you starred, ready to send. The share link carries the whole brief — no account, nothing stored on a server.'} />
      {brokenLink && <div className="banner" role="alert"><p><b>This share link is broken</b> — it was probably cut off when it was copied. Below is your own brief, not the one that was sent.</p></div>}
      {readOnly && <div className="banner"><p><b>You're viewing a shared brief</b> with {total} item{total === 1 ? '' : 's'}.</p>
        <button className="btn" type="button" onClick={() => {
          if (briefCount(brief) > 0 && !window.confirm(`Replace your current brief (${briefCount(brief)} items) with this shared one?`)) return;
          setBrief(shared!); navigate('/brief'); toast('Saved as your brief');
        }}>Save as my brief</button></div>}
      <div className="actions">
        <button className="btn btn--marker" type="button" disabled={!total} onClick={() => copy(shareLink, clientMode ? 'Link copied — send it to your builder' : 'Share link copied — send it to your client')}>Copy share link</button>
        <button className="btn btn--ghost" type="button" disabled={!total} onClick={() => copy(md(), 'Brief copied as Markdown')}>Copy as Markdown</button>
        <button className="btn btn--ghost" type="button" disabled={!total} onClick={() => download('website-brief.md', md())}>Download .md</button>
        <button className="btn btn--ghost builder-only" type="button" disabled={!firstLang} onClick={() => { const d = briefDesignMd(view); if (d) copy(d, 'DESIGN.md copied'); }}>Copy DESIGN.md</button>
        <button className="btn btn--ghost builder-only" type="button" disabled={!firstLang} onClick={() => { const d = briefDesignMd(view); if (d) download('DESIGN.md', d); }}>Download DESIGN.md</button>
        {!readOnly && <button className="btn btn--ghost builder-only" type="button" onClick={() => copy(appUrl('/?client=1'), 'Client link copied — it opens the simplified client view')}>Copy client link</button>}
        {!readOnly && <button className="btn btn--ghost" type="button" disabled={!total && !brief.notes} onClick={() => { setBrief(emptyBrief()); toast('Brief cleared'); }}>Clear</button>}
      </div>
      {!firstLang && <p className="small muted builder-only">Add a design language to generate a DESIGN.md. Starred typefaces and pairings override its default fonts.</p>}
      {!readOnly && <div className="two-col">
        <span className="field" style={{ flexDirection: 'column', alignItems: 'stretch' }}><label htmlFor="brief-title">Project name</label>
          <input className="text-input" style={{ width: '100%' }} id="brief-title" type="text" maxLength={200} value={brief.title} placeholder="e.g. Harbour Coffee relaunch" onChange={e => setBrief(b => ({ ...b, title: e.target.value }))} /></span>
        <span className="field" style={{ flexDirection: 'column', alignItems: 'stretch' }}><label htmlFor="brief-purpose">Purpose</label>
          <select className="select" id="brief-purpose" value={brief.purpose ?? ''} onChange={e => setBrief(b => ({ ...b, purpose: e.target.value || null }))}>
            <option value="">Not set</option>{purposes.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select></span>
      </div>}
      {readOnly && view.purpose && <p><b>Purpose:</b> {get('purposes', view.purpose)?.name}</p>}
      {!total && !view.notes && <div className="empty">Your brief is empty. Press <b>Add to brief</b> on any design language, typeface, component, layout, animation or resource — or <Link to="/purposes">start from a purpose</Link>.</div>}
      {firstLang && <div className="tile"><LangFrame lang={firstLang} /></div>}
      {GROUPS.filter(([k]) => view[k].length).map(([k, h]) => (
        <section className="section" key={k}><h2 className="sec">{h} <small className="muted small">{view[k].length}</small></h2>
          <div className="brief-cards">{view[k].map(id => <BriefCard key={id} kind={k} id={id} view={view} readOnly={readOnly} />)}</div></section>
      ))}
      <section className="section"><h2 className="sec">Notes</h2>
        {readOnly ? <div className="panel prose"><p>{view.notes || '—'}</p></div> : <>
          <label className="small muted" htmlFor="brief-notes">Anything the builder should know — audience, must-haves, sites you like.</label>
          <textarea className="notes" id="brief-notes" maxLength={5000} value={brief.notes} onChange={e => setBrief(b => ({ ...b, notes: e.target.value }))} />
        </>}
      </section>
    </div>
  );
}
