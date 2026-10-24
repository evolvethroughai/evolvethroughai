import { ModuleItem, ProjectItem, CapstoneStage, PathwayItem, DevOpsStage, ProgramCurriculum } from '../types';

export const FLAGSHIP_MODULES: ModuleItem[] = [
  {
    id: 'mod-01',
    number: '01',
    title: 'DevOps, SDLC, Agile & Enterprise Architecture',
    category: 'Foundations',
    description: 'Software development lifecycle, Agile, Scrum, Jira, Azure Boards, user stories, sprint planning, corporate engineering workflows, Git integration, smart commits, traceability, and AI-assisted development.',
    keyTopics: [
      'Agile/Scrum ceremonies & backlog refinement at enterprise scale',
      'Jira & Azure Boards work item linking and traceability',
      'Smart commit syntax (fixes #issue, ref RFC) and branch policies',
      'SDLC gatekeeping & change advisory board (CAB) mitigation',
      'AI-assisted spec generation and requirements threat analysis'
    ],
    tools: ['Jira', 'Azure Boards', 'Confluence', 'Git', 'Claude Spec Prompter'],
    labDeliverable: 'Production RFC specification & Azure Boards sprint backlog mapped to Git commit hashes.'
  },
  {
    id: 'mod-02',
    number: '02',
    title: 'Linux, Windows & System Administration',
    category: 'Foundations',
    description: 'Operating systems, command-line skills, administration, permissions, services, networking, troubleshooting, and foundational infrastructure concepts.',
    keyTopics: [
      'POSIX syscalls, signals (SIGTERM, SIGKILL), process lifecycle',
      'cgroups v2 resource isolation and namespace segmentation',
      'Linux permissions, ACLs, PAM authentication, and SSH hardening',
      'systemd units, timer daemons, journalctl log inspection',
      'Networking diagnostics (ss, ip, tcpdump, strace, curl, lsof)'
    ],
    tools: ['Ubuntu Linux', 'systemd', 'cgroups v2', 'OpenSSH', 'strace', 'tcpdump'],
    labDeliverable: 'Hardened Linux bastion server running isolated multi-user systemd daemon with granular resource quotas.'
  },
  {
    id: 'mod-03',
    number: '03',
    title: 'Shell, Bash & Production Automation',
    category: 'Foundations',
    description: 'Shell scripting, Bash, reusable automation, operational scripting, error traps, and practical engineering workflows.',
    keyTopics: [
      'Defensive Bash programming: set -euo pipefail, trap handlers',
      'Command line argument parsing (getopts) and environment isolation',
      'Text stream manipulation with awk, sed, grep, and jq',
      'Automated health-check scripts and auto-remediation daemons',
      'Building reusable CLI utilities for developer environments'
    ],
    tools: ['Bash', 'jq', 'awk', 'sed', 'ShellCheck'],
    labDeliverable: 'Robust CLI backup and health verification suite with zero unhandled signals and JSON output.'
  },
  {
    id: 'mod-04',
    number: '04',
    title: 'Git, GitHub, GitLab & Enterprise Release Workflows',
    category: 'DevOps & CI/CD',
    description: 'Version control, branching strategies, pull requests, code reviews, merge workflows, collaboration, and release management.',
    keyTopics: [
      'Trunk-based development vs GitHub flow vs Gitflow in enterprise',
      'GPG commit signing, branch protection rules, and CODEOWNERS',
      'Interactive rebasing, bisecting regression bugs, reflog recovery',
      'Automated GitHub Actions and GitLab CI pre-merge checks',
      'Semantic versioning (SemVer) and automated changelog generation'
    ],
    tools: ['Git', 'GitHub Enterprise', 'GitLab', 'GPG', 'Commitlint'],
    labDeliverable: 'Cryptographically signed Git repository with branch protections, CODEOWNERS matrix, and automated linter hooks.'
  },
  {
    id: 'mod-05',
    number: '05',
    title: 'Maven & Build Engineering',
    category: 'DevOps & CI/CD',
    description: 'Java build systems, Maven, dependencies, artifacts, build lifecycles, and build automation.',
    keyTopics: [
      'POM structure, inheritance, dependency management, and scopes',
      'Maven lifecycle phases: compile, test, package, verify, deploy',
      'Managing transitive dependencies and resolving class-path collisions',
      'Integrating plugins: Surefire, Failsafe, Jacoco test coverage',
      'Publishing immutable artifacts to Nexus and JFrog Artifactory'
    ],
    tools: ['Apache Maven', 'OpenJDK', 'Jacoco', 'JFrog Artifactory'],
    labDeliverable: 'Deterministic multi-module Java build generating reproducible JAR artifacts and unit test coverage reports.'
  },
  {
    id: 'mod-06',
    number: '06',
    title: 'Docker & Container Engineering',
    category: 'DevOps & CI/CD',
    description: 'Container fundamentals, Dockerfiles, images, registries, networking, storage, Docker Compose, and application containerization.',
    keyTopics: [
      'OCI image specs, Linux container namespaces and overlay2 storage driver',
      'Multi-stage Dockerfiles and distroless minimal base images',
      'Container networking: bridge, host, overlay, port mapping',
      'Volume mounts, bind mounts, and persistent data lifecycle',
      'Multi-container topology orchestration using Docker Compose'
    ],
    tools: ['Docker', 'Docker Compose', 'Google Distroless', 'Dive Image Inspector'],
    labDeliverable: 'Distroless multi-stage containerized microservice running under 25MB with non-root security context.'
  },
  {
    id: 'mod-07',
    number: '07',
    title: 'Kubernetes, AKS, Helm, Ingress & GitOps',
    category: 'Cloud & K8s',
    description: 'Kubernetes workloads, AKS, services, ingress, configuration, secrets, Helm, GitOps, ArgoCD, and deployment practices.',
    keyTopics: [
      'Control plane architecture, kube-apiserver, etcd, kube-scheduler',
      'Workload primitives: Pods, Deployments, StatefulSets, DaemonSets, Jobs',
      'Networking: ClusterIP, NodePort, LoadBalancer, and Ingress routing',
      'Helm 3 package templating, values schema, and release lifecycles',
      'Declarative GitOps continuous reconciliation with ArgoCD'
    ],
    tools: ['Kubernetes', 'Azure Kubernetes Service (AKS)', 'Helm 3', 'ArgoCD', 'kubectl'],
    labDeliverable: 'Multi-service microservices fleet deployed on AKS via Helm charts and continuously synced by ArgoCD.'
  },
  {
    id: 'mod-08',
    number: '08',
    title: 'Nginx, Tomcat & Kong API Gateway',
    category: 'Cloud & K8s',
    description: 'Web servers, application servers, reverse proxies, routing, load balancing, and API gateway concepts.',
    keyTopics: [
      'Nginx reverse proxy configuration, HTTP/2, SSL termination',
      'Upstream load-balancing algorithms (round-robin, least_conn, ip_hash)',
      'Apache Tomcat servlet container configuration and tuning',
      'Kong API Gateway plugins: rate limiting, OAuth authentication, JWT validation',
      'Zero-downtime blue/green routing transitions via proxy configurations'
    ],
    tools: ['Nginx', 'Apache Tomcat', 'Kong Gateway', 'OpenSSL'],
    labDeliverable: 'Hardened edge gateway terminating TLS and enforcing token rate-limits for downstream application backends.'
  },
  {
    id: 'mod-09',
    number: '09',
    title: 'SonarQube, Code Quality & DevSecOps',
    category: 'Security & DevSecOps',
    description: 'Static analysis, code quality, security scanning, pipeline quality gates, dependency security, and secure engineering.',
    keyTopics: [
      'Static Application Security Testing (SAST) with SonarQube',
      'Configuring strict Quality Gates to block degraded pull requests',
      'Software Composition Analysis (SCA) with OWASP Dependency-Check',
      'Container image vulnerability scanning with Trivy and Grype',
      'Integrating security gates directly into CI/CD build steps'
    ],
    tools: ['SonarQube', 'Trivy', 'OWASP Dependency-Check', 'GitHub CodeQL'],
    labDeliverable: 'Automated CI quality gate blocking builds on critical CVEs or code coverage drops below 80%.'
  },
  {
    id: 'mod-10',
    number: '10',
    title: 'Azure Cloud Foundations & Advanced Networking',
    category: 'Cloud & K8s',
    description: 'Cloud foundations, Azure networking, identity, architecture, connectivity, and enterprise networking concepts.',
    keyTopics: [
      'Azure Resource Manager (ARM), subscriptions, resource groups, and RBAC',
      'Virtual Networks (VNets), subnets, Network Security Groups (NSGs)',
      'Hub-and-spoke enterprise topology and VNet Peering',
      'Azure Private Endpoints, Private DNS Zones, and route tables',
      'Microsoft Entra ID (formerly Azure AD) tenant management and service principals'
    ],
    tools: ['Microsoft Azure', 'Azure CLI', 'Virtual Networks', 'Entra ID', 'Azure Firewall'],
    labDeliverable: 'Isolated enterprise hub-and-spoke VNet topology with zero public internet egress on application subnets.'
  },
  {
    id: 'mod-11',
    number: '11',
    title: 'Azure Core Services & Cloud-Native Applications',
    category: 'Cloud & K8s',
    description: 'Azure services, application hosting, storage, compute, networking, cloud-native application architecture, and practical deployments.',
    keyTopics: [
      'Azure Virtual Machines, VM Scale Sets (VMSS), and availability zones',
      'Azure App Services (Linux containers), deployment slots, auto-scaling',
      'Azure Blob Storage, managed disks, and Azure Files',
      'Azure SQL Database & Cosmos DB high availability replication',
      'Azure Event Grid and Service Bus asynchronous decoupling'
    ],
    tools: ['Azure App Service', 'VMSS', 'Azure Blob Storage', 'Cosmos DB', 'Azure Service Bus'],
    labDeliverable: 'Scalable cloud-native web application deployed on Azure App Services with managed identity and geo-redundant storage.'
  },
  {
    id: 'mod-12',
    number: '12',
    title: 'Azure DevOps & Enterprise CI/CD',
    category: 'DevOps & CI/CD',
    description: 'Azure Boards, Repos, Pipelines, agents, service connections, artifacts, secrets, approvals, environments, and multistage pipelines.',
    keyTopics: [
      'Multi-stage YAML pipelines: build, security scan, deploy, test',
      'Self-hosted Linux agent pools vs Microsoft-hosted agents',
      'Service Connections with workload identity federation (OIDC)',
      'Azure Key Vault secret integration into pipeline environment variables',
      'Environment approvals, manual checks, and automated health gates'
    ],
    tools: ['Azure Pipelines', 'Azure Repos', 'Azure Key Vault', 'Workload Identity'],
    labDeliverable: 'Production 4-stage YAML pipeline building, scanning, and deploying to staging and production with approval gates.'
  },
  {
    id: 'mod-13',
    number: '13',
    title: 'Terraform, Terragrunt & Infrastructure as Code',
    category: 'Cloud & K8s',
    description: 'Terraform, Terragrunt, infrastructure provisioning, modules, state management, reusable infrastructure, and automated cloud deployments.',
    keyTopics: [
      'HashiCorp Configuration Language (HCL), providers, and resources',
      'Remote state backends (Azure Blob / AWS S3) with distributed locking',
      'Reusable module design: inputs, outputs, locals, and versioning',
      'Terragrunt DRY configurations for multi-environment staging/prod',
      'Terraform Cloud / GitHub Actions automated plan and apply workflows'
    ],
    tools: ['Terraform', 'Terragrunt', 'OpenTofu', 'TFLint', 'Checkov'],
    labDeliverable: 'Complete multi-region AKS infrastructure declared via DRY Terragrunt modules with zero hardcoded credentials.'
  },
  {
    id: 'mod-14',
    number: '14',
    title: 'Observability & Site Reliability Engineering',
    category: 'SRE & AI',
    description: 'Prometheus, PromQL, Grafana, Alertmanager, Azure Monitor, logs, metrics, traces, service reliability, and operational monitoring.',
    keyTopics: [
      'The Three Pillars of Observability: Metrics, Logs, Distributed Traces',
      'Prometheus architecture, pull-based scraping, PromQL queries',
      'Alertmanager routing, deduplication, silences, and PagerDuty webhooks',
      'Building Grafana executive and engineering dashboards',
      'OpenTelemetry (OTel) collectors and distributed tracing spans'
    ],
    tools: ['Prometheus', 'Grafana', 'Alertmanager', 'OpenTelemetry', 'Azure Monitor'],
    labDeliverable: 'Comprehensive SRE cockpit displaying RED (Rate, Errors, Duration) metrics with dynamic threshold alerts.'
  },
  {
    id: 'mod-15',
    number: '15',
    title: 'AI-Powered DevOps',
    category: 'SRE & AI',
    description: 'AI-assisted scripting, Claude, GitHub Copilot, prompting, AI-supported troubleshooting, AIOps, agentic concepts, human approvals, and responsible automation.',
    keyTopics: [
      'Prompt engineering for infrastructure automation and regex/parsing',
      'Using Claude and Copilot for pipeline YAML and Dockerfile authoring',
      'Automated root-cause analysis: parsing Kubernetes crash dumps with LLMs',
      'Model Context Protocol (MCP) tool integration into operational workflows',
      'Human-in-the-loop safety boundaries for automated AI infrastructure changes'
    ],
    tools: ['Claude 3.7', 'GitHub Copilot', 'Model Context Protocol (MCP)', 'AIOps CLI'],
    labDeliverable: 'Supervised AI triage assistant that diagnoses Kubernetes OOMKilled events and drafts corrective pull requests.'
  },
  {
    id: 'mod-16',
    number: '16',
    title: 'Enterprise Security',
    category: 'Security & DevSecOps',
    description: 'IAM, RBAC, Key Vault, secrets management, secure pipelines, container scanning, Kubernetes security, and software supply-chain protection.',
    keyTopics: [
      'Zero-trust architecture and principle of least privilege (PoLP)',
      'Azure Key Vault and HashiCorp Vault dynamic secret generation',
      'Kubernetes security contexts, Pod Security Standards, NetworkPolicies',
      'Supply chain security: SBOM generation with Syft, Sigstore Cosign signing',
      'Secret scanning and automated prevention in Git pre-commit hooks'
    ],
    tools: ['Azure Key Vault', 'Cosign', 'Syft', 'Cilium NetworkPolicies', 'TruffleHog'],
    labDeliverable: 'End-to-end cryptographic supply-chain gate verifying Cosign image signatures before allowing Kubernetes pod scheduling.'
  },
  {
    id: 'mod-17',
    number: '17',
    title: 'Production Operations',
    category: 'SRE & AI',
    description: 'Release planning, deployment strategies, blue/green and canary releases, rollbacks, incidents, root cause analysis, runbooks, and reliability practices.',
    keyTopics: [
      'Progressive delivery: Canary deployments with Argo Rollouts and Prometheus metrics',
      'Automated rollback policies triggered by HTTP 5xx error rate spikes',
      'Incident management: severity tiers, incident commander roles, and timelines',
      'Blameless post-mortem writing and preventive action item tracking',
      'Chaos engineering fundamentals and simulated failure testing'
    ],
    tools: ['Argo Rollouts', 'Prometheus Metrics Gates', 'Runbooks', 'Incident Triage Engine'],
    labDeliverable: 'Automated Argo Rollouts canary release that automatically halts and rolls back upon detecting synthetic 5% error injection.'
  },
  {
    id: 'mod-18',
    number: '18',
    title: 'Enterprise Projects & Sovereign Capstone',
    category: 'SRE & AI',
    description: 'Integration of the complete engineering curriculum through the documented practical projects and final enterprise capstone.',
    keyTopics: [
      'Synthesizing all 17 previous domains into a unified production architecture',
      'End-to-end trace from Jira requirement to live Kubernetes endpoint',
      'Multi-cloud resilience and disaster recovery failover drill',
      'Serving open-weights LLMs (vLLM) on private compute clusters',
      'Oral architectural defense before Staff Platform and SRE engineers'
    ],
    tools: ['Full Enterprise Cloud & AI Stack', '14 Repositories', 'vLLM', 'ArgoCD'],
    labDeliverable: 'Complete 8-stage enterprise capstone deployed to live infrastructure and defended in an oral architecture review.'
  }
];

