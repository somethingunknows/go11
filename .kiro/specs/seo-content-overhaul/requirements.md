# Requirements Document

## Introduction

This feature covers a comprehensive SEO overhaul and full content rewrite for the GoPlay11 Next.js website (goplay11-apk.com). The site is a Next.js App Router application that serves as an affiliate/resource hub for the GoPlay 11 fantasy cricket app. The goal is to achieve first-page Google rankings for all GoPlay 11 keyword variants by fixing 20 specific technical SEO issues, rewriting all existing content, expanding thin pages, publishing 15+ new blog posts, and adding Hindi-intent content — all while maintaining the existing component architecture and TypeScript conventions.

The site currently suffers from: duplicate blog slugs splitting ranking signals, a single-word H1 missing all keyword variants, thin inner pages (under 100 words), Habet-branded posts diluting GoPlay11 topical authority, truncated og:title tags, and missing structured data on several page types.

## Glossary

- **GoPlay11 / GoPlay 11 / Go Play 11**: All refer to the same fantasy cricket Android app. The site targets all three spelling variants equally.
- **APK**: Android Package Kit — the file format used to distribute the GoPlay 11 app outside the Google Play Store.
- **EARS**: Easy Approach to Requirements Syntax — the pattern used to write acceptance criteria in this document.
- **E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness — Google's quality signals for YMYL content.
- **YMYL**: Your Money or Your Life — Google's category for pages that can affect financial decisions; fantasy gaming qualifies.
- **JSON-LD**: JavaScript Object Notation for Linked Data — the structured data format used for schema.org markup.
- **og:locale**: Open Graph locale meta tag (e.g. `en_IN`) that signals the target audience to social platforms and search engines.
- **Canonical URL**: The preferred URL for a page, declared via `<link rel="canonical">` to prevent duplicate-content penalties.
- **Slug**: The URL path segment identifying a blog post (e.g. `/blog/goplay-11-review-2026`).
- **Sitemap**: An XML file listing all indexable URLs on the site, submitted to Google Search Console.
- **robots.txt**: A file that instructs search engine crawlers which pages to index or ignore.
- **BreadcrumbList**: A schema.org type that describes the navigational hierarchy of a page.
- **SoftwareApplication**: A schema.org type used to mark up downloadable apps.
- **FAQPage**: A schema.org type that enables FAQ rich results in Google Search.
- **Article**: A schema.org type used to mark up blog posts for rich results.
- **GSC**: Google Search Console — the tool used to monitor indexing, coverage, and keyword performance.
- **Hindi-intent post**: A blog post written in English but targeting Hindi-language search queries (e.g. "goplay 11 app kaise download kare").
- **Inner page**: Any non-homepage, non-blog page (e.g. /download, /login-register, /referral-code, /how-to-play).
- **Topical authority**: Google's assessment of a site's depth and consistency of coverage on a specific topic.
- **The System**: The goplay11-apk.com Next.js website and its build/deploy pipeline.
- **The Blog**: The `/blog` index page and all `/blog/[slug]` post pages.
- **The Download Page**: The `/download` route.
- **The Homepage**: The `/` route.

## Requirements

---

### Requirement 1: Fix Duplicate Blog Post Slugs

**User Story:** As a site owner, I want every blog post to have a unique URL slug, so that Google indexes the correct version of each post and ranking signals are not split between duplicates.

#### Acceptance Criteria

1. THE System SHALL ensure no two entries in `BLOG_POSTS` share the same `slug` value.
2. WHEN a duplicate slug is detected at build time, THE System SHALL throw a build error identifying the conflicting slugs.
3. THE System SHALL rename the second instance of `fantasy-cricket-scoring-system-explained` to `fantasy-cricket-scoring-system-guide-2026`.
4. THE System SHALL rename the second instance of `fantasy-cricket-bankroll-management-guide` to `fantasy-cricket-bankroll-management-complete-guide-2026`.
5. WHEN a previously indexed duplicate slug is renamed, THE System SHALL add a permanent (301) redirect from the old slug path to the new slug path in `next.config.ts`.
6. THE System SHALL add a `canonical` alternate URL to the metadata of every blog post pointing to `https://goplay11-apk.com/blog/{slug}`.

---

### Requirement 2: Homepage H1 and Body Content Rewrite

