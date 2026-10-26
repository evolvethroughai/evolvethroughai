# Evolve Through AI redesign

An editorial, responsive marketing site built on the existing React + Vite stack. Typography pairs Space Grotesk and DM Sans with Instrument Serif accents. Light paper surfaces alternate with a dark engineering lifecycle and footer. Blue, cyan and violet retain the supplied brand direction.

## Content decisions

- The owner's business vision is the authority for the 18-module curriculum and 14 project concepts.
- Existing curriculum source is retained, but its unverified expanded claims, prices, discounts, durations, repository names and performance figures are not rendered by the new site.
- AWS practical material and applied AI curriculum are labeled as in development. Services and products remain a planned horizon.
- Project diagrams describe learning workflows, not completed deployments.
- Budget selection is optional and explicitly represents the visitor's preference, not a program price.

## Interactions

- Hero progression controls; professional / early-career pathway selection.
- Eight clickable DevOps lifecycle stages and a next-stage control.
- All 18 modules searchable and filterable, with native expandable sections.
- All 14 projects filterable and selectable, with architecture and learning outcomes.
- Optional budget slider with rolling digit transitions.
- Responsive navigation; native dialog with Escape, focus containment and focus restoration.
- Enquiry draft download. Nothing is submitted to a server or claimed as sent.
- Reduced-motion support, visible keyboard focus, skip link and semantic controls.

## Before a public launch

Confirm program availability, prerequisites, fees, delivery format, duration and approved detailed lab scope. Connect a real enquiry destination and publish business contact details. Obtain approved privacy, terms and cancellation policies. The current local draft flow collects no server data and is intentionally transparent about delivery.

## Run locally

`npm install`

`npm run dev`

## Verify

`npx tsc --noEmit`

`npm run build`

## Reference consolidation — 24 October 2026

Reviewed the user-supplied Lovable preview as an additional reference:
https://lovable.dev/preview/5xqJuCLszNfFu9HpR4iDu57YZF94h3vU

Retained the existing editorial design, brand palette, full curriculum, project explorer, footer and honest enquiry flow. Incorporated clearer starting-career / growing-career hero links, four-step audience journeys, user-controlled lifecycle playback, nine interactive capstone stages and five explorable career-progression details. External imagery and site code were not copied.

Content clarification: Azure is the most developed part of the current syllabus; AWS-specific practical coverage must be confirmed. Advanced AI capabilities remain additional learning, not an automatic result of DevOps experience. Curriculum search now includes module topics.

Final verification: TypeScript and production build passed. Chrome interaction checks passed at 1440, 1024, 768, 390, 375 and 320 pixels without horizontal overflow or page errors. Play/pause timing, all lifecycle/capstone/progression stages, both hero audience routes, search, projects, budget preference, downloaded enquiry content, mobile navigation and reduced-motion behavior were verified. Automated WCAG A/AA scans detected zero violations on desktop, mobile and the enquiry dialog, including the expanded budget state. These automated checks do not replace a full manual accessibility audit.

Latest screenshots and machine-readable QA results use the `consolidated-` prefix in `design-review/`. The pre-consolidation version is retained in `.redesign-backup/pre-consolidation/`. Contact integration, confirmed commercial details and approved legal pages remain necessary before public launch.

## Visual reference correction — 24 October 2026

The owner clarified that the previous consolidation had underused the reference's imagery and motion. That earlier pass incorporated structural ideas but did not reproduce the visual experience the owner had requested.

Revisited the rendered preview and inspected its hero, flagship and evolution imagery plus scroll-driven transforms. Integrated the three actual images from the owner's supplied Evolve Through AI preview, stored locally under `public/images/`:

- `engineering-journey.jpg`: mountain-to-city hero artwork, 1920 × 1088.
- `engineering-stack.jpg`: luminous engineering layers and AI core, 1200 × 1200.
- `devops-infinity.jpg`: luminous DevOps infinity artwork, 1600 × 912.

Added `src/components/VisualExperience.tsx` with a cinematic full-width hero and an explorable engineering stack. Replaced the earlier abstract ribbon hero and small blueprint presentation. The hero now includes four clickable Learn / Build / Deploy / Evolve milestones, contextual explanations, bounded scroll parallax and gently floating labels. Pause/resume and system reduced-motion controls apply to the hero. Labels have stationary click targets and pause their floating appearance on hover/focus.

The flagship now has a dark image-led composition with four clickable engineering layers. The DevOps loop uses the reference artwork behind the existing eight stage controls and play/pause walkthrough. Detailed curriculum, projects, capstone, career-progression explanations and honest programme scope remain in place. Advanced AI is still described as requiring additional study.

