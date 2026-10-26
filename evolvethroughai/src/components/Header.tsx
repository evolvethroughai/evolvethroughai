import MorphicNavbar from './kokonutui/morphic-navbar';
import ProfileDropdown from './kokonutui/profile-dropdown';
import { SiteSearch } from './SiteSearch';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Download, Menu, UserRound, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { downloadCurriculum } from './SiteActions';
import './Header.css';

interface HeaderProps { onEnquire: () => void; portalHref?: string; }
interface NavigationItem { label: string; href: string; }
const navigation: readonly NavigationItem[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'The experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Our story', href: '#about' },
];

export default function Header({ onEnquire, portalHref }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const portalDialogRef = useRef<HTMLDialogElement>(null);
  const safePortalHref = portalHref && (/^https:\/\//i.test(portalHref) || /^\/(?!\/)/.test(portalHref)) ? portalHref : undefined;

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
    <header className="header portal-header header-separated" ref={headerRef}>
      <div className="nav-wrap">
        <div className="header-brand-search"><BrandLogo tagline /></div>
        <div id="main-navigation" className={`portal-navigation${menuOpen ? ' is-open' : ''}`} onClick={event=>{if((event.target as HTMLElement).closest('a'))setMenuOpen(false);}}><MorphicNavbar items={Object.fromEntries(navigation.map(item=>[item.href,{name:item.label}]))} defaultPath="#programs" compact={false} className="morphic-site-nav" /></div>
        <div className="portal-controls">
          <div className="portal-search"><SiteSearch /></div>
          <ProfileDropdown accounts={[]} onLogin={()=>{setMenuOpen(false);if(safePortalHref)window.location.assign(safePortalHref);else portalDialogRef.current?.showModal();}} items={[{label:'Explore learning programs',href:'#programs'},{label:'Download curriculum',icon:<Download size={16} />,onSelect:downloadCurriculum}]} />
          <button type="button" className="portal-control portal-control--primary" onClick={enquire}>Enquire<ArrowUpRight size={18} aria-hidden="true" /></button>
        </div>
        <button ref={menuButtonRef} type="button" className="icon-button portal-menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </header>
    <dialog ref={portalDialogRef} className="portal-access-dialog" aria-labelledby="portal-access-title" aria-describedby="portal-access-description" onClick={event => { if (event.target === event.currentTarget) portalDialogRef.current?.close(); }}>
      <button type="button" className="icon-button portal-dialog-close" aria-label="Close portal information" onClick={() => portalDialogRef.current?.close()}><X size={19} aria-hidden="true" /></button>
      <UserRound size={26} aria-hidden="true" />
      <h2 id="portal-access-title">Subscriber portal</h2>
      <p id="portal-access-description">Online portal access is not connected on this website yet. Login and subscription management are currently unavailable.</p>
      <button type="button" className="portal-control portal-control--primary" onClick={() => { portalDialogRef.current?.close(); enquire(); }}>Ask about the program<ArrowUpRight size={18} aria-hidden="true" /></button>
    </dialog>
  </>;
}
