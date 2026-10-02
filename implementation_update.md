# Hero V2 — Visual-led AI automation agency hero

## Objective

Redesign the current Hero so it feels less text-heavy and less like “headline + large SaaS dashboard” and more like a premium founder-led AI automation and digital systems agency.

The new Hero must work equally well on desktop and mobile. The current full `AIWorkflow` panel does not need to remain rendered in the Hero, but the component itself must be preserved for possible later reuse.

## Core direction

- Left: existing headline direction, new supporting copy, existing CTA, and quiet reassurance.
- Right: one strong AI automation / business operations visual with one small operational proof overlay.
- Add a meaningful image before the Problem section so the opening feels more visual-led and less text/UI-heavy.
- Keep the visual premium, calm, realistic, and understated.

## Copy update

Keep the existing headline direction and CTA. Replace only the Hero supporting copy in both languages:

- English: `AI automation, customer-facing systems and modern web experiences — built to reduce manual work and keep every interaction moving.`
- Turkish: `Manuel işleri azaltan, müşteri iletişimini düzenleyen ve dijital deneyimi güçlendiren yapay zekâ otomasyonları ve modern web sistemleri.`

Do not change other site copy, add another CTA, or alter CTA behavior.

## Hero visual asset

Preferred asset path: `public/images/ai-operations-hero.webp`; the built-in generator produced a lossless PNG, so the implementation uses the equivalent `public/images/ai-operations-hero.png` asset.

The visual should communicate AI automation quietly running modern business operations:

- premium dark workspace
- laptop or desktop interface with phone/message context
- clean business environment
- modern, realistic, calm, and premium
- subtle teal/cyan reflections
- relevant to customer communication, CRM/lead handling, appointments, or workflow systems

Avoid robots, brains, holograms, glowing neural networks, cyberpunk imagery, generic corporate stock, handshakes, fake metrics, nonsense text, and exaggerated futuristic interfaces.

If image generation is unavailable, use a clearly replaceable placeholder asset and record that limitation before implementation. Do not use the dental screenshot in the Hero; it remains reserved for the Digital Experience capability.

## Desktop composition

- Use an asymmetric two-column layout with approximately 43–46% copy and 54–57% visual.
- Keep the copy on the left and the large image-led composition on the right.
- Preserve a restrained frame, minimal border, and subtle shadow.
- Do not use a generic heavy card, perspective transform, tilt, multiple floating cards, or strong glow.
- Make the image more visually important than the current Hero workflow panel.

## Operational proof overlay

Replace the full current `AIWorkflow` rendering in the Hero with one compact overlay associated with the visual.

The overlay may summarize a flow such as:

`New enquiry → Qualified → CRM updated → Appointment booked`

Requirements:

- one small overlay only
- dark Richt surfaces
- teal reserved for meaningful success/status
- responsive desktop/mobile treatment
- no fake metrics or claims
- no stack of floating UI cards

## Mobile composition

Below 640px, use this deliberate order:

1. headline
2. subheadline
3. hero visual
4. operational proof
5. CTA
6. reassurance

Do not simply stack the desktop layout. At 320–390px:

- keep the visual comfortable and meaningful
- prevent horizontal overflow
- avoid microscopic browser chrome
- allow the proof overlay to become a simple strip beneath the image
- prioritize image quality and composition over fitting the entire Hero into one viewport
- ideally show the navbar, full headline, subheadline, and a meaningful portion or all of the visual in a common 375px viewport

The CTA may appear near the bottom of the first viewport or shortly after scroll.

## Hero height and language

- Make the new structure naturally accommodate Turkish and English.
- Audit the existing Turkish-specific Hero height and spacing hacks after the redesign.
- Remove obsolete Hero-only Turkish overrides only when the new structure makes them unnecessary.
- Do not remove legacy overrides during planning.

## CTA and reassurance

Keep the existing:

- CTA behavior
- CTA text
- first-call duration
- no-commitment message
- direct contact with Emre Kocaaliler

