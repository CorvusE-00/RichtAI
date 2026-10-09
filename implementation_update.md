# Richt Ai V2 — Phase 1: Design Foundation

## Plan status

Plan only. No Phase 1 implementation has started.

This file is the single source of truth for Phase 1. Previous Phase 0 audit history and checklists are intentionally not carried forward.

## Phase 1 objective

Establish the additive Richt Ai V2 “Bold Systems” foundation without visually changing the current V1 homepage.

Phase 1 is infrastructure only. It introduces semantic V2 tokens, dark/light surface contracts, a minimal primitive layer, layout/spacing roles, typography roles, radius/border roles, and focus/state roles.

It must not redesign any existing section.

Primary success criterion:

> The current V1 page remains visually unchanged.

## Approved V2 palette

The following values are approved for the Phase 1 plan:

| Role | Value |
|---|---|
| Carbon Black | `#080A0D` |
| Graphite | `#10141A` |
| Elevated Graphite | `#171C23` |
| Bone White | `#F4F2EB` |
| Signal Lime | `#C7FF4A` |
| Electric Cyan | `#50DFFF` |
| Steel | `#89939E` |
| Muted | `#626B75` |

Do not replace these values unless a concrete implementation constraint is discovered and explicitly reviewed.

## Token architecture

Use **CSS variables plus optional Tailwind semantic aliases**.

- CSS variables are the semantic source of truth.
- Existing V1 Tailwind tokens remain unchanged.
- Tailwind aliases are optional and may be added only if Checklist 5 proves real ergonomic value for Phase 2+.
- All V2 variables, classes, and aliases must use a clear `v2` namespace.
- No legacy token may be remapped, renamed, or globally aliased.

## V1/V2 coexistence contract

- V1 continues using `navy`, `teal`, `cyan`, `snow`, body defaults, `.section-tone-*`, `.section-surface-*`, `.btn-primary`, and all current component selectors.
- V2 is opt-in only through explicitly named variables/classes.
- There is no body-wide V2 switch and no global palette replacement.
- Existing markup, copy, IDs, assets, metadata, dependencies, and behavior remain unchanged.
- A compatibility token is a temporary, explicitly named bridge for an unchanged V1 consumer and a new V2 primitive; it must not redefine a legacy token.
- Legacy classes are removed only after all consumers disappear and replacement output passes regression checks.

## Allowed implementation files

### `src/index.css`

Primary implementation file. It may receive an isolated V2 variable block and minimal namespaced primitives/contracts. Existing selectors and output must remain unchanged.

### `tailwind.config.js`

Optional only. Keep untouched unless Checklist 5 proves semantic aliases are necessary. If changed, additions must be namespaced, reference CSS variables, preserve every legacy token/font/animation/content glob, and add no plugins.

No other source/config/asset file is part of the Phase 1 implementation scope.

## Locked files and areas

Phase 1 must not touch:

- `src/App.tsx` or any file in `src/components/`
- `src/lib/i18n.tsx`
- `src/lib/siteMetadata.ts`
- `src/lib/supabase.ts`
- `src/hooks/useRevealObserver.ts`
- `public/*` or any asset
- `package.json`, `package-lock.json`, `pnpm-lock.yaml`, or `node_modules`
- `vite.config.ts`
- `postcss.config.js`
- `tsconfig*.json`
- `eslint.config.js`
- build scripts or metadata files
- App section order, copy, section IDs, navigation, motion, responsive breakpoints, or runtime behavior

## No visual redesign rule

Phase 1 must not make the current homepage “look more V2.” Do not recolor existing sections, change current spacing/radius/typography output, restyle buttons/glows/shadows, change Hero/Navbar/Footer/ContactModal, or apply new primitives to rendered V1 sections.

The new foundation may exist unused until Phase 2.

## Ordered Phase 1 implementation checklist

### 1. Add semantic V2 CSS variables

- [x] Add an isolated, namespaced variable layer in `src/index.css`.

Plan the minimum groups only:

