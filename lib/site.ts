export const SITE_NAME = "GoPlay11";

const DEFAULT_SITE_URL = "https://gopay11apk.com";

function normalizeSiteUrl(value: string): string {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol =
    configured.startsWith("http://") || configured.startsWith("https://")
      ? configured
      : `https://${configured}`;

  return normalizeSiteUrl(withProtocol);
}

export const SITE_URL = resolveSiteUrl();
export const LOGO_PATH = "/go11.png";
export const SOCIAL_PREVIEW_PATH = "/social-preview.jpg";

export const AFFILIATE_LINK =
  "https://web-in.goplaycom.com/en/affiliate-invited?c=6FHW28S2&s=3";
export const RECOMMENDED_PLATFORM_URL = "https://www.comegameapp.com";
export const AFFILIATE_REL = "nofollow sponsored noopener noreferrer";
export const EXTERNAL_REL = "nofollow noopener noreferrer";

export const PLATFORM_LINKS = [
  { href: "https://ak7x.games",   label: "ak7x App — Mobile Gaming" },
  { href: "https://habetapk.com", label: "Habet App — Sports Betting" },
  { href: "https://dhan7.xyz",    label: "Dhan 7 App — Real Money Gaming" },
  { href: "https://ak7-apk.com",  label: "AK7 APK — Gaming App" },
] as const;

export const ANCHOR = {
  download: "Download GoPlay11 APK",
  referral: "GoPlay11 referral code",
  howToPlay: "How to play GoPlay11",
  loginReg: "GoPlay11 login",
} as const;

export const DEFAULT_TITLE = "GoPlay11 APK Download and GoPlay 11 Fantasy Guide";
export const DEFAULT_DESCRIPTION =
  "GoPlay11 APK download guide for users searching GoPlay11 and GoPlay 11. Get setup steps, login help, and fantasy strategy tips in 2026.";

export const BUSINESS_NAME = "GO11 Fantasy Media";
export const SUPPORT_PHONE = "+91-80456-77881";
export const SUPPORT_EMAIL = "support@gopay11apk.com";
export const CONTENT_LAST_REVIEWED = "2026-04-08";
export const BUSINESS_ADDRESS = {
  streetAddress: "44 Residency Road",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560025",
  addressCountry: "IN",
};

export const GOOGLE_BUSINESS_PROFILE_URL = "https://www.google.com/business/";

export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/goplay11apk",
  x: "https://x.com/goplay11apk",
  instagram: "https://www.instagram.com/goplay11apk",
  youtube: "https://www.youtube.com/@goplay11apk",
  linkedin: "https://www.linkedin.com/company/goplay11apk",
} as const;

export const SOCIAL_PROFILE_LINKS = Object.values(SOCIAL_PROFILES);

export const PRIMARY_KEYWORDS = [
  "goplay11",
  "goplay 11",
  "goplay11 apk",
  "goplay 11 apk",
  "goplay11 download",
  "goplay 11 download",
  "goplay11 apk download",
  "goplay 11 apk download",
  "goplay11 app",
  "goplay 11 app",
  "goplay11 app download",
  "goplay 11 app download",
  "go play 11",
  "go play 11 apk",
  "go play 11 apk download",
  "go play11",
  "go play11 apk",
  "goplay11 fantasy app",
  "goplay11 login",
  "goplay11 referral code",
  "gopay11",
  "gopay 11",
];

export const SECONDARY_KEYWORDS = [
  "gopay 11 apk",
  "gopay 11 apk download",
  "gopay 11 app",
  "gopay11 apk",
  "go pay 11",
  "go play 11 app download",
  "go play11 app",
  "goplay11 register",
  "goplay11 app latest version",
  "goplay11 games",
];

export const LONG_TAIL_KEYWORDS = [
  "go play 11 apk latest version 2026",
  "go play 11 app download",
  "go play 11 fantasy app",
  "download goplay11 apk latest version 2026",
  "how to play goplay11 fantasy app",
  "is goplay11 safe or real",
  "download goplay11 apk for android",
  "goplay11 fantasy app play smart and win big",
];

