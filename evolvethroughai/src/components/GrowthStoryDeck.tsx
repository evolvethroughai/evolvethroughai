import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { growthAreas } from '../data/brandStory';
import './GrowthStoryDeck.css';
const details=[
 'Reflect on a challenge, identify a practical next step and turn an intention into a small, achievable action.',
 'Work through a technical brief, compare approaches and discuss the decisions behind a working solution.',
 'Review your starting point, map skill gaps and connect project evidence with your next professional conversation.',
 'Practise explaining your work, invite constructive feedback and recognise progress through what you can demonstrate.',
 'Present a technical decision, discuss trade-offs and practise clear, considerate team communication.',
 'Break a problem into testable questions, investigate evidence and review the result before choosing an approach.',
 'Understand a customer need, define a useful first version and consider how technology supports everyday operations.',
 'Explore AI applications, evaluation and human oversight alongside the engineering foundations they depend on.',
];
export function GrowthStoryDeck(){
 const [selected,setSelected]=useState(0),[expanded,setExpanded]=useState(false),[direction,setDirection]=useState('next');
 const select=(i:number)=>{if(i===selected)return;setDirection(i>selected?'next':'previous');setSelected(i);setExpanded(false);};const current=growthAreas[selected];const Icon=current.icon;
 return <div className="growth-deck"><div className="growth-deck-index"><span className="growth-deck-label">EIGHT WAYS TO KEEP EVOLVING</span><div className="growth-deck-topics" role="group" aria-label="Explore growth topics">{growthAreas.map((a,i)=><button key={a.title} type="button" aria-pressed={i===selected} aria-controls="growth-story-panel" onClick={()=>select(i)}><span className="growth-topic-number">0{i+1}</span><a.icon size={18} aria-hidden="true"/><span>{a.title}</span><ArrowUpRight className="growth-topic-arrow" size={15} aria-hidden="true"/></button>)}</div></div>
 <div className="growth-deck-scene"><div className="growth-deck-layer growth-deck-layer--back" aria-hidden="true"/><div className="growth-deck-layer growth-deck-layer--middle" aria-hidden="true"/>
 <article className="growth-deck-front" id="growth-story-panel" aria-labelledby="growth-story-title"><div className="growth-story-content" key={selected} data-direction={direction}><img className="growth-story-photo" src={selected%2?'/images/business-solutions-daylight.jpg':'/images/screen-02/workspace-light-991.webp'} alt="" width="991" height="793" decoding="async"/><div className="growth-story-wash"/>
 <div className="growth-story-top"><span className="growth-story-icon"><Icon size={25} aria-hidden="true"/></span><span>CHAPTER 0{selected+1}<span className="growth-story-total"> / 08</span></span><span className="growth-story-orbit" aria-hidden="true"/></div>
 <div className="growth-story-copy"><span className="growth-deck-label">BEYOND TECHNOLOGY. BUILDING PEOPLE.</span><h3 id="growth-story-title">{current.title}</h3><p>{current.text}</p><button className="growth-story-expand" type="button" aria-expanded={expanded} aria-controls="growth-story-detail" onClick={()=>setExpanded(v=>!v)}>{expanded?'Close this chapter':'Explore this chapter'}{expanded?<Minus size={17}/>:<Plus size={17}/>}</button><div id="growth-story-detail" className={'growth-story-detail'+(expanded?' is-open':'')} inert={!expanded}><div><p>{details[selected]}</p></div></div></div>
 </div><div className="growth-deck-footer"><span>Learn. Build. Evolve.</span><div><button type="button" aria-label="Previous growth chapter" onClick={()=>select((selected+7)%8)}><ArrowLeft size={18}/></button><button type="button" aria-label="Next growth chapter" onClick={()=>select((selected+1)%8)}><ArrowRight size={18}/></button></div></div></article>
 <p className="growth-deck-caption" aria-live="polite">0{selected+1} / 08 <span>{current.title}</span></p></div></div>;
}
