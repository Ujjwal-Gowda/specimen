/* Live previews. Previews are pictures of an interface, not the interface: `inert` keeps
   their fake buttons, tabs and landmarks out of the tab order and accessibility tree. */
import { useEffect, useRef, useState } from 'react';
import type { Component, Language, Layout, Typeface } from '../types';
import { get } from '../data';
import { useLazyFonts } from '../hooks';
import { faceFamily, faceFonts, sampleLine, sampleWord, standInName } from '../lib/fonts';
import { demos } from '../demos';
import { prefersReducedMotion } from '../lib/util';

const DEFAULT_SAMPLE = {
  brand: 'Northwind', eyebrow: 'Spring release', headline: 'Build the thing people remember',
  body: 'A short supporting line that explains the offer in one breath and earns the click.', cta: 'Get started', media: 'Featured',
};
const CARDS = [['Fast by default', 'Ships in days, not quarters.'], ['Made to last', 'Tokens, not one-off values.'], ['Yours to shape', 'Every part is swappable.']];

/** The mini landing page every language renders. styles/ui.css draws it from tokens;
    styles/languages/<id>.css adds each language's signature, scoped under .lang-<id>. */
export function LanguagePreview({ lang, compact = false }: { lang: Language; compact?: boolean }) {
  const s = { ...DEFAULT_SAMPLE, ...lang.sample };
  return (
    <div className={`ui lang-${lang.id}`} data-lang={lang.id}>
      <nav className="ui-nav" aria-label="Preview navigation">
        <span className="ui-logo">{s.brand}</span>
        <a className="ui-link">Work</a><a className="ui-link">Pricing</a>
        <button className="ui-btn ui-btn--sm" type="button">{s.cta}</button>
      </nav>
      <div className="ui-hero-grid">
        <section className="ui-hero">
          <p className="ui-eyebrow">{s.eyebrow}</p>
          <h3 className="ui-h1">{s.headline}</h3>
          <p className="ui-p">{s.body}</p>
          <div className="ui-row">
            <button className="ui-btn" type="button">{s.cta}</button>
            <button className="ui-btn ui-btn--ghost" type="button">Learn more</button>
          </div>
        </section>
        <div className="ui-media" aria-hidden="true"><span className="ui-media-cap">{s.media}</span></div>
      </div>
      {!compact && <>
        <div className="ui-grid">
          {CARDS.map(([h, p], i) => (
            <article className="ui-card" key={h}>
              {i === 0 ? <span className="ui-badge">New</span> : <span className="ui-chip">0{i + 1}</span>}
              <h4 className="ui-h2">{h}</h4><p className="ui-p">{p}</p>
            </article>
          ))}
        </div>
        <div className="ui-row">
          <input className="ui-input" type="email" placeholder="you@company.com" aria-label="Email (preview)" readOnly />
          <label className="ui-switch"><input type="checkbox" defaultChecked aria-label="Toggle (preview)" /><span /></label>
          <div className="ui-tabs" role="tablist" aria-label="Preview tabs">
            <button className="ui-tab" role="tab" aria-selected="true" type="button">Monthly</button>
            <button className="ui-tab" role="tab" aria-selected="false" type="button">Yearly</button>
          </div>
        </div>
      </>}
    </div>
  );
}

export function LangFrame({ lang, compact = false, tall = false }: { lang: Language; compact?: boolean; tall?: boolean }) {
  const ref = useLazyFonts<HTMLDivElement>(lang.tokens.googleFonts);
  return (
    <div ref={ref} className={`frame ${compact ? 'frame--compact' : ''} ${tall ? 'frame--tall' : ''}`} inert aria-hidden="true">
      <LanguagePreview lang={lang} compact={compact} />
    </div>
  );
}

/** A component preview rendered in a design language. `comp.preview` is static markup
    authored in src/data/components.ts (never user input), so innerHTML is safe here. */
