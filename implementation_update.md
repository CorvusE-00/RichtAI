# Richt Ai — Hero V3: Live Operating System

## Project status

This is the active Hero V3 direction. Checklist 1, the contract audit and preparation step, is complete. Checklists 2–12 remain unchecked. No source code, CSS, i18n source, assets, dependencies, or rendered components were changed during the audit.

Later implementation must preserve the approved functional contracts and proceed in the listed order.

## Why the current Hero is being replaced

The current Hero is technically functional but visually underpowered:

- the right-side visual reads as a simple static diagram;
- the system concept feels generic and disconnected from live operations;
- the current canvas reads more like an explainer graphic than an operating system;
- the Hero lacks a memorable signature visual and premium first-impression energy;
- the current motion direction is not central enough to the concept;
- the scene does not clearly communicate that Website and WhatsApp can feed the same connected system;
- the visual does not make work feel as if it is actively moving through the business.

Hero V3 is a conceptual redesign. It must not be solved by adding a few moving dots to the current flowchart.

## Hero V3 objective

Create a Hero named **LIVE OPERATING SYSTEM** that communicates:

> Customer communication enters from multiple channels, and one connected system keeps the next step moving.

The right-side experience should feel alive, operational, precise, and premium while remaining understandable in two to three seconds. It must work as a strong paused composition before motion begins.

## Multi-channel service reality

Richt Ai is an AI automation and modern digital systems studio, not only a website-chatbot provider. The system story must support:

- Website chatbot / AI chat assistant;
- WhatsApp chatbot / AI chat assistant;
- lead qualification;
- CRM updates;
- appointment and calendar flows;
- notifications and internal workflow automation;
- AI-assisted enquiry handling;
- operational handoff to the human team;
- custom web experiences that connect to the same system.

The Hero must visibly represent at least two equal inbound communication channels:

**Website** and **WhatsApp** → shared AI assistant / logic layer → qualification and routing → CRM → calendar / appointment → team / next action.

Website and WhatsApp are clear examples, not a claim that the service is permanently limited to only those channels. Do not invent metrics or fake customer evidence.

## Quality benchmark

The quality target is the level of polish, pacing, confidence, visual liveliness, and motion quality found on strong modern digital-systems and automation-studio websites such as abhiman.io. This is a benchmark only; do not copy its layout, typography, components, copy, animations, or identity.

Richt Ai should reach a comparable level of first impression, editorial hierarchy, premium pacing, intentional animation, operational energy, and coherent visual storytelling while retaining its own identity: **BOLD SYSTEMS + LIVE OPERATING SYSTEM**.

## Concept options

### Option A — Live System Board

**Composition:** One premium operational surface contains a dominant route, two compact inbound sources, a central AI hub, quieter CRM and Calendar destinations, and a final Team handoff. A single active item is shown moving through the system rather than presenting a wall of equal cards.

**System story:** Website or WhatsApp enters from the same inbound edge, feeds AI, becomes structured operational work, reaches CRM and Calendar, and finishes at Team.

**Motion:** The active source alternates between Website and WhatsApp. A single signal travels along the route; AI changes from idle to processing to structured; downstream modules activate in sequence; Team receives the final handoff; the system pauses before resetting.

**Strengths:** Clearest premium/live balance; strong paused screenshot; makes the shared operating system legible; supports a memorable signature visual without becoming a dashboard.

**Risks:** Could drift into dashboard styling if all modules become equal cards or if too much status detail is added.

**Mobile:** Preserve the route as a compact vertical scene with both inbound sources visible and fewer simultaneous details.

### Option B — Signal Router

**Composition:** A more architectural composition built around one primary signal spine. Website and WhatsApp converge toward a central AI core, then branch into CRM and Calendar before reaching Team.

**System story:** Multiple inputs are routed through one intelligence layer and one operational backbone.

**Motion:** SVG stroke progress, route-segment highlighting, and one moving signal marker communicate convergence and downstream handoff. AI is the route’s central processing state.

**Strengths:** Strongest explanation of convergence; visually distinctive; easier to simplify responsively; can feel infrastructural and precise.

**Risks:** Can become abstract or return to flowchart language if the composition relies too heavily on connectors and labels.

**Mobile:** Reinterpret the spine vertically, keeping Website and WhatsApp as paired entry points and maintaining a clear AI-to-outcome direction.

### Option C — Operating Timeline

**Composition:** A horizontally staged operational sequence begins with Website or WhatsApp, moves through AI, CRM and Calendar, and ends with Team.

**System story:** An enquiry becomes a series of meaningful business states until the next action is ready.

**Motion:** A coordinated event advances across the timeline; each state activates briefly as the operational story progresses.

**Strengths:** Fast comprehension; clear sequence; straightforward to explain in a paused screenshot and adapt into a vertical mobile treatment.

**Risks:** May feel like a process explainer, onboarding strip, or row of cards rather than a live operating system.

**Mobile:** Stack the timeline vertically, but guard against a long, card-heavy scene and loss of a strong central focal point.

## Recommended concept

Choose **Option A — Live System Board**, informed by Option B’s single routed spine.

The recommended direction combines:

- one dominant signal route;
- alternating Website and WhatsApp inputs;
- a central AI processing state;
- CRM and Calendar operational states;
- a final Team handoff;
- one repeating low-frequency coordinated cycle.

This provides the strongest balance of immediate comprehension, premium static hierarchy, live operational energy, and responsive adaptability. It should feel like one active system, not six equal cards, a flowchart, a node editor, a SaaS dashboard, or a decorative particle animation.

## Static visual architecture

Build one restrained operational surface with a clear hierarchy:

1. **Inbound channels:** compact Website and WhatsApp source treatments with equal status.
2. **AI hub:** the largest and most visually important processing element.
3. **Operational destinations:** quieter CRM and Calendar / Appointment modules.
4. **Human endpoint:** a distinct Team handoff / next-action state.
5. **Route backbone:** one readable path that makes the shared system apparent without requiring every label to be read.

