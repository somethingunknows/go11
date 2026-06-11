import Link from "next/link";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { ANCHOR, GOPAY_11_FAQS } from "@/lib/site";

const PAGE_TITLE = "GoPay 11 APK Download — Official GoPlay11 App 2026";
const PAGE_DESCRIPTION =
  "Download GoPay 11 APK latest version 2026 for Android. GoPay 11 is the GoPlay11 fantasy cricket app — free to download, real cash prizes, instant withdrawal.";
const SOFTWARE_DESCRIPTION =
  "GoPay 11 is a fantasy cricket app where users build teams, join contests, and win real cash across IPL, T20, and ODI matches.";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/gopay-11",
  keywords: [
    "gopay 11",
    "gopay 11 apk",
    "gopay 11 download",
    "gopay 11 apk download",
    "gopay 11 app",
    "gopay11",
    "gopay 11 app download",
  ],
});

export default function GoPay11Page() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(SOFTWARE_DESCRIPTION, "/download")} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "GoPay 11", path: "/gopay-11" },
        ])}
      />
      <JsonLd data={buildFaqSchema(GOPAY_11_FAQS)} />

      <PageHero
        eyebrow="Official GoPay 11 Guide"
        title="GoPay 11 APK — Download Free for Android (2026)"
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/" },
            { label: "GoPay 11" },
          ]}
        />
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <article className="container prose-card content-stack">
          <section>
            <h2>What Is GoPay 11?</h2>
            <p>
              GoPay 11 is the widely searched name many players use when they are
              looking for the GoPlay11 fantasy cricket app. The name appears in searches
              such as GoPay 11 APK, GoPay 11 download, and GoPay 11 app, but the platform
              users want is the same GoPlay11 experience built for Android fantasy
              cricket contests.
            </p>
            <p>
              The domain gopay11apk.com matches that search intent and serves as the
              official source for users who want a clean download path, setup guidance,
              login help, and responsible play information. Instead of using random APK
              mirrors, players can use this site to understand the app, follow safe
              installation steps, and continue to related GoPlay11 guides.
            </p>
          </section>

          <section>
            <h2>How to Download GoPay 11 APK</h2>
            <p>
              To download GoPay 11 APK, start on this website and open the{" "}
              <Link className="text-link" href="/download">
                {ANCHOR.download}
              </Link>{" "}
              page. Tap the download button, wait for the Android APK file to finish
              saving, and keep the file from the official source so you know the app has
              not been edited by a third-party mirror.
            </p>
            <p>
              Android may ask you to enable installation from unknown sources because
              fantasy APK files are installed outside the Play Store. Open your phone
              settings, allow your browser or file manager to install the file, then tap
              Install. After installation, open the app, register with your mobile
              number, complete OTP verification, and review the{" "}
              <Link className="text-link" href="/login-register">
                {ANCHOR.loginReg}
              </Link>{" "}
              guide if you need help signing in.
            </p>
          </section>

          <section>
            <h2>GoPay 11 Features</h2>
            <p>
              GoPay 11 focuses on fast fantasy cricket gameplay for users who want to
              build teams quickly, join contests before match lock, and track live
              performance without friction. The app is designed around skill-based
              decisions, so your lineup research, captain choice, and contest selection
              matter more than chance.
            </p>
            <ul className="tick-list">
              <li>Real cash contests across popular cricket matches.</li>
              <li>Live scores and match tracking for every fantasy lineup.</li>
              <li>Fast withdrawals with secure wallet flows.</li>
              <li>IPL, T20, ODI, and major league contest support.</li>
              <li>No bots, so users compete against real players.</li>
            </ul>
            <p>
              New users can continue with{" "}
              <Link className="text-link" href="/how-to-play">
                {ANCHOR.howToPlay}
              </Link>{" "}
              after installation to learn team creation, contest types, and fantasy
              cricket strategy before entering paid contests.
            </p>
          </section>

          <section>
            <h2>Is GoPay 11 Safe?</h2>
            <p>
              GoPay 11 is safe when you download it from the official source and follow
              standard Android security habits. Always avoid reposted APK files, check
              app permissions during installation, and keep your account details private.
              The platform is presented as a skill-based fantasy app where team-building
              knowledge and match research drive results.
            </p>
            <p>
              Payment safety also matters. Use verified deposit and withdrawal methods,
              complete account verification where required, and start with free or
              low-entry contests until you understand the gameplay. For signup benefits,
              review the{" "}
              <Link className="text-link" href="/referral-code">
                {ANCHOR.referral}
              </Link>{" "}
              page before creating your account.
            </p>
          </section>

          <section>
            <h2>GoPay 11 vs Other Fantasy Apps</h2>
            <p>
              Compared with larger fantasy apps, GoPay 11 is positioned around speed,
              clear onboarding, and a direct Android APK flow. Players searching for
              GoPay 11 often want less confusion: one official source, fast download
              steps, simple contest entry, and practical help after installation.
            </p>
            <p>
              The app also emphasizes fairness and player control. Fast withdrawals, a
              no-bots policy, live score tracking, and bonus-focused onboarding give
              users a straightforward fantasy cricket route. The best choice still
              depends on your contest style, but GoPay 11 works well for players who
              value quick access and clear guidance.
            </p>
          </section>

          <section itemScope itemType="https://schema.org/FAQPage">
            <h2>GoPay 11 FAQs</h2>
            <div className="faq-list">
              {GOPAY_11_FAQS.map((item) => (
                <details
                  className="faq-item"
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                  key={item.question}
                >
                  <summary itemProp="name">{item.question}</summary>
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </article>
      </section>
    </>
  );
}
