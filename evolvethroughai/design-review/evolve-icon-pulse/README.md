# EvolveIcon — 26 October 2026

Reusable component: src/components/EvolveIcon.tsx. Styles are imported automatically from EvolveIcon.css. Approved ribbon geometry preserved; the original static white inner trace is preserved beneath the pulse. Two short dash segments (core and blurred halo) travel along the original curve; a static white terminal dot remains, with a separate soft flare. Loop: 2.8 seconds with accelerating travel, arrival at about 1.65 seconds, then a quiet pause. No JavaScript animation loop or new dependency.

```tsx
import { EvolveIcon } from './components/EvolveIcon';

<EvolveIcon className="h-8 w-7" animated />
<EvolveIcon width={112} height={128} animated={false} />
// Decorative next to an existing accessible label:
<EvolveIcon className="h-8 w-7" animated aria-hidden="true" />
```

Use width/height in a 7:8 ratio, or Tailwind sizes with the same ratio. All stroke widths scale with viewBox geometry. At 16px, the dot and silhouette remain visible while the moving segment is necessarily subtle. Browser tab favicons are separate static assets; React components do not execute inside favicon images.

Every instance has useId-scoped gradient/filter IDs. Supports SVG props, custom accessible title, aria-label and decorative aria-hidden. animated=false and prefers-reduced-motion disable pulse/flare, leaving the ribbon, white curve and fixed dot visible. CSS opacity/dash animation only; no moving nodes or layout changes.

Integrated for the standalone footer signoff symbol. Horizontal header/footer logo files remain the approved static lockups. No other homepage sections, logo master files or favicon assets changed.

Verification: TypeScript/build passed. Chrome rendered 16, 32, 64 and 240px animated instances plus a still instance. IDs were unique within component instances. The original verification checked the earlier no-track version; the owner subsequently requested restoration of the static curve beneath the flash. At 1000ms the pulse is in transit; at 1650ms the terminal flare is visible; at 2200/2700ms both are invisible during the pause. Reduced-motion produced animation:none, opacity:0, while the static dot retained white fill. See qa.json and preview.png. No deployment.