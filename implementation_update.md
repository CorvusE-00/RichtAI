# Richt Ai — Hero V3: Live Operating System

## Project status

This is the active, plan-only Hero V3 direction. The current Hero is being replaced conceptually with a premium live operating-system scene. No source code, CSS, i18n source, assets, dependencies, or rendered components are changed in this planning phase.

All implementation checklist items below begin unchecked. Later implementation must preserve the approved functional contracts and proceed in the listed order.

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

- [ ] 1. Audit current Hero contracts and remove obsolete V2/V3 assumptions without changing protected ownership or unrelated sections.
- [ ] 2. Finalize bilingual Hero V3 copy, including the recommended TR/EN headline and support copy.
- [ ] 3. Build the Hero V3 static layout shell with desktop, tablet, and mobile structural contracts.
- [ ] 4. Build the multi-channel Website + WhatsApp inbound architecture with semantic order and equal status.
- [ ] 5. Build the central AI / CRM / Calendar / Team live system scene and one coherent route backbone.
- [ ] 6. Establish the static premium visual hierarchy, surface framing, AI focal treatment, Team handoff, CTA relationship, and reassurance grouping.
- [ ] 7. Implement the choreographed initial-load entrance without generic component-by-component fade-up.
- [ ] 8. Implement the repeating Website / WhatsApp operational motion loop with one low-frequency coordinated cycle.
- [ ] 9. Refine CTA, trust, and reassurance without changing callback behavior or introducing proof claims.
- [ ] 10. Adapt the Hero deliberately for tablet and mobile while preserving both channels and readable reduced scenes.
- [ ] 11. Complete accessibility, reduced-motion, performance, and browser-containment refinement.
- [ ] 12. Complete full bilingual visual QA, typecheck, lint, build, protected-contract verification, and final handoff.

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

This document is plan-only. The next implementation run starts with Checklist 1 and must advance one checklist at a time. Expected future implementation scope is limited to `src/components/Hero.tsx`, `src/index.css`, and this plan file unless a later approved checklist explicitly expands it. Do not edit i18n, App, Navbar, other sections, or configuration without separate approval.
