# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

MedTech Community — a Next.js 14 (App Router) marketing/content site for Gabriel Tavares' MedTech Community brand. It hosts a landing page plus three content "verticals" (IA, Critical Care, Anestesiologia), each with their own product library and in-app ebook/guide readers. PT-BR content throughout (`lang="pt-BR"`), deployed on Vercel.

## Commands

```bash
npm run dev           # dev server (localhost:3000)
npm run build         # production build
npm run start         # serve production build
npm run lint          # next lint (eslint-config-next + prettier)
npm run audit:check   # npm audit --audit-level=high
```

There is no test suite configured in this repo (no test script, no test runner installed).

## Architecture

### Vertical system (`lib/verticals.ts`, `lib/products.ts`, `lib/tokens.ts`)

The site is organized around three "verticals," each with its own accent color and route:
- `ia` → indigo → `/ia`
- `critical-care` → terracotta → `/critical-care`
- `anestesiologia` → steel blue → `/anestesiologia`

`VERTICAL_MAP` (keyed by vertical id) drives per-vertical theming (`Header`, `Logo`, `VerticalHero`, product grids) via inline `style={{ color: vertical.color.primary }}`, not Tailwind classes — colors come from `lib/tokens.ts` (`COLORS`), which is the single source of truth also mirrored into `tailwind.config.ts`. Products live in `lib/products.ts` as flat arrays (`IA_PRODUCTS`, `CRITICAL_CARE_PRODUCTS`) tagged with a `vertical` and `category` (`ebook | guideline | kit | curso`); vertical landing pages (e.g. `components/pages/IAPage.tsx`) filter/group these client-side.

When adding a new vertical: extend `VerticalConfig["id"]` in `lib/verticals.ts`, add a color set to `COLORS` in `lib/tokens.ts` (and to `tailwind.config.ts` if used as a Tailwind class anywhere), add a product array in `lib/products.ts`, and create `components/pages/<Name>Page.tsx` + `app/(dark)/<route>/page.tsx` following the `IAPage.tsx` / `CriticalCarePage.tsx` pattern.

### Ebook/guide reader pattern (`content/*.ts`, `components/pages/ChapterReader.tsx`, `components/layout/ReaderLayout.tsx`)

Long-form content (ebooks, guides) is authored as **TypeScript data**, not MDX/Markdown files. Each `content/<slug>.ts` file exports an `EbookMeta` object (`FUNDAMENTOS_IA`, etc.) containing `chapters: EbookChapter[]`, and each chapter has `sections: ChapterSection[]` where `content` is a raw HTML string. Routing is `app/(dark)/ia/<ebook>/page.tsx` (TOC/landing, via `EbookCover` + `EbookTOC`) and `app/(dark)/ia/<ebook>/[slug]/page.tsx` (per-chapter reader, statically generated via `generateStaticParams` from the chapter list). `ChapterReader` renders each section's HTML through `DOMPurify.sanitize()` (isomorphic-dompurify) before `dangerouslySetInnerHTML` — **never render chapter/section HTML without sanitizing**, since the content strings can contain arbitrary markup. `ReaderLayout` owns the shared reading-progress bar, sticky TOC sidebar, mobile TOC drawer, and prev/next chapter nav.

To add a new ebook: create `content/<slug>.ts` modeled on `content/fundamentos-ia.ts`, then mirror the two-route pattern (landing + `[slug]`) used under `app/(dark)/ia/fundamentos-ia/`.

### Component layers

- `components/ui/` — small presentational primitives (`Button`, `Card`, `Logo`, `ExpertChip`)
- `components/layout/` — page chrome (`Header` with `variant: "dark" | "light"`, `Footer`, `ReaderLayout`)
- `components/sections/` — composable page sections (`Hero`, `VerticalHero`, `ProductGrid`, `VerticalProductGrid`, `CategoryFilter`, `NewsletterCTA`, `EbookCover`, `EbookTOC`)
- `components/pages/` — full page compositions assembled from sections, one per vertical/ebook (`IAPage`, `CriticalCarePage`, `ChapterReader`)

### Styling

Tailwind with `darkMode: "class"`; design tokens (colors, radii, font vars) are defined in `tailwind.config.ts` and duplicated as plain JS in `lib/tokens.ts` for use in inline styles / non-Tailwind contexts — keep both in sync when changing brand colors. Fonts are Next `next/font/google`: Inter (`--font-inter`, weights 300/400/500 only — never 600+), Source Serif 4 (`--font-source-serif`, editorial/reading content), JetBrains Mono (`--font-jetbrains`, code). `DESIGN.md` at the repo root documents the full design system (colors, type scale, spacing, motion, accessibility rules) in more detail than this file — consult it for any new UI work.

## Security

`vercel.json` sets strict security headers (CSP, HSTS, X-Frame-Options: DENY, etc.) at the platform level. `isomorphic-dompurify` sanitizes all dynamically-rendered chapter HTML (see Ebook reader pattern above) — this is the app's main XSS surface since content is stored as raw HTML strings rather than a safe markup format.

## Known placeholders

`lib/products.ts` has at least one product with a placeholder CTA link (`SAVA_URL_PLACEHOLDER`) — check for `PLACEHOLDER` values before assuming a `ctaHref` is production-ready.
