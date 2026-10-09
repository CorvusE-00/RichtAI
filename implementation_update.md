# Richt Ai V2 — Phase 3.5 Hero Visual Refinement

## Project status

Phase 3 is technically complete: the static V2 Hero contracts, bilingual copy, connected-system canvas, CTA behavior, accessibility, and verification are in place.

The current Hero is functional but visually underpowered. It still reads too much like a restrained workflow diagram or clean development demo. Phase 3.5 is required before Phase 5 mobile refinement and Phase 4 motion work.

The approved execution order is:

Phase 3 — Static Hero foundation  
→ Phase 3.5 — Hero visual refinement  
→ Phase 5 — Mobile Hero refinement  
→ Phase 4 — Motion system pass

This document is the active source of truth for Phase 3.5. Checklists 1–3 are complete; Checklists 4–8 remain unchecked. No system-canvas redesign, Phase 4 motion, or Phase 5 mobile implementation has started.

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

- [x] Inspect the current TR and EN Hero at representative desktop/tablet widths.
- [x] Record the actual headline wrapping, copy/canvas balance, canvas presence, CTA/meta relationship, and containment issues.
- [x] Confirm the Phase 3 protected contracts before visual edits begin.

Expected scope: `implementation_update.md` only.

#### Checklist 1 visual audit — complete

##### Viewport coverage

Codex In-app Browser visual and DOM measurements were performed in both Turkish and English at:

- 1024×900;
- 1280×900;
- 1440×900;
- 1536×900 as the wider desktop check.

All tested widths had no horizontal overflow. The current Hero remained structurally contained, the six-node canvas remained readable, the CTA remained reachable, and StatisticsStrip followed immediately after the Hero. The audit found no functional or containment defect; the findings below are visual-art-direction issues for later checklists.

##### 1. Headline diagnosis

Measured behavior:

- TR renders as four lines at every tested desktop width. The two existing block spans wrap as `İşletmenizi` / `ileri taşıyan` and `sistemler` / `kuruyoruz.`.
- EN also renders as four lines at every tested desktop width. The first span wraps as `Systems` / `that keep` / `your business`, followed by the second span `moving.`.
- At 1024px the heading is approximately 386px wide and 226px tall at 56px type. At 1280px it is approximately 485px wide and 257px tall at 64px type. At 1440px it is approximately 489px wide and 289px tall at 72px type. At 1536px it is approximately 487px wide and 308px tall at 76.8px type.
- The two-span structure causes the accent field to behave as a separate final beat. In EN, `moving.` becomes an isolated fourth line; in TR, `kuruyoruz.` becomes the isolated final line. This makes the sentence feel assembled by wrapping rules rather than composed as one editorial statement.

Ranked headline issues:

1. Highest impact: the forced span-level wrapping produces an orphan-like final beat and an accidental-looking four-line block in both languages.
2. High impact: the display block is vertically heavy relative to the sparse canvas; it dominates the Hero by text mass rather than by a deliberate editorial gesture.
3. Medium impact: the left-column width is rigid enough that widening the type alone will not solve the rhythm; the available measure and span behavior must be considered together.
4. Lower impact: the type is visually strong and legible, but its current treatment reads as a large text block rather than a premium editorial statement.

The larger problem is line composition and available measure, not simply font size. Do not default to manual `<br>` elements; later work should first test width, span/display behavior, line-height, and controlled scale while preserving the approved sentence.

##### 2. Support-copy diagnosis

Measured behavior:

- At 1024px both languages occupy three lines in an approximately 386px-wide block and about 92px of height.
- At 1280px, 1440px, and 1536px both languages occupy two lines in an approximately 485–489px-wide block and about 61px of height.
- The copy uses a restrained Steel-like tone that is readable but visibly subordinate to the Bone White headline. It is not the contrast problem by itself; its low visual weight becomes more noticeable because the headline above it is so dominant.
- The current gap is orderly, but the support paragraph reads like a detached explanatory block after a four-line headline rather than a tightly art-directed continuation.
- At 1024px the extra line adds vertical pressure to the left column, contributing to the mismatch with the shorter visual canvas. At wider widths the paragraph becomes compact enough that the right-side emptiness is more obvious.

Ranked support-copy issues:

1. The support copy lacks a strong typographic relationship to the headline and feels appended rather than compositionally locked to it.
2. Its width and line length are serviceable but do not create a distinctive editorial measure.
3. The low-contrast treatment is appropriate for support text, but the current canvas does not provide enough competing hierarchy for the overall block to feel intentional.