**User Story:** As a site owner, I want the homepage H1 to contain all primary keyword variants and the page body to exceed 400 words, so that Google can match the page to the full range of GoPlay 11 search queries.

#### Acceptance Criteria

1. THE System SHALL set the homepage H1 to exactly: `GoPlay 11 — Download the GoPlay 11 App | GoPlay 11 APK for Fantasy Cricket`.
2. THE System SHALL include the following H2 headings on the homepage below the hero section: "How to Download GoPlay 11 APK", "What is GoPlay 11?", "Why Choose the GoPlay 11 App?", "GoPlay 11 Fantasy Cricket — How It Works", and "Frequently Asked Questions".
3. THE System SHALL render at least 400 words of body copy below the hero section on the homepage.
4. THE System SHALL include the keyword variants `goplay 11`, `goplay11`, `go play 11`, `goplay 11 app`, `goplay 11 apk`, and `fantasy cricket` within the homepage body copy.
5. THE System SHALL include an internal link to `/download` within the first 200 words of homepage body copy.
6. THE System SHALL include an internal link to `/how-to-play` and `/referral-code` within the homepage body copy.
7. THE System SHALL include a FAQ section on the homepage with at least 5 questions covering: what GoPlay 11 is, how to download the APK, whether it is free, whether it is on the Play Store, and how the referral code works.

---

### Requirement 3: Homepage Title Tag and Meta Description

**User Story:** As a site owner, I want the homepage title tag and meta description to contain all primary keyword variants within character limits, so that Google displays a compelling, keyword-rich snippet in search results.

#### Acceptance Criteria

1. THE System SHALL set the homepage `<title>` to: `GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App` (maximum 60 characters).
2. THE System SHALL set the homepage meta description to: `Download the GoPlay 11 app for Android. Get the official GoPlay 11 APK, join fantasy cricket contests, and win real cash. Free Go Play 11 APK download — install in minutes.` (140–158 characters, no markdown).
3. THE System SHALL set the homepage `openGraph.title` to: `GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App` (maximum 70 characters, no truncation).
4. THE System SHALL set the homepage `twitter.title` to: `GoPlay 11 — Download GoPlay 11 APK | Fantasy Cricket App`.
5. THE System SHALL set the homepage `keywords` metadata to the focused list: `goplay 11, goplay11, go play 11, goplay 11 app, goplay 11 apk, goplay 11 apk download, go play 11 apk download, goplay 11 download, goplay11 fantasy app, goplay 11 fantasy cricket`.
6. THE System SHALL set `alternates.canonical` on the homepage to `https://goplay11-apk.com`.

---

### Requirement 4: Global og:locale and metadataBase

**User Story:** As a site owner, I want `og:locale` set to `en_IN` globally and `metadataBase` configured, so that social platforms and search engines correctly identify the site's target audience as India.

#### Acceptance Criteria

1. THE System SHALL set `metadataBase` in `app/layout.tsx` to `new URL("https://goplay11-apk.com")`.
2. THE System SHALL set `openGraph.locale` to `en_IN` in the root layout metadata.
3. THE System SHALL set `openGraph.siteName` to `GoPlay11 APK` in the root layout metadata.
4. WHEN a page-level metadata object does not specify `openGraph.locale`, THE System SHALL inherit `en_IN` from the root layout.

---

### Requirement 5: Homepage JSON-LD Structured Data

**User Story:** As a site owner, I want the homepage to include SoftwareApplication, WebSite, Organization, and FAQPage JSON-LD schemas, so that Google can display rich results and understand the site's purpose and entity.

#### Acceptance Criteria

1. THE System SHALL render a `SoftwareApplication` schema on the homepage with `name: "GoPlay 11"`, `alternateName` array containing `["GoPlay11", "Go Play 11", "GoPlay 11 App", "GoPlay11 APK", "GoPlay 11 Fantasy App"]`, `operatingSystem: "Android"`, `applicationCategory: "SportsApplication"`, `downloadUrl: "https://goplay11-apk.com/download"`, and `offers.price: "0"`.
2. THE System SHALL render a `WebSite` schema on the homepage with a `SearchAction` `potentialAction` pointing to `https://goplay11-apk.com/blog?q={search_term_string}`.
3. THE System SHALL render an `Organization` schema on the homepage with `name: "GoPlay11 APK"`, `url: "https://goplay11-apk.com"`, and a `logo` ImageObject.
4. THE System SHALL render a `FAQPage` schema on the homepage containing at least 7 Question/Answer pairs covering: what GoPlay 11 is, how to download the APK, whether it is free, Play Store availability, how fantasy cricket works, the referral code, and Android version requirements.
5. THE System SHALL wrap all four schema types in a single `@graph` array within one `application/ld+json` script tag on the homepage.

