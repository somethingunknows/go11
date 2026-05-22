# Implementation Plan: SEO Content Overhaul

## Overview

Implement a comprehensive SEO overhaul for goplay11-apk.com across three layers: data (`lib/`), schema (`lib/seo.ts`), and pages (`app/`). Tasks are ordered foundation-first — types and constants before schema builders, schema builders before pages, content before tests. All code must stay within the existing Next.js App Router + TypeScript + Tailwind architecture and must not introduce new runtime dependencies.

## Tasks

- [x] 1. Install fast-check and set up test directories
  - Run `npm install --save-dev fast-check` to add the PBT library
  - Create `lib/__tests__/` directory with a `.gitkeep` placeholder
  - Create `app/__tests__/` directory with a `.gitkeep` placeholder
  - _Requirements: Design — Testing Strategy_


- [ ] 2. Extend `lib/blog.ts` — type, validation, and slug renames
  - [x] 2.1 Add `category`, `ogTitle`, and `seoTitle` fields to the `BlogPost` type
    - Add `category: "goplay11" | "habet"` as a required field (not optional)
    - Add `ogTitle?: string` (≤70 chars og:title override) and `seoTitle?: string` (≤60 chars title override)
    - _Requirements: 1.1, 9.7, 13.1_
  - [x] 2.2 Implement `validateBlogPosts()` and wire it as a module-level side-effect
    - Export `validateBlogPosts(posts: BlogPost[]): void` that throws a descriptive `Error` on duplicate slugs
    - Call `validateBlogPosts(BLOG_POSTS)` immediately after the array definition so `next build` fails on duplicates
    - _Requirements: 1.1, 1.2_
  - [x] 2.3 Update `getAllPosts()` to return goplay11 posts before habet posts
    - Filter `BLOG_POSTS` into `goplay11` and `habet` buckets, return `[...goplay11, ...habet]`
    - _Requirements: 13.1, 13.4_
  - [-] 2.4 Rename duplicate slugs and assign `category` to all existing posts
    - Rename second `fantasy-cricket-scoring-system-explained` → `fantasy-cricket-scoring-system-guide-2026`
    - Rename second `fantasy-cricket-bankroll-management-guide` → `fantasy-cricket-bankroll-management-complete-guide-2026`
    - Assign `category: "habet"` to all Habet posts; `category: "goplay11"` to all GoPlay11 posts
    - Add `ogTitle` overrides to the two posts called out in Req 9.4–9.6
    - _Requirements: 1.3, 1.4, 9.4, 9.5, 9.6, 13.2, 13.3_


- [x] 3. Update `lib/site.ts` — new constants and expanded FAQs
  - [x] 3.1 Add `PLATFORM_LINKS`, `ANCHOR` constants and update `SOCIAL_PREVIEW_PATH`
    - Export `PLATFORM_LINKS` array with the four partner platform entries (ak7x.games, habetapk.com, dhan7.xyz, ak7-apk.com) with labels per Req 18.2
    - Export `ANCHOR` object with canonical anchor text strings for `/download`, `/referral-code`, `/how-to-play`, `/login-register`
    - Update `SOCIAL_PREVIEW_PATH` from `/social-preview.jpg` to `/goplay11-social.jpg`
    - _Requirements: 15.5, 18.2, 22.1, 22.2, 22.3, 22.4_
  - [x] 3.2 Expand `HOME_FAQS` to 7+ items covering all required topics
    - Ensure FAQs cover: what GoPlay 11 is, how to download the APK, whether it is free, Play Store availability, how fantasy cricket works, the referral code, and Android version requirements
    - _Requirements: 5.4, 2.7_


