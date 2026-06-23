import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import {
  AFFILIATE_LINK,
  AFFILIATE_REL,
  BUSINESS_ADDRESS,
  CONTENT_LAST_REVIEWED,
  EXTERNAL_REL,
  GOOGLE_BUSINESS_PROFILE_URL,
  SOCIAL_PROFILES,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
} from "@/lib/site";

const PAGE_TITLE = "Contact and Support - Goplay11 APK Guide";
const PAGE_DESCRIPTION =
  "Need help with Goplay11 app download, install flow, referral setup, or fantasy onboarding? Use this support resource page.";

const SUPPORT_TOPICS = [
  "Download and install troubleshooting",
  "Login/register sequence support",
  "Referral code onboarding flow",
  "Contest preparation and gameplay basics",
];

const SOCIAL_ITEMS = [
  { label: "Facebook", href: SOCIAL_PROFILES.facebook },
  { label: "X", href: SOCIAL_PROFILES.x },
  { label: "Instagram", href: SOCIAL_PROFILES.instagram },
  { label: "YouTube", href: SOCIAL_PROFILES.youtube },
  { label: "LinkedIn", href: SOCIAL_PROFILES.linkedin },
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/contact",
  keywords: ["goplay11 support", "goplay11 app download help", "goplay11 register"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Support Hub"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "Contact" },
          ]}
        />
        <p className="lead-muted">Support information reviewed on {CONTENT_LAST_REVIEWED}</p>
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Common support topics</h2>
            <ul className="tick-list">
              {SUPPORT_TOPICS.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Quick action links</h2>
            <p>
              Start installation from{" "}
              <Link className="text-link" href="/download">
                Download Goplay11 APK
              </Link>{" "}
              and continue with{" "}
              <Link className="text-link" href="/login-register">
                login/register setup
              </Link>
              .
            </p>
            <p>
              For bonus activation, visit{" "}
              <Link className="text-link" href="/referral-code">
                Goplay11 referral code
              </Link>
              .
            </p>
            <p>
              Direct affiliate access:{" "}
              <a className="text-link" href={AFFILIATE_LINK} rel={AFFILIATE_REL} target="_blank">
                Open campaign link
              </a>
            </p>
            <p>
              Learn how our content is reviewed in{" "}
              <Link className="text-link" href="/editorial-policy">
                Editorial Policy
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Business Info (NAP)</h2>
            <p>
              Address: {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality},{" "}
              {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}
            </p>
            <p>
              Phone: <a className="text-link" href={`tel:${SUPPORT_PHONE}`}>{SUPPORT_PHONE}</a>
            </p>
            <p>
              Email: <a className="text-link" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
            <p>
              Set up and optimize your listing at{" "}
              <a
                className="text-link"
                href={GOOGLE_BUSINESS_PROFILE_URL}
                rel={EXTERNAL_REL}
                target="_blank"
              >
                Google Business Profile
              </a>
              .
            </p>
          </article>

          <article className="card">
            <h2>Official Social Profiles</h2>
            <ul className="tick-list">
              {SOCIAL_ITEMS.map((item) => (
                <li key={item.label}>
                  <a className="text-link" href={item.href} rel={EXTERNAL_REL} target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <CtaButtons />
        </div>
      </section>
    </>
  );
}
