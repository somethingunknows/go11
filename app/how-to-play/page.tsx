import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { CONTENT_LAST_REVIEWED } from "@/lib/site";

const PAGE_TITLE = "How to Play Goplay11 Fantasy App";
const PAGE_DESCRIPTION =
  "Learn how to play Goplay11 fantasy app with practical lineup tips, contest selection strategy, and responsible bankroll habits.";

const PLAY_STEPS = [
  "Register your account and complete profile verification.",
  "Pick a match and create a balanced fantasy team.",
  "Choose captain and vice-captain based on form and role.",
  "Join contests that match your bankroll and risk profile.",
  "Track live scores and review decisions after each contest.",
];

const STRATEGY_POINTS = [
  "Focus on consistency before aggressive contest entries.",
  "Use role diversity instead of only high-profile players.",
  "Review player form and playing conditions before lock time.",
  "Keep weekly limits for safer long-term fantasy play.",
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/how-to-play",
  keywords: ["how to play goplay11 fantasy app", "play fantasy games online"],
});

export default function HowToPlayPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "How To Play", path: "/how-to-play" },
        ])}
      />

      <PageHero
        eyebrow="Gameplay Guide"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "How To Play" },
          ]}
        />
        <p className="lead-muted">Strategy guide reviewed on {CONTENT_LAST_REVIEWED}</p>
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>How to play in 5 clear steps</h2>
            <ol className="step-list">
              {PLAY_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Strategy fundamentals</h2>
            <ul className="tick-list">
              {STRATEGY_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Helpful next actions</h2>
          <p>
            New users can begin with{" "}
            <Link className="text-link" href="/download">
              Download Goplay11 APK
            </Link>{" "}
            and then complete account setup from{" "}
            <Link className="text-link" href="/login-register">
              Goplay11 login and register
            </Link>
            .
          </p>
          <p>
            Need referral benefits before your first contest? Go to{" "}
            <Link className="text-link" href="/referral-code">
              Goplay11 referral code
            </Link>
            .
          </p>
          <p>
            Read our{" "}
            <Link className="text-link" href="/editorial-policy">
              editorial standards
            </Link>{" "}
            for how strategy content is reviewed.
          </p>
        </div>
      </section>
    </>
  );
}
