import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/** Native wheel/touch scrolling, with controlled anchor and rope transitions. */
export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let scroll: Lenis | undefined;
    let scrollFrame = 0;
    const driveScroll = () => {
      cancelAnimationFrame(scrollFrame);
      const tick = (time: number) => {
        if (!scroll) return;
        scroll.raf(time);
        if (scroll.isScrolling) scrollFrame = requestAnimationFrame(tick);
      };
      scrollFrame = requestAnimationFrame(tick);
    };
    const configure = () => {
      scroll?.destroy();
      scroll = undefined;
      if (preference.matches) return;
      scroll = new Lenis({
        autoRaf: false,
        lerp: 0.14,
        smoothWheel: false,
        syncTouch: false,
        anchors: false,
        prevent: node => Boolean(node.closest('dialog, [role="dialog"], .project-list, .action-search-results, [data-lenis-prevent]')),
      });
    };
    // Share the measured sticky-header height with CSS and explicit anchor navigation.
    const header = document.querySelector('header');
    const syncHeader = () => document.documentElement.style.setProperty('--site-header-height', (header?.getBoundingClientRect().height ?? 64) + 'px');
    syncHeader();
    const headerObserver = new ResizeObserver(syncHeader);
    if (header) headerObserver.observe(header);
    const localAnchor = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || link.target || link.hasAttribute('download') || link.classList.contains('hero-path-card')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      let layoutTop = 0;
      let node: HTMLElement | null = target.id === 'programs' ? target.querySelector<HTMLElement>('.section-heading') ?? target : target;
      while (node) { layoutTop += node.offsetTop; node = node.offsetParent as HTMLElement | null; }
      const clearance = (header?.getBoundingClientRect().height ?? 64) + 16;
      const top = target.id === 'home' ? 0 : Math.max(0, layoutTop - clearance);
      if (location.hash !== url.hash) history.pushState(null, '', url.hash);
      if (scroll) { scroll.scrollTo(top, { duration: .65 }); driveScroll(); }
      else window.scrollTo({ top, behavior: 'instant' });
    };
    document.addEventListener('click', localAnchor, true);
    // Hero pathway cards land on the introduction copy, below the fixed header.
    const landOnIntroduction = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('.hero-path-card') : null;
      if (!link || link.target || !['#engineering-journey', '#business-introduction'].includes(link.hash)) return;
      const section = document.getElementById(link.hash.slice(1));
      const copy = section?.querySelector<HTMLElement>('.dual-track-card');
      if (!copy) return;
      event.preventDefault();
      event.stopPropagation();
      const transform = getComputedStyle(copy).transform;
      const revealShift = transform === 'none' ? 0 : new DOMMatrixReadOnly(transform).m42;
      const clearance = (document.querySelector('header')?.getBoundingClientRect().height ?? 64) + 16;
      const top = Math.max(0, copy.getBoundingClientRect().top + window.scrollY - revealShift - clearance);
      if (location.hash !== link.hash) history.pushState(null, '', link.hash);
      if (scroll) { scroll.scrollTo(top); driveScroll(); }
      else window.scrollTo({ top, behavior: 'instant' });
    };
    document.addEventListener('click', landOnIntroduction, true);
    const revealPrograms = (event: Event) => {
      const target = document.getElementById('programs');
      const onArrive = (event as CustomEvent<{ onArrive: () => void }>).detail.onArrive;
      if (!target) { onArrive(); return; }
      const heading = target.querySelector<HTMLElement>('.section-heading') ?? target;
      const clearance = (document.querySelector('header')?.getBoundingClientRect().bottom ?? 64) + 28;
      // Use layout coordinates: reveal transforms must not affect the destination.
      let layoutTop = 0;
      let node: HTMLElement | null = heading;
      while (node) { layoutTop += node.offsetTop; node = node.offsetParent as HTMLElement | null; }
      const top = Math.max(0, layoutTop - clearance);
      if (location.hash !== '#programs') history.pushState(null, '', '#programs');
      if (scroll) { scroll.scrollTo(top, { duration: .85, onComplete: onArrive }); driveScroll(); }
      else { window.scrollTo({ top, behavior: 'instant' }); onArrive(); }
    };    window.addEventListener('evolve:reveal-programs', revealPrograms);
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
      window.removeEventListener('evolve:reveal-programs', revealPrograms);
      document.removeEventListener('click', landOnIntroduction, true);
      document.removeEventListener('toggle', syncDialogs, true);
      window.removeEventListener('keydown', releaseKeyboard, true);
      preference.removeEventListener('change', configure);
      cancelAnimationFrame(scrollFrame);
      headerObserver.disconnect();
      document.removeEventListener('click', localAnchor, true);
      scroll?.destroy();
    };
  }, []);
  return null;
}