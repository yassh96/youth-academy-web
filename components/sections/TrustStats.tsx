"use client";

import { Users, BookOpen, Presentation, Briefcase, Award } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { trustStats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Users,
  BookOpen,
  Presentation,
  Briefcase,
  Award,
};

export default function TrustStats() {
  return (
    <section className="py-16 md:py-20 bg-[#FBF9F5] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-2.5"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our Impact &amp; Reach
            </p>
            <h2
              className="text-2xl md:text-4xl font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Trusted by Thousands of Ambitious Students
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {trustStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Award;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="group relative rounded-2xl bg-white border border-gray-200/80 p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Subtle gold accent on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C9A558] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A558]/10 mb-4 group-hover:bg-[#C9A558]/20 transition-colors">
                    <Icon
                      size={22}
                      className="text-[#C9A558]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Counter */}
                  <p
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  {/* Label */}
                  <p
                    className="text-xs font-medium text-gray-500 leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
