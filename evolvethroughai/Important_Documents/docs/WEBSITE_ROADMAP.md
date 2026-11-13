# Website Roadmap

> Current status (9 November 2026): see [Current website handover](CURRENT_WEBSITE_HANDOVER.md). This dated summary supersedes earlier implementation descriptions below; historical records are preserved.


> Updated: 9 November 2026 Â· Timezone: Asia/Kolkata (IST).
> Business intention: the ownerâ€™s master handover. Implementation facts: inspected local source. Approval and launch readiness are separate from implementation.


## Current milestone

**The documentation baseline is complete. The latest owner request authorizes page-by-page, screen-by-screen refinement, starting with the homepage header and hero. Final homepage approval remains open.** The latest master handover states that final design approval and public launch are unconfirmed. Prior positive feedback on an iteration does not establish final approval.

An existing local implementation already covers parts of Phases 2 and 3. Do not restart it or mark those phases complete simply because the handover describes earlier plans. Preserve the working source and reconcile it with the newly documented requirements.

## Current implementation versus the phase gates

| Phase | Inspection snapshot | Acceptance still needed |
| --- | --- | --- |
| 1 â€” Foundation/design approval | Existing app, exports, notes, source context and latest QA artifacts inspected; documentation being established | Owner review and explicit homepage approval |
| 2 â€” Core website | Navigation and one composed homepage exist in React/Vite | Dedicated Learning Programs and Masterclass routes, agreed page architecture and owner review |
| 3 â€” Curriculum/interactions | 18-module overview, 14 project concepts, 8 lifecycle controls, 9 capstone UI stages and 5 progression controls exist | Original detailed source reconciliation, approved lab scope and content review |
| 4 â€” Business functionality | Browser validation and local enquiry/curriculum downloads exist | Real delivery backend, verified contacts, spam handling, data practices, legal pages and approved analytics |
| 5 â€” Production launch | Earlier build/TypeScript/browser/axe results are recorded; local build output exists | Full release review, domain/HTTPS/hosting verification, production forms and deployment smoke tests |
| 6 â€” Content/marketing | Channels and strategy discussed | Owner-approved publication cadence, real accounts/content and measured enquiries |
| 7 â€” Expansion | Future program/service/product directions documented | Demand, capacity, detailed scope and explicit approval |

## Founder roadmap and acceptance criteria

## PART 20 â€” WEBSITE DEVELOPMENT ROADMAP

These are planning targets, not guaranteed deadlines.

I have approximately 5â€“7 hours per week available for this project.

Adjust the timeline based on actual implementation complexity.

### PHASE 1 â€” FOUNDATION AND DESIGN APPROVAL

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

### PHASE 2 â€” CORE WEBSITE

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

### PHASE 3 â€” CURRICULUM AND INTERACTIVE EXPERIENCES

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

### PHASE 4 â€” BUSINESS FUNCTIONALITY

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

### PHASE 5 â€” QUALITY AND PRODUCTION LAUNCH

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

### PHASE 6 â€” CONTENT AND MARKETING

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

### PHASE 7 â€” BUSINESS EXPANSION

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

## PART 22 â€” WEBSITE VERSION 1 SCOPE

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

## PART 13 â€” TECHNICAL DIRECTION

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

Plan around the founder's 5â€“7 available hours/week. Use one small deliverable and a review checkpoint at a time. Dates and phase durations are not committed.

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

## Screen-by-screen review checkpoint â€” 26 October 2026

Screen 01 (header and hero) has a bounded corrective pass and recorded verification, and is awaiting owner review. Do not treat this as approval of the whole homepage. Follow [Homepage screen review](HOMEPAGE_SCREEN_REVIEW.md) before moving to the audience section or additional pages.

## 26 October 2026 ï¿½ immersive direction, milestone 01

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


## 3 November 2026 - Reversible editorial hero experiment

