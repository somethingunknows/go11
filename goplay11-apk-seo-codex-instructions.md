# goplay11-apk.com — Complete SEO Fix Instructions
**Target:** First-page Google rankings for all GoPlay 11 keyword variants
**Stack:** Next.js (App Router)
**Instructions for:** Codex / Developer

---

## Target Keywords — Full Master List

### Primary (fix these pages first)

| Keyword | Search Intent | Target Page |
|---------|--------------|-------------|
| goplay 11 | Brand / Navigational | Homepage |
| goplay11 | Brand | Homepage |
| go play 11 | Brand variant | Homepage |
| goplay 11 app | Brand + App | Homepage |
| goplay 11 apk | Download | /download |
| goplay 11 apk download | Download | /download |
| goplay11 apk download | Download | /download |
| go play 11 apk | Download | /download |
| go play 11 apk download | Download | /download |
| goplay 11 download | Download | /download |
| goplay11 download | Download | /download |

### Secondary (Week 2–4 targets)

| Keyword | Intent | Target Page |
|---------|--------|-------------|
| goplay 11 fantasy cricket | Gaming | Homepage |
| goplay11 fantasy app | Gaming | Homepage |
| goplay 11 cricket | Gaming | Blog post |
| goplay11 ipl | Seasonal | Blog post |
| goplay 11 login | Account | /goplay11-app (or /login page) |
| goplay11 login | Account | /login page |
| goplay 11 app login | Account | /login page |
| goplay 11 referral code | Promo | /referral-code |
| goplay11 referral code | Promo | /referral-code |
| goplay 11 bonus | Promo | Blog post |
| goplay11 withdrawal | Transactional | Blog post |
| goplay 11 withdrawal | Transactional | Blog post |
| goplay11 review | Informational | Blog post |
| goplay 11 review | Informational | Blog post |
| goplay11 winning tips | Gaming | Blog post |
| goplay 11 team selection tips | Gaming | Blog post |

### Long-tail (Blog content targets — high volume, low competition)

| Keyword | Target Blog Post |
|---------|-----------------|
| goplay 11 apk download latest version | Download guide post |
| goplay11 app download for android | Download guide post |
| how to install goplay 11 app | Install guide post |
| goplay 11 app kaise download kare | Hindi intent post |
| goplay11 se paise kaise kamaye | Hindi intent post |
| goplay 11 referral code 2026 | Referral guide post |
| goplay11 minimum withdrawal | Withdrawal guide post |
| goplay 11 real or fake | Trust post |
| is goplay11 legit | Trust post |
| goplay11 vs other fantasy apps | Comparison post |
| goplay 11 ipl fantasy tips | IPL season post |
| goplay11 team prediction today | Daily tips post |
| goplay 11 register kaise kare | Registration post |
| goplay11 customer care number | Support post |
| goplay 11 app update | Update guide post |
| goplay11 bonus claim guide | Bonus post |

---

## Fix Priority Order

| # | Fix | Priority | Time |
|---|-----|----------|------|
| 1 | Fix duplicate blog post slugs | URGENT | 10 min |
| 2 | Rewrite homepage H1 with all keyword variants | URGENT | 15 min |
| 3 | Rewrite homepage title + meta description | URGENT | 15 min |
| 4 | Add og:locale globally | High | 5 min |
| 5 | Homepage JSON-LD schema | High | 30 min |
| 6 | Blog post JSON-LD schema (Article + FAQ + Breadcrumb) | High | 20 min |
| 7 | FAQ page JSON-LD schema | High | 15 min |
| 8 | Expand /download page to 700+ words | High | 60 min |
| 9 | Fix truncated og:title on blog posts | High | 20 min |
| 10 | Unique meta description per page | High | 25 min |
| 11 | Trim meta keywords to focused list per page | Medium | 15 min |
| 12 | Consolidate overlapping download pages | Medium | 30 min |
| 13 | Separate Habet blog posts from GoPlay11 content | Medium | 20 min |
| 14 | Create /about page + add to nav | Medium | 30 min |
| 15 | Fix og:image to 1200×630px | Medium | 20 min |
| 16 | Add sitemap.xml + robots.txt | Medium | 15 min |
| 17 | Expand /login, /referral-code, /how-to-play pages | Medium | 45 min each |
| 18 | Label partner platform footer links correctly | Low | 10 min |
| 19 | Publish 15+ new blog posts | Ongoing | Ongoing |
| 20 | Hindi-intent blog posts | Ongoing | Ongoing |

---

## FIX 1 — Fix Duplicate Blog Post Slugs (URGENT)

**Problem:** The blog listing shows two posts using identical URL slugs:
- Two posts both at `/blog/fantasy-cricket-scoring-system-explained`
- Two posts both at `/blog/fantasy-cricket-bankroll-management-guide`

Google can only index one version. The wrong one gets indexed, and ranking signals split.

### Find the duplicates

```bash
# List all blog post slugs and find duplicates
grep -rn "slug" ./content/blog/ | sort | uniq -d

# Or check your CMS/data source for duplicate slug fields
```

### Fix — give the second version a unique slug immediately

```typescript
// BEFORE (duplicate slugs):
{ slug: "fantasy-cricket-scoring-system-explained" }  // post 1
{ slug: "fantasy-cricket-scoring-system-explained" }  // post 2 — DUPLICATE

// AFTER — differentiate with year or angle:
{ slug: "fantasy-cricket-scoring-system-explained" }         // keep original
{ slug: "fantasy-cricket-scoring-system-guide-2026" }        // renamed second post
```

```typescript
// Also add a 301 redirect if the second post was already indexed:
// next.config.ts
async redirects() {
  return [
    {
      source: "/blog/fantasy-cricket-scoring-system-explained-2",
      destination: "/blog/fantasy-cricket-scoring-system-guide-2026",
      permanent: true,
    },
    {
      source: "/blog/fantasy-cricket-bankroll-management-guide-2",
      destination: "/blog/fantasy-cricket-bankroll-management-complete-guide-2026",
      permanent: true,
    },
  ]
}
```

### Also add canonical to every blog post

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  return {
    alternates: {
      canonical: `https://goplay11-apk.com/blog/${params.slug}`,
    },
  }
}
```

---

## FIX 2 — Rewrite Homepage H1 (URGENT)

**Problem:** The homepage H1 is just one word — "GoPlay11". This is the single biggest on-page missed opportunity on the site. All keyword variants are missing.

### New H1 — use exactly

```
GoPlay 11 — Download the GoPlay 11 App | GoPlay 11 APK for Fantasy Cricket
```

This single H1 hits:
- `goplay 11` (spaced — primary target)
- `goplay 11 app` (app intent)
- `goplay 11 apk` (download intent)
- `fantasy cricket` (category keyword)

### Implementation

```tsx
// In homepage component — find and replace the H1:

// BEFORE:
<h1>GoPlay11</h1>

// AFTER:
<h1>GoPlay 11 — Download the GoPlay 11 App | GoPlay 11 APK for Fantasy Cricket</h1>
```

### H2s to add below the hero section

```tsx
<h2>How to Download GoPlay 11 APK</h2>
<h2>What is GoPlay 11?</h2>
<h2>Why Choose the GoPlay 11 App?</h2>
<h2>GoPlay 11 App Features</h2>
<h2>GoPlay 11 Fantasy Cricket — How It Works</h2>
<h2>Frequently Asked Questions</h2>
```

---

## FIX 3 — Homepage Title + Meta Description (URGENT)

### New values — copy exactly

```
TITLE TAG (58 chars):
GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App

