# Richt Ai — Design, Language & Metadata Implementation Plan

Status: **Metadata implementation in progress — canonical domain pending**
Last updated: 2026-09-29
Project: `C:\Users\Emre\Desktop\RichtAI`

> This plan replaces the previous implementation plan and is the shared checklist for the active implementation.

## 0. Metadata and social preview update

The next update will replace Bolt’s default preview metadata with Richt Ai’s own website snapshot and a complete, production-ready metadata system. This phase is plan-only until implementation is explicitly approved.

### Current metadata audit

- `index.html` still points `og:image` and `twitter:image` to `https://bolt.new/static/og_default.png`.
- Open Graph title, description, URL, site name, type, and locale are not fully defined.
- X/Twitter title and description are not explicitly defined, even though a large-image card is requested.
- The current page has a Turkish default title and description; the in-app language switch already updates the document language, title, and description, but social metadata needs the same treatment.
- The favicon still references the Vite starter asset instead of the Richt Ai brand.
- There is no checked-in canonical URL, `robots.txt`, `sitemap.xml`, web manifest, or structured organization/service data.
- Production-domain-dependent values must not be guessed. The canonical origin should be confirmed before implementation.

### Metadata goals

1. Replace all Bolt preview references with a Richt Ai-owned social image.
2. Make the website identify itself consistently across browser tabs, search engines, LinkedIn, Facebook, WhatsApp, Telegram, Discord, and X/Twitter.
3. Support the existing Turkish/English switch without creating contradictory title, description, or locale values.
4. Add structured data that describes Richt Ai accurately without inventing reviews, awards, addresses, phone numbers, or social handles.
5. Add the crawler and installable-site basics expected from a finished production website.
6. Verify the final preview image, metadata values, image dimensions, loading behavior, and canonical-domain setup before publishing.

### Website snapshot / social image plan

Create a purpose-built `1200 × 630` social preview asset rather than using Bolt’s generic image or a raw full-page screenshot.

- Base the composition on the finished Richt Ai hero: navy background, teal/cyan glow, mermaid brand mark, headline, and restrained AI workflow.
- Keep the focal content inside the central safe area so LinkedIn, Facebook, WhatsApp, Discord, and X/Twitter crops do not remove the brand or headline.
- Use a high-contrast, readable headline at thumbnail size; avoid tiny navigation text, long paragraphs, browser chrome, or transient animation frames.
- Keep the visual truthful: no unsupported metrics, fake client logos, placeholder testimonials, or claims that are not present in the approved site copy.
- Export a broadly compatible PNG or optimized WebP fallback under a practical file size; use an absolute production URL in the final metadata.
- Consider a separate English image only if the site will later expose crawlable language-specific URLs. Until then, use the Turkish-default/brand-safe image for the canonical page and update in-browser metadata for the selected language.

### Metadata matrix

#### Base document metadata

- Set the final production `<title>` and concise `<meta name="description">` in Turkish as the canonical default.
- Keep `html[lang]` synchronized with the selected language and update the client-side title/description when the visitor switches language.
- Add `meta[name="author"]`, `meta[name="theme-color"]`, and a canonical link using the confirmed production origin.
- Keep the viewport and font preconnect tags, but remove starter-specific or irrelevant metadata.
- Do not add keyword stuffing; prioritize a clear title, useful description, and accurate structured data.

#### Open Graph metadata

Add and keep synchronized:

- `og:type=website`
- `og:site_name=Richt Ai`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `og:image:secure_url`
- `og:image:type`
- `og:image:width=1200`
- `og:image:height=630`
- `og:locale=tr_TR`
- `og:locale:alternate=en_US`

The initial static values must work for crawlers that do not execute JavaScript. Client-side language switching may update the visible page and corresponding metadata for human visitors, but it must not replace the stable Turkish-default metadata used by social crawlers.

#### X/Twitter metadata

Add:

- `twitter:card=summary_large_image`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `twitter:image:alt`

Only add `twitter:site` or `twitter:creator` after an actual Richt Ai handle is confirmed. Do not invent one.

#### Structured data

