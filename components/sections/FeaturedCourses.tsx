"use client";

import Link from "next/link";
import { Clock, Monitor, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

function CoursePlaceholder({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "Competitive Exams":      "#1A1A1A",
    Business:                 "#222222",
    "Performance & Mindset":  "#1E1E1E",
    Entrepreneurship:         "#181818",
    Leadership:               "#242424",
    "Soft Skills":            "#202020",
  };
  const icons: Record<string, string> = {
    "Competitive Exams":      "📖",
    Business:                 "💼",
    "Performance & Mindset":  "🧘",
    Entrepreneurship:         "🚀",
    Leadership:               "🏆",
    "Soft Skills":            "✨",
  };
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{ background: colors[category] || "#1A1A1A" }}
    >
      <span className="text-4xl mb-3">{icons[category] || "📚"}</span>
      <span
        className="text-xs font-semibold uppercase tracking-widest text-gray-400"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {category}
      </span>
    </div>
  );
}

export default function FeaturedCourses() {
  const featured = courses.slice(0, 6);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <SectionHeading
              eyebrow="Our Courses"
              title={
                <>
                  Programs Built for{" "}
                  <span className="text-[#C9A558]">Real Results</span>
                </>
              }
              subtitle="Practical, mentor-led programs designed for students, graduates, and young professionals."
            />
            <Link
              href="/courses"
              className="btn-outline shrink-0 text-sm"
              aria-label="View all courses"
            >
              View All Courses
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, i) => (
            <ScrollReveal key={course.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group bg-white rounded-2xl border border-gray-100 card-shadow overflow-hidden flex flex-col h-full"
              >
                {/* Image / Placeholder */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <CoursePlaceholder category={course.category} />
                  {/* Category badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-white backdrop-blur-sm border border-white/10"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {course.category}
                  </span>
                  {/* Optional badge */}
                  {course.badge && (
                    <span
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A558] text-black"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#C9A558] transition-colors duration-200 leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-5 flex-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock size={13} className="text-[#C9A558]" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Monitor size={13} className="text-[#C9A558]" />
                      {course.mode}
                    </span>
                  </div>

                  {/* CTA button */}
                  <Link
                    href={`/courses#${course.slug}`}
                    className="btn-outline text-sm py-2.5 justify-center w-full group-hover:bg-black group-hover:text-white transition-all duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
