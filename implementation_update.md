# Richt Ai V2 — Phase 0 Existing Implementation Audit

## Objective

Perform a complete audit of the current Richt Ai frontend before any Richt Ai V2 — Bold Systems implementation begins.

This phase will produce a precise migration map covering:

- current architecture and rendered homepage composition
- reusable functionality and protected integrations
- components to keep, rebuild, merge, deprecate, or remove from render later
- CSS and design-system conflicts with the V2 direction
- responsive and animation dependencies
- i18n and copy-structure risks
- assets and dependency boundaries
- Phase 1 readiness and regression risks

This is an audit-only phase. Do not implement the V2 redesign, edit source code, edit CSS, change assets, remove components, rename files, or install dependencies.

The V2 design context for the audit is the BOLD SYSTEMS direction:

- Carbon / Graphite dark surfaces
- Bone White editorial sections
- Signal Lime primary accent
- Electric Cyan secondary system accent
- larger editorial typography
- fewer cards
- custom system visuals
- semantic animation
- dark/light tonal rhythm
- early proof
- founder-led positioning
- dedicated live system demo
- intentional mobile layouts

Use this context only to identify future migration needs. Do not implement it in Phase 0.

## Current homepage composition

### Root and page entry structure

- `src/main.tsx` is the application entry point. It imports `src/index.css`, creates the React root, and renders `StrictMode` → `LanguageProvider` → `App`.
- `src/App.tsx` is the homepage composition file and root application component.
- `App` renders a full-page wrapper, then `Navbar`, a `<main>` containing the homepage sections, `Footer`, and the conditionally rendered `ContactModal`.
- `App` owns `isContactOpen`, `openContact`, and `closeContact`. The same `openContact` callback is passed to Navbar, Hero, FinalCTA, and Footer.
- `App` calls `useRevealObserver(language)`. The language value is its refresh key, so the shared reveal observer is reinitialized when the language changes.
- `LanguageProvider` wraps the whole App tree in `src/main.tsx`; rendered components read translated content through `useLanguage`.

### Exact rendered homepage order

The current rendered order from `src/App.tsx` is:

1. `Navbar`
2. `Hero`
3. `StatisticsStrip`
4. `Problem`
5. `Solution`
6. `HowItWorks`
7. `Trust`
8. `FAQ`
9. `FinalCTA`
10. `Footer`

`ContactModal` is rendered after `Footer` as a conditional global overlay rather than as a normal homepage section.

### Rendered section inventory

| Order | Component / file | Section ID | Navbar link | Interactive behavior | i18n | Section-specific CSS | Shared reveal / motion | Important direct children |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `Navbar` — `src/components/Navbar.tsx` | None; fixed header/nav | Provides the links listed below | Logo scroll-to-top, smooth anchor scrolling, mobile menu, language switch, CTA callback, active-section observer, scroll-state styling | Yes, `copy.nav` | Primarily Tailwind utilities; no dedicated `navbar-*` global selector family | No shared `[data-reveal]`; uses its own scroll listener, `IntersectionObserver`, and CSS transitions | `MermaidMark`, desktop navigation/actions, mobile controls/menu |
| 2 | `Hero` — `src/components/Hero.tsx` | `anasayfa` | No | Hero CTA calls `onCTAClick`; connected-systems rail has CSS pulse/signal motion | Yes, `copy.hero` and `copy.workflow` | Tailwind plus `.hero-*`, `.hero-section--tr`, `.hero-heading`, `.hero-meta`, `.hero-connected-systems` | Yes; the reveal wrapper uses `data-reveal` and `reveal`; additional CSS animation classes and connected-system keyframes are used | Hero copy/CTA/meta; `.hero-visual-region`; image frame; connected-systems rail |
| 3 | `StatisticsStrip` — `src/components/StatisticsStrip.tsx` | `istatistik` | No | Intersection-triggered metric counters using `requestAnimationFrame` | Yes, `copy.stats` | Tailwind plus `.section-tone--stats`, `.section-surface--stats`, `.stats-principle*` | Yes; each metric uses `data-reveal`/`reveal`; its counter has a separate `IntersectionObserver` | Metric grid and internal `Counter` component |
| 4 | `Problem` — `src/components/Problem.tsx` | `sorun` | Yes | No user-facing state; incident content is mapped from translation data | Yes, `copy.problem` | Tailwind plus `.section-tone--problem`, `.section-surface--problem`, and `.problem-*` | Yes; editorial copy, board, and incident articles use `data-reveal`/`reveal` | Editorial copy and `problem-board` with mapped incident articles |
| 5 | `Solution` — `src/components/Solution.tsx` | `cozum` | Yes | No user-facing state; capability visuals branch by mapped capability index | Yes, `copy.solution` | Tailwind plus `.section-tone--solution`, `.section-surface--solution`, and `.capability-*` | Yes; intro, capability bands, and their visual content use `data-reveal`/`reveal` | Intro block and `capability-sequence` containing three capability bands; the third uses the Luma image |
| 6 | `HowItWorks` — `src/components/HowItWorks.tsx` | `nasil-calisir` | Yes | No user-facing state | Yes, `copy.how` | Tailwind plus `.section-tone--how`, `.section-surface--how`, and `.how-*` | Yes; intro blocks and mapped stages use `data-reveal`/`reveal` | `how-intro` and `how-journey` with mapped `how-stage` articles |
| 7 | `Trust` — `src/components/Trust.tsx` | `guven` | Yes | No user-facing state; proof/process/founder content is static after translation mapping | Yes, `copy.trust` | Tailwind plus `.section-tone--trust`, `.section-surface--trust`, and `.trust-*` | Yes; intro, system proof, process rows, and founder block use `data-reveal`/`reveal` | Trust intro, `trust-system-proof`, `trust-process`, and `trust-founder` |
| 8 | `FAQ` — `src/components/FAQ.tsx` | `sss` | Yes | Accordion state via `openIndex`; buttons toggle answer regions with `aria-expanded` and `aria-controls` | Yes, `copy.faq` | Tailwind plus `.section-tone--faq`, `.section-surface--faq`, and `.faq-*` | Yes; intro and FAQ items use `data-reveal`/`reveal` | `faq-intro` and mapped `faq-item` accordion articles |
| 9 | `FinalCTA` — `src/components/FinalCTA.tsx` | `final-cta` | No | CTA calls `onCTAClick` to open ContactModal | Yes, `copy.finalCta` | Tailwind plus `.section-tone--final` and `.section-surface--final`; no separate `final-cta-*` family identified | Yes; main content wrapper uses `data-reveal`/`reveal` | Headline, description, CTA, reassurance, and quote |
| 10 | `Footer` — `src/components/Footer.tsx` | None | Reuses all Navbar link targets | Footer CTA/contact button opens ContactModal; sitemap buttons smooth-scroll; social buttons render without attached actions | Yes, `copy.footer` and `copy.nav.links` | Tailwind plus `.section-tone--footer`; no dedicated `footer-*` global selector family identified | Yes; the footer prompt block uses `data-reveal`/`reveal` | Brand block with `MermaidMark`, sitemap, social controls, contact block, bottom bar |

### Global overlay rendered with the homepage

`ContactModal` in `src/components/ContactModal.tsx` is rendered after `Footer` by `App` and returns `null` while closed. When open, it provides the interactive contact form, Escape/backdrop close behavior, validation/submission state, success/error state, and Supabase submission path. It depends on i18n and is not part of the normal section order. Its styling is primarily Tailwind with shared helpers such as `.input-premium`, `.success-check`, and `.scrollbar-hide`; it does not use the shared reveal observer.

### Navbar relationship and target verification

`Navbar` reads `copy.nav.links` from `src/lib/i18n.tsx`. Both language arrays use the same target IDs:

| Language | Visible label | Target ID | Rendered target |
| --- | --- | --- | --- |
| Turkish | `Sorunlar` | `sorun` | `Problem` |
| Turkish | `Çözüm` | `cozum` | `Solution` |
| Turkish | `Nasıl çalışır?` | `nasil-calisir` | `HowItWorks` |
| Turkish | `Güven` | `guven` | `Trust` |
| Turkish | `S.S.S.` | `sss` | `FAQ` |
| English | `Challenges` | `sorun` | `Problem` |
| English | `Solutions` | `cozum` | `Solution` |
| English | `How it works` | `nasil-calisir` | `HowItWorks` |
| English | `Trust` | `guven` | `Trust` |
| English | `FAQ` | `sss` | `FAQ` |

All five Navbar targets currently exist in the rendered homepage. The Hero (`anasayfa`), StatisticsStrip (`istatistik`), FinalCTA (`final-cta`), and Footer do not have corresponding Navbar links. Footer sitemap buttons reuse the same five translated navigation links.

### Founder and AIWorkflow render status

- There is no standalone `Founder` component in the current repository. Founder content is rendered inside `Trust` as the `.trust-founder` block, using `copy.trust.founder` and `/images/emre-kocaaliler-portrait.png`.
- `src/components/AIWorkflow.tsx` exists and contains its own staged animation, but it is not imported by `src/App.tsx`, `Hero.tsx`, or another rendered homepage component. It is therefore not currently rendered. The active Hero uses its own connected-systems rail instead.

## Component migration matrix

These classifications are recommendations for later phases only. No migration, deletion, rename, refactor, or render change is performed in Phase 0.

### Navbar

1. Component: `Navbar`
2. File path: `src/components/Navbar.tsx`
3. Current responsibility: Fixed header with logo, translated desktop links, desktop language/CTA actions, mobile language/menu controls, smooth anchor scrolling, active-section tracking, and scroll-state styling.
4. Primary status: **REBUILD**
5. Why: The current three-column markup and navy/teal presentation are tightly shaped around the V1 landing page. V2 may need a different studio-like navigation hierarchy and visual system, while the interaction contract remains useful.
6. Reusable logic/content: `scrollTo`, `toggleLanguage`, `onCTAClick`, mobile menu state, active-section `IntersectionObserver`, translated `copy.nav.links`, and existing target IDs.
7. What should not survive into V2: Current breakpoint-specific visual markup, current labels if the approved V2 wording changes, and current navy/teal header treatment.
8. Dependencies / risks: Fixed positioning, section IDs, `copy.nav.links` array shape, language context, active-section observer, and CTA callback must remain synchronized during replacement.
9. Intended V2 destination or replacement: A V2 Navbar preserving the current behavior contracts with new Bold Systems structure and presentation.

### Hero

1. Component: `Hero`
2. File path: `src/components/Hero.tsx`
3. Current responsibility: Image-led Hero with translated headline, subheadline, CTA, reassurance metadata, current Hero image, and connected-systems rail.
4. Primary status: **REBUILD**
5. Why: The V2 direction calls for oversized positioning copy and a custom system canvas rather than the current two-column image-led composition. The current markup would constrain that redesign.
6. Reusable logic/content: `onCTAClick`, translated `copy.hero` and `copy.workflow` access, reassurance values, CTA accessibility/behavior, reduced-motion-compatible connected-system concept, and potentially the existing image as a temporary fallback.
7. What should not survive into V2: The current image-dominant two-column structure, current Hero-specific layout classes, and assumptions that the image is the primary system visual.
8. Dependencies / risks: CTA callback, language-specific `hero-section--tr`, mobile ordering rules, shared reveal markup, connected-system animation, and Hero image paths must not regress while the visual structure changes.
9. Intended V2 destination or replacement: New static Hero structure in Phase 3, followed by dedicated system motion and mobile phases.

### StatisticsStrip

1. Component: `StatisticsStrip`
2. File path: `src/components/StatisticsStrip.tsx`
3. Current responsibility: Renders four translated metric cells; numeric metrics use a local `Counter` driven by `IntersectionObserver` and `requestAnimationFrame`.
4. Primary status: **REMOVE FROM RENDER**
5. Why: It is presentation-only proof with generic/unsupported metric framing and does not provide a protected business interaction. It conflicts with the V2 requirement to avoid fake metrics and move tangible proof into Selected Work and Live System Demo.
6. Reusable logic/content: The metric mapping and counter animation are technically reusable patterns, but no metric values should be carried into V2 without verified evidence.
7. What should not survive into V2: The standalone stats band, current metric labels/values, and the implication that these metrics are business proof.
8. Dependencies / risks: `App.tsx` currently renders it immediately after Hero; the `istatistik` section has no Navbar link. Keep the file temporarily until the replacement proof architecture is approved, then remove only its render usage first.
9. Intended V2 destination or replacement: No direct replacement component; verified proof belongs in Selected Work and meaningful system behavior belongs in Live System Demo.

### Problem

1. Component: `Problem`
2. File path: `src/components/Problem.tsx`
3. Current responsibility: Renders translated editorial problem copy and a four-incident board with mapped incident details, fragments, routes, and reveal delays.
4. Primary status: **REBUILD**
5. Why: The current incident-board UI is more detailed and dashboard-like than the planned short editorial friction section. The section purpose and copy value remain useful, but the current markup constrains the lighter V2 treatment.
6. Reusable logic/content: `copy.problem` label, headline, description, prompt, and the core friction themes inside `copy.problem.incidents`; section ID `sorun` should remain available while Navbar compatibility is maintained.
7. What should not survive into V2: The default four-incident dashboard, nested incident fragments, route diagrams, and detailed status presentation as the primary Problem experience.
8. Dependencies / risks: Translation array shape, `sorun` anchor, reveal attributes, and incident-specific CSS are coupled to the current board. Shortening the content must not silently break TR/EN rendering.
9. Intended V2 destination or replacement: Short editorial Problem / Friction section in Phase 12, using selected content themes rather than the current board structure.

### Solution

1. Component: `Solution`
2. File path: `src/components/Solution.tsx`
3. Current responsibility: Renders a translated section intro and a mapped three-item capability sequence. Each item uses index-based visual branches for AI interaction, automation flow, or Luma prototype preview.
4. Primary status: **REBUILD**
5. Why: The current visual markup is a capable prototype but is not the planned Bold Systems editorial capability-band architecture. The component’s data model is more reusable than its visual structure.
6. Reusable logic/content: The three `copy.solution.capabilities` entries map conceptually to `AI Systems`, `Automation & Operations`, and `Digital Experiences`; labels, titles, descriptions, visual labels, and selected visual items can seed future section content. The Luma preview path is a protected real asset.
7. What should not survive into V2: Index-based JSX branches, current capability fragment chrome, repeated visual-card treatment, and the assumption that array order alone defines visual behavior.
8. Dependencies / risks: Capability array ordering currently controls the three visual branches (`index === 0/1/2`), and the third branch depends on `/images/luma-dental-prototype-preview.png`. Data extraction should happen before visual replacement.
9. Intended V2 destination or replacement: What We Build foundation plus three isolated capability phases: AI Systems, Automation & Operations, and Digital Experiences.

### HowItWorks

