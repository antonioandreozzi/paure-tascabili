"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface BookPage {
  chapterLabel?: string;
  chapterTitle?: string;
  paragraphs: string[];
}

interface BookReaderProps {
  pages: BookPage[];
  title: string;
}

export default function BookReader({ pages, title }: BookReaderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReduced = useReducedMotion();
  const total = pages.length;
  const page = pages[index];

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= total) return;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index, total]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const flipVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 70 : -70,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Book frame — dark gothic cover housing a light paper page */}
      <div
        className="relative w-full max-w-2xl rounded-sm overflow-hidden p-3 sm:p-5"
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(184,134,11,0.3)",
          boxShadow: "0 0 60px rgba(61,43,79,0.3), 0 30px 80px rgba(0,0,0,0.6)",
          perspective: "1800px",
        }}
        role="region"
        aria-label={`Lettore: ${title}, pagina ${index + 1} di ${total}`}
      >
        {/* Paper page */}
        <div
          className="relative min-h-[420px] sm:min-h-[480px] px-8 sm:px-14 py-12 sm:py-16 rounded-sm overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            background:
              "radial-gradient(ellipse 120% 100% at 50% 0%, #F5ECD7 0%, #EFE2C7 100%)",
            boxShadow: "inset 0 0 60px rgba(120,90,40,0.15), 0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Subtle paper vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ boxShadow: "inset 0 0 90px rgba(80,60,30,0.18)" }}
          />

          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={prefersReduced ? undefined : flipVariants}
              initial={prefersReduced ? { opacity: 0 } : "enter"}
              animate={prefersReduced ? { opacity: 1 } : "center"}
              exit={prefersReduced ? { opacity: 0 } : "exit"}
              transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
              style={{ transformOrigin: direction > 0 ? "left center" : "right center" }}
              className="relative flex flex-col gap-5"
            >
              {page.chapterLabel && (
                <div className="flex flex-col items-center gap-2 text-center mb-2">
                  <span
                    className="font-cinzel text-xs tracking-[0.4em] uppercase"
                    style={{ color: "#8B1A1A" }}
                  >
                    {page.chapterLabel}
                  </span>
                  {page.chapterTitle && (
                    <h3
                      className="font-cinzel font-bold text-2xl"
                      style={{ color: "#231a10" }}
                    >
                      {page.chapterTitle}
                    </h3>
                  )}
                  <div className="w-12 h-[1px]" style={{ background: "#B8860B" }} aria-hidden="true" />
                </div>
              )}

              {page.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`font-crimson text-lg sm:text-xl leading-relaxed ${
                    p.startsWith("“") || p.startsWith("‘") ? "italic" : ""
                  }`}
                  style={{
                    color:
                      p.startsWith("“") && i === page.paragraphs.length - 1 && page === pages[total - 1]
                        ? "#8B1A1A"
                        : "#2A2014",
                  }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Page number */}
          <div
            className="absolute bottom-4 right-6 font-cinzel text-xs tracking-widest"
            style={{ color: "#5a4a32", opacity: 0.7 }}
            aria-hidden="true"
          >
            {index + 1} / {total}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="font-cinzel text-xs tracking-widest uppercase px-5 py-3 rounded-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent-blood)]/10"
          style={{ border: "1px solid rgba(139,26,26,0.4)", color: "var(--accent-moon)" }}
          aria-label="Pagina precedente"
        >
          ← Indietro
        </button>

        {/* Page dots (compact, only show on larger page counts as a slider) */}
        <input
          type="range"
          min={0}
          max={total - 1}
          value={index}
          onChange={(e) => goTo(Number(e.target.value))}
          className="w-32 sm:w-48 accent-[var(--accent-blood)]"
          aria-label="Vai a pagina"
        />

        <button
          onClick={goNext}
          disabled={index === total - 1}
          className="font-cinzel text-xs tracking-widest uppercase px-5 py-3 rounded-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent-blood)]/10"
          style={{ border: "1px solid rgba(139,26,26,0.4)", color: "var(--accent-moon)" }}
          aria-label="Pagina successiva"
        >
          Avanti →
        </button>
      </div>
    </div>
  );
}
