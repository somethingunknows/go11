import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { CONTENT_LAST_REVIEWED } from "@/lib/site";

const PAGE_TITLE = "Responsible Play and Risk Awareness";
const PAGE_DESCRIPTION =
  "Read practical bankroll, time-control, and eligibility reminders before joining fantasy contests.";

const RESPONSIBLE_RULES = [
  "Set a fixed monthly and weekly budget before entering contests.",
  "Use small-entry contests while learning game mechanics.",
  "Do not chase losses with larger or emotional entries.",
  "Take breaks after losing streaks to reset decision quality.",
  "Review local eligibility requirements before paid participation.",
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/responsible-play",
  keywords: [
    "goplay11 responsible play",
    "fantasy contest bankroll management",
    "safe fantasy gaming habits",
  ],
});

export default function ResponsiblePlayPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Responsible Play", path: "/responsible-play" },
        ])}
      />

      <PageHero eyebrow="Safety First" title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "Responsible Play" },
          ]}
        />
        <p className="lead-muted">Last reviewed: {CONTENT_LAST_REVIEWED}</p>
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Responsible Play Rules</h2>
            <ul className="tick-list">
              {RESPONSIBLE_RULES.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Practical Weekly Routine</h2>
            <ol className="step-list">
              <li>Set your weekly budget cap on Monday.</li>
              <li>Track every contest entry and outcome.</li>
              <li>Review what decisions worked before increasing stakes.</li>
              <li>Stop play for the day if your cap is reached.</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Related Guides</h2>
          <p>
            Start with{" "}
            <Link className="text-link" href="/goplay11-app-download">
              GoPlay11 app download guide
            </Link>{" "}
            and continue with{" "}
            <Link className="text-link" href="/how-to-play">
              strategy basics
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
