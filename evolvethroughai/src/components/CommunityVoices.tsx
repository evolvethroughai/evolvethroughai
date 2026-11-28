import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Instagram, Linkedin, MessageCircle, Pause, Play, Quote, Send, Sparkles } from 'lucide-react';
import { communityReviews, illustrativeReviews } from '../data/brandStory';
import './CommunityVoices.css';
function PlatformIcon({platform}:{platform:string}){
 if(platform==='LinkedIn')return <Linkedin className="cv-linkedin" size={22} aria-hidden="true"/>;
 if(platform==='Instagram')return <Instagram className="cv-instagram" size={22} aria-hidden="true"/>;
 return <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.3c1.9-1.8 2.9-4.3 2.9-7.4Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.5c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.8-5.6-4.1H3v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9l3.4-2.6Z"/><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.6 9.6 0 0 0 12 2a10 10 0 0 0-9 5.5l3.4 2.6A6 6 0 0 1 12 6Z"/></svg>;
}
export function CommunityVoices({compact=false}:{compact?:boolean}){
 const preview=import.meta.env.DEV&&(compact||location.pathname.replace(/\/$/,'')==='/about'||new URLSearchParams(location.search).get('previewReviews')==='1');
 const reviews=preview?illustrativeReviews:communityReviews.filter(r=>r.verified&&r.permission&&!r.illustrative);
 const [selected,setSelected]=useState(0);const root=useRef<HTMLDivElement>(null);

 if(!reviews.length)return <div className="bj-community-note"><Sparkles aria-hidden="true"/><div><strong>Real people. Individual journeys.</strong><p>Approved community feedback will appear here with permission.</p></div></div>;
 const move=(direction:number)=>setSelected(i=>(i+direction+reviews.length)%reviews.length);
 return <div ref={root} className={'cv-showcase '+(compact?'cv-compact':'')} role="region" aria-label="Community story design previews" aria-roledescription="carousel">
 {preview&&<p className="cv-preview">Sample stories</p>}
 <div className="cv-stage">{reviews.map((review,i)=>{let offset=(i-selected+reviews.length)%reviews.length;if(offset>reviews.length/2)offset-=reviews.length;const active=offset===0;return <article key={review.name} className={'cv-card '+(active?'is-centre':'')} data-offset={offset} role="button" tabIndex={active?0:-1} aria-label={review.name+'. Story '+(i+1)+' of '+reviews.length+'. Activate for next story.'} onClick={()=>active?move(1):setSelected(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();active?move(1):setSelected(i);}}}>
 <Quote className="cv-watermark" size={190} aria-hidden="true"/><div className="cv-person"><span className="cv-avatar">{review.name.split(' ').map(n=>n[0]).join('')}</span><div><h4>{review.name}</h4><span>{review.role}</span></div></div>
 <div className="cv-platform"><PlatformIcon platform={review.platform}/><span>{review.platform}</span></div><blockquote>{review.quote}</blockquote>
 <div className="cv-card-bottom"><span aria-hidden="true"><Heart size={19}/><MessageCircle size={19}/><Send size={19}/></span>{review.url&&<a href={review.url} target="_blank" rel="noopener noreferrer">Read original review</a>}<span className="cv-count">0{i+1} / 0{reviews.length}</span></div><span className="cv-love" aria-hidden="true"><Heart size={18} fill="currentColor"/><Heart size={15} fill="currentColor"/></span>
 </article>;})}</div>
 <p className="cv-hint" aria-live="polite">Tap a card to explore the next story <span aria-hidden="true">·</span> {selected+1} of {reviews.length}</p>
 </div>;
}