META DESCRIPTION (158 chars):
Download the GoPlay 11 app for Android. Get the official GoPlay 11 APK, join fantasy cricket contests, and win real cash. Free Go Play 11 APK download — install in minutes.

TWITTER / OG TITLE:
GoPlay 11 — Download GoPlay 11 APK | Fantasy Cricket App
```

### Implementation

```typescript
// app/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App",
  description:
    "Download the GoPlay 11 app for Android. Get the official GoPlay 11 APK, join fantasy cricket contests, and win real cash. Free Go Play 11 APK download — install in minutes.",
  keywords:
    "goplay 11, goplay11, go play 11, goplay 11 app, goplay 11 apk, goplay 11 apk download, go play 11 apk download, goplay 11 download, goplay11 fantasy app, goplay 11 fantasy cricket",
  alternates: {
    canonical: "https://goplay11-apk.com",
  },
  openGraph: {
    title: "GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App",
    description:
      "Download the GoPlay 11 app for Android. Get the official GoPlay 11 APK, join fantasy cricket contests, and win real cash. Free Go Play 11 APK download — install in minutes.",
    url: "https://goplay11-apk.com",
    siteName: "GoPlay11 APK",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/goplay11-social.jpg",  // 1200×630 — see Fix 15
        width: 1200,
        height: 630,
        alt: "GoPlay 11 App — Download Free APK for Fantasy Cricket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App",
    description:
      "Download the GoPlay 11 app for Android. Official GoPlay 11 APK for fantasy cricket. Free Go Play 11 APK download.",
    images: ["/goplay11-social.jpg"],
  },
}
```

---

## FIX 4 — Add og:locale Globally (5 minutes)

```typescript
// app/layout.tsx — set metadataBase + global og:locale
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://goplay11-apk.com"),
  openGraph: {
    locale: "en_IN",
    siteName: "GoPlay11 APK",
  },
}
```

---

## FIX 5 — Homepage JSON-LD Schema

Create `components/HomepageSchema.tsx`:

```tsx
export function HomepageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "GoPlay 11",
        "alternateName": [
          "GoPlay11",
          "Go Play 11",
          "GoPlay 11 App",
          "GoPlay11 APK",
          "GoPlay 11 Fantasy App",
        ],
        "operatingSystem": "Android",
        "applicationCategory": "SportsApplication",
        "downloadUrl": "https://goplay11-apk.com/download",
        "url": "https://goplay11-apk.com",
        "description":
          "GoPlay 11 is a fantasy cricket app for Android. Download the GoPlay 11 APK to join fantasy cricket contests, create dream teams, and win real cash prizes every day.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
        },
        "publisher": {
          "@type": "Organization",
          "name": "GoPlay11 APK",
          "url": "https://goplay11-apk.com",
        },
      },
      {
        "@type": "WebSite",
        "url": "https://goplay11-apk.com",
        "name": "GoPlay 11",
        "description":
          "Official resource for GoPlay 11 APK download, GoPlay11 fantasy cricket guides, referral codes, and winning tips.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://goplay11-apk.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "name": "GoPlay11 APK",
        "url": "https://goplay11-apk.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://goplay11-apk.com/logo.png",
        },
        "sameAs": [
          // Add your social media URLs here:
          // "https://www.facebook.com/goplay11",
          // "https://www.instagram.com/goplay11",
          // "https://t.me/goplay11",
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is GoPlay 11?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GoPlay 11 (also written as GoPlay11 or Go Play 11) is a fantasy cricket app for Android. Players create dream teams from real match lineups, join contests, and win real cash prizes based on player performance in live matches.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I download the GoPlay 11 APK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Visit goplay11-apk.com/download, tap the download button, enable Unknown Sources in your Android settings (Settings > Security > Unknown Sources), open the downloaded GoPlay 11 APK file, and install. The process takes under 5 minutes.",
            },
          },
          {
            "@type": "Question",
            "name": "Is GoPlay 11 free to download?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The GoPlay 11 APK download from goplay11-apk.com is completely free. There is no charge to download or install the app.",
            },
          },
          {
            "@type": "Question",
            "name": "Is GoPlay 11 available on the Google Play Store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GoPlay 11 is distributed as an Android APK and is not available on the Google Play Store. Download the official GoPlay 11 APK from goplay11-apk.com to get the latest verified version.",
            },
          },
          {
            "@type": "Question",
            "name": "How does GoPlay 11 fantasy cricket work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In GoPlay 11, you select 11 players from an upcoming cricket match within a budget. Your team earns points based on real match performance — runs, wickets, catches, and more. The higher your points, the better your contest ranking and cash reward.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the GoPlay 11 referral code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GoPlay 11 offers a referral program where you earn bonus cash for every friend who registers and joins a paid contest using your referral code. Find your referral code in the GoPlay 11 app under the Refer & Earn section.",
            },
          },
          {
            "@type": "Question",
            "name": "Which Android version does GoPlay 11 require?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GoPlay 11 APK requires Android 5.0 (Lollipop) or above. It runs smoothly on most Android smartphones released after 2017.",
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

```tsx
// app/page.tsx — import and add to page
import { HomepageSchema } from "@/components/HomepageSchema"

export default function HomePage() {
  return (
    <>
      <HomepageSchema />
      {/* ... rest of page */}
    </>
  )
}
```

---

## FIX 6 — Blog Post JSON-LD Schema

Create `components/BlogSchema.tsx`:

```tsx
interface FAQ {
  question: string
  answer: string
}

interface BlogSchemaProps {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified: string
  authorName: string
  faqs?: FAQ[]
}

export function BlogSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  faqs,
}: BlogSchemaProps) {
  const url = `https://goplay11-apk.com/blog/${slug}`

  const graph: object[] = [
    {
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": datePublished,
      "dateModified": dateModified,
      "author": {
        "@type": "Person",
        "name": authorName,
        "url": "https://goplay11-apk.com/about",
      },
      "publisher": {
        "@type": "Organization",
        "name": "GoPlay11 APK",
        "url": "https://goplay11-apk.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://goplay11-apk.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url,
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://goplay11-apk.com/goplay11-social.jpg",
        "width": 1200,
        "height": 630,
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://goplay11-apk.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://goplay11-apk.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": title,
          "item": url,
        },
      ],
    },
  ]

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    })
  }

  const schema = { "@context": "https://schema.org", "@graph": graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Apply to existing blog posts

```tsx
// Example: Complete guide blog post
<BlogSchema
  title="GoPlay11 APK Cricket Fantasy: Complete Download & Setup Guide 2026"
  description="Complete guide to GoPlay 11 APK download and setup. Step-by-step install, account registration, team creation tips, and first contest strategy for new players."
  slug="goplay-11-apk-cricket-fantasy-complete-guide"
  datePublished="2026-01-01"
  dateModified="2026-01-01"
  authorName="Rohan Mehta"
  faqs={[
    {
      question: "How do I download GoPlay 11 APK?",
      answer:
        "Visit goplay11-apk.com/download, tap the download button, enable Unknown Sources in Android settings, open the APK file, and install. Done in under 5 minutes.",
    },
    {
      question: "Is GoPlay 11 safe to use?",
      answer:
        "Yes, when downloaded from the official goplay11-apk.com page. Always avoid third-party APK mirrors to ensure you get the original, unmodified file.",
    },
    {
      question: "Can I play GoPlay 11 for free?",
      answer:
        "GoPlay 11 offers free contests as well as paid contests. You can join free contests without spending any money and still win real rewards.",
    },
  ]}
/>
```

---

## FIX 7 — Sitemap Schema for /how-to-play, /referral-code, /login-register Pages

Add BreadcrumbList schema to every non-blog inner page:

```tsx
// components/PageSchema.tsx
interface PageSchemaProps {
  pageName: string
  pageUrl: string
  faqs?: Array<{ question: string; answer: string }>
}

export function PageSchema({ pageName, pageUrl, faqs }: PageSchemaProps) {
  const graph: object[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goplay11-apk.com" },
        { "@type": "ListItem", "position": 2, "name": pageName, "item": pageUrl },
      ],
    },
  ]

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    })
  }

  const schema = { "@context": "https://schema.org", "@graph": graph }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## FIX 8 — Expand /download Page to 700+ Words

**Problem:** Current /download page has ~80 words — too thin to rank for "goplay 11 apk download".

```typescript
// app/download/page.tsx
export const metadata: Metadata = {
  title: "GoPlay 11 APK Download — Free Install Guide for Android 2026",
  description:
    "Download the GoPlay 11 APK for Android free. Official Go Play 11 install guide — step-by-step setup, system requirements, troubleshooting and FAQs. Get started in 5 minutes.",
  keywords:
    "goplay 11 apk download, goplay11 apk download, go play 11 apk download, goplay 11 download, goplay11 download, go play 11 apk, goplay 11 apk, goplay 11 app download, goplay11 apk latest version",
  alternates: { canonical: "https://goplay11-apk.com/download" },
  openGraph: {
    title: "GoPlay 11 APK Download — Free Install Guide for Android 2026",
    description:
      "Download the GoPlay 11 APK for Android free. Official Go Play 11 install guide — step-by-step setup, system requirements, troubleshooting and FAQs.",
    url: "https://goplay11-apk.com/download",
    type: "website",
    locale: "en_IN",
  },
}
```

```tsx
export default function DownloadPage() {
  return (
    <main>
      <h1>GoPlay 11 APK Download — Free Install Guide for Android (2026)</h1>

      <p>
        This is the official guide for the <strong>GoPlay 11 APK download</strong>.
        Follow the steps below to install the <strong>GoPlay 11 app</strong> on any
        Android device in under five minutes. All downloads from this page are from
        the official source — safe, verified, and up to date.
      </p>

      {/* PRIMARY DOWNLOAD BUTTON */}
      <a href="YOUR_APK_DIRECT_LINK" rel="noopener noreferrer">
        Download GoPlay 11 APK — Free
      </a>

      {/* APK INFO TABLE */}
      <section>
        <h2>GoPlay 11 APK Details</h2>
        <table>
          <tbody>
            <tr><td><strong>App Name</strong></td><td>GoPlay 11 (GoPlay11)</td></tr>
            <tr><td><strong>Also Known As</strong></td><td>Go Play 11, GoPlay 11 App</td></tr>
            <tr><td><strong>Platform</strong></td><td>Android</td></tr>
            <tr><td><strong>Minimum Android</strong></td><td>5.0 (Lollipop) and above</td></tr>
            <tr><td><strong>Category</strong></td><td>Fantasy Cricket / Sports Gaming</td></tr>
            <tr><td><strong>File Type</strong></td><td>APK</td></tr>
            <tr><td><strong>Price</strong></td><td>Free to download</td></tr>
            <tr><td><strong>Last Updated</strong></td><td>2026</td></tr>
            <tr><td><strong>Available On</strong></td><td>Android only (not on Play Store)</td></tr>
          </tbody>
        </table>
      </section>

      {/* STEP BY STEP */}
      <section>
        <h2>How to Download and Install GoPlay 11 — Step by Step</h2>

        <h3>Step 1 — Tap the Official Download Button</h3>
        <p>
          Click the "Download GoPlay 11 APK" button above. The{" "}
          <strong>GoPlay 11 APK</strong> file saves directly to your Android
          device's Downloads folder. Always download from this official page —
          third-party APK mirrors may serve outdated or modified versions of
          the <strong>Go Play 11</strong> app.
        </p>

        <h3>Step 2 — Enable Unknown Sources</h3>
        <p>
          Because the <strong>GoPlay 11 app</strong> is not available on Google
          Play Store, you need to allow installation from outside the store.
        </p>
        <ul>
          <li>
            <strong>Android 7 and below:</strong> Settings → Security →
            Unknown Sources → toggle ON.
          </li>
          <li>
            <strong>Android 8 and above:</strong> Settings → Apps → Special
            App Access → Install Unknown Apps → select your browser → Allow.
          </li>
        </ul>
        <p>This one-time step is required for all APK installs outside the Play Store.</p>

        <h3>Step 3 — Open the GoPlay 11 APK File</h3>
        <p>
          Open your Downloads folder or tap the completed download notification.
          Find the <strong>GoPlay11 APK</strong> file and tap it to begin
          installation. A permissions screen will appear — review the requested
          permissions and proceed.
        </p>

        <h3>Step 4 — Install and Launch</h3>
        <p>
          Tap <strong>Install</strong> and wait. Installation takes under 60
          seconds on most devices. The <strong>GoPlay 11</strong> icon appears
          on your home screen once complete.
        </p>

        <h3>Step 5 — Register and Start Playing</h3>
        <p>
          Open the <strong>GoPlay 11 app</strong>, tap Register, enter your
          mobile number, and verify via OTP. Browse upcoming cricket matches,
          create your dream team within budget, join a contest, and start
          earning based on real match performance.
        </p>
      </section>

      {/* SECOND CTA */}
      <a href="YOUR_APK_DIRECT_LINK" rel="noopener noreferrer">
        Download GoPlay 11 APK Now — Free
      </a>

      {/* TROUBLESHOOTING */}
      <section>
        <h2>GoPlay 11 APK Download Troubleshooting</h2>

        <h3>Installation Blocked by Android</h3>
        <p>
          Unknown Sources may not be enabled for the correct app. On Android 8+,
          each browser needs to be enabled separately. Go to Settings → Apps →
          Special App Access → Install Unknown Apps → select your browser (e.g.
          Chrome) → Allow. Then retry the installation.
        </p>

        <h3>Parse Error During Install</h3>
        <p>
          This means the <strong>GoPlay 11 APK</strong> file was corrupted during
          download. Delete the file, clear browser cache (Settings → Privacy →
          Clear Browsing Data), and re-download from this page.
        </p>

        <h3>GoPlay 11 App Not Opening</h3>
        <p>
          Check your Android version is 5.0 or above (Settings → About Phone →
          Android Version). Restart your device and try opening the{" "}
          <strong>Go Play 11</strong> app again. If the issue persists, uninstall
          and reinstall from a fresh download.
        </p>

        <h3>Not Enough Storage</h3>
        <p>
          Free at least 100MB of storage space before downloading the{" "}
          <strong>GoPlay11 APK</strong>. Go to Settings → Storage to check
          and clear space.
        </p>

        <h3>Download Not Starting</h3>
        <p>
          Disable any VPN or browser ad-blocker and reload this page. Try an
          alternative browser if the issue continues (e.g. switch from Chrome
          to Firefox or Samsung Internet).
        </p>

        <h3>App Crashes After Install</h3>
        <p>
          Uninstall the <strong>GoPlay 11 app</strong>, restart your device,
          and reinstall using a fresh <strong>GoPlay 11 APK</strong> download
          from this page. Avoid installing over a previously corrupted version.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2>GoPlay 11 APK Download — FAQs</h2>

        <h3>Is the GoPlay 11 APK download free?</h3>
        <p>
          Yes. The <strong>GoPlay 11 app download</strong> from this official
          page is completely free. No payment is needed to download or install.
        </p>

        <h3>Is the GoPlay 11 APK safe?</h3>
        <p>
          Yes, when downloaded from goplay11-apk.com. The official{" "}
          <strong>GoPlay 11 APK</strong> is not modified or tampered. Always
          download from this page — never from third-party mirrors.
        </p>

        <h3>Does GoPlay 11 work on iOS?</h3>
        <p>
          The <strong>GoPlay 11 app</strong> is for Android only. There is no
          iOS version at this time.
        </p>

        <h3>Which Android version is required for GoPlay 11?</h3>
        <p>
          The <strong>GoPlay11 APK</strong> requires Android 5.0 or above. It
          runs on most smartphones released after 2017.
        </p>

        <h3>How do I update GoPlay 11?</h3>
        <p>
          Return to this page and download the latest{" "}
          <strong>GoPlay 11 APK</strong>. Install it over your existing app —
          your account, balance, and team history are preserved.
        </p>

        <h3>Can I use GoPlay 11 without depositing money?</h3>
        <p>
          Yes. <strong>GoPlay 11</strong> offers free contests that do not
          require a deposit. You can practice and win rewards without spending.
          Paid contests require a deposit for higher prize pools.
        </p>

        <h3>What is the difference between GoPlay 11 and GoPlay11?</h3>
        <p>
          They are the same app — "GoPlay 11", "GoPlay11", and "Go Play 11"
          are all names for the same fantasy cricket platform. Download the
          official <strong>GoPlay11 APK</strong> from goplay11-apk.com.
        </p>
      </section>

      {/* RELATED LINKS */}
      <nav aria-label="Related pages">
        <ul>
          <li><a href="/login-register">GoPlay 11 Login &amp; Register</a></li>
          <li><a href="/referral-code">GoPlay 11 Referral Code</a></li>
          <li><a href="/how-to-play">How to Play GoPlay 11</a></li>
          <li><a href="/responsible-play">Responsible Play</a></li>
          <li><a href="/blog">GoPlay 11 Guides &amp; Tips</a></li>
        </ul>
      </nav>
    </main>
  )
}
```

### Add download page schema

```tsx
// Add this JSON-LD inside /download page
const downloadSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "GoPlay 11",
      "alternateName": ["GoPlay11", "Go Play 11"],
      "operatingSystem": "Android",
      "applicationCategory": "SportsApplication",
      "downloadUrl": "https://goplay11-apk.com/download",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the GoPlay 11 APK download free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. GoPlay 11 APK download from goplay11-apk.com is completely free.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Android version does GoPlay 11 require?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GoPlay 11 requires Android 5.0 or above.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goplay11-apk.com" },
        { "@type": "ListItem", "position": 2, "name": "Download GoPlay 11 APK", "item": "https://goplay11-apk.com/download" },
      ],
    },
  ],
}
```

---

## FIX 9 — Fix All Truncated og:title on Blog Posts

**Problem:** Blog post og:title is cut off mid-sentence: "GoPlay11 APK Cricket Fantasy: Complete Guide to..."

### Rule
Every og:title must be:
- Complete — never end with "..."
- Under 60 characters for title tag
- Under 70 characters for og:title (slightly more lenient)

### Fix in generateMetadata for every blog post

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.seoTitle || `${post.title} | GoPlay 11`,   // max 60 chars
    description: post.description,                          // max 155 chars
    alternates: {
      canonical: `https://goplay11-apk.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.ogTitle || post.seoTitle,  // complete sentence, max 70 chars
      description: post.description,
      url: `https://goplay11-apk.com/blog/${params.slug}`,
      type: "article",
      locale: "en_IN",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["https://goplay11-apk.com/about"],
    },
  }
}
```

### Fixed titles for existing posts

| Current (truncated) | Fixed og:title (complete) |
|--------------------|-----------------------------|
| "GoPlay11 APK Cricket Fantasy: Complete Guide to..." | "GoPlay11 Fantasy Cricket: Complete APK Guide 2026" |
| "Fantasy Cricket Scoring System Explained..." | "Fantasy Cricket Scoring System — Full Guide 2026" |
| "Fantasy Cricket Bankroll Management Guide..." | "GoPlay 11 Bankroll Management Guide for Players" |

---

## FIX 10 — Unique Meta Descriptions Per Page

### All page meta descriptions — use exactly

```typescript
// Homepage
description: "Download the GoPlay 11 app for Android. Get the official GoPlay 11 APK, join fantasy cricket contests, and win real cash. Free Go Play 11 APK download — install in minutes."