- [ ] 4. Extend `lib/seo.ts` — new schema builders and `buildMetadata` params
  - [x] 4.1 Add `ogTitle` and `twitterTitle` params to `buildMetadata`
    - Extend `MetadataOptions` type with `ogTitle?: string` and `twitterTitle?: string`
    - When `ogTitle` is provided, set `openGraph.title` to `ogTitle` (author-controlled, not clamped by `clampText`)
    - When `twitterTitle` is provided, set `twitter.title` to `twitterTitle`
    - Update `openGraph.images` alt text to `"GoPlay 11 App — Download Free APK for Fantasy Cricket"` per Req 15.3
    - _Requirements: 9.7, 15.2, 15.3_
  - [-] 4.2 Implement `buildHomepageGraphSchema(faqs: FaqItem[]): object`
    - Extract private node builders from existing `buildSoftwareApplicationSchema`, `buildWebsiteSchema`, `buildOrganizationSchema`, `buildFaqSchema`
    - Return a single `{ "@context": "https://schema.org", "@graph": [...] }` with all four node types
    - `SoftwareApplication` node must use `name: "GoPlay 11"`, `alternateName` array per Req 5.1, `downloadUrl: "https://goplay11-apk.com/download"`, `applicationCategory: "SportsApplication"`
    - `WebSite` node `SearchAction` target must point to `https://goplay11-apk.com/blog?q={search_term_string}`
    - Keep existing public functions intact for backward compatibility
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  - [-] 4.3 Implement `buildBlogPostGraphSchema(options: { post: BlogPost; path: string }): object`
    - Return `@graph` with `Article` node (including `author.url: "https://goplay11-apk.com/about"` and 1200×630 `image` ImageObject), `BreadcrumbList` node, and `FAQPage` node when `post.faq` is non-empty
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  - [-] 4.4 Implement `buildAboutPageGraphSchema(): object`
    - Return `@graph` with `Organization` node and `BreadcrumbList` node for the `/about` page
    - _Requirements: 14.5, 14.6_


- [-] 5. Update `next.config.ts` — 301 redirects for renamed slugs
  - Add two permanent redirect entries to the `redirects()` array:
    - `/blog/fantasy-cricket-scoring-system-explained` → `/blog/fantasy-cricket-scoring-system-guide-2026`
    - `/blog/fantasy-cricket-bankroll-management-guide` → `/blog/fantasy-cricket-bankroll-management-complete-guide-2026`
  - _Requirements: 1.5_

- [x] 6. Update `app/sitemap.ts` — correct priority values and blog post inclusion
  - Update `CORE_ROUTES` priority values to match Req 16.1 exactly: `/` 1.0, `/download` 0.95, `/blog` 0.85, `/goplay11-app-download` 0.85, `/goplay11-fantasy-app` 0.8, `/how-to-play` 0.8, `/referral-code` 0.75, `/login-register` 0.75, `/apk` 0.75, `/about` 0.5, `/responsible-play` 0.5, `/editorial-policy` 0.5, `/contact` 0.4
  - Update blog post entries to use `priority: 0.7` and `changeFrequency: "monthly"` (currently `0.78`)
  - Confirm `getAllPosts()` drives blog URL generation automatically (no manual slug list)
  - _Requirements: 16.1, 16.2, 16.3_

- [-] 7. Update `app/layout.tsx` — og:image alt text
  - Update the `openGraph.images` entry alt text to `"GoPlay 11 App — Download Free APK for Fantasy Cricket"` to match the updated `buildMetadata` default
  - Verify `metadataBase`, `openGraph.locale: "en_IN"`, and `openGraph.siteName` are already correct (no change needed per design)
  - _Requirements: 4.1, 4.2, 4.3, 15.2, 15.3_


- [-] 8. Rewrite `app/page.tsx` — full homepage with H1, body copy, and @graph JSON-LD
  - Replace the existing `buildMetadata` call with the exact title, description, `ogTitle`, `twitterTitle`, and keywords from Req 3.1–3.5; set `canonicalPath: "/"` for Req 3.6
  - Replace the two separate `<JsonLd>` calls with a single `<JsonLd data={buildHomepageGraphSchema(HOME_FAQS)} />`
  - Add a `HomepageContent` server component (defined inline in `app/page.tsx`) containing:
    - H1: `GoPlay 11 — Download the GoPlay 11 App | GoPlay 11 APK for Fantasy Cricket`
    - H2s: "How to Download GoPlay 11 APK", "What is GoPlay 11?", "Why Choose the GoPlay 11 App?", "GoPlay 11 Fantasy Cricket — How It Works", "Frequently Asked Questions"
    - 400+ words of body copy with all required keyword variants and internal links to `/download` (within first 200 words), `/how-to-play`, and `/referral-code`
    - `<FaqList items={HOME_FAQS} />` for the FAQ section
  - Retain `<Pick11HomePage />` for the interactive hero section
  - All internal links to `/download` must use anchor text `"Download GoPlay 11 APK"` per Req 22.1
  - All internal links to `/how-to-play` must use anchor text `"how to play GoPlay 11"` per Req 22.3
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 5.5, 22.1, 22.3_


