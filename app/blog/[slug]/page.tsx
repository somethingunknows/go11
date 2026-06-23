import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CtaButtons } from "@/components/cta-buttons";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
} from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(dateValue: string): string {
  return new Date(dateValue).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getAuthor(post: { author?: string }): string {
  return post.author ?? "GoPlay11 Editorial Team";
}

function getReviewer(post: { reviewer?: string }): string {
  return post.reviewer ?? "GoPlay11 Content Review Team";
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Goplay11 Blog Article",
      description: "Fantasy content and Goplay11 app guides.",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    openGraphType: "article",
  });
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: getAuthor(post),
          reviewerName: getReviewer(post),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/goplay-11" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />
      {post.faq ? <JsonLd data={buildFaqSchema(post.faq)} /> : null}

      <section className="page-head">
        <div className="container hero-copy">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/goplay-11" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <p className="meta">
            Published: {formatDate(post.publishedAt)} | Updated:{" "}
            {formatDate(post.updatedAt)}
          </p>
          <p className="meta">
            Author: {getAuthor(post)} | Reviewed by: {getReviewer(post)}
          </p>
          <h1 className="hero-title">{post.title}</h1>
          <p className="lead">{post.description}</p>
        </div>
      </section>

      <section className="section section-tight">
        <article className="container prose-card content-stack">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </section>
          ))}

          <div className="card">
            <h2>Continue your next step</h2>
            <p>
              Ready to apply this strategy? Go to{" "}
              <Link className="text-link" href="/download">
                Download GoPlay11 APK
              </Link>{" "}
              and then use the{" "}
              <Link className="text-link" href="/how-to-play">
                How to play GoPlay11
              </Link>{" "}
              guide.
            </p>
            <CtaButtons />
          </div>
        </article>
      </section>

      {post.faq ? <FaqList items={post.faq} title="Article FAQs" /> : null}
    </>
  );
}
