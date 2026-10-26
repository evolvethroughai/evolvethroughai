# Screen 2 - From curiosity to capability

26 October 2026. Implemented locally, awaiting owner visual approval. No deployment or subsequent-section development.

## Implementation

- Replaced only the prior #engineering-journey section with reusable EngineeringJourney.tsx and scoped EngineeringJourney.css. Screen 1 markup is byte-identical. SHA-256 checks confirm Hero.tsx, Hero.css, hero-motion.css and both Header files remain unchanged. AudiencePathways, later sections, logo and curriculum data are unchanged.
- Used the owner's exact Downloads/evolve_screen2_light.png and evolve_screen2_dark.png assets. Inspected both images. Converted to self-hosted 640px and 991px WebP variants under public/images/screen-02, preserving proportions. Only the active theme's image is mounted; srcset selects resolution. Theme changes are observed locally without altering the global theme system.
- Original inputs were about 1 MB each. Outputs: light 640px 66,988 bytes / 991px 119,128 bytes; dark 640px 61,076 bytes / 991px 101,550 bytes. Lazy loading, async decoding, intrinsic dimensions and an absolute backdrop prevent image-driven layout shifts. No new dependencies.
- Day/night photographic-style workspace backgrounds are owner-supplied illustration, not evidence of actual learners or premises. The supplied caption says this clearly. High-opacity wash behind editorial text plus opaque theme-aware explorer surface preserve contrast.
- Connected Learn -> Build -> Deploy -> Evolve controls reveal meaningful explanations, skills, tools, an engineering question, illustrative examples and a relevant existing destination. Additional applied-AI requirements are explicit. No commands execute and no infrastructure is connected.
- Native buttons expose pressed state, support Enter/Space and Left/Right/Home/End navigation with focus management. A polite live region announces content changes. Examples use native details/summary. No autoplay.
- Reused existing lightweight Motion: once-only 12px scroll arrival and short title opacity transition. Reduced motion removes transform/entrance transitions. No scroll hijacking, image parallax or moving blur effects.

## Verification

- TypeScript and Vite production build passed.
- Both themes at 320, 390, 768 and 1440px: correct theme image loaded, no horizontal overflow, all four stages, disclosures and destination anchors tested.
- axe WCAG 2 A/AA + WCAG 2.1 AA scans of Screen 2 at all eight theme/width combinations: no reported violations. This is automated evidence, not a certification.
- Keyboard Right selects Build; theme toggle swaps the mounted background to the corresponding asset; normal and reduced-motion paths exercised. No JavaScript page errors.
- Original QA found small narrow-screen content-height changes. Reserved mobile description, skills and question space. Final 320px stage heights: [1004.84375, 1004.84375, 1004.84375, 1004.84375]. Initial raw QA/stability files are retained as chronological evidence.
- Before/after Screen 1 source and protected file checks passed; rendered screenshots were visually compared. Full PNG files are not byte-identical (minor raster differences and the changed Screen 2 boundary), so exact pixel identity is not claimed.

## Previews

- [Light desktop](light-1440.png)
- [Dark desktop](dark-1440.png)
- [Light tablet](light-768.png)
- [Dark tablet](dark-768.png)
- [Light mobile](light-390.png)
- [Dark mobile](dark-390.png)
- [QA evidence](qa.json)

Review at http://localhost:3001/#engineering-journey. Stop gate: owner approval required before developing the next section.