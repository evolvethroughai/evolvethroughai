import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, Check, Globe, MessageCircle, Smartphone, TrendingUp, Workflow } from 'lucide-react';
import { useAccount } from '../auth/ConversationAccess';
import './BusinessSolutions.css';

const services = [
  { title: 'Business Websites', short: 'Websites', icon: Globe, tag: 'Websites & digital platforms', flow: 'WEBSITE DELIVERY FLOW', capabilities: 'Responsive architecture · Clear service structure · Enquiry capture', audience: 'Small businesses · Startups · Growing teams', description: 'Fast, credible web platforms built to explain your offering clearly and turn visitor attention into structured enquiries.', note: 'Built for clarity, speed and real customer enquiries.', steps: [
    ['Clarify your offer', 'Structure pages, services and trust signals around what visitors actually decide on.'],
    ['Build the platform', 'Engineer fast, responsive pages connected to your brand and domain.'],
    ['Connect enquiry capture', 'Route contact forms into your inbox or database with clear validation.'],
    ['Launch & refine', 'Review mobile readability, page speed and enquiry friction after launch.'],
  ] },
  { title: 'Mobile Applications', short: 'Mobile Apps', icon: Smartphone, tag: 'Custom apps & connected software', flow: 'APP ENGINEERING FLOW', capabilities: 'Cross-platform UX · Account experiences · Cloud backend & sync', audience: 'Founders · Service brands · Field teams', description: 'Focused iOS, Android and web-connected applications tailored around your customers or everyday internal operations.', note: 'Scoped around the features your users actually rely on, without bloat.', steps: [
    ['Map core user journeys', 'Define essential screens, role permissions and offline needs before writing code.'],
    ['Build & connect APIs', 'Connect your app securely to accounts, bookings, orders or internal records.'],
    ['Verify across devices', 'Test usability, stability and real network conditions before release.'],
    ['Ship & iterate', 'Plan updates around real usage and operational feedback.'],
  ] },
  { title: 'AI Agents & Assistants', short: 'AI Agents', icon: Bot, tag: 'Enquiry, booking & support agents', flow: 'SUPERVISED AGENT FLOW', capabilities: 'Grounded knowledge · Booking & FAQ triage · Human escalation', audience: 'Restaurants & cafés · Clinics · Service teams', description: 'Practical AI assistants that answer visitor questions, qualify enquiries and guide bookings with clear human handoff.', note: 'Human review, clear boundaries and escalation stay built into every interaction.', steps: [
    ['Capture customer intent', 'Receive questions, booking requests or lead details through web chat or forms.'],
    ['Ground in your data', 'Connect the assistant to your verified services, hours, pricing and policies.'],
    ['Assist with guardrails', 'Draft replies or qualify requests while routing exceptions to your team.'],
    ['Audit & improve', 'Review accuracy, transcripts and handoff quality to keep responses trustworthy.'],
  ] },
  { title: 'Business Automation', short: 'Automation', icon: Workflow, tag: 'End-to-end connected workflows', flow: 'CONNECTED OPERATIONS FLOW', capabilities: 'System integrations · Approval checkpoints · Automated reporting', audience: 'Operations teams · Repetitive workflows · Growing SMBs', description: 'Replace manual copy-pasting across forms, spreadsheets, CRMs and alerts with reliable, human-approved pipelines.', note: 'Designed around your process, not another disconnected tool.', steps: [
    ['Capture the trigger', 'Start from a customer enquiry, document, invoice or recurring operational task.'],
    ['Connect the workflow', 'Bring your website, applications, spreadsheets and business data together.'],
    ['Automate with oversight', 'Use AI where it helps, with approvals and clear exception handling.'],
    ['Measure & improve', 'Review time saved, response quality and operational friction over time.'],
  ] },
  { title: 'Digital Growth Systems', short: 'Digital Growth', icon: TrendingUp, tag: 'Content & customer engagement systems', flow: 'GROWTH PIPELINE FLOW', capabilities: 'Content pipelines · Enquiry follow-ups · Conversion analytics', audience: 'Creators · Technical brands · Local businesses', description: 'Structured content workflows, follow-ups and digital visibility systems built to earn trust consistently.', note: 'Built for steady credibility and real conversations, not overnight promises.', steps: [
    ['Identify buyer questions', 'Turn real customer questions and proof projects into focused content themes.'],
    ['Organize publishing', 'Connect scripts, assets, landing pages and calls to action in a repeatable flow.'],
    ['Follow up thoughtfully', 'Route interested visitors into timely, relevant follow-ups without spam.'],
    ['Track real enquiries', 'Measure qualified conversations and retention instead of empty vanity metrics.'],
  ] },
];

