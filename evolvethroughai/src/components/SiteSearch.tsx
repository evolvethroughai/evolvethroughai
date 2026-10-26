import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Search, X, BookOpen, Layers, Workflow } from 'lucide-react';
import type { CommandItem } from './kokonutui/action-search-bar';
const ActionSearchBar = lazy(() => import('./kokonutui/action-search-bar'));
import { modules, projects } from '../data/websiteContent';
const items: CommandItem[] = [
  { id: 'programs', label: 'Learning programs', href: '#programs', icon: <BookOpen size={16} />, group: 'Explore' },
  { id: 'journey', label: 'From curiosity to capability', href: '#engineering-journey', icon: <Workflow size={16} />, group: 'Explore' },
  { id: 'curriculum', label: 'Curriculum — all 18 modules', href: '#curriculum', group: 'Explore', children: modules.map(item=>({ id: 'module-'+item.number, label: item.title, href: '#curriculum', keywords: [...item.topics], group: 'Modules' })) },
  { id: 'projects', label: 'Learning projects', href: '#projects', icon: <Layers size={16} />, group: 'Explore', children: projects.map((item,index)=>({id:'project-'+index,label:item.title,href:'#projects',keywords:[...item.tools],group:'Projects'})) },
  { id: 'about', label: 'Our story', href: '#about', group: 'Explore' },
];
export function SiteSearch() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{const key=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(dialog.current?.open)dialog.current.close();else { setLoaded(true); dialog.current?.showModal(); }}};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);},[]);
  const select=(item:CommandItem)=>{if(!item.href)return;dialog.current?.close();const target=document.getElementById(item.href.slice(1));target?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});history.replaceState(null,'',item.href);window.dispatchEvent(new HashChangeEvent('hashchange'));};
  return <><button type="button" className="header-search-button" aria-label="Search website and curriculum" aria-haspopup="dialog" title="Search (Ctrl/⌘ K)" onClick={()=>{setLoaded(true);dialog.current?.showModal();}}><Search size={17} aria-hidden="true" /><span>Search</span><kbd>⌘K</kbd></button><dialog ref={dialog} className="site-command-dialog" aria-label="Search website and curriculum" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}><div className="site-command-top"><span>FIND YOUR NEXT STEP</span><button type="button" className="icon-button" aria-label="Close search" onClick={()=>dialog.current?.close()}><X size={18} /></button></div>{loaded && <Suspense fallback={<p role="status">Loading search…</p>}><ActionSearchBar items={items} defaultOpen shortcut={false} label="Search programs, modules and projects" placeholder="Search programs, skills, projects…" onSelect={select} className="site-command-palette" /></Suspense>}</dialog></>;
}
