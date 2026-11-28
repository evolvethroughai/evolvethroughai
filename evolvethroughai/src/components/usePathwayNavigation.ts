import { useAccount } from '../auth/ConversationAccess';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
export const pathwaySlugs = ['masterclass', 'azure-cloud-devops', 'aws-cloud-devops', 'forward-deployed-ai', 'career-development'] as const;
const readPathway = () => {
  const value = new URLSearchParams(location.search).get('pathway');
  return value === null ? null : pathwaySlugs.findIndex(slug => slug === value);
};
/** Query routes allow direct pathway links; main.tsx resets refreshes to home. */
export function usePathwayNavigation() {
  const {user,ready,requireLogin}=useAccount();
  const prompted=useRef<string|null>(null);
  const [pathway, setPathway] = useState<number | null>(readPathway);
  useEffect(() => {
    const sync = () => setPathway(readPathway());
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      const section = url.hash.slice(1);
      if (!url.search && ['curriculum','projects','experience','progression'].includes(section) && !document.getElementById(section)) url.searchParams.set('pathway','masterclass');
      if (['programs','path','engineering-journey','about','solutions'].includes(section) && !document.getElementById(section)) url.search = '';
      if (url.search === location.search && !(url.searchParams.has('pathway') && !user)) return;
      event.preventDefault();
      const navigateToTarget=()=>{history.pushState(null,'',url);sync();};
      if(url.searchParams.has('pathway')&&!user){event.stopImmediatePropagation();requireLogin(navigateToTarget);return;}
      navigateToTarget();
    };
    document.addEventListener('click',navigate,true);
    window.addEventListener('popstate',sync);
    return () => { document.removeEventListener('click',navigate,true); window.removeEventListener('popstate',sync); };
  }, [user]);
  useEffect(()=>{if(!ready)return;if(user){prompted.current=null;return;}if(pathway!==null){const key=location.search;if(prompted.current!==key){prompted.current=key;requireLogin(()=>setPathway(readPathway()));}}},[pathway,ready,user]);
  useEffect(() => {
    const oldTitle = document.title;
    const frame = requestAnimationFrame(() => {
      const destination = document.getElementById(location.hash.slice(1));
      if (destination) { const landing=destination.id==='programs'?destination.querySelector<HTMLElement>('.section-heading')??destination:destination; let top=0;let node:HTMLElement|null=landing;while(node){top+=node.offsetTop;node=node.offsetParent as HTMLElement|null;}const clearance=(document.querySelector('header')?.getBoundingClientRect().height??64)+24;window.scrollTo({top:Math.max(0,top-clearance),behavior:'instant'}); }
      else window.scrollTo({top:0,behavior:'instant'});
      if (pathway !== null) {
        const heading = document.querySelector<HTMLElement>('.pathway-page h1');
        heading?.focus({preventScroll:true});
        document.title = (heading?.textContent ?? 'Learning pathway') + ' | Evolve Through AI';
      }
    });
    return () => { cancelAnimationFrame(frame); document.title = oldTitle; };
  }, [pathway]);
  return user && ready ? pathway : null;
}