export const PROJECTS_14: ProjectItem[] = [
  {
    id: 'proj-01',
    number: '01',
    title: 'Enterprise Git Workflow & Governance',
    category: 'Foundation',
    problem: 'Enterprises struggle with merge conflicts, leaked secrets, untracked commits, and unstable release branches.',
    architecture: 'Trunk-based branch protection rules, GPG commit verification, automated pre-commit secret scanning hooks, and CODEOWNERS validation.',
    technologies: ['Git', 'GPG', 'GitHub Actions', 'TruffleHog', 'Husky'],
    deliverables: [
      'Cryptographically signed Git repository template',
      'Pre-commit hooks rejecting private keys and unformatted code',
      'Automated PR review assignment matrix via CODEOWNERS'
    ],
    learningOutcome: 'Master enterprise branch hygiene, cryptographic non-repudiation, and automated gatekeeping.',
    repoSlug: 'enterprise-git-governance'
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'Java CI Pipeline with Maven & SonarQube Quality Gates',
    category: 'CI/CD & Containers',
    problem: 'Code containing technical debt, security bugs, and poor test coverage reaching downstream environments.',
    architecture: 'Automated CI pipeline compiling Java code with Maven, executing unit tests with Jacoco, and failing builds when SonarQube quality gates are missed.',
    technologies: ['Apache Maven', 'SonarQube', 'GitHub Actions', 'Jacoco', 'Java 17'],
    deliverables: [
      'Multi-stage Maven build configuration with POM inheritance',
      'SonarQube integration enforcing >80% coverage and zero vulnerabilities',
      'Automated build status notifications to Slack/Teams'
    ],
    learningOutcome: 'Implement automated code quality boundaries that defend production before containers are built.',
    repoSlug: 'java-ci-sonarqube-pipeline'
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'High-Performance Containerized Java Application',
    category: 'CI/CD & Containers',
    problem: 'Bloated 800MB container images containing package managers, compilers, and root vulnerabilities.',
    architecture: 'Multi-stage Dockerfile utilizing eclipse-temurin for compilation and Google distroless for execution with non-root security context.',
    technologies: ['Docker', 'Google Distroless', 'Spring Boot', 'Dive CLI'],
    deliverables: [
      'Production Dockerfile producing an immutable 140MB container image',
      'Non-root user execution context with drop-all Linux capabilities',
      'Security audit report via Dive verifying zero unnecessary layer bloat'
    ],
    learningOutcome: 'Drastically minimize container attack surface and optimize cold-start performance.',
    repoSlug: 'distroless-java-microservice'
  },
  {
    id: 'proj-04',
    number: '04',
    title: 'React Application Containerization & CDN Edge Cache',
    category: 'CI/CD & Containers',
    problem: 'Single-page applications crashing on client-side routing and poorly cached static assets.',
    architecture: 'Two-stage container: Node.js 20 build stage producing static production bundles, served via high-performance Nginx with HTML5 pushState fallback and Brotli compression.',
    technologies: ['React', 'Vite', 'Nginx Alpine', 'Docker', 'Brotli'],
    deliverables: [
      'Multi-stage build reducing image to 22MB',
      'Custom nginx.conf with security headers (CSP, HSTS, X-Frame-Options)',
      'Sub-50ms static asset delivery configuration'
    ],
    learningOutcome: 'Architect secure, high-throughput frontend delivery with proper reverse proxy routing.',
    repoSlug: 'react-nginx-edge-container'
  },
  {
    id: 'proj-05',
    number: '05',
    title: 'Docker Compose Multi-Tier App & Persistent Database',
    category: 'CI/CD & Containers',
    problem: 'Developers unable to reproduce identical multi-service cloud topologies on local development workstations.',
    architecture: 'Coordinated multi-service Docker Compose topology: frontend, backend API, Redis cache, and PostgreSQL with named volumes, healthchecks, and internal bridge networks.',
    technologies: ['Docker Compose', 'PostgreSQL', 'Redis', 'Node.js', 'Healthchecks'],
    deliverables: [
      'docker-compose.yml declaring isolated backend and frontend networks',
      'Persistent volume mounts ensuring zero data loss across restarts',
      'Automated database migration service executing prior to API initialization'
    ],
    learningOutcome: 'Orchestrate distributed service dependencies, container networking, and persistent storage.',
    repoSlug: 'docker-compose-multi-tier'
  },
  {
    id: 'proj-06',
    number: '06',
    title: 'Kubernetes Microservices Deployment on AKS',
    category: 'Kubernetes & Cloud',
    problem: 'Single points of failure, lack of auto-scaling, and manual server patching for application workloads.',
    architecture: 'Multi-tenant deployment on Azure Kubernetes Service (AKS) with Horizontal Pod Autoscaler (HPA), readiness/liveness probes, ConfigMaps, and Secret references.',
    technologies: ['Kubernetes', 'AKS', 'kubectl', 'HPA', 'Azure Key Vault Provider'],
    deliverables: [
      'Complete K8s manifests: Deployments, Services, HPA, and PodDisruptionBudgets',
      'Zero-downtime rolling update strategy with maxUnavailable: 0',
      'Automated pod horizontal scaling based on CPU and memory thresholds'
    ],
    learningOutcome: 'Operate resilient, self-healing microservice workloads on managed enterprise Kubernetes.',
    repoSlug: 'aks-microservices-deploy'
  },
  {
    id: 'proj-07',
    number: '07',
    title: 'Production-Grade Ingress Architecture with TLS & Kong',
    category: 'Kubernetes & Cloud',
    problem: 'Uncontrolled external access, lack of SSL termination, and no centralized API rate-limiting.',
    architecture: 'NGINX Ingress Controller / Kong Gateway routing external traffic, integrated with cert-manager for automated Let\'s Encrypt TLS certificate lifecycle.',
    technologies: ['cert-manager', 'Kong API Gateway', 'Let\'s Encrypt', 'Ingress', 'TLS/SSL'],
    deliverables: [
      'Automated cert-manager ClusterIssuer configuration for TLS issuance',
      'Ingress path-based routing rules for 3 distinct microservices',
      'Kong rate-limiting plugin restricting malicious traffic to 100 req/min'
    ],
    learningOutcome: 'Design production ingress routing, automated TLS certificate renewal, and API edge protection.',
    repoSlug: 'ingress-tls-kong-mesh'
  },
  {
    id: 'proj-08',
    number: '08',
    title: 'Helm & ArgoCD GitOps Continuous Delivery',
    category: 'Kubernetes & Cloud',
    problem: 'Configuration drift between cluster state and Git, leading to mystery outages during manual kubectl edits.',
    architecture: 'Helm 3 parameterized charts stored in Git, managed by ArgoCD controller enforcing desired state with automated drift self-healing and sync waves.',
    technologies: ['Helm 3', 'ArgoCD', 'GitOps', 'K8s', 'GitHub'],
    deliverables: [
      'Modular Helm chart with environment-specific values.yaml (dev, staging, prod)',
      'ArgoCD Application Custom Resources declaring automated sync policies',
      'Sync wave ordering ensuring databases start before API containers'
    ],
    learningOutcome: 'Implement true declarative GitOps continuous delivery without direct kubectl cluster credentials.',
    repoSlug: 'helm-argocd-gitops-fleet'
  },
  {
    id: 'proj-09',
    number: '09',
    title: 'Azure Multi-Region Cloud Application Architecture',
    category: 'Kubernetes & Cloud',
    problem: 'Regional cloud outages rendering corporate applications completely unavailable.',
    architecture: 'Active-passive multi-region Azure architecture utilizing Azure Front Door global routing, paired regions, geo-replicated Blob storage, and failover health probes.',
    technologies: ['Azure Front Door', 'Azure App Service', 'Blob Geo-Replication', 'Azure Traffic Manager'],
    deliverables: [
      'Multi-region resource provisioning with regional failover health probes',
      'Azure Front Door SSL offloading and global WAF rule sets',
      'Automated DNS failover drill completing under 45 seconds'
    ],
    learningOutcome: 'Architect enterprise cloud infrastructure resilient to catastrophic regional outages.',
    repoSlug: 'azure-multi-region-resilience'
  },
  {
    id: 'proj-10',
    number: '10',
    title: 'Azure DevOps End-to-End Enterprise CI/CD Pipeline',
    category: 'CI/CD & Containers',
    problem: 'Siloed development teams throwing code over the wall with zero automated deployment verification.',
    architecture: 'Multi-stage Azure DevOps YAML pipeline orchestrating build, test, container push to Azure Container Registry (ACR), and deployment to AKS with manual approval gates.',
    technologies: ['Azure Pipelines', 'ACR', 'AKS', 'Workload Identity Federation', 'YAML'],
    deliverables: [
      'Complete 4-stage azure-pipelines.yml with variable group secret management',
      'OIDC Workload Identity Federation replacing fragile long-lived passwords',
      'Automated post-deployment smoke test suite with instant rollback on error'
    ],
    learningOutcome: 'Build enterprise-grade, auditable CI/CD pipelines compliant with corporate security controls.',
    repoSlug: 'azure-devops-enterprise-pipeline'
  },
  {
    id: 'proj-11',
    number: '11',
    title: 'Terraform & Terragrunt Multi-Environment IaC',
    category: 'Kubernetes & Cloud',
    problem: 'Duplicate Terraform code across dev/prod causing configuration drift and fat-finger outages.',
    architecture: 'DRY infrastructure-as-code architecture utilizing Terragrunt to wrap reusable Terraform modules across multiple cloud environments with remote state locking.',
    technologies: ['Terraform', 'Terragrunt', 'Azure Blob Backend', 'TFLint', 'OpenTofu'],
    deliverables: [
      'Reusable root Terraform modules for VNets, Subnets, and AKS',
      'Terragrunt live environment hierarchy eliminating 90% of boilerplate HCL',
      'Remote state locking preventing concurrent destructive applies'
    ],
    learningOutcome: 'Master DRY, modular, and auditable infrastructure as code across large multi-account organizations.',
    repoSlug: 'terragrunt-multicloud-iac'
  },
  {
    id: 'proj-12',
    number: '12',
    title: 'Automated Infrastructure & App Deployment Orchestrator',
    category: 'Kubernetes & Cloud',
    problem: 'Disjointed provisioning where infrastructure teams and application teams work in uncoordinated silos.',
    architecture: 'Unified pipeline orchestrator that triggers Terraform infrastructure provisioning, runs automated health checks, and triggers ArgoCD application sync upon cluster ready.',
    technologies: ['GitHub Actions', 'Terraform CLI', 'ArgoCD CLI', 'Bash', 'Cosign'],
    deliverables: [
      'End-to-end orchestration workflow connecting IaaS and application layers',
      'Automated cluster readiness polling before application manifest deployment',
      'Comprehensive audit log summarizing infrastructure changes and commit origins'
    ],
    learningOutcome: 'Connect cloud infrastructure provisioning directly into modern continuous application delivery.',
    repoSlug: 'infra-app-orchestrator'
  },
  {
    id: 'proj-13',
    number: '13',
    title: 'AKS Production Observability Platform (Prometheus & Grafana)',
    category: 'SRE & AI',
    problem: 'Operating blind in production: learning about customer outages from Twitter instead of internal alerts.',
    architecture: 'Kube-Prometheus-Stack deployed on AKS, collecting node, pod, and service metrics, paired with Alertmanager alerts and curated Grafana executive dashboards.',
    technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'PromQL', 'Node Exporter'],
    deliverables: [
      'Custom Grafana dashboard visualizing latency percentiles (p50, p95, p99)',
      'Alertmanager alerting rules for pod crash loops and memory pressure',
      'ServiceLevelObjective (SLO) error budget depletion tracker'
    ],
    learningOutcome: 'Implement full-stack Kubernetes observability and Site Reliability Engineering alerting standards.',
    repoSlug: 'aks-observability-prometheus-grafana'
  },
  {
    id: 'proj-14',
    number: '14',
    title: 'AI-Assisted DevOps Engineering & Autonomous Telemetry',
    category: 'SRE & AI',
    problem: 'Engineers bogged down by high-volume repetitive alerts and manual log analysis during production incidents.',
    architecture: 'Intelligent triage operator utilizing Claude / Model Context Protocol (MCP) agents connected to Prometheus metrics and Kubernetes logs to diagnose root causes and draft remediation PRs.',
    technologies: ['Model Context Protocol (MCP)', 'Claude 3.7', 'Python FastAPI', 'Kubernetes API', 'Prometheus'],
    deliverables: [
      'MCP tool server exposing read-only Kubernetes cluster state to LLM agents',
      'Automated incident summary generator extracting relevant log trace lines',
      'Supervised human-in-the-loop approval interface before executing remediation actions'
    ],
    learningOutcome: 'Deploy the frontier of AIOps: supervised intelligent agents operating production infrastructure safely.',
    repoSlug: 'ai-assisted-devops-mcp-operator'
  }
];

