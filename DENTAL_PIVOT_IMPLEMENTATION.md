# Richt AI — Dental-First Sales Pivot

## Positioning decisions

- Current target offer: dental clinics.
- Richt AI remains broad enough to expand into healthcare tourism, other clinics, and other industries.
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
- Lead field names remain unchanged: `name`, `email`, `phone`, `business_name`, `message`. Contact submissions are handled by `ContactModal → /api/lead → Supabase → Resend → Gmail`; the browser no longer writes directly to Supabase.
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

## Run 3 checklist

- [x] P0. Fix known HumanAI mobile connector layout
- [x] P1. Convert StatisticsStrip into a seamless right-to-left value marquee
- [x] P2. Add reduced-motion/static fallback for marquee
- [x] P3. Polish section hierarchy / icon consistency / spacing
- [x] P4. Add restrained micro-interactions where useful
- [x] P5. Remove copy repetition and weak generic phrases
- [x] P6. Full TR/EN conversion QA
- [x] P7. Static responsive QA + document visual-verification limitation
- [x] P8. Technical QA + final diff review
- [ ] P9. Final screenshot checkpoint before commit

## Notes / decisions / QA findings

- Baseline verified before changes: `HEAD` and `origin/main` both equal `3171fb3035217dd1a732b2897615e0ef3a91ca6b`; worktree was clean.
- Checklist rule: mark each item only after its own implementation and QA pass succeeds.
- No pricing section, new sales section, marquee motion, or future structural work is being started in Run 1.
- The real WhatsApp number is unresolved until `VITE_WHATSAPP_NUMBER` is provided; the UI must omit WhatsApp actions when it is unset.
- F2 QA: translation parity is type-safe under `pnpm typecheck`; both locales contain the required sales, FAQ, pilot, and SEO copy, and stats are display-only with six items.
- F3 QA: `pnpm typecheck` passes; the dental demo anchor has the required external-link attributes; `HeroMonolithVisual.tsx` has no diff.
- F4 QA: `pnpm typecheck` passes; CTA surfaces read their labels from i18n, stale free-introduction CTA literals are absent, and the existing modal callback architecture is unchanged.
- F5 QA: `pnpm typecheck` passes; `VITE_WHATSAPP_NUMBER` is optional and normalized to digits before building `wa.me`; unset/short values render no action; modal/footer links use `_blank` + `noreferrer`; the lead field contract remains unchanged and is handled server-side by `/api/lead`.
- F6 QA: `pnpm typecheck` passes; TR and EN title/description strings are present in the locale metadata; warm graphite theme color is `#121416`; the existing OG image path remains `/images/og-richtai.png`.
- F7 QA: TR/EN typecheck passes; 24 FAQ entries are present (12 per locale); prohibited/stale claim scan is clean; dental demo returned HTTP 200; monolith is unchanged; the lead field contract is present and unchanged; no marquee or pricing section was added. The required `Paketler` / `Pricing` nav item remains a future-section placeholder because pricing work is explicitly out of scope for Run 1.
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
- Run 3 baseline: Run 2 is complete through S8 and pushed at `5ecafaa8cf7b7fd484451b2fdc897be2b3c03359`; `HEAD` matches `origin/main` and the worktree is clean.
- P0 QA: HumanAI flow now stacks as card → centered down-arrow on mobile and card → arrow → card horizontally from `sm+`; `pnpm typecheck` passes and no JS or copy changes were added.
- P1 QA: `StatisticsStrip` now uses the six existing dental metrics in two identical CSS track groups, moving right-to-left on a 30-second linear loop with restrained separators, no cards, and no JS motion code; the duplicate group is `aria-hidden`.
- P2 QA: `prefers-reduced-motion: reduce` disables the marquee, hides the duplicate group, and wraps all six values in a static row; typecheck passes.
- P3 QA: audited WhyBuy, Solution, HumanAI, HowItWorks, PilotMeasurement, Pricing, Trust, FAQ, and FinalCTA; adjusted section rhythm, editorial borders, icon consistency, pricing alignment, and mobile spacing without adding gradients, blobs, glassmorphism, stock photography, or card walls.
- P4 QA: added only restrained border/color transitions, a 2px pricing hover lift, subtle icon responses, and pricing CTA arrow movement; typecheck and focused lint pass, with no new animation library or continuous effect.
- P5 editorial gate: reviewed TR first, then EN. Retained necessary pilot, channel, lead, appointment, and coordinator reinforcement at conversion points; changed the process label to distinguish setup-to-measurement and softened a repeated numeric 7/24 phrase in WhyBuy. New section components contain no hardcoded sales copy.
- P6 QA: typecheck passes; all five navbar anchors resolve with no duplicate IDs; each new translation structure appears in both locales; prohibited-claim scan is clean; Starter remains Website OR WhatsApp / one channel; add-ons remain separate; the dental demo CTA retains its external href, `_blank`, and `noreferrer` semantics.
- P7 QA: static code-level responsive audit completed at 1536, 1440, 1280, 1024, 768, 430, 390, and 375px. New Run 3 components have no fixed-width pattern or obvious horizontal-overflow risk; HumanAI, WhyBuy, PilotMeasurement, Pricing, and the marquee fallback stack or wrap safely. Browser viewport verification was not performed because Computer Use could not safely verify the local browser URL, so pixel-perfect visual QA remains pending. Run 2 S7 remains intentionally unchecked.
- P8 QA: `pnpm typecheck`, `pnpm lint`, `pnpm build`, and `git diff --check` all pass. Build reports only the expected unset `VITE_SITE_URL` note. No missing translation parity issue, duplicate section ID, unresolved navbar anchor, Pricing callback regression, Starter web-only wording, stale free-introduction CTA, old Trust nav item, dead StatisticsStrip counter/observer, unused import, unnecessary dependency diff, or obvious new fixed-width overflow pattern was found. `HeroMonolithVisual.tsx` has no diff and no new monolith animation was introduced.
- Run 3 changed files: `DENTAL_PIVOT_IMPLEMENTATION.md`, `src/components/HumanAI.tsx`, `src/components/PilotMeasurement.tsx`, `src/components/Pricing.tsx`, `src/components/StatisticsStrip.tsx`, `src/components/WhyBuy.tsx`, `src/index.css`, and `src/lib/i18n.tsx`.
- Run 3 visual status: P9 remains intentionally unchecked for the final screenshot review; browser viewport verification is still pending.

