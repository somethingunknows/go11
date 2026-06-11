"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

import {
  AFFILIATE_LINK,
  AFFILIATE_REL,
  CONTENT_LAST_REVIEWED,
  EXTERNAL_REL,
  GOPAY_11_FAQS,
  SOCIAL_PROFILES,
} from "@/lib/site";

const DOWNLOAD_URL = AFFILIATE_LINK;

const HERO_HIGHLIGHTS = [
  "Fast withdrawals",
  "Real-time match insights",
  "Skill-first fantasy gameplay",
];

const ABOUT_POINTS = [
  "No bots, 100% real players",
  "Instant withdrawal system",
  "Fair play guaranteed",
  "Wide range of bonus offers",
];

const EXPERIENCE_STEPS = [
  {
    title: "Login To Your Account",
    subtitle: "Access your dashboard and start playing",
    image: "/goplay11-1.jpeg",
  },
  {
    title: "Join Contests",
    subtitle: "Compete with thousands of players",
    image: "/goplay11-2.jpeg",
  },
  {
    title: "Create Your Team",
    subtitle: "Build your best XI for every match",
    image: "/goplay11-3.jpeg",
  },
  {
    title: "Track Live Scores",
    subtitle: "Follow every point in real time",
    image: "/goplay11-4.jpeg",
  },
  {
    title: "Win Real Cash",
    subtitle: "Withdraw winnings quickly and securely",
    image: "/goplay11-5.jpeg",
  },
];

const FEATURE_CARDS = [
  {
    icon: "TEAM",
    title: "Create Your Dream Team",
    text: "Pick your best XI from real players and compete in exciting fantasy contests.",
  },
  {
    icon: "LIVE",
    title: "Live Match Insights",
    text: "Stay updated with live scores, player stats, and better captain decisions.",
  },
  {
    icon: "CASH",
    title: "Win Cash Daily",
    text: "Join multiple contests and win real money with quick withdrawals.",
  },
  {
    icon: "SAFE",
    title: "100% Secure",
    text: "Trusted platform with secure deposits, withdrawals, and fair play standards.",
  },
  {
    icon: "FAST",
    title: "Fast and Easy",
    text: "A smooth interface designed for beginners and experienced fantasy players.",
  },
  {
    icon: "PLAY",
    title: "Play Anytime",
    text: "Enjoy contests across top cricket leagues and match formats.",
  },
];

const TICKER_ITEMS = [
  "ICC T20 World Cup Men",
  "ICC T20 World Cup Women",
  "Indian Premier League",
  "Big Bash League",
  "ODI Series",
  "ICC Champions Trophy",
  "Under 19 Cricket World Cup",
];

const FAQ_ITEMS = [
  {
    question: "How do I complete Go Play 11 APK download?",
    answer:
      "Use the official GoPlay11 download link on this site. If you search for Go Play 11 APK or Go Play 11 APK download, always choose trusted sources only.",
  },
  {
    question: "Is GoPlay11 legal?",
    answer:
      "GoPlay11 is positioned as a skill-based fantasy platform. Always verify local regulations before playing.",
  },
  {
    question: "How do I withdraw winnings?",
    answer:
      "You can withdraw winnings to your verified bank account from inside the app wallet flow.",
  },
  {
    question: "Can I play for free?",
    answer:
      "Yes, free contests are available, and paid contests are optional for cash prizes.",
  },
  ...GOPAY_11_FAQS,
];

const TRUST_FACTS = [
  "Install and onboarding guides are reviewed before updates go live.",
  "Risk and responsible-play reminders are included across decision pages.",
  "Internal links connect users from install to login, referral, and strategy flow.",
  `Last full content review: ${CONTENT_LAST_REVIEWED}`,
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    short: "IG",
    href: SOCIAL_PROFILES.instagram,
    gradient: "linear-gradient(135deg, #ec4899, #f59e0b)",
  },
  {
    label: "X",
    short: "X",
    href: SOCIAL_PROFILES.x,
    gradient: "linear-gradient(135deg, #111827, #000000)",
  },
  {
    label: "YouTube",
    short: "YT",
    href: SOCIAL_PROFILES.youtube,
    gradient: "linear-gradient(135deg, #dc2626, #991b1b)",
  },
  {
    label: "Facebook",
    short: "FB",
    href: SOCIAL_PROFILES.facebook,
    gradient: "linear-gradient(135deg, #2563eb, #1e3a8a)",
  },
  {
    label: "LinkedIn",
    short: "IN",
    href: SOCIAL_PROFILES.linkedin,
    gradient: "linear-gradient(135deg, #0284c7, #0f4a7a)",
  },
];

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