Add JSON-LD for an accurate `Organization` or `ProfessionalService` and `WebSite` entry:

- Brand name: `Richt Ai`.
- Founder: `Emre Kocaaliler`, only where already approved for public display.
- Services: modern web design/development and AI automation.
- Available languages: Turkish and English.
- Service availability: online / Türkiye and worldwide, matching the approved footer copy.
- Canonical URL and logo/social URLs only after they are confirmed.

Do not add `AggregateRating`, `Review`, `PostalAddress`, `telephone`, `sameAs`, or social profile URLs until real, approved values exist.

#### Brand and crawler assets

- Replace the Vite favicon with a Richt Ai favicon derived from the approved mermaid/brand mark.
- Add an Apple touch icon and a minimal `site.webmanifest` with the Richt Ai name, theme color, and icon references.
- Add `public/robots.txt` pointing crawlers to the confirmed sitemap.
- Add `public/sitemap.xml` for the canonical landing-page URL; do not create fake language routes for the current single-page app.
- Ensure all referenced assets resolve correctly from the production root and remain compatible with the selected hosting provider.

### Metadata implementation phases

#### M0 — Domain and content approval

- Confirm the exact production domain, preferred canonical form (`https://domain` vs `https://www.domain`), and redirect direction.
- Confirm the final Turkish and English title/description wording.
- Confirm whether the social preview should be Turkish-default, language-neutral, or accompanied by future locale-specific images.
- Confirm any official social handles and profile URLs before adding them to metadata.

#### M1 — Create and verify the website snapshot

- Capture the finished local website at a stable desktop state with animations settled.
- Compose the 1200 × 630 social card around the hero and brand mark.
- Inspect the image at thumbnail size and on dark/light social surfaces.
- Store the approved asset under `public/images/` and remove all Bolt image references.

#### M2 — Implement base, Open Graph, X/Twitter, and language-aware metadata

- Centralize site metadata constants so title, description, canonical URL, image URL, and locale values cannot drift between tags.
- Update static HTML metadata for crawler compatibility.
- Extend the language switch behavior to update only the metadata that should change at runtime.
- Add image dimensions, alt text, secure URL, canonical URL, and locale alternates.

#### M3 — Add structured data and crawler assets

- Add accurate JSON-LD for the organization/service and website.
- Add favicon, Apple touch icon, manifest, `robots.txt`, and `sitemap.xml`.
- Confirm no sensitive data, unpublished contact details, or placeholder social URLs are exposed.

#### M4 — Preview and search QA

- Test the canonical page source with JavaScript disabled or before hydration to confirm the default metadata is complete.
- Validate the JSON-LD with a structured-data validator.
- Check the social card with LinkedIn/Facebook sharing preview tools and an X/Twitter-compatible card preview tool where available.
- Confirm the image loads over HTTPS, is not blocked by robots rules, and has no Bolt URL remaining.
- Test Turkish and English browser switching, browser-tab title changes, and mobile layout after metadata changes.
- Re-run `pnpm typecheck`, `pnpm lint`, `pnpm build`, and the local browser smoke test.

## 1. New direction

The current visual direction is strong, but the next update should make the experience feel tighter, more credible, and more natural in Turkish.

Primary goals:

1. Remove the visually empty hero tail shown in the attached screenshot.
2. Remove the small scroll-indicator element shown at the bottom of that area.
3. Rewrite all visible Turkish copy so it sounds like natural, confident Turkish rather than literal or incomplete translation.
4. Preserve the premium dark navy/teal identity while reducing unnecessary visual space and decorative noise.
5. Improve trust and conversion with clearer proof, service explanation, and calls to action.

## 2. Attached-section interpretation

The attached image shows a large, almost empty dark area below the hero content with a small scroll indicator at the bottom center. The implementation should:

- Remove the scroll indicator entirely.
- Reduce the hero’s vertical footprint so it is not forced to fill an unnecessarily tall viewport.
- Keep enough top and bottom spacing for the hero to breathe without creating a dead zone.
- Let the statistics strip or next section begin naturally after the hero.
- Verify that the change does not cause the fixed navbar to overlap the first content.
- Check desktop and mobile separately; mobile should not inherit desktop-sized empty spacing.

