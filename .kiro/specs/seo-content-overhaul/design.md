# Design Document — SEO Content Overhaul

## Overview

This document describes the technical design for a comprehensive SEO overhaul and full content rewrite of **goplay11-apk.com** — a Next.js App Router site serving as an affiliate/resource hub for the GoPlay 11 fantasy cricket Android app.

The overhaul targets 23 requirements covering: duplicate slug elimination, homepage rewrite, structured data expansion, inner-page content expansion, 19 new blog posts (15 GoPlay11 + 4 Hindi-intent), blog category sorting, footer/nav updates, sitemap/robots improvements, and internal linking consistency.

**Guiding constraint:** All changes must stay within the existing component architecture (App Router, TypeScript, Tailwind CSS) and must not introduce new third-party dependencies beyond what is already installed.

---

## Architecture

The site follows a standard Next.js App Router layout:

```
app/
  layout.tsx          ← root metadata, global JSON-LD, shell components
  page.tsx            ← homepage
  download/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  about/page.tsx
  login-register/page.tsx
  referral-code/page.tsx
  how-to-play/page.tsx
  goplay11-app-download/page.tsx
  goplay11-fantasy-app/page.tsx
  apk/page.tsx
  sitemap.ts
  robots.ts
components/
  json-ld.tsx
  site-header.tsx
  site-footer.tsx
  pick11-home-page.tsx
  faq-list.tsx
  breadcrumb-trail.tsx
  cta-buttons.tsx
  page-hero.tsx
  sticky-cta.tsx
lib/
  blog.ts             ← BlogPost type + BLOG_POSTS array
  seo.ts              ← schema builders + buildMetadata
  site.ts             ← constants, NAV_LINKS, keyword lists
next.config.ts        ← redirects
```

All SEO changes flow through three layers:
1. **Data layer** (`lib/blog.ts`, `lib/site.ts`) — types, constants, post content
2. **Schema layer** (`lib/seo.ts`) — schema.org JSON-LD builders
3. **Page layer** (`app/**`) — metadata exports, JSX content, JSON-LD injection

---

## Components and Interfaces

### 1. `lib/blog.ts` — BlogPost type and BLOG_POSTS array

#### 1a. Extended `BlogPost` type

```typescript
export type BlogPost = {
  slug: string;
  title: string;
  description: string;       // 140–158 chars, no markdown
  excerpt: string;
  publishedAt: string;       // ISO date
  updatedAt: string;         // ISO date
  author?: string;           // "Rohan Mehta" | "Ananya Kulkarni"
  reviewer?: string;
  keywords: string[];
  sections: BlogSection[];
  faq?: FaqItem[];
  // NEW fields
  category: "goplay11" | "habet";   // Req 13.1
  ogTitle?: string;                  // Req 9.7 — short og:title override
  seoTitle?: string;                 // optional <title> override ≤60 chars
};
```

`category` is **required** (not optional) so TypeScript enforces it on every post.

#### 1b. Build-time duplicate slug validation

A `validateBlogPosts(posts: BlogPost[]): void` function is exported from `lib/blog.ts`. It runs immediately after the `BLOG_POSTS` array is defined (module-level side-effect). If any two posts share a slug it throws:

```
Error: Duplicate blog slug detected: "fantasy-cricket-scoring-system-explained"
  Conflicting entries at indices 7 and 22.
```

This causes `next build` to fail, satisfying Req 1.2.

#### 1c. `getAllPosts()` — category-sorted output

```typescript
export function getAllPosts(): BlogPost[] {
  const goplay11 = BLOG_POSTS.filter(p => p.category === "goplay11");
  const habet    = BLOG_POSTS.filter(p => p.category === "habet");
  return [...goplay11, ...habet];
}
```

GoPlay11 posts always precede Habet posts (Req 13.4).

#### 1d. `getPostBySlug(slug: string): BlogPost | undefined`

Unchanged — searches `BLOG_POSTS` by slug.

#### 1e. Slug renames (Req 1.3, 1.4)

| Old slug | New slug |
|---|---|
| `fantasy-cricket-scoring-system-explained` *(second instance)* | `fantasy-cricket-scoring-system-guide-2026` |
| `fantasy-cricket-bankroll-management-guide` *(second instance)* | `fantasy-cricket-bankroll-management-complete-guide-2026` |

The first instance of each slug retains its original slug. The second instance (the newer, longer post) gets the new slug.