// /download
description: "Download the GoPlay 11 APK for Android free. Official Go Play 11 install guide — step-by-step setup, system requirements, troubleshooting and FAQs. Get started in 5 minutes."

// /goplay11-app (or /app page)
description: "Everything about the GoPlay 11 app — features, how to download the GoPlay11 APK, account setup, and first contest guide. Your complete Go Play 11 reference for 2026."

// /goplay11-fantasy-app
description: "GoPlay 11 is India's fantasy cricket app. Download GoPlay11, create your dream team, join IPL contests, and win real cash. Official GoPlay 11 fantasy app guide."

// /goplay11-apk (separate APK info page)
description: "GoPlay11 APK information — file details, version history, and safe download guide. Get the latest Go Play 11 APK from the official goplay11-apk.com page."

// /how-to-play
description: "Learn how to play GoPlay 11 fantasy cricket. Step-by-step guide to creating teams, joining contests, scoring points, and winning real cash on the GoPlay 11 app."

// /referral-code
description: "GoPlay 11 referral code 2026 — share your code, earn bonus cash for every friend who joins. How to find your GoPlay11 referral code and maximise your earnings."

// /login-register
description: "GoPlay 11 login and registration guide 2026. How to sign in to your GoPlay11 account, create a new account, and fix common login errors. Step-by-step with tips."

