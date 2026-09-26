# Adhitam AI — Design System & Anti-Slop Standards

> **Taste-Skill Applied:** This document enforces intentional design decisions that prevent generic, forgettable interfaces. Every choice must have a reason. Vagueness is not a design decision.

---

## 1. Brand Premise

Adhitam AI is a **private, adaptive UPSC preparation companion** — not a generic EdTech dashboard.

The brand must feel like:
- A **serious mentor** you'd trust before a high-stakes exam
- A **premium tool** used by people who care about depth over shortcuts
- **Indian roots without kitsch** — warm, disciplined, non-Western-startup-bland

Anti-slop rule: **Never use blue as the primary action color.** Never use a sans-serif system font stack without a display override. Never use generic rounded hero cards with stock imagery.

---

## 2. Color System

### Ink / Brass Palette (source: `theme.ts` — "Private Study Concierge")

| Token            | Value       | Usage                                              |
|------------------|-------------|----------------------------------------------------|
| `--ink`          | `#1E1B16`   | Dark bg, primary text on light                     |
| `--ink-dark`     | `#121016`   | Deepest backgrounds, hero overlays                 |
| `--ink-light`    | `#332C24`   | Elevated dark surfaces, hover states               |
| `--brass`        | `#C9A227`   | Primary accent — CTAs, active states               |
| `--brass-dark`   | `#A9821E`   | Hover state for brass elements, links              |
| `--brass-muted`  | `#D8BE6E`   | Secondary accent, eyebrow text on dark             |
| `--bg`           | `#F5F1E8`   | Main page background (warm ivory)                  |
| `--surface`      | `#FBF8F2`   | Card backgrounds, nav surface                      |
| `--surface-alt`  | `#EFE9DA`   | Alternating sections, pressed states               |
| `--border`       | `#E4DCC8`   | Card borders                                       |
| `--hairline`     | `#DCD2B8`   | Dividers, subtle separators                        |
| `--text`         | `#211D17`   | Primary body text                                  |
| `--text-secondary` | `#5C5548` | Supporting body text                              |
| `--text-muted`   | `#8C8371`   | Captions, metadata, footer text                    |
| `--text-inverse` | `#FAF7F2`   | Text on dark/ink backgrounds                       |
| `--success`      | `#5F7A5A`   | Check icons, positive signals                      |

