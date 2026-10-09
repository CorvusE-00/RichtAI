# Richt Ai V2 — Phase 3.5 Hero Visual Refinement

## Project status

Phase 3 is technically complete: the static V2 Hero contracts, bilingual copy, connected-system canvas, CTA behavior, accessibility, and verification are in place.

The current Hero is functional but visually underpowered. It still reads too much like a restrained workflow diagram or clean development demo. Phase 3.5 is required before Phase 5 mobile refinement and Phase 4 motion work.

The approved execution order is:

Phase 3 — Static Hero foundation  
→ Phase 3.5 — Hero visual refinement  
→ Phase 5 — Mobile Hero refinement  
→ Phase 4 — Motion system pass

This document is the active source of truth for Phase 3.5. All checklist items below are intentionally unchecked because this is a plan-only run.

## Objective

Refine only the static Hero visual direction so it feels:

- premium and visually confident;
- distinctive rather than generic;
- editorial rather than blunt;
- like a serious connected-systems studio;
- like an art-directed operational interface rather than a demo diagram.

Preserve the current approved structure and all functional, accessibility, localization, and ownership contracts.

## Why this phase exists

The current Hero works structurally but does not yet meet the desired visual authority of a top automation or systems studio:

- the headline block is large but blocky, blunt, and not editorial enough;
- line breaks feel functional rather than intentionally art-directed;
- the right-side canvas reads as a skeletal wireframe or architecture sketch;
- the canvas lacks enough depth, framing, hierarchy, and signature character;
- the left/right balance is technically correct but emotionally weak;
- the composition lacks visual tension and premium rhythm;
- the Hero does not yet have a memorable signature visual identity;
- beginning Phase 4 motion now would use animation to compensate for an insufficient static foundation.

Phase 3.5 is a focused visual-art-direction correction pass, not a rollback of Phase 3 functionality.

## Protected contracts

### Hero and App ownership

- Keep `Hero({ onCTAClick })` unchanged.
- Keep the Hero CTA as a native button that invokes `onCTAClick`.
- Keep ContactModal state and ownership in `App.tsx`.
- Do not add modal state, routing, hash mutation, or navigation side effects to Hero.

### Identity and structure

- Keep `id="anasayfa"` unchanged.
- Preserve the existing App render order and immediate StatisticsStrip adjacency.
- Keep Phase 3’s desktop/tablet left-copy/right-canvas structure unless a documented visual correction requires a local adjustment.
- Keep the connected-system concept and six entities: Website / Web sitesi, Messages / Mesajlar, AI / Yapay zekâ, CRM, Calendar / Takvim, Team / Ekip.

### Translation and copy

- Keep `useLanguage()` and the existing i18n architecture as the translation source.
- Preserve TR/EN parity and the approved Hero copy unless a later checklist documents a narrowly scoped presentation adjustment.
- Do not rewrite unrelated site copy or translation groups.

### Trust, truth, and accessibility

- Add no invented metrics, client logos, case studies, or other fake proof.
- Preserve the semantic canvas, localized accessible description, one real `h1`, native CTA semantics, visible focus treatment, decorative connector semantics, and non-interactive diagram behavior.
- Preserve the static/no-motion state in this phase.

### Scope boundaries

- Keep later implementation Hero-local unless a documented dependency requires otherwise.
- Do not begin Phase 5 mobile-specific refinement.
- Do not begin Phase 4 motion.
- Do not add dependencies or change assets by default.

## Visual diagnosis

### Headline composition

- The headline is too blocky and brute-force.
- The line breaks feel accidental rather than art-directed.
- The relationship between display scale, max width, support copy, and vertical rhythm lacks editorial control.

### System canvas

- The canvas is too diagram-like and skeletal.
- It does not yet feel like a signature operational visual.
- Its depth, hierarchy, framing, and visual authority are insufficient.
- The current node route risks reading as a low-detail flowchart instead of a designed system.

### Overall composition

