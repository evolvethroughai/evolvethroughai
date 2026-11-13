import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/** Ease wheel input without transforming the page or replacing touch scrolling. */
export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let scroll: Lenis | undefined;
    const configure = () => {
      scroll?.destroy();
      scroll = undefined;
      if (preference.matches) return;
      scroll = new Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -(document.querySelector('header')?.getBoundingClientRect().height ?? 80) - 12 },
        prevent: node => Boolean(node.closest('dialog, [role="dialog"], .project-list, .action-search-results, [data-lenis-prevent]')),
      });
    };
    const releaseKeyboard = (event: KeyboardEvent) => {
      if (['PageDown', 'PageUp', 'Home', 'End', 'ArrowDown', 'ArrowUp', ' '].includes(event.key)) {
        scroll?.scrollTo(window.scrollY, { immediate: true });
      }
    };
    window.addEventListener('keydown', releaseKeyboard, true);
    const syncDialogs = () => {
      if (document.querySelector('dialog[open]')) scroll?.stop();
      else scroll?.start();
    };
    document.addEventListener('toggle', syncDialogs, true);
    configure();
    syncDialogs();
    preference.addEventListener('change', configure);
    return () => {
      document.removeEventListener('toggle', syncDialogs, true);
      window.removeEventListener('keydown', releaseKeyboard, true);
      preference.removeEventListener('change', configure);
      scroll?.destroy();
    };
  }, []);
  return null;
}