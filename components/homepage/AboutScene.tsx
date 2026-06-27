"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";
import { slideInLeftVariants, slideInRightVariants } from "@/lib/animations";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/19AZyYxTMa/", color: "#1877F2" },
  { name: "Instagram", href: "https://www.instagram.com/pauretascabili", color: "#E4405F" },
  { name: "YouTube", href: "https://www.youtube.com/@PaureTascabili", color: "#FF0000" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/antonio-andreozzi", color: "#0A66C2" },
  { name: "X", href: "https://x.com/pauretascabili", color: "#FFFFFF" },
  { name: "Pinterest", href: "https://www.pinterest.it/pauretascabili", color: "#BD081C" },
];

export default function AboutScene() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-void)" }}
      aria-labelledby="about-heading"
    >
      <GrainOverlay />

      {/* Background decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(61,43,79,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center">
        {/* Left: Text (3/5) */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-8"
          variants={prefersReduced ? {} : slideInLeftVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex flex-col gap-3">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase"
              style={{ color: "var(--accent-blood)" }}
            >
              L&apos;Autore
            </span>
            <h2
              id="about-heading"
              className="font-cinzel font-bold"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 40px rgba(139,26,26,0.3)",
              }}
            >
              CHI SONO
            </h2>
            <h3
              className="font-cinzel"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "var(--accent-gold)",
              }}
            >
              Antonio Andreozzi
            </h3>
          </div>

          <blockquote
            className="font-crimson text-lg leading-relaxed italic"
            style={{ color: "var(--accent-ghost)", borderLeft: "2px solid var(--accent-blood)", paddingLeft: "1.5rem" }}
          >
            &ldquo;Salve! Sono Antonio Andreozzi, il capo villaggio di questo piccolo angolo
            spettrale del web. Nel corso degli anni, la mia missione è diventata quella
            di creare storie che, pur provocando brividi, insegnano anche lezioni di
            coraggio, amicizia e resilienza. Ogni libro che scrivo è un invito a guardare
            sotto il letto e, invece di temere ciò che potrebbe nascondersi nell&apos;oscurità,
            a immaginare una storia che potrebbe essere raccontata.&rdquo;
          </blockquote>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-300"
                style={{
                  border: `1px solid ${s.color}30`,
                  color: "var(--accent-ghost)",
                }}
                whileHover={
                  prefersReduced
                    ? {}
                    : {
                        color: s.color,
                        borderColor: s.color,
                        boxShadow: `0 0 15px ${s.color}40`,
                      }
                }
                aria-label={`Segui Paure Tascabili su ${s.name}`}
              >
                {s.name}
              </motion.a>
            ))}
          </div>

          <CTAButton href="/chi-sono" variant="secondary" aria-label="Leggi di più su Antonio Andreozzi">
            Entra Nelle Storie →
          </CTAButton>
        </motion.div>

        {/* Right: Author image placeholder (2/5) */}
        <motion.div
          className="lg:col-span-2 flex justify-center"
          variants={prefersReduced ? {} : slideInRightVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="relative spotlight-img">
            <div
              className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-sm overflow-hidden author-img"
              style={{
                border: "1px solid rgba(184,134,11,0.3)",
                boxShadow: "0 0 40px rgba(61,43,79,0.4), 0 20px 60px rgba(0,0,0,0.7)",
              }}
            >
              <Image
                src="/antonio-andreozzi.jpg"
                alt="Antonio Andreozzi — Autore di Paure Tascabili"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 256px, 288px"
              />
            </div>

            {/* Gold frame corners */}
            {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-4 h-4 pointer-events-none`}
                style={{
                  borderTop: i < 2 ? "1px solid var(--accent-gold)" : "none",
                  borderBottom: i >= 2 ? "1px solid var(--accent-gold)" : "none",
                  borderLeft: i % 2 === 0 ? "1px solid var(--accent-gold)" : "none",
                  borderRight: i % 2 === 1 ? "1px solid var(--accent-gold)" : "none",
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
