"use client";

import { learningSteps } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function LearningProcess() {
  return (
    <section className="section-pad bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="How It Works"
              title={
                <>
                  Your Journey to{" "}
                  <span className="text-[#C9A558]">Success</span>
                </>
              }
              subtitle="A clear, structured path from where you are to where you want to be."
              center
              light
            />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full h-full origin-top"
              style={{
                background: "linear-gradient(to bottom, #C9A558, rgba(201,165,88,0.1))",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="flex flex-col gap-0">
            {learningSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={step.step} delay={i * 0.15}>
                  <div
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } mb-2`}
                  >
                    {/* Content card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className={`w-full md:w-[calc(50%-40px)] ${
                        isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                      }`}
                    >
                      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 hover:border-[#C9A558]/40 transition-colors duration-300 group">
                        <div className="flex items-start gap-4">
                          <span
                            className="text-3xl font-bold text-[#C9A558] opacity-40 group-hover:opacity-70 transition-opacity"
                            style={{ fontFamily: "var(--font-outfit)" }}
                          >
                            {step.step}
                          </span>
                          <div>
                            <h3
                              className="text-base font-semibold text-white mb-2 group-hover:text-[#C9A558] transition-colors"
                              style={{ fontFamily: "var(--font-outfit)" }}
                            >
                              {step.title}
                            </h3>
                            <p
                              className="text-sm text-gray-500 leading-relaxed"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center bg-black border-2 border-[#C9A558] z-10 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#C9A558]" />
                    </div>

                    {/* Arrow for mobile */}
                    {i < learningSteps.length - 1 && (
                      <div className="md:hidden absolute -bottom-5 left-5 text-[#C9A558]">
                        <ArrowDown size={18} />
                      </div>
                    )}
                  </div>

                  {/* Spacer between steps */}
                  {i < learningSteps.length - 1 && (
                    <div className="h-10 md:h-12" />
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