export const CAPSTONE_STAGES: CapstoneStage[] = [
  {
    stageNumber: '01',
    code: 'RFC',
    title: 'Threat Modeling & Architecture RFC',
    subtitle: 'Zero-Trust Boundaries',
    repoName: 'rfc-production-spec',
    description: 'STRIDE architecture specification, latency SLA budgets, and VPC security boundary RFC approved prior to writing code.',
    technologies: ['STRIDE Threat Model', 'RFC Template', 'System Architecture Diagrams']
  },
  {
    stageNumber: '02',
    code: 'GIT',
    title: 'Branch Governance Gate',
    subtitle: 'GPG signed commits',
    repoName: 'git-governance-core',
    description: 'Trunk-based branch protection rulesets, signed GPG commits, automated secret scanning pre-commit hooks, and CODEOWNERS approvals.',
    technologies: ['GPG Signing', 'GitHub Rulesets', 'Pre-commit Hooks']
  },
  {
    stageNumber: '03',
    code: 'IAAS',
    title: 'Multi-Cloud IaaS Provisioning',
    subtitle: 'OpenTofu / Terraform Modules',
    repoName: 'infra-fleet-opentofu',
    description: 'Dual-region cloud state locking, remote backends, VPC transit peering, and KMS encryption key rotation.',
    technologies: ['OpenTofu', 'Terragrunt', 'Azure / AWS Cloud']
  },
  {
    stageNumber: '04',
    code: 'SEC',
    title: 'Supply-Chain Defense Gate',
    subtitle: 'SBOM & Cosign attest',
    repoName: 'supply-chain-sentinel',
    description: 'Sigstore Cosign cryptographic container signing, Trivy image CVE vulnerability gates, and automated Syft SBOM generation.',
    technologies: ['Sigstore Cosign', 'Trivy', 'Syft SBOM']
  },
  {
    stageNumber: '05',
    code: 'K8S',
    title: 'Kubernetes Production Fleet',
    subtitle: 'Calico / Cilium eBPF Mesh',
    repoName: 'k8s-mesh-platform',
    description: 'Multi-cluster Kubernetes setup on AKS with Cilium eBPF network security policies, resource quotas, and ingress gateway.',
    technologies: ['AKS', 'Cilium eBPF', 'Pod Security Standards']
  },
  {
    stageNumber: '06',
    code: 'GITOPS',
    title: 'GitOps ArgoCD Delivery',
    subtitle: 'Canary & Auto-Rollback',
    repoName: 'argocd-root-manifests',
    description: 'Declarative GitOps App-of-Apps pattern, automated zero-drift reconciliations, and Argo Rollouts progressive canary delivery.',
    technologies: ['ArgoCD', 'Argo Rollouts', 'Helm 3']
  },
  {
    stageNumber: '07',
    code: 'SRE',
    title: 'eBPF Telemetry & SRE Cockpit',
    subtitle: 'Prometheus SLO engine',
    repoName: 'telemetry-cockpit-sre',
    description: 'Prometheus metric scrapers, Grafana SLO cockpits, Alertmanager PagerDuty webhooks, and kernel socket latency tracing.',
    technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'OpenTelemetry']
  },
  {
    stageNumber: '08',
    code: 'AI LOOP',
    title: 'MCP AI Operator & Self-Healing',
    subtitle: 'Autonomous Supervised Loop',
    repoName: 'sovereign-ai-vllm-mcp',
    description: 'vLLM open-weights inference cluster integration, PagedAttention cache optimization, and Model Context Protocol autonomous auto-heal agent.',
    technologies: ['vLLM', 'Model Context Protocol', 'Claude 3.7', 'PagedAttention']
  }
];

