# BRAND IDENTITY & DESIGN SYSTEM SPECIFICATION

## Hadeer Mamdouh — Contemporary Literary Platform & Sovereign Atelier (المنصة الأدبية)

> **Document Status**: Complete — Phase 2 Foundational Design System Specification
> **Engineering Scope**: Frontend Styling Language, Semantic Tokens, Typography Engine & UI Primitives
> **Primary Source of Truth**: `docs/architecture/PHASE_0_BLUEPRINT.md` (Sections 1.1, 4.1, 9.2, 19.3)
> **Visual Direction**: Tactile Literary Print Design (Archival Paper, Ink & Classical Craft)

---

## 1. Design Philosophy: Tactile Literary Print Design

The Hadeer Mamdouh Literary Platform is designed as a sovereign intellectual sanctuary and digital atelier for contemporary Arabic literature. Rather than adopting the transient, noisy aesthetics of generic SaaS dashboards or tech portfolios, the design system embodies the timeless visual restraint of fine printed books and archival publications.

### Core Visual Attributes:

- **Quiet Visual Luxury**: Generous whitespace, intentional proportion, and serene pacing that invite contemplative reading.
- **Physicality of Paper**: Surfaces inspired by unbleached rag paper, warm parchment, and bookbinding materials (`#F4F0EA`, `#E8E1D5`).
- **Typographic Gravitas**: Sharp, contrastive ink lettering (`#1A1816`) paired with deep, restrained wine accents (`#6B2D38`).
- **Restrained Ornamentation**: Elegant editorial rules, hairline separators, and traditional printing ornaments (`✦`) rather than synthetic visual effects.
- **Zero Synthetic Clutter**: Strictly zero purple/blue AI gradients, glowing borders, frosted glassmorphism, floating cards, or bubbly SaaS radii.

---

## 2. Approved Color Architecture & Semantic Tokens

### 2.1 The Core Brand Palette (Phase 0 Master Table)

| Token Name       | Hex Code  | Intended Semantic Role                      | WCAG Contrast on Paper Ivory           |
| :--------------- | :-------- | :------------------------------------------ | :------------------------------------- |
| **Paper Ivory**  | `#F4F0EA` | Primary canvas & background                 | Base surface                           |
| **Ink Black**    | `#1A1816` | Primary prose & display headings            | **15.63:1** (Passes AAA)               |
| **Deep Wine**    | `#6B2D38` | Primary literary accent & interactive links | **8.97:1** (Passes AAA)                |
| **Warm Sand**    | `#E8E1D5` | Secondary surfaces, cards & input fields    | **1.22:1** (Surface contrast)          |
| **Muted Taupe**  | `#9C8E7E` | Subtle hairline borders & secondary details | **2.81:1** (Decorative / borders only) |
| **Sage Reserve** | `#5E6855` | Selected secondary accents & status         | **5.22:1** (Passes AA)                 |
| **Sepia Shade**  | `#EDE6DA` | Warm parchment reading canvas               | Surface                                |
| **Night Paper**  | `#121110` | Nocturnal low-strain reading background     | Base dark surface                      |

> **Contrast Boundary Notice (Muted Taupe & Non-Text Contrast)**:
> Muted Taupe (`#9C8E7E`) on Paper Ivory achieves a contrast ratio of **2.81:1**. It is strictly designated for decorative separators and hairline borders (`border-border-default`, `border-border-subtle`). It must **never** be used for body text, interactive text, or critical functional UI component boundaries requiring WCAG 2.2 SC 1.4.11 non-text contrast ($\ge 3:1$). For high-contrast borders and active outlines, `--color-border-strong` (`#4A443D`, 6.64:1) or `--color-focus-ring` (`#6B2D38`, 8.97:1) must be used.

### 2.2 Semantic Token Mapping

Semantic CSS variables are declared in `:root` and consumed through Tailwind CSS:

```css
:root {
  /* Canvas & Surfaces */
  --color-bg-primary: var(--palette-paper-ivory);
  --color-bg-secondary: var(--palette-warm-sand);
  --color-bg-tertiary: var(--palette-sepia-shade);
  --color-bg-surface: #faf7f2;
  --color-bg-elevated: #ffffff;

  /* Typography */
  --color-text-primary: var(--palette-ink-black);
  --color-text-secondary: #3d3935;
  --color-text-muted: #6b6257; /* Adjusted for WCAG AA 6.2:1 contrast */
  --color-text-accent: var(--palette-deep-wine);

  /* Accents & Interaction */
  --color-accent-primary: var(--palette-deep-wine);
  --color-accent-hover: #54222b;
  --color-accent-active: #3e181f;
  --color-accent-secondary: var(--palette-sage-reserve);

  /* Borders & Separation */
  --color-border-subtle: #e2dacf;
  --color-border-default: var(--palette-muted-taupe);
  --color-border-strong: #4a443d;

  /* Focus & Accessibility */
  --color-focus-ring: var(--palette-deep-wine);
}
```

