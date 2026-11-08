import { useAccount } from './auth/ConversationAccess';
import { SiteFAQ } from './components/SiteFAQ';
import { BusinessSolutions } from './components/BusinessSolutions';

import { PathwayPageIntro, PathwayOutline } from './components/PathwayPages';
import { usePathwayNavigation, pathwaySlugs } from './components/usePathwayNavigation';
import { LearningPathSection } from './components/LearningPathSection';
import { Layout } from './components/Layout';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Check, Plus, Minus, Search, Menu, X, GitBranch, Box, Cloud, Sparkles, Layers, Code2, Workflow, ShieldCheck, Activity, Download, ChevronRight, Command, MoveUpRight, Play, Pause } from 'lucide-react';
import { modules, projects, stages, programs } from './data/websiteContent';
import { CapstoneJourney, EvolutionDetail } from './components/ConsolidatedExperience';
import { CinematicHero, EngineeringStack } from './components/VisualExperience';
import Header from './components/Header';
import { BrandLogo } from './components/BrandLogo';
import { SiteFooter } from './components/SiteActions';

const Arrow = () => <ArrowUpRight size={18} aria-hidden="true" />;
const icons = [GitBranch, Code2, Workflow, ShieldCheck, Box, Cloud, Activity, Sparkles];
const money = (value: number) => new Intl.NumberFormat('en-IN').format(value);


function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className="eyebrow"><span className="tiny-cross" aria-hidden="true">+</span>{children}<span className="section-number">/{number}</span></div>;
}

function RollingNumber({ value }: { value: number }) {
  return <span className="rolling-number"><span className="sr-only">{money(value)}</span>{money(value).split('').map((char, i) => char === ',' ? <span key={`comma-${i}`} aria-hidden="true">,</span> : <span className="digit-window" key={i} aria-hidden="true"><span className="digit-reel" style={{ transform: `translateY(-${Number(char) * 10}%)` }}>{Array.from({ length: 10 }, (_, n) => <span key={n}>{n}</span>)}</span></span>)}</span>;
}

