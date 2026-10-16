# Richt Ai — Dental-First Sales Pivot

## Positioning decisions

- Current target offer: dental clinics.
- Richt Ai remains broad enough to expand into healthcare tourism, other clinics, and other industries.
- Hero wording uses “Diş Klinikleri İçin...” rather than “Diş Kliniklerine Özel...”.
- Pilot applications are open across Türkiye; first field rollout focus is Kuşadası & Aydın.
- Starter is one channel: Website or WhatsApp.
- Website redesign/refresh and additional custom work are add-ons quoted separately.
- Pilot language is a 14-day pilot at 0–2.500 ₺ depending on scope / pilot arrangement; it is not universally free.
- No guaranteed revenue, invented case studies, clients, testimonials, conversion rates, patient values, market statistics, or active-installation claims.

## Protected visual / functional contracts

F1 audit completed against the requested component set.

- `HeroMonolithVisual` implementation, monolith asset, window treatment, hero background treatment, and current static desktop/tablet/mobile behavior are frozen.
- No monolith motion or visual redesign is in scope.
- Mermaid logo and founder portrait remain unchanged.
- Supabase lead insert behavior and field names remain unchanged: `name`, `email`, `phone`, `business_name`, `message`.
- Language switch behavior remains unchanged.
- Reveal observer and the existing section visual system/palette remain unchanged.
- Existing responsive baseline remains unchanged.
- `ContactModal` open/close behavior remains unchanged.

## Run 1 checklist

- [x] F1. Audit and freeze protected contracts
- [x] F2. Update TR + EN sales copy in i18n
- [x] F3. Upgrade Hero conversion content without touching monolith visual
- [x] F4. Align global CTA language around the 14-day pilot
- [x] F5. Update ContactModal copy + prepare optional WhatsApp contact config
- [x] F6. Update SEO metadata copy
- [x] F7. Copy/schema/functional QA
- [x] F8. Typecheck / lint / build / diff-check

## Run 2 checklist

- [x] S1. Add WhyBuy section + ideal-fit subsection
- [x] S2. Add Human + AI section
- [x] S3. Add Pilot Measurement section
- [x] S4. Add Pricing section + package schema
- [x] S5. Wire sections into App + navigation
- [x] S6. Add coherent iconography / supporting visuals
- [ ] S7. Responsive + TR/EN content QA
- [x] S8. Typecheck / lint / build / diff-check

## Run 3 placeholder checklist

- [ ] Define and validate future motion / broader conversion work.
- [ ] Do not execute in Run 1.

## Notes / decisions / QA findings

