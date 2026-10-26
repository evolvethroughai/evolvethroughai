import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, Download, Layers, Sparkles } from 'lucide-react';
import { modules, projects, programs } from '../data/websiteContent';

export function downloadCurriculum() {
  const content = [
    '# Evolve Through AI',
    '## DevOps, Multi-Cloud & AI Engineering — Curriculum Overview',
    'Learn. Build. Evolve.',
    '',
    'This is a program overview. Confirm prerequisites, delivery format, schedule, fees and the detailed lab plan before enrolment. Azure leads the current syllabus; AWS-specific lab coverage must be confirmed. Advanced AI and agentic engineering require additional learning.',
    '',
    '## The 18 modules',
    ...modules.flatMap(module => [`### ${module.number}. ${module.title}`, module.description, ...module.topics.map(topic => `- ${topic}`), '']),
    '## The 14 learning projects',
    ...projects.flatMap((project, index) => [`### ${index + 1}. ${project.title}`, project.description, `Technologies: ${project.tools.join(', ')}`, `Practise: ${project.outcome}`, '']),
    '## Integrated capstone',
    'Planning → Source → Build → Test & secure → Containerize → Provision → Deploy → Observe → Improve with AI.',
    'Learning architecture only; the detailed syllabus confirms exact lab implementation and deliverables.',
    '',
    '## Learning pathways',
    ...programs.map(program => `- ${program.title} — ${program.status}: ${program.description}`),
    '',
    'Career outcomes are not guaranteed. No fees, dates or availability are confirmed by this document.',
  ].join('\n\n');
  const url = URL.createObjectURL(new Blob([content], { type: 'text/markdown;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'evolvethroughai-curriculum-overview.md'; link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function SiteFooter({ onEnquire, brand }: { onEnquire: () => void; brand: ReactNode }) {
  return <footer className="site-footer" id="footer"><div className="container">
    <div className="footer-invitation"><div><div className="eyebrow"><Sparkles size={15} aria-hidden="true" /> YOUR NEXT CHAPTER</div><h2>Good things start<br />with <em>building.</em></h2><p>Bring your curiosity. We’ll help you explore your next step.</p></div><div className="footer-invitation-actions"><button className="button footer-primary" onClick={onEnquire}>Ask about the program <ArrowUpRight size={20} aria-hidden="true" /></button><button className="button footer-secondary" onClick={downloadCurriculum}>Download curriculum <Download size={18} aria-hidden="true" /></button><span>18-module overview · Markdown download</span></div></div>
    <div className="footer-directory"><div className="footer-brand">{brand}<p>Practical engineering learning.<br />A foundation for what comes next.</p><span className="footer-brand-tagline">Technology · Innovation · Solutions</span></div><nav className="footer-column" aria-label="Learning links"><span className="mini-label">LEARN & BUILD</span><a href="#programs">The masterclass <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#curriculum">All 18 modules <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#projects">Projects & capstone <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#path">Find your starting point <ArrowUpRight size={13} aria-hidden="true" /></a></nav><nav className="footer-column" aria-label="Company links"><span className="mini-label">KEEP EVOLVING</span><a href="#experience">The engineering lifecycle <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#about">Our story <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#enquire">Fees & program enquiries <ArrowUpRight size={13} aria-hidden="true" /></a><button onClick={onEnquire}>Start a conversation <ArrowUpRight size={13} aria-hidden="true" /></button></nav></div>
    <div className="footer-signature brand-signoff"><span>Learn. Build. Evolve.</span><img src="/brand/symbol.svg" width={280} height={320} alt="" loading="lazy" decoding="async" /></div>
    <div className="footer-end"><span>© {new Date().getFullYear()} Evolve Through AI</span><span>Learn. Build. Evolve.</span><a href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a></div>
  </div></footer>;
}

export function QuickActions({ onEnquire }: { onEnquire: () => void }) {
  const [heroPassed, setHeroPassed] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector('.cinematic-hero');
    const footer = document.getElementById('footer');
    if (!hero || !footer || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.target === hero) setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      if (entry.target === footer) setFooterVisible(entry.isIntersecting);
    }), { threshold: 0 });
    observer.observe(hero); observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return <aside className="quick-actions" aria-label="Program quick actions" inert={!heroPassed || footerVisible} data-visible={heroPassed && !footerVisible}><span className="quick-actions-copy"><Layers size={18} aria-hidden="true" /> Your next step, made clearer.</span><button className="quick-download" onClick={downloadCurriculum}><Download size={16} aria-hidden="true" /> Save curriculum</button><button className="button primary" onClick={onEnquire}>Enquire <ArrowRight size={16} aria-hidden="true" /></button></aside>;
}
