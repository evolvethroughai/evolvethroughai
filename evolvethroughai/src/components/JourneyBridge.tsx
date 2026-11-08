import { useId, useRef } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'motion/react';
import * as m from 'motion/react-m';

/** Original SVG ribbon: a shared visual thread, not an imported template asset. */
export function JourneyBridge() {
  const root = useRef<HTMLElement>(null);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ['start end', 'end center'] });
  const length = useTransform(scrollYProgress, [0, 1], [.08, 1]);
  const first = useTransform(scrollYProgress, [0, .35], [.58, 1]);
  const second = useTransform(scrollYProgress, [.2, .65], [.58, 1]);
  const third = useTransform(scrollYProgress, [.5, 1], [.58, 1]);
  return <section ref={root} className="journey-bridge" aria-label="Learning philosophy"><div className="container journey-bridge__copy"><span className="journey-bridge__label">UNDERSTANDING BECOMES CAPABILITY</span><p><m.span style={{opacity:reduced?1:first}}>Learn the system.</m.span>{' '}<m.span style={{opacity:reduced?1:second}}>Build with intent.</m.span>{' '}<m.span style={{opacity:reduced?1:third}}>Evolve with purpose.</m.span></p><a href="#engineering-journey">Explore the journey <span aria-hidden="true">↓</span></a></div><svg className="journey-bridge__ribbon" viewBox="0 0 1440 220" preserveAspectRatio="none" fill="none" aria-hidden="true"><defs><linearGradient id={id+'-spectrum'} x1="0" y1="140" x2="1440" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#2563EB"/><stop offset=".47" stopColor="#06B6D4"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient></defs><path d="M-80 170C180 210 230 10 485 80S800 240 1035 120S1320 25 1520 60" stroke={`url(#${id}-spectrum)`} strokeWidth="28" opacity=".06"/><path d="M-80 183C180 223 230 23 485 93S800 253 1035 133S1320 38 1520 73" stroke={`url(#${id}-spectrum)`} strokeWidth="1.5" opacity=".35"/><path d="M-80 155C180 195 230 -5 485 65S800 225 1035 105S1320 10 1520 45" stroke={`url(#${id}-spectrum)`} strokeWidth="1.5" opacity=".3"/><m.path d="M-80 170C180 210 230 10 485 80S800 240 1035 120S1320 25 1520 60" stroke={`url(#${id}-spectrum)`} strokeWidth="3" strokeLinecap="round" style={{pathLength:reduced?1:length}}/></svg></section>;
}
