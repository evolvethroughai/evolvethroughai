# Current website handover

Updated: 8 November 2026 (Asia/Kolkata). Inspected current local source and this session's changes. This is the current-state summary; older dated entries remain historical. No public deployment or Git push was performed.

## Application and business structure

- Existing React 19 / TypeScript / Vite application retained; no Next.js migration. Local development command: npm run dev, port 3000. npm run lint runs TypeScript; npm run build builds production assets.
- Two audiences: practical engineering education and digital/business solutions. Preserve the official logo, Learn. Build. Evolve. tagline and 18-module / 14-project / one-capstone flagship backbone.
- Homepage has a hero, Academy/Business Solutions overview, learner starting-point selection, five named learning pathways, Business Solutions, enquiry/investment, FAQ and footer. Detailed flagship content belongs on its pathway view, rather than the homepage's name-only pathway list.
- Five query-based pathway views exist through PathwayPages/usePathwayNavigation. They do not imply five commercially available courses. Future AI/agentic/forward-deployed engineering scope and original detailed curriculum reconciliation remain open.
- Repetitive brand/about blocks, fake review cards, floating bottom actions and curriculum download options were removed at the owner's request. Do not reintroduce them from old notes.

## Current header

Header.tsx uses native links for Programs, Experience, Projects, Solutions and About. The current public header does not render MorphicNavbar or the demo ProfileDropdown. Previously installed Kokonut source files are historical/reusable assets, not evidence of current rendering.

Navigation now uses compact glass pills, cyan hover borders and gradient text illumination. Search, Firebase Login/Account and Enquire form the action group. Search remains functional; no theme-toggle or download button is rendered in this group. The fixed header detects scrollY > 40 and uses its existing scroll shield; preserve readable navigation and mobile menu/keyboard behavior.

## Current hero and visual direction

- Graphite/charcoal first screen in both themes, approved official blue/cyan/violet logo accents and soft-white typography. Owner described the graphite direction as wonderful; this does not establish full-site approval.
- Optimized owner-supplied robot video on the left; landing copy on the right. Silent continuous loop, no visible pause button. Playback pauses offscreen/in a hidden tab; reduced-motion or Save-Data uses a poster. Desktop/mobile video variants remain local.
- Latest desktop video framing: translateX(0) scale(.74), origin left center. Earlier .84/-4% and .79/-3% values are superseded. This gives the moving hand more room. Sampled frames across the loop were inspected; full browser playback at every viewport was not reverified after the last framing change.
- Desktop hero text moved 28px upward; image-card gap is 24px. Mobile retains its responsive layout.
- The white-background robot experiment was rejected and reverted. All subsequent champagne/sunshine/diagonal spotlight experiments were also rejected and removed. There is NO active spotlight. Review screenshots of those trials are historical only.
- Preserve the continuous shared topographic plane and softly masked section imagery. Prior fixes removed outer section borders and gradient/photo hard edges; card/control borders remain intentional. No fresh all-route seam audit was run during today's card edits.

## Hero image cards (latest)

Plain CTA buttons were replaced with two image-backed link cards in HeroIntro. The destinations remain #path and #solutions. HeroPathCards.css owns the card treatment.

| Card | Copy | Active optimized asset | Owner original |
| --- | --- | --- | --- |
| Learning | LEARN & BUILD / Explore Learning Paths / Practical skills. Real engineering. | public/images/learning-path-card.webp | public/images/Glowing Path to Achievement-2.png |
| Solutions | AUTOMATE & EVOLVE / Explore Digital Solutions / Connected systems. Smarter workflows. | public/images/digital-solutions-card.webp | public/images/Collaborative Digital Business Growth-1.png |

Both originals were inspected and retained. Optimized local 1000px WebP copies were generated; no app dependency was added. Warm amber learning overlay and cool daylight/cyan solutions overlay preserve readable white copy. On pointer hover: card lifts 4px/scales 1.02, image scales 1.14, arrow responds and shadow/glow deepens. Cards stack on mobile, links retain focus indicators and reduced-motion CSS disables transforms/transitions. Earlier workspace/analytics photo choices and old button-pop styling are superseded, though unused styles/assets may remain on disk.

## Login and conversations

Firebase Google sign-in and Firestore Lite conversation creation exist. Owner confirmed local login and saving worked. Owner created project evolve-through-ai, authorized localhost/127.0.0.1, and a default Firestore database in Mumbai, production mode, no scheduled backups selected. These console facts are owner-reported, not independently audited today.

