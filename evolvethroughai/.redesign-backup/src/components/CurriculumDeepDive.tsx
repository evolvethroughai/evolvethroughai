import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PROGRAM_CURRICULA, 
  FLAGSHIP_MODULES 
} from '../data/curriculumData';
import { 
  BookOpen, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Wrench, 
  FileText, 
  Download, 
  Clock, 
  FlaskConical, 
  Trophy, 
  Sparkles,
  Maximize2,
  Check
} from 'lucide-react';
import { ProgramCurriculum, ModuleItem } from '../types';

interface CurriculumDeepDiveProps {
  onRequestSyllabus: () => void;
  activeProgramId?: string;
  onProgramChange?: (id: string) => void;
  onOpenSyllabusModal?: (id: string) => void;
}

export const CurriculumDeepDive: React.FC<CurriculumDeepDiveProps> = ({ 
  onRequestSyllabus,
  activeProgramId = 'flagship',
  onProgramChange,
  onOpenSyllabusModal
}) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(activeProgramId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-01': true,
    'az-mod-01': true,
    'aws-mod-01': true,
    'fwd-mod-01': true,
    'car-mod-01': true
  });

  // Sync external program selection if provided
  React.useEffect(() => {
    if (activeProgramId && activeProgramId !== selectedProgramId) {
      setSelectedProgramId(activeProgramId);
    }
  }, [activeProgramId]);

  const handleProgramSelect = (id: string) => {
    setSelectedProgramId(id);
    setSelectedCategory('All');
    setSearchQuery('');
    if (onProgramChange) {
      onProgramChange(id);
    }
  };

  const currentProgram: ProgramCurriculum = PROGRAM_CURRICULA[selectedProgramId] || PROGRAM_CURRICULA['flagship'];

  // Categories present in this program's modules
  const categories = useMemo(() => {
    const cats = new Set<string>();
    currentProgram.modules.forEach((m) => {
      if (m.category) cats.add(m.category);
    });
    return ['All', ...Array.from(cats)];
  }, [currentProgram]);

  const filteredModules = useMemo(() => {
    return currentProgram.modules.filter((mod) => {
      const matchesCategory = selectedCategory === 'All' || mod.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        mod.title.toLowerCase().includes(q) ||
        mod.description.toLowerCase().includes(q) ||
        mod.tools.some((t) => t.toLowerCase().includes(q)) ||
        mod.keyTopics.some((top) => top.toLowerCase().includes(q)) ||
        mod.labDeliverable.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [currentProgram, searchQuery, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    currentProgram.modules.forEach((m) => {
      allExpanded[m.id] = true;
    });
    setExpandedModules(allExpanded);
  };

  const collapseAll = () => {
    setExpandedModules({});
  };

  const programsTabList = [
    { id: 'flagship', label: '01. Masterclass', short: 'Masterclass', count: 18 },
    { id: 'azure', label: '02. Azure DevOps', short: 'Azure DevOps', count: 8 },
    { id: 'aws', label: '03. AWS DevOps', short: 'AWS DevOps', count: 8 },
    { id: 'forward-ai', label: '04. Forward Deployed AI', short: 'Forward Deployed AI', count: 8 },
    { id: 'career-defense', label: '05. Career & Guidance', short: 'Career & Guidance', count: 6 }
  ];

  return (
    <section className="relative w-full bg-[#060a16] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="curriculum-deep-dive">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Section Header with InView */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Unabridged Systems Curriculum &amp; Syllabi</span>
            </div>
            <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Curriculum &amp; Syllabus Explorer</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Click any of the 5 super-headed engineering programs below to inspect the complete, unabridged module breakdown, granular competencies, and hands-on lab deliverables.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {onOpenSyllabusModal && (
              <button
                onClick={() => onOpenSyllabusModal(selectedProgramId)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 text-white font-medium text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <Maximize2 className="w-4 h-4 text-cyan-400" />
                <span>Full-Screen Viewer</span>
              </button>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRequestSyllabus}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all border border-cyan-400/30 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-200" />
              <span>Download Syllabus Packet</span>
            </motion.button>
          </div>
        </motion.div>

        {/* 5 Super-Headed Programs Selector (Top Interactive Pill Bar) */}
        <div className="p-2 sm:p-3 rounded-2xl bg-[#090e1c]/90 border border-white/10 shadow-xl backdrop-blur-xl flex items-center gap-2 overflow-x-auto custom-scrollbar">
          {programsTabList.map((prog) => {
            const isSelected = selectedProgramId === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => handleProgramSelect(prog.id)}
                className={`relative px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2.5 cursor-pointer border ${
                  isSelected
                    ? 'text-white border-cyan-400/60 bg-cyan-950/60 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : 'text-slate-400 border-white/5 bg-slate-950/60 hover:text-white hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-curriculum-program-tab"
                    className="absolute inset-0 rounded-xl border-2 border-cyan-400 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{prog.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-white/10 text-slate-300'
                }`}>
                  {prog.count} Modules
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Program Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#080d1e]/90 border border-cyan-500/30 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{currentProgram.code}</span>
                <span className="text-slate-500">•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[11px]">
                  {currentProgram.badge}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 font-medium">{currentProgram.level}</span>
              </div>

              {onOpenSyllabusModal && (
                <button
                  onClick={() => onOpenSyllabusModal(currentProgram.id)}
                  className="text-xs font-mono text-cyan-300 hover:text-cyan-200 underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Dedicated View</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <h3 className="font-tech font-bold text-2xl sm:text-3xl text-white">
              {currentProgram.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {currentProgram.description}
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Track Duration</span>
                  <span className="text-xs font-bold text-white font-mono">{currentProgram.durationWeeks}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-2.5">
                <FlaskConical className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Labs Completed</span>
                  <span className="text-xs font-bold text-white font-mono">{currentProgram.totalLabs} Auditable Labs</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-2.5 col-span-2">
                <Trophy className="w-4 h-4 text-violet-400 shrink-0" />
                <div className="flex flex-col truncate">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Capstone Focus</span>
                  <span className="text-xs font-bold text-cyan-200 truncate">{currentProgram.capstoneName}</span>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
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
                <span key={tech} className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-white/10 text-cyan-300 font-mono text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${currentProgram.shortTitle}...`}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-white/10 bg-slate-950/80 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all text-white placeholder-slate-400 font-mono"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-curriculum-cat"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse All */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <button
              onClick={expandAll}
              className="hover:text-cyan-400 font-medium underline transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-cyan-400 font-medium underline transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Module Count Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
          <span>SHOWING {filteredModules.length} OF {currentProgram.modules.length} MODULES IN {currentProgram.shortTitle.toUpperCase()}</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Modules Accordion List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredModules.map((module) => {
              const isExpanded = !!expandedModules[module.id];

              return (
                <motion.div
                  key={module.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#0b1328]/95 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                      : 'bg-[#090e1c]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Module Summary Header */}
                  <button
                    onClick={() => toggleExpand(module.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-extrabold text-lg sm:text-xl text-cyan-400 bg-cyan-950/80 px-3.5 py-1.5 rounded-xl border border-cyan-500/40 shrink-0 shadow-sm">
                        M{module.number}
                      </span>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono">
                            {module.category}
                          </span>
                          {(module.number === '18' || module.number === '08') && (
                            <span className="px-2 py-0.5 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-[10px] font-mono font-bold">
                              CAPSTONE INTEGRATION
                            </span>
                          )}
                        </div>

                        <h3 className="font-tech font-bold text-base sm:text-lg text-white">
                          {module.title}
                        </h3>

                        <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 mt-0.5">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Details Body */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-white/10 flex flex-col gap-5 bg-slate-950/40"
                    >
                      {/* Key Topics List */}
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono uppercase font-semibold text-cyan-300 tracking-wider">
                          Granular Engineering Topics &amp; Competencies:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.keyTopics.map((topic, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tools and Technologies */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Tools:</span>
                        </span>
                        {module.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-cyan-300 font-mono text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Hands-on Lab Deliverable */}
                      <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3 shadow-md">
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-bold text-cyan-200 font-mono">
                            Documented Hands-on Lab Deliverable:
                          </span>
                          <span className="text-xs text-slate-300 leading-relaxed font-mono">
                            {module.labDeliverable}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
