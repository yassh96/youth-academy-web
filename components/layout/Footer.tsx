"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home",     href: "/"          },
  { label: "About Us", href: "/#about"    },
  { label: "Service",  href: "/#services" },
  { label: "Courses",  href: "/courses"   },
];

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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

const socialLinks = [
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/youthsuccessacademy.undri/",
    label: "Facebook",
  },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/youth.success.academy/",
    label: "Instagram",
  },
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
              Empowering students, professionals, entrepreneurs, and job seekers with practical training that builds confidence, enhances communication, and creates real career opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 border border-gray-800 hover:border-[#C9A558] hover:text-[#C9A558] transition-all duration-200"
                >
                  <Icon size={18} />
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
                <li key={link.label}>
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

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 text-[#C9A558]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contact Information
            </h3>
            <p className="text-sm font-bold text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
              Youth Success Academy
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#C9A558]" />
                <span className="leading-relaxed">
                  Office No. 402, 4th Floor, Landmark Centre,
                  <br />Opp. City International School, Near Euro School,
                  <br />Mohammed Wadi, Undri, Pune – 411060
                </span>
              </li>
              <li>
                <a
                  href="tel:+919175386755"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-[#C9A558]" />
                  +91 91753 86755
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@youthsuccessacademy.in"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-[#C9A558]" />
                  info@youthsuccessacademy.in
                </a>
              </li>
              <li>
                <a
                  href="https://youthsuccessacademy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Globe size={16} className="shrink-0 text-[#C9A558]" />
                  https://youthsuccessacademy.in
                </a>
              </li>
            </ul>
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
