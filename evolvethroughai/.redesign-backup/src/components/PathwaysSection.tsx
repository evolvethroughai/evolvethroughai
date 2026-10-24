import React from 'react';
import { motion } from 'motion/react';
import { PATHWAYS, PROGRAM_CURRICULA } from '../data/curriculumData';
import { CornerBrackets } from './CornerBrackets';
import { ChamferedButton } from './ChamferedButton';
import { 
  Layers, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Shield,
  Cloud,
  Terminal,
  Bot,
  Zap,
  BookOpen,
  Maximize2
} from 'lucide-react';

interface PathwaysSectionProps {
  onOpenApply: () => void;
  onExploreCurriculum: () => void;
  onSelectProgramSyllabus?: (programId: string) => void;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({
  onOpenApply,
  onExploreCurriculum,
  onSelectProgramSyllabus
}) => {
  const handleOpenSyllabus = (programId: string) => {
    if (onSelectProgramSyllabus) {
      onSelectProgramSyllabus(programId);
    } else {
      onExploreCurriculum();
    }
  };

  return (
    <section className="relative w-full bg-[#050811] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="pathways">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Structured Offerings &amp; Interactive Syllabi</span>
            </div>
            <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              5 Super-Headed Programs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Click Any Card to Open Full Syllabus</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every program contains its complete scheduled curriculum, production labs, and capstone defense. Click on any module or specialization card below to open and inspect its full syllabus.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpenSyllabus('flagship')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 text-slate-200 text-xs sm:text-sm font-semibold shadow-md self-start md:self-auto transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Open Syllabus Explorer</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </motion.button>
        </motion.div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PRIMARY FLAGSHIP PROGRAM (Spans 2 columns on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-[#0b1224]/85 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex flex-col justify-between gap-8 relative overflow-hidden glass-panel-card border-beam group cursor-pointer"
            onClick={() => handleOpenSyllabus('flagship')}
          >
            {/* Signature Corner Brackets from Creative Template */}
            <CornerBrackets strokeColor="#02d2e3" size={12} strokeWidth={1.5} />

            <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3.5 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-tech text-xs font-bold uppercase rounded-full shadow-lg shadow-cyan-500/20">
              <Star className="w-3.5 h-3.5 fill-current text-cyan-200" />
              <span>Primary Flagship Offering</span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <span>{PATHWAYS[0].code}</span>
                <span>•</span>
                <span>{PATHWAYS[0].badge}</span>
              </div>

              <h3 className="font-tech font-bold text-2xl sm:text-3xl text-white leading-tight group-hover:text-cyan-300 transition-colors">
                {PATHWAYS[0].title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {PATHWAYS[0].description}
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 text-center font-mono">
                  <div className="font-tech font-bold text-white text-base">18 Modules</div>
                  <div className="text-[11px] text-slate-400">Complete Ramp</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 text-center font-mono">
                  <div className="font-tech font-bold text-white text-base">14 Projects</div>
                  <div className="text-[11px] text-slate-400">Production Repos</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-blue-950/50 border border-blue-500/30 text-center font-mono">
                  <div className="font-tech font-bold text-cyan-300 text-base">Oral RFC</div>
                  <div className="text-[11px] text-cyan-400">Staff Defense</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-violet-950/50 border border-violet-500/30 text-center font-mono">
                  <div className="font-tech font-bold text-violet-300 text-base">Sovereign AI</div>
                  <div className="text-[11px] text-violet-400">vLLM &amp; MCP</div>
                </div>
              </div>

              {/* Key Bullet Highlights */}
              <div className="flex flex-col gap-2 pt-2">
                {PATHWAYS[0].keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {PATHWAYS[0].techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-slate-300 text-xs font-mono font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleOpenSyllabus('flagship')}
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer bg-cyan-950/60 px-4 py-2.5 rounded-xl border border-cyan-500/40 shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Entire 18-Module Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer border border-cyan-400/30"
              >
                <span>Enroll in Flagship</span>
                <ChevronRight className="w-4 h-4 text-cyan-200" />
              </motion.button>
            </div>
          </motion.div>

          {/* PROGRAM 02: Azure DevOps & Cloud */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-blue-500/50 transition-all flex flex-col justify-between gap-6 glass-panel-card group cursor-pointer relative"
            onClick={() => handleOpenSyllabus('azure')}
          >
            <CornerBrackets strokeColor="#3b82f6" size={10} strokeWidth={1.25} />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-blue-400">
                  {PATHWAYS[1].code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-[11px] font-semibold font-mono">
                  8 Modules • Azure Track
                </span>
              </div>

              <h3 className="font-tech font-bold text-xl text-white leading-snug group-hover:text-blue-300 transition-colors">
                {PATHWAYS[1].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {PATHWAYS[1].description}
              </p>

              <div className="flex flex-col gap-2 pt-1 text-xs text-slate-300">
                {PATHWAYS[1].keyPoints.slice(0, 3).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-2 font-mono text-[11px] text-slate-300">
                {PATHWAYS[1].techStack.map((tech) => (
                  <span key={tech} className="bg-slate-950/80 px-2 py-0.5 rounded border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleOpenSyllabus('azure')}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 cursor-pointer bg-blue-950/50 px-3 py-1.5 rounded-lg border border-blue-500/30"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open 8-Module Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenApply}
                className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* PROGRAM 03: AWS DevOps & Cloud */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-500/50 transition-all flex flex-col justify-between gap-6 glass-panel-card group cursor-pointer relative"
            onClick={() => handleOpenSyllabus('aws')}
          >
            <CornerBrackets strokeColor="#02d2e3" size={10} strokeWidth={1.25} />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  {PATHWAYS[2].code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold font-mono">
                  8 Modules • AWS Fleet
                </span>
              </div>

              <h3 className="font-tech font-bold text-xl text-white leading-snug group-hover:text-cyan-300 transition-colors">
                {PATHWAYS[2].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {PATHWAYS[2].description}
              </p>

              <div className="flex flex-col gap-2 pt-1 text-xs text-slate-300">
                {PATHWAYS[2].keyPoints.slice(0, 3).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-2 font-mono text-[11px] text-slate-300">
                {PATHWAYS[2].techStack.map((tech) => (
                  <span key={tech} className="bg-slate-950/80 px-2 py-0.5 rounded border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleOpenSyllabus('aws')}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer bg-cyan-950/50 px-3 py-1.5 rounded-lg border border-cyan-500/30"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open 8-Module Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenApply}
                className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* PROGRAM 04: Forward Deployed AI */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-violet-500/50 transition-all flex flex-col justify-between gap-6 glass-panel-card group cursor-pointer relative"
            onClick={() => handleOpenSyllabus('forward-ai')}
          >
            <CornerBrackets strokeColor="#8b5cf6" size={10} strokeWidth={1.25} />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-violet-400">
                  {PATHWAYS[3].code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-[11px] font-semibold font-mono">
                  8 Modules • AI Runtime
                </span>
              </div>

              <h3 className="font-tech font-bold text-xl text-white leading-snug group-hover:text-violet-300 transition-colors">
                {PATHWAYS[3].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {PATHWAYS[3].description}
              </p>

              <div className="flex flex-col gap-2 pt-1 text-xs text-slate-300">
                {PATHWAYS[3].keyPoints.slice(0, 3).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-2 font-mono text-[11px] text-slate-300">
                {PATHWAYS[3].techStack.map((tech) => (
                  <span key={tech} className="bg-slate-950/80 px-2 py-0.5 rounded border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleOpenSyllabus('forward-ai')}
                className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 cursor-pointer bg-violet-950/50 px-3 py-1.5 rounded-lg border border-violet-500/30"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open 8-Module Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenApply}
                className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* PROGRAM 05: Career & Interview Defense */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-emerald-500/50 transition-all flex flex-col justify-between gap-6 glass-panel-card group cursor-pointer relative"
            onClick={() => handleOpenSyllabus('career-defense')}
          >
            <CornerBrackets strokeColor="#10b981" size={10} strokeWidth={1.25} />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  {PATHWAYS[4].code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold font-mono">
                  6 Modules • Staff Defense
                </span>
              </div>

              <h3 className="font-tech font-bold text-xl text-white leading-snug group-hover:text-emerald-300 transition-colors">
                {PATHWAYS[4].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {PATHWAYS[4].description}
              </p>

              <div className="flex flex-col gap-2 pt-1 text-xs text-slate-300">
                {PATHWAYS[4].keyPoints.slice(0, 3).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-2 font-mono text-[11px] text-slate-300">
                {PATHWAYS[4].techStack.map((tech) => (
                  <span key={tech} className="bg-slate-950/80 px-2 py-0.5 rounded border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleOpenSyllabus('career-defense')}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 cursor-pointer bg-emerald-950/50 px-3 py-1.5 rounded-lg border border-emerald-500/30"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open 6-Module Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenApply}
                className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