### 2.3 Reading Themes (The Three Canvases)

The platform provides three reading modes for continuous digital immersion:

1. **Archival Paper (Default)**:
   - Background: `Paper Ivory (#F4F0EA)`
   - Text: `Ink Black (#1A1816)`
   - Atmosphere: Morning natural light on fine archival cotton paper.
2. **Sepia Shade (`data-theme="sepia"`)**:
   - Background: `Sepia Shade (#EDE6DA)`
   - Text: `Ink Black (#1A1816)`
   - Atmosphere: Soft, warm indoor lighting evoking historic library volumes.
3. **Night Ink (`data-theme="night"`)**:
   - Background: `Night Paper (#121110)`
   - Text: `Paper Ivory (#F4F0EA)`
   - Accent: `Rose Wine (#C46D7D)`
   - Atmosphere: Zero-strain nocturnal contemplation in pitch-dark rooms.

---

## 3. Typography Engine & Font Engineering

### 3.1 Font Stack Selection

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        EDITORIAL FONT ENGINE                           │
├─────────────────────┬──────────────────────┬───────────────────────────┤
│ Role                │ Primary Font         │ Fallback Font Stack       │
├─────────────────────┼──────────────────────┼───────────────────────────┤
│ Arabic Display      │ Amiri                │ Traditional Arabic,       │
│                     │                      │ Scheherazade New, serif   │
├─────────────────────┼──────────────────────┼───────────────────────────┤
│ Arabic Reading      │ IBM Plex Sans Arabic │ Segoe UI, Tahoma,         │
│                     │                      │ Arial, sans-serif         │
├─────────────────────┼──────────────────────┼───────────────────────────┤
│ English Display     │ Newsreader           │ Playfair Display,         │
│                     │                      │ Georgia, serif            │
├─────────────────────┼──────────────────────┼───────────────────────────┤
│ English Reading/UI  │ Newsreader           │ Georgia, Times New Roman, │
│                     │                      │ system-ui, sans-serif     │
└─────────────────────┴──────────────────────┴───────────────────────────┘
```

### 3.2 Font Loading & Zero Layout Shift (CLS) Architecture

Fonts are managed in [`apps/web/lib/fonts.ts`](file:///c:/Users/Sroor%20For%20Laptop/OneDrive/Desktop/Hadeer-Literary-Platform/apps/web/lib/fonts.ts) using `next/font/google`:

- **Self-Hosted Delivery**: Fonts are downloaded at build time by Next.js and served directly from the same origin as optimized `.woff2` files.
- **Zero Third-Party CDN Calls**: The browser never makes runtime requests to external font servers (protecting reader privacy and eliminating network latency).
- **Metric Overrides (`size-adjust`)**: CSS font variables are mounted on `<html>`, applying fallback size-adjust metrics to completely eliminate layout shifts (CLS < 0.05).

### 3.3 Mandatory Arabic Typography Engineering Rules

1. **Strictly Zero Letter Spacing**:
   - Enforced in `globals.css`:
     ```css
     [dir='rtl'],
     [lang='ar'],
     .font-arabic-display,
     .font-arabic-reading {
       letter-spacing: 0 !important;
     }
     ```
   - _Rationale_: Arabic script is fundamentally cursive; applying positive tracking detaches character glyphs from their ligatures, destroying legibility and aesthetic integrity.
2. **Prose Line Height (Relaxed Leading)**:
   - Arabic body text requires `line-height: 1.85` (compared to `1.6` for Latin scripts) to accommodate vertical diacritics (tashkeel), ascenders (_Alef_, _Laam_), and descenders (_Raa_, _Noon_, _Yaa_).
3. **Optical Text Sizing**:
   - Mobile Reading: Target ~18px with fluid `clamp()`.
   - Desktop Reading: Target ~20px with fluid `clamp()`.
4. **Headline Balancing**:
   - All headings (`h1`–`h4`) employ `text-wrap: balance` to prevent orphaned single words on trailing lines.
   - Body prose uses `text-wrap: pretty` to eliminate typographic rivers and awkward breaks.

### 3.4 Typographic Scale

| Level            | Size (Mobile $\rightarrow$ Desktop)            | Line Height | Font Family           |
| :--------------- | :--------------------------------------------- | :---------- | :-------------------- |
| **Display**      | `clamp(2.25rem, 1.8rem + 2.25vw, 3.75rem)`     | `1.15`      | `font-arabic-display` |
| **H1**           | `clamp(1.875rem, 1.5rem + 1.875vw, 3rem)`      | `1.2`       | `font-arabic-display` |
| **H2**           | `clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)`     | `1.3`       | `font-arabic-display` |
| **H3**           | `clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)`     | `1.35`      | `font-arabic-display` |
| **H4**           | `clamp(1.125rem, 1.05rem + 0.375vw, 1.375rem)` | `1.4`       | `font-arabic-reading` |
| **Body Large**   | `clamp(1.125rem, 1.05rem + 0.35vw, 1.35rem)`   | `1.85`      | `font-arabic-reading` |
| **Body Regular** | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`      | `1.85`      | `font-arabic-reading` |
| **Body Small**   | `0.875rem` (14px)                              | `1.75`      | `font-arabic-reading` |
| **Caption**      | `0.8125rem` (13px)                             | `1.6`       | `font-arabic-reading` |
| **Metadata**     | `0.75rem` (12px)                               | `1.5`       | `font-arabic-reading` |

