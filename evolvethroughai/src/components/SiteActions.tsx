import { useEffect, useRef, type ReactNode, type PointerEvent } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import './FooterFinale.css';

export function SiteFooter({ onEnquire, brand }: { onEnquire: () => void; brand: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.dataset.visible = 'true'; observer.disconnect(); }
    }, {threshold:.08});
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const parallax = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node=event.currentTarget, box=node.getBoundingClientRect();
    node.style.setProperty('--scene-x', ((event.clientX-box.left)/box.width-.5)*5+'px');
    node.style.setProperty('--scene-y', ((event.clientY-box.top)/box.height-.5)*4+'px');
  };
  const magnet = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node=event.currentTarget, box=node.getBoundingClientRect();
    node.style.setProperty('--magnet-x', ((event.clientX-box.left)/box.width-.5)*5+'px');
    node.style.setProperty('--magnet-y', ((event.clientY-box.top)/box.height-.5)*4+'px');
  };
  return <footer ref={root} id="footer" className="footer-finale">
    <div className="container">
      <div className="finale-scene" onPointerMove={parallax} onPointerLeave={event=>{event.currentTarget.style.setProperty('--scene-x','0px');event.currentTarget.style.setProperty('--scene-y','0px');}}>
        <div className="finale-art" aria-hidden="true"><img src="/images/footer-human-ai-hands.jpg" alt="" loading="lazy" decoding="async"/><div className="finale-contact"><i/><i/><span/><span/><span/></div></div>
        <div className="finale-copy"><span className="finale-eyebrow"><i/>THE FUTURE STARTS WITH YOU</span>
          <h2>Human ambition.<br/>Intelligent technology.<br/><em>Limitless possibilities.</em></h2>
          <p>Whether you're shaping your career or reimagining your business, let's build something meaningful together.</p>
          <button type="button" className="finale-cta" onClick={onEnquire} onPointerMove={magnet} onPointerLeave={event=>{event.currentTarget.style.setProperty('--magnet-x','0px');event.currentTarget.style.setProperty('--magnet-y','0px');}}><span>Let's Build the Future</span><i><ArrowUpRight size={21} aria-hidden="true"/></i></button>
          <div className="finale-path-links"><a href="./#programs">Explore learning <ArrowUpRight size={14} aria-hidden="true"/></a><a href="./#solutions">Discover digital solutions <ArrowUpRight size={14} aria-hidden="true"/></a></div>
        </div>
      </div>
      <div className="finale-brand-heading"><div className="finale-brand">{brand}<p>Practical engineering education.<br/>AI-powered business solutions.</p><small>Technology · Innovation · Solutions</small></div><div className="finale-signature" aria-label="Learn. Build. Evolve."><span>Learn.</span> <span>Build.</span> <span>Evolve.</span></div></div>
      <div className="finale-directory">
        <nav aria-label="Learning and careers"><h3>Learning &amp; Careers</h3><a href="?pathway=masterclass">The masterclass</a><a href="?pathway=masterclass#curriculum">All 18 modules</a><a href="?pathway=masterclass#projects">Projects &amp; capstone</a><a href="./#path">Find your starting point</a></nav>
        <nav aria-label="Digital solutions"><h3>Digital Solutions</h3><a href="./#solutions">Websites &amp; applications</a><a href="./#solutions">AI agents &amp; assistants</a><a href="./#solutions">Business automation</a><a href="./#solutions">Digital growth systems</a></nav>
        <nav aria-label="Explore and connect"><h3>Explore &amp; Connect</h3><a href="?pathway=masterclass#experience">Engineering lifecycle</a><a href="/about">Our story</a><button type="button" onClick={onEnquire}>Fees &amp; program enquiries <ArrowUpRight size={13} aria-hidden="true"/></button><button type="button" onClick={onEnquire}>Start a conversation <ArrowUpRight size={13} aria-hidden="true"/></button></nav>
      </div>
      <div className="finale-end"><span>© {new Date().getFullYear()} Evolve Through AI</span><a href="./#home">Back to top <ArrowUp size={14} aria-hidden="true"/></a></div>
    </div>
  </footer>;
}
