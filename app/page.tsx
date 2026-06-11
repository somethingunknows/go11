import { JsonLd } from "@/components/json-ld";
import { Pick11HomePage } from "@/components/pick11-home-page";
import { buildFaqSchema, buildMetadata, buildSoftwareApplicationSchema } from "@/lib/seo";
import { HOME_FAQS } from "@/lib/site";

const PAGE_TITLE = "GoPay 11 APK Download | GoPay11 Fantasy Cricket App";
const PAGE_DESCRIPTION =
  "GoPay 11 APK is the fastest way to play fantasy cricket. Download GoPay 11 app free, join contests, and win real cash daily. Trusted by thousands of players.";
const SOFTWARE_DESCRIPTION =
  "GoPay 11 is a fantasy cricket app where users build teams, join contests, and win real cash across IPL, T20, and ODI matches.";
const OG_DESCRIPTION =
  "GoPay 11 APK — download free, join fantasy contests, and win real cash daily. The most trusted GoPlay11 platform for fantasy cricket.";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/",
  ogTitle: PAGE_TITLE,
  ogDescription: OG_DESCRIPTION,
  keywords: [
    "gopay 11",
    "gopay 11 apk",
    "gopay 11 download",
    "gopay 11 apk download",
    "gopay 11 app",
    "gopay11",
    "gopay 11 app download",
    "go play 11",
    "goplay11",
    "goplay11 apk",
    "goplay11 apk download",
    "goplay11 app",
    "goplay11 fantasy app",
    "goplay11 login",
    "goplay11 referral code",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(SOFTWARE_DESCRIPTION, "/download")} />
      <JsonLd data={buildFaqSchema(HOME_FAQS)} />
      <Pick11HomePage />
    </>
  );
}
