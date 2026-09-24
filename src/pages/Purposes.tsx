import { Link } from 'react-router';
import { nameOf, purposes } from '../data';
import { useDocumentTitle } from '../hooks';
import { PageHead } from '../components/ui';

export default function Purposes() {
  useDocumentTitle('By purpose');
  return (
    <div className="page">
      <PageHead eyebrow={`Decide · ${purposes.length} site types`} title="By purpose" lede="Start from what the site is for. Each entry ranks the design languages that suit it and lists the typefaces, page sections and motion that usually work." />
      <div className="grid grid--purposes">{purposes.map(p => (
        <article className="tile" key={p.id}><div className="tile__body">
          <h3 className="tile__title"><Link to={`/purpose/${p.id}`}>{p.name}</Link></h3>
          <p className="small">{p.audience}</p>
          <p className="tile__meta"><span>Top picks</span></p>
          <div className="chips">{p.languages.slice(0, 3).map(id => <span key={id} className="chip chip--quiet">{nameOf('languages', id)}</span>)}</div>
        </div></article>
      ))}</div>
    </div>
  );
}
