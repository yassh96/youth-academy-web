"use client";

import { MapPin, Mail, Phone, PhoneCall } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LeadContactForm from "@/components/ui/LeadContactForm";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    lines: [
      "YSA Office, 1st Floor, Trapezium",
      "Opp. Nyati Ebony, Corinthians Club",
      "Nyati County, Undri, Pune",
      "Maharashtra 411060",
    ],
    href: "https://maps.google.com/?q=Nyati+County+Undri+Pune",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["info@youthsuccessacademy.in"],
    href: "mailto:info@youthsuccessacademy.in",
  },
  {
    icon: Phone,
    label: "Call Us Direct",
    lines: ["+91 9175386755"],
    href: "tel:+919175386755",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50/50 via-white to-white pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden text-gray-900 border-b border-gray-100">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,165,88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,88,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A558] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Let&apos;s <span className="text-[#C9A558]">Connect</span>
          </h1>
          <p
            className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Have a question or ready to take your career to the next level? Connect directly with our admissions team on WhatsApp.
          </p>
        </div>
      </section>

      {/* Quick action strip */}
      <div className="bg-[#FDF9F0] border-b border-[#C9A558]/20 py-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/919175386755?text=Hello%20Youth%20Success%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20your%20programs!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20BD5C] transition-colors shadow-sm"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <WhatsAppIcon size={18} />
            Instant WhatsApp Chat (+91 9175386755)
          </a>
          <a
            href="tel:+919175386755"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors shadow-sm"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <PhoneCall size={15} />
            Call Admissions (+91 9175386755)
          </a>
        </div>
      </div>

      {/* Main contact section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — Info & Map */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Contact <span className="text-[#C9A558]">Information</span>
                  </h2>

                  <div className="space-y-6 mb-10">
                    {contactInfo.map(({ icon: Icon, label, lines, href }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#C9A558]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A558]/20 transition-colors">
                          <Icon size={20} className="text-[#C9A558]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1"
                            style={{ fontFamily: "var(--font-outfit)" }}
                          >
                            {label}
                          </p>
                          {lines.map((line, i) => (
                            <p
                              key={i}
                              className="text-sm font-medium text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Map Embed */}
                  <div className="rounded-2xl overflow-hidden border border-gray-200 card-shadow">
                    <iframe
                      title="YSA Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8927066218844!2d73.8891!3d18.4601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebd7b1c4b1c3%3A0xf68a5c5c4c1b3e4e!2sNyati%20County%2C%20Undri%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Lead WhatsApp Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <LeadContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
