"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";
import SectionTitle from "@/components/shared/SectionTitle";

const survivors = [
  {
    name: "Nathan",
    role: "Il Controllato dal Quaderno",
    quote:
      "Pensavo di controllare il quaderno, ma lui controllava me. Le parole prendevano vita, e gli errori diventavano incubi. Ho visto ombre muoversi da sole, sentito sussurri nel buio… e ho rischiato di non tornare indietro. Se trovate il quaderno, fate una sola cosa: chiudetelo.",
    glowColor: "rgba(139, 26, 26, 0.5)",
    image: "/nathan-illustration.webp",
  },
  {
    name: "Emily",
    role: "La Sopravvissuta al Gioco",
    quote:
      "Credevo fosse solo un gioco… poi l'ombra ha iniziato a muoversi. Il quaderno voleva qualcosa, e io ho capito troppo tardi che non era solo carta e inchiostro. Se lo trovate, NON scrivete. E soprattutto… NON lasciate niente a metà.",
    glowColor: "rgba(61, 43, 79, 0.6)",
    image: "/emily-illustration.webp",
  },
];

export default function SurvivorsGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReduced = useReducedMotion();

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => goTo((current - 1 + survivors.length) % survivors.length);
  const next = () => goTo((current + 1) % survivors.length);

  const survivor = survivors[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: prefersReduced ? 0 : dir * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: prefersReduced ? 0 : dir * -80 }),
  };

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-void)" }}
      aria-labelledby="survivors-heading"
    >
      <GrainOverlay />

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        <SectionTitle
          tag="Testimonianze"
          title="GALLERIA DEI SOPRAVVISSUTI"
          subtitle="Solo chi è riuscito a sfuggire può raccontare la sua storia… Ma a quale prezzo?"
        />

        <div className="relative flex items-center justify-center gap-4">
          {/* Freccia sinistra */}
          <button
            onClick={prev}
            aria-label="Sopravvissuto precedente"
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blood)]"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(139,26,26,0.4)",
              color: "var(--accent-moon)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Card con animazione */}
          <div className="relative w-full max-w-xl overflow-hidden" style={{ minHeight: 380 }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.article
                key={survivor.name}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative flex flex-col gap-6 p-10 rounded-sm w-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(139,26,26,0.2)",
                  boxShadow: `0 0 60px ${survivor.glowColor}`,
                }}
                aria-label={`Testimonianza di ${survivor.name}`}
              >
                {/* Glow */}
                <motion.div
                  className="absolute inset-0 rounded-sm pointer-events-none"
                  animate={prefersReduced ? {} : { opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: `radial-gradient(ellipse at center, ${survivor.glowColor} 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Avatar */}
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      boxShadow: `0 0 20px ${survivor.glowColor}`,
                      border: "1px solid rgba(184,134,11,0.3)",
                    }}
                  >
                    <Image
                      src={survivor.image}
                      alt={`Illustrazione di ${survivor.name}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-lg" style={{ color: "var(--accent-moon)" }}>
                      {survivor.name}
                    </h3>
                    <p className="font-cinzel text-xs tracking-wider uppercase" style={{ color: "var(--accent-ghost)" }}>
                      {survivor.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="relative z-10 font-crimson text-lg leading-relaxed italic"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  <span
                    className="absolute -top-2 -left-2 text-5xl font-cinzel leading-none"
                    style={{ color: "var(--accent-blood)", opacity: 0.4 }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  {survivor.quote}
                </blockquote>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Freccia destra */}
          <button
            onClick={next}
            aria-label="Sopravvissuto successivo"
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blood)]"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(139,26,26,0.4)",
              color: "var(--accent-moon)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Indicatori punto */}
        <div className="flex justify-center gap-3" aria-label="Navigazione sopravvissuti">
          {survivors.map((s, i) => (
            <button
              key={s.name}
              onClick={() => goTo(i)}
              aria-label={`Vai a ${s.name}`}
              aria-current={i === current ? "true" : undefined}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === current ? "var(--accent-blood)" : "rgba(139,26,26,0.3)",
                transform: i === current ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <CTAButton
            href="https://amzn.to/4iFM7TY"
            variant="primary"
            external
            aria-label="Scopri la storia su Amazon"
          >
            Scopri la Storia Completa
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
