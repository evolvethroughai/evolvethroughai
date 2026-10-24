import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Wrench, 
  FileText, 
  Download, 
  ArrowRight,
  Layers,
  Sparkles,
  Clock,
  FlaskConical,
  Trophy,
  Check
} from 'lucide-react';
import { PROGRAM_CURRICULA } from '../data/curriculumData';
import { ProgramCurriculum } from '../types';

interface ProgramSyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  onOpenApply: () => void;
}

export const ProgramSyllabusModal: React.FC<ProgramSyllabusModalProps> = ({
  isOpen,
  onClose,
  initialProgramId = 'flagship',
  onOpenApply
}) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(initialProgramId);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-01': true,
    'az-mod-01': true,
    'aws-mod-01': true,
    'fwd-mod-01': true,
    'car-mod-01': true
  });

  // Keep selected program in sync when initialProgramId changes
  React.useEffect(() => {
    if (initialProgramId) {
      setSelectedProgramId(initialProgramId);
    }
  }, [initialProgramId]);

  const currentProgram: ProgramCurriculum = PROGRAM_CURRICULA[selectedProgramId] || PROGRAM_CURRICULA['flagship'];

  const filteredModules = useMemo(() => {
    return currentProgram.modules.filter((mod) => {
      const q = searchQuery.toLowerCase();
      if (!q) return true;
      return (
        mod.title.toLowerCase().includes(q) ||
        mod.description.toLowerCase().includes(q) ||
        mod.tools.some((t) => t.toLowerCase().includes(q)) ||
        mod.keyTopics.some((top) => top.toLowerCase().includes(q)) ||
        mod.labDeliverable.toLowerCase().includes(q)
      );
    });
  }, [currentProgram, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExp: Record<string, boolean> = {};
    currentProgram.modules.forEach((m) => {
      allExp[m.id] = true;
    });
    setExpandedModules(allExp);
  };

  const collapseAll = () => {
    setExpandedModules({});
  };

  const programsList = [
    { id: 'flagship', label: 'Masterclass', count: 18, color: 'from-blue-600 to-indigo-600' },
    { id: 'azure', label: 'Azure DevOps', count: 8, color: 'from-blue-600 to-cyan-600' },
    { id: 'aws', label: 'AWS DevOps', count: 8, color: 'from-amber-500 to-orange-600' },
    { id: 'forward-ai', label: 'Forward Deployed AI', count: 8, color: 'from-cyan-500 to-teal-500' },
    { id: 'career-defense', label: 'Career & Guidance', count: 6, color: 'from-violet-600 to-purple-600' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#02050e]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl h-[92vh] rounded-3xl bg-[#080d1e] shadow-2xl border border-cyan-500/40 text-white flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Top Bar with Brand & Program Switcher */}
            <div className="p-4 sm:p-6 border-b border-white/10 bg-slate-950/90 flex flex-col gap-4 shrink-0">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-tech font-bold text-sm shadow-md shadow-cyan-500/20">
                    ETA
                  </div>
                  <div>
                    <h2 className="font-tech font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                      <span>Curriculum &amp; Syllabus Explorer</span>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                        OFFICIAL 2026 SPEC
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400">
                      Select any of the 5 super-headed engineering tracks to inspect its complete module breakdown.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 shrink-0"
                  aria-label="Close Syllabus Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 5 Program Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                {programsList.map((prog) => {
                  const isActive = selectedProgramId === prog.id;
                  return (
                    <button
                      key={prog.id}
                      onClick={() => {
                        setSelectedProgramId(prog.id);
                        setSearchQuery('');
                      }}
                      className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                        isActive
                          ? 'text-white border-cyan-400/60 bg-cyan-950/60 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                          : 'text-slate-400 border-white/5 bg-slate-900/60 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-modal-tab"
                          className="absolute inset-0 rounded-xl border-2 border-cyan-400 pointer-events-none"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        />
                      )}
                      <span>{prog.label}</span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-bold ${
                        isActive ? 'bg-cyan-500 text-slate-950' : 'bg-white/10 text-slate-300'
                      }`}>
                        {prog.count} M
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scrollable Curriculum Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 custom-scrollbar">
              {/* Program Overview Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1630] via-[#091124] to-[#0d1836] border border-cyan-500/30 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider">{currentProgram.code}</span>
                    <span className="text-slate-500">•</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px]">
                      {currentProgram.badge}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{currentProgram.level}</span>
                  </div>

                  <h3 className="font-tech font-bold text-xl sm:text-2xl text-white">
                    {currentProgram.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                    {currentProgram.description}
                  </p>

                  {/* Program Metadata Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Duration</span>
                        <span className="text-xs font-bold text-white">{currentProgram.durationWeeks}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-2.5">
                      <FlaskConical className="w-4 h-4 text-blue-400 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Hands-On Labs</span>
                        <span className="text-xs font-bold text-white">{currentProgram.totalLabs} Auditable Labs</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-2.5 col-span-2">
                      <Trophy className="w-4 h-4 text-violet-400 shrink-0" />
                      <div className="flex flex-col truncate">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Capstone Deliverable</span>
                        <span className="text-xs font-bold text-cyan-200 truncate">{currentProgram.capstoneName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                    {currentProgram.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {currentProgram.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-white/10 text-cyan-300 font-mono text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search & Expansion Control Bar */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search within ${currentProgram.shortTitle}...`}
                    className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-white/10 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 font-mono"
                  />
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs font-mono text-slate-400">
                  <span>SHOWING {filteredModules.length} OF {currentProgram.modules.length} MODULES</span>
                  <div className="flex items-center gap-2">
                    <button onClick={expandAll} className="hover:text-cyan-400 underline">Expand All</button>
                    <span>•</span>
                    <button onClick={collapseAll} className="hover:text-cyan-400 underline">Collapse</button>
                  </div>
                </div>
              </div>

              {/* Module Accordion Items */}
              <div className="space-y-3">
                {filteredModules.map((module) => {
                  const isExpanded = !!expandedModules[module.id];
                  return (
                    <div
                      key={module.id}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'bg-[#0b1328] border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#090e1c]/80 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleExpand(module.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <span className="font-mono font-bold text-sm sm:text-base text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-xl border border-cyan-500/30 shrink-0">
                            M{module.number}
                          </span>

                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                              {module.category}
                            </span>
                            <h4 className="font-tech font-bold text-sm sm:text-base text-white">
                              {module.title}
                            </h4>
                            <p className="text-slate-400 text-xs line-clamp-2 mt-0.5">
                              {module.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 shrink-0">
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {/* Accordion Details */}
                      {isExpanded && (
                        <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-white/10 flex flex-col gap-4 bg-slate-950/40">
                          {/* Granular Topics */}
                          <div className="flex flex-col gap-2">
                            <span className="text-xs font-mono uppercase font-semibold text-cyan-300">
                              Granular Topics &amp; Enterprise Competencies:
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {module.keyTopics.map((topic, i) => (
                                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tools chips */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Toolchain:</span>
                            </span>
                            {module.tools.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/10 text-cyan-200 font-mono text-[11px]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Lab Deliverable */}
                          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
                            <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <div className="flex flex-col gap-0.5 text-xs">
                              <span className="font-bold text-cyan-200 font-mono">
                                Hands-on Production Lab Deliverable:
                              </span>
                              <span className="text-slate-300 leading-relaxed font-mono text-[11px]">
                                {module.labDeliverable}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/95 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified 2026 Corporate Accreditation • Zero Web Sandbox Simulations</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Save Syllabus</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenApply();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-cyan-400/30 w-full sm:w-auto"
                >
                  <span>Apply for {currentProgram.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-200" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
