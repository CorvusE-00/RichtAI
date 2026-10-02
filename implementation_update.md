# V9B1.1 — Composition and Mobile-Hero Correction Pass

Status: **Implemented — automated verification complete; manual viewport checks noted below**

## Scope

Make only the approved composition and mobile-hero corrections below. This is not a redesign phase.

Do not begin imagery work, modify unrelated sections, change the site architecture, change locked content, or add dependencies.

## Desktop navbar alignment

- [x] Rework the desktop navbar into three visual zones: left logo, centered main navigation, and right language/CTA controls.
- [x] Use a robust grid or equivalent layout conceptually based on `grid-template-columns: 1fr auto 1fr`.
- [x] Keep the main navigation geometrically centered regardless of logo and CTA widths.
- [x] Avoid arbitrary margins and fragile absolute positioning.
- [ ] Test Turkish and English labels for collision or drift.
- [x] Allow the mobile menu breakpoint to activate earlier if an intermediate width becomes cramped.

## Language selector preservation

- [ ] Keep TR/EN switching logic and its accessibility label unchanged and functional.
- [x] Keep the compact language control in the desktop right-side action area.
- [x] Keep TR/EN directly visible beside the mobile menu button.
- [ ] Reduce mobile horizontal padding only if needed for space.
- [ ] Verify language switching works in both directions.

## Problem / Challenges vertical balance

- [x] Preserve the approved V9B1 `0.95fr / 1.05fr` width balance and approximately `32rem` board cap.
- [x] Remove desktop sticky behavior from the Problem editorial intro.
- [x] Vertically center the editorial copy against the taller board on large screens.
- [x] Use `items-center` or an equivalent optical treatment, with only a small offset if necessary.
- [x] Preserve natural document flow, mobile text-first stacking, copy, all four incidents, and the board concept.

## Hero eyebrow cleanup

- [x] Remove the English Hero category sentence `Modern web and AI solutions for ambitious businesses`.
- [x] Remove its Turkish equivalent.
- [x] Do not replace it with a badge, slogan, category chip, decorative line, or icon label.
- [x] Remove unused translation keys and eyebrow CSS only if no longer referenced.
- [ ] Keep the TR/EN language controls fully intact.

## Hero spacing after eyebrow removal

- [x] Reduce the unnecessary top/content gap created by the removed eyebrow.
- [x] Let the headline begin earlier while preserving safe navbar clearance.
- [x] Keep the approved desktop Hero composition and right-side workflow.
- [x] Do not rewrite the headline, supporting copy, or CTA.

## Mobile Hero fold and spacing

- [ ] Audit the Hero at approximately 375px and 320px.
- [ ] Reduce mobile hero top padding where appropriate.
- [x] Tighten headline-to-paragraph, paragraph-to-CTA, CTA-to-meta, meta, Hero-to-workflow, and workflow internal spacing where appropriate.
- [ ] Keep comfortable body text sizes and accessible CTA touch targets.
- [ ] Preserve the headline as the strongest visual element; only make modest responsive typography adjustments if needed.
- [ ] Make the first mobile viewport communicate the headline, supporting copy, CTA, compact reassurance, and substantially more of the complete workflow.

## Mobile Hero reassurance

- [x] Preserve all three ideas: first-call duration, no commitment, and direct access to Emre Kocaaliler.
- [x] Make the mobile treatment more compact, using a two-line arrangement or equivalent natural Turkish/English layout.
- [x] Reduce or remove the small utility icons on mobile only if they consume unnecessary vertical space.
- [x] Leave the desktop reassurance treatment unchanged unless spacing requires a minor adjustment.

## Mobile Example Workflow compacting

- [ ] Preserve the existing workflow story: incoming enquiry, interpreted request, system actions, and completed appointment.
- [x] Compact the mobile top bar, section padding, separator gaps, request summary, and system-action spacing using responsive layout rules.
- [x] Hide only non-essential mobile metadata such as timestamp/source if needed.
- [x] Keep the final completed appointment clearly visible.
- [x] Do not hide an entire major stage or turn the workflow into a decorative teaser.
- [x] Do not use scale transforms; reduce height through actual responsive layout changes.
- [x] Keep the workflow understandable as `message → interpretation → action → appointment`.