export const PATHWAYS: PathwayItem[] = [
  {
    id: 'flagship',
    code: 'PROGRAM 01',
    tag: 'PRIMARY FLAGSHIP',
    title: 'Complete DevOps, Multi-Cloud & AI Engineering Masterclass',
    description: 'The definitive systems-grade journey. From bare-metal POSIX threads and kernel primitives to enterprise ArgoCD GitOps, multi-cloud OpenTofu, and sovereign vLLM clusters.',
    badge: '18 Modules • 14 Repos • 1 Capstone',
    level: 'Comprehensive (Beginner to Staff Systems Architect)',
    keyPoints: [
      'All 18 comprehensive curriculum modules covering POSIX to vLLM',
      '14 documented production GitHub repositories with signed commits',
      'End-to-end 8-stage enterprise capstone with live oral defense',
      'Hands-on Multi-Cloud: Azure + AWS + Kubernetes + vLLM GPU clusters'
    ],
    techStack: ['Linux', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'Terraform', 'ArgoCD', 'Prometheus', 'vLLM', 'MCP'],
    isFlagship: true
  },
  {
    id: 'azure',
    code: 'PROGRAM 02',
    tag: 'MICROSOFT ENTERPRISE',
    title: 'Azure DevOps & Cloud Engineering Specialization',
    description: 'Deep specialization in Microsoft cloud operations, Azure Boards, multi-stage YAML pipelines, Azure Kubernetes Service (AKS), and Microsoft Entra zero-trust governance.',
    badge: 'Enterprise Microsoft Track',
    level: 'Intermediate to Advanced',
    keyPoints: [
      'Azure Boards sprint backlog tracking and smart commit linking',
      'Multi-stage Azure Pipelines with approval gates & workload identity federation',
      'AKS cluster networking, Private Endpoints, and Azure Key Vault',
      'Azure AI Foundry and OpenAI service enterprise landing zones'
    ],
    techStack: ['Azure DevOps', 'AKS', 'Azure Pipelines', 'Bicep', 'Entra ID', 'Azure Monitor']
  },
  {
    id: 'aws',
    code: 'PROGRAM 03',
    tag: 'HYPERSCALE FLEET',
    title: 'AWS DevOps & Cloud Engineering Specialization',
    description: 'Architecting resilient AWS cloud topologies. Master IAM Roles for Service Accounts (IRSA), VPC transit gateways, Elastic Kubernetes Service (EKS) auto-scaling, and Terragrunt.',
    badge: 'Cloud Fleet Track',
    level: 'Intermediate to Advanced',
    keyPoints: [
      'AWS EKS multi-cluster deployment with Karpenter dynamic node autoscaling',
      'VPC transit gateways, private subnets, and AWS KMS key management',
      'Declarative AWS infrastructure provisioning via Terraform and Terragrunt',
      'AWS CodePipeline vs GitHub Actions for hyperscale deployment fleets'
    ],
    techStack: ['AWS EKS', 'Karpenter', 'Terraform', 'Terragrunt', 'AWS IAM', 'CloudWatch']
  },
  {
    id: 'forward-ai',
    code: 'PROGRAM 04',
    tag: 'FORWARD DEPLOYED AI',
    title: 'Forward Deployed Engineering & Applied AI',
    description: 'For engineers who bridge business problems with frontier technology. Build resilient API gateways, streaming token pipelines with FastAPI, vLLM orchestration, and Model Context Protocol nodes.',
    badge: 'AI Systems Runtime',
    level: 'Advanced / Next-Gen',
    keyPoints: [
      'Building production streaming microservices with FastAPI (sub-20ms TTFT)',
      'Deploying and quantizing open-weights models (vLLM, AWQ, Ollama)',
      'Model Context Protocol (MCP) tool integration and multi-agent loops',
      'High-dimensional vector databases (Qdrant, Milvus) and retrieval pipelines'
    ],
    techStack: ['Python', 'FastAPI', 'vLLM', 'LangGraph', 'MCP Protocol', 'Qdrant']
  },
  {
    id: 'career-defense',
    code: 'PROGRAM 05',
    tag: 'EXECUTIVE CRITIQUE',
    title: 'Career & Technical Interview Defense',
    description: 'Practical career acceleration covering technical preparation, Staff SRE system design loops, oral architectural defense, project explanations, and compensation negotiation.',
    badge: 'Executive & Staff Defense',
    level: 'All Experience Levels',
    keyPoints: [
      'Live oral defense of your 14 GitHub repositories before senior engineers',
      'Distributed systems whiteboard scenarios and multi-region outage triage',
      'Strategic resume positioning highlighting verified architectural capability',
      'Executive interview preparation and compensation offer negotiation'
    ],
    techStack: ['System Design', 'RFC Defense', 'Whiteboarding', 'Portfolio Audit', 'Staff SRE Review']
  }
];

export const DEVOPS_LOOP_STAGES: DevOpsStage[] = [
  {
    id: 0,
    stepNumber: '01',
    shortName: 'PLAN',
    toolchain: 'Jira • Azure Boards • RFCs',
    title: 'Architecture RFC & Backlog Planning',
    description: 'Engineers define precise SLO latency limits, multi-region residency constraints, and threat boundaries before writing single lines of code. Enterprise traceability from ticket to production git hash.',
    aiAdditive: 'Autonomous Backlog PR Refinement',
    aiDetail: 'Claude MCP agent ingests RFC criteria to generate candidate test matrix and edge-case boundary scenarios.',
    keyArtifact: 'rfc-production-spec.md'
  },
  {
    id: 1,
    stepNumber: '02',
    shortName: 'CODE',
    toolchain: 'Git • GitHub Enterprise • GPG',
    title: 'Version Integrity & Git Governance',
    description: 'Trunk-based development with signed GPG commits, strict CODEOWNERS approvals, and automated pre-commit security linters preventing secrets leakage.',
    aiAdditive: 'Self-Supervised Code Reviewers',
    aiDetail: 'Static AST validation against known CVEs and security anti-patterns before human approval.',
    keyArtifact: 'GPG Signed Commit Hash'
  },
  {
    id: 2,
    stepNumber: '03',
    shortName: 'BUILD',
    toolchain: 'Azure Pipelines • Actions • Maven',
    title: 'Distributed Compilation & Deterministic Builds',
    description: 'Parallelized multi-architecture container builds (AMD64 & ARM64) with deterministic layer caching and SBOM artifact generation.',
    aiAdditive: 'Dynamic Test Matrix Pruning',
    aiDetail: 'AI agent identifies affected blast radii to run only pertinent integration test suites, reducing CI build times by 70%.',
    keyArtifact: 'Reproducible OCI Image'
  },
  {
    id: 3,
    stepNumber: '04',
    shortName: 'TEST & SEC',
    toolchain: 'SonarQube • Trivy • Cosign',
    title: 'Supply-Chain Defense & CVE Enforcement',
    description: 'Strict cryptographic attestation using Sigstore Cosign. Trivy blocking build pipelines upon detecting critical or high CVE vulnerabilities.',
    aiAdditive: 'Automated Patch Generation',
    aiDetail: 'Inference assistant writes atomic pull requests for vulnerable package pins with backward-compatibility verification.',
    keyArtifact: 'Cosign Attestation Key'
  },
  {
    id: 4,
    stepNumber: '05',
    shortName: 'PACKAGE',
    toolchain: 'Docker OCI • Helm 3 • Artifactory',
    title: 'Immutable Artifact Packaging',
    description: 'Multi-stage distroless containers stripped of shell binaries to eliminate attack surfaces, packaged as versioned Helm charts in private OCI registries.',
    aiAdditive: 'Container Footprint Compaction',
    aiDetail: 'Automatic detection of unnecessary shared libraries and unstripped symbols, shaving 60% of container footprint.',
    keyArtifact: 'Distroless Container (25MB)'
  },
  {
    id: 5,
    stepNumber: '06',
    shortName: 'DEPLOY',
    toolchain: 'AKS • EKS • ArgoCD • OpenTofu',
    title: 'Declarative GitOps Progressive Rollout',
    description: 'Zero manual kubectl access. ArgoCD synchronizes desired state from git to multi-cloud clusters with automated canary rollbacks on HTTP 5xx spikes.',
    aiAdditive: 'Canary Anomaly Guardrails',
    aiDetail: 'Statistical latency deviation models gating progressive traffic shifts from 5% to 100% automatically.',
    keyArtifact: 'ArgoCD Sync CRD'
  },
  {
    id: 6,
    stepNumber: '07',
    shortName: 'OPERATE',
    toolchain: 'Prometheus • Grafana • Cilium eBPF',
    title: 'Kernel-Level Telemetry & SRE Observability',
    description: 'Ring-buffer tracing of socket allocations, TCP drops, and GPU vRAM memory paging without intrusive user-space agent overhead.',
    aiAdditive: 'Root-Cause Incident Synthesis',
    aiDetail: 'LLM parses distributed trace spans and Prometheus metrics to pinpoint socket contention bottlenecks in seconds.',
    keyArtifact: 'Grafana RED Telemetry Cockpit'
  },
  {
    id: 7,
    stepNumber: '08',
    shortName: 'AI-IMPROVE',
    toolchain: 'Claude • Copilot • MCP Agents',
    title: 'Supervised AI Refinement & Self-Healing',
    description: 'The infinity loop closes: operational telemetry is fed directly into Model Context Protocol (MCP) agents to automatically propose infrastructure improvements.',
    aiAdditive: 'Closed-Loop Self-Healing',
    aiDetail: 'Continuous infrastructure adaptation balancing cost, latency, and throughput under strict human-in-the-loop approvals.',
    keyArtifact: 'MCP Autonomous Remediation PR'
  }
];