Normal browser-click checks identified and resolved a transparent hero text-container overlap. Verified all new milestone and stack interactions, pause/resume, image loading, curriculum/project/capstone counts, reduced motion and six responsive widths (1440, 1024, 768, 390, 375, 320). No browser errors or horizontal overflow were observed. Final desktop/mobile automated WCAG A/AA scans detected zero violations. TypeScript and production build passed.

Latest screenshots and QA results use the `imagery-` prefix in `design-review/`; they supersede the `consolidated-` screenshots for the current visual design. The previous App and CSS are preserved under `.redesign-backup/pre-imagery-revision/`.

The existing local server on port 3000 was verified to return HTTP 200 and serve Evolve Through AI. A separate temporary QA server used port 3001 because port 3000 was already occupied. No public deployment was performed. Fees, detailed AWS coverage, approved legal pages and actual enquiry delivery remain launch items.

## 26 October 2026 — Typography, motion, hero, footer and action refinement

The owner requested a more attractive font system, smoother motion/scroll behavior, clearer action buttons, and improvements to the landing hero and footer.

### Design and implementation

- Replaced the active four-family font mix and decorative serif accents with Sora headings and Inter body text. Increased small labels and body text throughout the page, with larger mobile copy.
- Downloaded the official variable WOFF2 fonts and their SIL Open Font License files into `public/fonts/`. Fonts are hosted locally; the page preloads the Latin heading/body files and makes no Google Fonts requests.
- Added `src/refinement.css` as a focused layer for the current typography and interaction direction, imported after the retained base stylesheet.
- Reworked the hero to “Build real skills. Shape what’s next.” with clear masterclass and curriculum actions, the documented 18/14/1 program overview, and two career-entry links.
- Retained the owner-supplied landscape, platform-stack and infinity images.
- Replaced the old footer with `SiteFooter` in `src/components/SiteActions.tsx`: clearer enquiry and curriculum actions, grouped navigation, stronger brand typography and a back-to-top link.
- Added an actual downloadable Markdown curriculum overview covering all 18 modules, all 14 learning project concepts and the capstone overview. It explains the unconfirmed fees/delivery details, Azure-led scope and additional learning required for advanced AI.
- Added contextual quick actions after the hero, hidden when the footer is visible and while the enquiry dialog is open. Hidden actions are inert to prevent keyboard access.
- Made mobile hero actions full-width and kept all journey milestone click targets clear of the explanation card.

### Motion and scrolling

- Kept native browser wheel/touch scrolling and anchor navigation; no scroll-hijacking library was added.
- Removed continuous floating label animation. Click targets remain stationary, with restrained hover feedback.
- Reworked the bounded desktop hero image drift to interpolate a transform; scroll frames do not read layout. The offset is limited to 24px, and the effect is disabled for small screens and reduced-motion preferences.
- Pausing visual motion freezes its current position instead of resetting the image abruptly.
- Replaced the previous reveal animation with one-time opacity/transform transitions for below-the-fold sections. Above-the-fold content remains visible.
- Added short content and dialog transitions, consistent motion timing and reduced-motion fallbacks.

### Skills and external-service status

- Applied UI/UX Pro Max guidance and 21st's project-aware build and local review workflows.
- Initialized `.21st/design.json` and `.21st/DESIGN.md`, then recorded the brand, font, motion and content constraints.
- Automatic approval review rejected a context-aware 21st search because it could upload project context. Used a generic search from the temporary directory instead; that search required 21st login, so no live catalog components were retrieved and no hosted AI-generation credits were used.
- 21st's local deterministic review completed with 0 errors, 0 warnings and 9 informational suggestions about hardcoded design colors. Those suggestions do not indicate runtime failures; further token consolidation is a maintenance opportunity.

### Verification

- TypeScript and production build passed.
- Browser checks passed at 1440, 1024, 768, 390, 375 and 320 CSS pixels, without horizontal overflow or page JavaScript errors.
- Verified local font loading and absence of remote font requests, normal milestone clicks on desktop and mobile, career routing, motion pause/resume, curriculum downloads from header and footer, contextual enquiries, native dialog close, curriculum search/expansion, project selection, mobile navigation, internal links and reduced motion.
- Verified the presence of all 18 modules, 14 projects and 9 capstone stages.
- Automated WCAG A/AA scans detected 0 violations for desktop, mobile, the enquiry dialog and the page with the optional budget controls expanded. This remains automated verification rather than a full manual accessibility audit.
- Latest previews: `design-review/refined-desktop.png`, `refined-mobile.png`, `refined-footer.png`, `refined-mobile-footer.png` and `refined-qa.json`.
- Final build: CSS 109.61 KB (22.24 KB gzip), JavaScript 285.48 KB (87.16 KB gzip). Locally served font files are separate assets.

The previous App, entry file, hero component and document HTML are preserved under `.redesign-backup/2026-10-26-type-motion/`. No Git commit, push or public deployment was performed. Enquiries still download local drafts; live delivery, confirmed commercial details and approved legal content remain launch work.
