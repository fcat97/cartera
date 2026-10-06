---
name: Cartera
description: A clean financial notebook for everyday money.
colors:
  paper: '#ffffff'
  ink: '#173c2d'
  green: '#285b43'
  quiet: '#4e635b'
  line: '#dce6e0'
  mint: '#f0fcf8'
  section-soft: '#f6f5f3'
  lilac: '#e5f3ec'
  green-hover: '#12382c'
  focus: '#7856a3'
  field-border: '#bdc8b9'
  field-error: '#a42726'
  field-error-bg: '#fff8f5'
  card-border: '#dcebe3'
  sample-bg: '#f6faf7'
  inverse-green: '#244c3b'
  inverse-hover: '#e0e8c7'
typography:
  display:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: clamp(46px, 5.1vw, 72px)
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -.035em
  headline:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: clamp(32px, 3.5vw, 48px)
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -.035em
  title:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -.65px
  body:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.8
  hero-body:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 12px
    fontWeight: 500
  button:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
  navigation:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 14px
    fontWeight: 400
rounded:
  button: 9px
  field: 7px
  card: 12px
  panel: 8px
  shared-card: 14px
  chip: 5px
  carousel-control: 50%
spacing:
  '8': 8px
  '14': 14px
  '17': 17px
  '20': 20px
  '24': 24px
  '30': 30px
  '60': 60px
  '75': 75px
  '100': 100px
components:
  button-primary:
    backgroundColor: '{colors.green}'
    textColor: '{colors.paper}'
    typography: '{typography.button}'
    rounded: '{rounded.button}'
    padding: 17px 21px
    height: 54px
  button-primary-hover:
    backgroundColor: '{colors.green-hover}'
  button-compact:
    backgroundColor: '{colors.green}'
    textColor: '{colors.paper}'
    rounded: '{rounded.button}'
    padding: 12px 16px
    height: 46px
  button-inverse:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.inverse-green}'
    typography: '{typography.button}'
    rounded: '{rounded.button}'
    padding: 17px 21px
    height: 54px
  button-inverse-hover:
    backgroundColor: '{colors.inverse-hover}'
  text-link:
    textColor: '{colors.green}'
    height: 44px
  input:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.field}'
    padding: 13px 14px
    height: 46px
  input-invalid:
    backgroundColor: '{colors.field-error-bg}'
    textColor: '{colors.ink}'
  planning-card:
    backgroundColor: '{colors.paper}'
    rounded: '{rounded.card}'
    padding: 30px 24px 24px
  shared-card:
    backgroundColor: '{colors.green}'
    textColor: '{colors.paper}'
    rounded: '{rounded.shared-card}'
    padding: 31px 26px 23px
  sample-panel:
    backgroundColor: '{colors.sample-bg}'
    rounded: '{rounded.panel}'
    padding: 19px 17px
  entry-chip:
    textColor: '{colors.green}'
    rounded: '{rounded.chip}'
    padding: 9px 12px
  carousel-control:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.green}'
    rounded: '{rounded.carousel-control}'
    size: 44px
  navigation:
    backgroundColor: '{colors.mint}'
    typography: '{typography.navigation}'
---

# Design System: Cartera

## Overview

**Creative North Star: "The financial notebook"**

Cartera uses the financial notebook as its visual reference: clear text, pale section bands, softly rounded surfaces, and recognizable pages for different parts of life. The owner’s Monefy-inspired direction appears as pale mint, white, warm gray, and dark green with a readable sans-serif throughout.

The website presents an Android product through its actual app icon and owner-supplied app screenshots. Notebook and planning illustrations explain the recordkeeping mechanism; their sample records are identified as illustrative. Product descriptions use direct, declarative language, while download and support controls use clear action wording.

**Key Characteristics:**

- Pale mint, white, and warm-gray section bands with dark green accents.
- Self-hosted Plus Jakarta Sans for both headings and reading text.
- Actual app screenshots alongside softly layered notebook illustrations.
- Comfortable spacing, visible focus, and motion that respects reduced-motion preferences.

## Colors

The palette combines pale green and neutral section surfaces with dark green content and actions. The frontmatter records the current source values; it is normative. Color names follow the existing custom properties where available.

### Primary

- **Green** (`green`): primary Google Play and contact actions, icon strokes, progress fills, shared-finance cards, and the final download surface.
- **Ink** (`ink`): headings, the brand name, field labels, and field content.
- **Green hover** (`green-hover`): the darker primary-action hover state.
- **Inverse green** (`inverse-green`): text on the white download action inside the green final section; `inverse-hover` is its pale hover surface.

### Neutral