1. Component: `HowItWorks`
2. File path: `src/components/HowItWorks.tsx`
3. Current responsibility: Renders a translated intro and a mapped three-step journey with numbered rails, connectors, metadata, titles, and descriptions.
4. Primary status: **KEEP**
5. Why: Its responsibility and three-step data shape already align with the V2 process direction. The current presentation can receive substantial visual restyling without requiring a different behavioral contract.
6. Reusable logic/content: `copy.how.steps`, translated intro copy, `nasil-calisir` anchor, reveal delays, and the simple ordered journey model.
7. What should not survive into V2: Current rail styling and any treatment that visually duplicates the Trust process rows.
8. Dependencies / risks: Trust currently contains a separate four-item process model. The V2 migration must establish How We Work as the single process destination and avoid two competing process narratives.
9. Intended V2 destination or replacement: V2 How We Work section using the existing three-step data as the initial content source and a new visual layer.

### Trust

1. Component: `Trust`
2. File path: `src/components/Trust.tsx`
3. Current responsibility: Combines four internal pieces in one section: Trust intro, `systemProof`, a four-step `process`, and the `.trust-founder` block with portrait and founder copy.
4. Primary status: **MERGE**
5. Why: The current section is a composite of three distinct V2 destinations. Keeping it as one standalone section would repeat the future process, system proof, and founder narratives.
6. Reusable logic/content: Trust intro copy; `systemProof.items` and description; process titles/descriptions; founder label, name, role, statement, model copy; portrait path and alt text.
7. What should not survive into V2: The current all-in-one Trust section, duplicate process presentation, and system-proof block as a separate generic flow disconnected from the Live System Demo.
8. Dependencies / risks: `copy.trust` contains all four internal data groups; the `guven` anchor is linked from Navbar; reveal attributes and the portrait asset must survive while content is decomposed.
9. Intended V2 destination or replacement: `systemProof` → Live System Demo; `process` → How We Work; founder block → Founder / Why Richt; introductory trust copy is redistributed between the relevant destinations.

### FAQ

1. Component: `FAQ`
2. File path: `src/components/FAQ.tsx`
3. Current responsibility: Renders translated FAQ intro and an accordion with one `openIndex` state value.
4. Primary status: **KEEP**
5. Why: The interaction structure is sound and can be visually restyled for the V2 editorial FAQ without a structural rewrite.
6. Reusable logic/content: `openIndex`, question mapping, button semantics, `aria-expanded`, `aria-controls`, answer region IDs, translated question/answer data, and `sss` anchor.
7. What should not survive into V2: Current section surface styling and any decorative treatment that conflicts with the planned light editorial presentation.
8. Dependencies / risks: Question ordering generates `faq-trigger-*` and `faq-answer-*` IDs. Visual changes must preserve keyboard/button behavior and region relationships.
9. Intended V2 destination or replacement: Restyled V2 FAQ with the current accordion behavior retained.

### FinalCTA

1. Component: `FinalCTA`
2. File path: `src/components/FinalCTA.tsx`
3. Current responsibility: Renders translated closing headline, description, CTA, reassurance, and quote; CTA calls the shared `onCTAClick` callback.
4. Primary status: **REBUILD**
5. Why: The V2 direction requires a bold full-width Signal Lime closing section, which is materially different from the current dark section layout.
6. Reusable logic/content: `onCTAClick`, `final-cta` anchor, translated `copy.finalCta`, button accessibility and ContactModal wiring.
7. What should not survive into V2: Current dark navy/teal surface, layout proportions, and any final copy that is replaced during the later bilingual copy audit without review.
8. Dependencies / risks: CTA behavior must continue to open ContactModal; the component depends on i18n and the existing `final-cta` section ID even though Navbar does not link to it.
9. Intended V2 destination or replacement: Signal Lime Final CTA in Phase 16, preserving the callback contract.

### Footer

1. Component: `Footer`
2. File path: `src/components/Footer.tsx`
3. Current responsibility: Renders a footer CTA prompt, MermaidMark brand block, translated sitemap buttons, social icon buttons, contact information, and the bottom bar.
4. Primary status: **REBUILD**
5. Why: The final V2 footer is intended to be minimal, while the current footer includes several widget-like blocks and placeholder social controls.
6. Reusable logic/content: `onCTAClick`, MermaidMark usage, translated navigation links and smooth-scroll targets, contact labels/location, and real contact CTA behavior.
7. What should not survive into V2: Excessive widget layout, social buttons that have no actual destination/action, and unsupported placeholder social presentation.
8. Dependencies / risks: Footer sitemap links depend on the same section IDs and `copy.nav.links`; its CTA must remain connected to ContactModal. Social behavior must not imply live accounts while controls are placeholders.
9. Intended V2 destination or replacement: Minimal Carbon Black footer in Phase 16 with real contact/social destinations only.

### AIWorkflow

1. Component: `AIWorkflow`
2. File path: `src/components/AIWorkflow.tsx`
3. Current responsibility: An unrendered staged workflow section with five state values, a 2800ms interval, reduced-motion check, translated incoming/interpretation/action/completion content, and CSS state classes.
4. Primary status: **DEPRECATE**
5. Why: It is not part of the current homepage render tree, and its current standalone workflow markup is not automatically suitable for the V2 Live System Demo. It may remain as reference while the replacement is designed.
6. Reusable logic/content: State progression and some workflow vocabulary can inform the Live System Demo investigation, but no logic is approved for direct reuse solely because it is animated.
7. What should not survive into V2: The current standalone section, fixed five-state presentation, and isolated interval-driven animation if the Live Demo uses a different architecture.
8. Dependencies / risks: It depends on `copy.workflow`, its own workflow CSS family, and reduced-motion behavior. It is currently safe to leave non-rendered; retire the file only after the Live Demo replacement is approved.
9. Intended V2 destination or replacement: Reference only for Live System Demo planning; a dedicated Live System Demo implementation should replace it if its state model is not reused.

### ContactModal

1. Component: `ContactModal`
2. File path: `src/components/ContactModal.tsx`
3. Current responsibility: Owns the contact form UI, modal open/close behavior, Escape/backdrop handling, validation/submission state, Supabase insert call, and success/error rendering.
4. Primary status: **KEEP**
5. Why: It is protected functional infrastructure used by multiple CTAs. The current behavior should not be destabilized during the visual redesign.
6. Reusable logic/content: `isOpen`/`onClose` contract, form field names, `SubmitState`, Supabase submission flow, body scroll lock, Escape handling, translated contact copy, and success/error states.
7. What should not survive into V2: Only the current modal appearance if the new design system requires a visual migration; behavior and submission contracts should survive.
8. Dependencies / risks: `src/lib/supabase.ts`, `copy.contact`, body overflow handling, form field names, and backend table/column expectations are sensitive to casual changes.
9. Intended V2 destination or replacement: Keep the behavior in place; apply any approved visual restyling separately after protected functionality is audited.

### MermaidMark

1. Component: `MermaidMark`
2. File path: `src/components/MermaidMark.tsx`
3. Current responsibility: Provides the shared mermaid silhouette wrapper used by the Navbar and Footer.
4. Primary status: **KEEP**
5. Why: The silhouette is explicitly protected and the component is structurally simple.
6. Reusable logic/content: `className` pass-through and the `.mermaid-mark` / `.mermaid-mark__silhouette` structure.
7. What should not survive into V2: No structural replacement is required; only current color treatment may change under the new tokens.
8. Dependencies / risks: Shared CSS must continue to render the silhouette and remain compatible with Signal Lime/Cyan color treatment.
9. Intended V2 destination or replacement: Shared brand-mark primitive across Navbar, Footer, and future sections.

### LanguageProvider / i18n infrastructure

1. Component: `LanguageProvider` and `useLanguage`
2. File path: `src/lib/i18n.tsx`
3. Current responsibility: Provides TR/EN copy, language state, toggle/set functions, and language-dependent metadata update invocation to the entire App tree.
4. Primary status: **KEEP**
5. Why: It is shared application infrastructure and is independent of the current section visual markup.
6. Reusable logic/content: Context provider, typed translation set, `useLanguage`, `toggleLanguage`, and component copy access pattern.
7. What should not survive into V2: No visual assumptions should be embedded into the provider; section-specific V1 copy may be replaced only in the later copy phase.
8. Dependencies / risks: Component data shapes and array ordering are used directly by current renderers; changing them during visual migration can break both languages.
9. Intended V2 destination or replacement: Same provider architecture serving V2 components, with copy changes handled in the approved copy phase.

### App

1. Component: `App`
2. File path: `src/App.tsx`
3. Current responsibility: Owns homepage section composition, ContactModal ownership, CTA callback ownership, and the global reveal hook invocation.
4. Primary status: **KEEP**
5. Why: The orchestration responsibilities are appropriate; later phases will change the rendered composition without requiring a new application root.
6. Reusable logic/content: `isContactOpen`, `openContact`, `closeContact`, `useRevealObserver(language)`, provider consumption, and the root layout wrapper.
7. What should not survive into V2: The current fixed section list and any obsolete section render entries, especially StatisticsStrip, once replacements are ready.
8. Dependencies / risks: Section order is defined directly in JSX; CTA callback identity is shared across multiple components; removing renders before replacement sections are ready could create gaps.
9. Intended V2 destination or replacement: Same root orchestrator with staged section composition updates.

### useRevealObserver

1. Component: `useRevealObserver`
2. File path: `src/hooks/useRevealObserver.ts`
3. Current responsibility: Adds `motion-ready`, observes `[data-reveal]` elements, reveals them on intersection or viewport checks, and reinitializes on the supplied language key.
4. Primary status: **KEEP**
5. Why: It is reusable infrastructure and has a no-IntersectionObserver fallback; any reduction of generic reveals belongs in the later motion phase.
6. Reusable logic/content: Observer lifecycle, viewport fallback, cleanup, and reduced-motion-compatible CSS integration point.
7. What should not survive into V2: Blanket reveal usage on every section if it conflicts with semantic motion; that usage pattern can be reduced later without discarding the hook immediately.
8. Dependencies / risks: `[data-reveal]` markup and `.reveal` CSS must remain aligned; language changes cause reinitialization and can affect already rendered V2 sections.
9. Intended V2 destination or replacement: Keep during migration; audit/reduce its usage in the dedicated global motion phase.

### Founder block (not a standalone component)

The repository has no `Founder.tsx`. Founder content currently lives inside `Trust.tsx` as `.trust-founder`, using `copy.trust.founder` and `/images/emre-kocaaliler-portrait.png`. It should eventually be extracted into the V2 Founder / Why Richt destination as part of the Trust merge, but no standalone component exists to classify or migrate in this phase.

### Migration summary

| Primary status | Count | Components |
| --- | ---: | --- |
| KEEP | 7 | HowItWorks, FAQ, ContactModal, MermaidMark, LanguageProvider, App, useRevealObserver |
| REBUILD | 6 | Navbar, Hero, Problem, Solution, FinalCTA, Footer |
| MERGE | 1 | Trust |
| DEPRECATE | 1 | AIWorkflow |
| REMOVE FROM RENDER | 1 | StatisticsStrip |

### Highest-risk migrations

- **Hero** — combines CTA wiring, translated copy, language-specific layout rules, responsive ordering, reveal behavior, image handling, and connected-system motion.
- **Trust** — contains three future destinations plus the protected founder portrait and copy, so decomposition can cause duplication or lost content.
- **Solution** — capability array ordering currently controls index-based visual branches and the Luma asset dependency.
- **Navbar** — fixed layout, active-section tracking, mobile menu, language switch, and CTA behavior all depend on current section IDs.
- **ContactModal** — shared CTA infrastructure with form state and Supabase submission dependencies.

### Lowest-risk removals / decompositions

- **StatisticsStrip** can likely leave the final homepage because it is presentation-only and has no Navbar or CTA dependency; retain the file until proof replacement is approved.
- **AIWorkflow** can remain non-rendered and later be retired after the Live System Demo decision; no current homepage behavior depends on it.
- **Trust’s system proof and process blocks** can be decomposed into existing planned destinations without deleting the underlying content before replacement sections are ready.

## Protected functionality

The following contracts are present in the current implementation and must survive any later visual or structural migration.

### Language / i18n protection

- Default language is Turkish (`tr`). `src/lib/i18n.tsx` reads `localStorage` key `richtai-language`; only exact `en` selects English, otherwise Turkish is used.
- `LanguageProvider` wraps the complete `App` tree in `src/main.tsx`. Components consume `copy`, `language`, and language controls through `useLanguage()`.
- `toggleLanguage()` switches between `tr` and `en`; the Navbar owns the visible switch control and calls it.
- The provider effect persists `richtai-language` and calls `applyLanguageMetadata` from `src/lib/siteMetadata.ts` after language changes.
- Dynamic metadata updates include `document.documentElement.lang`, title, description, canonical, Open Graph title/description/url/image/secure URL/locale/alternate, Twitter title/description/image, and the `richt-ai-structured-data` JSON-LD element.
- Turkish and English use the same typed `TranslationSet` shape. Renderers depend on arrays including `nav.links`, `problem.incidents`, `solution.capabilities`, `how.steps`, `trust.process`, `faq.questions`, and workflow data; array order also controls some Solution visual branches.
- No copy rewrite is part of this audit item.

### Contact flow protection

| Entry point | Callback path |
| --- | --- |
| Navbar CTA | `Navbar` → `onCTAClick` → `App.openContact` |
| Hero CTA | `Hero` → `onCTAClick` → `App.openContact` |
| Final CTA | `FinalCTA` → `onCTAClick` → `App.openContact` |
| Footer CTA/contact control | `Footer` → `onCTAClick` → `App.openContact` |

