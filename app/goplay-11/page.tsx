import { JsonLd } from "@/components/json-ld";
import { Pick11HomePage } from "@/components/pick11-home-page";
import { buildFaqSchema, buildMetadata, buildSoftwareApplicationSchema } from "@/lib/seo";
import { HOME_FAQS } from "@/lib/site";

const PAGE_TITLE = "GoPlay11 APK Download | GoPlay 11 Fantasy Cricket App";
const PAGE_DESCRIPTION =
  "GoPlay11 APK is the fastest way to play fantasy cricket. Download GoPlay11 app free, join contests, and win real cash daily. Trusted by thousands of players.";
const SOFTWARE_DESCRIPTION =
  "GoPlay11 is a fantasy cricket app where users build teams, join contests, and win real cash across IPL, T20, and ODI matches.";
const OG_DESCRIPTION =
  "GoPlay11 APK — download free, join fantasy contests, and win real cash daily. The most trusted GoPlay 11 platform for fantasy cricket.";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/goplay-11",
  ogTitle: PAGE_TITLE,
  ogDescription: OG_DESCRIPTION,
  keywords: [
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
    "gopay11",
    "gopay 11",
    "goplay11 fantasy app",
    "goplay11 login",
    "goplay11 referral code",
  ],
});

export default function Goplay11Page() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(SOFTWARE_DESCRIPTION, "/goplay-11")} />
      <JsonLd data={buildFaqSchema(HOME_FAQS)} />
      <Pick11HomePage />
    </>
  );
}
