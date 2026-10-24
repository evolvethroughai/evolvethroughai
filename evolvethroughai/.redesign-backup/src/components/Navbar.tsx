import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  Layers, 
  Infinity as InfinityIcon, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Briefcase,
  Zap
} from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenCurriculum: () => void;
  onOpenSyllabusModal?: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenApply, 
  onOpenCurriculum,
  onOpenSyllabusModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#050811]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Group */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center text-white font-heading font-bold shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all">
            <span className="tracking-tight text-sm font-tech">ETA</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-white text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
                Evolve Through AI
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono tracking-wider uppercase">
                v4.2
              </span>
            </div>
            <span className="text-[12px] text-slate-400 font-medium">
              Technology • Innovation • Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-[13px] font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('pathways')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            5 Pathways
          </button>
          <button 
            onClick={() => {
              if (onOpenSyllabusModal) {
                onOpenSyllabusModal('flagship');
              } else {
                scrollTo('curriculum-deep-dive');
              }
            }}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>5 Syllabi</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold">ALL</span>
          </button>
          <button 
            onClick={() => scrollTo('capstone-projects')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            14 Projects & Capstone
          </button>
          <button 
            onClick={() => scrollTo('devops-loop')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            DevOps for AI
          </button>
          <button 
            onClick={() => scrollTo('anti-vaporware')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            Anti-Vaporware
          </button>
          <button 
            onClick={() => scrollTo('horizons')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            Vision Horizons
          </button>
          <button 
            onClick={() => scrollTo('solutions')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            Solutions
          </button>
        </nav>

        {/* Action Triggers */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('devops-loop')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 font-medium text-xs border border-white/10 transition-colors"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Architecture</span>
          </button>

          <button
            onClick={onOpenApply}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all border border-cyan-400/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
            </span>
            <span>Apply for Review</span>
            <span className="hidden md:inline text-cyan-200 text-[11px] font-mono">
              • Cohort 05
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-[#070c18]/95 backdrop-blur-2xl px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200 text-white">
          <button
            onClick={() => scrollTo('pathways')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>5 Engineering Pathways</span>
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => scrollTo('curriculum-deep-dive')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>All 18 Curriculum Modules</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold">18 Modules</span>
          </button>

          <button
            onClick={() => scrollTo('capstone-projects')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>14 Projects & Capstone</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">Auditable</span>
          </button>

          <button
            onClick={() => scrollTo('devops-loop')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <InfinityIcon className="w-4 h-4 text-cyan-400" />
              <span>DevOps for AI Infinity Loop</span>
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => scrollTo('anti-vaporware')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>The Anti-Vaporware Charter</span>
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => scrollTo('horizons')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Three Horizons Vision</span>
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => scrollTo('solutions')}
            className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-slate-200 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Technology & Advisory Solutions</span>
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollTo('tuition-calculator');
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl"
            >
              Tuition & Cohort Pricing
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              Apply for Architecture Review
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