// /responsible-play
description: "GoPlay 11 responsible play guidelines. Understand the risks of fantasy gaming, set spending limits, and play safely on the GoPlay 11 app. 18+ only."

// /blog
description: "GoPlay 11 guides, tips, and strategies. Download guides, team selection tips, referral programs, withdrawal help, and IPL fantasy cricket advice for 2026."
```

### Blog post meta descriptions

```typescript
// Complete guide post
description: "Complete guide to GoPlay 11 APK download and fantasy cricket setup. Step-by-step install, account registration, team creation tips, and first contest strategy."

// Scoring system post
description: "How GoPlay 11 fantasy cricket scoring works. Points for runs, wickets, catches, and more — explained with examples. Maximise your GoPlay11 score in every match."

// Bankroll management post
description: "GoPlay 11 bankroll management guide for fantasy cricket players. How to budget your contests, manage wins and losses, and grow your GoPlay11 account sustainably."

// Team selection tips post
description: "GoPlay 11 team selection tips 2026. How to pick the best 11 players, use captain and vice-captain wisely, and win more contests on the GoPlay 11 fantasy app."
```

---

## FIX 11 — Focused Meta Keywords Per Page

```typescript
// Homepage
keywords: "goplay 11, goplay11, go play 11, goplay 11 app, goplay 11 apk, goplay 11 apk download, go play 11 apk download, goplay 11 download, goplay11 fantasy app, goplay 11 fantasy cricket"

