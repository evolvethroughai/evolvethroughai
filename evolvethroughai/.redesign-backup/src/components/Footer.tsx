import React, { useState } from 'react';
import { Terminal, Shield, ArrowUpRight, Sparkles, Send, CheckCircle2, BookOpen } from 'lucide-react';
import { ContourFieldCanvas } from './ContourFieldCanvas';
import { CornerBrackets } from './CornerBrackets';
import { ChamferedButton } from './ChamferedButton';

interface FooterProps {
  onOpenApply: () => void;
  onExploreCurriculum: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply, onExploreCurriculum }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <footer className="relative w-full bg-[#02d2e3] p-2.5 sm:p-4 overflow-hidden">
      {/* Near-Black Panel Inset 16 inside the cyan edge (Creative Template Signature) */}
      <div className="relative w-full rounded-3xl bg-[#050811] text-slate-400 py-16 px-4 sm:px-8 lg:px-12 overflow-hidden shadow-2xl border border-white/10">
        
        {/* Procedural White/Cyan Contour Canvas rolling behind footer */}
        <ContourFieldCanvas color="rgba(255, 255, 255, 0.07)" lineScale={3.5} waveSpeed={1.0} />

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 ai-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-b from-blue-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
        {/* Pre-Footer Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0a1226] via-[#091530] to-[#0d162d] border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider justify-center lg:justify-start">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Stay Ahead of the AI Infrastructure Shift</span>
            </div>
            <h3 className="font-tech font-bold text-2xl sm:text-3xl text-white">
              Receive Our Weekly Sovereign Systems Dispatch
            </h3>
            <p className="text-slate-300 text-sm">
              Deep-dive breakdowns on vLLM benchmarks, eBPF telemetry architectures, Model Context Protocol tooling, and multi-cloud GitOps.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="engineer@enterprise.com"
              required
              className="px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono w-full sm:w-72"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap border border-cyan-400/30"
            >
              {isSubscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-cyan-200" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center text-white font-heading font-bold text-sm shadow-lg shadow-cyan-500/20">
                ETA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white">
                  Evolve Through AI
                </span>
                <span className="text-xs text-slate-400">
                  Technology • Innovation • Solutions
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              "Technology keeps evolving. People and organizations should evolve with it. Evolve Through AI makes that possible."
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>evolvethroughai.com</span>
            </div>
          </div>

          {/* 5 Pathways (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase font-semibold text-white tracking-wider">
              5 Engineering Pathways
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => scrollTo('curriculum-deep-dive')} className="hover:text-cyan-300 transition-colors text-left">
                  1. DevOps &amp; AI Masterclass (18 Modules)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-cyan-300 transition-colors text-left">
                  2. Azure DevOps &amp; Cloud Platform
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-cyan-300 transition-colors text-left">
                  3. AWS DevOps &amp; Hyperscale Fleet
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-cyan-300 transition-colors text-left">
                  4. Forward Deployed Applied AI
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pathways')} className="hover:text-cyan-300 transition-colors text-left">
                  5. Career &amp; RFC Technical Defense
                </button>
              </li>
            </ul>
          </div>

          {/* Three Horizons (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase font-semibold text-white tracking-wider">
              Three Horizons
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => scrollTo('horizons')} className="hover:text-cyan-300 transition-colors text-left">
                  Horizon 1: Systems Education
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-cyan-300 transition-colors text-left">
                  Horizon 2: Advisory Engineering
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('horizons')} className="hover:text-cyan-300 transition-colors text-left">
                  Horizon 3: Autonomous Tooling
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capstone-projects')} className="hover:text-cyan-300 transition-colors text-left">
                  14 Auditable Repositories
                </button>
              </li>
            </ul>
          </div>

          {/* Anti-Vaporware Pledge (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase font-semibold text-white tracking-wider">
              Anti-Vaporware Pledge
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Zero fake salary statistics, zero simulated web sandboxes, zero inflated claims.
              100% genuine engineering rigor, auditable code, and real architecture defense.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-2.5 text-xs text-cyan-300 font-mono">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Built for Enterprise Platform &amp; SRE Architects.</span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Evolve Through AI Inc. Technology • Innovation • Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-cyan-300 cursor-pointer">Charter Standards</span>
            <span>•</span>
            <span className="hover:text-cyan-300 cursor-pointer">Terms of Engagement</span>
            <span>•</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
