import { useEffect, useState } from 'react';
export const pathwaySlugs = ['masterclass', 'azure-cloud-devops', 'aws-cloud-devops', 'forward-deployed-ai', 'career-development'] as const;
const readPathway = () => {
  const value = new URLSearchParams(location.search).get('pathway');
  return value === null ? null : pathwaySlugs.findIndex(slug => slug === value);
};
/** Query routes survive refresh without requiring a hosting rewrite. */
export function usePathwayNavigation() {
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
      if (url.search === location.search) return;
      event.preventDefault();
      history.pushState(null,'',url);
      sync();
    };
    document.addEventListener('click',navigate);
    window.addEventListener('popstate',sync);
    return () => { document.removeEventListener('click',navigate); window.removeEventListener('popstate',sync); };
  }, []);
  useEffect(() => {
    const oldTitle = document.title;
    const frame = requestAnimationFrame(() => {
      const destination = document.getElementById(location.hash.slice(1));
      if (destination) destination.scrollIntoView({ behavior:'instant' });
      else window.scrollTo({top:0,behavior:'instant'});
      if (pathway !== null) {
        const heading = document.querySelector<HTMLElement>('.pathway-page h1');
        heading?.focus({preventScroll:true});
        document.title = (heading?.textContent ?? 'Learning pathway') + ' | Evolve Through AI';
      }
    });
    return () => { cancelAnimationFrame(frame); document.title = oldTitle; };
  }, [pathway]);
  return pathway;
}
