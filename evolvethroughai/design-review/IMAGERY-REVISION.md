
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
