# Richt Ai V2 — Phase 3: Hero Static

## Phase 3 objective

Replace the current V1 image-led Hero with the static foundation of the Richt Ai V2 Bold Systems direction.

The Hero should communicate:

> Richt builds connected digital systems that move work forward.

The static Hero will present the customer-facing and operational path as one connected system:

Website → Messages → AI → CRM → Calendar → Team

Phase 3 owns the Hero’s static architecture, copy, desktop/tablet composition, system canvas, surfaces, spacing, typography, CTA/reassurance presentation, and removal of obsolete Hero-only V1 visual language.

Phase 3 does not implement Hero motion, kinetic node transitions, pulsing or flowing signals, scroll choreography, a dedicated mobile redesign, Selected Work, or later homepage sections.

Execution order remains:

Phase 3 static → Phase 5 mobile → Phase 4 motion

## Locked boundaries

Do not change:

- Navbar V2 behavior or visual system;
- App.tsx ownership, page order, routing, or modal ownership unless the audit proves a genuine integration defect;
- Problem, StatisticsStrip, Solution, How It Works, Trust, Founder, FAQ, Final CTA, Footer, or ContactModal;
- section ID anasayfa;
- Hero({ onCTAClick }) callback contract;
- the App-owned ContactModal flow;
- metadata, Supabase, packages, lockfiles, Vite/PostCSS/Tailwind configuration, or unrelated assets;
- Phase 4 motion scope;
- Phase 5 dedicated mobile structure and refinement scope.

Do not add a dependency or generate a new Hero asset by default. Prefer semantic HTML, CSS, existing iconography, and the V2 foundation already present in the repository.

## Current Hero audit

### Rendering and ownership

- Component: src/components/Hero.tsx.
- Props: HeroProps { onCTAClick: () => void }.
- The component calls useLanguage() and reads copy, language, and copy.workflow.connectedSystems.
- src/App.tsx owns the contact modal state and passes the stable openContact callback to both Navbar and Hero. Hero has no modal-local state and does not route or mutate the URL.
- Current page order is: Navbar → Hero#anasayfa → StatisticsStrip#istatistik → Problem#sorun → Solution#cozum → HowItWorks#nasil-calisir → Trust#guven → FAQ#sss → FinalCTA#final-cta → Footer → ContactModal.
- StatisticsStrip renders immediately after Hero and owns its own counter IntersectionObserver; Phase 3 must not alter that relationship.
- useRevealObserver(language) is initialized by App.tsx for the page-wide [data-reveal] system. Hero currently participates through a data-reveal/reveal wrapper.

### Current structure and layout

- Hero section ID is anasayfa.
- Current section classes include hero-section, relative, overflow-hidden, responsive top/bottom padding, and the conditional hero-section--tr class when language === 'tr'.
- Current top/bottom spacing is pt-28 pb-3, sm:pt-24 sm:pb-10, and lg:pt-36 lg:pb-20; the large top padding provides clearance below the fixed Navbar.
- The content wrapper is data-reveal reveal relative z-10 max-w-6xl mx-auto px-5 sm:px-6.
- The content grid uses items-center, responsive gaps, and lg:grid-cols-[0.84fr_1.16fr]; at xl it gains a larger gap.
- The left copy is centered until xl, then left-aligned. It contains the headline, support copy, CTA, desktop reassurance, and a compact mobile reassurance block.
- The right region is an image frame followed by a connected-systems rail. The image is /images/ai-operations-hero-v2.png; the asset remains in the repository but is planned for removal from active Hero usage.

### Current copy and dependencies

