import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

export const AntiVaporwareSection: React.FC = () => {
  const comparisonItems = [
    {
      dimension: 'Salary & Career Claims',
      bootcamp: 'Fabricated "$250k placement guarantees" tied to restrictive income-share agreements and deceptive small-sample statistics.',
      evolve: 'Zero fake salary claims. We guarantee genuine, auditable technical competence proven under rigorous oral architecture review.'
    },
    {
      dimension: 'Computing Infrastructure',
      bootcamp: 'Simulated web-browser mock terminals with preset answer keys that wipe and reset whenever you reload the tab.',
      evolve: 'Real multi-cloud VPCs, bare-metal eBPF hooks, custom Linux kernels, and genuine GPU nodes managed via SSH & OpenTofu.'
    },
    {
      dimension: 'AI Engineering Depth',
      bootcamp: 'Toy 10-line Python wrapper scripts calling external closed-source OpenAI API keys with zero infrastructure comprehension.',
      evolve: 'Host, fine-tune, quantize, and serve open-weights models (vLLM, Ollama) on sovereign infrastructure with KV-cache tuning.'
    },
    {
      dimension: 'Mentorship & Evaluation',
      bootcamp: 'Pre-recorded video playlists with unresponsive community chatrooms and unmoderated peer grading.',
      evolve: 'Direct RFC reviews, line-by-line GitHub portfolio audits, and 1-on-1 oral technical defense with enterprise platform & SRE veterans.'
    }
  ];

  return (
    <section className="relative w-full bg-[#050811] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="anti-vaporware">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header with InView */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Radical Honesty &amp; Transparency</span>
          </div>
          <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-400 to-cyan-400">Anti-Vaporware Charter</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We reject the deceptive metrics rampant in modern technical education. Here is our unwavering promise
            to candidate engineers, working professionals, and enterprise sponsors.
          </p>
        </motion.div>

        {/* Desktop Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="hidden md:block w-full overflow-hidden rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-2xl backdrop-blur-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/80 border-b border-white/10 text-white font-tech">
                <th className="py-5 px-6 font-bold text-sm w-1/4">
                  Engineering Dimension
                </th>
                <th className="py-5 px-6 font-semibold text-sm w-3/8 text-slate-400">
                  Typical Bootcamps &amp; Vaporware Academies
                </th>
                <th className="py-5 px-6 font-bold text-sm w-3/8 text-cyan-300 bg-cyan-950/40 border-l border-white/5">
                  Evolve Through AI Engineering Flagship
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {comparisonItems.map((item, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 px-6 font-semibold text-white align-top font-tech">
                    {item.dimension}
                  </td>
                  <td className="py-5 px-6 text-slate-400 align-top leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item.bootcamp}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 font-medium text-cyan-200 bg-cyan-950/20 align-top leading-relaxed border-l border-white/5">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item.evolve}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden flex flex-col gap-6">
          {comparisonItems.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg flex flex-col gap-4"
            >
              <span className="font-tech font-bold text-base text-white">
                {item.dimension}
              </span>

              <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-cyan-200 leading-relaxed">
                  <strong>Evolve Through AI:</strong> {item.evolve}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong>Typical Bootcamps:</strong> {item.bootcamp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