export const AZURE_DEVOPS_MODULES: ModuleItem[] = [
  {
    id: 'az-mod-01',
    number: '01',
    title: 'Enterprise Azure Governance, Management Groups & Entra ID',
    category: 'Cloud Architecture',
    description: 'Cloud Adoption Framework (CAF) enterprise landing zones, management group hierarchies, Azure Policy initiatives, RBAC least-privilege, and Microsoft Entra ID tenant federation.',
    keyTopics: [
      'Azure Enterprise Agreements (EA), CSP models, and subscriptions architecture',
      'Management Groups tree structure and landing zone policies (deny public IPs)',
      'Microsoft Entra ID (Azure AD) P1/P2, Conditional Access, and PIM (Privileged Identity Management)',
      'Service Principals, App Registrations, and OIDC federated credentials',
      'Azure Resource Graph queries (KQL) for governance audits across 100+ subscriptions'
    ],
    tools: ['Azure Portal', 'Entra ID', 'Azure CLI', 'Azure Policy', 'Kusto / KQL'],
    labDeliverable: 'Multi-subscription enterprise landing zone scaffolded with mandatory policy enforcement and PIM role escalation.'
  },
  {
    id: 'az-mod-02',
    number: '02',
    title: 'Azure Hub-and-Spoke Networking, Private Link & Firewall',
    category: 'Networking & Security',
    description: 'Enterprise virtual networks, hub-and-spoke VNet peering, Azure Private DNS Zones, Private Endpoints for PaaS, Azure Virtual WAN, and Azure Firewall premium inspection.',
    keyTopics: [
      'Hub-and-spoke VNet architecture and transitive routing across peering',
      'Azure Private Link & Private Endpoints: securing Blob, SQL, and Key Vault traffic',
      'User Defined Routes (UDR) routing through centralized Azure Firewall',
      'Network Security Groups (NSG) and Application Security Groups (ASG) stateful filtering',
      'Azure Bastion zero-trust VM access without public IP exposure'
    ],
    tools: ['Azure Virtual Networks', 'Azure Firewall', 'Private Endpoints', 'Network Watcher', 'Azure Bastion'],
    labDeliverable: 'Zero-trust hub-and-spoke network with private endpoint isolation for data tiers and zero public internet ingress.'
  },
  {
    id: 'az-mod-03',
    number: '03',
    title: 'Infrastructure as Code on Azure: Bicep & Azure Terraform',
    category: 'Infrastructure as Code',
    description: 'Modular enterprise declarative provisioning using Microsoft Bicep and Terraform AzAPI provider, remote state locking in blob storage, and deployment stacks.',
    keyTopics: [
      'Bicep syntax, modules, decorators, target scopes (tenant, mgmt group, sub, RG)',
      'Terraform AzureRM & AzAPI provider integration for Day-0 feature support',
      'Remote state management in Azure Blob Storage with lease locking and customer-managed keys',
      'Bicep Deployment Stacks for automated lifecycle management and orphan resource cleanup',
      'Automated validation pipelines: PSRule for Azure and TFLint static security checks'
    ],
    tools: ['Bicep', 'Terraform', 'Azure Blob Storage', 'PSRule', 'AzAPI Provider'],
    labDeliverable: 'Production Bicep module library provisioning a hardened AKS cluster with integrated private ACR and Key Vault.'
  },
  {
    id: 'az-mod-04',
    number: '04',
    title: 'Azure Boards, Work Item Hierarchy & Smart Commit Traceability',
    category: 'Agile & Planning',
    description: 'Enterprise agile delivery, custom process templates (Scrum/CMMI), portfolio backlogs, area/iteration path hierarchies, and smart commit linking from Git to production release.',
    keyTopics: [
      'Portfolio backlog hierarchies: Epics → Features → User Stories → Tasks/Bugs',
      'Custom process templates, rules, required fields, and automated state transitions',
      'Smart commits: linking Git commits, PRs, and builds directly to work items (#ID, Fixes #ID)',
      'Velocity tracking, CFD (Cumulative Flow Diagrams), and lead time telemetry',
      'Cross-project dashboards and delivery plans for 50+ engineer engineering teams'
    ],
    tools: ['Azure Boards', 'Azure DevOps', 'Analytics Service', 'Git Smart Commits'],
    labDeliverable: 'Fully configured Azure Boards organization with automated branch policies and PR traceability gates.'
  },
  {
    id: 'az-mod-05',
    number: '05',
    title: 'Multi-Stage Azure Pipelines (YAML) & Workload Identity',
    category: 'CI/CD & Delivery',
    description: 'Production-grade declarative YAML pipelines, self-hosted containerized agents, template repositories, variable groups, Key Vault secrets, and deployment environments with manual gates.',
    keyTopics: [
      'Multi-stage YAML pipeline design: Build, Security Scan, Dev, Staging, Production',
      'Azure DevOps Environments, manual approvals, business hour checks, and health gates',
      'Workload Identity Federation: zero-secret OIDC service connections with Microsoft Entra',
      'Self-hosted Azure Pipelines agent pools running as ephemeral Kubernetes pods (KEDA)',
      'Modular YAML templates for standardized corporate linting, building, and scanning'
    ],
    tools: ['Azure Pipelines', 'YAML', 'OIDC Service Connections', 'KEDA ScaledJob', 'Key Vault'],
    labDeliverable: 'Multi-stage pipeline with automated security gates, workload identity OIDC, and canary deployment to AKS.'
  },
  {
    id: 'az-mod-06',
    number: '06',
    title: 'Azure Kubernetes Service (AKS) Enterprise Fleet & Cilium Mesh',
    category: 'Kubernetes & Containers',
    description: 'Production AKS cluster deployment, Azure CNI Overlay, Cilium eBPF dataplane, Microsoft Entra pod-managed identity, system/user node pools, and Azure Container Registry.',
    keyTopics: [
      'AKS architecture: API server VNet integration, private clusters, and node pools',
      'Networking: Azure CNI Overlay vs Kubenet, and Cilium eBPF network security policies',
      'Azure Workload Identity: mapping Kubernetes ServiceAccounts directly to Entra ID identities',
      'Azure Container Registry (ACR) private endpoints, premium geo-replication, and quarantine',
      'Cluster auto-upgrades, planned maintenance windows, and node drain budgets'
    ],
    tools: ['AKS', 'Azure CNI Overlay', 'Cilium eBPF', 'ACR', 'Workload Identity'],
    labDeliverable: 'Production private AKS cluster running Cilium eBPF with automated horizontal pod autoscaling and ACR image verification.'
  },
  {
    id: 'az-mod-07',
    number: '07',
    title: 'Azure Key Vault, Managed Identities & DevSecOps Supply Chain',
    category: 'Security & Compliance',
    description: 'Cryptographic secrets management, customer-managed keys (CMK), automated certificate renewals, Sigstore Cosign attestation, and Microsoft Defender for Cloud integration.',
    keyTopics: [
      'Azure Key Vault access policies vs Azure RBAC data plane permissions',
      'User-assigned vs system-assigned managed identities: eliminating all hardcoded credentials',
      'Automated SSL/TLS certificate rotation with Let\'s Encrypt and Azure DNS',
      'Software Supply Chain: scanning ACR images with Microsoft Defender & Trivy gates',
      'Azure Policy for Kubernetes: enforcing gatekeeper constraints (disallow root containers)'
    ],
    tools: ['Azure Key Vault', 'Managed Identities', 'Microsoft Defender for Cloud', 'Trivy', 'Gatekeeper'],
    labDeliverable: 'Zero-secret application deployment where pods retrieve database credentials via dynamic Managed Identity.'
  },
  {
    id: 'az-mod-08',
    number: '08',
    title: 'Azure Monitor, Log Analytics, Cost Optimization & AI Foundry',
    category: 'Observability & SRE',
    description: 'Enterprise SRE telemetry, Log Analytics workspaces, Azure Monitor alerts, Container Insights, Azure Advisor cost governance, and Azure AI Foundry landing zones.',
    keyTopics: [
      'Log Analytics workspaces, data collection rules (DCR), and KQL incident triage queries',
      'Azure Monitor metrics, action groups, automated remediation logic apps, and webhook alerts',
      'Container Insights: Kubernetes control-plane metrics, pod memory paging, and restart loops',
      'Cost optimization: Azure Cost Management, reservation instances, savings plans, and spot node pools',
      'Azure OpenAI Service & AI Foundry landing zones: private endpoints and rate-limit management'
    ],
    tools: ['Azure Monitor', 'Log Analytics (KQL)', 'Container Insights', 'Azure Cost Management', 'Azure OpenAI'],
    labDeliverable: 'Enterprise SRE dashboard with KQL alerting, cost anomaly detection, and secure Azure OpenAI API gateway.'
  }
];