// /download
keywords: "goplay 11 apk download, goplay11 apk download, go play 11 apk download, goplay 11 download, goplay11 download, go play 11 apk, goplay 11 apk, goplay 11 app download, goplay11 apk latest version, goplay 11 apk free download"

// /login-register
keywords: "goplay 11 login, goplay11 login, go play 11 login, goplay 11 register, goplay11 sign up, goplay 11 app login, goplay11 login problem, go play 11 account"

// /referral-code
keywords: "goplay 11 referral code, goplay11 referral code, go play 11 referral code 2026, goplay 11 refer and earn, goplay11 bonus code, goplay 11 invite code"

// /how-to-play
keywords: "how to play goplay 11, goplay11 fantasy cricket guide, go play 11 team selection, goplay 11 points system, goplay11 contest guide, goplay 11 for beginners"

// /blog
keywords: "goplay 11 tips, goplay11 strategies, go play 11 winning tips, goplay 11 team tips, goplay11 fantasy cricket guide, goplay 11 blog"
```

---

## FIX 12 — Consolidate Overlapping Download Pages

**Problem:** The site has multiple pages that all target download-related keywords — /download, /goplay11-app-download, /goplay11-fantasy-app, /goplay11-apk — causing Google to split ranking signals instead of concentrating them.

### Step 1 — Decide the one canonical download page

**Keep:** `/download` — this is your primary download landing page.

### Step 2 — Update other pages to serve distinct purposes

| Page | New Purpose | New Focus Keyword |
|------|------------|-------------------|
| /download | Primary download guide (700+ words) | goplay 11 apk download |
| /goplay11-app | App overview and features | goplay 11 app |
| /goplay11-fantasy-app | Fantasy cricket platform overview | goplay 11 fantasy app |
| /goplay11-apk | APK technical details / version info | goplay11 apk |

Each page must have **genuinely different content** — not the same install steps repeated.

### Step 3 — Add 301 redirects if pages are truly duplicate

```typescript
// next.config.ts
async redirects() {
  return [
    // Only add these if the pages are genuinely duplicate content:
    // {
    //   source: "/goplay11-app-download",
    //   destination: "/download",
    //   permanent: true,
    // },
  ]
}
```

### Step 4 — Make sure each remaining page links to /download as the primary action

```tsx
// On /goplay11-app and /goplay11-fantasy-app pages:
<a href="/download">
  Download GoPlay 11 APK — Free
</a>
```

---

## FIX 13 — Separate Habet Blog Posts from GoPlay11 Content

**Problem:** The blog listing shows Habet-related posts first, diluting GoPlay11 topical authority.

### Option A — Move Habet posts to a subdomain (best for SEO)

```
habet.goplay11-apk.com/blog/[slug]
```

Add 301 redirects from old Habet post URLs to the new subdomain:
```typescript
{
  source: "/blog/:slug(.*habet.*)",
  destination: "https://habet.goplay11-apk.com/blog/:slug",
  permanent: true,
}
```

### Option B — Separate category with GoPlay11 posts shown first (minimum fix)

If you cannot move the posts, at minimum:

1. Add a category system: `category: "goplay11"` or `category: "habet"` on each post
2. On the `/blog` index page, default sort to show `category: "goplay11"` posts first
3. Add a filter UI: "GoPlay11 Guides" | "All Posts"

```typescript
// In blog index page data fetching:
const goplay11Posts = posts
  .filter((p) => p.category === "goplay11")
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