Use a compact surface, thin border, dark navy base, restrained teal / signal-lime activity state, and simple connected-node language. Avoid glassmorphism, heavy shadows, large padding, strong glow, multiple nested cards, and a dashboard wall.

The paused state must already have strong typography, balanced composition, a recognizable signature structure, obvious inbound channels, a clear AI hub, operational destinations, and a human endpoint.

## Motion architecture

Motion is a core requirement, not a later cosmetic layer. Coordinate the scene as one system:

- choreographed initial entrance;
- one signal travelling along the route;
- route segment highlighting;
- AI idle → processing → structured state;
- compact inbound source activation;
- CRM updated state;
- Calendar ready / scheduled state;
- Team handoff received state;
- calm pause and controlled reset.

Use CSS transforms and opacity, lightweight SVG stroke progress, route state changes, and bounded React state/timers where needed. Do not animate every component independently. Avoid fast loops, flashing, high-frequency pulsing, loading-spinner behavior, giant scale pulses, spinning, neon glow, particle explosions, and AI-brain clichés.

## Website cycle

1. Website activates as the current inbound source.
2. A restrained illustrative enquiry/event state appears.
3. One signal travels from Website to the AI hub.
4. AI enters processing, then structured state.
5. The downstream route opens toward CRM and Calendar.
6. CRM becomes updated and Calendar becomes ready / scheduled.
7. Team receives the human handoff / next action.
8. The system settles briefly before the next cycle.

Any sample message must remain clearly illustrative and localized. Do not imply unsupported customer data.

## WhatsApp cycle

Use the same shared route and system hierarchy as the Website cycle:

1. WhatsApp activates as the current inbound source.
2. A compact message/event state appears.
3. The signal routes to the same AI core.
4. AI qualifies and structures the customer intent.
5. CRM and Calendar become active downstream states.
6. Team receives the final handoff / next action.
7. The scene pauses and can return to Website on the next cycle.

WhatsApp must feel like a genuine equal inbound channel, not an unsupported add-on. Do not use trademark assets or logos unless intentionally approved later; existing safe iconography and text treatment are sufficient.

## Initial-load choreography

Plan the first impression as one choreographed reveal rather than generic fade-up on every component:

- **0–300ms:** base Hero composition appears;
- **300–900ms:** typography and the main system structure resolve;
- **800–1400ms:** the system is fully ready and readable;
- **shortly after:** the first Website or WhatsApp operational event begins.

The entrance should make the Hero feel premium immediately while keeping the static system legible at every point.

## Continuous operational loop

After initial load, use one low-frequency cycle of approximately **5–8 seconds**, followed by a calm pause of approximately **1–2 seconds**. Alternate Website and WhatsApp across cycles.

Between main cycles, preserve extremely subtle ambient life such as one low-intensity active route segment, a quiet system indicator, retained processed state, or a small controlled signal presence. The entire scene must not constantly move.

The route story is: inbound source → AI processing → structured work → CRM / Calendar → Team handoff → calm reset. The loop should feel controlled, operational, and premium rather than distracting.

## Reduced-motion strategy

For `prefers-reduced-motion: reduce`:

- remove continuous signal travel;
- remove repeated operational cycles;
- remove repeated node activation, parallax, and pulse;
- keep the complete static hierarchy, both inbound channels, all labels, and clear active/inactive distinction;
- allow only a minimal opacity transition if necessary.

The reduced-motion state must remain a complete, premium Hero and must not hide the system story.

## Copy options

### Turkish headline directions

1. **Müşteri iletişimini işleyen sistemlere dönüştürüyoruz.**
2. **Dağınık mesajlardan, net işleyen bir sisteme.**
3. **İletişim girer. Sistem işinizi ileri taşır.**

### English headline directions

1. **We turn customer communication into working systems.**
2. **From scattered messages to a system that moves work forward.**
3. **Communication comes in. Your system moves the next step forward.**

### Turkish support-copy options

1. **Web sitesi ve WhatsApp’tan gelen talepleri yapay zekâ, CRM, randevu ve ekip süreçleriyle tek bir sistemde birleştiriyoruz.**
2. **Müşteri iletişimini farklı kanallardan alıp doğru bilgiye, doğru operasyona ve net bir sonraki adıma bağlıyoruz.**

### English support-copy options

1. **We connect enquiries from your website and WhatsApp to the AI, CRM, scheduling, and team workflows that move the next step forward.**
2. **Customer conversations can start anywhere; we connect them to the right information, operation, and next action.**

All options should remain understandable to a clinic or business owner, emphasize connected systems, less manual work, and clear next steps, and avoid excessive AI jargon or generic software-agency language.

## Recommended copy

- **TR headline:** Müşteri iletişimini işleyen sistemlere dönüştürüyoruz.
- **EN headline:** We turn customer communication into working systems.
- **TR support:** Web sitesi ve WhatsApp’tan gelen talepleri yapay zekâ, CRM, randevu ve ekip süreçleriyle tek bir sistemde birleştiriyoruz.
- **EN support:** We connect enquiries from your website and WhatsApp to the AI, CRM, scheduling, and team workflows that move the next step forward.

These recommendations communicate the broader connected-systems position without implying that Richt Ai supports only Website and WhatsApp.

## CTA / reassurance direction

Keep one primary native CTA:

- **TR:** `Projeyi konuşalım`
- **EN:** `Start a project`

The CTA must continue to invoke the App-owned ContactModal through `Hero({ onCTAClick })`. Do not add competing CTAs.

Present reassurance as a quiet confidence grouping rather than metadata. Preserve the meanings of first-call duration, no commitment, and direct founder contact. Do not add fake proof, unsupported metrics, or fabricated testimonials.

## Desktop composition

