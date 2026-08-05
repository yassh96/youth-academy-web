"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function GoldOrb({
  size,
  top,
  left,
  delay,
  opacity,
}: {
  size: number;
  top: string;
  left: string;
  delay: number;
  opacity: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: `radial-gradient(circle, rgba(201,165,88,${opacity}) 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
      animate={{ y: [0, -16, 0], scale: [1, 1.04, 1] }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-white text-gray-900 pt-28 pb-16 md:pt-36 md:pb-24 border-b border-gray-100"
    >
      {/* Soft warm gold background ambient glowing orbs */}
      <GoldOrb size={600} top="-15%" left="-12%" delay={0} opacity={0.12} />
      <GoldOrb size={450} top="35%" left="60%" delay={2} opacity={0.10} />
      <GoldOrb size={300} top="20%" left="40%" delay={1.5} opacity={0.08} />

      {/* Subtle light geometric grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,165,88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,88,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C9A558]/35 bg-[#C9A558]/10 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A558] animate-pulse" />
              <span
                className="text-xs font-semibold text-[#C9A558] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                India&apos;s Premier Youth Academy
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-black leading-[1.12] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Transform Your Skills.{" "}
              <span className="text-[#C9A558] block sm:inline">
                Transform Your Future.
              </span>
            </motion.h1>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Empowering students, professionals, entrepreneurs, and job seekers with practical training that builds confidence, enhances communication, and creates real career opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link href="/contact" className="btn-gold py-3.5 px-8 text-sm font-semibold shadow-md">
                Book Free Counseling
                <ArrowRight size={16} />
              </Link>
              <Link href="/courses" className="btn-outline py-3.5 px-8 text-sm font-semibold">
                Explore Courses
              </Link>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 max-w-lg"
            >
              <div>
                <p
                  className="text-2xl font-extrabold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  5000+
                </p>
                <p className="text-xs font-medium text-gray-500 mt-0.5">Students Trained</p>
              </div>
              <div>
                <p
                  className="text-2xl font-extrabold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  15+
                </p>
                <p className="text-xs font-medium text-gray-500 mt-0.5">Courses Offered</p>
              </div>
              <div>
                <p
                  className="text-2xl font-extrabold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  10+
                </p>
                <p className="text-xs font-medium text-gray-500 mt-0.5">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Founder Photo & Floating Stats Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Glow & frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C9A558]/25 via-amber-100/40 to-transparent blur-xl opacity-70" />

              {/* Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200/80 aspect-[4/5] shadow-2xl">
                <Image
                  src="/founder.png"
                  alt="Founder & Lead Mentor of Youth Success Academy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top"
                  priority
                />

                {/* Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="glass-dark rounded-2xl px-5 py-3.5 border border-[#C9A558]/30">
                    <p
                      className="text-white font-bold text-sm tracking-wide"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Founder &amp; Lead Mentor
                    </p>
                    <p className="text-[#C9A558] text-xs font-semibold mt-0.5">
                      Youth Success Academy
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 — Student Rating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-[#C9A558]/30 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⭐ 4.9 / 5 Rating
                  </span>
                </div>
                <p className="text-[11px] font-medium text-gray-500 mt-0.5">500+ Student Reviews</p>
              </motion.div>

              {/* Floating Badge 2 — Batch 2025 Open */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-[#C9A558]/30 shadow-xl"
              >
                <p className="text-xs font-bold text-[#C9A558]" style={{ fontFamily: "var(--font-outfit)" }}>
                  🎓 Batch 2025 Open
                </p>
                <p className="text-[11px] font-medium text-gray-600 mt-0.5">Limited Seats Available</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-outfit)" }}>
          Scroll Down
        </p>
        <ChevronDown size={18} className="text-[#C9A558] animate-bounce" />
      </motion.div>
    </section>
  );
}
