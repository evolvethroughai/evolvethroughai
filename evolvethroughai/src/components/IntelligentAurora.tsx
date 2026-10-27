import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
/** Original CSS atmosphere: no video, WebGL or continuously running JS renderer. */
export function IntelligentAurora() {
  const root=useRef<HTMLDivElement>(null);
  const inView=useInView(root,{amount:.01});
  const reduced=useReducedMotion();
  const [tabVisible,setTabVisible]=useState(!document.hidden);
  useEffect(()=>{const update=()=>setTabVisible(!document.hidden);document.addEventListener('visibilitychange',update);return()=>document.removeEventListener('visibilitychange',update);},[]);
  return <div ref={root} className="intelligent-aurora" aria-hidden="true" data-running={inView&&tabVisible&&!reduced}><div className="intelligent-aurora__blue"/><div className="intelligent-aurora__violet"/><div className="intelligent-aurora__warm"/></div>;
}