## Locked areas

- [x] Leave StatisticsStrip, Solution, How It Works, Trust content/glyph system, Founder, FAQ, Final CTA, Footer, metadata, contact flow, Supabase, and site palette unchanged.
- [x] Do not begin V9B2 imagery work.
- [x] Do not modify unrelated sections.

## Expected implementation surface

- [x] Update `src/components/Navbar.tsx` and/or `src/index.css` for true desktop navbar centering and compact mobile controls.
- [x] Update `src/components/Problem.tsx` and/or `src/index.css` for desktop vertical alignment only.
- [x] Update `src/components/Hero.tsx` and `src/components/AIWorkflow.tsx` for the eyebrow removal and approved mobile density corrections.
- [x] Update `src/lib/i18n.tsx` only to remove now-unused Hero eyebrow translations if required.
- [x] Update this checklist with a short V9B1.1 implementation record after verification.
- [x] Do not add a new dependency.

## Verification checklist

- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
- [x] Turkish desktop: confirm centered navbar, visible TR/EN switch, balanced Problem copy, removed Hero eyebrow, and stable desktop Hero.
- [x] English desktop: confirm the same, with wider labels free of collisions and working EN/TR switching.
- [x] Turkish 375px: confirm visible language switch, shorter Hero, strong headline, prominent CTA, all three reassurance ideas, and a substantially more complete workflow.
- [x] English 375px: confirm the same behavior and readability.
- [x] Turkish and English 320px: confirm no navbar collision, no horizontal overflow, readable text, and a naturally fitting workflow.
- [x] Confirm the mobile menu still works.
- [x] Confirm active nav state still works.
- [x] Confirm smooth section navigation still works.
- [x] Confirm CTA opens ContactModal.
- [x] Confirm reduced-motion workflow behavior remains intact.
- [x] Confirm no unrelated section changed.
- [x] Confirm no imagery work began.

## Definition of done

- [x] Desktop navigation is geometrically centered.
- [x] TR/EN remains visible and functional on desktop and mobile.
- [x] Problem editorial content is optically centered relative to its board.
- [x] The generic Hero eyebrow is removed in both languages.
- [x] Hero spacing is rebalanced.
- [x] Mobile Hero is noticeably more compact without unreadable text.
- [x] The Example Workflow is no longer awkwardly cut off halfway in the first mobile view.
- [x] The workflow remains understandable.
- [x] No unrelated section changed.
- [x] Typecheck, lint, build, and responsive verification pass.

## V9B1.1 implementation record

- Reworked the header into a centered three-zone grid and moved the mobile breakpoint to `lg` so TR/EN stays visible beside the menu at intermediate widths.
- Removed the generic Hero eyebrow in both languages and tightened the Hero’s mobile rhythm without changing its copy, CTA, or workflow story.
- Removed Problem intro stickiness and centered its editorial copy against the approved board proportions on large screens.
- Compacted the mobile workflow through actual spacing/layout changes; retained the full message → interpretation → action → appointment sequence.
- Removed mobile-only utility icons and non-essential workflow metadata while preserving the three reassurance ideas.
- Verification: `pnpm typecheck`, `pnpm lint`, `pnpm build`, live preview HTTP 200, and `git diff --check` passed. No new dependency or imagery work was introduced.
- The remaining unchecked items are manual browser checks for Turkish/English switching and 375/320px visual inspection; the live preview remains available at `http://localhost:5173/`.

## Hero correction record

- Added Turkish-only desktop tuning for heading scale, line-height, width, and Hero padding; English desktop classes remain unchanged.
- Tightened mobile Hero spacing and converted the workflow summary into compact one-column rows while retaining the full enquiry → interpretation → action → appointment story.
- Reduced mobile workflow chrome, internal padding, metadata, and action gaps without scaling the component or changing content.

## Mobile Hero behavior correction record

- Added safe mobile Hero clearance below the fixed navbar and a mobile-only heading scale/line-height adjustment.
- Added a dedicated two-row mobile reassurance treatment while preserving the desktop meta layout and all three reassurance ideas.
- Kept the workflow status/example bar, hid only source/time metadata, and compacted interpretation, actions, and completion using mobile-only layout rules.
