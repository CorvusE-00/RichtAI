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

#### Checklist 1 audit record

The live source was inspected in `src/components/Navbar.tsx`, `src/lib/i18n.tsx`, `src/App.tsx`, the rendered section components, `src/components/MermaidMark.tsx`, and the global reduced-motion rules. No source file was changed.

#### State contracts

| State | Current contract | Scope / language behavior |
| --- | --- | --- |
| `isMenuOpen` | Initial value `false`; toggled by the mobile Menu/X button; `scrollTo()` sets it to `false` after any nav selection. | Used by the mobile menu only; not language-dependent. |
| `isScrolled` | Initial value `false`; updated by the passive `scroll` listener to `window.scrollY > 24`; listener is removed during effect cleanup. | Affects header padding, nav height, backdrop state, logo scale, and related transitions at all widths; not language-dependent. |
| `activeSection` | Initial value `'sorun'`; updated by the IntersectionObserver to the most visible intersecting section ID. | Drives `aria-current` and active styling for desktop and mobile links; observer setup is recreated when `navLinks` changes after a language change. |

#### Scroll and observer contracts

- The scroll listener calls `handleScroll()` immediately, then listens with `{ passive: true }`, and removes the listener on cleanup.
- The frozen threshold is exactly `window.scrollY > 24`.
- Observer sections are derived from `copy.nav.links`, mapped through `document.getElementById(id)`, and filtered to existing `HTMLElement` targets.
- The observer uses `rootMargin: '-28% 0px -58% 0px'` and `threshold: [0, 0.2, 0.5, 0.8]`.
- Intersecting entries are sorted by descending `intersectionRatio`; the first entry becomes `activeSection`.
- Every observed section is registered, and the observer disconnects during cleanup. The effect depends on `navLinks`.
- Current observed IDs are `sorun`, `cozum`, `nasil-calisir`, `guven`, and `sss` in both languages.

#### Navigation and CTA contracts