- TR copy.hero.headline is İşletmenizin dijital iletişimini; TR headlineAccent is daha akıllı hâle getirin..
- EN copy.hero.headline is Make your business communication; EN headlineAccent is smarter by design..
- copy.hero.subheadline is the current V1 supporting copy and must be replaced only with the approved Phase 3 support copy below.
- copy.hero.cta, duration, noCommitment, and direct drive the Hero CTA and reassurance blocks.
- The Hero currently reads copy.workflow.aria, copy.workflow.connectedSystemsLabel, and copy.workflow.connectedSystems; the connected-systems array is currently four items: TR Web sitesi, WhatsApp, CRM, Takvim; EN Website, WhatsApp, CRM, Calendar.
- src/components/AIWorkflow.tsx exists and consumes the broader copy.workflow.* group, but it is not rendered by App.tsx. Its workflow.aria field is still a live source consumer if the component is rendered later; Phase 3 must not refactor or remove that dormant component or its unrelated workflow fields.
- Repository usage confirms connectedSystems and connectedSystemsLabel are currently read by Hero.tsx only, while workflow.aria is read by both Hero.tsx and AIWorkflow.tsx. Checklist 2 should therefore prefer a minimal Hero-specific localized canvas extension and should not repurpose workflow.aria without a compatibility decision.

### Current visual and motion hooks

- V1 visual language includes the .hero-visual, .hero-visual__frame, .hero-visual__frame img, and .hero-connected-systems* selector family.
- The Hero uses a radial-glow layer, a bg-gradient-to-b overlay, text-gradient-teal, image-frame shadow/radius treatment, and the existing V1 navy/teal palette.
- The Hero uses animate-fade-in-up and animate-delay-* classes on copy elements, plus the shared [data-reveal] wrapper.
- The connected rail currently uses connected-status-pulse, connected-node-pulse, and connected-signal-sweep animations, with a reduced-motion override.
- Hero-specific selectors and keyframes must be usage-searched before removal. Shared .reveal, global animation helpers, and any selector consumed by another section must remain unless separately proven unused.

### Responsive and accessibility baseline

- Base/mobile uses a one-column grid, centered copy, the visual region after the subheadline, CTA after the visual, and compact mobile reassurance last. At max-width: 420px, workflow-event metadata is hidden, Hero meta spacing is increased to 1rem, and the reassurance separator is hidden.
- At max-width: 639px, hero-copy becomes display: contents; explicit order is heading 1, subheadline 2, visual 3, CTA 4, and meta 5. The connected rail becomes a two-column grid, its connectors are hidden, the Hero heading is 2.15rem with line-height 1, and mobile reassurance uses two rows.
- At min-width: 640px, the connected rail returns to a horizontal flex arrangement and the sm utility values apply: section pt-24/pb-10, larger heading/support copy, CTA margin-top, and desktop reassurance visibility. There is no Hero-specific min-width: 768px rule; 768px inherits this tablet behavior.
- At min-width: 1024px, lg utilities apply: section pt-36/pb-20, the two-column grid is lg 0.84fr/1.16fr, copy remains centered until xl, and the visual stays in the right grid column. At min-width: 1280px, the visual receives 1.5rem left padding, Turkish reassurance is forced to one line, and a vertical visual separator is added. No current hero-section--tr min-height or padding override exists.
- The current visual region exposes copy.workflow.aria; the image has a fixed English alt string; the CTA is a native button; the outer visual region and inner connected-systems rail both carry the same aria-label; and the section uses one h1.
- Navbar V2 is fixed with z-40. Base/sm JSX states use py-2 + h-16 at the top (80px total) and py-1 + h-14 when scrolled (64px total). At min-width: 1024px, CSS overrides both states to 0.5rem vertical padding and a 4rem inner height (80px total), so desktop scroll does not change effective header height. Hero top padding is 7rem base, 6rem at sm, and 9rem at lg+, which currently clears the fixed header; this clearance must be preserved without modifying Navbar.

## Frozen functional contracts

- Keep Hero({ onCTAClick }) and invoke the callback from the single primary Hero CTA.
- Keep ContactModal state and ownership in App.tsx; do not introduce Hero-local modal state.
- Do not add routing, URL/hash mutation, or navigation side effects.
- Keep section ID anasayfa and the existing App render order.
- Keep useLanguage() as the Hero translation source and preserve TR/EN parity.
- Preserve Navbar fixed-header clearance and the immediate StatisticsStrip relationship.
- Preserve a single CTA and a single reassurance/meta block per responsive presentation; do not duplicate content to solve layout.
- Keep existing language persistence and unrelated translation groups unchanged.
- Retain global reduced-motion behavior for any remaining static-state transitions; Phase 3 adds no continuous motion.
- Leave Navbar source and CSS untouched, preserve safe fixed-header clearance, add no dependencies, and leave the existing Hero asset physically intact even after removing it from active usage.
- Do not begin Phase 4 motion or the dedicated Phase 5 mobile redesign from this phase.

