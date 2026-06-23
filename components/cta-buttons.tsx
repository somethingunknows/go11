import { AFFILIATE_LINK, AFFILIATE_REL } from "@/lib/site";

type CtaButtonsProps = {
  className?: string;
};

const CTA_ITEMS = [
  {
    label: "Download GoPlay11 APK",
    className: "btn btn-primary",
  },
  {
    label: "Play Now",
    className: "btn btn-secondary",
  },
  {
    label: "Get Bonus",
    className: "btn btn-secondary",
  },
] as const;

export function CtaButtons({ className }: CtaButtonsProps) {
  return (
    <div className={["cta-row", className].filter(Boolean).join(" ")}>
      {CTA_ITEMS.map((item) => (
        <a
          key={item.label}
          className={item.className}
          href={AFFILIATE_LINK}
          rel={AFFILIATE_REL}
          target="_blank"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
