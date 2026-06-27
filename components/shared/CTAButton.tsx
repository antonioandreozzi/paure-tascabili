"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  "aria-label"?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  "aria-label": ariaLabel,
}: CTAButtonProps) {
  const prefersReduced = useReducedMotion();

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-cinzel text-sm tracking-widest uppercase transition-all duration-300 focus-visible:outline-none";

  const primaryClasses =
    "bg-[var(--accent-blood)] text-[var(--accent-moon)] hover:bg-[var(--accent-ember)] glow-cta";

  const secondaryClasses =
    "border border-[var(--accent-blood)] text-[var(--accent-moon)] hover:bg-[var(--accent-blood)]/20";

  const combinedClasses = `${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${className}`;

  const MotionComponent = motion.div;

  const content = external ? (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
      {children}
    </Link>
  );

  if (prefersReduced) return content;

  return (
    <MotionComponent
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex"
    >
      {content}
    </MotionComponent>
  );
}
