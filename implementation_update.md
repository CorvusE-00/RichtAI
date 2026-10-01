# Richt Ai — Design, Language & Metadata Implementation Plan

Status: **V6 complete — V7 not started; metadata validation remains pending domain/social confirmation**
Last updated: 2026-10-01
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

# Visual Refinement Phase — Removing the Generic AI/SaaS Look

Status: **V6 complete — V7 not started**

This is the next project phase after the completed metadata work. It is a careful visual evolution of the existing Richt Ai landing page, not a full rebuild. Each phase below is intentionally small enough to be implemented and verified independently by another coding agent without broadening into unrelated sections.

## 1.1 Design principles

The site should feel like a small, technically capable, founder-led digital systems studio rather than a generic AI automation or SaaS template.

1. **Show the system, not the category.** Use believable workflow states, operational fragments, and clear transitions to demonstrate what Richt Ai builds.
2. **Give the page a point of view.** Prefer a restrained Richt-specific visual language over familiar AI tropes or a collection of fashionable effects.
3. **Make clarity the premium signal.** Use hierarchy, spacing, typography, and plain language to communicate competence.
4. **Keep the founder visible without making the page personality-dependent.** Direct communication and accountability are differentiators, while the service should still feel like a durable system.
5. **Use evidence before decoration.** Working flows, diagrams, interfaces, and honest process details are stronger than unsupported metrics or invented social proof.
6. **Vary the rhythm.** Avoid repeating centered label → centered heading → identical cards in every section.
7. **Refine incrementally.** Preserve the working contact flow, language support, SEO/metadata, responsive behavior, and accessibility while changing one visual area at a time.

## 1.2 Current audit snapshot

The existing implementation is organized and functional, but its visual vocabulary still leans toward common AI/SaaS conventions:

- `src/components/Hero.tsx` combines grid motion, radial glow, floating blurred orbs, a centered hero, and a three-node workflow. The workflow communicates the idea, but its repeated rounded nodes and Lucide icons still read as a marketing card treatment rather than a believable operational interface.
- `src/components/AIWorkflow.tsx` is the main candidate for a later product-like system visual. It currently uses `MessageCircle`, `Sparkles`, `CalendarCheck`, rounded nodes, animated pulses, and directional connectors.
- `src/components/Problem.tsx`, `src/components/Solution.tsx`, and `src/components/Trust.tsx` repeat the card-glow/card-lift/card-base pattern. `Solution.tsx` also uses pointer tilt, which should not become the visual identity.
- `src/index.css` contains several reusable effects that need an audit before reuse: `card-glow`, `grid-bg`, `radial-glow`, `hero-noise`, floating/glow animations, and the workflow pulse system.
- `src/components/Trust.tsx` still renders testimonial-style entries and a client-name strip. These must not be presented as genuine proof unless approved real evidence exists.
- `src/lib/i18n.tsx` is the source of all Turkish and English visible copy. Turkish remains the default and both languages must stay complete as the visual structure changes.
- `src/lib/siteMetadata.ts`, `index.html`, `public/images/og-richtai.png`, crawler assets, and the existing structured data are completed metadata work and must remain stable during visual phases.
- `src/components/ContactModal.tsx` and `src/lib/supabase.ts` form the working contact path. They are protected surfaces during the visual refinement.

## 1.3 Patterns to reduce

Reduce gradually and intentionally rather than deleting every existing effect at once:

- glowing cards and gradient borders as the default treatment;
- floating blurred orbs, animated grids, and decorative noise as the main source of atmosphere;
- identical rounded cards with a number, icon, title, and paragraph repeated across sections;
- centered heading-plus-card-grid composition in every section;
- Lucide icons as the primary visual content in marketing sections;
- cyan/teal accents applied uniformly instead of carrying meaning;
- hover tilt, lift, pulse, and looping motion that do not explain the service;
- fake terminal, code, bot, brain, particle, and generic futuristic imagery;
- placeholder company names, testimonials, logos, or implied client outcomes.

## 1.4 Existing elements to preserve

- Turkish as the primary/default language and the persistent Turkish/English switch;
- the Richt Ai name, logo treatment, and supplied mermaid brand mark;
- the founder section and real Emre Kocaaliler portrait;
- the direct, founder-led contact experience and working Supabase lead submission;
- the dark navy foundation, provided it is refined into a more controlled palette;
- responsive behavior at 320px, 375px, tablet, and desktop widths;
- semantic HTML, keyboard focus states, readable contrast, and `prefers-reduced-motion` behavior;
- the existing metadata, social preview asset, canonical-domain gates, manifest, robots handling, and structured-data safeguards;
- the current section anchors and navigation behavior unless a future phase explicitly updates them.

## 1.5 Future hero direction

The hero should become asymmetric on desktop: strong outcome-led copy and CTA on the left, with a custom live automation/system visual on the right. On mobile, it should become a deliberate stacked composition rather than a compressed desktop layout.

The system visual should show a believable business workflow such as:

`Incoming enquiry → qualification → CRM update → appointment → follow-up`

It should feel like a compact operational interface with a few meaningful states, for example a customer message, lead details, qualification status, automation status, calendar appointment, and completed action. It must not become five glowing boxes connected by decorative arrows. The visual should explain the work Richt Ai performs without relying on the phrase “AI automation.”

The animation should be calm and sequential: a signal arrives, one state updates, and the next action becomes available. No infinite spectacle is required.

## 1.6 Future section rhythm

Use varied compositions and information density:

