import { useAccount } from '../auth/ConversationAccess';
import { ArrowUpRight, ArrowRight, Workflow, PanelsTopLeft, Smartphone, Sparkles, Check } from 'lucide-react';
import './BusinessSolutions.css';
interface SolutionArea { title:string; description:string; icon:typeof Workflow; }
const areas:readonly SolutionArea[]=[
  {title:'AI workflow automation',description:'Connect enquiries, documents, follow-ups and internal tasks. Reduce repetitive hand-offs with workflows designed around how your business operates.',icon:Workflow},
  {title:'Websites & digital platforms',description:'Create a clear, responsive home for your business, with useful customer journeys, enquiry capture and connected operations.',icon:PanelsTopLeft},
  {title:'Business applications',description:'Turn a scattered process into a focused application: customer portals, internal tools and connected data, shaped around your team.',icon:Smartphone},
  {title:'AI-powered growth systems',description:'Support organic visibility with reviewed content workflows, knowledge assistants and timely customer responses, with people in control.',icon:Sparkles},
];
export function BusinessSolutions(){
  const {user,requestConversation}=useAccount();
  const open=()=>requestConversation({kind:'business',topic:'Business solutions'});
  return <section id="solutions" className="business-solutions" aria-labelledby="business-solutions-heading"><div className="container">
    <div className="business-solutions-intro"><div><span className="business-solutions-eyebrow">FOR BUSINESS OWNERS &amp; GROWING TEAMS</span><h2 id="business-solutions-heading">Less repetitive work.<br /><span>More room to grow.</span></h2><p>Build a stronger digital business with custom websites, applications and AI-powered automation. We connect the tools, information and everyday activities that keep your business moving.</p><button type="button" className="business-solutions-primary" onClick={open}>{user?'Start a conversation':'Login to start a conversation'}<ArrowUpRight size={17} aria-hidden="true" /></button><span className="business-solutions-caption">Tell us the problem. We will explore the right approach.</span></div>
      <div className="business-workflow" aria-label="Illustrative business automation approach"><div className="business-workflow-top"><span>YOUR BUSINESS. CONNECTED.</span><span className="business-workflow-tag">Concept workflow</span></div><ol><li><span className="business-workflow-number">01</span><div><h3>Capture the need</h3><p>A customer enquiry, a document or a repetitive task.</p></div></li><li><span className="business-workflow-number">02</span><div><h3>Connect the workflow</h3><p>Bring your website, applications and business data together.</p></div></li><li><span className="business-workflow-number">03</span><div><h3>Automate with oversight</h3><p>Use AI where it helps, with approvals and clear exceptions.</p></div></li><li><span className="business-workflow-number">04</span><div><h3>Measure &amp; improve</h3><p>Review time saved, response quality and operational friction.</p></div></li></ol><div className="business-workflow-footer"><Check size={15} aria-hidden="true" />Designed around your process, not another disconnected tool.</div></div>
    </div>
    <div className="business-solutions-grid">{areas.map(area=>{const Icon=area.icon;return <article key={area.title}><Icon size={22} aria-hidden="true" /><h3>{area.title}</h3><p>{area.description}</p></article>;})}</div>
    <div className="business-solutions-close"><p>Have a workflow that takes too much time?<span>Let us understand it before choosing the technology.</span></p><button type="button" onClick={open}>{user?'Business enquiry':'Login for a business enquiry'}<ArrowRight size={17} aria-hidden="true" /></button></div>

  </div></section>;
}