The local firestore.rules restrict creation to verified Google-authenticated users with matching uid/email, exact schema, bounded fields, consent, new status and server timestamp; client reads/updates/deletes are denied. Signed-in enquiries are stored in Firestore; this is not an email notification or response workflow. No new rules were deployed in this documentation pass. Never copy environment values or credentials into notes.

## Verification and remaining work

Production builds passed after recent header/card/framing changes, including the final supplied-image integration. Earlier browser checks verified CTA hover computed styles and graphite playback at six theme/width combinations. Those checks predate the final image cards: do not claim new card screenshots, all-route accessibility scans or complete mobile QA were performed today. Source inspection confirms image paths and reduced-motion/mobile rules. This documentation-only pass checks links and accuracy, without rebuilding unnecessarily.

Existing evidence: design-review/graphite-hero/, design-review/robot-video-hero/, and earlier route/theme reports. design-review/graphite-spotlight/ records a REMOVED trial. Source of truth for final appearance is the running current code.

Next: review the current hero/cards on desktop and mobile in both themes; verify complete robot loop framing, card destinations, keyboard interaction, contrasts and seamless transitions. Final homepage approval, detailed original curriculum, actual offer availability/fees/schedules, privacy/legal/retention/spam handling, enquiry follow-up ownership, domain/hosting and explicit publication approval remain open.

## 8 November - final targeted hero copy pass

Secondary headline is now fixed to Engineer the future., retaining the motion entrance; previous five-second phrase rotation is disabled for this homepage instance. Supporting paragraph: Master Cloud, DevOps, and AI through practical learning, real-world projects, and production-ready engineering. Learning tag: LEARN • BUILD • GROW. Solutions tag: BUILD • AUTOMATE • SCALE; subtitle: Websites, apps & AI-powered solutions. Images and destinations preserved. Supporting contrast, bottom image gradients and spacing refined; mobile cards equal width. Firebase Login retained because Google authentication exists. TypeScript/build passed; both themes at 390/768/1440px checked with no overflow or page errors, images loaded, hover transforms and reduced-motion fallback verified. Screenshots and QA: design-review/hero-copy-refinement/. No unrelated sections changed or deployment performed.


8 November correction: Owner requested reverting the final targeted hero copy pass above. Restored prior rotating headline, two-line supporting caption, LEARN & BUILD / AUTOMATE & EVOLVE tags, Connected systems. Smarter workflows. subtitle, and previous contrast/spacing/card width styles. Supplied card images and earlier design remain. The final targeted copy entry and its screenshots describe a reverted trial.

8 November follow-up: Owner retained the previous rotating headline and supporting caption, requested tighter gaps and only card-copy changes. Caption top margin and card top margin now 12px; caption line-height 1.65. Learning tag LEARN • BUILD • GROW; solutions tag BUILD • AUTOMATE • SCALE, subtitle Websites, apps & AI-powered solutions. Images, titles, robot and navigation preserved.

8 November screen split: EngineeringJourney now renders consecutive learning-only Screen 2 (#engineering-journey) and Business Solutions introduction Screen 3 (#business-introduction). Academy content is left aligned over the supplied 8084756 video, optimized as silent local footage with poster, visibility-aware playback and reduced-motion/Save-Data fallback. Business introduction retains its text/CTA and supplied digital-solutions image. Homepage hero unchanged; downstream learning/pathways and detailed solutions preserved. TypeScript/build passed; 390/768/1440 browser checks confirmed loaded playing video and no overflow.

8 November Screen 2 framing refinement: learning screen now uses full graphite charcoal to continue the homepage, smaller contained video on the left and Academy copy on the right. Mobile places contained video above copy. Removed the pale hero-to-learning transition with a shared charcoal base and soft media edges. Production build passed; browser verification attempted separately.

8 November Screen 2 visual scale: enlarged the contained video within the right-hand stage (145% media width, centered offset) and increased desktop section height to 760px, retaining left learning copy and homepage hero. Mobile layout unchanged. Production build passed.

8 November continuity repair: Layout now measures the combined hero/learning opening height for one charcoal backing beneath both video masks. This prevents light-mode paper showing as a pale seam while preserving the original hero video layer and continuous topo. Removed the separate overlapping learning pseudo backing. TypeScript passed; build verification recorded in session.

8 November rollback: Owner reported the shared charcoal backing collapsed the layout. Removed that backing and combined-height measurement, restoring the preceding Layout and screen styling. Continuity repair remains unresolved; do not treat the previous entry as accepted.
