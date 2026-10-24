import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_14, CAPSTONE_STAGES } from '../data/curriculumData';
import { 
  Terminal, 
  GitBranch, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Server, 
  Sparkles,
  CheckCircle,
  FolderGit2
} from 'lucide-react';

export const ProjectsExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCapstoneStage, setActiveCapstoneStage] = useState<number>(0);

  const categories = ['All', 'Foundation', 'CI/CD & Containers', 'Kubernetes & Cloud', 'SRE & AI'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_14
    : PROJECTS_14.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full bg-[#050811] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden" id="capstone-projects">
      {/* Background Decorators */}
      <div className="absolute inset-0 ai-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        
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
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Evidence-Based Portfolio &amp; Capstone</span>
            </div>
            <h2 className="font-tech font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              14 Production Repositories &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">The 8-Stage Capstone</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every graduate leaves with a verifiable GitHub organization containing 14 production codebases,
              culminating in an oral architectural defense of their complete sovereign AI infrastructure mesh.
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 font-semibold shadow-md self-start md:self-auto">
            Zero Simulated Web Sandboxes
          </div>
        </motion.div>

        {/* PART 1: The 8-Stage Enterprise Capstone Journey Flow */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#080e22]/90 text-white shadow-2xl border border-cyan-500/30 flex flex-col gap-8 relative overflow-hidden backdrop-blur-2xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-2 relative z-10">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Flagship Capstone Journey</span>
            </div>
            <h3 className="font-tech font-bold text-2xl sm:text-3xl text-white">
              The 8-Stage Enterprise Capstone
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Planning → Source Control → Build → Test &amp; Security → Containerization → Infrastructure → Kubernetes Deployment → Observability → AI Loop
            </p>
          </div>

          {/* 8 Stages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative z-10">
            {CAPSTONE_STAGES.map((stage, idx) => {
              const isSelected = activeCapstoneStage === idx;
              return (
                <motion.button
                  key={stage.stageNumber}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCapstoneStage(idx)}
                  className={`relative p-3 rounded-xl text-left transition-all border flex flex-col gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-950/80 border-white/5 hover:border-white/20'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-capstone-stage"
                      className="absolute inset-0 border-2 border-cyan-400 rounded-xl pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                    {stage.stageNumber} {stage.code}
                  </span>
                  <span className="text-xs font-bold text-white truncate font-tech">
                    {stage.title}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {stage.subtitle}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Capstone Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-col md:flex-row items-start justify-between gap-6 backdrop-blur-xl relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCapstoneStage}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2 max-w-2xl"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <span>STAGE {CAPSTONE_STAGES[activeCapstoneStage].stageNumber}: {CAPSTONE_STAGES[activeCapstoneStage].code}</span>
                </div>
                <h4 className="font-tech font-bold text-xl sm:text-2xl text-white">
                  {CAPSTONE_STAGES[activeCapstoneStage].title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {CAPSTONE_STAGES[activeCapstoneStage].description}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400">Stack:</span>
                  {CAPSTONE_STAGES[activeCapstoneStage].technologies.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-cyan-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 min-w-full md:min-w-[280px] flex flex-col gap-1.5 shadow-lg">
              <span className="text-[11px] font-mono text-cyan-400 uppercase">Git Repository Target</span>
              <span className="text-sm font-bold text-cyan-200 font-mono">
                {CAPSTONE_STAGES[activeCapstoneStage].repoName}
              </span>
              <span className="text-xs text-slate-400 mt-1 leading-relaxed">
                Audited line-by-line during the live oral RFC defense with Staff SRE reviewers.
              </span>
            </div>
          </div>
        </motion.div>

        {/* PART 2: The 14 Documented Practical Projects Explorer */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-tech font-bold text-2xl sm:text-3xl text-white">
                14 Hands-On Documented Repositories
              </h3>
              <p className="text-slate-300 text-sm">
                Each project resolves a specific enterprise bottleneck with full production architecture.
              </p>
            </div>

            {/* Filter Tabs with Motion Indicator */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected ? 'text-white' : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-projects-cat"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects 2-Column Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 shadow-lg hover:border-cyan-400/40 transition-all flex flex-col justify-between gap-5 glass-panel-card"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-lg border border-cyan-500/40 shadow-sm">
                        PROJECT {project.number}
                      </span>
                      <span className="text-xs text-slate-400 font-medium font-mono">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="font-tech font-bold text-lg text-white">
                      {project.title}
                    </h4>

                    {/* Problem & Architecture */}
                    <div className="flex flex-col gap-2 pt-1 text-xs">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-slate-300 font-mono">Enterprise Problem:</span>
                        <p className="text-slate-400 leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-slate-300 font-mono">Architecture:</span>
                        <p className="text-slate-400 leading-relaxed">{project.architecture}</p>
                      </div>
                    </div>

                    {/* Deliverables Bullet List */}
                    <div className="flex flex-col gap-1.5 pt-2">
                      <span className="text-xs font-bold text-slate-200 font-tech">Practical Deliverables:</span>
                      {project.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-white/5 text-cyan-300 font-mono text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-cyan-400 font-semibold">
                      repo: {project.repoSlug}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Verified GPG Commit
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