##### 3. CTA diagnosis

- The CTA is 50px high, approximately 184px wide in EN and 204px wide in TR at desktop widths. It is proportionate to the copy block and remains visually prominent.
- Its Signal Lime fill and Carbon text are directionally correct, but against the dark field it reads as a separate bright rectangle rather than an integrated endpoint of the left-column composition.
- It follows the support copy with a clear gap and sits above reassurance without collision. Behavior and placement are sound.
- The CTA’s integration weakness is relational: the canvas has almost no corresponding large-scale focal structure, so the CTA carries nearly all of the Hero’s accent energy.

The CTA should be refined in context later, not redesigned or behaviorally changed.

##### 4. Reassurance diagnosis

- At 1280px and above, reassurance occupies two visual rows in both languages; at 1024px it occupies three rows.
- The duration, no-commitment, and direct-contact items are separated by tiny dividers and subtle icons. The icons are not dominant, but the three-part fragmentation makes the strip read closer to footer metadata than premium reassurance.
- The direct-contact item wraps to its own row at desktop widths because the left-column measure is narrow. This weakens the sense of one composed trust statement.
- The top divider gives the block structure, but the repeated separators add visual noise without strengthening hierarchy.
- The current horizontal-first format is useful for compactness but needs grouping and alignment refinement so it reads as one quiet reassurance system rather than three unrelated facts.

Do not rewrite the reassurance copy in this audit. Future work should preserve all three meanings while improving grouping, spacing, and responsive presentation.

##### 5. System-canvas diagnosis

Measured behavior:

- The canvas contains six nodes and five static SVG connectors inside one Graphite stage.
- At 1024px the stage is approximately 454×371px and each node is approximately 113×56px. Nodes occupy only about 22.8% of the stage area.
- At 1280px the stage is approximately 569×434px and each node is approximately 152×56px. Nodes occupy about 20.6% of the stage area.
- At 1440px and 1536px the stage remains approximately 572–574×434px with nodes around 152–153×56px, again occupying about 20.7% of the stage area.
- The canvas therefore has roughly four-fifths of its surface as unstructured empty field around small, evenly weighted cards.

Specific causes of the weak reading:

1. The nodes are too small relative to the stage, especially at 1280px and above.
2. The five connectors are thin generic SVG paths. They explain adjacency but do not create a strong architectural gesture or entry → processing → operations → handoff rhythm.
3. The 3×3 placement is orderly but skeletal. There are no meaningful regions, lanes, rails, or internal structural zones to give the surface depth.
4. AI is only modestly differentiated by a lime marker and slight styling; it is not a clearly stronger processing hub.
5. Team is the same visual species as the other nodes, so the final human handoff is not sufficiently distinct.
6. Website, Messages, CRM, and Calendar are nearly equal in visual weight, which makes the system feel like a set of cards rather than a composed operational flow.
7. The flat single surface has a border but no larger-scale framing gesture. It reads as an empty container around a wireframe.
8. The small uppercase label and tiny status markers add polish at micro scale, but they cannot compensate for the missing macro hierarchy.

Overall classification: the canvas currently reads primarily as a wireframe workflow chart or dev prototype, with a restrained admin-panel surface. It does not yet read as a premium operational interface or signature visual.

##### 6. Left/right composition diagnosis

- The `0.92fr / 1.08fr` grid is geometrically reasonable: at 1280px the copy is about 485px wide and the canvas about 569px wide; the right track is not intrinsically too narrow.
- The visual mass is nevertheless left-heavy because the headline occupies four large lines while the canvas uses only about one-fifth of its stage for meaningful forms.
- At 1024px the canvas label begins about 67px below the top of the headline because the shorter canvas is vertically centered against the taller copy block. At 1280px the offset is about 22px; at 1440px it is about 38px; at 1536px it is about 47px. The anchor relationship therefore changes across desktop widths.
- The canvas has enough width but not enough visual presence. Making it simply wider would amplify empty space unless its internal architecture becomes denser and more hierarchical.
- The Hero feels top-heavy on the left and under-articulated on the right, not mathematically lopsided. The current alignment is technically clean but emotionally weak.

Ranked composition issues:

1. High impact: insufficient right-side visual mass and hierarchy.
2. High impact: headline and canvas do not share a strong top or compositional anchor across widths.
3. Medium impact: the current grid ratio is acceptable, but the visual should gain presence internally before the ratio is changed materially.
4. Lower impact: CTA/meta sit correctly in the left column but do not yet act as a deliberate counterweight to the canvas.