### 2. `lib/seo.ts` — Schema builders

#### 2a. `buildMetadata()` — ogTitle support

The existing `buildMetadata` function gains an `ogTitle` parameter:

```typescript
type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  canonicalPath?: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  noIndex?: boolean;
  ogTitle?: string;          // NEW — explicit og:title override
  twitterTitle?: string;     // NEW — explicit twitter:title override
};
```

When `ogTitle` is provided, `openGraph.title` is set to `ogTitle` (clamped to 70 chars) instead of the page `title`. This is used by `generateMetadata` in `app/blog/[slug]/page.tsx` to derive og:title from `post.ogTitle ?? post.title` (Req 9.7).

#### 2b. `buildHomepageGraphSchema()` — new helper

Returns a single `@graph` array containing all four homepage schema types (Req 5.5):

```typescript
export function buildHomepageGraphSchema(faqs: FaqItem[]): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildSoftwareApplicationNode(),   // SoftwareApplication
      buildWebsiteNode(),               // WebSite with SearchAction
      buildOrganizationNode(),          // Organization
      buildFaqNode(faqs),               // FAQPage
    ],
  };
}
```

The four node builders are private helpers extracted from the existing `buildSoftwareApplicationSchema`, `buildWebsiteSchema`, `buildOrganizationSchema`, and `buildFaqSchema` functions. The existing public functions remain for backward compatibility on inner pages.

The `SoftwareApplication` node uses the exact fields from Req 5.1:
- `name: "GoPlay 11"`
- `alternateName: ["GoPlay11", "Go Play 11", "GoPlay 11 App", "GoPlay11 APK", "GoPlay 11 Fantasy App"]`
- `operatingSystem: "Android"`
- `applicationCategory: "SportsApplication"`
- `downloadUrl: "https://goplay11-apk.com/download"`
- `offers.price: "0"`

The `WebSite` node's `SearchAction` target points to `https://goplay11-apk.com/blog?q={search_term_string}` (Req 5.2).

#### 2c. `buildBlogPostGraphSchema()` — new helper

Returns a single `@graph` array for blog post pages (Req 6.4):

```typescript
export function buildBlogPostGraphSchema(options: {
  post: BlogPost;
  path: string;
}): object {
  const nodes = [
    buildArticleNode(options),
    buildBreadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: options.post.title, path: options.path },
    ]),
  ];
  if (options.post.faq?.length) {
    nodes.push(buildFaqNode(options.post.faq));
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}
```

The `Article` node includes `author.url: "https://goplay11-apk.com/about"` (Req 6.1) and a 1200×630 `image` ImageObject.

#### 2d. `buildAboutPageGraphSchema()` — new helper

Returns `@graph` with `Organization` + `BreadcrumbList` for the `/about` page (Req 14.5, 14.6).

### 3. `app/layout.tsx` — Root metadata

Changes required (Req 4):
- `metadataBase` is already set to `new URL(SITE_URL)` — **no change needed**.
- `openGraph.locale: "en_IN"` is already set — **no change needed**.
- `openGraph.siteName: SITE_NAME` is already set — **no change needed**.
- `SOCIAL_PREVIEW_PATH` constant in `lib/site.ts` updated to `/goplay11-social.jpg` (Req 15.5).
- All `openGraph.images` entries gain explicit `width: 1200`, `height: 630`, and descriptive `alt` text (Req 15.2, 15.3).

The root layout already satisfies Req 4 as-is. The only layout-level change is the og:image alt text and the `SOCIAL_PREVIEW_PATH` constant update.

### 4. `app/page.tsx` — Homepage rewrite

The homepage is currently rendered entirely inside `<Pick11HomePage>` (a client component). The rewrite moves the SEO-critical content (H1, H2s, body copy, FAQ) into a **server component** in `app/page.tsx` itself, while `<Pick11HomePage>` is retained for the interactive hero/experience/features sections.

**New structure:**

```
app/page.tsx (server component)
  ├── <JsonLd data={buildHomepageGraphSchema(HOME_FAQS)} />   ← single @graph
  ├── <Pick11HomePage />                                       ← interactive hero
  └── <HomepageContent />                                      ← new server section
        ├── H1: "GoPlay 11 — Download the GoPlay 11 App | GoPlay 11 APK for Fantasy Cricket"
        ├── H2: "How to Download GoPlay 11 APK"
        ├── H2: "What is GoPlay 11?"
        ├── H2: "Why Choose the GoPlay 11 App?"
        ├── H2: "GoPlay 11 Fantasy Cricket — How It Works"
        ├── H2: "Frequently Asked Questions"
        └── <FaqList items={HOME_FAQS} />
```

