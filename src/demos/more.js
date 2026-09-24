/* Demos for animations added in round 3. Same contract as core.js: build inside el,
   return a cleanup. Under prefers-reduced-motion each shows a still end state. */
/** @type {Record<string, import('./types').DemoFn>} */
const D = {};
{
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const box = (el, html, style = '') => {
    el.innerHTML = `<div style="position:absolute;inset:0;display:grid;place-items:center;color:var(--dm-ink,#15171b);font:600 15px/1.3 system-ui,sans-serif;${style}">${html}</div>`;
    return /** @type {HTMLElement} */ (el.firstElementChild);
  };
  /** rAF loop that stops on cleanup */
  const loop = fn => { let id = 0; const step = t => { fn(t); id = requestAnimationFrame(step); }; id = requestAnimationFrame(step); return () => cancelAnimationFrame(id); };

  D.preloader = el => {
    const w = box(el, '<div style="font:800 44px/1 system-ui;letter-spacing:-.03em">100%</div><div data-panel style="position:absolute;inset:0;background:#15171b;color:#f2d22e;display:grid;place-items:center;font:800 44px/1 system-ui;letter-spacing:-.03em"><span data-n>0%</span></div>');
    const panel = w.querySelector('[data-panel]'); const n = panel.querySelector('[data-n]');
    if (reduced()) { panel.style.display = 'none'; return; }
    let timer = 0; let anim = null;
    const run = () => {
      anim?.cancel(); panel.style.clipPath = 'inset(0 0 0 0)';
      let i = 0;
      timer = setInterval(() => {
        i = Math.min(100, i + Math.ceil(Math.random() * 7)); n.textContent = `${i}%`;
        if (i === 100) {
          clearInterval(timer);
          anim = panel.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: 700, delay: 250, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
          timer = setTimeout(run, 2200);
        }
      }, 40);
    };
    run();
    return () => { clearInterval(timer); clearTimeout(timer); anim?.cancel(); };
  };

  D['scroll-velocity-skew'] = el => {
    const w = box(el, `<div data-sc style="position:absolute;inset:0;overflow-y:auto;padding:14px"><p style="margin:0 0 10px;font:500 12px system-ui;opacity:.6">Scroll fast ↓</p><div data-in style="display:grid;gap:10px;transform-origin:50% 50%">${Array.from({ length: 9 }, (_, i) => `<div style="height:54px;border-radius:10px;background:${i % 2 ? '#15171b' : 'var(--dm-accent,#3a55e6)'};color:#fff;display:flex;align-items:center;padding:0 14px;font:700 18px system-ui">Section 0${i + 1}</div>`).join('')}</div></div>`, 'display:block');
    const sc = w.querySelector('[data-sc]'); const inner = w.querySelector('[data-in]');
    if (reduced()) return;
    let last = sc.scrollTop; let v = 0;
    return loop(() => {
      v += ((sc.scrollTop - last) - v) * 0.12; last = sc.scrollTop;
      inner.style.transform = `skewY(${Math.max(-7, Math.min(7, v * 0.35)).toFixed(2)}deg)`;
    });
  };

  D['image-distortion'] = el => {
    const id = `dm-warp-${Math.random().toString(36).slice(2, 7)}`;
    const w = box(el, `<svg width="0" height="0" style="position:absolute"><filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency="0.015 0.03" numOctaves="2" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter></svg><div data-img style="width:200px;height:130px;border-radius:12px;filter:url(#${id});background:radial-gradient(circle at 30% 35%,#ffd166 0 18%,transparent 19%),linear-gradient(160deg,#3a55e6,#ef476f 70%,#ffd166);display:grid;place-items:end start;padding:10px;color:#fff;font:700 14px system-ui">Hover me</div>`);
    const img = w.querySelector('[data-img]'); const disp = w.querySelector('feDisplacementMap');
    if (reduced()) return;
    let target = 0; let cur = 0; let t0 = 0;
    const on = () => { target = 38; }; const off = () => { target = 0; };
    img.addEventListener('pointerenter', on); img.addEventListener('pointerleave', off);
    const stop = loop(t => {
      if (!t0) t0 = t;
      const idle = Math.max(0, Math.sin((t - t0) / 900)) * 10; // gentle idle wobble so it reads without hover
      cur += (Math.max(target, idle) - cur) * 0.08;
      disp.setAttribute('scale', cur.toFixed(1));
    });
    return () => { stop(); img.removeEventListener('pointerenter', on); img.removeEventListener('pointerleave', off); };
  };

  D.particles = el => {
    const w = box(el, '<canvas style="position:absolute;inset:0;width:100%;height:100%"></canvas><span style="position:relative;padding:6px 12px;border-radius:99px;background:rgba(21,23,27,.75);color:#fff;font-size:13px">Move your pointer</span>', 'background:#0e1116');
    const cv = w.querySelector('canvas'); const ctx = cv.getContext('2d');
    const dpr = Math.min(2, devicePixelRatio || 1);
    const W = cv.clientWidth || 300; const H = cv.clientHeight || 200;
    cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);
    const pts = Array.from({ length: 55 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6 }));
    const mouse = { x: -999, y: -999 };
    const move = e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const draw = still => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        if (!still) {
          const dx = p.x - mouse.x; const dy = p.y - mouse.y; const d2 = dx * dx + dy * dy;
          if (d2 < 3600) { p.vx += dx / 900; p.vy += dy / 900; }
          p.vx *= 0.99; p.vy *= 0.99; p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        }
        ctx.fillStyle = '#9fd3ff'; ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
      }
      ctx.strokeStyle = 'rgba(159,211,255,.18)';
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i]; const b = pts[j];
        if ((a.x - b.x) ** 2 + (a.y - b.y) ** 2 < 2500) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    };
    if (reduced()) { draw(true); return; }
    cv.addEventListener('pointermove', move);
    const stop = loop(() => draw(false));
    return () => { stop(); cv.removeEventListener('pointermove', move); };
  };

  D['svg-morph'] = el => {
    const N = 24;
    const shape = (fn) => Array.from({ length: N }, (_, i) => { const a = (i / N) * Math.PI * 2 - Math.PI / 2; const r = fn(i); return [50 + Math.cos(a) * r, 50 + Math.sin(a) * r]; });
    const star = shape(i => (i % 2 ? 18 : 42));
    const circle = shape(() => 36);
    const blob = shape(i => 34 + Math.sin(i * 1.7) * 7);
    const path = pts => `M${pts.map(p => p.map(v => v.toFixed(2)).join(' ')).join(' L')}Z`;
    const w = box(el, `<svg viewBox="0 0 100 100" width="140" height="140"><path fill="var(--dm-accent,#3a55e6)" d="${path(star)}"/></svg>`);
    const p = w.querySelector('path');
    if (reduced()) return;
    const seq = [star, circle, blob]; let k = 0; let t0 = 0;
    const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
    return loop(t => {
      if (!t0) t0 = t;
      const e = (t - t0) / 1400;
      if (e >= 1) { k = (k + 1) % seq.length; t0 = t; return; }
      const a = seq[k]; const b = seq[(k + 1) % seq.length]; const m = ease(Math.min(1, e / 0.6));
      p.setAttribute('d', path(a.map((pt, i) => [pt[0] + (b[i][0] - pt[0]) * m, pt[1] + (b[i][1] - pt[1]) * m])));
    });
  };

  D['lottie-playback'] = el => {
    const w = box(el, '<svg viewBox="0 0 120 120" width="120" height="120"><circle data-c cx="60" cy="60" r="46" fill="none" stroke="#1faa59" stroke-width="7" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" transform="rotate(-90 60 60)"/><path data-k d="M38 62 L54 77 L84 45" fill="none" stroke="#1faa59" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg><span style="font-size:12px;opacity:.65;margin-top:6px">Simulated — real Lottie files play via lottie-web</span>', 'grid-template-rows:auto auto;align-content:center');
    const c = w.querySelector('[data-c]'); const k = w.querySelector('[data-k]');
    if (reduced()) { c.setAttribute('stroke-dashoffset', '0'); k.setAttribute('stroke-dashoffset', '0'); return; }
    const opts = { duration: 2400, iterations: Infinity, fill: 'both' };
    const a = c.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0, offset: 0.35 }, { strokeDashoffset: 0, offset: 0.85 }, { strokeDashoffset: 1 }], { ...opts, easing: 'ease-in-out' });
    const b = k.animate([{ strokeDashoffset: 1, offset: 0 }, { strokeDashoffset: 1, offset: 0.3 }, { strokeDashoffset: 0, offset: 0.5 }, { strokeDashoffset: 0, offset: 0.85 }, { strokeDashoffset: 1 }], { ...opts, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    const s = w.querySelector('svg').animate([{ transform: 'scale(1)' }, { transform: 'scale(1)', offset: 0.48 }, { transform: 'scale(1.12)', offset: 0.55 }, { transform: 'scale(1)', offset: 0.65 }, { transform: 'scale(1)' }], opts);
    return () => { a.cancel(); b.cancel(); s.cancel(); };
  };
}

export default D;
