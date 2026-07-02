"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const prefersReduced = useReducedMotion();
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
      initial={prefersReduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={prefersReduced ? {} : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {tag && (
        <motion.span
          variants={prefersReduced ? {} : fadeUpVariants}
          className="font-cinzel text-xs tracking-[0.3em] uppercase text-[var(--accent-blood)]"
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        variants={prefersReduced ? {} : fadeUpVariants}
        className="font-cinzel text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-[var(--accent-moon)]"
        style={{
          textShadow: "0 0 40px rgba(139,26,26,0.3)",
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={prefersReduced ? {} : fadeUpVariants}
          className="font-crimson text-lg text-[var(--accent-ghost)] max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