##### 7. Hero height and whitespace diagnosis

- Navbar clearance is safe. The content begins at approximately y=144px in the tested desktop layouts, leaving a deliberate gap below the fixed header rather than a collision.
- Hero height is approximately 760px at 1024px, 732px at 1280px, 763px at 1440px, and 782px at 1536px at a 900px viewport height.
- StatisticsStrip begins immediately after the Hero, appearing as a substantial next-section band rather than a thin accidental sliver: about 140px is visible at 1024px, 168px at 1280px, 137px at 1440px, and 118px at 1536px.
- The Hero is not failing because of overflow or an oversized fixed height. The perceived dead space comes from the sparse canvas surface and the uneven distribution of visual information.
- At 1280px, the canvas bottom sits about 102px above the Hero end; at 1536px the gap is about 127px. The left meta block ends earlier and leaves a similar quiet lower field. This whitespace is acceptable in principle, but currently feels unearned because the canvas contains too little structural content.

The next pass should improve the use and meaning of the existing space rather than simply compressing the section or hiding StatisticsStrip.

##### 8. Signature-quality diagnosis

The current Hero is recognizable as Richt Ai through its Carbon field, lime/cyan accents, logo, and connected-system idea, but it is not yet distinctive because:

- the 3×3 card topology is a familiar generic workflow shape;
- no single large-scale visual gesture owns the composition;
- AI is not visually authoritative enough to become a signature focal point;
- there are no distinct regions or spatial rules that communicate a proprietary operating model;
- the surface has polish at the marker/border level but not enough art direction at the architectural level;
- the visual communicates function clearly, but not a memorable point of view or emotional confidence.

##### 9. Benchmark gap

Relative to a top-tier digital systems studio Hero, the current gap is:

- Composition: technically balanced but lacking a decisive focal gesture and intentional tension.
- Typography: strong scale but too many mechanically wrapped lines and insufficient editorial control.
- Hierarchy: micro accents are polished, while macro hierarchy between entry, processing, operations, and handoff is weak.
- Visual density: the canvas is under-dense in meaningful structure despite occupying substantial area.
- Tension: left copy is bright and heavy while the right side is quiet and low-energy.
- Specificity: the six labels explain the concept but do not yet express a distinctive Richt Ai operating model.
- Finish: borders and spacing are clean, but the empty surface and equal node treatment expose the prototype quality.
- Signature identity: there is no memorable shape language or large-scale architectural gesture yet.

This is a visual-quality gap, not a functional gap. No external site or unverified reference is being introduced as a dependency.

##### 10. Concrete static-first refinement direction

The following direction is the target for Checklists 2–6. It is guidance only; no implementation starts in Checklist 1.

**A. Headline strategy**

- Preserve the approved TR/EN sentences and existing i18n source.
- Treat the sentence as one art-directed editorial unit rather than two mechanically independent blocks.
- Test width, span/display behavior, max measure, and line-height before considering any manual break.
- Avoid isolated final words such as `moving.` or `kuruyoruz.` unless the resulting beat is clearly intentional at all target widths.

**B. Left-column rhythm strategy**

- Reduce the sense of a tall text wall by creating a deliberate cadence: headline, compact support statement, integrated CTA, then one quiet reassurance group.
- Tune the copy measure and vertical gaps as a system; do not solve the problem with global compression.
- Preserve enough scale for premium editorial presence while allowing the canvas to carry equal visual authority.

**C. Canvas architecture strategy**

- Preserve the six entities and semantic route, but evolve the visual from six floating cards into one larger operational architecture.
- Make the route visibly progress from entry (Website/Messages) to processing (AI) to operations (CRM/Calendar) to human handoff (Team).
- Use a stronger macro backbone, lane, rail, or region structure so the route reads as a system rather than a set of SVG connections.
- Keep the architecture static and suitable for later subtle motion without requiring a second structural redesign.

**D. Focal hierarchy strategy**

- Make AI a real central processing hub through scale, placement, shape, line-weight relationship, and restrained Signal Lime emphasis—not only a colored marker.
- Make Team a distinct final endpoint through handoff framing or endpoint treatment.
- Keep secondary nodes quieter and avoid giving every node equal visual importance.

**E. Structural framing strategy**

- Retain one contained surface unless testing proves a more integrated frame is clearly stronger.
- Replace unstructured empty field with restrained internal rails, zones, or architectural guides.
- Use scale contrast, alignment, and borders over shadows; avoid glassmorphism, glow, gradients, and nested dashboard cards.
- If micro-labels are added, keep them operational, localized where user-facing, and free of fake metrics or unsupported claims.