---

### Requirement 6: Blog Post JSON-LD Structured Data

**User Story:** As a site owner, I want every blog post to include Article, BreadcrumbList, and FAQPage (where applicable) JSON-LD schemas, so that Google can display article rich results and breadcrumb navigation in search results.

#### Acceptance Criteria

1. THE System SHALL render an `Article` schema on every blog post page containing: `headline`, `description`, `url`, `datePublished`, `dateModified`, `author` (Person with `url: "https://goplay11-apk.com/about"`), `publisher` (Organization), `mainEntityOfPage`, and `image` (1200×630 ImageObject).
2. THE System SHALL render a `BreadcrumbList` schema on every blog post page with three items: Home → Blog → Post Title.
3. WHEN a blog post has a non-empty `faq` array, THE System SHALL render a `FAQPage` schema containing all FAQ items from that array.
4. THE System SHALL wrap all schemas for a blog post in a single `@graph` array within one `application/ld+json` script tag.
5. THE System SHALL use the existing `buildArticleSchema`, `buildBreadcrumbSchema`, and `buildFaqSchema` helpers from `@/lib/seo` to generate these schemas, extending them as needed.

---

### Requirement 7: Inner Page JSON-LD Structured Data

**User Story:** As a site owner, I want every non-blog inner page to include BreadcrumbList and FAQPage (where applicable) JSON-LD schemas, so that Google can display breadcrumb navigation and FAQ rich results for those pages.

#### Acceptance Criteria

1. THE System SHALL render a `BreadcrumbList` schema on each of the following pages: `/download`, `/how-to-play`, `/login-register`, `/referral-code`, `/about`, `/goplay11-app-download`, `/goplay11-fantasy-app`, `/apk`, `/habet-app-download`.
2. WHEN an inner page includes a FAQ section, THE System SHALL render a `FAQPage` schema containing all FAQ items on that page.
3. THE System SHALL add FAQPage schemas to `/download`, `/login-register`, `/referral-code`, and `/how-to-play` with at least 5 questions each.
4. THE System SHALL use the existing `buildBreadcrumbSchema` and `buildFaqSchema` helpers from `@/lib/seo` for all inner page schemas.

---

### Requirement 8: Expand /download Page to 700+ Words

**User Story:** As a site owner, I want the /download page to contain at least 700 words of original content, so that it can rank for "goplay 11 apk download" and related high-volume download-intent keywords.

#### Acceptance Criteria

1. THE System SHALL set the `/download` page H1 to: `GoPlay 11 APK Download — Free Install Guide for Android (2026)`.
2. THE System SHALL include an APK details table on the `/download` page with rows for: App Name, Also Known As, Platform, Minimum Android version (5.0), Category, File Type, Price (Free), Last Updated, and availability note (Android only, not on Play Store).
3. THE System SHALL include a 5-step installation guide on the `/download` page covering: tap download button, enable Unknown Sources (with separate instructions for Android 7 and below vs Android 8 and above), open the APK file, install, and register.
4. THE System SHALL include a troubleshooting section on the `/download` page covering at least 6 issues: installation blocked, parse error, app not opening, insufficient storage, download not starting, and app crashes after install.
5. THE System SHALL include a FAQ section on the `/download` page with at least 7 questions covering: whether the download is free, safety, iOS availability, Android version requirement, how to update, free contests, and the difference between GoPlay 11 / GoPlay11 / Go Play 11.
6. THE System SHALL include at least two download CTA buttons on the `/download` page — one above the step-by-step guide and one below it.
7. THE System SHALL include a related links navigation section at the bottom of the `/download` page linking to `/login-register`, `/referral-code`, `/how-to-play`, `/responsible-play`, and `/blog`.
8. THE System SHALL set the `/download` page metadata title to: `GoPlay 11 APK Download — Free Install Guide for Android 2026`.
9. THE System SHALL set the `/download` page meta description to: `Download the GoPlay 11 APK for Android free. Official Go Play 11 install guide — step-by-step setup, system requirements, troubleshooting and FAQs. Get started in 5 minutes.`
10. THE System SHALL set the `/download` page keywords to the focused list: `goplay 11 apk download, goplay11 apk download, go play 11 apk download, goplay 11 download, goplay11 download, go play 11 apk, goplay 11 apk, goplay 11 app download, goplay11 apk latest version, goplay 11 apk free download`.

