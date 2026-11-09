# Current website handover

Updated: 9 November 2026 (Asia/Kolkata). Inspected current local source and this session's changes. This is the current-state summary; older dated entries remain historical. No public deployment or Git push was performed.

## Current implementation — 9 November 2026

This section supersedes earlier implementation snapshots and dated trials below. Final homepage approval and publication authorization remain open. No deployment, Git push or external message was performed.

### Current screen order and assets

| Screen | Content and layout | Active media |
| --- | --- | --- |
| 1 | Graphite hero; robot left, rotating headline and two image-backed pathway links right | robot-hero-1600.mp4 / robot-hero-960.mp4 and poster; learning-path-card.webp / digital-solutions-card.webp |
| 2 | Academy learning content left; second robot right; charcoal background and soft media edges | learning-screen-1280.mp4 and learning-screen-poster.webp |
| 3 | Business Solutions copy right; puzzle/teamwork video left | business-puzzle-960.mp4 and business-puzzle-poster.webp |
| 4 | Working professional / fresher learning-start selector and detail panel; charcoal reading surface | screen4-learning.mp4 and screen4-learning.webp |
| 5 | Five named pathway links on soft pearl; colour-pouring video triggered by a pull cord | thread-colour-pour.mp4 and thread-colour-pour.webp |

Media paths above are under public/videos except the two card images under public/images. All footage is owner-supplied and optimized locally; original downloads are unchanged. Installed application dependencies were not expanded for these changes. Temporary encoding tools are not application dependencies.

### Hero, navigation and spacing

- Preserve official logo, graphite hero, current header glass pills and Search / Firebase Login or Account / Enquire controls. Enquire remains the primary action.
- Hero headline remains Build real skills. with the existing rotating secondary phrases. The fixed Engineer the future. trial was reverted.
- Supporting caption remains the two original lines beginning Master modern Cloud, DevOps, and Enterprise AI architecture. It is lifted 18px on desktop / 10px on mobile. Eyebrow/headline lift: 16px desktop / 8px mobile.
- Hero card copy: LEARN • BUILD • GROW / Explore Learning Paths / Practical skills. Real engineering.; BUILD • AUTOMATE • SCALE / Explore Digital Solutions / Websites, apps & AI-powered solutions.
- Owner card originals retained: Glowing Path to Achievement-2.png and Collaborative Digital Business Growth-1.png. The cards use optimized WebP derivatives, warm/cool readable overlays and image-zoom/lift hover feedback.
- Homepage robot desktop video framing remains translateX(0) scale(.74). Screen 2 robot is slightly reduced (133% video width within its stage, left offset -16%); homepage robot was not changed by that adjustment.
- Screen 2 robot/content was lifted 24px on desktop. Subsequent spacing normalization sets the learning layout top to zero; video retains its existing lift. CSS cascade, not older numbers, controls final appearance.
- Removed unequal fixed-height blank areas between Screens 1–3. Last desktop browser measurement at 1440px showed both visible content gaps at 128px. This is a measured viewport result, not a guarantee at all responsive sizes.
- Hero bottom fade now goes to charcoal, not transparent paper. Actual video edges are feathered. Shared topo canvas remains continuous. Do not add an opaque hero surface that covers the separate video plane.

### Screen 3 video treatment

The earlier digital-marketing team clip (6558232) was replaced with puzzle/team clip 6193976. It plays silently on the left, with broad top/bottom/side masks and a gradual graphite fade before the copy. Current video scale is .88. The visible video stage is shorter (desktop top 60px / bottom 36px; mobile height 220px). Business introduction has modest additional top spacing; later shared spacing normalization overrides section padding to 64px desktop / 40px mobile. The artwork file is still retained for the homepage Solutions card.

### Screen 4 and Screen 5 playback

Screen 4 uses owner video 12676758 (white dotted flowing geometry). The earlier cyan/violet clip 7077358 was moved to Screen 5, then superseded there by owner clip 6721009. These older files remain on disk but are not the current Screen 5 source.

SectionVideo is exported from EngineeringJourney.tsx and reused by the learning, business, learning-selector and pathway sections. Automatic media starts on visibility, pauses offscreen/hidden, and uses a poster under reduced-motion or Save-Data. Screen 5 uses manualPlay instead: video is hidden before user activation, leaving pearl visible; explicit activation can play even when automatic playback is suppressed. All current videos loop silently with inline playback. There is no audio playback.

The Screen 5 trigger is a small central pull cord on desktop (right aligned on mobile): braided thread, pearl/violet mount and ring, subtle caption, hover polish and spring-back. Drag downward at least 28px to trigger; travel is capped at 85px. Tap/click or keyboard button activation also starts playback. Subsequent activation restarts at time zero. Captions change from Pull for colour to Pull to replay. The control is not aria-hidden; the decorative video remains hidden from accessibility APIs.

A 2.8-second top-down reveal remains on activation/replay, disabled under reduced motion. This is a presentation effect, not newly generated pouring footage. Do not claim it changes the source clip's underlying content. The new supplied clip replaced the previous mid-pour opening. Full pull/replay behavior still needs browser validation on touch and keyboard after the premium styling change.

### Reverted experiments and preserved boundaries

- White robot compositing, spotlights, fixed-headline trial and multiple intermediary white/purple transition-glow trials were rejected/reverted. No spotlight or added middle-shade glow is active.
- A combined-height shared charcoal backing broke the layout and was reverted. Layout.tsx retains its hero-only background-height measurement; later targeted video masks address seams instead.
- Some superseded CSS rules and unused media remain as historical worktree artifacts. Do not assume every asset or earlier selector is active. Review the final rules in hero-graphite.css and the imported component styles before changing layout.
- Preserve authenticated Firebase enquiries, current business copy, 18 modules / 14 projects / one capstone and the five named pathway views. Named future pathways are not proof of commercial availability. No fake reviews, outcome metrics or price claims were added.

### Verification and next review

Recent TypeScript checks and production builds passed, including the premium pull-cord change. Earlier browser checks confirmed the first robot/video structure, Screen 2 playing at 390/768/1440px, the corrected Screen 1–2 charcoal seam, and equal desktop content gaps. Screen 4 playback was confirmed before the clips were reassigned. No new all-route accessibility audit, formal compliance test or complete five-screen mobile/desktop review has been performed after the latest video and cord changes. Build success alone does not prove visual acceptance or gesture correctness.

Local development: npm run dev; http://localhost:3000/. A local HTTP 200 was verified when the server was started. Do not treat that as public deployment. Next review: current five-screen flow in both themes and mobile/tablet/desktop, full robot movement bounds, all video edge fades, manual pull/tap/keyboard replay, offscreen/reduced-motion behavior and text contrast. Screen 4 media is about 10.8 MB and Screen 5 about 5.6 MB; further encoding/performance review remains appropriate before release.

## Historical snapshots through 8 November 2026

The entries below are retained as history; use the current implementation above for handover.

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