Owner authorized trying a Visor-inspired hero with exact rollback available. Rounded existing concept-art frame, compact headline/CTAs and three angled exploration cards; no template replacement, new dependency, fake proof or lower-section redesign. Both themes/four widths, scoped axe and build checks passed. Snapshots and screenshots: design-review/visor-hero-experiment/REPORT.md. Visual approval pending; revert only this experiment if requested. No deployment.


## 3 November 2026 - Hero experiment reverted

Owner requested reverting the Visor-inspired trial. Restored the exact pre-experiment Hero.tsx and VisualExperience.tsx snapshots and removed the experiment component/styles. Other website changes remain intact. The experiment is historical, not the current visual direction.


## 3 November 2026 - Curated background photography
Owner-supplied AI network, skyline and calm ocean images integrated as subdued hero, Business Solutions and footer backgrounds. Responsive optimized WebP variants; existing layouts, logo, topographic layers and Screen 2 retained. TypeScript/build passed; 390px/1440px light/dark browser checks reported no horizontal overflow. Evidence: design-review/curated-backgrounds/REPORT.md and screenshots. Visual approval pending; no deployment or push.

3 November contour refinement: removed duplicate landing contours; replaced static wave textures with sparse evolving topographic canvases across section surfaces. Existing imagery/content preserved. TypeScript/build and desktop browser checks passed; evidence in design-review/curated-backgrounds/REPORT.md. Visual review pending.

3 November seamless light-mode pass: outer screen divider borders removed, shared base colours and softly faded photographic edges applied. Continuous contour plane preserved. Build/TypeScript and computed border checks passed; updated light-mode previews under design-review/curated-backgrounds/. No deployment.

3 November royal green direction: owner requested replacing blue UI accents with a premium green gradient. Implemented emerald/jade with muted champagne heading detail, preserved official logo and current layouts/background continuity. No dependencies added. TypeScript/build and four theme/width checks passed; design-review/royal-green/ contains previews, evidence and original style backups. Visual approval pending.

3 November richer palette refinement: owner requested stronger green with blue, burgundy and gold. Applied forest emerald/midnight primary actions, burgundy secondary accents and antique gold details, with coordinated headings, lighting and contours. Logo and seamless layout preserved. TypeScript/build and four theme/width browser checks passed. Evidence: design-review/royal-jewel/. Owner visual approval pending.

4 November powder blue / yellow refinement: owner requested a new palette after jewel colours. Applied powder-blue atmosphere and warm yellow details with deeper blue actions for contrast. Existing content, logo and seamless photo/contour layers retained. TypeScript/build passed; previews and viewport verification saved in design-review/powder-blue-yellow/. No dependencies or deployment.

4 November violet/blush palette trial: owner selected electric purple, deep violet and soft blush pink. Applied coordinated UI accents, violet primary actions, blush secondary actions, atmospheric glows and contour strokes. Official logo, content and seamless layout retained. No dependencies. TypeScript/build and light/dark mobile/desktop checks passed. Reversible styles and previews: design-review/violet-blush/. Visual approval pending.

4 November palette selection: owner supplied five combinations and authorized selecting/implementing the best fit. Chose option 5, midnight/electric blue/cantaloupe, for clear technical identity and warm contrasting business CTA. Applied both themes, retained logo/content/seamless background plane. TypeScript/build and mobile/desktop light/dark layout checks passed. Previews and backups: design-review/midnight-blue-orange/. Visual approval pending; no deployment.

4 November alternative palette trial: owner rejected midnight/electric-blue/cantaloupe. Applied option 4 from owner's list: powder blue, pure white and racing orange, with orange primary actions, blue headings and pale photographic atmosphere. Existing layout/logo preserved. Build and four theme/width browser checks passed; previews: design-review/powder-racing-orange/. Visual approval pending.

4 November legacy colour correction: remaining fixed dark-blue Masterclass showcase/stack/lifecycle surfaces now use white/pale sky in light mode, with pink active controls and dark readable labels. Dark mode retained. Production build passed; computed large-surface audit found no remaining dark-blue fills on homepage or Masterclass in light mode.

