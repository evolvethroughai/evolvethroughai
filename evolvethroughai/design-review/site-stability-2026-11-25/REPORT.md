# Website stabilization — 25 November 2026

Scope: refinement only. Existing screens, content, images, video files, branding, card interactions and enquiry integration preserved.

## Root causes and fixes
- Several CSS generations specified different fixed sticky-header offsets (72/105/120/155px), while later rules reset scroll margins. SmoothScroll now measures the actual header through ResizeObserver and publishes --site-header-height. Same-document anchors use one measured offset and layout coordinates, independent of reveal transforms.
- Wheel easing and separate navigation animation could compete with normal input. Wheel and touch now use native scrolling. Lenis remains for explicit anchor navigation and the existing rope transition; no page scroll snapping.
- Shared container, section spacing, heading/copy scale and minimum control sizes are consolidated in site-stability.css. Deliberate hero, media, portal-card and section-specific typography remain owned by existing designs.
- Content containers grow naturally. Horizontal carousel overflow stays inside its track. Decorative video overflow on Screen 5 is intentional: measured content ends 72px inside the section, while decoration extends about 8px.

## Validation
TypeScript and production build passed.
Homepage widths/heights: 1920×1080, 1600×900, 1536×864, 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×800: no document horizontal overflow.
Additional 1242×698 and 1093×614 layouts approximate reduced CSS space at 110%/125% browser zoom; actual browser zoom was not directly exercised.
All five programme routes loaded without horizontal overflow at the smallest audited width; no page errors.
Solutions heading landed at y80 with the scrolled navbar bottom y57. Cross-route Projects target landed around y80.
Native wheel position stayed at y450 after settling (no delayed section jump).
FAQ expansion kept one answer open. Loaded assets returned no HTTP errors in the tested traversal.
Rope regression: video paused/time0 before release, playing about24ms after release; Screen5 heading y85 with navbar bottom y57. Original1920px video retained.

## Limits
Content-heavy sections, expanded answers and mobile layouts intentionally exceed a viewport. No content was hidden to force a fit.
This is browser/layout validation, not a formal accessibility certification or production-load test. Firebase SMS console setup and Google-only enquiry rules remain as previously documented.
No deployment or Git push.

Changed implementation: src/components/SmoothScroll.tsx, src/site-stability.css, src/main.tsx.