
## 20 November 2026 — bounded card and navigation refinement

Owner explicitly preserved the existing headline wording, typography, gradient, layout and animation. Hero.tsx and VisualExperience.tsx remain byte-identical to their pre-change versions. Existing robot media, card images and branding retained.

Hero cards now use a restrained 4px desktop hover lift, 1.045 image zoom and cyan/violet border glow, plus visible keyboard focus and native single-tap links. Reduced motion disables transforms/transitions. Below-hero content uses one-time IntersectionObserver fade/rise reveals; reduced motion shows content immediately. Existing headline behavior is excluded from this reveal system.

Header order: Programs / Projects / Solutions / About / Enquire. Search, Login and Experience removed from the top navigation only. Search dialog and Ctrl/Cmd+K remain available; account provider, enquiry login flow and Experience content remain. Mobile controls fit one row with a collapsible menu.

Verified 320/390/768/1440px: no overflow or JavaScript errors; desktop lift/zoom/glow, keyboard focus/Enter, mobile link activation/menu/Escape, retained search shortcut, one-time reveal state and reduced motion. TypeScript and production build passed. Evidence: design-review/hero-card-navigation-2026-11-20/. No new dependencies or deployment.