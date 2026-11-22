# Website review — 17 November 2026

Scope: existing homepage and five pathway routes, preserving approved imagery/content and the reverted robot branding. Prior browser pass in this session covered 48 layout states (320, 390, 768, 1440 pixels; light/dark), with zero horizontal overflow, broken images or page errors. Twelve desktop axe WCAG A/AA scans returned no violations.

Interaction findings and repairs:
- Search Escape was intercepted by the nested palette, leaving the enclosing dialog open. Capture-phase handling now closes the dialog.
- Open dialogs allowed background scrolling. The document now locks while a dialog is open; Lenis stops/resumes with dialog toggle events.
- Navigation target spacing combined CSS scroll padding, target scroll margin and Lenis offset. Consolidated to one CSS header clearance, shared by native and eased navigation.
- Stable scrollbar gutter prevents width shifts when dialogs open.

Browser checks passed for search results/Escape, masterclass Projects routing, return to Programs, FAQ category switching/expansion, enquiry login gate, mobile menu/Escape, wheel and keyboard scrolling, reduced-motion fallback and the robot pull. A focused automated mobile scrolling sample recorded no long tasks; this does not guarantee performance on every device. No external sign-in or enquiry submission performed.

Final verification: restored the exact missing Windows TypeScript 7.0.2 and Rolldown 1.2.15 package files, without changing application dependency versions. TypeScript/build passed; the 48-state layout and 12 desktop axe checks were rerun successfully. Search modal axe scan was clear, background scrolling stayed locked, and scrolling resumed on close. Navigation destination measured about 75px below the viewport top with a 57px header. Removed an inherited solid background from the footer brand block after visual review. No deployment or Git mutations performed. Git diff inspection reported a missing local Git object; repository health was outside this UI pass.