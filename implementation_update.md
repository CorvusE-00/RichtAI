# Hero live activity overlay refinement

## Objective

Refine only the small overlay attached to the Hero visual.

The current overlay explains a process with arrows and sequential steps, which repeats the Solution section and feels like a static SaaS workflow diagram. Replace it with a compact live activity concept that suggests the AI automation system is quietly working in the background.

The overlay should be visually engaging, slightly animated, premium, restrained, easy to understand, distinct from the Solution section, and secondary to the Hero image.

Do not redesign the Hero itself.

## New concept

Use one small activity panel:

- English: `Live activity`
- Turkish: `Canlı akış`

The panel should show a glimpse of background activity happening now. It must not explain the entire automation process.

Suggested natural activity labels:

### English

- `New lead captured`
- `Priority detected`
- `Follow-up queued`
- `Calendar availability checked`

Use three or four events based on the strongest composition.

### Turkish

- `Yeni talep alındı`
- `Öncelik belirlendi`
- `Takip planlandı`
- `Uygun saat kontrol edildi`

Preserve natural wording in both languages. Avoid technical jargon and awkward literal translation.

## Animation direction

Implement calm, premium motion:

- one event is active at a time
- the active event receives slightly stronger emphasis
- previous events can become completed or muted
- a small live-status dot may pulse
- completed events may use a tiny check
- the active event may use a subtle fade or vertical slide
- activity advances approximately every 2.5–3.5 seconds
- the animation loops gently

Do not use bouncing, flashy transitions, rapid movement, large glows, or exaggerated loading animations.

## Reduced motion

Respect `prefers-reduced-motion`.

When reduced motion is enabled:

- stop cycling animation
- remove pulse animation
- show a stable, completed, readable state

## Visual structure

Use one compact surface only:

- a tiny label or status at the top
- three compact activity rows
- one active state
- subtle completion indicators

Do not add multiple floating cards, arrows, mini workflow diagrams, charts, or fake metrics. Keep typography readable and the Hero image visually dominant.

## Responsive behavior

### Desktop

- allow the overlay to overlap the lower part of the Hero image
- keep it compact
- prevent awkward text wrapping
- keep the visual dominant

### Mobile

- keep rows readable
- allow rows to stack naturally
- prevent horizontal overflow
- do not use microscopic text
- do not make the Hero significantly taller
- leave the existing Hero mobile composition otherwise unchanged

## Locked areas

Do not change:

- Hero image
- Hero layout
- Hero headline
- Hero subheadline
- Hero CTA
- Hero reassurance
- Navbar
- StatisticsStrip
- Problem / Challenges
- Solution
- How It Works
- Trust
- Founder
- FAQ
- Final CTA
- Footer

This phase concerns only the Hero activity overlay.

## Expected implementation scope

Likely files:

- `src/components/Hero.tsx`
- optional small Hero activity component if it improves clarity
- `src/index.css`
- `src/lib/i18n.tsx`
- `implementation_update.md`

Do not add a dependency.

## Checklist 1 — Overlay structure

- [x] Remove the current arrow-based workflow overlay.
- [x] Create a compact `Live activity` / `Canlı akış` structure.
- [x] Use one surface only.
- [x] Preserve Hero image dominance.

## Checklist 2 — Bilingual activity copy

- [x] Define natural English activity labels.
- [x] Define natural Turkish equivalents.
- [x] Avoid technical jargon and awkward translation.
- [x] Confirm the copy does not repeat the Solution section.

## Checklist 3 — Animation

- [x] Implement active and completed event states.
- [x] Add subtle fade or slide behavior.
- [x] Add a subtle live-status pulse.
- [x] Use 2.5–3.5 second pacing.
- [x] Implement a gentle loop.

## Checklist 4 — Reduced motion

- [x] Detect `prefers-reduced-motion`.
- [x] Stop cycling when reduced motion is enabled.
- [x] Remove pulse animation when reduced motion is enabled.
- [x] Present a stable, readable state.

## Checklist 5 — Responsive refinement

- [x] Verify desktop behavior.
- [x] Verify at 375px mobile width.
- [x] Verify at 320px mobile width.
- [x] Prevent wrapping and horizontal overflow.
- [x] Preserve Hero height and balance.

## Checklist 6 — Verification

- [x] Verify Turkish and English states.
- [x] Verify no repetition with the Solution section.
- [x] Verify no fake metrics.
- [x] Verify CTA, image, and Hero layout are unchanged.
- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
