import { PathwayStudyPlan } from './PathwayStudyPlan';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Layers3, Compass, Code2, Sparkles } from 'lucide-react';
import { programs } from '../data/websiteContent';
import { pathwaySlugs } from './usePathwayNavigation';
import './PathwayPages.css';
interface PathwayProfile { intro: string; prerequisites: string; topics: readonly string[]; practice: string; }
const profiles: readonly PathwayProfile[] = [
  { intro: programs[0].description, prerequisites:'Start with the engineering foundations; confirm prerequisites and the detailed lab scope before enrolment.', topics:[], practice:'' },
  { intro:'Build a connected Azure workflow, from secure cloud foundations to automated delivery and reliable operations.', prerequisites:'Bring basic Linux, networking, Git and scripting skills. New to these? Start with the Masterclass foundations.', topics:['Azure foundations, identity and networking','Azure application services and cloud architecture','Azure DevOps, CI/CD and deployment approvals','Terraform infrastructure workflows','AKS, security and observability'], practice:'Apply the proposed study plan to three engineering scenarios. Final projects, lab access and delivery details are confirmed separately.' },
  { intro:'An AWS-focused progression for engineers who want to connect cloud foundations with infrastructure automation and delivery.', prerequisites:'Systems, networking, Git and scripting foundations. Prior cloud understanding will help you compare architecture choices.', topics:['AWS foundations, IAM and networking','EC2 and core infrastructure concepts','Infrastructure automation and CloudFormation','Cloud delivery and operational practices'], practice:'Dedicated AWS practical material is being developed. Project deliverables, lab costs and detailed module structure are not yet confirmed.' },
  { intro:'Learn to turn a customer problem into a working software and AI solution. Connect programming, applications, cloud, enterprise data, retrieval and agents with production delivery and handover.', prerequisites:'Start with programming foundations or build on your existing development experience. Review Python, SQL, Linux and Git readiness to choose the right entry stage.', topics:['Programming and full-stack application engineering','Cloud, DevSecOps and enterprise integration','LLMs, RAG, evaluation and supervised agents','Production architecture and one customer-delivery capstone'], practice:'Explore these practice scenarios as part of the learning journey. The integrated capstone brings the stages together; this curriculum is separate from the DevOps flagship.' },
  { intro:'Build two substantial engineering projects, prepare your resume and portfolio, and practise through five progressive mock interviews.', prerequisites:'Designed for engineers with cloud, DevOps or related technical foundations. Bring your current resume and project experience; agree the starting level before beginning.', topics:['Two major Azure platform and AIOps projects','Resume preparation and GitHub portfolio development','System design and technical storytelling','Five mock interviews with feedback'], practice:'Build practical evidence for your resume and technical discussions. Project scope and lab requirements are agreed before starting.' },
];

