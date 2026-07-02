"use client";

import { useScroll, motion, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[99999] origin-left"
      style={{
        scaleX: scrollYProgress,
        background:
          "linear-gradient(to right, var(--accent-blood), var(--accent-ember))",
        boxShadow: "0 0 8px var(--glow-red)",
      }}
      aria-hidden="true"
    />
  );
}
