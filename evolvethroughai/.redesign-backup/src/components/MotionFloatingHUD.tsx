import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { 
  ArrowUp, 
  Layers, 
  BookOpen, 
  Sparkles, 
  X, 
  ChevronRight,
  Activity,
  Cpu,
  Cloud
} from 'lucide-react';

interface MotionFloatingHUDProps {
  onOpenSyllabusModal: (programId: string) => void;
  onOpenApply: () => void;
}

export const MotionFloatingHUD: React.FC<MotionFloatingHUDProps> = ({
  onOpenSyllabusModal,
  onOpenApply
}) => {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribeScroll = scrollY.on('change', (latest) => {
      setIsVisible(latest > 180);
    });
    const unsubscribeProgress = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScroll();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const programs = [
    { id: 'flagship', name: 'Masterclass', desc: '18 Modules • Multi-Cloud & AI', badge: 'Flagship', color: 'text-cyan-400 border-cyan-500/40' },
    { id: 'azure', name: 'Azure DevOps', desc: '8 Modules • Landing Zones & AKS', badge: 'Specialist', color: 'text-blue-400 border-blue-500/40' },
    { id: 'aws', name: 'AWS DevOps', desc: '8 Modules • Control Tower & EKS', badge: 'Specialist', color: 'text-amber-400 border-amber-500/40' },
    { id: 'forward-ai', name: 'Forward Deployed AI', desc: '8 Modules • vLLM & Agent Swarms', badge: 'Deep Tech', color: 'text-teal-400 border-teal-500/40' },
    { id: 'career-defense', name: 'Career & Guidance', desc: '6 Modules • SRE Defense & Portfolios', badge: 'Career', color: 'text-violet-400 border-violet-500/40' },
  ];

  return (
    <>
      {/* Top Kinetic Reading Beam */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 origin-left z-[70] shadow-[0_0_12px_rgba(6,182,212,0.8)] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Kinetic HUD / Command Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end gap-2"
          >
            {/* Quick Syllabi Popover Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-80 p-3.5 rounded-2xl bg-[#090e1f]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex flex-col gap-2 text-white mb-2"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 px-1">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span className="font-tech font-bold text-xs uppercase tracking-wider text-slate-200">
                        Select Program Syllabus
                      </span>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-1.5 max-h-72 overflow-y-auto custom-scrollbar pr-1">
                    {programs.map((p) => (
                      <motion.button
                        key={p.id}
                        whileHover={{ x: 3, backgroundColor: 'rgba(255,255,255,0.06)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          onOpenSyllabusModal(p.id);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left p-2.5 rounded-xl border border-white/5 hover:border-cyan-500/30 bg-slate-950/60 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-tech font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                              {p.name}
                            </span>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono border ${p.color}`}>
                              {p.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {p.desc}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </motion.button>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                    <span>Evolve Through AI Engine</span>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenApply();
                      }}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                    >
                      Apply Now →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Kinetic Command Floating Bar */}
            <motion.div
              layout
              className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#080d1f]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
              {/* Circular Scroll Progress Ring */}
              <div 
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/80 cursor-pointer"
                onClick={scrollToTop}
                title="Scroll percentage (Click to return to top)"
              >
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-cyan-400"
                    strokeDasharray={`${scrollPercent}, 100`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[9px] font-mono font-bold text-cyan-300">
                  {scrollPercent}
                </span>
              </div>

              {/* 5 Syllabi Quick Opener Pill */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isMenuOpen
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.6)]'
                    : 'bg-cyan-950/80 text-cyan-300 hover:bg-cyan-900/90 border border-cyan-500/40'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>5 Syllabi</span>
              </motion.button>

              {/* Apply Fast Link */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenApply}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md flex items-center gap-1 cursor-pointer"
              >
                <span>Apply</span>
              </motion.button>

              {/* Top Jump Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                title="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
