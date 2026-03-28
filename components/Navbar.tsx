"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Menu } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 300ms ease, border-color 300ms ease",
          backgroundColor: scrolled ? "var(--background)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          opacity: 0.98,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber/40">
              <Image src="/images/logo.jpg" alt="GO-SSIP Café" width={40} height={40} className="object-cover warm-grade" />
            </div>
            <span
              className="text-foreground font-bold text-lg leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              GO-SSIP<br />
              <span className="text-xs font-normal tracking-widest text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>CAFÉ & RESTRO</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="tel:+919920564615"
              className="flex items-center gap-2 px-5 py-2 rounded-md font-semibold text-sm text-primary-foreground transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "var(--primary)", fontFamily: "var(--font-dm-sans)" }}
            >
              <Phone size={14} />
              Call Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "var(--background)" }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40">
                  <Image src="/images/logo.jpg" alt="GO-SSIP Café" width={40} height={40} className="object-cover" />
                </div>
                <span className="text-foreground font-bold" style={{ fontFamily: "var(--font-playfair)" }}>GO-SSIP</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-foreground hover:text-primary p-2">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-bold py-3 border-b border-border/50 transition-colors ${
                      pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom contact info */}
            <div className="px-8 pb-12 flex flex-col gap-3">
              <a href="tel:+919920564615" className="flex items-center gap-3 text-foreground/70 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                <Phone size={16} className="text-primary" />
                +91 992-056-4615
              </a>
              <a href="https://instagram.com/gossip_cafeandrestro" target="_blank" rel="noopener noreferrer" className="text-foreground/70 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                @gossip_cafeandrestro
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
