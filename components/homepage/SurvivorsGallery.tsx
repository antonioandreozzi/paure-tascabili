"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["10%", "-30%"]
  );

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

        {/* Horizontal scroll container */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 w-max"
          >
            {survivors.map((survivor, i) => (
              <motion.article
                key={survivor.name}
                initial={prefersReduced ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative flex flex-col gap-6 p-10 rounded-sm w-[80vw] max-w-xl flex-shrink-0"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(139,26,26,0.2)",
                  boxShadow: `0 0 60px ${survivor.glowColor}`,
                }}
                aria-label={`Testimonianza di ${survivor.name}`}
              >
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-sm pointer-events-none"
                  animate={
                    prefersReduced
                      ? {}
                      : { opacity: [0.3, 0.7, 0.3] }
                  }
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
                    style={{ boxShadow: `0 0 20px ${survivor.glowColor}`, border: "1px solid rgba(184,134,11,0.3)" }}
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
                    <h3
                      className="font-cinzel font-bold text-lg"
                      style={{ color: "var(--accent-moon)" }}
                    >
                      {survivor.name}
                    </h3>
                    <p
                      className="font-cinzel text-xs tracking-wider uppercase"
                      style={{ color: "var(--accent-ghost)" }}
                    >
                      {survivor.role}
                    </p>
                  </div>
                </div>

                {/* Quote with typewriter effect */}
                <motion.blockquote
                  className="relative z-10 font-crimson text-lg leading-relaxed italic"
                  style={{ color: "var(--accent-ghost)" }}
                  initial={prefersReduced ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.3 + 0.5 }}
                >
                  <span
                    className="absolute -top-2 -left-2 text-5xl font-cinzel leading-none"
                    style={{ color: "var(--accent-blood)", opacity: 0.4 }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  {survivor.quote}
                </motion.blockquote>
              </motion.article>
            ))}
          </motion.div>
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
