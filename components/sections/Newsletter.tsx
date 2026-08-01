"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Newsletter() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="section-pad bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <ScrollReveal>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#C9A558]/10 mb-6">
            <Mail size={28} className="text-[#C9A558]" strokeWidth={1.5} />
          </div>

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-3"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Newsletter
          </p>

          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Stay Updated With{" "}
            <span className="text-[#C9A558]">Youth Success Academy</span>
          </h2>

          <p
            className="text-gray-500 mb-10 text-base leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get the latest courses, career tips, event announcements, and
            exclusive insights delivered straight to your inbox — no spam, ever.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1,   opacity: 1 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#C9A558]/10 border border-[#C9A558]/30"
            >
              <CheckCircle2
                size={22}
                className="text-[#C9A558]"
                strokeWidth={1.5}
              />
              <span
                className="text-sm font-medium text-gray-800"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                You&apos;re subscribed! Welcome to the YSA community 🎉
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              id="newsletter-form"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email for newsletter subscription"
                className="input-premium flex-1"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-gold text-sm px-6 py-3 shrink-0 disabled:opacity-70"
              >
                {loading ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}

          <p
            className="text-xs text-gray-400 mt-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Join 3,000+ subscribers · Unsubscribe anytime
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