- **Paper** (`paper`): the page background, cards, fields, and white surfaces.
- **Mint** (`mint`): the header, hero, planning, assistant, and contact section bands.
- **Warm gray** (`section-soft`): notebook and shared-finance bands, plus the data panel.
- **Soft green** (`lilac`): the existing legacy-named custom property resolves to pale green. Its name does not establish a purple visual direction.
- **Quiet** (`quiet`): supporting copy, captions, notes, and secondary text.
- **Line** (`line`), **card border** (`card-border`), and **field border** (`field-border`): subdued separators and control outlines.
- **Sample background** (`sample-bg`): inset illustrative planning surfaces.

The violet `focus` color is an accessibility state. `field-error` and `field-error-bg` identify invalid support fields. They do not introduce new marketing accents. Tailwind’s inherited HSL semantic variables remain in the source for the existing UI library; the custom-property palette above describes the finished landing page.

## Typography

**Display Font:** Plus Jakarta Sans, with sans-serif fallback.

**Body Font:** Plus Jakarta Sans, with sans-serif fallback.

The variable font is self-hosted at `/fonts/plus-jakarta-sans-latin.woff2`, covers weights 400–800, uses `font-display: swap`, and is preloaded by the root layout. Headings use strong weight and restrained negative tracking; body text uses regular weight and open leading.

### Hierarchy

- **Display:** the `display` frontmatter role records the desktop hero. On mobile up to 650px it becomes `clamp(40px, 10.4vw, 58px)` with 1.14 leading; below 374px it is 38px. Intermediate widths have explicit overrides in the stylesheet.
- **Headline:** the `headline` role describes ordinary section headings. Mobile headings use `clamp(32px, 8vw, 42px)` with slightly looser tracking (`-.03em`). Several sections use explicit local sizes.
- **Title:** the `title` role records desktop planning-card titles. Shared-card titles use 27px; tool titles use 17px. Card-specific responsive sizes remain local.
- **Body:** the `body` role describes recurring product copy. Observed leading ranges from 1.7 to 1.9. The hero uses the `hero-body` role with a 480px maximum line width, changing to 16px on smaller screens and a 430px maximum width on mobile.
- **Label:** the `label` role records form labels. Navigation and buttons have their own frontmatter roles. Input text uses 14px on desktop and 16px on mobile.

Small captions and sample-record labels belong to illustrations and secondary notes. They are not a reusable reading-text scale.

**The Readable Sans Rule.** Use Plus Jakarta Sans for display and reading text; retain the clean sans-serif direction confirmed for Cartera.

## Layout

The standard centered shell is capped at 1200px with 40px side gutters. At widths of at least 1440px the cap becomes 1240px with a 140px total viewport inset. Up to 900px the shell uses 24px side gutters; up to 650px it uses 20px; below 374px it uses 16px. Non-home content has its own 24px desktop and 16px mobile gutters.

Full-width section bands wrap the constrained content. Desktop feature stories use two columns; planning, shared-finance, and data sections use three columns. The hero uses `1.1fr 1fr`; notebook uses `1.15fr 1fr`; FAQ and contact use `.9fr 1.2fr`. These relationships collapse to one column up to 650px. On mobile the notebook explanation precedes its illustration.

Recurring section padding is 100px vertically, decreasing to 75px up to 900px and 60px up to 650px. Local hero, contact, data, footer, and final-download spacing remains explicit. Grid gaps and component padding use the observed values recorded in frontmatter, with component-specific adaptations rather than an invented uniform scale.

The sticky header is 90px tall on desktop, 78px up to 900px, and 73px on mobile. Desktop navigation gives way to a disclosure menu at 900px. Anchor scrolling leaves room for the header (100px desktop, 90px mobile).

## Elevation & Depth

Most content uses tonal layering and fine borders. Planning cards and shared cards sit flat; the phone frame, overlapping notebook pages, and mobile navigation use diffuse shadows to communicate their physical or temporary layer. Slight page rotations belong to the notebook illustration rather than every content card.

### Shadow Vocabulary

- **Phone frame:** `0 18px 25px -18px #15362966, 0 2px 3px #15362955`.
- **Hero notebook:** `0 5px 8px #4951441a`.
- **Notebook page:** `0 8px 18px #33443116`.
- **Mobile navigation:** `0 12px 30px #16352824`.

**The Quiet Depth Rule.** Use tonal surfaces and fine borders for ordinary content; reserve the observed diffuse shadows for the phone, notebook pages, and mobile navigation.

## Shapes