export default function App() {
  const { user, requestConversation } = useAccount();
  const pathway = usePathwayNavigation();
  const [audience, setAudience] = useState(0);
  const [stage, setStage] = useState(0);
  const [isLoopPlaying, setIsLoopPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [evolution, setEvolution] = useState(0);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All modules');
  const [projectCategory, setProjectCategory] = useState('All projects');
  const [selectedProject, setSelectedProject] = useState(0);
  const [budget, setBudget] = useState(30000);
  const [includeBudget, setIncludeBudget] = useState(false);
  const stageIcon = icons[stage];
  const StageIcon = stageIcon;
  const openEnquiry = (title = programs[0].title) => requestConversation({ kind: 'learning', topic: title, budget: includeBudget ? budget : null });
  const filteredModules = modules.filter(module => (category === 'All modules' || module.category === category) && `${module.title} ${module.description} ${module.topics.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  const filteredProjects = projects.map((project, index) => ({ ...project, index })).filter(project => projectCategory === 'All projects' || project.category === projectCategory);
  const project = projects[selectedProject];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { setReducedMotion(media.matches); if (media.matches) setIsLoopPlaying(false); };
    const pauseWhenHidden = () => { if (document.hidden) setIsLoopPlaying(false); };
    sync(); media.addEventListener('change', sync); document.addEventListener('visibilitychange', pauseWhenHidden);
    return () => { media.removeEventListener('change', sync); document.removeEventListener('visibilitychange', pauseWhenHidden); };
  }, []);
  useEffect(() => {
    if (!isLoopPlaying || reducedMotion) return;
    const timer = window.setInterval(() => setStage(previous => (previous + 1) % stages.length), 4500);
    return () => window.clearInterval(timer);
  }, [isLoopPlaying, reducedMotion]);


  const chooseAudience = (index: number) => { setAudience(index); };
  const chooseStage = (index: number) => { setIsLoopPlaying(false); setStage(index); };

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight * .98) element.dataset.reveal = 'pending';
    });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.reveal = 'visible'; observer.unobserve(entry.target); }
    }), { threshold: .05, rootMargin: '0px 0px -20px 0px' });
    elements.forEach(element => observer.observe(element));
    const showAll = () => { if (reduced.matches) elements.forEach(element => element.dataset.reveal = 'visible'); };
    reduced.addEventListener('change', showAll);
    return () => { observer.disconnect(); reduced.removeEventListener('change', showAll); };
  }, [pathway]);

  return <Layout>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header onEnquire={() => openEnquiry()} />
    <main id="main">
      {pathway === null ? <>
        <CinematicHero />
        <LearningPathSection selected={audience} onSelect={chooseAudience} />
        <section className="programs-section section pathway-catalogue" id="programs"><div className="container"><div className="section-heading reveal"><div><SectionLabel number="02">THE LEARNING PATHWAYS</SectionLabel><h2>Go deeper.<br /><em>Build what matters.</em></h2></div><p>Focused learning. Connected thinking.<br />Find a direction that fits where you are<br className="desktop-break" /> and where you want to go.</p></div><div className="program-list">{programs.map((item,i)=><a className="pathway-title-link" key={item.title} href={'?pathway='+pathwaySlugs[i]}><span>PATHWAY 0{i+1}</span><span>{item.title}</span><Arrow /></a>)}</div></div></section>
        <BusinessSolutions />
      </> : <PathwayPageIntro index={pathway} />}
      {pathway === 0 && <div className="masterclass-page"><section className="programs-section section masterclass-showcase"><div className="container"><article className="flagship reveal"><div className="flagship-copy"><div className="eyebrow"><span className="status-dot" /> PATHWAY 01 · THE MASTERCLASS</div><h2 className="masterclass-display-title">DevOps. Multi-Cloud.<br /><span>AI Engineering.</span></h2><p>One connected masterclass. From your first engineering workflow to an integrated enterprise capstone.</p><p className="flagship-coverage-note">Azure leads the current syllabus. Ask about AWS-specific lab availability.</p><div className="flagship-stats">{[[18, 'curriculum modules'], [14, 'hands-on projects'], [1, 'integrated capstone']].map(([value, label]) => <div key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div><a href="#curriculum" className="button primary">Explore the full curriculum <Arrow /></a></div><EngineeringStack /></article></div></section>
      <section className="experience-section section" id="experience"><div className="container"><div className="section-heading reveal"><div><SectionLabel number="03">UNDERSTAND THE WHOLE SYSTEM</SectionLabel><h2>One continuous loop.<br /><em>Endless ways to evolve.</em></h2></div><p>From an idea to a running system.<br />Explore how modern engineering<br />works together.</p></div><div className="lifecycle-grid reveal"><div className="loop-canvas"><img className="loop-photo" src="/images/devops-infinity.jpg" alt="" width={1600} height={912} loading="lazy" decoding="async" /><svg viewBox="0 0 680 380" aria-hidden="true"><defs><linearGradient id="loop-gradient"><stop stopColor="#57d5df" /><stop offset=".52" stopColor="#6389fa" /><stop offset="1" stopColor="#ae8eff" /></linearGradient></defs><path d="M340 190 C240 40 70 40 70 190 C70 340 240 340 340 190 C440 40 610 40 610 190 C610 340 440 340 340 190" stroke="url(#loop-gradient)" strokeWidth="3" fill="none" /><path className="loop-flow" style={{ animationPlayState: isLoopPlaying && !reducedMotion ? 'running' : 'paused' }} d="M340 190 C240 40 70 40 70 190 C70 340 240 340 340 190 C440 40 610 40 610 190 C610 340 440 340 340 190" stroke="#e6faff" strokeWidth="5" fill="none" strokeDasharray="12 1100" /><text x="185" y="195" textAnchor="middle" className="loop-word">Dev</text><text x="490" y="195" textAnchor="middle" className="loop-word">Ops</text></svg><div className="loop-center"><Sparkles size={23} aria-hidden="true" /></div>{stages.map((item, i) => { const Icon = icons[i]; return <button key={item.name} className={`loop-node node-${i} ${stage === i ? 'active' : ''}`} onClick={() => chooseStage(i)} aria-pressed={stage === i}><span><Icon size={19} aria-hidden="true" /></span><strong>{item.name}</strong></button>; })}<div className="loop-controls"><span className="mono">EXPLORE AT YOUR PACE</span><button className="loop-play" disabled={reducedMotion} onClick={() => setIsLoopPlaying(!isLoopPlaying)} aria-pressed={isLoopPlaying}>{isLoopPlaying ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}{reducedMotion ? 'Motion reduced' : isLoopPlaying ? 'Pause walkthrough' : 'Play walkthrough'}</button></div></div><div className="stage-panel" aria-live="polite"><span className="stage-count mono">STAGE 0{stage + 1} / 08</span><div className="stage-large-icon"><StageIcon size={30} aria-hidden="true" /></div><h3 key={`stage-title-${stage}`}>{stages[stage].title}</h3><p key={`stage-description-${stage}`}>{stages[stage].description}</p><div className="stage-tools">{stages[stage].tools.map(tool => <span key={tool}>{tool}</span>)}</div><div className="stage-navigation"><span className="mono">CONNECTED. NEVER ISOLATED.</span><button className="icon-button" aria-label="Next lifecycle stage" onClick={() => chooseStage((stage + 1) % stages.length)}><ArrowRight size={20} /></button></div></div></div><p className="lifecycle-note">AI supports the engineer. Human judgment, review and approval remain part of the loop.</p></div></section>

      <section className="section container curriculum-section" id="curriculum"><div className="section-heading reveal"><div><SectionLabel number="04">THE CURRICULUM, OPENED UP</SectionLabel><h2>Depth you can <em>explore.</em></h2></div><p>18 modules. A connected engineering journey.<br />Start with the foundations. See how it all fits.</p></div><div className="curriculum-layout"><aside className="curriculum-sidebar"><span className="mini-label">YOUR LEARNING MAP</span><div className="curriculum-filters" aria-label="Filter modules">{['All modules', 'Foundations', 'Build & deliver', 'Cloud & infrastructure', 'Operate & evolve'].map(item => <button key={item} aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}<span>{item === 'All modules' ? '18' : modules.filter(m => m.category === item).length.toString().padStart(2, '0')}</span></button>)}</div><div className="curriculum-aside-note"><BookIcon /><p>Built around real workflows.<br />Designed to connect the dots.</p><a className="text-link" href="#projects">See the projects <Arrow /></a></div></aside><div className="module-browser"><label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Search curriculum modules</span><input type="search" placeholder="Find a topic, tool, or module…" value={query} onChange={event => setQuery(event.target.value)} /><span className="mono">{filteredModules.length} / 18</span></label><div className="module-results" aria-live="polite"><span className="sr-only">{filteredModules.length} modules found</span>{filteredModules.map(module => <details className="module" key={module.number}><summary><span className="module-number mono">{module.number}</span><div><span className="mini-label">{module.category}</span><h3>{module.title}</h3></div><Plus className="expand-plus" size={19} aria-hidden="true" /><Minus className="expand-minus" size={19} aria-hidden="true" /></summary><div className="module-body"><p>{module.description}</p><div className="topic-list">{module.topics.map(topic => <span key={topic}><Check size={14} aria-hidden="true" />{topic}</span>)}</div></div></details>)}{!filteredModules.length && <div className="empty-state"><Search /><h3>No modules found.</h3><p>Try a tool name such as Docker, Git, or Azure.</p><button className="text-link" onClick={() => { setQuery(''); setCategory('All modules'); }}>Clear filters <ArrowRight size={16} /></button></div>}</div><p className="content-note">Explore the program scope here. Request the detailed syllabus and confirmed lab plan before enrolment.</p></div></div></section>

      <section className="projects-section section" id="projects"><div className="container"><div className="section-heading reveal"><div><SectionLabel number="05">LEARNING THAT LEAVES YOU WITH SOMETHING</SectionLabel><h2>Less watching.<br /><em>More building.</em></h2></div><p>14 practical learning projects.<br />Explore the systems you’ll learn to build<br />and explain—not just the tools you’ll use.</p></div><div className="project-filters segmented" aria-label="Filter projects">{['All projects', 'Foundations & delivery', 'Cloud & Kubernetes', 'Operations & AI'].map(item => <button key={item} className={projectCategory === item ? 'active' : ''} aria-pressed={projectCategory === item} onClick={() => { setProjectCategory(item); const next = projects.findIndex(p => item === 'All projects' || p.category === item); setSelectedProject(next); }}>{item}</button>)}</div><div className="project-explorer"><div className="project-list" aria-label="Choose a learning project">{filteredProjects.map(item => <button key={item.title} onClick={() => setSelectedProject(item.index)} aria-pressed={selectedProject === item.index} className={selectedProject === item.index ? 'active' : ''}><span className="mono">{String(item.index + 1).padStart(2, '0')}</span><span>{item.title}</span><ArrowUpRight size={16} aria-hidden="true" /></button>)}</div><article className="project-detail" aria-live="polite"><div className="project-architecture" aria-label={`Learning workflow: ${project.flow.join(', then ')}`}><span className="mono architecture-label">LEARNING PROJECT / {String(selectedProject + 1).padStart(2, '0')}</span><div className="architecture-nodes">{project.flow.map((node, i) => <div className="architecture-step" key={node}><span className="architecture-box">{i === 0 ? <Code2 aria-hidden="true" /> : i === 1 ? <Workflow aria-hidden="true" /> : <Cloud aria-hidden="true" />}<strong>{node}</strong></span>{i < project.flow.length - 1 && <ArrowRight className="architecture-arrow" size={22} aria-hidden="true" />}</div>)}</div><span className="architecture-caption mono">A PROPOSED LEARNING WORKFLOW, NOT A LIVE DEPLOYMENT</span></div><div className="project-detail-copy"><span className="mini-label">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><div className="project-outcome"><span className="mini-label">WHAT YOU’LL PRACTISE</span><p>{project.outcome}</p></div></div></article></div><CapstoneJourney /></div></section>

      <section className="section container progression-section reveal" id="progression"><SectionLabel number="06">YOUR NEXT CHAPTER IS A PROGRESSION</SectionLabel><div className="section-heading"><h2>You’re not starting over.<br /><em>You’re building forward.</em></h2><p>DevOps and cloud skills can be a strong<br />foundation for AI. The next step adds<br />new knowledge—not a shortcut.</p></div><ol className="progression-track">{[['01', 'Engineering', 'The foundations', 'Systems, scripting & version control'], ['02', 'DevOps & cloud', 'Connect the workflow', 'Delivery, infrastructure & operations'], ['03', 'Platform engineering', 'Think in systems', 'Reusable, reliable engineering platforms'], ['04', 'AI-assisted engineering', 'Extend your capabilities', 'AI-supported development & automation'], ['05', 'AI & agentic systems', 'The next horizon', 'Python, APIs, LLMs, retrieval & evaluation']].map(([n, title, sub, detail]) => <li key={n}><button className={evolution === Number(n) - 1 ? 'evolution-choice active' : 'evolution-choice'} onClick={() => setEvolution(Number(n) - 1)} aria-pressed={evolution === Number(n) - 1}><span className="progression-marker mono">{n}</span><span className="mini-label">{sub}</span><span className="evolution-title">{title}</span><span className="evolution-description">{detail}</span><span className="evolution-explore">Explore this stage <ArrowUpRight size={13} aria-hidden="true" /></span></button></li>)}</ol><EvolutionDetail selected={evolution} /><p className="content-note">A direction for growth, not a guaranteed career outcome. Advanced AI topics require additional study beyond the flagship foundations.</p></section>

      </div>}
      {pathway !== null && pathway > 0 && <PathwayOutline index={pathway} onEnquire={()=>openEnquiry(programs[pathway].title)} />}
      {(pathway === null || pathway === 0) && <>



      <section className="section container investment-section reveal investment-refined" id="enquire"><div><span className="investment-eyebrow"><Sparkles size={14} aria-hidden="true" /> YOUR NEXT CHAPTER STARTS HERE</span><h2>Your ambition.<br /><em>Your next move.</em></h2><p>Explore the curriculum first. Then get clarity on<br className="desktop-break" /> program fees, schedules and the right pathway for you.</p><div className="investment-checks"><span><Check size={17} aria-hidden="true" /> Explore the full curriculum before deciding</span><span><Check size={17} aria-hidden="true" /> Fees and delivery details confirmed before enrolment</span><span><Check size={17} aria-hidden="true" /> Build on your existing experience</span></div></div><div className="investment-card"><div className="investment-card-top"><span className="mini-label">LET'S SHAPE YOUR LEARNING PATH</span><span className="small-spark"><Sparkles size={18} aria-hidden="true" /></span></div><h3>Let’s find the right fit.</h3><div className="investment-conversation-steps" aria-label="What we will discuss"><span><span>01</span>Your goals</span><span><span>02</span>Your pathway</span><span><span>03</span>The practical details</span></div><p className="price-status">Program fees <span>Details on request <ArrowUpRight size={15} aria-hidden="true" /></span></p><label className="budget-opt-in"><input type="checkbox" checked={includeBudget} onChange={e => setIncludeBudget(e.target.checked)} /> Add a budget preference to my enquiry</label>{includeBudget && <div className="budget-widget"><div className="budget-value"><span>₹<RollingNumber value={budget} /></span><small>YOUR PREFERENCE<br />NOT A COURSE FEE</small></div><label className="sr-only" htmlFor="budget">Your budget preference in Indian rupees</label><input id="budget" type="range" min="10000" max="100000" step="5000" value={budget} onChange={e => setBudget(Number(e.target.value))} aria-valuetext={`${money(budget)} Indian rupees, budget preference only`} /><div className="budget-range mono"><span>₹10,000</span><span>₹1,00,000</span></div></div>}<button className="button primary" onClick={() => openEnquiry()}>{user ? 'Start a conversation' : 'Login to start a conversation'} <Arrow /></button><p className="investment-note">No payment is collected on this website.</p></div></section>

      <SiteFAQ />
      </>}
    </main>
    <SiteFooter onEnquire={() => openEnquiry()} brand={<BrandLogo tone="dark" footer />} />
    <div className="page-progress" aria-hidden="true" />
  </Layout>;
}

function BookIcon() { return <Layers size={24} strokeWidth={1.5} aria-hidden="true" />; }