1. Navbar
2. Hero — asymmetric copy plus operational system visual
3. Compact capability/proof transition
4. Problem section — scenario-based/editorial, not four generic icon cards
5. Capabilities / solutions — visual-system driven and expandable beyond two cards
6. How it works — clear process with an intentional diagram or timeline
7. Founder / trust — editorial founder story and honest proof
8. FAQ — calm, compact answers
9. Final CTA
10. Footer

The sequence is a target rhythm, not authorization to rewrite every section in one task. Each phase must keep the page coherent if later phases have not yet shipped.

## 1.7 Icon usage rules

- Keep Lucide icons for buttons, navigation, form controls, status indicators, and small supporting details.
- Do not use an icon as the only visual explanation of a major service or problem.
- Prefer custom CSS/SVG diagrams, interface fragments, labeled states, and directional paths when the content describes a system.
- If a new custom SVG is introduced, keep it simple, accessible where meaningful, and consistent with the mermaid mark rather than imitating a third-party illustration style.
- Avoid adding an icon dependency or replacing the current icon system without a concrete accessibility and visual rationale.

## 1.8 Imagery rules

Preferred hierarchy:

1. Custom product/system interfaces
2. Custom Richt-specific diagrams and graphics
3. Real founder photography
4. Carefully selected real-world imagery only when it clarifies context

Do not add stock office teams, robot imagery, AI brains, random laptop photos, generic futuristic renders, or decorative images that compete with the workflow visual. Existing `public/images/og-richtai.png` is a metadata asset and should not automatically become an in-page hero image. The existing founder portrait remains the real-person anchor.

## 1.9 Motion rules

- Motion should clarify sequence, state, or hierarchy; it should never be the primary reason a section feels designed.
- Prefer one-shot entrance/reveal or short state transitions over continuous looping effects.
- Keep timing calm and avoid simultaneous animations competing for attention.
- Avoid layout shift: reserve space for workflow states and translated copy before animation begins.
- Make the static state complete and understandable without motion.
- Honor `prefers-reduced-motion` by disabling pulses, tilt, parallax, auto-advancing states, and decorative loops while preserving content and hierarchy.
- Validate touch and keyboard interaction independently from pointer hover effects.

## 1.10 Color-system principles

- Retain dark navy as the structural foundation, but use tonal layers and borders to create hierarchy before reaching for glow.
- Treat teal/cyan as a functional accent for action, active state, connection, or status—not as a background wash for every component.
- Establish one primary accent and one supporting signal accent per component or visual system; avoid full-spectrum gradients by default.
- Use snow/neutral text tones to carry hierarchy, with accent color reserved for meaning.
- Ensure the mermaid brand mark remains legible and visually distinct from interface status color.
- Check contrast in both static and animated states, including muted labels, borders, and workflow details.

## 1.11 Proof and trust rules

- Remove placeholder company names, testimonial-style quotes, client strips, and implied outcomes unless they are genuine and explicitly approved.
- Never replace placeholders with fake logos, fake testimonials, invented metrics, or invented case studies.
- Until real social proof exists, use honest proof: working demos, system diagrams, real project concepts, implementation process, founder credibility, and observable interactions.
- If an example is necessary, label it clearly as an example or concept in both languages.
- Do not add `AggregateRating`, `Review`, `sameAs`, social handles, addresses, phone numbers, or other metadata claims without approved real values.
- Keep proof close to the relevant service or workflow so it explains how Richt Ai works rather than acting as a decorative trust badge.

## 1.12 Founder-section principles

- Keep the Emre Kocaaliler section and supplied portrait.
- Make the section more editorial: a concise founder point of view, role, working model, and what remains true after launch.
- Emphasize direct communication, accountability, and continuity without repeating the full name throughout the page.
- Connect the founder story to the system-building process: the person who maps the workflow is also responsible for designing and building it.
- Avoid turning the section into an unsupported personal résumé, inflated authority claim, or testimonial substitute.
- Keep the founder image real and recognizable; do not apply an artificial AI portrait treatment.

## 1.13 Future chatbot direction

The chatbot is intentionally deferred until the main visual refinement is stable. Future work may use it as interactive proof of the service, not as a generic chat bubble.

Potential first prompt: `What are you trying to improve?`

Potential options:

- Customer support
- Lead follow-up
- Appointments
- Internal workflows
- I’m not sure

This phase defines only the design-system requirement: leave room for a future conversational entry point, make its states compatible with the workflow language, and do not implement chatbot behavior now.

## 1.14 Responsive principles

- Design desktop and mobile compositions intentionally, with mobile treated as a first-class information hierarchy.
- At narrow widths, prioritize the outcome, primary CTA, and one understandable workflow path; do not stack every desktop decoration.
- Ensure custom diagrams have a readable compact state and do not depend on horizontal scrolling.
- Re-test Turkish and English line lengths because the two languages produce different heading and button widths.
- Keep the language switcher visible on mobile as it is today.
- Reserve stable dimensions for images and interactive visual states to prevent layout shift.
- Verify the page at approximately 320px, 375px, 768px, and desktop widths after every phase that changes layout.

## 1.15 Accessibility constraints

- Preserve semantic headings, landmark structure, accessible button labels, and the current modal/FAQ keyboard behavior.
- Use `aria-label` or visible labels for custom workflow diagrams where the visual sequence is not otherwise available to assistive technology.
- Do not encode essential meaning through color, glow, motion, or icon shape alone.
- Keep visible focus indicators and sufficient touch-target sizes.
- Maintain readable contrast for muted text, borders, active states, and the dark mermaid mark.
- Test keyboard navigation, screen-reader-friendly state changes, modal focus/escape behavior, and `prefers-reduced-motion`.
- Never hide essential content only because an animation has not completed.

