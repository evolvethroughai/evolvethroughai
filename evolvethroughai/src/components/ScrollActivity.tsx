import { useEffect } from 'react';
/** Pause nonessential CSS motion while scroll frames have priority. */
export function ScrollActivity() {
 useEffect(() => {
   let timer = 0;
   const root = document.documentElement;
   const setMoving = (moving: boolean) => {
     if (root.classList.contains('is-scroll-moving') === moving) return;
     root.classList.toggle('is-scroll-moving', moving);
     window.dispatchEvent(new Event('evolve:scroll-activity'));
   };
   const onScroll = () => {
     setMoving(true);
     window.clearTimeout(timer);
     timer = window.setTimeout(() => setMoving(false), 180);
   };
   window.addEventListener('scroll', onScroll, { passive: true });
   return () => { window.removeEventListener('scroll', onScroll); window.clearTimeout(timer); setMoving(false); };
 }, []);
 return null;
}