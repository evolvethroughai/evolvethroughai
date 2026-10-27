
import { RotatingHeadline } from './RotatingHeadline';
import { Hero, HeroIntro } from './Hero';
import { LazyMotion, domAnimation } from 'motion/react';

import { EngineeringJourney } from './EngineeringJourney';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Cloud, Code2, Layers, Sparkles } from 'lucide-react';

export function CinematicHero() {
  return <LazyMotion features={domAnimation}><Hero>
    <div className="container refined-hero-grid">
      <div className="journey-copy">
        <div className="eyebrow hero-brand-label">FOR THE ENGINEER YOU’RE BECOMING</div>
        <RotatingHeadline />
        <HeroIntro />
      </div>
    </div>
  </Hero>

  <EngineeringJourney />


  </LazyMotion>;
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
