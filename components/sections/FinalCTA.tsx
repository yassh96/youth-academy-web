"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="section-pad bg-black overflow-hidden relative">
      {/* Gold glow blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.08] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #C9A558 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <ScrollReveal>
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A558]/30 bg-[#C9A558]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A558] animate-pulse" />
            <span
              className="text-xs font-medium text-[#C9A558] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Free Counseling Available
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready To{" "}
            <span className="text-[#C9A558]">Transform</span>
            <br />
            Your Future?
          </h2>

          <p
            className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Take the first step towards the career you deserve. Book your
            free one-on-one counseling session with our expert mentors today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href="/contact"
                id="final-cta-book"
                className="btn-gold py-4 px-10 text-base"
              >
                Book Your Free Counseling
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <Link href="/courses" className="btn-outline-white py-4 px-10 text-base">
              Browse Courses
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              "✓ 100% Free Consultation",
              "✓ Expert Mentors",
              "✓ No Commitment Required",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs text-gray-500"
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