## Run 4 — Professional Visual Rebuild

- [x] V1. Audit screenshot problems + freeze functional contracts
- [x] V2. Rebuild Hero into a wide editorial/product-stage layout
- [x] V3. Consolidate Problem + WhyBuy into one visual ClinicPain section
- [x] V4. Consolidate Solution + HumanAI into one interactive ProductShowcase section
- [x] V5. Consolidate HowItWorks + PilotMeasurement into one visual Pilot section
- [x] V6. Redesign Pricing / Trust / FAQ / FinalCTA for stronger visual rhythm
- [x] V7. Implement alternating light/dark chapter system + stronger typography hierarchy
- [x] V8. Remove obsolete sections / dead CSS / redundant copy
- [x] V9. Static responsive + TR/EN QA
- [x] V10. Typecheck / lint / build / diff review
- [ ] V11. Final screenshot checkpoint

## Run 4 audit and protected contracts

- Run 4 baseline: `HEAD` is `a98939a1c6cfd24c7bd773645a8894c24f581886`; the worktree was clean before this run. No commit or push is authorized in this run.
- V1 visual audit: the current page is technically sound but visually too long and flat, with too many similar dark sections, repeated explanatory copy, weak editorial rhythm, and insufficient visual proof. The current Hero compresses the copy into a narrow left column beside a shallow monolith; the product moment needs to become a taller composite stage. Problem/WhyBuy, Solution/HumanAI, and HowItWorks/PilotMeasurement each overlap enough to consolidate. Pricing, Trust, FAQ, and Final CTA need clearer contrast, hierarchy, and shorter copy.
- V1 protected contracts: TR remains the default with an EN switch; Navbar, ContactModal, the server-side lead field contract (`name`, `email`, `phone`, `business_name`, `message`), optional WhatsApp environment behavior, SEO metadata behavior, founder identity and portrait, Luma dental prototype preview, pricing amounts, one-channel Starter, add-on boundaries, human-controlled cancel/reschedule, honest pilot pricing, external dental demo link, and reduced-motion support remain protected. The monolith asset remains present and static; it may only be repositioned or demoted.
- V2 QA: the Hero now uses a wide editorial copy block, exact TR/EN parity for the requested headline and CTA hierarchy, a large Luma browser frame, DOM/CSS WhatsApp and result panels, and a small monolith support detail. `pnpm typecheck` passes. Static inspection covers mobile vertical order, desktop stage proportions, constrained text widths, no fixed-width panel overflow, and reduced-motion-compatible live-dot/reveal behavior.
- V3 QA: `ClinicPain.tsx` replaces Problem and WhyBuy with one bone comparison scenario, three concise owner reasons, and one fit line. It uses the requested scenario language without performance claims and includes TR/EN copy.
- V4 QA: `ProductShowcase.tsx` replaces Solution and HumanAI with three local-state tabs for Web, WhatsApp, and Lead + Appointment. It uses the real Luma preview, DOM/CSS operational visuals, human handoff notes, no financial metrics, and TR/EN copy. Typecheck and lint pass.
- V5 QA: `PilotSection.tsx` replaces HowItWorks and PilotMeasurement with one bone chapter, a dominant 14 visual, three process steps, three measurement chips, and the regional line. Pricing is not discussed in the section; typecheck and lint pass.
- V6 QA: Pricing keeps the exact Starter, Growth, Pro, and Pilot values with four bullets per card; Growth is visually dominant; add-ons remain separate. Trust is a bone founder chapter with the real portrait, founder identity, transparency note, and three principles. FAQ now contains exactly eight visible themes and removes references, budget, and "think about it" questions. Final CTA uses the requested light high-contrast copy and live-demo link.
- V7 QA: the chapter rhythm is now dark Hero → dark value strip → bone ClinicPain → dark ProductShowcase → bone PilotSection → dark Pricing → bone Trust → dark FAQ → bone FinalCTA → dark Footer. New chapter headings use varied editorial geometry, large type, shorter paragraphs, and limited kicker treatment.
- V8 QA: removed unused `Problem.tsx`, `WhyBuy.tsx`, `Solution.tsx`, `HumanAI.tsx`, `HowItWorks.tsx`, `PilotMeasurement.tsx`, and the unused `AIWorkflow.tsx`; removed their obsolete i18n structures and old layout CSS. The monolith component/asset remains present and unchanged as a protected static asset.
- V9 QA: static responsive audit covered 1536, 1440, 1280, 1024, 768, 430, 390, and 375px code paths. Hero copy/stage, bone-section contrast, ProductShowcase tabs, Pilot stacking, pricing cards, founder portrait crop, FAQ density, overflow boundaries, and reduced-motion fallback were reviewed for TR and EN. No new fixed-width overflow pattern was found. Browser pixel-perfect verification was not performed; final screenshot review remains pending under V11.
- V10 QA: `pnpm typecheck`, `pnpm lint`, `pnpm build`, and `git diff --check` pass. Build reports only the expected unset `VITE_SITE_URL` note. No unresolved imports, duplicate IDs, broken navbar targets, CTA callback regressions, ContactModal/lead-contract diffs, pricing-value changes, missing Luma or monolith assets, unnecessary dependency changes, or reduced-motion regression was found.
- Run 4 App order: Navbar → Hero → StatisticsStrip → ClinicPain → ProductShowcase → PilotSection → Pricing → Trust → FAQ → FinalCTA → Footer → ContactModal.
- Run 4 changed files: `DENTAL_PIVOT_IMPLEMENTATION.md`, `src/App.tsx`, `src/components/Hero.tsx`, `src/components/ClinicPain.tsx`, `src/components/ProductShowcase.tsx`, `src/components/PilotSection.tsx`, `src/components/Pricing.tsx`, `src/components/Trust.tsx`, `src/components/FAQ.tsx`, `src/components/FinalCTA.tsx`, `src/index.css`, and `src/lib/i18n.tsx`; deleted `src/components/Problem.tsx`, `src/components/WhyBuy.tsx`, `src/components/Solution.tsx`, `src/components/HumanAI.tsx`, `src/components/HowItWorks.tsx`, `src/components/PilotMeasurement.tsx`, and `src/components/AIWorkflow.tsx`.
- Run 4 screenshot status: V11 remains intentionally unchecked for user review. No commit or push is authorized in this run.

