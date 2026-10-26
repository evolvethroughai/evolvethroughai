# Design Requirements

> Updated: 26 October 2026 · Timezone: Asia/Kolkata (IST).
> Business intention: the owner’s master handover. Implementation facts: inspected local source. Approval and launch readiness are separate from implementation.


## Current implementation is a review candidate

The owner recently requested more distinctive fonts, smoother motion/scrolling, useful actions, and stronger hero/footer design. Source now uses **self-hosted Sora headings and Inter body text**, plus a focused refinement stylesheet. The current hero reads **“Build real skills. Shape what’s next.”** These are implemented choices awaiting final owner review; they do not supersede the new handover's explicit approval gate.

Current source palette includes paper `#F9FBFF`, ink `#14263E`, blue `#2459E8`, muted `#53647A` and selected dark sections. These are implementation facts; founder reference colors below remain directional rather than an inflexible final palette. Older Space Grotesk/DM Sans/Instrument Serif notes are historical.

## Required page and experience design

## PART 11 — WEBSITE PAGES

### 11.1 Homepage

The homepage should have a memorable premium hero.

It should immediately communicate:

- What Evolve Through AI represents
- Who it helps
- What visitors can learn or build
- Why practical engineering matters
- How to explore programs

Suggested content structure:

1. Premium hero
2. Career audience pathways
3. Flagship Masterclass introduction
4. Learning program previews
5. DevOps-to-AI progression
6. Practical engineering/project showcases
7. Learning philosophy and differentiators
8. Enquiry/contact CTA
9. Footer

This is a proposed information architecture, not a requirement to use nine identical stacked sections.

The designer should create an engaging visual narrative.

Possible headline direction:

**Your Next Chapter Starts With What You Build.**

Alternative:

**Don't Just Keep Up With AI. Grow With It.**

The final headline can be refined, but it must feel professional, human, and distinctive.

### 11.2 Learning Programs Page

This page should explain the available and planned programs.

It should make program discovery simple.

It should distinguish active offerings from planned offerings.

It should support filtering or clear grouping where useful.

### 11.3 Flagship Masterclass Page

This is a major conversion and educational page.

It should contain:

- Compelling program introduction
- Intended audience
- Learning objectives
- Interactive DevOps lifecycle
- Detailed 18-module curriculum
- Hands-on labs
- 14 project showcases
- Enterprise capstone
- Engineering progression
- FAQs
- Enquiry or syllabus request

The curriculum should remain detailed and readable.

### 11.4 About Page

Explain the company philosophy, mission, practical learning approach, and long-term direction.

Do not invent a founder biography, team members, years of experience, or company history.

### 11.5 Contact Page

Provide a functional enquiry flow.

Contact details must be verified.

The website should not claim a message was sent unless a real backend or email integration successfully processes it.

### 11.6 Future Solutions Page

The website architecture should allow a future business section for:

- AI engineering
- Intelligent automation
- Cloud solutions
- DevOps and platform engineering
- Software engineering
- Technology consulting

Do not market planned services as already operational.

### 11.7 Supporting Pages

- Privacy Policy
- Terms of Use
- Relevant cancellation/refund policies when applicable
- Other essential legal information

Legal content should be reviewed for the actual business and jurisdiction before publication.

---

## PART 12 — BRAND AND VISUAL DESIGN REQUIREMENTS

### 12.1 Desired Visual Identity

I want a distinctive premium technology brand.

The website should feel like a high-quality modern engineering and innovation company.

It should not look like:

- A generic coaching website
- A cheap course marketplace
- A repetitive SaaS template
- A conventional corporate landing page
- A dashboard filled with fake metrics
- A plain static HTML brochure
- A website overloaded with technical jargon
- A collection of unrelated AI-generated sections

### 12.2 Design Personality

The visual identity should communicate:

- Innovation
- Confidence
- Sophistication
- Engineering depth
- Creativity
- Clarity
- Human growth
- Modern technology
- Professional credibility

### 12.3 Color Direction

