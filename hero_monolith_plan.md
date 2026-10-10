# Richt Ai — Hero Monolith Integration + Motion Plan

## A. Current-state audit

- **Hero component:** `src/components/Hero.tsx`, exported as `Hero({ onCTAClick })`.
- **Responsive structure:** one Hero section with a responsive grid. The copy column remains shared across breakpoints. The current desktop visual branch is `hidden lg:block`; the current tablet/mobile branch is `lg:hidden`.
- **Current desktop visual:** the desktop branch renders `/images/richtai-signal-monolith-reference.png` through `.hero-signal-reference`. This is the full composition reference image, not a visual-only monolith asset, so it is a temporary integration state to replace in Checklist 2.
- **Current mobile/tablet visual:** the `lg:hidden` branch renders `/images/ai-operations-hero-v2.png` in `.hero-visual__frame`, followed by the existing connected-systems rail built from `copy.workflow.connectedSystems`.
- **Hero-specific CSS:** primarily Tailwind utilities in `Hero.tsx`, plus global selector families in `src/index.css`: `.hero-section`, `.hero-copy*`, `.hero-meta*`, `.hero-visual-region`, `.hero-visual*`, and `.hero-connected-systems*`. The desktop grid is currently `lg:grid-cols-[0.64fr_1fr]`.
- **Current Hero-related motion:** existing page reveal behavior uses `data-reveal`, the `.reveal` class, `useRevealObserver`, and `motion-ready` CSS. Hero copy uses existing fade-in-up utility classes. The mobile connected-systems status dot, node dots, and connectors use existing CSS keyframes. No monolith-specific motion exists yet.
- **Functional contracts:** `onCTAClick` is passed into the native Hero CTA. `useLanguage()` supplies TR/EN Hero copy and connected-system labels. The Hero keeps `id="anasayfa"`. There is no local Hero state.
- **Current dependencies:** React 18, `lucide-react`, `@/lib/i18n`, Tailwind/PostCSS, the existing reveal hook, and public image assets. No motion library is installed.
- **Current asset path strategy:** public assets are served from `/images/...`. The repository currently contains `public/images/richtai-signal-monolith-reference.png`, matching the full reference file copied in the previous local change. The required visual-only source named `richtai_signal_monolith_visual_only.png` is not currently present in the repository under that name and must be validated and copied during Checklist 2.

## B. Protected contracts

The following remain unchanged throughout this plan:

- `Hero({ onCTAClick })`
- `id="anasayfa"`
- Current Turkish and English Hero copy
- Current CTA text and callback behavior
- Current reassurance and trust information
- Navbar behavior and language switching
- ContactModal flow
- Existing page section order
- One semantic H1 and native CTA accessibility baseline
- Warm graphite palette and existing typography system

## C. Asset integration strategy

- Final public asset path: `public/images/richtai-signal-monolith-visual.png`.
- Checklist 2 will copy the supplied visual-only file into that path without editing its pixels.
- The desktop visual will render the asset directly with a native `<img>` element inside a layout wrapper.
- The wrapper will preserve the source aspect ratio and use `width: 100%`, `height: auto`, and `object-fit: contain` only where needed for layout. No distortion or destructive crop is permitted.
- Desktop sizing will use the full visual column width with a bounded minimum and maximum width so the monolith is large enough to read as the Hero’s dominant visual, not a thumbnail.
- The source file will not be recompressed, recolored, filtered, rasterized again, or converted to another format.
- Positioning will be handled by the Hero grid and a centered visual stage; no duplicate labels, cards, dashboard, or recreated SVG visual will sit over the asset.
- Motion overlays, if approved later, will be aligned layers only and will not replace or alter the underlying asset.

## D. Desktop composition

