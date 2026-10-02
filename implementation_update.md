# V9B1 — Visual Differentiation Cleanup

Status: **V9B1 complete — V9B2 deferred**

## Scope

Refine the existing full-page composition so approved sections no longer repeat the same structural motifs. V9A remains approved and its mobile improvements must be preserved.

Do not add imagery, add the chatbot, rewrite the site architecture, redesign approved section concepts, change locked surfaces, add dependencies, or begin imagery work.

## Challenges / Problem balance

- [x] Inspect the desktop Problem composition as a statement supported by evidence.
- [x] Move the desktop Problem grid closer to `0.95fr / 1.05fr` or `1fr / 1fr`.
- [x] Increase the effective visual presence of the editorial copy without making it oversized.
- [x] Slightly reduce the board’s maximum perceived width or internal visual mass without shrinking text.
- [x] Preserve all four challenge incidents and the existing board concept.
- [x] Preserve the V9A mobile Problem behavior.

## Numbering hierarchy

- [x] Audit all visible numbered systems across Solution, How It Works, and Trust.
- [x] Keep the Solution capability indexes as quiet editorial references.
- [x] Keep the How It Works `01 / 02 / 03` sequence as chronological client-journey numbering.
- [x] Keep How It Works numbers visible and do not replace them with icons.
- [x] Remove the `01 / 02 / 03 / 04` indexes from the Trust system proof flow.
- [x] Replace Trust system-proof numbers with words, thin directional connectors, and restrained state markers.
- [x] Replace the four Trust process numbers with a visually distinct semantic marker system.
- [x] Use four small custom line glyphs or simple inline SVG/CSS markers for: understand/map, structure/design, build/verify, and continuity/support.
- [x] Keep Trust process rows, copy, and hierarchy intact.
- [x] Keep Trust markers approximately 16–20px, one-color neutral/teal, and understated.
- [x] Do not use large Lucide icons, icon circles, or four cards.
- [x] Confirm Solution, How It Works, and Trust now have distinct visual vocabularies.

## StatisticsStrip refinement

- [x] Refine the strip so it reads as a service-principle rail rather than a SaaS KPI bar.
- [x] Keep the existing factual and qualitative information: `7/24`, `1:1`, `Smart`, and `One`.
- [x] Do not invent metrics, add unsupported numbers, or substantially increase the strip height.
- [x] Slightly reduce value/numeric dominance.
- [x] Let each label and value read more as one service principle.
- [x] Reduce icon repetition further.
- [x] Use separators or typography instead of four equal metric moments where appropriate.
- [x] Keep the strip compact as the Hero-to-Problem transition.
- [x] Preserve the clean V9A 2×2 mobile layout if it remains effective.

## Repetition audit

- [x] Review repeated teal dots, small numbered labels, and horizontal-rule-plus-number patterns.
- [x] Reduce repetition only where consecutive sections begin to look templated.
- [x] Do not globally remove meaningful active, system, status, or focal accents.

## Locked surfaces

- [x] Leave the Hero structure and workflow unchanged.
- [x] Leave Solution composition unchanged apart from its existing quiet indexes.
- [x] Leave How It Works copy and structure unchanged apart from preserving its numbering.
- [x] Leave Founder layout, FAQ behavior, Final CTA, Footer, metadata, and contact flow unchanged.
- [x] Do not add imagery or chatbot work.

## Expected implementation surface

- [x] Update `src/components/Problem.tsx` only for the approved desktop balance adjustment if required.
- [x] Update `src/components/StatisticsStrip.tsx` for the service-principle rail treatment if required.
- [x] Update `src/components/Trust.tsx` to remove Trust system-proof indexes and introduce semantic process markers.
- [x] Update `src/index.css` for proportions, marker/glyph styling, density, and repetition cleanup.
- [x] Update this checklist after each implementation slice and verification pass.
- [x] Do not add a new dependency.

## Verification checklist

- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
- [x] Inspect desktop Problem statement versus board balance.
- [x] Inspect the Solution → How It Works → Trust numbering rhythm on desktop.
- [x] Inspect the Hero → StatisticsStrip → Problem transition on desktop.
- [x] Inspect Turkish at 375px and 320px.
- [x] Inspect English at 375px and 320px if needed for layout parity.
- [x] Confirm all four Problem incidents remain.
- [x] Confirm How It Works numbering remains visible and chronological.
- [x] Confirm Solution indexes remain subtle.
- [x] Confirm Trust no longer contains two repeated numbered systems.
- [x] Confirm StatisticsStrip contains no unsupported claims.
- [x] Confirm no horizontal overflow.
- [x] Confirm Turkish and English remain stable.
- [x] Confirm all V9A mobile improvements remain intact.
- [x] Confirm no new imagery was added.

## Deferred to V9B2

- [ ] Defer imagery, proof-oriented visual work, and any broader changes outside the V9B1 differentiation cleanup.

## Definition of done

- [x] The Problem board no longer visually overwhelms its editorial copy.
- [x] Numbered systems have clear roles instead of appearing everywhere.
- [x] Trust has a distinct visual vocabulary from How It Works.
- [x] StatisticsStrip feels less like a generic KPI strip.
- [x] V9A mobile quality is preserved.
- [x] No new imagery is added.
- [x] Typecheck, lint, build, and responsive browser checks pass.