The intended result is a compact, intentional hero ending—not a second section and not a blank continuation.

## 3. Copywriting principles

All copy should be reviewed as original Turkish marketing copy, not translated word by word.

- Use correct Turkish characters: `ç, ğ, ı, İ, ö, ş, ü`.
- Prefer natural business language over exaggerated marketing language.
- Keep sentences short and conversational.
- Use consistent terminology: choose one form for `web sitesi`, `otomasyon`, `randevu`, `yapay zekâ`, `tanışma görüşmesi`, and `işletme`.
- Avoid unsupported promises such as guaranteed revenue, guaranteed appointment growth, or universal time savings.
- Clearly label illustrative metrics, placeholder testimonials, and placeholder logos until factual proof is approved.
- Use “siz” consistently and keep the tone calm, direct, and personal.
- Use proper Turkish capitalization in headings and buttons.

## 4. Proposed copy direction

These are draft directions for approval during implementation; they are not code changes yet.

### Hero

- Eyebrow: `İşletmeler için modern web ve yapay zekâ çözümleri`
- Main heading direction: one clear, outcome-led promise such as `İşletmenizin dijital iletişimini daha akıllı hâle getirin.`
- Remove the current typewriter service list because it repeats the eyebrow and makes the hero feel like two competing messages.
- Recommended replacement animation: a restrained AI workflow visualization with three connected stages:
  - `Ziyaretçi`
  - `Akıllı yanıt`
  - `Randevu`
- Animate the connection signal and stage emphasis gently so the page communicates an intelligent system without looking like a software demo or a loading screen.
- Supporting copy direction: `Web sitenizi ve müşteri iletişiminizi daha düzenli, hızlı ve anlaşılır hâle getirin.`
- Primary CTA: `Ücretsiz tanışma görüşmesi`
- Trust line direction: `Herhangi bir taahhüt yok · Doğrudan Emre Kocaaliler ile`

### Recommended hero animation alternatives

The preferred direction is the AI workflow because it explains the value visually and avoids repeating service names. Two backup options remain available if the workflow feels too literal:

1. `Signal pulse`: a small stream of visitor questions flowing into an intelligent response node and then toward a calendar/rendezvous icon.
2. `Living interface`: a quiet, abstract dashboard fragment with incoming message, response, and appointment states appearing in sequence.

Avoid a rotating 3D brain, noisy particle field, fake terminal code, or a second large text animation. Those treatments would add visual activity without making the offer clearer.

### Design improvement recommendations

- Keep the badge as the category label and give the headline one job: communicate the business outcome.
- Replace `Tek kişi` in the statistics strip with the more benefit-oriented `Tek iletişim noktası`.
- Add a short reassurance below the CTA: `İlk görüşme yaklaşık 30 dakika sürer.`
- Follow the hero with a compact three-part service summary: `Web sitesi`, `Akıllı iletişim`, `Randevu akışı`.
- Keep Emre Kocaaliler in the first-screen trust line, then use the full founder name only in the Güven section.
- Preserve the dark navy/teal identity, but reduce simultaneous glow, grid motion, and text motion so the workflow remains the visual focus.
- Respect `prefers-reduced-motion`: show the three workflow stages statically and remove pulsing or moving transitions.
- Verify the new animation at 320px, 375px, tablet, and desktop widths so it never causes clipping or layout shift.

### Statistics strip

Use only approved or explicitly illustrative values. Possible labels:

- `7/24 otomatik yanıt`
- `%40 daha az zaman kaybı` — only if approved; otherwise use `Daha az manuel iş`
- `2× daha fazla online randevu` — only if evidence exists; otherwise use `Daha düzenli randevu akışı`
- `1:1 doğrudan destek`

### Problem section

- Heading direction: `İşletmenizin dijital tarafı neden hâlâ bu kadar yorucu?`
- Transition question: `Bu durumlardan biri size de tanıdık geliyor mu?`
- Rewrite each card to use clear, idiomatic Turkish and remove awkward literal phrasing.

