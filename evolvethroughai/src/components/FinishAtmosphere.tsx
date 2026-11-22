import { useEffect, useRef } from 'react';

import './FinishAtmosphere.css';

/** Decorative only; media playback inherits visibility and motion preferences. */
export function FinishAtmosphere({kind}:{kind:'conversation'|'clarity'|'closing'}) {
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const section=root.current?.parentElement;if(!section)return;const observer=new IntersectionObserver(([entry])=>{section.dataset.finishVisible=String(entry.isIntersecting);},{threshold:.08});observer.observe(section);return()=>observer.disconnect();},[]);

 return <div ref={root} className={`finish-atmosphere finish-atmosphere--${kind}`} aria-hidden="true">{kind==='conversation'?<img src="/images/screen7-stairway-clear.webp" alt="" loading="lazy" decoding="async" />:kind==='closing'?<img className="footer-hands-image" src="/images/footer-human-ai-hands.jpg" alt="" loading="lazy" decoding="async" />:<img className="faq-network-steady" src="/videos/screen8-fine-network.webp" alt="" loading="lazy" decoding="async" />}<div className="finish-atmosphere-wash"/><div className="finish-ambient-light"/></div>;
}