## 1.16 Phased implementation roadmap

Each phase below is a separate implementation task. An agent should claim the phase, change only the listed scope, verify the acceptance criteria, and record evidence in the checklist and implementation notes.

### V0 — Design-system audit/refinement

- **Scope:** Inventory existing colors, type scale, spacing, radii, borders, shadows, effects, icon usage, and motion. Define a restrained Richt-specific token direction and decide which existing utilities remain available.
- **Files likely involved:** `src/index.css`; `tailwind.config.js`; selected component class names; `implementation_update.md`.
- **Explicitly out of scope:** No section redesign, no copy rewrite, no new dependencies, no hero implementation, no removal of working contact or metadata behavior.
- **Acceptance criteria:** A documented token/effect decision exists; accent usage has a clear purpose; the current page still renders unchanged in Turkish and English; typecheck, lint, build, and responsive smoke tests pass.
- **Regression risks:** Broad CSS utility changes can alter every section, reduce contrast, break reduced-motion behavior, or change modal/input styling unexpectedly.

#### V0 implementation record

- **Audit completed:** Reviewed `tailwind.config.js`, `src/index.css`, every active landing-page component, language/i18n behavior, metadata boundaries, workflow styles, modal styles, responsive classes, and motion utilities before editing.
- **Color roles:** Navy remains structural; teal is the primary action/active/status accent; cyan remains available as a secondary workflow signal instead of pairing with teal everywhere.
- **Surface hierarchy:** Borders and navy tonal contrast now do more separation work. Generic card glow, radial glow, grid contrast, hero noise, and workflow shadow/pulse intensity were reduced without removing active component dependencies.
- **Radius hierarchy:** Marketing card primitives use a controlled `1.25rem` radius; pills remain reserved for semantic labels/statuses; modal, input, workflow, and brand-mark shapes were not globally rewritten.
- **Depth and motion:** Card lift is limited to a subtle 2px movement. State/reveal motion remains. Decorative primitives remain available for existing sections but are documented as future-phase candidates rather than new design defaults. Reduced-motion rules remain intact.
- **Icon rule:** Lucide remains in place for navigation, controls, forms, status indicators, and current section support. Major section illustration changes remain deferred to V4/V5/V2.
- **Protected surfaces:** No component structure, marketing copy, navbar behavior, mermaid source/mask/proportions, founder portrait/content, metadata, crawler assets, or Supabase/contact architecture was changed.

#### V0 utility decisions

| Utility | Decision | Rationale |
| --- | --- | --- |
| `.text-gradient-teal` | **REFINE** | Keeps branded emphasis while removing the default teal-to-cyan sweep from every highlighted heading. |
| `.text-gradient-snow` | **REMOVE — unused** | No active component referenced it; removing dead CSS is safe and keeps the primitive set intentional. |
| `.card-base` | **REFINE** | Uses a controlled radius and navy border hover state so cards do not glow by default. |
| `.card-glow` | **REFINE / DEPRECATE FOR FUTURE PHASE** | Retained for current Problem/Solution compatibility, but its border treatment is much quieter and new sections should not adopt it automatically. |
| `.card-lift` | **REFINE / DEPRECATE FOR FUTURE PHASE** | Retained for existing interaction continuity, reduced from 6px to 2px, and should not define future section behavior. |
| `.section-label` | **REFINE** | Remains a semantic pill, but uses a navy surface/border with teal text rather than a teal-filled badge. |
| `.btn-primary` | **REFINE** | Teal is now the primary action surface with restrained shadow; cyan is no longer required in every primary CTA. |
| `.input-premium` | **REFINE** | Keeps focus visibility while reducing the cyan/teal shadow intensity for the protected contact modal. |
| `.grid-bg` | **REFINE / DEPRECATE FOR FUTURE PHASE** | Retained for the current hero/final CTA, reduced in contrast and enlarged in scale; V1/V9 may remove or replace it. |
| `.radial-glow` | **REFINE / DEPRECATE FOR FUTURE PHASE** | Retained for the current hero, reduced to a quieter background layer; it should not be the future system visual. |
| `.hero-noise` | **REFINE / DEPRECATE FOR FUTURE PHASE** | Retained for compatibility, reduced substantially, and not approved as a future decorative default. |
| `.workflow-shell` / workflow primitives | **REFINE** | Kept intact for V2 evolution; shell depth and pulse intensity were reduced without changing the workflow structure. |
| `.reveal` and reduced-motion rules | **KEEP** | These explain section hierarchy and preserve accessibility; no behavior was removed. |
| `fade-in`, `fade-in-up`, `glow-pulse`, `grid-move`, `float`, `blink`, `gradient-shift` | **KEEP FOR COMPATIBILITY / DEPRECATE DECORATIVE USE** | Existing active components still rely on some of these; future phases should avoid adding new looping decorative motion. |

#### V0 verification record

- `pnpm typecheck` — passed.
- `pnpm lint` — passed.
- `pnpm build` — passed; crawler generation still correctly warns that `VITE_SITE_URL` is unset for local builds.
- Local browser smoke test — passed in the in-app browser: Turkish default, English switch, mobile language control visibility, hero/workflow, contact modal, problem/solution/trust/founder content, FAQ accessibility tree, and footer were inspected.
- Responsive preview — inspected at the available narrow/mobile viewport and desktop viewport; no new horizontal overflow was observed.
- Reduced-motion CSS — preserved and verified by source audit; no V0 rule removes the existing reduced-motion overrides.
- Deliberately deferred — all V1–V11 structural redesign work, placeholder-proof removal, copy changes, navbar redesign, hero workflow replacement, metadata/domain work, and chatbot work.

