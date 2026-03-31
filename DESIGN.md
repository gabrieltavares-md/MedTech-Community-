# MedTech Community — Design System
## Version 1.0 | March 2026

---

## Brand Identity

- **Name:** MedTech Community
- **Tagline:** "Traduzindo tecnologia em linguagem simples"
- **Personality:** Innovative yet accessible. Medical expertise with human warmth.
- **Tone:** A senior physician who teaches with patience — not cold, not hype. Think Anthropic meets a great professor.
- **Visual style:** Apple/Anthropic minimalism. Clean, flat, generous whitespace. No gradients, no shadows (except subtle elevation on cards). Every element breathes.

---

## Logo

- **Type:** Wordmark clean
- **Structure:** "Med" in neutral black + "Tech" in primary brand color
- **Sub-brand variants:**
  - MedTech Community (parent) → "Tech" in Jade #1B6B54
  - MedTech AI → "Tech" in Indigo #3B4ABF
  - MedTech Critical Care → "Tech" in Terracotta #B84430
  - MedTech Anesthesiology → "Tech" in Steel Blue #1A5C99
- **Font:** Inter, weight 500, letter-spacing -0.3px
- **Minimum size:** 16px for digital, 10mm for print
- **Clear space:** 1x height of the "M" on all sides

---

## Color System

### Primary (Jade — parent brand)
| Token        | Hex       | Usage                           |
|--------------|-----------|----------------------------------|
| jade-900     | #0F1A14   | Dark mode bg, deep accents       |
| jade-600     | #1B6B54   | Primary brand, buttons, links    |
| jade-400     | #2CA57E   | Hover states, secondary accents  |
| jade-200     | #7DCDB0   | Light accents, tags, badges      |
| jade-50      | #E8F5F0   | Backgrounds, card tints          |

### AI Vertical (Indigo)
| Token        | Hex       | Usage                           |
|--------------|-----------|----------------------------------|
| indigo-900   | #0D1330   | Dark mode bg                     |
| indigo-600   | #3B4ABF   | Primary for AI vertical          |
| indigo-400   | #6370E0   | Hover, secondary                 |
| indigo-200   | #B0B8F5   | Light accents                    |
| indigo-50    | #ECEEFB   | Card backgrounds                 |

### Critical Care Vertical (Terracotta)
| Token        | Hex       | Usage                           |
|--------------|-----------|----------------------------------|
| terra-900    | #2A1210   | Dark mode bg                     |
| terra-600    | #B84430   | Primary for CC vertical          |
| terra-400    | #E06B4F   | Hover, secondary                 |
| terra-200    | #F5B8A8   | Light accents                    |
| terra-50     | #FDF0EC   | Card backgrounds                 |

### Anesthesiology Vertical (Steel Blue)
| Token        | Hex       | Usage                           |
|--------------|-----------|----------------------------------|
| steel-900    | #0C1B30   | Dark mode bg                     |
| steel-600    | #1A5C99   | Primary for Anest vertical       |
| steel-400    | #3D8DD4   | Hover, secondary                 |
| steel-200    | #9CC5ED   | Light accents                    |
| steel-50     | #E8F1FA   | Card backgrounds                 |

### Neutrals
| Token        | Hex       | Usage                           |
|--------------|-----------|----------------------------------|
| neutral-950  | #111111   | Text (light mode), bg (dark)     |
| neutral-800  | #333333   | Secondary text (dark mode)       |
| neutral-400  | #888888   | Muted text, placeholders         |
| neutral-100  | #E5E5E5   | Borders (light mode)             |
| neutral-50   | #FAFAFA   | Background (light mode)          |

---

## Typography

### Font Stack
- **Primary:** Inter (Google Fonts)
- **Editorial:** Source Serif 4 (quotes, editorial moments)
- **Monospace:** JetBrains Mono (code, technical data)

