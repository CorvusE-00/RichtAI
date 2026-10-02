# V9A — Global Rhythm, Section Tone, and Mobile-First Polish

Status: **V9A complete — imagery/proof pass deferred**

## Scope

Polish the existing Richt Ai landing page as one coherent experience across desktop, tablet, and mobile. Prioritize mobile clarity while preserving the approved V0–V8 concepts and content structure.

Do not add the chatbot, redesign section concepts, add stock photography, add new content categories, or add imagery in this phase. Do not change business logic or copy.

## Mobile-first work

- [x] Review the Turkish page at 320px and 375px, and the English page at 375px.
- [x] Improve hero headline wrapping, paragraph readability, CTA prominence, trust/meta rows, spacing, and operational-panel density on mobile without changing the hero concept.
- [x] Make the operational panel feel intentionally designed for mobile, using mobile-specific layout rules only where needed.
- [x] Improve Problem mobile readability by reducing tiny labels, stacking incidents clearly, and avoiding mini-dashboard density while preserving all four themes.
- [x] Improve Solution mobile readability by keeping all three capabilities understandable and simplifying delicate micro-interfaces at small widths where needed.
- [x] Verify How It Works, Trust, FAQ, Final CTA, and Footer remain readable and connected on mobile.
- [x] Verify no horizontal overflow and no microscopic labels at mobile widths.

## Whole-page rhythm and transitions

- [x] Audit the full vertical rhythm across Hero, StatisticsStrip, Problem, Solution, How It Works, Trust, Founder, FAQ, Final CTA, and Footer.
- [x] Adjust section padding, intro-to-content spacing, heading-to-body gaps, dead zones, and cramped transitions with intentional hierarchy rather than one shared spacing value.
- [x] Use quiet tone shifts, border rules, spacing, and restrained gradients to clarify section transitions.
- [x] Avoid decorative blobs, glow walls, SVG waves, and ornamental separators.
- [x] Preserve the approved concepts of How It Works, FAQ, Final CTA, and Footer while polishing spacing, tone, emphasis, mobile readability, and surrounding connections.

## Tone and color hierarchy

- [x] Keep the existing dark navy, teal, cyan, and snow brand family.
- [x] Establish subtle distinction between the base background, section surfaces, elevated local panels, transition sections, and footer/end-state area.
- [x] Ensure the page no longer reads as one uninterrupted navy slab.
- [x] Audit teal usage across labels, numbers, rules, dots, and accents.
- [x] Keep stronger teal for the primary CTA, active states, one focal accent per section, and meaningful system/status emphasis.
- [x] Reduce decorative teal repetition and keep cyan secondary and rare.

## StatisticsStrip

- [x] Refine StatisticsStrip as a transition band rather than a SaaS metrics rail.
- [x] Soften icon prominence and reduce visual clutter.
- [x] Improve mobile spacing and align the band with the refined site language.
- [x] Do not add unsupported metrics or redesign the strip fully.

## Accessibility and preservation

- [x] Preserve semantic structure, keyboard behavior, focus states, contrast, and reduced-motion behavior.
- [x] Do not reduce muted text contrast too aggressively.
- [x] Preserve desktop quality while improving mobile clarity.
- [x] Keep Turkish and English behavior stable.

## Expected implementation surface

- [x] Update `src/index.css` for shared tones, spacing, responsive rules, and accent hierarchy.
- [x] Make only small wrapper/class adjustments in existing section components where required for mobile or transitions.
- [x] Update this checklist with the actual fixes and evidence after implementation.
- [x] Do not add imagery or change business logic/content structure.

## Verification checklist

- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
- [x] Inspect Turkish at 320px, 375px, 768px, 1024px, and desktop widths.
- [x] Inspect English at 375px and desktop widths.
- [x] Confirm the mobile hero is clearly improved.
- [x] Confirm Problem and Solution visuals are meaningfully more readable on mobile.
- [x] Confirm section transitions are cleaner and tone hierarchy is clearer.
- [x] Confirm desktop remains strong and no section concept changed.
- [x] Confirm no new imagery was added.

## Deferred for the next imagery/proof pass

- [ ] Consider adding one or two intentional real images or mockups only after V9A, using the available layout without changing the approved section concepts.
- [ ] Revisit proof-oriented visual opportunities only after suitable real evidence is available.

## Definition of done

- [x] Mobile hero, Problem, and Solution are clearly improved.
- [x] The page has intentional vertical rhythm and tonal hierarchy from top to bottom.
- [x] Teal usage is disciplined without weakening meaningful system or CTA states.
- [x] Desktop quality is preserved.
- [x] Turkish and English remain stable.
- [x] No new imagery is added in V9A.
- [x] Typecheck, lint, build, and the required responsive browser checks pass.
