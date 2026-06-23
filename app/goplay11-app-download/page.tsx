import Image from "next/image";
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

const PAGE_TITLE = "GoPlay11 App Download - Play Fantasy Games & Win Rewards";
const PAGE_DESCRIPTION =
  "Download the GoPlay11 app, install the latest GoPlay11 APK safely, and start fantasy contests with a guided setup flow.";

const META_TITLE = "GoPlay11 App Download & APK Install Guide 2026";
const META_DESCRIPTION =
  "Complete GoPlay11 app download guide with APK install steps, login setup, and beginner onboarding. Also covers goplay11 and goplay11 search variants.";

const APP_INFO = [
  "App Name: GoPlay11",
  "Version: Latest 2026",
  "Size: Lightweight APK",
  "Compatibility: Android Devices",
];

const GUIDE_SNAPSHOT = [
  "Primary intent: goplay11 app download and setup",
  "Audience: first-time Android users",
  "Review method: install flow + safety checklist verification",
  `Last reviewed: ${CONTENT_LAST_REVIEWED}`,
];

const ABOUT_POINTS = [
  "Create your dream team",
  "Join multiple contests",
  "Compete with real players",
  "Track live performance",
];

const FEATURE_POINTS = [
  "Easy-to-use interface with clean navigation",
  "Multiple games including fantasy and prediction contests",
  "Fast and secure withdrawals",
  "Safe platform with user data protection",
  "24/7 support for user help",
];

const REGISTER_STEPS = [
  "Download the Goplay11 APK.",
  "Install the app on your device.",
  "Open the app and tap Register / Sign Up.",
  "Enter mobile number or email.",
  "Set password and verify OTP.",
  "Account successfully created.",
];

const LOGIN_STEPS = [
  "Open the Goplay11 app.",
  "Click Login.",
  "Enter your registered mobile/email.",
  "Enter password.",
  "Click login button and access dashboard.",
];

const DOWNLOAD_STEPS = [
  "Visit your website.",
  "Click Download GoPlay11 App button.",
  "APK file starts downloading.",
  "Enable Unknown Sources in Android settings.",
  "Install the APK, open app, and start playing.",
];

const PLAY_STEPS = [
  "Select a match.",
  "Create your team.",
  "Join contests.",
  "Earn points based on performance.",
  "Win rewards.",
];

const WHY_POINTS = [
  "Trusted gaming platform",
  "Smooth gameplay experience",
  "Beginner-friendly interface",
  "Multiple earning opportunities",
  "Regular updates",
];

const PROS = [
  "Easy registration",
  "Fast gameplay",
  "Multiple contests",
  "User-friendly experience",
];

const CONS = [
  "Requires internet connection",
  "Skill-based learning is needed",
];

const TRUST_SIGNALS = [
  "Guide reviewed with a source-validation checklist",
  "Install safety and permissions checks included",
  "Responsible-play guidance added before deposit decisions",
  "Internal links provided for login, referral, and strategy flows",
];

const TROUBLESHOOTING_STEPS = [
  "APK not installing: confirm Unknown Sources is enabled and re-download from trusted page.",
  "Login issue: reset credentials via OTP and verify network stability before retry.",
  "App lag on older device: close background apps and keep only latest APK build installed.",
  "Referral not applied: check code entry before account submission on register screen.",
];

const SCREENSHOTS = [
  {
    src: "/goplay11-1.jpeg",
    alt: "goplay11 app home screen interface",
  },
  {
    src: "/goplay11-2.jpeg",
    alt: "goplay11 fantasy game dashboard",
  },
  {
    src: "/goplay11-3.jpeg",
    alt: "goplay11 login and register page",
  },
  {
    src: "/goplay11-4.jpeg",
    alt: "goplay11 app gameplay screen",
  },
  {
    src: "/goplay11-5.jpeg",
    alt: "goplay11 apk install guide screen",
  },
];

const PAGE_FAQS = [
  {
    question: "What is Goplay11?",
    answer:
      "Goplay11 is an online fantasy gaming platform where users can play contests and win rewards.",
  },
  {
    question: "Is Goplay11 app free to download?",
    answer: "Yes, the Goplay11 app download is completely free.",
  },
  {
    question: "How to download GoPlay App?",
    answer:
      "You can download the Goplay11 APK directly from the official website and install it on Android.",
  },
  {
    question: "Is Goplay11 safe?",
    answer:
      "The platform uses secure systems to protect user data. Always use trusted sources for APK download.",
  },
  {
    question: "Can beginners play Goplay11?",
    answer: "Yes, Goplay11 is beginner-friendly and supports a simple onboarding flow.",
  },
];