## Phase 1 — Dental outreach readiness

- [x] F1. Add visible `hello@getrichtai.com` mailto contact and preserve the existing contact-form button.
- [x] F2. Hide unconfigured social platforms while preserving configured external links.
- [x] F3. Normalize targeted Turkish client-facing wording and brand spelling without changing prices, pilot terms, or claims.
- [x] F4. Align static and runtime homepage metadata with absolute production URLs and the dental-clinic AI assistant positioning.
- [x] F5. Add route-aware runtime metadata and canonical URLs for `/gizlilik-politikasi`, `/kvkk`, and `/cerez-politikasi`.
- [x] F6. Remove the outdated generic Service JSON-LD and keep static/runtime Organization and WebSite structured data aligned.
- [x] F7. Preserve the existing robots/sitemap generation path and document the SPA legal-route indexing limitation.
- [x] F8. Verify typecheck, lint, production build, metadata output, lead payload preservation, and local UI interactions.

### Phase 1 implementation and QA notes

- Footer now shows `hello@getrichtai.com` as a mailto link, keeps the contact-form action, uses “Türkiye genelindeki kliniklere hizmet veriyoruz” / “Serving clinics across Türkiye”, and renders no social item when its URL environment variable is empty.
- Turkish FAQ copy uses “canlı kullanım akışı” and “sistem canlıya alınırken”; client-facing lead labels were narrowed to new-patient enquiry/record wording. Internal API/schema names remain unchanged.
- `index.html` now uses `https://getrichtai.com/` for canonical and Open Graph/Twitter image URLs, with dental-clinic AI assistant alt text. Static and runtime JSON-LD use the same Organization/WebSite graph; no registrations, addresses, ratings, reviews, certifications, or invented Service claims were added.
- Runtime legal-route metadata uses page-specific title, description, and self-canonical URL. Because this is a Vite SPA with a Vercel catch-all rewrite, the static HTML shell remains homepage metadata before hydration; legal pages are not added to the generated sitemap. Prerendering or route-specific static HTML should be considered before treating legal routes as independently crawlable SEO landing pages.
- The mobile hero subheadline remains intentionally hidden below 768px. The H1, supporting accent, artwork, and CTA remain clear in the narrow local preview; no copy/layout change was necessary.
- Local preview verified the mobile hero, Turkish/English legal route metadata, footer mailto link, social hiding behavior with empty env values, modal open/close accessibility tree, and existing lead payload shape. Browser-control constraints prevented separate pixel screenshots at every requested desktop width; the responsive code audit covered the 375, 390, 768, and 1440px breakpoint paths.
- Lighthouse is unavailable in this repository/environment (`lighthouse`, Playwright, and Puppeteer are not installed), so no performance scores or LCP/FCP/CLS/TBT numbers are reported. Primary hero PNGs remain unchanged to preserve visual quality; the largest active hero assets are approximately 2.1 MB each and should be revisited with an approved image-encoding workflow.
- Phase 1 validation: `pnpm.cmd run typecheck`, `pnpm.cmd run lint`, `pnpm.cmd run build`, and `git diff --check` pass. No production lead was submitted, and no Supabase/API contract, migration, Resend flow, pricing, hero artwork, ProductShowcase structure, or founder content was changed.

