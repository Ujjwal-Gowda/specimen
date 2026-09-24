/* Demos added in round 2 (Web Animations API). */
/** @type {Record<string, import('./types').DemoFn>} */
const D = {};
{
  const reducedNow = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const box = (el, html) => { el.innerHTML = `<div style="position:absolute;inset:0;display:grid;place-items:center;color:var(--dm-ink,#15171b);font:600 15px/1.3 system-ui,sans-serif">${html}</div>`; return el.firstElementChild; };
  const loop = (node, frames, opts) => reducedNow() ? null : node.animate(frames, Object.assign({ iterations: Infinity }, opts));

  D.bounce = el => {
    const b = box(el, '<div style="width:56px;height:56px;border-radius:16px;background:var(--dm-accent,#3a55e6)"></div>').firstElementChild;
    const a = loop(b, [{ transform: 'translateY(-60px)' }, { transform: 'translateY(0)', offset: .5 }, { transform: 'translateY(-16px)', offset: .7 }, { transform: 'translateY(0)', offset: .85 }, { transform: 'translateY(0)' }], { duration: 1600, easing: 'ease-out' });
    return () => a && a.cancel();
  };
  D['pulse-ping'] = el => {
    const w = box(el, '<span style="position:relative;display:inline-block;width:16px;height:16px"><i style="position:absolute;inset:0;border-radius:50%;background:#1faa59"></i><i style="position:absolute;inset:0;border-radius:50%;background:#1faa59"></i></span><span style="margin-top:10px;font-size:13px">Live</span>');
    const ring = w.querySelector('i');
    const a = loop(ring, [{ transform: 'scale(1)', opacity: .8 }, { transform: 'scale(2.6)', opacity: 0 }], { duration: 1200, easing: 'cubic-bezier(0,0,.2,1)' });
    return () => a && a.cancel();
  };
  D['border-beam'] = el => {
    const w = box(el, '<div style="position:relative;width:200px;height:110px;border-radius:14px;padding:1.5px;overflow:hidden;background:#23252b"><div data-beam style="position:absolute;inset:-60%;background:conic-gradient(from 0deg,transparent 0 75%,#a78bfa 88%,#fff 92%,transparent 96%)"></div><div style="position:relative;height:100%;border-radius:13px;background:#0e0f13;color:#e8e8ee;display:grid;place-items:center;font:600 14px system-ui">Pro plan</div></div>');
    const a = loop(w.querySelector('[data-beam]'), [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 3500, easing: 'linear' });
    return () => a && a.cancel();
  };
  D['text-highlight'] = el => {
    const w = box(el, '<p style="margin:0;max-width:240px;text-align:center;font:600 18px/1.35 Georgia,serif">Good type is <mark style="background:linear-gradient(#ffe066,#ffe066) 0 90%/0% 45% no-repeat;color:inherit;padding:0 2px">invisible until it isn’t</mark>.</p>');
    const m = w.querySelector('mark');
    if (reducedNow()) { m.style.backgroundSize = '100% 45%'; return () => {}; }
    const a = m.animate([{ backgroundSize: '0% 45%' }, { backgroundSize: '100% 45%', offset: .45 }, { backgroundSize: '100% 45%' }], { duration: 2600, iterations: Infinity, easing: 'cubic-bezier(.16,1,.3,1)' });
    return () => a.cancel();
  };
  D['card-flip'] = el => {
    const w = box(el, '<div style="perspective:700px"><div data-card style="position:relative;width:150px;height:100px;transform-style:preserve-3d"><div style="position:absolute;inset:0;border-radius:12px;background:var(--dm-accent,#3a55e6);color:#fff;display:grid;place-items:center;backface-visibility:hidden">Front</div><div style="position:absolute;inset:0;border-radius:12px;background:#15171b;color:#fff;display:grid;place-items:center;backface-visibility:hidden;transform:rotateY(180deg)">Back</div></div></div>');
    const a = loop(w.querySelector('[data-card]'), [{ transform: 'rotateY(0)' }, { transform: 'rotateY(0)', offset: .3 }, { transform: 'rotateY(180deg)', offset: .5 }, { transform: 'rotateY(180deg)', offset: .8 }, { transform: 'rotateY(360deg)' }], { duration: 3600, easing: 'cubic-bezier(.65,0,.35,1)' });
    return () => a && a.cancel();
  };
}

export default D;
