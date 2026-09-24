import { Link } from 'react-router';
import { languages } from '../data';
import { useDocumentTitle } from '../hooks';
import { PageHead } from '../components/ui';

const BRANDS = ['apple', 'stripe', 'linear.app', 'vercel', 'notion', 'figma', 'framer', 'raycast', 'airbnb', 'spotify', 'nike', 'ibm', 'theverge', 'wired', 'supabase', 'cursor', 'claude', 'revolut', 'tesla', 'ferrari', 'dell-1996', 'nintendo-2001'];
const ext = { target: '_blank', rel: 'noopener' } as const;

export default function Sources() {
  useDocumentTitle('Sources');
  return (
    <div className="page">
      <PageHead eyebrow="About" title="Sources & DESIGN.md" lede="Where the names and facts come from, and how to hand a style to a coding agent." />
      <section className="section"><h2 className="sec">DESIGN.md files</h2>
        <div className="prose"><p>DESIGN.md is an open format from Google Labs (born in Stitch) for describing a visual identity to coding agents: design tokens in YAML front matter, rationale in Markdown prose, sections in a fixed order — Overview, Colors, Typography, Layout, Elevation &amp; Depth, Shapes, Components, Do's and Don'ts.</p>
          <p>Every design language here generates one. They are also written to <code>public/design-md/&lt;id&gt;.md</code> by <code>npm run design-md</code>, and your brief can export one that blends your chosen language with your chosen fonts.</p></div>
        <div className="chips">{languages.map(l => <a key={l.id} className="chip" href={`design-md/${l.id}.md`} {...ext}>{l.id}.md</a>)}</div>
      </section>
      <section className="section"><h2 className="sec">Real brands' DESIGN.md files</h2>
        <p className="muted">The <a href="https://github.com/VoltAgent/awesome-design-md" {...ext}>awesome-design-md</a> collection extracts DESIGN.md files from real sites, served at getdesign.md. A few worth studying:</p>
        <div className="chips">{BRANDS.map(b => <a key={b} className="chip" href={`https://getdesign.md/${b}/design-md`} {...ext}>{b}</a>)}</div>
      </section>
      <section className="section"><h2 className="sec">References</h2>
        <ul className="bullets">
          <li><a href="https://github.com/google-labs-code/design.md" {...ext}>google-labs-code/design.md</a> — the DESIGN.md specification</li>
          <li><a href="https://m3.material.io" {...ext}>Material Design 3</a> · <a href="https://developer.apple.com/design/human-interface-guidelines" {...ext}>Apple Human Interface Guidelines</a> · <a href="https://fluent2.microsoft.design" {...ext}>Fluent 2</a> · <a href="https://carbondesignsystem.com" {...ext}>IBM Carbon</a></li>
          <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/" {...ext}>WAI-ARIA Authoring Practices — patterns</a> — component names and keyboard behaviour</li>
          <li><a href="https://ui.shadcn.com/docs/components" {...ext}>shadcn/ui</a> · <a href="https://www.radix-ui.com/primitives" {...ext}>Radix Primitives</a> · <a href="https://mui.com/material-ui/" {...ext}>MUI</a> · <a href="https://getbootstrap.com/docs/" {...ext}>Bootstrap</a> · <a href="https://ant.design/components/overview" {...ext}>Ant Design</a></li>
          <li><a href="https://fonts.google.com" {...ext}>Google Fonts</a> · <a href="https://www.fontshare.com" {...ext}>Fontshare</a> · foundry sites for commercial faces</li>
          <li><a href="https://refero.design" {...ext}>Refero</a> — curated real-world UI references. See <Link to="/resources">Resources</Link> for it and 100+ other sites, each with pros and cons.</li>
        </ul>
      </section>
    </div>
  );
}