- [~] 9. Rewrite `app/download/page.tsx` — 700+ word install guide
  - Set metadata title, description, and keywords per Req 8.8, 8.9, 8.10
  - Set H1 to: `GoPlay 11 APK Download — Free Install Guide for Android (2026)`
  - Add APK details table with all rows from Req 8.2 (App Name, Also Known As, Platform, Min Android, Category, File Type, Price, Last Updated, availability note)
  - Add 5-step installation guide with Android 7 vs Android 8+ branching per Req 8.3
  - Add troubleshooting section covering all 6 issues from Req 8.4
  - Add FAQ section with 7+ questions per Req 8.5; render as `<FaqList>` and add `buildFaqSchema` JSON-LD
  - Place two `<CtaButtons />` — one above the step guide, one below it per Req 8.6
  - Add related links nav at bottom linking to `/login-register`, `/referral-code`, `/how-to-play`, `/responsible-play`, `/blog` per Req 8.7
  - Add `buildBreadcrumbSchema` JSON-LD per Req 7.1
  - Use canonical anchor text for all internal links per Req 22
  - _Requirements: 7.1, 7.2, 7.3, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10, 22.1, 22.3, 22.4_

- [-] 10. Update `app/blog/[slug]/page.tsx` — ogTitle support and single @graph JSON-LD
  - In `generateMetadata`, derive `ogTitle` from `post.ogTitle ?? post.title` and pass it to `buildMetadata`
  - Replace the three separate `<JsonLd>` calls with a single `<JsonLd data={buildBlogPostGraphSchema({ post, path })} />`
  - Ensure `alternates.canonical` is set to `https://goplay11-apk.com/blog/${slug}` per Req 1.6
  - _Requirements: 1.6, 6.1, 6.2, 6.3, 6.4, 9.7_


- [ ] 11. Update `app/blog/page.tsx` — category filter UI and updated metadata
  - Update metadata title to `"GoPlay 11 Blog — Fantasy Cricket Guides & Tips | GoPlay11"` per Req 13.5
  - Update metadata description to the exact string from Req 10.7; set keywords per Req 11.4
  - Set `canonicalPath: "/blog"` per Req 13.6
  - Add a client-side `CategoryFilter` component (a `"use client"` component in the same file or a separate `components/category-filter.tsx`) with `useState` to filter displayed posts by `"goplay11"` or `"all"`
  - `getAllPosts()` already returns goplay11-first order — no additional sorting needed
  - _Requirements: 10.7, 11.4, 13.4, 13.5, 13.6, 13.7_

- [~] 12. Rewrite `app/login-register/page.tsx` — 500+ word content
  - Set H1 to: `GoPlay 11 Login — How to Sign In to Your GoPlay11 Account`
  - Set metadata title to: `GoPlay 11 Login & Register — Sign In to GoPlay11 App 2026`
  - Set metadata description per Req 10.6; set keywords per Req 11.1
  - Add H2 structure: "How to Create a New GoPlay 11 Account", "Step-by-Step GoPlay 11 Login Guide", "GoPlay 11 Login Troubleshooting", "Frequently Asked Questions"
  - Write 500+ words of body copy with internal links to `/download` and `/referral-code` using canonical anchor text
  - Add FAQ section with 5+ questions; render `buildFaqSchema` and `buildBreadcrumbSchema` JSON-LD
  - _Requirements: 7.1, 7.2, 7.3, 10.6, 11.1, 17.1, 17.2, 17.3, 17.4, 17.11, 22.1, 22.2_


- [~] 13. Rewrite `app/referral-code/page.tsx` — 500+ word content
  - Set H1 to: `GoPlay 11 Referral Code 2026 — Earn With Every Invite`
  - Set metadata title to: `GoPlay 11 Referral Code 2026 — Refer & Earn on GoPlay11`
  - Set metadata description per Req 10.5; set keywords per Req 11.2
  - Add H2 structure: "How the GoPlay 11 Referral Program Works", "Where to Find Your GoPlay11 Referral Code", "How Much Can You Earn From GoPlay 11 Referrals?", "Tips to Maximise Your GoPlay 11 Referral Income", "Frequently Asked Questions"
  - Write 500+ words of body copy with internal links to at least 3 other pages using canonical anchor text
  - Add FAQ section with 5+ questions; render `buildFaqSchema` and `buildBreadcrumbSchema` JSON-LD
  - _Requirements: 7.1, 7.2, 7.3, 10.5, 11.2, 17.5, 17.6, 17.7, 17.11, 22.1, 22.7_