- Surfaces: Carbon, Graphite, Elevated Graphite, Bone White.
- Text: on-dark primary/secondary and on-light primary/secondary.
- Accents: Signal Lime and Electric Cyan.
- Borders: dark, light, and active/accent.
- Interaction: focus, hover, pressed, disabled.
- Shape: surface radius, control radius, small UI radius.
- Layout: page gutter, content max width, section spacing, component spacing.
- Typography: display, heading, body, label, system/mono families.

Use the approved palette values. Do not change existing V1 variables, Tailwind colors, body defaults, or rendered output.

Implementation note: `src/index.css` now contains the isolated `--v2-` variable block covering surfaces, text, accents, borders, interaction, shape, layout, and font-family roles. The collision search found no prior `--v2-*` variables or proposed names, and no V1 selector consumes the new variables. `tailwind.config.js` and all other files remained untouched.

### 2. Add dark/light surface contracts

- [x] Add opt-in `.v2-section-dark` and `.v2-section-light` contracts.

`.v2-section-dark` should establish Carbon/Graphite surfaces, Bone White primary text, Steel secondary text, dark borders, Signal Lime primary accents, and Electric Cyan system/focus accents.

`.v2-section-light` should establish Bone White, Carbon primary text, Muted secondary text, light borders, Signal Lime primary accents, and Electric Cyan system/focus accents.

Light descendants must explicitly define their text, icon, border, focus, hover, pressed, disabled, and selection roles instead of inheriting V1 `snow`/`navy` assumptions.

Implementation note: added `.v2-section-dark` and `.v2-section-light` with scoped `--v2-current-*` semantic aliases. Neither class has a current source consumer, existing V1 selectors remain unchanged, and `tailwind.config.js` remains untouched.

### 3. Add typography, shape, and layout roles

- [x] Add opt-in semantic roles without changing current typography or containers.

Plan:

- Keep Space Grotesk for display/heading roles.
- Keep Inter for body/interface roles.
- Use a system monospace stack for system/technical labels; add no font asset.
- Encode approximately 16px surface radius, 8px control radius, and 6px small UI radius.
- Encode approximately 20px mobile, 32px tablet, and 64–80px desktop page gutters.
- Encode approximately 1280px content max width, 96px large section spacing, and 32px component spacing.

These roles remain opt-in. Do not migrate V1 containers, global headings, body font, or section spacing.

Implementation note: added `.v2-type-display`, `.v2-type-heading`, `.v2-type-body`, `.v2-type-label`, `.v2-type-system`, `.v2-radius-surface`, `.v2-radius-control`, and `.v2-radius-ui`. No layout classes were added; layout tokens remain available until `.v2-container` is introduced in Checklist 4. No current source consumer uses these roles, V1 output remains unaffected, and `tailwind.config.js` remains untouched.

### 4. Add the minimum V2 primitives

- [x] Add only the five Phase 1 primitives below, with strict `v2` namespacing.

| Primitive | Responsibility | Must not style | Future consumers |
|---|---|---|---|
| `.v2-section-dark` | Opt-in dark surface/text/border boundary | Existing section tones or body defaults | V2 dark sections |
| `.v2-section-light` | Opt-in Bone White surface/text/border boundary | Existing light/dark section output | V2 editorial sections |
| `.v2-container` | Opt-in max-width and responsive gutter | Existing containers or App layout | Future V2 sections |
| `.v2-label` | Opt-in label/eyebrow typography role | `.section-label` or global text | Section labels after migration |
| `.v2-focus-ring` | Opt-in accessible focus contract | Existing focus styles on V1 controls | Future V2 controls |

Do not create button primitives, cards, workflow nodes, capability shells, Hero helpers, Navbar helpers, or other abstractions before real component usage proves the need.

Implementation note: added `.v2-container` with responsive semantic gutters and the existing max-width token, `.v2-label` with minimal editorial/system label styling, and `.v2-focus-ring` with a visible `:focus-visible` outline. The existing surface primitives were preserved, no current consumer exists, V1 output remains unaffected, and `tailwind.config.js` remains untouched.

### 5. Evaluate Tailwind semantic aliases

