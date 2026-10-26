# Homepage Screen Review

Updated: 26 October 2026 (IST).

## Current checkpoint

**Screen 01 — Header and hero: implemented and checked; awaiting owner review.** This is not approval of the entire homepage. The latest owner instruction authorizes a page-by-page, screen-by-screen workflow; the earlier documentation-only task is complete.

## Scope of this pass

Preserved the current headline, Sora/Inter typography, reference imagery, program content, footer and existing calls to action. Corrected three observed first-screen issues:

1. Mobile navigation did not close with Escape. It now closes with Escape and restores focus to its trigger, closes on outside pointer input, resets when resizing to desktop, and closes before opening the enquiry dialog. Link selection continues to close it.
2. At 768px width the Learn marker intersected the explanation panel. Tablet positions now separate the controls and panel.
3. At 1366×768 the hero remained 790px tall beneath an 86px header, clipping the lower panel. Short desktop layouts now use appropriate spacing and fit the hero into the viewport; at that tested size its bottom is 768px.

Code touched: src/App.tsx and src/refinement.css. Prior versions are preserved in .redesign-backup/2026-10-26-screen-one/. No publication, Git push, new integration or dependency installation was performed.

## Verification

- TypeScript and production build passed.
- Checked 1440×900, 1366×768, 1024×768, 768×1024, 390×844 and 320×740.
- Normal clicks succeeded for all four hero milestones at every checked size, without panel overlap.
- Verified Escape/focus return, outside click, resize reset, enquiry opening and link close for the mobile menu.
- Verified the header curriculum download and preservation of the 18-module / 14-project counts.
- Desktop and mobile automated WCAG A/AA scans detected no violations in checked states; no browser JavaScript errors or horizontal overflow were observed. Automated results do not establish formal compliance.
- 21st local review reported no errors or warnings; the existing informational hardcoded-color suggestion is outside this bounded pass.

## Review images

- [Desktop](../../design-review/screen-01-desktop.png)
- [Laptop](../../design-review/screen-01-laptop.png)
- [Tablet](../../design-review/screen-01-tablet.png)
- [Mobile](../../design-review/screen-01-mobile.png)
- [QA results](../../design-review/screen-01-qa.json)

## Review queue

| Screen | Subject | State |
| --- | --- | --- |
| 01 | Header and hero, desktop then mobile | Ready for owner review; not yet approved |
| 02 | Audience pathways | Existing; next after Screen 01 review |
| 03 | Flagship and program discovery | Existing; not reviewed in this pass |
| 04 | DevOps lifecycle | Existing; not reviewed in this pass |
| 05 | Curriculum exploration | Existing; not reviewed in this pass |
| 06 | Projects and capstone | Existing; not reviewed in this pass |
| 07 | Career progression | Existing; not reviewed in this pass |
| 08 | About, investment/enquiry and FAQs | Existing; not reviewed in this pass |
| 09 | Footer and overall page continuity | Existing; not reviewed in this pass |

After the homepage sections are reviewed and approved, determine the order for separate program/masterclass/about/contact pages using WEBSITE_ROADMAP.md. Do not assume those routes already exist.

Record owner feedback and approval here before marking a screen approved or advancing. No additional design changes are presumed from the test results alone.

## 26 October 2026 � homepage premium refinement for review

Owner requested refinement of the existing homepage, preserving the logo/headline/architecture. Replaced floating hero labels and cropped overlay with a connected, keyboard-operable engineering journey and illustrative workflows. Refined header, CTA hierarchy and audience transition; removed decorative hero ribbon and image drift. Both themes checked at six widths; all stage panels stable, CTA/stage/audience targets verified, zero desktop axe violations, no console errors. Homepage approval is pending. No other pages or deployment. Evidence: design-review/homepage-premium/REPORT.md and qa.json. This supersedes prior hero composition notes, not the approved brand identity.

## 26 October 2026 - Screen 2 ready for owner review

Implemented From curiosity to capability with the exact owner-supplied light/dark engineering-workspace images, optimized WebP variants, accessible Learn/Build/Deploy/Evolve interaction, meaningful examples/questions and restrained reduced-motion-safe transitions. Source of Screen 1 and its protected styling/header files remains unchanged. Existing curriculum and next sections preserved. TypeScript/build, eight theme/width layout and scoped axe checks passed; keyboard, theme swap, stage destinations and examples verified. Evidence: design-review/screen-02/REPORT.md and qa.json. Owner visual approval is pending. Stop after Screen 2; no next-section development or deployment.
