"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const achievements = [
  "Trained 5000+ students across Pune and Maharashtra",
  "Conducted 120+ workshops and corporate sessions",
  "10+ years of expertise in youth education and mentorship",
  "Partnered with leading colleges and corporates",
  "Speaker at national-level education conferences",
];

export default function AboutFounder() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Founder image */}
          <ScrollReveal direction="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Gold border frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#C9A558]/25"
                style={{ zIndex: 0 }}
              />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-[4/5] z-10">
                <Image
                  src="/founder.png"
                  alt="Founder of Youth Success Academy"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-black rounded-2xl p-5 shadow-2xl border border-gray-800">
                <p
                  className="text-3xl font-bold text-[#C9A558]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  10+
                </p>
                <p
                  className="text-xs text-gray-400 leading-tight"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Years of
                  <br />Experience
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal direction="right">
            <div>
              <SectionHeading
                eyebrow="About The Founder"
                title={
                  <>
                    A Mentor Who{" "}
                    <span className="text-[#C9A558]">Believes</span>{" "}
                    in You
                  </>
                }
              />

              <p
                className="text-sm md:text-base text-gray-500 leading-relaxed mt-5 mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                The founder of Youth Success Academy is a passionate educator, 
                career coach, and entrepreneur with over a decade of experience 
                in transforming young minds. Having worked with thousands of 
                students, fresh graduates, and young professionals, the mission 
                is simple: bridge the gap between academic learning and real-world success.
              </p>

              <p
                className="text-sm md:text-base text-gray-500 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Every program at YSA is designed with one goal — to give 
                students the practical skills, mindset, and confidence to 
                build careers they are proud of.
              </p>

              {/* Achievements */}
              <ul className="space-y-3 mb-8">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#C9A558] shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-sm text-gray-700"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-gold py-3.5 px-8 text-sm inline-flex">
                Book a Session
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
