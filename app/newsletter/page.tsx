"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  CalendarDays,
  BookOpen,
} from "lucide-react";
import { newsletterDocs } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

function DocCover({ doc }: { doc: (typeof newsletterDocs)[0] }) {
  const isAnnual = doc.type === "Annual Report";
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-4"
      style={{
        background: isAnnual
          ? "linear-gradient(135deg, #111 0%, #1a1a1a 100%)"
          : "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
      }}
    >
      <div className="w-28 h-36 bg-gray-900 rounded-xl border border-gray-700/80 flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#C9A558]" />
        <div className="w-8 h-8 rounded-full bg-[#C9A558]/20 border border-[#C9A558]/40 flex items-center justify-center mb-2">
          <BookOpen size={14} className="text-[#C9A558]" strokeWidth={1.5} />
        </div>

        <p
          className="text-[10px] font-bold text-white text-center px-2 leading-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          YSA
        </p>
        <p
          className="text-[8px] text-gray-400 text-center px-2 mt-1 leading-tight"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {doc.type}
        </p>

        <div className="mt-3 space-y-1 px-3 w-full">
          {[60, 80, 50].map((w, i) => (
            <div
              key={i}
              className="h-0.5 rounded-full bg-gray-700/80"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NewsletterPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-black pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,165,88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,88,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Publications
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Newsletters &amp;{" "}
            <span className="text-[#C9A558]">Annual Reports</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Stay informed about YSA&apos;s impact, milestones, upcoming programs,
            and community stories through our official publications.
          </motion.p>
        </div>
      </section>

      {/* Documents grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gray-200" />
              <span
                className="text-xs font-semibold uppercase tracking-widest text-gray-500 px-3"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {newsletterDocs.length} Publications Available
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsletterDocs.map((doc, i) => (
              <ScrollReveal key={doc.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group bg-white rounded-2xl border border-gray-100 card-shadow hover:card-shadow-hover overflow-hidden flex flex-col transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-950">
                    <DocCover doc={doc} />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm border border-white/10"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {doc.type}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarDays size={13} className="text-[#C9A558]" />
                      <span className="text-xs font-medium text-gray-500">
                        {doc.date}
                      </span>
                    </div>

                    <h3
                      className="text-base font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#C9A558] transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {doc.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-6 flex-1">
                      {doc.subtitle}
                    </p>

                    <div className="flex gap-2.5 pt-4 border-t border-gray-100">
                      <button
                        aria-label={`View ${doc.title} online`}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:border-[#C9A558] hover:text-[#C9A558] transition-all"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        <Eye size={14} />
                        View
                      </button>
                      <button
                        aria-label={`Download ${doc.title} PDF`}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#C9A558] text-xs font-semibold text-black hover:bg-[#D4B574] transition-all shadow-sm"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        <Download size={14} />
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <FileText size={40} className="text-[#C9A558] mx-auto mb-4" strokeWidth={1.5} />
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Never Miss a Publication
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Subscribe to receive our newsletters and annual reports directly
              in your inbox as soon as they are published.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Subscribe to newsletters"
                className="input-premium flex-1"
              />
              <button type="submit" className="btn-gold px-6 py-3 text-sm shrink-0">
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
