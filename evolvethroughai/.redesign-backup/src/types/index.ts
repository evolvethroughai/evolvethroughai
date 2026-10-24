export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  keyTopics: string[];
  tools: string[];
  labDeliverable: string;
}

export interface ProgramCurriculum {
  id: string;
  code: string;
  tag: string;
  title: string;
  shortTitle: string;
  badge: string;
  level: string;
  description: string;
  durationWeeks: string;
  totalLabs: number;
  capstoneName: string;
  techStack: string[];
  keyHighlights: string[];
  modules: ModuleItem[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'Foundation' | 'CI/CD & Containers' | 'Kubernetes & Cloud' | 'SRE & AI';
  problem: string;
  architecture: string;
  technologies: string[];
  deliverables: string[];
  learningOutcome: string;
  repoSlug: string;
}

export interface CapstoneStage {
  stageNumber: string;
  code: string;
  title: string;
  subtitle: string;
  repoName: string;
  description: string;
  technologies: string[];
}

export interface PathwayItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  level: string;
  keyPoints: string[];
  techStack: string[];
  isFlagship?: boolean;
}

export interface DevOpsStage {
  id: number;
  stepNumber: string;
  shortName: string;
  toolchain: string;
  title: string;
  description: string;
  aiAdditive: string;
  aiDetail: string;
  keyArtifact: string;
}
