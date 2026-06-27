"use client";

import { motion, useReducedMotion } from "framer-motion";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";
import { staggerContainerVariants, listItemVariants, fadeUpVariants } from "@/lib/animations";

const manifestoText =
  "Accompagnami nei Sentieri Nascosti dell'Immaginario, Dove il Sussurro del Vento Nasconde Segreti Sconcertanti e Ogni Ombra Svela un Compagno Inaspettato nella Danza del Crepuscolo.";

const features = [
  { icon: "👁️", label: "Racconti Incantati" },
  { icon: "🌙", label: "Avventure Notturne" },
  { icon: "👻", label: "Amici Spettrali" },
  { icon: "🔦", label: "Esplorazioni Misteriose" },
  { icon: "✨", label: "Magie e Sortilegi" },
];

export default function ManifestoScene() {
  const prefersReduced = useReducedMotion();
  const words = manifestoText.split(" ");

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
      aria-labelledby="manifesto-heading"
    >
      <GrainOverlay />

      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 w-[1px] h-24 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--accent-blood), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-16">
        {/* Tag */}
        <motion.span
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-cinzel text-xs tracking-[0.4em] uppercase"
          style={{ color: "var(--accent-blood)" }}
        >
          Il Manifesto
        </motion.span>

        {/* Word-by-word animated text */}
        <motion.p
          className="font-cinzel leading-relaxed"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
            color: "var(--accent-moon)",
          }}
          id="manifesto-heading"
          variants={
            prefersReduced
              ? {}
              : {
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }
          }
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={
                prefersReduced
                  ? {}
                  : {
                      hidden: { opacity: 0, color: "var(--accent-ghost)" },
                      visible: {
                        opacity: 1,
                        color: "var(--accent-moon)",
                        transition: { duration: 0.5 },
                      },
                    }
              }
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={prefersReduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-xs h-[1px] origin-center"
          style={{ background: "linear-gradient(to right, transparent, var(--accent-blood), transparent)" }}
        />

        {/* Feature list */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6"
          variants={prefersReduced ? {} : staggerContainerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          role="list"
        >
          {features.map((f) => (
            <motion.li
              key={f.label}
              variants={prefersReduced ? {} : listItemVariants}
              className="flex items-center gap-3 px-6 py-3 rounded-sm"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(139,26,26,0.2)",
              }}
            >
              <span className="text-xl" aria-hidden="true">{f.icon}</span>
              <span
                className="font-cinzel text-xs tracking-widest uppercase"
                style={{ color: "var(--accent-moon)" }}
              >
                {f.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          variants={prefersReduced ? {} : fadeUpVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTAButton
            href="https://www.amazon.it/dp/B0D8ZPN48N?binding=paperback&qid=1782424260&sr=8-1&ref=dbs_dp_rwt_sb_pc_tpbk"
            variant="primary"
            external
            aria-label="Osa sfidare l'ignoto e ordina ora la collana Paure Tascabili su Amazon"
          >
            Osa Sfidare l&apos;Ignoto — Ordina Ora
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