### Solution section

- Pillar 1: `Güven veren web siteleri`
- Pillar 2: `Akıllı otomasyon sistemleri`
- Supporting copy should explain the customer benefit first, then the technology.
- Replace technical phrases such as `SEO optimized` with natural Turkish, for example `Arama motorları için sağlam bir temel`.

### How it works

- Section label: `Nasıl çalışır?`
- Step 1: `Tanışma görüşmesi`
- Step 2: `Tasarım ve kurulum`
- Step 3: `Sürekli destek ve gelişim`
- Duration labels: `30 dakika`, `1–2 hafta`, `İhtiyaç oldukça`

### Trust

- Replace awkward testimonial language with concise, believable customer wording.
- Keep placeholder testimonials and logos visibly marked until real proof is supplied.
- Founder role direction: `Kurucu ve yapay zekâ otomasyonu uzmanı`.
- Rewrite the solo-agency message around direct communication, accountability, and continuity.

### Follow-up copy refinement

- [x] R1 Replace regional service positioning with professional, location-neutral language.
- [x] R2 Reduce repeated founder-name mentions while keeping the founder profile clear.
- [x] R3 Remove explanatory placeholder notes while retaining the placeholder content itself.
- [x] R4 Update the Trust section, FAQ answer, and footer contact line to match the broader service area.

### FAQ

Use calm, natural questions:

- `Bütçemi aşar mı?`
- `Tek kişiyle çalışmak yeterli olur mu?`
- `Ne kadar sürede hazır olur?`
- `Mevcut web sitemi değiştirmem gerekir mi?`
- `Şehir dışındaki işletmelerle de çalışıyor musunuz?`

### Final CTA, modal, and footer

- Replace `Hadi sakin bir konuşma yapalım` only if a more natural approved option is chosen; candidate: `İşletmeniz için doğru başlangıcı birlikte bulalım`.
- Use `Ücretsiz tanışma görüşmesi` consistently across all buttons.
- Replace `Borcunuz yok`/`borçlu değilsiniz` phrasing with `Herhangi bir taahhüt yok` where appropriate.
- Use `Mesajınız doğrudan bana ulaşır.` as the personal contact note.
- Rewrite footer labels and contact text with correct Turkish spelling and capitalization.

## 5. Implementation phases

### Phase 0 — Content and scope approval

- Review every visible string in the current page.
- Approve the final Turkish copy matrix before editing components.
- Decide which statistics are factual, illustrative, or removed.
- Decide whether testimonials and logos remain placeholders or are replaced with approved proof.
- Confirm that the attached blank hero tail and scroll indicator are the exact elements to remove.

### Phase 1 — Hero cleanup

- Remove the scroll-indicator markup and its animation.
- Replace the full-viewport hero sizing with content-led spacing.
- Tune top/bottom padding separately for desktop and mobile.
- Check the transition from Hero to StatisticsStrip so the page feels continuous.
- Preserve the hero background depth without using empty height as a visual effect.

### Phase 2 — Full Turkish copy rewrite

- Update Hero, Navbar, StatisticsStrip, Problem, Solution, HowItWorks, Trust, FAQ, FinalCTA, ContactModal, and Footer.
- Remove ASCII Turkish and awkward literal phrases.
- Normalize CTA wording, terminology, punctuation, capitalization, and tone.
- Review every heading at desktop and mobile widths for natural line breaks.

### Phase 3 — Trust and conversion refinement

- Add one approved case study or a clearly labelled example if real proof is not ready.
- Replace unsupported performance claims with benefit-led language.
- Clarify the two service pillars in one scan.
- Make the primary CTA consistent across the entire page.
- Keep the contact form short, personal, and easy to complete.

### Phase 4 — Visual polish after copy lock

- Rebalance spacing after the shorter hero is implemented.
- Reduce any remaining empty areas or over-large gaps.
- Keep glow, grid, hover, and reveal effects restrained.
- Ensure typography supports the new Turkish line lengths.
- Confirm the statistics strip does not feel detached from the hero.

### Phase 5 — Responsive, accessibility, and content QA

