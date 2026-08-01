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
    <section className="section-pad bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our Impact
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Trusted by Thousands of Students
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {trustStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Award;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="group relative rounded-2xl bg-white border border-gray-100 p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Subtle gold gradient on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C9A558] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A558]/10 mb-4 group-hover:bg-[#C9A558]/15 transition-colors">
                    <Icon
                      size={22}
                      className="text-[#C9A558]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Counter */}
                  <p
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  {/* Label */}
                  <p
                    className="text-xs text-gray-500 leading-snug"
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