4 November Screen 2/3 palette correction: Academy CTA now hot pink; dual-track cards white/blush in light mode and neutral/plum in dark mode; learning selector and step fills pink rather than inherited blue. Build passed; computed browser styles verified in both themes.

4 November route-wide box-colour audit: corrected inherited fixed blue/green background fills across 18 component stylesheets and variable-driven dark header controls. Preserved sky-blue text/photo identity; neutral surfaces and pink controls now consistent across home, Masterclass and four additional pathways, including account dialog. TypeScript/build passed; all-route theme audit and screenshots: design-review/palette-consistency/.

4 November ivory/charcoal direction: owner authorized warm ivory, charcoal and burnt orange. Applied across 20 stylesheets and unified interaction tokens; official logo/photo assets and continuous layout retained. TypeScript/build passed. Homepage and all five pathways checked in both themes, plus account panel; no legacy blue box fills or browser errors. Evidence: design-review/ivory-charcoal/. Visual approval pending.

6 November logo palette restoration: owner approved blue/cyan/violet accents over ivory/charcoal. Applied across component styles and all interactive states, including account/curriculum surfaces, retaining seamless layout and original logo/photo assets. No dependencies. TypeScript/build, all-six-route light/dark audit and mobile/desktop checks passed. Evidence and reversible backups: design-review/logo-palette-restored/. Visual approval pending.

6 November electric blue/purple refinement: owner requested a stronger mix across every page. Intensified global action and headline gradients, purple secondary controls, selected states, card accents, atmospheric glows and shared contour strokes. Ivory/charcoal base, official logo and seamless layout preserved. No dependencies. TypeScript/build, all-six-route both-theme audit and mobile/desktop checks passed. Evidence: design-review/electric-blue-purple/. Visual approval pending.

6 November restraint correction: owner rejected the excessive electric-purple appearance. Reduced violet to a small gradient accent, restored deep-blue-led actions, neutral cards/selected surfaces, softer shadows and much quieter atmospheric glows/contour colours. Build and mobile/desktop both-theme layout checks passed. Evidence: design-review/restrained-blue-violet/. Visual approval pending.

6 November logo spectrum with orange tint: owner requested more depth than the muted treatment. Restored clear blue/cyan/violet heading/action/glow colours; added restrained electric-orange icon, warm secondary-surface, hover-ring and ambient accents. Logo and seamless layout preserved. Build and mobile/desktop both-theme checks passed; previews: design-review/logo-orange-tint/. Visual approval pending.

6 November champagne warmth: owner authorized a subtle yellowish background highlight. Added a faint champagne radial glow beside the existing orange warmth in both themes; logo spectrum remains dominant, controls and typography unchanged. Production build passed. Visual approval pending.

7 November robot video hero: owner supplied MP4 and authorized left robot/background playback with right-shifted landing copy. Added optimized silent 1600/960px videos, poster, theme-aware readability, pause/resume, offscreen/tab pause and reduced-motion/Save-Data fallback. Logo, content and downstream sections preserved. No app dependencies. TypeScript/build and six theme/width playback checks passed, including manual controls and reduced motion; design-review/robot-video-hero/ contains evidence. Visual approval pending; no deployment.

7 November robot framing correction: reduced desktop robot/video scale 16%, shifted left 5% and removed pause button per owner request. Continuous silent loop retained with reduced-motion fallback. Fixed background width sizing for classic scrollbars. TypeScript/build and six theme/width playback/overflow checks passed; design-review/robot-video-hero/smaller-qa.json. Visual approval pending.

8 November revert: owner rejected white-background robot processing. Restored Hero.tsx from the exact pre-experiment snapshot and removed only the white-composite CSS block. Original charcoal footage/poster restored in both themes; approved .84 size, -4% horizontal framing, continuous loop and no pause control retained. TypeScript/build passed. White derivatives remain unused review artifacts; no deployment.

