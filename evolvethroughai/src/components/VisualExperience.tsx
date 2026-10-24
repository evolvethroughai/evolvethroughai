import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Cloud, Code2, Layers, Pause, Play, Sparkles } from 'lucide-react';

const journeyStages = [
  { name: 'Learn', title: 'Start with understanding.', description: 'Build a foundation in systems, scripting and engineering workflows.' },
  { name: 'Build', title: 'Turn knowledge into something real.', description: 'Connect code, containers and automation through hands-on projects.' },
  { name: 'Deploy', title: 'Take your work into the cloud.', description: 'Explore infrastructure, delivery pipelines and running applications.' },
  { name: 'Evolve', title: 'Build on everything you know.', description: 'Extend your engineering experience with thoughtful AI-assisted workflows.' },
];

export function CinematicHero({ onChooseAudience }: { onChooseAudience: (index: number) => void }) {
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync(); query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (paused || reduced) { section.style.setProperty('--journey-drift', '0px'); return; }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) section.style.setProperty('--journey-drift', `${Math.max(-30, Math.min(70, -rect.top * .11))}px`);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', scroll, { passive: true });
    return () => { window.removeEventListener('scroll', scroll); cancelAnimationFrame(frame); };
  }, [paused, reduced]);
  return <section ref={sectionRef} className="cinematic-hero" data-motion={paused || reduced ? 'paused' : 'active'} aria-labelledby="hero-heading">
    <div className="journey-scene">
      <img className="journey-landscape" src="/images/engineering-journey.jpg" alt="" width={1920} height={1088} fetchPriority="high" />
      <div className="journey-wash" />
      <div className="journey-waypoints" aria-label="Explore your engineering journey">{journeyStages.map((item, index) => <button key={item.name} className={`journey-waypoint waypoint-${index} ${stage === index ? 'active' : ''}`} aria-pressed={stage === index} onClick={() => setStage(index)}><span className="waypoint-face"><span className="waypoint-signal" /><span>{item.name}</span><ArrowUpRight size={12} aria-hidden="true" /></span></button>)}</div>
      <div className="journey-scene-detail" aria-live="polite"><div className="journey-detail-top"><span className="mono">0{stage + 1} / {journeyStages[stage].name.toUpperCase()}</span><span className="journey-detail-dots" aria-hidden="true">{journeyStages.map((item, index) => <i key={item.name} className={stage === index ? 'active' : ''} />)}</span></div><strong>{journeyStages[stage].title}</strong><p>{journeyStages[stage].description}</p></div>
    </div>
    <div className="container journey-content"><div className="journey-copy"><div className="eyebrow"><span className="status-dot" /> THE FUTURE IS SOMETHING YOU BUILD</div><h1 id="hero-heading"><span>Your next chapter.</span><span>Starts with what</span><em>you build.</em></h1><p className="journey-intro">From your first engineering role to your next chapter.<br className="desktop-break" /> Build practical cloud, DevOps and AI-assisted skills.</p><div className="hero-actions hero-path-actions"><a className="hero-path-choice" href="#path" onClick={() => onChooseAudience(1)}><span><strong>I’m starting my career</strong><small>Build a connected foundation</small></span><ArrowUpRight size={18} aria-hidden="true" /></a><a className="hero-path-choice" href="#path" onClick={() => onChooseAudience(0)}><span><strong>I’m growing my career</strong><small>Build on your experience</small></span><ArrowUpRight size={18} aria-hidden="true" /></a></div><a className="text-link hero-experience-link" href="#experience"><span className="play-icon"><ArrowRight size={15} aria-hidden="true" /></span>Explore how engineering connects</a><div className="journey-bottom"><span className="mono">LEARN. BUILD. EVOLVE.</span><a href="#path" aria-label="Scroll to choose your path"><ArrowDown size={17} aria-hidden="true" /></a></div></div></div>
    <button className="visual-motion-toggle" aria-pressed={paused || reduced} disabled={reduced} onClick={() => setPaused(!paused)}>{paused || reduced ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}{reduced ? 'Reduced motion' : paused ? 'Resume visual motion' : 'Pause visual motion'}</button>
  </section>;
}

const stackStages = [
  { name: 'Foundations', icon: Code2, scope: 'START HERE', description: 'Systems, Git and scripting give your engineering journey a strong base.', tools: ['Linux', 'Git', 'Bash'] },
  { name: 'DevOps & delivery', icon: Layers, scope: 'CONNECT THE WORKFLOW', description: 'Build, package and deliver applications through connected engineering workflows.', tools: ['CI/CD', 'Docker', 'GitOps'] },
  { name: 'Cloud & platform', icon: Cloud, scope: 'UNDERSTAND THE SYSTEM', description: 'Explore infrastructure, Kubernetes, observability and the platforms applications depend on.', tools: ['Azure', 'Terraform', 'Kubernetes'] },
  { name: 'AI-assisted engineering', icon: Sparkles, scope: 'EXTEND YOUR CAPABILITIES', description: 'Bring AI into scripting and troubleshooting. Deeper agentic engineering requires additional study.', tools: ['AI assistance', 'Evaluation', 'Human review'] },
];

export function EngineeringStack() {
  const [selected, setSelected] = useState(0);
  const current = stackStages[selected];
  const Icon = current.icon;
  return <div className="engineering-stack"><div className="stack-image-stage"><img src="/images/engineering-stack.jpg" alt="Luminous glass engineering layers rising toward an AI core" width={1200} height={1200} loading="lazy" decoding="async" /><span className="stack-figure mono">FIG. 02 / BUILT ON YOUR FOUNDATIONS</span><div className="stack-choices" aria-label="Explore engineering layers">{stackStages.map((item, index) => <button key={item.name} className={`stack-choice stack-choice-${index} ${selected === index ? 'active' : ''}`} onClick={() => setSelected(index)} aria-pressed={selected === index}><span className="mono">0{index + 1}</span>{item.name}<ArrowUpRight size={12} aria-hidden="true" /></button>)}</div></div><div className="stack-detail" aria-live="polite"><div className="stack-detail-icon"><Icon size={21} aria-hidden="true" /></div><div><span className="mini-label">{current.scope}</span><p>{current.description}</p><div className="stack-tools">{current.tools.map(tool => <span key={tool}><Check size={10} aria-hidden="true" />{tool}</span>)}</div></div></div></div>;
}