export const AWS_DEVOPS_MODULES: ModuleItem[] = [
  {
    id: 'aws-mod-01',
    number: '01',
    title: 'AWS Multi-Account Architecture, AWS Organizations & Control Tower',
    category: 'Cloud Architecture',
    description: 'Enterprise multi-account landing zones, AWS Organizations, Service Control Policies (SCPs), AWS IAM Identity Center (SSO), and centralized security/log-archive accounts.',
    keyTopics: [
      'Multi-account strategy: separating management, security, core-network, dev, stage, prod',
      'AWS Control Tower guardrails: mandatory and elective preventive/detective controls',
      'Service Control Policies (SCPs) preventing root account usage and unauthorized region access',
      'AWS IAM Identity Center (Successor to AWS SSO) and SAML federation with corporate IdPs',
      'AWS CloudTrail multi-region trail with centralized S3 bucket and KMS log immutability'
    ],
    tools: ['AWS Organizations', 'AWS Control Tower', 'SCPs', 'IAM Identity Center', 'CloudTrail'],
    labDeliverable: 'Production AWS multi-account landing zone configured with restrictive SCPs and centralized audit trails.'
  },
  {
    id: 'aws-mod-02',
    number: '02',
    title: 'Advanced AWS VPC Networking, Transit Gateways & Direct Connect',
    category: 'Networking & Security',
    description: 'Designing highly available multi-tier VPC topologies, Transit Gateways, VPC endpoints (PrivateLink), NAT Gateways, network firewalls, and hybrid connectivity.',
    keyTopics: [
      'Multi-AZ VPC architecture: public, private, and isolated data subnets across 3 availability zones',
      'AWS Transit Gateway (TGW) route tables, peering, and centralized egress filtering',
      'AWS PrivateLink & Gateway VPC Endpoints for S3, DynamoDB, ECR, and SSM',
      'AWS Network Firewall and Route 53 Resolver DNS firewall rules',
      'VPC Flow Logs analysis using Athena and CloudWatch Log Insights'
    ],
    tools: ['Amazon VPC', 'AWS Transit Gateway', 'AWS PrivateLink', 'AWS Network Firewall', 'Athena'],
    labDeliverable: 'Zero-egress private VPC routing traffic through centralized Transit Gateway inspection VPC with PrivateLink endpoints.'
  },
  {
    id: 'aws-mod-03',
    number: '03',
    title: 'IAM Zero-Trust, Roles for Service Accounts (IRSA) & AWS KMS',
    category: 'Security & Identity',
    description: 'Deep dive into AWS identity and access management, IAM policy evaluation logic, permission boundaries, IAM Roles for Service Accounts (IRSA), and AWS Key Management Service (KMS).',
    keyTopics: [
      'IAM policy evaluation logic: Explicit Deny vs Organization SCPs vs Permissions Boundaries',
      'IAM Roles for Service Accounts (IRSA) using OIDC provider for Amazon EKS pods',
      'AWS KMS: Customer Managed Keys (CMK), key policies, envelope encryption, and grants',
      'AWS Secrets Manager with automated cross-account database secret rotation lambdas',
      'IAM Access Analyzer and AWS Security Hub for continuous compliance benchmark checks'
    ],
    tools: ['AWS IAM', 'IRSA (OIDC)', 'AWS KMS', 'AWS Secrets Manager', 'Security Hub'],
    labDeliverable: 'Fine-grained IRSA architecture granting Kubernetes pods temporary scoped access to DynamoDB with zero access keys.'
  },
  {
    id: 'aws-mod-04',
    number: '04',
    title: 'Infrastructure as Code on AWS: Terraform & Terragrunt',
    category: 'Infrastructure as Code',
    description: 'Scalable multi-account AWS infrastructure declared with Terraform and Terragrunt, remote S3/DynamoDB state management, and drift-detection pipelines.',
    keyTopics: [
      'Terraform AWS provider architecture: default tags, assume_role blocks for cross-account execution',
      'S3 bucket remote state with server-side encryption, versioning, and DynamoDB state locking',
      'Terragrunt DRY configurations: sharing remote_state, provider blocks, and root dependencies',
      'Authoring reusable enterprise Terraform modules with strict input validation rules',
      'Automated CI/CD for Terraform: Terraform Cloud / Atlantis and Checkov policy gates'
    ],
    tools: ['Terraform', 'Terragrunt', 'Amazon S3', 'DynamoDB', 'Checkov', 'tflint'],
    labDeliverable: 'DRY Terragrunt repository deploying staging and production EKS environments with automated state locking.'
  },
  {
    id: 'aws-mod-05',
    number: '05',
    title: 'AWS CodePipeline, CodeBuild & Enterprise GitHub Actions Fleet',
    category: 'CI/CD & Delivery',
    description: 'Building automated enterprise delivery pipelines on AWS, containerized CodeBuild environments, OIDC GitHub Actions runners, and automated Canary rollouts with CodeDeploy.',
    keyTopics: [
      'AWS CodePipeline multi-stage pipelines with manual approval gates and SNS notifications',
      'AWS CodeBuild custom Docker build images, artifact caching, and VPC-connected builds',
      'GitHub Actions with AWS OIDC authentication (eliminating static IAM access keys in GitHub)',
      'Blue/green and linear canary deployments with AWS CodeDeploy and Application Load Balancer',
      'Amazon ECR image scanning with Inspector and lifecycle policies'
    ],
    tools: ['AWS CodePipeline', 'AWS CodeBuild', 'GitHub Actions (OIDC)', 'CodeDeploy', 'Amazon ECR'],
    labDeliverable: 'Production GitHub Actions workflow building OCI container, scanning CVEs, and deploying to AWS with OIDC.'
  },
  {
    id: 'aws-mod-06',
    number: '06',
    title: 'Amazon EKS Fleet Engineering & Karpenter Node Autoscaling',
    category: 'Kubernetes & Containers',
    description: 'Production Amazon EKS cluster architecture, VPC CNI networking, Karpenter next-gen dynamic node autoscaling, Spot instance interruption handlers, and AWS Load Balancer Controller.',
    keyTopics: [
      'Amazon EKS cluster provisioning, control plane logging, and endpoint private access',
      'AWS VPC CNI plugin: prefix delegation, secondary ENIs, and security groups for pods',
      'Karpenter node autoscaler: provisioning right-sized EC2 compute in sub-40 seconds',
      'Spot instance diversification and AWS Node Termination Handler for graceful pod eviction',
      'AWS Load Balancer Controller provisioning Application Load Balancers (ALB) via Kubernetes Ingress'
    ],
    tools: ['Amazon EKS', 'Karpenter', 'AWS VPC CNI', 'AWS Load Balancer Controller', 'Helm 3'],
    labDeliverable: 'High-density EKS cluster running Karpenter autoscaling from 0 to 50 nodes in under 90 seconds on load spike.'
  },
  {
    id: 'aws-mod-07',
    number: '07',
    title: 'Observability with AWS CloudWatch, X-Ray & OpenTelemetry',
    category: 'Observability & SRE',
    description: 'Enterprise observability on AWS, CloudWatch Container Insights, Metric Streams, AWS X-Ray distributed tracing, and AWS Distro for OpenTelemetry (ADOT).',
    keyTopics: [
      'CloudWatch Logs Insights: writing fast aggregate search queries across terabytes of logs',
      'CloudWatch Alarms, composite alarms, and automated EC2/AutoScaling actions',
      'AWS Distro for OpenTelemetry (ADOT) collectors deployed as Kubernetes daemonsets',
      'AWS X-Ray distributed tracing: inspecting service maps, latency percentiles, and subsegment errors',
      'Amazon Managed Prometheus (AMP) and Amazon Managed Grafana (AMG) architecture'
    ],
    tools: ['Amazon CloudWatch', 'AWS X-Ray', 'ADOT Collector', 'Managed Prometheus', 'Managed Grafana'],
    labDeliverable: 'End-to-end distributed tracing pipeline connecting API Gateway, Lambda, and EKS microservices with P99 SLO alerts.'
  },
  {
    id: 'aws-mod-08',
    number: '08',
    title: 'AWS Bedrock, Private VPC AI Runtimes & Disaster Recovery',
    category: 'Sovereign AI & Resilience',
    description: 'Deploying generative AI workloads on AWS, Amazon Bedrock private endpoints, GPU EC2 instance fleets (p4de/p5), and multi-region disaster recovery architecture.',
    keyTopics: [
      'Amazon Bedrock: private VPC endpoints, IAM governance, and guardrail moderation policies',
      'Deploying self-hosted open-weights models on AWS EC2 G5/P4 GPU instances with vLLM',
      'S3 cross-region replication (CRR) and AWS Backup centralized retention schedules',
      'Multi-region Route 53 latency routing and health checks for active-passive failover',
      'Enterprise AWS Capstone Defense: comprehensive multi-tier cloud architecture audit'
    ],
    tools: ['Amazon Bedrock', 'EC2 GPU Instances', 'vLLM on AWS', 'Route 53', 'AWS Backup'],
    labDeliverable: 'Production AWS architecture with Bedrock private endpoints, multi-region failover, and live oral RFC defense.'
  }
];

