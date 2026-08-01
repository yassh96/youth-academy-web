"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const allPosts = [
  ...blogPosts,
  {
    id: 4,
    slug: "how-to-network-effectively-as-a-student",
    category: "Career",
    title: "How to Network Effectively as a Student",
    excerpt:
      "Networking is a skill. Learn how to build genuine professional relationships that open doors — even before you graduate.",
    image: "",
    date: "June 15, 2025",
    readTime: "4 min read",
  },
  {
    id: 5,
    slug: "the-entrepreneurial-mindset-guide",
    category: "Entrepreneurship",
    title: "The Entrepreneurial Mindset: A Complete Guide",
    excerpt:
      "What separates entrepreneurs from employees? It starts with mindset. Here's how to develop the thinking patterns that build great businesses.",
    image: "",
    date: "May 30, 2025",
    readTime: "8 min read",
  },
  {
    id: 6,
    slug: "personal-branding-for-students",
    category: "Personality",
    title: "Personal Branding for Students in 2025",
    excerpt:
      "Your personal brand is your most valuable professional asset. Here's how to build one from scratch while still in college.",
    image: "",
    date: "May 12, 2025",
    readTime: "5 min read",
  },
];

const categoryEmoji: Record<string, string> = {
  Career:          "🎯",
  Leadership:      "🏆",
  Finance:         "💰",
  Entrepreneurship:"🚀",
  Personality:     "✨",
  Business:        "💼",
  All:             "📖",
};

const postBg: Record<number, string> = {
  1: "#1a1a1a",
  2: "#141414",
  3: "#1c1c1c",
  4: "#181818",
  5: "#121212",
  6: "#161616",
};

function PostPlaceholder({ post }: { post: (typeof allPosts)[0] }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: postBg[post.id] || "#1a1a1a" }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">
          {categoryEmoji[post.category] || "📝"}
        </div>
        <div
          className="w-10 h-0.5 mx-auto rounded-full"
          style={{ background: "rgba(201,165,88,0.4)" }}
        />
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return allPosts.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const searchMatch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const [featured, ...rest] = filtered;

  return (
    <main>
      {/* Hero */}
      <section className="bg-black pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,165,88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,88,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            YSA Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Insights & <span className="text-[#C9A558]">Inspiration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Practical articles on career development, leadership, entrepreneurship, and personal growth.
          </motion.p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Search + Filters */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
              {/* Search */}
              <div className="relative w-full md:max-w-md">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search blog posts"
                  className="input-premium pl-11 py-3"
                />
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[#C9A558] text-black shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400" style={{ fontFamily: "var(--font-inter)" }}>
                No articles found. Try a different search or category.
              </p>
            </div>
          ) : (
            <>
              {/* Featured article */}
              {featured && (
                <ScrollReveal>
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group bg-white rounded-3xl border border-gray-100 card-shadow hover:card-shadow-hover overflow-hidden mb-12"
                    id={featured.slug}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-64 md:h-auto relative overflow-hidden bg-gray-900">
                        <PostPlaceholder post={featured} />
                        <span
                          className="absolute top-5 left-5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C9A558] text-black"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {featured.category}
                        </span>
                        <span
                          className="absolute top-5 right-5 px-3.5 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Featured Post
                        </span>
                      </div>

                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-medium text-gray-400">
                            {featured.date}
                          </span>
                          <span className="text-gray-300">·</span>
                          <span className="text-xs font-medium text-gray-400">
                            {featured.readTime}
                          </span>
                        </div>

                        <h2
                          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#C9A558] transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {featured.title}
                        </h2>

                        <p
                          className="text-sm md:text-base text-gray-500 leading-relaxed mb-6"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {featured.excerpt}
                        </p>

                        <Link
                          href={`/blog#${featured.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A558] hover:gap-3 transition-all"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Read Full Article
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </ScrollReveal>
              )}

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {rest.map((post, i) => (
                    <motion.article
                      key={post.id}
                      id={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: i * 0.06 }}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl border border-gray-100 card-shadow hover:card-shadow-hover overflow-hidden flex flex-col transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-900">
                        <PostPlaceholder post={post} />
                        <span
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A558] text-black"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-xs font-medium text-gray-400 mb-2">
                          {post.date} · {post.readTime}
                        </p>

                        <h3
                          className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#C9A558] transition-colors leading-snug flex-1"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {post.title}
                        </h3>

                        <p
                          className="text-sm text-gray-500 leading-relaxed mb-5"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {post.excerpt}
                        </p>

                        <Link
                          href={`/blog#${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A558] hover:gap-2.5 transition-all mt-auto"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          Read Article
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
