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
