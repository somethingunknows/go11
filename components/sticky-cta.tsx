import { AFFILIATE_LINK, AFFILIATE_REL } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="sticky-cta" role="complementary">
      <div className="container sticky-shell">
        <p className="sticky-copy">
          Ready to install? Get the latest GoPlay11 app and claim signup rewards.
        </p>
        <a
          className="btn btn-primary"
          href={AFFILIATE_LINK}
          rel={AFFILIATE_REL}
          target="_blank"
        >
          Download GoPlay11 APK
        </a>
      </div>
    </div>
  );
}
