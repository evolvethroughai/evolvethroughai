import { AccountButton } from '../auth/ConversationAccess';
import { SiteSearch } from './SiteSearch';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import './Header.css';

interface HeaderProps { onEnquire: () => void; }
interface NavigationItem { label: string; href: string; }
const navigation: readonly NavigationItem[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Experience', href: '#engineering-journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
];

export default function Header({ onEnquire }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = matchMedia('(min-width: 1101px)');
    const closeForDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); menuButtonRef.current?.focus({ preventScroll: true }); } };
    const onOutside = (event: PointerEvent) => { if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false); };
    desktop.addEventListener('change', closeForDesktop);
    document.addEventListener('keydown', onEscape);
    document.addEventListener('pointerdown', onOutside);
    closeForDesktop();
    return () => { desktop.removeEventListener('change', closeForDesktop); document.removeEventListener('keydown', onEscape); document.removeEventListener('pointerdown', onOutside); };
  }, [menuOpen]);

  const enquire = () => { setMenuOpen(false); onEnquire(); };
  return <>
    <header className={`header portal-header header-seamless header-floating header-aurora header-transparent-compact header-slim header-text-navigation header-scroll-shield${scrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="nav-wrap">
        <div className="header-brand-search"><BrandLogo tagline /></div>
        <nav id="main-navigation" aria-label="Main navigation" className={`portal-navigation public-site-navigation${menuOpen ? ' is-open' : ''}`}>
          {navigation.map(item=><a key={item.label} href={new URLSearchParams(location.search).has('pathway') ? './'+item.href : item.href} onClick={()=>setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <div className="portal-controls">
          <div className="portal-search"><SiteSearch /></div>
          <AccountButton />
          <button type="button" className="portal-control portal-control--primary" onClick={enquire}>Enquire<ArrowUpRight size={18} aria-hidden="true" /></button>
        </div>
        <button ref={menuButtonRef} type="button" className="icon-button portal-menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </header>

  </>;
}