- Keep the current two-column Hero composition with an approximately 40/60 copy-to-visual balance. The current `0.64fr / 1fr` grid is the starting point and will be refined only through visual QA.
- Target the visual column at the largest clean size that fits the content container, with a practical minimum width of approximately 34rem and a maximum width of approximately 48rem where the viewport allows.
- Vertically center the visual stage with the existing copy block. Do not add a separate card frame unless a thin border/radius is needed to separate the asset from the graphite background.
- Preserve the existing Hero section height behavior; avoid adding height merely to create empty space. The image must remain fully legible without pushing the next section into an accidental first-screen strip.
- Keep the desktop branch at `lg` and above. Below that breakpoint, use the approved fallback strategy in Section E.
- Target visual results:
  - **1536×900:** large, sharp monolith on the right with comfortable copy-to-visual balance.
  - **1440×900:** no duplicated copy and no tiny visual treatment.
  - **1280×800:** image remains readable without colliding with the left copy or navbar.
  - **1024×768:** visual remains contained and intentional at the breakpoint, with no horizontal overflow.

## E. Mobile/tablet strategy

- Keep the existing photo plus connected-systems rail fallback below `1024px` during the static integration phase. This avoids forcing the wide desktop visual into a small screen before dedicated QA.
- Do not redesign the current mobile Hero, copy order, CTA, reassurance, Navbar, or workflow rail as part of this plan.
- If a later review approves using the exact monolith asset below `1024px`, it must be introduced as a separate bounded decision with its own responsive QA; it is not assumed here.
- The current fallback remains full-width within the existing mobile container, with its current readable crop and compact rail.
- Target results for the current fallback at **768×1024**, **430×932**, **390×844**, and **375×812** are: no horizontal overflow, no overlap, readable copy, prominent CTA, and unchanged connected-systems behavior.

## F. Motion technology decision

### Options reviewed

1. **CSS + React state:** no new dependency, uses a small state machine and cleaned-up effects for sequencing, and keeps animation work limited to opacity, transforms, and SVG stroke properties.
2. **Motion for React:** declarative sequencing and cleanup are strong, but it adds a dependency and bundle surface for one localized Hero system.
3. **GSAP:** powerful timeline control, but heavier than necessary and introduces more imperative lifecycle and bundle complexity.

### Decision

Choose **CSS + React state**.

- The sequence can be expressed as a small phase state with one cleaned-up timer chain or animation-event coordinator.
- SVG path drawing and signal travel can use CSS variables, stroke-dashoffset, opacity, and transforms without adding a library.
- React owns lifecycle, reset, alternating source state, visibility pause, and reduced-motion branching.
- No motion package is installed for this plan. Motion infrastructure belongs only to Checklist 6 after static desktop/tablet behavior is approved.

## G. Motion storyboard

Motion begins only after the static asset has passed desktop and mobile approval.

| Phase | Trigger | Duration | Affected elements | Visual change / reset |
| --- | --- | --- | --- | --- |
| 1. Initial load | Hero enters viewport and motion is allowed | 700–900ms | Asset wrapper, overlay, anchor points | Calm opacity/translate entrance; settle into the complete static composition. |
| 2. Inbound Website | Initial cycle after entrance | 900ms | Website anchor and inbound signal | Website anchor activates first; a restrained signal travels toward the AI core. |
| 3. Signal to AI | Website signal reaches the core | 700ms | Signal path and core ring | Signal resolves into the core; no broad glow or page-wide effect. |
| 4. AI active state | Core receives the signal | 850ms | AI core marker and inner ring | Core ring/label briefly becomes more active, then returns to its calm state. |
| 5. CRM / Calendar | Core phase completes | 900ms | CRM and Calendar paths/anchors | Downstream branches resolve sequentially with restrained opacity and line activation. |
| 6. Team handoff | Downstream phase completes | 700ms | Team endpoint | Team endpoint receives a final subtle activation. |
| 7. Settle | Handoff completes | 1200ms | All motion layers | Signals return to their resting state; no persistent flashing. |
| 8. WhatsApp alternate | After settle pause | 900ms | WhatsApp anchor and inbound signal | WhatsApp becomes the active source and repeats the same calm sequence. |
| 9. Repeat | After a deliberate pause | 8–12s cycle | State machine | Alternate sources; reset all classes/timers on unmount, viewport exit, or reduced-motion change. |

## H. Overlay alignment strategy

