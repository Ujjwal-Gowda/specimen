import { Link } from 'react-router';
import type { Animation, Component, Language, Layout, Typeface } from '../types';
import { nameOf } from '../data';
import { aliasShort } from '../lib/components';
import { isFreeLicense } from '../lib/fonts';
import { useAtlas } from '../state/AtlasContext';
import { Aka, CompareButton, EntityChips, Pin } from './ui';
import { CompFrame, DemoStage, FaceSpecimen, LangFrame, Wire } from './previews';

export function LangTile({ lang }: { lang: Language }) {
  return (
    <article className="tile">
      <LangFrame lang={lang} compact />
      <div className="tile__body">
        <p className="tile__meta"><span>{lang.category}</span><span>{lang.era}</span></p>
        <h3 className="tile__title"><Link to={`/language/${lang.id}`}>{lang.name}</Link></h3>
        <Aka items={lang.aka} label={false} max={3} />
        <p className="tile__text">{lang.summary}</p>
        <div className="tile__actions"><Pin kind="language" id={lang.id} /><CompareButton id={lang.id} name={lang.name} className="pin builder-soft" /></div>
      </div>
    </article>
  );
}

export function FaceTile({ tf }: { tf: Typeface }) {
  const free = isFreeLicense(tf.license);
  return (
    <article className="tile">
      <FaceSpecimen tf={tf} showStandIn />
      <div className="tile__body">
        <p className="tile__meta"><span>{nameOf('classifications', tf.classification)}</span><span>{tf.foundry}</span><span>{tf.year ?? ''}</span></p>
        <h3 className="tile__title"><Link to={`/typeface/${tf.id}`}>{tf.name}</Link></h3>
        <div className="chips">
          <span className={`badge ${free ? 'badge--free' : 'badge--paid'}`}>{tf.license || '—'}</span>
          {tf.variable && <span className="badge">Variable</span>}
          {tf.googleFamily && <span className="badge">Google Fonts</span>}
        </div>
        {tf.previewNote && <p className="small muted">{tf.previewNote}</p>}
        <div className="tile__actions"><Pin kind="typeface" id={tf.id} /></div>
      </div>
    </article>
  );
}

export function CompTile({ comp }: { comp: Component }) {
  const { compTheme } = useAtlas();
  const aka = aliasShort(comp);
  return (
    <article className="tile">
      <CompFrame comp={comp} langId={compTheme} />
      <div className="tile__body">
        <p className="tile__meta"><span>{comp.category}</span></p>
        <h3 className="tile__title"><Link to={`/component/${comp.id}`}>{comp.name}</Link></h3>
        {aka && <p className="aka">{aka}</p>}
        <div className="tile__actions"><Pin kind="component" id={comp.id} /></div>
      </div>
    </article>
  );
}

export function LayoutTile({ layout, compact = false, highlight = false }: { layout: Layout; compact?: boolean; highlight?: boolean }) {
  return (
    <article className="tile" id={`layout-${layout.id}`} style={highlight ? { boxShadow: '0 0 0 3px var(--marker)' } : undefined}>
      <Wire wire={layout.wire} />
      <div className="tile__body">
        <h3 className="tile__title">{layout.name}</h3>
        <Aka items={layout.aka} />
        {!compact && <>
          <p className="small">{layout.summary}</p>
          <p className="small"><b>Best for:</b> {layout.bestFor}</p>
          <EntityChips kind="language" ids={layout.languages} />
        </>}
        <div className="tile__actions"><Pin kind="layout" id={layout.id} /></div>
      </div>
    </article>
  );
}

export function AnimTile({ anim }: { anim: Animation }) {
  return (
    <article className="tile">
      <DemoStage id={anim.id} name={anim.name} />
      <div className="tile__body">
        <p className="tile__meta"><span>{anim.category}</span><span>{anim.duration}</span></p>
        <h3 className="tile__title"><Link to={`/animation/${anim.id}`}>{anim.name}</Link></h3>
        <Aka items={anim.aka} label={false} max={3} />
        <div className="tile__actions"><Pin kind="animation" id={anim.id} /></div>
      </div>
    </article>
  );
}
