import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Terminal, Cloud, Bot, Cpu, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export const CareerLadderSection: React.FC = () => {
  const stages = [
    {
      level: 'STAGE 00',
      timing: 'Week 01 - 04',
      badge: 'Prerequisite',
      title: 'Systems Foundations',
      description: 'Linux kernel POSIX syscalls, cgroups v2 resource isolation, socket buffers, signals, and production Bash tool chains.',
      baseline: 'Host Familiarity & Core Primitives',
      skills: ['POSIX Syscalls', 'cgroups v2', 'Signals & Processes', 'Production Bash'],
      icon: Terminal,
      color: 'slate'
    },
    {
      level: 'STAGE 01',
      timing: 'Week 05 - 08',
      badge: 'Core Platform',
      title: 'Cloud & Platform Engineering',
      description: 'Docker distroless builds, declarative OpenTofu IaaS, multi-cluster Kubernetes networking, and Envoy ingress routing.',
      baseline: 'Role: Platform / DevOps Engineer',
      skills: ['Distroless OCI', 'OpenTofu Multi-Cloud', 'K8s Cluster Mesh', 'Envoy / Kong'],
      icon: Cloud,
      color: 'blue'
    },
    {
      level: 'STAGE 02',
      timing: 'Week 09 - 13',
      badge: 'AI-Assisted',
      title: 'AI-Assisted DevOps & GitOps',
      description: 'Declarative GitOps with ArgoCD, Trivy vulnerability attestation, Sigstore Cosign keys, and eBPF network telemetry.',
      baseline: 'Role: Senior SRE / Staff Platform',
      skills: ['ArgoCD GitOps', 'Cosign Attestations', 'eBPF Telemetry', 'AIOps Triage'],
      icon: Bot,
      color: 'cyan'
    },
    {
      level: 'STAGE 03 • APEX',
      timing: 'Week 14 - 18',
      badge: 'Sovereign Frontier',
      title: 'Sovereign AI Systems Architect',
      description: 'Deploying dedicated GPU inference clusters with vLLM, PagedAttention cache optimization, Model Context Protocol swarms, and sovereign enclaves.',
      baseline: 'Role: AI Systems Infrastructure Architect',
      skills: ['vLLM Fleet Deployment', 'PagedAttention KV Tuning', 'MCP Swarm Nodes', 'Quantization (AWQ)'],
      icon: Cpu,
      color: 'violet',
      isApex: true
    }
  ];

  return (
    <section className="relative w-full bg-[#060a16] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="career-ladder">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Structured Progression</span>
          </div>
          <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            The 4-Stage Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Evolution Ladder</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            DevOps is foundational, not an automatic shortcut. Systems mastery requires an honest progression:
            master the host, master the cloud fleet, orchestrate with AI leverage, then deploy autonomous systems.
          </p>
        </motion.div>

        {/* 4 Cards Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, i) => {
            const Icon = stage.icon;

            if (stage.isApex) {
              return (
                <motion.div
                  key={stage.level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-3xl bg-[#0b1328]/95 text-white border border-cyan-400/60 shadow-2xl shadow-cyan-500/15 flex flex-col justify-between gap-6 relative overflow-hidden glass-panel-card border-beam"
                >
                  <div className="absolute top-0 right-0 px-3.5 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-bl-2xl font-mono shadow-md">
                    APEX TARGET
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-300">
                        {stage.level}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {stage.timing}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-tech font-bold text-xl text-white">
                      {stage.title}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {stage.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold shadow-inner">
                    {stage.baseline}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={stage.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 transition-all flex flex-col justify-between gap-6 glass-panel-card"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-300">
                      {stage.level}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {stage.timing}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 text-cyan-400 flex items-center justify-center shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-tech font-bold text-xl text-white">
                    {stage.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {stage.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-slate-950/80 border border-white/5 text-[11px] font-mono text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 text-xs font-mono text-slate-300 font-medium">
                  {stage.baseline}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