Use a premium asymmetrical composition, evaluating the final balance rather than freezing a ratio prematurely. As a starting point, copy may occupy approximately 45–48% and the live system approximately 52–55%.

At 1280, 1440, and 1536 widths:

- the system visual must feel substantial;
- the headline must not become a giant text wall;
- copy and live scene must have comparable authority;
- the image / scene must remain independent and clean;
- the first viewport should feel intentionally composed.

## Tablet direction

At approximately 768–1023px, use a deliberate intermediate layout rather than squeezing desktop. Prefer copy first and the simplified live system below it. Reduce scene complexity while keeping Website and WhatsApp visibly present, preserving meaningful motion, and maintaining clear CTA and reassurance hierarchy.

## Mobile direction

Mobile quality is mandatory. Plan a deliberate mobile Hero with:

- a strong headline without bad orphans;
- concise support copy;
- CTA visible early;
- compact reassurance;
- a simplified live system scene;
- Website and WhatsApp both clearly represented;
- fewer simultaneous states;
- simplified route motion;
- no tiny unreadable nodes;
- no cramped dashboard treatment;
- reduced scene height and no excessive battery / CPU use;
- no horizontal overflow.

The mobile scene may show fewer elements at once, but it must preserve the same conceptual cycle and equal inbound-channel story.

## Accessibility

Preserve one Hero `h1`, a native CTA, localized system description, semantic content order, visible focus, and reduced-motion support. Use semantic order:

**Website → WhatsApp → AI → CRM → Calendar → Team**

Treat visual nodes as non-interactive unless interaction is intentionally added. Decorative route graphics should be `aria-hidden` and not focusable. Do not add tab stops for decorative elements, mutate the route or hash, or create an uncontrolled live region that spams screen readers when the scene changes.

## Performance

Prefer CSS transforms, opacity, lightweight SVG stroke animation, and simple bounded React state / timers. Avoid WebGL, canvas rendering, Three.js, particle libraries, large animation libraries, expensive blur/filter animation, and excessive rerenders. If an existing motion library is already active in the repository, it may be evaluated later, but no dependency is added during this plan-only phase.

## Protected contracts

The later implementation must preserve:

- `Hero({ onCTAClick })`;
- App-owned ContactModal and its callback flow;
- `id="anasayfa"`;
- App render order and StatisticsStrip adjacency unless separately approved;
- Navbar behavior;
- language switching and TR/EN parity;
- native CTA behavior;
- no route/hash mutation;
- StatisticsStrip ownership until that section is redesigned later;
- Supabase/contact flow;
- metadata;
- Mermaid logo.

Hero V3 must not take ownership of ContactModal, Supabase, Navbar, footer, FAQ logic, metadata, unrelated sections, package ecosystem, analytics, case-study data, founder data, or proof claims.

## Risks and guardrails

| Risk | Guardrail |
| --- | --- |
| Scene becomes a dashboard | Use one route and hierarchy; avoid equal cards, metrics, tables, and dense status UI. |
| Scene becomes another flowchart | Make AI the focal hub and use one coherent operational surface, not a web of arrows. |
| Motion becomes gimmicky | Use one low-frequency cycle, restrained states, and a calm pause. |
| Website dominates WhatsApp | Alternate sources and give both equal semantic and visual status. |
| WhatsApp claim feels unsupported | Use a simple illustrative input treatment; avoid trademark assets, fake messages, and unsupported claims. |
| Copy becomes jargon-heavy | Write for business owners and describe the next step in plain language. |
| Motion hides weak static design | Review a paused screenshot as a first-class acceptance state. |
| Mobile becomes cramped | Simplify the scene and keep the route vertical, readable, and bounded. |
| Accessibility regresses | Preserve semantic order, one h1, native focus, decorative SVG hiding, and reduced-motion fallback. |
| Unsupported proof appears | Add no fake metrics, testimonials, customer messages, or performance claims. |
| Performance degrades | Prefer transform/opacity/SVG and bounded state; avoid WebGL, canvas, particles, and heavy blur. |

## Ordered implementation checklist

- [x] 1. Audit current Hero contracts and remove obsolete V2/V3 assumptions without changing protected ownership or unrelated sections.

### Checklist 1 implementation note — current contract audit

#### 1. Hero source contract

- Source: `src/components/Hero.tsx`.
- `HeroProps` contains exactly one external prop: `onCTAClick: () => void`.
- `useLanguage()` is the only Hook used by Hero; Hero reads the current localized `copy` object.
- The root is `<section id="anasayfa" className="hero-v2 v2-section-dark relative overflow-hidden">`.
- Heading structure is one `h1.hero-v2__heading` containing `copy.hero.headline`, a whitespace separator, and `copy.hero.headlineAccent` in two spans.
- Support copy is one paragraph, `.hero-v2__support`, rendering `copy.hero.subheadline`.
- CTA structure is one native `<button>` in `.hero-v2__actions`, calling the external `onCTAClick` prop and rendering `copy.hero.cta` plus an aria-hidden `ArrowRight` icon.
- Reassurance/meta structure is one `.hero-v2__meta` flex row containing duration, no-commitment, and direct-contact values with decorative separators and aria-hidden `ShieldCheck` / `UserRound` icons.
- The current system structure is a `<figure className="hero-system">` with a labelled stage, a screen-reader-only description, one decorative SVG connector path, and one semantic ordered list of six nodes: Website, Messages, AI, CRM, Calendar, Team.
- Lucide imports are `ArrowRight`, `ShieldCheck`, and `UserRound`.
- Hero has no local state, timers, effects, `requestAnimationFrame`, interval, timeout, route mutation, or hash behavior.
- Hero performs no navigation itself; the CTA delegates to App-owned modal state.

#### 2. App/modal ownership

