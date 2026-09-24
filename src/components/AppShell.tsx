import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router';
import { animations, components, languages, layouts, purposes, resources, typefaces } from '../data';
import { briefCount, briefRoute } from '../lib/brief';
import { appUrl, copyText } from '../lib/util';
import { useAtlas } from '../state/AtlasContext';
import { SearchPalette } from './SearchPalette';
import { onTitleChange } from '../hooks';

const NAV: { label: string; items: [string, string, number?][] }[] = [
  { label: 'Atlas', items: [
    ['/', 'Overview'], ['/languages', 'Design languages', languages.length], ['/type', 'Typography', typefaces.length],
    ['/components', 'Components', components.length], ['/layouts', 'Layouts', layouts.length],
    ['/motion', 'Motion', animations.length], ['/color', 'Colour'],
  ] },
  { label: 'Decide', items: [['/purposes', 'By purpose', purposes.length], ['/compare', 'Compare'], ['/brief', 'Your brief']] },
  { label: 'Toolbox', items: [['/resources', 'Resources', resources.length], ['/sources', 'Sources & DESIGN.md']] },
];
/* detail routes highlight their section */
const SECTION_OF: Record<string, string> = { language: '/languages', typeface: '/type', component: '/components', animation: '/motion', purpose: '/purposes' };

export function AppShell() {
  const { brief, pinTick, theme, cycleTheme, toastMsg, toast, clientMode, setClientMode } = useAtlas();
  const [searchOpen, setSearchOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [announce, setAnnounce] = useState('');
  const location = useLocation();
  const [params] = useSearchParams();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const count = briefCount(brief);

  /* ?client=1 on any link switches to the simplified client view */
  useEffect(() => { if (params.get('client') === '1') setClientMode(true); }, [params, setClientMode]);

  /* new page (path change only — filters and ?ids= edits keep your place): scroll to top
     unless deep-linking into a section, and move focus to the page */
  const search = location.search;
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    const sp = new URLSearchParams(search);
    if (!sp.get('focus') && !sp.get('sec')) window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deliberately path-only
  }, [location.pathname]);
  /* announce the page title once the page has set it (not on first load) */
  useEffect(() => {
    let first = true;
    return onTitleChange(t => { if (first) { first = false; return; } setAnnounce(t); });
  }, []);
  /* Escape closes the mobile section menu */
  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setNavOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [navOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement as HTMLElement | null)?.tagName ?? '');
      if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); setSearchOpen(o => !o); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const section = SECTION_OF[location.pathname.split('/')[1]];
  /* a section is current on its own page and on its detail pages (/language/x → Design languages) */
  const isCurrent = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname === to || section === to);
  return (
    <>
      <button className="skip" type="button" onClick={() => mainRef.current?.focus()}>Skip to content</button>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Specimen Atlas — home">
          <span className="brand__mark" aria-hidden="true">Sp</span><span className="brand__name">Specimen</span>
        </Link>
        <button className="search-trigger" type="button" aria-haspopup="dialog" onClick={() => setSearchOpen(true)}>
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
          <span>Search names, fonts, components, tools…</span><kbd>/</kbd>
        </button>
        <div className="topbar__actions">
          <Link key={pinTick} className={`brief-btn ${pinTick ? 'is-bumped' : ''}`} to="/brief">Brief <span className="brief-btn__count">{count}</span></Link>
          <button className="icon-btn" type="button" title={`Theme: ${theme}`} aria-label={`Colour theme: ${theme}. Change theme`} onClick={() => { cycleTheme(); }}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="M10 4v12" /><path d="M10 4a6 6 0 0 1 0 12z" fill="currentColor" stroke="none" /></svg>
          </button>
          <button className="icon-btn nav-toggle" type="button" aria-expanded={navOpen} aria-controls="sidenav" aria-label="Open sections" onClick={() => setNavOpen(o => !o)}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14" /></svg>
          </button>
        </div>
      </header>

      <div className="shell">
        <nav className={`sidenav ${navOpen ? 'is-open' : ''}`} id="sidenav" aria-label="Sections">
          {NAV.map(g => (
            <div key={g.label} style={{ display: 'contents' }}>
              <p className="sidenav__label">{g.label}</p>
              {g.items.map(([to, label, n]) => (
                <Link key={to} to={to} onClick={() => setNavOpen(false)} className={to === '/sources' ? 'builder-only' : undefined}
                  aria-current={isCurrent(to) ? 'page' : undefined}>
                  {label} {n ? <span>{n}</span> : null}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <main id="main" ref={mainRef} className="main" tabIndex={-1}><Outlet /></main>
      </div>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
      {toastMsg && <div key={toastMsg.key} className="toast" role="status" aria-live="polite">{toastMsg.text}</div>}
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announce}</p>

      {clientMode && (
        <div className="clientbar">
          <span><b>{count}</b> picks</span>
          <Link className="btn btn--ghost btn--sm" to="/brief">Review picks</Link>
          <button className="btn btn--marker btn--sm" type="button" onClick={async () => {
            const url = appUrl(briefRoute(brief));
            if (navigator.share) { try { await navigator.share({ title: 'My website picks', url }); return; } catch { /* cancelled */ } }
            await copyText(url); toast('Link copied — send it to your builder');
          }}>Send to builder</button>
          <button className="btn btn--ghost btn--sm" type="button" onClick={() => { setClientMode(false); toast('Back to the full atlas'); }}>Exit client view</button>
        </div>
      )}
    </>
  );
}
