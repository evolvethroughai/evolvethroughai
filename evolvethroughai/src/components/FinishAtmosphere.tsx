import { useEffect, useRef } from 'react';
import { SectionVideo } from './EngineeringJourney';
import './FinishAtmosphere.css';

/** Decorative only; media playback inherits visibility and motion preferences. */
export function FinishAtmosphere({kind}:{kind:'conversation'|'clarity'|'closing'}) {
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const section=root.current?.parentElement;if(!section)return;const observer=new IntersectionObserver(([entry])=>{section.dataset.finishVisible=String(entry.isIntersecting);},{threshold:.08});observer.observe(section);return()=>observer.disconnect();},[]);
 const clip={conversation:'learning-growth-crisp',clarity:'screen8-connected-nodes',closing:'orbit'}[kind];
 return <div ref={root} className={`finish-atmosphere finish-atmosphere--${kind}`} aria-hidden="true">{kind==='conversation'?<img src="/images/screen7-stairway-clear.webp" alt="" loading="lazy" decoding="async" />:kind==='closing'?<img className="footer-hands-image" src="/images/footer-human-ai-hands.jpg" alt="" loading="lazy" decoding="async" />:<SectionVideo src={kind==='clarity'?'/videos/screen8-fine-network.mp4':"/videos/finish-"+clip+'.mp4'} poster={kind==='clarity'?'/videos/screen8-fine-network.webp':"/videos/finish-"+clip+'.webp'} />}<div className="finish-atmosphere-wash"/><div className="finish-ambient-light"/></div>;
}
