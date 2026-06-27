"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import GrainOverlay from "@/components/shared/GrainOverlay";
import SectionTitle from "@/components/shared/SectionTitle";
import { cardVariants, staggerContainerVariants } from "@/lib/animations";

const cards = [
  {
    num: "01",
    title: "TRAPPOLA DI PAGINE",
    text: "Apri il Primo Capitolo e Lasciati Avvolgere dalle Sue Trame, Cercando Indizi che Ti Portino Verso l'Uscita... o Più a Fondo nel Racconto.",
    glow: "rgba(139, 26, 26, 0.4)",
  },
  {
    num: "02",
    title: "IL TEMPO SCORRE",
    text: "La Tensione Sale ad Ogni Pagina. Decifra gli Enigmi Nascosti e Svela i Segreti Prima che il Tempo Scada. Ogni Momento Conta.",
    glow: "rgba(61, 43, 79, 0.5)",
  },
  {
    num: "03",
    title: "FUGA VELOCE",
    text: "Una Volta Scoperta la Verità, Affrettati a Sfuggire dalle Grinfie del Racconto. Ogni Storia ha la Sua Via di Fuga, ma Non Tutti Riescono a Trovarla in Tempo.",
    glow: "rgba(184, 134, 11, 0.3)",
  },
];

function TiltCard({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      variants={prefersReduced ? {} : cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "var(--bg-card)",
        border: "1px solid rgba(139,26,26,0.2)",
        boxShadow: `0 0 40px ${card.glow}`,
        ...(prefersReduced
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d" as const,
              perspective: 800,
            }),
      }}
      whileHover={prefersReduced ? {} : { scale: 1.03, zIndex: 10 }}
      className="relative flex flex-col gap-6 p-8 rounded-sm overflow-hidden cursor-default"
      aria-label={card.title}
    >
      {/* Watermark number */}
      <span
        className="absolute right-4 top-4 font-cinzel font-black pointer-events-none select-none"
        style={{
          fontSize: "6rem",
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {card.num}
      </span>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-sm"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background: `radial-gradient(ellipse at center, ${card.glow} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <span
        className="font-cinzel text-xs tracking-[0.3em] uppercase"
        style={{ color: "var(--accent-blood)" }}
        aria-hidden="true"
      >
        {card.num}
      </span>

      <h3
        className="font-cinzel font-bold text-xl"
        style={{ color: "var(--accent-moon)" }}
      >
        {card.title}
      </h3>

      <p
        className="font-crimson text-base leading-relaxed"
        style={{ color: "var(--accent-ghost)" }}
      >
        {card.text}
      </p>

      {/* Bottom border line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 }}
        style={{ background: `linear-gradient(to right, var(--accent-blood), transparent)` }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function MysteryCardsScene() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{
        background: "var(--bg-dark)",
        backgroundImage:
          "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(61,43,79,0.3) 0%, transparent 60%)",
      }}
      aria-labelledby="mystery-heading"
    >
      <GrainOverlay />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
        <SectionTitle
          tag="Scopri il Mistero"
          title="TRE ATTI DELL'OSCURITÀ"
          subtitle="Ogni storia è una trappola meravigliosamente tesa. Scegli come entrare."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={prefersReduced ? {} : staggerContainerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, i) => (
            <TiltCard key={card.num} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