- The left/right balance is technically correct but emotionally weak.
- Copy, CTA, reassurance, and canvas do not yet create enough tension or premium visual rhythm.
- The right-side visual needs stronger presence without becoming a dashboard wall.

### Signature identity

- The Hero lacks a memorable visual signature that distinguishes Richt Ai from a generic AI/SaaS landing page.
- A stronger static visual foundation is required before any motion can add value.

### Phase sequencing

- Moving directly into Phase 4 motion is premature.
- Static hierarchy, framing, composition, and art direction must be resolved first.

## Art-direction target

The refined Hero should feel like:

- a premium operating system for business communication;
- a connected-systems studio;
- a modern digital control surface;
- an art-directed systems composition;
- an intentional blend of editorial typography and operational interface logic.

It should not feel like:

- a random dashboard;
- a generic SaaS illustration;
- a low-detail flowchart;
- a glassmorphism card wall;
- a vibecoded AI site;
- a neon gimmick design.

The six connected entities and logical route remain the conceptual foundation. The refinement should improve depth, hierarchy, framing, and authority without replacing the system metaphor with an unrelated visual.

## Scope in

Phase 3.5 may refine only the Hero’s static desktop/tablet visual presentation:

- left/right composition and visual balance;
- copy-block width and vertical rhythm;
- headline line breaks, scale balance, max width, and editorial rhythm;
- support-copy width, spacing, and hierarchy;
- static system-canvas architecture and visual hierarchy;
- canvas surface, framing, zones, rails, structural lines, and contained depth;
- AI focal treatment and Team endpoint clarity;
- route presentation so the system feels connected and authoritative while remaining static;
- CTA integration with the refined Hero composition;
- reassurance strip alignment, spacing, hierarchy, and premium presentation;
- desktop/tablet visual polish in both TR and EN;
- Hero-local accessibility and responsive containment checks required by the visual changes.

Likely later implementation files are `src/components/Hero.tsx`, `src/index.css`, and this plan file only. No new dependency is expected.

## Scope out

Do not change in Phase 3.5:

- Navbar redesign;
- ContactModal redesign or ownership;
- StatisticsStrip redesign;
- Problem, Solution, HowItWorks, Trust, FAQ, FinalCTA, or Footer redesign;
- a site-wide copy overhaul;
- the core business positioning;
- the route/system concept;
- the global design system;
- metadata, Supabase, package files, lockfiles, or build configuration;
- assets outside the Hero unless separately approved;
- fake social proof, metrics, testimonials, or client claims;
- Phase 4 animation, particles, glows, parallax, pulse systems, or decorative motion;
- Phase 5 mobile restructuring, mobile-specific canvas redesign, or narrow-screen composition work.

## Phase 3.5 implementation checklist

Implement one checklist item per later run. Complete a task, update this file, then stop and wait for explicit approval before starting the next task.

### 1. Audit current Hero visual weaknesses

- [ ] Inspect the current TR and EN Hero at representative desktop/tablet widths.
- [ ] Record the actual headline wrapping, copy/canvas balance, canvas presence, CTA/meta relationship, and containment issues.
- [ ] Confirm the Phase 3 protected contracts before visual edits begin.

Expected scope: `implementation_update.md` only.

### 2. Refine headline composition and left-column rhythm

- [ ] Refine headline max width, line breaks, scale balance, and line-height without rewriting approved copy.
- [ ] Refine the spacing relationship between headline, support copy, CTA, and reassurance.
- [ ] Keep the headline editorial and strong in both TR and EN without clumsy wrapping.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

### 3. Refine support-copy hierarchy

- [ ] Tune support-copy width, line length, spacing, and visual weight so it supports the headline rather than forming a paragraph wall.
- [ ] Preserve the approved TR/EN support copy and existing i18n source.
- [ ] Verify the copy remains readable at desktop/tablet widths.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

### 4. Redesign static system-canvas architecture

