# Visor-inspired hero experiment — 3 November 2026

Owner requested a reversible trial after reviewing the supplied VR-product rebuild prompt. Implemented an original brand adaptation, not the template rebuild: centered smaller headline, existing dual CTAs, rounded cinematic frame using the retained concept illustration, and three angled desktop navigation cards (flat/stacked on mobile). Existing topo/aurora, official logo, authenticated conversation flow and all lower sections preserved. No source template, VR assets, invented social proof, analytics or new runtime dependency added.

Scoped implementation: Hero.tsx class marker, VisualExperience.tsx hero composition, new VisorHeroExperiment.tsx/css. Exact prior Hero.tsx and VisualExperience.tsx snapshots are in before/*.bak. To revert, restore those two snapshots to src/components and remove the two new experiment files. No broad Git reset required.

TypeScript/build passed. Both themes at 320, 390, 768 and 1440px: no horizontal overflow, no page errors, no scoped axe violations. Desktop/mobile screenshots use reduced motion for stable comparison. Corrected inherited mobile button flex sizing and headline/header spacing. No deployment. This is a visual experiment pending owner review, not a new approved baseline.
