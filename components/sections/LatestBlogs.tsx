"use client";

import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  Career:        "bg-gray-900 text-white",
  Leadership:    "bg-gray-900 text-white",
  Finance:       "bg-gray-900 text-white",
};

// Blog post placeholder image
function BlogPlaceholder({ category, id }: { category: string; id: number }) {
  const gradients: Record<string, string> = {
    Career:     "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    Leadership: "linear-gradient(135deg, #111111 0%, #222222 100%)",
    Finance:    "linear-gradient(135deg, #141414 0%, #252525 100%)",
  };
  const emojis: Record<string, string> = {
    Career: "🎯", Leadership: "🏆", Finance: "💰",
  };
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: gradients[category] || "#1a1a1a" }}
    >
      <div className="text-center">
        <div className="text-5xl mb-2">{emojis[category] || "📝"}</div>
        <div
          className="w-12 h-0.5 mx-auto rounded-full"
          style={{ background: "rgba(201,165,88,0.4)" }}
        />
      </div>
    </div>
  );
}

export default function LatestBlogs() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <SectionHeading
              eyebrow="From Our Blog"
              title={
                <>
                  Insights to{" "}
                  <span className="text-[#C9A558]">Inspire</span>{" "}
                  Your Journey
                </>
              }
              subtitle="Practical articles on career, leadership, business, and personal growth."
            />
            <Link
              href="/blog"
              className="btn-outline shrink-0 text-sm"
              aria-label="View all blog posts"
            >
              View All Posts
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group bg-white rounded-2xl border border-gray-100 card-shadow overflow-hidden flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <BlogPlaceholder category={post.category} id={post.id} />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-[#C9A558] text-black"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {post.date}
                    </span>
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      · {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-base font-semibold text-gray-900 mb-3 group-hover:text-[#C9A558] transition-colors duration-200 leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-sm text-gray-500 leading-relaxed flex-1 mb-5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog#${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A558] hover:gap-3 transition-all duration-200"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
