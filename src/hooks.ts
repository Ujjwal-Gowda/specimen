import { useEffect, useRef } from 'react';
import { loadFonts } from './lib/fonts';

let io: IntersectionObserver | null = null;
const specs = new WeakMap<Element, string>();
function observer() {
  if (!io && typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      loadFonts(specs.get(e.target));
      io!.unobserve(e.target);
    }), { rootMargin: '400px 0px' });
  }
  return io;
}

/** Load a Google Fonts spec when the element scrolls near the viewport. */
export function useLazyFonts<T extends Element>(spec: string | null | undefined) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !spec) return;
    const obs = observer();
    if (!obs) { loadFonts(spec); return; }
    specs.set(el, spec);
    obs.observe(el);
    return () => obs.unobserve(el);
  }, [spec]);
  return ref;
}

/** Load fonts immediately (detail pages). */
export function useFonts(...list: (string | null | undefined)[]) {
  const key = list.filter(Boolean).join('&');
  useEffect(() => { if (key) loadFonts(key); }, [key]);
}

/* Route announcements for screen readers: pages report their title once mounted, so the
   announcement is never the previous page's title (lazy chunks mount late). */
type Listener = (title: string) => void;
const titleListeners = new Set<Listener>();
export function onTitleChange(fn: Listener) { titleListeners.add(fn); return () => { titleListeners.delete(fn); }; }

export function useDocumentTitle(title: string | null) {
  useEffect(() => {
    document.title = title ? `${title} · Specimen Atlas` : 'Specimen Atlas';
    titleListeners.forEach(fn => fn(title ?? 'Overview'));
  }, [title]);
}