- `src/App.tsx` owns `isContactOpen` with `useState(false)`.
- `openContact` is a memoized callback that sets the state to `true`; `closeContact` sets it to `false`.
- App passes `openContact` to both `<Navbar onCTAClick={openContact} />` and `<Hero onCTAClick={openContact} />`.
- The current render order is: Navbar; main → Hero → StatisticsStrip → Problem → Solution → HowItWorks → Trust → FAQ → FinalCTA; Footer; ContactModal.
- `StatisticsStrip` immediately follows Hero in `main`.
- `ContactModal` is rendered after Footer as `<ContactModal isOpen={isContactOpen} onClose={closeContact} />`; Hero does not own or import it.
- `useRevealObserver(language)` runs at App level and globally initializes reveal behavior for `[data-reveal]` elements. Current Hero markup has no `data-reveal`, so it is not directly reveal-controlled.

#### 3. Navbar / clearance contract

- `src/components/Navbar.tsx` renders a fixed header: `fixed top-0 left-0 right-0 z-40`.
- Its default/header-state shell uses `py-2` and a 4rem (`h-16`) inner height; the scrolled state uses `py-1` and `h-14`.
- Active CSS at desktop forces `.navbar-v2__inner` to `height: 4rem` and the Navbar to 0.5rem top/bottom padding, so the effective desktop header footprint is approximately 5rem.
- At mobile/tablet, the inner height follows the `h-16` / `h-14` state classes and the header remains fixed with the same top-of-page clearance responsibility.
- Hero currently provides that clearance with `.hero-v2` padding: 7rem top on mobile, 6rem from 640px, and 9rem from 1024px.
- Navbar owns the CTA callback, language toggle, mobile menu, smooth section scrolling, active-section IntersectionObserver, and scroll-state styling. Hero V3 must not alter those behaviors or the header contract.
- Navbar links currently target `sorun`, `cozum`, `nasil-calisir`, `guven`, and `sss`; no Hero link target is required beyond `id="anasayfa"` for the logo/top behavior.
- The Hero has no Navbar-specific class or selector dependency beyond its top padding and shared page layering.

#### 4. Current Hero CSS ownership

Hero styling is primarily global CSS in `src/index.css`, with Tailwind utilities for layout and focus classes in TSX. The active selector families are:

| Selector family | Classification | Current responsibility |
| --- | --- | --- |
| `.hero-v2`, `.hero-v2__layout`, `.hero-v2__copy`, `.hero-v2__heading`, `.hero-v2__support`, `.hero-v2__actions`, `.hero-v2__meta` | B — likely replaceable | Current Hero shell, copy layout, typography, spacing, CTA grouping, and metadata rhythm. Preserve behavior but free the visual architecture. |
| `.hero-v2__cta` and its hover/active/focus-visible states | A/B — behavior reusable, presentation replaceable | Native CTA treatment and focus contract; later styling may be refined without changing its callback. |
| `.hero-system`, `.hero-system__label`, `.hero-system__stage`, `.hero-system__node`, `.hero-system__node-label` | B — likely replaceable | Current static system-canvas surface and node presentation. |
| `.hero-system__connectors`, `.hero-system__connector`, `.hero-system__route`, `.hero-system__item*` | C — obsolete after Hero V3 | Phase 3.5 / current three-region flowchart geometry and connector layout; do not delete in this audit. |
| `.hero-system__node--ai*`, `.hero-system__node--team*` | B/C — replaceable state styling | Current AI and Team emphasis; conceptual roles remain, but the visual state architecture should be rebuilt. |
| `@media (min-width: 640px)`, `@media (min-width: 1024px)`, and `@media (max-width: 639px)` Hero rules | B — likely replaceable | Current tablet/desktop split and mobile stacked fallback. |
| `.reveal`, `.motion-ready .reveal*`, and `@media (prefers-reduced-motion: reduce)` | D — shared / must not remove | App-wide reveal and reduced-motion infrastructure. Hero V3 should use or extend it carefully rather than break it. |

Current Hero CSS has no Hero-specific keyframes or continuous animation. The unrelated `success-pop` keyframe and `.workflow-*` CSS belong elsewhere and are not Hero V3 ownership.

#### 5. Current i18n values

Hero values in `src/lib/i18n.tsx` are:

| Field | TR | EN |
| --- | --- | --- |
| `headline` | `İşletmenizi ileri taşıyan` | `Systems that keep your business` |
| `headlineAccent` | `sistemler kuruyoruz.` | `moving.` |
| `subheadline` | `Yapay zekâ, otomasyon ve dijital deneyimleri ayrı araçlar değil, birlikte çalışan bir sistem olarak tasarlıyoruz.` | `AI, automation and digital experiences designed to work together — not as separate tools.` |
| `cta` | `Projeyi konuşalım` | `Start a project` |
| `duration` | `İlk görüşme yaklaşık 30 dakika sürer.` | `The first call takes around 30 minutes.` |
| `noCommitment` | `Herhangi bir taahhüt yok` | `No commitment required` |
| `direct` | `Doğrudan Emre Kocaaliler ile iletişim` | `Speak directly with Emre Kocaaliler` |
| `systemCanvas.label` | `Bağlı sistem` | `Connected system` |
| `systemCanvas.aria` | `Web sitesi, mesajlar, yapay zekâ, CRM, takvim ve ekibi birbirine bağlayan iş sistemi.` | `Connected business system linking website, messages, AI, CRM, calendar and team.` |
| `systemCanvas.nodes.website` | `Web sitesi` | `Website` |
| `systemCanvas.nodes.messages` | `Mesajlar` | `Messages` |
| `systemCanvas.nodes.ai` | `Yapay zekâ` | `AI` |
| `systemCanvas.nodes.crm` | `CRM` | `CRM` |
| `systemCanvas.nodes.calendar` | `Takvim` | `Calendar` |
| `systemCanvas.nodes.team` | `Ekip` | `Team` |

