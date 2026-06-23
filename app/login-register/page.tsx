import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { CONTENT_LAST_REVIEWED } from "@/lib/site";

const PAGE_TITLE = "Goplay11 Login and Register Guide";
const PAGE_DESCRIPTION =
  "Complete Goplay11 login and register in minutes with this clear onboarding sequence for new fantasy players.";

const REGISTER_STEPS = [
  "Install the app from the trusted download page.",
  "Tap Register and enter your mobile number details.",
  "Fill your profile and add referral code if available.",
  "Verify credentials and complete account creation.",
];

const LOGIN_STEPS = [
  "Open app and choose Login.",
  "Enter your registered mobile number and password.",
  "Use OTP recovery flow if credentials are missing.",
  "Review wallet and contest lobby before joining matches.",
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/login-register",
  keywords: ["goplay11 login", "goplay11 register", "download goplay11 app"],
});

export default function LoginRegisterPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Login Register", path: "/login-register" },
        ])}
      />

      <PageHero
        eyebrow="Account Setup"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "Login/Register" },
          ]}
        />
        <p className="lead-muted">Onboarding flow reviewed on {CONTENT_LAST_REVIEWED}</p>
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Register Flow</h2>
            <ol className="step-list">
              {REGISTER_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Login Flow</h2>
            <ol className="step-list">
              {LOGIN_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Link your referral and strategy pages</h2>
          <p>
            Before final signup, visit{" "}
            <Link className="text-link" href="/referral-code">
              Goplay11 referral code
            </Link>{" "}
            to understand instant bonus flow.
          </p>
          <p>
            After registration, improve your contest process via{" "}
            <Link className="text-link" href="/how-to-play">
              Play fantasy games online
            </Link>
            .
          </p>
          <p>
            For content governance and updates, read{" "}
            <Link className="text-link" href="/editorial-policy">
              Editorial Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
