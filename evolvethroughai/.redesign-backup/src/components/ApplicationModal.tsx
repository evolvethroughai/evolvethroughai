import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [trajectory, setTrajectory] = useState('pro');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setGithub('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#090e1c]/95 shadow-2xl border border-cyan-500/40 text-white flex flex-col gap-6 max-h-[90vh] overflow-y-auto backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-6 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-tech font-bold text-2xl text-white">
                  Application Received for Architecture Review
                </h3>
                <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your profile has been queued for evaluation. A Staff Engineering mentor will review your background and respond within 24 hours.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 max-w-md w-full text-left space-y-1">
                  <div>Confirmation ID: ETA-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>Track: {trajectory === 'pro' ? 'Working Professional' : 'Early-Career / Systems Foundation'}</div>
                  <div className="text-emerald-400">Status: In Review by Admissions Committee</div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all"
                >
                  Return to Overview
                </button>
              </div>
            ) : (
              <>
                {/* Modal Header */}
                <div className="flex flex-col gap-1.5 pr-8">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    <span>Admissions Committee • Cohort 05</span>
                  </div>
                  <h3 className="font-tech font-bold text-2xl text-white">
                    Apply for Architecture Review
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Strict enrollment caps ensure 1-on-1 oral RFC defense and personalized code reviews for every engineer.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-300 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-300 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@enterprise.com"
                        className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-300 font-medium">
                        GitHub / LinkedIn Profile
                      </label>
                      <input
                        type="text"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        placeholder="github.com/username"
                        className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-300 font-medium">
                      Select Your Target Trajectory *
                    </label>
                    <select
                      value={trajectory}
                      onChange={(e) => setTrajectory(e.target.value)}
                      className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400"
                    >
                      <option value="pro">Working Professional: DevOps/Cloud Modernize to Sovereign AI</option>
                      <option value="early">Early-Career &amp; Fresher: Zero to Production SRE</option>
                      <option value="azure">Azure Cloud &amp; DevOps Specialist</option>
                      <option value="aws">AWS Cloud &amp; Hyperscale Fleet Specialist</option>
                      <option value="forward-ai">Forward Deployed Applied AI &amp; MCP Agent Swarms</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-300 font-medium">
                      Current Engineering Background &amp; Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about your current technical stack and what you want to build or evolve into..."
                      className="px-3.5 py-2 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all font-sans"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-tech font-bold text-sm shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-cyan-400/30"
                    >
                      {submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Architecture Candidacy</span>
                          <ArrowRight className="w-4 h-4 text-cyan-200" />
                        </>
                      )}
                    </motion.button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Your information is held in strict zero-trust confidentiality.</span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