### Dark Sections (parallax panels, hero dark areas)
Use `--ink-dark` (#121016) as the base with **radial brass glow** at `rgba(201,162,39,0.15)` — not a full background color, just atmospheric depth.

### Anti-slop color rules:
- ❌ No generic purple/blue gradients
- ❌ No white card on white background
- ❌ No `#000000` or `#ffffff` anywhere — always use the warm variants
- ✅ Brass (`#C9A227`) is earned — only used for active elements and moments of delight

---

## 3. Typography

### Font Stack
```css
--font-display: 'IBM Plex Sans', -apple-system, sans-serif;  /* Headers, brand voice */
--font-body: 'Inter', -apple-system, sans-serif;             /* Body, UI labels */
```

### Scale

| Element       | Size (fluid)              | Weight | Font            | Notes                              |
|---------------|---------------------------|--------|-----------------|------------------------------------|
| H1 Hero       | `clamp(42px, 5.4vw, 68px)` | 700   | IBM Plex Sans   | Letter-spacing: -0.02em            |
| H2 Section    | `clamp(32px, 3.6vw, 46px)` | 700   | IBM Plex Sans   | Max-width: 640px centered          |
| H3 Sub        | `clamp(26px, 3vw, 34px)`   | 700   | IBM Plex Sans   | Used in story rows                 |
| H4 Card title | `22px`                     | 700   | IBM Plex Sans   | Mission card, feature card titles  |
| Body          | `17px`                     | 400   | Inter           | Line-height: 1.6                   |
| Body large    | `19px`                     | 400   | Inter           | Hero lede text                     |
| Eyebrow       | `13px`                     | 700   | Inter           | Uppercase, letter-spacing: 0.14em  |
| Caption/meta  | `13-14px`                  | 400-600| Inter          | Muted color                        |

### Anti-slop typography rules:
- ❌ No `font-weight: 400` for headings
- ❌ No generic `Arial` or `Helvetica` fallbacks without branding intent
- ❌ No `text-align: justify` ever
- ✅ `text-wrap: pretty` on all headings and long paragraphs (prevents widows)
- ✅ Italic (`<em>`) in hero h1 uses `--brass-dark` color, font-style: normal — style without convention

---

## 4. Spacing System

Base unit: `4px`

| Scale | Value  | Usage                                   |
|-------|--------|-----------------------------------------|
| xs    | 8px    | Icon gap, micro padding                 |
| sm    | 16px   | Card internal gap, list spacing         |
| md    | 24-28px | Container padding, button padding      |
| lg    | 48-56px | Grid gaps, hero content gap            |
| xl    | 96-108px | Section vertical padding             |
| 2xl   | 160px  | Parallax panel heights                  |

Section padding: `padding: 108px 0` — breathe, don't crowd.

---

## 5. Component Specs

### Buttons

```css
/* Primary: Dark ink, transforms on hover */
.btn-primary {
  background: var(--ink);
  color: var(--text-inverse);
  border-radius: 999px;  /* pill */
  padding: 15px 28px;
  font-weight: 700;
  font-size: 15.5px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: var(--shadow-lifted); }
```

```css
/* Ghost: Transparent with hairline border */
.btn-ghost {
  background: transparent;
  border: 1px solid var(--hairline);
  color: var(--ink);
  border-radius: 999px;
}
.btn-ghost:hover { border-color: var(--brass-dark); background: var(--surface-alt); }
```

Anti-slop: No `border-radius: 8px` on buttons. Always pill or nothing.

### Cards

```css
/* Feature card — light surface with hover lift */
border-radius: 16px;
background: var(--surface);
border: 1px solid var(--hairline);
padding: 32px 28px;
transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.4s,
            border-color 0.4s;
hover: transform: translateY(-6px); border-color: var(--brass-muted);
```

```css
/* Mission demo card — dark ink, gradient border illusion */
background: var(--ink);
border-radius: 28px;
padding: 30px;
/* Gradient border via ::before mask technique */
```

### Navigation
- `position: sticky; top: 0`
- Backdrop: `rgba(245,241,232,0.82)` + `backdrop-filter: blur(14px) saturate(140%)`
- On scroll: adds `border-bottom: 1px solid var(--hairline)` and subtle `box-shadow`
- Height: `76px`
- Logo: `30px` IBM Plex Sans 700, `40px × 40px` logo mark

---

## 6. Motion & Animation

### Core Easing
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);  /* Smooth spring-like deceleration */
```

### Scroll Reveal
- Elements: `opacity: 0; transform: translateY(24px)` → `opacity: 1; transform: translateY(0)`
- Duration: `0.7s var(--ease-out)`
- Implemented via `IntersectionObserver` + `.in-view` class
- Stagger delay for grid children: `50ms` increments

### Lenis Parallax Integration (Next.js)
```ts
// Lenis setup with React (@studio-freight/lenis or lenis)
import Lenis from 'lenis'
import { useEffect } from 'react'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
```

### Aceternity UI Animations Used
- **Spotlight Effect** → Hero section background
- **Text Reveal / Lamp / Glow** → Section headings (`h2` tags)
- **Floating Cards / Card 3D Tilt** → Feature grid & Persona cards
- **Beam / Radial Gradient Background** → Dark CTA band section
- **Parallax Mockup Scroll** → Mobile app mockup in hero & study plan

### Anti-slop motion rules:
- ❌ No `animation: fadeIn 0.3s` — use transform + opacity together
- ❌ No `transition: all 0.3s` — always specify properties
- ❌ No instant pop-in — minimum 0.5s for hero elements
- ✅ Reduced motion respected: `@media (prefers-reduced-motion: reduce)`

---

## 7. Layout & Visual Structure Matching Target Design

### Screenshot Breakdown (Exact Flow)
1. **Hero Section (Dark Arch / Rashtrapati Bhavan aesthetic)**:
   - Header with Devanagari 'अ' + Adhitam AI brand, Links: Home, Features, For Aspirants, Approach, FAQ, Download App CTA button.
   - Tagline: `DISCIPLINE · DEPTH · DIRECTION`
   - Headline: "A deeper way to prepare for a **higher purpose.**" (with glowing brass accent)
   - Subtitle: "Adhitam AI is a personalised learning system for UPSC aspirants..."
   - CTAs: `Download App ↓` and `Learn More ↓`
   - Real 3D phone mockup showcase displaying the Adhitam AI mobile interface.
   - Quote overlay: *"Not just to clear an exam, but to build a better Bharat."*
2. **Built for different journeys, with one purpose (Light Section)**:
   - 4 Persona Cards: College Students, Working Professionals, First-time Aspirants, Self Learners. Clean minimal rounded icon boxes.
3. **A study plan that understands you (Dark Section with App Showcase)**:
   - "YOUR PERSONAL UPSC MENTOR"
   - Three phone perspective mockups showcasing Today's Plan, Polity progress, and completion percentages.
4. **From basics to advanced (Complete UPSC Coverage - Light Section)**:
   - 8 Subject Cards: Polity, Modern History, Ancient History, Geography, Economy, Environment, Science & Tech, Ethics.
5. **Focus on what matters, always (Adaptive Learning - Dark Section with Monument Backdrop)**:
   - Smart Sequencing, Adaptive Practice, Meaningful Insights with sleek circular icons.
6. **Your doubt-solving companion (AI Mentor - Light Section)**:
   - Interactive Chat snippet: "Explain the concept of Basic Structure Doctrine." with Adhitam AI badge response.
   - Feature bullet list: Content-aware answers, Simple & structured explanations, Examples and diagrams, UPSC syllabus aligned.
7. **Learn, practice and improve (Practice & Tests - Dark Section)**:
   - Topic-wise Practice, Previous Year Questions, Full-length Mocks, Detailed Analysis.
   - Phone mockup on the right showcasing Test Practice MCQs.
8. **Current affairs made simple (Light Section)**:
   - Daily Updates, Exam-focused Analysis, Static Linkages with newspaper/digest visuals.
9. **More than a preparation app (Philosophy - Dark Monument Section)**:
   - Architectural monument silhouette banner with deep warm gold lighting.
10. **Start your journey today (Final CTA Banner)**:
    - App Store & Google Play badges, warm heritage backdrop.
11. **Footer (Rich Dark Brand Footer)**:
    - Adhitam AI logo, tagline, Navigation links, Social icons, Legal links.
