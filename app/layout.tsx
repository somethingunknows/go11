import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { TrackingScripts } from "@/components/tracking-scripts";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LONG_TAIL_KEYWORDS,
  PRIMARY_KEYWORDS,
  SECONDARY_KEYWORDS,
  SOCIAL_PREVIEW_PATH,
  SOCIAL_PROFILES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const GLOBAL_KEYWORDS = Array.from(
  new Set([...PRIMARY_KEYWORDS, ...SECONDARY_KEYWORDS, ...LONG_TAIL_KEYWORDS]),
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | GoPlay11",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: GLOBAL_KEYWORDS,
  authors: [{ name: "GoPlay11 Editorial Team", url: SITE_URL }],
  creator: "GoPlay11 Editorial Team",
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: SOCIAL_PREVIEW_PATH,
        width: 1200,
        height: 630,
        alt: "GoPlay 11 App — Download Free APK for Fantasy Cricket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [SOCIAL_PREVIEW_PATH],
    creator: "@goplay11apk",
  },
  other: {
    "facebook:profile": SOCIAL_PROFILES.facebook,
    "instagram:profile": SOCIAL_PROFILES.instagram,
    "linkedin:profile": SOCIAL_PROFILES.linkedin,
    "youtube:profile": SOCIAL_PROFILES.youtube,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="h-full antialiased">
      <body className="site-body">
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
        <StickyCta />
        <TrackingScripts />
      </body>
    </html>
  );
}
