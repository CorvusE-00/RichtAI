# Richt Ai V2 — Phase 2: Navbar V2

## Objective

Rebuild only the Richt Ai Navbar into the V2 “Bold Systems” direction while preserving every existing navigation, language, modal, observer, accessibility, and responsive behavior contract.

The result should feel editorial, deliberate, premium, operational, and founder-led rather than glassy, capsule-driven, neon, or template-like.

Do not modify Hero or any later homepage section during Phase 2.

## V2 Navbar direction

Use a full-width fixed header with a Carbon/near-Carbon surface, restrained border, compact confident navigation, minimal radius, and a subtle scrolled-state change. Prefer borders over large shadows and reserve Signal Lime for high-value emphasis. Electric Cyan remains a secondary/system signal.

Final intended V2 visible labels:

- EN: Work, Systems, Process, About, FAQ
- TR: Projeler, Sistemler, Süreç, Hakkında, S.S.S.

Phase 2 uses a temporary first-item label until the Phase 6 Selected Work section exists:

- EN: Challenges
- TR: Sorunlar

The remaining four V2 labels are safe to introduce during Phase 2.

Navbar CTA labels:

- EN: Start a project
- TR: Projeyi konuşalım

Visible labels may change, but section-anchor IDs must remain stable in this phase.

## Existing behavior contracts to preserve

- fixed header behavior;
- `isScrolled = window.scrollY > 24` unless a concrete implementation finding requires review;
- the current desktop/mobile breakpoint around `lg`;
- `copy.nav.links` shape and the existing language provider contract;
- `toggleLanguage()` and language persistence behavior;
- smooth `scrollIntoView` navigation;
- mobile menu open/close behavior and close-after-selection behavior;
- CTA calls the existing `onCTAClick` callback, with App retaining ContactModal ownership;
- active-section observer behavior, including current IDs, root margin, and thresholds unless a concrete bug is found;
- valid logo/brand interaction and protected MermaidMark silhouette;
- reduced-motion accessibility and keyboard usability.

## Stable navigation ID and visible-label mapping

The Phase 2 source contract maps visible labels to the existing section IDs as follows:

| Language | Phase 2 visible label | Existing target ID |
| --- | --- | --- | --- |
| EN | Challenges | `sorun` |
| EN | Systems | `cozum` |
| EN | Process | `nasil-calisir` |
| EN | About | `guven` |
| EN | FAQ | `sss` |
| TR | Sorunlar | `sorun` |
| TR | Sistemler | `cozum` |
| TR | Süreç | `nasil-calisir` |
| TR | Hakkında | `guven` |
| TR | S.S.S. | `sss` |

Do not rename these IDs or change the rendered section order. Any Phase 2 copy update must preserve Challenges / Sorunlar for `sorun`, migrate only the four safe labels, preserve the nav array shape, and maintain TR/EN parity.

Future Phase 6 handoff: Work / Projeler must point to a new Selected Work section ID only after that section is created, its final position and anchor behavior are verified, and the first Navbar item is changed atomically from Challenges / Sorunlar to Work / Projeler. Do not reuse `sorun` for Work.

## Expected file boundary

Likely implementation files:

- `src/components/Navbar.tsx`
- `src/index.css`
- `src/lib/i18n.tsx` only if the visible Navbar labels and CTA copy require translation updates.

No new dependency or Tailwind configuration change is expected. Prefer existing V2 variables, `.v2-container`, `.v2-label`, `.v2-focus-ring`, typography roles, and radius roles only where they improve the Navbar implementation. Do not create a global button system or speculative primitives.

## Locked files and areas

Do not modify:

- `src/components/Hero.tsx`
- `src/components/Problem.tsx`
- `src/components/Solution.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Trust.tsx`
- `src/components/FAQ.tsx`
- `src/components/FinalCTA.tsx`
- `src/components/Footer.tsx`
- `src/components/ContactModal.tsx`
- `src/components/MermaidMark.tsx` unless a real Navbar compatibility issue is proven;
- `src/App.tsx` unless an existing Navbar contract concretely requires it;
- site metadata, Supabase, assets, package files, lockfiles, Vite/PostCSS config, and `tailwind.config.js`.

## Phase 2 implementation checklist

### 1. Audit and freeze the current Navbar contracts

- [ ] Inspect `src/components/Navbar.tsx`, the translation nav structure, current section IDs, active observer, scroll state, mobile menu state, CTA callback, language toggle, and MermaidMark usage.
- [ ] Record any concrete behavior constraints before markup changes.
- [ ] Do not modify other components during this audit.

### 2. Finalize V2 labels and ID-safe i18n mapping

- [ ] Verify the exact Phase 2 EN/TR visible-label mapping documented above against the live source.
- [ ] Preserve Challenges / Sorunlar for `sorun` and migrate only Systems / Sistemler, Process / Süreç, About / Hakkında, and FAQ / S.S.S.
- [ ] Migrate CTA copy only to EN `Start a project` and TR `Projeyi konuşalım`, preserving `copy.nav.links`, array shape, IDs, language parity, and persistence behavior.
- [ ] Keep Work / Projeler staged for the Phase 6 Selected Work handoff; do not create or point to Selected Work during Phase 2.
- [ ] Do not begin the broader copy rewrite planned for a later phase.

### 3. Prepare semantic V2 Navbar structure

