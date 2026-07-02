"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Sono", href: "/chi-sono" },
  {
    label: "Libri",
    href: "#",
    children: [
      { label: "Collana Paure Tascabili", href: "/collana-paure-tascabili" },
      { label: "Singoli Volumi", href: "/singoli-volumi" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Il Leggendario", href: "/leggendario" },
  { label: "Risorse Gratuite", href: "/risorse-gratuite" },
  { label: "Anteprime", href: "/anteprime" },
  { label: "FAQ", href: "/faq" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLogoClick = useCallback(() => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    if (newCount >= 3) {
      setLogoClicks(0);
      if (!prefersReduced) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 800);
      }
    }
  }, [logoClicks, prefersReduced]);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[9998] transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10,10,15,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(139,26,26,0.2)"
            : "none",
        }}
      >
        <nav
          role="navigation"
          aria-label="Navigazione principale"
          className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="font-cinzel text-lg font-black tracking-widest text-[var(--accent-moon)] hover:text-[var(--accent-blood)] transition-colors"
            aria-label="Paure Tascabili - Torna alla homepage"
          >
            <motion.span
              animate={
                glitching && !prefersReduced
                  ? {
                      x: [0, -3, 3, -2, 2, 0],
                      skewX: [0, -3, 3, 0],
                      filter: [
                        "hue-rotate(0deg)",
                        "hue-rotate(90deg)",
                        "hue-rotate(-90deg)",
                        "hue-rotate(0deg)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              PAURE TASCABILI
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative">
                  <button
                    onClick={() => setBooksOpen(!booksOpen)}
                    className="font-cinzel text-xs tracking-widest uppercase text-[var(--accent-ghost)] hover:text-[var(--accent-blood)] transition-colors animated-underline flex items-center gap-1"
                    aria-expanded={booksOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <span
                      style={{
                        transform: booksOpen ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s",
                        display: "inline-block",
                      }}
                    >
                      ▾
                    </span>
                  </button>
                  <AnimatePresence>
                    {booksOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[220px] rounded-sm overflow-hidden"
                        style={{
                          background: "var(--bg-card)",
                          border: "1px solid rgba(139,26,26,0.3)",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                        }}
                        role="list"
                      >
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setBooksOpen(false)}
                              className="block px-5 py-3 font-cinzel text-xs tracking-wider uppercase text-[var(--accent-ghost)] hover:text-[var(--accent-moon)] hover:bg-[var(--accent-blood)]/20 transition-all"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`font-cinzel text-xs tracking-widest uppercase animated-underline transition-colors ${
                      link.label === "Contatti"
                        ? "px-4 py-2 border border-[var(--accent-blood)] text-[var(--accent-moon)] hover:bg-[var(--accent-blood)]/20 glow-cta"
                        : "text-[var(--accent-ghost)] hover:text-[var(--accent-blood)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[1px] w-6 bg-[var(--accent-moon)]"
                animate={
                  prefersReduced
                    ? {}
                    : mobileOpen
                    ? i === 0
                      ? { rotate: 45, y: 6 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { y: "-100%" }}
            animate={prefersReduced ? { opacity: 1 } : { y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[9997] flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(10,10,15,0.98)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
          >
            <ul className="flex flex-col items-center gap-6" role="list">
              {navLinks.map((link, i) =>
                link.children ? (
                  <li key={link.label} className="flex flex-col items-center gap-3">
                    <span className="font-cinzel text-xl tracking-widest uppercase text-[var(--accent-ghost)]">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-cinzel text-sm tracking-widest uppercase text-[var(--accent-moon)] hover:text-[var(--accent-blood)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </li>
                ) : (
                  <motion.li
                    key={link.label}
                    initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                    animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-cinzel text-2xl tracking-widest uppercase text-[var(--accent-moon)] hover:text-[var(--accent-blood)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