---

### Requirement 9: Fix Truncated og:title on Blog Posts

**User Story:** As a site owner, I want every blog post og:title to be a complete sentence under 70 characters, so that social sharing previews and search snippets are never cut off mid-sentence.

#### Acceptance Criteria

1. THE System SHALL ensure every blog post `openGraph.title` is a complete sentence with no trailing ellipsis (`...`).
2. THE System SHALL ensure every blog post `title` tag (used in `<title>`) is 60 characters or fewer.
3. THE System SHALL ensure every blog post `openGraph.title` is 70 characters or fewer.
4. THE System SHALL update the existing blog post titled "GoPlay11 APK Cricket Fantasy: Complete Guide to..." to use og:title: `GoPlay11 Fantasy Cricket: Complete APK Guide 2026`.
5. THE System SHALL update the existing blog post titled "Fantasy Cricket Scoring System Explained..." to use og:title: `Fantasy Cricket Scoring System — Full Guide 2026`.
6. THE System SHALL update the existing blog post titled "Fantasy Cricket Bankroll Management Guide..." to use og:title: `GoPlay 11 Bankroll Management Guide for Players`.
7. WHEN `generateMetadata` is called for a blog post, THE System SHALL derive `openGraph.title` from a dedicated `ogTitle` field on the post if present, falling back to the post `title`.

---

### Requirement 10: Unique Meta Description Per Page

**User Story:** As a site owner, I want every page to have a unique meta description that is 140–158 characters, contains no markdown, and includes the page's primary keyword, so that Google displays a relevant, click-worthy snippet for each URL.

#### Acceptance Criteria

1. THE System SHALL ensure no two pages share an identical meta description string.
2. THE System SHALL ensure every meta description is between 140 and 158 characters in length.
3. THE System SHALL ensure no meta description contains markdown syntax (asterisks, backticks, brackets, etc.).
4. THE System SHALL set the `/how-to-play` meta description to: `Learn how to play GoPlay 11 fantasy cricket. Step-by-step guide to creating teams, joining contests, scoring points, and winning real cash on the GoPlay 11 app.`
5. THE System SHALL set the `/referral-code` meta description to: `GoPlay 11 referral code 2026 — share your code, earn bonus cash for every friend who joins. How to find your GoPlay11 referral code and maximise your earnings.`
6. THE System SHALL set the `/login-register` meta description to: `GoPlay 11 login and registration guide 2026. How to sign in to your GoPlay11 account, create a new account, and fix common login errors. Step-by-step with tips.`
7. THE System SHALL set the `/blog` meta description to: `GoPlay 11 guides, tips, and strategies. Download guides, team selection tips, referral programs, withdrawal help, and IPL fantasy cricket advice for 2026.`
8. THE System SHALL set the `/about` meta description to: `About goplay11-apk.com — your trusted guide to GoPlay 11 APK download, fantasy cricket tips, and responsible play. Who we are and how we create content.`
9. WHEN a new blog post is added to `BLOG_POSTS`, THE System SHALL require a non-empty `description` field of 140–158 characters.

---

### Requirement 11: Focused Meta Keywords Per Page

**User Story:** As a site owner, I want each page to have a focused, page-specific keywords list of 8–12 terms, so that on-page keyword signals are concentrated rather than diluted by a global keyword dump.

#### Acceptance Criteria

1. THE System SHALL set the `/login-register` keywords to: `goplay 11 login, goplay11 login, go play 11 login, goplay 11 register, goplay11 sign up, goplay 11 app login, goplay11 login problem, go play 11 account`.
2. THE System SHALL set the `/referral-code` keywords to: `goplay 11 referral code, goplay11 referral code, go play 11 referral code 2026, goplay 11 refer and earn, goplay11 bonus code, goplay 11 invite code`.
3. THE System SHALL set the `/how-to-play` keywords to: `how to play goplay 11, goplay11 fantasy cricket guide, go play 11 team selection, goplay 11 points system, goplay11 contest guide, goplay 11 for beginners`.
4. THE System SHALL set the `/blog` keywords to: `goplay 11 tips, goplay11 strategies, go play 11 winning tips, goplay 11 team tips, goplay11 fantasy cricket guide, goplay 11 blog`.
5. THE System SHALL ensure each page's keywords list contains only terms directly relevant to that page's primary topic.

