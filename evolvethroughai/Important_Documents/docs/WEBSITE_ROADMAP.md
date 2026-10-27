# Website Roadmap

> Updated: 26 October 2026 · Timezone: Asia/Kolkata (IST).
> Business intention: the owner’s master handover. Implementation facts: inspected local source. Approval and launch readiness are separate from implementation.


## Current milestone

**The documentation baseline is complete. The latest owner request authorizes page-by-page, screen-by-screen refinement, starting with the homepage header and hero. Final homepage approval remains open.** The latest master handover states that final design approval and public launch are unconfirmed. Prior positive feedback on an iteration does not establish final approval.

An existing local implementation already covers parts of Phases 2 and 3. Do not restart it or mark those phases complete simply because the handover describes earlier plans. Preserve the working source and reconcile it with the newly documented requirements.

## Current implementation versus the phase gates

| Phase | Inspection snapshot | Acceptance still needed |
| --- | --- | --- |
| 1 — Foundation/design approval | Existing app, exports, notes, source context and latest QA artifacts inspected; documentation being established | Owner review and explicit homepage approval |
| 2 — Core website | Navigation and one composed homepage exist in React/Vite | Dedicated Learning Programs and Masterclass routes, agreed page architecture and owner review |
| 3 — Curriculum/interactions | 18-module overview, 14 project concepts, 8 lifecycle controls, 9 capstone UI stages and 5 progression controls exist | Original detailed source reconciliation, approved lab scope and content review |
| 4 — Business functionality | Browser validation and local enquiry/curriculum downloads exist | Real delivery backend, verified contacts, spam handling, data practices, legal pages and approved analytics |
| 5 — Production launch | Earlier build/TypeScript/browser/axe results are recorded; local build output exists | Full release review, domain/HTTPS/hosting verification, production forms and deployment smoke tests |
| 6 — Content/marketing | Channels and strategy discussed | Owner-approved publication cadence, real accounts/content and measured enquiries |
| 7 — Expansion | Future program/service/product directions documented | Demand, capacity, detailed scope and explicit approval |

## Founder roadmap and acceptance criteria

## PART 20 — WEBSITE DEVELOPMENT ROADMAP

These are planning targets, not guaranteed deadlines.

I have approximately 5–7 hours per week available for this project.

Adjust the timeline based on actual implementation complexity.

### PHASE 1 — FOUNDATION AND DESIGN APPROVAL

Objectives:

- Inspect the current Codex project.
- Identify existing application structure.
- Identify original design references.
- Establish source-of-truth documentation.
- Confirm the homepage visual direction.
- Review desktop and mobile previews.
- Avoid generic design patterns.

Acceptance criteria:

- Existing project understood.
- Business context documented.
- Visual direction clearly established.
- Homepage reviewed and approved by me.

### PHASE 2 — CORE WEBSITE

Build or refine:

- Global navigation
- Homepage
- Learning Programs page
- Flagship Masterclass page
- Responsive layout
- Shared components
- Design tokens

Acceptance criteria:

- Core routes work.
- Navigation is functional.
- Layouts are coherent.
- Mobile experience is usable.
- No fabricated business claims.

### PHASE 3 — CURRICULUM AND INTERACTIVE EXPERIENCES

Implement:

- 18-module curriculum
- Detailed module interactions
- 14 project showcases
- Enterprise capstone
- DevOps infinity lifecycle
- DevOps-to-AI career progression
- Meaningful animations

Acceptance criteria:

- Source content is accurate.
- Curriculum is readable and navigable.
- Interactive elements genuinely function.
- Mobile layouts are usable.
- Motion does not block accessibility.

### PHASE 4 — BUSINESS FUNCTIONALITY

Implement:

- Contact page
- Functional enquiry form
- Form validation
- Spam protection
- Appropriate data handling
- Real delivery of enquiry messages
- Clear confirmation and error states
- Privacy and legal pages
- Basic SEO and analytics where approved

Acceptance criteria:

- End-to-end enquiry testing passes.
- No simulated submission is presented as successful.
- Contact information is verified.
- Personal information is handled responsibly.

### PHASE 5 — QUALITY AND PRODUCTION LAUNCH

Tasks:

- Responsive testing
- Browser testing
- Accessibility review
- Performance review
- Security review
- Content verification
- SEO metadata
- Domain configuration
- HTTPS
- Production deployment
- Smoke testing

Acceptance criteria:

- No critical launch-blocking defects.
- Production deployment works.
- Main pages are accessible.
- Forms work.
- The website is ready for public visitors.

### PHASE 6 — CONTENT AND MARKETING

Potential activities:

- Launch YouTube channel
- Launch Instagram presence
- Establish LinkedIn presence
- Publish engineering tutorials
- Create practical DevOps content
- Share project demonstrations
- Explain career pathways
- Direct visitors to the website

Content should provide genuine value rather than rely on exaggerated marketing.

### PHASE 7 — BUSINESS EXPANSION

After validating initial demand:

- Improve the flagship offering
- Expand AWS specialization
- Develop applied AI programs
- Develop Forward Deployed Engineering
- Explore cloud and DevOps consulting
- Explore AI automation services
- Evaluate software products
- Consider an LMS when genuinely needed

---

## Version 1 boundaries

## PART 22 — WEBSITE VERSION 1 SCOPE

The first public version should prioritize:

1. Premium homepage
2. Learning Programs page
3. Detailed flagship Masterclass page
4. Complete curriculum representation
5. Hands-on projects and capstone
6. Interactive DevOps lifecycle
7. About page
8. Contact and functional enquiry form
9. Essential legal pages
10. Responsive, accessible, reliable implementation

Avoid prematurely building:

- Full LMS
- Student dashboard
- Mobile app
- Payment gateway without a defined business process
- Complex CRM
- AI chatbot
- Unnecessary backend services
- Unapproved consulting pages
- Large numbers of placeholder programs

Build a strong foundation without overengineering.

---

## PART 13 — TECHNICAL DIRECTION

Previously discussed technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion / Framer Motion
- GSAP
- SVG
- React Bits
- Three.js
- Spline
- Node.js
- Python for future AI-related services

These are options, not instructions to install every library.

Inspect the existing repository first.

Preserve a coherent working architecture where possible.

Prioritize:

- Maintainability
- Performance
- Responsiveness
- Accessibility
- Security
- SEO
- Extensibility
- Clear component boundaries
- Reusable design tokens
- Content-driven curriculum architecture

Do not rewrite a functioning project merely to change frameworks.

Use GitHub for source control.

Do not push, deploy, delete existing code, or change remotes without explicit approval.

---

## Dependencies and order

1. Preserve source context and existing work; agree which current homepage iteration is under review.
2. Review actual desktop/mobile previews and approve the homepage direction before building many additional pages.
3. Obtain original detailed curriculum/lab sources and approve scope before publishing technical promises.
4. Confirm offer operations, contacts, policies and data handling before implementing external enquiry/payment integrations.
5. Prepare dedicated content routes and production discovery configuration where approved, then test production behavior.
6. Publish only against verified domain/hosting details and explicit authorization; move into selling when delivery is ready.

Plan around the founder's 5–7 available hours/week. Use one small deliverable and a review checkpoint at a time. Dates and phase durations are not committed.

## Launch checklist

- [ ] Owner approves actual homepage and responsive behavior.
- [ ] Core pages/routes and navigation match the agreed Version 1 scope.
- [ ] 18 modules, 14 projects, prerequisites, labs and capstone reconcile with approved originals.
- [ ] AI-assisted learning is distinguished from additional AI/agentic engineering study.
- [ ] Available versus future offerings and Azure/AWS coverage are accurate.
- [ ] Instructor, fees, duration, schedule, support and lab-cost responsibilities are confirmed.
- [ ] Verified contact details and real enquiry delivery work end to end, including error handling.
- [ ] Required business/legal/privacy/cancellation content is approved.
- [ ] Keyboard, screen reader, reduced motion, mobile and browser checks pass for the release.
- [ ] Performance/security review is appropriate to the final functionality.
- [ ] Domain ownership, hosting, HTTPS, canonical URLs, sitemap/crawler settings and approved analytics are verified.
- [ ] Explicit publication authorization and production smoke testing are recorded.

## Recorded verification versus current inspection