type Pick11HomePageProps = {
  initialExperienceIndex?: number;
};

export function Pick11HomePage({
  initialExperienceIndex = EXPERIENCE_STEPS.length - 1,
}: Pick11HomePageProps) {
  const [experienceIndex, setExperienceIndex] = useState(initialExperienceIndex);

  useEffect(() => {
    document.body.classList.add("home-template-active");
    return () => document.body.classList.remove("home-template-active");
  }, []);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setExperienceIndex((current) => (current + 1) % EXPERIENCE_STEPS.length);
    }, 3000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <div className="pick11-home-page">
      <section className="pick11-home-section" id="home">
        <div className="pick11-home-wrapper">
          <div className="pick11-hero-static">
            <img
              alt="GoPay 11 APK — GoPlay11 logo"
              className="pick11-hero-logo"
              decoding="async"
              fetchPriority="high"
              height="150"
              src="/go11.png"
              width="150"
            />
            <h1 className="pick11-hero-title">
              GoPay 11 — Download APK & Play Fantasy Cricket
            </h1>
            <p className="pick11-hero-desc">
              Create your dream team, join contests, and win daily with GoPlay11.
            </p>
            <p className="pick11-hero-search-terms">
              Looking for GoPay 11, GoPay 11 APK, or GoPay 11 app download? You are in
              the right place. Download the GoPay 11 APK free and start winning real cash
              today.
            </p>
            <div className="pick11-hero-chip-row">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <span className="pick11-hero-chip" key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
            <a
              className="pick11-hero-btn"
              href={DOWNLOAD_URL}
              rel={AFFILIATE_REL}
              target="_blank"
            >
              Download GoPay 11 APK
              <span aria-hidden="true">{"->"}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="pick11-gopay-section" id="gopay-11">
        <div className="pick11-section-container">
          <h2>What Is GoPay 11?</h2>
          <p>
            GoPay 11 is a popular search name for the GoPlay11 fantasy cricket app.
            Players searching for GoPay 11 APK, GoPay 11 download, or GoPay 11 app are
            looking for the same trusted platform — GoPlay11. This app lets you build
            your dream XI, join skill-based contests, and win real cash across top
            cricket leagues like IPL, T20 World Cup, and more.
          </p>
          <p>
            Whether you call it GoPay 11 or GoPlay11, the experience is the same: fast
            withdrawals, live match tracking, and 100% real players.
          </p>
          <div className="pick11-gopay-link-row">
            <a className="pick11-hero-btn" href="/download">
              Download GoPay 11 APK <span aria-hidden="true">{"->"}</span>
            </a>
            <a className="pick11-gopay-text-link" href="/gopay-11">
              Learn more about GoPay 11 <span aria-hidden="true">{"->"}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="pick11-about-section" id="aboutus">
        <div className="pick11-section-container">
          <div className="pick11-about-grid">
            <div className="pick11-about-copy">
              <h2 className="pick11-about-title">
                ABOUT <span>US</span>
              </h2>
              <div className="pick11-title-bar" />
              <p className="pick11-about-text">
                Welcome to <strong>GoPlay11</strong>, where your passion for sports meets
                strategy. We are not just a fantasy platform. We are a community built for
                serious fans.
              </p>
              <p className="pick11-about-muted">
                Our mission is to deliver a transparent, secure, and fast gameplay
                experience for every type of player.
              </p>
              <ul className="pick11-about-list">
                {ABOUT_POINTS.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">*</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pick11-about-visual">
              <img
                alt="GoPay 11 gameplay interface"
                className="pick11-about-main-img"
                decoding="async"
                loading="lazy"
                src="/goplay11-1.jpeg"
              />
              <img
                alt="GoPay 11 contest lobby"
                className="pick11-flying-icon pick11-fly-1"
                decoding="async"
                loading="lazy"
                src="/goplay11-2.jpeg"
              />
              <img
                alt="GoPay 11 team selection"
                className="pick11-flying-icon pick11-fly-2"
                decoding="async"
                loading="lazy"
                src="/goplay11-3.jpeg"
              />
              <img
                alt="GoPay 11 live score tracking"
                className="pick11-flying-icon pick11-fly-3"
                decoding="async"
                loading="lazy"
                src="/goplay11-4.jpeg"
              />
              <img
                alt="GoPay 11 cash withdrawal"
                className="pick11-flying-icon pick11-fly-4"
                decoding="async"
                loading="lazy"
                src="/goplay11-5.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pick11-experience-section" id="experience">
        <div className="pick11-orb pick11-orb-left" aria-hidden="true" />
        <div className="pick11-orb pick11-orb-right" aria-hidden="true" />
        <div className="pick11-section-container pick11-experience-shell">
          <header className="pick11-section-heading">
            <h2>
              EXPERIENCE <span>GOPLAY11</span>
            </h2>
            <p>Seamless gameplay, clean interface, and exciting features in one app.</p>
          </header>

          <div className="pick11-experience-content">
            <div className="pick11-phone-wrap">
              <div className="pick11-phone-mockup">
                <div className="pick11-phone-screen">
                  <img
                    key={EXPERIENCE_STEPS[experienceIndex]?.image}
                    alt={EXPERIENCE_STEPS[experienceIndex]?.title}
                    className="pick11-phone-image"
                    decoding="async"
                    loading="lazy"
                    src={EXPERIENCE_STEPS[experienceIndex]?.image}
                  />
                </div>
              </div>
              <div className="pick11-phone-glow" aria-hidden="true" />
            </div>

            <div className="pick11-step-stack">
              {EXPERIENCE_STEPS.map((step, index) => (
                <button
                  className={cn("pick11-step-card", index === experienceIndex && "active")}
                  key={step.title}
                  onClick={() => setExperienceIndex(index)}
                  type="button"
                >
                  <span className="pick11-step-num">{index + 1}</span>
                  <span className="pick11-step-copy">
                    <span className="pick11-step-title">{step.title}</span>
                    <span className="pick11-step-sub">{step.subtitle}</span>
                  </span>
                </button>
              ))}

              <div className="pick11-exp-dots">
                {EXPERIENCE_STEPS.map((step, index) => (
                  <div
                    className={cn("pick11-exp-dot", index === experienceIndex && "active")}
                    key={step.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pick11-features-section" id="features">
        <div className="pick11-section-container">
          <h2 className="pick11-features-heading">
            WHY CHOOSE <span>GOPLAY11?</span>
          </h2>
          <div className="pick11-feature-grid">
            {FEATURE_CARDS.map((card) => (
              <article className="pick11-feature-card" key={card.title}>
                <div className="pick11-feature-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="pick11-sports-banner" aria-label="Cricket leagues ticker">
        <div className="pick11-brand-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <div className="pick11-brand-item" key={`${item}-${index}`}>
              <span aria-hidden="true">*</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <section
        className="pick11-faq-section"
        id="faq"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="pick11-section-container pick11-faq-wrap">
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <div className="pick11-faq-grid">
            {FAQ_ITEMS.map((item) => (
              <article
                className="pick11-faq-card"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
                key={item.question}
              >
                <h3 itemProp="name">{item.question}</h3>
                <div
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container two-col">
          <article className="card">
            <h2>Why Readers Trust This Guide</h2>
            <ul className="tick-list">
              {TRUST_FACTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Editorial Transparency</h2>
            <p>
              We publish practical help for users searching goplay11, goplay11 apk, and
              goplay11 app download. We update pages when install or onboarding flow
              changes are detected.
            </p>
            <p>
              Review process details are available on our
              {" "}
              <a className="text-link" href="/editorial-policy">
                Editorial Policy
              </a>{" "}
              and{" "}
              <a className="text-link" href="/about">
                About page
              </a>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="pick11-contact-section" id="contact">
        <h2>GET IN TOUCH</h2>
        <p>Need help? Connect with us on social platforms.</p>
        <div className="pick11-social-wrap">
          {SOCIAL_LINKS.map((social) => (
            <a
              className="pick11-social-button"
              href={social.href}
              key={social.label}
              rel={EXTERNAL_REL}
              style={{ background: social.gradient }}
              target="_blank"
            >
              <span>{social.short}</span>
              <small>{social.label}</small>
            </a>
          ))}
        </div>
      </section>

      <footer className="pick11-footer">
        <p>Copyright 2026 GoPlay11 Sports. All rights reserved.</p>
      </footer>
    </div>
  );
}
