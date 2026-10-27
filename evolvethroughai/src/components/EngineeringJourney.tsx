import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Code2, Layers } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import TopoBackground from './kokonutui/topo-background';
import './EngineeringJourney.css';
import './DualTrackShowcase.css';

function useWorkspaceTheme(): 'light' | 'dark' {
  const current = () => document.documentElement.dataset.theme === 'light' ? 'light' as const : 'dark' as const;
  const [theme, setTheme] = useState(current);
  useEffect(() => { const observer = new MutationObserver(() => setTheme(current())); observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] }); return () => observer.disconnect(); }, []);
  return theme;
}

export function EngineeringJourney() {
  const theme = useWorkspaceTheme();
  const reduced = useReducedMotion();
  return <section id="engineering-journey" className="workspace-journey dual-track-showcase dual-track-overview" aria-labelledby="engineering-journey-heading">
    <div className="workspace-journey__backdrop" aria-hidden="true"><img key={theme} src={`/images/screen-02/workspace-${theme}-991.webp`} srcSet={`/images/screen-02/workspace-${theme}-640.webp 640w, /images/screen-02/workspace-${theme}-991.webp 991w`} sizes="100vw" width={991} height={793} alt="" loading="lazy" decoding="async" /><div className="workspace-journey__wash" /></div>
    <div className="dual-track-topo" aria-hidden="true"><TopoBackground key={reduced ? 'static' : 'animated'} interval={0.1} speed={reduced ? 0 : 0.15} seed={26} labels={false} interactive={false}>{null}</TopoBackground></div>
    <div className="container dual-track-content">
      <header className="dual-track-heading"><span className="dual-track-badge">TWO PATHWAYS &bull; ONE PLATFORM</span><h2 id="engineering-journey-heading">Bridging Technical Upskilling &amp; Enterprise Execution</h2><p>Build practical engineering capability or explore digital solutions for your business.</p></header>
      <div className="dual-track-grid">
        <article className="dual-track-card" aria-labelledby="academy-heading">
          <span className="dual-track-kicker"><Code2 size={16} aria-hidden="true" /> ACADEMY</span><h3 id="academy-heading">For Engineers &amp; Career Seekers</h3>
          <p className="dual-track-summary">Build a foundation in cloud and DevOps, then grow toward LLM applications, agentic AI and forward-deployed engineering: turning real problems into working systems.</p>
          <ul className="dual-track-benefits"><li><Check size={15} aria-hidden="true" />Engineering foundations: 18 modules connecting systems, cloud and DevOps</li><li><Check size={15} aria-hidden="true" />Applied AI progression: Python, APIs, LLMs, RAG and evaluation</li><li><Check size={15} aria-hidden="true" />Future pathways: AI agents and forward-deployed engineering; detailed scope in development</li><li><Check size={15} aria-hidden="true" /><span>AI-Driven Automation &amp; Growth: Learn to build intelligent workflows that automate social media reach and drive organic digital growth.</span></li></ul>
          <a className="dual-track-cta dual-track-cta--academy" href="#path">Explore Learning Paths<ArrowUpRight size={16} aria-hidden="true" /></a>
        </article>
        <article className="dual-track-card" aria-labelledby="enterprise-heading">
          <span className="dual-track-kicker"><Layers size={16} aria-hidden="true" /> BUSINESS SOLUTIONS</span><h3 id="enterprise-heading">Scale Your Business, Not Your Headcount.</h3>
          <p className="dual-track-summary">We architect custom AI workflows, automate operations, and scale your social presence organically—turning repetitive manual work into self-sustaining systems.</p>
          <ul className="dual-track-benefits"><li><Check size={15} aria-hidden="true" />Websites &amp; Digital Platforms: Turn your ideas into production-grade user experiences.</li><li><Check size={15} aria-hidden="true" />AI-Driven Social Growth: Expand your digital footprint organically through automated content and workflow pipelines.</li><li><Check size={15} aria-hidden="true" />End-to-End Workflow Automation: Eliminate repetitive busywork by connecting systems and data seamlessly.</li></ul>
          <a className="dual-track-cta dual-track-cta--enterprise" href="#solutions">Explore Business Solutions<ArrowRight size={16} aria-hidden="true" /></a>
        </article>
      </div>
    </div>
  </section>;
}