## Approved TR/EN Hero copy

The following copy is mandatory for the Phase 3 Hero:

### English

Headline: Systems that keep your business moving.

Supporting copy: AI, automation and digital experiences designed to work together — not as separate tools.

### Turkish

Headline: İşletmenizi ileri taşıyan sistemler kuruyoruz.

Supporting copy: Yapay zekâ, otomasyon ve dijital deneyimleri ayrı araçlar değil, birlikte çalışan bir sistem olarak tasarlıyoruz.

The implementation should preserve the existing two-field headline rendering if practical by splitting each exact sentence across the existing headline and headlineAccent fields without changing the displayed sentence. Do not add manual br elements unless bilingual testing proves a strong, stable reason.

## CTA and reassurance copy decision

Use a narrow Hero-specific copy alignment for V2 coherence:

- EN Hero CTA becomes the existing Navbar CTA: Start a project.
- TR Hero CTA becomes the existing Navbar CTA: Projeyi konuşalım.
- Keep the existing reassurance meanings and translation fields (duration, noCommitment, direct) unless the static composition requires a small presentation-only adjustment.
- Do not rewrite unrelated copy, create new CTA behavior, or change Final CTA/contact copy.

This keeps the Hero and Navbar action language consistent while preserving the existing conversion and trust contract.

## Static operational-system canvas

Replace the photo-led visual with one semantic, static system canvas built in Hero.tsx and styled in src/index.css.

### Concrete architecture

- Use one figure-like canvas surface, not a wall of dashboard cards.
- Use six labeled nodes: Website, Messages, AI, CRM, Calendar, and Team; localize them as Web sitesi, Mesajlar, Yapay zekâ, CRM, Takvim, and Ekip.
- Use one clear operational route: Website → Messages → AI → CRM → Calendar → Team.
- Give AI one visually stronger central/processing treatment using Signal Lime. Use Electric Cyan only for secondary system signals or selected node details.
- Use thin, static connectors between nodes. Keep connectors structural and decorative, with aria-hidden="true"; they must not be animated in Phase 3.
- Use one small uppercase status/section label, based on the existing connected-systems label, above the route. Do not add explanatory paragraphs or process copy.
- Keep a restrained Graphite canvas on the Carbon Hero surface, thin V2 borders, compact 6–8px UI detail radii, and no shadow-heavy nested cards.
- Use light asymmetry: a clear primary horizontal route with a modest lower Team endpoint or supporting rail so the visual feels designed without becoming a dashboard.
- Expose a concise accessible description for the whole canvas through a localized label/description. Do not expose every connector as a separate interactive element.
- Phase 4 may later animate connector travel, node activation, and operational state changes; Phase 3 must render the final static state only.

## Desktop/tablet composition decision

- Use a full-width Carbon Hero aligned to the existing .v2-container/Navbar content edges.
- Keep an editorial copy block on the left and the static system canvas on the right.
- Replace the current 0.84fr / 1.16fr image-led balance with a more readable V2 target around 0.92fr / 1.08fr, using minmax(0, …) tracks and a deliberate gap. Final values must be chosen from the 1024px and 1280px pressure checks.
- Make the headline substantially larger and more editorial than V1 while keeping the Turkish sentence legible and balanced at 1024px, 1280px, and 1440px+.
- Limit support-copy width so it reads as a short positioning statement rather than a paragraph wall.
- Keep the CTA prominent but compact, and keep reassurance visibly secondary below it.
- Use whitespace and alignment to create premium scale; do not fill the composition with extra panels.
- Below desktop, keep the current single-column fallback structurally safe. Do not create the dedicated Phase 5 mobile system-canvas composition in this phase.