### V1 — Hero structure

- **Scope:** Introduce the future asymmetric hero layout, preserve the current outcome-led copy and CTA, and establish a stable desktop/mobile content hierarchy.
- **Files likely involved:** `src/components/Hero.tsx`; `src/index.css`; possibly `src/lib/i18n.tsx` only for approved copy adjustments.
- **Explicitly out of scope:** No new operational workflow visual yet; no chatbot; no metadata changes; no changes to contact submission.
- **Acceptance criteria:** Desktop presents copy and a reserved visual area with clear hierarchy; mobile uses a purposeful stacked layout; no blank tail or layout shift; both languages remain readable; CTA opens the existing modal.
- **Regression risks:** Asymmetric layout may create overflow, cause translated heading collisions, or push the first CTA below an unreasonable mobile viewport.

#### V1 implementation record

- **Desktop decision:** Replaced the centered hero composition with a max-width two-column grid using a slightly dominant left copy column and a stable right visual region. The visual region is separated by a restrained vertical signal line rather than an outer dashboard/card shell.
- **Mobile decision:** Uses an intentional single-column order: eyebrow, headline, supporting copy, CTA, reassurance/trust, then the existing workflow. The CTA is full-width on small screens so it remains easy to reach before the visual.
- **Tablet decision:** Keeps the composition stacked below the `lg` breakpoint so the copy and temporary workflow do not become compressed. The two-column composition begins only when there is enough room for readable hierarchy.
- **Hero layers removed:** Removed hero-specific `grid-bg`, animated grid movement, `hero-noise`, and both floating glow orbs from `Hero.tsx`.
- **Hero layer retained:** Kept one subdued `radial-glow` layer and the structural navy gradient. The shared utilities remain available to other sections and were not globally deleted.
- **Temporary visual boundary:** `AIWorkflow.tsx` was not changed. It remains inside `.hero-visual-region` as the stable V2 replacement area.
- **Copy/functionality:** Existing Turkish and English copy, CTA behavior, modal/contact architecture, navbar, metadata, mermaid mark, founder section, and all other sections were preserved.
- **Verification:** `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed. The local browser preview was inspected in Turkish and English at the available narrow/mobile viewport, including text-first hero order, CTA placement, workflow placement, language switching, contact modal opening/closing, and the unchanged downstream sections. No new horizontal overflow was observed.
- **Deferred to V2/V3:** Operational interface redesign, workflow internals, hero-specific animation refinement, full 320px/tablet screenshot QA, and any hero copy or service changes.

### V2 — Hero automation visual

- **Scope:** Replace the generic three-node workflow treatment with a believable compact operational interface showing enquiry, qualification, CRM/appointment, and completion states.
- **Files likely involved:** `src/components/AIWorkflow.tsx`; `src/components/Hero.tsx`; `src/index.css`; `src/lib/i18n.tsx` for labels and accessible descriptions.
- **Explicitly out of scope:** No fake analytics, client data, unsupported outcomes, chatbot behavior, or full dashboard product build.
- **Acceptance criteria:** The visual explains a real workflow without relying on decorative arrows; its static state is understandable; motion is subtle and reduced-motion-safe; it fits desktop and mobile without clipping; accessible text describes the sequence.
- **Regression risks:** Overly complex state logic can cause hydration/layout issues, introduce visual noise, or make the hero look like a fake product demo.

#### V2 implementation record

- **Interface decision:** Replaced the three rounded icon nodes with one compact operational scene: an incoming website enquiry, a structured request summary, two system actions, and a completed appointment. The visual uses one bordered panel with separators rather than a dashboard, floating cards, or decorative arrows.
- **Content decision:** Added neutral Turkish and English example strings for `Örnek akış` / `Example workflow`, an illustrative enquiry, qualification fields, CRM/action status, and appointment completion. All labels remain visible without depending on the animation.
- **Motion decision:** Added a calm four-stage emphasis cycle that starts fully resolved and only changes opacity/color emphasis. There is no typing, bounce, spin, layout shift, or required information hidden behind motion. Reduced-motion users receive the fully resolved static state.
- **Responsive decision:** The scene uses a single-column structure that remains readable on narrow screens, with the request summary changing from three columns to two columns on mobile. The outer `workflow-shell` contract is preserved for the V1 hero region.
- **Files changed:** `src/components/AIWorkflow.tsx`, `src/index.css`, `src/lib/i18n.tsx`, and this checklist.
- **Verification:** `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed. The local browser preview was inspected at the available narrow/mobile viewport; the Turkish and English accessibility trees both expose the complete workflow sequence, and the page remained free of new horizontal overflow in the inspected view.
- **Deferred to V3:** Full 320px/tablet/desktop screenshot matrix, reduced-motion browser toggle, and final spacing/timing polish remain in V3. No V3 checklist item is marked complete.

### V3 — Hero responsive/motion QA

