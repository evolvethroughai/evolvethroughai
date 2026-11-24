import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { GraduationCap, Workflow, Search, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useAccount } from '../auth/ConversationAccess';
import './FAQHelpCentre.css';
interface FAQItem { question: string; answer: string; }
const learning: FAQItem[] = [
  {
    "question": "I'm a fresher with no technical experience. Where should I start?",
    "answer": "Start with engineering fundamentals such as Linux, networking, Git, scripting and cloud concepts. Progress through structured practical exercises before moving into DevOps, automation and real-world projects."
  },
  {
    "question": "I'm already working in IT. How can these programmes help me grow?",
    "answer": "Build on your existing experience by developing practical skills in cloud engineering, DevOps, infrastructure automation, Kubernetes, CI/CD and applied AI. Choose a pathway aligned with your current experience and career goals."
  },
  {
    "question": "What makes your programmes different from traditional online courses?",
    "answer": "Our approach focuses on understanding how technologies work together in real engineering environments. Learning is structured around practical implementation, connected workflows, troubleshooting and project-based experience rather than isolated tool demonstrations."
  },
  {
    "question": "What real-world projects will I work on?",
    "answer": "Depending on your programme, explore enterprise CI/CD pipelines, Terraform infrastructure, Azure and AWS cloud environments, Kubernetes deployments, GitOps, monitoring, security and AI-enabled engineering workflows."
  },
  {
    "question": "What is Forward Deployed Engineering and Applied AI?",
    "answer": "Forward Deployed Engineering combines software engineering, customer problem-solving, system integration and practical solution delivery. Applied AI extends these capabilities through intelligent applications, AI agents and automated workflows."
  },
  {
    "question": "Will I receive career guidance and interview preparation?",
    "answer": "Our career-focused learning direction includes resume improvement, technical interview preparation, mock interviews, portfolio development and communicating real-world project experience. Specific inclusions depend on your selected programme."
  },
  {
    "question": "Are programmes live or recorded? What are the fees?",
    "answer": "Our planned learning formats include recorded lessons and instructor-led sessions. Contact us to learn about current programme availability, schedules, delivery formats and pricing."
  },
  {
    "question": "Do I need cloud subscriptions, and do you guarantee employment?",
    "answer": "Some practical cloud exercises may require subscriptions or usage charges. We aim to explain these requirements before implementation. Our focus is building practical engineering skills and career readiness rather than guaranteeing employment or salary outcomes."
  }
];
const business: FAQItem[] = [
  {
    "question": "What digital solutions can Evolve Through AI build for my business?",
    "answer": "We work on professional websites, mobile applications, custom software, AI agents, intelligent chatbots, system integrations and business automation tailored to your operational requirements."
  },
  {
    "question": "Can you build a complete website or mobile application from my idea?",
    "answer": "Yes. We can help translate your business idea into a digital product through requirement discovery, experience design, development, integration and deployment planning."
  },
  {
    "question": "Can AI automate repetitive tasks in my business?",
    "answer": "AI and workflow automation can help streamline repetitive activities such as customer enquiries, appointment scheduling, lead follow-ups, reporting, document processing and internal operations."
  },
  {
    "question": "Can you develop AI agents and intelligent chatbots?",
    "answer": "We can design intelligent assistants and multi-step AI workflows that retrieve information, connect business applications, perform permitted actions and involve human approvals when necessary."
  },
  {
    "question": "Can you help restaurants, cafés and small businesses become more digital?",
    "answer": "Potential solutions include digital menus, booking systems, customer enquiry assistants, automated reminders, order-related notifications and customer engagement workflows, depending on business requirements."
  },
  {
    "question": "Can AI help with social media, marketing and digital growth?",
    "answer": "AI-assisted systems can support content planning, creation, publishing workflows, customer engagement and performance reporting. The objective is to improve operational efficiency and consistency without promising guaranteed growth."
  },
  {
    "question": "Can you integrate AI with my existing software and business systems?",
    "answer": "We assess your existing applications, APIs, data sources, access permissions and security requirements before designing an appropriate integration and automation solution."
  },
  {
    "question": "How much does a digital solution cost, and how do we get started?",
    "answer": "Every project begins with understanding your business problem, objectives and requirements. Based on the agreed scope, integrations and complexity, we propose an appropriate solution, estimated timeline and pricing."
  }
];
export function SiteFAQ() {
  const [category, setCategory] = useState<'learning' | 'business'>('learning');
  const [open, setOpen] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const section = useRef<HTMLElement>(null);
  const { requestConversation } = useAccount();
  useEffect(() => {
    const node = section.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.dataset.entered = 'true'; observer.disconnect(); }
    }, { threshold: .08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const choose = (next: 'learning' | 'business') => { setCategory(next); setOpen(null); setQuery(''); };
  const questions = (category === 'learning' ? learning : business).map((item,index) => ({...item,index})).filter(item => (item.question+' '+item.answer).toLowerCase().includes(query.toLowerCase().trim()));
  const light = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = event.currentTarget, box = node.getBoundingClientRect();
    node.style.setProperty('--light-x', ((event.clientX-box.left)/box.width*100)+'%');
    node.style.setProperty('--light-y', ((event.clientY-box.top)/box.height*100)+'%');
  };
  return <section ref={section} id="questions" className="faq-help-centre" data-category={category} aria-labelledby="faq-heading">
    <div className="faq-neural" aria-hidden="true"><svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="currentColor" strokeWidth=".7"><path d="M0 170 180 90 340 240 510 100 740 220 980 80 1200 190M0 520 210 370 340 240 480 470 740 220 880 490 1200 390M0 710 210 370 390 690 480 470 710 710 880 490 1080 700 1200 390M180 90 210 370M510 100 480 470M980 80 880 490"/></g>{[[180,90],[340,240],[510,100],[740,220],[980,80],[210,370],[480,470],[880,490],[390,690],[710,710],[1080,700]].map(([cx,cy])=><circle key={cx} cx={cx} cy={cy} r="3" fill="currentColor"/>)}</svg></div>
    <div className="container faq-help-layout">
      <div className="faq-help-intro">
        <span className="faq-help-eyebrow">LET'S CLEAR THINGS UP</span>
        <h2 id="faq-heading">Good questions.<br/><em>Clear answers.</em></h2>
        <p className="faq-help-subtitle">Whether you're building your career or transforming your business, find the answers that help you move forward.</p>
        <div className="faq-help-categories" role="group" aria-label="Question categories">
          <button type="button" aria-pressed={category==='learning'} onClick={()=>choose('learning')} aria-controls="faq-help-answers"><GraduationCap aria-hidden="true"/><span><strong>Learning &amp; Careers</strong><small>Build skills. Advance your career.</small></span><b>08<small>questions</small></b></button>
          <button type="button" aria-pressed={category==='business'} onClick={()=>choose('business')} aria-controls="faq-help-answers"><Workflow aria-hidden="true"/><span><strong>Digital Solutions</strong><small>Build smarter. Grow your business.</small></span><b>08<small>questions</small></b></button>
        </div>
        <div className="faq-help-robot" key={category+'-'+open}>
          <div className="faq-robot-bubble"><MessageCircle size={16} aria-hidden="true"/>{category==='learning'?'Your next step starts with a question.':"Let's make your business work smarter."}</div>
          <span className="faq-hologram question-one" aria-hidden="true">?</span><span className="faq-hologram question-two" aria-hidden="true">?</span>
          <img src="/images/faq-robot-laptop-transparent.png" width="616" height="360" loading="lazy" decoding="async" alt="Friendly AI robot working at a laptop"/>
        </div>
      </div>
      <div className="faq-help-right">
        <label className="faq-help-search"><Search size={18} aria-hidden="true"/><span className="faq-sr-only">Search questions in this category</span><input type="search" placeholder="Find your answer…" value={query} onChange={event=>{setQuery(event.target.value);setOpen(null);}}/></label>
        <div id="faq-help-answers" className="faq-help-answers" key={category}>
          {questions.map((item,order)=>{const expanded=open===item.index,id='help-'+category+'-'+item.index;return <div key={id} className="faq-help-card" data-open={expanded} style={{'--order':order} as React.CSSProperties} onPointerMove={light}>
            <button type="button" id={id+'-question'} aria-expanded={expanded} aria-controls={id+'-answer'} onClick={()=>setOpen(expanded?null:item.index)}><span className="faq-help-number">0{item.index+1}</span><span>{item.question}</span><span className="faq-help-toggle" aria-hidden="true"/></button>
            <div id={id+'-answer'} className="faq-help-answer" role="region" aria-labelledby={id+'-question'} aria-hidden={!expanded} inert={!expanded}><div><p>{item.answer}</p></div></div>
          </div>;})}
          {questions.length===0&&<div className="faq-help-empty" role="status"><Search aria-hidden="true"/><h3>No matching questions yet.</h3><p>Try a different word, or ask us directly below.</p><button type="button" onClick={()=>setQuery('')}>Clear search</button></div>}
        </div>
        <div className="faq-help-conversation"><div><h3>Every great journey begins with a conversation.</h3><p>Have a question we haven't answered? Let's explore what's possible together.</p></div><button type="button" onClick={()=>requestConversation({kind:category==='business'?'business':'learning',topic:'FAQ: '+(category==='business'?'Digital Solutions':'Learning & Careers')})}>Let's Talk<ArrowUpRight size={18} aria-hidden="true"/></button></div>
      </div>
    </div>
  </section>;
}
