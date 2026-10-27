import { useEffect, useRef, type ReactNode } from 'react';
import { HeroBackground } from './Hero';

/** One background plane behind the public header and first screen. */
export function Layout({ children }: { children: ReactNode }) {
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
  return <div className="site-shell shared-landing-layout" id="home" ref={root}>
    {pathway === null && <div className="shared-landing-background hero-topo-unified hero-intelligent" aria-hidden="true"><HeroBackground /></div>}
    {children}
  </div>;
}
