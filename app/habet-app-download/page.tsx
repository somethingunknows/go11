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

const PAGE_TITLE = "Habet App Download - Cricket Betting Platform 2026";
const PAGE_DESCRIPTION =
  "Download the Habet app and Habet APK safely for cricket betting and sports wagering. Complete setup guide with step-by-step installation on Android.";

const META_TITLE = "Habet App Download & APK Install Guide 2026 (Ha Bet Apk)";
const META_DESCRIPTION =
  "Complete Habet app download guide with APK install steps, login setup, and account creation. Also covers habet apk, habet download, ha bet app, ha bet apk variants.";

const APP_INFO = [
  "App Name: Habet",
  "Version: Latest 2026",
  "Size: Lightweight APK",
  "Compatibility: Android Devices",
];

const GUIDE_SNAPSHOT = [
  "Primary intent: habet app download and setting up",
  "Audience: first-time Android betting app users",
  "Review method: install flow + safety checklist verification",
  `Last reviewed: ${CONTENT_LAST_REVIEWED}`,
];

const ABOUT_POINTS = [
  "Betting on live cricket matches and tournaments",
  "Multiple betting markets and odds",
  "Real-time match updates and statistics",
  "Secure deposit and withdrawal options",
  "User-friendly mobile experience",
];

const FEATURE_POINTS = [
  "Easy-to-use interface with intuitive navigation",
  "Multiple cricket betting markets and live odds",
  "Fast and secure payment processing",
  "Secure platform with encryption protection",
  "24/7 customer support for betting queries",
  "Live streaming of major cricket matches",
  "Competitive odds and regular promotions",
];

const REGISTER_STEPS = [
  "Download the Habet APK from the official link.",
  "Install the app on your Android device.",
  "Open the app and tap Register / Sign Up.",
  "Enter your mobile number and email.",
  "Set a strong password and verify OTP.",
  "Complete KYC verification for betting eligibility.",
  "Account successfully created and ready for betting.",
];

const LOGIN_STEPS = [
  "Open the Habet app.",
  "Click Login.",
  "Enter your registered mobile number/email.",
  "Enter your password.",
  "Click login button and access your dashboard.",
];

const DOWNLOAD_STEPS = [
  "Visit the official Habet website.",
  "Click Download Habet App button.",
  "APK file starts downloading to your device.",
  "Enable Unknown Sources in Android settings.",
  "Install the APK file and open the app.",
  "Register or login to start betting.",
];

const BETTING_STEPS = [
  "Select a cricket match from available events.",
  "Choose your betting market (Match Winner, Run Total, etc.).",
  "Enter your stake amount.",
  "Review odds and potential returns.",
  "Confirm your bet.",
  "Track live betting and results from your dashboard.",
];

const WHY_POINTS = [
  "Trusted cricket betting platform",
  "Smooth and fast betting experience",
  "Beginner-friendly betting guides",
  "Multiple earning opportunities",
  "Regular updates and new markets",
];

const PROS = [
  "Simple and quick registration",
  "Fast betting interface",
  "Multiple cricket betting markets",
  "User-friendly experience",
  "Strong security features",
];

const CONS = [
  "Requires internet connection",
  "Must verify KYC for withdrawals",
  "Betting knowledge recommended",
];

const TRUST_SIGNALS = [
  "Guide reviewed with installation safety checklist",
  "APK source verification and permissions reviewed",
  "KYC and responsible betting guidance included",
  "Internal links to betting guides and market analysis",
  "External links to Habet official resources for credibility",
];

const SETUP_FAQS = [
  {
    question: "Is Habet app safe to download and use?",
    answer:
      "Always download from the official source at https://invite.habet.online/?i=AX7JY162 to ensure you are getting the legitimate Habet APK. Check app permissions during installation and enable security features in settings.",
  },
  {
    question: "What is required to use Habet app?",
    answer:
      "You need an Android device, a valid email or mobile number, and age verification (18+). KYC verification is required before withdrawing winnings.",
  },
  {
    question: "How to download Habet APK?",
    answer:
      "Click the download button below or visit https://invite.habet.online/?i=AX7JY162, follow the download link, enable Unknown Sources in Android settings, and install the APK file.",
  },
  {
    question: "Can I use Habet on iOS?",
    answer:
      "Habet is primarily available for Android via APK. Check the official Habet website for iOS availability status in your region.",
  },
  {
    question: "Is my money safe on Habet?",
    answer:
      "Habet uses secure encryption and licensed payment gateways. Always review their privacy policy and security certifications before depositing.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Habet APK is lightweight and typically installs within 2-3 minutes. First login with OTP verification may add 5 minutes.",
  },
];