The current Hero does not consume any `workflow.*` field. `AIWorkflow.tsx` consumes those fields, but `AIWorkflow` is not rendered by `App.tsx` and is not part of the active homepage.

#### 6. Current system architecture

The active Hero system is a six-node ordered list inside a CSS grid: Website and Messages enter on the left, AI occupies the central region, and CRM, Calendar, and Team occupy downstream positions on the right. A single SVG path visually connects the regions. The architecture is static; there is no Hero-local state or cycle.

`AIWorkflow.tsx` is a separate existing component with its own staged interval, but it is not imported or rendered by App and must not be silently substituted into Hero V3.

#### 7. Website / WhatsApp gap

- Website exists as the current inbound concept (`systemCanvas.nodes.website` / `Web sitesi` / `Website`).
- WhatsApp does not exist in the current Hero system canvas.
- The current second inbound node is generic `Messages` / `Mesajlar`, not an explicit WhatsApp channel.
- AI is currently a central labelled node, but it has no processing state.
- CRM and Calendar are downstream labelled nodes with no active operational state.
- Team is the final labelled node with no handoff state.

Later Hero V3 must replace the old Website + Messages mental model with equal Website + WhatsApp inbound sources feeding one AI core, then CRM / Calendar, then Team. This is a visual and i18n concept change only for later checklists; it is not implemented here.

#### 8. Motion infrastructure

- `framer-motion` / Motion is not installed. `package.json` contains no animation library beyond the existing React/CSS stack.
- `lucide-react` is installed and already used by Hero and other components.
- Hero itself has no timers, effects, keyframes, interval, timeout, `requestAnimationFrame`, or continuous animation.
- App-level `useRevealObserver` uses `IntersectionObserver` and one `requestAnimationFrame` for reveal containment, but current Hero has no `[data-reveal]` target.
- `AIWorkflow.tsx` uses a 2800ms `setInterval` and `data-stage`, but is not active homepage infrastructure.
- Existing CSS contains the shared `.reveal` transition system, the `success-pop` keyframe for unrelated UI, and global reduced-motion rules that disable reveal transforms and shorten transitions.
- Existing SVG connector styling is static; there is no current SVG stroke animation pattern.
- Conclusion: later Hero V3 motion can begin with CSS transforms/opacity, lightweight SVG state/stroke techniques, and bounded React state/timers without adding a dependency. The existing shared reduced-motion and reveal infrastructure must remain intact.

#### 9. WhatsApp icon / branding

- `lucide-react` is available.
- Generic safe message/chat iconography exists through Lucide, including `MessageCircle`, already used by the separate `AIWorkflow` and `Footer`.
- No WhatsApp-specific logo asset was found in `public` or `src`.
- Later Hero V3 should avoid a trademark/logo dependency by using localized Website / WhatsApp text and safe generic iconography unless a branded asset is explicitly approved.

#### 10. Current responsive contract

| Range | Current behavior | Fragile points to preserve or improve later |
| --- | --- | --- |
| `>= 1280px` | Two-column Hero grid (`1.02fr / 0.98fr`), left-aligned copy, large heading, canvas on right; 9rem top / 5rem bottom padding. | Static canvas geometry and large minimum height can dominate; top clearance is coupled to Hero padding. |
| `1024–1279px` | Same two-column desktop grid and left-aligned copy, with the same Hero CSS breakpoint and fluid gap. | Narrow desktop can pressure headline, support copy, and six-node canvas simultaneously. |
| `768–1023px` | Single-column grid inherited from base rules; centered copy first, canvas below; `min-width: 640px` typography and spacing apply. | No dedicated intermediate composition; desktop canvas density carries into tablet. |
| `640–767px` | Single-column centered copy and canvas; 3rem heading, larger support spacing, compact grid canvas. | Same tablet fallback rather than a deliberately art-directed intermediate state. |
| `< 640px` | Single-column centered copy; 2.25rem heading; CTA can be full width; meta wraps; connectors hidden; six nodes become a vertical flex stack; stage minimum height is 18rem. | Small nodes, repeated labels, and the current flowchart order can feel cramped; mobile is a fallback rather than a simplified live scene. |

The current canvas is contained by `overflow: hidden` on the Hero section and stage, but its grid geometry depends on fixed named areas and min-height clamps. Hero V3 must preserve no-overflow behavior while replacing the fragile architecture deliberately. The current headline, CTA, canvas, and meta are single instances with no duplication.

#### 11. Accessibility baseline

- Exactly one Hero `h1` exists.
- CTA is a native button with visible localized text, an aria-hidden ArrowRight icon, and a dedicated `:focus-visible` outline in `.hero-v2__cta`.
- The system is a semantic `<figure>` with `aria-labelledby` pointing to its `<figcaption>` and `aria-describedby` pointing to a localized `sr-only` description.
- The connector SVG is decorative with `aria-hidden="true"` and `focusable="false"`.
- System nodes are non-interactive list content in an ordered `<ol>` with semantic order Website → Messages → AI → CRM → Calendar → Team.
- Node markers and decorative icons are aria-hidden; no visual node is a tab stop.
- No Hero live region is present, so there is no current screen-reader spam from changing Hero content.
- Global reduced-motion CSS disables reveal transforms and reduces transition duration; Hero has no continuous motion to suppress today.
- Later weakness to improve: the semantic inbound node must become equal Website + WhatsApp; the live state story and its accessible static fallback must be explicit; the figure description must be updated with the new route; and the Hero must remain understandable without relying on motion.

#### 12. Obsolete assumptions released in the plan

Hero V3 is no longer constrained by these visual assumptions:

- current node-map geometry;
- current three-region / static canvas shape;
- current system-node dimensions and named-area placement;
- current Phase 3.5 flowchart architecture;
- the old Website-only / generic-Messages inbound mental model;
- the assumption that motion is optional or can be bolted on later;
- the assumption that mobile can be handled only as a late desktop fallback.

