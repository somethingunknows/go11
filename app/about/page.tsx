import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata, buildOrganizationSchema } from "@/lib/seo";
import { CONTENT_LAST_REVIEWED, EDITORIAL_STANDARDS, EXPERT_TEAM } from "@/lib/site";

const PAGE_TITLE = "About GoPlay11 APK Resource Hub";
const PAGE_DESCRIPTION =
  "Meet the editorial team behind GoPlay11 app download guides, fantasy strategy tutorials, and APK safety checklists.";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/about",
  keywords: [
    "about goplay11 app download guide",
    "goplay11 apk editorial team",
    "goplay11 content review process",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero eyebrow="Who We Are" title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "About" },
          ]}
        />
        <p className="lead-muted">Last reviewed: {CONTENT_LAST_REVIEWED}</p>
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Our Mission</h2>
            <p>
              We publish practical guides for users searching terms like
              <strong> goplay11</strong>, <strong>goplay11 apk</strong>, and{" "}
              <strong>goplay11 app download</strong>. Our goal is to help users install
              safely, complete onboarding correctly, and use responsible gameplay habits.
            </p>
            <p>
              We focus on clarity over hype. Every major guide is written for first-time
              users and reviewed for trust and risk awareness before publish.
            </p>
          </article>

          <article className="card">
            <h2>What Makes Our Content Trustworthy</h2>
            <ul className="tick-list">
              {EDITORIAL_STANDARDS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Expert Team</h2>
          <div className="card-grid">
            {EXPERT_TEAM.map((member) => (
              <article className="card" key={member.name}>
                <h3>{member.name}</h3>
                <p className="meta">{member.role}</p>
                <p>{member.experience}</p>
                <p>
                  <strong>Focus:</strong> {member.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>How We Keep Content Updated</h2>
          <p>
            We run routine updates for install steps, account onboarding flows, and
            internal links. If an app flow changes, we refresh affected pages and update
            the review date.
          </p>
          <p>
            See full process details in our{" "}
            <Link className="text-link" href="/editorial-policy">
              Editorial Policy
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
