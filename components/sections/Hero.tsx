"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Award, Users, BookOpen } from "lucide-react";

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
        filter: "blur(50px)",
      }}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
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
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-black text-white pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Background orbs */}
      <GoldOrb size={500} top="-10%" left="-10%" delay={0} opacity={0.18} />
      <GoldOrb size={350} top="40%" left="65%" delay={2} opacity={0.15} />
      <GoldOrb size={250} top="20%" left="45%" delay={1.5} opacity={0.1} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,165,88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,88,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A558]/35 bg-[#C9A558]/10 mb-6"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-white leading-[1.12] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Empowering{" "}
              <span className="text-[#C9A558]">Students</span>{" "}
              To Build{" "}
              <span className="relative inline-block">
                Successful
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#C9A558] rounded-full opacity-80"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>{" "}
              Careers
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Practical learning, leadership development, career guidance, business knowledge and real-world skills that prepare students for life beyond academics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link href="/contact" className="btn-gold py-3.5 px-7 text-sm font-semibold shadow-lg">
                Book Free Counseling
                <ArrowRight size={16} />
              </Link>
              <Link href="/courses" className="btn-outline-white py-3.5 px-7 text-sm font-semibold">
                Explore Courses
              </Link>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/80 max-w-lg"
            >
              <div>
                <p
                  className="text-2xl font-bold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  5000+
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Students Trained</p>
              </div>
              <div>
                <p
                  className="text-2xl font-bold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  15+
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Courses Offered</p>
              </div>
              <div>
                <p
                  className="text-2xl font-bold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  10+
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Founder Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#C9A558]/40 to-transparent opacity-60 blur-md" />

              {/* Photo Box */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-[#C9A558]/30 aspect-[4/5] shadow-2xl">
                <Image
                  src="/founder.png"
                  alt="Founder of Youth Success Academy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top"
                  priority
                />

                {/* Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <div className="glass-dark rounded-2xl px-5 py-3.5 border border-[#C9A558]/30">
                    <p
                      className="text-white font-bold text-sm tracking-wide"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      Founder & Lead Mentor
                    </p>
                    <p className="text-[#C9A558] text-xs font-medium mt-0.5">
                      Youth Success Academy
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-2 sm:-left-6 glass-dark rounded-2xl px-4 py-2.5 border border-[#C9A558]/30 shadow-xl"
              >
                <p className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  ⭐ 4.9 / 5 Rating
                </p>
                <p className="text-[11px] text-gray-400">500+ Student Reviews</p>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 right-2 sm:-right-6 glass-dark rounded-2xl px-4 py-2.5 border border-[#C9A558]/30 shadow-xl"
              >
                <p className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  🎓 Batch 2025 Open
                </p>
                <p className="text-[11px] text-gray-400">Limited Seats</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
