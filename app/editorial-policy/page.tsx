import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { CONTENT_LAST_REVIEWED, EDITORIAL_STANDARDS, EXPERT_TEAM } from "@/lib/site";

const PAGE_TITLE = "Editorial Policy and Content Review";
const PAGE_DESCRIPTION =
  "Read our editorial standards, fact-check method, update policy, and affiliate disclosure for GoPlay11 guides.";

const FACT_CHECK_PROCESS = [
  "Validate install and onboarding steps against current in-app flow before publication.",
  "Review outbound links for relevance, safety, and intent alignment.",
  "Check every guide for responsible-play advice where money and risk are involved.",
  "Update pages when significant user-flow changes are detected.",
];

const CORRECTIONS_POLICY = [
  "Minor wording corrections are updated silently.",
  "Material changes to process or safety guidance are revised with updated review date.",
  "Users can report a potential error from the contact page for manual review.",
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/editorial-policy",
  keywords: [
    "goplay11 editorial policy",
    "goplay11 content quality standards",
    "goplay11 apk guide fact check process",
  ],
});

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Editorial Policy", path: "/editorial-policy" },
        ])}
      />

      <PageHero
        eyebrow="Quality Standards"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "Editorial Policy" },
          ]}
        />
        <p className="lead-muted">Last reviewed: {CONTENT_LAST_REVIEWED}</p>
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Editorial Principles</h2>
            <ul className="tick-list">
              {EDITORIAL_STANDARDS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Fact-Check Workflow</h2>
            <ol className="step-list">
              {FACT_CHECK_PROCESS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Affiliate and Monetization Disclosure</h2>
            <p>
              Some outbound links may use affiliate parameters. This does not change our
              review standards. We prioritize user safety and clarity before conversion.
            </p>
            <p>
              We do not guarantee winnings. Fantasy outcomes depend on user decisions,
              skill, contest type, and risk controls.
            </p>
          </article>

          <article className="card">
            <h2>Corrections Policy</h2>
            <ul className="tick-list">
              {CORRECTIONS_POLICY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              To report a correction request, use the{" "}
              <Link className="text-link" href="/contact">
                contact page
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Reviewer Accountability</h2>
          <div className="card-grid">
            {EXPERT_TEAM.map((member) => (
              <article className="card" key={member.name}>
                <h3>{member.name}</h3>
                <p className="meta">{member.role}</p>
                <p>{member.experience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