**F. Reassurance strategy**

- Keep duration, no-commitment, and direct-contact meanings and copy.
- Present them as one composed reassurance strip with clearer grouping and less separator noise.
- Keep the strip secondary, aligned to the left-column rhythm, and responsive without the direct-contact item feeling like an accidental orphan row.

**G. CTA integration strategy**

- Keep the native CTA and `onCTAClick` behavior unchanged.
- Keep Signal Lime as the controlled action accent, but make the CTA feel like the next step of the editorial/system composition rather than a detached bright block.
- Preserve compact radius, clear focus, no glow, no lift, and no oversized treatment.

##### 11. Future implementation assumptions and protected boundaries

- Later work should remain in `src/components/Hero.tsx` and `src/index.css` unless a specific dependency is proven.
- Do not change `Navbar`, `StatisticsStrip`, or other homepage sections to compensate for Hero art direction.
- Preserve `Hero({ onCTAClick })`, App-owned ContactModal, `id="anasayfa"`, App order, i18n parity, six system entities, semantic route, accessibility semantics, and the static/no-motion requirement.
- Leave Phase 5 mobile implementation untouched; this audit and the immediate refinement pass are desktop/tablet-first.
- Do not add fake proof, new dependencies, or new assets by default.
- Keep the Hero image asset and unrelated repository artifacts outside this visual audit scope.

### 2. Refine headline composition and left-column rhythm

- [x] Refine headline max width, line breaks, scale balance, and line-height without rewriting approved copy.
- [x] Refine the spacing relationship between headline, support copy, CTA, and reassurance.
- [x] Keep the headline editorial and strong in both TR and EN without clumsy wrapping.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

Implementation note — Checklist 2 complete: The two approved i18n headline fields now render as inline sentence parts at desktop widths with one semantic whitespace between them, removing the forced independent block behavior and avoiding an isolated final-word beat. Below 1024px the parts remain block-level to preserve the existing mobile/tablet flow. Desktop grid ratio is now `1.02fr / 0.98fr`, giving the copy a modestly wider measure without starving the future canvas. Desktop heading rules are `max-width: 42rem`, `font-size: clamp(3.25rem, 4.15vw, 5.25rem)`, `line-height: 0.98`, and `letter-spacing: -0.045em`; no manual `<br>`, gradient, accent color, or copy change was introduced.

Old versus new wrap behavior:

- Old: TR and EN both rendered four lines at every audited desktop width, with `kuruyoruz.` / `moving.` isolated as the final span beat.
- New TR: three lines at 1024px, two at 1280px, and three at 1440px and 1536px.
- New EN: three lines at 1024px, two at 1280px, and three at 1440px and 1536px.

The resulting rhythm is materially less blocky while retaining strong display scale. At all tested desktop widths there was no collision or horizontal overflow. The system canvas markup and architecture were not changed.

### 3. Refine support-copy hierarchy

- [x] Tune support-copy width, line length, spacing, and visual weight so it supports the headline rather than forming a paragraph wall.
- [x] Preserve the approved TR/EN support copy and existing i18n source.
- [x] Verify the copy remains readable at desktop/tablet widths.

Expected scope: Hero-local source/CSS and `implementation_update.md` only.

Implementation note — Checklist 3 complete: Support copy remains Inter/Steel with the approved TR/EN text unchanged. At 1024px the effective measure is approximately 428px and the copy remains three lines in both languages; at 1280px, 1440px, and 1536px the `max-width: 33rem` rule produces an effective measure of approximately 528px and two readable lines in both languages. Desktop support line-height is tightened to `1.55` (27.9px at the existing 1.125rem size) and the headline-to-support gap is `1.25rem`, keeping the paragraph attached without crowding it.

CTA and reassurance placement were refined only through spacing: CTA margin-top is `1.75rem`, reassurance margin-top is `1.125rem`, and the existing CTA styling, callback, copy, reassurance meanings, and metadata structure remain unchanged. The left column now reads as headline → positioning statement → action → quiet reassurance. The canvas was not modified. Below-desktop checks at 375px and 768px in both languages retained block-level headline parts, readable support copy, reachable CTA/meta, and no horizontal overflow. `pnpm typecheck` PASS; full lint/build remain Checklist 8.

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

No Phase 3.5 visual implementation checklist item has been started in this audit-only run.