- `App` owns the single `isContactOpen` state plus `openContact` and `closeContact`, and renders one shared `ContactModal` after `Footer`.
- `ContactModal` receives `isOpen` and `onClose`. Its fields are `name` (required), `email` (required, `type="email"`), and optional `phone`, `businessName`, and `message`.
- Browser validation is provided by the required attributes and email input type; no separate custom validation layer was found.
- Submission states are `idle`, `submitting`, `success`, and `error`. Submission uses the nullable Supabase client from `src/lib/supabase.ts`, which reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` without exposing their values.
- The form inserts into the `leads` table with the payload `{ name, email, phone, business_name, message }`, using `null` for empty optional values.
- Success and translated error states are rendered by the modal. Close behavior includes the close button, Escape, backdrop click, and the success-state close action; body scrolling is locked while the modal is open.

### Navigation protection

- `Navbar` is a fixed responsive header using the current `lg` breakpoint. Desktop navigation and mobile controls are rendered from the same translated `copy.nav.links` data.
- Anchor navigation calls `scrollIntoView({ behavior: 'smooth' })`, and mobile selection closes `isMenuOpen`. The logo scrolls to the top; language controls call the provider toggle; the CTA calls the shared App callback.
- `activeSection` starts at `sorun` and is updated by an `IntersectionObserver` over the existing target IDs using root margin `-28% 0px -58% 0px` and thresholds `[0, 0.2, 0.5, 0.8]`.
- `isScrolled` is driven by `window.scrollY > 24` and changes header/nav sizing and background treatment.
- Current page IDs are `anasayfa`, `istatistik`, `sorun`, `cozum`, `nasil-calisir`, `guven`, `sss`, and `final-cta`. Navbar targets are `sorun`, `cozum`, `nasil-calisir`, `guven`, and `sss`; all five currently exist. Footer sitemap buttons reuse the same targets.
- If labels or IDs change, translation nav arrays, rendered section IDs, Navbar observer/scroll targets, and Footer sitemap behavior must be updated atomically.

### ContactModal protected contract

- Protected behavior: `isOpen`/`onClose` ownership, field names and requiredness, `SubmitState`, Supabase table/payload contract, success/error rendering, Escape/backdrop/close-button behavior, body scroll lock, form semantics, and keyboard operation.
- Safe visual restyling later: modal surface, spacing, colors, glow, typography, icon treatment, responsive layout, and animation, provided the behavior contract remains intact.
- No explicit focus trap was identified in the current modal; this is a current accessibility gap, not a change for this audit.

### SEO / metadata protection

- `index.html` provides the initial Turkish title/description, author, theme color, canonical `/`, Open Graph/Twitter base tags, favicon, manifest, OG image dimensions/alt, and initial JSON-LD.
- `src/lib/siteMetadata.ts` is the dynamic metadata path invoked by the i18n provider. It uses `/images/og-richtai.png` for social preview imagery, `/images/mermaid-mark.png` for the logo, and `#050d1a` as the theme color.
- `VITE_SITE_URL` is read only as configuration for absolute URLs; no secret or value is recorded here. The canonical is updated to the configured origin or `window.location.origin`.
- Dynamic JSON-LD updates Organization/WebSite data; the static document also includes a Service node. `html[lang]` is updated with the selected language.
- The static Twitter card type and some static accessibility metadata remain in `index.html`; the dynamic helper updates language-specific title, description, and image fields.

### Founder and project asset protection

- Founder content is stored in `copy.trust.founder` and rendered inside `src/components/Trust.tsx` as `.trust-founder`, using `/images/emre-kocaaliler-portrait.png` and the translated `founder.alt` value. There is no standalone Founder component.
- The active Hero uses `/images/ai-operations-hero-v2.png`; `/images/ai-operations-hero.png` also exists but is not the active Hero path.
- The Solution third capability uses `/images/luma-dental-prototype-preview.png` through the index-2 Digital Experiences visual branch. Its prototype label is visual chrome; the current component does not make a verified-performance claim.
- `/images/mermaid-mark.png` is used by the favicon/apple-touch metadata and metadata logo. `MermaidMark` itself renders a CSS silhouette used by Navbar and Footer.
- `/images/og-richtai.png` is the social preview asset. All listed assets are referenced through public paths rather than imported as JavaScript modules.

### Reveal, reduced-motion, responsive, and accessibility protection

- `useRevealObserver` in `src/hooks/useRevealObserver.ts` observes `[data-reveal]`, applies reveal state, checks already-visible elements, cleans up, and falls back to immediate visibility when `IntersectionObserver` is unavailable. `App` reinitializes it on language changes.
- Global reduced-motion rules in `src/index.css` disable transitions/animations and make reveals visible. Hero connected-system CSS animation and the unrendered `AIWorkflow` interval must preserve reduced-motion behavior; `AIWorkflow` explicitly checks `matchMedia` before starting its interval.
- Semantic buttons are used for navigation, FAQ, and CTAs. FAQ preserves `aria-expanded`, `aria-controls`, and answer regions; ContactModal preserves dialog semantics, labels, Escape handling, backdrop close, and body scroll lock. Hero, founder, and Luma images retain meaningful `alt` attributes.
- Mobile language/menu controls, smooth anchor IDs, and menu-close-after-navigation are behavior contracts. Social footer controls currently have no attached destinations/actions and must not be presented as functional accounts until that behavior exists.

### App-level ownership map

| Concern | Current owner | Protected dependency |
| --- | --- | --- |
| Language state and metadata | `LanguageProvider` | initial language, persistence, toggle, typed copy, metadata updates |
| Contact modal state | `App` | one shared open/close state and modal ownership |
| CTA callback | `App` passed to Navbar, Hero, FinalCTA, Footer | callback signature and shared contact entry points |
| Homepage composition | `App` | section order, render presence, and anchor IDs |
| Reveal observer | `App` / `useRevealObserver` | `[data-reveal]`, `.reveal`, fallback, cleanup, language refresh |
| Navbar active state | `Navbar` | scroll listener, active IDs, smooth scrolling, language/menu controls |
| FAQ state | `FAQ` | accordion state and ARIA relationships |
| Statistics counter | `StatisticsStrip` / local `Counter` | viewport-triggered counter behavior only; no backend contract |
| Hero/system motion | Hero CSS; `AIWorkflow` local state if later used | connected-systems signal and reduced-motion behavior |
| Supabase client | `src/lib/supabase.ts` / `ContactModal` | nullable client, env names, `leads` table, payload columns |

### Must survive unchanged in behavior

- Language initialization, persistence, switching, translation shape, and metadata updates.
- All four CTA paths into the single `App`-owned ContactModal, including form fields, requiredness, `leads` payload, success/error states, and close behavior.
- Mobile navigation/menu behavior, anchor IDs, active-section tracking, and Footer sitemap targets.
- FAQ accordion semantics, reveal fallback, reduced-motion behavior, modal Escape/backdrop handling, and body scroll lock.
- Founder copy/portrait continuity, Luma prototype asset continuity, Hero image path continuity, and social preview metadata continuity.

### Safe to restyle later

- Modal surfaces, colors, spacing, glow, typography, icons, responsive layout, and animation.
- Navbar appearance and CTA styling; Hero and section presentation while copy, IDs, callbacks, and accessibility contracts remain.
- Founder layout and Luma presentation; language-switch treatment; CSS animation style that continues to honor reduced motion.

### Highest regression risks

- Contact flow and Supabase payload because they depend on a backend table/column contract.
- Section IDs and navigation because translation arrays, Footer links, Navbar observers, and smooth scrolling are coupled.
- i18n data shape and array ordering because components map arrays and Solution branches by index.
- Trust decomposition because founder, system-proof, and process content currently share one component.
- Modal state ownership and CTA callback wiring because four entry points share the App-owned state.

## CSS and design-system audit

This audit records the current styling architecture only. No CSS cleanup, token replacement, or V2 implementation was performed.

### Styling architecture overview

- Tailwind CSS is configured through `tailwind.config.js` and the `@tailwind base/components/utilities` directives in `src/index.css`. The installed lockfile version is Tailwind `3.4.19` within the `^3.4.1` package range.
- PostCSS is configured in `postcss.config.js` with the Tailwind and Autoprefixer plugins. There is no separate CSS processor or styling plugin.
- `src/index.css` is the only source stylesheet found outside dependencies/build output. It is one global stylesheet organized into `@layer base`, `@layer components`, and `@layer utilities`; no CSS modules or additional component stylesheets were found.
- Most markup styling uses Tailwind utilities directly in TSX. The global stylesheet supplies shared primitives, section-tone/surface selectors, BEM-like component selector families, keyframes, and breakpoint patches. The active page therefore depends on both utilities and global selectors.
- CSS custom properties are not used as a design-token system. The only custom properties found are reveal implementation values: `--reveal-delay` and `--reveal-distance`.
- The Tailwind theme contains the current navy, teal, cyan, snow, Space Grotesk, Inter, and named animation tokens. There is no separate semantic token layer.
- Hardcoded hex, rgba, gradients, arbitrary Tailwind colors, radii, shadows, and spacing values are common across `src/index.css` and component class strings. Global keyframes exist both in `tailwind.config.js` and `src/index.css`.

### Global token inventory

#### Colors

- Tailwind navy scale: `navy-950 #070F1C`, `navy-900 #0A1628`, `navy-850 #0C1A30`, `navy-800 #0F1E36`, `navy-700 #152844`, `navy-600 #1E2D4A`, `navy-500 #283956`.
- Tailwind teal scale: `teal-50 #E6FBFA`, `teal-100 #CCF7F5`, `teal-200 #99EFEF`, `teal-300 #5FE3E2`, `teal-400 #2DD4D1`, `teal-500 #14B8A6`, `teal-600 #0D9488`, `teal-700 #0F766E`.
- Tailwind cyan scale: `cyan-400 #22D3EE`, `cyan-500 #06B6D4`, `cyan-600 #0891B2`.
- Tailwind snow scale: `snow-50 #F8FAFC`, `snow-100 #F1F5F9`, `snow-200 #E2E8F0`, `snow-300 #CBD5E1`, `snow-400 #94A3B8`, `snow-500 #64748B`.
- Global `section-tone` rules also use direct dark values `#070f1c`, `#0a1628`, and `#0c1a30`, while section surfaces add direct intermediate dark values such as `#091625`, `#081221`, and `#081a2b`.
- Teal/cyan gradients are used by `.text-gradient-teal`, `.mermaid-mark`, connected-system connectors, section surfaces, Hero backgrounds, and CTA utility classes. Direct rgba values are used for borders, signals, glows, and shadows.
- There are no CSS variables for colors; changing a palette globally would therefore cross Tailwind utilities, global selectors, arbitrary utility values, and component-local inline class strings.

#### Typography

- `font-display` is `Space Grotesk`, with `system-ui, sans-serif` fallback. `font-body` is `Inter`, with the same fallback chain.
- Body defaults in `@layer base` use `font-body`, `line-height: 1.65`, `letter-spacing: -0.012em`, antialiasing, and `font-feature-settings: 'cv11', 'ss01'`.
- Component typography is utility-driven, ranging from `text-xs` through `text-7xl`, with several arbitrary values such as `[11px]`, `[0.625rem]`, and `[0.9375rem]`. Display headings commonly use `leading-tight`, `leading-snug`, explicit `[1.04]`, or tracking values such as `[-0.04em]`.
- No shared type scale, display-size variable, or semantic editorial heading class exists beyond local families such as `.hero-heading`.

#### Spacing and layout

- The repeated page container convention is `max-w-6xl mx-auto px-5 sm:px-6`; individual sections add local `max-w-*` limits.
- Main sections use different utility padding bands: Hero uses `pt-28`/`sm:pt-24`/`lg:pt-36` with bottom overrides; Problem uses `py-20 sm:py-24 lg:py-20`; Solution and How use `py-16 sm:py-20`; Trust uses `py-20 sm:py-28`; FinalCTA uses `py-24 sm:py-32`; Footer uses `py-12 sm:py-16` internally.
- Local layout relies heavily on `gap-*`, `space-*`, `mt-*`, `px-*`, and arbitrary max-widths. There is no shared section-spacing variable.
- Common responsive breakpoints are Tailwind defaults represented by `sm`, `md`, `lg`, `xl`, and `2xl`, plus explicit CSS media queries at 420px, 639px, 640px, 767px, 768px, 1024px, and 1280px.

#### Radius, borders, and shadow/glow

- Common radii are `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`, and arbitrary `rounded-[1.25rem]`/`rounded-[1.5rem]`. Large radii are embedded in buttons, cards, boards, modal surfaces, and workflow fragments.
- Borders are primarily `border-navy-600`/`border-navy-700` with opacity modifiers such as `/35`, `/40`, `/55`, `/60`, `/65`, `/70`, `/75`, and `/80`; teal borders signal active or branded states.
- Shadows are mostly direct `box-shadow` declarations in global selector families and arbitrary Tailwind shadow utilities in Navbar, ContactModal, and CTA controls. Glows are produced with teal/cyan translucent backgrounds, blur utilities, radial gradients, and inset highlights.

### Shared global utilities and future action

| Selector/helper | Current use | Action | Phase 1 global-change risk |
| --- | --- | --- | --- |
| `.text-gradient-teal` | Shared teal gradient text in Hero, Solution, and FinalCTA | MIGRATE | High; changing the gradient changes all primary accent headlines at once. |
| `.section-tone`, `.section-tone--*` | Base backgrounds for StatisticsStrip, Problem, Solution, HowItWorks, Trust, FAQ, FinalCTA, and Footer | MIGRATE | High; these selectors establish the entire continuous dark section rhythm. |
| `.section-surface`, `.section-surface--*` | Absolute, pointer-transparent gradient overlays for the same section groups | MIGRATE | High; surface changes can affect contrast and section transitions globally. |
| `.btn-primary` | Hero, FinalCTA, and ContactModal primary actions | MIGRATE | High; padding, radius, color, and focus treatment are shared by every primary conversion point. |
| `.section-label` | Section labels in Problem, Solution, HowItWorks, Trust, and FAQ | MIGRATE | Medium-high; typography and pill treatment repeat across editorial sections. |
| `.card-glow`, `.card-lift`, `.card-base` | Declared card primitives; no active TSX references found | REMOVE LATER | Low now, but deleting or renaming them would break future/legacy markup if references are reintroduced. |
| `.reveal`, `.motion-ready .reveal` | Shared reveal state used across the rendered sections and initialized by `useRevealObserver` | REUSE | High; broad changes can hide content, alter language refresh behavior, or break the no-IntersectionObserver fallback. |
| `.input-premium`, `.success-check` | ContactModal fields and success icon animation | REUSE | Medium-high; visual restyling is safe only if focus, form semantics, and success state remain clear. |
| `.faq-answer` | FAQ accordion grid-row open/closed transition | REUSE | Medium; changing overflow or grid-row behavior can break answer visibility and keyboard/ARIA interaction. |
| `.how-*` helpers | HowItWorks intro, journey, stage rails, connectors, and type | REUSE | Medium; markup and selector family are tightly coupled but isolated to one section. |
| `.radial-glow`, `.grid-bg` | Hero radial background is active; `.grid-bg` has no active TSX reference | MIGRATE | Medium; Hero depends on the glow, while the unused grid helper is an old visual assumption. |
| `.mermaid-mark*` | Navbar/Footer brand mark and CSS mask treatment | REUSE | High for brand recognition; preserve mask sizing and silhouette behavior while changing color tokens. |
| `.workflow-*` | Detailed staged workflow styling for the non-rendered `AIWorkflow` component | REMOVE LATER | Low to current render, but it is a legacy visual family that should not be assumed to be active proof. |
| `.scrollbar-hide` and animation-delay helpers | Modal overflow handling and staged entrance timing | REUSE | Medium; broad utility changes can affect modal usability or timing consistency. |

### Component selector families

