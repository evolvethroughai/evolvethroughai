import { IntelligentAurora } from './IntelligentAurora';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import TopoBackground from './kokonutui/topo-background';
import './Hero.css';

interface HeroProps {
  children: ReactNode;
}

export function HeroBackground() {
  const reduced = useReducedMotion();
  return <>
    <div className="hero-topo-layer" aria-hidden="true">
      <TopoBackground
        key={reduced ? 'static' : 'animated'}
        className="hero-topo-background"
        interval={0.1}
        speed={reduced ? 0 : 0.15}
        seed={26}
        labels={false}
        interactive={false}
      >{null}</TopoBackground>
      <div className="hero-ambient-glow hero-ambient-glow--cyan" />
      <div className="hero-ambient-glow hero-ambient-glow--violet" />
    </div>
    <div className="hero-workspace-wash" aria-hidden="true" />
    <div className="hero-headline-lighting" aria-hidden="true"><div className="hero-headline-glow hero-headline-glow--cyan" /><div className="hero-headline-glow hero-headline-glow--violet" /></div>
    <IntelligentAurora />
  </>;
}

/** Topographic background stays decorative and never intercepts hero controls. */
export function Hero({ children }: HeroProps) {
  return <section className="cinematic-hero refined-hero landing-centered hero-contained hero-seamless hero-atmospheric hero-intelligent hero-topo-unified" aria-labelledby="hero-heading">
    {children}
  </section>;
}
/** Two distinct paths: existing learning programs and the planned solutions direction. */
export function HeroIntro() {
  return <>
    <p className="journey-intro hero-dual-caption"><span>Master modern Cloud, DevOps, and Enterprise AI architecture.</span><span>Bridging deep technical capability with production-grade execution.</span></p>
    <div className="hero-primary-actions hero-dual-actions hero-premium-actions">
      <a className="button primary hero-learning-action hero-premium-action" href="#path">Explore Learning Paths <ArrowUpRight size={18} aria-hidden="true" /></a>
      <a className="button hero-solutions-action hero-premium-action" href="#solutions">Explore Digital Solutions <ArrowRight size={18} aria-hidden="true" /></a>
    </div>
  </>;
}