export function BusinessSolutions() {
  const { requestConversation } = useAccount();
  const [selected, setSelected] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const service = services[selected];
  const select = (index: number) => setSelected((index + services.length) % services.length);
  useEffect(() => {
    const viewport = track.current;
    const card = cards.current[selected];
    if (!viewport || !card) return;
    viewport.scrollTo({ left: card.offsetLeft - viewport.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, [selected]);
  return <section id="solutions" className="business-solutions business-cinematic-screen solutions-showcase" aria-labelledby="business-solutions-heading">
    <div className="business-cinema-backdrop" aria-hidden="true"><img src="/images/business-world-enhanced.webp" alt="" width="1858" height="846" loading="lazy" decoding="async" /></div>
    <div className="container">
      <div className="solutions-scene-header">
        <div><span className="business-solutions-eyebrow">DIGITAL &amp; AI SOLUTIONS · FOR BUSINESSES &amp; TEAMS</span>
          <h2 id="business-solutions-heading">Less repetitive work. <span>More room to grow.</span></h2></div>
        <div className="solutions-talk"><button type="button" onClick={() => requestConversation({ kind: 'business', topic: service.title })}><MessageCircle size={21} aria-hidden="true" />Talk to Us · {service.short}<ArrowUpRight size={21} aria-hidden="true" /></button><span>Let’s explore your project together.</span></div>
      </div>
      <div className="solutions-carousel" role="region" aria-label="Explore digital services">
        <button type="button" className="solutions-carousel-arrow previous" aria-label="Previous service" onClick={() => select(selected - 1)}><ArrowLeft /></button>
        <div className="solutions-card-track" ref={track}>
          {services.map((item, index) => { const Icon = item.icon; return <button key={item.title} ref={node => { cards.current[index] = node; }} type="button" className="solution-choice" aria-pressed={index === selected} aria-controls="solution-explanation" onClick={() => select(index)} onKeyDown={event => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? services.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + services.length) % services.length;
            select(next); cards.current[next]?.focus({ preventScroll: true });
          }}>
            <span className="solution-choice-top"><span className="solution-icon"><Icon size={23} /></span><span>0{index + 1}</span><small>{index === selected ? 'Selected' : 'Click to view'}</small></span>
            <span className="solution-tag">{item.tag}</span><strong>{item.title}</strong><span className="solution-preview">{item.description}</span><span className="solution-audience">{item.audience}</span>
          </button>; })}
        </div>
        <button type="button" className="solutions-carousel-arrow next" aria-label="Next service" onClick={() => select(selected + 1)}><ArrowRight /></button>
      </div>
      <div id="solution-explanation" className="solution-explanation" aria-label={service.title + ' delivery approach'}>
        <div className="solution-detail-heading"><span>0{selected + 1} / {service.flow}</span><h3>{service.title}</h3><p>{service.capabilities}</p><small>Ideal for: {service.audience}</small></div>
        <p className="solution-detail-description">{service.description}</p>
        <ol className="solution-delivery-steps" key={service.title}>{service.steps.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><div><h4>{title}</h4><p>{description}</p></div></li>)}</ol>
        <div className="solution-detail-footer"><p><Check size={19} aria-hidden="true" />{service.note}</p><div><button type="button" onClick={() => select(selected - 1)}><ArrowLeft size={17} />{services[(selected + 4) % 5].short}</button><button type="button" onClick={() => select(selected + 1)}>Next: {services[(selected + 1) % 5].short}<ArrowRight size={17} /></button></div></div>
      </div>
    </div>
  </section>;
}