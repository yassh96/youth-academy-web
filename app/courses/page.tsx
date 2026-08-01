"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";
import { courses, courseCategories } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const benefits = [
  "Expert-led live sessions",
  "Practical assignments & projects",
  "Personalised feedback & mentorship",
  "Certificate upon completion",
  "Career support & placement assistance",
  "Lifetime access to course materials",
];

function CoursePlaceholder({ category }: { category: string }) {
  const bg: Record<string, string> = {
    Career:        "#1a1a1a",
    Leadership:    "#141414",
    Business:      "#1c1c1c",
    Communication: "#181818",
    Finance:       "#121212",
    Personality:   "#161616",
  };
  const icon: Record<string, string> = {
    Career:        "🎯",
    Leadership:    "🏆",
    Business:      "💼",
    Communication: "🎤",
    Finance:       "💰",
    Personality:   "✨",
  };
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2"
      style={{ background: bg[category] || "#1a1a1a" }}
    >
      <span className="text-4xl">{icon[category] || "📚"}</span>
      <span
        className="text-xs font-semibold uppercase tracking-widest text-gray-400"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {category}
      </span>
    </div>
  );
}

export default function CoursesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? courses
      : courses.filter((c) => c.category === active);

  return (
    <main>
      {/* Page hero */}
      <section className="bg-black pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
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
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            All Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Our <span className="text-[#C9A558]">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore our complete range of career and personal development 
            programs designed for ambitious students and young professionals.
          </motion.p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-[#C9A558]/10 border-y border-[#C9A558]/20 py-5">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C9A558] shrink-0" strokeWidth={2} />
                <span
                  className="text-xs font-medium text-gray-800"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2.5 mb-14">
              {courseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    active === cat
                      ? "bg-[#C9A558] text-black shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl border border-gray-100 card-shadow hover:card-shadow-hover overflow-hidden flex flex-col transition-all duration-300"
                  id={course.slug}
                >
                  {/* Placeholder image */}
                  <div className="relative h-48 overflow-hidden">
                    <CoursePlaceholder category={course.category} />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm border border-white/10"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {course.category}
                    </span>
                    {course.badge && (
                      <span
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A558] text-black"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h2
                      className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#C9A558] transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {course.title}
                    </h2>
                    <p
                      className="text-sm text-gray-500 leading-relaxed mb-6 flex-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 mb-6 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                        <Clock size={14} className="text-[#C9A558]" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                        <Monitor size={14} className="text-[#C9A558]" />
                        {course.mode}
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-gold text-sm py-3 justify-center w-full shadow-sm"
                    >
                      Apply Now
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400" style={{ fontFamily: "var(--font-inter)" }}>
                No courses found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Not Sure Which Course to Choose?
            </h2>
            <p
              className="text-gray-500 mb-8 text-base"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book a free counseling session and our mentors will guide you 
              to the right program for your goals.
            </p>
            <Link href="/contact" className="btn-gold py-3.5 px-8 text-sm inline-flex">
              Book Free Counseling
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
