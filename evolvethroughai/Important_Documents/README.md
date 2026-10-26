# Evolve Through AI — Important Documents

**Documentation snapshot: 26 October 2026 (IST).** This folder is the canonical project-knowledge location. The latest explicit owner decision takes precedence over earlier notes.

## Start here

1. Read [AGENTS.md](AGENTS.md).
2. Read [Decisions and open items](docs/DECISIONS_AND_OPEN_ITEMS.md) and [Website roadmap](docs/WEBSITE_ROADMAP.md).
3. Open the relevant business, design, curriculum or history document below.

```text
Important_Documents/
├── AGENTS.md
├── README.md
├── REDESIGN.md                         # Preserved chronological design log
├── developer_notes.md                  # Preserved development/session log
├── docs/
│   ├── BUSINESS_VISION.md
│   ├── BUSINESS_PLAN.md
│   ├── WEBSITE_ROADMAP.md
│   ├── DESIGN_REQUIREMENTS.md
│   ├── PROGRAMS_AND_CURRICULUM.md
│   ├── PROJECT_HISTORY.md
│   └── DECISIONS_AND_OPEN_ITEMS.md
└── sources/
    └── MASTER_PROJECT_HANDOVER_2026-10-26.md
```

The [application-root AGENTS.md](../AGENTS.md) is a short discovery pointer to these instructions. The source handover is preserved without rewriting its contents.

## Documents

| Document | Purpose |
| --- | --- |
| [Business vision](docs/BUSINESS_VISION.md) | Identity, mission, philosophy, audiences and long-term ecosystem |
| [Business plan](docs/BUSINESS_PLAN.md) | Offerings, customer needs, operations, launch approach, risks and proposed growth |
| [Website roadmap](docs/WEBSITE_ROADMAP.md) | Seven phases, dependencies, acceptance criteria, current milestone and launch gate |
| [Design requirements](docs/DESIGN_REQUIREMENTS.md) | Brand/UI requirements, imagery, typography, motion, accessibility and visual approval |
| [Programs and curriculum](docs/PROGRAMS_AND_CURRICULUM.md) | Full handover topic lists for 18 modules, 14 projects, capstone and progression |
| [Project history](docs/PROJECT_HISTORY.md) | Learn2Grow, Stitch, Antigravity, Codex work, repository facts and source inventory |
| [Decisions and open items](docs/DECISIONS_AND_OPEN_ITEMS.md) | Confirmed/proposed/unverified information, missing materials and launch blockers |

## Current state in plain language

- The website is an existing React/TypeScript/Vite single-page application with working local interactions, not the historical Next.js prototype.
- Latest implemented typography is **Sora + Inter**, self-hosted. Older introductory paragraphs in the preserved logs describe previous font directions.
- The latest hero says **“Build real skills. Shape what’s next.”** The owner has not given final homepage/design approval in the new handover.
- The public enquiry action currently downloads a local draft; no verified enquiry delivery backend is present.
- Source/QA records exist for the 18-module overview, 14 project concepts and 9-stage capstone UI. This does not verify a full detailed original syllabus, completed deployments or business readiness.
- Root-level `REDESIGN.md` and `developer_notes.md` are currently absent and marked deleted in the existing worktree; copies already exist here. This documentation task preserves those copies and does not undo the owner's move.
- Git is rooted at `WEBSITE/`, above `evolvethroughai/`. Domain ownership and public hosting are not established by Git configuration.

## Evidence and history

[REDESIGN.md](REDESIGN.md) and [developer_notes.md](developer_notes.md) are preserved as chronological logs. Their older paths, framework assumptions, font choices, imagery statements and “not a Git repository” observations must be read in their historical context. Use the canonical documents and inspected active source for the current state.

Latest recorded visual/functional evidence: [26 October refinement report](../design-review/REFINEMENT-2026-10-26.md), [machine-readable checks](../design-review/refined-qa.json), [desktop preview](../design-review/refined-desktop.png), [mobile preview](../design-review/refined-mobile.png) and [footer preview](../design-review/refined-footer.png). These checks were recorded earlier; this documentation task did not rerun the app, tests or deployment.

## Maintenance

Update decisions first when the owner approves or changes a milestone; update affected documents with it. Keep intent, actual implementation, recorded verification and owner approval separate. The immutable handover snapshot is evidence, not an instruction to undo subsequent explicit owner decisions.

## Current screen-by-screen review

The documentation baseline is complete. [Homepage Screen Review](docs/HOMEPAGE_SCREEN_REVIEW.md) tracks the newly authorized refinement workflow. Screen 01 (header and hero) is ready for owner review; no final homepage approval is implied.

## Approved brand assets — 26 October 2026

Circuit-ribbon identity is approved and integrated locally. See [brand assets and usage](../public/brand/README.md), [design requirements](docs/DESIGN_REQUIREMENTS.md) and [integration verification](../design-review/brand-integration/REPORT.md). Final homepage approval and deployment remain separate.

Current visual theme: Inter headings/body, midnight dark default with a persistent light switch, and logo-led gradient accents. See [theme QA](../design-review/brand-theme/REPORT.md). This supersedes the earlier Sora/light-only implementation summary.

Latest milestone: [immersive section plan](docs/IMMERSIVE_DESIGN_PLAN.md) and [hero/pathway preview evidence](../design-review/immersive-milestone-01/REPORT.md). Owner visual approval required before lifecycle/curriculum work.