export const metadata = buildMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  path: "/goplay11-app-download",
  keywords: [
    "goplay11",
    "goplay11 apk",
    "goplay11 app",
    "goplay11 app download",
    "goplay11 game",
    "goplay11 games",
    "goplay11 apk download",
    "go play11 app",
    "download goplay11 apk for android",
    "download goplay11 app",
    "goplay11",
    "goplay11",
    "goplay11 apk",
    "goplay11 download",
    "goplay11 app download",
  ],
});

export default function Goplay11AppDownloadPage() {
  return (
    <>
      <JsonLd
        data={buildSoftwareApplicationSchema(PAGE_DESCRIPTION, "/goplay11-app-download")}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
  { name: "Home", path: "/goplay-11" },
  { name: "GoPlay11 App Download", path: "/goplay11-app-download" },
        ])}
      />
      <JsonLd data={buildFaqSchema(PAGE_FAQS)} />

      <PageHero
        eyebrow="Official Download Guide"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "GoPlay11 App Download" },
          ]}
        />
        <p className="lead-muted">
          Reviewed by editorial team on {CONTENT_LAST_REVIEWED} for accuracy and
          onboarding safety.
        </p>
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container card content-stack">
          <p>
            The GoPlay App offers a smooth and user-friendly experience for both
            beginners and experienced players.
          </p>
          <p>
            If you are looking for the Goplay11 app download, install the latest
            Goplay11 APK and start playing instantly.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Guide Snapshot</h2>
          <ul className="tick-list">
            {GUIDE_SNAPSHOT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Download Goplay11 APK</h2>
          <div className="badge-row">
            {APP_INFO.map((item) => (
              <div className="badge" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>About Goplay11 App</h2>
            <p>
              The Goplay11 app is designed for users who love online fantasy sports
              and skill-based games.
            </p>
            <p>
              Fantasy apps let users build teams and earn points from real match
              performance, creating a competitive and interactive experience.
            </p>
            <ul className="tick-list">
              {ABOUT_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Features of Goplay11</h2>
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
            <h2>Goplay11 Register Process</h2>
            <ol className="step-list">
              {REGISTER_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Goplay11 Login Process</h2>
            <ol className="step-list">
              {LOGIN_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Goplay11 Download Process</h2>
            <ol className="step-list">
              {DOWNLOAD_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>How to Play Goplay11 Game</h2>
            <ol className="step-list">
              {PLAY_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Why Choose Goplay11?</h2>
            <ul className="tick-list">
              {WHY_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Pros and Cons</h2>
            <p className="card-lead">Pros</p>
            <ul className="tick-list">
              {PROS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="card-lead">Cons</p>
            <ul className="tick-list">
              {CONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <h2>Goplay11 App Screens</h2>
          <div className="card-grid">
            {SCREENSHOTS.map((shot) => (
              <article className="card" key={shot.alt}>
                <Image
                  alt={shot.alt}
                  className="logo-image"
                  height={1200}
                  src={shot.src}
                  width={540}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Troubleshooting Common Issues</h2>
            <ol className="step-list">
              {TROUBLESHOOTING_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Why You Can Trust This Page</h2>
            <ul className="tick-list">
              {TRUST_SIGNALS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Read more in our{" "}
              <Link className="text-link" href="/about">
                About page
              </Link>{" "}
              and{" "}
              <Link className="text-link" href="/editorial-policy">
                Editorial Policy
              </Link>
              .
            </p>
            <p>
              Before joining paid contests, review{" "}
              <Link className="text-link" href="/responsible-play">
                Responsible Play
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Related Guides</h2>
          <p>
            Continue with{" "}
            <Link className="text-link" href="/goplay11-fantasy-app">
              Goplay11 fantasy app
            </Link>{" "}
            for contest strategy and reward planning.
          </p>
          <p>
            New users can also check{" "}
            <Link className="text-link" href="/login-register">
              Goplay11 login and register guide
            </Link>{" "}
            before joining contests.
          </p>
        </div>
      </section>

      <FaqList items={PAGE_FAQS} title="Goplay11 App Download FAQs" />
    </>
  );
}