- [ ] Restructure only the Navbar into a clear semantic `header` → `.v2-container` → brand, navigation, and controls hierarchy.
- [ ] Keep the MermaidMark plus wordmark arrangement recognizable.
- [ ] Avoid excessive wrappers, dashboard-like surfaces, and duplicated controls.
- [ ] Preserve desktop and mobile behavior contracts while changing presentation.

### 4. Apply the desktop Bold Systems visual system

- [ ] Use a full-width fixed Carbon/near-Carbon header with a thin restrained border.
- [ ] Remove the floating glass-pill, heavy blur, large shadow, gradient-border, neon, and capsule-driven treatment from the Navbar only.
- [ ] Use compact spacing, minimal radius, strong wordmark presence, and precise navigation density.
- [ ] Use Signal Lime sparingly for high-value emphasis and Electric Cyan only for secondary/system states.
- [ ] Keep the active state precise through a short rule, marker, or stronger text rather than decorative glow.

### 5. Rework brand, language control, and CTA presentation

- [ ] Preserve MermaidMark silhouette geometry and brand recognition; do not create or recolor a source asset.
- [ ] Design the language control as a compact, obvious, keyboard-usable control that is not visually dominant.
- [ ] Style the CTA with the approved EN/TR labels, compact 8–10px radius, Carbon text on Signal Lime where appropriate, no glow, and no hover lift.
- [ ] Preserve the existing `onCTAClick` → ContactModal behavior and do not create a global `.v2-button-*` system.

### 6. Rework active and scrolled states without behavioral drift

- [ ] Preserve the active-section observer, current IDs, root margin, thresholds, and `isScrolled` threshold unless a concrete bug is discovered.
- [ ] Add only a small visual difference between top-of-page and scrolled states through border, background density, or restrained height/padding changes.
- [ ] Avoid transform jumps, large shrink animations, blur-heavy transitions, dramatic shadows, or changes that destabilize Hero clearance.

### 7. Rebuild the mobile Navbar/menu presentation

- [ ] Create an intentional mobile top bar containing brand, language control, menu control, and CTA access without horizontal overflow at 320px.
- [ ] Present the mobile menu as part of the system, not a generic floating dropdown card or stacked-chip surface.
- [ ] Preserve menu open/close, menu-link scrolling, close-after-selection, language switching, CTA access, and body-scroll behavior.
- [ ] Keep mobile tap targets approximately 44px where practical and avoid excessive radius or glass-modal treatment.

### 8. Preserve accessibility and restrained motion

- [ ] Preserve semantic `nav`, button semantics, visible focus, keyboard navigation, sufficient contrast, and usable language controls.
- [ ] Add or preserve `aria-expanded` and `aria-controls` where useful without broad accessibility refactoring outside Navbar.
- [ ] Preserve or safely add Escape-to-close only if it fits the existing behavior contract.
- [ ] Limit motion to color/border transitions, active-rule movement, menu transition, and a restrained 3–4px arrow shift if used.
- [ ] Respect `prefers-reduced-motion`; do not add glow pulses, bounce, spring physics, gradients, scramble text, or reveal systems.

### 9. Verify functional contracts and run project checks

- [ ] Verify desktop and mobile nav links, active state, scroll state, language switch, CTA → ContactModal, menu open/close, close-after-selection, section scrolling, body-scroll behavior, and Hero clearance.
- [ ] Verify no horizontal overflow and no changes to Hero or any other section.
- [ ] Run `pnpm typecheck`.
- [ ] Run `pnpm lint`.
- [ ] Run `pnpm build`.
- [ ] Record exact outcomes and stop on Phase 2-caused failures rather than fixing unrelated issues.

### 10. Perform bilingual responsive QA and final Phase 2 readiness review

- [ ] Inspect EN and TR at 320px, 375px, 430px, 768px, 1024px, 1280px, and 1440px+.
- [ ] Check brand alignment, header height, nav density, active state, CTA, language control, mobile menu, Hero clearance, TR/EN width pressure, and absence of overflow.
- [ ] Confirm the Navbar is the only redesigned area and all locked files remain unchanged.
- [ ] Confirm functionality, accessibility, reduced motion, typecheck, lint, and build results are recorded.
- [ ] Confirm readiness for Phase 3 Hero static without starting Phase 3.

## Phase 2 exit criteria

Phase 2 is complete only when:

- Navbar V2 visuals are implemented;
- existing navigation, observer, mobile menu, language, CTA, modal, and anchor contracts work;
- section IDs remain stable;
- Hero and every later section remain untouched;
- reduced-motion and keyboard behavior remain usable;
- typecheck, lint, and build pass;
- bilingual responsive QA passes at the required widths;
- no unrelated files or abstractions were added;
- the repository is ready for Phase 3 Hero static.

## Implementation discipline

- Implement exactly one checklist item per Codex run.
- Stop after each item.
- Update `implementation_update.md` after each completed item.
- Mark only the completed item `[x]`.
- Do not auto-start the next item.
- Show changed files after each run.
- Perform only verification relevant to the completed item.
- Wait for explicit user approval before continuing.

## Phase 2 checklist

- [ ] Audit and freeze the current Navbar contracts
- [ ] Finalize V2 labels and ID-safe i18n mapping
- [ ] Prepare semantic V2 Navbar structure
- [ ] Apply the desktop Bold Systems visual system
- [ ] Rework brand, language control, and CTA presentation
- [ ] Rework active and scrolled states without behavioral drift
- [ ] Rebuild the mobile Navbar/menu presentation
- [ ] Preserve accessibility and restrained motion
- [ ] Verify functional contracts and run project checks
- [ ] Perform bilingual responsive QA and final Phase 2 readiness review
