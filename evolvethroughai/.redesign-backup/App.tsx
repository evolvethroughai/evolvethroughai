import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HorizonsSection } from './components/HorizonsSection';
import { DevOpsAiLoopSection } from './components/DevOpsAiLoopSection';
import { AiTelemetrySimulator } from './components/AiTelemetrySimulator';
import { PathwaysSection } from './components/PathwaysSection';
import { CurriculumDeepDive } from './components/CurriculumDeepDive';
import { ProjectsExplorer } from './components/ProjectsExplorer';
import { CareerLadderSection } from './components/CareerLadderSection';
import { AntiVaporwareSection } from './components/AntiVaporwareSection';
import { SolutionsAdvisorySection } from './components/SolutionsAdvisorySection';
import { TuitionCalculator } from './components/TuitionCalculator';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { CorporateSponsorshipModal } from './components/CorporateSponsorshipModal';
import { ProgramSyllabusModal } from './components/ProgramSyllabusModal';
import { MotionFloatingHUD } from './components/MotionFloatingHUD';
import { 
  Home, 
  Layers, 
  Infinity as InfinityIcon, 
  CheckCircle,
  BookOpen,
  Zap
} from 'lucide-react';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isCorpModalOpen, setIsCorpModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [activeProgramId, setActiveProgramId] = useState<string>('flagship');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProgramSyllabus = (programId: string = 'flagship') => {
    setActiveProgramId(programId);
    setIsSyllabusModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050811] text-white flex flex-col selection:bg-cyan-400 selection:text-black">
        {/* Interactive Kinetic Motion Floating HUD */}
        <MotionFloatingHUD
          onOpenSyllabusModal={handleOpenProgramSyllabus}
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* Top Fixed Header */}
      <Navbar
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenCurriculum={() => scrollTo('curriculum-deep-dive')}
        onOpenSyllabusModal={handleOpenProgramSyllabus}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section with Live Automated Pipeline Runner & WebGL Shader */}
        <HeroSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onExploreLoop={() => scrollTo('devops-loop')}
          onExploreCurriculum={() => scrollTo('curriculum-deep-dive')}
          onSelectProgramSyllabus={handleOpenProgramSyllabus}
        />

        {/* 2. The Three Horizons of Evolve Through AI */}
        <HorizonsSection
          onExplorePrograms={() => scrollTo('pathways')}
          onExploreAdvisory={() => scrollTo('solutions')}
        />

        {/* 3. Signature DevOps-for-AI Infinity Loop (Automated Pulsing Flow) */}
        <DevOpsAiLoopSection />

        {/* 4. Interactive Live AI Telemetry & Infrastructure Simulator */}
        <AiTelemetrySimulator />

        {/* 5. 5 Super-Headed Engineering Pathways (Click Any to Open Entire Syllabus) */}
        <PathwaysSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onExploreCurriculum={() => scrollTo('curriculum-deep-dive')}
          onSelectProgramSyllabus={handleOpenProgramSyllabus}
        />

        {/* 6. Complete Curriculum Deep Dive for All 5 Programs */}
        <CurriculumDeepDive
          onRequestSyllabus={() => setIsCorpModalOpen(true)}
          activeProgramId={activeProgramId}
          onProgramChange={setActiveProgramId}
          onOpenSyllabusModal={handleOpenProgramSyllabus}
        />

        {/* 7. 14 Auditable Production Projects & 8-Stage Capstone */}
        <ProjectsExplorer />

        {/* 8. The 4-Stage Career Evolution Ladder */}
        <CareerLadderSection />

        {/* 9. The Anti-Vaporware Charter */}
        <AntiVaporwareSection />

        {/* 10. Technology Solutions & Advisory */}
        <SolutionsAdvisorySection
          onInquireAdvisory={() => setIsApplyModalOpen(true)}
        />

        {/* 11. Tuition & Cohort Admission Calculator */}
        <TuitionCalculator
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenCorporatePacket={() => setIsCorpModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenApply={() => setIsApplyModalOpen(true)}
        onExploreCurriculum={() => scrollTo('curriculum-deep-dive')}
      />

      {/* Mobile Floating Bottom Quick-Nav Bar */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#050811]/90 backdrop-blur-2xl border-t border-white/10 px-3 py-2 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.6)]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </button>

        <button
          onClick={() => scrollTo('pathways')}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">5 Tracks</span>
        </button>

        <button
          onClick={() => handleOpenProgramSyllabus('flagship')}
          className="flex flex-col items-center justify-center text-cyan-400 font-semibold py-1 cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <span className="text-[10px] font-mono mt-0.5 text-cyan-300">Syllabi</span>
        </button>

        <button
          onClick={() => scrollTo('devops-loop')}
          className="flex flex-col items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
        >
          <InfinityIcon className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">AI Loop</span>
        </button>

        <button
          onClick={() => setIsApplyModalOpen(true)}
          className="flex flex-col items-center justify-center text-cyan-400 font-semibold py-1 cursor-pointer"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Apply</span>
        </button>
      </nav>

      {/* Program Syllabus Interactive Inspector Modal */}
      <ProgramSyllabusModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        initialProgramId={activeProgramId}
        onOpenApply={() => {
          setIsSyllabusModalOpen(false);
          setIsApplyModalOpen(true);
        }}
      />

      {/* Application Intake Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      {/* Corporate Sponsorship / Syllabus Packet Modal */}
      <CorporateSponsorshipModal
        isOpen={isCorpModalOpen}
        onClose={() => setIsCorpModalOpen(false)}
      />
    </div>
  </MotionConfig>
  );
}
