import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEVOPS_LOOP_STAGES } from '../data/curriculumData';
import { 
  Infinity as InfinityIcon, 
  Cpu, 
  Activity, 
  Network, 
  ShieldCheck, 
  Bot, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const DevOpsAiLoopSection: React.FC = () => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance loop stage if user hasn't paused
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSelectedStageIdx((prev) => (prev + 1) % DEVOPS_LOOP_STAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeStage = DEVOPS_LOOP_STAGES[selectedStageIdx];

  return (
    <section 
      className="w-full bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-y border-white/10 relative overflow-hidden" 
      id="devops-loop"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header with InView */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono-code">
              <InfinityIcon className="w-4 h-4" />
              <span>Core Architectural Concept</span>
            </div>
            <h2 className="font-tech font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              DevOps is the Operational Runtime for AI
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              AI models without robust systems engineering are fragile laboratory toys. The modern infinity loop links
              continuous delivery directly into autonomous LLM feedback loops and GPU telemetry.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-cyan-300 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-xl self-start md:self-auto backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Continuous Delivery &amp; Self-Supervised Feedback</span>
          </div>
        </motion.div>

        {/* Interactive Infinity Loop Canvas Box (ui-ux-pro-max Glass Panel) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-10 rounded-3xl glass-panel shadow-2xl backdrop-blur-2xl flex flex-col gap-10 glass-specular"
        >
          {/* Infinity Loop SVG Visualization with Animated Flow */}
          <div className="w-full flex flex-col items-center justify-center relative">
            <div className="w-full max-w-4xl relative">
              <svg className="w-full h-48 sm:h-64" viewBox="0 0 800 280" fill="none">
                <defs>
                  <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>

                  <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base Grey Flow Track */}
                <path
                  d="M 220 140 C 220 60, 70 60, 70 140 C 70 220, 220 220, 400 140 C 580 60, 730 60, 730 140 C 730 220, 580 220, 400 140 Z"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Active Animated Dash Flow Track */}
                <path
                  className="animate-loop-flow"
                  d="M 220 140 C 220 60, 70 60, 70 140 C 70 220, 220 220, 400 140 C 580 60, 730 60, 730 140 C 730 220, 580 220, 400 140 Z"
                  stroke="url(#infinity-gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Ambient Soft Glow Behind Nexus */}
                <circle cx="400" cy="140" r="48" fill="#7d4ce7" opacity="0.25" filter="url(#glow-filter)" />

                {/* Left Node: DEV / Systems */}
                <circle cx="145" cy="140" r="38" fill="#080c16" stroke="#2563eb" strokeWidth="2.5" />
                <text x="145" y="136" textAnchor="middle" fill="#ffffff" fontFamily="Inter" fontSize="13" fontWeight="700">
                  DEV
                </text>
                <text x="145" y="152" textAnchor="middle" fill="#93c5fd" fontFamily="Inter" fontSize="9">
                  Code • Build • Sec
                </text>

                {/* Center Node: AI Convergence Nexus */}
                <circle cx="400" cy="140" r="28" fill="#7d4ce7" filter="drop-shadow(0 0 16px rgba(125,76,231,0.8))" />
                <circle cx="400" cy="140" r="10" fill="#ffffff" opacity="0.95" className="animate-pulse" />
                <text x="400" y="144" textAnchor="middle" fill="#2e1065" fontFamily="Inter" fontSize="11" fontWeight="800">
                  AI
                </text>

                {/* Right Node: OPS / Fleet */}
                <circle cx="655" cy="140" r="38" fill="#080c16" stroke="#06b6d4" strokeWidth="2.5" />
                <text x="655" y="136" textAnchor="middle" fill="#ffffff" fontFamily="Inter" fontSize="13" fontWeight="700">
                  OPS
                </text>
                <text x="655" y="152" textAnchor="middle" fill="#67e8f9" fontFamily="Inter" fontSize="9">
                  Argo • Telemetry
                </text>
              </svg>

              {/* Center Nexus Pill Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 pointer-events-none text-center">
                <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-400 text-cyan-300 font-mono-code text-[11px] font-bold uppercase shadow-xl backdrop-blur-xl">
                  Convergence: Autonomous AI Runtime
                </span>
              </div>
            </div>

            {/* 8-Stage Interactive Selector Buttons Grid with Spring Feedback */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 w-full mt-6">
              {DEVOPS_LOOP_STAGES.map((stage, idx) => {
                const isSelected = selectedStageIdx === idx;
                return (
                  <motion.button
                    key={stage.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedStageIdx(idx)}
                    className={`relative p-3 rounded-xl text-left transition-all flex flex-col gap-1 border ${
                      isSelected
                        ? 'bg-blue-600/30 border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900/80 border-white/5 hover:border-white/20 text-slate-300'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-loop-pill"
                        className="absolute inset-0 border-2 border-cyan-400 rounded-xl pointer-events-none shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono-code font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {stage.stepNumber}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-white truncate font-tech">
                      {stage.shortName}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate">
                      {stage.toolchain.split('•')[0]}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Deep-Dive Inspector Box with AnimatePresence */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-col lg:flex-row items-start justify-between gap-6 backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2 max-w-2xl"
              >
                <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>STAGE {activeStage.stepNumber}: {activeStage.title.toUpperCase()}</span>
                </div>
                <h3 className="font-tech font-bold text-xl sm:text-2xl text-white">
                  {activeStage.shortName} ({activeStage.toolchain})
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeStage.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-mono-code text-slate-400">Auditable Artifact:</span>
                  <span className="text-xs font-mono-code text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800">
                    {activeStage.keyArtifact}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStage.id + '-ai'}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl bg-slate-900 border border-white/10 min-w-full lg:min-w-[340px] flex flex-col gap-1.5 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono-code">
                  <span>AI Additive Vector</span>
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
                <span className="text-sm font-bold text-violet-300 font-tech">
                  {activeStage.aiAdditive}
                </span>
                <p className="text-xs text-slate-400 leading-normal">
                  {activeStage.aiDetail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Additive Sovereign AI Operational Vectors */}
          <div className="flex flex-col gap-4 pt-2">
            <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400 font-semibold">
              4 Sovereign AI Additive Vectors
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col gap-2 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-mono-code text-xs">
                  <Cpu className="w-4 h-4" />
                  <span>vRAM &amp; GPU Scheduling</span>
                </div>
                <h4 className="font-tech font-bold text-white text-sm">PagedAttention &amp; vLLM</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Moving beyond basic CPU metrics to VRAM KV-cache occupancy and dynamic GPU node autoscaling.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col gap-2 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-mono-code text-xs">
                  <Activity className="w-4 h-4" />
                  <span>Inference Streaming</span>
                </div>
                <h4 className="font-tech font-bold text-white text-sm">Sub-20ms Token Latency</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time HTTP/2 chunked SSE response streams, AWQ quantization, and speculative decoding.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col gap-2 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-mono-code text-xs">
                  <Network className="w-4 h-4" />
                  <span>Context &amp; Memory</span>
                </div>
                <h4 className="font-tech font-bold text-white text-sm">Vector DBs (Qdrant/Milvus)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-dimensional HNSW graph search topologies integrated with GitOps persistence layers.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col gap-2 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-300 font-mono-code text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Action Protocol</span>
                </div>
                <h4 className="font-tech font-bold text-white text-sm">MCP Agent Swarms</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Model Context Protocol tool servers providing sandboxed execution with zero-trust guardrails.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