---

### Requirement 12: Consolidate Overlapping Download Pages

**User Story:** As a site owner, I want each download-related page to serve a distinct purpose with unique content, so that Google concentrates ranking signals on `/download` rather than splitting them across near-duplicate pages.

#### Acceptance Criteria

1. THE System SHALL designate `/download` as the sole primary download landing page targeting `goplay 11 apk download`.
2. THE System SHALL rewrite `/goplay11-app-download` to focus exclusively on app features and overview content, targeting the keyword `goplay 11 app`, with no duplication of the step-by-step install guide from `/download`.
3. THE System SHALL rewrite `/goplay11-fantasy-app` to focus on the fantasy cricket platform overview, targeting `goplay 11 fantasy app`, with no duplication of install steps.
4. THE System SHALL rewrite `/apk` to focus on APK technical details and version information, targeting `goplay11 apk`, with no duplication of install steps.
5. THE System SHALL ensure each of the four pages (`/download`, `/goplay11-app-download`, `/goplay11-fantasy-app`, `/apk`) links to `/download` as the primary download action.
6. IF any two of the four pages share more than 30% identical body copy, THEN THE System SHALL add a 301 redirect from the less-authoritative page to `/download`.

---

### Requirement 13: Separate Habet Blog Posts from GoPlay11 Content

**User Story:** As a site owner, I want GoPlay11 blog posts to appear first on the /blog index and Habet posts to be clearly separated, so that the site builds topical authority around GoPlay11 rather than diluting it with off-topic betting content.

#### Acceptance Criteria

1. THE System SHALL add a `category` field to the `BlogPost` type with values `"goplay11"` or `"habet"`.
2. THE System SHALL assign `category: "habet"` to all existing blog posts whose `slug` or `keywords` reference Habet.
3. THE System SHALL assign `category: "goplay11"` to all existing blog posts whose content is about GoPlay 11 fantasy cricket.
4. WHEN rendering the `/blog` index page, THE System SHALL display all `category: "goplay11"` posts before any `category: "habet"` posts.
5. THE System SHALL update the `/blog` page title to: `GoPlay 11 Blog — Fantasy Cricket Guides & Tips | GoPlay11`.
6. THE System SHALL update the `/blog` page `alternates.canonical` to `https://goplay11-apk.com/blog`.
7. WHERE the site has sufficient infrastructure, THE System SHALL add a visible category filter on the `/blog` index allowing users to select "GoPlay11 Guides" or "All Posts".

---

### Requirement 14: About Page Content and Navigation

**User Story:** As a site owner, I want the /about page to contain comprehensive E-E-A-T signals and appear in the main navigation, so that Google treats the site as a trustworthy, expert source for YMYL fantasy gaming content.

#### Acceptance Criteria

1. THE System SHALL ensure `/about` is included in the `NAV_LINKS` array in `@/lib/site` so it appears in the primary navigation.
2. THE System SHALL set the `/about` page title to: `About GoPlay11 APK — Official GoPlay 11 Resource Site`.
3. THE System SHALL set the `/about` page `alternates.canonical` to `https://goplay11-apk.com/about`.
4. THE System SHALL include on the `/about` page: a mission statement, named author bios (Rohan Mehta and Ananya Kulkarni), editorial standards, content update process, responsible gaming commitment, contact information, and links to `/editorial-policy` and `/responsible-play`.
5. THE System SHALL include an `Organization` JSON-LD schema on the `/about` page.
6. THE System SHALL include a `BreadcrumbList` JSON-LD schema on the `/about` page.

---

### Requirement 15: Fix og:image Dimensions

**User Story:** As a site owner, I want all og:image references to point to a 1200×630px image under 300KB, so that social sharing previews render correctly on all platforms.

#### Acceptance Criteria