- [~] 14. Rewrite `app/how-to-play/page.tsx` — 600+ word content
  - Set H1 to: `How to Play GoPlay 11 Fantasy Cricket — Complete Beginner Guide`
  - Set metadata title to: `How to Play GoPlay 11 — Fantasy Cricket Guide for Beginners`
  - Set metadata description per Req 10.4; set keywords per Req 11.3
  - Add H2 structure: "Understanding the GoPlay 11 Points System", "How to Select Your GoPlay 11 Team", "Captain and Vice-Captain — How They Work on GoPlay 11", "Contest Types on GoPlay 11", "How GoPlay11 Winnings Are Calculated", "Tips for New GoPlay 11 Players", "Frequently Asked Questions"
  - Write 600+ words of body copy with internal links to at least 3 other pages using canonical anchor text
  - Add FAQ section with 5+ questions; render `buildFaqSchema` and `buildBreadcrumbSchema` JSON-LD
  - Replace any existing `"Play fantasy games online"` anchor text with `"how to play GoPlay 11"` per Req 22.5
  - _Requirements: 7.1, 7.2, 7.3, 10.4, 11.3, 17.8, 17.9, 17.10, 17.11, 22.3, 22.5, 22.7_


- [~] 15. Rewrite `app/about/page.tsx` — E-E-A-T content with @graph JSON-LD
  - Set metadata title to: `About GoPlay11 APK — Official GoPlay 11 Resource Site`
  - Set metadata description per Req 10.8; set `canonicalPath: "/about"` per Req 14.3
  - Include: mission statement, named author bios (Rohan Mehta, Ananya Kulkarni from `EXPERT_TEAM`), editorial standards, content update process, responsible gaming commitment, contact info, links to `/editorial-policy` and `/responsible-play`
  - Render `<JsonLd data={buildAboutPageGraphSchema()} />` for Organization + BreadcrumbList
  - Verify `/about` is in `NAV_LINKS` (already present — no change needed)
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

- [~] 16. Rewrite `app/goplay11-app-download/page.tsx` — app features and overview (no install steps)
  - Focus content on app features and overview, targeting keyword `goplay 11 app`
  - No duplication of step-by-step install guide from `/download`
  - Link to `/download` as the primary download action using canonical anchor text
  - Add `buildBreadcrumbSchema` JSON-LD; add FAQ section with `buildFaqSchema` if applicable
  - _Requirements: 12.1, 12.2, 12.5, 7.1, 22.1_

- [~] 17. Rewrite `app/goplay11-fantasy-app/page.tsx` — fantasy cricket platform overview (no install steps)
  - Focus content on fantasy cricket platform overview, targeting keyword `goplay 11 fantasy app`
  - No duplication of install steps from `/download`
  - Link to `/download` as the primary download action using canonical anchor text
  - Add `buildBreadcrumbSchema` JSON-LD; add FAQ section with `buildFaqSchema` if applicable
  - _Requirements: 12.1, 12.3, 12.5, 7.1, 22.1_

- [~] 18. Rewrite `app/apk/page.tsx` — APK technical details and version info (no install steps)
  - Focus content on APK technical details and version information, targeting keyword `goplay11 apk`
  - No duplication of install steps from `/download`
  - Link to `/download` as the primary download action using canonical anchor text
  - Add `buildBreadcrumbSchema` JSON-LD; add FAQ section with `buildFaqSchema` if applicable
  - _Requirements: 12.1, 12.4, 12.5, 7.1, 22.1_


- [~] 19. Update `components/site-footer.tsx` — "Our Platforms" nav section
  - Replace the "Recommended Platform" section with a `<nav aria-label="Our platforms">` element
  - Import `PLATFORM_LINKS` from `@/lib/site` and render each entry as an `<a>` with `rel={EXTERNAL_REL}` and `target="_blank"`
  - Remove the `RECOMMENDED_PLATFORM_URL` and `GOOGLE_BUSINESS_PROFILE_URL` references from the replaced section
  - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5_