## V2 visual language

Use the existing Phase 1 foundation:

- Carbon Black #080A0D for the Hero field;
- Graphite #10141A and Elevated Graphite #171C23 for the canvas and node hierarchy;
- Bone White #F4F2EB for primary copy;
- Signal Lime #C7FF4A for the primary AI/status emphasis;
- Electric Cyan #50DFFF for restrained secondary system accents;
- Steel #89939E and Muted #626B75 for support copy and metadata;
- Space Grotesk for display/headings and Inter for body copy;
- borders over shadows, 16px surfaces only where genuinely needed, 8–10px controls, and 6–8px UI details.

Avoid glassmorphism, glow-heavy backgrounds, gradient headline text, giant rounded cards, nested-card stacks, stock/futuristic AI imagery, decorative particles, random blobs, neon effects, and competing accent colors.

## Accessibility and static-state considerations

- Keep one real h1, with a localized exact headline.
- Keep the CTA a native button with the existing callback and visible focus treatment.
- Give the system canvas one concise localized accessible label/description; do not turn each connector into screen-reader noise.
- Mark connector lines, status dots, and purely decorative rules aria-hidden="true".
- Expose node labels as meaningful text in a semantic list/figure structure where useful, without making the canvas interactive.
- Provide a meaningful localized replacement for the removed image’s alt/description through the canvas label rather than retaining a misleading photo alt.
- Preserve contrast against Carbon/Graphite surfaces and the existing .v2-focus-ring behavior.
- Do not add hover-dependent meaning, keyboard interactions, motion, parallax, or pointer-follow behavior.
- Keep reduced-motion behavior safe even though Phase 3 should remove Hero-specific continuous animation.

## Phase 4 motion handoff boundary

Phase 3 ends with a visually complete static state. It may remove obsolete V1 Hero animation hooks, but it must not add:

- animated connector travel;
- node activation sequences;
- pulsing dots or looping status changes;
- scroll-driven Hero choreography;
- mouse-follow or parallax behavior;
- reveal orchestration specific to the new canvas.

Phase 4 may animate the approved static canvas only after the static hierarchy, copy, accessibility, and desktop/tablet composition are accepted.

## Phase 5 mobile handoff boundary

Phase 3 must not become a dedicated mobile redesign. Preserve a usable responsive fallback and validate that no known overflow or overlap is introduced. Phase 5 owns:

- mobile content order;
- mobile system-canvas simplification;
- mobile CTA placement;
- narrow-screen spacing and typography pressure;
- mobile Hero height and dedicated mobile visual hierarchy.

## Implementation risks and guardrails

| Risk | Guardrail |
| --- | --- |
| New Hero visual becomes a dashboard wall | Keep one canvas, one route, six nodes, one status label, and a single clear focal AI node. |
| English/Turkish line wrapping becomes unbalanced | Test exact copy at 1024px, 1280px, and 1440px+ before finalizing widths or breaks. |
| CTA disconnects from ContactModal | Preserve onCTAClick, the App callback, and one native Hero CTA; verify modal open/close. |
| Fixed Navbar overlaps the new Hero | Preserve the current clearance contract and inspect top spacing at the desktop boundary. |
| Dormant AIWorkflow copy or component is accidentally changed | Search consumers before editing; limit i18n changes to Hero-connected labels and approved Hero fields. |
| Shared CSS is removed accidentally | Search every Hero-specific selector/keyframe before deleting; retain shared .reveal and global helpers used elsewhere. |
| Phase 4 motion leaks into static work | Keep connectors, nodes, and statuses static; remove old motion only where it is Hero-specific and obsolete. |
| Mobile scope expands prematurely | Preserve fallback structure only; defer mobile-specific composition to Phase 5. |
| Existing asset cleanup causes unrelated breakage | Remove /images/ai-operations-hero-v2.png from Hero usage but leave the asset file untouched. |

## Ordered implementation checklist

Implement exactly one checklist item per Codex run. Stop after each item and update this document before waiting for explicit approval.

