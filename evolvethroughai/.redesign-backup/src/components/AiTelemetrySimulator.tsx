import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Activity,
  Zap,
  Terminal,
  ShieldAlert,
  Server,
  Cloud,
  Layers,
  ArrowRight,
  RotateCw,
  Sliders,
  CheckCircle2,
  HardDrive
} from 'lucide-react';

type SimulatorTab = 'vllm' | 'mcp' | 'gitops';

export const AiTelemetrySimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SimulatorTab>('vllm');

  // vLLM Cluster State
  const [tokensPerSec, setTokensPerSec] = useState(142.8);
  const [ttftMs, setTtftMs] = useState(13.4);
  const [kvCachePercent, setKvCachePercent] = useState(64);
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [streamedText, setStreamedText] = useState('');
  const [isStreaming, setIsStreaming] = useState(true);

  // MCP Agent State
  const [isRemediating, setIsRemediating] = useState(false);
  const [agentStep, setAgentStep] = useState<number>(3); // 3 = resolved
  const [agentLogs, setAgentLogs] = useState<string[]>([
    '[eBPF:trace] socket 10.244.3.44:8000 state: ESTABLISHED -> SYN_SENT (queue_drop: 0)',
    '[vLLM:metrics] PagedAttention KV cache block hit rate: 94.2%',
    '[MCP:agent] Health check OK: all 4 H100 tensor parallel shards in quorum',
    '[ArgoCD] sync status: Synced (revision: git-8f4b2a1)'
  ]);

  // GitOps State
  const [trafficSplit, setTrafficSplit] = useState(65); // 65% Azure, 35% AWS
  const [meshLatency, setMeshLatency] = useState(18.2);

  const samplePrompts = [
    {
      label: 'Financial Fraud Analysis',
      prompt: 'Execute graph-neural network fraud triage on transaction TX-99214...',
      response: '-> Embeddings resolved. Identified anomalous ring topology in sub-cluster 42. Risk score 0.984. Initiating zero-trust ledger quarantine.'
    },
    {
      label: 'Agentic Infrastructure Patch',
      prompt: 'Analyze high P99 latency on Azure AKS ingress gateway...',
      response: '-> eBPF socket starvation detected in ingress-nginx pod. Reallocating epoll worker buffer to 65536. Reapplying Helm release 2.4.1.'
    },
    {
      label: 'Multi-Modal Vision Pipeline',
      prompt: 'Run tensorRT-LLM visual token alignment on satellite GeoTIFF...',
      response: '-> 4096 visual patch tokens loaded across 4x H100 nodes. Segmenting infrared anomalies. 0 false positives reported.'
    }
  ];

  // Token streaming effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeTab === 'vllm') {
      const targetText = samplePrompts[activePromptIndex].response;
      setStreamedText('');
      let idx = 0;
      setIsStreaming(true);

      interval = setInterval(() => {
        if (idx < targetText.length) {
          setStreamedText((prev) => prev + targetText.charAt(idx));
          idx++;
          // Fluctuating real-time numbers
          setTokensPerSec(Number((138 + Math.random() * 12).toFixed(1)));
          setTtftMs(Number((12.5 + Math.random() * 2).toFixed(1)));
        } else {
          setIsStreaming(false);
          clearInterval(interval);
        }
      }, 25);
    }
    return () => clearInterval(interval);
  }, [activePromptIndex, activeTab]);

  // Trigger simulated failure & remediation
  const triggerIncidentSimulation = () => {
    if (isRemediating) return;
    setIsRemediating(true);
    setAgentStep(0);
    setAgentLogs((prev) => [
      `[CRITICAL ALERT ${new Date().toLocaleTimeString()}] eBPF probe caught TCP socket timeout on ai-inference-pod-c2`,
      ...prev
    ]);

    setTimeout(() => {
      setAgentStep(1);
      setAgentLogs((prev) => [
        `[MCP:agent] Invoked tool 'k8s_describe_pod' -> Pod memory pressure: 91% KV cache saturation`,
        ...prev
      ]);
    }, 1200);

    setTimeout(() => {
      setAgentStep(2);
      setAgentLogs((prev) => [
        `[MCP:agent] Triggered autonomous horizontal scale-out -> spawned inference-replica-4 (4x H100)`,
        `[Security] Trivy vulnerability & signature verification passed (0 CVEs)`,
        ...prev
      ]);
    }, 2600);

    setTimeout(() => {
      setAgentStep(3);
      setIsRemediating(false);
      setAgentLogs((prev) => [
        `[RESOLVED ${new Date().toLocaleTimeString()}] Canary health-check passed. P99 latency normalized to 14.1ms.`,
        ...prev
      ]);
    }, 4000);
  };

  return (
    <section className="relative py-24 bg-[#050811] text-white overflow-hidden border-t border-b border-white/10">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 ai-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive Runtime Simulator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight"
          >
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">AI Infrastructure Fabric</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Don't just read about AI engineering—interact with live telemetry simulating enterprise vLLM inference clusters, autonomous MCP remediation, and multi-cloud GitOps meshes.
          </motion.p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab('vllm')}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border ${
              activeTab === 'vllm'
                ? 'text-white border-cyan-500/50 bg-cyan-950/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                : 'text-slate-400 border-white/5 bg-slate-900/40 hover:text-white hover:border-white/20'
            }`}
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Sovereign vLLM Inference</span>
            {activeTab === 'vllm' && (
              <motion.div
                layoutId="sim-active-tab"
                className="absolute inset-0 rounded-xl border border-cyan-400/60 pointer-events-none"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('mcp')}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border ${
              activeTab === 'mcp'
                ? 'text-white border-violet-500/50 bg-violet-950/40 shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                : 'text-slate-400 border-white/5 bg-slate-900/40 hover:text-white hover:border-white/20'
            }`}
          >
            <Terminal className="w-4 h-4 text-violet-400" />
            <span>Autonomous MCP Agent</span>
            {activeTab === 'mcp' && (
              <motion.div
                layoutId="sim-active-tab"
                className="absolute inset-0 rounded-xl border border-violet-400/60 pointer-events-none"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('gitops')}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border ${
              activeTab === 'gitops'
                ? 'text-white border-blue-500/50 bg-blue-950/40 shadow-[0_0_20px_rgba(37,99,235,0.25)]'
                : 'text-slate-400 border-white/5 bg-slate-900/40 hover:text-white hover:border-white/20'
            }`}
          >
            <Cloud className="w-4 h-4 text-blue-400" />
            <span>Multi-Cloud GitOps Mesh</span>
            {activeTab === 'gitops' && (
              <motion.div
                layoutId="sim-active-tab"
                className="absolute inset-0 rounded-xl border border-blue-400/60 pointer-events-none"
              />
            )}
          </button>
        </div>

        {/* Main Interactive Simulation Canvas */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0a0f1d]/90 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top Terminal Bar */}
          <div className="px-5 py-3.5 border-b border-white/10 bg-slate-950/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-400">
                cluster-us-east-1 // evolve-ai-engine.sovereign.mesh
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                TELEMETRY LIVE
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline text-slate-400">TLS 1.3 / mTLS Enabled</span>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {/* TAB 1: vLLM Sovereign Inference Cluster */}
              {activeTab === 'vllm' && (
                <motion.div
                  key="vllm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Real-time Hardware & Performance Gauges */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 relative overflow-hidden">
                      <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                        <span>THROUGHPUT</span>
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-1">
                        <span>{tokensPerSec}</span>
                        <span className="text-xs text-cyan-400 font-normal">tok/s</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">vLLM Continuous Batching</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 relative overflow-hidden">
                      <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                        <span>TIME TO FIRST TOKEN</span>
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-1">
                        <span>{ttftMs}</span>
                        <span className="text-xs text-emerald-400 font-normal">ms</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">Chunked Prefill Enabled</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 relative overflow-hidden">
                      <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                        <span>PAGED-ATTENTION KV CACHE</span>
                        <HardDrive className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-1">
                        <span>{kvCachePercent}%</span>
                        <span className="text-xs text-violet-400 font-normal">Allocated</span>
                      </div>
                      {/* Mini Bar */}
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${kvCachePercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 relative overflow-hidden">
                      <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                        <span>TENSOR PARALLEL</span>
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-1">
                        <span>4x H100</span>
                        <span className="text-xs text-emerald-400 font-normal">SXM5</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">NVLink 900 GB/s Interconnect</div>
                    </div>
                  </div>

                  {/* Interactive Workload Selector */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-xs font-mono text-slate-300">Select Production Model Workload:</span>
                    <div className="flex flex-wrap gap-2">
                      {samplePrompts.map((p, idx) => (
                        <button
                          key={p.label}
                          onClick={() => setActivePromptIndex(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            activePromptIndex === idx
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                              : 'bg-slate-900 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stream Visualizer */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs sm:text-sm">
                    <div className="text-slate-400 mb-2 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">$</span>
                      <span className="text-slate-300">{samplePrompts[activePromptIndex].prompt}</span>
                    </div>
                    <div className="text-emerald-400 leading-relaxed min-h-[48px]">
                      {streamedText}
                      {isStreaming && <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: Autonomous MCP Self-Healing Agent */}
              {activeTab === 'mcp' && (
                <motion.div
                  key="mcp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Action Banner */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-violet-950/30 border border-violet-500/30">
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-violet-400" />
                        Model Context Protocol (MCP) Autonomous Remediation Engine
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        When kernel-level telemetry drops sockets, the agent diagnoses root cause, builds a hotfix, and applies GitOps patches without human intervention.
                      </div>
                    </div>
                    <button
                      onClick={triggerIncidentSimulation}
                      disabled={isRemediating}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                        isRemediating
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-wait'
                          : 'bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                      }`}
                    >
                      <RotateCw className={`w-3.5 h-3.5 ${isRemediating ? 'animate-spin' : ''}`} />
                      {isRemediating ? 'Simulating Incident...' : 'Trigger Chaos Event'}
                    </button>
                  </div>

                  {/* 4-Step Remediation Pipeline Progress */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {[
                      { step: 0, label: '01. eBPF Detection', desc: 'Kernel socket drops caught' },
                      { step: 1, label: '02. MCP Root-Cause', desc: 'Tool invoked: OpenTelemetry inspect' },
                      { step: 2, label: '03. GitOps Scale-Out', desc: 'Auto-scaled H100 GPU replicas' },
                      { step: 3, label: '04. Canary Verified', desc: 'Latency back to 14.1ms P99' }
                    ].map((s) => {
                      const isDone = agentStep >= s.step;
                      const isCurrent = agentStep === s.step && isRemediating;
                      return (
                        <div
                          key={s.step}
                          className={`p-3.5 rounded-xl border transition-all ${
                            isCurrent
                              ? 'bg-amber-950/40 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                              : isDone
                              ? 'bg-emerald-950/20 border-emerald-500/30'
                              : 'bg-slate-900/40 border-white/5 opacity-50'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-mono mb-1">
                            <span className={isCurrent ? 'text-amber-300 font-bold' : isDone ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                              {s.label}
                            </span>
                            {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                          </div>
                          <div className="text-[11px] text-slate-300">{s.desc}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Live Terminal Log Stream */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs max-h-48 overflow-y-auto space-y-1.5 custom-scrollbar">
                    {agentLogs.map((log, i) => (
                      <div
                        key={i}
                        className={`${
                          log.includes('CRITICAL')
                            ? 'text-rose-400 font-bold'
                            : log.includes('RESOLVED')
                            ? 'text-emerald-300 font-bold'
                            : log.includes('MCP:agent')
                            ? 'text-violet-300'
                            : 'text-slate-400'
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: Multi-Cloud GitOps Mesh */}
              {activeTab === 'gitops' && (
                <motion.div
                  key="gitops"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Topology Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Azure AKS Node */}
                    <div className="p-5 rounded-xl bg-slate-900/60 border border-blue-500/30 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                          <span className="font-semibold text-white text-sm">Microsoft Azure (AKS)</span>
                        </div>
                        <span className="text-xs font-mono text-blue-300 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/40">
                          {trafficSplit}% Traffic
                        </span>
                      </div>
                      <div className="space-y-2 text-xs font-mono text-slate-300">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Region:</span>
                          <span className="text-white">eastus2 (Enterprise Core)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Node Pool:</span>
                          <span className="text-white">Standard_ND96isr_H100_v5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">ArgoCD Sync:</span>
                          <span className="text-emerald-400">HEALTHY (v2.14.0)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Service Mesh:</span>
                          <span className="text-cyan-400">Cilium eBPF mTLS</span>
                        </div>
                      </div>
                    </div>

                    {/* AWS EKS Node */}
                    <div className="p-5 rounded-xl bg-slate-900/60 border border-amber-500/30 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                          <span className="font-semibold text-white text-sm">Amazon Web Services (EKS)</span>
                        </div>
                        <span className="text-xs font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/40">
                          {100 - trafficSplit}% Traffic
                        </span>
                      </div>
                      <div className="space-y-2 text-xs font-mono text-slate-300">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Region:</span>
                          <span className="text-white">eu-central-1 (Disaster Recovery)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Node Pool:</span>
                          <span className="text-white">p5.48xlarge (8x H100)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">ArgoCD Sync:</span>
                          <span className="text-emerald-400">HEALTHY (v2.14.0)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Inter-Cloud Latency:</span>
                          <span className="text-cyan-400">{meshLatency}ms (WireGuard)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Traffic Balance Slider */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                        Dynamic Global Traffic Rebalancer (Weighted DNS & Anycast BGP)
                      </span>
                      <span className="text-cyan-400 font-bold">{trafficSplit}% Azure / {100 - trafficSplit}% AWS</span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={trafficSplit}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setTrafficSplit(val);
                        setMeshLatency(Number((16 + Math.abs(50 - val) * 0.1).toFixed(1)));
                      }}
                      className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
                    />

                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>100% Azure Primary</span>
                      <span>50/50 Active-Active Dual Cloud</span>
                      <span>100% AWS Primary</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