`HomepageContent` is a plain server component defined in `app/page.tsx` (not a separate file). It renders 400+ words of body copy containing all required keyword variants and internal links (Req 2.3–2.6).

**Metadata** (Req 3):
```typescript
export const metadata = buildMetadata({
  title: "GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App",
  description: "Download the GoPlay 11 app for Android. Get the official GoPlay 11 APK, join fantasy cricket contests, and win real cash. Free Go Play 11 APK download — install in minutes.",
  path: "/",
  canonicalPath: "/",
  ogTitle: "GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App",
  twitterTitle: "GoPlay 11 — Download GoPlay 11 APK | Fantasy Cricket App",
  keywords: ["goplay 11", "goplay11", "go play 11", "goplay 11 app", "goplay 11 apk",
             "goplay 11 apk download", "go play 11 apk download", "goplay 11 download",
             "goplay11 fantasy app", "goplay 11 fantasy cricket"],
});
```

`HOME_FAQS` in `lib/site.ts` is expanded to at least 7 items covering: what GoPlay 11 is, how to download the APK, whether it is free, Play Store availability, how fantasy cricket works, the referral code, and Android version requirements (Req 5.4).

### 5. `app/download/page.tsx` — 700+ word rewrite

The page is rewritten as a full server component with:
- H1: `GoPlay 11 APK Download — Free Install Guide for Android (2026)` (Req 8.1)
- APK details table (Req 8.2)
- 5-step installation guide with Android 7 vs Android 8+ branching (Req 8.3)
- Troubleshooting section covering 6 issues (Req 8.4)
- FAQ section with 7+ questions (Req 8.5)
- Two CTA button placements (Req 8.6)
- Related links nav at bottom (Req 8.7)

All internal links use canonical anchor text per Req 22.

### 6. `app/blog/page.tsx` — Category sorting + filter UI

- `getAllPosts()` already returns goplay11-first order.
- A client-side `CategoryFilter` component is added (a simple `<select>` or button group) that filters the displayed posts by category. State is managed with `useState`; the filter is purely presentational (no URL params needed for this scope).
- Metadata updated per Req 13.5, 13.6, 10.7, 11.4.

### 7. `app/blog/[slug]/page.tsx` — generateMetadata + @graph schema

`generateMetadata` is updated to:
1. Use `post.ogTitle ?? post.title` for `openGraph.title` (Req 9.7).
2. Pass `ogTitle` to `buildMetadata`.
3. Replace the three separate `<JsonLd>` calls with a single `<JsonLd data={buildBlogPostGraphSchema({post, path})} />` (Req 6.4).

### 8. Inner pages — `/login-register`, `/referral-code`, `/how-to-play`

Each page is a full server component rewrite with:
- Exact H1 and title strings from Req 17
- Required H2 structure
- 500–700+ words of body copy
- FAQPage JSON-LD with 5+ questions
- Internal links using canonical anchor text

### 9. Overlapping download pages — `/goplay11-app-download`, `/goplay11-fantasy-app`, `/apk`

Each page is rewritten to serve a distinct purpose (Req 12):
- `/goplay11-app-download` → app features and overview; no install steps
- `/goplay11-fantasy-app` → fantasy cricket platform overview; no install steps
- `/apk` → APK technical details and version info; no install steps

All three link to `/download` as the primary download action.

### 10. `app/about/page.tsx` — E-E-A-T content

Full rewrite with mission statement, named author bios (Rohan Mehta, Ananya Kulkarni), editorial standards, responsible gaming commitment, contact info, and links to `/editorial-policy` and `/responsible-play`. Includes `buildAboutPageGraphSchema()` JSON-LD (Req 14).

### 11. `components/site-footer.tsx` — "Our Platforms" section

The "Recommended Platform" section is replaced with a `<nav aria-label="Our platforms">` containing four labelled links (Req 18):

```typescript
const PLATFORM_LINKS = [
  { href: "https://ak7x.games",      label: "ak7x App — Mobile Gaming" },
  { href: "https://habetapk.com",    label: "Habet App — Sports Betting" },
  { href: "https://dhan7.xyz",       label: "Dhan 7 App — Real Money Gaming" },
  { href: "https://ak7-apk.com",     label: "AK7 APK — Gaming App" },
];
```

