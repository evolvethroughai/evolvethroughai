import { IntelligentAurora } from './IntelligentAurora';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import './Hero.css';

interface HeroProps {
  children: ReactNode;
}

function HeroVideoBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [source, setSource] = useState('');
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === 'light');
  useEffect(() => {
    const observer = new MutationObserver(() => setLight(document.documentElement.dataset.theme === 'light'));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduced !== false || connection?.saveData) { setSource(''); return; }
    const mobile = matchMedia('(max-width: 700px)').matches;
    setSource(light ? (mobile ? '/videos/robot-white-960.mp4' : '/videos/robot-white-1280.mp4') : (mobile ? '/videos/robot-hero-960.mp4' : '/videos/robot-hero-1600.mp4'));
  }, [reduced, light]);
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
  return <div className="hero-robot-video"><video ref={video} src={source || undefined} poster={light ? '/videos/robot-white-poster.webp' : '/videos/robot-hero-poster.webp'} muted playsInline loop preload="metadata" aria-hidden="true" /><div className="hero-robot-video-wash" /></div>;
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
    <div className="hero-primary-actions hero-dual-actions hero-premium-actions">
      <a className="button primary hero-learning-action hero-premium-action" href="#path">Explore Learning Paths <ArrowUpRight size={18} aria-hidden="true" /></a>
      <a className="button hero-solutions-action hero-premium-action" href="#solutions">Explore Digital Solutions <ArrowRight size={18} aria-hidden="true" /></a>
    </div>
  </>;
}