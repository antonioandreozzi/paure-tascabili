"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import DustParticles from "@/components/shared/DustParticles";
import GrainOverlay from "@/components/shared/GrainOverlay";

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.7, ease: "easeOut" },
  }),
};

const title = "FUGGI O RESTA";

export default function HeroScene() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bookY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bookScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const bookOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      id="main-content"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "var(--bg-void)" }}
      aria-label="Hero — Paure Tascabili"
    >
      <GrainOverlay />
      <DustParticles />

      {/* Atmospheric gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(61,43,79,0.3) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 70% 50%, rgba(139,26,26,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full pt-24">
        {/* Left: Text */}
        <motion.div
          style={prefersReduced ? {} : { y: textY }}
          className="flex flex-col gap-8"
        >
          {/* Tag line */}
          <motion.span
            initial={prefersReduced ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cinzel text-xs tracking-[0.4em] uppercase text-[var(--accent-blood)]"
          >
            Collana Paure Tascabili
          </motion.span>

          {/* Title letter-by-letter */}
          <h1
            className="font-cinzel leading-tight"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              color: "var(--accent-moon)",
              textShadow: "0 0 60px rgba(139,26,26,0.4), 0 4px 30px rgba(0,0,0,0.8)",
            }}
            aria-label={title}
          >
            {title.split(" ").map((word, wordIndex, words) => {
              const charOffset = words.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);
              return (
                <span
                  key={wordIndex}
                  className="inline-block"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={charOffset + i}
                      variants={letterVariants}
                      initial={prefersReduced ? false : "hidden"}
                      animate="visible"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="font-crimson italic"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "var(--accent-ghost)",
            }}
          >
            Gioca a Nascondino con i Misteri
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="font-crimson text-lg leading-relaxed max-w-lg"
            style={{ color: "var(--accent-ghost)" }}
          >
            Benvenuto nel Buio della Fantasia, Dove Ogni Ombra Nasconde una Storia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <CTAButton
              href="/collana-paure-tascabili"
              variant="primary"
              aria-label="Scopri Il Quaderno degli Incubi Incompleti nella collana Paure Tascabili"
            >
              📖 Leggi Ora
            </CTAButton>
            <CTAButton
              href="/le-stanze"
              variant="secondary"
              aria-label="Scopri Le Stanze dei Segreti"
            >
              Le Stanze dei Segreti
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Right: Book Cover 3D */}
        <motion.div
          style={
            prefersReduced
              ? {}
              : { y: bookY, scale: bookScale, opacity: bookOpacity }
          }
          className="relative flex justify-center items-center"
          aria-hidden="true"
        >
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, rotateY: 25, x: 80 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: "1000px" }}
            className="relative"
          >
            {/* Book cover illustration */}
            <div
              className="relative w-72 h-96 lg:w-80 lg:h-[420px] rounded-sm overflow-hidden flex flex-col"
              style={{
                boxShadow:
                  "0 0 40px rgba(139,26,26,0.5), -20px 20px 60px rgba(0,0,0,0.8), 0 0 80px rgba(61,43,79,0.3)",
                border: "1px solid rgba(184,134,11,0.3)",
              }}
            >
              {/* Illustration zone (top ~62%) */}
              <div
                className="relative flex-[62] overflow-hidden"
                style={{ background: "linear-gradient(180deg, #14101c 0%, #1c1428 100%)" }}
              >
                {/* Moon glow */}
                <div
                  className="absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,213,176,0.9) 0%, rgba(232,213,176,0.25) 45%, transparent 75%)",
                    filter: "blur(2px)",
                  }}
                  aria-hidden="true"
                />

                {/* Fog drifting */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-14"
                  style={{
                    background: "linear-gradient(to top, rgba(61,43,79,0.6), transparent)",
                  }}
                  animate={prefersReduced ? {} : { opacity: [0.4, 0.7, 0.4], x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />

                {/* Bare trees + gothic door silhouette */}
                <svg
                  viewBox="0 0 320 260"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMax slice"
                  aria-hidden="true"
                >
                  <path
                    d="M0 260 L0 180 Q10 150 0 130 M0 130 Q30 115 20 85 M20 85 Q5 70 15 40"
                    stroke="rgba(10,8,14,0.9)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M320 260 L320 175 Q305 145 320 125 M320 125 Q285 110 300 80 M300 80 Q315 55 295 30"
                    stroke="rgba(10,8,14,0.9)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Ground / hill */}
                  <path d="M0 215 Q160 185 320 215 L320 260 L0 260 Z" fill="rgba(8,6,12,0.95)" />
                  {/* Gothic door */}
                  <path
                    d="M140 235 L140 195 Q140 170 160 170 Q180 170 180 195 L180 235 Z"
                    fill="#0A0710"
                    stroke="rgba(184,134,11,0.5)"
                    strokeWidth="2"
                  />
                  <circle cx="172" cy="212" r="2.5" fill="var(--accent-gold)" opacity="0.8" />
                </svg>

                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 70% at 50% 35%, transparent 35%, rgba(0,0,0,0.5) 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Title panel (bottom ~38%) */}
              <div
                className="relative flex-[38] flex flex-col items-center justify-center gap-2 px-6 text-center"
                style={{
                  background: "var(--bg-card)",
                  borderTop: "1px solid rgba(184,134,11,0.25)",
                }}
              >
                <span
                  className="font-cinzel text-xs tracking-[0.3em] uppercase"
                  style={{ color: "var(--accent-blood)" }}
                >
                  Paure Tascabili
                </span>
                <h2
                  className="font-cinzel font-black leading-tight"
                  style={{
                    fontSize: "clamp(1.3rem, 3.4vw, 1.7rem)",
                    color: "var(--accent-moon)",
                    textShadow: "0 0 20px rgba(139,26,26,0.4)",
                  }}
                >
                  FUGGI O RESTA
                </h2>
                <div className="w-8 h-[1px]" style={{ background: "var(--accent-gold)" }} />
                <span
                  className="font-crimson text-sm italic"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  Antonio Andreozzi
                </span>
              </div>

              {/* Gold frame corners */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div
                  key={pos}
                  className={`absolute ${pos} w-4 h-4 pointer-events-none z-10`}
                  style={{
                    borderTop: i < 2 ? "1px solid var(--accent-gold)" : "none",
                    borderBottom: i >= 2 ? "1px solid var(--accent-gold)" : "none",
                    borderLeft: i % 2 === 0 ? "1px solid var(--accent-gold)" : "none",
                    borderRight: i % 2 === 1 ? "1px solid var(--accent-gold)" : "none",
                    opacity: 0.7,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Shadow beneath book */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full blur-xl"
              style={{ background: "rgba(139,26,26,0.4)" }}
            />
          </motion.div>

          {/* Orbital glow rings */}
          <motion.div
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(139,26,26,0.15)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={prefersReduced ? {} : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        aria-hidden="true"
      >
        <span
          className="font-cinzel text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--accent-ghost)", opacity: 0.5 }}
        >
          Scorri
        </span>
        <motion.div
          className="w-[1px] h-10"
          style={{ background: "linear-gradient(to bottom, var(--accent-blood), transparent)" }}
          animate={prefersReduced ? {} : { scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
