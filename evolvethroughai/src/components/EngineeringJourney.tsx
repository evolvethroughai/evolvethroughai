import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Code2, Layers } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import './EngineeringJourney.css';
import './DualTrackShowcase.css';
import './LearningSolutionsScreens.css';

export function SectionVideo({src='/videos/learning-screen-1280.mp4',poster='/videos/learning-screen-poster.webp',restartOnEnter=false,manualPlay=false}:{src?:string;poster?:string;restartOnEnter?:boolean;manualPlay?:boolean}) {
 const video = useRef<HTMLVideoElement>(null);
 const [started,setStarted]=useState(false);
 const [playCount,setPlayCount]=useState(0);
 const [pull,setPull]=useState(0);
 const pullStart=useRef(0);
 const dragged=useRef(false);
 const startVideo=()=>{setStarted(true);setPlayCount(v=>v+1);const element=video.current;if(element){if(!element.src)element.src=src;element.currentTime=0;void element.play().catch(()=>{});}};
 const reduced = useReducedMotion();
 const inView=useRef(false);
 const [source,setSource] = useState<string>();
 useEffect(()=>{
  if(manualPlay&&!started)return;
  if(!manualPlay && (reduced !== false || (navigator as Navigator & {connection?:{saveData?:boolean}}).connection?.saveData))return;
  const element=video.current;if(!element)return;
  let visible=false;
  const sync=()=>{if(visible&&!document.hidden)void element.play().catch(()=>{});else element.pause();};
  const observer=new IntersectionObserver(([entry])=>{const next=entry.isIntersecting && entry.intersectionRatio >= (restartOnEnter ? .25 : .05);if(next&&!visible&&restartOnEnter)element.currentTime=0;visible=next;inView.current=next;if(visible)setSource(src);sync();},{threshold:restartOnEnter?[0,.25]:[0,.05]});
  observer.observe(element);document.addEventListener('visibilitychange',sync);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);element.pause();};
 },[reduced,src,restartOnEnter,manualPlay,started]);
 useEffect(()=>{if(source&&inView.current&&!document.hidden)void video.current?.play().catch(()=>{});},[source]);
 return <><video ref={video} data-manual={manualPlay || undefined} data-started={started || undefined} data-play-count={playCount} style={manualPlay ? {animationName:started ? (playCount % 2 ? 'pour-reveal-a' : 'pour-reveal-b') : undefined} : undefined} src={source} poster={manualPlay&&!started?undefined:poster} muted loop playsInline preload="none" aria-hidden="true" />{manualPlay&&<button type="button" className="colour-flow-play colour-pull-cord" aria-label={started?'Pull to replay colour pour':'Pull to start colour pour'} style={{'--cord-pull':pull+'px'} as import('react').CSSProperties} onPointerDown={event=>{pullStart.current=event.clientY;dragged.current=false;event.currentTarget.setPointerCapture(event.pointerId);}} onPointerMove={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))setPull(Math.max(0,Math.min(85,event.clientY-pullStart.current)));}} onPointerUp={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);if(pull>=28){dragged.current=true;startVideo();}setPull(0);}} onPointerCancel={()=>setPull(0)} onClick={()=>{if(dragged.current){dragged.current=false;return;}startVideo();}}><span className="colour-cord-line" aria-hidden="true"/><span className="colour-cord-handle" aria-hidden="true"/><span className="colour-cord-caption">{started?'Pull to replay':'Pull for colour'}</span></button>}</>;
}
export function EngineeringJourney(){return <>
 <section id="engineering-journey" className="workspace-journey dual-track-showcase learning-video-screen" aria-labelledby="academy-heading">
  <div className="learning-screen-media" aria-hidden="true"><SectionVideo /></div>
  <div className="container learning-screen-layout"><article className="dual-track-card" aria-labelledby="academy-heading">
          <span className="dual-track-kicker"><Code2 size={16} aria-hidden="true" /> ACADEMY</span><h3 id="academy-heading">For Engineers &amp; Career Seekers</h3>
          <p className="dual-track-summary">Build a foundation in cloud and DevOps, then grow toward LLM applications, agentic AI and forward-deployed engineering: turning real problems into working systems.</p>
          <ul className="dual-track-benefits"><li><Check size={15} aria-hidden="true" />Engineering foundations: 18 modules connecting systems, cloud and DevOps</li><li><Check size={15} aria-hidden="true" />Applied AI progression: Python, APIs, LLMs, RAG and evaluation</li><li><Check size={15} aria-hidden="true" />Future pathways: AI agents and forward-deployed engineering; detailed scope in development</li><li><Check size={15} aria-hidden="true" /><span>AI-Driven Automation &amp; Growth: Learn to build intelligent workflows that automate social media reach and drive organic digital growth.</span></li></ul>
          <a className="dual-track-cta dual-track-cta--academy" href="#path">Explore Learning Paths<ArrowUpRight size={16} aria-hidden="true" /></a>
        </article></div>
 </section>
 <section id="business-introduction" className="workspace-journey dual-track-showcase solutions-intro-screen" aria-labelledby="enterprise-heading">
  <div className="business-screen-media" aria-hidden="true"><SectionVideo src="/videos/business-puzzle-960.mp4" poster="/videos/business-puzzle-poster.webp" /></div><div className="container solutions-screen-layout"><article className="dual-track-card" aria-labelledby="enterprise-heading">
          <span className="dual-track-kicker"><Layers size={16} aria-hidden="true" /> BUSINESS SOLUTIONS</span><h3 id="enterprise-heading">Scale Your Business, Not Your Headcount.</h3>
          <p className="dual-track-summary">We architect custom AI workflows, automate operations, and scale your social presence organically—turning repetitive manual work into self-sustaining systems.</p>
          <ul className="dual-track-benefits"><li><Check size={15} aria-hidden="true" />Websites &amp; Digital Platforms: Turn your ideas into production-grade user experiences.</li><li><Check size={15} aria-hidden="true" />AI-Driven Social Growth: Expand your digital footprint organically through automated content and workflow pipelines.</li><li><Check size={15} aria-hidden="true" />End-to-End Workflow Automation: Eliminate repetitive busywork by connecting systems and data seamlessly.</li></ul>
          <a className="dual-track-cta dual-track-cta--enterprise" href="#solutions">Explore Business Solutions<ArrowRight size={16} aria-hidden="true" /></a>
        </article></div>
 </section>
 </>;}
