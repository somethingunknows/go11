import type { Metadata } from "next";

import {
  AFFILIATE_LINK,
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LOGO_PATH,
  LONG_TAIL_KEYWORDS,
  PRIMARY_KEYWORDS,
  SOCIAL_PREVIEW_PATH,
  SOCIAL_PROFILE_LINKS,
  SECONDARY_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  type FaqItem,
} from "@/lib/site";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  canonicalPath?: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  noIndex?: boolean;
  ogTitle?: string;
  twitterTitle?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ArticleSchemaOptions = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  reviewerName?: string;
  imagePath?: string;
};

const ALL_KEYWORDS = Array.from(
  new Set([...PRIMARY_KEYWORDS, ...SECONDARY_KEYWORDS, ...LONG_TAIL_KEYWORDS]),
);
const TITLE_MAX_LENGTH = 60;
const DESCRIPTION_MAX_LENGTH = 155;

const ORGANIZATION_ID = `${SITE_URL}#organization`;
const LOCAL_BUSINESS_ID = `${SITE_URL}#local-business`;
const WEBSITE_ID = `${SITE_URL}#website`;

function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${SITE_URL}${path}`;
  }

  return `${SITE_URL}/${path}`;
}

function clampText(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  const maxCoreLength = Math.max(maxLength - 3, 1);
  const core = value.slice(0, maxCoreLength);
  const wordSafe = core.replace(/\s+\S*$/, "").trimEnd();
  const normalizedCore = wordSafe.length >= 24 ? wordSafe : core.trimEnd();
  return `${normalizedCore}...`;
}

function buildLanguageAlternates(url: string) {
  return {
    "en-IN": url,
    "en-US": url,
    "x-default": url,
  };
}

export function buildMetadata(options: MetadataOptions = {}): Metadata {
  const title = clampText(options.title ?? DEFAULT_TITLE, TITLE_MAX_LENGTH);
  const description = clampText(
    options.description ?? DEFAULT_DESCRIPTION,
    DESCRIPTION_MAX_LENGTH,
  );
  const canonicalUrl = absoluteUrl(options.canonicalPath ?? options.path ?? "/");
  const shouldIndex = !(options.noIndex ?? false);
  const keywords = Array.from(new Set([...(options.keywords ?? []), ...ALL_KEYWORDS]));

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(canonicalUrl),
    },
    openGraph: {
      type: options.openGraphType ?? "website",
      url: canonicalUrl,
      title: options.ogTitle ?? title,
      description,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: `${SITE_URL}${SOCIAL_PREVIEW_PATH}`,
          width: 1200,
          height: 630,
          alt: "GoPlay 11 App — Download Free APK for Fantasy Cricket",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: options.twitterTitle ?? title,
      description,
      images: [`${SITE_URL}${SOCIAL_PREVIEW_PATH}`],
    },
    robots: {
      index: shouldIndex,
      follow: true,
      googleBot: {
        index: shouldIndex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildSoftwareApplicationSchema(description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GoPlay11 (Go Play 11) Fantasy App",
    alternateName: ["Go Play 11", "Go Play 11 APK", "GoPlay11 APK"],
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    description,
    url: absoluteUrl(path),
    downloadUrl: AFFILIATE_LINK,
    image: `${SITE_URL}${LOGO_PATH}`,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildArticleSchema(options: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    mainEntityOfPage: absoluteUrl(options.path),
    inLanguage: "en-IN",
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    image: absoluteUrl(options.imagePath ?? SOCIAL_PREVIEW_PATH),
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: options.authorName ?? "GoPlay11 Editorial Team",
    },
    reviewedBy: {
      "@type": "Person",
      name: options.reviewerName ?? "GoPlay11 Content Review Team",
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_PATH}`,
    sameAs: SOCIAL_PROFILE_LINKS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SUPPORT_PHONE,
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${LOGO_PATH}`,
    telephone: SUPPORT_PHONE,
    email: SUPPORT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressRegion: BUSINESS_ADDRESS.addressRegion,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    areaServed: "India",
    parentOrganization: {
      "@id": ORGANIZATION_ID,
    },
    sameAs: SOCIAL_PROFILE_LINKS,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en-IN", "en-US"],
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
