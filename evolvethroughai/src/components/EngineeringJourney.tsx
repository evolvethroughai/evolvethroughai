import { requestBackgroundPlayback, releaseBackgroundPlayback } from './backgroundPlayback';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, CloudCog, BrainCircuit, BriefcaseBusiness, Code2, Layers, Globe, Smartphone, Bot, Workflow, TrendingUp, Rocket } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import './EngineeringJourney.css';
import './DualTrackShowcase.css';
import './LearningSolutionsScreens.css';

export function SectionVideo({src=matchMedia('(max-width: 700px)').matches?'/videos/learning-robot-clear-960.mp4':'/videos/learning-robot-clear-1280.mp4',poster='/videos/learning-robot-clear-1280.webp',restartOnEnter=false,manualPlay=false,continuous=false}:{src?:string;poster?:string;restartOnEnter?:boolean;manualPlay?:boolean;continuous?:boolean}) {
 const video = useRef<HTMLVideoElement>(null);
 const [cordSlot,setCordSlot]=useState<HTMLElement|null>(null);
 useEffect(() => {
  if (!manualPlay) return;
  const syncSlot = () => {
   const next = document.getElementById('learning-path-cord-slot');
   setCordSlot(current => current === next ? current : next);
  };
  syncSlot();
  // Screen 4 may remount during a live edit or route update.
  const observer = new MutationObserver(syncSlot);
  observer.observe(document.body, { childList: true, subtree: true });
  return () => observer.disconnect();
 }, [manualPlay]);
 const [started,setStarted]=useState(false);
 const [playCount,setPlayCount]=useState(0);
 const [pull,setPull]=useState(0);
 const pullStart=useRef(0);
 const dragged=useRef(false);
 const startVideo=()=>{document.getElementById('programs')?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});setStarted(true);setPlayCount(v=>v+1);const element=video.current;if(element){if(!element.src)element.src=src;element.currentTime=0;void element.play().catch(()=>{});}};
 const reduced = useReducedMotion();
 const inView=useRef(false);
 const [source,setSource] = useState<string>();
 useEffect(()=>{
  if(manualPlay&&!started)return;
  if(!manualPlay && (reduced !== false || (navigator as Navigator & {connection?:{saveData?:boolean}}).connection?.saveData))return;
  const element=video.current;if(!element)return;
  if(continuous)setSource(src);
  let visible=false;
  const sync=()=>requestBackgroundPlayback(element,visible,continuous);
  const observer=new IntersectionObserver(([entry])=>{const next=entry.isIntersecting && entry.intersectionRatio >= (restartOnEnter ? .25 : .05);if(next&&!visible&&restartOnEnter)element.currentTime=0;visible=next;inView.current=next;if(visible)setSource(src);sync();},{threshold:[0,.05,.25,.5,.75,1]});
  const warmup = new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setSource(src);warmup.disconnect();}},{rootMargin:'250px 0px'});
  if(!manualPlay)warmup.observe(element);
  observer.observe(element);document.addEventListener('visibilitychange',sync);
  return()=>{warmup.disconnect();observer.disconnect();document.removeEventListener('visibilitychange',sync);releaseBackgroundPlayback(element);};
 },[reduced,src,restartOnEnter,manualPlay,started,continuous]);
 useEffect(()=>{if(source&&video.current)requestBackgroundPlayback(video.current,inView.current,continuous);},[source,continuous]);
 return <><video ref={video} data-manual={manualPlay || undefined} data-started={started || undefined} data-play-count={playCount} style={manualPlay ? {animationName:started ? (playCount % 2 ? 'pour-reveal-a' : 'pour-reveal-b') : undefined} : undefined} src={source} poster={manualPlay&&!started?undefined:poster} muted loop playsInline preload={source?'metadata':'none'} aria-hidden="true" />{manualPlay&&cordSlot&&createPortal(<div className="learning-path-cord-control"><button type="button" className="colour-flow-play colour-pull-cord" data-pulling={pull>0 || undefined} aria-label="Drag robot down to play colours; click to explore learning pathways. Keyboard: Arrow Down plays colours." style={{'--cord-pull':pull+'px'} as import('react').CSSProperties} onPointerDown={event=>{pullStart.current=event.clientY;dragged.current=false;event.currentTarget.setPointerCapture(event.pointerId);}} onPointerMove={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))setPull(Math.max(0,Math.min(85,event.clientY-pullStart.current)));}} onPointerUp={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);if(pull>=28){dragged.current=true;startVideo();}setPull(0);}} onPointerCancel={()=>setPull(0)} onKeyDown={event=>{if(event.key==='ArrowDown'){event.preventDefault();startVideo();}}} onClick={()=>{if(dragged.current){dragged.current=false;return;}window.location.hash='programs';}}><span className="pull-art-title">Explore the <strong>Learning Pathways</strong><ArrowUpRight size={23} aria-hidden="true"/></span><span className="pull-art-anchor" aria-hidden="true"><span className="pull-art-knot"><img src="/images/pathway-rope-knot.png" alt="" draggable={false}/></span></span><span className="pull-art-rope" aria-hidden="true"><img src="/images/pathway-gold-rope.png" alt="" draggable={false}/></span><span className="pull-art-robot"><img src="/images/pathway-pull-robot.png" alt="" draggable={false}/><span className="pull-robot-ring" aria-hidden="true"/></span><span className="pull-art-caption"><strong>Pull the thread.</strong><span>Unlock your next journey.</span></span></button></div>,cordSlot)}</>;
}
export function EngineeringJourney(){
 const highlights = useRef<HTMLUListElement>(null);
 useEffect(() => {
  const list = highlights.current;
  if (!list) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const show = () => { list.dataset.highlights = 'visible'; };
  if (reduced.matches || !('IntersectionObserver' in window)) { show(); return; }
  list.dataset.highlights = 'pending';
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { show(); observer.disconnect(); } }, { threshold: .08 });
  observer.observe(list);
  const onMotion = () => { if (reduced.matches) { show(); observer.disconnect(); } };
  reduced.addEventListener('change', onMotion);
  return () => { observer.disconnect(); reduced.removeEventListener('change', onMotion); };
 }, []);
 return <>
 <section id="engineering-journey" className="workspace-journey dual-track-showcase learning-video-screen" aria-labelledby="academy-heading">
  <div className="learning-screen-media" aria-hidden="true"><SectionVideo continuous /></div>
  <div className="container learning-screen-layout"><article className="dual-track-card" aria-labelledby="academy-heading">
          <span className="dual-track-kicker"><Code2 size={16} aria-hidden="true" /> LEARN • BUILD • EVOLVE</span><h3 id="academy-heading">Build Skills <span className="learning-heading-accent">That Matter.</span></h3>
          <p className="dual-track-summary">Learn Cloud, DevOps and AI by working on real projects. Build the skills and confidence to take your career forward.</p>
          <ul ref={highlights} className="dual-track-benefits learning-text-highlights"><li><CloudCog size={16} aria-hidden="true" /><span><strong>Cloud &amp; DevOps</strong><span className="learning-highlight-description">Build infrastructure, CI/CD pipelines and real projects.</span></span></li><li><BrainCircuit size={16} aria-hidden="true" /><span><strong>Applied AI Engineering</strong><span className="learning-highlight-description">Get hands-on with Python, LLMs and AI automation.</span></span></li><li><Bot size={16} aria-hidden="true" /><span><strong>Agentic AI &amp; Forward-Deployed Engineering</strong><span className="learning-highlight-description">Explore AI agents, solve real business problems and build practical AI solutions.</span><small className="learning-highlight-status">Upcoming pathway</small></span></li><li><BriefcaseBusiness size={16} aria-hidden="true" /><span><strong>Career &amp; Interview Readiness</strong><span className="learning-highlight-description">Build your resume, showcase projects and prepare for interviews.</span></span></li></ul>
          <a className="dual-track-cta dual-track-cta--academy learning-portal-cta" href="#path"><span className="learning-portal-icon" aria-hidden="true"><Layers size={24} /></span><span className="learning-portal-copy"><strong>Explore Learning Paths</strong><span>Your next step starts here</span></span><span className="learning-portal-arrow" aria-hidden="true"><ArrowRight size={19} /></span></a>
        </article></div>
 </section>
 <section id="business-introduction" className="workspace-journey dual-track-showcase solutions-intro-screen" aria-labelledby="enterprise-heading">
  <div className="business-screen-media" aria-hidden="true"><SectionVideo src="/videos/business-puzzle-clear-1280.mp4" poster="/videos/business-puzzle-clear-1280.webp" /></div><div className="container solutions-screen-layout"><article className="dual-track-card" aria-labelledby="enterprise-heading">
          <span className="dual-track-kicker"><Layers size={16} aria-hidden="true" /> DIGITAL • AI • AUTOMATION</span><h3 id="enterprise-heading">Your Ideas. Our Technology.<br /><span className="business-possibilities">Real Possibilities.</span></h3>
          <p className="dual-track-summary">From your first website to intelligent AI agents, we build digital solutions that help your business work smarter and grow online.</p>
          <ul className="dual-track-benefits business-service-rows"><li><Globe size={16} aria-hidden="true" /><span><strong>Websites &amp; Digital Experiences</strong><span>Beautiful, fast websites and online platforms built for your business.</span></span></li><li><Smartphone size={16} aria-hidden="true" /><span><strong>Mobile Apps &amp; Custom Software</strong><span>Practical apps and software that bring your ideas to life.</span></span></li><li><Bot size={16} aria-hidden="true" /><span><strong>AI Agents &amp; Smart Chatbots</strong><span>AI assistants for enquiries, bookings, customer support and more.</span></span></li><li><Workflow size={16} aria-hidden="true" /><span><strong>End-to-End Business Automation</strong><span>Connect your systems and automate everyday business operations.</span></span></li><li><TrendingUp size={16} aria-hidden="true" /><span><strong>AI-Powered Digital Growth</strong><span>Smarter workflows for content, marketing and customer engagement.</span></span></li></ul>
          <a className="dual-track-cta dual-track-cta--enterprise business-portal-cta" href="#solutions"><span className="business-portal-icon" aria-hidden="true"><Rocket size={23} /></span><span className="business-portal-copy"><strong>Explore Our Solutions</strong><span>From ideas to intelligent solutions</span></span><span className="business-portal-arrow" aria-hidden="true"><ArrowRight size={19} /></span></a>
        </article></div>
 </section>
 </>;}
