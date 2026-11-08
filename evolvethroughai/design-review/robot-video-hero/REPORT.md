# Robot video hero - 7 November 2026

Owner supplied Downloads/8084496-uhd_3840_2160_25fps.mp4 and requested background playback with the existing landing sentences moved slightly right, leaving the robot at left. Implemented a full hero background with theme-aware text/logo wash, right-shifted desktop/tablet copy and stacked mobile content. Preserved logo, content, shared topo plane, soft transition into Screen 2, and downstream sections.

Optimized silent H.264 MP4 versions: 1600px 5,121,462 bytes; 960px 1,694,357 bytes (original 121,246,695 bytes). Fast-start enabled; poster WebP 17,778 bytes. Original remains unchanged. No application dependencies added; ffmpeg-static installed only in temporary QA tooling. Owner-supplied asset; publication licensing not independently verified.

Muted inline looping playback, accessible pause/resume control, offscreen and hidden-tab pausing. Reduced-motion and Save-Data avoid loading the video source and show a poster. Browser autoplay rejection falls back to the poster. Default motion remains slow existing UI motion.

TypeScript/build passed. Browser verification at 390, 768 and 1440px in light and dark: video loaded/playing/muted, responsive source selected, no horizontal overflow, zero page errors. Verified manual pause/resume, offscreen pause and reduced-motion no-source poster. Desktop copy starts at x600 of 1440, mobile x20. Screenshots and qa.json included. Fixed inherited mobile CTA flex-basis causing oversized buttons during this review. Visual approval pending; no deployment or push.

7 November sizing correction: owner requested a smaller robot farther left and removal of pause UI. Desktop/tablet video scaled to .84 with -5% horizontal translation; mobile framing retained. Removed pause component, icons and toggle event wiring; silent looping continues while visible, with reduced-motion/Save-Data fallback retained. Corrected full-width background dimensions to use actual document client width, avoiding scrollbar-induced horizontal overflow. TypeScript/build passed. Six width/theme checks (390/1440/2560) confirmed playing+loop, zero pause controls, no overflow and no page errors. Evidence: smaller-qa.json and smaller-*.png.

Fine framing adjustment: owner requested a minute rightward nudge after approving reduced scale. Changed horizontal translation from -5% to -4%, retaining .84 scale and native charcoal footage background. Existing logo-colour glows retained; no tint applied to the white robot.