// Show GoPlay11 posts first, then others
const orderedPosts = [
  ...goplay11Posts,
  ...posts.filter((p) => p.category !== "goplay11"),
]
```

4. Update blog page metadata to reinforce GoPlay11 focus:

```typescript
// app/blog/page.tsx
export const metadata: Metadata = {
  title: "GoPlay 11 Blog — Fantasy Cricket Guides & Tips | GoPlay11",
  description:
    "GoPlay 11 guides, tips, and strategies. Download guides, team selection tips, referral programs, withdrawal help, and IPL fantasy cricket advice for 2026.",
  alternates: { canonical: "https://goplay11-apk.com/blog" },
}
```

---

## FIX 14 — Create /about Page

**Problem:** No About page in navigation. Critical E-E-A-T signal for any real-money gaming platform (YMYL category).

```typescript
// app/about/page.tsx
export const metadata: Metadata = {
  title: "About GoPlay11 APK — Official GoPlay 11 Resource Site",
  description:
    "About goplay11-apk.com — your trusted guide to GoPlay 11 APK download, fantasy cricket tips, and responsible play. Who we are and how we create content.",
  alternates: { canonical: "https://goplay11-apk.com/about" },
}
```

**Page content must include:**
- Who runs the site and why
- Editorial mission and content standards
- How content is written and reviewed (reference your named authors)
- Responsible gaming commitment
- Contact information
- Link to disclaimer / responsible play pages

```tsx
// Add /about to main navigation:
<a href="/about">About</a>
```

---

## FIX 15 — Fix og:image to 1200×630px

**Problem:** All pages share the same OG image. No page-specific previews. Image dimensions unverified for social sharing standards.

1. Create a 1200×630px image: `goplay11-social.jpg`
2. Save to `/public/goplay11-social.jpg`
3. Keep under 300KB (use tinyjpg.com or squoosh.app)
4. Content: GoPlay11 logo + "Download GoPlay 11 APK — Fantasy Cricket" text

```typescript
// Update in all page metadata:
openGraph: {
  images: [
    {
      url: "/goplay11-social.jpg",
      width: 1200,
      height: 630,
      alt: "GoPlay 11 App — Download Free APK for Fantasy Cricket",
    },
  ],
},
twitter: {
  images: ["/goplay11-social.jpg"],
},
```

**Create unique OG images for at minimum:**
- Homepage: brand + "Download GoPlay 11 APK"
- /download: "GoPlay 11 APK Download — Free for Android"
- Each blog post category: "GoPlay 11 Cricket Tips" / "GoPlay 11 Guide"

---

## FIX 16 — Sitemap + robots.txt

### `app/sitemap.ts`

```typescript
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://goplay11-apk.com"
  const now = new Date()

  const staticPages = [
    { url: base,                              priority: 1.0, freq: "weekly"  },
    { url: `${base}/download`,               priority: 0.95, freq: "monthly" },
    { url: `${base}/goplay11-app`,           priority: 0.85, freq: "monthly" },
    { url: `${base}/goplay11-fantasy-app`,   priority: 0.8,  freq: "monthly" },
    { url: `${base}/goplay11-apk`,           priority: 0.8,  freq: "monthly" },
    { url: `${base}/how-to-play`,            priority: 0.8,  freq: "monthly" },
    { url: `${base}/referral-code`,          priority: 0.75, freq: "weekly"  },
    { url: `${base}/login-register`,         priority: 0.75, freq: "monthly" },
    { url: `${base}/responsible-play`,       priority: 0.5,  freq: "yearly"  },
    { url: `${base}/about`,                  priority: 0.5,  freq: "yearly"  },
    { url: `${base}/blog`,                   priority: 0.85, freq: "daily"   },
    { url: `${base}/contact`,                priority: 0.4,  freq: "yearly"  },
  ]

  // Add all blog post slugs here — update whenever new posts are published
  const blogSlugs = [
    "goplay-11-apk-cricket-fantasy-complete-guide",
    "fantasy-cricket-scoring-system-explained",
    "fantasy-cricket-scoring-system-guide-2026",
    "fantasy-cricket-bankroll-management-guide",
    "fantasy-cricket-bankroll-management-complete-guide-2026",
    // ADD NEW SLUGS HERE as you publish new posts
  ]

  return [
    ...staticPages.map(({ url, priority, freq }) => ({
      url,
      lastModified: now,
      changeFrequency: freq as MetadataRoute.Sitemap[0]["changeFrequency"],
      priority,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
```

### `app/robots.ts`

```typescript
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://goplay11-apk.com/sitemap.xml",
  }
}
```

### Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → `https://goplay11-apk.com`
3. Verify ownership via DNS TXT record
4. Sitemaps → enter `sitemap.xml` → Submit
5. Check Coverage report weekly

---

## FIX 17 — Expand Inner Pages

### /login-register — new metadata + content structure

```typescript
export const metadata: Metadata = {
  title: "GoPlay 11 Login & Register — Sign In to GoPlay11 App 2026",
  description:
    "Complete GoPlay 11 login and registration guide 2026. How to sign in to GoPlay11, create an account, and fix common login errors. Get started in 2 minutes.",
  keywords:
    "goplay 11 login, goplay11 login, go play 11 login, goplay 11 register, goplay11 sign up, goplay 11 login problem, go play 11 account login",
  alternates: { canonical: "https://goplay11-apk.com/login-register" },
}
```

**Must include (500+ words):**
- H1: GoPlay 11 Login — How to Sign In to Your GoPlay11 Account
- H2: How to Create a New GoPlay 11 Account
- H2: Step-by-Step GoPlay 11 Login Guide
- H2: GoPlay 11 Login Troubleshooting
- H2: Frequently Asked Questions (with FAQPage schema)
- Internal links to /download and /referral-code

### /referral-code — new metadata + content structure

```typescript
export const metadata: Metadata = {
  title: "GoPlay 11 Referral Code 2026 — Refer & Earn on GoPlay11",
  description:
    "GoPlay 11 referral code 2026. Share your code, earn bonus cash for every friend who joins GoPlay11 and plays a paid contest. How to refer and maximise your earnings.",
  keywords:
    "goplay 11 referral code, goplay11 referral code, go play 11 referral code 2026, goplay 11 refer and earn, goplay11 bonus code, goplay11 invite a friend",
  alternates: { canonical: "https://goplay11-apk.com/referral-code" },
}
```

**Must include (500+ words):**
- H1: GoPlay 11 Referral Code 2026 — Earn With Every Invite
- H2: How the GoPlay 11 Referral Program Works
- H2: Where to Find Your GoPlay11 Referral Code
- H2: How Much Can You Earn From GoPlay 11 Referrals?
- H2: Tips to Maximise Your GoPlay 11 Referral Income
- H2: Frequently Asked Questions (with FAQPage schema)

### /how-to-play — new metadata + content structure

```typescript
export const metadata: Metadata = {
  title: "How to Play GoPlay 11 — Fantasy Cricket Guide for Beginners",
  description:
    "Learn how to play GoPlay 11 fantasy cricket. Create your dream team, join contests, score points, and win real cash. Complete step-by-step GoPlay11 beginner guide.",
  keywords:
    "how to play goplay 11, goplay11 fantasy cricket how to, go play 11 team selection guide, goplay 11 points system, goplay11 contest guide, goplay 11 for beginners",
  alternates: { canonical: "https://goplay11-apk.com/how-to-play" },
}
```

**Must include (600+ words):**
- H1: How to Play GoPlay 11 Fantasy Cricket — Complete Beginner Guide
- H2: Understanding the GoPlay 11 Points System
- H2: How to Select Your GoPlay 11 Team
- H2: Captain and Vice-Captain — How They Work on GoPlay 11
- H2: Contest Types on GoPlay 11
- H2: How GoPlay11 Winnings Are Calculated
- H2: Tips for New GoPlay 11 Players
- H2: Frequently Asked Questions (with FAQPage schema)

---

## FIX 18 — Partner Platform Links (Footer)

Ensure footer links to your other platforms are clearly labelled and use `rel="noopener"`:

```tsx
// Footer component — replace generic "Recommended Platform" with labelled links:
<footer>
  <nav aria-label="Our platforms">
    <p><strong>Our platforms:</strong></p>
    <ul>
      <li><a href="https://ak7x.games/" rel="noopener">ak7x App — Mobile Gaming</a></li>
      <li><a href="https://habetapk.com/" rel="noopener">Habet App — Sports Betting</a></li>
      <li><a href="https://www.dhan7.xyz/" rel="noopener">Dhan 7 App — Real Money Gaming</a></li>
      <li><a href="https://ak7-apk.com/" rel="noopener">AK7 APK — Gaming App</a></li>
    </ul>
  </nav>
</footer>
```

Also add an internal link to goplay11-apk.com from each of these platforms using
anchor text like "GoPlay11 fantasy cricket" or "GoPlay 11 APK download".

---

## FIX 19 — Blog Content Plan (60-Day Schedule)

**Current:** ~19 posts (some about Habet — separate those)
**Target:** 35+ GoPlay11-specific posts in 60 days

Publish 3 new GoPlay11 posts per week. Every post must target at least one keyword from the master list.

### Week 1 — Core keyword posts

| Title | Target Keywords | Slug |
|-------|----------------|------|
| GoPlay 11 Review 2026 — Is It Safe and Legit? | goplay 11 review, is goplay11 legit | goplay-11-review-2026 |
| GoPlay 11 Referral Code 2026 — Refer and Earn | goplay 11 referral code, goplay11 refer and earn | goplay-11-referral-code-2026 |
| How to Register on GoPlay 11 — Step by Step | goplay11 register, goplay 11 sign up | how-to-register-goplay-11 |

### Week 2 — Download and install posts

| Title | Target Keywords | Slug |
|-------|----------------|------|
| GoPlay 11 APK Download for Android 2026 | goplay 11 apk download, go play 11 apk | goplay-11-apk-download-android-2026 |
| How to Install GoPlay 11 on Any Android Device | how to install goplay 11, goplay11 install guide | how-to-install-goplay-11-android |
| GoPlay 11 vs Dream11 — Which Fantasy App is Better? | goplay 11 vs dream11, goplay11 comparison | goplay-11-vs-dream11-comparison |

### Week 3 — Strategy and tips posts

| Title | Target Keywords | Slug |
|-------|----------------|------|
| GoPlay 11 Winning Tricks — 10 Proven Strategies | goplay 11 winning tips, goplay11 strategies | goplay-11-winning-tricks |
| GoPlay 11 Captain Selection Tips for IPL 2026 | goplay 11 captain tips, goplay11 ipl tips | goplay-11-captain-selection-tips |
| GoPlay 11 Team Prediction Guide — How to Build Winners | goplay 11 team prediction, go play 11 team tips | goplay-11-team-prediction-guide |

### Week 4 — Transaction and account posts

| Title | Target Keywords | Slug |
|-------|----------------|------|
| GoPlay 11 Withdrawal Guide 2026 — Complete Process | goplay11 withdrawal, goplay 11 withdrawal guide | goplay-11-withdrawal-guide-2026 |
| GoPlay 11 Minimum Withdrawal — Everything You Need to Know | goplay11 minimum withdrawal, go play 11 payout | goplay-11-minimum-withdrawal |
| GoPlay 11 Login Problems Solved — 7 Common Errors Fixed | goplay 11 login problem, goplay11 login error | goplay-11-login-problems-solved |

### Week 5 — Trust and informational posts

| Title | Target Keywords | Slug |
|-------|----------------|------|
| Is GoPlay 11 Real or Fake? Honest Answer 2026 | goplay 11 real or fake, is goplay11 legit | is-goplay-11-real-or-fake |
| Is GoPlay 11 Legal in India? | is goplay 11 legal india, goplay11 legal | is-goplay-11-legal-india |
| GoPlay 11 Customer Care — How to Get Support Fast | goplay 11 customer care, goplay11 support | goplay-11-customer-care-guide |

### Week 6 — Game-specific posts

| Title | Target Keywords | Slug |
|-------|----------------|------|
| GoPlay 11 IPL 2026 Fantasy Guide — Win Big This Season | goplay 11 ipl, goplay11 ipl fantasy | goplay-11-ipl-2026-fantasy-guide |
| GoPlay 11 Scoring System Explained — Full Points Guide | goplay11 scoring system, go play 11 points | goplay-11-scoring-system-full-guide |
| GoPlay 11 Bonus Guide — How to Claim Every Reward | goplay 11 bonus, goplay11 bonus claim | goplay-11-bonus-guide |

### Week 7–8 — Hindi-intent posts (massive volume in India)

| Title | Target Keywords | Slug |
|-------|----------------|------|
| GoPlay 11 App Kaise Download Kare — Step by Step | goplay 11 app kaise download kare | goplay-11-app-kaise-download-kare |
| GoPlay 11 Se Paise Kaise Kamaye — Complete Guide | goplay11 se paise kaise kamaye | goplay-11-se-paise-kaise-kamaye |
| GoPlay 11 Mein Team Kaise Banaye | goplay 11 team kaise banaye | goplay-11-mein-team-kaise-banaye |
| GoPlay 11 Withdrawal Kaise Kare 2026 | goplay11 withdrawal kaise kare | goplay-11-withdrawal-kaise-kare |

---

## Blog Post Template — Apply to Every New Post

```tsx
// generateMetadata pattern for every new post
export async function generateMetadata({ params }) {
  return {
    title: "[Post Title] | GoPlay 11",           // max 60 chars
    description: "[Unique plain text, 140-155 chars]",
    keywords: "[8-10 focused keywords for this specific post]",
    alternates: {
      canonical: `https://goplay11-apk.com/blog/${params.slug}`,
    },
    openGraph: {
      title: "[Post Title — complete, no truncation]",
      description: "[Same as description]",
      url: `https://goplay11-apk.com/blog/${params.slug}`,
      type: "article",
      locale: "en_IN",
      publishedTime: "2026-XX-XX",
      modifiedTime: "2026-XX-XX",
      authors: ["https://goplay11-apk.com/about"],
      images: [{ url: "/goplay11-social.jpg", width: 1200, height: 630 }],
    },
  }
}
```

**Every post must include:**
- [ ] Named author with bio (Rohan Mehta / Ananya Kulkarni — already in use, keep consistent)
- [ ] Published + updated date displayed on page
- [ ] Canonical tag pointing to correct slug
- [ ] BlogSchema component (Article + BreadcrumbList + FAQPage if FAQ section)
- [ ] Unique meta description — no markdown, 140–155 chars
- [ ] Internal link to /download in first 200 words
- [ ] Internal link to at least 2 other site pages
- [ ] Disclaimer block at post footer
- [ ] Minimum 700 words of original, helpful content
- [ ] At least one target keyword in H1, H2, and first paragraph
- [ ] Added to sitemap.ts immediately after publishing

---

## Homepage Body Content — Add 400+ Words

Add these sections **below the existing hero and features content**:

```tsx
<section>
  <h2>How to Download GoPlay 11 APK</h2>
  <p>
    Getting the <strong>GoPlay 11 APK download</strong> takes under five
    minutes on any Android device. Visit the{" "}
    <a href="/download">official GoPlay 11 download page</a>, tap the download
    button, enable Unknown Sources in your Android settings, and install the
    file. The <strong>GoPlay 11 app</strong> is free and compatible with
    Android 5.0 and above. Once installed, register with your mobile number
    and you are ready to join your first contest immediately.
  </p>
  <p>
    Whether you are looking for <strong>GoPlay11</strong>,{" "}
    <strong>Go Play 11</strong>, or the <strong>GoPlay 11 APK</strong>, this
    is the official source. Download only from this page to ensure you get the
    authentic, safe, up-to-date version.
  </p>
