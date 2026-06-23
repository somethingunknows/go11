"use client";

import Link from "next/link";
import { useState } from "react";

import type { BlogPost } from "@/lib/blog";

type CategoryFilterProps = {
  posts: BlogPost[];
};

function formatDate(dateValue: string): string {
  return new Date(dateValue).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function CategoryFilter({ posts }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "goplay11">("all");

  const filteredPosts =
    activeCategory === "goplay11"
      ? posts.filter((post) => post.category === "goplay11")
      : posts;

  return (
    <>
      <div className="category-filter" role="group" aria-label="Filter posts by category">
        <button
          className={`filter-btn${activeCategory === "all" ? " filter-btn--active" : ""}`}
          onClick={() => setActiveCategory("all")}
          aria-pressed={activeCategory === "all"}
        >
          All Posts
        </button>
        <button
          className={`filter-btn${activeCategory === "goplay11" ? " filter-btn--active" : ""}`}
          onClick={() => setActiveCategory("goplay11")}
          aria-pressed={activeCategory === "goplay11"}
        >
          GoPlay11 Guides
        </button>
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <p className="meta">Updated: {formatDate(post.updatedAt)}</p>
            <p className="meta">By: {post.author ?? "GoPlay11 Editorial Team"}</p>
            <h2>
              <Link className="text-link" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link className="text-link" href={`/blog/${post.slug}`}>
              {post.slug.startsWith("gopay-11") ? "Read GoPlay11 guide" : "Read article"}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