This release applies to the visual architecture only. Functional ownership, App callbacks, section identity, language behavior, accessibility baseline, and page order remain frozen.

#### 13. Frozen Hero V3 contracts

- Preserve `Hero({ onCTAClick })` as the external Hero interface.
- Preserve App-owned ContactModal state and callback ownership.
- Preserve `id="anasayfa"`.
- Preserve one native CTA that invokes the existing callback.
- Do not introduce route or hash mutation from Hero.
- Preserve `useLanguage()` and TR/EN parity.
- Leave Navbar implementation and behavior untouched.
- Preserve StatisticsStrip immediately after Hero and the current App render order.
- Leave Supabase and contact submission flow untouched.
- Leave metadata untouched.
- Leave Mermaid logo and assets untouched by default.
- Preserve the current accessibility baseline: one h1, native focusable CTA, semantic order, decorative SVG hiding, non-interactive visual nodes, and reduced-motion support.
- Introduce no fake proof, metrics, testimonials, or unsupported customer evidence.
- Add no new dependency by default.

#### Later implementation boundary recommendation

The likely later Hero V3 implementation scope is:

- `src/components/Hero.tsx` — structure, semantic nodes, and bounded live-state behavior;
- `src/index.css` — Hero visual system, responsive layout, route states, motion, and reduced-motion rules;
- `src/lib/i18n.tsx` — Hero copy and Website / WhatsApp system labels in both languages;
- `implementation_update.md` — checklist notes and verification records.

No App, Navbar, ContactModal, StatisticsStrip, unrelated section, metadata, asset, package, or configuration changes are justified by Checklist 1.
- [x] 2. Finalize bilingual Hero V3 copy, including the recommended TR/EN headline and support copy.
- [x] 3. Build the Hero V3 static layout shell with desktop, tablet, and mobile structural contracts.
- [x] 4. Build the multi-channel Website + WhatsApp inbound architecture with semantic order and equal status.
- [x] 5. Build the central AI / CRM / Calendar / Team live system scene and one coherent route backbone.
- [x] 6. Establish the static premium visual hierarchy, surface framing, AI focal treatment, Team handoff, CTA relationship, and reassurance grouping.
- [x] 7. Implement the choreographed initial-load entrance without generic component-by-component fade-up.
- [x] 8. Implement the repeating Website / WhatsApp operational motion loop with one low-frequency coordinated cycle.
- [ ] 9. Refine CTA, trust, and reassurance without changing callback behavior or introducing proof claims.
- [ ] 10. Adapt the Hero deliberately for tablet and mobile while preserving both channels and readable reduced scenes.
- [ ] 11. Complete accessibility, reduced-motion, performance, and browser-containment refinement.
- [ ] 12. Complete full bilingual visual QA, typecheck, lint, build, protected-contract verification, and final handoff.

### Checklist 2 implementation note — bilingual Hero V3 copy

- Final TR headline: `Müşteri iletişimini işleyen sistemlere dönüştürüyoruz.`
- Final EN headline: `We turn customer communication into working systems.`
- Final TR support: `Web sitesi ve WhatsApp’tan gelen talepleri yapay zekâ, CRM, randevu ve ekip süreçleriyle tek bir sistemde birleştiriyoruz.`
- Final EN support: `We connect enquiries from your website and WhatsApp to the AI, CRM, scheduling, and team workflows that move the next step forward.`
- CTA remains `Projeyi konuşalım` / `Start a project`.
- Headline field decision: Hero-only `headlineAccent` was removed from the TR/EN `hero` objects and Hero now renders one localized `headline` string. Other translation groups retain their own `headlineAccent` fields, so no unrelated consumers were changed and TR/EN Hero object shapes remain identical.
- Added the localized `hero.eyebrow` field: `Bağlı dijital sistemler` / `Connected digital systems`.
- Replaced the generic `systemCanvas.nodes.messages` shape with `systemCanvas.nodes.whatsapp` and updated both localized descriptions to the Website + WhatsApp → AI → CRM / scheduling → team story.
- `duration`, `noCommitment`, and `direct` wording was preserved.
- `workflow.*` and every unrelated translation group were left untouched.

### Checklist 3 implementation note — Hero V3 static shell

- Replaced the active `.hero-v2` / `.hero-system` markup with a new `.hero-v3` / `.hero-live-system` class architecture.
- Hero structure is now: `section#anasayfa` → `.v2-container` → `.hero-v3__layout` → copy column and labelled live-system figure.
- Copy classes are `.hero-v3__copy`, `.hero-v3__eyebrow`, `.hero-v3__heading`, `.hero-v3__support`, `.hero-v3__actions`, `.hero-v3__meta`, and `.hero-v3__cta`.
- System-shell classes are `.hero-live-system`, `__surface`, `__header`, `__body`, and structural `__region` variants for inbound, core, operations, and handoff.
- The static surface uses Carbon / Graphite, thin borders, restrained internal rails, a central core zone, downstream operation rows, and a small handoff marker. It is visually structured but does not yet render final Website / WhatsApp node content.
- Desktop composition uses an intentional approximately 47% copy / 53% system split from 1024px upward, with deliberate top alignment and preserved Navbar clearance.
- Tablet uses a single-column copy-first shell from 768px, with the system below and reduced height; mobile uses a compact single-column shell below 768px with no fixed grid and no horizontal overflow-prone node map.
- Headline uses one natural localized string, balanced wrapping, Space Grotesk / display styling, Bone White, and no gradient or manual line break. Support uses Inter / secondary styling with a controlled measure.
- Removed active Phase 3.5 geometry: named node grid areas, static connector SVG path, six-node `hero-system` list, and old `hero-v2` Hero selectors. Shared reveal, reduced-motion, and unrelated workflow CSS remain untouched.
- Accessibility preserved: one h1, native CTA callback, figure `aria-labelledby` / `aria-describedby`, localized screen-reader description, decorative shell body hidden from assistive technology, no placeholder interaction, and no extra tab stops.
- No motion was added: no keyframes, timers, effects, requestAnimationFrame, intervals, state cycling, SVG animation, pulsing, sweeping, or route travel.
- Responsive source and layout contracts were checked for 1024×900, 1280×900, 1440×900, 1536×900, 768–1023px tablet, and below-768px mobile ranges. The Codex in-app browser confirmed the new localized eyebrow, single headline, support copy, CTA, and labelled system figure in the running page.
- Verification: `pnpm typecheck` PASS; `pnpm lint` PASS. Full build remains assigned to Checklist 12.

