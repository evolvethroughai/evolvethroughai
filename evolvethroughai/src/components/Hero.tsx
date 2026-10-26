import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import TopoBackground from './kokonutui/topo-background';
import './Hero.css';

interface HeroProps {
  children: ReactNode;
}

/** Topographic background stays decorative and never intercepts hero controls. */
export function Hero({ children }: HeroProps) {
  const reduced = useReducedMotion();
  return <section className="cinematic-hero refined-hero landing-centered hero-contained" aria-labelledby="hero-heading">
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
    {children}
  </section>;
}
/** Two distinct paths: existing learning programs and the planned solutions direction. */
export function HeroIntro() {
  return <>
    <p className="journey-intro hero-dual-caption"><span>Master modern Cloud, DevOps, and Enterprise AI architecture.</span><span>Bridging deep technical capability with production-grade execution.</span></p>
    <div className="hero-primary-actions hero-dual-actions">
      <a className="button primary" href="#programs">Explore Learning Paths <ArrowUpRight size={18} aria-hidden="true" /></a>
      <a className="button hero-solutions-action" href="#about">Deploy AI Solutions <ArrowRight size={18} aria-hidden="true" /></a>
    </div>
  </>;
}