- Test at approximately 320px, 375px, 768px, and desktop widths.
- Check for awkward Turkish line breaks and clipped text.
- Verify keyboard navigation, focus states, FAQ semantics, modal behavior, and reduced motion.
- Confirm no section is visually empty after the hero cleanup.
- Check contrast and tap-target sizes.
- Run typecheck, lint, build, and local browser smoke tests.

## 6. File impact map

Expected implementation files, after approval:

- `src/components/Hero.tsx` — remove empty hero tail/scroll indicator; rewrite hero copy.
- `src/components/AIWorkflow.tsx` — render the animated `Ziyaretçi → Akıllı yanıt → Randevu` hero workflow.
- `src/components/Typewriter.tsx` — removed after the duplicated typewriter implementation was replaced.
- `src/components/MermaidMark.tsx` — render the code-native mermaid brand mark in the navbar and footer.
- `src/components/Navbar.tsx` — normalize labels and CTA copy.
- `src/components/StatisticsStrip.tsx` — review metric wording and evidence labels.
- `src/components/Problem.tsx` — rewrite headings, question, and cards.
- `src/components/Solution.tsx` — rewrite service pillars and feature descriptions.
- `src/components/HowItWorks.tsx` — rewrite steps and duration labels.
- `src/components/Trust.tsx` — rewrite testimonials, founder copy, and placeholder notice.
- `src/components/FAQ.tsx` — rewrite questions and answers.
- `src/components/FinalCTA.tsx` — rewrite closing message and personal note.
- `src/components/ContactModal.tsx` — rewrite form labels, status messages, and note.
- `src/components/Footer.tsx` — rewrite footer copy and navigation labels.
- `src/index.css` — only if hero spacing or responsive typography requires a style adjustment.
- `index.html` — replace Bolt preview tags and add complete static default metadata.
- `src/lib/i18n.tsx` — extend runtime language switching to social metadata where appropriate.
- `src/lib/siteMetadata.ts` — centralize canonical URL, titles, descriptions, image URLs, locale, and structured-data values.
- `public/images/og-richtai.png` — approved 1200 × 630 Richt Ai social preview snapshot.
- `scripts/create-og-card.ps1` — reproducible deterministic generator for the approved social snapshot.
- `scripts/generate-crawler-files.mjs` — generates absolute `robots.txt` sitemap references and `sitemap.xml` when `VITE_SITE_URL` is configured.
- `public/favicon.svg` / `public/apple-touch-icon.png` — replace the Vite starter favicon with the approved brand mark.
- `public/site.webmanifest` — define the installable-site name, theme color, and icons.
- `public/robots.txt` — permit indexing and point to the production sitemap.
- `public/sitemap.xml` — describe the canonical landing-page URL.
- `public/images/emre-kocaaliler-portrait.png` — edited founder portrait for the Güven section.
- `implementation_update.md` — update this checklist as each phase is implemented and verified.

## 7. Shared progress checklist

### Scope and copy approval

- [x] C0.1 Confirm the attached blank hero area and scroll indicator are the section to remove.
- [x] C0.2 Approve the final Turkish copy matrix.
- [x] C0.3 Approve the terminology list and CTA wording.
- [x] C0.4 Use one factual `7/24` availability label plus qualitative labels; remove unsupported percentage/growth claims.
- [x] C0.5 Keep testimonial and logo content visibly marked as examples until real proof is supplied.

### Hero cleanup

- [x] H1 Remove the scroll indicator markup and animation.
- [x] H2 Reduce hero vertical spacing without losing visual breathing room.
- [x] H3 Verify the StatisticsStrip begins naturally after the hero.
- [x] H4 Verify desktop and 375px mobile hero composition.

### Hero refinement implementation

- [x] H5 Remove the duplicated typewriter service list from the hero.
- [x] H6 Replace it with the approved AI workflow animation: `Ziyaretçi → Akıllı yanıt → Randevu`.
- [x] H7 Change the first-screen trust line to `Herhangi bir taahhüt yok · Doğrudan Emre Kocaaliler ile`.
- [x] H8 Replace `Tek kişi` with `Tek iletişim noktası` in the statistics strip.
- [x] H9 Add CTA timing reassurance and verify it does not compete with the primary action.