### Scale
| Role          | Size   | Weight | Letter-spacing | Line-height |
|---------------|--------|--------|----------------|-------------|
| Hero heading  | 56px   | 300    | -1px           | 1.1         |
| H1            | 40px   | 500    | -0.5px         | 1.2         |
| H2            | 28px   | 500    | -0.3px         | 1.3         |
| H3            | 22px   | 500    | 0              | 1.4         |
| Body large    | 18px   | 400    | 0              | 1.7         |
| Body          | 16px   | 400    | 0              | 1.7         |
| Caption       | 14px   | 400    | 0              | 1.5         |
| Small/Label   | 12px   | 500    | 0.5px          | 1.4         |

### Rules
- Only weights 300, 400, 500. Never 600/700/800.
- Hero text uses weight 300 for elegance (Apple style).
- Never use ALL CAPS except for small labels (12px).
- Line height: always ≥1.5 for body text.

---

## Layout

### Grid
- Max content width: 1200px
- Padding: 24px (mobile), 48px (tablet), 64px (desktop)
- Column system: 12 columns, 24px gap
- Sections: alternate between #FFFFFF and #FAFAFA backgrounds

### Spacing Scale (rem-based)
0.5rem (8px) · 1rem (16px) · 1.5rem (24px) · 2rem (32px) · 3rem (48px) · 4rem (64px) · 6rem (96px)

### Breakpoints
- Mobile: 0–640px
- Tablet: 641–1024px
- Desktop: 1025px+

---

## Components

### Buttons
- **Primary:** Jade-600 bg, white text, 12px radius, 0 shadow
- **Secondary:** Transparent bg, 0.5px jade-600 border, jade-600 text
- **Hover:** Primary → jade-400 bg. Secondary → jade-50 bg.
- **Height:** 44px (touch target), padding 0 24px
- **Font:** 14px, weight 500

### Cards
- Background: #FFFFFF
- Border: 0.5px solid #E5E5E5
- Border-radius: 12px
- Padding: 24px
- Hover: border-color transitions to #888888
- No box-shadow by default. Subtle shadow on hover only (0 2px 8px rgba(0,0,0,0.04))

### Navigation
- Fixed top, white bg with 0.5px bottom border
- Height: 64px
- Wordmark left, links center/right
- Mobile: hamburger menu
- Backdrop-filter: blur(12px) with slight transparency

### Vertical Cards (for the 3 sub-brands)
- Each card uses its vertical color as accent (top border or icon tint)
- Same card structure, different color = visual distinction within consistency

### Newsletter/CTA Section
- Full-width, jade-50 bg
- Centered layout: heading + subtext + email input + button
- Input: 48px height, 8px radius, 0.5px border

---

## Imagery & Iconography

- **Photos:** High-quality, warm lighting, medical professionals in action
- **Icons:** Line-style, 1.5px stroke, rounded caps. No filled icons.
- **Illustrations:** None. Photography and clean UI only.
- **AI imagery:** Abstract, geometric patterns for AI vertical. No robot clichés.

---

## Dark Mode

- Background: #111111
- Surface: #1A1A1A
- Border: #333333
- Text primary: #FAFAFA
- Text secondary: #999999
- Brand colors remain the same (Jade, Indigo, Terracotta, Steel Blue maintain saturation)

---

## Accessibility

- WCAG 2.1 AA minimum for all text
- Contrast ratio: ≥4.5:1 for body text, ≥3:1 for large text
- Focus states: 2px jade-400 outline with 2px offset
- All interactive elements: min 44x44px touch target
- Alt text on all images
- Semantic HTML: proper heading hierarchy, landmarks, aria labels

---

## Motion

- **Principle:** Motion exists to communicate, not decorate.
- **Page load:** Staggered fade-in (opacity 0→1, translateY 20px→0), 0.4s ease-out, 0.1s delay between elements
- **Hover:** Scale 1.02 on cards, 0.2s ease
- **Transitions:** All color/border transitions 0.2s ease
- **Scroll:** Subtle parallax on hero section only
- **Reduced motion:** Respect prefers-reduced-motion. Disable all animations.