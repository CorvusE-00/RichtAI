# Hero micro-refinement — distinct hero signal + reassurance row fix

## Objective

Refine the Hero in two specific ways:

1. Replace the current Hero mini overlay because it repeats process and step-flow logic already used in the Solution section.
2. Fix the desktop Turkish reassurance layout so `Herhangi bir taahhüt yok` and `Doğrudan Emre Kocaaliler ile iletişim` stay on the same row.

This is a narrow Hero refinement only. Do not redesign the whole Hero.

## Current problem

The current Hero mini panel feels too similar to the Solution process structure and too heavy when placed over the image. The Hero needs a different supporting signal that is more visual, premium, distinctive, animation-friendly, and less text-heavy.

## New supporting signal direction

Communicate:

- connected systems working together
- always-on business communication
- website enquiries, WhatsApp/messages, CRM, and scheduling/calendar connected in one operational system

Use a compact visual connected-systems signal instead of a mini step list.

Possible concept labels:

- English: `Connected systems`, `Always-on communication`, or `System sync`
- Turkish: `Bağlı sistemler`, `Sürekli çalışan iletişim akışı`, or `Sistem senkronu`

Choose the clearest and most premium wording.

## Visual and animation direction

Prefer one compact detached panel or rail below the image, near its lower edge, or partially detached from it. It should not feel pasted awkwardly across the photo.

Possible visual elements:

- four small pills, nodes, or markers for Website, WhatsApp, CRM, and Calendar
- a subtle animated pulse, moving highlight, or connection sweep
- one or two micro-status indicators if needed

The result should communicate signal flow and connected operations, not narrate a process.

Do not use another 3-step list, arrow-based sentence flow, numbered steps, long microcopy, fake metrics, dashboard-style statistics, or a heavy text block directly over the image.

Keep the result ambient, elegant, believable, design-forward, readable, restrained, and agency-appropriate.

Animation must be calm, premium, non-gimmicky, and respectful of `prefers-reduced-motion`. Reduced motion should show a static readable final state.

## Reassurance row fix

On Turkish desktop, these must share one row:

- `Herhangi bir taahhüt yok`
- `Doğrudan Emre Kocaaliler ile iletişim`

They may use a centered dot or similar divider. `İlk görüşme yaklaşık 30 dakika sürer.` may remain above as its own line.

Maintain the equivalent clean English structure. Mobile may stack naturally when needed; desktop is the main concern.

## Locked areas

Do not change:

- Hero headline
- Hero subheadline
- Hero CTA
- Hero main image concept
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

This phase concerns only the Hero supporting signal/panel and Hero reassurance row layout.

## Expected implementation scope

Likely files:

- `src/components/Hero.tsx`
- optional small Hero subcomponent if useful
- `src/index.css`
- `src/lib/i18n.tsx`
- `implementation_update.md`

Do not add a dependency.

## Checklist 1 — Hero supporting signal concept

- [x] Remove the repeated mini activity/process overlay direction.
- [x] Replace it with a distinct connected-systems or always-on communication concept.
- [x] Ensure it does not repeat Solution section logic.
- [x] Keep the Hero image visually dominant.

## Checklist 2 — Hero supporting signal visual design

- [x] Decide placement relative to the Hero image.
- [x] Reduce awkward text-over-image treatment.
- [x] Create a more visual, less text-heavy structure.
- [x] Ensure it feels premium and agency-appropriate.

## Checklist 3 — Hero supporting signal animation

- [x] Define subtle motion behavior.
- [x] Use connection, pulse, or highlight-style animation.
- [x] Avoid gimmicky or flashy effects.
- [x] Support `prefers-reduced-motion`.

## Checklist 4 — Reassurance row correction

- [x] Fix Turkish desktop reassurance alignment.
- [x] Keep `Herhangi bir taahhüt yok` and `Doğrudan Emre Kocaaliler ile iletişim` on the same row.
- [x] Preserve clean behavior in English.
- [x] Maintain a sensible mobile fallback.

## Checklist 5 — Responsive refinement

- [x] Verify a large desktop viewport.
- [x] Verify Turkish desktop.
- [x] Verify English desktop.
- [x] Verify 375px mobile.
- [x] Verify 320px mobile.
- [x] Avoid overflow, bad wrapping, and awkward alignment.

## Checklist 6 — Verification

- [x] Confirm the Hero support element is visually distinct from Solution.
- [x] Confirm the Hero remains premium and less repetitive.
- [x] Confirm the reassurance row is fixed.
- [x] Confirm no unrelated sections changed.
- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