[Refinement report](../../design-review/REFINEMENT-2026-10-26.md) and [QA JSON](../../design-review/refined-qa.json) record prior successful TypeScript/build checks, six viewport widths and empty axe violation lists for checked states. The current documentation task only inspected these artifacts and source; it did not rerun tests or verify a public URL. Formal accessibility compliance and business readiness are not established by these artifacts.

## Current blockers and open technical choices

Final design approval; original detailed curriculum/labs; live enquiry delivery; confirmed commercial/legal/contact details; and verified public deployment remain open. Separate page routing/prerendering/SEO architecture, approved analytics, lead storage and hosting choices also require decisions. Keep unresolved questions in [Decisions and open items](DECISIONS_AND_OPEN_ITEMS.md).

## Screen-by-screen review checkpoint — 26 October 2026

Screen 01 (header and hero) has a bounded corrective pass and recorded verification, and is awaiting owner review. Do not treat this as approval of the whole homepage. Follow [Homepage screen review](HOMEPAGE_SCREEN_REVIEW.md) before moving to the audience section or additional pages.

## 26 October 2026 � immersive direction, milestone 01

Owner authorized a premium human-centred direction and bounded first implementation: hero plus first audience-pathway transition. This direction is recorded; final visual approval is still pending. See [section plan](IMMERSIVE_DESIGN_PLAN.md) for reviewed references, licensing limits and later section proposals.

Existing architecture is React 19 / TypeScript / Vite, not Next.js; no migration undertaken. Logo SVGs, approved curriculum and downstream lifecycle/project/curriculum implementations are preserved. Existing Motion (MIT) is used through LazyMotion/lightweight components for short stage-title opacity and one-time pathway border emphasis. No new packages, copied templates or remote imagery. The retained conceptual image is labelled illustrative; publication provenance remains unverified, not represented as licensed learner photography.

Implemented: enlarged human-context illustration, preserved headline, expandable illustrative technical examples, stable connected journey controls, and two editorial pathways with practical steps and links that select the existing audience detail. No interaction connects to real infrastructure.

Verification: TypeScript and production build passed. Dark/light at 320, 390, 640, 768, 1024 and 1440px showed no horizontal overflow. All four stages and example disclosures tested; closed-state stage heights stable. Desktop axe WCAG A/AA scans in both themes reported zero violations after contrast repairs. Keyboard selection, audience links, normal/reduced motion and zero page errors recorded. Evidence: design-review/immersive-milestone-01/qa.json and screenshots. Visual approval, not automation alone, gates the next stage.

STOP GATE: obtain owner visual approval of milestone 01 before implementing the DevOps infinity lifecycle, DevOps-to-AI progression, projects, curriculum or other pages. No deployment authorized or performed.

## 26 October 2026 - Screen 2 ready for owner review

Implemented From curiosity to capability with the exact owner-supplied light/dark engineering-workspace images, optimized WebP variants, accessible Learn/Build/Deploy/Evolve interaction, meaningful examples/questions and restrained reduced-motion-safe transitions. Source of Screen 1 and its protected styling/header files remains unchanged. Existing curriculum and next sections preserved. TypeScript/build, eight theme/width layout and scoped axe checks passed; keyboard, theme swap, stage destinations and examples verified. Evidence: design-review/screen-02/REPORT.md and qa.json. Owner visual approval is pending. Stop after Screen 2; no next-section development or deployment.

## 26 October 2026 - morphic navigation, account/search and rotating headline

Owner requested tagline beneath logo, centered premium navigation, a compact left search, account dropdown and five-second headline phrases. Installed and adapted Kokonut MorphicNavbar/ProfileDropdown for React/Vite; used the supplied ActionSearchBar with actual curriculum/project destinations. Theme toggle remains separate from Login. Visitor menu is truthful about missing portal/auth; existing VITE_PORTAL_URL wiring retained. Added pauseable AI skills / DevOps automation / cloud headline alternatives with reduced-motion fallback. Preserved logo, topographic background, Screen 2, content and downstream sections. Checks and usage: Important_Documents/docs/HEADER_COMPONENT_USAGE.md; previews: design-review/header-morphic/. New utilities: clsx, tailwind-merge. No new animation framework, fabricated subscribers, deployment or Git push. Visual approval remains pending.

## 27 October 2026 - coherent premium flow across Screens 1 and 2