### 1. Audit and freeze Hero contracts

- [x] Confirm the current Hero props, App callback ownership, section ID, render order, Navbar clearance, i18n dependencies, CSS hooks, asset dependency, breakpoints, and reveal/motion consumers against source.
- Expected files: implementation_update.md only.

Audit note — Checklist 1 complete: HeroProps is exactly HeroProps { onCTAClick: () => void }; Hero has no local state and destructures copy and language from useLanguage(). It consumes copy.hero.headline, headlineAccent, subheadline, cta, duration, noCommitment, and direct, plus copy.workflow.aria, connectedSystemsLabel, and connectedSystems. The CTA directly invokes onCTAClick; App owns openContact, closeContact, isContactOpen, and ContactModal. The stable section ID is anasayfa and the frozen App order is Navbar → Hero → StatisticsStrip → Problem → Solution → HowItWorks → Trust → FAQ → FinalCTA → Footer → ContactModal. The Hero uses the two-span headline, separate desktop/mobile reassurance blocks, an image frame at /images/ai-operations-hero-v2.png, a connected-systems rail, duplicate visual aria-labels, a fixed English image alt, data-reveal/reveal, and animate-fade-in-up/animate-delay classes. Workflow consumer audit found AIWorkflow.tsx is not rendered by App, but it consumes workflow.aria; connectedSystems and connectedSystemsLabel are currently Hero-only consumers. Checklist 2 must prefer Hero-specific canvas translations unless compatibility is proven. CSS classification is: hero-section, hero-section--tr, hero-copy*, hero-heading, hero-meta*, hero-visual*, hero-connected-systems*, and connected-status-pulse/connected-node-pulse/connected-signal-sweep are Hero-only; radial-glow is currently Hero-only; text-gradient-teal is shared by Hero, Solution, and FinalCTA; reveal is shared by multiple sections through useRevealObserver; animate-fade-in-up and animate-delay-* are shared by AIWorkflow and ContactModal and must be preserved; uncertain selectors must be preserved until usage search proves otherwise. The Hero asset is referenced only by Hero.tsx and remains physically untouched. Current responsive behavior is preserved as documented above, and Navbar clearance is safe at base/sm and lg+ under current source rules. StatisticsStrip is immediately adjacent with its own observer/counters and remains untouched. Accessibility baseline is one h1, native CTA, static non-interactive rail, duplicate aria-labels on visual wrappers, decorative dots/connectors partly aria-hidden, and inherited CTA focus styling. No source/config/package/asset file changed.

### 2. Finalize approved Hero copy and i18n scope

- [x] Update only the approved Hero headline/support fields and the narrowly-scoped Hero CTA alignment.
- [x] Prefer a minimal Hero-specific localized canvas extension; change connected-system workflow labels only if repository compatibility is explicitly proven, and do not repurpose workflow.aria without auditing AIWorkflow.
- [x] Preserve unrelated translation groups and the dormant AIWorkflow contract.
- Expected files: src/lib/i18n.tsx, implementation_update.md.

Implementation note — Checklist 2 complete: TR now reconstructs exactly `İşletmenizi ileri taşıyan` + `sistemler kuruyoruz.` with support copy `Yapay zekâ, otomasyon ve dijital deneyimleri ayrı araçlar değil, birlikte çalışan bir sistem olarak tasarlıyoruz.` and CTA `Projeyi konuşalım`. EN now reconstructs exactly `Systems that keep your business` + `moving.` with support copy `AI, automation and digital experiences designed to work together — not as separate tools.` and CTA `Start a project`. The existing reassurance values duration, noCommitment, and direct are unchanged. Both languages now have the identical hero.systemCanvas shape with label, aria, and website/messages/ai/crm/calendar/team nodes. Every workflow.* field is unchanged, and no unrelated translation group changed. TypeScript typecheck passed before Checklist 3.

### 3. Replace image-led Hero with semantic static structure

