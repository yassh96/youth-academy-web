"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

            {/* Right CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
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