Keep reassurance visually secondary and do not add another CTA.

## Locked areas

Do not modify:

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
- ContactModal
- Supabase
- metadata
- dental prototype visual
- chatbot

Only Hero-related code, Hero-related copy keys, Hero CSS, the Hero visual asset, and this plan are in scope. Do not add dependencies unless absolutely necessary.

## Expected file scope

- `src/components/Hero.tsx`
- `src/index.css`
- `src/lib/i18n.tsx`
- optional small Hero-specific component if necessary
- `public/images/ai-operations-hero.png`
- `implementation_update.md`

## Checklist 1 — Hero structure

- [x] Implement the new desktop asymmetric composition.
- [x] Implement the deliberate mobile composition order.
- [x] Remove full `AIWorkflow` rendering from the Hero without deleting the component.
- [x] Preserve existing CTA behavior.
- [x] Preserve the left-copy/right-visual relationship.

## Checklist 2 — Copy

- [x] Update the English Hero supporting copy exactly as approved.
- [x] Update the Turkish Hero supporting copy exactly as approved.
- [x] Keep the existing headline direction unchanged.
- [x] Keep the existing CTA text unchanged.
- [x] Verify no unintended copy changes elsewhere.

## Checklist 3 — Hero visual asset

- [x] Create or add `public/images/ai-operations-hero.png` as the lossless generator output; retain the preferred WebP path as a future optimization option.
- [x] Verify the visual direction is premium, realistic, calm, and operations-focused.
- [x] Confirm no stock, robot, brain, cyberpunk, hologram, or sci-fi clichés.
- [x] Confirm no fake proof, metrics, or nonsense interface text.
- [x] Confirm the asset is replaceable and does not reuse the dental prototype screenshot.

## Checklist 4 — Operational proof overlay

- [x] Implement one compact operational flow overlay.
- [x] Use existing translated concepts where appropriate.
- [x] Provide restrained desktop and mobile treatment.
- [x] Keep the overlay subordinate to the visual.
- [x] Confirm no fake metrics and no additional floating cards.

## Checklist 5 — Responsive refinement

- [x] Verify Turkish at 320px.
- [x] Verify Turkish at 375px.
- [x] Verify English at 375px.
- [x] Verify intermediate layout at 768px.
- [x] Verify desktop at 1440×900.
- [x] Verify desktop at 1920×1080.
- [x] Verify both EN/TR language states.
- [x] Confirm no horizontal overflow.
- [x] Confirm the mobile visual remains meaningful and readable.
- [x] Confirm the CTA and reassurance remain visually secondary to the visual-led Hero.

## Checklist 6 — Legacy cleanup

- [x] Remove obsolete Hero-only Turkish desktop overrides after the new structure made them unnecessary.
- [x] Remove the unused Hero `AIWorkflow` import after the rendering was removed.
- [x] Preserve `AIWorkflow.tsx` for possible later reuse.
- [x] Confirm no unrelated section styles or components were changed.

## Checklist 7 — Verification

- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
- [x] Confirm the CTA still opens `ContactModal`.
- [x] Confirm TR/EN switching still works.
- [x] Confirm no horizontal overflow at mobile widths.
- [x] Confirm the transition into StatisticsStrip remains intentional.
- [x] Confirm the dental prototype visual remains unchanged.
- [x] Confirm no unrelated section changed.

## Hero V2 implementation record

- Replaced the Hero’s full workflow panel with a generated operations workspace visual and one compact, translated operational proof overlay.
- Updated only the Hero supporting copy in English and Turkish; headline, CTA behavior, reassurance, and all locked sections remain intact.
- Added deliberate mobile order: headline → subheadline → visual → proof → CTA → reassurance.
- Removed obsolete Turkish-only Hero height/typography overrides and the unused Hero-specific workflow CSS rule; preserved `AIWorkflow.tsx` for later reuse.
- Verification: responsive browser checks at TR 320/375px, EN 375px, 768px, TR/EN 1440×900, TR/EN 1920×1080; `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed.
