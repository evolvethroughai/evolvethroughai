import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Cpu, Cloud, Network, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionsAdvisorySectionProps {
  onInquireAdvisory: () => void;
}

export const SolutionsAdvisorySection: React.FC<SolutionsAdvisorySectionProps> = ({ onInquireAdvisory }) => {
  const advisoryServices = [
    {
      title: 'Sovereign AI Infrastructure & GPU Fleet Advisory',
      icon: Cpu,
      description: 'Architecting dedicated, on-premise or sovereign cloud vLLM and TensorRT-LLM inference nodes with strict data residency boundaries.',
      deliverables: ['Custom vRAM allocation audit', 'vLLM continuous batching configuration', 'Zero-data-leakage enclave setup']
    },
    {
      title: 'Enterprise Multi-Cloud & GitOps Migration',
      icon: Cloud,
      description: 'Modernizing legacy VM fleets into declarative OpenTofu IaaS and ArgoCD Kubernetes clusters across Azure and AWS.',
      deliverables: ['Zero-downtime traffic cutover strategy', 'Multi-tenant AKS/EKS cluster governance', 'Automated drift-detection gates']
    },
    {
      title: 'eBPF Telemetry & Latency Optimization',
      icon: Network,
      description: 'Implementing kernel-level socket and network tracing with Cilium eBPF to eliminate performance bottlenecks and micro-outages.',
      deliverables: ['Low-overhead socket ring buffer telemetry', 'Real-time SLO error budget engine', 'Automated incident root-cause triage']
    },
    {
      title: 'Model Context Protocol (MCP) Workflow Automation',
      icon: ShieldCheck,
      description: 'Building secure tool execution servers and supervised autonomous agents connecting corporate data to frontier LLMs safely.',
      deliverables: ['Sandboxed MCP tool server runtime', 'Role-based agent capability boundaries', 'Audit logging & human-in-the-loop approvals']
    }
  ];

  return (
    <section className="relative w-full bg-[#060a16] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="solutions">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header with InView */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Horizon 02 &amp; 03 • Technology Solutions</span>
            </div>
            <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Enterprise Engineering Advisory &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">AI Solutions</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Beyond education, Evolve Through AI collaborates directly with mid-market and enterprise engineering
              leadership to architect sovereign compute fabrics, modernize infrastructure, and build autonomous systems.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onInquireAdvisory}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all self-start md:self-auto cursor-pointer border border-cyan-400/30"
          >
            <span>Request Architectural Advisory</span>
            <ArrowRight className="w-4 h-4 text-cyan-200" />
          </motion.button>
        </motion.div>

        {/* 4 Advisory Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisoryServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 transition-all flex flex-col justify-between gap-6 glass-panel-card"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-tech font-bold text-xl text-white">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-xs font-mono uppercase font-semibold text-cyan-300">
                      Standard Deliverables:
                    </span>
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium font-mono">Enterprise Scope</span>
                  <button
                    onClick={onInquireAdvisory}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
