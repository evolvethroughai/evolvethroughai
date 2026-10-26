import { LazyMotion, domAnimation, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { AudiencePathways } from './AudiencePathways';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Cloud, Code2, Layers, Sparkles } from 'lucide-react';

const journeyStages = [
  { name: 'Learn', icon: Code2, title: 'Understand what happens underneath.', description: 'Start with systems, networking, Git and scripting. Build a foundation you can explain, not just commands you can repeat.', label: 'FOUNDATIONS', code: ['# Understand the environment', 'pwd', 'git status', 'bash ./scripts/check-environment.sh'], destination: '#curriculum', action: 'Explore the foundations' },
  { name: 'Build', icon: Layers, title: 'Turn understanding into working software.', description: 'Connect source control, application builds, tests and containers. Practise how each decision affects the next step.', label: 'CONNECTED WORKFLOWS', code: ['# Package and check an application', 'docker build -t learning-app .', 'docker run --rm -p 8080:8080 learning-app'], destination: '#projects', action: 'Explore learning projects' },
  { name: 'Deploy', icon: Cloud, title: 'See how applications run in the cloud.', description: 'Explore infrastructure, delivery pipelines and observability. Understand how an application reaches its environment and how teams operate it.', label: 'CLOUD & DELIVERY', code: ['# Inspect before changing infrastructure', 'terraform fmt -check', 'terraform validate', 'terraform plan'], destination: '#experience', action: 'Explore the engineering lifecycle' },
  { name: 'Evolve', icon: Sparkles, title: 'Build on your skills with thoughtful AI.', description: 'Use AI to assist scripting and troubleshooting. Review suggestions, test your changes and keep engineering judgement in the loop.', label: 'HUMAN-LED AI ASSISTANCE', code: ['# A human-reviewed learning workflow', 'Read the problem and constraints', 'Review the AI-assisted suggestion', 'Test, explain and improve the change'], destination: '#progression', action: 'Explore your next stage' },
];

export function CinematicHero({ onChooseAudience }: { onChooseAudience: (index: number) => void }) {
  const [stage, setStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = journeyStages[stage];
  const Icon = current.icon;
  return <LazyMotion features={domAnimation}><section className="cinematic-hero refined-hero" aria-labelledby="hero-heading">
    <div className="container refined-hero-grid">
      <div className="journey-copy">
        <div className="eyebrow hero-brand-label">FOR THE ENGINEER YOU’RE BECOMING</div>
        <h1 id="hero-heading"><span>Build real skills.</span><span>Shape <em>what’s next.</em></span></h1>
        <p className="journey-intro">Understand the systems. Connect the workflow.<br className="desktop-break" /> Build practical cloud, DevOps and AI-assisted engineering skills.</p>
        <div className="hero-primary-actions"><a className="button primary" href="#programs">Explore the masterclass <ArrowUpRight size={18} aria-hidden="true" /></a><a className="hero-curriculum-link" href="#curriculum">See the curriculum <ArrowRight size={17} aria-hidden="true" /></a></div>
        <div className="hero-proof" aria-label="Program curriculum structure"><span><strong>18</strong> modules</span><i aria-hidden="true" /><span><strong>14</strong> projects</span><i aria-hidden="true" /><span><strong>01</strong> capstone</span></div>
        <p className="hero-intent">You bring the curiosity. Build the understanding to make your next step meaningful.</p>
      </div>
      <div className="hero-engineering-panel">
        <div className="journey-panel-scene"><img src="/images/engineering-journey.jpg" width={1920} height={1088} alt="" fetchPriority="high" /><div className="journey-panel-caption"><span>YOUR NEXT CHAPTER</span><span>From curiosity to capability.</span></div><span className="illustration-credit">Concept illustration · not a learner photograph</span></div>
        <div className="journey-panel-body">
          <ol className="connected-journey" aria-label="Explore the engineering journey">{journeyStages.map((item,index) => { const StepIcon=item.icon; return <li key={item.name}><button type="button" aria-pressed={stage===index} aria-controls="hero-journey-detail" onClick={()=>setStage(index)}><span className="connected-step-icon"><StepIcon size={19} aria-hidden="true" /></span><span>{item.name}</span><span className="sr-only">: show this stage</span></button></li>; })}</ol>
          <div id="hero-journey-detail" className="connected-detail" aria-live="polite" aria-atomic="true"><div className="connected-detail-label"><Icon size={15} aria-hidden="true" /><span>{current.label}</span><span>0{stage+1} / 04</span></div><m.h2 key={`title-${stage}`} initial={reduceMotion ? false : { opacity: .4 }} animate={{ opacity: 1 }} transition={{ duration: .22 }}>{current.title}</m.h2><p>{current.description}</p><details className="workflow-disclosure" key={`example-${stage}`}><summary>Look inside this workflow <Code2 size={15} aria-hidden="true" /></summary><div className="journey-workflow"><span>ILLUSTRATIVE EXAMPLE · NOT A LIVE ENVIRONMENT</span><pre><code>{current.code.join('\n')}</code></pre></div></details><a className="text-link" href={current.destination}>{current.action}<ArrowRight size={15} aria-hidden="true" /></a></div>
        </div>
      </div>
    </div>
    <AudiencePathways onChooseAudience={onChooseAudience} />
  </section></LazyMotion>;
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