### Checklist 4 implementation note — multi-channel inbound architecture

- Replaced the decorative shell rails with one semantic ordered list containing Website → WhatsApp → AI → CRM → Calendar → Team.
- Website uses the localized `copy.hero.systemCanvas.nodes.website` label and a safe Lucide `Globe2` icon.
- WhatsApp uses the localized `copy.hero.systemCanvas.nodes.whatsapp` label and a generic Lucide `MessageCircle` icon; no WhatsApp brand asset or fake interface was added.
- Website and WhatsApp share the same inbound module treatment, visual weight, and route entry logic. Neither is visually demoted.
- Both inbound modules converge into the same central AI module through one static SVG route structure.
- Nodes are non-interactive list content: no buttons, tab stops, tooltips, or live regions were introduced. The route SVG and icons are decorative and aria-hidden.
- Desktop uses paired inbound modules feeding the central route; tablet keeps the complete scene below the copy; mobile switches to a readable stacked list with no three-column squeeze or horizontal overflow.

### Checklist 5 implementation note — central live-system scene

- AI is the dominant central module, using the localized AI label and a restrained Lucide `Sparkles` mark with Signal Lime emphasis. It is framed as infrastructure rather than a glowing orb or AI-brain illustration.
- CRM uses the localized CRM label with a quiet Lucide `Database` icon and sits downstream from AI.
- Calendar uses the localized Calendar label with a quiet Lucide `CalendarDays` icon and sits beside CRM as a downstream operational destination.
- Team uses the localized Team label with a Lucide `Users` icon, a distinct terminal treatment, and Electric Cyan / Bone White emphasis to signal the final human handoff.
- One static SVG route backbone visibly converges Website and WhatsApp into AI, splits to CRM and Calendar, and resolves at Team. It has no stroke animation or moving signal.
- The system surface now uses its available area with real modules, a clear central focal point, restrained borders, and one macro route gesture. It is no longer a placeholder rail layout, generic dashboard, or editor-like flowchart.
- Desktop retains the approximately 47% copy / 53% system balance and aligns the scene with the copy block. Tablet preserves all six concepts below the copy. Mobile uses a simple vertical module stack with readable labels and reduced density.
- Requested QA ranges were reviewed at 1024×900, 1280×900, 1440×900, 1536×900, 768×1000, and 375×900 through the responsive source contract; the refreshed Codex in-app browser confirmed all six localized TR modules and the semantic order in the running page. No label-collapse or horizontal-overflow condition was introduced by the mobile fallback.
- No motion was added. Checklist 7 and Checklist 8 remain the first owners of animation.
- Verification: `pnpm typecheck` PASS; `pnpm lint` PASS. Full build remains assigned to Checklist 12.

### Checklist 7 implementation note — initial-load choreography

- Added one Hero-local `isReady` state and one controlled initialization effect. The effect owns entrance timing, reduced-motion detection, listener cleanup, and timer cleanup; no App or global state was introduced.
- Entrance sequence: the Hero copy intro resolves as one group, the support/CTA/reassurance details resolve as a second group, then the system surface, route structure, and modules settle into place.
- Total entrance timing remains under approximately 1.4 seconds: an 80ms initialization delay, grouped 620ms transitions, and a 900ms pause before the first operational cycle.
- Motion uses only opacity and restrained translate transforms. No word-by-word text animation, spring, bounce, scale-from-zero, blur reveal, or generic per-component fade-up was added.
- With `prefers-reduced-motion: reduce`, the Hero is immediately ready in a complete static state and the operational cycle does not start.

### Checklist 8 implementation note — Website / WhatsApp operational motion loop

- Added the bounded Hero-local phase model: `idle` → `incoming` → `processing` → `operations` → `handoff` → `settle`.
- Added the bounded active-source model: `website` / `whatsapp`. The source alternates after each completed cycle and does not touch App state, URL, or hash.
- Website cycle: Website module activates, its route segment travels toward AI, AI processes, CRM and Calendar activate downstream, Team receives the handoff, and the system settles.
- WhatsApp cycle: the same sequence runs with the WhatsApp module and its route segment, giving both inbound channels identical importance over alternating cycles.
- Route strategy: the static SVG backbone is split into semantic Website, WhatsApp, CRM, Calendar, and Team segments. Only the current phase’s relevant segment receives the restrained dashed signal animation.
- AI processing state: the central core receives a controlled Signal Lime border/background emphasis and processor-mark emphasis without glow, scale, spin, bounce, flash, or particles.
- CRM / Calendar state: both downstream modules activate together during the operations phase through border, edge, icon, and route emphasis; no fake status copy was added.
- Team handoff state: the final Team endpoint and Team route segment receive restrained Electric Cyan emphasis before the scene settles.
- Settle/reset behavior: after handoff the scene enters a 1700ms calm pause, then alternates the active source and begins the next bounded cycle. No separate ambient loop was added.
- Cycle timing: approximately 850ms incoming, 1350ms processing, 1200ms operations, 950ms handoff, and 1700ms settle, for an approximately 6-second cycle before the next source begins.
- Timer safety: one effect owns the ready timer and current phase timer; timers are cleared on restart, reduced-motion changes, and unmount. The media-query listener is removed during cleanup.
- Reduced-motion behavior: the cycle is not started, route animation is disabled, grouped entrance transitions are removed, and Website, WhatsApp, AI, CRM, Calendar, Team, and the route remain visible in a complete static state.
- Tested widths: the responsive motion/state contract was reviewed at 1280×900, 1440×900, 1536×900, 1024×900, 768×1000, and 375×900; the refreshed local Codex browser confirmed the complete semantic Hero structure and no motion-related DOM duplication or layout change.
- Motion-quality conclusion: the Hero now has a coordinated first impression and a readable operational story from inbound source through AI, operations, and Team handoff. Motion is bounded, source-alternating, static-safe, and ready for later CTA/reassurance refinement.
- Verification: `pnpm typecheck` PASS; `pnpm lint` PASS. Full build remains assigned to Checklist 12.

