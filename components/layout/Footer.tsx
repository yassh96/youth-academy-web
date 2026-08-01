"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Us",  href: "/#about"    },
  { label: "Courses",   href: "/courses"   },
  { label: "Services",  href: "/#services" },
  { label: "Blog",      href: "/blog"      },
  { label: "Contact",   href: "/contact"   },
];

// ── Inline SVG social icons ─────────────────────────────────

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { Icon: FacebookIcon,  href: "#", label: "Facebook"  },
  { Icon: XIcon,         href: "#", label: "X / Twitter"},
  { Icon: InstagramIcon, href: "#", label: "Instagram"  },
  { Icon: WhatsAppIcon,  href: "#", label: "WhatsApp"   },
  { Icon: YoutubeIcon,   href: "#", label: "YouTube"    },
];

export default function Footer() {
  return (
    <footer
      className="bg-black text-white"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Gold top divider */}
      <div className="h-px w-full bg-[#C9A558] opacity-60" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Youth Success Academy"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <p
                  className="font-bold text-base leading-tight"
                  style={{ fontFamily: "var(--font-outfit)", fontWeight: 700 }}
                >
                  Youth Success
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--color-gold)" }}
                >
                  Academy
                </p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering students and young professionals to build successful,
              purposeful careers through practical training and real-world skills.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 border border-gray-800 hover:border-[#C9A558] hover:text-[#C9A558] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 text-[#C9A558]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A558] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 text-[#C9A558]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[#C9A558]" />
                <span className="leading-relaxed">
                  YSA Office 1st Floor, Trapezium,
                  <br />Opp. Nyati Ebony, Corinthians Club,
                  <br />Nyati County, Undri,
                  <br />Pune, Maharashtra 411060
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@youthsuccessacademy.in"
                  className="flex gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="shrink-0 mt-0.5 text-[#C9A558]" />
                  info@youthsuccessacademy.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919175386755"
                  className="flex gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="shrink-0 mt-0.5 text-[#C9A558]" />
                  +91 9175386755
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 text-[#C9A558]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest courses, events, and career insights delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2.5"
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                className="w-full px-4 py-3 rounded-lg text-sm bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A558] transition-colors"
              />
              <button
                type="submit"
                className="btn-gold py-3 text-sm justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Youth Success Academy. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Designed with ♥ for India&apos;s next generation
          </p>
        </div>
      </div>
    </footer>
  );
}