- **Scope:** Tune hero spacing, typography, workflow scaling, animation timing, pointer/touch behavior, and reduced-motion behavior across target widths and languages.
- **Files likely involved:** `src/components/Hero.tsx`; `src/components/AIWorkflow.tsx`; `src/index.css`; `src/hooks/useRevealObserver.ts` only if reveal timing needs a targeted fix.
- **Explicitly out of scope:** No changes to the problem, solution, trust, footer, or metadata systems.
- **Acceptance criteria:** 320px, 375px, tablet, and desktop screenshots show no clipping, dead zones, or unexpected horizontal scroll; switching TR/EN preserves visibility; reduced-motion renders a complete static hero.
- **Regression risks:** Breakpoint-specific fixes can diverge between languages or reintroduce hidden-section issues after copy reflow.

#### V3 implementation record

- **Desktop balance:** Moved the two-column composition to the `xl` breakpoint, changed the desktop ratio to a more even `1.02fr / 0.98fr`, reduced the heading maximum width to `40rem`, and kept the strongest `7xl` scale for `2xl` screens so the operational scene remains a peer to the message.
- **Tablet/mobile structure:** Below `1280px`, the hero stays stacked and centered, keeping the CTA and reassurance ahead of the workflow. The visual region no longer reserves a minimum height, so the transition into `StatisticsStrip` follows the actual hero content instead of a dead vertical spacer.
- **Panel refinement:** Lowered the outer border/shadow contrast, softened the top-bar separator and status treatment, reduced the message surface intensity, and removed one internal divider. The message and completed appointment remain the strongest interior moments while the scene reads as an embedded system fragment.
- **Motion timing:** Reworked the cycle into five stages at `2800ms` each (approximately 14 seconds): enquiry, interpretation, first system action, second system action, and a completed-state pause. The reset is gradual through opacity/state transitions rather than an abrupt empty-panel flash.
- **Reduced motion:** `AIWorkflow` skips its interval when `prefers-reduced-motion: reduce` is active and starts at stage 4, where all actions are resolved and the appointment is fully emphasized. The global reduced-motion CSS also removes transition/animation dependency and restores dimmed action rows to full opacity.
- **Verification:** `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed. The local browser preview was inspected in the available narrow/mobile viewport in Turkish and English; the workflow progression, language switch, CTA/contact modal, full semantic workflow summary, hero-to-statistics transition, and no-horizontal-overflow metric were verified. The responsive breakpoint audit confirms stacked behavior through `1024px` and the two-column treatment from `1280px` upward.
- **Deferred to V9:** Exact screenshot capture at every requested target width and final whole-site rhythm/performance review remain broader QA work; no unrelated section was changed and V4 remains untouched.

### V4 — Problem section

- **Scope:** Reframe the problem area around believable business situations and micro-interface fragments: unanswered enquiries, repetitive questions, fragmented handoffs, and appointment friction.
- **Files likely involved:** `src/components/Problem.tsx`; `src/lib/i18n.tsx`; `src/index.css`; new local visual subcomponents only if needed.
- **Explicitly out of scope:** No placeholder testimonials, no capability taxonomy expansion, no changes to the founder or contact sections.
- **Acceptance criteria:** The section tells a short operational story rather than presenting four interchangeable icon cards; the content works in TR/EN; icons are supporting elements only; keyboard and reveal behavior remain intact.
- **Regression risks:** Editorial layouts can become too dense on mobile or make the section less scannable if hierarchy is not tested.

#### V4 implementation record

- **Composition chosen:** Replaced the centered heading plus four-card grid with an asymmetrical editorial layout: a left-side explanation/prompt and one larger friction board on the right. The board is a shared operational surface containing four rows, not four standalone mini-dashboards.
- **Scenarios implemented:** Added concrete illustrative fragments for an after-hours unanswered message, a manual website-to-WhatsApp-to-notes-to-calendar handoff, a mobile visit with unclear service/rendezvous information, and a fragmented digital experience that makes easier-to-reach options feel more accessible.
- **Icon changes:** Removed the Problem section's primary `Clock`, `Globe`, `MessageSquareOff`, and `TrendingDown` imports and replaced them with timestamps, text labels, flow arrows, status dots, message fragments, and thin separators. No new visual depends on color alone.
- **Copy/data structure:** Replaced `problem.cards` with aligned Turkish/English `problem.incidents` data plus an illustrative board caption. The copy preserves the approved problem meaning without adding metrics, financial claims, client proof, or unsupported outcomes.
- **Responsive strategy:** The editorial column and board stack naturally below `lg`; board rows use a readable two-column layout from `sm` upward and remain single-column on narrow screens. All four incidents stay present; no desktop-scale four-column diagram was introduced.
- **Verification:** `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed. The local browser preview was inspected in Turkish desktop view and English desktop accessibility state; all four incidents, their labels/statuses, the StatisticsStrip-to-Problem transition, and the Problem-to-Solution transition were present. No horizontal overflow was observed in the available desktop preview, and the existing hero remained unchanged.
- **Deferred to V9:** Exact 320px/375px screenshot capture and the final whole-site rhythm/performance matrix remain broader QA work. V5 and all later sections remain untouched.

### V5 — Capabilities/Solution section

- **Scope:** Evolve the two-card solution area toward a scalable digital-systems structure covering customer-facing AI, operational automation, and digital experience while retaining clear entry points.
- **Files likely involved:** `src/components/Solution.tsx`; `src/lib/i18n.tsx`; `src/index.css`; potentially small custom visual components.
- **Explicitly out of scope:** No unsupported service promises, pricing, case studies, integrations, or backend feature implementation.
- **Acceptance criteria:** Visitors can understand what Richt Ai can build in one scan; each capability is benefit-led and visually distinct; the structure can grow without another repeated card grid; TR/EN and mobile layouts remain coherent.
- **Regression risks:** Adding categories can dilute the offer, create excessive page length, or repeat the same language across solution and hero sections.