- [~] 20. Checkpoint — verify foundation and infrastructure
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run build` to confirm zero duplicate slug errors and successful compilation
  - Run `npm test` to confirm all existing tests still pass


- [ ] 21. Add 15 new GoPlay11 blog posts to `lib/blog.ts`
  - [~] 21.1 Add posts 1–5: review, referral code, register, APK download, install guide
    - `goplay-11-review-2026` — targeting `goplay 11 review, is goplay11 legit`
    - `goplay-11-referral-code-2026` — targeting `goplay 11 referral code, goplay11 refer and earn`
    - `how-to-register-goplay-11` — targeting `goplay11 register, goplay 11 sign up`
    - `goplay-11-apk-download-android-2026` — targeting `goplay 11 apk download, go play 11 apk`
    - `how-to-install-goplay-11-android` — targeting `how to install goplay 11, goplay11 install guide`
    - Each post: `category: "goplay11"`, named `author`, 700+ words, `faq` with 4+ items, internal link to `/download` in first 200 words, links to 2+ other pages
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7_
  - [~] 21.2 Add posts 6–10: vs Dream11, winning tricks, captain tips, team prediction, withdrawal guide
    - `goplay-11-vs-dream11-comparison` — targeting `goplay 11 vs dream11, goplay11 comparison`
    - `goplay-11-winning-tricks` — targeting `goplay 11 winning tips, goplay11 strategies`
    - `goplay-11-captain-selection-tips` — targeting `goplay 11 captain tips, goplay11 ipl tips`
    - `goplay-11-team-prediction-guide` — targeting `goplay 11 team prediction, go play 11 team tips`
    - `goplay-11-withdrawal-guide-2026` — targeting `goplay11 withdrawal, goplay 11 withdrawal guide`
    - Each post: same requirements as 21.1
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7_
  - [~] 21.3 Add posts 11–15: minimum withdrawal, login problems, real or fake (rewrite), legal, IPL guide
    - `goplay-11-minimum-withdrawal` — targeting `goplay11 minimum withdrawal, go play 11 payout`
    - `goplay-11-login-problems-solved` — targeting `goplay 11 login problem, goplay11 login error`
    - `is-goplay-11-real-or-fake` — **rewrite in place** of the existing short post; expand to 700+ words
    - `is-goplay-11-legal-india` — targeting `is goplay 11 legal india, goplay11 legal`
    - `goplay-11-ipl-2026-fantasy-guide` — targeting `goplay 11 ipl, goplay11 ipl fantasy`
    - Each post: same requirements as 21.1; update `updatedAt` on the rewritten `is-goplay-11-real-or-fake` post
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 21.1, 21.2, 21.4_


- [~] 22. Add 4 Hindi-intent blog posts to `lib/blog.ts`
  - Add all four posts with `category: "goplay11"`, named `author`, 700+ words, `faq` with 4+ items:
    - `goplay-11-app-kaise-download-kare` — targeting `goplay 11 app kaise download kare`
    - `goplay-11-se-paise-kaise-kamaye` — targeting `goplay11 se paise kaise kamaye`
    - `goplay-11-mein-team-kaise-banaye` — targeting `goplay 11 team kaise banaye`
    - `goplay-11-withdrawal-kaise-kare` — targeting `goplay11 withdrawal kaise kare`
  - Each post must incorporate the Hindi-transliterated query phrase in the H1, first paragraph, and at least two H2 headings
  - Each post must include an internal link to `/download` within the first 200 words
  - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5_

- [~] 23. Rewrite all existing GoPlay11 blog posts in `lib/blog.ts`
  - Identify all posts with `category: "goplay11"` that were not added in tasks 21–22 (the pre-existing GoPlay11 posts)
  - Rewrite each post's `sections` to focus exclusively on GoPlay 11 fantasy cricket topics with 700+ words
  - Ensure each rewritten post includes the target keyword in H1, first paragraph, and at least two H2 headings
  - Update `updatedAt` to the rewrite date on every rewritten post
  - Ensure each rewritten post includes an internal link to `/download` within the first 200 words
  - Ensure each rewritten post includes internal links to at least 2 other site pages using canonical anchor text
  - _Requirements: 21.1, 21.2, 21.3, 21.4, 21.5, 21.6_

- [~] 24. Checkpoint — verify content completeness
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run build` to confirm no duplicate slug errors and all 19 new posts are included
  - Verify `getAllPosts()` returns all GoPlay11 posts before Habet posts