export const NAV_LINKS = [
  { href: "/goplay-11", label: "GoPlay11" },
  { href: "/about", label: "About" },
  { href: "/download", label: "Download GoPlay11 APK" },
  { href: "/goplay11-app-download", label: "App Download" },
  { href: "/goplay11-fantasy-app", label: "Fantasy App" },
  { href: "/apk", label: "APK" },
  { href: "/how-to-play", label: "How To Play" },
  { href: "/responsible-play", label: "Responsible Play" },
  { href: "/login-register", label: "Login/Register" },
  { href: "/referral-code", label: "Referral Code" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/editorial-policy", label: "Editorial Policy" },
];

export type ExpertProfile = {
  name: string;
  role: string;
  experience: string;
  focus: string;
};

export const EXPERT_TEAM: ExpertProfile[] = [
  {
    name: "Rohan Mehta",
    role: "Fantasy Strategy Analyst",
    experience: "8+ years in fantasy contest analytics and bankroll planning",
    focus: "Contest selection, role-balance strategy, and risk controls",
  },
  {
    name: "Ananya Kulkarni",
    role: "Mobile App Trust Researcher",
    experience: "6+ years auditing Android onboarding and app safety flows",
    focus: "APK source validation, permissions review, and account safety",
  },
];

export const EDITORIAL_STANDARDS = [
  "Every guide is reviewed for accuracy, readability, and user safety before publication.",
  "Pages are updated when app flows, install steps, or policy details change.",
  "We separate informational guidance from affiliate placements and label external links clearly.",
  "Responsible play, bankroll discipline, and local eligibility checks are included in high-risk topics.",
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const GOPAY_11_FAQS: FaqItem[] = [
  {
    question: "What is GoPlay11?",
    answer:
      "GoPlay11 is the primary name we use for the fantasy cricket app. Some users still search GoPay 11 APK or GoPlay 11 download when they want the same Android fantasy sports platform.",
  },
  {
    question: "How do I download GoPlay11 APK?",
    answer:
      "To download GoPlay11 APK, visit the official download page at gopay11apk.com/download and tap the Download APK button. Install the file on your Android device, register, and start playing fantasy contests instantly.",
  },
  {
    question: "Is GoPlay11 safe?",
    answer:
      "Yes. GoPlay11 is a skill-based fantasy platform with secure deposits, verified withdrawals, and a no-bots policy. Always download from the official site to stay safe.",
  },
  {
    question: "Is GoPlay11 the same as GoPay 11?",
    answer:
      "Yes. GoPlay11 and GoPay 11 refer to the same fantasy cricket application. GoPay 11 is still a common alternate search spelling.",
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    // Topic 1: What GoPlay 11 is
    question: "What is GoPlay 11?",
    answer:
      "GoPlay 11 (also written GoPlay11 or Go Play 11) is an Android fantasy cricket app where you build virtual teams of real players, join contests, and win real cash based on their live match performance. It is not available on the Google Play Store — you download it as an APK directly from the official site.",
  },
  {
    // Topic 2: How to download the APK
    question: "How do I download the GoPlay 11 APK?",
    answer:
      "Visit the GoPlay 11 download page, tap the download button to save the APK file, then go to your Android Settings and enable 'Install from Unknown Sources' (or 'Install Unknown Apps' on Android 8+). Open the downloaded file, tap Install, and complete registration before your first match locks.",
  },
  {
    // Topic 3: Whether it is free
    question: "Is GoPlay 11 free to download and use?",
    answer:
      "Yes — the GoPlay 11 APK is completely free to download and install. There are no subscription fees. You can join free-entry practice contests to learn the game before depositing any money into your wallet.",
  },
  {
    // Topic 4: Play Store availability
    question: "Is GoPlay 11 available on the Google Play Store?",
    answer:
      "No. GoPlay 11 is not listed on the Google Play Store. You must download the APK directly from the official GoPlay 11 website. Always use the official link to ensure you get the genuine, unmodified app.",
  },
  {
    // Topic 5: How fantasy cricket works
    question: "How does fantasy cricket work on GoPlay 11?",
    answer:
      "You select 11 real cricketers from an upcoming match within a salary cap, then pick a Captain (2× points) and Vice-Captain (1.5× points). Points are awarded based on each player's actual performance — runs, wickets, catches, and more. The higher your team's total points at the end of the match, the better your contest ranking and prize.",
  },
  {
    // Topic 6: The referral code
    question: "How does the GoPlay 11 referral code work?",
    answer:
      "Enter a referral code in the designated field during registration to unlock welcome bonuses for both you and the person who referred you. You can also share your own referral code with friends — each successful sign-up earns you referral rewards as per the current campaign terms.",
  },
  {
    // Topic 7: Android version requirements
    question: "What Android version do I need to run GoPlay 11?",
    answer:
      "GoPlay 11 requires Android 5.0 (Lollipop) or higher. Most Android phones released after 2015 meet this requirement. If you are on Android 7 or below, enable Unknown Sources in Security settings; on Android 8 and above, grant install permission to your browser or file manager when prompted.",
  },
  {
    question: "Is GoPlay 11 safe for fantasy players in India?",
    answer:
      "GoPlay 11 is a real-money fantasy sports platform. Always download from the official site, review the app permissions it requests, and check the support and payout policies before adding funds. Start with free contests to get comfortable with the platform before depositing.",
  },
  ...GOPAY_11_FAQS,
];

export const REFERRAL_FAQS: FaqItem[] = [
  {
    question: "Where should I enter the Goplay11 referral code?",
    answer:
      "Open the register screen, find the referral code field, and enter the code before final account submission.",
  },
  {
    question: "What is the referral code in the affiliate link?",
    answer:
      "The code segment in this campaign URL is 6FHW28S2. Check current bonus terms in-app before joining contests.",
  },
];