- **Navbar** — no dedicated global `navbar-*` family; nearly all styling is inline Tailwind utility composition in `Navbar.tsx`, including fixed positioning, backdrop, grid columns, glow, active underline, and mobile dropdown. It is tightly coupled to current navy/teal/snow classes and arbitrary shadows; responsive behavior is encoded with `lg` utilities. **Action: MIGRATE.**
- **Hero** — `.hero-*` and `.hero-section--tr` cover noise, heading balance, metadata, image frame, connected-system rail, nodes, connectors, and Turkish desktop/mobile patches. The family is tightly coupled to navy surfaces, teal/cyan signals, rounded image/rail surfaces, gradients, and shadows; it has media queries at 640px, 1280px, and mobile-specific language/order rules. **Action: MIGRATE.**
- **StatisticsStrip** — `.stats-principle`, `.stats-principle__value`, and `.stats-principle__label` support the translated metric band; the section tone/surface and border utilities are also required. It is utility/global coupled but has no protected business interaction beyond a local counter, and its responsive grid is in TSX utilities. **Action: REMOVE LATER.**
- **Problem** — `.problem-*` covers editorial copy, prompt line, board, incidents, fragments, route rows, status, and focus states. Markup and CSS are tightly coupled to a detailed navy board with teal status accents, rounded surfaces, borders, and shadows. It has desktop spacing overrides at 1024px and mobile patches through 767px, 639px, and 420px. **Action: MIGRATE.**
- **Solution** — `.capability-*` covers capability bands, interaction/automation fragments, experience list, and the Luma prototype viewport. It is tightly coupled to repeated rounded dark cards, navy borders, teal signals, shadows, and index-based visual markup; a 768px media query changes band columns and alternating order, with additional mobile overrides. **Action: MIGRATE.**
- **HowItWorks** — `.how-*` is a contained journey system with responsive rails/connectors, section intro, numbered stages, borders, and typography. It uses navy borders and snow text but has limited gradient/glow dependence; 768px changes the layout from stacked rows to three columns. **Action: REUSE.**
- **Trust** — `.trust-*` covers the intro, system-proof flow, process rows, and founder block. It depends on navy section rhythm, teal rules/markers, snow typography, borders, and a 1024px multi-column layout; markup and CSS are tightly coupled across three future content destinations. **Action: MIGRATE.**
- **FAQ** — `.faq-*` controls layout, list borders, trigger states, icon rotation, and grid-row answer expansion. It is tightly coupled to the accordion markup and ARIA structure, uses navy borders and teal active states, and has 768px and mobile text/spacing overrides. **Action: REUSE.**
- **FinalCTA** — no dedicated `final-cta-*` family; the section uses tone/surface selectors plus utility typography, spacing, gradient text, and `.btn-primary`. It has strong navy/teal assumptions and no additional section-specific media CSS beyond utility breakpoints. **Action: MIGRATE.**
- **Footer** — no dedicated `footer-*` family; layout and surfaces are utility-driven with `.section-tone--footer`, navy borders/backgrounds, teal icon/action states, and rounded prompt/social controls. It is visually coupled to the current dark system but structurally straightforward; responsive behavior is utility-driven. **Action: MIGRATE.**
- **ContactModal** — no modal-specific global family beyond `.input-premium`, `.success-check`, and `.scrollbar-hide`; most styling is inline utility classes including navy surfaces, teal glow, rounded `2xl`, direct shadows, and `max-h-[90vh]`. The form markup and visual utilities are tightly coupled, while responsive behavior uses `sm` utilities. **Action: REUSE.**
- **MermaidMark** — `.mermaid-mark` and `.mermaid-mark__silhouette` create the teal/cyan gradient wrapper and black CSS mask from `/images/mermaid-mark.png`. It relies on gradient, overflow, absolute positioning, mask sizing, and contrast/drop-shadow treatment, but has no responsive overrides. **Action: REUSE.**
- **AIWorkflow** — `.workflow-*` is globally styled but the component is not in the active homepage render tree. It contains a full rounded navy workflow shell, borders, teal state highlights, line/marker visuals, and repeated mobile patches at 767px and 639px. **Action: REMOVE LATER.**

### Section tone system

- `.section-tone` provides the base dark background. Variants group the current rhythm: Stats/Problem/Trust/FAQ share the darkest `#070f1c` family, Solution/How use `#0a1628`, FinalCTA uses `#0c1a30`, and Footer returns to `#070f1c`.
- `.section-surface` is a pointer-transparent overlay layer. Its variants add linear gradients for Stats, Problem, Solution, How, Trust, FAQ, and FinalCTA; the section components render these as absolute full-section children.
- Together these selectors create the current continuous dark visual rhythm and make sections appear related even when their inner components differ.
- Changing `.section-tone` or `.section-surface` globally would affect most of the homepage at once, including contrast, border visibility, and the perceived order of section tones. This is a high-coupling system, not a safe place for a one-shot recolor.
- Safest staged strategy: keep the existing tone families intact while introducing additive V2 surface classes or semantic variables for migrated sections, then remove old variants only after their render usage is gone.

### Color coupling audit

| Major area | Evidence of coupling | Level |
| --- | --- | --- |
| Navbar | Direct `bg-navy-*`, `text-snow-*`, teal/cyan gradient CTA, teal glow, navy border/shadow utilities in the component | HIGH |
| Hero | Global `.hero-*` values plus direct navy/teal/cyan classes, radial gradients, image/rail shadows, and Turkish-specific rules | HIGH |
| StatisticsStrip | Tone/surface variants, navy borders, snow text, and teal counter/reveal treatment | MEDIUM |
| Problem | Tone/surface variants plus navy board/fragment backgrounds, repeated navy borders, teal status accents, and hardcoded board shadow | HIGH |
| Solution | Tone/surface variants, repeated navy/cyan/teal visual fragments, rounded cards, and Luma viewport assumptions | HIGH |
| HowItWorks | Tone/surface variants, navy border rails, snow text, and teal active/section-label accents | MEDIUM |
| Trust | Tone/surface variants, teal markers/rules, navy borders, and snow text across proof/process/founder blocks | HIGH |
| FAQ | Tone/surface variants, navy list borders, snow defaults, and teal open/hover/focus states | MEDIUM |
| FinalCTA | Final tone/surface, gradient text, primary button, direct navy/snow/teal classes, and arbitrary CTA shadow | HIGH |
| Footer | Footer tone, navy surfaces/borders, teal icons/actions, and utility-only responsive layout | MEDIUM |
| ContactModal | Direct navy modal/backdrop/input classes, teal glow, arbitrary shadow, and red error utilities | HIGH |
| MermaidMark | `.mermaid-mark` uses a teal-to-cyan gradient; `.mermaid-mark__silhouette` uses a hardcoded black mask with contrast/drop-shadow filters | HIGH |
| AIWorkflow | Non-rendered `.workflow-*` family uses navy shell/surfaces, navy borders, snow text, teal state markers, and teal completion surfaces | MEDIUM for current page; HIGH if reintroduced without isolation |

### Color coupling conclusion

- Unsafe for global recoloring: Navbar, Hero, Problem, Solution, Trust, FinalCTA, ContactModal, and MermaidMark. Their navy/teal/snow utilities are combined with gradients, borders, shadows/glows, or direct colors in component-specific markup/CSS.
- Lower-risk visual migration candidates: HowItWorks, FAQ, Footer, and StatisticsStrip, provided their section-tone/surface usage and behavior contracts are preserved. AIWorkflow is lower risk only because it is not currently rendered; it still needs isolation if brought back.
- Phase 1 must not simply redefine old `navy`, `teal`, and `snow` tokens because those names currently serve both global defaults and semantic states across old sections, form controls, focus rings, brand marks, and inactive legacy styles. A token swap would recolor unmigrated V1 and V2 surfaces simultaneously and could create contrast regressions.

The unsafe global recolor targets are the navy/snow base defaults, teal gradient helpers, tone/surface variants, `.btn-primary`, and the modal input/success helpers. They should not be swapped in place while V1 and V2 sections coexist.

## Responsive CSS complexity

This is a CSS-complexity inventory only, not the full responsive architecture audit.

### Navbar

- Breakpoint model: Tailwind `lg` controls desktop navigation/actions versus mobile controls/menu; `sm` also changes container padding and logo sizing through utilities.
- Complexity: **HIGH**. The fixed header, three-column grid, explicit `col-start-*` placement, hidden desktop/mobile siblings, mobile dropdown `max-h`, and scroll-state class changes must remain synchronized.
- Fragile selectors/constraints: component-local `lg:hidden`/`hidden lg:flex`, `grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`, active underline pseudo-element, and `max-h-[28rem]` dropdown. No global Navbar selector family exists.

### Hero

- Breakpoint model: TSX uses `sm`, `xl`, and `2xl`; global CSS adds `max-width: 639px`, `min-width: 640px`, and `min-width: 1280px` patches.
- Complexity: **HIGH**. Mobile changes the `.hero-copy` wrapper to `display: contents` and reorders heading, subheadline, visual/workflow, CTA, and metadata. The visual region has aspect-ratio, absolute background layers, connected-system rail changes, and Turkish-specific desktop rules.
- Fragile selectors/constraints: `.hero-copy`, `.hero-copy__heading`, `.hero-visual-region`, `.hero-connected-systems`, `.hero-copy__cta`, `.hero-copy__meta`, `.hero-section--tr`, `aspect-ratio: 3 / 2`, and `hero-visual-region::before`.

### Problem

- Breakpoint model: TSX uses `sm`/`lg`; global CSS adds `min-width: 1024px`, `max-width: 767px`, `max-width: 420px`, and several `sm` rules inside selectors.
- Complexity: **HIGH**. Desktop editorial width and inter-block spacing are overridden at 1024px, while incident rows change from stacked to two-column grids and captions/details receive narrow-width patches.
- Fragile selectors/constraints: `.problem-editorial` desktop overrides, `.problem-board__caption` width/text alignment, `.problem-incident`, `.problem-incident__fragment`, and `.problem-route`; board overflow and max-width transition must be preserved.

### Solution

- Breakpoint model: TSX uses `sm`; global CSS uses `min-width: 768px` for two-column capability bands and alternating order, plus `max-width: 767px` for compact visual fragments and spacing.
- Complexity: **MEDIUM-HIGH**. The component alternates copy/visual order with `nth-child(even)`, and the third visual has a fixed `16 / 9` prototype viewport.
- Fragile selectors/constraints: `.capability-band:nth-child(even)`, `.capability-visual`, `.capability-prototype__viewport`, and mobile fragment selectors. Changing order or aspect ratio can disconnect copy from the intended visual.

### HowItWorks

- Breakpoint model: TSX uses `sm`; global CSS uses `min-width: 768px` to switch the journey from stacked rows/connectors to three columns with a horizontal rule.
- Complexity: **MEDIUM**. The connector changes from per-row absolute rails to a journey-level top rule, and padding/border ownership changes at the breakpoint.
- Fragile selectors/constraints: `.how-journey::before`, `.how-stage__connector`, `.how-stage:first-child`, and the `grid-template-columns` overrides.

### Trust

- Breakpoint model: TSX uses `sm`; global CSS uses `min-width: 1024px` to create the intro and founder multi-column layouts and expand the system-proof flow to four columns.
- Complexity: **MEDIUM-HIGH**. One component contains proof, process, and founder blocks with separate spacing and responsive relationships.
- Fragile selectors/constraints: `.trust-intro-grid`, `.trust-system-proof__flow`, `.trust-system-proof__arrow`, `.trust-founder`, and the portrait `aspect-[4/5]` constraint.

### FAQ

- Breakpoint model: TSX uses `sm`; global CSS uses `min-width: 768px` for the two-column layout and `max-width: 767px` for trigger/answer spacing and type.
- Complexity: **MEDIUM**. The layout changes columns without changing accordion markup; answer visibility still depends on the grid-row transition and overflow rule.
- Fragile selectors/constraints: `.faq-answer`, `.faq-answer > div`, `.faq-trigger`, and the `data-open` state selector. These must remain aligned with ARIA relationships.

### ContactModal

- Breakpoint model: utility classes use `sm:grid-cols-2`, `sm:p-8`, and `sm:text-3xl`; the modal uses `max-h-[90vh]` and internal scrolling at all sizes.
- Complexity: **MEDIUM**. It has few media queries but strong fixed/maximum dimensions, absolute glow placement, backdrop/focus semantics, and a scrollable surface.
- Fragile selectors/constraints: `max-w-lg`, `max-h-[90vh]`, `overflow-y-auto`, `scrollbar-hide`, absolute backdrop/glow, and form grid changes. Do not let V2 surface work remove usable small-screen scrolling.

### AIWorkflow

- Breakpoint model: global CSS patches at `max-width: 767px` and `max-width: 639px` repeatedly compact the workflow shell, fields, event/action spacing, and completion block.
- Complexity: **HIGH if reintroduced; LOW to current render**. It is not currently rendered, but its CSS assumes a dense navy workflow card and has overlapping mobile patches.
- Fragile selectors/constraints: `.workflow-fields > div`, `.workflow-event`, `.workflow-interpretation`, `.workflow-actions`, `.workflow-message`, `.workflow-complete`, and the repeated narrow-width overrides.

### Cross-cutting responsive constraints

- Explicit CSS media queries are at `min-width: 640px`, `min-width: 768px`, `min-width: 1024px`, `min-width: 1280px`, `max-width: 767px`, `max-width: 639px`, `max-width: 420px`, and `prefers-reduced-motion: reduce`; Tailwind responsive utilities add a second layer.
- Fixed/aspect constraints include Hero `3 / 2`, Luma `16 / 9`, founder portrait `4 / 5`, modal `max-h-[90vh]`, and multiple `max-w` values. Absolute positioning is used for backgrounds, surfaces, masks, modal glows, rails, and connectors.
- The only negative-offset patterns found are visual/connector offsets (`-inset-px`, `bottom-[-1.5rem]`, `bottom-[-2rem]`); no broad negative-margin layout system was found. Overflow is intentionally managed by section wrappers, visual frames, modal scrolling, workflow regions, and `.scrollbar-hide`.

### Language-specific styling risks

- `.hero-section--tr` is the only explicit language-specific CSS selector found. At `min-width: 1280px` it changes Turkish reassurance wrapping and white-space behavior; the Hero component also conditionally adds this class for Turkish.
- Turkish copy is longer in key Hero strings, so heading wrapping, subheadline height, CTA/meta position, first-screen height, and the connected visual relationship can differ from English even with identical utilities.
- Earlier Turkish desktop height/spacing corrections show that translation length has already required language-specific layout patches. These rules are fragile because they combine with `xl`/`2xl` utilities and the Hero mobile order rules.
- V2 should prefer language-tolerant widths, wrapping, and intrinsic layout over continuing to add language-specific CSS. A language-specific exception should remain only when the content cannot be made robust through shared constraints and both TR/EN are regression-tested.

### Duplication and technical debt evidence

- `src/index.css` contains a repeated `.problem-board` selector: its visual declaration is followed later by a separate transition declaration for the same selector. This is safe today but makes ownership less obvious.
- Workflow spacing and field layout are overridden in both `max-width: 767px` and `max-width: 639px`, with repeated declarations for body padding, fields, event spacing, actions, message spacing, and completion spacing.
- Navy border/background/radius/shadow recipes are repeated independently across Hero visual frames, workflow shell, Problem board/fragments, capability visuals, Trust separators, Footer prompt, Navbar, and ContactModal rather than routed through semantic primitives.
- `.section-tone`/`.section-surface` variants repeat dark values and gradient construction instead of using variables or a semantic surface map.
- The global `* { @apply border-navy-600; }` rule has broad reach: any element with a border can inherit the current navy border token unless overridden.
- `.card-glow`, `.card-lift`, `.card-base`, and `.grid-bg` are declared but have no active TSX references in the current source tree; they are identifiable legacy/dead styles and should not be removed during this audit.
- `AIWorkflow.tsx` has a complete global `.workflow-*` family and Tailwind entrance animation but is not rendered. These styles are legacy boundaries, not proof that the workflow is active on the homepage.
- Component files frequently repeat arbitrary color, radius, shadow, and spacing utilities instead of using the global helpers; this makes local visual changes safer than broad utility mutation but increases long-term token drift.

