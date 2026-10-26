
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
