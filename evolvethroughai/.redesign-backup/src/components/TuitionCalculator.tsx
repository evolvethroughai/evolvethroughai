import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Cloud, 
  Bolt, 
  FileText, 
  Sparkles
} from 'lucide-react';

interface TuitionCalculatorProps {
  onOpenApply: () => void;
  onOpenCorporatePacket: () => void;
}

export const TuitionCalculator: React.FC<TuitionCalculatorProps> = ({
  onOpenApply,
  onOpenCorporatePacket
}) => {
  const [track, setTrack] = useState<'live' | 'self'>('live');
  const [installments, setInstallments] = useState<number>(1);
  const [isCorporate, setIsCorporate] = useState<boolean>(false);

  // Pricing calculations
  const basePrice = track === 'live' ? 1850 : 1250;
  const originalPrice = track === 'live' ? 2150 : 1500;
  const savings = originalPrice - basePrice;

  const monthlyPrice = Math.round(basePrice / installments);

  return (
    <section className="relative w-full bg-[#060a16] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="tuition-calculator">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header with InView */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Tuition &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Cohort Admission</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Strict cohort caps for individualized oral evaluation. Backed by our 30-day auditable code review guarantee.
          </p>
        </motion.div>

        {/* Interactive Pricing Card Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#080e22]/90 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Left Configuration Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Track Switcher */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase font-semibold text-cyan-300">
                1. Select Program Format
              </span>
              <div className="relative grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-950 border border-white/10">
                <button
                  onClick={() => setTrack('live')}
                  className={`relative py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center flex flex-col items-center justify-center gap-0.5 z-10 ${
                    track === 'live' ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {track === 'live' && (
                    <motion.div
                      layoutId="active-tuition-track"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>Live Executive Cohort 05</span>
                  <span className={`text-[10px] ${track === 'live' ? 'text-cyan-100' : 'text-slate-500'}`}>
                    Live Weekend Labs &amp; 1-on-1 Defense
                  </span>
                </button>

                <button
                  onClick={() => setTrack('self')}
                  className={`relative py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center flex flex-col items-center justify-center gap-0.5 z-10 ${
                    track === 'self' ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {track === 'self' && (
                    <motion.div
                      layoutId="active-tuition-track"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>Self-Paced Intensive</span>
                  <span className={`text-[10px] ${track === 'self' ? 'text-cyan-100' : 'text-slate-500'}`}>
                    Lifetime Access &amp; Async Review
                  </span>
                </button>
              </div>
            </div>

            {/* Installment Plan Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase font-semibold text-cyan-300">
                  2. Installment Schedule
                </span>
                <span className="text-xs text-cyan-400 font-semibold font-mono">
                  {installments === 1 ? '100% Upfront (0% Interest)' : `${installments} Monthly Payments (0% APR)`}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((count) => {
                  const isSelected = installments === count;
                  return (
                    <motion.button
                      key={count}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInstallments(count)}
                      className={`relative py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                        isSelected
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-400 shadow-lg shadow-cyan-500/20'
                          : 'bg-slate-950 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {count === 1 ? '1x Full' : `${count} Mo`}
                    </motion.button>
                  );
                })}
              </div>

              <span className="text-xs text-slate-400 italic mt-1 font-mono">
                {installments === 1
                  ? `Single upfront charge of $${basePrice.toLocaleString()}. Zero recurring fees.`
                  : `${installments} monthly installments of $${monthlyPrice.toLocaleString()}/mo. Cancel anytime.`}
              </span>
            </div>

            {/* Corporate Reimbursement Toggle */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-tech font-bold text-sm text-white">
                  Corporate L&amp;D Reimbursement Invoice
                </span>
                <span className="text-xs text-slate-300">
                  Generate pre-formatted syllabus packet &amp; employer business case documentation.
                </span>
              </div>

              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={isCorporate}
                  onChange={(e) => setIsCorporate(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
          </div>

          {/* Right Summary Column (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0c152e]/95 text-white flex flex-col justify-between gap-6 border border-cyan-500/40 shadow-2xl relative overflow-hidden glass-panel-card border-beam">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>ENROLLMENT TIER</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 font-semibold border border-cyan-500/40">
                  Cohort 05 • Caps Active
                </span>
              </div>

              {/* Price Display */}
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={installments === 1 ? basePrice : monthlyPrice}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="font-tech font-extrabold text-4xl sm:text-5xl text-white tracking-tight"
                    >
                      ${installments === 1 ? basePrice.toLocaleString() : monthlyPrice.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>

                  {installments === 1 && (
                    <span className="text-slate-500 line-through text-lg font-mono">
                      ${originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-slate-300 font-medium">
                    {installments === 1 ? '/ total' : `/ mo (${installments}x)`}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Includes ${savings} promotional launch deduction</span>
                </div>
              </div>

              {/* Value Inclusions */}
              <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>18 Complete Curriculum Modules (Bare-metal to vLLM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>14 Production Auditable GitHub Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>1-on-1 Oral RFC Defense with Staff SRE Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Multi-Cloud VPC &amp; GPU Testbed Credits Included</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 relative z-10">
              {isCorporate ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenCorporatePacket}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-tech font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Employer L&amp;D Packet</span>
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenApply}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-tech font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] border border-cyan-400/40"
                >
                  <Bolt className="w-4 h-4 text-cyan-200" />
                  <span>Lock In Rate + Apply for Cohort 05</span>
                </motion.button>
              )}

              {/* Trust Footnotes */}
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>30-Day Audit Guarantee</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VPC Credits Included</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
