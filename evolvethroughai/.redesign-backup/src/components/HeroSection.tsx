import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShaderBackground } from './ShaderBackground';
import { ContourFieldCanvas } from './ContourFieldCanvas';
import { CornerBrackets } from './CornerBrackets';
import { ChamferedButton } from './ChamferedButton';
import { 
  Terminal, 
  School, 
  Rocket, 
  Infinity as InfinityIcon, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Cloud, 
  Layers, 
  RotateCw,
  BookOpen
} from 'lucide-react';

interface HeroSectionProps {
  onOpenApply: () => void;
  onExploreLoop: () => void;
  onExploreCurriculum: () => void;
  onSelectProgramSyllabus?: (programId: string) => void;
}

const ROTATING_PHRASES = [
  'Sovereign AI Infrastructure',
  'Autonomous Agent Swarms',
  'Multi-Cloud GitOps & Kubernetes',
  'Resilient Production Systems'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApply,
  onExploreLoop,
  onExploreCurriculum,
  onSelectProgramSyllabus
}) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [activeTrack, setActiveTrack] = useState<'pro' | 'early'>('pro');

  // Automated live pipeline simulation state
  const [activePipelineStep, setActivePipelineStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [liveThroughput, setLiveThroughput] = useState(142.8);
  const [liveLatency, setLiveLatency] = useState(13.4);

  // Rotating headline words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Continuous automated pipeline ticker
  useEffect(() => {
    const pipeInterval = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % 5);
      setLiveThroughput(Number((138 + Math.random() * 10).toFixed(1)));
      setLiveLatency(Number((12.8 + Math.random() * 1.8).toFixed(1)));
    }, 2800);
    return () => clearInterval(pipeInterval);
  }, []);

  const triggerManualSimulation = () => {
    setIsSimulating(true);
    setActivePipelineStep(0);
    setTimeout(() => setActivePipelineStep(1), 600);
    setTimeout(() => setActivePipelineStep(2), 1200);
    setTimeout(() => setActivePipelineStep(3), 1800);
    setTimeout(() => {
      setActivePipelineStep(4);
      setIsSimulating(false);
    }, 2400);
  };

  const handleProgramClick = (id: string) => {
    if (onSelectProgramSyllabus) {
      onSelectProgramSyllabus(id);
    } else {
      onExploreCurriculum();
    }
  };

  const pipelineSteps = [
    { title: '01. OpenTofu Multi-Cloud IaaS', desc: 'Azure eastus2 + AWS eu-central-1 mesh', time: '14ms', status: 'SYNCD' },
    { title: '02. Sigstore Cosign Attestation', desc: 'Cryptographic SHA256 digest verified', time: '8ms', status: 'PASSED' },
    { title: '03. ArgoCD Progressive Canary', desc: 'Traffic shifted 10% → 100% zero 5xx', time: '32ms', status: 'HEALTHY' },
    { title: '04. Sovereign vLLM Inference', desc: 'PagedAttention 4x H100 KV-Cache loaded', time: '18ms', status: 'ACTIVE' },
    { title: '05. Autonomous MCP Agent', desc: 'Kernel eBPF telemetry loop verified', time: '5ms', status: 'READY' }
  ];

  const quickPrograms = [
    { id: 'flagship', label: 'Masterclass', modules: '18M', color: 'border-cyan-400 text-cyan-300' },
    { id: 'azure', label: 'Azure DevOps', modules: '8M', color: 'border-blue-400 text-blue-300' },
    { id: 'aws', label: 'AWS DevOps', modules: '8M', color: 'border-amber-400 text-amber-300' },
    { id: 'forward-ai', label: 'Forward Deployed AI', modules: '8M', color: 'border-teal-400 text-teal-300' },
    { id: 'career-defense', label: 'Career & Guidance', modules: '6M', color: 'border-violet-400 text-violet-300' }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050811] text-white min-h-[960px] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      {/* Background WebGL & Animated Kinetic Mesh */}
      <ShaderBackground />

      {/* Procedural Marching Squares Contour Field from Creative Template */}
      <ContourFieldCanvas color="rgba(2, 210, 227, 0.14)" lineScale={3.6} waveSpeed={1.2} />

      {/* Atmospheric Depth Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/70 via-transparent to-[#050811]/90 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-10 pt-4">
        
        {/* Top Badges & Quick Programs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] text-xs font-mono tracking-wider uppercase text-cyan-300 self-start"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Learn. Build. Evolve. // Technology • Innovation • Solutions</span>
          </motion.div>

          {/* Quick Syllabus Access Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-xs font-mono">
            <span className="text-slate-400 text-[11px] uppercase mr-1 hidden lg:inline">Syllabi:</span>
            {quickPrograms.map((p) => (
              <button
                key={p.id}
                onClick={() => handleProgramClick(p.id)}
                className={`px-2.5 py-1 rounded-lg bg-slate-900/80 border ${p.color} hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap`}
              >
                <span>{p.label}</span>
                <span className="px-1 py-0.2 rounded bg-white/10 text-[10px] font-bold">{p.modules}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content, Right Live Automated Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols): Editorial Headline, Track Selector, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h1 className="font-tech font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
              Don't Just Learn Tools.<br />
              Understand Systems.<br />
              Build{' '}
              <span className="inline-block relative min-h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIdx}
                    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45 }}
                    className="inline-block"
                  >
                    {ROTATING_PHRASES[currentWordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              .
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Practical technology education and sovereign systems engineering. Master Linux POSIX foundations, multi-cloud Kubernetes fleets, declarative GitOps, and open-weights vLLM inference clusters.
            </p>

            <div className="text-slate-300 text-xs sm:text-sm italic border-l-2 border-cyan-400 pl-4 py-2 bg-slate-900/60 rounded-r-xl border border-white/5 max-w-xl">
              "Technology keeps evolving. People and organizations should evolve with it. Evolve Through AI makes that possible."
            </div>

            {/* Dual Audience Trajectory Switcher */}
            <div className="w-full max-w-2xl p-5 rounded-2xl bg-[#090e1c]/80 border border-white/10 shadow-xl backdrop-blur-xl">
              <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">
                  Trajectory Track:
                </span>

                <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-white/10">
                  <button
                    onClick={() => setActiveTrack('pro')}
                    className={`relative px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all z-10 flex items-center gap-2 cursor-pointer ${
                      activeTrack === 'pro' ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {activeTrack === 'pro' && (
                      <motion.div
                        layoutId="hero-track-pill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Terminal className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Working Professionals: Modernize to AI</span>
                  </button>

                  <button
                    onClick={() => setActiveTrack('early')}
                    className={`relative px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all z-10 flex items-center gap-2 cursor-pointer ${
                      activeTrack === 'early' ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {activeTrack === 'early' && (
                      <motion.div
                        layoutId="hero-track-pill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <School className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Early-Career: Zero to SRE</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Track Empathy Text */}
              <div className="pt-3 min-h-[90px]">
                <AnimatePresence mode="wait">
                  {activeTrack === 'pro' ? (
                    <motion.div
                      key="pro"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-1.5 text-xs"
                    >
                      <div className="flex items-center gap-2 text-cyan-300 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Your experience is valuable. Build on it and evolve into an AI Systems Architect.</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Connect container orchestration to vLLM vRAM allocations, PagedAttention batching, eBPF socket tracing, and Model Context Protocol (MCP) agent swarms.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="early"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-1.5 text-xs"
                    >
                      <div className="flex items-center gap-2 text-cyan-300 font-bold">
                        <Rocket className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Start from fundamentals, understand real corporate workflows, and build an auditable portfolio.</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Bypass the tutorial trap. Master POSIX Linux, Git governance, Docker isolation, and multi-cloud Kubernetes with 14 production GitHub repositories.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Action Buttons with Chamfered Precision Framing */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ChamferedButton
                label="Apply For Cohort"
                sublabel="October 2026 Admissions"
                onClick={onOpenApply}
                variant="cyan"
              />

              <ChamferedButton
                label="Open 5 Syllabi"
                sublabel="Complete 48 Modules"
                onClick={() => handleProgramClick('flagship')}
                variant="dark"
                icon={<BookOpen className="w-3.5 h-3.5 text-cyan-400" />}
              />

              <button
                onClick={onExploreLoop}
                className="inline-flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-cyan-300 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <InfinityIcon className="w-4 h-4 text-cyan-400" />
                <span>DevOps AI Loop &rarr;</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column (5 cols): LIVE AUTOMATED PIPELINE & BRACKET PANELS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4 relative"
          >
            {/* Top 2 Bracket Panels Inspired by the Creative Template */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Panel 1: Next Cohort */}
              <div className="relative p-3.5 rounded-xl bg-[#080d1e]/85 border border-cyan-500/20 backdrop-blur-xl flex flex-col gap-1.5">
                <CornerBrackets strokeColor="#02d2e3" size={8} />
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Next Admission // Cohort_012
                </span>
                <div className="font-tech font-bold text-sm text-white">
                  October 2026 Cohort
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>27 Oct 2026</span>
                  <span className="text-cyan-300">Live Hybrid</span>
                </div>
              </div>

              {/* Panel 2: System Metrics */}
              <div className="relative p-3.5 rounded-xl bg-[#080d1e]/85 border border-cyan-500/20 backdrop-blur-xl flex flex-col gap-1.5">
                <CornerBrackets strokeColor="#02d2e3" size={8} />
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Platform Scale
                </span>
                <div className="grid grid-cols-3 gap-1 text-center font-mono pt-0.5">
                  <div>
                    <div className="font-tech font-bold text-xs text-cyan-300">5</div>
                    <div className="text-[9px] text-slate-400 uppercase">Tracks</div>
                  </div>
                  <div>
                    <div className="font-tech font-bold text-xs text-cyan-300">48</div>
                    <div className="text-[9px] text-slate-400 uppercase">Modules</div>
                  </div>
                  <div>
                    <div className="font-tech font-bold text-xs text-cyan-300">14</div>
                    <div className="text-[9px] text-slate-400 uppercase">Repos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="relative rounded-2xl bg-[#080e22]/95 border border-cyan-500/40 shadow-2xl overflow-hidden backdrop-blur-2xl">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-cyan-300 font-semibold">
                    AUTONOMOUS RUNTIME // PIPELINE-05
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerManualSimulation}
                    disabled={isSimulating}
                    className="p-1 rounded bg-slate-900 border border-white/10 text-slate-400 hover:text-white cursor-pointer"
                    title="Run Pipeline Drill"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-cyan-400' : ''}`} />
                  </button>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Real-time Hardware Telemetry Gauges */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/60 border-b border-white/5 font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                  <div className="text-[10px] text-slate-400">THROUGHPUT</div>
                  <div className="text-white font-bold text-sm text-cyan-300">{liveThroughput} tok/s</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                  <div className="text-[10px] text-slate-400">P99 TTFT</div>
                  <div className="text-white font-bold text-sm text-emerald-300">{liveLatency} ms</div>
                </div>

                <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                  <div className="text-[10px] text-slate-400">CLUSTER</div>
                  <div className="text-white font-bold text-sm text-violet-300">4x H100 SXM5</div>
                </div>
              </div>

              {/* 5 Animated Execution Steps */}
              <div className="p-4 space-y-2.5 font-mono text-xs">
                {pipelineSteps.map((step, idx) => {
                  const isCurrent = activePipelineStep === idx;
                  const isDone = activePipelineStep > idx;

                  return (
                    <motion.div
                      key={step.title}
                      animate={{
                        backgroundColor: isCurrent ? 'rgba(6, 182, 212, 0.12)' : 'rgba(15, 23, 42, 0.4)',
                        borderColor: isCurrent ? 'rgba(6, 182, 212, 0.5)' : 'rgba(255, 255, 255, 0.05)'
                      }}
                      className="p-2.5 rounded-xl border flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${
                          isCurrent ? 'bg-cyan-400 animate-ping' : isDone ? 'bg-emerald-400' : 'bg-slate-600'
                        }`} />
                        <div className="flex flex-col truncate">
                          <span className={`font-bold truncate ${isCurrent ? 'text-cyan-300' : isDone ? 'text-white' : 'text-slate-400'}`}>
                            {step.title}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate">{step.desc}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 text-[11px]">
                        <span className="text-slate-500">{step.time}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                          isCurrent ? 'bg-cyan-500 text-slate-950' : isDone ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {step.status}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Mesh status: Azure &lt;-&gt; AWS WireGuard Encrypted</span>
                <span className="text-cyan-400 font-semibold cursor-pointer hover:underline" onClick={triggerManualSimulation}>
                  Run Drill &gt;
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Live Verifiable Telemetry Counters */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 w-full max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            whileHover={{ y: -3 }}
            onClick={() => handleProgramClick('flagship')}
            className="flex flex-col p-5 rounded-2xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 cursor-pointer transition-all"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-tech font-extrabold text-3xl sm:text-4xl text-white tracking-tight">18</span>
              <span className="text-cyan-400 font-semibold text-base font-mono">Modules</span>
            </div>
            <span className="text-xs text-slate-400 mt-1">POSIX to Sovereign vLLM</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="flex flex-col p-5 rounded-2xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 transition-all"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-tech font-extrabold text-3xl sm:text-4xl text-white tracking-tight">14</span>
              <span className="text-cyan-400 font-semibold text-base font-mono">Projects</span>
            </div>
            <span className="text-xs text-slate-400 mt-1">Auditable Production Repos</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            onClick={() => handleProgramClick('career-defense')}
            className="flex flex-col p-5 rounded-2xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 cursor-pointer transition-all"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-tech font-extrabold text-3xl sm:text-4xl text-white tracking-tight">1</span>
              <span className="text-cyan-400 font-semibold text-base font-mono">Capstone</span>
            </div>
            <span className="text-xs text-slate-400 mt-1">Live RFC Oral Mesh Defense</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="flex flex-col p-5 rounded-2xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 transition-all"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-tech font-extrabold text-3xl sm:text-4xl text-white tracking-tight">100.0</span>
              <span className="text-cyan-400 font-semibold text-base font-mono">%</span>
            </div>
            <span className="text-xs text-slate-400 mt-1">Zero Simulated Web Mocks</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