const directions = [
  { focus: 'Connected engineering', stages: [], ideas: [] },
  { focus: 'Azure delivery & operations', stages: [
    ['Understand the platform', 'Identity, networking and workload choices', 'Explore subscriptions, resource organization, identity boundaries and virtual networks. Learn how these decisions shape an application architecture.'],
    ['Automate infrastructure', 'Repeatable environments with Terraform', 'Work through infrastructure definitions, state, variables and change review. Separate environment configuration from application code.'],
    ['Build a delivery workflow', 'Azure DevOps and controlled releases', 'Connect source control to build, test, artifact and deployment stages. Understand approvals, secrets and environment promotion.'],
    ['Operate with confidence', 'AKS, security and observability', 'Explore container deployment, access control, monitoring and incident investigation. Reason about recovery, cost and operational trade-offs.'],
  ], ideas: [
    ['Infrastructure change workflow', 'Design a reviewed Terraform workflow for an Azure application environment.', 'Architecture sketch · Configuration · Change-review notes'],
    ['Application delivery pipeline', 'Connect a sample application to a staged build and release process with validation and approvals.', 'Pipeline design · Deployment checklist · Rollback approach'],
    ['Operational readiness review', 'Explain how a cloud workload is monitored, secured and investigated when something fails.', 'Monitoring plan · Access boundaries · Incident walkthrough'],
  ] },
  { focus: 'AWS architecture & automation', stages: [
    ['Build cloud foundations', 'IAM, networking and compute', 'Understand identity policies, VPC boundaries and EC2-based workloads. Compare availability, access and responsibility across the architecture.'],
    ['Define infrastructure', 'Terraform and CloudFormation concepts', 'Explore declarative infrastructure, reusable configuration and controlled changes. Understand the role of state and environment separation.'],
    ['Connect application delivery', 'Containers, registries and CI/CD', 'Plan an application build and deployment workflow. Explore how container registries and EKS can fit into a delivery architecture.'],
    ['Design for operations', 'Observability, security and recovery', 'Consider logging, metrics, least privilege and failure recovery. Document cost assumptions and operational decisions before implementation.'],
  ], ideas: [
    ['AWS workload blueprint', 'Map a sample application across networking, identity and compute boundaries.', 'Architecture diagram · Access model · Trade-off notes'],
    ['Infrastructure automation plan', 'Design a repeatable environment workflow with validation and change review.', 'Configuration outline · Review checklist · Environment strategy'],
    ['Container delivery scenario', 'Explain a container release from source to registry to deployment, including recovery.', 'Delivery diagram · Verification steps · Recovery plan'],
  ] },
  { focus: 'Problem solving with applied AI', stages: [
    ['Discover the real problem', 'Users, constraints and success criteria', 'Translate a business need into a bounded engineering problem. Identify users, existing systems, data access and useful measures of success.'],
    ['Build the integration layer', 'Python, APIs and application workflows', 'Connect application components and data through well-defined interfaces. Handle authentication, errors and permissions deliberately.'],
    ['Ground and evaluate AI', 'LLM applications, retrieval and testing', 'Explore retrieval-augmented generation, source grounding and evaluation. Compare system behavior against test questions and failure scenarios.'],
    ['Deliver with oversight', 'Agents, deployment and human handoff', 'Design bounded tool use and approval steps. Plan observability, safe failure behavior and iteration with the people using the solution.'],
  ], ideas: [
    ['Knowledge assistant concept', 'Design an assistant that answers from a small, verified information source and acknowledges missing evidence.', 'Retrieval design · Evaluation questions · Source-grounding rules'],
    ['Supervised workflow agent', 'Map an assistant that proposes actions while requiring approval for consequential changes.', 'Tool boundaries · Approval flow · Exception cases'],
    ['Customer problem-to-prototype', 'Turn a scoped operational need into an integration plan and a testable prototype proposal.', 'Discovery brief · API map · Acceptance criteria'],
  ] },
  { focus: 'Communicate your engineering value', stages: [
    ['Find your direction', 'Experience, strengths and target roles', 'Map your existing experience and project evidence to role expectations. Identify specific gaps to practise rather than collecting disconnected tools.'],
    ['Build your evidence', 'Resume, portfolio and project narratives', 'Present what you built, the decisions you made and the limitations you discovered. Keep claims specific, honest and supported by your work.'],
    ['Practise the conversation', 'Technical interviews and scenarios', 'Rehearse architecture explanations, troubleshooting and trade-off discussions. Practise asking clarifying questions and thinking aloud.'],
    ['Refine your presentation', 'Feedback and professional confidence', 'Review your answers, improve your examples and create a focused practice plan. Confirm which guidance or mock-session formats are available.'],
  ], ideas: [
    ['Enterprise Multi-Region Cloud & GitOps Platform', 'Build a platform around workload identity, modular infrastructure, secure networking and GitOps delivery. Explain environment separation, release approvals and failover design.', 'Terraform / Terragrunt  /  Azure DevOps  /  AKS / Argo CD'],
    ['AIOps & Serverless Self-Healing Engine', 'Connect pipeline diagnostics and operational alerts to a supervised automation workflow. Demonstrate incident triage, bounded remediation and an auditable recovery process.', 'Azure Monitor  /  Event routing  /  Azure Functions  /  AI-assisted diagnostics'],
  ] },
];
export function PathwayPageIntro({ index }: { index: number }) {
  const program = programs[index];
  if (!program) return <section className="container pathway-page"><a href="./#programs" className="pathway-back"><ArrowLeft size={16}/>Back to pathways</a><h1 tabIndex={-1}>Pathway not found</h1><p>Choose one of the documented learning pathways.</p></section>;
  return <><header className="container pathway-page pathway-premium-intro" key={index}>
    <a href="./#programs" className="pathway-back"><ArrowLeft size={16} aria-hidden="true"/>Back to pathways</a>
    <div className="pathway-intro-grid"><div><span className="pathway-page-label">PATHWAY {String(index+1).padStart(2,'0')} · {program.status}</span><h1 tabIndex={-1}>{program.title}</h1><p>{profiles[index].intro}</p></div>
    <aside className="pathway-compass"><Compass size={28} aria-hidden="true"/><span>YOUR DIRECTION</span><h2>{directions[index].focus}</h2><p>{index===0?'18 modules, 14 project concepts and one integrated capstone.':index===3?'Eight curriculum stages and one end-to-end customer-scenario capstone.':index===1?'Design the platform. Automate delivery. Understand operations.':'A connected progression from understanding to practical application.'}</p><small>{index===0?'Explore the detailed curriculum below.':'Outline for exploration. Confirm delivery and detailed scope before enrolling.'}</small></aside></div>
    <nav className="pathway-page-jumps" aria-label="Pathway sections">{index===0?<><a href="#curriculum">Curriculum <ArrowUpRight size={14}/></a><a href="#projects">Projects &amp; capstone <ArrowUpRight size={14}/></a><a href="#experience">Engineering lifecycle <ArrowUpRight size={14}/></a></>:index===4?<><a href="#pathway-roadmap">4 Learning Phases</a><a href="#pathway-practice">2 Major Projects</a><a href="#career-portfolio">Resume &amp; Portfolio</a><a href="#career-mocks">5 Mock Interviews</a></>:<><a href="#pathway-start">Your starting point</a><a href="#pathway-roadmap">Learning journey</a><a href="#pathway-practice">Practical exploration</a></>}</nav>
  </header>{index===0&&<div className="container"><PathwayStudyPlan index={0}/></div>}</>;
}
export function PathwayOutline({ index, onEnquire }: { index:number; onEnquire:()=>void }) {
  const program=programs[index], profile=profiles[index], direction=directions[index];
  if (!program || !profile || !direction) return null;
  return <div className="container pathway-outline pathway-premium-outline" key={index}>
    <div className="pathway-overview-grid" id="pathway-start"><section className="pathway-info-card"><Compass aria-hidden="true"/><span className="pathway-kicker">START WITH CLARITY</span><h2>Where to begin</h2><p>{profile.prerequisites}</p></section><section className="pathway-info-card"><Layers3 aria-hidden="true"/><span className="pathway-kicker">CONNECTED CAPABILITIES</span><h2>What you will explore</h2><ul>{profile.topics.map(topic=><li key={topic}><Check size={15} aria-hidden="true"/>{topic}</li>)}</ul></section></div>
    <div id="pathway-roadmap"><PathwayStudyPlan index={index}/></div>
    <section className="pathway-practice" id="pathway-practice"><div className="pathway-section-title"><div><span className="pathway-kicker">TURN THINKING INTO PRACTICE</span><h2>{index===4?"Two major projects. Built to explain.":index===3?"Apply the skills to real delivery problems.":index===1?"Put Azure engineering into practice.":"Work worth explaining."}</h2></div><p>{profile.practice}</p></div><div className="pathway-practice-grid">{direction.ideas.map(([title,description,outputs])=><article key={title}><Code2 size={23} aria-hidden="true"/><span className="pathway-kicker">{index===4?"ANCHOR PROJECT":"ILLUSTRATIVE PRACTICE IDEA"}</span><h3>{title}</h3><p>{description}</p><small>{outputs}</small></article>)}</div>
    </section>
    <section className="pathway-next-step"><Sparkles size={25} aria-hidden="true"/><div><h2>{index===1?"Plan your Azure learning path.":index===2?"Plan your AWS learning path.":index===3?"Explore your applied AI direction.":index===4?"Plan your next career step.":"Find the right next step."}</h2><p>{index===4?"Discuss your target roles, project portfolio and available career preparation support.":index===3?"Discuss your starting stage, capstone interests, lab access and pathway delivery details.":"Discuss your starting point, programme scope, lab requirements and available delivery options."}</p></div><button type="button" onClick={onEnquire}>Ask about this pathway<ArrowUpRight size={18}/></button></section>
    <nav className="pathway-compact-return" aria-label="Pathway navigation"><a href="./#programs"><ArrowLeft size={16} aria-hidden="true"/>Back to all pathways</a><a href={'?pathway='+pathwaySlugs[index===4?0:index+1]}>Explore {index===4?'the Masterclass':'the next pathway'}<ArrowRight size={16} aria-hidden="true"/></a></nav>
  </div>;
}