Previously discussed design tokens:

- Off-white: `#F8FAFC`
- White: `#FFFFFF`
- Midnight: `#0B1220`
- Dark slate: `#111827`
- Electric blue: `#2563EB`
- Cyan: `#06B6D4`
- Violet: `#8B5CF6`

These are reference colors, not an inflexible final palette.

I prefer a balanced light-theme experience with selected cinematic dark sections.

Do not make the entire site dark navy.

Do not make it a completely flat white page either.

Use color with purpose.

### 12.4 Typography

Previously considered:

- Inter
- JetBrains Mono for limited technical details

The final typography should be refined, expressive, legible, and appropriate for a premium brand.

Avoid making the website look like a terminal interface.

### 12.5 Layout

I want:

- Strong visual hierarchy
- Distinctive editorial compositions
- Excellent whitespace
- Purposeful asymmetry where appropriate
- High-quality imagery or visual systems
- Balanced information density
- Cohesive spacing
- Clear calls to action
- Strong mobile layouts
- Consistent design tokens

Avoid excessive cards and boxes.

Not every piece of content needs a border, background, badge, or icon.

### 12.6 Hero Section

The hero is extremely important.

It should have:

- A strong and memorable headline
- Concise supporting text
- Clear next action
- A compelling original visual concept
- Premium composition
- Thoughtful motion
- Excellent responsiveness

Avoid cluttered technical labels, fake statistics, generic orbital graphics, and meaningless floating elements.

### 12.7 Visual Storytelling

Use diagrams and interactions to explain:

- Engineering workflows
- Career progression
- Learning pathways
- DevOps lifecycle
- Cloud and infrastructure architecture
- Practical projects
- Enterprise capstone

These visuals should add understanding, not just decoration.

### 12.8 Motion and Animation

Possible tools:

- Motion / Framer Motion
- GSAP
- ScrollTrigger
- SVG animation
- Carefully selected React Bits components
- Three.js or Spline only where justified

Desired interactions:

- Smooth reveals
- Meaningful hover states
- Scroll-based progression
- Animated engineering diagrams
- Responsive transitions
- Interactive project exploration
- Subtle depth and motion

Do not add heavy 3D effects everywhere.

Do not sacrifice performance or accessibility for animation.

### 12.9 Mobile Experience

The mobile website must be intentionally designed.

Do not simply shrink the desktop layout.

Requirements:

- Clear navigation
- Readable typography
- Comfortable spacing
- Accessible buttons
- Usable curriculum interactions
- Responsive diagrams
- Good performance
- Touch-friendly controls
- Reduced-motion compatibility

### 12.10 Accessibility

Aim for strong accessible design and appropriate WCAG practices.

Include:

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Sufficient contrast
- Reduced-motion preferences
- Accessible form labels
- Descriptive alternatives for meaningful imagery
- Screen-reader-friendly interactive components

Do not claim formal WCAG certification or compliance without verification.

---

## PART 18 — WHY VISUAL QUALITY MATTERS SO MUCH

I spent significant time planning the website, designing screens, and exploring AI tools.

I was disappointed when the implementation looked like a basic static technology landing page.

I want the next development process to avoid this.

A functioning application is not automatically a successful design.

I want visual quality evaluated through actual running previews.

The homepage must be approved before developing large numbers of additional pages.

The correct workflow is:

**Build one feature → Preview it → Evaluate visually and functionally → Refine → Approve → Continue.**

Do not claim the website is premium simply because it uses Tailwind, Framer Motion, GSAP, or modern React components.

The visual result must demonstrate the quality.

---

## Website purpose and design evaluation

The site introduces the company, helps both audiences find a starting point, explains the flagship and projects, teaches the DevOps-to-AI progression, enables genuine enquiries and leaves room for future services/products. A full LMS is outside initial scope. Visual appeal must support these tasks rather than replace clarity or accurate content.

## Reference imagery and diagrams

