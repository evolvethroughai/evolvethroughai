# Pathway catalogue and dedicated landing pages

27 October 2026. Owner requested Pathway 1 Masterclass plus compact title rows for other pathways, each opening its own landing page and returning to the catalogue.

Implemented query-based page destinations (?pathway=masterclass, azure-cloud-devops, aws-cloud-devops, forward-deployed-ai, career-development) using the existing five records in websiteContent.ts. Query routes refresh without requiring new hosting rewrite rules. Native history and modified-click/new-tab behavior preserved. No router package or other dependency added.

Homepage keeps its first three screens, a featured Pathway 1 card and four compact title links. The existing lifecycle, 18-module curriculum, 14 project concepts/capstone and progression now live under the Masterclass page. Source curriculum/project data preserved. Other pathways use documented scope and explicit development status; Azure references related flagship modules/projects without claiming a finalized separate syllabus. Career support remains the fifth existing source record; no unapproved program taxonomy replacement.

Back to pathways returns to #programs. Browser back/forward, direct refresh, catalogue entry, curriculum disclosure, pathway enquiry and Search opening verified. Header/search links reach relevant home or Masterclass sections. Homepage Learning Paths leads to #path; Screen 3 leads to #programs.

TypeScript/build passed. Twenty theme/width/page combinations (five pages, both themes, 390 and 1440px) showed no horizontal overflow or scoped main-content axe violations after heading hierarchy repair. Screenshots saved for Masterclass and Azure in both themes/mobile/desktop. Native scrolling retained, no scroll interception. No deployment, no Git push. Owner visual review pending.
