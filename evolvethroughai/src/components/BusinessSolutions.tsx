import { useEffect, useRef } from 'react';
import { useAccount } from '../auth/ConversationAccess';
import { ArrowUpRight, Check } from 'lucide-react';
import './BusinessSolutions.css';
export function BusinessSolutions(){
  const {requestConversation}=useAccount();
  const workflow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = workflow.current;
    if (!card) return;
    const reveal = () => { card.dataset.workflowVisible = 'true'; };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { reveal(); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { reveal(); observer.disconnect(); }
    }, { threshold: .2 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);
  const open=()=>requestConversation({kind:'business',topic:'Business solutions'});
  return <section id="solutions" className="business-solutions business-cinematic-screen" aria-labelledby="business-solutions-heading"><div className="business-cinema-backdrop" aria-hidden="true"><img src="/images/business-world-enhanced.webp" alt="" width="1858" height="846" loading="lazy" decoding="async" /></div><div className="container">
    <div className="business-solutions-intro"><div><span className="business-solutions-eyebrow">FOR BUSINESS OWNERS &amp; GROWING TEAMS</span><h2 id="business-solutions-heading">Less repetitive work.<br /><span>More room to grow.</span></h2><p>Build a stronger digital business with custom websites, applications and AI-powered automation. We connect the tools, information and everyday activities that keep your business moving.</p><button type="button" className="business-solutions-primary" onClick={open}>Discuss Your Project<ArrowUpRight size={17} aria-hidden="true" /></button><span className="business-solutions-caption">Tell us the problem. We will explore the right approach.</span></div>
      <div ref={workflow} className="business-workflow" aria-label="Illustrative business automation approach"><div className="business-workflow-top"><span>YOUR BUSINESS. CONNECTED.</span><span className="business-workflow-tag">Concept workflow</span></div><ol><li><span className="business-workflow-number">01</span><div><h3>Capture the need</h3><p>A customer enquiry, a document or a repetitive task.</p></div></li><li><span className="business-workflow-number">02</span><div><h3>Connect the workflow</h3><p>Bring your website, applications and business data together.</p></div></li><li><span className="business-workflow-number">03</span><div><h3>Automate with oversight</h3><p>Use AI where it helps, with approvals and clear exceptions.</p></div></li><li><span className="business-workflow-number">04</span><div><h3>Measure &amp; improve</h3><p>Review time saved, response quality and operational friction.</p></div></li></ol><div className="business-workflow-footer"><Check size={15} aria-hidden="true" />Designed around your process, not another disconnected tool.</div></div>
    </div>

  </div></section>;
}
