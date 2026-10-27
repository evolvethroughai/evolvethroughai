import { EvolveIcon } from './EvolveIcon';
import type { ReactNode } from 'react';
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { useAccount } from '../auth/ConversationAccess';

export function SiteFooter({ onEnquire, brand }: { onEnquire: () => void; brand: ReactNode }) {
  const { user } = useAccount();
  return <footer className="site-footer" id="footer"><div className="container">
    <div className="footer-invitation"><div><div className="eyebrow"><Sparkles size={15} aria-hidden="true" /> YOUR NEXT CHAPTER</div><h2>Good things start<br />with <em>building.</em></h2><p>Bring your curiosity. We’ll help you explore your next step.</p></div><div className="footer-invitation-actions"><button className="button footer-primary" onClick={onEnquire}>{user ? 'Start a conversation' : 'Login to start a conversation'} <ArrowUpRight size={20} aria-hidden="true" /></button></div></div>
    <div className="footer-directory"><div className="footer-brand" id="about">{brand}<p>Practical engineering education.<br />AI-powered business solutions.</p><span className="footer-brand-tagline">Technology · Innovation · Solutions</span></div><nav className="footer-column" aria-label="Learning links"><span className="mini-label">LEARN & BUILD</span><a href="?pathway=masterclass">The masterclass <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#curriculum">All 18 modules <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#projects">Projects & capstone <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#path">Find your starting point <ArrowUpRight size={13} aria-hidden="true" /></a></nav><nav className="footer-column" aria-label="Company links"><span className="mini-label">KEEP EVOLVING</span><a href="#experience">The engineering lifecycle <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#about">Our story <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#enquire">Fees & program enquiries <ArrowUpRight size={13} aria-hidden="true" /></a><button onClick={onEnquire}>{user ? 'Start a conversation' : 'Login to start a conversation'} <ArrowUpRight size={13} aria-hidden="true" /></button></nav></div>
    <div className="footer-signature brand-signoff"><span>Learn. Build. Evolve.</span><EvolveIcon className="footer-evolve-icon" animated aria-hidden="true" /></div>
    <div className="footer-end"><span>© {new Date().getFullYear()} Evolve Through AI</span><span>Learn. Build. Evolve.</span><a href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a></div>
  </div></footer>;
}
