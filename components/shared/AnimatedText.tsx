"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wordVariants } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  staggerDelay = 0.08,
  once = true,
}: AnimatedTextProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