All links use `rel={EXTERNAL_REL}` (which already includes `noopener`).

### 12. `components/site-header.tsx` — `/about` in nav

`NAV_LINKS` in `lib/site.ts` already includes `/about`. The header renders `NAV_LINKS` dynamically, so no header change is needed beyond confirming the constant is correct (Req 14.1).

### 13. `app/sitemap.ts` — Priority values + auto blog inclusion

Priority values updated to match Req 16.1. Blog posts auto-included via `getAllPosts()` with `priority: 0.7` and `changeFrequency: "monthly"` (Req 16.2, 16.3). `hreflang` alternates already present (Req 16.5).

### 14. `app/robots.ts` — No change needed

Current implementation already allows all paths and declares the sitemap URL (Req 16.4). No change required.

### 15. `next.config.ts` — 301 redirects for renamed slugs

Two new redirect entries added (Req 1.5):

```typescript
{
  source: "/blog/fantasy-cricket-scoring-system-explained",
  destination: "/blog/fantasy-cricket-scoring-system-guide-2026",
  permanent: true,
},
{
  source: "/blog/fantasy-cricket-bankroll-management-guide",
  destination: "/blog/fantasy-cricket-bankroll-management-complete-guide-2026",
  permanent: true,
},
```

---

## Data Models

### BlogPost (extended)

```typescript
export type BlogSection = {
  heading: string;
  paragraphs: string[];   // may contain inline HTML for internal links
};

export type BlogPost = {
  slug: string;           // kebab-case, unique across BLOG_POSTS
  title: string;          // used as <title> if seoTitle absent; ≤60 chars preferred
  seoTitle?: string;      // explicit <title> override, ≤60 chars
  ogTitle?: string;       // explicit og:title override, ≤70 chars, no ellipsis
  description: string;    // 140–158 chars, no markdown
  excerpt: string;        // short teaser for blog index cards
  publishedAt: string;    // "YYYY-MM-DD"
  updatedAt: string;      // "YYYY-MM-DD"
  author?: string;        // "Rohan Mehta" | "Ananya Kulkarni"
  reviewer?: string;
  keywords: string[];     // 8–12 page-specific terms
  category: "goplay11" | "habet";
  sections: BlogSection[];
  faq?: FaqItem[];        // if present, FAQPage schema is rendered
};
```

### MetadataOptions (extended)

```typescript
type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  canonicalPath?: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  noIndex?: boolean;
  ogTitle?: string;       // NEW
  twitterTitle?: string;  // NEW
};
```

### PLATFORM_LINKS constant (new, in `lib/site.ts`)

```typescript
export const PLATFORM_LINKS = [
  { href: "https://ak7x.games",      label: "ak7x App — Mobile Gaming" },
  { href: "https://habetapk.com",    label: "Habet App — Sports Betting" },
  { href: "https://dhan7.xyz",       label: "Dhan 7 App — Real Money Gaming" },
  { href: "https://ak7-apk.com",     label: "AK7 APK — Gaming App" },
] as const;
```

### ANCHOR_TEXT constants (new, in `lib/site.ts`)

Canonical anchor text strings used across all pages and posts (Req 22):

```typescript
export const ANCHOR = {
  download:    "Download GoPlay 11 APK",
  referral:    "GoPlay 11 referral code",
  howToPlay:   "how to play GoPlay 11",
  loginReg:    "GoPlay 11 login and register",
} as const;
```

These are documentation constants — they are not programmatically enforced at runtime, but they serve as the single source of truth referenced during content authoring and code review.

### Sitemap priority map (updated)

```typescript
const CORE_ROUTES = [
  { path: "/",                    priority: 1.0,  changeFrequency: "daily"   },
  { path: "/download",            priority: 0.95, changeFrequency: "daily"   },
  { path: "/blog",                priority: 0.85, changeFrequency: "weekly"  },
  { path: "/goplay11-app-download", priority: 0.85, changeFrequency: "weekly" },
  { path: "/goplay11-fantasy-app",  priority: 0.8,  changeFrequency: "weekly" },
  { path: "/how-to-play",         priority: 0.8,  changeFrequency: "weekly"  },
  { path: "/referral-code",       priority: 0.75, changeFrequency: "weekly"  },
  { path: "/login-register",      priority: 0.75, changeFrequency: "weekly"  },
  { path: "/apk",                 priority: 0.75, changeFrequency: "weekly"  },
  { path: "/about",               priority: 0.5,  changeFrequency: "monthly" },
  { path: "/responsible-play",    priority: 0.5,  changeFrequency: "monthly" },
  { path: "/editorial-policy",    priority: 0.5,  changeFrequency: "monthly" },
  { path: "/contact",             priority: 0.4,  changeFrequency: "monthly" },
];
// Blog posts: priority 0.7, changeFrequency "monthly"
```

