import { useEffect, useRef, useState, type ReactNode } from 'react';
import { HeroBackground } from './Hero';
import { createPortal } from 'react-dom';
import { useReducedMotion } from 'motion/react';
import TopoBackground from './kokonutui/topo-background';

/** One background plane behind the public header and first screen. */
export function Layout({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [surfaces, setSurfaces] = useState<HTMLElement[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const pathway = new URLSearchParams(location.search).get('pathway');
  useEffect(() => {
    const shell = root.current;
    const hero = shell?.querySelector<HTMLElement>('.cinematic-hero');
    if (!shell || !hero) return;
    const syncHeight = () => shell.style.setProperty('--landing-plane-height', (hero.offsetTop + hero.offsetHeight) + 'px');
    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathway]);
  useEffect(() => {
    const targets = Array.from(root.current?.querySelectorAll<HTMLElement>(
      'main > section:not(.cinematic-hero):not(.workspace-journey), .masterclass-page > section, .pathway-outline, .pathway-page, .site-footer'
    ) ?? []);
    targets.forEach(target => target.classList.add('section-topo-surface'));
    setSurfaces(targets);
    return () => targets.forEach(target => target.classList.remove('section-topo-surface'));
  }, [pathway]);
  return <div className="site-shell shared-landing-layout" id="home" ref={root}>
    {pathway === null && <div className="shared-landing-background hero-topo-unified hero-intelligent" aria-hidden="true"><HeroBackground /></div>}
    {children}
    {surfaces.map((surface, index) => createPortal(
      <div className="section-topo-canvas" aria-hidden="true">
        <TopoBackground interval={0.17} speed={reduced ? 0 : 0.12} seed={26 + index * 7} labels={false} interactive={false}>{null}</TopoBackground>
      </div>, surface, 'section-topo-' + index
    ))}
  </div>;
}