- [ ] 25. Write unit and property tests in `lib/__tests__/blog.test.ts`
  - [ ]* 25.1 Write property test for blog post slug uniqueness (Property 1)
    - Use `fc.array(arbitraryBlogPost(), { minLength: 1, maxLength: 50 })` to generate post arrays
    - Assert `new Set(posts.map(p => p.slug)).size === posts.length`
    - **Property 1: Blog post slug uniqueness**
    - **Validates: Requirements 1.1**
  - [ ]* 25.2 Write property test for getAllPosts() category ordering (Property 7)
    - Generate mixed `goplay11`/`habet` post arrays; assert every goplay11 post index < every habet post index in `getAllPosts()` output
    - **Property 7: GoPlay11 posts precede Habet posts in getAllPosts()**
    - **Validates: Requirements 13.1, 13.4**
  - [ ]* 25.3 Write property test for GoPlay11 post minimum word count (Property 9)
    - For any `BlogPost` with `category: "goplay11"`, assert total word count across all `sections[].paragraphs` (stripping HTML tags) ≥ 700
    - Run against the actual `BLOG_POSTS` array (not generated data) to catch real violations
    - **Property 9: GoPlay11 posts meet minimum word count**
    - **Validates: Requirements 19.2, 20.3, 21.2**
  - [ ]* 25.4 Write property test for new GoPlay11 posts linking to /download in first 200 words (Property 10)
    - For any `BlogPost` with `category: "goplay11"` and `publishedAt >= "2026-05-01"`, assert first section paragraphs contain `href="/download"` within first 200 words
    - **Property 10: New GoPlay11 posts link to /download within first 200 words**
    - **Validates: Requirements 19.2, 21.5**
  - [ ]* 25.5 Write unit tests for `validateBlogPosts`
    - Test that it throws on duplicate slugs with a message identifying the conflicting slug and indices
    - Test that it passes silently for a valid unique-slug array
    - _Requirements: 1.1, 1.2_
  - [ ]* 25.6 Write unit tests for slug renames and category assignments
    - Assert renamed slugs are present in `BLOG_POSTS` and old duplicate slugs are absent
    - Assert all 4 Hindi-intent slugs are present with `category: "goplay11"`
    - _Requirements: 1.3, 1.4, 20.1_


- [ ] 26. Write unit and property tests in `lib/__tests__/seo.test.ts`
  - [ ]* 26.1 Write property test for og:title derivation from ogTitle field (Property 3)
    - For any `BlogPost` where `ogTitle` is set, assert `generateMetadata` returns `openGraph.title === post.ogTitle`
    - For any `BlogPost` where `ogTitle` is absent, assert `openGraph.title === post.title` (clamped to 70 chars, no trailing ellipsis beyond clamp)
    - **Property 3: og:title derivation from ogTitle field**
    - **Validates: Requirements 9.1, 9.2, 9.3, 9.7**
  - [ ]* 26.2 Write property test for meta description length and uniqueness (Property 4)
    - For any `MetadataOptions` object, assert `buildMetadata` returns a `description` of 140–158 characters
    - Assert all page descriptions in the actual codebase are unique
    - **Property 4: Meta description length and uniqueness**
    - **Validates: Requirements 10.1, 10.2, 10.3**
  - [ ]* 26.3 Write property test for homepage @graph schema types (Property 5)
    - For any valid `FaqItem[]`, assert `buildHomepageGraphSchema` returns a `@graph` with exactly one node each of `SoftwareApplication`, `WebSite`, `Organization`, `FAQPage`
    - **Property 5: Homepage @graph contains all four schema types**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**
  - [ ]* 26.4 Write property test for blog post @graph schema types (Property 6)
    - For any `BlogPost` with non-empty `faq`, assert `buildBlogPostGraphSchema` returns `@graph` with `Article`, `BreadcrumbList`, `FAQPage`
    - For any `BlogPost` with empty/absent `faq`, assert `@graph` has `Article` and `BreadcrumbList` but not `FAQPage`
    - **Property 6: Blog post @graph contains required schema types**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4**
  - [ ]* 26.5 Write unit tests for `buildMetadata` exact homepage strings
    - Assert title, description, ogTitle, twitterTitle, keywords, and canonical URL match Req 3.1–3.6 exactly
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_
  - [ ]* 26.6 Write unit tests for footer platform links and nav
    - Assert `PLATFORM_LINKS` contains all 4 entries with correct hrefs and labels
    - _Requirements: 18.2_


