"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#C9A558" : "none"}
          strokeWidth={i < rating ? 0 : 1.5}
          className={i < rating ? "text-[#C9A558]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function Avatar({ initials, name }: { initials: string; name: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-black bg-[#C9A558] shrink-0"
      aria-label={name}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="section-pad bg-white">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="Success Stories"
              title={
                <>
                  Hear From Our{" "}
                  <span className="text-[#C9A558]">Students</span>
                </>
              }
              subtitle="Real results from real students who transformed their careers and lives with YSA."
              center
            />
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-gray-100 card-shadow bg-gray-50">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Quote icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A558]/10 flex items-center justify-center">
                      <Quote
                        size={28}
                        className="text-[#C9A558]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <StarRating rating={t.rating} />

                    <p
                      className="text-base md:text-lg text-gray-700 leading-relaxed my-5 italic"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      &ldquo;{t.review}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <Avatar initials={t.initials} name={t.name} />
                      <div>
                        <p
                          className="font-semibold text-gray-900 text-sm"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs text-gray-500"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {t.role}
                        </p>
                        <p
                          className="text-xs text-[#C9A558] mt-0.5"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {t.course}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-[#C9A558]"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#C9A558] hover:text-[#C9A558] transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#C9A558] hover:text-[#C9A558] transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