### Checklist 6 implementation note — static premium art direction

- **Static hierarchy:** Inbound Website and WhatsApp modules are now compact, paired, and secondary; AI is the dominant architectural core; CRM and Calendar are quieter operational outputs; Team is a distinct final endpoint.
- **Inbound treatment:** Channel modules use open-edge, lightly bordered treatments instead of six equivalent cards. Their icons and labels remain localized and visually equal.
- **AI focal treatment:** Removed the generic Sparkles icon. AI now uses a restrained architectural processor mark, a larger Carbon core frame, a Signal Lime edge, and an internal crosshair/detail structure without glow, gradient, orb, or brain-cliché styling.
- **Operations treatment:** CRM and Calendar use utility-like open modules with shared alignment, low visual weight, and localized Lucide icons rather than full competing cards.
- **Team endpoint:** Team now uses an open terminal treatment with a cyan edge, endpoint marker, and Users icon so it reads as a human handoff rather than another software module.
- **Route backbone:** Replaced the multiple equal-looking connector segments with one stronger static SVG backbone containing inbound convergence, the AI intersection, downstream branching, and a final handoff resolution. It remains aria-hidden and completely static.
- **Surface framing:** Removed the inset nested frame. The surface now relies on one controlled outer field, a restrained system identifier, internal alignment, and the route/module silhouette instead of dashboard chrome.
- **CTA relationship:** Preserved the native CTA, callback, copy, focus-visible treatment, and Signal Lime. The CTA now reads as the human action counterpart to the AI system accent without glow or lift changes.
- **Reassurance grouping:** Converted the metadata row into one semantic list with quieter CSS separators and grouped duration, no commitment, and direct contact as a single confidence block without rewriting copy or adding proof.
- **Desktop composition:** Retained the approximately 47% copy / 53% system split with deliberate top alignment. The scene has more visual mass through hierarchy and route silhouette, not extra panels.
- **Responsive safety:** Preserved the stable 1024px desktop split, readable 768px stacked layout, and 375px vertical fallback with no connector collapse or horizontal-overflow-prone grid.
- **Accessibility:** Preserved one h1, native CTA, figure label/description, ordered semantic nodes, hidden decorative icons and route SVG, non-interactive modules, and no live regions or extra tab stops.
- **No motion:** No effects, timers, intervals, requestAnimationFrame, keyframes, route travel, pulsing, or entrance choreography were added. Checklist 7 remains the motion boundary.
- **Tested widths:** Reviewed the responsive contract at 1024×900, 1280×900, 1440×900, 1536×900, 768×1000, and 375×900; refreshed local browser structure confirmed the paused Hero remains semantically complete in TR. No source-level clipping or horizontal-overflow condition was introduced.
- **Paused-screenshot conclusion:** The Hero now reads as one embedded operating system with a clear silhouette and hierarchy rather than six equal cards with connector lines. It is ready for later animation without relying on motion to establish meaning.
- Verification: `pnpm typecheck` PASS; `pnpm lint` PASS. Full build remains assigned to Checklist 12.

## Exit criteria

Hero V3 is complete only when:

- the Hero feels premium in a static screenshot;
- it visibly feels alive shortly after load;
- Website and WhatsApp are both represented as inbound communication channels;
- both channels clearly feed one connected system;
- AI is the processing core;
- CRM and Calendar are operational destinations;
- Team is the human handoff;
- motion tells a clear operational story;
- the system cycles calmly rather than constantly flashing;
- the scene does not feel like a generic dashboard or a flowchart;
- the scene is readable at desktop, tablet, and mobile;
- TR and EN both feel art-directed;
- reduced motion provides a complete premium static fallback;
- no fake metrics or proof are introduced;
- performance remains smooth;
- the CTA still opens the App-owned ContactModal;
- accessibility remains intact;
- typecheck, lint, and build pass;
- the result is strong enough to become the design standard for the rest of the Richt Ai homepage.

## Motion quality gate

Before later implementation can be approved, all answers below must be **YES**:

1. Does the Hero look alive within the first second or shortly after?
2. Does the system visibly communicate that work is moving?
3. Can the user understand that Website and WhatsApp feed the same system?
4. Is AI clearly the processing core?
5. Does the route tell a readable story?
6. Do CRM / Calendar / Team states feel meaningful?
7. Does motion strengthen the business message?
8. Is the motion premium rather than gimmicky?
9. Is the visual strong when paused?
10. Is reduced motion still complete?
11. Does mobile remain readable?
12. Does the result feel substantially more premium than the current Hero?

If any answer is NO, Hero V3 is not complete.

## Handoff

Checklists 1–8 are complete and the next implementation run starts with Checklist 9. Work must advance one checklist at a time. Expected future implementation scope remains limited to `src/components/Hero.tsx`, `src/index.css`, `src/lib/i18n.tsx`, and this plan file unless a later approved checklist explicitly expands it. Do not edit App, Navbar, other sections, ContactModal, metadata, assets, or configuration without separate approval.