Surfaces have gentle curves: fields and the notebook spine use 7px corners; inset sample panels use 8px; download actions use 9px; planning cards and illustrative pages use 12px; shared cards and assistant notes use 14px. The data surface uses 15px and final download panel 17px. Carousel controls are circles, with small round slide markers.

The phone has a distinct device silhouette (33px outer corners and 24px image/viewport corners on desktop), reducing at narrower widths. Notebook illustrations use overlapping pages, light borders, and restrained rotations. The hero underline has an irregular curved shape and stays attached to the highlighted phrase.

## Components

### Buttons

Download and support actions are compact, clear, and strongly contrasted. The primary variant uses green with white text, a matching 1px border, the `button` type role, and the padding and radius in frontmatter. Its recorded height is a minimum height. The compact header variant uses 14px text and a 46px minimum height. On mobile the header action uses a 42px minimum height; the hero action uses 51px.

Hover darkens the primary background and moves the action up 2px over 200ms. The arrow moves 2px right and up on hover or keyboard focus. Active feedback returns to baseline with a .98 scale. The final green section uses the inverse white button variant. Underlined text links maintain a 44px minimum height and move their arrow 3px right on hover.

All keyboard-focusable controls retain the global violet outline (3px, 5px offset, 3px radius). Reduced-motion styling removes action and icon transforms and shortens transitions to .01ms.

### Chips

Entry-option chips are descriptive labels, not filters. They use pale green (`#edf2e8`), a thin green-gray border (`#ccd7c7`), 11px text, a 7px icon gap, and the observed chip padding and radius. No selected or interactive state is established.

### Cards / Containers

Planning cards use paper, a fine card border, no shadow, and an inset sample panel. Shared cards use green with white headings, pale green body text (`#e1eee7`), and a ruled examples row. Their descriptions and examples occupy separate blocks, with the example row aligned toward the bottom. Their source padding and radii are recorded in frontmatter.

### Inputs / Fields

Support fields are white with a field border, green ink, visible labels, and 46px minimum height for single-line inputs. Textareas resize vertically. Focus changes the border to green while retaining the global focus outline; invalid fields use the recorded error border and pale error background. Border and background transition over 180ms. Mobile entry text is 16px. Feedback is announced through the live status region, and invalid submission focuses the relevant field.

### Navigation

The pale mint sticky header carries the actual app icon, strong Cartera wordmark, plain text links, compact download action, and mobile menu. Desktop links reveal a fine underline over 180ms on hover and keyboard focus. Mobile links sit in a white bordered, softly shadowed disclosure panel; hovering adds a pale green background. Escape closes the menu and restores focus to its trigger; outside interaction and link selection close it.

### FAQ

Native disclosure rows are separated by fine lines. A summary has a 69px desktop minimum height and 65px mobile minimum height, with a green plus/minus affordance. Answer text uses regular reading sizes and generous leading. Opening an answer uses a 220ms reveal only when reduced motion is not requested.

### Notebook illustrations and screenshot carousel

Retain the real app screenshots inside the phone and the clearly labeled example notebook pages alongside product explanations. The carousel has previous/next, play/pause, count, slide-selection buttons, swipe, and arrow-key controls. Its round navigation buttons are 44px; slide-selection buttons are 24px by 32px with small round markers. The selected marker widens horizontally.

The carousel advances every 5000ms only while visible, unpaused, unfocused, unhovered, and the document is visible. Manual navigation or dragging pauses it. Reduced motion stops autoplay, disables the play control, and makes manual changes immediate. Captions announce manual changes politely; automatic changes are not announced.

One-time illustration motion uses `cubic-bezier(0.16, 1, 0.3, 1)`: phone/notebook entry 700ms, page entry 620ms with 60ms staggering, progress fills 750ms, and the underline 650ms. Page hover motion lasts 300ms and requires a fine pointer, hover support, and no reduced-motion preference. Content is visible before JavaScript runs; hidden documents and preference changes cancel active illustration animations.

## Do's and Don'ts

### Do:

- **Do** use the existing mint, paper, and warm-gray surfaces with dark green text and actions.
- **Do** keep headings and body copy in the self-hosted Plus Jakarta Sans family.
- **Do** retain the actual Cartera icon, real app screenshots, and understandable notebook mechanism.
- **Do** label sample financial records as illustrations and keep product descriptions declarative.
- **Do** preserve visible keyboard focus, labeled controls, responsive stacking, and reduced-motion behavior.

### Don't:

- **Don't** reintroduce the superseded ivory-and-serif visual direction.
- **Don't** use illustration microtext as the size for product descriptions or form entry.
- **Don't** replace genuine app captures with fabricated interfaces presented as screenshots.
- **Don't** make animation necessary to reveal content or remove the carousel’s manual controls.
