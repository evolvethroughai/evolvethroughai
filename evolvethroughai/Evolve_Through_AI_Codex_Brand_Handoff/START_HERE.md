# Evolve Through AI — Codex Brand Handoff

## Status
The selected **visual reference** is `reference/FINAL_SELECTED_BRAND_BOARD.png`: a flowing layered ribbon E, blue → cyan → violet, with a fine white circuit path and round node through the middle ribbon. The full brand name is **Evolve Through AI**, descriptor **Technology • Innovation • Solutions**, tagline **Learn. Build. Evolve.**

**Important:** The reference is an AI-generated raster brand board, not a set of editable logo originals. The ZIP in `legacy-assets/` contains usable SVG/PNG assets of the *earlier clean ribbon E without the circuit detail*. Those files are **not** the final AI-enhanced logo. Do not silently pass them off as the new final design.

## Instructions to Codex (VS Code)
1. Read this file and inspect both reference images. Inspect the existing website repo and brand files before changing anything.
2. Reconstruct the approved AI-enhanced ribbon E as a **true vector SVG**, including the subtle circuit path and round node. Aim for a visually faithful interpretation; do not pretend it is a pixel-perfect extraction. Avoid extra glow, overly intricate geometry, or a literal 'AI' inside the mark.
3. Create the production files under `public/brand/`: `symbol.svg`, `logo-light.svg`, `logo-dark.svg`, `symbol-mono-dark.svg`, `symbol-mono-light.svg`, `icon-512.png`, `icon-192.png`, `apple-touch-icon.png`, `favicon.ico`, and other sizes as needed. PNGs should be rendered from the approved SVG masters. Keep transparent backgrounds where appropriate. Correctly spell **Evolve Through AI**.
4. Produce a **visual approval preview** showing the SVG logos on white and midnight backgrounds, icon at 64px and 32px, and website header at desktop and mobile widths. If circuit detail disappears at 16px, create a simplified small-size favicon variant.
5. **STOP FOR MY APPROVAL** before replacing current website branding. Do not change unrelated UI or deploy.
6. Once approved, integrate logos in shared header, mobile nav, footer, favicons, app metadata and social preview where relevant. Update `docs/DESIGN_REQUIREMENTS.md` and `docs/DECISIONS_AND_OPEN_ITEMS.md` with the approved assets and colors. Check responsiveness and asset paths.

## Brand tokens
- Midnight `#0B1220`
- Electric blue `#2563EB`
- Cyan `#06B6D4`
- Violet `#8B5CF6`
- Off-white `#F8FAFC`
- White `#FFFFFF`
- Gray `#E5E7EB`

Typography direction: Inter or comparable contemporary sans serif. Prioritize crisp typography, clear space, accessible contrast, and premium restrained color. Do not force descriptor and tagline into tiny website headers.

## Suggested directory after implementation
```
public/brand/
  symbol.svg
  logo-light.svg
  logo-dark.svg
  symbol-mono-dark.svg
  symbol-mono-light.svg
  icon-512.png
  icon-192.png
  apple-touch-icon.png
  favicon.ico
```

## Review checklist
- [ ] Shape matches flowing ribbon E and circuit line reference
- [ ] Vector geometry is actual paths, not embedded bitmap
- [ ] Text is spelled correctly and readable
- [ ] No visual clutter or heavy glow
- [ ] Symbol works on light and dark backgrounds
- [ ] Simplified favicon remains legible at 16px
- [ ] No existing project assets overwritten before approval
- [ ] Files render in browser and build passes after integration

Commercial note: perform similarity and trademark review before treating this mark as legally cleared.
