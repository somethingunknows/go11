import Image from "next/image";
import Link from "next/link";

import {
  BUSINESS_ADDRESS,
  EXTERNAL_REL,
  GOOGLE_BUSINESS_PROFILE_URL,
  LOGO_PATH,
  RECOMMENDED_PLATFORM_URL,
  SITE_NAME,
  SOCIAL_PROFILES,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
} from "@/lib/site";

const QUICK_LINKS = [
  { href: "/about", label: "About GoPlay11 APK Resource Hub" },
  { href: "/editorial-policy", label: "Editorial Policy and Review Process" },
  { href: "/download", label: "Download GoPlay11 APK" },
  { href: "/goplay-11", label: "GoPlay11 APK Guide" },
  { href: "/goplay11-app-download", label: "Goplay11 App Download Guide" },
  { href: "/goplay11-fantasy-app", label: "Goplay11 Fantasy App Guide" },
  { href: "/apk", label: "Goplay11 APK Guide" },
  { href: "/how-to-play", label: "Play fantasy games online" },
  { href: "/responsible-play", label: "Responsible play checklist" },
  { href: "/referral-code", label: "Goplay11 referral code" },
  { href: "/blog", label: "Fantasy blog" },
];

export function SiteFooter() {
  const socialItems = [
    { label: "Facebook", href: SOCIAL_PROFILES.facebook },
    { label: "X", href: SOCIAL_PROFILES.x },
    { label: "Instagram", href: SOCIAL_PROFILES.instagram },
    { label: "YouTube", href: SOCIAL_PROFILES.youtube },
    { label: "LinkedIn", href: SOCIAL_PROFILES.linkedin },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Image alt="GoPlay11 APK — GoPlay11 logo" className="footer-logo" height={48} src={LOGO_PATH} width={48} />
            <p className="footer-title">{SITE_NAME}</p>
          </div>
          <p className="footer-copy">
            Practical resource hub for GoPlay11 app download, setup guides, and
            fantasy play strategies.
          </p>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <ul className="footer-list">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Recommended Platform</p>
          <p className="footer-copy">
            Explore{" "}
            <a href={RECOMMENDED_PLATFORM_URL} rel={EXTERNAL_REL} target="_blank">
              comegameapp.com
            </a>{" "}
            for more mobile gaming resources.
          </p>
          <p className="footer-copy">
            Manage your local listing using{" "}
            <a href={GOOGLE_BUSINESS_PROFILE_URL} rel={EXTERNAL_REL} target="_blank">
              Google Business Profile
            </a>
            .
          </p>
          <ul className="footer-list">
            {socialItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} rel={EXTERNAL_REL} target="_blank">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Business Info (NAP)</p>
          <p className="footer-copy">
            {SITE_NAME}
            <br />
            {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality},{" "}
            {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}
            <br />
            Phone: <a href={`tel:${SUPPORT_PHONE}`}>{SUPPORT_PHONE}</a>
            <br />
            Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
          <p className="footer-note">
            Disclaimer: This is not the official website. We are an independent
            informational resource and are not affiliated with the official
            GoPlay11 platform.
          </p>
          <p className="footer-note">
            Play responsibly. Fantasy gaming involves risk and should be used by
            eligible users only.
          </p>
        </div>
      </div>
    </footer>
  );
}