- Owner-supplied Lovable reference informed the landscape hero, luminous engineering-stack image and infinity artwork. Local files are [engineering journey](../../public/images/engineering-journey.jpg), [engineering stack](../../public/images/engineering-stack.jpg) and [DevOps infinity](../../public/images/devops-infinity.jpg).
- Preserve those source assets. Confirm original provenance/rights for publication; the current [image SOURCES file](../../public/images/SOURCES.md) is incomplete and is not a complete provenance record.
- Available historical HTML/screens and a token Markdown file live under [public/assets/aistudio](../../public/assets/aistudio). They include unsupported marketing/technical claims and are not approved curriculum or business evidence.
- The 298,927-byte extensionless `Paste_October_24__2026_-_3_32PM_f7ce5e47` is a KIMI/GRIDO1 racing-site recreation brief. Treat it as unrelated creative reference data, not Evolve Through AI instructions or syllabus.
- Original named curriculum/lifecycle HTML and the complete structured Stitch handoff have not been identified in the inspected project. Record that gap rather than silently replacing them.

## Current motion and interaction facts

The implementation retains native wheel/touch scrolling and smooth anchors. Desktop hero image drift is bounded/interpolated; it is disabled for small screens/reduced motion. Milestone click targets are stationary. Below-the-fold reveals run once, and the DevOps walkthrough has explicit play/pause. Do not reintroduce continuous drifting controls, heavy blur, abrupt resets, scroll hijacking or needless dependencies as an assumed improvement.

Hero actions navigate to programs/curriculum; header/footer/quick actions can download a Markdown curriculum overview; enquiry buttons open a native dialog. Quick actions hide at the footer and during the dialog. Future form changes must remain honest about submission/delivery status.

## Visual and functional acceptance criteria

- [ ] Founder reviews the running homepage at desktop and mobile widths and explicitly approves its direction.
- [ ] Hero quickly communicates subject, audiences and next actions without confusing decorative labels.
- [ ] Typography is expressive and readable; supporting labels do not become tiny to force a layout.
- [ ] Approved image composition remains legible and uncropped in important areas on mobile.
- [ ] Curriculum/projects/capstone retain technical substance, searchable hierarchy and usable controls.
- [ ] Hover, click, keyboard focus, selection, empty and error states are coherent.
- [ ] Forms have labels, validation and truthful success/failure behavior; dialogs retain focus handling and Escape close.
- [ ] Navigation and fixed actions do not cover focused content; hidden controls are not keyboard traps.
- [ ] Motion is interruptible and meaningfully reduced when requested; no interaction depends on hover or animation completion.
- [ ] Responsive checks include the recorded 320–1440px range and appropriate real-device/manual checks.
- [ ] Observed accessibility/performance results are reported with their scope and limitations; do not claim certification.

## Reference precedence

Latest explicit owner feedback and approved design choices outrank historical generated screens. Preserve the brand and existing functional content while reviewing one bounded feature at a time. See [Project history](PROJECT_HISTORY.md) and [Decisions/open items](DECISIONS_AND_OPEN_ITEMS.md).

## Approved circuit-ribbon identity — 26 October 2026

The owner approved implementation of the reconstructed blue–cyan–violet ribbon E with the white AI circuit trace and node. Canonical assets: `public/brand/`; header uses `logo-light.svg`, footer uses `logo-dark.svg`, and tiny browser icons use the simplified circuit variant. All wordmark lettering is outlined Inter. Palette: midnight #0B1220, blue #2563EB, cyan #06B6D4, violet #8B5CF6, paper #F8FAFC. Preserve clear space and aspect ratio; do not add glow or squeeze descriptor/tagline into mobile headers. Sora/Inter website typography remains unchanged. The old three-bar mark is retired.

Brand approval covers these assets and their integration; it does not imply final approval of unrelated homepage sections or public deployment. Enquiries still download local drafts. Social preview metadata uses a local image path until the production origin is confirmed.

## 26 October 2026 � logo-led website theme