export const FORWARD_AI_MODULES: ModuleItem[] = [
  {
    id: 'fwd-mod-01',
    number: '01',
    title: 'Forward Deployed Engineering: Role, Systems & Strategy',
    category: 'Architecture & Fundamentals',
    description: 'The anatomy of Forward Deployed Engineering (FDE). Bridging enterprise customer environments with production AI runtimes, architectural scoping, and rapid deployment velocity.',
    keyTopics: [
      'The FDE archetype: bridging platform engineering, customer architecture, and AI runtime integration',
      'Scoping enterprise AI problem spaces: distinguishing toy wrappers from structural systems value',
      'Data residency, sovereignty boundaries, and on-premise vs sovereign cloud constraints',
      'Rapid prototype-to-production lifecycle: building production code on customer infrastructure from Day 1',
      'Authoring architectural RFCs that align corporate security, legal, and engineering stakeholders'
    ],
    tools: ['Systems RFCs', 'Enterprise Architecture', 'Miro / Excalidraw', 'OpenTelemetry', 'Docker'],
    labDeliverable: 'Customer-ready Architecture RFC for sovereign AI deployment detailing security boundaries, SLOs, and rollback gates.'
  },
  {
    id: 'fwd-mod-02',
    number: '02',
    title: 'High-Throughput Streaming APIs: FastAPI, WebSockets & SSE',
    category: 'API Engineering',
    description: 'Building ultra-low-latency asynchronous streaming inference microservices with FastAPI, Server-Sent Events (SSE), WebSockets, and backpressure handling for generative token streams.',
    keyTopics: [
      'Asynchronous Python concurrency (asyncio event loops, uvloop, threadpools for non-blocking I/O)',
      'Server-Sent Events (SSE) vs WebSockets for streaming token delivery: protocol choices and proxy buffering',
      'HTTP/2 and HTTP/3 multiplexing: avoiding chunked-transfer-encoding truncation across edge proxies',
      'Handling client disconnects and cancelling in-flight GPU token generation to prevent compute waste',
      'Benchmarking API gateway latency (TTFT < 20ms) using Locust and synthetic token traffic'
    ],
    tools: ['FastAPI', 'Uvicorn', 'Server-Sent Events', 'WebSockets', 'Locust', 'HTTP/2'],
    labDeliverable: 'Streaming API microservice delivering sub-25ms Time-To-First-Token with automated GPU cancellation on client drop.'
  },
  {
    id: 'fwd-mod-03',
    number: '03',
    title: 'Sovereign LLM Serving: vLLM, SGLang & Model Quantization',
    category: 'AI Runtime Systems',
    description: 'Deploying and optimizing open-weights models (DeepSeek, Llama 3, Mistral) on dedicated GPU clusters using vLLM and SGLang. Model weights quantization with AWQ, GPTQ, and FP8.',
    keyTopics: [
      'vLLM architecture: continuous batching, chunked prefill, and speculative decoding',
      'Deploying open-weights foundation models on private clusters with tensor parallelism across multiple GPUs',
      'Quantization engineering: AWQ 4-bit, GPTQ, and FP8 formats—speed vs perplexity trade-offs',
      'SGLang structured generation: enforcing strict JSON schema and regex output with zero generation retries',
      'Containerizing inference engines with NVIDIA Container Toolkit and CUDA 12 runtimes'
    ],
    tools: ['vLLM', 'SGLang', 'NVIDIA CUDA 12', 'AWQ Quantization', 'Hugging Face Transformers'],
    labDeliverable: 'Private vLLM cluster serving quantized Llama 3 with 4x higher throughput than unoptimized HuggingFace baselines.'
  },
  {
    id: 'fwd-mod-04',
    number: '04',
    title: 'PagedAttention KV-Cache Optimization & GPU Memory Paging',
    category: 'Systems & Compute',
    description: 'Mastering GPU VRAM mechanics: PagedAttention algorithm, KV-cache fragmentation mitigation, dynamic memory allocation, and multi-tenant quota management.',
    keyTopics: [
      'GPU VRAM memory layout: model weights vs KV-cache vs activation buffers',
      'The PagedAttention algorithm: virtual memory paging applied to key-value tensors (eliminating 96% waste)',
      'Tuning max_num_seqs, max_model_len, and gpu_memory_utilization for production stability',
      'Multi-GPU Tensor Parallelism (TP) and Pipeline Parallelism (PP) communication overhead (NVLink vs PCIe)',
      'Monitoring GPU metrics: nvidia-smi, NVML API, GPU temperature, power limits, and VRAM thrashing'
    ],
    tools: ['PagedAttention', 'NVML API', 'NVIDIA Triton', 'PyTorch Profiler', 'TensorRT-LLM'],
    labDeliverable: 'Comprehensive KV-cache benchmarking suite measuring throughput under concurrent 100-user multi-turn dialogue workloads.'
  },
  {
    id: 'fwd-mod-05',
    number: '05',
    title: 'Model Context Protocol (MCP) Server Architecture & Tooling',
    category: 'Agentic Infrastructure',
    description: 'Building robust, secure Model Context Protocol (MCP) tool servers. Connecting internal databases, infrastructure APIs, and enterprise systems to LLMs with strict authorization.',
    keyTopics: [
      'Model Context Protocol (MCP) architecture: client, host, and server specifications',
      'Building custom MCP servers in TypeScript and Python exposing tools, resources, and prompts',
      'Tool execution security: sandboxing, parameter schema validation (Zod/Pydantic), and SQL injection guards',
      'Dynamic resource streaming: exposing live log streams and Prometheus metrics via MCP resources',
      'Human-in-the-loop approval gates for destructive tool calls (kubectl delete, terraform destroy)'
    ],
    tools: ['Model Context Protocol (MCP)', 'TypeScript', 'Python', 'Pydantic', 'Zod', 'Claude Desktop / Cursor'],
    labDeliverable: 'Production MCP server allowing an AI agent to inspect live Kubernetes clusters, read logs, and execute safe diagnostic commands.'
  },
  {
    id: 'fwd-mod-06',
    number: '06',
    title: 'Autonomous Multi-Agent Swarms & LangGraph Orchestration',
    category: 'Agentic Infrastructure',
    description: 'Designing deterministic, stateful multi-agent systems using LangGraph. Implementing supervisor-worker patterns, reflection loops, self-correction, and persistent checkpointing.',
    keyTopics: [
      'Stateful multi-agent graph design: nodes, edges, conditional routing, and state schemas',
      'Supervisor agent architectures: delegating domain tasks to specialized subordinate agents',
      'Reflection and self-correction cycles: automatic retry with error feedback on code execution failure',
      'Persistent memory checkpoints with PostgreSQL / Redis for long-running workflows across days',
      'Evaluating agent reliability: benchmarking multi-step task success rates and loop prevention'
    ],
    tools: ['LangGraph', 'LangChain', 'Redis Checkpointer', 'PostgreSQL', 'Python asyncio'],
    labDeliverable: 'Multi-agent self-healing cluster operator that diagnoses failed pods, drafts a helm patch, and validates canary health.'
  },
  {
    id: 'fwd-mod-07',
    number: '07',
    title: 'Vector Infrastructure, Qdrant & Enterprise Hybrid Search',
    category: 'Retrieval & Vector Systems',
    description: 'Building high-scale vector retrieval infrastructure using Qdrant. Dense embeddings, sparse lexical search (BM25), metadata payload filtering, and sub-10ms retrieval.',
    keyTopics: [
      'Vector similarity search algorithms: HNSW (Hierarchical Navigable Small World) index tuning',
      'Qdrant distributed architecture: sharding, replication, and collections management in Kubernetes',
      'Hybrid search: combining dense embedding vectors with sparse BM25 keyword tokens for domain precision',
      'Payload filtering: enforcing strict tenant isolation and role-based ACLs directly in vector queries',
      'Re-ranking pipelines: cross-encoder models (Cohere, BAAI) to eliminate retrieval hallucinations'
    ],
    tools: ['Qdrant', 'HNSW Indexing', 'FastEmbed', 'Cohere Reranker', 'Kubernetes Helm'],
    labDeliverable: 'Multi-tenant enterprise knowledge base index in Qdrant with sub-10ms hybrid search and RBAC payload isolation.'
  },
  {
    id: 'fwd-mod-08',
    number: '08',
    title: 'Kernel-Level eBPF Telemetry for AI Pods & Sovereign Capstone',
    category: 'Observability & Defense',
    description: 'Low-overhead kernel-level socket and memory tracing for AI clusters with Cilium eBPF, OpenTelemetry span injection, and the final Forward Deployed Engineering Capstone.',
    keyTopics: [
      'eBPF ring buffers: tracing GPU DMA transfers, TCP socket drops, and inter-node NVLink latency',
      'Injecting OpenTelemetry distributed tracing spans into asynchronous LLM token generation pipelines',
      'Continuous SLO monitoring: tracking P95/P99 latency, token generation velocity, and cost per million tokens',
      'Synthesizing all 7 domains into an end-to-end Forward Deployed AI System',
      'Oral Architectural Defense: defending your sovereign AI system before Staff AI and SRE engineers'
    ],
    tools: ['Cilium eBPF', 'OpenTelemetry', 'Grafana', 'Prometheus', 'Complete AI Stack'],
    labDeliverable: 'Complete enterprise sovereign AI application with live streaming, MCP tools, eBPF telemetry, and oral defense.'
  }
];