### Brand asset refinement

- [x] B1 Replace the brain mark beside `Richt Ai` with a custom mermaid mark in the navbar and footer.
- [x] B2 Edit the supplied portrait into a natural, high-quality founder image with a brand-matched background.
- [x] B3 Replace the `EK` founder placeholder with the edited portrait and accessible alt text.
- [x] B4 Verify the mermaid mark and founder card in the refreshed local browser preview.
- [x] B5 Tighten the portrait crop so the face remains clear at small card sizes.
- [x] B6 Remove the unfinished `Sosyal bağlantılar yayın öncesi güncellenecektir.` notice.
- [x] B7 Replace the custom mermaid design with the exact figure supplied in the user reference.
- [x] B8 Render the exact figure as a bold black silhouette on the original teal/cyan logo background.
- [x] B9 Increase silhouette scale and contrast so the black mermaid reads clearly at navbar size.

### Spacing and responsive refinement

- [x] S1 Reduce repeated section padding from `py-24 sm:py-32` to a tighter shared rhythm.
- [x] S2 Reduce oversized section-header and Trust-section margins.
- [x] S3 Tighten the Trust-to-FAQ transition shown in the supplied screenshot.
- [x] S4 Verify the new hero and spacing at 375px mobile width.
- [x] S5 Verify the new hero and spacing at 320px mobile width.

### Turkish copy rewrite

- [x] T1 Rewrite Hero, typewriter phrases, CTA, and trust line.
- [x] T2 Rewrite Navbar and section labels.
- [x] T3 Rewrite StatisticsStrip labels and claims.
- [x] T4 Rewrite Problem section copy.
- [x] T5 Rewrite Solution section copy.
- [x] T6 Rewrite How It Works copy and durations.
- [x] T7 Rewrite Trust, testimonials, founder profile, and placeholder notice.
- [x] T8 Rewrite FAQ questions and answers.
- [x] T9 Rewrite Final CTA and personal quote.
- [x] T10 Rewrite ContactModal labels, states, and note.
- [x] T11 Rewrite Footer, navigation, and social placeholder copy.
- [x] T12 Complete a native-Turkish proofreading pass for punctuation, accents, spelling, and tone.

### Trust and conversion

- [x] V1 Clearly label example testimonials, logos, and non-factual content.
- [x] V2 Replace unsupported performance claims with benefit-led wording.
- [x] V3 Use one consistent primary CTA across the page.
- [x] V4 Keep the contact flow short and understandable.

### Language support

- [x] L1 Add a persistent Turkish/English language state with Turkish as the default.
- [x] L2 Add desktop and mobile language controls to the navbar.
- [x] L3 Translate the hero, workflow, sections, FAQ, CTA, footer, and contact modal copy.
- [x] L4 Verify switching to English and restoring Turkish in the local browser preview.
- [x] L5 Refresh the reveal observer after language changes so reflowed sections remain visible immediately.
- [x] L6 Keep the language switcher visible in the mobile navbar without opening the menu.

### Metadata and social preview

