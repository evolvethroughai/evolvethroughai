# Homepage premium refinement — 26 October 2026

Status: implemented locally, ready for owner review. Homepage approval remains pending. No deployment, Git commit/push, or work on other pages.

## Changes and rationale

- Preserved the official ribbon-E SVG assets, headline, React/Vite architecture, curriculum and business content.
- Rebalanced the hero into an aligned introduction and an integrated engineering journey panel. The cinematic landscape is now a contained supporting image; engineering examples provide the main visual story.
- Replaced four floating labels and an absolutely positioned detail card with an ordered, connected Learn → Build → Deploy → Evolve interaction. Native buttons expose pressed state and update a polite live region. Explanations and code-like examples are explicitly illustrative; no live deployment or learner outcome is implied.
- Retained one strong program CTA. The secondary curriculum action is a quieter text link to a different section.
- Moved all journey content into normal document flow. Reserved content space keeps panel height stable across the four stages at every tested width.
- Refined header height, official logo display size and navigation spacing.
- Added two concise audience pathways which select the matching working-professional or fresher/early-career experience in the next section.
- Removed decorative hero ribbon and scroll-driven image drift from this composition. Stable hover/focus feedback and native scrolling remain; no autonomous animation or new dependencies.

## Verification

- TypeScript and Vite production build passed.
- Dark/light at 320, 390, 640, 768, 1024 and 1440px: no horizontal overflow; journey panel stays in viewport bounds; detail content is contained; old floating controls absent.
- All four stage states tested at all twelve theme/viewport combinations. Panel height remains unchanged when switching stages.
- Program CTA resolves to #programs; curriculum action resolves to #curriculum. Every stage destination exists, including a new anchor on the existing progression section.
- Both audience links select the matching experience. Mobile menu navigation and enquiry dialog open/Escape close passed. Keyboard Enter selects Build.
- Reduced-motion and normal-motion page states checked. No new continuous hero animation or scroll loop.
- Automated desktop WCAG 2 A/AA + WCAG 2.1 AA axe scans in both themes: zero reported violations. This does not constitute a full accessibility certification.
- No JavaScript page errors. Desktop, mobile and audience-transition screenshots reviewed.

Previews: [dark desktop](dark-1440.png), [light desktop](light-1440.png), [dark mobile](dark-390.png), [complete mobile hero](dark-mobile-hero.png), [audience transition](dark-audience-390.png). Machine-readable checks: [qa.json](qa.json).

Local server: http://localhost:3001. Content editing, enquiry delivery and public launch remain outside this refinement pass.