Owner clarified that asset integration alone was insufficient and authorized carrying the ribbon brand into the full website. Implemented midnight dark mode by default, persistent accessible light/dark toggle, theme-aware SVG header logos, Inter headings/body, blue�violet gradient actions, cyan/violet heading accents, atmospheric section surfaces, branded engineering selection states and a gradient footer. Added a decorative ribbon/circuit trace with terminal node in the hero and the approved symbol at the lifecycle center. The circuit draws once and is static under reduced motion; native scrolling and existing content are preserved. No external libraries added, no deployment.

Evidence: design-review/brand-theme/qa.json and dark/light screenshots. Both themes checked at 320, 390, 640, 768, 1024 and 1440px: no horizontal overflow or header overlap. Desktop axe WCAG A/AA scans in each theme: zero reported violations after contrast repairs. Theme survives reload. Mobile navigation, enquiry open/Escape close, curriculum download and normal/reduced circuit motion passed. TypeScript and production build passed. Automated checks do not replace owner visual approval. Earlier Sora typography and light-only implementation notes are historical; the current heading font is Inter.

## 26 October 2026 � homepage premium refinement for review

Owner requested refinement of the existing homepage, preserving the logo/headline/architecture. Replaced floating hero labels and cropped overlay with a connected, keyboard-operable engineering journey and illustrative workflows. Refined header, CTA hierarchy and audience transition; removed decorative hero ribbon and image drift. Both themes checked at six widths; all stage panels stable, CTA/stage/audience targets verified, zero desktop axe violations, no console errors. Homepage approval is pending. No other pages or deployment. Evidence: design-review/homepage-premium/REPORT.md and qa.json. This supersedes prior hero composition notes, not the approved brand identity.

## 26 October 2026 � immersive direction, milestone 01

Owner authorized a premium human-centred direction and bounded first implementation: hero plus first audience-pathway transition. This direction is recorded; final visual approval is still pending. See [section plan](IMMERSIVE_DESIGN_PLAN.md) for reviewed references, licensing limits and later section proposals.

Existing architecture is React 19 / TypeScript / Vite, not Next.js; no migration undertaken. Logo SVGs, approved curriculum and downstream lifecycle/project/curriculum implementations are preserved. Existing Motion (MIT) is used through LazyMotion/lightweight components for short stage-title opacity and one-time pathway border emphasis. No new packages, copied templates or remote imagery. The retained conceptual image is labelled illustrative; publication provenance remains unverified, not represented as licensed learner photography.

Implemented: enlarged human-context illustration, preserved headline, expandable illustrative technical examples, stable connected journey controls, and two editorial pathways with practical steps and links that select the existing audience detail. No interaction connects to real infrastructure.

Verification: TypeScript and production build passed. Dark/light at 320, 390, 640, 768, 1024 and 1440px showed no horizontal overflow. All four stages and example disclosures tested; closed-state stage heights stable. Desktop axe WCAG A/AA scans in both themes reported zero violations after contrast repairs. Keyboard selection, audience links, normal/reduced motion and zero page errors recorded. Evidence: design-review/immersive-milestone-01/qa.json and screenshots. Visual approval, not automation alone, gates the next stage.

STOP GATE: obtain owner visual approval of milestone 01 before implementing the DevOps infinity lifecycle, DevOps-to-AI progression, projects, curriculum or other pages. No deployment authorized or performed.

## 26 October 2026 - hero background and entrance refinement

Implemented src/hero-motion.css, imported after existing styles. Layered light surface with responsive masked dot grid, electric-blue 5% and violet 3% feathered radial ambient glows; compatible dark surface. Static CSS gradients avoid moving blur filters or background JavaScript. Headline, subtext and actions enter using opacity/12px translateY in staggered 0.4s cubic-bezier transitions. Feature-panel and step hover/focus shadows use blue at 10%, stable bounds and 0.4s transitions. Reduced motion disables entrance/hover transitions; keyboard focus immediately reveals action content. Decorative layers ignore pointer events. Existing text, logo, framework, dependencies and destinations unchanged.