1. THE System SHALL reference a social preview image at `/goplay11-social.jpg` in all page metadata `openGraph.images` and `twitter.images` arrays.
2. THE System SHALL specify `width: 1200` and `height: 630` on every `openGraph.images` entry.
3. THE System SHALL specify a descriptive `alt` text on every `openGraph.images` entry (e.g. `"GoPlay 11 App — Download Free APK for Fantasy Cricket"`).
4. THE System SHALL ensure the `opengraph-image.jpg` and `twitter-image.jpg` files in `/app` are replaced or supplemented with a 1200×630px image.
5. THE System SHALL update the `SOCIAL_PREVIEW_PATH` constant in `@/lib/site` to point to the correct 1200×630px image path.

---

### Requirement 16: Sitemap and robots.txt

**User Story:** As a site owner, I want a complete sitemap.xml and a correctly configured robots.txt, so that Google discovers and crawls all pages efficiently.

#### Acceptance Criteria

1. THE System SHALL include all static routes in `app/sitemap.ts` with correct `priority` values: `/` at 1.0, `/download` at 0.95, `/blog` at 0.85, `/goplay11-app-download` at 0.85, `/goplay11-fantasy-app` at 0.8, `/how-to-play` at 0.8, `/referral-code` at 0.75, `/login-register` at 0.75, `/about` at 0.5, `/responsible-play` at 0.5, `/contact` at 0.4.
2. THE System SHALL include every published blog post URL in `app/sitemap.ts` with `priority: 0.7` and `changeFrequency: "monthly"`.
3. WHEN a new blog post is added to `BLOG_POSTS`, THE System SHALL automatically include its URL in the generated sitemap without manual slug registration.
4. THE System SHALL configure `app/robots.ts` to allow all user agents, allow all paths, and declare the sitemap URL as `https://goplay11-apk.com/sitemap.xml`.
5. THE System SHALL include `hreflang` alternates for `en-IN`, `en-US`, and `x-default` on every sitemap entry.

---

### Requirement 17: Expand Inner Pages to 500–700+ Words

**User Story:** As a site owner, I want /login-register, /referral-code, and /how-to-play to each contain 500–700+ words of original, keyword-rich content, so that they can rank for their respective target keywords.

#### Acceptance Criteria

1. THE System SHALL rewrite `/login-register` to contain at least 500 words with the following H2 structure: "How to Create a New GoPlay 11 Account", "Step-by-Step GoPlay 11 Login Guide", "GoPlay 11 Login Troubleshooting", and "Frequently Asked Questions".
2. THE System SHALL set the `/login-register` H1 to: `GoPlay 11 Login — How to Sign In to Your GoPlay11 Account`.
3. THE System SHALL set the `/login-register` title to: `GoPlay 11 Login & Register — Sign In to GoPlay11 App 2026`.
4. THE System SHALL include internal links to `/download` and `/referral-code` within the `/login-register` page body.
5. THE System SHALL rewrite `/referral-code` to contain at least 500 words with the following H2 structure: "How the GoPlay 11 Referral Program Works", "Where to Find Your GoPlay11 Referral Code", "How Much Can You Earn From GoPlay 11 Referrals?", "Tips to Maximise Your GoPlay 11 Referral Income", and "Frequently Asked Questions".
6. THE System SHALL set the `/referral-code` H1 to: `GoPlay 11 Referral Code 2026 — Earn With Every Invite`.
7. THE System SHALL set the `/referral-code` title to: `GoPlay 11 Referral Code 2026 — Refer & Earn on GoPlay11`.
8. THE System SHALL rewrite `/how-to-play` to contain at least 600 words with the following H2 structure: "Understanding the GoPlay 11 Points System", "How to Select Your GoPlay 11 Team", "Captain and Vice-Captain — How They Work on GoPlay 11", "Contest Types on GoPlay 11", "How GoPlay11 Winnings Are Calculated", "Tips for New GoPlay 11 Players", and "Frequently Asked Questions".
9. THE System SHALL set the `/how-to-play` H1 to: `How to Play GoPlay 11 Fantasy Cricket — Complete Beginner Guide`.
10. THE System SHALL set the `/how-to-play` title to: `How to Play GoPlay 11 — Fantasy Cricket Guide for Beginners`.
11. THE System SHALL add FAQPage JSON-LD schema to `/login-register`, `/referral-code`, and `/how-to-play` with at least 5 questions each.

---

### Requirement 18: Footer Partner Platform Links