export const CAREER_GUIDANCE_MODULES: ModuleItem[] = [
  {
    id: 'car-mod-01',
    number: '01',
    title: 'Systems Portfolio Engineering: Auditing Your 14 GitHub Repositories',
    category: 'Portfolio & Evidence',
    description: 'Transforming technical code into an undeniable engineering track record. Reviewing, polishing, and auditing your 14 production GitHub repositories with verified GPG commits and architecture docs.',
    keyTopics: [
      'The engineering portfolio standard: eliminating toy scripts, forks, and superficial tutorials',
      'Architectural README engineering: C4 model diagrams, threat models, SLO definitions, and runbooks',
      'Verifying cryptographic GPG commit signatures and clean Git commit history',
      'Configuring automated GitHub Actions badges (passing builds, zero CVEs, 85%+ test coverage)',
      'Structuring repository releases with semantic versioning (SemVer) and changelogs'
    ],
    tools: ['GitHub Enterprise', 'GPG Signing', 'Mermaid.js / C4 Architecture', 'GitHub Actions Badges'],
    labDeliverable: '14 audited, production-grade GitHub repositories with professional architectural diagrams and passing CI/CD badges.'
  },
  {
    id: 'car-mod-02',
    number: '02',
    title: 'Staff & Lead SRE / Cloud System Design Mastery',
    category: 'System Design',
    description: 'Mastering high-stakes distributed system design interviews for Senior, Lead, and Staff Platform / SRE roles. Multi-region architectures, data consistency, and catastrophic failure modes.',
    keyTopics: [
      'Framework for 45-minute systems design: Requirements, Back-of-envelope estimation, High-level, Deep dive',
      'Multi-region active-active vs active-passive topologies: DNS routing, replication lag, split-brain mitigation',
      'Designing for scale: caching topologies (Redis/Memcached), message queues (Kafka), and database sharding',
      'Resiliency patterns: circuit breakers, exponential backoff with jitter, bulkheads, rate limiting',
      'Designing sovereign AI infrastructure: estimating GPU compute, KV-cache memory, and token network bandwidth'
    ],
    tools: ['System Design Framework', 'Distributed Systems Patterns', 'Whiteboard Simulator'],
    labDeliverable: 'Completed system design blueprints for 5 enterprise scenarios (Multi-Region Banking, Global GitOps Mesh, GPU Inference Fleet).'
  },
  {
    id: 'car-mod-03',
    number: '03',
    title: 'Live 1-on-1 Oral RFC Architectural Defense Simulation',
    category: 'Oral Defense',
    description: 'Simulating the rigorous Staff-level RFC defense process used at elite technology companies. Defending your enterprise capstone live before experienced platform veterans.',
    keyTopics: [
      'The Oral RFC Defense format: presenting trade-offs, defending constraints, and responding to adversarial pushback',
      'Defending technology choices: why OpenTofu over Terraform, why Cilium over standard CNI, why vLLM over API wrappers',
      'Handling live architectural challenges: "What happens when AZ-1 loses network connectivity?"',
      'Articulating blast radii, disaster recovery plans, and recovery time objectives (RTO < 5m, RPO = 0)',
      '1-on-1 personalized rubric feedback and score breakdown from Staff SRE reviewers'
    ],
    tools: ['RFC Defense Rubric', 'Live Video Defense Room', 'Architecture Defense Protocol'],
    labDeliverable: 'Recorded 45-minute oral architectural defense session with formal passing rubric certification.'
  },
  {
    id: 'car-mod-04',
    number: '04',
    title: 'Incident Triage & Chaos Engineering Whiteboard Scenarios',
    category: 'Operational Defense',
    description: 'Mastering the technical troubleshooting loop: diagnosing simulated multi-cloud outages, Kubernetes crash loops, memory leaks, and eBPF socket starvation under live observation.',
    keyTopics: [
      'Structured incident triage methodology: Observe, Hypothesize, Isolate, Remediate, Post-Mortem',
      'Diagnosing real-world failure patterns: Kubernetes CrashLoopBackOff, OOMKilled, DNS resolution timeouts',
      'Network incident analysis: interpreting tcpdump outputs, strace logs, and eBPF connection drops',
      'Writing blameless post-mortems with timeline reconstruction and preventative root-cause action items',
      'Communicating incident status clearly to executive leadership during high-severity (SEV-1) events'
    ],
    tools: ['Incident Triage Simulator', 'Post-Mortem Templates', 'eBPF / strace diagnostic scripts'],
    labDeliverable: 'Two comprehensive SEV-1 incident triage simulations completed with professional post-mortem documentation.'
  },
  {
    id: 'car-mod-05',
    number: '05',
    title: 'Executive Technical Resume & Strategic Positioning for AI/Cloud',
    category: 'Career Positioning',
    description: 'Positioning your genuine systems capabilities to skip HR keyword filters and get directly to Engineering Directors, Staff Principals, and VP of Engineering interviews.',
    keyTopics: [
      'Transforming generic bullet points into high-impact systems achievements with verifiable metrics',
      'Highlighting Multi-Cloud, Kubernetes, and Sovereign AI architecture prominently over basic tool lists',
      'Optimizing LinkedIn headline, featured projects, and GitHub organization to attract elite engineering recruiters',
      'Outreach strategy: contacting Engineering Hiring Managers directly with custom architectural insights',
      'Screening interview mastery: communicating technical depth succinctly in the initial 15-minute screen'
    ],
    tools: ['Executive Resume Template', 'LinkedIn Optimization Guide', 'Hiring Manager Outreach Scripts'],
    labDeliverable: 'Polished, ATS-optimized Executive Technical Resume paired with an active LinkedIn systems profile.'
  },
  {
    id: 'car-mod-06',
    number: '06',
    title: 'Executive Compensation Benchmarking & High-Leverage Offer Negotiation',
    category: 'Offer Negotiation',
    description: 'Maximizing total compensation for Senior, Lead, and Staff engineering roles. Base salary, sign-on bonuses, equity grants (RSUs/Options), and competing offer leverage.',
    keyTopics: [
      'Compensation benchmarking: understanding bands at Tier-1 tech, high-growth scale-ups, and enterprise giants',
      'Deconstructing compensation packages: Base vs Performance Bonus vs RSUs vs ISO/NSO stock options',
      'The Golden Rules of Negotiation: never anchoring low, managing verbal offers, using competing leverage',
      'Negotiating non-monetary terms: remote flexibility, title (Senior vs Staff), and accelerated review cycles',
      'Scripting live counter-offers and handling pushback professionally without risking offer revocation'
    ],
    tools: ['Levels.fyi Benchmark Data', 'Equity Valuation Calculator', 'Negotiation Scripts & Email Templates'],
    labDeliverable: 'Personalized compensation negotiation playbook tailored to target companies with prepared counter-offer scripts.'
  }
];

export const PROGRAM_CURRICULA: Record<string, ProgramCurriculum> = {
  'flagship': {
    id: 'flagship',
    code: 'PROGRAM 01',
    tag: 'PRIMARY FLAGSHIP MASTERCLASS',
    title: 'Complete DevOps, Multi-Cloud & AI Engineering Masterclass',
    shortTitle: 'Flagship Masterclass',
    badge: '18 Modules • 14 Repos • 1 Capstone',
    level: 'Comprehensive (Beginner to Staff Systems Architect)',
    description: 'The definitive systems-grade journey. From bare-metal POSIX threads and kernel primitives to enterprise ArgoCD GitOps, multi-cloud OpenTofu, and sovereign vLLM clusters.',
    durationWeeks: '18 Weeks',
    totalLabs: 18,
    capstoneName: 'The 8-Stage Enterprise Multi-Cloud & Sovereign AI Capstone',
    techStack: ['Linux', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'Terraform', 'ArgoCD', 'Prometheus', 'vLLM', 'MCP'],
    keyHighlights: [
      'All 18 comprehensive curriculum modules covering POSIX to vLLM',
      '14 documented production GitHub repositories with signed commits',
      'End-to-end 8-stage enterprise capstone with live oral defense',
      'Hands-on Multi-Cloud: Azure + AWS + Kubernetes + vLLM GPU clusters'
    ],
    modules: FLAGSHIP_MODULES
  },
  'azure': {
    id: 'azure',
    code: 'PROGRAM 02',
    tag: 'MICROSOFT ENTERPRISE',
    title: 'Azure DevOps & Cloud Engineering Specialization',
    shortTitle: 'Azure DevOps',
    badge: 'Enterprise Microsoft Track • 8 Modules',
    level: 'Intermediate to Advanced',
    description: 'Deep specialization in Microsoft cloud operations, Azure Boards, multi-stage YAML pipelines, Azure Kubernetes Service (AKS), and Microsoft Entra zero-trust governance.',
    durationWeeks: '8 Weeks',
    totalLabs: 8,
    capstoneName: 'Enterprise Hub-and-Spoke AKS Fleet with Zero-Trust Entra Governance',
    techStack: ['Azure DevOps', 'AKS', 'Azure Pipelines', 'Bicep', 'Entra ID', 'Azure Monitor', 'Azure Key Vault'],
    keyHighlights: [
      'Azure Boards sprint backlog tracking and smart commit linking',
      'Multi-stage Azure Pipelines with approval gates & workload identity federation',
      'AKS cluster networking, Private Endpoints, and Azure Key Vault',
      'Azure AI Foundry and OpenAI service enterprise landing zones'
    ],
    modules: AZURE_DEVOPS_MODULES
  },
  'aws': {
    id: 'aws',
    code: 'PROGRAM 03',
    tag: 'HYPERSCALE FLEET',
    title: 'AWS DevOps & Cloud Engineering Specialization',
    shortTitle: 'AWS DevOps',
    badge: 'Cloud Fleet Track • 8 Modules',
    level: 'Intermediate to Advanced',
    description: 'Architecting resilient AWS cloud topologies. Master IAM Roles for Service Accounts (IRSA), VPC transit gateways, Elastic Kubernetes Service (EKS) auto-scaling, and Terragrunt.',
    durationWeeks: '8 Weeks',
    totalLabs: 8,
    capstoneName: 'Multi-Account AWS EKS Fleet with Karpenter Dynamic Autoscaling',
    techStack: ['AWS EKS', 'Karpenter', 'Terraform', 'Terragrunt', 'AWS IAM', 'CloudWatch', 'AWS Bedrock'],
    keyHighlights: [
      'AWS EKS multi-cluster deployment with Karpenter dynamic node autoscaling',
      'VPC transit gateways, private subnets, and AWS KMS key management',
      'Declarative AWS infrastructure provisioning via Terraform and Terragrunt',
      'AWS CodePipeline vs GitHub Actions for hyperscale deployment fleets'
    ],
    modules: AWS_DEVOPS_MODULES
  },
  'forward-ai': {
    id: 'forward-ai',
    code: 'PROGRAM 04',
    tag: 'FORWARD DEPLOYED AI',
    title: 'Forward Deployed Engineering & Applied AI',
    shortTitle: 'Forward Deployed Engineering',
    badge: 'AI Systems Runtime • 8 Modules',
    level: 'Advanced / Next-Gen',
    description: 'For engineers who bridge business problems with frontier technology. Build resilient API gateways, streaming token pipelines with FastAPI, vLLM orchestration, and Model Context Protocol nodes.',
    durationWeeks: '8 Weeks',
    totalLabs: 8,
    capstoneName: 'Sovereign Multi-GPU vLLM Cluster with Autonomous MCP Agents & eBPF Telemetry',
    techStack: ['Python', 'FastAPI', 'vLLM', 'LangGraph', 'MCP Protocol', 'Qdrant', 'Cilium eBPF'],
    keyHighlights: [
      'Building production streaming microservices with FastAPI (sub-20ms TTFT)',
      'Deploying and quantizing open-weights models (vLLM, AWQ, Ollama)',
      'Model Context Protocol (MCP) tool integration and multi-agent loops',
      'High-dimensional vector databases (Qdrant, Milvus) and retrieval pipelines'
    ],
    modules: FORWARD_AI_MODULES
  },
  'career-defense': {
    id: 'career-defense',
    code: 'PROGRAM 05',
    tag: 'EXECUTIVE CRITIQUE',
    title: 'Building the Career, Guidance & Technical Interview Defense',
    shortTitle: 'Building the Career & Guidance',
    badge: 'Executive & Staff Defense • 6 Modules',
    level: 'All Experience Levels',
    description: 'Practical career acceleration covering technical preparation, Staff SRE system design loops, oral architectural defense, project explanations, and compensation negotiation.',
    durationWeeks: '6 Weeks',
    totalLabs: 6,
    capstoneName: 'Live Oral RFC Architectural Defense with Staff SRE Evaluation Rubric',
    techStack: ['System Design', 'RFC Defense', 'Whiteboarding', 'Portfolio Audit', 'Staff SRE Review'],
    keyHighlights: [
      'Live oral defense of your 14 GitHub repositories before senior engineers',
      'Distributed systems whiteboard scenarios and multi-region outage triage',
      'Strategic resume positioning highlighting verified architectural capability',
      'Executive interview preparation and compensation offer negotiation'
    ],
    modules: CAREER_GUIDANCE_MODULES
  }
};