Verification: TypeScript and production build passed. Chrome light/dark at 320, 390, 768 and 1440px: no horizontal overflow, content visible after entrance; step selection functional. Computed CSS confirms 0.4s timings, stagger delays and blue/10 shadow. Reduced motion yields animation:none, opacity:1 and transform:none. No JavaScript page errors. Previews/evidence: design-review/hero-motion/. Homepage visual approval remains pending. No deployment.

## 26 October 2026 - Kokonut BackgroundPaths integration

Installed using npx shadcn@latest add https://kokonutui.com/r/background-paths.json --yes. Added components.json matching existing Vite aliases. Registry v2.0.0 source retains MIT author attribution in src/components/kokonutui/background-paths.tsx; adapted its missing cn import to local typed class concatenation without adding packages. Existing registry component is canvas-based, not the older SVG demo.

Added src/components/Hero.tsx and Hero.css. Existing CinematicHero content now sits inside this wrapper, with BackgroundPaths as a decorative absolute layer behind positioned content. children=null suppresses registry demo text. Eighteen slow-flowing paths; cursor interaction disabled; pointer-events:none preserves links and controls. Transparent background and restrained theme-aware colors preserve prior hero styling. Reduced-motion changes remount a static canvas; registry pauses flow off-screen/hidden tabs. No unrelated pages, curriculum or logo changes.

TypeScript and Vite build passed. Chrome at 390/768/1440px confirmed painted nonzero-size canvas, no overflow, transparent background and pointer-events:none; journey buttons remained clickable. Reduced-motion canvas rendered. No page errors. Screenshot: design-review/kokonut-background-paths/desktop.png. No deployment.

## 26 October 2026 - Kokonut TopoBackground replaces hero paths

Installed using the requested shadcn registry command. Hero.tsx now renders TopoBackground as an absolute decorative background behind existing content, with two soft cyan/violet radial glow layers. Previous BackgroundPaths component remains on disk but is no longer imported by the hero; prior dot-grid pseudo-elements are disabled. Topo count is controlled by interval 0.1, drift speed 0.15, fixed seed 26, labels=false, interactive=false. Mobile background height is capped. Reduced-motion changes remount a static map. Registry MIT author attribution preserved; missing cn dependency adapted to typed local class concatenation without new packages. Existing logo, copy, controls and downstream sections unchanged.

TypeScript/build passed. Chrome 390/1440px in light/dark: full-size nonempty canvas, two glows, no overflow, pointer-events:none, prior dot grid disabled; journey clicks work. Reduced-motion canvas renders; no page errors. Evidence and previews: design-review/topo-background/. No deployment.

## 26 October 2026 - hero alignment and media order

Owner approved the topographic hero background, then requested layout-only adjustments. Added hero-balanced scope in Hero.tsx. On desktop the left copy fills the grid cell with flex-column/justify-center, centring the complete tag/headline/description/actions/stats group vertically against the card. On stacked tablet/mobile it returns to natural height. The actual card markup in VisualExperience.tsx now opens with the section title and journey controls, followed by the contained image, then selected-stage detail. Preserved dark surface/border styling, both themes, approved topography, logo and interactions.

TypeScript and build passed. Chrome 390/768/1440px: no horizontal overflow; DOM/rendered order confirms heading then controls then image; stage clicks functional. Desktop column centre difference measured 0px. Previews: design-review/hero-alignment/. Whole-homepage approval remains separate; no deployment.

## 26 October 2026 - reverted last hero alignment/media change

Owner requested rollback of the most recent layout pass. Restored the image/caption to the top of the feature card and removed hero-balanced alignment overrides. Approved topographic background, cyan/violet glows, header and all earlier work preserved. Earlier alignment notes are historical and superseded by this rollback.


## 26 October 2026 - clarified centered landing and separate second section

Owner clarified that the whole landing copy should be horizontally centered across the website, with the entire sunrise image and interactive journey card moved into the second section. Implemented a single-column, viewport-height centered Hero containing eyebrow, preserved headline, description, CTAs, stats and intent line. Approved topographic background and ambient glows remain on this first screen. Moved the complete existing engineering journey into the following #engineering-journey section; audience pathways follow it. Image is now lazy-loaded below the fold. No content or logo redesign.

