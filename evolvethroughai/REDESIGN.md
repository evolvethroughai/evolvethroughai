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