### New blog posts — slug inventory

**15 GoPlay11 posts (Req 19):**

| Slug | Primary target keyword |
|---|---|
| `goplay-11-review-2026` | goplay 11 review |
| `goplay-11-referral-code-2026` | goplay 11 referral code |
| `how-to-register-goplay-11` | goplay11 register |
| `goplay-11-apk-download-android-2026` | goplay 11 apk download |
| `how-to-install-goplay-11-android` | how to install goplay 11 |
| `goplay-11-vs-dream11-comparison` | goplay 11 vs dream11 |
| `goplay-11-winning-tricks` | goplay 11 winning tips |
| `goplay-11-captain-selection-tips` | goplay 11 captain tips |
| `goplay-11-team-prediction-guide` | goplay 11 team prediction |
| `goplay-11-withdrawal-guide-2026` | goplay11 withdrawal |
| `goplay-11-minimum-withdrawal` | goplay11 minimum withdrawal |
| `goplay-11-login-problems-solved` | goplay 11 login problem |
| `is-goplay-11-real-or-fake` | goplay 11 real or fake |
| `is-goplay-11-legal-india` | is goplay 11 legal india |
| `goplay-11-ipl-2026-fantasy-guide` | goplay 11 ipl |

**4 Hindi-intent posts (Req 20):**

| Slug | Primary target keyword |
|---|---|
| `goplay-11-app-kaise-download-kare` | goplay 11 app kaise download kare |
| `goplay-11-se-paise-kaise-kamaye` | goplay11 se paise kaise kamaye |
| `goplay-11-mein-team-kaise-banaye` | goplay 11 team kaise banaye |
| `goplay-11-withdrawal-kaise-kare` | goplay11 withdrawal kaise kare |

All 19 new posts have `category: "goplay11"`, named `author`, `faq` array with 4+ items, and 700+ words of content.

**Note on slug collision:** `is-goplay-11-real-or-fake` already exists in `BLOG_POSTS` (the short existing post). The existing post must be renamed to `is-goplay11-real-or-fake-quick-check` (or similar) and a 301 redirect added, OR the new post replaces/rewrites the existing one. The design chooses **rewrite in place**: the existing short post is expanded to 700+ words under the same slug, satisfying both Req 19 and Req 21. No new slug is added for this entry.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Blog post slug uniqueness

*For any* array of `BlogPost` objects, the number of distinct slug values must equal the total number of posts. No two posts may share a slug.

**Validates: Requirements 1.1**

---

### Property 2: Blog post canonical URL derivation

*For any* blog post with slug `s`, calling `generateMetadata({ params: Promise.resolve({ slug: s }) })` must return metadata where `alternates.canonical === "https://goplay11-apk.com/blog/" + s`.

**Validates: Requirements 1.6**

---

### Property 3: og:title derivation from ogTitle field

*For any* `BlogPost` where `ogTitle` is set, `generateMetadata` must return `openGraph.title === post.ogTitle` (clamped to 70 chars). *For any* `BlogPost` where `ogTitle` is absent, `openGraph.title` must equal the post `title` clamped to 70 chars with no trailing ellipsis beyond the clamp boundary.

**Validates: Requirements 9.1, 9.2, 9.3, 9.7**

---

### Property 4: Meta description length and uniqueness

*For any* page metadata object produced by `buildMetadata`, the `description` field must have length between 140 and 158 characters (inclusive). *For any* two distinct pages, their `description` values must differ.

**Validates: Requirements 10.1, 10.2, 10.3**

---

### Property 5: Homepage @graph contains all four schema types

*For any* valid `FaqItem[]` array passed to `buildHomepageGraphSchema`, the returned object must contain a `@graph` array with exactly one node of each `@type`: `"SoftwareApplication"`, `"WebSite"`, `"Organization"`, and `"FAQPage"`.

**Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

---

### Property 6: Blog post @graph contains required schema types

*For any* `BlogPost` with a non-empty `faq` array, `buildBlogPostGraphSchema` must return a `@graph` array containing nodes of `@type` `"Article"`, `"BreadcrumbList"`, and `"FAQPage"`. *For any* `BlogPost` with an empty or absent `faq` array, the `@graph` must contain `"Article"` and `"BreadcrumbList"` but not `"FAQPage"`.

**Validates: Requirements 6.1, 6.2, 6.3, 6.4**

---

### Property 7: GoPlay11 posts precede Habet posts in getAllPosts()

*For any* `BLOG_POSTS` array containing a mix of `category: "goplay11"` and `category: "habet"` posts, `getAllPosts()` must return a list where every `"goplay11"` post appears at a lower index than every `"habet"` post.

**Validates: Requirements 13.1, 13.4**

---

### Property 8: Sitemap includes every blog post exactly once

*For any* `BLOG_POSTS` array, `sitemap()` must return a list of URL entries where every post's canonical URL (`https://goplay11-apk.com/blog/{slug}`) appears exactly once.

**Validates: Requirements 16.2, 16.3**

---

### Property 9: GoPlay11 posts meet minimum word count

*For any* `BlogPost` with `category: "goplay11"`, the total word count across all `sections[].paragraphs` (stripping HTML tags) must be ≥ 700.

**Validates: Requirements 19.2, 20.3, 21.2**

---

### Property 10: New GoPlay11 posts link to /download within first 200 words

*For any* `BlogPost` with `category: "goplay11"` and `publishedAt >= "2026-05-01"` (i.e., newly added posts), the concatenated text of the first section's paragraphs must contain a link (`href="/download"`) within the first 200 words.

**Validates: Requirements 19.2, 21.5**

---

### Property 11: Internal links to /download use canonical anchor text

*For any* internal link element in any page or blog post body where `href="/download"`, the visible anchor text must match the pattern `"Download GoPlay 11 APK"` or `"GoPlay 11 APK download"` (case-insensitive).

**Validates: Requirements 22.1, 22.6**

---

### Property 12: Internal links to /how-to-play use canonical anchor text

*For any* internal link element where `href="/how-to-play"`, the visible anchor text must match `"how to play GoPlay 11"` or `"GoPlay 11 how to play guide"` (case-insensitive). The generic text `"Play fantasy games online"` must not appear as anchor text for this path.

**Validates: Requirements 22.3, 22.5**

---

## Property Reflection

After reviewing all 12 properties:

- **Properties 9 and 10** both apply to GoPlay11 posts but test different things (word count vs. internal link placement) — both are retained.
- **Properties 11 and 12** both test anchor text consistency but for different target paths — both are retained as they catch different bugs.
- **Properties 5 and 6** both test `@graph` structure but for different page types — both are retained.
- **Properties 1 and 8** both relate to slug uniqueness but at different levels (data array vs. sitemap output) — both are retained as the sitemap test catches a different failure mode (sitemap function ignoring some posts).
- No redundancies identified. All 12 properties provide unique validation value.

---

## Error Handling

### Build-time errors

**Duplicate slug detection** (`lib/blog.ts`): The `validateBlogPosts` function runs at module load time. If a duplicate is found, it throws a descriptive `Error` that includes the conflicting slug and the indices of both posts. This causes `next build` to exit with a non-zero code, preventing deployment of a broken state.

```typescript
function validateBlogPosts(posts: BlogPost[]): void {
  const seen = new Map<string, number>();
  for (let i = 0; i < posts.length; i++) {
    const slug = posts[i]!.slug;
    if (seen.has(slug)) {
      throw new Error(
        `Duplicate blog slug detected: "${slug}"\n` +
        `  Conflicting entries at indices ${seen.get(slug)} and ${i}.`
      );
    }
    seen.set(slug, i);
  }
}
validateBlogPosts(BLOG_POSTS); // runs at module load
```

**Missing category field**: TypeScript enforces `category` as a required field on `BlogPost`. Any post missing `category` will produce a compile error.

### Runtime errors

**`getPostBySlug` returning `undefined`**: The `app/blog/[slug]/page.tsx` already calls `notFound()` when `getPostBySlug` returns `undefined`. `generateStaticParams` pre-generates all valid slugs, so `dynamicParams = false` ensures unknown slugs return 404 at the framework level.

