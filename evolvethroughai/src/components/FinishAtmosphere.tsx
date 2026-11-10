import { useEffect, useRef } from 'react';
import { SectionVideo } from './EngineeringJourney';
import './FinishAtmosphere.css';

/** Decorative only; media playback inherits visibility and motion preferences. */
export function FinishAtmosphere({kind}:{kind:'conversation'|'clarity'|'closing'}) {
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const section=root.current?.parentElement;if(!section)return;const observer=new IntersectionObserver(([entry])=>{section.dataset.finishVisible=String(entry.isIntersecting);},{threshold:.08});observer.observe(section);return()=>observer.disconnect();},[]);
 const clip={conversation:'aurora',clarity:'contours',closing:'orbit'}[kind];
 return <div ref={root} className={`finish-atmosphere finish-atmosphere--${kind}`} aria-hidden="true"><SectionVideo src={`/videos/finish-${clip}.mp4`} poster={`/videos/finish-${clip}.webp`} /><div className="finish-atmosphere-wash"/><div className="finish-ambient-light"/></div>;
}
