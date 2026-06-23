import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { CONTENT_LAST_REVIEWED } from "@/lib/site";

const PAGE_TITLE = "GoPlay11 APK Download — Latest Version 2026 | GoPlay11";
const H1_TITLE = "GoPlay11 APK — Download Latest Version 2026";
const PAGE_DESCRIPTION =
  "GoPlay11 APK (also known as GoPlay11) is now available for free download on Android. Follow the steps below to install GoPlay11 on your device and start playing fantasy cricket contests for real cash prizes.";

const DOWNLOAD_FEATURES = [
  "Lightweight APK",
  "Android Compatible",
  "Fast Installation",
  "Secure & Safe",
];

const DOWNLOAD_STEPS = [
  "Click download button",
  "Install APK",
  "Register account",
  "Start playing",
];

const DOWNLOAD_FAQS = [
  {
    question: "Is this page updated for the latest Goplay11 app version?",
    answer:
      "Yes. This guide is designed for the current 2026 install flow and focuses on Android users.",
  },
  {
    question: "What should I do if installation is blocked on Android?",
    answer:
      "Enable installation from trusted sources in your phone settings, then restart the install process.",
  },
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/download",
  keywords: [
    "goplay11",
    "goplay11 apk",
    "goplay11 download",
    "download goplay11 app",
    "goplay11 app latest version",
    "goplay11 download",
    "goplay11 apk download",
  ],
});

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(PAGE_DESCRIPTION, "/download")} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Download", path: "/download" },
        ])}
      />
      <JsonLd data={buildFaqSchema(DOWNLOAD_FAQS)} />

      <PageHero
        eyebrow="Official Install Guide"
        title={H1_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "Download" },
          ]}
        />
        <p className="lead-muted">Review date: {CONTENT_LAST_REVIEWED}</p>
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container card">
          <h2>Download Features</h2>
          <div className="badge-row">
            {DOWNLOAD_FEATURES.map((feature) => (
              <div className="badge" key={feature}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Quick Steps</h2>
            <ol className="step-list">
              {DOWNLOAD_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Need more setup help?</h2>
            <p>
              Continue with the{" "}
              <Link className="text-link" href="/apk">
                GoPlay11 APK setup walkthrough
              </Link>{" "}
              and then complete account onboarding with the{" "}
              <Link className="text-link" href="/login-register">
                GoPlay11 login guide
              </Link>
              .
            </p>
            <p>
              Want gameplay strategy after install? Use{" "}
              <Link className="text-link" href="/how-to-play">
                How to play GoPlay11
              </Link>{" "}
              to study lineup planning basics.
            </p>
            <p>
              For quality standards, see{" "}
              <Link className="text-link" href="/editorial-policy">
                Editorial Policy
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <FaqList items={DOWNLOAD_FAQS} title="Download FAQs" />
    </>
  );
}