- [x] Refactor Hero.tsx to render the approved copy and a semantic two-column Hero structure without the photo frame or image overlay.
- [x] Keep one CTA, one reassurance presentation per responsive mode, id="anasayfa", useLanguage(), and onCTAClick.
- Expected files: src/components/Hero.tsx, implementation_update.md.

Implementation note — Checklist 3 complete: Removed the active Hero image and old connected-systems rail from JSX, including all copy.workflow consumption. Added the semantic hero-v2 shell with hero-v2__layout, hero-v2__copy, hero-v2__heading, hero-v2__support, hero-v2__actions, hero-v2__meta, hero-system, hero-system__label, and hero-system__stage hooks. The system figure reads only copy.hero.systemCanvas. The stage is intentionally an empty semantic scaffold; final six-node architecture, connectors, focal AI treatment, and canvas styling remain deferred to Checklist 4. The single native CTA still invokes onCTAClick, section ID anasayfa and App ordering are unchanged, and ContactModal remains App-owned. The Hero no longer renders the image, workflow rail, radial glow, gradient overlay, headline gradient, Hero fade-up classes, or Hero data-reveal wrapper. Reassurance meanings are preserved in one combined responsive meta block; no dedicated Phase 5 mobile restructure was started. No CSS was changed, no new motion was added, and no Phase 4 or Phase 5 scope was started. pnpm typecheck passed.

### 4. Build the static operational-system canvas

- [x] Implement the six-node Website → Messages → AI → CRM → Calendar → Team canvas with static connectors, localized labels, one status label, and accessible grouping.
- [x] Keep decorative lines/dots non-interactive and static.
- Expected files: src/components/Hero.tsx, src/index.css, implementation_update.md.

Implementation note — Checklist 4 complete: Hero now renders a reusable six-node semantic `ol`/`li` route sourced from `copy.hero.systemCanvas.nodes`, preserving the localized sequence Website → Messages → AI → CRM → Calendar → Team (Web sitesi → Mesajlar → Yapay zekâ → CRM → Takvim → Ekip in Turkish). The asymmetric 3×3 placement gives Website upper-left, Messages left, AI center, CRM upper-right, Calendar right, and Team lower-center. A single translated figcaption remains the canvas label, while decorative SVG connectors use `aria-hidden="true"` and `focusable="false"`; nodes are not interactive or focusable. AI is the static Signal Lime focal node, with restrained Electric Cyan secondary detail and Team handoff emphasis. No hardcoded labels, assets, `copy.workflow.*` dependencies, animation, or moving signal were introduced.

### 5. Apply desktop/tablet V2 composition and typography

- [x] Align Hero surfaces and container geometry with Navbar V2 and Phase 1 tokens.
- [x] Establish the editorial left-copy/right-canvas composition, bilingual-safe headline scale, support-copy width, CTA prominence, and deliberate whitespace at 1024px, 1280px, and 1440px+.
- Expected files: src/components/Hero.tsx, src/index.css, implementation_update.md.

Implementation note — Checklist 5 complete: The Hero uses the shared `.v2-container`, Carbon Black field, and an intentional `0.92fr / 1.08fr` left-copy/right-canvas grid from `lg` onward. Responsive spacing remains 7rem base, 6rem at `sm`, and 9rem at `lg` on top with restrained bottom padding. The headline uses Space Grotesk, Bone White, fluid sizing, controlled line-height, and no gradient or manual line break; support copy remains Inter/Steel with a 34rem desktop cap. The Graphite canvas uses a restrained 16px surface, contained route, and borders over shadows. Below `lg`, the existing stacked fallback remains contained without starting the dedicated Phase 5 mobile redesign. QA covered EN at approximately 1280px desktop-style and TR at approximately 467px mobile-style; exact 1024px and 1440px emulation was unavailable. Navbar clearance and canvas containment were visually safe, no Phase 4 motion was added, and `pnpm typecheck` passed.

### 6. Refine CTA and reassurance presentation

- [x] Apply the approved compact CTA treatment and quiet secondary reassurance without changing callback behavior or unrelated site copy.
- [x] Confirm the Hero action language matches the Navbar staging in both languages.
- Expected files: src/components/Hero.tsx, src/index.css, src/lib/i18n.tsx only if copy alignment was not completed in Checklist 2, implementation_update.md.

