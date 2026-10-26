import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowRight, Check, Cloud, Code2, Layers, Sparkles, ChevronDown, type LucideIcon } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import './EngineeringJourney.css';

interface JourneyStage { name: string; icon: LucideIcon; label: string; title: string; description: string; skills: readonly string[]; tools: string; example: string; question: string; href: string; action: string; }
const stages: readonly JourneyStage[] = [
  { name: 'Learn', icon: Code2, label: 'UNDERSTAND THE FOUNDATIONS', title: 'Understand the system before the tool.', description: 'Explore how an application connects to its operating system, network and source code. Build the understanding to explain what a command does and why it matters.', skills: ['Navigate Linux and investigate processes', 'Trace how requests move across a network', 'Track and explain changes with Git'], tools: 'Linux · Networking · Git · Bash', example: '# Inspect a local learning environment\npwd\ngit status\ngit log --oneline -5', question: 'What changed, where is it recorded, and how would you investigate it?', href: '#curriculum', action: 'Explore the foundations' },
  { name: 'Build', icon: Layers, label: 'MAKE THE WORKFLOW REPEATABLE', title: 'Turn source code into a working artifact.', description: 'Connect application builds, quality checks and containers. Learn what belongs in a repeatable workflow and how one failed step affects everything that follows.', skills: ['Connect source changes to build and test steps', 'Package an application in a container', 'Explain dependencies and runtime configuration'], tools: 'CI/CD · Docker · Build artifacts', example: '# Example commands for a project with a Dockerfile\ndocker build --tag learning-app:local .\ndocker image inspect learning-app:local', question: 'Could another engineer reproduce your build from the same source?', href: '#projects', action: 'Explore the learning projects' },
  { name: 'Deploy', icon: Cloud, label: 'CONNECT CODE TO ITS ENVIRONMENT', title: 'Understand what it takes to run software.', description: 'Explore infrastructure as code, delivery pipelines and operational signals. Review the intended change before applying it, and understand how teams observe what happens next.', skills: ['Review an infrastructure plan before changes', 'Understand Kubernetes and delivery configuration', 'Use logs, metrics and traces to investigate behaviour'], tools: 'Terraform · Kubernetes · GitOps · Observability', example: '# Review an example Terraform configuration\nterraform fmt -check\nterraform validate\nterraform plan', question: 'What will change in the environment, and how would you verify its health?', href: '#experience', action: 'Explore the engineering lifecycle' },
  { name: 'Evolve', icon: Sparkles, label: 'KEEP ENGINEERING JUDGEMENT IN THE LOOP', title: 'Use AI assistance with understanding.', description: 'Bring AI into scripting and troubleshooting while reviewing its suggestions. Applied AI and agentic engineering require additional skills; DevOps experience is a foundation to build on.', skills: ['Set clear constraints and review AI suggestions', 'Test changes and explain the reasoning', 'Extend into Python, APIs, LLMs, retrieval and evaluation'], tools: 'AI assistance · Human review · Testing · Evaluation', example: '# A human-reviewed learning workflow\n1. Describe the problem and constraints\n2. Review the suggested change\n3. Test, explain and improve', question: 'How would you prove an AI-generated suggestion is correct for your situation?', href: '#progression', action: 'Explore the DevOps-to-AI progression' },
];

function useWorkspaceTheme(): 'light' | 'dark' {
  const current = () => document.documentElement.dataset.theme === 'light' ? 'light' as const : 'dark' as const;
  const [theme, setTheme] = useState(current);
  useEffect(() => { const observer = new MutationObserver(() => setTheme(current())); observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] }); return () => observer.disconnect(); }, []);
  return theme;
}

export function EngineeringJourney() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const reduced = useReducedMotion();
  const theme = useWorkspaceTheme();
  const stage = stages[selected];
  const keyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % stages.length;
    else if (event.key === 'ArrowLeft') next = (index + stages.length - 1) % stages.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = stages.length - 1;
    else return;
    event.preventDefault(); setSelected(next); buttons.current[next]?.focus();
  };
  return <section id="engineering-journey" className="workspace-journey" aria-labelledby="engineering-journey-heading">
    <div className="workspace-journey__backdrop" aria-hidden="true"><img key={theme} src={`/images/screen-02/workspace-${theme}-991.webp`} srcSet={`/images/screen-02/workspace-${theme}-640.webp 640w, /images/screen-02/workspace-${theme}-991.webp 991w`} sizes="100vw" width={991} height={793} alt="" loading="lazy" decoding="async" /><div className="workspace-journey__wash" /></div>
    <m.div className="container workspace-journey__layout" initial={false} whileInView={reduced ? undefined : { y: [12, 0] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, ease: [.22, 1, .36, 1] }}>
      <div className="workspace-journey__story"><span className="workspace-journey__eyebrow">YOUR NEXT CHAPTER</span><h2 id="engineering-journey-heading">From curiosity<br /> to <em>capability.</em></h2><p>Learning becomes meaningful when you see how the pieces connect. Explore the journey from understanding systems to building, delivering and improving them.</p><div className="workspace-journey__caption"><span>ONE CONNECTED ENGINEERING JOURNEY</span><span>Workspace imagery supplied for illustration.</span></div></div>
      <div className="workspace-journey__explorer"><div className="workspace-journey__explorer-top"><span>EXPLORE THE WORKFLOW</span><span>0{selected + 1} / 04</span></div>
        <ol className="workspace-journey__steps" aria-label="Learn, Build, Deploy, Evolve journey">{stages.map((item,index)=>{const Icon=item.icon;return <li key={item.name}><button type="button" ref={el=>{buttons.current[index]=el;}} aria-pressed={index===selected} aria-controls="workspace-stage-detail" onClick={()=>setSelected(index)} onKeyDown={event=>keyboard(event,index)}><span className="workspace-journey__step-icon"><Icon size={20} aria-hidden="true" /></span><span>{item.name}</span></button></li>;})}</ol>
        <div id="workspace-stage-detail" className="workspace-journey__detail" aria-live="polite" aria-atomic="true"><span className="workspace-journey__stage-label">{stage.label}</span><m.h3 key={stage.name} initial={reduced ? false : { opacity: .55 }} animate={{ opacity: 1 }} transition={{ duration: .22 }}>{stage.title}</m.h3><p>{stage.description}</p><ul>{stage.skills.map(skill=><li key={skill}><Check size={15} aria-hidden="true" />{skill}</li>)}</ul><div className="workspace-journey__tools">{stage.tools}</div><div className="workspace-journey__question"><span>THINK LIKE AN ENGINEER</span><p>{stage.question}</p></div></div>
        <details className="workspace-journey__example" key={stage.name}><summary>Look inside this workflow<ChevronDown size={16} aria-hidden="true" /></summary><div><p>Illustrative learning example. These controls do not run commands or connect to infrastructure.</p><pre><code>{stage.example}</code></pre></div></details>
        <a className="workspace-journey__next" href={stage.href}>{stage.action}<ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </m.div>
  </section>;
}