## Mobile footer layout fix

- [x] M1. Change the mobile footer utility area to a balanced Site Map / Legal two-column row with a full-width Contact row below it.
- [x] M2. Keep the desktop footer layout unchanged at 768px and above while improving mobile contact spacing, readable 14px utility text, icon alignment, and non-wrapping email/action labels.
- [x] M3. Preserve TR/EN copy, mailto behavior, contact-modal behavior, optional WhatsApp behavior, and all existing footer link targets.
- [x] M4. Run typecheck, lint, production build, responsive code audit, and local footer interaction checks.

### Mobile footer QA notes

- At mobile widths below 768px, `.footer__utility-grid` now uses two columns and `.footer__contact` spans both columns. The existing `display: contents` behavior at 768px and the existing four-column desktop layout at 1024px were not changed.
- The contact email and form action use semantic classes with `white-space: nowrap`, `overflow-wrap: normal`, and `word-break: normal`; the generic `overflow-wrap:anywhere` rule was removed from the footer utility links/buttons. The Turkish location label is now the compact `Türkiye genelindeki kliniklere` while the English copy remains `Serving clinics across Türkiye`.
- Local preview at the available approximately 378px CSS viewport (363px layout client width) confirmed two balanced utility columns, a full-width contact block, one-line `hello@getrichtai.com`, no horizontal overflow (`scrollWidth === clientWidth`), and a readable footer screenshot. The browser environment did not expose a viewport override, so exact 320, 375, 390, 430, 768, and 1440px screenshots were not available; the breakpoint paths were audited statically for those widths.
- TR and EN footer accessibility trees expose the expected Site Map, Legal, Contact, mailto, and contact-form controls. The contact modal opened and closed successfully, the Privacy Policy link navigated to `/gizlilik-politikasi`, and no production lead was submitted.
- Validation: `pnpm.cmd run typecheck`, `pnpm.cmd run lint`, `pnpm.cmd run build`, and `git diff --check` pass. No API, form, Supabase, Resend, SEO, or other-section changes were made.