Owner requested implementation after reviewing rbp-shader-template.vercel.app. Applied its principles of editorial hierarchy, visual continuity and scroll-led storytelling through original project artwork; no template/code/artwork copied. Preserved the ribbon-E, approved topographic hero, current copy and both owner-supplied workspace images. Added JourneyBridge.tsx: an original lightweight SVG ribbon and readable learning philosophy between the first two screens. Existing Motion useScroll/useTransform drives a line reveal and restrained text-opacity progression without React state updates on scroll. Reduced motion shows complete static content. No autoplay/scroll takeover, external graphics packages or shader library added.

Added premium-flow.css to unify type scale, spacing, quieter background density, controlled actions and workspace surfaces. Desktop workspace introduction stays alongside the learning panel with native CSS sticky positioning, returning to natural flow on tablet/mobile. Subsequent audience/curriculum/project/lifecycle sections were not developed or reworked. CTA destinations remain #programs and #about, the latter describing the planned solutions direction.

Verification: TypeScript and production build passed. Both themes checked at 320, 390, 768, 1440px: no overflow. Full-page desktop axe A/AA scans report zero violations in tested states. Stage selection works; original photos load by theme. Normal scroll-linked ribbon progress, journey anchor and keyboard selection verified. Reduced-motion screenshots inspected on desktop/mobile. Evidence: design-review/premium-flow-2026-10-27/. Owner visual review remains pending. No deployment, commit or push.

## 27 October 2026 - Intelligent Aurora and public header

Refined public navigation, functional Search, separate theme toggle and Enquire; guest Login hidden. Added lightweight right/lower CSS aurora over retained topography, with reduced-motion and visibility handling. No new dependencies. Header/hero only; Screen 2 and logo artwork preserved. Verification and four previews: design-review/intelligent-aurora-2026-10-27/REPORT.md. Visual approval pending; no deployment.


## 27 October 2026 - Screen 3 learning starting points

Owner authorized Screen 3 after reviewing Screen 2. Consolidated duplicated audience sections into one interactive starting-point selector with a three-step progression, accurate future AI pathway status and curriculum destination. Removed the intervening tool strip. Screens 1 and 2 preserved. No dependencies added; no deployment. Verification and four previews: design-review/screen-03/REPORT.md. Screen 3 awaits owner visual review before further section work.


## 27 October 2026 - Pathway catalogue and landing pages

Owner authorized Pathway 1 Masterclass and separate pages for the other existing pathways. Homepage catalogue features Pathway 1 plus compact title links for Pathways 2-5. Masterclass now contains preserved curriculum, projects/capstone and engineering interactions. Query-based routing supports refresh, back-to-catalogue and browser history without dependencies. Other pages distinguish documented scope from unconfirmed syllabi. Evidence: design-review/pathway-pages/REPORT.md and qa.json. Visual review pending; no deployment or Git push.


## 27 October 2026 - Business Solutions after learning pathways

Added the owner-requested business-solutions section and business-specific enquiry draft dialog. Services cover AI workflow automation, websites, business applications and reviewed organic-growth systems. Both themes and responsive/form/accessibility checks recorded in design-review/business-solutions/REPORT.md. Enquiry delivery remains local draft only; live delivery not connected. No deployment. Visual approval pending.


## 27 October 2026 - FAQ, footer and shared contour finish

Owner requested additional questions, cleaner FAQ/footer and sitewide topo continuity. Added 13 questions grouped into learning/business topics, refined footer spacing and applied a faint static SVG motif to remaining sections and pathway pages. Existing hero/Screen 2 backgrounds retained. Both themes, four widths and scoped accessibility checks passed. Evidence: design-review/faq-footer-finish/REPORT.md. No new dependencies or deployment. Visual review pending.


## 27 October 2026 - Google login required for conversations

Owner requested removal of curriculum downloads and login before sending conversations, selecting Firebase Google sign-in. Removed download/local-draft actions; implemented a shared auth gate and Firestore enquiry write flow with explicit consent and write-acknowledged confirmation. Firebase project configuration, Google provider, authorized domains, database/rules setup and live testing remain pending. No production activation or deployment. See FIREBASE_CONVERSATIONS.md for setup, access rules, dependencies and verification limits. Earlier local-draft verification entries describe prior implementations only.