8 November full graphite first-screen trial: owner requested charcoal across the landing page. Applied full-width graphite wash, light hero typography and readable top navigation/logo variant, retaining logo-colour accents and robot framing. Later sections retain existing theme; transition fade preserved. TypeScript/build and six theme/width playback/overflow checks passed. Evidence: design-review/graphite-hero/. Visual approval pending.

## 8 November 2026 - Champagne spotlight on graphite hero

Owner approved trying a restrained warm spotlight after positive feedback on the graphite hero direction. Added a static champagne light focused on the robot, with a softer mobile treatment, preserving logo, framing and text layout. Production build and six browser theme/width checks passed. Evidence: design-review/graphite-spotlight/REPORT.md. Spotlight visual review remains pending; no deployment or push performed.

## 8 November 2026 - current handover reconciled

Graphite hero retained; spotlight trials removed. Glass navigation pills, interactive image-backed learning/solutions cards, upward hero spacing and smaller robot framing implemented. Both latest owner-provided images are connected as optimized WebP assets. Firebase login/enquiry saving previously confirmed by owner; old pending/local-draft statements are historical. See [Current website handover](CURRENT_WEBSITE_HANDOVER.md) for exact state and verification limits. Full homepage approval and launch remain open; no push/deployment.

## 9 November 2026 - five-screen video and interaction reconciliation

See [Current website handover](CURRENT_WEBSITE_HANDOVER.md) for the inspected final screen order, active video mapping, pull-cord behavior, reverted trials and validation limits. Screens 2 and 3 are now separate learning/business introductions. Screen 4 uses the dotted-wave clip; Screen 5 uses the latest owner-selected pouring clip over pearl with a manual pull/tap/keyboard trigger. Hero rotation, supplied image cards, charcoal continuity and glass navigation are retained. TypeScript/build passed; final gesture, responsive and visual acceptance remain open. No deployment or push.

## 10 November 2026 - Screens 7–9 atmosphere refinement
Added local video atmospheres to the enquiry, FAQ and footer sections, with soft edge fades, restrained ambient drift, answer reveals and CTA feedback. Reuses existing media; no new application dependencies. Videos load near view, pause offscreen and use posters under reduced motion. Desktop/mobile light/dark browser checks found no horizontal overflow; TypeScript and production build passed. Visual approval remains pending. No deployment.

Screens 7�9 correction: each now has its own locally generated abstract video (aurora, cyan contours, orbital glow), replacing the reused dotted/pour media. Existing lazy playback and reduced-motion posters retained. No content changes or deployment.

## 11 November 2026 - Screen 7 interactive robot journey
Owner approved the five-step staircase concept. Added tappable steps, robot hop/advance, rotating educational messages, restart and final conversation CTA. Existing enquiry form, budget preference and authentication preserved. Existing robot PNG reused; no new dependencies. Keyboard selection and all five steps verified at 390, 768 and 1440px with no horizontal overflow. TypeScript and production build passed. Reduced-motion CSS disables hops/transitions. Visual review remains open; no deployment.

11 November 2026: Owner requested revert of the staircase trial. Restored the prior Screen 7 ambition copy/checklist and existing enquiry card. Distinct Screen 7–9 video backgrounds remain. The staircase entry above is historical and no longer active.

11 November 2026 - Screen 7 stairway film interaction: owner requested richer quality and tap-driven milestones. Created a contrast/saturation-adjusted 30fps interpolated derivative from the supplied 438px, 4fps, two-second GIF. Five sequential tap/keyboard-triggered playback segments reveal aspirational achievement messages; replay resets the journey. Source animation does not contain five separately authored stair-climbing actions. Existing enquiry form retained. All five transitions and replay verified in browser; 390px no overflow; TypeScript/build passed. No deployment.

11 November 2026: Replaced Screen 7 stairway footage with the newer ten-second learning-growth clip. Preserved 716px/30fps, applied light sharpening and colour refinement, refreshed poster and retained five tap milestones at natural speed. TypeScript/build passed. No deployment.