**User Story:** As a site owner, I want footer links to partner platforms to be clearly labelled with descriptive anchor text and correct rel attributes, so that users understand where links lead and search engines correctly interpret the link relationships.

#### Acceptance Criteria

1. THE System SHALL replace the generic "Recommended Platform" footer section with a clearly labelled "Our Platforms" section.
2. THE System SHALL include the following labelled links in the footer platforms section: `ak7x.games` labelled "ak7x App — Mobile Gaming", `habetapk.com` labelled "Habet App — Sports Betting", `dhan7.xyz` labelled "Dhan 7 App — Real Money Gaming", and `ak7-apk.com` labelled "AK7 APK — Gaming App".
3. THE System SHALL add `rel="noopener"` to all external footer platform links.
4. THE System SHALL wrap the partner platform links in a `<nav aria-label="Our platforms">` element.
5. THE System SHALL retain the existing `EXTERNAL_REL` constant from `@/lib/site` for all external links.

---

### Requirement 19: Publish 15+ New GoPlay11 Blog Posts (60-Day Content Plan)

**User Story:** As a site owner, I want at least 15 new GoPlay11-specific blog posts published within 60 days following a structured content plan, so that the site builds topical authority and ranks for a broad range of GoPlay 11 keyword variants.

#### Acceptance Criteria

1. THE System SHALL add the following 15 blog posts to `BLOG_POSTS` in `lib/blog.ts`, each with a unique slug, unique meta description, named author, and at least 700 words of content:
   - `goplay-11-review-2026` — targeting `goplay 11 review, is goplay11 legit`
   - `goplay-11-referral-code-2026` — targeting `goplay 11 referral code, goplay11 refer and earn`
   - `how-to-register-goplay-11` — targeting `goplay11 register, goplay 11 sign up`
   - `goplay-11-apk-download-android-2026` — targeting `goplay 11 apk download, go play 11 apk`
   - `how-to-install-goplay-11-android` — targeting `how to install goplay 11, goplay11 install guide`
   - `goplay-11-vs-dream11-comparison` — targeting `goplay 11 vs dream11, goplay11 comparison`
   - `goplay-11-winning-tricks` — targeting `goplay 11 winning tips, goplay11 strategies`
   - `goplay-11-captain-selection-tips` — targeting `goplay 11 captain tips, goplay11 ipl tips`
   - `goplay-11-team-prediction-guide` — targeting `goplay 11 team prediction, go play 11 team tips`
   - `goplay-11-withdrawal-guide-2026` — targeting `goplay11 withdrawal, goplay 11 withdrawal guide`
   - `goplay-11-minimum-withdrawal` — targeting `goplay11 minimum withdrawal, go play 11 payout`
   - `goplay-11-login-problems-solved` — targeting `goplay 11 login problem, goplay11 login error`
   - `is-goplay-11-real-or-fake` — targeting `goplay 11 real or fake, is goplay11 legit`
   - `is-goplay-11-legal-india` — targeting `is goplay 11 legal india, goplay11 legal`
   - `goplay-11-ipl-2026-fantasy-guide` — targeting `goplay 11 ipl, goplay11 ipl fantasy`
2. WHEN a new blog post is added, THE System SHALL include an internal link to `/download` within the first 200 words of the post.
3. WHEN a new blog post is added, THE System SHALL include internal links to at least 2 other site pages within the post body.
4. WHEN a new blog post is added, THE System SHALL include a disclaimer block at the post footer.
5. WHEN a new blog post is added, THE System SHALL include at least one target keyword in the H1, at least one H2, and the first paragraph.
6. WHEN a new blog post is added, THE System SHALL include a `faq` array with at least 4 questions.
7. THE System SHALL ensure every new blog post has a named `author` field set to either `"Rohan Mehta"` or `"Ananya Kulkarni"`.

---

### Requirement 20: Hindi-Intent Blog Posts

**User Story:** As a site owner, I want at least 4 Hindi-intent blog posts published targeting high-volume Hindi-language search queries, so that the site captures the large segment of Indian users who search in Hinglish or Hindi-transliterated English.

#### Acceptance Criteria

1. THE System SHALL add the following 4 Hindi-intent blog posts to `BLOG_POSTS` in `lib/blog.ts`:
   - `goplay-11-app-kaise-download-kare` — targeting `goplay 11 app kaise download kare`
   - `goplay-11-se-paise-kaise-kamaye` — targeting `goplay11 se paise kaise kamaye`
   - `goplay-11-mein-team-kaise-banaye` — targeting `goplay 11 team kaise banaye`
   - `goplay-11-withdrawal-kaise-kare` — targeting `goplay11 withdrawal kaise kare`
