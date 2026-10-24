import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CornerBrackets } from './CornerBrackets';
import { Sparkles, Calendar, ArrowRight, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

interface MilestoneCalendarStripProps {
  onOpenApply: () => void;
  onOpenSyllabusModal: (programId: string) => void;
}

export const MilestoneCalendarStrip: React.FC<MilestoneCalendarStripProps> = ({
  onOpenApply,
  onOpenSyllabusModal,
}) => {
  const [activeRound, setActiveRound] = useState(0); // 0 = Current live round

  const MILESTONES = [
    {
      round: 'ROUND 01',
      title: 'Cohort Admissions & Diagnostics',
      date: '27 OCT 2026',
      status: 'LIVE NOW',
      desc: 'System architecture diagnostic & cohort team placement',
      programId: 'flagship',
      isLive: true,
    },
    {
      round: 'ROUND 02',
      title: 'Multi-Cloud IaaS & Kubernetes',
      date: '10 NOV 2026',
      status: 'UPCOMING',
      desc: 'AWS Transit Gateway & Azure Private Link Fleet deployments',
      programId: 'azure',
      isLive: false,
    },
    {
      round: 'ROUND 03',
      title: 'Sovereign AI & vLLM Cluster Tuning',
      date: '01 DEC 2026',
      status: 'SCHEDULED',
      desc: 'PagedAttention 4x H100 KV Cache streaming sub-20ms TTFT',
      programId: 'forward-ai',
      isLive: false,
    },
    {
      round: 'ROUND 04',
      title: 'LangGraph Autonomous MCP Swarms',
      date: '18 DEC 2026',
      status: 'SCHEDULED',
      desc: 'eBPF kernel telemetry & autonomous self-healing production loops',
      programId: 'forward-ai',
      isLive: false,
    },
    {
      round: 'ROUND 05',
      title: 'Staff SRE Oral RFC Defense',
      date: '12 JAN 2027',
      status: 'MILESTONE',
      desc: '1-on-1 whiteboarding, SEV-1 triage defense, 14-repo audit',
      programId: 'career-defense',
      isLive: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#050812] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Production Milestones &amp; Cohort Timeline</span>
            </div>
            <h2 className="font-tech font-bold text-3xl sm:text-4xl text-white tracking-tight">
              2026 Engineering Cadence. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Structured Execution.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every stage of the Evolve Through AI roadmap follows live sprint cadences with verifiable infrastructure checkpoints.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
              October 2026 Intake Live
            </span>
          </div>
        </div>

        {/* Milestone Cards Grid with Connecting Dashed Crawling Track */}
        <div className="relative pt-6">
          
          {/* Crawling Connector Line Behind Cards (desktop) */}
          <div className="hidden lg:block absolute top-[52px] inset-x-12 h-[2px] bg-white/10 pointer-events-none">
            <div
              className="w-full h-full animate-loop-flow"
              style={{
                backgroundImage: 'repeating-linear-gradient(to right, #02d2e3 0px, #02d2e3 8px, transparent 8px, transparent 16px)',
              }}
            />
          </div>

          {/* 5 Milestone Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {MILESTONES.map((item, idx) => {
              const isSelected = activeRound === idx;
              return (
                <motion.div
                  key={item.round}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveRound(idx)}
                  className={`relative p-5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between gap-4 border ${
                    item.isLive
                      ? 'bg-[#091124] border-cyan-400 shadow-[0_0_25px_rgba(2,210,227,0.25)]'
                      : isSelected
                      ? 'bg-slate-900/90 border-blue-400/80 shadow-lg'
                      : 'bg-[#070b18]/80 border-white/10 hover:border-white/25 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Corner brackets on active live card */}
                  {item.isLive && (
                    <CornerBrackets strokeColor="#02d2e3" size={8} strokeWidth={1.5} />
                  )}

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {item.round}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          item.isLive
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-400 animate-pulse'
                            : 'bg-white/5 text-slate-400 border border-white/10'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4 className="font-tech font-bold text-base text-white leading-snug">
                      {item.title}
                    </h4>

                    <div className="text-xs font-mono text-cyan-300 font-semibold">
                      {item.date}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenSyllabusModal(item.programId);
                      }}
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Curriculum</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>

                    {item.isLive ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenApply();
                        }}
                        className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-[11px] font-mono transition-colors cursor-pointer"
                      >
                        Apply Now
                      </button>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
