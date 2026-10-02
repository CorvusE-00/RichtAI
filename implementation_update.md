# Hero polish + full-site copy refinement

## Objective

Refine the new Hero and perform a site-wide bilingual copy audit so the entire site feels:

- more professional
- easier for customers to understand
- less repetitive
- more premium
- more consistent in Turkish and English
- more clearly written from the buyer’s perspective

This phase is not a redesign of the entire site structure. It is a refinement pass focused on Hero polish and full-site copy clarity and professionalism.

## Core priorities

### Priority 1 — Hero polish

The new Hero direction is approved, but the following details need refinement:

- prevent the compact operational proof row beneath “Automation active” from wrapping awkwardly
- give the Hero image a slightly taller and stronger vertical presence
- make the Hero image feel more realistic, premium, and polished
- preserve a strong desktop and mobile Hero

### Priority 2 — Full-site copy audit

Review all important customer-facing copy in both languages. The goal is not to add text, but to make the existing text simpler, clearer, less repetitive, more convincing, more customer-friendly, and more professional.

## Hero polish requirements

### Operational proof row

The flow beneath “Automation active” must remain controlled and readable:

`New enquiry → Request summary → System actions → Appointment created`

Requirements:

- avoid awkward wrapping to a second line
- preserve readability and compactness
- keep it elegant on desktop
- adapt appropriately on smaller widths
- avoid cramped unreadable text, broken arrows, overflow, or sloppy line breaks

Acceptable approaches include improved spacing, responsive font sizing, responsive wrapping, a mobile-specific stacked treatment, or a narrow-screen layout adjustment.

### Hero image quality

Refine the approved Hero image direction with:

- slightly taller vertical presence
- more premium and realistic lighting/materials
- a polished, credible business-operations atmosphere
- clear alignment with AI automation and modern business operations

Avoid sci-fi clichés, robots, holograms, glowing neural networks, cheesy corporate stock, fake metrics, and noisy nonsense UI.

### Mobile Hero quality

Preserve the intentional mobile ordering, strong hierarchy, collision-free layout, sensible crop, and readable proof strip. Desktop polish must not reduce mobile quality.

## Full-site copy audit requirements

Review major site copy in both Turkish and English. Every line should be customer-first, direct, simple, premium, clear on first read, natural, free of unnecessary repetition, and free of vague AI clichés or filler.

The tone should feel like a founder-led specialist studio that is operationally capable, calm, credible, and easy to understand—not generic AI/SaaS filler, overcomplicated jargon, literal translation, or buzzword-heavy marketing.

### Turkish copy

Review Turkish carefully for unnatural or weak phrasing. It should feel natural, elegant, simple, trustworthy, client-friendly, and not stiff or overly literal. Avoid awkward uses of words such as `sakin` when the context does not support them.

### English copy

Make English polished and native. Avoid repetition, clunky phrasing, generic startup filler, and overlapping ideas.

## Sections to audit

Review and refine copy in both languages for:

- Hero
- StatisticsStrip labels, only if needed
- Problem / Challenges
- Solution
- How it works
- Trust
- Founder
- FAQ
- Final CTA
- Footer microcopy, if applicable
- supporting labels, proof labels, and small user-facing UI text

Do not change navigation labels unless there is a strong clarity reason. Do not change the brand name or CTA behavior.

### Section goals

#### Hero

- keep the approved direction
- ensure headline and subheadline do not feel repetitive
- make reassurance natural in both languages
- make operational proof labels read cleanly

#### Problem / Challenges

- make pain statements clearer and more customer-readable
- remove awkward phrasing
- keep the section diagnostic rather than overly dramatic

#### Solution

- make each capability easy to understand quickly
- keep the three capabilities clearly distinct
- reduce jargon
- make explanatory lines immediately understandable to a potential client

#### How it works

- make the steps extremely clear and calm
- avoid vague or over-descriptive phrasing
- make the process feel simple and trustworthy

#### Trust

- make the founder-led and single-point-of-contact message clear
- keep it professional and reassuring
- remove awkward or repetitive wording

#### FAQ

- make questions sound like real buyer questions
- make answers simple, direct, helpful, and non-repetitive

#### Final CTA

- make the closing message clear and easy to act on
- avoid repeating the Hero wording unnecessarily

## Editorial direction

Copy changes must feel like a consistent editorial refinement pass, not random rewrites. The site should become easier to scan, easier to trust, and easier to understand without becoming wordy.

## Locked areas

Do not introduce:

- new sections
- chatbot work
- dental screenshot changes
- major layout redesign outside Hero polish
- new dependencies
- SEO or metadata rewrites unless absolutely required by copy changes
- fake proof claims
- invented results or metrics

## Expected implementation scope

Likely files for the later implementation:

- `src/components/Hero.tsx`
- `src/components/Problem.tsx`
- `src/components/Solution.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Trust.tsx`
- `src/components/FAQ.tsx`
- `src/components/FinalCTA.tsx`
- `src/components/Footer.tsx`, if needed
- `src/lib/i18n.tsx`
- `src/index.css`
- `public/images/ai-operations-hero.png` or an updated equivalent
- `implementation_update.md`

Only the listed scope should be changed during implementation.

## Checklist 1 — Hero polish

- [x] Refine the Hero operational proof row so it does not wrap awkwardly.
- [x] Refine the Hero visual height and presence.
- [x] Improve the Hero image realism and quality direction.
- [x] Protect mobile Hero quality.

## Checklist 2 — Hero copy micro-audit

- [x] Audit Hero microcopy in Turkish and English.
- [x] Remove repetition.
- [x] Improve clarity and professionalism.
- [x] Keep CTA text unchanged.

## Checklist 3 — Problem / Challenges copy audit

- [x] Refine headings, body copy, and supporting lines.
- [x] Improve customer clarity.
- [x] Remove awkward phrasing.

## Checklist 4 — Solution copy audit

- [x] Refine all three capabilities.
- [x] Reduce repetition.
- [x] Make the differences between capabilities clearer.
- [x] Improve supporting labels and microcopy.

## Checklist 5 — How it works + Trust copy audit

- [x] Simplify process wording.
- [x] Refine trust and founder language.
- [x] Keep the tone calm and credible.

## Checklist 6 — FAQ + Final CTA + footer microcopy

- [x] Make FAQs more natural and easier to understand.
- [x] Make the closing CTA clearer and less repetitive.
- [x] Refine remaining small user-facing text.

## Checklist 7 — Bilingual consistency pass

- [x] Ensure Turkish and English feel equally polished.
- [x] Ensure ideas match without awkward literal translation.
- [x] Remove weak or strange wording in both languages.

## Checklist 8 — Verification

- [x] Review all visible copy in Turkish and English.
- [x] Verify no major repeated phrases remain.
- [x] Verify the Hero proof row works responsively.
- [x] Verify the Hero image remains strong.
- [x] Verify mobile and desktop both work.
- [x] Run `pnpm typecheck`.
- [x] Run `pnpm lint`.
- [x] Run `pnpm build`.