- Use one `.hero-monolith-stage` wrapper with `position: relative` and the same intrinsic aspect ratio as the visual-only image.
- Place the exact image as the base layer and one SVG overlay as a sibling layer with `position: absolute; inset: 0`.
- Use one SVG `viewBox` calibrated to the source asset’s intrinsic dimensions. Keep overlay coordinates tied to the asset’s stable visual anchors rather than viewport pixels.
- Use `preserveAspectRatio="xMidYMid meet"` and the same contain geometry for the image and overlay so scaling remains aligned across desktop widths.
- Keep SVG overlay paths limited to the supplied Website, WhatsApp, AI, CRM, Calendar, and Team geometry. Do not add new UI labels or decorative panels.
- Below `1024px`, the current fallback has no monolith overlay. If a future decision changes this, it must use a separate mobile coordinate map and an explicit responsive QA pass.
- Reflow is handled by the shared wrapper dimensions and CSS containment, not by per-frame layout measurement. Resize listeners are not expected unless real QA proves they are necessary.

## I. Reduced-motion strategy

- Detect `prefers-reduced-motion: reduce` before starting the motion sequence and respond to changes while mounted.
- Render the complete sharp image and a calm complete overlay state immediately.
- Do not run the loop, parallax, signal travel, repeated flashing, or entrance translation in reduced-motion mode.
- Keep the native CTA, language behavior, section navigation, and all non-Hero accessibility behavior unchanged.
- Existing global reveal behavior must not be made more intense by this feature; the monolith-specific motion has its own static fallback.

## J. Performance strategy

- Animate only compositor-friendly `transform` and `opacity` wherever possible. Use SVG stroke properties only for short, bounded signal effects.
- Keep the overlay to a small number of paths and avoid filters, large blurs, canvas, and continuous layout reads.
- Start the loop only while the Hero is on screen; pause/reset when it leaves the viewport.
- Clean up all timers, animation listeners, observers, and media-query listeners on unmount.
- Preserve layout dimensions before the image loads to avoid layout shift; use the source aspect ratio or an explicit aspect-ratio wrapper.
- Let the browser load one optimized public image without creating runtime image transformations.
- Keep the current mobile fallback as the performance guardrail below `1024px`.

## K. File architecture

Likely implementation scope after plan approval:

- `src/components/Hero.tsx` — preserve contracts and own the desktop/static visual placement.
- `src/components/HeroMonolithVisual.tsx` — own the image stage and any aligned overlay markup.
- `src/hooks/useHeroMonolithMotion.ts` — own the small phase state, visibility, reduced-motion, and cleanup logic if the sequence cannot stay local to the visual component.
- `src/index.css` — add narrowly scoped stage/overlay styles and motion classes.
- `public/images/richtai-signal-monolith-visual.png` — exact supplied visual-only asset.
- `package.json` — unchanged under the chosen CSS + React state decision.

Avoid splitting the implementation into more files unless a concrete reuse or lifecycle problem requires it.

## L. Rollback strategy

- Revert only the Hero-specific files introduced by this plan: `Hero.tsx`, `HeroMonolithVisual.tsx`, `useHeroMonolithMotion.ts` if created, the scoped Hero CSS, and the new visual asset.
- Restore the approved Hero implementation and existing mobile/tablet fallback without resetting unrelated homepage work.
- Keep rollback changes scoped to the Hero so Navbar, ContactModal, i18n, page order, and other sections remain untouched.
- Before any commit, compare against `b74b4b7d797d93231dd5b432b15fd9e479ae16d3` and review only the intended Hero/asset diff.

## M. Visual acceptance criteria

- The exact visual-only asset is visible on desktop.
- The asset remains sharp, large, and proportionally preserved.
- The full Hero reference is not inserted and its embedded copy is not duplicated.
- The left live Hero headline, CTA, reassurance, and language behavior remain the only live copy in that column.
- The visual balances the headline at all target desktop widths without reading as a thumbnail or screenshot inside a card.
- The static composition already feels premium before motion is enabled.
- The later motion pass feels alive but restrained, directional, and non-generic.
- The current mobile/tablet fallback remains readable and stable.
- Reduced-motion mode presents a complete static state with no loop or parallax.

## Implementation checklist

