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

const PAGE_TITLE = "GoPlay11 Fantasy App - Play Smart and Win Big Online";
const PAGE_DESCRIPTION =
  "Use sports knowledge to build fantasy teams, join contests, and earn rewards with the Goplay11 fantasy app.";

const WHY_POINTS = [
  "Simple and beginner-friendly interface",
  "Skill-based gameplay instead of random outcomes",
  "Free and paid contests across multiple budgets",
  "Smooth navigation for first-time and experienced users",
];

const FEATURE_POINTS = [
  "Simple team building and lineup management",
  "Real-time score updates and match tracking",
  "Secure payment gateway and withdrawal process",
  "Multiple sports categories and contest formats",
  "Daily competitions and mega league options",
];

const DOWNLOAD_STEPS = [
  "Visit the official or trusted download source.",
  "Click the Goplay11 download button.",
  "Install the app on your Android device.",
  "Sign up using mobile number or email.",
  "Start joining fantasy contests.",
];

const BENEFIT_POINTS = [
  "Real-time rewards based on team performance",
  "Bonus offers for new users and referral participation",
  "Fair play policy with transparent contest structure",
  "Secure withdrawals for smooth payout access",
];

const REFERRAL_STEPS = [
  "Sign up in the app.",
  "Enter a valid referral code during registration.",
  "Get bonus rewards instantly after activation.",
  "Invite friends to unlock additional bonuses.",
];

const WINNING_TIPS = [
  "Study player form before locking your lineup.",
  "Track pitch reports and match updates.",
  "Build a balanced team with captain and vice-captain logic.",
  "Join multiple contests to diversify risk.",
  "Review post-match outcomes to improve decisions.",
];

const SAFETY_POINTS = [
  "Uses secure payment flow for deposits and withdrawals",
  "Protects user data with platform-level safeguards",
  "Large user base and positive user feedback signals",
  "Safer experience when downloaded from trusted sources",
];

const PAGE_FAQS = [
  {
    question: "What is the Goplay11 fantasy app?",
    answer:
      "Goplay11 fantasy app is an online platform where users create virtual teams with real match players and earn points based on performance.",
  },
  {
    question: "How do I complete the Goplay11 download?",
    answer:
      "Visit a trusted download source, install the app, register your account, and begin joining contests from the app lobby.",
  },
  {
    question: "Is Goplay11 free to use?",
    answer:
      "Yes, users can access free contests, and paid contests are available for users who want to compete for cash rewards.",
  },
  {
    question: "What is the Goplay11 referral code used for?",
    answer:
      "A referral code can unlock signup bonuses and additional rewards when you invite friends to join the platform.",
  },
  {
    question: "Can users win real money on Goplay11?",
    answer:
      "Yes, eligible users can win cash prizes based on contest rank and team performance in paid formats.",
  },
  {
    question: "Is Goplay11 safe and secure?",
    answer:
      "The platform is designed with secure payment and data-protection controls. For safety, always use official or trusted links.",
  },
];

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/goplay11-fantasy-app",
  keywords: [
    "goplay11 fantasy app",
    "play fantasy games online",
    "goplay11 referral code",
    "goplay11 download",
    "goplay11 games",
  ],
});

export default function Goplay11FantasyAppPage() {
  return (
    <>
      <JsonLd
        data={buildSoftwareApplicationSchema(PAGE_DESCRIPTION, "/goplay11-fantasy-app")}
      />
      <JsonLd
      data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "GoPlay11 Fantasy App", path: "/goplay11-fantasy-app" },
        ])}
      />
      <JsonLd data={buildFaqSchema(PAGE_FAQS)} />

      <PageHero
        eyebrow="Fantasy Strategy Hub"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "GoPlay11 Fantasy App" },
          ]}
        />
        <p className="lead-muted">Strategy page reviewed on {CONTENT_LAST_REVIEWED}</p>
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Why Choose GoPlay11 Fantasy App</h2>
            <ul className="tick-list">
              {WHY_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Feature Highlights</h2>
            <ul className="tick-list">
              {FEATURE_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>GoPlay11 Download Steps</h2>
            <ol className="step-list">
              {DOWNLOAD_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Benefits of Using GoPlay11</h2>
            <ul className="tick-list">
              {BENEFIT_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Referral Code Flow</h2>
            <ol className="step-list">
              {REFERRAL_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              Need campaign details? Go to{" "}
              <Link className="text-link" href="/referral-code">
                GoPlay11 referral code
              </Link>{" "}
              before completing signup.
            </p>
          </article>

          <article className="card">
            <h2>Tips to Win on Goplay11</h2>
            <ul className="tick-list">
              {WINNING_TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Is Goplay11 Safe to Use</h2>
            <ul className="tick-list">
              {SAFETY_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Related Pages</h2>
            <p>
              For complete install help, open{" "}
              <Link className="text-link" href="/goplay11-app-download">
                Goplay11 app download guide
              </Link>
              .
            </p>
            <p>
              To begin directly, use{" "}
              <Link className="text-link" href="/download">
                Download Goplay11 APK
              </Link>{" "}
              and then continue with{" "}
              <Link className="text-link" href="/how-to-play">
                gameplay setup
              </Link>
              .
            </p>
            <p>
              For review methodology and update standards, check{" "}
              <Link className="text-link" href="/editorial-policy">
                Editorial Policy
              </Link>
              .
            </p>
            <p>
              Set budget and risk limits with our{" "}
              <Link className="text-link" href="/responsible-play">
                Responsible Play checklist
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <FaqList items={PAGE_FAQS} title="Goplay11 Fantasy App FAQs" />
    </>
  );
}