**`buildHomepageGraphSchema` with empty FAQ array**: The function accepts an empty array gracefully — it produces a `FAQPage` node with an empty `mainEntity` array. This is valid schema.org but should not occur in practice since `HOME_FAQS` is a non-empty constant.

**`buildMetadata` title clamping**: The existing `clampText` function truncates titles that exceed the character limit. For the homepage and inner pages, all titles are authored to be within limits, so clamping should not trigger. The `ogTitle` field bypasses the `clampText` call for `openGraph.title` — it is the author's responsibility to keep `ogTitle` ≤ 70 chars.

### Content authoring guardrails

- `description` field: TypeScript type does not enforce length at compile time. The property-based test (Property 4) catches violations at test time.
- `faq` array: Optional field. Pages that require FAQPage schema must include it — this is enforced by the property test (Property 6) and by code review.
- `author` field: Required on all new posts per Req 19.7. TypeScript type keeps it optional for backward compatibility with existing posts, but the property test for new posts (Property 10) implicitly requires it.

---

## Testing Strategy

### Dual testing approach

Unit tests cover specific examples, edge cases, and error conditions. Property-based tests verify universal properties across many generated inputs. Both are necessary for comprehensive coverage.

### Property-based testing library

**[fast-check](https://github.com/dubzzz/fast-check)** is the chosen PBT library for this project. It is the standard choice for TypeScript/JavaScript projects, has excellent TypeScript support, and integrates cleanly with Vitest (the project's likely test runner given the Next.js stack).

Each property test runs a **minimum of 100 iterations**.

### Property test implementations

Each property test is tagged with a comment referencing the design property:

```typescript
// Feature: seo-content-overhaul, Property 1: Blog post slug uniqueness
it("no two blog posts share a slug", () => {
  fc.assert(
    fc.property(
      fc.array(arbitraryBlogPost(), { minLength: 1, maxLength: 50 }),
      (posts) => {
        const slugs = posts.map(p => p.slug);
        return new Set(slugs).size === slugs.length;
      }
    ),
    { numRuns: 100 }
  );
});
```

**Arbitraries needed:**
- `arbitraryBlogPost()` — generates a `BlogPost` with random slug, category, sections, and optional faq
- `arbitraryFaqItems()` — generates a non-empty `FaqItem[]`
- `arbitrarySlug()` — generates a valid kebab-case slug string

### Unit test coverage

Unit tests (example-based) cover:

| Test | What it verifies |
|---|---|
| `validateBlogPosts` throws on duplicate | Req 1.2 |
| Slug renames present in BLOG_POSTS | Req 1.3, 1.4 |
| Homepage metadata exact strings | Req 3.1–3.6 |
| `/download` page H1 exact string | Req 8.1 |
| `/download` page word count ≥ 700 | Req 8 |
| `/login-register` H1 and word count | Req 17.1–17.4 |
| `/referral-code` H1 and word count | Req 17.5–17.7 |
| `/how-to-play` H1 and word count | Req 17.8–17.10 |
| Footer contains all 4 platform links | Req 18.2 |
| Footer platform nav has aria-label | Req 18.4 |
| All 4 Hindi-intent slugs in BLOG_POSTS | Req 20.1 |
| NAV_LINKS includes /about | Req 14.1 |
| next.config.ts redirects for renamed slugs | Req 1.5 |
| robots.ts allows all and declares sitemap | Req 16.4 |

### Integration / smoke tests

- Build succeeds with zero duplicate slugs (enforced by `validateBlogPosts` at module load)
- `sitemap.xml` lists all static routes and all blog post URLs (verified by running `next build` and inspecting output)
- All `<title>` tags ≤ 60 chars (verified by a post-build HTML scan script)
- All `openGraph.title` values ≤ 70 chars and no trailing ellipsis (same script)
- `og:image` file exists at `/public/goplay11-social.jpg` at 1200×630px (Req 15, 23.10)

### Test file locations

```
lib/__tests__/blog.test.ts          ← unit + property tests for blog.ts
lib/__tests__/seo.test.ts           ← unit + property tests for seo.ts
app/__tests__/sitemap.test.ts       ← property test for sitemap auto-inclusion
app/__tests__/pages.test.ts         ← unit tests for page content/metadata
scripts/verify-build.ts             ← post-build smoke checks (title length, og:image)
```