- [x] 1. Audit and freeze current Hero contracts
- [x] 2. Integrate the exact monolith asset on desktop only, static
- [ ] 3. Desktop visual QA and sizing refinement
- [ ] 4. Integrate or refine tablet/mobile static behavior
- [ ] 5. Tablet/mobile visual QA
- [x] 6. Add the approved CSS + React motion infrastructure
- [x] 7. Implement initial-load choreography
- [x] 8. Implement Website inbound → AI sequence
- [x] 9. Add alternating WhatsApp inbound sequence
- [x] 10. Implement CRM / Calendar downstream states
- [x] 11. Implement Team handoff + settle/reset loop
- [x] 12. Add reduced-motion + visibility/performance guards
- [ ] 13. Full TR/EN responsive visual QA
- [ ] 14. Typecheck / lint / build / diff review
- [ ] 15. Final review checkpoint before commit
- [ ] 16. Commit and push ONLY after explicit approval

### Checklist 1 — Implementation notes

- **Hero prop contract:** `Hero({ onCTAClick })` remains unchanged.
- **CTA behavior:** the native Hero CTA still calls `onCTAClick`, preserving the existing ContactModal flow.
- **Section identity:** `id="anasayfa"` remains unchanged.
- **Copy ownership:** TR/EN Hero headline, accent, subheadline, duration, reassurance, and direct-contact copy continue to come from `useLanguage()` and `copy.hero`.
- **CTA ownership:** the Hero still renders the existing `copy.hero.cta` value; no copy changed.
- **Reassurance ownership:** the existing desktop and mobile reassurance blocks remain in `Hero.tsx`.
- **Desktop visual:** the baseline photo/connected-systems visual was replaced only in the desktop branch by Checklist 2.
- **Tablet/mobile fallback:** the existing photo `/images/ai-operations-hero-v2.png` and connected-systems rail remain in the `lg:hidden` branch.
- **CSS ownership:** shared Hero styling remains in `src/index.css` under `.hero-*` selector families; Tailwind utilities remain local to `Hero.tsx`.
- **Accessibility:** one live H1, native CTA, keyboard/focus behavior, section identity, and an appropriate image alt remain preserved.
- **Image behavior:** the exact visual-only source was copied byte-for-byte to `/images/richtai-signal-monolith-visual.png`; no source resize, crop, recompression, or recolor was performed.
- **Breakpoints:** desktop monolith rendering starts at the existing `lg` breakpoint (`1024px`); the approved fallback remains below it. Existing mobile ordering remains controlled by the current `max-width: 639px` rules.
- **Frozen contracts:** Navbar, language behavior, ContactModal ownership, page order, warm graphite palette, one H1, native CTA, language parity, and the current mobile/tablet fallback are unchanged.
- **Checklist 6 wording correction:** the plan now reads `Add the approved CSS + React motion infrastructure`; no motion dependency or motion code was added.

### Checklist 2 — Implementation notes

- **Asset destination:** `public/images/richtai-signal-monolith-visual.png`.
- **Asset validation:** source attachment and project copy are both 870×325 and have matching SHA-256 `290965A6F94AFBE95715833559CFDDB6FE73646FAB4B0F33B26A567520BA8527`.
- **Desktop rendering:** at `lg` and above, the Hero renders only the exact monolith asset in the right visual column; the old desktop photo and connected-systems rail are not rendered there.
- **Desktop breakpoint:** `hidden lg:block` for the monolith and `lg:hidden` for the fallback.
- **Sizing:** the image uses `width: 100%`, `height: auto`, `max-width: none`, and `object-fit: contain`; its natural aspect ratio is preserved and no visual frame/card was added.
- **Fallback confirmation:** below `1024px`, the existing photo, connected-systems rail, CTA, copy, and responsive behavior remain unchanged.
- **No-motion confirmation:** no hooks, timers, keyframes, SVG overlays, motion libraries, hover motion, parallax, or animation code were added for the monolith.

### Checklist 3 — Revision review note

