"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="section-pad bg-gradient-to-b from-white via-amber-50/40 to-amber-100/30 overflow-hidden relative border-t border-gray-100">
      {/* Gold glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #C9A558 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <ScrollReveal>
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A558]/40 bg-[#C9A558]/10 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A558] animate-pulse" />
            <span
              className="text-xs font-semibold text-[#C9A558] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Free Counseling Available Today
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready To <span className="text-[#C9A558]">Transform</span>
            <br />
            Your Future?
          </h2>

          <p
            className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Take the first step towards the career you deserve. Book your
            free one-on-one counseling session with our expert mentors today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href="/contact"
                id="final-cta-book"
                className="btn-gold py-4 px-10 text-base font-bold shadow-xl"
              >
                Book Your Free Counseling
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <Link href="/courses" className="btn-outline py-4 px-10 text-base font-semibold">
              Browse Courses
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              "✓ 100% Free Consultation",
              "✓ Expert One-on-One Mentors",
              "✓ No Commitment Required",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs font-semibold text-gray-600 flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
