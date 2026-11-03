# Curated background review — 3 November 2026

Selected owner-supplied images: AI network for the existing hero, connected skyline for Business Solutions, and calm ocean for the footer. Layout, content, logo, authentication and Screen 2 workspace images are unchanged. Existing topographic layers are retained.

Responsive WebP assets use 768px and 1600px widths. No application dependencies added. Originals remain untouched in Downloads. Source filenames: pexels-tara-winstead-8386440.jpg; pexels-sanaan-3075993.jpg; pexels-matthardy-1533720.jpg. Supplied by owner; publication licensing was not independently verified.

TypeScript and production build passed with worker concurrency limited after the initial machine memory failure. Browser checks at 390px and 1440px in both themes confirmed correct responsive hero image selection and no horizontal overflow. Screenshots cover hero in both widths/themes, and desktop solutions/footer in both themes. See qa.json. Visual approval remains pending. No deployment or push.

Robot follow-up: added owner-supplied upright robot to the homepage pathway catalogue and exploring robot to dedicated pathway introductions. Optimized 768/1600px WebP, theme overlays and protected list readability. TypeScript/build passed; both surfaces checked at 390/1440px in both themes with no horizontal overflow. See robot-qa.json and robot screenshots. No new dependencies.

Verification correction: catalogue browser checks completed in both themes and widths. Dedicated pathway browser verification could not complete because the local query route did not render its expected introduction; that route is not claimed as verified. TypeScript and production build passed.

Contour correction: restored hero contour stacking above the photo and removed faint-opacity override; added a decorative SVG fallback. Shared section contours now drift slowly using CSS transforms, stopped for reduced motion. Added quiet image washes to learning selection, enquiry, FAQ and pathway outlines. TypeScript/build passed; homepage checked at 390/1440 in both themes without overflow; reduced-motion computed animation is none. Evidence: topo-qa.json and topo screenshots.

Contour refinement: removed duplicate hero SVG fallback and reduced hero contour density/opacity. Replaced translated wave textures with the existing Kokonut contour renderer on section surfaces, using sparse contour intervals and slow field evolution. Intersection visibility pauses offscreen rendering; reduced motion passes speed zero. TypeScript and production build passed (memory-limited retry). Browser confirmed six section canvases, no old wave/fallback overlays, no horizontal overflow and no page errors. Evidence: contour-clean-qa.json and screenshots.

Unified contour plane: replaced all section/hero/Screen 2 renderers with one fixed decorative viewport canvas in Layout. Uniform seed 26, interval .17 and speed .12; reduced motion uses zero speed. No separate patterns or restarts at section boundaries. Photographic pseudo-layers fade at section edges. TypeScript/build passed. Browser checks in both themes at 390/1440 recorded one shared canvas, no previous contour layers, no horizontal overflow and no page errors. See continuous-topo-qa.json.

Light-mode boundary refinement: removed outer section top/bottom borders and shadows, unified section base colours, and moved remaining photo washes into softly masked decorative layers. Card and control borders retained for clarity. Production build and TypeScript passed. Computed browser checks confirmed zero outer section borders; light-mode-hero.png, light-mode-sections.png and light-mode-full.png capture the updated design.

Photography softness adjustment: reduced decorative photo-layer opacity to .72 (.75 for workspace), preserving content opacity and the shared topo contrast. CSS-only visual adjustment; no dependencies or layout changes.

Screenshot-specific seam fix: the remaining straight edge was the hero atmosphere clipping at its container bottom. Masked the complete hero photo/glow plane to zero over the last 200px; all subsequent photo layers fade over 140px at both boundaries. Shared topo remains untouched and continuous. Production build passed; captured hero-screen2-seam-light.png and confirmed the applied gradient mask in the browser.

Background visibility refinement: increased decorative photo layers from .72 to .92 (.90 workspace) and reduced opaque wash strength across hero, robots and business skyline. Edge fades and continuous topo retained; text/control opacity unchanged. Production build passed.

All-page seam audit: removed remaining decorative horizontal rules from learning detail, pathway catalogue rows, outline subsections, business grid/closing area and footer structure; removed the catalogue backdrop block. Unified all outer section base fills. Production build passed. Browser audit covered home plus all five pathway routes in both themes: 12 checks, zero outer borders, zero horizontal overflow and zero page errors. See all-pages-seams-qa.json and seamless-*-light.png captures.

Root-cause correction for catalogue-to-solutions seam: brand-theme.css applied a linear-gradient background-image on programs-section. Previous transparent background-color overrides did not clear it. Removed inherited outer background images across all content section/pathway shells, retaining photos only on masked decorative layers. Build passed. Captured all six homepage transitions in light and dark (12 screenshots); computed outer background-image is none throughout. Visually inspected edge-fixed-light-solutions.png against the supplied screenshot: the sharp straight colour edge is gone. Evidence: gradient-seam-qa.json and edge-fixed-*.png.

Full-width background correction: investment, FAQ and dedicated pathway containers retain their content width while decorative pseudo-elements extend to 100vw; removed clipping at the content container edges. Build passed; browser verified photo width equals viewport at 390/1440px with no horizontal overflow. Evidence: fullbleed-enquire screenshots.
