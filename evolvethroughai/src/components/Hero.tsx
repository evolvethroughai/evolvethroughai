import { IntelligentAurora } from './IntelligentAurora';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import './Hero.css';
import './HeroPathCards.css';

interface HeroProps {
  children: ReactNode;
}

function HeroVideoBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [source, setSource] = useState('');
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduced !== false || connection?.saveData) { setSource(''); return; }
    setSource(matchMedia('(max-width: 700px)').matches ? '/videos/robot-hero-960.mp4' : '/videos/robot-hero-1600.mp4');
  }, [reduced]);
  useEffect(() => {
    const element = video.current;
    if (!element || !source) return;
    let visible = true;
    const sync = () => {
      if (visible && !document.hidden) void element.play().catch(() => {});
      else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .01 });
    observer.observe(element);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => { observer.disconnect(); element.pause(); document.removeEventListener('visibilitychange', sync); };
  }, [source]);
  return <div className="hero-robot-video"><video ref={video} src={source || undefined} poster="/videos/robot-hero-poster.webp" muted playsInline loop preload="metadata" aria-hidden="true" /><div className="hero-robot-video-wash" /></div>;
}
export function HeroBackground() {
  return <>
    <HeroVideoBackground />
    <div className="hero-headline-lighting" aria-hidden="true"><div className="hero-headline-glow hero-headline-glow--cyan" /><div className="hero-headline-glow hero-headline-glow--violet" /></div>
    <IntelligentAurora />
  </>;
}

/** Topographic background stays decorative and never intercepts hero controls. */
export function Hero({ children }: HeroProps) {
  return <section className="cinematic-hero refined-hero landing-centered hero-contained hero-seamless hero-atmospheric hero-intelligent hero-topo-unified hero-robot-layout" aria-labelledby="hero-heading">
    {children}
  </section>;
}
/** Two distinct paths: existing learning programs and the planned solutions direction. */
export function HeroIntro() {
  return <>
    <p className="journey-intro hero-dual-caption"><span>Master modern Cloud, DevOps, and Enterprise AI architecture.</span><span>Bridging deep technical capability with production-grade execution.</span></p>
    <div className="hero-primary-actions hero-dual-actions hero-premium-actions hero-path-cards">
      <a className="hero-path-card hero-path-card--learning" href="#path"><img src="/images/learning-path-card.webp" alt="" width="1000" height="563" decoding="async" /><span className="hero-path-card-content"><span className="hero-path-card-eyebrow">LEARN & BUILD</span><strong>Explore Learning Paths</strong><span className="hero-path-card-detail">Practical skills. Real engineering.</span></span><ArrowUpRight className="hero-path-card-arrow" size={20} aria-hidden="true" /></a>
      <a className="hero-path-card hero-path-card--solutions" href="#solutions"><img src="/images/digital-solutions-card.webp" alt="" width="1000" height="563" decoding="async" /><span className="hero-path-card-content"><span className="hero-path-card-eyebrow">AUTOMATE & EVOLVE</span><strong>Explore Digital Solutions</strong><span className="hero-path-card-detail">Connected systems. Smarter workflows.</span></span><ArrowRight className="hero-path-card-arrow" size={20} aria-hidden="true" /></a>
    </div>
  </>;
}