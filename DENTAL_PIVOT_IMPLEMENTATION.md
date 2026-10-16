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

## Run 2 placeholder checklist

- [ ] Define and validate future structural / pricing work.
- [ ] Do not execute in Run 1.

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

