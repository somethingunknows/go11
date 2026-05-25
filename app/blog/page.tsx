import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CategoryFilter } from "@/components/category-filter";
import { CtaButtons } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getAllPosts } from "@/lib/blog";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

const PAGE_TITLE = "GoPlay 11 Blog — Fantasy Cricket Guides & Tips | GoPlay11";
const PAGE_DESCRIPTION =
  "GoPlay 11 guides, tips, and strategies. Download guides, team selection tips, referral programs, withdrawal help, and IPL fantasy cricket advice for 2026.";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  canonicalPath: "/blog",
  keywords: [
    "goplay 11 tips",
    "goplay11 strategies",
    "go play 11 winning tips",
    "goplay 11 team tips",
    "goplay11 fantasy cricket guide",
    "goplay 11 blog",
  ],
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Guides and Tips"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      >
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
        <CtaButtons />
      </PageHero>

      <section className="section section-tight">
        <div className="container">
          <CategoryFilter posts={posts} />
        </div>
      </section>
    </>
  );
}
