# Header components and headline motion

26 October 2026. Integrated locally; no deployment. Current usages are complete and live in src/components/Header.tsx and VisualExperience.tsx.

## Where to change things

- Header.tsx: brand/search area on the left, MorphicNavbar centered, theme/account/download/enquiry on the right. Mobile menu wraps into its own row. Existing destinations and enquiry/download handlers are preserved.
- BrandLogo.tsx: pass tagline to display Learn. Build. Evolve. beneath the approved outlined logo. Default false preserves other lockups. Pulse/circuit geometry unchanged.
- kokonutui/morphic-navbar.tsx: installed with shadcn from the requested registry. items is a Record keyed by real href, with {name:string} values. Header builds this from its actual navigation array. compact=false keeps all desktop links visible. Next.js Link/pathname imports were adapted to native anchors and hash/popstate observation for this Vite project.
- kokonutui/profile-dropdown.tsx: accounts=[] renders the visitor account menu used today. onLogin invokes the existing portal information dialog or the verified configured portal URL. items supplies real learning links and the curriculum download. No demo identity, sample balance, plan, account switch or fake sign-out is rendered.
- kokonutui/profile-dropdown-auth.tsx: original account-menu implementation, lazy-loaded only when real accounts are provided. Do not pass invented identities to demonstrate authentication. A real auth provider and verified account actions remain unconfigured.
- SiteSearch.tsx: opens the owner's supplied Kokonut command palette with actual programs, modules and projects. Click Search or use Ctrl/Command+K. Selection navigates to the matching section and synchronizes the navbar hash. The palette supports keyboard navigation and nested results. The full search module loads on first use.
- RotatingHeadline.tsx: keeps Build real skills. and rotates Shape what’s next. / Shape your AI skills. / Shape DevOps automation. / Shape your cloud future. every five seconds. Pause/resume control is visible. Reduced motion retains the original phrase; off-screen and hidden-tab states suspend the interval. Hidden measuring strings reserve layout space; screen readers retain a stable canonical headline.
- HeaderRefinement.css: theme-aware surfaces, centered navbar, dropdown/search styling and responsive constraints. Theme control remains outside Login so anonymous visitors can choose appearance.

## Portal configuration

The application passes import.meta.env.VITE_PORTAL_URL to Header. Configure a real HTTPS portal URL or an existing root-relative route; unsafe URL schemes are ignored. No portal URL or authentication backend has been invented. Without it the account menu opens the honest unavailable-status dialog.

## Installation / attribution

Requested morphic-navbar and profile-dropdown were installed via npx shadcn@latest add using their kokonutui.com registry URLs. MIT author attribution remains in the registry source. The supplied ActionSearchBar source retains its Kokonut MIT header. clsx and tailwind-merge provide the class utility expected by the registry; no additional animation framework installed. Search and authenticated-account modules are split from the initial bundle. No remote avatars or fake account data are used by the live header.

## Recorded checks

TypeScript/build passed. Light/dark layouts checked at 320, 390, 768, 1024 and 1440px. An initial 320px overflow was repaired; final layout checks show no overflow. Centered desktop navbar measured within 0.01px of screen center before the final compact Search label. Account menu, unavailable-portal dialog and Escape work. Search Docker returns real module/project results; result selection reaches #curriculum and closes search. Ctrl+K, mobile links and menu dismissal work. Five-second rotation, pause and reduced-motion static headline checked. Full-page desktop axe scan and open account/search scans in both themes report zero violations in tested states; not a formal certification.

Evidence: ../../design-review/header-morphic/. Initial qa.json is chronological; final-layout.json records the overflow correction. Screen 2 components/assets were not modified. Homepage visual approval remains open; no downstream section work or deployment.
## 26 October 2026 - logo-spectrum headline and shuffled messaging