TypeScript/build passed. Chrome 320/390/768/1440px: horizontal center difference 0px, no page overflow, no image inside first Hero, second section begins after Hero; stage selection works. Desktop/mobile previews: design-review/centered-landing/. No deployment; whole-homepage approval remains pending.

## 26 October 2026 - Screen 2 ready for owner review

Implemented From curiosity to capability with the exact owner-supplied light/dark engineering-workspace images, optimized WebP variants, accessible Learn/Build/Deploy/Evolve interaction, meaningful examples/questions and restrained reduced-motion-safe transitions. Source of Screen 1 and its protected styling/header files remains unchanged. Existing curriculum and next sections preserved. TypeScript/build, eight theme/width layout and scoped axe checks passed; keyboard, theme swap, stage destinations and examples verified. Evidence: design-review/screen-02/REPORT.md and qa.json. Owner visual approval is pending. Stop after Screen 2; no next-section development or deployment.

## 26 October 2026 - morphic navigation, account/search and rotating headline

Owner requested tagline beneath logo, centered premium navigation, a compact left search, account dropdown and five-second headline phrases. Installed and adapted Kokonut MorphicNavbar/ProfileDropdown for React/Vite; used the supplied ActionSearchBar with actual curriculum/project destinations. Theme toggle remains separate from Login. Visitor menu is truthful about missing portal/auth; existing VITE_PORTAL_URL wiring retained. Added pauseable AI skills / DevOps automation / cloud headline alternatives with reduced-motion fallback. Preserved logo, topographic background, Screen 2, content and downstream sections. Checks and usage: Important_Documents/docs/HEADER_COMPONENT_USAGE.md; previews: design-review/header-morphic/. New utilities: clsx, tailwind-merge. No new animation framework, fabricated subscribers, deployment or Git push. Visual approval remains pending.

## 26 October 2026 - logo-spectrum headline and shuffled messaging

Supersedes the earlier four-line rotation: the whole rotating line now uses the shared logo blue/cyan/violet gradient, fitted to the text width. Added 18 aspirational learning/business lines covering AI agents, agentic AI, RAG, LLMs, forward-deployed engineering, cloud, automation and application development. Wording does not assert launched future programs or guaranteed growth. Shared action/heading accents use the same palette family.

Five-second shuffle-bag rotation avoids immediate repeats. Reduced motion retains the original headline; off-screen/hidden tabs suspend rotation. Removed visible Pause words/Resume words labels. A keyboard-focus-revealed pause/resume icon remains for accessibility. Hidden measuring text reserves space for varied phrase lengths; screen readers retain a stable canonical headline.

TypeScript/build passed. Chrome 320/390/768/1440 checked: no overflow, 18 phrases, full-line brand gradient and no visible Pause words label. Live samples confirmed shuffled transitions. Workspace sections and assets unchanged. No deployment.

## 27 October 2026 - header boundary and controls cleanup

Owner requested exactly Search / Login / Enquire in the right header group. Moved SiteSearch from the logo area to the right, removed ThemeToggle and the direct download icon button. Curriculum download remains available through the existing account menu and page actions. Header is relative at z-index 50 with a white 90% backdrop, 12px blur and subtle 1px bottom separator; dark theme retains its solid dark equivalent. Hero.tsx now scopes paint containment/clipping to prevent topographic canvas overlap. Added 16px separation between headline lines (12px at narrow mobile). Existing logo, centered navbar, headline rotation and Screen 2 preserved.

TypeScript/build passed. Chrome light/dark at 320/390/768/1440 confirmed exactly three action items, no theme/download buttons, no horizontal overflow, header/hero boundary, clipped backdrop and headline margins. Search, visitor login menu and enquiry dialog verified. Screenshots and QA: design-review/header-cleanup-2026-10-27/. No deployment.