</section>

<section>
  <h2>What is GoPlay 11?</h2>
  <p>
    <strong>GoPlay 11</strong> — also written as GoPlay11 or Go Play 11 — is a
    fantasy cricket platform for Android users in India. Players select 11
    cricketers from real upcoming matches within a budget, join paid or free
    contests, and earn points based on those players' actual match performances.
    The higher your points total, the higher your contest rank and cash reward.
  </p>
  <p>
    The <strong>GoPlay 11 app</strong> supports fantasy cricket, football, and
    kabaddi — with cricket as the main offering, especially during IPL season.
    Contests range from one-on-one head-to-head battles to mega leagues with
    prize pools worth lakhs. Free contests are available for players who want
    to practice without spending.
  </p>
</section>

<section>
  <h2>Why Choose the GoPlay 11 App?</h2>
  <ul>
    <li>
      <strong>Real cash contests:</strong> Win real money based on your
      cricket knowledge — not luck. The <strong>GoPlay 11 APK</strong> puts
      skill at the centre of every contest.
    </li>
    <li>
      <strong>Free contests available:</strong> Practice and win without
      depositing. The <strong>GoPlay 11 app</strong> offers free entry contests
      for every match.
    </li>
    <li>
      <strong>Fast withdrawals:</strong> GoPlay11 processes payouts quickly via
      UPI and bank transfer. Your winnings reach you without delays.
    </li>
    <li>
      <strong>Referral earnings:</strong> Share your{" "}
      <a href="/referral-code">GoPlay 11 referral code</a> and earn bonus cash
      for every friend who joins and plays a paid contest.
    </li>
    <li>
      <strong>Multiple sports:</strong> Beyond cricket, the{" "}
      <strong>Go Play 11</strong> app supports football and kabaddi contests.
    </li>
    <li>
      <strong>Safe Android APK:</strong> The official{" "}
      <strong>GoPlay 11 APK</strong> from goplay11-apk.com is the verified,
      unmodified version — safe to install on any Android device.
    </li>
  </ul>