## Bold Systems conflict map

### Carbon / Graphite surfaces

Current conflict: The current page assumes a navy ladder (`navy-950` through `navy-500`) and direct dark hex backgrounds in the tone system. This is visually adjacent to Graphite but not semantically separated, so global navy remapping would alter every section, border, modal, workflow fragment, and Navbar at once.

Migration implication: Introduce a scoped Graphite/Carbon layer and migrate surfaces section by section; do not redefine the old navy scale in place.

### Bone White editorial sections

Current conflict: Body defaults assume `bg-navy-950 text-snow-100`, while section copy commonly uses `text-snow-*` and borders use `border-navy-*`. A light surface with inherited snow text and navy-on-dark assumptions could create contrast failures unless every child selector is scoped.

Migration implication: Give each light V2 section explicit dark-text, muted-text, border, focus, and control tokens; never rely on changing `body` defaults.

### Signal Lime primary accent

Current conflict: Teal is explicitly described in the stylesheet as the primary brand signal and is encoded across labels, CTA backgrounds, active states, dots, gradients, and focus rings.

Migration implication: Add Signal Lime as a new semantic accent for migrated V2 components while leaving teal behavior intact for V1.

### Electric Cyan secondary accent

Current conflict: Cyan already occupies a secondary slot in the Tailwind theme and teal/cyan gradients, especially Navbar CTA, MermaidMark, Hero signal treatment, and workflow states.

Migration implication: Reuse the conceptual secondary slot only through a scoped V2 token; do not assume current cyan gradients are a complete semantic system.

### Fewer cards

Current conflict: `rounded-* border bg-* shadow-*` recipes are repeated in Hero, Problem, Solution, workflow, Footer, Navbar, and ContactModal. These surfaces encourage a card-heavy composition.

Migration implication: Flatten only migrated presentation surfaces; preserve modal/form and functional grouping surfaces until their replacements are verified.

### Reduced roundedness

Current conflict: Large radii are directly embedded in `rounded-2xl`, `rounded-[1.25rem]`, `rounded-[1.5rem]`, and `rounded-xl` across primary surfaces and controls.

Migration implication: Use V2 radius tokens locally and leave old radius utilities untouched until all affected V1 selectors have migrated.

### Borders over shadows/glows

Current conflict: The current system uses translucent navy borders together with explicit shadows, inset highlights, blur, and teal glows in Hero, workflow, Problem, Solution, Navbar, CTA, Footer, and ContactModal.

Migration implication: Add V2 border-first surfaces independently; remove or reduce old shadows only after each migrated component has an intentional depth treatment.

### Larger editorial typography

Current conflict: Space Grotesk is the display font and is used for most headings, but heading scale and line-height remain local Tailwind utilities (`text-4xl` through `text-7xl`, `leading-tight`, `[1.04]`, tracking overrides). There is no semantic editorial display layer.

Migration implication: Establish scoped V2 display roles and test wrapping at both languages before changing shared type utilities.

### Dark/light tonal rhythm

Current conflict: The base body and section tone system assume dark surfaces with snow text. Inherited snow text and navy border utilities would be unsafe on a light section without scoped descendants.

Migration implication: Introduce isolated light-section classes with explicit child text, border, focus, and interactive states while old dark sections remain active.

### Custom system visuals

Current conflict: Existing visual systems are mostly rounded panels, gradients, CSS masks, fragment cards, rails, and utility compositions; there is no shared semantic system-canvas primitive.

Migration implication: Add new V2 visual primitives beside existing families and keep image/mask/overflow contracts isolated until the new system visuals are proven.

### Semantic motion

Current conflict: Motion is split between Tailwind entrance keyframes, global reveal classes, CSS keyframes for Hero connected systems, transition utilities, and the legacy AIWorkflow state family.

Migration implication: Preserve reduced-motion and reveal fallbacks, then introduce semantic V2 motion classes per component rather than changing all global transitions or keyframes at once.

## Safe Phase 1 styling strategy

| Approach | Evidence-based assessment |
| --- | --- |
| A. Globally replace navy/teal/snow values | Unsafe; these values are used as both palette and semantic state across nearly every active section. |
| B. Rename all current tokens immediately | Unsafe; it creates a broad migration diff before old and new sections can coexist. |
| C. Add V2 semantic tokens while preserving V1 tokens | Safest; it gives migrated sections explicit Carbon/Bone/Signal roles without changing unmigrated output. |
| D. Use component-local hardcoded V2 colors | Safer than global replacement but creates new duplication and makes later consistency difficult. |

Recommended strategy: choose **C**. Conceptually add scoped semantic roles such as `--v2-carbon`, `--v2-graphite`, `--v2-surface-elevated`, `--v2-bone`, `--v2-signal`, `--v2-system-cyan`, `--v2-text-dark`, `--v2-text-light`, `--v2-muted-dark`, `--v2-muted-light`, `--v2-border-dark`, and `--v2-border-light`, without implementing them in this checklist.

- Old `navy`, `teal`, and `snow` Tailwind names should remain temporarily because current V1 markup depends on them.
- Existing `.section-tone--*` styles should remain untouched until each section using them has migrated and passed visual regression checks.
- V2 sections should opt into a new class/token layer rather than inheriting old tone assumptions.
- Old styles can be deleted only after source references are removed, the replacement section is visually verified in TR/EN and target widths, and no shared behavior primitive still depends on the selector.

## CSS migration summary

Counts cover 21 major audit categories: the styling stack/base systems, shared helpers, and the required component selector families.

| Action | Count | Major categories |
| --- | ---: | --- |
| REUSE | 8 | Tailwind/PostCSS pipeline, reveal/reduced motion, form/status helpers, HowItWorks helpers, HowItWorks, FAQ, ContactModal, MermaidMark |
| MIGRATE | 11 | base palette/defaults, tone/surface system, shared button/label/card helpers, decorative helpers, Navbar, Hero, Problem, Solution, Trust, FinalCTA, Footer |
| REPLACE | 0 | No category requires a direct replacement before an additive migration boundary is established. |
| REMOVE LATER | 2 | StatisticsStrip, AIWorkflow/workflow legacy family |

## Highest CSS regression risks

1. **Global palette replacement** — Current navy/teal/snow values are both visual tokens and semantic states. Failure mode: unmigrated sections, focus rings, and form states recolor or lose contrast. Guardrail: add V2 semantic tokens and keep old names unchanged.
2. **`.section-tone*` / `.section-surface*`** — These selectors control most section backgrounds and transitions. Failure mode: the whole page loses its current rhythm or contrast. Guardrail: migrate one section at a time and leave old variants untouched until unused.
3. **Hero responsive and language patches** — `.hero-section--tr`, mobile `display: contents`/order rules, aspect ratio, and multiple breakpoints interact. Failure mode: Turkish wrapping, CTA order, or first-screen composition breaks at narrow/desktop widths. Guardrail: test TR/EN at 320, 375, 1024, 1280+ before removing a patch.
4. **Reveal and reduced-motion CSS** — `.motion-ready .reveal`, IntersectionObserver fallback, global reduced-motion overrides, and component animations are cross-cutting. Failure mode: content remains hidden, motion ignores user preference, or language refresh leaves stale reveal state. Guardrail: retain visible fallback and test with/without IntersectionObserver and reduced motion.
5. **ContactModal primitives** — `.btn-primary`, `.input-premium`, `.success-check`, direct modal shadows/overflow, and `max-h-[90vh]` support a shared conversion flow. Failure mode: unusable form contrast, clipped modal content, or broken success/error presentation. Guardrail: preserve field/focus/scroll contracts and test keyboard/mobile submission states.

## Safest Phase 1 approach

Phase 1 can safely add semantic V2 token definitions, scoped surface classes, and isolated V2 primitives while preserving all existing V1 utilities, tone variants, component families, reveal behavior, and form helpers. It should not globally replace navy/teal/snow, mutate `body` defaults, rename shared selectors, or delete unused/legacy styles yet. V1 and V2 should coexist through explicit section-level opt-in classes until each section is migrated and visually regression-tested in both languages, at mobile widths, and at desktop widths. Immediately after Phase 1, regression-test contrast on dark/light surfaces, Navbar/CTA states, Hero language wrapping, ContactModal focus/scroll behavior, reduced motion, and section transitions.

## Design-token migration risks

This is a migration-risk audit only. No tokens, variables, Tailwind values, or component styles were changed.

### Current token encoding map

| Current source | Evidence | Migration risk |
| --- | --- | --- |
| Tailwind theme colors | `tailwind.config.js` defines navy, teal, cyan, and snow scales consumed throughout TSX and `src/index.css` via `@apply` | HIGH; changing a scale changes many generated utilities at once. |
| Global CSS direct colors | `.section-tone*`, `.section-surface*`, and component families use direct hex values such as `#070f1c`, `#0a1628`, `#0c1a30`, plus direct black and intermediate dark values | HIGH; these values bypass the Tailwind theme and establish section contrast directly. |
| rgba colors | Borders, shadows, glows, signal dots, selection, and focus rings use many direct rgba values | HIGH; opacity and contrast relationships are distributed across components. |
| Gradients | `.text-gradient-teal`, `.mermaid-mark`, section surfaces, Hero backgrounds, connectors, and CTA utilities use teal/cyan gradients | HIGH; gradients currently carry brand meaning, not decoration only. |
| Arbitrary Tailwind values | Component strings contain arbitrary shadows, radii, widths, tracking, colors, and spacing | MEDIUM-HIGH; values are local but numerous and can conflict with semantic roles. |
| Component-local utilities | Navbar, Hero, ContactModal, Footer, and section components directly combine `navy-*`, `teal-*`, `cyan-*`, `snow-*`, border, radius, and shadow utilities | HIGH for shared/interactive components; local changes can be safe only when scoped. |
| Shared global helpers | `.btn-primary`, `.section-label`, `.text-gradient-teal`, `.section-tone*`, `.section-surface*`, `.reveal`, `.input-premium`, and `.mermaid-mark*` centralize current assumptions | HIGH; each helper affects multiple active consumers or behavior boundaries. |
| Body defaults | `body` applies `bg-navy-950 text-snow-100 font-body`, with global line-height and letter spacing | HIGH; inherited colors make introducing light sections without scoped text tokens unsafe. |
| Section tone/surface selectors | Seven section families use shared dark tones and absolute gradient overlays | HIGH; global edits change the page-wide tonal rhythm and contrast. |
| CSS custom properties | No semantic color, spacing, typography, or radius variables exist; only reveal timing properties are used | LOW as a current source, but the absence increases migration risk because new semantics need an additive boundary. |

### V2 token families

These are conceptual roles for Phase 1, not CSS declarations.

| Family | Minimum semantic roles |
| --- | --- |
| Surfaces | Carbon (primary dark), Graphite (base elevated dark), Elevated Graphite (interactive/raised dark), Bone White (editorial light) |
| Accents | Signal Lime (primary action/active signal), Electric Cyan (secondary system/data signal) |
| Text | Primary on dark, secondary on dark, primary on light, secondary on light |
| Borders | Border on dark, border on light, active/accent border |
| Interaction | Focus ring, hover state, pressed state, disabled state |
| Typography | Display, section heading, body, small label, system/mono label |
| Shape | Large surface radius, control radius, small UI radius |
| Spacing | Page gutter, section spacing, component spacing |

### Temporary compatibility strategy

- **Old `navy`, `teal`, `cyan`, and `snow` scales — YES, keep temporarily.** Current V1 markup and global helpers depend on them. They become safe to change only after all references are migrated or deliberately aliased and both language/viewport variants pass visual regression checks.
- **Current `.section-tone-*` and `.section-surface-*` — YES, keep temporarily.** They control most existing section backgrounds and gradients. Change or delete each variant only after its render usage is removed and the replacement surface is verified.
- **`.btn-primary` — YES, keep unchanged until consumers migrate.** It serves Hero, FinalCTA, and ContactModal. It becomes safe to restyle when each consumer has an explicit replacement action style and the modal/form behavior has been re-tested.
- **Body defaults — YES, keep unchanged.** `bg-navy-950 text-snow-100` is the safe V1 baseline. Change them only after no unmigrated V1 content inherits them, or after every descendant has explicit scoped light/dark roles.
- **ContactModal V1 tokens — YES, keep temporarily.** The modal is shared conversion infrastructure with focus, overflow, validation, and submission states. Restyle only as a separately verified migration after new modal surface/text/field tokens exist.
- **MermaidMark gradient — YES, keep temporarily.** It is a visible brand mark used by Navbar/Footer and metadata-adjacent identity. Recolor only through a separate brand-mark decision with asset/mask contrast checks.

### Token collision risks

- **Old teal primary vs Signal Lime:** both would describe “primary accent” but have different V1/V2 visual values and contrast behavior. Use names that distinguish legacy `teal-*` from semantic V2 `signal-*`; never alias `teal-500` directly to Lime during coexistence.
- **Old cyan accent vs Electric Cyan:** the name is similar, but current cyan participates in teal/cyan gradients and workflow styling. Use a V2 `system-cyan` role and migrate only intentional system signals rather than treating every `cyan-*` utility as equivalent.
- **Navy dark surfaces vs Carbon/Graphite:** navy values currently represent both page background and elevated component surfaces. Use explicit `surface-carbon`, `surface-graphite`, and `surface-elevated` roles so a V2 elevation change does not recolor V1 `navy-900` consumers.
- **Snow text vs Bone White surface:** `snow-*` is light text, while Bone White is a light background. Names must never imply that `snow` is the light-surface token; use separate `text-dark-*` and `surface-bone` roles.
- **Old borders vs V2 dark/light borders:** `border-navy-*` currently assumes dark backgrounds. Use `border-dark`, `border-light`, and `border-active` roles rather than reusing a single opacity scale on both surfaces.
- **Old glow usage vs semantic signal states:** teal blur/glow is currently decorative and widespread. V2 signal tokens should distinguish a meaningful active signal from ambient decoration, avoiding a global glow alias.

### Bone White safety requirements

The first Bone White section must declare its own scoped roles for:

- dark primary text
- muted dark text
- light-surface border
- interactive hover
- focus state
- button treatment
- icon color
- selection/accent state

Inherited V1 `text-snow-*`, `bg-navy-*`, and `border-navy-*` styles are unsafe because the body and most current components assume dark backgrounds. A light section can otherwise inherit pale text with insufficient contrast, dark-surface border opacities that disappear, teal focus/hover states tuned for navy, and buttons whose navy text/background relationship only works on teal. Bone White must therefore be an opt-in surface with explicit child text, borders, controls, focus, icons, and selection behavior.

