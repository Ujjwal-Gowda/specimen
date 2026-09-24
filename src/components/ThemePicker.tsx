import { useId } from 'react';
import { languages } from '../data';
import { useAtlas } from '../state/AtlasContext';

/** "Render in" — re-themes every component preview in a design language. */
export function ThemePicker() {
  const { compTheme, setCompTheme } = useAtlas();
  const id = useId();
  return (
    <span className="field"><label htmlFor={id}>Render in</label>
      <select className="select" id={id} value={compTheme} onChange={e => setCompTheme(e.target.value)}>
        {languages.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
      </select></span>
  );
}
