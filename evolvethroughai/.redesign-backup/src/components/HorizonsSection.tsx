import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Layers, ArrowRight, Building2, Wrench, Sparkles, Zap, Shield } from 'lucide-react';

interface HorizonsSectionProps {
  onExplorePrograms: () => void;
  onExploreAdvisory: () => void;
}

export const HorizonsSection: React.FC<HorizonsSectionProps> = ({
  onExplorePrograms,
  onExploreAdvisory
}) => {
  return (
    <section className="relative w-full bg-[#060a16] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="horizons">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header with InView reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Company Architecture &amp; Umbrella Vision</span>
          </div>
          <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            The Three Horizons of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Evolve Through AI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Practical systems engineering education is our high-trust launch vehicle. We are systematically building
            the engineering foundation, advisory footprint, and sovereign developer tooling of the AI era.
          </p>
        </motion.div>

        {/* 3 Horizon Cards with Staggered InView */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Horizon 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-900/70 border border-cyan-500/40 shadow-xl shadow-cyan-500/10 flex flex-col justify-between gap-6 relative overflow-hidden glass-panel-card group border-beam"
          >
            <div className="absolute top-0 right-0 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[11px] font-bold uppercase rounded-bl-2xl tracking-wider flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping"></span>
              <span>Horizon 01 • Active Now</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-1 shadow-inner">
                <Terminal className="w-7 h-7" />
              </div>
              <span className="font-mono text-xs uppercase font-semibold text-cyan-300 tracking-wider">
                Launch Vehicle • Systems Education
              </span>
              <h3 className="font-tech font-bold text-2xl text-white">
                Systems Education
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Hands-on systems mastery bridging Linux POSIX, Kubernetes, Multi-Cloud, and AI runtime engineering.
                Zero toy scripts; 14 fully auditable production repositories shipped to genuine cloud infrastructure.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col gap-0.5 text-xs font-mono">
                <span className="font-semibold text-cyan-200">Primary Offering: Flagship Masterclass</span>
                <span className="text-slate-400">18 Modules, 14 Repos, Live Capstone Defense</span>
              </div>
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
              >
                <span>Inspect 5 Pathways</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Horizon 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 shadow-lg flex flex-col justify-between gap-6 glass-panel-card hover:border-cyan-400/50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono tracking-wide uppercase">
                Horizon 02 • Scaling
              </span>
              <span className="text-xs text-slate-400 font-mono">Enterprise Advisory</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-1 shadow-inner">
                <Layers className="w-7 h-7" />
              </div>
              <span className="font-mono text-xs uppercase font-semibold text-blue-400 tracking-wider">
                Cloud &amp; AI Engineering Advisory
              </span>
              <h3 className="font-tech font-bold text-2xl text-white">
                Engineering Advisory
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Direct advisory and forward-deployed engineering helping mid-market and enterprise organizations
                stand up private GPU clusters, eBPF telemetry networks, and sovereign model inference fabrics.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col gap-0.5 text-xs font-mono">
                <span className="font-semibold text-blue-300">Focus: Sovereign Cloud Infrastructure</span>
                <span className="text-slate-400">GPU cost reduction &amp; private LLM serving</span>
              </div>
              <button
                onClick={onExploreAdvisory}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
              >
                <span>View Solutions &amp; Scopes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Horizon 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 shadow-lg flex flex-col justify-between gap-6 glass-panel-card hover:border-violet-400/50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-[11px] font-mono tracking-wide uppercase">
                Horizon 03 • Future Sovereignty
              </span>
              <span className="text-xs text-slate-400 font-mono">Autonomous Infra</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-1 shadow-inner">
                <Wrench className="w-7 h-7" />
              </div>
              <span className="font-mono text-xs uppercase font-semibold text-violet-400 tracking-wider">
                Developer Tooling &amp; Products
              </span>
              <h3 className="font-tech font-bold text-2xl text-white">
                Autonomous Products
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Proprietary runtime tooling, sovereign telemetry consoles, and autonomous Model Context Protocol (MCP)
                execution gateways built to solve the real operational bottlenecks identified in Horizons 1 &amp; 2.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col gap-0.5 text-xs font-mono">
                <span className="font-semibold text-violet-300">Vision: Open-Core Systems Tooling</span>
                <span className="text-slate-400">Autonomous AIOps &amp; self-healing gateways</span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                In Active Architecture &amp; R&amp;D
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
