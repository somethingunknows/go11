import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { CONTENT_LAST_REVIEWED } from "@/lib/site";

const PAGE_TITLE = "GoPlay11 APK - Fast Android Install and Latest Version Guide";
const PAGE_DESCRIPTION =
  "Get the latest GoPlay11 APK package, review install compatibility, and complete setup in minutes for fantasy cricket and football contests.";

const APK_HIGHLIGHTS = [
  "Small file size for faster downloads",
  "Smooth Android compatibility",
  "Simple account setup flow",
  "Contest-ready in minutes",
];

const SAFETY_CHECKS = [
  "Use trusted install links only",
  "Verify requested app permissions before completing install",
  "Avoid edited APK mirrors with unclear version history",
  "Keep your app updated to maintain stable performance",
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/apk",
  keywords: [
    "goplay11 apk",
    "goplay11 apk download",
    "goplay11 download",
    "goplay11 apk",
    "download goplay11 apk latest version 2026",
    "goplay11 apk",
  ],
});

export default function ApkPage() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(PAGE_DESCRIPTION, "/apk")} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "APK", path: "/apk" },
        ])}
      />

      <PageHero
        eyebrow="APK Overview"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "APK" },
          ]}
        />
        <p className="lead-muted">Review date: {CONTENT_LAST_REVIEWED}</p>
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container card">
          <h2>Why users search for Goplay11 APK</h2>
          <p>
            Most users search for GoPlay11 APK because they want direct setup speed.
            This page is focused on practical steps and clean source verification.
          </p>
          <ul className="tick-list">
            {APK_HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Safety Checklist</h2>
            <ul className="tick-list">
              {SAFETY_CHECKS.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Continue your onboarding</h2>
            <p>
              After installation, finish account creation on the{" "}
              <Link className="text-link" href="/login-register">
                login/register page
              </Link>{" "}
              and apply bonus details on the{" "}
              <Link className="text-link" href="/referral-code">
                referral code guide
              </Link>
              .
            </p>
            <p>
              For a direct installation path, use{" "}
              <Link className="text-link" href="/download">
                Download GoPlay11 APK
              </Link>
              .
            </p>
            <p>
              Want to review team expertise? Visit{" "}
              <Link className="text-link" href="/about">
                About
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