export function CompFrame({ comp, langId }: { comp: Component; langId: string }) {
  const lang = get('languages', langId);
  const ref = useLazyFonts<HTMLDivElement>(lang?.tokens.googleFonts);
  const inner = comp.preview || `<div class="ui-card"><h4 class="ui-h2">${escapeHtml(comp.name)}</h4><p class="ui-p">${escapeHtml(comp.summary)}</p></div>`;
  return (
    <div ref={ref} className="frame frame--comp" inert aria-hidden="true">
      <div className={`ui lang-${langId}`} data-lang={langId} dangerouslySetInnerHTML={{ __html: inner }} />
    </div>
  );
}
const escapeHtml = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

export function FaceSpecimen({ tf, showStandIn = false }: { tf: Typeface; showStandIn?: boolean }) {
  const ref = useLazyFonts<HTMLDivElement>(faceFonts(tf));
  return (
    <div ref={ref} className="specimen" style={{ fontFamily: faceFamily(tf) }} aria-hidden="true">
      {showStandIn && !tf.googleFamily && <span className="standin">Stand-in: {standInName(tf)}</span>}
      <span className="specimen__aa">{sampleWord(tf)}</span>
      <span className="specimen__line">{showStandIn ? `${tf.name} — ${sampleLine(tf)}` : sampleLine(tf)}</span>
    </div>
  );
}

export function PairSpecimen({ name, display, body, short = false }: { name: string; display?: Typeface; body?: Typeface; short?: boolean }) {
  const ref = useLazyFonts<HTMLDivElement>([faceFonts(display), faceFonts(body)].filter(Boolean).join('&'));
  return (
    <div ref={ref} className="specimen" aria-hidden="true">
      <span className="pair-d" style={{ fontFamily: faceFamily(display) }}>{name}</span>
      <span className="pair-b" style={{ fontFamily: faceFamily(body) }}>
        {short ? `Body copy in ${body?.name ?? ''}.` : `Body copy set in ${body?.name ?? ''}. Good pairings contrast in structure and agree in proportion.`}
      </span>
    </div>
  );
}

export function Wire({ wire }: { wire?: Layout['wire'] }) {
  if (!wire?.areas) return <div className="wire" />;
  const letters = [...new Set(wire.areas.join(' ').split(/\s+/).filter(x => x && x !== '.'))];
  return (
    <div className="wire" aria-hidden="true" style={{
      gridTemplateColumns: wire.cols || `repeat(${wire.areas[0].split(/\s+/).length}, 1fr)`,
      gridTemplateRows: wire.rows || `repeat(${wire.areas.length}, 1fr)`,
      gridTemplateAreas: wire.areas.map(r => `'${r}'`).join(' '),
    }}>
      {letters.map(L => <div key={L} style={{ gridArea: L }}>{wire.labels?.[L] ?? ''}</div>)}
    </div>
  );
}

/** Runs an animation demo while it is on screen; stops it when scrolled away or unmounted. */
export function DemoStage({ id, name, big = false }: { id: string; name?: string; big?: boolean }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(0);
  /* without IntersectionObserver, just run */
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '100px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    const fn = demos[id];
    if (!box || !visible || !fn) return;
    let cleanup: (() => void) | void;
    try { cleanup = fn(box); } catch (err) {
      const p = document.createElement('p');
      p.className = 'muted small'; p.style.padding = '16px';
      p.textContent = `Demo failed: ${(err as Error).message}`;
      box.replaceChildren(p);
    }
    return () => { try { cleanup?.(); } catch { /* ignore */ } box.innerHTML = ''; };
  }, [id, visible, run]);

  return (
    <div ref={stageRef} className={`stage ${big ? 'stage--big' : ''}`}>
      <div ref={boxRef} className="dm-root" />
      {!demos[id] && <p className="muted small" style={{ padding: 16 }}>Demo coming soon.</p>}
      <button className="btn btn--ghost btn--sm stage__replay" type="button" aria-label={`Replay ${name ?? id} demo`} onClick={() => setRun(r => r + 1)}>Replay</button>
      {big && prefersReducedMotion() && <span className="sr-only">Reduced motion is on; the demo shows its end state.</span>}
    </div>
  );
}