- `scrollTo(id)` calls `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`, then closes the mobile menu.
- Navigation does not change the URL or hash.
- The logo button calls `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- `NavbarProps` contains `onCTAClick: () => void`.
- `handleCTA` is memoized with `useCallback` and invokes `onCTAClick`.
- Only the desktop action area currently renders the Navbar CTA; the mobile menu contains navigation links only.
- App owns `isContactOpen`, passes `openContact` to Navbar, and renders ContactModal with App-owned open/close callbacks.

#### Language contract

- Navbar consumes `useLanguage()` for `copy`, `language`, and `toggleLanguage()`.
- The language control displays `EN` when the current language is Turkish and `TR` when the current language is English.
- Its `aria-label` is sourced from `copy.nav.switchLanguage`; the same toggle logic is reused on desktop and mobile.
- `LanguageProvider` owns persistence in `localStorage` under `richtai-language` and calls `applyLanguageMetadata()` for title, description, and language metadata. Navbar does not own persistence or metadata.

#### Responsive and mobile contracts

- The header is fixed with `top-0 left-0 right-0 z-40`.
- Unscrolled header padding is `py-2` with nav height `h-16`; scrolled state is `py-1` with nav height `h-14`.
- The nav uses `max-w-6xl mx-auto px-3 sm:px-6` and `grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`.
- Desktop navigation and actions use `hidden lg:flex`; mobile controls and mobile menu use `lg:hidden`; `lg` remains the transition boundary.
- Desktop navigation occupies the center grid region; desktop language and CTA occupy the right region; mobile controls occupy the right grid column.
- The mobile menu uses Menu/X icons, a full-width dark surface, and nav links only. It uses `max-h-[28rem] opacity-100` when open and `max-h-0 opacity-0 pointer-events-none` when closed, with a 300ms max-height/opacity transition.
- Body scroll is not locked, Escape does not currently close the menu, and no mobile CTA is rendered inside the menu.

#### Brand contract

- Navbar consumes the shared `MermaidMark` component; it does not reference a source image path directly.
- The mark is wrapped in a `w-9 h-9 rounded-lg overflow-hidden` bordered shell.
- The current visual treatment includes a teal blur glow, a scrolled `scale-90` transform, and the `Richt Ai` wordmark with teal `Ai`.
- The logo button scrolls smoothly to the top of the page.
- Functional contract: preserve the Mermaid silhouette, wordmark recognition, and logo-to-top action. Visual glow, radius, scale, and color treatment are safe candidates for V2 replacement.

#### Accessibility contract and gaps

| Area | Current status | Phase 2 classification |
| --- | --- | --- |
| `header` / `nav` semantics | Present. | PRESERVE |
| Buttons and CTA semantics | Native buttons are used for logo, links, language, menu, and CTA. | PRESERVE |
| Active section | `aria-current="page"` is present on the active nav link. | PRESERVE |
| Language label | `aria-label` comes from the translated `switchLanguage` copy. | PRESERVE |
| Menu label | `aria-label` comes from translated `copy.nav.menu`. | PRESERVE |
| `aria-expanded` / `aria-controls` | Not currently present. | IMPROVE IN PHASE 2 |
| Keyboard focus | Native button focus is available; no Navbar-specific `.v2-focus-ring` is applied. | PRESERVE, then IMPROVE IN PHASE 2 if needed |
| Escape close | Not currently implemented. | IMPROVE IN PHASE 2 only if safely compatible |
| Reduced motion | Global reduced-motion rules shorten transitions and disable smooth scrolling; no Navbar-specific rule exists. | PRESERVE and verify |

#### Current visual structure

| Current treatment | Classification |
| --- | --- |
| Fixed header, three-column desktop placement, `lg` split, smooth scroll, active underline, and menu transition | BEHAVIOR TO PRESERVE |
| Backdrop blur and translucent navy surface | VISUAL TO REPLACE |
| Large shadow in scrolled state | VISUAL TO REPLACE |
| Teal logo glow | VISUAL TO REPLACE |
| Teal-to-cyan gradient CTA and hover glow/lift | VISUAL TO REPLACE |
| Rounded logo shell, rounded controls, and capsule/pill cues | VISUAL TO REPLACE |
| Existing short active underline treatment | VISUAL TO REPLACE or refine, while preserving active semantics |
| Mobile full-width dropdown structure and link-only content | BEHAVIOR TO PRESERVE; surface treatment may be replaced |

#### Current copy and Phase 2 staging

| Language | Current nav labels / CTA | Phase 2 labels / CTA | IDs |
| --- | --- | --- | --- |
| TR | Sorunlar, Çözüm, Nasıl çalışır?, Güven, S.S.S. / Ücretsiz tanışma görüşmesi | Sorunlar, Sistemler, Süreç, Hakkında, S.S.S. / Projeyi konuşalım | `sorun`, `cozum`, `nasil-calisir`, `guven`, `sss` |
| EN | Challenges, Solutions, How it works, Trust, FAQ / Book a free introduction call | Challenges, Systems, Process, About, FAQ / Start a project | `sorun`, `cozum`, `nasil-calisir`, `guven`, `sss` |

The first item remains Challenges / Sorunlar in Phase 2. Work / Projeler waits for the future Phase 6 Selected Work section and must not point to `sorun`.

#### Section ID contract

| ID | Owning component | Current section |
| --- | --- | --- |
| `sorun` | `src/components/Problem.tsx` | Problem / Challenges |
| `cozum` | `src/components/Solution.tsx` | Solution / Systems |
| `nasil-calisir` | `src/components/HowItWorks.tsx` | How It Works / Process |
| `guven` | `src/components/Trust.tsx` | Trust / Founder |
| `sss` | `src/components/FAQ.tsx` | FAQ |

### Frozen Navbar contracts

- fixed header positioning;
- `window.scrollY > 24` scroll threshold and passive listener cleanup;
- `activeSection` initial value `sorun`;
- current nav-derived observer IDs;
- observer root margin `-28% 0px -58% 0px` and thresholds `[0, 0.2, 0.5, 0.8]`;
- visible-section selection by highest intersection ratio;
- smooth `scrollIntoView` without URL/hash changes;
- mobile menu closes after a link selection;
- language switching through `toggleLanguage()`;
- CTA callback through `onCTAClick`;
- ContactModal ownership in App;
- `lg` desktop/mobile breakpoint;
- logo-to-top smooth scrolling;
- active `aria-current` semantics;
- stable section IDs and existing rendered section order;
- MermaidMark functional silhouette and wordmark interaction;
- reduced-motion and keyboard usability.

### Safe visual replacement areas

- blur-heavy translucent header background;
- large scrolled-state shadow;
- teal logo glow and scrolled logo scale treatment;
- gradient CTA, CTA glow, and hover lift;
- capsule/pill radius cues;
- old mobile dropdown surface treatment;
- old active underline styling, provided active semantics remain.

### Top five migration risks

| Rank | Risk | Cause | Likely failure | Guardrail |
| --- | --- | --- | --- | --- |
| 1 | Observer breakage | Replacing `navLinks`, IDs, or effect dependencies during markup work. | Active state stops tracking or highlights the wrong section. | Keep current IDs, root margin, thresholds, selection rule, cleanup, and `navLinks` dependency unchanged. |
| 2 | ID/label mismatch | Introducing Work / Projeler before Selected Work exists. | A visible label promises a destination that is still Challenges / Sorunlar. | Keep Challenges / Sorunlar for `sorun`; defer Work / Projeler to Phase 6 with a new ID. |
| 3 | Mobile menu regression | Replacing the max-height/opacity structure or forgetting close-after-selection. | Menu cannot open, close, or return focus/useful page state after navigation. | Test Menu/X, link selection, language toggle, overflow, and current body-scroll behavior at 320px and 375px. |
| 4 | CTA / modal disconnect | Changing the CTA element or callback path while restyling actions. | Navbar CTA no longer opens App-owned ContactModal. | Preserve `onCTAClick`, `handleCTA`, and App ownership; verify opening and closing. |
| 5 | TR/EN width pressure | Longer Turkish labels and language-dependent CTA widths. | Overlap, wrapping, clipped controls, or a broken 1024px transition. | Test both languages at 320px, 375px, 768px, 1024px, and desktop widths before completion. |

### 2. Finalize V2 labels and ID-safe i18n mapping

- [ ] Verify the exact Phase 2 EN/TR visible-label mapping documented above against the live source.
- [ ] Preserve Challenges / Sorunlar for `sorun` and migrate only Systems / Sistemler, Process / Süreç, About / Hakkında, and FAQ / S.S.S.
- [ ] Migrate CTA copy only to EN `Start a project` and TR `Projeyi konuşalım`, preserving `copy.nav.links`, array shape, IDs, language parity, and persistence behavior.
- [ ] Keep Work / Projeler staged for the Phase 6 Selected Work handoff; do not create or point to Selected Work during Phase 2.
- [ ] Do not begin the broader copy rewrite planned for a later phase.

Implementation note: Turkish Navbar labels are Sorunlar, Sistemler, Süreç, Hakkında, and S.S.S., with CTA `Projeyi konuşalım`. English Navbar labels are Challenges, Systems, Process, About, and FAQ, with CTA `Start a project`. Both languages retain exactly five links with the unchanged ID sequence `sorun`, `cozum`, `nasil-calisir`, `guven`, `sss` and unchanged nav array shape. Work / Projeler remains deferred to the Phase 6 Selected Work handoff. The existing Navbar already consumes `copy.nav.links` and `copy.nav.cta`, so no Navbar source change was required; unrelated translation groups, menu labels, language labels, IDs, persistence, and metadata behavior were left unchanged.

### 3. Prepare semantic V2 Navbar structure

- [ ] Restructure only the Navbar into a clear semantic `header` → `.v2-container` → brand, navigation, and controls hierarchy.
- [ ] Keep the MermaidMark plus wordmark arrangement recognizable.
- [ ] Avoid excessive wrappers, dashboard-like surfaces, and duplicated controls.
- [ ] Preserve desktop and mobile behavior contracts while changing presentation.

Implementation note: The Navbar now uses a single `navbar-v2__shell` wrapper containing the background layer, a semantic `nav`, and the mobile menu. The nav adopts `.v2-container` for its width/gutter shell while retaining the existing three-column grid and breakpoint utilities. Stable hooks were added for the Navbar, shell, inner nav, brand, desktop navigation, desktop actions, mobile controls, and mobile menu. `navLinks.map(...)`, `aria-current`, `scrollTo`, `toggleLanguage`, `handleCTA`, `copy.nav.cta`, Menu/X state, open/closed classes, and all frozen observer/scroll logic are unchanged. No visual-system CSS was added, and no locked file changed. `pnpm typecheck` passed.

### 4. Apply the desktop Bold Systems visual system

- [ ] Use a full-width fixed Carbon/near-Carbon header with a thin restrained border.
- [ ] Remove the floating glass-pill, heavy blur, large shadow, gradient-border, neon, and capsule-driven treatment from the Navbar only.
- [ ] Use compact spacing, minimal radius, strong wordmark presence, and precise navigation density.
- [ ] Use Signal Lime sparingly for high-value emphasis and Electric Cyan only for secondary/system states.
- [ ] Keep the active state precise through a short rule, marker, or stronger text rather than decorative glow.

Implementation note: Desktop Navbar styling now uses the V2 Carbon surface and dark border variables, with desktop blur and scrolled shadow removed. Navigation uses the V2 display font and quieter secondary text, while the active link keeps a short Signal Lime marker. The desktop logo glow was removed while MermaidMark, the wordmark, logo-to-top behavior, and all existing interaction logic remain intact. The old desktop glass/blur, shadow, glow, and teal/cyan navigation noise were removed or replaced; CTA and language styling remain intentionally deferred, and mobile was not fully redesigned. Behavior was preserved: nav scrolling, active-section tracking, language switching, CTA modal behavior, and mobile menu logic are unchanged. Visual verification passed in the available 1280px desktop preview for both English and Turkish, with no horizontal overflow; 1024px and 1440px previews were not available in this run.

### 5. Rework brand, language control, and CTA presentation

- [ ] Preserve MermaidMark silhouette geometry and brand recognition; do not create or recolor a source asset.
- [ ] Design the language control as a compact, obvious, keyboard-usable control that is not visually dominant.
- [ ] Style the CTA with the approved EN/TR labels, compact 8–10px radius, Carbon text on Signal Lime where appropriate, no glow, and no hover lift.
- [ ] Preserve the existing `onCTAClick` → ContactModal behavior and do not create a global `.v2-button-*` system.

Implementation note: The desktop brand keeps the existing MermaidMark and logo-to-top button while using a crisp restrained frame, quieter Space Grotesk wordmark, primary Richt text, and Signal Lime for the Ai accent without glow. The desktop language control is a compact transparent Carbon-compatible control with V2 border, secondary text, hover, and focus treatment. The desktop CTA now uses the approved translated labels with a Signal Lime fill, Carbon text, compact radius, no gradient, glow, shadow, or hover lift. No arrow/icon was added. `handleCTA` and the App-owned ContactModal callback remain intact. The available 1280px desktop preview was checked in English and Turkish without horizontal overflow; mobile redesign was not started.

### 6. Rework active and scrolled states without behavioral drift

- [ ] Preserve the active-section observer, current IDs, root margin, thresholds, and `isScrolled` threshold unless a concrete bug is discovered.
- [ ] Add only a small visual difference between top-of-page and scrolled states through border, background density, or restrained height/padding changes.
- [ ] Avoid transform jumps, large shrink animations, blur-heavy transitions, dramatic shadows, or changes that destabilize Hero clearance.

Implementation note: The active desktop item remains primary on-dark text with a centered 1.25rem Signal Lime marker; inactive links use secondary text and hover now strengthens text only, so hover cannot compete with the active rule. The top state uses Carbon with a restrained border, while `data-scrolled="true"` changes only the desktop surface to Graphite with the same restrained border. Desktop header height/padding is normalized to a stable 4rem / 0.5rem treatment, and the desktop mark and wordmark no longer scale or change size on scroll; mobile state styling remains outside this pass. The IntersectionObserver logic, IDs, root margin, thresholds, cleanup, and `navLinks` dependency are unchanged. The scroll threshold remains exactly `window.scrollY > 24`. English and Turkish were checked at the available 1280px desktop width with no overflow; 1024px and 1440px+ were not available in this run. Checklist 7 mobile redesign was not started.

### 7. Rebuild the mobile Navbar/menu presentation

- [ ] Create an intentional mobile top bar containing brand, language control, menu control, and CTA access without horizontal overflow at 320px.
- [ ] Present the mobile menu as part of the system, not a generic floating dropdown card or stacked-chip surface.
- [ ] Preserve menu open/close, menu-link scrolling, close-after-selection, language switching, CTA access, and body-scroll behavior.
- [ ] Keep mobile tap targets approximately 44px where practical and avoid excessive radius or glass-modal treatment.

Implementation note: The mobile top bar now uses the Carbon/Graphite surface direction with a restrained border and no blur, shadow, or glow. The MermaidMark frame and Space Grotesk wordmark keep stable geometry, and the mobile language control and Menu/X button use compact V2 borders, secondary text, focus rings, and practical touch targets. The opened menu is a full-width Carbon/Graphite header extension with thin borders; links are full-width editorial rows with separators and a small Signal Lime active marker instead of chip backgrounds. The existing translated `copy.nav.cta` is now available as a full-width Signal Lime CTA inside the open menu; it closes the menu before invoking the unchanged `handleCTA` → App-owned ContactModal path. Body scroll remains unlocked as before. The available 467px desktop-browser viewport was used for mobile-style checks; 320px, 375px, 430px, 768px, and 1023px emulation were not available. Desktop V2 remained intact in the existing 1280px layout check.

### 8. Preserve accessibility and restrained motion

- [ ] Preserve semantic `nav`, button semantics, visible focus, keyboard navigation, sufficient contrast, and usable language controls.
- [ ] Add or preserve `aria-expanded` and `aria-controls` where useful without broad accessibility refactoring outside Navbar.
- [ ] Preserve or safely add Escape-to-close only if it fits the existing behavior contract.
- [ ] Limit motion to color/border transitions, active-rule movement, menu transition, and a restrained 3–4px arrow shift if used.
- [ ] Respect `prefers-reduced-motion`; do not add glow pulses, bounce, spring physics, gradients, scramble text, or reveal systems.

Implementation note: The mobile Menu/X button now exposes `aria-expanded` and `aria-controls="navbar-mobile-menu"`; the menu has that stable ID and uses `aria-hidden` while closed. Escape closes only an open mobile menu through a cleaned-up keyboard listener. The brand, desktop/mobile nav links, language controls, menu toggle, desktop CTA, and mobile CTA use the existing `.v2-focus-ring` primitive. Mobile language/menu controls now use 2.75rem minimum touch dimensions; menu rows and CTA remain 2.75rem. Closed-menu links and CTA receive `tabIndex={-1}` and the menu is `aria-hidden`, preventing hidden controls from entering the keyboard sequence while preserving the max-height/opacity transition. Existing global `prefers-reduced-motion` handling is sufficient; no Navbar-specific reduced-motion CSS was needed. The motion audit removed the hidden glow and obsolete brand scale/wordmark-size transitions, shortened state and menu transitions, and kept only restrained color, border, active-marker, max-height, opacity, and small padding/height transitions. Relevant checks performed at the available 467px mobile and 1280px desktop previews: focus hooks present, ARIA relationship present, closed menu not tabbable by explicit tab indices, menu navigation closes after selection, Escape closes the menu, CTA closes the menu and opens ContactModal, language toggle works, active `aria-current` remains, no overflow, and body scroll remains unlocked. Observer/scroll/CTA/language contracts remain unchanged; Checklist 9 full verification was not started.

### 9. Verify functional contracts and run project checks

- [ ] Verify desktop and mobile nav links, active state, scroll state, language switch, CTA → ContactModal, menu open/close, close-after-selection, section scrolling, body-scroll behavior, and Hero clearance.
- [ ] Verify no horizontal overflow and no changes to Hero or any other section.
- [ ] Run `pnpm typecheck`.
- [ ] Run `pnpm lint`.
- [ ] Run `pnpm build`.
- [ ] Record exact outcomes and stop on Phase 2-caused failures rather than fixing unrelated issues.

Verification note — B. CHECKLIST 9 PASS WITH DOCUMENTED ENVIRONMENT LIMITATIONS: Source contracts remain intact: `window.scrollY > 24`, passive/immediate scroll handling and cleanup, `activeSection` initial `sorun`, nav-derived IDs, `document.getElementById`, observer `rootMargin: '-28% 0px -58% 0px'`, thresholds `[0, 0.2, 0.5, 0.8]`, intersection-ratio ordering, cleanup, and `navLinks` dependency all verified. Browser checks passed at the available 467px mobile and 1280px desktop previews: desktop/mobile nav visibility, correct section scrolling with no URL/hash mutation, active state updates, mobile close-after-selection and reopen, logo-to-top, TR → EN and EN → TR labels/CTA/language control, CTA opening the App-owned ContactModal, mobile CTA closing the menu first, `aria-expanded`/`aria-controls`, closed-menu `tabIndex=-1`, Escape-to-close, focus-ring hooks, unlocked body scroll, no horizontal overflow, and usable Hero clearance. Section IDs remain `sorun`, `cozum`, `nasil-calisir`, `guven`, `sss`; all owning sections exist and Work / Projeler was not introduced. The `lg` boundary and desktop/mobile control visibility were confirmed from source and browser. Motion remains limited to restrained color, border, background, active-marker, menu max-height/opacity, and small padding/height transitions; global reduced-motion handling remains in place. Locked areas and App/ContactModal ownership were unchanged. `pnpm typecheck` PASS, `pnpm lint` PASS, and `pnpm build` PASS; build emitted only the informational `VITE_SITE_URL is not set` message. Exact 1023px/1024px emulation and reduced-motion emulation were unavailable; no source/config/package files changed during verification.

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

- [x] Audit and freeze the current Navbar contracts
- [x] Finalize V2 labels and ID-safe i18n mapping
- [x] Prepare semantic V2 Navbar structure
- [x] Apply the desktop Bold Systems visual system
- [x] Rework brand, language control, and CTA presentation
- [x] Rework active and scrolled states without behavioral drift
- [x] Rebuild the mobile Navbar/menu presentation
- [x] Preserve accessibility and restrained motion
- [x] Verify functional contracts and run project checks
- [ ] Perform bilingual responsive QA and final Phase 2 readiness review