11 November 2026: Owner supplied a landscape stairway still and requested a full, clear Screen 7 image. Replaced video/milestone interaction with optimized enhanced still and restored ambition/checklist introduction. Existing enquiry form and other screens preserved. Soft masking and readability overlay applied; no deployment.

11 November 2026: Screen 7 image visibility correction removes full-image opacity, white wash, ambient overlay and section masking. Image now renders at full opacity without CSS filtering; local charcoal panels protect content contrast. Desktop/mobile light/dark checks found no overflow; build passed.

11 November 2026: Screen 5 clarity review confirmed thread-colour-pour.mp4 remained unchanged (9 November, 5,581,038 bytes). Removed pearl media wash and list backdrop blur, reduced list white opacity to retain film colour. Video source, timing and robot pull trigger unchanged. Build passed.

11 November 2026: Applied owner-selected connected-node video to Screen 8 FAQ with charcoal backdrop and protected answer contrast. Existing question categories/content, offscreen pause and reduced-motion poster behavior preserved. Desktop/mobile playback and answer expansion verified, no horizontal overflow; TypeScript/build passed. Screens 5 and 7 unchanged. No deployment.

11 November 2026: Lower-homepage seam correction (Screens 5–9). Unified backing to graphite, removed outer section borders/shadows and added edge-only top/bottom fades on colour-pour, stairway image and FAQ media. Footer shares graphite backing. Central media remains unfiltered and full-strength. Desktop/mobile light/dark layout checks and build passed; no content, source media or interaction changes. No deployment.

11 November 2026: Applied owner-selected human/AI hands image on final screen, conversation action aligned beneath left headline; added exact laptop-robot image below FAQ introduction over the existing connected-node video. Responsive fades retain charcoal continuity. Screen 7 and Screen 5 unchanged. TypeScript/build and desktop/mobile light/dark overflow checks passed; screenshot review completed. No deployment.

11 November 2026: Robot colour cord moved to a portal slot beneath the Screen 4 Explore learning pathways link. Larger curved brown SVG rope and larger robot; drag starts/replays Screen 5 pouring film and reveals the section, ordinary click navigates to #programs. Separate keyboard Play colours action retained. Drag/click distinction verified; mobile no overflow; TypeScript/build passed. Existing video asset unchanged. No deployment.

11 November 2026: Cord refinement makes learning-pathways label pale high-contrast, ties the brown curved rope to its underline with an SVG knot, and removes the separate Play/Replay colours text. Robot drag still plays colour video; click follows #programs. Arrow Down on focused robot provides keyboard colour activation. TypeScript/build and drag/navigation checks run; no deployment.

12 November 2026: Replaced recreated cord/robot/link with the exact owner-saved Explore the Learning Pathways PNG. Artwork and wording unchanged, aspect ratio preserved. Drag-to-play Screen 5, click-to-#programs and keyboard Arrow Down activation retained. TypeScript/build passed. No deployment.

12 November 2026: Changed the supplied pull-artwork background to matching graphite charcoal with imagegen; retained the robot/rope/lettering composition and existing drag/click handlers. Original image preserved. No deployment.

12 November 2026: Removed the rectangular pull artwork and replaced it with transparent robot plus native heading/knot/SVG rope/caption over the actual page background. Drag visibly lowers robot and lengthens rope (50px displacement browser-verified), release starts Screen 5; click still targets #programs. TypeScript/build and drag/navigation/mobile overflow checks passed. No deployment.

12 November 2026: Refined draggable robot to match the latest close-up reference: detailed golden fibre rope, silver-mounted realistic knot, larger robot and cyan/violet ring. Transparent layered composition retained. Build/TypeScript passed and 50px live drag movement verified. No deployment.

12 November 2026: Screen 8 laptop robot enlarged and its rectangular photo background removed using a transparent derivative. Shared connected-line film now shows around robot/laptop, no image-box boundary. TypeScript/build and desktop/mobile video/FAQ checks passed; no horizontal overflow. No deployment.

