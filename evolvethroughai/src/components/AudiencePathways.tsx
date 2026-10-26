import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { ArrowUpRight } from 'lucide-react';
const pathways = [
  { audience: 1, number: '01', label: 'FRESHERS & EARLY-CAREER ENGINEERS', title: 'Start with understanding.', copy: 'Your first step is not knowing every tool. It is learning how software, systems and delivery fit together.', steps: ['Build your foundations', 'Make and explain your projects', 'Connect the engineering workflow'], action: 'Find your starting point' },
  { audience: 0, number: '02', label: 'WORKING PROFESSIONALS', title: 'Build on what you know.', copy: 'Bring your experience. Connect it to cloud, automation and AI-assisted ways of working, with engineering judgement at the centre.', steps: ['Map your existing experience', 'Extend your cloud and delivery skills', 'Explore AI assistance with human review'], action: 'Explore your next chapter' },
];
export function AudiencePathways({ onChooseAudience }: { onChooseAudience: (index: number) => void }) {
  const reduced = useReducedMotion();
  return <section className="container immersive-pathways" aria-labelledby="pathway-heading"><div className="pathway-introduction"><span className="mini-label">YOUR EXPERIENCE IS THE STARTING POINT</span><h2 id="pathway-heading">One ambition.<br /><em>Two starting points.</em></h2><p>Begin where you are. Build the skills and understanding to move forward.</p></div><div className="pathway-editorials">{pathways.map((item, index) => <m.article key={item.audience} className="pathway-editorial" initial={false} whileInView={reduced ? undefined : { borderTopColor: ['#526681', '#759cd5'] }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6, delay: index * .08 }}><div className="pathway-kicker"><span>{item.number}</span><span>{item.label}</span></div><h3>{item.title}</h3><p>{item.copy}</p><ol>{item.steps.map((step,i)=><li key={step}><span aria-hidden="true">0{i+1}</span>{step}</li>)}</ol><a href="#path" onClick={()=>onChooseAudience(item.audience)}>{item.action}<ArrowUpRight size={18} aria-hidden="true" /></a></m.article>)}</div></section>;
}
