"use client";

import {
  Compass,
  TrendingUp,
  BarChart2,
  PiggyBank,
  Mic2,
  Sparkles,
} from "lucide-react";
import { whyChooseFeatures } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  TrendingUp,
  BarChart2,
  PiggyBank,
  Mic2,
  Sparkles,
};

export default function WhyChooseYSA() {
  return (
    <section id="services" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="Why Choose YSA"
              title={
                <>
                  Everything You Need to{" "}
                  <span className="text-[#C9A558]">Succeed</span>
                </>
              }
              subtitle="We blend practical training with real-world mentorship to build skills that matter — in your career and in life."
              center
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Compass;
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 card-shadow h-full cursor-default"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-[#C9A558]/30 mb-5 group-hover:border-[#C9A558] group-hover:bg-[#C9A558]/5 transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-[#C9A558]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#C9A558] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-px bg-gray-100 group-hover:bg-[#C9A558]/30 transition-colors duration-300" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