- [ ] 27. Write property and unit tests in `app/__tests__/sitemap.test.ts`
  - [ ]* 27.1 Write property test for sitemap blog post inclusion (Property 8)
    - For any `BLOG_POSTS` array, assert `sitemap()` returns a list where every post's canonical URL appears exactly once
    - **Property 8: Sitemap includes every blog post exactly once**
    - **Validates: Requirements 16.2, 16.3**
  - [ ]* 27.2 Write property test for blog post canonical URL derivation (Property 2)
    - For any blog post with slug `s`, assert `generateMetadata` returns `alternates.canonical === "https://goplay11-apk.com/blog/" + s`
    - **Property 2: Blog post canonical URL derivation**
    - **Validates: Requirements 1.6**
  - [ ]* 27.3 Write unit tests for sitemap priority values
    - Assert each static route in `CORE_ROUTES` has the exact priority value from Req 16.1
    - Assert blog post entries use `priority: 0.7` and `changeFrequency: "monthly"`
    - _Requirements: 16.1, 16.2_
  - [ ]* 27.4 Write unit tests for page content and metadata
    - Assert `/download` page H1 is the exact string from Req 8.1
    - Assert `/login-register`, `/referral-code`, `/how-to-play` H1 strings match Req 17.2, 17.6, 17.9
    - Assert `NAV_LINKS` includes `/about`
    - Assert `robots()` allows all paths and declares the sitemap URL
    - _Requirements: 8.1, 14.1, 16.4, 17.2, 17.6, 17.9_

- [~] 28. Final checkpoint — full test suite and build verification
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm test` to confirm all unit and property tests pass
  - Run `npm run build` to confirm zero TypeScript errors, zero duplicate slugs, and successful static generation


## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Checkpoints at tasks 20, 24, and 28 ensure incremental validation
- Property tests validate universal correctness properties across generated inputs; unit tests validate specific examples and edge cases
- `fast-check` must be installed (task 1) before any property test tasks can run
- The design specifies `app/robots.ts` requires no changes — it already satisfies Req 16.4
- The design specifies `app/layout.tsx` requires only the og:image alt text update (task 7) — `metadataBase`, `og:locale`, and `og:siteName` are already correct
- `NAV_LINKS` in `lib/site.ts` already includes `/about` — no header change needed beyond confirming the constant
- All internal links to `/how-to-play` must use `"how to play GoPlay 11"` — replace any existing `"Play fantasy games online"` anchor text (Req 22.5)
- All internal links to `/download` must use `"Download GoPlay 11 APK"` or `"GoPlay 11 APK download"` — replace any `"Download Goplay11 APK"` (lowercase p) instances (Req 22.6)
- The `is-goplay-11-real-or-fake` post is a rewrite-in-place (task 21.3), not a new slug — no 301 redirect needed for it


## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "3.1"] },
    { "id": 2, "tasks": ["2.2", "2.3", "3.2"] },
    { "id": 3, "tasks": ["2.4", "4.1"] },
    { "id": 4, "tasks": ["4.2", "4.3", "4.4", "5", "6"] },
    { "id": 5, "tasks": ["7", "8", "10", "11"] },
    { "id": 6, "tasks": ["9", "12", "13", "14", "15", "16", "17", "18", "19"] },
    { "id": 7, "tasks": ["21.1", "21.2", "21.3", "22"] },
    { "id": 8, "tasks": ["23"] },
    { "id": 9, "tasks": ["25.5", "25.6", "26.5", "26.6", "27.3", "27.4"] },
    { "id": 10, "tasks": ["25.1", "25.2", "25.3", "25.4", "26.1", "26.2", "26.3", "26.4", "27.1", "27.2"] }
  ]
}
```
