# Scroll performance repair — 19 November 2026

Removed the mounted Lenis wheel interceptor. Browser-native wheel, touch and keyboard scrolling now own page movement; native smooth anchor links remain. Homepage reload behavior and dialog CSS scroll locking are preserved.

The shared topo contour map now renders at speed zero (once, plus resize/theme changes), with a slow compositor transform providing visual drift. It no longer resamples noise and retraces contours continuously. Reduced motion disables the visual drift. Existing header styling was preserved.

Decorative video playback now shares one coordinator: only the visible video closest to viewport center plays, and all others pause. Next-section metadata warms within 250px of entry; offscreen clips do not autoplay. Source videos and posters, content and original robot appearance are unchanged.

Validation: TypeScript and production build passed. Automated 390px and 1440px scroll passes advanced 2640px without page errors or horizontal overflow, with at most one playing background video at sampled positions. No main-thread long tasks were observed in normal or 4x CPU-throttled samples. Frame timing still varied (normal initial samples p95 about 33ms, worst 133–167ms); these checks do not establish constant 60fps or performance on every device. The colour-pull interaction was rechecked separately.

No deployment. Existing local dependency Lenis remains installed but is no longer imported by the application entry point.
## Follow-up: rendering/compositing repair
The first native-scroll change did not resolve the owner's observed stalls. The final implementation removes the shared canvas renderer entirely: its original contour drawing is saved as a repeating image texture, with no full-screen redraw loop or moving canvas layer. Nested header/card backdrop filters were removed, with an opaque scrolled header preserving text contrast. Hero blur layers no longer use large live blur filters.

A single passive scroll-activity listener suspends decorative video playback while the page moves and resumes the selected visible video 180ms after settling. Decorative CSS animations pause during movement. The existing easing controller is restored for wheel interpolation now that the competing rendering work is removed; native touch and live reduced-motion fallback remain.

Repeat normal-speed automated scroll samples: mobile worst frame about 34ms (previous about 167ms), desktop about 67ms (previous about 134ms); p95 remained about 33ms in this headless environment. No long tasks, page errors or overflow recorded. This is measured improvement, not a guarantee of fixed frame rate on every device. Verified zero shared topo canvases, Academy video resuming when stopped, keyboard scrolling, search Escape, reduced-motion native fallback and the robot-pull colour video. TypeScript/build passed. No media source edits, robot logo additions or deployment.