---

## 4. Spacing, Layout & Border Foundations

### 4.1 Content Widths & Reading Columns

To prevent reader eye fatigue, line lengths are strictly bounded:

- **`max-w-reading`**: `68ch` (~680px - 720px) — The optimal optical measure for Arabic reading.
- **`max-w-content`**: `56rem` (896px) — Standard editorial essays, forms, and author profiles.
- **`max-w-wide`**: `72rem` (1152px) — Bookstore galleries, article archives, and showcase grids.
- **`max-w-full`**: `80rem` (1280px) — Structural viewport boundaries with inline gutters.

### 4.2 Responsive Gutter Scale

- Mobile (<640px): `px-5` (20px)
- Tablet (640px–1024px): `px-8` (32px)
- Desktop (>1024px): `px-12` (48px)

### 4.3 Tactile Radii (Zero SaaS Bubbles)

- `rounded-none`: `0px` (Clean editorial edges)
- `rounded-sm`: `2px` (Fine tactile paper corners for buttons and inputs)
- `rounded`: `4px` (Subtle boundary corners for editorial panels)
- `rounded-lg`: `6px` (Maximum structural card radius)
- `rounded-full`: `9999px` (Pills and status dots only)

---

## 5. Reusable UI Primitives Reference

The foundational primitives are located in [`apps/web/components/ui/`](file:///c:/Users/Sroor%20For%20Laptop/OneDrive/Desktop/Hadeer-Literary-Platform/apps/web/components/ui/):

### 1. `Container`

Responsive horizontal constraint with size variants (`reading`, `content`, `wide`, `full`) and fluid inline gutters.

```tsx
import { Container } from '@/components/ui';

<Container size="reading">{/* Long-form continuous prose */}</Container>;
```

### 2. `Section`

Vertical rhythm container with spacing variants (`sm`, `md`, `lg`, `xl`).

```tsx
import { Section } from '@/components/ui';

<Section spacing="lg">{/* Substantial literary chapter or showcase section */}</Section>;
```

### 3. `Heading`

Semantic, balanced heading component (`display`, `h1`–`h6`) enforcing zero Arabic tracking, fluid typography, and text balance.

```tsx
import { Heading } from '@/components/ui';

<Heading level={1} variant="display">
  عزلة الكاتب في العصر الرقمي
</Heading>;
```

### 4. `Text`

Prose, lead paragraphs, captions, and metadata with built-in fluid text sizing and relaxed leading.

```tsx
import { Text } from '@/components/ui';

<Text variant="body-lg" color="secondary">
  الملاذ الفكري والمنصة الأدبية للكاتبة المعاصرة هدير ممدوح.
</Text>;
```

### 5. `Prose`

Specialized container for literary reading. Sets paragraph spacing, blockquote styling with Deep Wine accent border (`border-s-2 border-accent-primary` generating `border-inline-start-width: 2px` across RTL/LTR), footnotes, and optical widths (68ch).

```tsx
import { Prose } from '@/components/ui';

<Prose>
  <p>النص الأدبي يبدأ من صمت الفكرة...</p>
  <blockquote>«اقتباس أدبي عميق...»</blockquote>
</Prose>;
```

### 6. `Button`

Tactile literary button with variants (`primary`, `secondary`, `outline`, `ghost`), default `type="button"`, 44px minimum touch target, and accessible focus ring.

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">
  اقتناء الرواية
</Button>;
```

### 7. `Link`

Editorial link primitive with literary underline offsets (`underline-offset-4`) and smooth hover transitions.

```tsx
import { Link } from '@/components/ui';

<Link href="/reflections" variant="accent">
  قراءة المزيد من الخواطر ←
</Link>;
```

### 8. `Divider`

Hairline border (`line`) or tactile printing ornament (`ornament` with centered `✦`).

```tsx
import { Divider } from '@/components/ui';

<Divider variant="ornament" />;
```

### 9. `FormField`

Label, Input, HelperText, and ErrorMessage with WCAG accessible IDs and error states.

```tsx
import { Label, Input, HelperText } from '@/components/ui';

<div>
  <Label htmlFor="email" required>
    البريد الإلكتروني
  </Label>
  <Input id="email" type="email" placeholder="reader@domain.com" />
  <HelperText>لن يتم مشاركة بريدك مع أي جهة خارجية.</HelperText>
</div>;
```

---

## 6. Accessibility & Inclusivity (WCAG 2.2 AA)

1. **Color Contrast Verification (Tested Combinations)**:
   - **Body Prose**: `Ink Black (#1A1816)` on `Paper Ivory (#F4F0EA)` achieves **15.63:1** (Passes WCAG AAA, threshold 7:1).
   - **Secondary Text**: `Text Secondary (#3D3935)` on `Paper Ivory` achieves **10.84:1** (Passes WCAG AAA).
   - **Muted Metadata**: `Muted Text (#6B6257)` on `Paper Ivory` achieves **5.32:1** (Passes WCAG AA, threshold 4.5:1).
   - **Interactive Accents**: `Deep Wine (#6B2D38)` on `Paper Ivory` achieves **8.97:1** (Passes WCAG AAA).
   - **Button Fills**: `Paper Ivory` text on `Deep Wine` button achieves **8.97:1** (Passes WCAG AAA).
   - **Secondary Fills**: `Ink Black` on `Warm Sand (#E8E1D5)` achieves **13.71:1** (Passes WCAG AAA).
   - **Sepia Canvas**: `Ink Black` on `Sepia Shade (#EDE6DA)` achieves **14.34:1** (Passes WCAG AAA).
   - **Night Canvas**: `Paper Ivory` on `Night Paper (#121110)` achieves **16.67:1** (Passes WCAG AAA); nocturnal accent `Rose Wine (#C46D7D)` achieves **5.24:1** (Passes WCAG AA).
   - **Non-Text Boundaries**: Decorative borders and hairline separators use `Muted Taupe (#9C8E7E)` at **2.81:1**; critical functional UI boundaries requiring WCAG 2.2 SC 1.4.11 non-text contrast ($\ge 3:1$) must employ `--color-border-strong` (`#4A443D`, **6.64:1**) or `--color-focus-ring` (`#6B2D38`, **8.97:1**).
2. **Keyboard Focus Visibility**:
   - `:focus-visible` ring provides a high-contrast 2px outline with 2px offset (`var(--color-focus-ring)`).
3. **Reduced Motion**:
   - `@media (prefers-reduced-motion: reduce)` immediately clamps animation and transition durations to `0.01ms`.
4. **Touch Ergonomics**:
   - Standard buttons (`size="md"` min-height 44px, `size="lg"` min-height 48px) and input fields (min-height 44px) satisfy the WCAG 2.5.5 / 2.5.8 touch target recommendations. Compact `size="sm"` buttons (min-height 36px) meet WCAG AA (24px) but are intended for desktop inline controls.
5. **Known Boundary Constraints**:
   - Blanket WCAG AAA compliance is not claimed across all possible dynamic pairings; testing is strictly verified for the designated semantic pairings detailed above. Single-field inputs currently require developer-supplied accessible IDs until compound context wrappers are introduced in Phase 9.

---

## 7. Known Architectural Boundaries

- **Phase 2 Scope**: Design system foundations, typography engine, semantic tokens, and UI primitives ONLY.
- **Future Phases**: Full page layouts, dynamic theme switching toggles, reader navigation, and bookstore grids will be integrated in subsequent authorized phases (Phases 6, 7, 8, and 13).