</section>

<section>
  <h2>GoPlay 11 Fantasy Cricket — How It Works</h2>
  <ol>
    <li>
      <strong>Download the GoPlay 11 APK</strong> from goplay11-apk.com and
      register with your mobile number.
    </li>
    <li>
      <strong>Pick a match</strong> — browse upcoming cricket fixtures in the
      GoPlay 11 app and select one to build your team for.
    </li>
    <li>
      <strong>Create your team</strong> — select 11 players (batters, bowlers,
      all-rounders, a wicketkeeper) within your credit budget. Pick a captain
      (2× points) and vice-captain (1.5× points) wisely.
    </li>
    <li>
      <strong>Join a contest</strong> — enter free or paid contests. The more
      competitive the contest, the larger the prize pool.
    </li>
    <li>
      <strong>Watch and win</strong> — your GoPlay 11 team earns points in
      real time as the match is played. See your rank update live and withdraw
      your winnings when the match ends.
    </li>
  </ol>
  <p>
    Read the full <a href="/how-to-play">GoPlay 11 how to play guide</a> for
    team selection strategies, points breakdown, and beginner tips.
  </p>
</section>

<section>
  <h2>Frequently Asked Questions</h2>

  <h3>What is the difference between GoPlay 11 and GoPlay11?</h3>
  <p>
    They are the same app. "GoPlay 11", "GoPlay11", and "Go Play 11" are all
    names for the same fantasy cricket platform. Download the{" "}
    <a href="/download">official GoPlay 11 APK</a> from goplay11-apk.com.
  </p>

  <h3>How do I download GoPlay 11 APK?</h3>
  <p>
    Go to the <a href="/download">download page</a>, tap Download, enable
    Unknown Sources in Android settings, and install the file. Done in under
    5 minutes.
  </p>

  <h3>Is GoPlay 11 free?</h3>
  <p>
    The <strong>GoPlay 11 APK</strong> is free to download. Free contests
    require no deposit. Paid contests require a small entry fee to win larger
    prize pools.
  </p>

  <h3>Is GoPlay 11 safe?</h3>
  <p>
    Yes. Download the <strong>GoPlay 11 APK</strong> only from the official
    goplay11-apk.com page. Never use third-party APK mirrors.
  </p>

  <h3>How do I find my GoPlay 11 referral code?</h3>
  <p>
    Open the GoPlay 11 app → go to the Refer &amp; Earn section → your
    personal referral code is displayed there. Share it to earn bonus cash
    for every successful referral.
  </p>
</section>
```

---

## Verification Checklist

Run through every item after all fixes are deployed:

```
DUPLICATE SLUGS
[ ] Run: find all blog slugs — no two posts share the same slug
[ ] Both "scoring system" posts have unique URLs
[ ] Both "bankroll management" posts have unique URLs

HOMEPAGE
[ ] Title: "GoPlay 11 — Download GoPlay 11 APK | Go Play 11 App"
[ ] H1: contains "GoPlay 11" and "GoPlay 11 App" and "GoPlay 11 APK"
[ ] Meta description: 140-158 chars, no markdown, contains "Go Play 11 APK download"
[ ] og:locale: en_IN (check View Source)
[ ] Body: 400+ words added below hero
[ ] FAQ section with 5+ questions on page
[ ] JSON-LD present: View Source → search "application/ld+json"
[ ] SoftwareApplication, FAQPage, WebSite all in schema

DOWNLOAD PAGE
[ ] H1: "GoPlay 11 APK Download" + "Android"
[ ] Body: 700+ words
[ ] APK details table present
[ ] 5-step install guide present
[ ] Troubleshooting section with 6 issues
[ ] FAQ section with 7+ questions
[ ] Schema: SoftwareApplication + FAQPage + BreadcrumbList

BLOG POSTS
[ ] Every post has a complete, non-truncated og:title
[ ] Every post has a unique meta description (check 5 posts)
[ ] Every post has canonical tag: https://goplay11-apk.com/blog/[slug]
[ ] BlogSchema component renders on every post (View Source)
[ ] Named author displayed on every post
[ ] No two posts share the same slug

INNER PAGES (/login-register, /referral-code, /how-to-play)
[ ] Each page has 500+ words of content
[ ] Each has unique, non-duplicate meta description
[ ] Each has PageSchema component with BreadcrumbList + FAQPage schema
[ ] Each has focused, page-specific meta keywords

ABOUT PAGE
[ ] /about page exists and loads
[ ] /about is in main navigation
[ ] Includes author/team info, editorial policy, contact, responsible gaming

OG IMAGE
[ ] /goplay11-social.jpg exists in /public at 1200×630px
[ ] All og:image references updated to /goplay11-social.jpg

SITEMAP AND ROBOTS
[ ] https://goplay11-apk.com/sitemap.xml loads and lists all pages
[ ] https://goplay11-apk.com/robots.txt loads and references sitemap
[ ] Sitemap submitted to Google Search Console
[ ] 0 coverage errors in Search Console

SCHEMA VALIDATION
[ ] Test homepage: https://search.google.com/test/rich-results
[ ] Test /download page: same tool
[ ] Test any blog post: same tool
[ ] SoftwareApplication + FAQPage detected on homepage and download page
[ ] Article + BreadcrumbList detected on blog posts

BROKEN LINKS
[ ] Run: npx broken-link-checker https://goplay11-apk.com -ro
[ ] 0 broken internal links
[ ] All cross-platform footer links working
```

---

## Post-Launch Actions

1. **Request Google indexing immediately** after deploying each fix — go to Google Search Console → URL Inspection for: homepage, /download, all blog posts → Request Indexing.

2. **Monitor weekly in Search Console** — Performance → Queries. Watch for "goplay 11", "go play 11", "goplay 11 apk download", "goplay11 apk". Expect first impressions within 7–14 days.

3. **Cross-link from your network** — add links to goplay11-apk.com from:
   - ak7x.games: "Try GoPlay 11 for fantasy cricket"
   - dhan7.xyz: "Play fantasy cricket with GoPlay 11"
   - habetapk.com: "Download GoPlay 11 APK for cricket"
   Use anchor text "GoPlay 11 app", "GoPlay 11 APK", or "Go Play 11 APK download".

4. **Build external backlinks** — post on:
   - Quora: answer "Which is the best fantasy cricket app?" with genuine comparison
   - Reddit: r/IndiaGaming, r/CricketFantasy with helpful GoPlay 11 content
   - Cricket Telegram/WhatsApp groups: share your team prediction blog posts

5. **IPL season content burst** — publish 5–7 IPL-specific GoPlay11 posts right before and during IPL matches. Seasonal keywords like "goplay 11 ipl team today" spike massively and rank fast with fresh content.

6. **Add new blog post slugs to sitemap.ts** every time you publish — and redeploy. This ensures Google discovers new content within days, not weeks.