2. THE System SHALL write Hindi-intent posts in English prose that naturally incorporates the Hindi-transliterated query phrase in the H1, first paragraph, and at least two H2 headings.
3. THE System SHALL ensure each Hindi-intent post contains at least 700 words.
4. THE System SHALL include a `faq` array with at least 4 questions on each Hindi-intent post.
5. THE System SHALL assign `category: "goplay11"` to all Hindi-intent posts.

---

### Requirement 21: Rewrite All Existing GoPlay11 Blog Posts

**User Story:** As a site owner, I want all existing GoPlay11-category blog posts to be rewritten with fresh, original content that targets GoPlay11 keywords, so that the site's existing content reinforces topical authority rather than diluting it with off-topic or thin material.

#### Acceptance Criteria

1. THE System SHALL rewrite the content of all blog posts with `category: "goplay11"` to focus exclusively on GoPlay 11 fantasy cricket topics.
2. THE System SHALL ensure every rewritten GoPlay11 post contains at least 700 words.
3. THE System SHALL ensure every rewritten GoPlay11 post includes at least one target keyword from the master keyword list in the H1, first paragraph, and at least two H2 headings.
4. THE System SHALL update the `updatedAt` field on every rewritten post to the rewrite date.
5. THE System SHALL ensure every rewritten post includes an internal link to `/download` within the first 200 words.
6. THE System SHALL ensure every rewritten post includes internal links to at least 2 other site pages.

---

### Requirement 22: Internal Linking Consistency

**User Story:** As a site owner, I want all internal links across the site to use consistent, keyword-rich anchor text pointing to the correct canonical URLs, so that link equity flows correctly and Google understands the site's topical structure.

#### Acceptance Criteria

1. THE System SHALL use the anchor text `GoPlay 11 APK download` or `Download GoPlay 11 APK` for all internal links pointing to `/download`.
2. THE System SHALL use the anchor text `GoPlay 11 referral code` for all internal links pointing to `/referral-code`.
3. THE System SHALL use the anchor text `how to play GoPlay 11` or `GoPlay 11 how to play guide` for all internal links pointing to `/how-to-play`.
4. THE System SHALL use the anchor text `GoPlay 11 login` or `GoPlay 11 login and register` for all internal links pointing to `/login-register`.
5. THE System SHALL replace all instances of the generic anchor text `Play fantasy games online` with `how to play GoPlay 11` when linking to `/how-to-play`.
6. THE System SHALL replace all instances of the generic anchor text `Download Goplay11 APK` (lowercase 'p') with `Download GoPlay 11 APK` (correct capitalisation) for links to `/download`.
7. THE System SHALL ensure every page links to at least 3 other internal pages.

---

### Requirement 23: Post-Launch Verification and Monitoring

**User Story:** As a site owner, I want a verifiable checklist of all SEO fixes confirmed after deployment, so that I can confirm every change is live before submitting to Google Search Console.

#### Acceptance Criteria

1. THE System SHALL produce a build with zero duplicate slugs in `BLOG_POSTS` (enforced at build time).
2. THE System SHALL produce a build where `https://goplay11-apk.com/sitemap.xml` lists all static routes and all blog post URLs.
3. THE System SHALL produce a build where every page's `<title>` tag is 60 characters or fewer.
4. THE System SHALL produce a build where every page's `openGraph.title` is 70 characters or fewer and contains no trailing ellipsis.
5. THE System SHALL produce a build where every page has a unique meta description of 140–158 characters.
6. THE System SHALL produce a build where every page includes at least one `application/ld+json` script tag.
7. THE System SHALL produce a build where the homepage `application/ld+json` contains `SoftwareApplication`, `WebSite`, `Organization`, and `FAQPage` types.
8. THE System SHALL produce a build where every blog post `application/ld+json` contains `Article` and `BreadcrumbList` types.
9. THE System SHALL produce a build where `https://goplay11-apk.com/robots.txt` allows all paths and declares the sitemap URL.
10. IF a page's `og:image` is specified, THEN THE System SHALL ensure the referenced image file exists in `/public` at 1200×630px.