### Carbon / Graphite safety requirements

The dark V2 surface layer needs explicit roles for:

- dark primary background
- elevated surface
- primary light text
- muted light text
- dark-surface border
- accent state
- focus state

This differs from renaming the navy scale because current navy values are not a semantic elevation model: `navy-950`/`900`/`850`/`800` appear in different components, while direct hex surfaces and rgba overlays add additional levels. Carbon/Graphite roles must define intended surface ownership and text/border contrast without changing existing V1 utility output.

### Signal Lime usage boundary

Signal Lime should be allowed conceptually for primary CTA emphasis, selected/active navigation, a key system status, a confirmed state, and small brand emphasis. It should not become large paragraph text, every border, every icon, every section heading, or a glow on every surface. The current stylesheet already uses teal for many of these roles, so V2 needs a narrower semantic boundary to avoid another accent-heavy AI template.

### Electric Cyan usage boundary

Electric Cyan should remain secondary and system-oriented: data flow, automation/system connectors, technical status, or a supporting visual signal. Signal Lime remains primary for conversion, selection, and brand emphasis. Lime+Cyan gradients should be rare and reserved for an intentional brand-mark or hero-system moment; most controls and section accents should use one clear accent so V2 does not recreate the current gradient-heavy teal/cyan treatment.

### Token introduction order

1. Semantic surface, text, and border roles, including explicit dark/light contrast pairs.
2. Page-gutter, section-spacing, and component-spacing roles that can coexist with existing utilities.
3. Typography roles for display, section heading, body, label, and system/mono content.
4. Shape roles for large surfaces, controls, and small UI.
5. Interaction roles for focus, hover, pressed, and disabled states.
6. Signal Lime and Electric Cyan accent roles with explicit usage boundaries.
7. V2 utilities/primitives that consume the new roles, introduced only in migrated sections.

This order follows the repository risk: surfaces and inherited text must be safe before a light section is introduced; interaction and accent changes should follow explicit contrast roles; utilities should be last so they do not force a global rewrite.

### Token migration guardrails

- Do not globally remap old palette names.
- Do not change body defaults during coexistence.
- Do not delete legacy token scales or helpers before references are removed and replacements are verified.
- Do not change old `.section-tone--*` or `.section-surface--*` styles globally.
- Do not globally restyle `.btn-primary` while Hero, FinalCTA, and ContactModal still consume it.
- Keep ContactModal on V1 tokens until its behavior and contrast are separately tested.
- Keep MermaidMark’s current gradient until a separate brand-mark recolor is approved.
- Make every V2 token and surface opt-in; do not silently alias it onto V1 names.
- Every new light surface must declare its own text, border, focus, hover, button, icon, and selection states.
- Preserve `reveal` fallback and reduced-motion behavior while introducing any tokenized motion primitives.
- Test Turkish and English wrapping, desktop/mobile breakpoints, keyboard focus, modal scrolling, and section transitions after each shared primitive migration.

### Token readiness conclusion

- The repository is ready for additive semantic V2 tokens because the current system has clear usage boundaries but no semantic variable layer; it is not ready for a destructive palette replacement.
- Compatibility aliases are necessary where V2 primitives need to coexist with V1 components, but aliases must be opt-in and must not redefine `navy`, `teal`, `cyan`, or `snow`.
- Tokens should ultimately live in both CSS variables and Tailwind theme extensions: CSS variables provide semantic/runtime source values, while Tailwind semantic aliases provide consistent utility ergonomics. Existing legacy names should remain unchanged during migration.
- The minimum Phase 1 set is: Carbon, Graphite, Elevated Graphite, Bone White; dark/light primary and secondary text; dark/light borders and active border; Signal Lime; Electric Cyan; focus/hover/pressed/disabled states; display/heading/body/label/system typography roles; three radius roles; and page/section/component spacing roles.
- This additive, section-scoped architecture minimizes migration risk because V1 output remains stable while each V2 section explicitly opts into its own surface, text, border, interaction, and accent contracts.

## Animation audit

This audit records current motion only. No animation, transition, timing, or reduced-motion behavior was changed.

### Animation-system inventory

| System | Files | Trigger / method / timing | Reduced-motion behavior | Purpose | Status and reason |
| --- | --- | --- | --- | --- | --- |
| Shared reveal-on-scroll | `src/hooks/useRevealObserver.ts`, `src/index.css`, rendered sections | App effect adds `motion-ready`; `[data-reveal]` elements are observed and receive `reveal-visible`. CSS uses `700ms` opacity/transform easing, `24px` default distance, and per-element `--reveal-delay`. | Global reduced-motion CSS makes reveals visible and removes meaningful duration/scroll behavior. No-IntersectionObserver fallback reveals immediately. | Progressive section entry and staged content reveal. | **REWORK** — useful infrastructure, but blanket fade-up treatment can feel generic when applied to every section. |
| IntersectionObserver motion triggers | `useRevealObserver.ts`, `Navbar.tsx`, `StatisticsStrip.tsx` | Reveal observer uses threshold `0.14` and root margin `0px 0px -8% 0px`; Navbar observes active IDs; StatisticsStrip activates at threshold `0.35`. | Reveal path has fallback; Navbar/Stats observers are functional and do not define separate reduced-motion branches. | Viewport entry, active navigation, and counter start. | **KEEP** for functional triggers; preserve observer cleanup and fallbacks. |
| Tailwind entrance animations | `tailwind.config.js`, Hero, ContactModal, non-rendered AIWorkflow | `fadeInUp` is `0.7s ease-out`; `fadeIn` is `0.8s ease-out`; delay utilities range from `0.1s` to `1s`. Used on Hero copy, modal, and AIWorkflow. | Global `prefers-reduced-motion` rule reduces animations to `0.01ms` and one iteration. | Initial content and modal entrance. | **REWORK** — retain purposeful entrances but reduce duplicated fade-up usage and avoid making hierarchy depend on timing. |
| Hero connected-systems motion | `src/index.css`, active `Hero.tsx` | CSS-only infinite loops: status dot `3.2s` pulse, node dots `4.8s` pulse with `1.2s/2.4s/3.6s` delays, connector sweep `5.5s`; no JS state drives it. | Hero-specific reduced-motion rule disables these three animations; global rule also applies. | Suggests a live connection between systems. | **REWORK** — the signal concept is useful, but repeated pulses/glow can read as generic AI decoration. |
| Statistics counter | `StatisticsStrip.tsx` | Section IntersectionObserver activates once; `requestAnimationFrame` counts numeric values for `1100ms` with cubic ease-out `1 - (1 - progress)^3`; observer disconnects after entry. | No component-specific reduced-motion branch; global CSS does not stop the JavaScript RAF counter. | Draws attention to the metric band. | **REMOVE LATER** — the section is presentation-only and planned for removal; the counter has little value without verified proof. |
| Navbar state and interaction transitions | `Navbar.tsx` | Scroll state at `window.scrollY > 24`; header/nav changes use `500ms`; logo scale uses `500ms`; active underline transform `300ms`; link/control colors `200ms`; mobile menu max-height/opacity `300ms`. | Global reduced-motion truncates CSS transitions; functional scroll/menu behavior remains available. | Communicates scroll state, active section, hover, and menu state. | **REWORK** — preserve functional state changes, simplify decorative glow/scale where it competes with navigation. |
| FAQ accordion | `src/index.css`, `FAQ.tsx` | `data-open` changes grid rows from `0fr` to `1fr` over `400ms`; icon rotates over `300ms`; trigger colors transition over `200ms`. | Global reduced-motion truncates transitions; `data-open`, `aria-expanded`, and answer content still work without motion. | Makes answer expansion legible while preserving the accordion contract. | **KEEP** — interaction is useful and remains usable without animation. |
| Button and CTA hover motion | `src/index.css`, Hero, FinalCTA, Footer, Navbar | Primary button uses `300ms` transition, `-translate-y-0.5`, shadow, and color changes; arrows translate on hover over `300ms`; footer controls use `200–300ms`. | Global reduced-motion truncates transitions; focus/activation remain CSS/HTML behavior. | Affords clickability and responsive feedback. | **REWORK** — keep feedback, reduce repeated lift/glow treatment across every CTA. |
| ContactModal entrance and success motion | `ContactModal.tsx`, `src/index.css`, `tailwind.config.js` | Root uses `animate-fade-in`; dialog uses `animate-fade-in-up`; fields/buttons use `200–300ms` transitions; `.success-check` uses `success-pop` for `500ms`. There is no explicit exit animation; closing removes the modal. | Global reduced-motion truncates CSS animations/transitions; form state and close behavior do not depend on motion. | Provides modal entry and success feedback for a protected conversion flow. | **KEEP** — preserve behavior and reduced-motion parity; visual restyling can be scoped later. |
| MermaidMark | `MermaidMark.tsx`, `src/index.css` | No animation or transition is applied to the mark; it is a static CSS mask with gradient wrapper and contrast/drop-shadow filters. | Not applicable. | Stable brand identity. | **KEEP** — static behavior is intentionally predictable. |
| AIWorkflow staged interval | `AIWorkflow.tsx`, `.workflow-*` CSS | Starts at stage `4`; `setInterval` advances every `2800ms` and cycles `4 → 0 → 1 → 2 → 3 → 4`; cleanup calls `clearInterval`. State classes drive `500–700ms` color/opacity transitions. | `matchMedia('(prefers-reduced-motion: reduce)')` prevents the interval; initial completed state remains rendered. | Demonstrates a staged workflow in an unrendered component. | **REMOVE LATER** — not part of the active page; its interval/state model should not be reused automatically. |
| Global reduced-motion handling | `src/index.css`, `AIWorkflow.tsx`, Hero CSS | `@media (prefers-reduced-motion: reduce)` disables animation/transition duration, sets reveal visible, disables workflow unresolved opacity, and Hero disables connected-system loops. AIWorkflow independently skips its interval. | This is the behavior itself; it provides parity for most CSS motion and a JS guard for AIWorkflow. | Accessibility and non-motion fallback. | **KEEP** — cross-cutting protection, not decorative motion. |

### Shared reveal system

`useRevealObserver.ts` adds `motion-ready` to `<html>`, discovers all current `[data-reveal]` nodes once per effect run, and observes them with an `IntersectionObserver`. Intersecting nodes receive `reveal-visible` and are unobserved. A `requestAnimationFrame` viewport check reveals elements already near the viewport, and a passive scroll listener repeats that check. The hook cleans up the observer, listener, and root class on unmount or `refreshKey` change.

The CSS defaults are `--reveal-distance: 24px` and `--reveal-delay: 0ms`; individual sections set delay values inline. When IntersectionObserver is unavailable, every discovered element receives `reveal-visible` immediately. Because the hook also checks viewport geometry and the reduced-motion rule makes reveal elements visible, the current implementation has fallback protection against content remaining hidden, although newly introduced `[data-reveal]` markup would still need to be tested.

`App` passes `language` as `refreshKey`, so changing language reinitializes the observer and its reveal collection. The system should be **REWORKED**, not removed: keep the fallback, cleanup, and language refresh, but reduce blanket fade-up usage and allow semantic per-section motion.

### Hero motion conclusion

The active Hero connected-systems animation is CSS-only, continuous, and independent of business state. The reusable concept is a restrained signal traveling through a clearly meaningful system relationship, with a static fallback when motion is reduced. The pulsing status/node dots, repeated glow-like sweeps, and generic entrance animations should not automatically survive as the V2 visual language; they currently risk a “generic AI UI” impression because the animation loops do not reflect changing application state.

### Statistics counter audit

The counter starts only when the StatisticsStrip enters the viewport at threshold `0.35`, runs a single `1100ms` RAF sequence, and cancels the current frame on cleanup. It does not intentionally rerun after the observer disconnects unless the component remounts or its `active`/value dependencies change. Its accessible label exposes the final value, but the visual count-up is not necessary to understand the text and has no dedicated reduced-motion short-circuit. If StatisticsStrip is removed from render, this animation and its observer should be removed later with the section rather than carried into V2 proof.

### Navbar motion audit

- **Functional transitions:** scroll-state resize/background changes, active-section underline state, mobile menu open/close, and language/menu controls must remain operable without motion.
- **Decorative transitions:** logo scale, backdrop/shadow changes, underline transform, hover color, CTA lift/glow, and mobile dropdown opacity/max-height. These can be simplified during V2 without changing scroll, active-section, language, or CTA logic.

### FAQ motion audit

The accordion uses a CSS grid-row transition and icon rotation tied to React `openIndex`; the same state drives `aria-expanded`, `aria-controls`, and answer-region content. Removing transitions would leave a usable open/closed accordion, so the motion is enhancement only. The `prefers-reduced-motion` rule shortens the transition without changing state or semantics.

### ContactModal motion audit

The modal has entrance animations but no exit transition: closing unmounts it. The backdrop is visually immediate, while field borders/backgrounds and close/success controls use short transitions. The `success-pop` check animation is feedback after a successful submission; loading is represented by a spinner utility while state is `submitting`. Global reduced-motion handling shortens CSS motion, and no form or submission state depends on the animation completing.

### AIWorkflow motion audit

`AIWorkflow` has five stages (`0`–`4`), starts at `4`, and advances on a `2800ms` interval with cleanup. Stage changes alter `is-current` and `is-resolved` classes; CSS transitions change color, opacity, border, and background over `500–700ms`. The reduced-motion check prevents the interval, leaving the initial completed state. The state progression could inform a future Live System Demo only as a behavioral reference; the current fixed content, timer, and card presentation should not be reused without a new proof decision.

### Keyframe inventory

| Keyframe / animation | File | Used by | Status |
| --- | --- | --- | --- |
| `fadeInUp` / `animate-fade-in-up` | `tailwind.config.js` | Hero copy, ContactModal dialog, non-rendered AIWorkflow | REWORK |
| `fadeIn` / `animate-fade-in` | `tailwind.config.js` | ContactModal root | REWORK |
| `glowPulse` / `animate-glow-pulse` | `tailwind.config.js` | No active source reference found | REMOVE LATER |
| `gridMove` / `animate-grid-move` | `tailwind.config.js` | No active source reference found | REMOVE LATER |
| `float` / `animate-float` | `tailwind.config.js` | No active source reference found | REMOVE LATER |
| `blink` / `animate-blink` | `tailwind.config.js` | No active source reference found | REMOVE LATER |
| `gradientShift` / `animate-gradient-shift` | `tailwind.config.js` | No active source reference found | REMOVE LATER |
| `connected-status-pulse` | `src/index.css` | Active Hero status dot | REWORK |
| `connected-node-pulse` | `src/index.css` | Active Hero system node dots | REWORK |
| `connected-signal-sweep` | `src/index.css` | Active Hero connectors | REWORK |
| `success-pop` | `src/index.css` | ContactModal success check | KEEP |

### Motion quality findings