Implementation note — Checklist 6 complete: Added the Hero-local `.hero-v2__cta` treatment while leaving the shared `.btn-primary` unchanged for ContactModal and FinalCTA. The Hero CTA remains a native button with unchanged `onCTAClick`, using Signal Lime, Carbon text, a compact V2 radius, visible focus ring, no shadow/glow/lift/scale, and only restrained color transitions. The ArrowRight is decorative and `aria-hidden`. Turkish remains `Projeyi konuşalım` and English remains `Start a project`, matching Navbar staging. Duration, no-commitment, and direct-contact reassurance meanings and translations remain intact in a quiet bordered meta row with decorative icons/separators.

### 7. Remove obsolete Hero-only V1 visual and motion artifacts

- [x] Usage-search and remove the Hero-only radial glow, gradient headline/overlay, image-frame, connected-rail, pulse/sweep, and Hero-specific reveal/fade hooks that are no longer used.
- [x] Keep shared/global selectors and animations required by other sections.
- Expected files: src/components/Hero.tsx, src/index.css, implementation_update.md.

Implementation note — Checklist 7 complete: Repository usage search proved the obsolete Hero-only `.hero-section`, `.hero-section--tr`, `.hero-noise`, `.hero-heading`, `.hero-meta*`, `.hero-copy*`, `.hero-visual*`, `.hero-connected-systems*`, `.radial-glow`, and connected pulse/sweep keyframes were unused by the active V2 Hero and removed. The Hero-only legacy image/rail/reveal hooks are no longer rendered. Shared `.btn-primary`, `.text-gradient-teal`, `.reveal`, `animate-fade-in-up`, `animate-delay-*`, global reduced-motion infrastructure, AIWorkflow dependencies, and ContactModal dependencies were preserved. The physical Hero image asset remains untouched.

### 8. Complete accessibility and static-state cleanup

- [x] Verify heading hierarchy, localized canvas description, decorative line semantics, visible focus, contrast, native CTA semantics, and no interactive diagram behavior.
- [x] Confirm no continuous Hero motion remains and reduced-motion behavior is safe.
- Expected files: src/components/Hero.tsx, src/index.css, implementation_update.md.

Implementation note — Checklist 8 complete: Hero retains one `h1`, one semantic support paragraph, one native CTA, and no duplicated hidden copy. The system figure now uses the visible localized figcaption as its accessible name via `aria-labelledby`, the localized `copy.hero.systemCanvas.aria` as a concise hidden description via `aria-describedby`, and the logical `ol`/`li` route order Website → Messages → AI → CRM → Calendar → Team. SVG connectors and markers are decorative (`aria-hidden`, `focusable="false"` for SVG); nodes have no interactive roles or tab stops. Static contrast and focus styling were reviewed, no active Hero keyframes/continuous motion/reveal dependency remains, and the existing global reduced-motion rule safely covers the CTA transition. `pnpm typecheck` passed; full lint/build and functional verification remain Checklist 9.

### 9. Run functional and project verification

- [x] Verify Hero-to-ContactModal behavior, section ID/order, language switching, Navbar clearance, StatisticsStrip adjacency, and absence of unrelated changes.
- [x] Run pnpm typecheck, pnpm lint, and pnpm build; record exact outcomes without fixing unrelated failures.
- Expected files: implementation_update.md only unless a Phase 3-caused defect is proven and explicitly scoped.

