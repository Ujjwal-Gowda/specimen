import { Link } from 'react-router';
import { animations, components, languages, layouts, purposes, resources, resolve, typefaces } from '../data';
import { LangTile } from '../components/tiles';
import { useDocumentTitle } from '../hooks';

const FEATURED = ['swiss', 'neobrutalism', 'glassmorphism', 'editorial', 'dark-saas', 'bento', 'quiet-luxury', 'cyberpunk', 'frutiger-aero'];

export default function Home() {
  useDocumentTitle(null);
  const stats: [string, number, string][] = [
    ['/languages', languages.length, 'Design languages'], ['/type', typefaces.length, 'Typefaces'],
    ['/components', components.length, 'Components'], ['/motion', animations.length, 'Animations'],
    ['/layouts', layouts.length, 'Layouts'], ['/resources', resources.length, 'Resources'],
  ];
  return (
    <div className="page">
      <section className="home-hero">
        <div>
          <p className="eyebrow">A working reference for building websites</p>
          <h1>Every style, <mark>by its real&nbsp;name</mark>.</h1>
          <p className="lede">Design languages, typefaces, components, layouts and animations — each with its exact name, what it pairs with, and a live preview. Plus the websites and tools worth knowing for every job. Pin what you like to a brief, then send the link to a client or export a DESIGN.md.</p>
        </div>
        <div className="stat-row">{stats.map(([h, n, l]) => <Link key={h} to={h}><b>{n}</b><span>{l}</span></Link>)}</div>
      </section>

      <section className="section" aria-labelledby="how">
        <h2 className="sec" id="how">How to use it</h2>
        <ol className="steps">
          <li><b>Start from the job</b><p>Pick what you're building under <Link to="/purposes">By purpose</Link>. You get ranked design languages, typefaces, page sections and motion for it.</p></li>
          <li><b>Shortlist and compare</b><p>Open a design language to see it live, then put two or three side by side in <Link to="/compare">Compare</Link>.</p></li>
          <li><b>Pin, share, build</b><p>Star anything to add it to <Link to="/brief">your brief</Link>. Share the link with a client, or export Markdown / DESIGN.md. <Link to="/resources">Resources</Link> lists the sites and tools for the build itself.</p></li>
        </ol>
      </section>

      <section className="section" aria-labelledby="start">
        <h2 className="sec" id="start">What are you building?</h2>
        <div className="chips">{purposes.map(p => <Link key={p.id} className="chip" to={`/purpose/${p.id}`}>{p.name}</Link>)}</div>
      </section>

      <section className="section" aria-labelledby="feat">
        <div className="detail-head"><h2 className="sec" id="feat">Design languages at a glance</h2><Link className="btn btn--ghost" to="/languages">All {languages.length} languages →</Link></div>
        <div className="grid grid--langs">{resolve('languages', FEATURED).map(l => <LangTile key={l.id} lang={l} />)}</div>
      </section>
    </div>
  );
}
