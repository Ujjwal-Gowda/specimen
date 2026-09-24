/* App-wide state: the brief, the compare set, client mode, the component theme, the
   colour theme and toasts. Everything persists to localStorage (best effort). */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { KINDS, get, languages, nameOf, type Kind } from '../data';
import { cleanBrief, emptyBrief, inBrief, toggled, type Brief } from '../lib/brief';
import { store } from '../lib/storage';

export type Theme = 'system' | 'light' | 'dark';
const THEMES: Theme[] = ['system', 'light', 'dark'];
export const MAX_COMPARE = 4;

interface AtlasState {
  brief: Brief;
  setBrief: (b: Brief | ((prev: Brief) => Brief)) => void;
  togglePin: (kind: Kind, id: string) => void;
  isPinned: (kind: Kind, id: string) => boolean;
  /** increments on every pin change, so the header counter can replay its bump */
  pinTick: number;
  compare: string[];
  setCompare: (ids: string[]) => void;
  toggleCompare: (id: string) => void;
  clientMode: boolean;
  setClientMode: (on: boolean) => void;
  compTheme: string;
  setCompTheme: (id: string) => void;
  theme: Theme;
  cycleTheme: () => void;
  toast: (msg: string) => void;
  toastMsg: { text: string; key: number } | null;
}

const Ctx = createContext<AtlasState | null>(null);

function usePersisted<T>(key: string, initial: () => T) {
  const [v, setV] = useState<T>(initial);
  useEffect(() => { store.set(key, v); }, [key, v]);
  return [v, setV] as const;
}

export function AtlasProvider({ children }: { children: ReactNode }) {
  const [brief, setBrief] = usePersisted<Brief>('specimen-brief', () => cleanBrief(store.get('specimen-brief', emptyBrief())));
  const [compare, setCompareRaw] = usePersisted<string[]>('specimen-compare', () =>
    store.get<string[]>('specimen-compare', []).filter(id => get('languages', id)).slice(0, MAX_COMPARE));
  const [clientMode, setClientMode] = usePersisted<boolean>('specimen-client', () => store.get<unknown>('specimen-client', false) === true);
  const [compTheme, setCompTheme] = usePersisted<string>('specimen-comp-theme', () => {
    const saved = store.get('specimen-comp-theme', 'minimalism');
    return get('languages', saved) ? saved : languages[0].id;
  });
  const [theme, setTheme] = usePersisted<Theme>('specimen-theme', () => {
    const t = store.get<Theme>('specimen-theme', 'system');
    return THEMES.includes(t) ? t : 'system';
  });
  const [toastMsg, setToastMsg] = useState<{ text: string; key: number } | null>(null);
  const [pinTick, setPinTick] = useState(0);
  const toastTimer = useRef<number | undefined>(undefined);

  const toast = useCallback((text: string) => {
    setToastMsg(prev => ({ text, key: (prev?.key ?? 0) + 1 }));
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(null), 2200);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => { document.documentElement.classList.toggle('is-client', clientMode); }, [clientMode]);

  const togglePin = useCallback((kind: Kind, id: string) => {
    const on = !inBrief(brief, kind, id);
    setBrief(toggled(brief, kind, id));
    setPinTick(t => t + 1);
    const name = nameOf(KINDS[kind].coll, id);
    toast(on ? `Added “${name}” to your brief` : `Removed “${name}”`);
  }, [brief, setBrief, toast]);

  const setCompare = useCallback((ids: string[]) => {
    const next = [...new Set(ids.filter(id => get('languages', id)))].slice(0, MAX_COMPARE);
    /* keep the same array when nothing changed, so effects that sync from the URL settle */
    setCompareRaw(prev => (prev.join(',') === next.join(',') ? prev : next));
  }, [setCompareRaw]);

  const toggleCompare = useCallback((id: string) => {
    const on = !compare.includes(id);
    const next = on ? [...compare, id].slice(-MAX_COMPARE) : compare.filter(x => x !== id);
    setCompareRaw(next);
    toast(on ? `Comparing ${next.length} — open Compare to see them side by side` : 'Removed from compare');
  }, [compare, setCompareRaw, toast]);

  const value = useMemo<AtlasState>(() => ({
    brief, setBrief, togglePin, isPinned: (kind, id) => inBrief(brief, kind, id), pinTick,
    compare, setCompare, toggleCompare,
    clientMode, setClientMode, compTheme, setCompTheme,
    theme, cycleTheme: () => setTheme(t => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]),
    toast, toastMsg,
  }), [brief, setBrief, togglePin, pinTick, compare, setCompare, toggleCompare, clientMode, setClientMode, compTheme, setCompTheme, theme, setTheme, toast, toastMsg]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAtlas() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAtlas must be used inside <AtlasProvider>');
  return v;
}
