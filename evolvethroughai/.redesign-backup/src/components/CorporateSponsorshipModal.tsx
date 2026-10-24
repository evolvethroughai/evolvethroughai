import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Download, Building, Copy } from 'lucide-react';

interface CorporateSponsorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporateSponsorshipModal: React.FC<CorporateSponsorshipModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            className="relative z-10 w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#090e1c]/95 shadow-2xl border border-cyan-500/40 text-white flex flex-col gap-6 max-h-[90vh] overflow-y-auto backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col gap-1 pr-8">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <Building className="w-4 h-4 text-cyan-400" />
                <span>Employer L&amp;D Reimbursement Packet</span>
              </div>
              <h3 className="font-tech font-bold text-2xl text-white">
                Corporate Sponsorship Memorandum
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Pre-formatted documentation to submit directly to your Engineering Manager, HR Department, or L&amp;D Committee.
              </p>
            </div>

            {/* Memo Paper Container */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 font-mono text-xs text-slate-300 flex flex-col gap-4 shadow-inner">
              <div className="border-b border-white/10 pb-3 flex flex-col gap-1 text-slate-200">
                <div><strong className="text-cyan-400">TO:</strong> Engineering Leadership / Learning &amp; Development</div>
                <div><strong className="text-cyan-400">FROM:</strong> Candidate Engineer</div>
                <div><strong className="text-cyan-400">ORGANIZATION:</strong> Evolve Through AI Inc. (evolvethroughai.com)</div>
                <div><strong className="text-cyan-400">PROGRAM:</strong> Complete DevOps, Multi-Cloud &amp; AI Engineering Masterclass</div>
                <div><strong className="text-cyan-400">INVESTMENT:</strong> $1,850 USD (All-inclusive, 0% platform surcharge)</div>
              </div>

              <div className="flex flex-col gap-2 font-sans text-xs text-slate-300 leading-relaxed">
                <div className="font-bold text-cyan-300 font-mono">EXECUTIVE BUSINESS JUSTIFICATION:</div>
                <p>
                  This program bridges modern infrastructure engineering with sovereign AI operations.
                  Unlike theoretical video tutorials, this training is centered around 14 auditable production repositories
                  and an 8-stage enterprise capstone covering:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-slate-300">
                  <li>Multi-Cloud Infrastructure as Code (OpenTofu &amp; Terragrunt) reducing cloud waste.</li>
                  <li>Enterprise GitOps (ArgoCD &amp; AKS) automating continuous zero-downtime rollouts.</li>
                  <li>Software Supply-Chain Attestation (Sigstore Cosign, Trivy, SBOM) ensuring SOC2 compliance.</li>
                  <li>Sovereign AI Systems (vLLM &amp; Model Context Protocol) enabling private, low-cost internal LLM hosting without leaking company data.</li>
                </ul>

                <div className="font-bold text-cyan-300 font-mono pt-2">SCHEDULE &amp; COMMITMENT:</div>
                <p>
                  18 structured modules designed specifically for working engineers.
                  Live collaborative labs on weekends with asynchronous weekday execution, requiring zero conflict with daily sprint deliverables.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-semibold transition-colors cursor-pointer font-mono"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Memorandum Text'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.print();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer border border-cyan-400/30"
              >
                <Download className="w-4 h-4 text-cyan-200" />
                <span>Print / Save as PDF Packet</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