- **Generic/ornamental:** Hero pulse/sweep loops, repeated CTA lift/glow, and blanket reveal/fade-up usage can read as familiar AI-template motion rather than evidence of a real system state.
- **Duplicated:** Entrance motion exists through both Tailwind animation utilities and the shared reveal system; many controls also add local transition utilities.
- **Too frequent:** Connected-system loops run continuously even when no state changes; Navbar and CTA transitions add several simultaneous effects on hover/scroll.
- **Purposeful:** FAQ expansion is tied to user state; Navbar active/scroll and menu transitions communicate navigation state; ContactModal success feedback follows a real submission result; reveal fallback and reduced-motion handling protect usability.
- **Behaviorally necessary:** Observer triggers, accordion state, modal state, and CTA/menu affordance transitions are useful but must never be required for comprehension.

### V2 motion guardrails

- Preserve functional transitions for navigation, accordion, modal, loading, and success states.
- Reduce blanket fade-up usage; use reveal only where it establishes hierarchy or reading order.
- Prefer semantic motion tied to a system state or user action over ambient decoration.
- Do not make comprehension depend on motion, timers, or an IntersectionObserver.
- Maintain reduced-motion parity for CSS and JavaScript, including interval-driven systems.
- Use one coherent motion language per section; avoid stacking shared reveal with local entrance animation without a clear reason.
- Keep continuous loops slow, sparse, and meaningful; avoid repeated glow/pulse treatment on every signal.
- Preserve no-IntersectionObserver fallbacks, cleanup, and language-change reinitialization.
- Treat legacy AIWorkflow timing as reference only until a Live System Demo contract exists.

### New animation library question

**NOT YET.** The current repository already has CSS keyframes, Tailwind animation utilities, React state/effects, IntersectionObserver, and requestAnimationFrame. Bold Systems does not currently require a new library; introducing one now would add dependency and motion-model risk before the semantic motion requirements are defined.

### Highest motion regression risks

1. **Shared reveal system** — Changing `.motion-ready` or reveal timing can hide content or break language refresh. Guardrail: preserve immediate fallback, cleanup, and reduced-motion visibility while testing every `[data-reveal]` section.
2. **Reduced-motion handling** — CSS and AIWorkflow use different protections. Failure could leave loops or intervals running for users who request reduced motion. Guardrail: test CSS and JavaScript motion paths independently.
3. **Hero connected systems** — Multiple infinite loops and delays are tightly coupled to the rail selectors. Failure could create excessive motion or remove the only system signal. Guardrail: keep a static semantic fallback and test the rail with motion disabled.
4. **Navbar mobile transitions** — Menu max-height/opacity and scroll-state transitions are combined with fixed positioning and active links. Failure could hide controls or leave an inaccessible-looking menu. Guardrail: verify open/close and navigation with transitions disabled.
5. **ContactModal state animation** — Entrance/success motion sits on protected form and scroll behavior. Failure could clip the modal or imply success before submission state changes. Guardrail: preserve state ownership, overflow, focus, and success/error rendering independently of animation.

### Animation migration summary

Counts cover 10 distinct animation systems, excluding static MermaidMark rendering and counting IntersectionObserver as the functional trigger within the reveal/section systems.

| Status | Count | Systems |
| --- | ---: | --- |
| KEEP | 3 | FAQ accordion, ContactModal motion, reduced-motion handling |
| REWORK | 5 | Shared reveal, Tailwind entrances, Hero connected systems, Navbar transitions, button/CTA hover motion |
| REMOVE LATER | 2 | Statistics counter, AIWorkflow staged interval |

## Responsive architecture audit

This is a source/CSS structure audit, not a visual redesign or responsive fix. No screenshots, breakpoint code, copy, or layout were changed.

### Global responsive model