12 November 2026: Follow-up seam review removes opaque media backing boxes and decorative section pseudo-layers on Screens 7–9. Image/video layers extend 80px beyond section boundaries with 180px crossfades (mobile 50/130px). Footer structural horizontal dividers removed; footer light-theme contrast fixed over shared charcoal. Screens 7–9 desktop/mobile light/dark overflow checks and production build passed; visual transition screenshots inspected. No deployment.

12 November 2026: Reduced Screen 8 node-film glare with lower media opacity/brightness and steadier charcoal wash; no CSS media animation/transition. Owner report of white flicker is awaiting confirmation of the affected screen. Sampled source brightness appeared stable; this pass reduces glare rather than claiming a proven flicker root cause. Build and playback/mobile checks passed.

12 November 2026: Owner confirmed glare/flicker report concerns Screen 8. FAQ separators reduced to half-pixel low-opacity rules, last rule removed; network-film opacity .18 with brightness .5 and contrast .85, eliminating white glare at presentation level. Answer text contrast retained. Desktop/mobile playback and expansion checks and build passed; source video unchanged. No deployment.

12 November 2026: Owner requested visible but shorter background connections on Screen 8. Restored moderate visibility and used a finer-scale mirrored network derivative; thin low-contrast FAQ separators remain. Desktop/mobile playback, no-overflow checks and TypeScript/build passed; screenshot inspected. No deployment.


## 12 November 2026 — whole-site spacing and contrast review

Reviewed homepage and five pathway routes across four viewport widths and both themes. Normalized pathway-list spacing and repaired low-contrast labels/headings while preserving the design and media. TypeScript/build passed; 48 layout states had no overflow, broken images or page errors; 12 desktop axe scans returned zero violations. Evidence: [layout review](../../design-review/layout-review-2026-11-12/REPORT.md). No deployment.


## 12 November 2026 — smooth wheel scrolling
Added Lenis site-wide with restrained wheel easing, native touch, keyboard inertia cancellation, dialog/nested-list exclusions and live reduced-motion fallback. Removed competing CSS scroll easing while enabled. Browser checks confirmed interpolated wheel movement on homepage/masterclass, no page errors or mobile overflow. TypeScript and production build passed before final keyboard refinement; TypeScript rechecked afterwards. No deployment.

## 12 November 2026 — stable FAQ atmosphere and later-screen composition
Replaced the Screen 8 connected-node video with its existing poster and a slow transform-only drift to eliminate video-frame brightness changes. Reduced motion disables drift. Compacted Screen 6–8 padding, FAQ row spacing and laptop robot sizing; added fixed-header anchor clearance to later sections. No fixed viewport clipping or scroll snapping introduced: long/mobile content remains naturally scrollable. TypeScript/build passed; homepage checks in both themes at 320/390/768/1440 showed no overflow or axe violations in the desktop scans. Existing media elsewhere preserved. No deployment.

## 12 November 2026 — scroll rendering and robot identity
Topo contour recalculation pauses during active scrolling and resumes after 160ms; idle contour paint reduced from 30fps to 12.5fps for the slow drift. Existing videos already pause offscreen. Added static official-symbol overlays to hero, Academy, cord, stairway and FAQ robot presentations. These are layout-positioned badges, not frame-tracked video edits; moving footage can shift relative to the mark. TypeScript/build and wheel/keyboard/reduced-motion browser checks passed; no mobile overflow or page errors in focused checks. No deployment.


## 12 November 2026 — reload and floating badge correction
Homepage reload clears its section hash and returns to the hero; direct pathway query routes remain intact. Removed hero/Academy video and stairway overlays because they were not attached to the moving/cropped robot bodies. Cord and FAQ image-bound badges retained. Frame-tracked robot branding remains unfinished; it requires editing the media rather than a fixed page overlay. TypeScript/build passed.


## 12 November 2026 — robot branding reverted
Owner requested removal of robot logo additions. Removed the remaining cord/FAQ logo badges, their wrapper, component and badge styling. Original robot media retained; tracked trial renders were never installed. Scrolling and homepage-refresh fixes preserved.