- Baseline verified before changes: `HEAD` and `origin/main` both equal `3171fb3035217dd1a732b2897615e0ef3a91ca6b`; worktree was clean.
- Checklist rule: mark each item only after its own implementation and QA pass succeeds.
- No pricing section, new sales section, marquee motion, or future structural work is being started in Run 1.
- The real WhatsApp number is unresolved until `VITE_WHATSAPP_NUMBER` is provided; the UI must omit WhatsApp actions when it is unset.
- F2 QA: translation parity is type-safe under `pnpm typecheck`; both locales contain the required sales, FAQ, pilot, and SEO copy, and stats are display-only with six items.
- F3 QA: `pnpm typecheck` passes; the dental demo anchor has the required external-link attributes; `HeroMonolithVisual.tsx` has no diff.
- F4 QA: `pnpm typecheck` passes; CTA surfaces read their labels from i18n, stale free-introduction CTA literals are absent, and the existing modal callback architecture is unchanged.
- F5 QA: `pnpm typecheck` passes; `VITE_WHATSAPP_NUMBER` is optional and normalized to digits before building `wa.me`; unset/short values render no action; modal/footer links use `_blank` + `noreferrer`; Supabase insert fields and handler remain unchanged.
- F6 QA: `pnpm typecheck` passes; TR and EN title/description strings are present in the locale metadata; warm graphite theme color is `#121416`; the existing OG image path remains `/images/og-richtai.png`.
- F7 QA: TR/EN typecheck passes; 24 FAQ entries are present (12 per locale); prohibited/stale claim scan is clean; dental demo returned HTTP 200; monolith is unchanged; Supabase insert fields are present and unchanged; no marquee or pricing section was added. The required `Paketler` / `Pricing` nav item remains a future-section placeholder because pricing work is explicitly out of scope for Run 1.
- F8 QA: `pnpm typecheck`, `pnpm lint`, `pnpm build`, and `git diff --check` all pass. Build reports only the expected unset `VITE_SITE_URL` note.
- F8 changed files: `.env.example`, `index.html`, `public/site.webmanifest`, `src/components/ContactModal.tsx`, `src/components/Footer.tsx`, `src/components/Hero.tsx`, `src/components/Solution.tsx`, `src/components/StatisticsStrip.tsx`, `src/components/Trust.tsx`, `src/lib/i18n.tsx`, `src/lib/siteMetadata.ts`, and `src/lib/whatsapp.ts`; plus this implementation document.
- The real WhatsApp number remains unresolved: `VITE_WHATSAPP_NUMBER` is intentionally blank in `.env.example`, so no WhatsApp action renders until a real international number is configured.
- Run 2 baseline: Run 1 is complete and pushed at `2709b58e209e83c34fd5041c053cd97ecccd318d`; the worktree is clean and `HEAD` matches `origin/main`.
- S1 QA: `WhyBuy.tsx` and its TR/EN `whyBuy` copy compile and lint cleanly; outcomes use four editorial bands plus the ideal-fit subsection.
- S2 QA: `HumanAI.tsx` and its TR/EN `humanAI` copy compile and lint cleanly; the flow is DOM-based with lightweight connectors and no heavy animation.
- S3 QA: `PilotMeasurement.tsx` and its TR/EN `pilotMeasurement` copy compile and lint cleanly; measurement blocks are semantic and contain no fabricated counts.
- S4 QA gate: `Pricing.tsx` and the TR/EN pricing schema pass typecheck and lint. Starter explicitly says Website OR WhatsApp — 1 channel; Growth is recommended; Pro excludes guaranteed mobile website work; add-ons are separate; pilot pricing is honest; no discount, checkout, payment, or prohibited web-only text exists; all plan CTAs use the existing ContactModal callback; monolith diff is empty.
- S5 QA: `App.tsx` matches the required section order, Pricing receives `openContact`, and both locale nav maps target `sorun`, `cozum`, `nasil-calisir`, `paketler`, and `sss`; typecheck passes.
- S6 QA: new sections use Lucide icons with selective teal accents, lightweight DOM connectors, no generic gradients, glassmorphism, stock photography, dashboard claims, fake performance numbers, or marquee motion; monolith diff is empty.
- S7 implementation-side responsive audit completed statically. Browser viewport verification was deferred because Computer Use could not safely verify the local browser URL. Final visual verification remains pending and will be completed during the later screenshot/final QA checkpoint.
- S7 static findings: new sections default to one column and use `sm` / `lg` breakpoints; HumanAI flow items use `min-w-0` and stack arrows on mobile; WhyBuy fit items and PilotMeasurement blocks stack safely; Pricing price grids remain two columns with wrapping text, Growth badge stays within its card, and CTAs are full-width with a 48px minimum height. No new fixed-width or obvious horizontal-overflow pattern was found.
- S8 QA: `pnpm typecheck`, `pnpm lint`, `pnpm build`, and `git diff --check` pass. The build reports only the expected unset `VITE_SITE_URL` note.
- S8 static integrity checks: no duplicate section IDs; all navbar anchors resolve to existing sections; Pricing receives the existing contact-modal callback; Starter remains Website OR WhatsApp / one channel; website redesign and custom work remain add-ons; no package or lockfile dependency diff; `HeroMonolithVisual.tsx` has no Run 2 diff; no new fixed-width or animation pattern is present.
- Run 2 components created: `src/components/WhyBuy.tsx`, `src/components/HumanAI.tsx`, `src/components/PilotMeasurement.tsx`, and `src/components/Pricing.tsx`.
- Run 2 section order: Hero → StatisticsStrip → Problem → WhyBuy → Solution → HumanAI → HowItWorks → PilotMeasurement → Pricing → Trust → FAQ → FinalCTA.
- Pricing decisions: Starter is exactly one selected channel (Website OR WhatsApp); Growth is recommended; Pro does not guarantee mobile website work; website refresh, landing pages, integrations, reporting, and custom automation are separate add-ons; no checkout or payment system was added.
- Visual QA remains pending because browser viewport verification was unavailable; S7 remains intentionally unchecked.