Implementation note — Checklist 9 complete — decision A: CHECKLIST 9 PASS — FUNCTIONAL CONTRACTS AND PROJECT CHECKS PASS. Hero contracts passed: `HeroProps` remains `onCTAClick`, Hero has no modal state or routing, `useLanguage()` remains the source, `id="anasayfa"` remains stable, the CTA is one native button invoking `onCTAClick`, the exact static V2 canvas is rendered once, one `h1` and one support paragraph are present, and the six nodes remain in Website → Messages → AI → CRM → Calendar → Team DOM order without `copy.workflow.*` or the old image asset. App ownership/order passed: App still owns ContactModal state/callbacks and renders Navbar → Hero → StatisticsStrip → Problem → Solution → HowItWorks → Trust → FAQ → FinalCTA → Footer → ContactModal. Browser verification passed in EN and TR: Hero CTA opened and closed the App-owned ContactModal in both languages; Hero CTA labels remained `Start a project` / `Projeyi konuşalım`; language switching localized headline, support, reassurance, canvas label/description, and all six node labels. Canvas/accessibility passed: decorative SVG is `aria-hidden` and `focusable="false"`, nodes are non-interactive, figure naming/description and visible figcaption are present, focus styling is defined, and no duplicate Hero copy exists. CTA CSS passed: active `.hero-v2__cta` has Signal Lime fill, Carbon text, compact radius, border, no glow/heavy shadow/lift/scale, restrained hover transition, and visible focus styling; global `.btn-primary` remains unchanged. V1 cleanup and static-motion checks passed; shared reveal, gradient, animation, reduced-motion, AIWorkflow, and ContactModal infrastructure remains intact. Navbar clearance, StatisticsStrip adjacency (`istatistik` immediately follows Hero), and available-preview containment passed with no observed clipping/overflow; exact bilingual desktop/tablet viewport QA remains Checklist 10. `pnpm typecheck` PASS, `pnpm lint` PASS, `pnpm build` PASS. Build emitted informational `VITE_SITE_URL is not set; keeping robots.txt without a sitemap URL.` only. Checklist 9 exposed and fixed one Phase 3 lint defect: unused `language` destructuring in Hero.tsx after obsolete class removal; no unrelated files changed. Checklists 10 and 11 remain deferred.

### 10. Perform bilingual desktop/tablet and responsive-fallback QA

- [ ] Inspect TR and EN at 1024px, 1280px, and 1440px+ for copy wrapping, hierarchy, canvas balance, CTA placement, Navbar clearance, and overflow.
- [ ] Check the existing below-desktop fallback at representative widths without beginning the dedicated Phase 5 mobile redesign.
- Expected files: implementation_update.md only.

### 11. Complete Phase 3 readiness and handoff

- [ ] Confirm the static Hero is approved, V1-only artifacts are safely removed, locked areas remain untouched, and the next step is Phase 5 mobile planning/execution before Phase 4 motion.
- [ ] Record the Phase 4 and Phase 5 handoff boundaries and mark Phase 3 complete only when every exit criterion is satisfied.
- Expected files: implementation_update.md only.

## Phase 3 exit criteria

Phase 3 is complete only when:

- the exact approved TR/EN Hero headline and supporting copy are implemented;
- the V1 image-led Hero is replaced by the static V2 operational-system canvas;
- the Hero aligns with the Navbar V2 container, surfaces, typography, borders, and accent hierarchy;
- the CTA still invokes the App-owned ContactModal through onCTAClick;
- section ID anasayfa and App ordering remain stable;
- no fake proof, metrics, or unsupported claims are introduced;
- no Phase 4 motion is implemented;
- no dedicated Phase 5 mobile redesign is implemented;
- the static Hero remains usable across the current responsive fallback without known overflow or overlap;
- obsolete Hero-only V1 visual and motion artifacts are removed only after usage search;
- accessibility semantics, focus, contrast, and reduced-motion safety are preserved;
- pnpm typecheck, pnpm lint, and pnpm build pass;
- bilingual desktop/tablet QA passes at 1024px, 1280px, and 1440px+;
- no unrelated files, dependencies, abstractions, or assets are added or changed;
- the repository is ready for Phase 5 mobile execution before Phase 4 motion.

## Workflow rules

- This document is the only file changed during this planning run.
- All Phase 3 checklist items begin unchecked.
- Implement exactly one checklist item per later Codex run.
- Update this document after each completed item.
- Do not auto-start the next item.
- Do not begin Phase 4 or Phase 5 work from a Phase 3 checklist item.

