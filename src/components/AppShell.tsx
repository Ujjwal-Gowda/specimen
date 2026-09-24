import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router';
import { animations, components, languages, layouts, purposes, resources, typefaces } from '../data';
import { briefCount, briefRoute } from '../lib/brief';
import { appUrl, copyText } from '../lib/util';
import { useAtlas } from '../state/AtlasContext';
import { SearchPalette } from './SearchPalette';
import { onTitleChange } from '../hooks';
import { REPO_URL } from '../config';

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
          <a className="icon-btn icon-btn--gh" href={REPO_URL} target="_blank" rel="noopener" aria-label="Source code on GitHub" title="Source code on GitHub">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
          </a>
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