- [ ] M0.1 Confirm the production domain, canonical host, and redirect direction.
- [x] M0.2 Approve the final Turkish and English title/description wording.
- [x] M0.3 Use a Turkish-default, brand-safe canonical social image for the current single-page URL.
- [ ] M0.4 Confirm official social handles and profile URLs, if any.
- [x] M1.1 Create a stable hero-based website snapshot composition from the approved visual system.
- [x] M1.2 Create the 1200 × 630 Richt Ai social preview image.
- [x] M1.3 Replace all Bolt preview references with the approved local asset.
- [x] M1.4 Check the image at thumbnail size and against the dark brand surface.
- [x] M2.1 Add static title, description, relative canonical placeholder, theme, and author metadata.
- [x] M2.2 Add Open Graph title, description, URL, locale, image, dimensions, secure URL, and alt tags.
- [x] M2.3 Add X/Twitter large-image card metadata and image alt text.
- [x] M2.4 Keep runtime Turkish/English metadata synchronized and resolve absolute URLs from `VITE_SITE_URL` or the current origin.
- [x] M3.1 Add accurate Organization, WebSite, and Service JSON-LD without invented proof or social profiles.
- [x] M3.2 Replace the Vite favicon and add the Apple touch icon using the approved mermaid mark.
- [x] M3.3 Add the Richt Ai web manifest with theme colors and icon references.
- [x] M3.4 Add `robots.txt` and an environment-generated `sitemap.xml` for the configured canonical URL.
- [x] M4.1 Verify metadata before hydration in `index.html` and after runtime language switching in the metadata helper.
- [ ] M4.2 Validate structured data and social previews with platform validators.
- [ ] M4.3 Confirm the preview image is HTTPS-accessible and no Bolt URL remains.
- [x] M4.4 Re-run typecheck, lint, build, and local asset validation; responsive browser QA remains part of final domain QA.

### Final QA

- [x] Q1 Check 320px mobile layout.
- [x] Q2 Check 375px mobile layout.
- [ ] Q3 Check tablet layout.
- [x] Q4 Check desktop layout.
- [x] Q5 Verify no blank hero tail remains.
- [x] Q6 Verify no scroll indicator remains.
- [ ] Q7 Verify keyboard and focus states.
- [ ] Q8 Verify reduced-motion behavior.
- [x] Q9 Verify FAQ and modal behavior from the existing browser smoke pass.
- [x] Q10 Run `pnpm typecheck`.
- [x] Q11 Run `pnpm lint`; no lint warnings remain after removing the unused typewriter component.
- [x] Q12 Run `pnpm build`.
- [x] Q13 Run local browser smoke test and inspect the rendered page.

## 8. Handoff protocol

For this update, each agent should:

1. Read this file before editing.
2. Claim one checklist item in the current chat or in the implementation notes.
3. Do not broaden the task beyond the claimed item without updating the plan.
4. Update the checkbox only after the relevant code and verification are complete.
5. Record changed files and evidence below.
6. Mark copy or proof decisions as `Needs approval` instead of guessing.

Suggested note:

```text
Task: H2 / T4
Status: Done — Agent name — YYYY-MM-DD
Files: src/components/Hero.tsx; src/components/Problem.tsx
Verification: browser desktop/mobile; pnpm typecheck
Notes: Copy decision or remaining approval
```

## 9. Implementation notes