- **Previous review rejected:** the visual was too small and read as a horizontal banner/thumbnail rather than the Hero centerpiece.
- **Previous review rejected:** the raster’s dark rectangular background boundary was visibly different from the warm graphite page.
- **Revised desktop grid:** `lg:grid-cols-[0.65fr_1fr]`, approximately 39% copy / 61% visual, with a desktop-only `lg:max-w-[85rem]` container and reduced desktop gap.
- **Rendered visual width:** the image remains `width: 100%`, `max-width: none`, `height: auto`, and `object-fit: contain`; the wider desktop container provides approximately 727–805 CSS pixels of visual width across 1280–1536px layouts while staying below the 870px source width.
- **Methods tested:** retained scoped `mix-blend-mode: lighten`; added a very subtle horizontal/vertical outer-edge feather; widened the desktop stage toward the right edge as the requested Hero-spread fallback.
- **True integration result:** the previous `lighten`-only pass was reported as insufficient to fully remove the raster boundary, so true integration is not considered proven yet.
- **Fallback mode:** the current pass uses Hero-spread mode with a transparent stage, `calc(100% + 3rem)` width, `-3rem` right offset, and restrained edge feathering. No card, panel, glow, or decorative gradient was added.
- **Full background unification refinement:** desktop now uses the Hero section itself as the atmospheric stage, with a broad low-contrast charcoal/teal field and a translucent full-surface scrim extending behind the copy, center gap, and visual region. Mobile/tablet do not receive this desktop-only layer.
- **Window-surface refinement:** desktop now presents the monolith in a restrained graphite surface with minimal chrome, localized `CANLI SİSTEM GÖRÜNÜMÜ` / `LIVE SYSTEM VIEW` labeling, and no extra dashboard UI. Mobile/tablet remain unchanged. Checklist 3 remains unchecked pending visual approval.
- **Positioning:** the existing centered grid alignment remains; the desktop visual now occupies more of the right-side field and can breathe toward the right edge.
- **Hero height:** unchanged.
- **Sharpness conclusion:** the revised maximum planned render remains below the 870px source width, preserving label and signal sharpness without filters or forced raster enlargement.
- **Rectangle perceptibility:** the mask/spread integration is implemented, but exact 1536×900, 1440×900, 1280×800, and 1024×768 desktop screenshots are not available in the current narrow Codex in-app browser. Checklist 3 remains unchecked pending visual approval at those desktop widths.
- **Rejected height/localization rollback:** removed the later inner-label overlay experiment and extra window body padding; restored the approved window proportions and retained only the localized window title. The baked Turkish labels remain unchanged for this Turkish-first motion phase.

### Checklists 6–12 — Motion implementation notes

- **Architecture:** `HeroMonolithVisual.tsx` owns the Turkish desktop motion state, source alternation, viewport/page visibility guards, reduced-motion branch, timer cleanup, and the single source-aligned SVG overlay. No motion dependency was added.
- **Sequence:** the overlay expresses Website/WhatsApp inbound signals, AI core response, CRM then Takvim downstream resolution, and final Ekip handoff. The cycle settles before alternating sources and remains within the requested calm 8–12 second rhythm.
- **Static/reduced-motion behavior:** the approved raster asset and window proportions remain the base composition. Reduced motion renders a complete calm overlay without entrance translation, looping timers, or signal travel.
- **Locale boundary:** motion is enabled only for the Turkish desktop branch in this run. The baked labels are not edited or overlaid, and English inner-label refinement is deferred.

## Execution rules for future runs

- Future implementation runs may implement only the explicitly assigned checklist item(s).
- After each successful run, mark only those checklist items `[x]`.
- Never auto-continue to the next unchecked item.
- If visual QA fails, keep that checklist item unchecked.
- No commit/push before Checklist 16.
- Screenshot review is required after Checklist 3 and Checklist 5.
- Motion must not start before static desktop and mobile are approved.
- If the asset looks blurry or too small, stop and fix sizing before motion.
- If a motion library is added, it happens only in Checklist 6.
- No unrelated homepage edits.

## Quality targets

Desktop:

- 1536×900
- 1440×900
- 1280×800
- 1024×768

Mobile/tablet:

- 768×1024
- 430×932
- 390×844
- 375×812

The final Hero should feel compositionally similar to the full Hero reference: a large left headline, a large monolith visual on the right, strong balance, no tiny visual, no duplicated text, and no screenshot-inside-card treatment.
