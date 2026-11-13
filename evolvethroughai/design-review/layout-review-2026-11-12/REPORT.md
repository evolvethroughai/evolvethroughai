# Website layout review — 12 November 2026

Reviewed the homepage and all five pathway routes at 320, 390, 768 and 1440 pixels in light and dark themes (48 states). Screenshots cover desktop/mobile section views and pathway page tops/bottoms during the audit; representative previews are saved here.

Targeted fixes: normalized Screen 5 vertical padding to the surrounding section rhythm; repaired pathway eyebrow, numbering and catalogue-label contrast; repaired the light-theme masterclass eyebrow, secondary heading and stack label; lightened selected gradient headings against graphite backgrounds. Preserved media, logo, content, robot interactions and existing animation.

Validation: TypeScript and production build passed. All 48 states had no horizontal overflow, broken images or page errors. Twelve desktop axe WCAG A/AA scans returned no violations. Robot drag triggered the colour video; clicking navigated to #programs. Screen 8 video loaded and played without a media error on desktop/mobile. Reduced-motion layout was used for the comprehensive audit. Outer homepage section borders remain zero; existing feathered media transitions were preserved.

These checks do not establish formal accessibility compliance or rule out every temporal video artefact. No deployment or external form submission was performed.