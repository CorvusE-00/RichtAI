# Hero connected-systems placement refinement

## OBJECTIVE

Refine ONLY the placement and presentation of the Hero connected-systems element.

The current concept is approved:
- Web sitesi / Website
- WhatsApp
- CRM
- Takvim / Calendar

The problem is placement.

On desktop, the connected-systems panel currently overlaps / visually merges with the Hero image and feels awkward.

The Hero image should remain visually clean and independent.

The connected-systems element should move BELOW the image as a separate supporting rail.

## DESKTOP DIRECTION

At desktop widths:

Structure should be:

1. Hero image
2. clear spacing
3. connected-systems rail

Do NOT overlap the rail with the image.

Do NOT place it inside the image frame.

Do NOT use negative margins.

The image should read as one clean visual block.

The system rail should read as a separate supporting element.

## SPACING

Target:
- approximately 12–16px gap between image and systems rail

The rail may:
- match the image width
OR
- be slightly narrower, approximately 85–95% of the image width

Choose whichever looks more balanced.

Prefer centered alignment under the image.

## VISUAL STYLE

Keep the systems rail restrained.

Use:
- one compact surface
- thin border
- dark navy background
- subtle teal activity signal
- simple connected nodes

Avoid:
- strong shadow
- floating-card look
- heavy glow
- large padding
- multiple nested cards

## CONTENT

Keep the same connected systems concept.

Turkish:
- Web sitesi
- WhatsApp
- CRM
- Takvim

English:
- Website
- WhatsApp
- CRM
- Calendar

Do not turn this into a process explanation.

Do not add more text.

## ANIMATION

Keep the existing subtle connected-system animation direction if present.

The signal may travel between nodes or highlight them sequentially.

Animation must remain:
- subtle
- slow
- premium
- non-distracting

Respect `prefers-reduced-motion`.

## MOBILE

The current mobile treatment is generally approved.

Do not redesign mobile.

Only ensure:
- image and systems rail remain cleanly separated
- no overlap
- no horizontal overflow
- spacing feels intentional

Mobile may use the same stacked relationship:
image → gap → systems rail

## LOCKED AREAS

Do NOT change:
- Hero headline
- Hero subheadline
- Hero image
- Hero CTA
- reassurance copy
- Navbar
- StatisticsStrip
- Problem
- Solution
- How It Works
- Trust
- FAQ
- Final CTA
- Footer

This task is ONLY about the connected-systems rail placement and spacing.

## EXPECTED FILE SCOPE FOR LATER IMPLEMENTATION

Likely:
- `src/components/Hero.tsx`
- `src/index.css`
- `implementation_update.md`

No new dependency.
No copy changes.

## IMPLEMENTATION CHECKLIST

### Checklist 1 — Desktop placement

- [x] remove connected-systems overlap with image
- [x] place rail below image
- [x] add clear spacing
- [x] keep image clean and dominant

### Checklist 2 — Rail sizing

- [x] evaluate full-width vs slightly narrower rail
- [x] center under image
- [x] maintain compact height

### Checklist 3 — Visual refinement

- [x] keep one restrained surface
- [x] preserve connected-node design
- [x] avoid floating-card heaviness

### Checklist 4 — Responsive behavior

- [x] verify desktop
- [x] verify 375px mobile
- [x] verify 320px mobile
- [x] no overlap
- [x] no overflow

### Checklist 5 — Verification

- [x] Hero image remains visually clean
- [x] rail reads as supporting information
- [x] no unrelated Hero changes
- [x] typecheck
- [x] lint
- [x] build

## CRITICAL WORKFLOW RULE

DO NOT IMPLEMENT ANY CHECKLIST ITEM IN THIS TURN.

Only rewrite `implementation_update.md`.

The document must:
- contain only this latest plan
- contain no old history
- contain no completed checklist items
- contain no implementation record
- use unchecked checklist items only
- be self-contained

After writing the file, STOP.