#### V5 implementation record

- **Composition chosen:** Replaced the centered two-card section with a left-aligned capability introduction followed by a vertically structured three-band sequence. Desktop bands alternate copy/visual rhythm; mobile normalizes them into a clear copy-first stack.
- **Final capability taxonomy:** Customer-facing AI / Müşteri iletişimi, Operational automation / Operasyon, and Digital experience / Dijital deneyim. No additional service pillar was introduced.
- **Copy/i18n changes:** Replaced `solution.cards` with aligned Turkish/English `solution.capabilities`, using calm outcome-led titles, short explanations, illustrative visual labels, and no guarantees, metrics, fake integrations, or inflated technical claims.
- **Custom visual fragments:** Added a compact intent-understanding path for customer-facing AI, a thin status path for operational automation, and a small visitor-journey fragment for digital experience. Each fragment is text-led and semantically summarized by its surrounding copy.
- **Old patterns removed:** Deleted the `TiltCard` component, pointer-based tilt state, `Globe`/`Bot`/`ShieldCheck`/`Check` Solution imports, old two-card layout, large service icon blocks, checklist rows, card glow/lift usage, and the section's decorative blur.
- **Responsive behavior:** The three bands stack naturally below `768px`; alternating order is applied only from `768px` upward. Visual fragments remain readable without desktop-scale four-column diagrams or horizontal scrolling.
- **Verification:** `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed. The local browser preview was inspected in Turkish and English desktop states; all three capability groups, their distinct visuals, and the transition into How It Works were present. The available desktop viewport reported no horizontal overflow, and the Hero and Problem sections remained unchanged.
- **Deferred to V9:** Exact 320px/375px screenshot capture and the final whole-site rhythm/performance matrix remain broader QA work. V6 and all later sections remain untouched.

### V6 — Remove placeholder proof and restructure Trust

- **Scope:** Remove unapproved testimonial-style content and placeholder client names/logos; replace the proof area with honest process evidence, a working-demo explanation, system diagrams, or clearly labeled project concepts.
- **Files likely involved:** `src/components/Trust.tsx`; `src/lib/i18n.tsx`; `src/index.css`; `implementation_update.md`.
- **Explicitly out of scope:** No invented customer stories, logos, numbers, ratings, social handles, or metadata changes.
- **Acceptance criteria:** No visitor could reasonably mistake sample names, quotes, or metrics for approved customer proof; the section still communicates why a visitor should trust the process; founder content remains visible and accessible in both languages.
- **Regression risks:** Removing the existing strip may leave a perceived trust gap or alter page rhythm; any replacement must be evidence-based and not become decorative filler.

#### V6 implementation record

- **Placeholder proof removed:** Deleted testimonial quotes, names, roles, locations, five-star visuals, placeholder client/company labels, and the client-name strip from the Trust DOM. No replacement testimonials, ratings, logos, metrics, or outcomes were added.
- **Proof mechanism:** Replaced the old centered proof grid with an honest evidence composition: a compact conceptual `Message → Interpretation → System action → Next step` fragment plus four concrete process rows covering clarification, system design, build/testing, and continued direct support.
- **Composition chosen:** Left-aligned Trust introduction with the conceptual system fragment on larger screens; a structured process sequence below; the existing founder block and one-person accountability explanation remain visible beneath it. Mobile follows the simple order of heading, system evidence, process, and founder.
- **i18n cleanup:** Removed `testimonials`, `testimonialsAria`, `clients`, and `clientNames` from Turkish and English. Added aligned `processLabel`, `process`, and `systemProof` structures with direct, believable wording.
- **Founder boundary:** Preserved the existing portrait, accurate alt text, name, role, description, skills, and founder-led accountability content. Editorial founder refinement remains deferred to V7.
- **Verification:** `pnpm typecheck`, `pnpm lint`, and `pnpm build` passed. Turkish and English Trust states were checked in the local preview; the Trust DOM contains no testimonial, rating, or client-placeholder proof, and the existing founder portrait remains present. Exact 375px screenshot capture and the final whole-site matrix remain deferred to V9.
- **Deferred:** V7 founder editorial refinement and V9 global responsive/rhythm QA remain untouched.

### V7 — Founder section refinement

- **Scope:** Strengthen the founder section as an editorial explanation of direct communication, accountability, and continuity; use the existing real portrait with a stable responsive crop.
- **Files likely involved:** `src/components/Trust.tsx`; `src/lib/i18n.tsx`; `src/index.css`; `public/images/emre-kocaaliler-portrait.png` only if a non-destructive crop/export is required.
- **Explicitly out of scope:** No new biography claims, résumé, testimonial substitution, or portrait re-generation.
- **Acceptance criteria:** The founder story is concise, credible, and not repetitive; the image remains recognizable on mobile; the section supports the studio positioning without making unsupported claims; alt text remains accurate.
- **Regression risks:** Overemphasis on the founder can make the business feel informal or dependent on one person; crop changes can reduce face clarity or load performance.

### V8 — How It Works / FAQ polish

- **Scope:** Refine the process section into a calm, visually clear sequence and tighten FAQ presentation so answers support decision-making without generic filler.
- **Files likely involved:** `src/components/HowItWorks.tsx`; `src/components/FAQ.tsx`; `src/lib/i18n.tsx`; `src/index.css`.
- **Explicitly out of scope:** No new service commitments, guarantees, pricing, or chatbot implementation.
- **Acceptance criteria:** Process steps show what happens and what the visitor can expect; FAQ remains keyboard accessible with correct expanded/collapsed states; Turkish and English answers remain natural and do not cause layout jumps.
- **Regression risks:** Timeline/diagram changes can break connector alignment, focus states, or section height; longer English/Turkish answers may expose mobile overflow.

### V9 — Global rhythm and responsive QA

- **Scope:** Rebalance vertical spacing, section transitions, typography, visual density, and repeated treatments after V1–V8 are complete.
- **Files likely involved:** `src/index.css`; `tailwind.config.js`; all changed visual components; `src/hooks/useRevealObserver.ts` if needed for final reveal timing.
- **Explicitly out of scope:** No new content category, no new animation concept, no metadata or backend changes.
- **Acceptance criteria:** The page has a deliberate rhythm with no dead zones or repetitive card walls; all breakpoints and both languages are checked; no horizontal scroll or cumulative layout shift appears; reduced-motion and keyboard paths remain complete.
- **Regression risks:** Global spacing changes can undo carefully tuned hero or modal layouts and can make the long page feel either cramped or unfinished.

### V10 — Chatbot frontend

- **Scope:** Add only the approved chatbot front-end shell and first interaction as interactive proof, using the established workflow language and visual tokens.
- **Files likely involved:** New `src/components/Chatbot.tsx` or similarly scoped component; `src/App.tsx`; `src/lib/i18n.tsx`; `src/index.css`.
- **Explicitly out of scope:** No AI provider, backend, lead capture, production conversation logic, or unapproved floating chat behavior.
- **Acceptance criteria:** The entry point is optional, accessible, responsive, dismissible, and understandable; it does not obscure the CTA or contact flow; TR/EN and reduced-motion states are complete; no claims imply a live AI service before it exists.
- **Regression risks:** A floating widget can dominate the page, conflict with the contact modal, trap focus, or create mobile viewport problems.

### V11 — Final accessibility/performance/design QA

- **Scope:** Run the complete visual, content, responsive, accessibility, motion, performance, and metadata regression pass after the visual phases are approved.
- **Files likely involved:** All changed files; `index.html`; `src/lib/siteMetadata.ts`; `implementation_update.md`; test/build configuration only if a real issue is found.
- **Explicitly out of scope:** No new redesign direction, unapproved copy, new proof, domain guess, or feature expansion during QA.
- **Acceptance criteria:** Typecheck, lint, build, local browser smoke test, keyboard/focus test, reduced-motion test, TR/EN test, target-width test, image/loading check, metadata regression check, and contact-flow check all pass; checklist evidence is recorded.
- **Regression risks:** Late “polish” changes can reintroduce generic effects, alter SEO metadata, break language synchronization, or hide issues behind a desktop-only review.

## 1.17 Visual refinement checklist

- [x] V0.1 Audit current tokens, effects, icon roles, spacing, and motion.
- [x] V0.2 Approve the restrained Richt-specific design-system direction.
- [x] V1.1 Implement the asymmetric hero structure.
- [x] V2.1 Implement the operational hero automation visual.
- [x] V3.1 Complete hero responsive and reduced-motion QA.
- [x] V4.1 Reframe the problem section around business situations.
- [x] V5.1 Restructure capabilities without creating another generic card grid.
- [x] V6.1 Remove unapproved placeholder proof and add honest proof mechanisms.
- [ ] V7.1 Refine the founder-led editorial section.
- [ ] V8.1 Polish How It Works and FAQ presentation/accessibility.
- [ ] V9.1 Complete global rhythm and responsive QA.
- [ ] V10.1 Add only the approved chatbot frontend shell.
- [ ] V11.1 Complete final accessibility, performance, design, and metadata QA.

## 1.18 Contradictions and decisions to resolve

The existing plan contains useful implementation history, but the current code and earlier direction conflict with this new phase in several places:

- The earlier plan treats the current glow/grid/card system as a strong visual direction; this phase makes those treatments secondary and asks for a more restrained system language.
- The earlier plan allows visibly labeled placeholder testimonials and client names; this phase says unapproved proof should be removed rather than displayed as placeholder social proof.
- The current `Trust.tsx` still renders invented-looking names, locations, testimonial quotes, and client labels. These are not safe to present as genuine proof and are scheduled for V6.
- The earlier solution structure focuses on websites and automation as two cards; this phase expands the information architecture toward customer-facing AI, operational automation, and digital experience without requiring all three to ship at once.
- The current `AIWorkflow.tsx` is a useful first implementation, but its three rounded icon nodes are not the final hero direction. V1–V3 should evolve it into an operational interface rather than adding more decorative nodes.
- The current CSS includes `card-glow`, `grid-bg`, `radial-glow`, floating orbs, and multiple loop animations. They are not necessarily broken, but they should not all remain active by default after V0.
- The current implementation map references `src/components/Typewriter.tsx`, but that file is no longer present. This is historical context and should not be treated as a required future file.
- Existing metadata work is intentionally independent. Visual phases must not change canonical URL handling, social preview, structured data, crawler assets, or approved brand assets without a separate metadata reason.

## 1.19 Recommendations requiring human approval before implementation

1. Approve the shift from generic AI/SaaS visual language toward a founder-led digital systems studio.
2. Approve removal of all current testimonial and client-name placeholders unless real, approved proof is supplied.
3. Choose whether the hero workflow should display a compact operational interface, a signal-pulse variant, or a living-interface variant before V2 begins.
4. Approve the capability taxonomy: customer-facing AI, operational automation, and digital experience.
5. Confirm which service claims are currently deliverable and which must remain conceptual or be removed.
6. Confirm whether the existing dark navy/teal palette should be refined only or whether a materially different accent system is desired.
7. Approve any custom SVG/diagram work before it becomes a reusable brand asset.
8. Confirm that no chatbot backend or live AI promise should be introduced during V10.
9. Confirm the evidence allowed in the Trust section: working demos, process diagrams, concepts, founder credibility, or real approved case studies.
10. After final visual copy is approved, run a separate human review of Turkish and English wording before V11 is marked complete.

## 1.20 Phase handoff protocol

For every V-phase implementation:

1. Read this visual refinement section and the earlier implementation history before editing.
2. Claim one V checklist item in the current chat or implementation notes.
3. Touch only the files in the claimed phase unless a regression requires a narrowly documented adjacent change.
4. Preserve Turkish-default behavior, English switching, metadata, contact submission, accessibility, and reduced motion.
5. Update the checklist only after code and verification are complete.
6. Record changed files, screenshots or browser evidence, and test commands in the implementation notes.
7. Mark content, proof, and brand decisions as `Needs approval` instead of guessing.

## 1.21 Definition of done for the visual refinement phase

- The page no longer relies on generic AI/SaaS decoration as its primary identity.
- The hero explains a believable Richt Ai workflow through a custom operational visual.
- The page rhythm varies across sections and avoids repeated centered card grids.
- Placeholder proof is removed or replaced only with honest, approved evidence.
- The founder section remains real, concise, and clearly connected to the service model.
- The current mermaid brand mark, metadata, contact flow, language switch, responsive behavior, and accessibility support remain intact.
- Motion is calm, meaningful, and reduced-motion-safe.
- Turkish and English layouts are checked at mobile, tablet, and desktop widths.
- All V0–V11 checklist items are either verified complete or explicitly marked as blocked by an approval decision.

## 2. New direction

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
| 2026-10-01 | Codex | Visual Refinement Phase plan | Audited the current application structure, components, CSS effects, language system, assets, and metadata. Added the next V0–V11 visual refinement roadmap, design principles, generic-pattern reduction rules, proof/founder/chatbot guidance, responsive/accessibility constraints, contradictions, approval gates, and a phase checklist. No production code changed. |
| 2026-10-01 | Codex | V0.1 / V0.2 | Refined shared CSS primitives only: quieter card glow, reduced lift/noise/grid/radial effects, controlled card radius, border-first surfaces, teal-primary CTA emphasis, and lower workflow depth/pulse intensity. Removed the unused `.text-gradient-snow` utility. Preserved all section structures, copy, metadata, contact architecture, mermaid mark, founder portrait, language switching, and reduced-motion support. Verified typecheck, lint, build, Turkish/English browser smoke, mobile language control, contact modal, and responsive preview. V1+ remains deferred. |
| 2026-10-01 | Codex | V1.1 | Replaced the centered hero composition with a responsive copy-first structure and stable right-side V2 visual region. Preserved the existing `AIWorkflow` as temporary content, moved the CTA and trust information ahead of the workflow on mobile, removed hero-only grid/noise/floating-orb decoration, and retained one subdued radial layer. Verified typecheck, lint, build, Turkish/English switching, narrow/mobile hero order, CTA/contact modal behavior, downstream section visibility, and no new horizontal overflow. V2/V3 remain deferred. |
| 2026-10-01 | Codex | V2.1 | Replaced the generic three-node workflow with one bilingual operational scene covering a new enquiry, structured interpretation, system actions, and completed appointment. Added calm stage emphasis with a fully resolved reduced-motion-safe state, preserved the V1 hero shell contract, and verified typecheck, lint, build, Turkish/English accessibility trees, and the local narrow/mobile preview. V3 responsive/motion matrix remains pending. |
| 2026-10-01 | Codex | V3.1 | Tuned hero balance and moved the two-column layout to `xl`, removed tablet visual dead space, softened workflow borders/top bar/separators, compacted hero reassurance spacing, and changed the workflow to a calm five-stage ~14-second cycle with a completed-state pause. Verified typecheck, lint, build, Turkish/English browser states, CTA/contact modal behavior, hero-to-statistics transition, no horizontal overflow in the available narrow viewport, and reduced-motion behavior by source audit. V4 remains untouched; exact target-width screenshot capture is deferred to broader QA. |
| 2026-10-01 | Codex | V4.1 | Replaced the generic four-card Problem section with an asymmetrical editorial friction board. Added four bilingual operational scenarios, removed the four primary Lucide problem icons, preserved all original problem themes without metrics or proof claims, and verified typecheck, lint, build, Turkish/English browser states, section transitions, and desktop overflow. V5 remains untouched; exact narrow-width screenshot capture is deferred to broader QA. |
| 2026-10-01 | Codex | V5.1 | Replaced the generic two-card Solution section with three alternating capability bands for customer-facing AI, operational automation, and digital experience. Added distinct text-led interaction, workflow, and visitor-journey fragments; removed tilt state, primary service icons, checklist rows, card treatment, and decorative blur. Verified typecheck, lint, build, Turkish/English browser states, capability-to-How-It-Works transition, and desktop overflow. V6 remains untouched; exact narrow-width screenshot capture is deferred to broader QA. |

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