- [x] Review whether Phase 1 actually needs Tailwind aliases before editing `tailwind.config.js`.

Default decision: no Tailwind config change. CSS variables and scoped CSS primitives are preferred unless a real Phase 2+ usage demonstrates that aliases materially improve ergonomics.

If aliases are justified, confirm that they are additive, namespaced, backed by CSS variables, and do not alter legacy colors, fonts, animations, content globs, or plugins. Record the decision before implementation.

Implementation note: decision **B — TAILWIND ALIASES NOT NEEDED YET**. Surfaces, text, accents, borders, radii, spacing, and fonts are each covered by the existing CSS variables and opt-in `.v2-*` classes; no category passes the minimum-necessity threshold now. Phase 2 Navbar can proceed with those primitives, component-local Tailwind utilities, and small scoped CSS if needed. `tailwind.config.js` remains untouched. Revisit aliases only when multiple upcoming V2 components repeat raw `var(--v2-...)` values or require the same semantic utility and the CSS primitive layer would otherwise be duplicated.

### 6. Add only approved Tailwind aliases, if required

- [ ] Add only the aliases explicitly approved by Checklist 5, or record that `tailwind.config.js` remains untouched.

If no aliases are needed, this checklist item is satisfied by documenting the no-change decision. If aliases are added, keep them semantic and minimal; do not introduce a new plugin or duplicate the full token system in Tailwind config.

### 7. Run build/type/lint verification

- [ ] Run the actual project verification commands after the token/primitive implementation.

Commands:

```text
pnpm typecheck
pnpm lint
pnpm build
```

Stop and report any Phase 1-caused failure. Do not fix unrelated issues without review.

### 8. Perform manual V1 visual regression verification

- [ ] Verify the unchanged V1 page manually in Turkish and English.

Inspect at 320px, 375px, 768px, 1024px, and 1280px+:

- Navbar, Hero, FAQ, ContactModal, and Footer;
- language switching, section anchors, FAQ accordion, and modal open/close;
- keyboard focus and reduced-motion behavior;
- metadata updates and no horizontal overflow;
- unchanged colors, spacing, typography, buttons, glows, shadows, image treatment, and section order.

Primary criterion: current V1 output remains visually stable.

### 9. Complete Phase 1 cleanup/readiness review

- [ ] Confirm Phase 1 exit criteria and readiness for Phase 2 Navbar.

Review:

- all V2 tokens/classes are additive and namespaced;
- only intended files changed;
- no V1 visual or behavior regression exists;
- no package, asset, copy, metadata, component, dependency, or build-config changes occurred;
- no unnecessary abstraction was introduced;
- `tailwind.config.js` stayed untouched unless Checklist 5 explicitly approved aliases;
- Phase 2 Navbar can begin safely.

## Implementation discipline

- Implement exactly one checklist item per run.
- Stop after each item.
- Update `implementation_update.md` after each completed item.
- Mark only the completed item `[x]`.
- Do not auto-start the next item.
- Show changed files after each run.
- Run only verification relevant to the completed item.
- Wait for explicit user approval before continuing.

## Phase 1 exit criteria

Phase 1 is complete only when:

- the semantic token layer exists;
- dark/light surface contracts exist;
- the five minimum primitives exist;
- V1 output remains unchanged;
- `pnpm typecheck`, `pnpm lint`, and `pnpm build` pass;
- manual TR/EN regression checks pass at all required widths;
- no forbidden files changed;
- no copy, asset, metadata, dependency, or App-order change occurred;
- no unnecessary abstraction was added;
- the project is ready for Phase 2 Navbar implementation.

## Phase 1 checklist

- [x] Add semantic V2 CSS variables
- [x] Add dark/light surface contracts
- [x] Add typography, shape, and layout semantic roles
- [x] Add minimum `.v2-*` primitive classes
- [x] Evaluate whether Tailwind semantic aliases are needed
- [ ] Add only justified Tailwind aliases if required
- [ ] Run build/type/lint verification
- [ ] Perform manual V1 visual regression verification
- [ ] Complete Phase 1 cleanup/readiness review
