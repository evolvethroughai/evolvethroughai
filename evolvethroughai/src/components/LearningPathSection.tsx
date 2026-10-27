import { useRef, type KeyboardEvent } from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, GitBranch, Sparkles } from 'lucide-react';
import { LazyMotion, domAnimation, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import './LearningPathSection.css';

interface LearningStep { title: string; copy: string; }
interface LearningRoute { label: string; title: string; summary: string; steps: readonly LearningStep[]; }
interface LearningPathSectionProps { selected: number; onSelect: (index: number) => void; }
const routes: readonly LearningRoute[] = [
  { label: 'Advance my skills', title: 'Your experience is the starting point.', summary: 'Connect what you already know to stronger cloud, delivery and automation practices. Build the foundations for your next step into applied AI.', steps: [
    { title: 'Connect your existing strengths', copy: 'Map your development, infrastructure or operations experience to the complete engineering workflow.' },
    { title: 'Build systems you can explain', copy: 'Deepen cloud, CI/CD, infrastructure as code and troubleshooting through projects and the enterprise capstone.' },
    { title: 'Extend toward applied AI', copy: 'Add Python, APIs, retrieval and evaluation before progressing to LLM applications and agentic systems.' },
  ] },
  { label: 'Start my engineering journey', title: 'Start clear. Build with confidence.', summary: 'You do not need to know every tool. Begin with how systems work, practise on connected projects, and grow your technical understanding step by step.', steps: [
    { title: 'Understand the foundations', copy: 'Start with Linux, networking, Git and scripting. Learn what happens underneath the commands.' },
    { title: 'Connect code to a running system', copy: 'Build, test, containerize and explore delivery workflows through practical learning projects.' },
    { title: 'Build a foundation for AI', copy: 'Learn to review AI assistance critically, then identify the additional Python, API and evaluation skills you need.' },
  ] },
];
export function LearningPathSection({ selected, onSelect }: LearningPathSectionProps) {
  const reduced = useReducedMotion();
  const controls = useRef<Array<HTMLButtonElement | null>>([]);
  const route = routes[selected] ?? routes[0];
  const keyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : ['ArrowLeft','ArrowRight'].includes(event.key) ? 1-index : null;
    if (next === null) return;
    event.preventDefault(); onSelect(next); controls.current[next]?.focus();
  };
  return <LazyMotion features={domAnimation}><section className="learning-route-section" id="path" aria-labelledby="learning-route-heading">
    <m.div className="container learning-route-layout" initial={false} whileInView={reduced ? undefined : { opacity: [.7,1], y: [14,0] }} viewport={{ once:true, amount:.12 }} transition={{ duration:.45, ease:[.22,1,.36,1] }}>
      <div className="learning-route-intro"><span className="learning-route-eyebrow">YOUR NEXT STEP IN ENGINEERING</span><h2 id="learning-route-heading">Begin where you are.<br /><span>Build what comes next.</span></h2><p>One connected learning approach. A starting point shaped around your experience.</p>
        <div className="learning-route-choices" role="group" aria-label="Choose your learning starting point">{routes.map((item,index)=><button key={item.label} ref={el=>{controls.current[index]=el;}} type="button" aria-pressed={selected===index} aria-controls="learning-route-detail" onClick={()=>onSelect(index)} onKeyDown={event=>keyboard(event,index)}><span>{index===0?<GitBranch size={18} aria-hidden="true" />:<BookOpen size={18} aria-hidden="true" />}<span className="learning-route-choice-copy"><span>{item.label}</span><small>{index === 0 ? 'Working professionals' : 'Freshers & early-career'}</small></span></span><ArrowRight size={16} aria-hidden="true" /></button>)}</div>
        <div className="learning-route-future"><Sparkles size={18} aria-hidden="true" /><p><strong>A foundation for the AI journey.</strong> LLM, RAG, agentic AI and forward-deployed engineering are developing pathways with additional prerequisites and scope to confirm.</p></div>
      </div>
      <div className="learning-route-detail" id="learning-route-detail" aria-live="polite" aria-atomic="true"><span className="learning-route-eyebrow">{route.label}</span><h3>{route.title}</h3><p>{route.summary}</p><ol className="learning-route-steps">{route.steps.map((step,index)=><li key={step.title}><span className="learning-route-step-number" aria-hidden="true">0{index+1}</span><div><h4>{step.title}</h4><p>{step.copy}</p></div></li>)}</ol><a className="learning-route-action" href="#programs">Explore the learning pathways<ArrowUpRight size={17} aria-hidden="true" /></a></div>
    </m.div>
  </section></LazyMotion>;
}