- Tailwind defaults used by the repository are `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, and `2xl` 1536px. TSX utilities use these breakpoints directly.
- Explicit global CSS media queries exist at `min-width: 640px`, `min-width: 768px`, `min-width: 1024px`, `min-width: 1280px`, `max-width: 767px`, `max-width: 639px`, `max-width: 420px`, and `prefers-reduced-motion: reduce`.
- The common container is `max-w-6xl mx-auto px-5 sm:px-6`; Navbar uses `px-3 sm:px-6`. Local max widths include Hero heading `40rem`, Problem editorial `34rem`, Problem board `32rem`, founder portrait `20rem` on narrow layouts, and modal `max-w-lg`.
- Section vertical spacing is local rather than tokenized: Hero uses `pt-28/sm:pt-24/lg:pt-36` and bottom variants; Problem `py-20 sm:py-24 lg:py-20`; Solution/How `py-16 sm:py-20`; Trust `py-20 sm:py-28`; FAQ `py-20 sm:py-24`; FinalCTA `py-24 sm:py-32`; Footer uses inner `py-12 sm:py-16`.
- Responsive logic lives in both TSX utilities and the single global `src/index.css`. The system is therefore functional but mixed: Tailwind utilities define most geometry, while global selectors add component-specific order, aspect, spacing, and narrow-width patches.
- The principal architecture transitions are `lg` for Navbar and Hero columns, `md`/768px for Solution, HowItWorks, FAQ, and Trust layouts, and 640px/639px for Hero mobile composition and workflow compaction. It is not one fully centralized responsive system; it is a shared container convention plus local patches.

### Width-by-width risk map

| Width | Main structural risks | Highest-risk sections |
| --- | --- | --- |
| 320px | Long TR/EN labels, compact Navbar controls, Hero heading and system nodes, stacked incident fragments, modal padding/scroll height, and footer density have the least horizontal space. | Navbar, Hero, Problem, ContactModal, Footer |
| 375px | Same mobile architecture with more room, but Hero two-column system rail and Turkish metadata still depend on narrow text wrapping; mobile menu width and FAQ question wrapping remain sensitive. | Hero, Navbar, Problem, FAQ |
| 430px | The `max-width: 420px` patch no longer applies, so workflow/metadata and narrow caption behavior change at a nearby width; mobile remains below the `640px` Hero composition threshold. | Hero, Problem, AIWorkflow if re-rendered, FAQ |
| 768px | `md`/768px switches HowItWorks, Solution, and FAQ to multi-column behavior while `lg` Navbar/Hero remain mobile/stacked; columns must absorb translated content without fixed-height assumptions. | Solution, HowItWorks, FAQ, Trust |
| 1024px | `lg` activates desktop Navbar and Hero columns, Problem editorial overrides, and Trust multi-column layout; controls and long labels may compete immediately at the breakpoint. | Navbar, Hero, Problem, Trust |
| 1280px+ | Hero adds larger heading utilities, wider gap, visual-region padding, and Turkish reassurance `nowrap`; longer navigation/CTA labels and Turkish Hero height can diverge from English. | Hero, Navbar |
| Large desktop | `max-w-6xl` constrains most content while typography and aspect-ratio visuals stay large; excess side space and vertical balance become composition concerns rather than overflow concerns. | Hero, Solution, Trust, FinalCTA |

### Navbar responsive audit

- Desktop starts at `lg` (1024px). Desktop links are one `hidden lg:flex` center region and desktop language/CTA are a separate `hidden lg:flex` right region. Mobile controls are a separate `lg:hidden` region containing the visible language switch and hamburger.
- The desktop `<nav>` uses `grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`; logo, navigation, desktop actions, and mobile controls explicitly use `col-start-1/2/3`. This prevents hidden desktop siblings from auto-placing mobile controls into the center column.
- Desktop and mobile controls are duplicated markup at the breakpoint, but each control set is visibility-gated. The mobile dropdown separately maps the same `copy.nav.links` array and has no CTA.
- The logo remains in column 1, scales to `90%` when scrolled, and scrolls to the page top. Desktop links are hidden below `lg`; the mobile menu trigger remains visible below `lg`.
- The mobile dropdown is positioned below the fixed header as a relative block with `max-h-0`/`max-h-[28rem]`, opacity, overflow hidden, and a `300ms` transition. It contains full-width link buttons and closes after smooth scrolling.
- Active link state is an underline on desktop and a teal background/text state in the mobile dropdown. `activeSection` is supplied by a separate IntersectionObserver over the section IDs.
- Scroll state changes header padding, nav height (`h-16` to `h-14`), backdrop, border, shadow, logo scale, and logo text size.
- The mobile/desktop split is structurally reusable because the behavior and visibility boundary are explicit. V2 should preserve language switching, CTA callback, smooth scrolling, active-section tracking, fixed header behavior, and mobile menu closure.
- The current layout assumptions to rebuild later are the three-column grid, fixed navy backdrop, duplicated breakpoint markup, and max-height dropdown treatment. Near `lg`, the desktop set appears abruptly and translated nav/CTA labels must fit the centered/right regions; at 320/375, the logo, language control, and hamburger compete for the single row.

### Hero responsive audit

- Desktop architecture begins at `lg`: the Hero grid changes to `lg:grid-cols-[0.84fr_1.16fr]` with `md:gap-14` and `xl:gap-16`. Before `lg`, the same grid is one column, so tablet widths remain stacked rather than desktop two-column.
- At `max-width: 639px`, `.hero-copy` becomes `display: contents`. Its children are explicitly ordered: heading `1`, subheadline `2`, visual region `3`, CTA `4`, and metadata `5`. This is an intentionally composed mobile order, not ordinary source-order stacking.
- At 320/375/430, the Hero heading uses the mobile `.hero-heading` size `2.15rem` and line-height `1`; the subheadline is full available width with a small top margin; the CTA is full width; and mobile reassurance uses a compact two-row layout.
- The mobile visual region follows the copy and contains the image frame plus systems rail. The image frame keeps `aspect-ratio: 3 / 2`; the rail becomes a two-column grid, hides connectors, removes side margin, and compacts nodes to `text-[0.625rem]` with no horizontal overflow by design.
- At 640px and above, the systems rail returns to a flex row with connectors. At `xl`/1280px the visual region receives left padding and a decorative vertical rule; at `2xl` the heading grows through the TSX `2xl:text-7xl` utility.
- Heading max width is `40rem`; subheadline max width is `xl`; CTA is `w-full sm:w-auto`; desktop metadata is hidden below `sm` and mobile metadata is hidden at `sm` and above. Turkish-only `.hero-section--tr` changes reassurance to `nowrap` at 1280px, making longer copy a desktop pressure point.
- Overflow is managed by the Hero section `overflow-hidden`, frame overflow, min-width resets, and compact rail nodes. The primary remaining structural risks are text wrapping, stacked vertical height, aspect-ratio image size, and long Turkish metadata rather than a known horizontal overflow bug.
- Current mobile architecture is a real composition with reorder and `display: contents`; current desktop architecture is a two-column image-led layout. The functional behavior reusable for V2 is CTA callback, translated copy access, image alt/ratio discipline, connected-system concept, and mobile-first width containment.
- Future V2 mobile Hero should be treated as **B. intentionally composed mobile layout**, based on the existing explicit order and the V2 direction. It should not be treated as a mechanically stacked desktop Hero.

### StatisticsStrip responsive audit

- The strip uses `grid-cols-2` by default and `sm:grid-cols-4` from 640px, with compact vertical gaps on mobile and wider horizontal gaps on larger screens.
- Metric values and labels are content-driven; the translated labels can wrap, but there are no fixed heights. Numeric counters do not change layout structure.
- Responsive behavior is low priority if the section is removed from render as planned. Until then, preserve the two-column mobile fit and four-column desktop fit.

### Problem responsive audit

- The outer layout is stacked by default and becomes `lg:grid-cols-[0.95fr_1.05fr]` with `lg:items-center` and `lg:gap-16`. The editorial block receives a 34rem max width at 1024px; the board receives `lg:max-w-[32rem]` and aligns to the end.
- Incident rows are stacked by default and switch to a two-column grid at `sm`, with a `0.58fr/1.42fr` intro/fragment split. The board itself is overflow-hidden and each fragment is min-width constrained.
- Mobile patches adjust board header alignment, caption max width/right alignment, incident gap/padding, fragment radius/padding, route gaps, and narrow detail/message/warning font sizes. At 420px and below, caption width and incident text patches become stricter.
- Route rows are flex-wrap content with gap-y behavior; long translated route segments can wrap inside the fragment. No fixed incident height is used.
- The board’s mobile architecture is structurally safe but complex because four incidents use four index-driven fragment shapes plus several narrow-width patches. Compared with V2’s planned shorter friction section, the current incident-board architecture creates unnecessary mobile complexity and should be rebuilt rather than carried forward.

### Solution responsive audit

- Capability bands are stacked by default and become two columns at `min-width: 768px`, with `0.9fr/1.1fr` columns, centered alignment, and a 4rem gap.
- At desktop, even bands reverse copy/visual order through `.capability-band:nth-child(even)`. At mobile, source order remains copy then visual for every band.
- Each band’s visual is a rounded, bordered surface; the third Digital Experiences branch contains a Luma image in a fixed `16 / 9` viewport. Visual internals are different for interaction, automation, and prototype branches and are selected by `index === 0/1/2` in TSX.
- Mobile compression reduces band gap/padding, visual radius/padding, header wrapping, and internal type. The visual/copy relationship remains stacked, but each visual has different content density and internal layout needs.
- Future What We Build capabilities can share an outer responsive shell for container, copy/visual stacking, desktop columns, and spacing. The three capability types still need individual responsive composition inside that shell because the interaction flow, automation steps, and Luma prototype have different intrinsic heights and overflow/ratio constraints.
- Avoid carrying the `nth-child` order dependency into V2 if possible; explicit capability presentation metadata is safer than making responsive order depend on array position.

### HowItWorks responsive audit

- Mobile is a stacked journey: `.how-stage` uses a `3.25rem` rail column and a vertical absolute connector. At `sm`, the rail grows to `4.5rem`.
- At `min-width: 768px`, `.how-journey` becomes three equal columns with a journey-level horizontal top rule; individual vertical connectors are hidden and each stage uses borders/right padding.
- Rail ownership changes by breakpoint: mobile owns the connector inside each stage; desktop owns the shared `how-journey::before` rule while stage borders separate columns.
- Content height is intrinsic. Longer TR/EN titles/descriptions increase row height on mobile and column height on desktop; the desktop top rule remains independent of content height.
- The existing responsive model is reusable for a future three-step How We Work section if the ordered data remains simple and connectors remain decorative. Text should not depend on fixed stage heights.

### Trust / Founder responsive audit

#### System proof

- `.trust-intro-grid` is stacked by default and becomes `0.92fr/1.08fr` with a 5rem gap at 1024px. The system-proof flow is two columns by default and four columns at 1024px; arrows are hidden by default and shown inline at desktop.
- The flow is content-driven and may wrap differently in Turkish/English. It depends on grid column fit rather than fixed heights.

#### Process

- Process rows are always ordered rows with a glyph rail and content column; mobile uses `2.5rem` rail/3-column gap and desktop uses a wider `4rem` rail/5-column gap at `sm`.
- Titles/descriptions grow intrinsically. Longer translated descriptions increase page height but do not require a separate desktop composition.

#### Founder block

- The portrait wrapper uses `aspect-[4/5]`, is centered with a `max-w-[20rem]` constraint on narrow layouts, and becomes the first column of a `minmax(280px,360px)/minmax(0,1fr)` grid at 1024px.
- Mobile therefore stacks portrait before copy; desktop places portrait and copy side by side. The image remains `object-cover` and has no fixed pixel height beyond its aspect ratio/available width.
- Founder statement/model copy can be long in either language; the content column is intrinsic and uses a maximum width for the model description. The likely risk is vertical density, not horizontal overflow.

When Trust is decomposed, system-proof flow dependencies move to Live System Demo, process row dependencies move to How We Work, and portrait/copy grid dependencies remain only in Founder / Why Richt. This removes the current single-section multi-layout coupling and allows each destination to have a simpler responsive composition.

### FAQ responsive audit

- Mobile is a single-column intro plus accordion list. Triggers use `py-5`, a gap of `1rem`, and smaller type; answers use a reduced right padding and compact text.
- At `min-width: 768px`, `.faq-layout` becomes `0.8fr/1.2fr` with a 5rem column gap and the list receives a small top offset. Accordion width is intrinsic to the second column.
- Long questions wrap inside the trigger’s flex row with a fixed icon shrink behavior; the icon remains aligned at the end through `justify-between`. Answers use `max-w-2xl` and `overflow-hidden` within the grid-row transition.
- The structure is reusable. Preserve intrinsic question wrapping, icon shrink/alignment, ARIA attributes, and open/closed state when restyling.

### Final CTA responsive audit

- The CTA content is a centered `max-w-3xl` block with headline scaling from `text-4xl` to `sm:text-6xl`/`lg:text-7xl`; description is `max-w-xl`.
- The primary CTA uses `min-w-[18rem]` and becomes `20rem` at `sm`, with a vertical stack for CTA, reassurance, and quote at all widths. Quote uses `max-w-md` and can grow with translated copy.
- The section depends on the current dark tone/surface rhythm but has no component-specific responsive CSS. Main risk is large heading wrapping and vertical height at 320/375, not column overflow.

### Footer responsive audit

- The top prompt block stacks by default and switches to a row at `md`, using a rounded bordered surface and CTA button.
- The footer content grid is one column by default, two columns at `sm`, and four columns at `lg`. Sitemap, social controls, and contact blocks therefore move through three density states.
- The bottom bar stacks at mobile and becomes a row at `sm`. Sitemap labels, contact text, and social controls are content-driven; social controls stay fixed at `w-10 h-10`.
- Mobile stacking is structurally straightforward but the current footer has more groups and card-like prompt treatment than the planned simpler V2 footer. The likely risk is density and vertical length rather than a known overflow issue.

### ContactModal responsive audit

- The modal uses a full-viewport fixed overlay with `p-4`, a content surface `w-full max-w-lg`, and `max-h-[90vh] overflow-y-auto scrollbar-hide`.
- Fields are one column by default and two columns at `sm`; the modal inner padding grows from `p-6` to `sm:p-8`. The success state is centered and content-driven.
- Backdrop and glow are absolute; body scrolling is locked while open. The modal surface itself owns scrolling, which is essential for keyboard and small viewport use.
- At 320/375, long translated labels/placeholders, two-column transitions near 640px, viewport keyboard reduction, and the close control competing with the title are the main risks. No fix is made in this audit.
- When visually restyled later, preserve `max-w-lg`/intrinsic width behavior, `max-h-[90vh]`, internal vertical scrolling, body scroll lock, keyboard Escape handling, form field grid collapse, success/error fit, and accessible dialog semantics.

### TR / EN responsive differences

- Hero is most sensitive: Turkish headline/subheadline and reassurance strings can wrap into more lines, and `.hero-section--tr` adds a 1280px `nowrap` reassurance rule. Avoid expanding this patch without testing both languages.
- Navbar labels can create pressure in the centered desktop link group and right action group, especially at the `lg` transition. The same target IDs are stable, but visible label width differs.
- FAQ questions and answers, HowItWorks descriptions, Trust process/founder copy, Solution capability descriptions, and Footer labels can change intrinsic heights between languages.
- Array-mapped content can change row/band height without changing structure: Problem incidents, Solution capabilities, HowItWorks steps, Trust process, and FAQ questions all render variable-length translated content.
- Recommend intrinsic flexible layouts and content-driven heights first. A language-specific exception may remain necessary for Hero reassurance or heading scale if shared widths cannot prevent unacceptable first-screen composition, but it should stay isolated and regression-tested.

### Absolute positioning / overflow map

| Area | Absolute/fixed behavior | Overflow risk | Migration risk |
| --- | --- | --- | --- |
| Navbar | Fixed header; absolute backdrop; relative max-height mobile dropdown | Long labels/control fit and dropdown height near 320/375 | HIGH |
| Hero | Absolute background/noise layers; pseudo vertical rule; overflow-hidden frame/section | Text wrapping, image aspect, rail node fit, and order changes | HIGH |
| Problem | Absolute section surface; board/fragment overflow hidden | Long incident details/routes and narrow captions | HIGH |
| HowItWorks | Absolute mobile connectors and desktop journey rule | Connector offsets can misalign if stage spacing changes | MEDIUM |
| Trust | Absolute section surface; no primary content absolute positioning | Intrinsic copy/portrait height and four-column proof fit | MEDIUM |
| ContactModal | Fixed viewport overlay; absolute backdrop/glow; internal scroll | Keyboard viewport, max height, clipped long content | HIGH |
| MermaidMark | Absolute full-size mask layer inside overflow-hidden wrapper | Mask sizing/contrast rather than layout overflow | MEDIUM |
| AIWorkflow | Absolute action rail and fixed interval-driven state; not rendered | Dense card/rail compaction if reintroduced | HIGH if reintroduced |

### Responsive migration classification

| Area | Responsive action | Evidence |
| --- | --- | --- |
| Navbar | REWORK | Preserve behavior and breakpoints, but rebuild the fixed/grid/menu presentation for V2. |
| Hero | REBUILD | Mobile uses `display: contents`, explicit order, language-specific patches, and image-led desktop assumptions. |
| StatisticsStrip | REMOVE LATER | Simple grid/counter behavior has no protected responsive business contract. |
| Problem | REBUILD | Four index-driven incident fragments and narrow patches are more complex than the planned friction section. |
| Solution | REBUILD | Shared outer shell is possible, but current index/nth-child visual coupling and three intrinsic visual types are V1-specific. |
| HowItWorks | REUSE | Ordered stages and stacked/three-column transition are structurally reusable. |
| Trust | REBUILD | Combined proof/process/founder layouts should be separated before responsive migration. |
| FAQ | REUSE | Single-to-two-column accordion structure and intrinsic answer behavior are reusable. |
| FinalCTA | REWORK | Centered intrinsic block is reusable; spacing/type and surface assumptions can be migrated. |
| Footer | REWORK | Grid/stack behavior is reusable, but V2 needs a simpler content architecture. |
| ContactModal | REUSE | Preserve protected viewport, scroll, field-grid, and dialog behavior while restyling locally. |

### V2 responsive guardrails

- Treat mobile as intentionally composed, not as desktop mechanically stacked; the current Hero order proves the need for explicit mobile composition.
- Maintain no horizontal overflow at 320px, especially in Navbar controls, Hero systems, Problem fragments, FAQ triggers, and ContactModal.
- Prefer intrinsic sizing and content-driven heights; avoid fixed heights for translated text and stateful surfaces.
- Avoid language-specific hacks unless shared flexible widths cannot handle both languages; test TR and EN separately.
- Keep image aspect ratios intentional for Hero, Luma, and Founder rather than stretching or relying on viewport-specific heights.
- Use breakpoint changes only when composition actually changes; do not duplicate patches for small width differences without evidence.
- Protect modal internal scrolling, body scroll lock, Escape handling, and success/error fit at mobile viewport heights.
- Avoid `nth-child`/array-index layout coupling for future capability compositions where explicit metadata can express order.
- Avoid excessive absolute positioning for primary layout; reserve it for decoration, connectors, masks, and overlays.
- Preserve section anchors, CTA behavior, active navigation, FAQ semantics, and reduced-motion behavior across responsive changes.

### Required V2 QA widths

| Width | Priority | Reason |
| --- | --- | --- |
| 320px | CRITICAL | Minimum horizontal space for Navbar, Hero, board fragments, FAQ, Footer, and modal. |
| 375px | CRITICAL | Primary mobile composition and language-switch/menu fit target. |
| 430px | IMPORTANT | Boundary after the `max-width: 420px` patch and before the 640px mobile architecture change. |
| 768px | IMPORTANT | Solution, HowItWorks, and FAQ column transitions begin. |
| 1024px | CRITICAL | Navbar/Hero desktop transition plus Problem/Trust desktop overrides. |
| 1280px | IMPORTANT | Hero XL spacing, Turkish reassurance rule, and navigation/action width pressure. |
| 1440px+ | SUPPORTING | Large-container balance, image/column proportion, and wide desktop whitespace. |

### Highest responsive regression risks

1. **Hero** — Multiple structural transitions, `display: contents`, explicit order, aspect-ratio visual, and Turkish-only rules can fail together. Likely failure: wrong mobile order, wrapping, or rail overflow. Guardrail: test TR/EN at 320/375/430/1024/1280 before changing shared Hero rules.
2. **Navbar** — Hidden desktop/mobile sibling markup, three-column placement, fixed header, and long translated labels converge at `lg`. Likely failure: centered/overlapping controls or an inaccessible mobile dropdown. Guardrail: preserve explicit grid columns, one visible control set per breakpoint, and test 320/375/1024.
3. **ContactModal** — Fixed viewport, `max-h-[90vh]`, internal scrolling, field-grid collapse, and keyboard viewport changes are protected functionality. Likely failure: clipped form/success state or body scroll remaining locked. Guardrail: preserve dimensions/scroll contract and test keyboard/mobile states.
4. **Solution** — `nth-child` desktop order, index-driven visual branches, and Luma `16 / 9` constraints are coupled. Likely failure: copy paired with the wrong visual or compressed prototype. Guardrail: use explicit visual metadata in future and test each capability at 320/768/1024.
5. **Trust/Founder** — One component combines proof flow, process rows, and portrait/copy grid with different breakpoint needs. Likely failure: decomposition loses intended stacking or creates dense four-column proof/founder layouts. Guardrail: audit each future destination independently and preserve intrinsic copy/image sizing.

### Responsive architecture conclusion

- The current architecture is fundamentally responsive: it has coherent containers, Tailwind breakpoints, intrinsic grids, explicit mobile stacking, and narrow-width handling.
- It is not suitable as the direct unmodified foundation for V2 because responsive logic is split between TSX and global CSS, Hero/Problem/Solution contain V1-specific coupling, and Trust combines three destinations.
- Preserve behavior contracts: section anchors, CTA flow, Navbar language/menu/active state, FAQ semantics, modal scrolling, image ratios, and reduced-motion fallback.
- Rebuild Hero, Problem, Solution, and decomposed Trust/Founder responsive compositions; reuse HowItWorks, FAQ, and ContactModal structure with scoped visual migration.
- Phase 1 should not attempt a global responsive cleanup, typography redesign, breakpoint change, or mobile bug-fix sweep while token foundations are being added.
- Mobile-specific composition should remain a dedicated later phase, especially for the V2 Hero and any new system visuals.

## i18n and copy architecture audit

Inspect the complete translation structure and document:

- how strings are grouped
- whether components depend directly on array ordering
- whether visual behavior depends on exact string counts
- whether TR and EN structures match
- whether navigation-label changes require component changes
- where obsolete V1 strings can remain temporarily during migration
- risks when sections are merged or removed
- whether both languages can support native, concise V2 copy

Do not rewrite copy in Phase 0.

## Asset inventory

Inventory relevant existing assets and group them as:

- KEEP
- POTENTIALLY REUSE
- REPLACE LATER
- OBSOLETE AFTER V2

At minimum inspect:

- mermaid logo
- founder portrait
- Luma project/prototype imagery
- current Hero image
- Open Graph/social images
- additional project imagery

Do not delete or modify assets.

## Dependency audit

Inspect `package.json` and classify relevant dependencies as:

- REQUIRED
- USEFUL
- POSSIBLY UNNECESSARY
- DO NOT TOUCH

Cover dependencies relevant to:

- animation
- icons
- forms
- styling
- frontend rendering

Specifically determine whether Bold Systems requires a new animation library. The default recommendation should be to avoid introducing a new dependency unless existing CSS and React capabilities are insufficient.

Do not install anything during Phase 0.

## V2 migration-order validation

Validate the planned phase order against the actual current architecture:

1. Phase 1 — Design foundation
2. Phase 2 — Navbar
3. Phase 3 — Hero static
4. Phase 4 — Hero motion
5. Phase 5 — Hero mobile
6. Phase 6 — Selected Work
7. Phase 7 — What We Build foundation
8. Phase 8 — AI Systems
9. Phase 9 — Automation & Operations
10. Phase 10 — Digital Experiences
11. Phase 11 — Live System Demo
12. Phase 12 — Problem
13. Phase 13 — How We Work
14. Phase 14 — Founder / Trust merge
15. Phase 15 — FAQ
16. Phase 16 — Final CTA + Footer
17. Phase 17 — Copy audit
18. Phase 18 — Global motion
19. Phase 19 — Responsive QA
20. Phase 20 — Accessibility and performance
21. Phase 21 — Final visual QA

Determine whether current architecture creates a dependency that requires changing this order. If yes, recommend the smallest possible adjustment and explain the concrete technical reason. Do not rewrite the roadmap without evidence.

## Phase 1 readiness

Conclude the audit with a precise readiness boundary covering:

- files Phase 1 will likely touch
- files Phase 1 must not touch
- design tokens that can be migrated safely first
- whether temporary compatibility tokens are needed
- biggest regression risks
- what should be visually checked after Phase 1

This section must give enough information to create the later Phase 1 implementation plan.

## Phase 0 checklist

- Completed audit items may be checked only after their audit work has been performed.
- Future audit items remain unchecked.
- Source code remains locked throughout Phase 0.

- [x] Audit current homepage composition
- [x] Build component migration matrix
- [x] Map protected functionality
- [x] Audit CSS and current design system
- [x] Identify design-token migration risks
- [x] Audit animation systems
- [x] Audit responsive architecture
- [ ] Audit i18n and copy architecture
- [ ] Inventory relevant assets
- [ ] Audit relevant dependencies
- [ ] Validate V2 migration order against current architecture
- [ ] Define Phase 1 readiness and risk boundaries

## Phase 0 scope lock

This is an audit plan only.

Do not modify:

- `src/`
- `public/`
- `package.json`
- `package-lock.json`
- `pnpm-lock.yaml`
- Vite configuration
- Tailwind configuration
- Supabase configuration
- assets
- components
- CSS

Only `implementation_update.md` may change during Phase 0 planning.
