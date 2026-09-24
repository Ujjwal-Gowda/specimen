import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { search } from '../lib/search';

/** Command-palette search: `/` or Ctrl/⌘K opens it. Mounted only while open, so each
    opening starts with an empty query. */
export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  return open ? <Palette onClose={onClose} /> : null;
}

function Palette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const results = search(q);

  /* focus the input; give focus back to whatever had it on close */
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    input.current?.focus();
    return () => prev?.focus?.();
  }, []);
  useEffect(() => { list.current?.querySelector(`#opt-${sel}`)?.scrollIntoView({ block: 'nearest' }); }, [sel]);

  const go = (i: number) => { const r = results[i]; if (!r) return; onClose(); navigate(r.href); };
  return (
    <div className="palette">
      <div className="palette__scrim" onClick={onClose} />
      <div className="palette__box" role="dialog" aria-modal="true" aria-label="Search the atlas">
        <input
          ref={input} className="palette__input" type="search" role="combobox" aria-expanded="true" aria-autocomplete="list"
          aria-controls="palette-list" aria-activedescendant={results.length ? `opt-${sel}` : undefined} autoComplete="off"
          placeholder="Search — try “didone”, “bento”, “toast”, “icons”" value={q}
          onChange={e => { setQ(e.target.value); setSel(0); }}
          onKeyDown={e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(results.length - 1, s + 1)); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(0, s - 1)); }
            else if (e.key === 'Enter') { e.preventDefault(); go(sel); }
            else if (e.key === 'Escape') { e.preventDefault(); onClose(); }
            else if (e.key === 'Tab') e.preventDefault(); // keep focus inside the dialog
          }}
        />
        <ul ref={list} className="palette__list" id="palette-list" role="listbox" aria-label="Results">
          {results.length ? results.map((r, i) => (
            <li key={r.kind + r.href + r.name} role="option" id={`opt-${i}`} aria-selected={i === sel} onClick={() => go(i)} onMouseMove={() => setSel(i)}>
              <span className="kind">{r.kind}</span><span className="nm">{r.name}</span><span className="sub">{r.sub}</span>
            </li>
          )) : <li aria-disabled="true"><span className="muted">No matches</span></li>}
        </ul>
        <p className="palette__hint"><kbd>↑</kbd><kbd>↓</kbd> move · <kbd>Enter</kbd> open · <kbd>Esc</kbd> close</p>
      </div>
    </div>
  );
}
