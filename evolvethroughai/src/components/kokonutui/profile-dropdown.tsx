/** Adapted from Kokonut UI Profile Dropdown v2 (MIT), @dorianbaffier. */
import { lazy, Suspense, useEffect, useId, useRef, useState } from 'react';
import { User, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import type { ProfileDropdownProps } from './profile-dropdown-auth';
export type { ProfileDropdownProps, Account, ProfileMenuItem } from './profile-dropdown-auth';
const AuthenticatedProfileDropdown = lazy(() => import('./profile-dropdown-auth'));
/** Anonymous state: no demo identity, billing or fake sign-out action. */
function VisitorAccountMenu({ onLogin, items = [], className }: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  useEffect(() => { if (!open) return; const key = (e: globalThis.KeyboardEvent) => { if(e.key === 'Escape'){setOpen(false);trigger.current?.focus();} }; const outside = (e: globalThis.PointerEvent) => { if(e.target instanceof Node && !root.current?.contains(e.target))setOpen(false); }; document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside);}; },[open]);
  return <div className={cn('visitor-account',className)} ref={root}><button ref={trigger} type="button" className="portal-control visitor-account__trigger" aria-expanded={open} aria-controls={menuId} onClick={()=>setOpen(v=>!v)}><User size={18} aria-hidden="true" /><span>Login</span><ChevronRight size={13} aria-hidden="true" /></button>{open && <div className="visitor-account__panel" id={menuId}><div className="visitor-account__intro"><strong>Your learning account</strong><p>You are browsing as a visitor.</p></div>{onLogin && <button type="button" onClick={()=>{setOpen(false);onLogin();}}><User size={16} aria-hidden="true" />Subscriber portal<ChevronRight size={14} aria-hidden="true" /></button>}{items.map(item=>item.href ? <a key={item.label} href={item.href} onClick={()=>setOpen(false)}>{item.icon}{item.label}</a> : item.onSelect ? <button key={item.label} type="button" onClick={()=>{setOpen(false);item.onSelect?.();}}>{item.icon}{item.label}</button> : null)}<p className="visitor-account__note">Login and subscription management require a connected portal.</p></div>}</div>;
}

export default function ProfileDropdown(props: ProfileDropdownProps) { return props.accounts?.length ? <Suspense fallback={<span role="status">Loading account…</span>}><AuthenticatedProfileDropdown {...props} /></Suspense> : <VisitorAccountMenu {...props} />; }
