/* =================================================================
   Live animation demos — one per ATLAS.animations id.
   ATLAS.demos[id](el) builds the demo inside el and returns a
   cleanup function. The app's Replay button calls cleanup and then
   runs the demo again. Styles live in css/demos.css (.dm-*).
   Under prefers-reduced-motion each demo shows its end state.
   ================================================================= */
/** @type {Record<string, import('./types').DemoFn>} */
const D = {};
{
  const reducedMQ = matchMedia('(prefers-reduced-motion: reduce)');

  /* tiny lifecycle helper: every timer/listener/rAF goes through it so
     cleanup() can tear the demo down completely */
  function kit(el, html, cls = '') {
    el.innerHTML = '';
    const root = document.createElement('div');
    root.className = 'dm-root ' + cls;
    root.innerHTML = html;
    el.appendChild(root);
    const timers = new Set(), intervals = new Set(), frames = new Set(), offs = [];
    const k = {
      root,
      reduced: reducedMQ.matches,
      q: s => root.querySelector(s),
      qa: s => [...root.querySelectorAll(s)],
      after(ms, fn) { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; },
      every(ms, fn) { const t = setInterval(fn, ms); intervals.add(t); return t; },
      raf(fn) { const id = requestAnimationFrame(t => { frames.delete(id); fn(t); }); frames.add(id); return id; },
      loop(fn) { const step = t => { if (fn(t) !== false) k.raf(step); }; k.raf(step); },
      on(target, type, fn, opts) { target.addEventListener(type, fn, opts); offs.push(() => target.removeEventListener(type, fn, opts)); },
      cleanup() {
        timers.forEach(clearTimeout); intervals.forEach(clearInterval); frames.forEach(cancelAnimationFrame);
        offs.forEach(f => f()); el.innerHTML = '';
      },
    };
    return k;
  }
  const done = k => () => k.cleanup();
  /* add a class on the next frame so the transition from the initial state runs */
  const play = (k, nodes, cls = 'is-in') => k.raf(() => k.raf(() => [].concat(nodes).forEach(n => n.classList.add(cls))));
  const lorem = n => Array.from({ length: n }, (_, i) => `<i class="dm-line" style="width:${60 + ((i * 37) % 35)}%"></i>`).join('');

  /* ---------------- Entrance ---------------- */
  D['fade-in'] = el => {
    const k = kit(el, `<div class="dm-card dm-fade">${lorem(3)}</div>`, 'dm-center');
    if (k.reduced) k.q('.dm-fade').classList.add('is-in'); else play(k, k.q('.dm-fade'));
    return done(k);
  };
  D['fade-up-reveal'] = el => {
    const k = kit(el, `<div class="dm-scroll"><p class="dm-hint">Scroll ↓</p>${[1, 2, 3, 4].map(() => `<div class="dm-card dm-reveal">${lorem(2)}</div>`).join('')}</div>`);
    const sc = k.q('.dm-scroll');
    if (k.reduced) { k.qa('.dm-reveal').forEach(n => n.classList.add('is-in')); return done(k); }
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('is-in')), { root: sc, threshold: .2 });
    k.qa('.dm-reveal').forEach(n => io.observe(n));
    const c = done(k); return () => { io.disconnect(); c(); };
  };
  D['stagger-reveal'] = el => {
    const k = kit(el, `<div class="dm-tiles">${Array.from({ length: 8 }, (_, i) => `<i class="dm-tile dm-stag" style="--i:${i}"></i>`).join('')}</div>`, 'dm-center');
    if (k.reduced) k.qa('.dm-stag').forEach(n => n.classList.add('is-in')); else play(k, k.qa('.dm-stag'));
    return done(k);
  };
  D['scale-in'] = el => {
    const k = kit(el, `<div class="dm-pop"><b>Saved</b><span>Your changes are live.</span></div>`, 'dm-center');
    if (k.reduced) k.q('.dm-pop').classList.add('is-in'); else play(k, k.q('.dm-pop'));
    return done(k);
  };
  D['blur-in'] = el => {
    const words = 'Think it. Ship it.'.split(' ');
    const k = kit(el, `<h4 class="dm-big">${words.map((w, i) => `<span class="dm-blur" style="--i:${i}">${w}</span>`).join(' ')}</h4>`, 'dm-center');
    if (k.reduced) k.qa('.dm-blur').forEach(n => n.classList.add('is-in')); else play(k, k.qa('.dm-blur'));
    return done(k);
  };
  D['clip-path-reveal'] = el => {
    const k = kit(el, `<div class="dm-wipe"><div class="dm-photo"></div><h4 class="dm-big dm-wipe-t">Unveiled</h4></div>`, 'dm-center');
    if (k.reduced) k.q('.dm-wipe').classList.add('is-in'); else play(k, k.q('.dm-wipe'));
    return done(k);
  };

  /* ---------------- Text ---------------- */
  D['split-text-reveal'] = el => {
    const lines = ['Type that', 'arrives line', 'by line.'];
    const k = kit(el, `<h4 class="dm-big dm-split" aria-label="${lines.join(' ')}">${lines.map((l, i) => `<span class="dm-mask" aria-hidden="true"><span style="--i:${i}">${l}</span></span>`).join('')}</h4>`, 'dm-center');
    if (k.reduced) k.q('.dm-split').classList.add('is-in'); else play(k, k.q('.dm-split'));
    return done(k);
  };
  D['typewriter'] = el => {
    const text = 'npm create atlas@latest';
    const k = kit(el, `<div class="dm-term"><span class="dm-prompt">$</span> <span class="dm-typed"></span><span class="dm-caret"></span></div>`, 'dm-center');
    const out = k.q('.dm-typed');
    if (k.reduced) { out.textContent = text; return done(k); }
    let i = 0;
    const tick = () => { out.textContent = text.slice(0, ++i); if (i < text.length) k.after(55 + Math.random() * 60, tick); else k.after(1800, () => { i = 0; out.textContent = ''; k.after(300, tick); }); };
    k.after(400, tick);
    return done(k);
  };
  D['text-scramble'] = el => {
    const words = ['DECRYPTED', 'VERIFIED', 'ONLINE'];
    const glyphs = '!<>-_\\/[]{}—=+*^?#01';
    const k = kit(el, `<h4 class="dm-big dm-mono dm-scr" aria-label="${words[0]}"></h4>`, 'dm-center');
    const h = k.q('.dm-scr');
    if (k.reduced) { h.textContent = words[0]; return done(k); }
    let w = 0;
    const run = () => {
      const target = words[w % words.length]; h.setAttribute('aria-label', target);
      let f = 0;
      k.loop(() => {
        f++;
        h.textContent = [...target].map((c, i) => (f > i * 3 + 6 ? c : glyphs[(Math.random() * glyphs.length) | 0])).join('');
        if (f > target.length * 3 + 6) { w++; k.after(1600, run); return false; }
      });
    };
    run();
    return done(k);
  };
  D['word-rotator'] = el => {
    const words = ['designers', 'developers', 'founders', 'designers'];
    const k = kit(el, `<h4 class="dm-big">Built for <span class="dm-rot"><span class="dm-rot-list">${words.map(w => `<span>${w}</span>`).join('')}</span></span></h4>`, 'dm-center');
    const list = k.q('.dm-rot-list');
    if (k.reduced) return done(k);
    let i = 0;
    k.every(1800, () => {
      i++;
      list.style.transition = ''; list.style.transform = `translateY(${-i * 1.15}em)`;
      if (i === words.length - 1) k.after(500, () => { list.style.transition = 'none'; list.style.transform = 'translateY(0)'; i = 0; });
    });
    return done(k);
  };
  D['kinetic-type-anim'] = el => {
    const k = kit(el, `<h4 class="dm-kin">${[...'KINETIC'].map((c, i) => `<span style="--i:${i}">${c}</span>`).join('')}</h4>`, 'dm-center');
    if (k.reduced) k.q('.dm-kin').classList.add('is-still');
    return done(k);
  };
  D['gradient-text-sweep'] = el => {
    const k = kit(el, `<h4 class="dm-big dm-sheen">Iridescent</h4>`, 'dm-center');
    if (k.reduced) k.q('.dm-sheen').classList.add('is-still');
    return done(k);
  };

  /* ---------------- Scroll (inside a scrollable box) ---------------- */
  D['parallax'] = el => {
    const k = kit(el, `<div class="dm-scroll dm-par"><div class="dm-par-stage"><i class="dm-par-l dm-par-back"></i><i class="dm-par-l dm-par-mid"></i><div class="dm-par-l dm-par-front">Scroll me</div></div><div class="dm-spacer"></div></div>`);
    const sc = k.q('.dm-scroll'), back = k.q('.dm-par-back'), mid = k.q('.dm-par-mid');
    if (k.reduced) return done(k);
    k.on(sc, 'scroll', () => { const y = sc.scrollTop; back.style.transform = `translateY(${y * 0.7}px)`; mid.style.transform = `translateY(${y * 0.4}px)`; }, { passive: true });
    return done(k);
  };
  D['scroll-scrubbed'] = el => {
    const k = kit(el, `<div class="dm-scroll"><div class="dm-sticky"><div class="dm-scrub-box"></div><span class="dm-scrub-pct">0%</span></div><div class="dm-spacer dm-spacer--tall"></div></div>`);
    const sc = k.q('.dm-scroll'), box = k.q('.dm-scrub-box'), pct = k.q('.dm-scrub-pct');
    const upd = () => {
      const p = sc.scrollTop / (sc.scrollHeight - sc.clientHeight || 1);
      box.style.transform = k.reduced ? '' : `rotate(${p * 360}deg) scale(${0.6 + p * 0.6})`;
      box.style.borderRadius = `${p * 50}%`; pct.textContent = Math.round(p * 100) + '%';
    };
    k.on(sc, 'scroll', upd, { passive: true }); upd();
    return done(k);
  };
  D['sticky-stack'] = el => {
    const k = kit(el, `<div class="dm-scroll dm-stack">${['Plan', 'Build', 'Ship', 'Grow'].map((t, i) => `<div class="dm-stack-card" style="--i:${i}"><b>${t}</b>${lorem(1)}</div>`).join('')}<div class="dm-spacer"></div></div>`);
    const sc = k.q('.dm-scroll'), cards = k.qa('.dm-stack-card');
    if (k.reduced) return done(k);
    k.on(sc, 'scroll', () => {
      /* how far the next card has slid over this one, 0 → 1 */
      const top = sc.getBoundingClientRect().top;
      cards.forEach((c, i) => {
        const next = cards[i + 1]; if (!next) return;
        const gap = next.getBoundingClientRect().top - top - (8 + (i + 1) * 10);
        const p = Math.max(0, Math.min(1, 1 - gap / c.offsetHeight));
        c.style.transform = `scale(${1 - p * 0.06})`; c.style.filter = `brightness(${1 - p * 0.15})`;
      });
    }, { passive: true });
    return done(k);
  };
  D['horizontal-scroll'] = el => {
    const k = kit(el, `<div class="dm-scroll"><div class="dm-sticky dm-h-stage"><div class="dm-h-track">${[1, 2, 3, 4, 5].map(i => `<div class="dm-h-panel">0${i}</div>`).join('')}</div></div><div class="dm-spacer dm-spacer--tall"></div></div>`);
    const sc = k.q('.dm-scroll'), track = k.q('.dm-h-track');
    k.on(sc, 'scroll', () => {
      const p = sc.scrollTop / (sc.scrollHeight - sc.clientHeight || 1);
      track.style.transform = `translateX(${-p * (track.scrollWidth - sc.clientWidth + 24)}px)`;
    }, { passive: true });
    return done(k);
  };
  D['pinned-section'] = el => {
    const steps = ['Connect your data', 'Shape the model', 'Publish the result'];
    const k = kit(el, `<div class="dm-scroll"><div class="dm-sticky dm-pin"><span class="dm-pin-n">01</span><b class="dm-pin-t">${steps[0]}</b><div class="dm-pin-dots">${steps.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div></div><div class="dm-spacer dm-spacer--tall"></div></div>`);
    const sc = k.q('.dm-scroll'), n = k.q('.dm-pin-n'), t = k.q('.dm-pin-t'), dots = k.qa('.dm-pin-dots i');
    let cur = 0;
    k.on(sc, 'scroll', () => {
      const p = sc.scrollTop / (sc.scrollHeight - sc.clientHeight || 1);
      const s = Math.min(steps.length - 1, Math.floor(p * steps.length));
      if (s === cur) return; cur = s;
      t.classList.remove('is-in'); n.textContent = '0' + (s + 1); t.textContent = steps[s];
      dots.forEach((d, i) => d.classList.toggle('on', i === s));
      if (!k.reduced) k.raf(() => t.classList.add('is-in')); else t.classList.add('is-in');
    }, { passive: true });
    t.classList.add('is-in');
    return done(k);
  };
  D['smooth-scroll'] = el => {
    const k = kit(el, `<div class="dm-split2"><div><p class="dm-cap">Native</p><div class="dm-scroll dm-ss-native">${lorem(18)}</div></div><div><p class="dm-cap">Lerped</p><div class="dm-scroll dm-ss-smooth"><div class="dm-ss-inner">${lorem(18)}</div></div></div></div>`);
    const sc = k.q('.dm-ss-smooth'), inner = k.q('.dm-ss-inner');
    if (k.reduced) return done(k);
    sc.style.overflow = 'hidden';
    let target = 0, cur = 0;
    const max = () => inner.scrollHeight - sc.clientHeight;
    k.on(sc, 'wheel', e => { e.preventDefault(); target = Math.max(0, Math.min(max(), target + e.deltaY)); }, { passive: false });
    let ty = 0;
    k.on(sc, 'touchstart', e => { ty = e.touches[0].clientY; }, { passive: true });
    k.on(sc, 'touchmove', e => { const y = e.touches[0].clientY; target = Math.max(0, Math.min(max(), target + (ty - y) * 1.5)); ty = y; e.preventDefault(); }, { passive: false });
    k.loop(() => { cur += (target - cur) * 0.1; inner.style.transform = `translateY(${-cur}px)`; });
    return done(k);
  };
  D['zoom-on-scroll'] = el => {
    const k = kit(el, `<div class="dm-scroll"><p class="dm-hint">Scroll ↓</p><div class="dm-sticky dm-zoom-stage"><div class="dm-photo dm-zoom"></div></div><div class="dm-spacer dm-spacer--tall"></div></div>`);
    const sc = k.q('.dm-scroll'), img = k.q('.dm-zoom');
    const upd = () => {
      const p = Math.min(1, sc.scrollTop / ((sc.scrollHeight - sc.clientHeight) * 0.8 || 1));
      img.style.transform = k.reduced ? 'none' : `scale(${0.6 + p * 0.4})`;
      img.style.borderRadius = `${(1 - p) * 20}px`;
    };
    k.on(sc, 'scroll', upd, { passive: true }); upd();
    return done(k);
  };
  D['scroll-progress-indicator'] = el => {
    const k = kit(el, `<div class="dm-read"><i class="dm-read-bar"></i><div class="dm-scroll dm-read-body"><h5>Reading progress</h5>${lorem(26)}</div></div>`);
    const sc = k.q('.dm-read-body'), bar = k.q('.dm-read-bar');
    k.on(sc, 'scroll', () => { bar.style.transform = `scaleX(${sc.scrollTop / (sc.scrollHeight - sc.clientHeight || 1)})`; }, { passive: true });
    return done(k);
  };
  D['count-up'] = el => {
    const stats = [[12400, 'teams'], [98, '% uptime'], [340, 'integrations']];
    const k = kit(el, `<div class="dm-scroll"><p class="dm-hint">Scroll ↓</p><div class="dm-spacer dm-spacer--short"></div><div class="dm-stats">${stats.map(([n, l]) => `<div><b class="dm-count" data-n="${n}" aria-label="${n.toLocaleString()} ${l}">0</b><span>${l}</span></div>`).join('')}</div><div class="dm-spacer dm-spacer--short"></div></div>`);
    const sc = k.q('.dm-scroll'), fmt = new Intl.NumberFormat();
    const run = node => {
      const n = +node.dataset.n;
      if (k.reduced) { node.textContent = fmt.format(n); return; }
      let t0;
      k.loop(t => { t0 = t0 || t; const p = Math.min(1, (t - t0) / 1400); node.textContent = fmt.format(Math.round(n * (1 - Math.pow(1 - p, 4)))); return p < 1; });
    };
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); run(e.target); } }), { root: sc, threshold: 1 });
    k.qa('.dm-count').forEach(n => io.observe(n));
    const c = done(k); return () => { io.disconnect(); c(); };
  };

  /* ---------------- Hover & cursor ---------------- */
  D['hover-lift'] = el => {
    const k = kit(el, `<div class="dm-row">${[1, 2].map(() => `<div class="dm-card dm-lift" tabindex="0">${lorem(3)}</div>`).join('')}</div><p class="dm-hint">Hover or focus a card</p>`, 'dm-center');
    if (k.reduced) k.root.classList.add('is-reduced');
    return done(k);
  };
  D['magnetic-button'] = el => {
    const k = kit(el, `<div class="dm-mag-zone"><button class="dm-btn dm-mag" type="button"><span>Hover near me</span></button></div>`, 'dm-center');
    const zone = k.q('.dm-mag-zone'), btn = k.q('.dm-mag'), lbl = btn.firstElementChild;
    if (k.reduced) return done(k);
    k.on(zone, 'pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
      btn.classList.add('is-follow');
      btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`; lbl.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    k.on(zone, 'pointerleave', () => { btn.classList.remove('is-follow'); btn.style.transform = ''; lbl.style.transform = ''; });
    return done(k);
  };
  D['tilt-3d'] = el => {
    const k = kit(el, `<div class="dm-tilt-wrap"><div class="dm-tilt"><i class="dm-glare"></i><b>Holo card</b><span>Move your pointer</span></div></div>`, 'dm-center');
    const card = k.q('.dm-tilt'), glare = k.q('.dm-glare');
    if (k.reduced) return done(k);
    k.on(card, 'pointermove', e => {
      const r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transition = 'none';
      card.style.transform = `perspective(600px) rotateY(${px * 18}deg) rotateX(${-py * 18}deg)`;
      glare.style.background = `radial-gradient(circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, rgba(255,255,255,.55), transparent 55%)`;
    });
    k.on(card, 'pointerleave', () => { card.style.transition = ''; card.style.transform = ''; glare.style.background = ''; });
    return done(k);
  };
  D['underline-slide'] = el => {
    const k = kit(el, `<nav class="dm-links"><a href="#" class="dm-ul">Work</a><a href="#" class="dm-ul">Studio</a><a href="#" class="dm-ul">Journal</a></nav><p class="dm-hint">Hover or Tab through</p>`, 'dm-center');
    k.qa('a').forEach(a => k.on(a, 'click', e => e.preventDefault()));
    return done(k);
  };
  D['shine-sweep'] = el => {
    const k = kit(el, `<button class="dm-btn dm-btn--lg dm-shine" type="button">Hover for shine</button>`, 'dm-center');
    if (!k.reduced) k.every(2600, () => { const b = k.q('.dm-shine'); b.classList.remove('is-auto'); void b.offsetWidth; b.classList.add('is-auto'); });
    return done(k);
  };
  D['spotlight-hover'] = el => {
    const k = kit(el, `<div class="dm-spot"><b>Spotlight card</b><span>A glow follows the cursor.</span></div>`, 'dm-center dm-dark');
    const card = k.q('.dm-spot');
    k.on(card, 'pointermove', e => { const r = card.getBoundingClientRect(); card.style.setProperty('--x', e.clientX - r.left + 'px'); card.style.setProperty('--y', e.clientY - r.top + 'px'); card.classList.add('is-on'); });
    k.on(card, 'pointerleave', () => card.classList.remove('is-on'));
    return done(k);
  };
  D['cursor-follower'] = el => {
    const k = kit(el, `<div class="dm-cur-zone"><i class="dm-cur"></i><a href="#" class="dm-cur-link">View project</a><p class="dm-hint">Move inside the box</p></div>`);
    const zone = k.q('.dm-cur-zone'), dot = k.q('.dm-cur'), link = k.q('.dm-cur-link');
    k.on(link, 'click', e => e.preventDefault());
    let tx = 0, ty = 0, x = 0, y = 0, inside = false;
    k.on(zone, 'pointermove', e => { const r = zone.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; if (!inside) { x = tx; y = ty; } inside = true; dot.classList.add('is-on'); });
    k.on(zone, 'pointerleave', () => { inside = false; dot.classList.remove('is-on'); });
    k.on(link, 'pointerenter', () => dot.classList.add('is-big'));
    k.on(link, 'pointerleave', () => dot.classList.remove('is-big'));
    k.loop(() => { const f = k.reduced ? 1 : 0.15; x += (tx - x) * f; y += (ty - y) * f; dot.style.transform = `translate(${x}px, ${y}px)`; });
    return done(k);
  };
  D['image-reveal-hover'] = el => {
    const rows = [['Atlas', '#e06c4c'], ['Meridian', '#4c7de0'], ['Halcyon', '#3aa57a'], ['Solstice', '#c9a227']];
    const k = kit(el, `<ul class="dm-irh">${rows.map(([n, c]) => `<li data-c="${c}"><span>${n}</span><em>2026</em></li>`).join('')}<i class="dm-irh-img"></i></ul>`);
    const list = k.q('.dm-irh'), img = k.q('.dm-irh-img');
    let tx = 0, ty = 0, x = 0, y = 0;
    k.qa('li').forEach(li => k.on(li, 'pointerenter', () => { img.style.background = `linear-gradient(135deg, ${li.dataset.c}, #111)`; img.classList.add('is-on'); }));
    k.on(list, 'pointermove', e => { const r = list.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; });
    k.on(list, 'pointerleave', () => img.classList.remove('is-on'));
    k.loop(() => { const f = k.reduced ? 1 : 0.18; x += (tx - x) * f; y += (ty - y) * f; img.style.transform = `translate(${x + 14}px, ${y - 40}px)`; });
    return done(k);
  };

  /* ---------------- Feedback ---------------- */
  D['ripple'] = el => {
    const k = kit(el, `<button class="dm-btn dm-btn--lg dm-rip" type="button">Press me</button>`, 'dm-center');
    const btn = k.q('.dm-rip');
    const fire = (x, y) => {
      const r = btn.getBoundingClientRect(), s = Math.hypot(r.width, r.height) * 2;
      const c = document.createElement('span'); c.className = 'dm-ripple';
      c.style.cssText = `width:${s}px;height:${s}px;left:${x - s / 2}px;top:${y - s / 2}px`;
      if (k.reduced) c.classList.add('is-reduced');
      btn.appendChild(c); k.after(700, () => c.remove());
    };
    k.on(btn, 'pointerdown', e => { const r = btn.getBoundingClientRect(); fire(e.clientX - r.left, e.clientY - r.top); });
    k.on(btn, 'keydown', e => { if (e.key === ' ' || e.key === 'Enter') fire(btn.offsetWidth / 2, btn.offsetHeight / 2); });
    k.after(500, () => fire(btn.offsetWidth * 0.3, btn.offsetHeight / 2));
    return done(k);
  };
  D['spring-press'] = el => {
    const k = kit(el, `<button class="dm-btn dm-btn--lg dm-spring" type="button">Tap me</button><p class="dm-hint">Press and release</p>`, 'dm-center');
    if (k.reduced) k.q('.dm-spring').classList.add('is-reduced');
    return done(k);
  };
  D['button-loading-morph'] = el => {
    const k = kit(el, `<button class="dm-btn dm-btn--lg dm-morph" type="button" aria-live="polite"><span class="dm-morph-l">Submit</span><i class="dm-morph-s"></i><i class="dm-morph-ok">✓</i></button>`, 'dm-center');
    const b = k.q('.dm-morph');
    const cycle = () => {
      b.className = 'dm-btn dm-btn--lg dm-morph is-loading'; b.setAttribute('aria-busy', 'true');
      k.after(k.reduced ? 300 : 1400, () => { b.className = 'dm-btn dm-btn--lg dm-morph is-done'; b.removeAttribute('aria-busy'); });
      k.after(k.reduced ? 1500 : 2800, () => { b.className = 'dm-btn dm-btn--lg dm-morph'; });
    };
    k.on(b, 'click', cycle); k.after(500, cycle);
    return done(k);
  };
  D['confetti'] = el => {
    const k = kit(el, `<canvas class="dm-canvas"></canvas><button class="dm-btn dm-conf-btn" type="button">Celebrate</button>`, 'dm-center');
    const cv = k.q('canvas'), ctx = cv.getContext('2d');
    const colors = ['#ff5a5f', '#ffb400', '#00a699', '#7b61ff', '#3fa9f5'];
    let parts = [], running = false;
    const size = () => { cv.width = cv.offsetWidth * devicePixelRatio; cv.height = cv.offsetHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); };
    const burst = () => {
      size();
      if (k.reduced) return;
      const w = cv.offsetWidth, h = cv.offsetHeight;
      for (let i = 0; i < 90; i++) parts.push({ x: w / 2, y: h * 0.75, vx: (Math.random() - 0.5) * 9, vy: -Math.random() * 9 - 3, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.3, c: colors[i % colors.length], s: 4 + Math.random() * 4 });
      if (running) return; running = true;
      k.loop(() => {
        ctx.clearRect(0, 0, w, h);
        parts.forEach(p => { p.vy += 0.25; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
        parts = parts.filter(p => p.y < h + 20);
        if (!parts.length) { running = false; return false; }
      });
    };
    k.on(k.q('.dm-conf-btn'), 'click', burst); k.after(300, burst);
    return done(k);
  };
  D['shake-error'] = el => {
    const k = kit(el, `<form class="dm-form" novalidate><label for="dm-shake-in">Email</label><input id="dm-shake-in" class="dm-input" value="not-an-email" aria-describedby="dm-shake-err"><p id="dm-shake-err" class="dm-err" hidden>Enter an email address like name@site.com</p><button class="dm-btn" type="submit">Sign up</button></form>`, 'dm-center');
    const f = k.q('form'), inp = k.q('input'), err = k.q('.dm-err');
    const fail = () => { inp.classList.remove('is-shake'); void inp.offsetWidth; if (!k.reduced) inp.classList.add('is-shake'); inp.setAttribute('aria-invalid', 'true'); err.hidden = false; };
    k.on(f, 'submit', e => { e.preventDefault(); if (/.+@.+\..+/.test(inp.value)) { inp.removeAttribute('aria-invalid'); err.hidden = true; } else fail(); });
    k.after(500, fail);
    return done(k);
  };

  /* ---------------- Loading ---------------- */
  D['shimmer-skeleton'] = el => {
    const k = kit(el, `<div class="dm-skel-card" aria-busy="true" aria-label="Loading"><i class="dm-skel dm-skel-av"></i><div class="dm-skel-lines"><i class="dm-skel" style="width:70%"></i><i class="dm-skel" style="width:90%"></i><i class="dm-skel" style="width:50%"></i></div></div>`, 'dm-center');
    if (k.reduced) k.root.classList.add('is-still');
    return done(k);
  };
  D['spinner-rotate'] = el => {
    const k = kit(el, `<div class="dm-row"><i class="dm-spinner" role="status" aria-label="Loading"></i><svg class="dm-m3spin" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/></svg></div>`, 'dm-center');
    if (k.reduced) k.root.classList.add('is-slow');
    return done(k);
  };
  D['dots-loader'] = el => {
    const k = kit(el, `<div class="dm-bubble" role="status" aria-label="Assistant is typing"><span></span><span></span><span></span></div>`, 'dm-center');
    if (k.reduced) k.root.classList.add('is-fade');
    return done(k);
  };
  D['progress-fill'] = el => {
    const k = kit(el, `<div class="dm-prog-wrap"><div class="dm-prog" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Upload"><i></i></div><span class="dm-prog-v">0%</span></div>`, 'dm-center');
    const bar = k.q('.dm-prog'), fill = k.q('.dm-prog i'), v = k.q('.dm-prog-v');
    let p = 0;
    const step = () => {
      p = p >= 100 ? 0 : Math.min(100, p + 8 + Math.random() * 22);
      fill.style.transform = `scaleX(${p / 100})`; bar.setAttribute('aria-valuenow', Math.round(p)); v.textContent = Math.round(p) + '%';
    };
    step(); k.every(700, step);
    return done(k);
  };

  /* ---------------- Transition ---------------- */
  const vt = (k, fn) => {
    if (!k.reduced && document.startViewTransition) { try { document.startViewTransition(fn); return; } catch { /* fall through */ } }
    fn();
  };
  D['page-transition'] = el => {
    const pages = [['Home', 'Welcome to the studio.'], ['Work', 'Selected projects, 2020–2026.'], ['About', 'Six people, one room.']];
    const k = kit(el, `<div class="dm-browser"><div class="dm-browser-bar">${pages.map(([n], i) => `<button type="button" data-i="${i}" class="${i ? '' : 'on'}">${n}</button>`).join('')}</div><div class="dm-page"><h5>${pages[0][0]}</h5><p>${pages[0][1]}</p></div></div>`);
    const page = k.q('.dm-page'), btns = k.qa('.dm-browser-bar button');
    let i = 0;
    const go = n => {
      i = n;
      vt(k, () => { page.innerHTML = `<h5>${pages[n][0]}</h5><p>${pages[n][1]}</p>`; btns.forEach((b, j) => b.classList.toggle('on', j === n)); if (!document.startViewTransition || k.reduced) { page.classList.remove('is-x'); void page.offsetWidth; page.classList.add('is-x'); } });
    };
    btns.forEach(b => k.on(b, 'click', () => go(+b.dataset.i)));
    k.every(2600, () => go((i + 1) % pages.length));
    return done(k);
  };
  D['shared-element-transition'] = el => {
    const k = kit(el, `<div class="dm-set"><div class="dm-set-grid">${['#e06c4c', '#4c7de0', '#3aa57a'].map((c, i) => `<button type="button" class="dm-set-thumb" data-i="${i}" style="--c:${c}" aria-label="Open item ${i + 1}"></button>`).join('')}</div><div class="dm-set-detail" hidden><i class="dm-set-hero"></i><div><b>Item</b><p>Tap to go back</p></div></div></div>`);
    const grid = k.q('.dm-set-grid'), detail = k.q('.dm-set-detail'), hero = k.q('.dm-set-hero');
    let openIdx = -1;
    const open = i => {
      const t = k.qa('.dm-set-thumb')[i];
      t.style.viewTransitionName = 'dm-shared';
      vt(k, () => { t.style.viewTransitionName = ''; hero.style.viewTransitionName = 'dm-shared'; hero.style.background = t.style.getPropertyValue('--c'); grid.hidden = true; detail.hidden = false; openIdx = i; });
    };
    const close = () => {
      const t = k.qa('.dm-set-thumb')[openIdx];
      vt(k, () => { hero.style.viewTransitionName = ''; t.style.viewTransitionName = 'dm-shared'; grid.hidden = false; detail.hidden = true; });
      k.after(600, () => { t.style.viewTransitionName = ''; });
    };
    k.qa('.dm-set-thumb').forEach(t => k.on(t, 'click', () => open(+t.dataset.i)));
    k.on(detail, 'click', close);
    let n = 0;
    k.every(2400, () => { if (detail.hidden) open(n++ % 3); else close(); });
    const c = done(k);
    return () => { hero.style.viewTransitionName = ''; k.qa('.dm-set-thumb').forEach(t => { t.style.viewTransitionName = ''; }); c(); };
  };
  D['flip-layout'] = el => {
    const items = ['A', 'B', 'C', 'D', 'E', 'F'];
    const k = kit(el, `<div class="dm-flip">${items.map((t, i) => `<i class="dm-flip-i" style="--h:${i * 50}">${t}</i>`).join('')}</div><button class="dm-btn dm-btn--sm dm-flip-btn" type="button">Shuffle</button>`, 'dm-center');
    const box = k.q('.dm-flip');
    const shuffle = () => {
      const nodes = [...box.children];
      const first = new Map(nodes.map(n => [n, n.getBoundingClientRect()]));
      nodes.sort(() => Math.random() - 0.5).forEach(n => box.appendChild(n));
      if (k.reduced) return;
      nodes.forEach(n => {
        const f = first.get(n), l = n.getBoundingClientRect();
        n.animate([{ transform: `translate(${f.left - l.left}px, ${f.top - l.top}px)` }, { transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.2,0,0,1)' });
      });
    };
    k.on(k.q('.dm-flip-btn'), 'click', shuffle); k.every(2200, shuffle);
    return done(k);
  };
  D['accordion-expand'] = el => {
    const qs = [['What is included?', 'Every component, token and a DESIGN.md file.'], ['Can I change it later?', 'Yes — everything is driven by tokens.'], ['Is it accessible?', 'Built on the WAI-ARIA Accordion pattern.']];
    const k = kit(el, `<div class="dm-acc">${qs.map(([q, a], i) => `<div class="dm-acc-item${i === 0 ? ' open' : ''}"><h5><button type="button" aria-expanded="${i === 0}" aria-controls="dm-acc-${i}">${q}<i aria-hidden="true">+</i></button></h5><div class="dm-acc-panel" id="dm-acc-${i}"><div><p>${a}</p></div></div></div>`).join('')}</div>`);
    if (k.reduced) k.root.classList.add('is-reduced');
    k.qa('.dm-acc-item').forEach(it => {
      const b = it.querySelector('button');
      k.on(b, 'click', () => { const o = it.classList.toggle('open'); b.setAttribute('aria-expanded', o); });
    });
    return done(k);
  };
  D['toast-slide'] = el => {
    const k = kit(el, `<button class="dm-btn dm-btn--sm dm-toast-btn" type="button">Show toast</button><div class="dm-toasts" role="status" aria-live="polite"></div>`, 'dm-center');
    const host = k.q('.dm-toasts');
    let n = 0;
    const msgs = ['Changes saved', 'File uploaded', 'Invite sent'];
    const show = () => {
      const t = document.createElement('div'); t.className = 'dm-toast'; t.textContent = msgs[n++ % msgs.length];
      host.appendChild(t);
      [...host.children].reverse().forEach((c, i) => c.style.setProperty('--i', i));
      k.after(2600, () => { t.classList.add('is-out'); k.after(250, () => t.remove()); });
    };
    k.on(k.q('.dm-toast-btn'), 'click', show); show(); k.every(1800, show);
    if (k.reduced) k.root.classList.add('is-reduced');
    return done(k);
  };
  D['modal-zoom'] = el => {
    const k = kit(el, `<button class="dm-btn dm-modal-open" type="button">Open dialog</button><div class="dm-modal" role="dialog" aria-modal="true" aria-labelledby="dm-modal-t" hidden><div class="dm-modal-box"><b id="dm-modal-t">Delete project?</b><p>This can’t be undone.</p><div class="dm-row"><button class="dm-btn dm-btn--ghost dm-btn--sm dm-modal-x" type="button">Cancel</button><button class="dm-btn dm-btn--sm dm-modal-x" type="button">Delete</button></div></div></div>`, 'dm-center');
    const m = k.q('.dm-modal'), opener = k.q('.dm-modal-open');
    const open = () => { m.hidden = false; if (k.reduced) m.classList.add('is-in'); else play(k, m); k.after(40, () => m.querySelector('.dm-modal-x').focus({ preventScroll: true })); };
    const close = () => { m.classList.remove('is-in'); k.after(k.reduced ? 0 : 200, () => { m.hidden = true; }); };
    k.on(opener, 'click', open); k.qa('.dm-modal-x').forEach(b => k.on(b, 'click', close));
    k.on(m, 'keydown', e => { if (e.key === 'Escape') close(); });
    k.after(400, open); k.every(3200, () => (m.hidden ? open() : close()));
    return done(k);
  };

  /* ---------------- Ambient ---------------- */
  D['gradient-drift'] = el => { const k = kit(el, `<div class="dm-mesh"></div><h4 class="dm-over">Mesh gradient</h4>`, 'dm-fill' + (reducedMQ.matches ? ' is-still' : '')); return done(k); };
  D['aurora-bg'] = el => { const k = kit(el, `<div class="dm-aurora"><i></i><i></i><i></i></div><h4 class="dm-over dm-over--light">Aurora</h4>`, 'dm-fill dm-dark' + (reducedMQ.matches ? ' is-still' : '')); return done(k); };
  D['blob-morph'] = el => { const k = kit(el, `<i class="dm-blob"></i>`, 'dm-center' + (reducedMQ.matches ? ' is-still' : '')); return done(k); };
  D['noise-grain'] = el => {
    const k = kit(el, `<div class="dm-grain-bg"><h4 class="dm-over dm-over--light">Grain</h4><i class="dm-grain"></i></div>`, 'dm-fill' + (reducedMQ.matches ? ' is-still' : ''));
    return done(k);
  };
  D['glitch'] = el => {
    const k = kit(el, `<h4 class="dm-glitch" data-text="SIGNAL LOST">SIGNAL LOST</h4>`, 'dm-center dm-dark' + (reducedMQ.matches ? ' is-still' : ''));
    return done(k);
  };
  D['neon-flicker'] = el => {
    const k = kit(el, `<h4 class="dm-neon">Open late</h4>`, 'dm-center dm-dark' + (reducedMQ.matches ? ' is-still' : ''));
    return done(k);
  };
  D['ken-burns'] = el => {
    const k = kit(el, `<div class="dm-kb"><div class="dm-kb-img"></div><span class="dm-kb-cap">Lake Bled, dawn</span></div>`, 'dm-fill' + (reducedMQ.matches ? ' is-still' : ''));
    return done(k);
  };
  D['marquee-scroll'] = el => {
    const words = ['Figma', 'Linear', 'Vercel', 'Stripe', 'Notion', 'Raycast'];
    const row = words.map(w => `<span>${w}</span>`).join('<i>✦</i>') + '<i>✦</i>';
    const k = kit(el, `<div class="dm-marquee" tabindex="0" aria-label="Logos: ${words.join(', ')}"><div class="dm-marquee-track"><div>${row}</div><div aria-hidden="true">${row}</div></div></div><p class="dm-hint">Hover or focus to pause</p>`, 'dm-center' + (reducedMQ.matches ? ' is-still' : ''));
    return done(k);
  };
  D['draw-svg'] = el => {
    const k = kit(el, `<svg class="dm-draw" viewBox="0 0 220 110" aria-hidden="true"><path pathLength="1" d="M10 90 C 40 10, 70 10, 90 60 S 140 110, 160 40 S 200 20, 210 70"/><path pathLength="1" d="M20 100 H 200"/></svg>`, 'dm-center');
    const svg = k.q('svg');
    if (k.reduced) { svg.classList.add('is-still'); return done(k); }
    k.every(3200, () => { svg.classList.remove('is-on'); void svg.getBoundingClientRect(); k.raf(() => svg.classList.add('is-on')); });
    k.raf(() => svg.classList.add('is-on'));
    return done(k);
  };
  D['pixel-dissolve'] = el => {
    const N = 12 * 7;
    const k = kit(el, `<div class="dm-pix"><div class="dm-pix-under">GAME OVER</div><div class="dm-pix-grid">${'<i></i>'.repeat(N)}</div></div>`, 'dm-center');
    const cells = k.qa('.dm-pix-grid i');
    const run = () => {
      const order = cells.map((c, i) => i).sort(() => Math.random() - 0.5);
      const hideAll = cells.every(c => !c.classList.contains('off'));
      if (k.reduced) { cells.forEach(c => c.classList.toggle('off', hideAll)); return; }
      order.forEach((idx, n) => k.after(n * 9, () => cells[idx].classList.toggle('off', hideAll)));
    };
    k.after(300, run); k.every(2400, run);
    return done(k);
  };
}

export default D;
