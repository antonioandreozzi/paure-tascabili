"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  drift: number;
}

export default function DustParticles() {
  const prefersReduced = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReduced) return;
    setParticles(
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 6,
        opacity: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 60,
      }))
    );
  }, [prefersReduced]);

  if (prefersReduced || particles.length === 0) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            backgroundColor:
              p.id % 3 === 0
                ? "var(--accent-blood)"
                : p.id % 3 === 1
                ? "var(--accent-moon)"
                : "var(--accent-gold)",
          }}
          animate={{
            y: [0, -640],
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, p.drift],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