Supersedes the earlier four-line rotation: the whole rotating line now uses the shared logo blue/cyan/violet gradient, fitted to the text width. Added 18 aspirational learning/business lines covering AI agents, agentic AI, RAG, LLMs, forward-deployed engineering, cloud, automation and application development. Wording does not assert launched future programs or guaranteed growth. Shared action/heading accents use the same palette family.

Five-second shuffle-bag rotation avoids immediate repeats. Reduced motion retains the original headline; off-screen/hidden tabs suspend rotation. Removed visible Pause words/Resume words labels. A keyboard-focus-revealed pause/resume icon remains for accessibility. Hidden measuring text reserves space for varied phrase lengths; screen readers retain a stable canonical headline.

TypeScript/build passed. Chrome 320/390/768/1440 checked: no overflow, 18 phrases, full-line brand gradient and no visible Pause words label. Live samples confirmed shuffled transitions. Workspace sections and assets unchanged. No deployment.

## 27 October 2026 - header boundary and controls cleanup

Owner requested exactly Search / Login / Enquire in the right header group. Moved SiteSearch from the logo area to the right, removed ThemeToggle and the direct download icon button. Curriculum download remains available through the existing account menu and page actions. Header is relative at z-index 50 with a white 90% backdrop, 12px blur and subtle 1px bottom separator; dark theme retains its solid dark equivalent. Hero.tsx now scopes paint containment/clipping to prevent topographic canvas overlap. Added 16px separation between headline lines (12px at narrow mobile). Existing logo, centered navbar, headline rotation and Screen 2 preserved.

TypeScript/build passed. Chrome light/dark at 320/390/768/1440 confirmed exactly three action items, no theme/download buttons, no horizontal overflow, header/hero boundary, clipped backdrop and headline margins. Search, visitor login menu and enquiry dialog verified. Screenshots and QA: design-review/header-cleanup-2026-10-27/. No deployment.

## 27 October 2026 - seamless hero/header and pathway navigation

Owner superseded the separated header direction. Header.tsx now uses absolute transparent positioning at the top of the hero, z-index 50, 2px backdrop blur, no bottom border/fill/shadow and a cyan 5% atmospheric overlay. Hero.tsx uses a seamless layout scope: background begins at the top of the page behind navigation, while responsive top padding keeps copy clear of the controls. Canvas remains clipped to the hero; it no longer needs to extend outside it.

Navigation pills: Roadmap -> #progression; Curriculum -> #curriculum; System Architecture -> #experience (existing engineering-system lifecycle); Live Labs -> #projects (existing learning project showcase, not connected remote infrastructure). Pill surfaces are restrained translucent theme-aware glass. Right actions remain exactly Search / Login / Enquire. Mobile navigation supports horizontal overflow within its own panel rather than page overflow. TypeScript/build and browser theme/layout/destination checks recorded in design-review/seamless-header-2026-10-27/. No deployment or additional sections.

## 27 October 2026 - fixed dual-business navigation and atmospheric CTAs

Owner requested fixed navigation after the transparent-header pass. Header now stays fixed at top 0/z-index 50, with a 70% light/dark backdrop and 12px blur. Compact pill labels are Learning Paths (#programs), Live Labs (#projects), Business Solutions (#about) and System Architecture (#experience). Right actions remain exactly Search / Login / Enquire. Actual project/company destinations preserve current planned-offering boundaries.

Hero.tsx adds an atmospheric scope and explicit learning CTA class. Primary button uses a blue/indigo/violet gradient with slow CSS color-position motion, 1.05 hover / .95 active scale and a restrained glow; secondary uses a translucent 2px outline with matching hover/press feedback. Existing cyan/violet radial background glows are anchored behind headline/actions in both themes. Reduced motion disables animation, transforms and transitions. No new dependencies, sections or deployment.

TypeScript/build passed. Chrome 320/390/768/1440: no overflow, fixed positioning, exactly three actions. Header stays at viewport top after scrolling 1500px. Normal-motion CTA gradient animation verified. Preview: design-review/fixed-header-2026-10-27/desktop.png.