- [ ] Evolve the six-node route from a simple diagram into a stronger signature operational-system composition.
- [ ] Preserve Website → Messages → AI → CRM → Calendar → Team and localized labels.
- [ ] Improve hierarchy, depth, framing, and structural relationships without adding motion or unrelated metaphor.
- [ ] Keep the canvas semantic, accessible, static, and non-interactive.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

### 5. Refine canvas surface, node hierarchy, and route framing

- [ ] Decide and implement the most balanced single-surface treatment, internal framing, zones, rails, and structural lines.
- [ ] Make AI the clear focal node and Team the clear final endpoint.
- [ ] Avoid generic app screenshots, nested-card stacks, glassmorphism, heavy shadows, glow, gradients, and dashboard-wall density.
- [ ] Preserve enough internal breathing room so labels and connectors remain readable.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

### 6. Refine CTA and reassurance integration

- [ ] Ensure the CTA feels integrated with the refined composition rather than oversized or disconnected.
- [ ] Preserve `onCTAClick`, native button semantics, approved CTA copy, focus treatment, and restrained styling.
- [ ] Improve reassurance alignment, spacing, hierarchy, and premium presentation while keeping it secondary.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

### 7. Perform bilingual desktop/tablet visual QA

- [ ] Inspect TR and EN at 1024px, 1280px, and 1440px+.
- [ ] Verify headline wrapping, support-copy hierarchy, left/right balance, canvas authority, CTA/meta placement, Navbar clearance, StatisticsStrip adjacency, and horizontal containment.
- [ ] Confirm no locked area, functional contract, accessibility contract, copy contract, or asset boundary regressed.

Expected scope: `implementation_update.md` only unless a proven Hero-local defect is found.

### 8. Complete Phase 3.5 readiness and handoff

- [ ] Run the required typecheck, lint, and build verification after any source change.
- [ ] Confirm the Hero is visually stronger, distinctive, premium, static, bilingual, accessible, and ready for the next phase.
- [ ] Record the Phase 5 mobile handoff and keep Phase 4 motion deferred until after Phase 5.

Expected scope: `implementation_update.md` only unless a proven Hero-local defect requires a final correction.

## Exit criteria

Phase 3.5 is complete only when:

- the Hero has clear premium visual authority beyond a prototype or dev-demo diagram;
- headline composition and editorial rhythm are intentional in TR and EN;
- support copy, CTA, and reassurance form a coherent left-column hierarchy;
- the static system canvas feels like a signature connected operational system rather than a low-detail flowchart;
- AI is the clear focal treatment and Team is a clear endpoint;
- the canvas has depth and framing without glassmorphism, glow, gradients, heavy nested cards, or dashboard-wall density;
- the six-system concept and logical route remain intact;
- the Hero remains static with no Phase 4 motion or decorative animation;
- the Hero remains desktop/tablet-first and no Phase 5 mobile redesign has started;
- `Hero({ onCTAClick })`, App-owned ContactModal, `id="anasayfa"`, App order, i18n parity, accessibility semantics, and no-route behavior remain intact;
- no fake proof, unsupported claim, unrelated section change, dependency, asset change, or global redesign was introduced;
- bilingual desktop/tablet QA passes with no overflow or Navbar/StatisticsStrip composition defect;
- typecheck, lint, and build pass after implementation;
- the repository is ready for Phase 5 mobile Hero refinement.

## Handoff

When all Phase 3.5 checklist items pass, hand off to Phase 5 for mobile Hero refinement. Phase 5 owns mobile content order, mobile canvas simplification, narrow-screen typography, mobile CTA/reassurance placement, mobile spacing, Hero height, and mobile-specific hierarchy.

Phase 4 remains after Phase 5. It may later animate only the approved static system canvas through subtle connector travel, node activation, and operational state transitions. Phase 4 must not redesign the static hierarchy, change copy, add generic decorative motion, or introduce particles, glows, or parallax.

No Phase 3.5 checklist item has been implemented in this plan-only run.