export const metadata = buildMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  path: "/habet-app-download",
  keywords: [
    "habet",
    "habet apk",
    "habet app",
    "habet app download",
    "habet download",
    "habet betting",
    "habet apk download",
    "ha bet",
    "ha bet apk",
    "ha bet app",
    "ha bet app download",
    "ha bet download",
    "habet app login",
    "habet apk install",
    "cricket betting app habet",
    "download habet apk for android",
    "habet vs other betting apps",
    "is habet safe",
  ],
});

export default function HabetAppDownloadPage() {
  return (
    <>
      <JsonLd
        data={buildSoftwareApplicationSchema(PAGE_DESCRIPTION, "/habet-app-download")}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Habet App Download", path: "/habet-app-download" },
        ])}
      />
      <JsonLd data={buildFaqSchema(SETUP_FAQS)} />

      <PageHero
        eyebrow="Cricket Betting Platform"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/goplay-11" },
            { label: "Habet App Download" },
          ]}
        />
        <p className="lead-muted">
          Reviewed by editorial team on {CONTENT_LAST_REVIEWED} for accuracy,
          safety, and current installation procedures.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <a
            href="https://invite.habet.online/?i=AX7JY162"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
            }}
          >
            Download Habet App Now
          </a>
        </div>
      </PageHero>

      <section className="section section-tight">
        <div className="container card content-stack">
          <p>
            Habet is a trusted cricket betting platform offering live odds,
            multiple markets, and a seamless mobile experience for sports
            enthusiasts across India.
          </p>
          <p>
            If you are looking for the Habet app download, follow this complete
            guide to install the latest Habet APK and start betting on your
            favorite cricket matches.
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
          <h2>Download Habet APK</h2>
          <div className="badge-row">
            {APP_INFO.map((item) => (
              <div className="badge" key={item}>
                {item}
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1rem" }}>
            <strong>Direct Download Link:</strong>{" "}
            <a href="https://invite.habet.online/?i=AX7JY162" target="_blank" rel="noopener noreferrer">
              https://invite.habet.online/?i=AX7JY162
            </a>
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>About Habet App</h2>
            <p>
              Habet is a cricket betting platform designed for users who want to
              participate in live sports betting with competitive odds and multiple
              market options.
            </p>
            <p>
              The platform combines secure payment processing with a user-friendly
              interface, making it accessible for both beginner and experienced
              bettors.
            </p>
            <ul className="tick-list">
              {ABOUT_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Features of Habet</h2>
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
            <h2>Habet Register Process</h2>
            <ol className="step-list">
              {REGISTER_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h2>Habet Login Process</h2>
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
          <h2>How to Download Habet APK</h2>
          <ol className="step-list">
            {DOWNLOAD_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p style={{ marginTop: "1rem" }}>
            <strong>Note:</strong> Always download from the official link to avoid
            modified APK files:{" "}
            <a href="https://invite.habet.online/?i=AX7JY162" target="_blank" rel="noopener noreferrer">
              https://invite.habet.online/?i=AX7JY162
            </a>
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>How to Start Betting on Habet</h2>
          <ol className="step-list">
            {BETTING_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Why Choose Habet</h2>
            <ul className="tick-list">
              {WHY_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Pros and Cons</h2>
            <h3>Advantages</h3>
            <ul className="tick-list">
              {PROS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: "1rem" }}>
              Considerations
            </h3>
            <ul className="tick-list">
              {CONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Editorial Trust Signals</h2>
          <p>
            This guide has been prepared with focus on accuracy and user safety:
          </p>
          <ul className="tick-list">
            {TRUST_SIGNALS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card">
          <h2>Related Resources</h2>
          <p>
            For more information about Habet cricket betting, visit these pages:
          </p>
          <ul className="text-link-list">
            <li>
              <Link href="/blog/habet-app-login-account-setup-2026">
                Habet App Login & Account Setup Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/habet-cricket-betting-markets-explained">
                Habet Cricket Betting Markets Explained
              </Link>
            </li>
            <li>
              <Link href="/blog/habet-cricket-tips-beginners-guide-2026">
                Habet Cricket Betting Tips for Beginners
              </Link>
            </li>
            <li>
              <Link href="/blog/is-habet-app-real-safe-legitimacy-check-2026">
                Is Habet App Real & Safe - Legitimacy Check
              </Link>
            </li>
            <li>
              <Link href="/blog/habet-vs-other-betting-apps-comparison-2026">
                Habet vs Other Betting Apps Comparison
              </Link>
            </li>
            <li>
              <a href="https://habetapk.com/" target="_blank" rel="noopener noreferrer">
                Official Habet Website
              </a>
            </li>
            <li>
              <a href="https://habetapk.com/about" target="_blank" rel="noopener noreferrer">
                About Habet Platform
              </a>
            </li>
            <li>
              <a href="https://habetapk.com/disclaimer" target="_blank" rel="noopener noreferrer">
                Habet Disclaimer & Terms
              </a>
            </li>
          </ul>
        </div>
      </section>

      <FaqList items={SETUP_FAQS} title="Habet App Setup FAQs" />
    </>
  );
}
