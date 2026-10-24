import { useState } from 'react';
import { ArrowUpRight, Check, GitBranch, Box, Cloud, Workflow, ShieldCheck, Activity, Sparkles, Code2, Layers, ChevronRight } from 'lucide-react';

const audienceJourneys = [
  [
    ['Map your experience', 'Connect the tools you know to the bigger engineering system.'],
    ['Modernize your workflow', 'Explore cloud, CI/CD, infrastructure as code and observability.'],
    ['Add AI thoughtfully', 'Use AI-assisted scripting and troubleshooting with human review.'],
    ['Explain your decisions', 'Practise architecture thinking, project walkthroughs and interviews.'],
  ],
  [
    ['Build your foundations', 'Understand systems, networking, Git and scripting.'],
    ['Make your first builds', 'Package applications and connect the steps of delivery.'],
    ['Understand the cloud', 'Explore infrastructure, Kubernetes and how applications run.'],
    ['Show your understanding', 'Explain what you built, how it works and the choices you made.'],
  ],
];

export function AudienceSteps({ audience }: { audience: number }) {
  return <ol className="audience-journey">{audienceJourneys[audience].map(([title, detail], index) => <li key={title}><span className="mono">0{index + 1}</span><div><h4>{title}</h4><p>{detail}</p></div></li>)}</ol>;
}

const capstoneSteps = [
  { name: 'Plan', icon: Workflow, tools: ['Jira', 'Azure Boards'], description: 'Translate an engineering problem into a backlog and a connected plan.', question: 'Can you explain the problem and the work needed to solve it?' },
  { name: 'Source', icon: GitBranch, tools: ['Git', 'Azure Repos'], description: 'Connect source changes to reviewed, version-controlled engineering work.', question: 'Can another engineer follow the history and review the change?' },
  { name: 'Build', icon: Code2, tools: ['Maven', 'Azure Pipelines'], description: 'Connect source code to a repeatable build and its application artifacts.', question: 'Can you explain how code becomes a deployable artifact?' },
  { name: 'Test & secure', icon: ShieldCheck, tools: ['SonarQube', 'Security checks'], description: 'Introduce quality and security checks into the delivery workflow.', question: 'What must be checked before a change moves forward?' },
  { name: 'Containerize', icon: Box, tools: ['Docker', 'Container registry'], description: 'Package the application and understand how its container runs.', question: 'What does the application need at build time and at runtime?' },
  { name: 'Provision', icon: Cloud, tools: ['Terraform', 'Terragrunt'], description: 'Connect version-controlled infrastructure configuration to a cloud environment.', question: 'Can you explain and review the infrastructure before provisioning it?' },
  { name: 'Deploy', icon: Layers, tools: ['AKS', 'Helm', 'ArgoCD'], description: 'Connect application configuration, Kubernetes and a GitOps deployment workflow.', question: 'How does a declared change become a running workload?' },
  { name: 'Observe', icon: Activity, tools: ['Prometheus', 'Grafana'], description: 'Connect running workloads to the signals used for monitoring and troubleshooting.', question: 'What would you look at when the application behaves unexpectedly?' },
  { name: 'Improve', icon: Sparkles, tools: ['AI assistance', 'Human review'], description: 'Explore improvements with AI assistance, then review and verify proposed changes.', question: 'How will you verify an AI suggestion before applying it?' },
];

export function CapstoneJourney() {
  const [selected, setSelected] = useState(0);
  const stage = capstoneSteps[selected];
  const Icon = stage.icon;
  return <section className="capstone-journey reveal" aria-labelledby="capstone-heading"><div className="capstone-journey-heading"><span className="mini-label">THE INTEGRATED ENTERPRISE CAPSTONE</span><h3 id="capstone-heading">Build the system.<br /><em>Then understand every connection.</em></h3><p>Bring the engineering workflow together. Explore the stages of the capstone learning journey.</p></div><div className="capstone-flow" aria-label="Explore capstone stages">{capstoneSteps.map((item, index) => { const StepIcon = item.icon; return <button key={item.name} onClick={() => setSelected(index)} aria-pressed={selected === index} className={selected === index ? 'active' : ''}><span className="capstone-step-icon"><StepIcon size={20} aria-hidden="true" /></span><span className="mono">0{index + 1}</span><strong>{item.name}</strong>{index < capstoneSteps.length - 1 && <ChevronRight className="capstone-connector" size={14} aria-hidden="true" />}</button>; })}</div><div className="capstone-inspector" aria-live="polite"><div className="capstone-selected-icon"><Icon size={26} aria-hidden="true" /></div><div className="capstone-stage-copy"><span className="mini-label">STAGE 0{selected + 1} / {stage.name.toUpperCase()}</span><h4>{stage.description}</h4><p>{stage.question}</p></div><div className="capstone-selected-tools">{stage.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div><p className="capstone-scope-note">A learning architecture based on the program scope. Exact implementation, labs and deliverables are confirmed in the detailed syllabus.</p></section>;
}

const evolutionDetails = [
  { title: 'Understand what everything runs on.', scope: 'FLAGSHIP FOUNDATIONS', text: 'Systems, the command line, networking, Git and scripting give you a shared language for the rest of the engineering workflow.', skills: ['Linux & Windows', 'Git workflows', 'Bash automation'], cta: 'Explore the foundations', href: '#curriculum' },
  { title: 'Connect code to a running application.', scope: 'FLAGSHIP LEARNING', text: 'Bring builds, containers, pipelines, cloud infrastructure and operations into a connected picture. Learn how the pieces depend on each other.', skills: ['CI/CD', 'Docker & Kubernetes', 'Azure & infrastructure as code'], cta: 'Explore the learning projects', href: '#projects' },
  { title: 'Grow from individual tools to reusable systems.', scope: 'A DIRECTION FOR CONTINUED GROWTH', text: 'Build on infrastructure automation, GitOps, observability and security. Deeper platform engineering adds developer experience and reusable capabilities for teams.', skills: ['Reusable infrastructure', 'GitOps', 'Reliability & security'], cta: 'See the connected lifecycle', href: '#experience' },
  { title: 'Use AI with engineering judgment.', scope: 'FLAGSHIP AI-ASSISTED WORKFLOWS', text: 'Practise prompting, scripting and troubleshooting with AI support. Treat suggestions as proposals to review, test and understand.', skills: ['AI-assisted scripting', 'Troubleshooting', 'Human approval'], cta: 'Explore AI-assisted projects', href: '#projects' },
  { title: 'Add the knowledge that AI systems need.', scope: 'FUTURE PATHWAY · ADDITIONAL LEARNING', text: 'Engineering experience helps you deploy and operate systems. AI and agentic applications also require Python, APIs, LLM fundamentals, retrieval, evaluation and orchestration.', skills: ['Python & APIs', 'Retrieval & evaluation', 'Agent orchestration & safety'], cta: 'Explore future pathways', href: '#programs' },
];

export function EvolutionDetail({ selected }: { selected: number }) {
  const detail = evolutionDetails[selected];
  return <div className="evolution-detail" aria-live="polite"><div><span className="mini-label">{detail.scope}</span><h3>{detail.title}</h3><p>{detail.text}</p></div><div className="evolution-skills">{detail.skills.map(skill => <span key={skill}><Check size={14} aria-hidden="true" />{skill}</span>)}<a href={detail.href} className="text-link">{detail.cta}<ArrowUpRight size={16} aria-hidden="true" /></a></div></div>;
}