| Date | Agent/developer | Task | Result / evidence |
| --- | --- | --- | --- |
| 2026-09-28 | Codex | Plan override | Replaced the previous implementation plan with this tighter hero-cleanup and native-Turkish-copy plan. No source code changed in this turn. |
| 2026-09-28 | Codex | H1–H3 / T1–T12 / V1–V4 | Removed the oversized hero tail and scroll indicator; shortened hero spacing; rewrote visible Turkish copy, terminology, CTAs, claims, placeholder notices, and labels. Verified desktop local preview; `pnpm typecheck`, `pnpm lint`, and `pnpm build` pass. |
| 2026-09-28 | Codex | R1–R4 | Replaced regional positioning with `İşletmeler için modern web ve yapay zekâ çözümleri`, `Yakın iletişim, güçlü dijital çözümler`, and `Türkiye ve yurt dışı · Çevrim içi çalışma`; reduced repeated founder-name mentions and removed placeholder explanation notes. Verified with typecheck, lint, build, and refreshed local browser preview. |
| 2026-09-28 | Codex | Hero refinement proposal | No source code changed. Documented the duplication between the hero badge and typewriter, recommended a restrained `Ziyaretçi → Akıllı yanıt → Randevu` workflow animation, restored `Doğrudan Emre Kocaaliler ile` as the first-screen trust line, and added design and responsive-motion checklist items pending approval. |
| 2026-09-28 | Codex | Plan approval update | No source code changed. Approved the hero refinement direction and finalized the combined first-screen trust line as `Herhangi bir taahhüt yok · Doğrudan Emre Kocaaliler ile`. |
| 2026-09-28 | Codex | H4–H9 | Replaced the duplicated typewriter with the responsive `AIWorkflow` component; implemented `Ziyaretçi → Akıllı yanıt → Randevu`, updated the hero headline and trust line, added the 30-minute reassurance, and changed the statistics label to `İletişim noktası`. Verified `pnpm typecheck`, `pnpm lint`, `pnpm build`, desktop browser preview, and 375px mobile preview. |
| 2026-09-28 | Codex | B1–B4 | Replaced the brain logo icon with a custom mermaid mark, edited the supplied Emre Kocaaliler portrait into a natural navy/teal professional portrait, added it to the founder card, and verified the refreshed browser preview. |
| 2026-09-28 | Codex | B5–B6 | Created a tighter chest-up portrait crop for better small-card clarity, enlarged/refined the mermaid mark for navbar readability, removed the social-links placeholder notice, and re-verified the refreshed preview. |
| 2026-09-28 | Codex | B7 / S1–S5 | Redesigned the mermaid mark toward the supplied flowing silhouette reference, tightened section padding and repeated vertical margins across the page, and verified the responsive hero at 320px and 375px widths. |
| 2026-09-28 | Codex | B7 reference correction | Replaced the custom mermaid SVG with the exact user-supplied mermaid figure asset in the navbar and footer; no new interpretation added. |
| 2026-09-28 | Codex | B8 | Kept the exact supplied mermaid figure and rendered it as a bold black luminance mask over the same teal/cyan blue gradient used by the original brain logo. |
| 2026-09-28 | Codex | B9 | Increased the exact mermaid mask to 104%, strengthened the fill to pure black, and added subtle contrast for clearer small-size visibility. |
| 2026-09-28 | Codex | L1–L4 | Added persistent Turkish/English support with a navbar switcher, translated all visible landing-page and contact-modal copy, kept Turkish as the default, and verified both languages in a fresh local browser preview. `pnpm typecheck`, `pnpm lint`, and `pnpm build` pass. |
| 2026-09-28 | Codex | L5 | Re-synchronize the reveal observer whenever the language changes, preventing sections from staying hidden after English text reflows the page. Verified the English statistics strip remains visible in the local browser preview. |
| 2026-09-28 | Codex | L6 | Moved the mobile `EN/TR` control beside the menu button so language switching is always available at mobile widths. Verified with responsive navbar markup and a clean build. |
| 2026-09-29 | Codex | M0–M4 plan | Audited the current metadata, documented the Bolt preview-image replacement, planned a 1200 × 630 website snapshot, added complete Open Graph/X metadata, language-aware defaults, structured data, favicon/manifest/crawler assets, domain approval gates, and validation steps. No site code or image assets changed. |
| 2026-09-29 | Codex | M0.2–M4.4 implementation | Replaced Bolt metadata with Richt Ai Open Graph/X tags, created and inspected `public/images/og-richtai.png` at 1200 × 630, added runtime language-aware metadata, JSON-LD, favicon/Apple icon, manifest, robots handling, and environment-generated sitemap support. Added `VITE_SITE_URL` configuration without guessing the production domain. Verified `pnpm typecheck`, `pnpm lint`, `pnpm build`, and asset dimensions. M0.1, M0.4, M4.2, and M4.3 remain pending until the real domain/social handles are confirmed and external preview validators can reach the deployed asset. |

## 10. Definition of done

- The attached empty hero tail is removed.
- The scroll indicator is removed.
- The hero-to-statistics transition feels intentional at desktop and mobile widths.
- All visible Turkish copy has been rewritten and proofread as natural Turkish.
- The landing page supports Turkish and English with a persistent language switcher.
- Bolt’s default social preview has been replaced with an approved Richt Ai website snapshot.
- Browser, Open Graph, X/Twitter, canonical, structured-data, favicon, manifest, robots, and sitemap metadata are complete and validated.
- Unsupported claims and placeholder proof are clearly handled.
- The page remains accessible, responsive, and visually consistent.
- Typecheck, lint, build, and browser QA are complete.
- The checklist and implementation notes accurately reflect the final state.
