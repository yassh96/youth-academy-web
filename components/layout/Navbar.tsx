"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/#services" },
  { label: "Courses",    href: "/courses" },
  { label: "Blog",       href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png"
                alt="Youth Success Academy Logo"
                width={42}
                height={42}
                className="object-contain"
                priority
              />
              <div className="hidden sm:block">
                <span
                  className="font-outfit font-bold text-sm leading-tight block text-gray-900"
                >
                  Youth Success
                </span>
                <span
                  className="text-xs font-semibold tracking-wide leading-tight block"
                  style={{ color: "#C9A558" }}
                >
                  Academy
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href) && link.href !== "/#services";

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-[#C9A558] font-semibold"
                        : "text-gray-700 hover:text-black hover:bg-gray-100/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#C9A558]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Social Icons + CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Top Right Social Icons */}
              <div className="hidden sm:flex items-center gap-2 mr-1">
                <a
                  href="https://www.facebook.com/youthsuccessacademy.undri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 hover:border-[#C9A558] hover:text-[#C9A558] hover:bg-amber-50/50 transition-all duration-200"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="https://www.instagram.com/youth.success.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 hover:border-[#C9A558] hover:text-[#C9A558] hover:bg-amber-50/50 transition-all duration-200"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>

              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-gold text-xs uppercase tracking-wider py-2.5 px-5 font-semibold shadow-sm"
              >
                Book Free Counseling
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2.5 rounded-xl transition-colors text-gray-800 hover:bg-gray-100"
                aria-label="Toggle Navigation Menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-2xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                      isActive
                        ? "text-[#C9A558] bg-amber-50/60"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="flex items-center gap-3 py-2 px-4">
                <a
                  href="https://www.facebook.com/youthsuccessacademy.undri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 hover:border-[#C9A558] hover:text-[#C9A558] transition-colors"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/youth.success.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 hover:border-[#C9A558] hover:text-[#C9A558] transition-colors"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>

              <div className="pt-3 mt-2 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold w-full py-3.5 text-sm font-semibold justify-center shadow-md"
                >
                  Book Free Counseling
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
