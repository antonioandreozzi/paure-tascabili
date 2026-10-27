"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface LegendPoint {
  id: number;
  x: number;
  y: number;
  name: string;
  icon: "occhio" | "fiamma" | "lupo" | "corvo";
}

const ICONS: Record<LegendPoint["icon"], string> = {
  occhio: "M -8 0 Q 0 -7 8 0 Q 0 7 -8 0 Z M 0 -2.5 a 2.5 2.5 0 1 0 0.01 0",
  fiamma: "M 0 8 C -6 4 -5 -2 0 -8 C 5 -2 6 4 0 8 Z",
  lupo: "M -8 4 L -4 -6 L 0 -1 L 4 -6 L 8 4 L 4 1 L 0 5 L -4 1 Z",
  corvo: "M -8 -2 Q -2 -8 0 -3 Q 2 -8 8 -2 Q 3 1 0 7 Q -3 1 -8 -2 Z",
};

// Confini semplificati delle 9 province della Sicilia.
// Proiezione equirettangolare locale, viewBox 660×460.
const provincePaths: Record<string, string[]> = {
  Palermo: [
    "M 125 152 L 132 95 L 178 58 L 252 52 L 312 62 L 358 92 L 368 138 L 352 192 L 305 232 L 250 244 L 195 240 L 160 214 L 130 182 Z",
  ],
  Trapani: [
    "M 52 238 L 70 160 L 110 148 L 125 152 L 130 182 L 160 214 L 154 252 L 130 295 L 96 336 L 65 320 L 50 275 Z",
  ],
  Agrigento: [
    "M 96 336 L 130 295 L 154 252 L 195 240 L 250 244 L 285 262 L 295 305 L 278 352 L 252 396 L 210 424 L 164 430 L 118 410 L 97 374 Z",
  ],
  Caltanissetta: [
    "M 250 244 L 305 232 L 352 192 L 382 214 L 402 258 L 385 302 L 360 322 L 318 328 L 295 305 L 285 262 Z",
  ],
  Enna: [
    "M 352 192 L 368 138 L 405 125 L 450 138 L 472 175 L 462 220 L 430 248 L 402 258 L 382 214 Z",
  ],
  Catania: [
    "M 472 175 L 492 118 L 532 98 L 566 120 L 576 182 L 560 240 L 530 278 L 498 282 L 468 265 L 462 220 Z",
  ],
  Siracusa: [
    "M 530 278 L 560 240 L 576 182 L 605 210 L 615 265 L 608 320 L 582 372 L 558 402 L 520 420 L 485 418 L 468 390 L 472 345 L 498 318 L 498 282 Z",
  ],
  Ragusa: [
    "M 360 322 L 385 302 L 402 258 L 430 248 L 462 220 L 468 265 L 498 282 L 498 318 L 472 345 L 468 390 L 428 418 L 385 422 L 345 412 L 320 378 L 318 328 Z",
  ],
  Messina: [
    "M 492 118 L 532 98 L 566 120 L 558 78 L 570 48 L 615 42 L 642 78 L 625 132 L 585 160 L 545 170 L 515 160 L 495 145 Z",
  ],
};

const activeProvinces = ["Agrigento"];
const lockedProvinces = ["Palermo", "Trapani", "Caltanissetta", "Enna", "Catania", "Siracusa", "Ragusa", "Messina"];

// Un punto per ogni provincia — solo Agrigento (id 1) è sbloccata
const allPoints: LegendPoint[] = [
  { id: 1,  x: 188, y: 352, name: "Agrigento — I Morti di Ognissanti", icon: "corvo"  },
  { id: 2,  x: 238, y: 148, name: "Palermo",                           icon: "occhio" },
  { id: 3,  x:  98, y: 238, name: "Trapani",                           icon: "lupo"   },
  { id: 4,  x: 320, y: 282, name: "Caltanissetta",                     icon: "fiamma" },
  { id: 5,  x: 408, y: 192, name: "Enna",                              icon: "corvo"  },
  { id: 6,  x: 512, y: 202, name: "Catania",                           icon: "occhio" },
  { id: 7,  x: 542, y: 328, name: "Siracusa",                          icon: "lupo"   },
  { id: 8,  x: 422, y: 365, name: "Ragusa",                            icon: "fiamma" },
  { id: 9,  x: 568, y: 112, name: "Messina",                           icon: "corvo"  },
];

export default function SicilyMap() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<LegendPoint | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Parchment map frame */}
      <div
        className="relative w-full max-w-5xl rounded-sm overflow-hidden"
        style={{
          border: "1px solid rgba(184,134,11,0.35)",
          boxShadow: "0 0 60px rgba(61,43,79,0.3), 0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <svg
          viewBox="0 0 660 460"
          className="w-full h-auto"
          role="img"
          aria-label="Mappa della Sicilia con le province; 1 punto leggendario ad Agrigento"
        >
          <defs>
            <radialGradient id="parchmentSicily" cx="50%" cy="40%" r="75%">
              <stop offset="0%" stopColor="#F2E4C2" />
              <stop offset="100%" stopColor="#D9C194" />
            </radialGradient>
            <radialGradient id="pointGlowSicily" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C0392B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#C0392B" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="660" height="460" fill="url(#parchmentSicily)" />
          <rect width="660" height="460" fill="transparent" stroke="#5a4a32" strokeWidth="2" opacity="0.4" />

          {/* Province bloccate */}
          {lockedProvinces.map((name) =>
            provincePaths[name].map((d, i) => (
              <path
                key={`${name}-${i}`}
                d={d}
                fill="#8d8470"
                stroke="#5a4a32"
                strokeWidth="1.5"
                opacity="0.45"
              />
            ))
          )}

          {/* Provincia attiva: Agrigento */}
          {provincePaths.Agrigento.map((d, i) => (
            <path
              key={`agrigento-${i}`}
              d={d}
              fill="#C7A876"
              stroke="#8B1A1A"
              strokeWidth="2.5"
              opacity="0.95"
            />
          ))}

          {/* Etichette province */}
          <g
            style={{ fontFamily: "Georgia, serif" }}
            fill="#5a4a32"
            opacity="0.6"
          >
            <text x="238" y="148" fontSize="11" textAnchor="middle">Palermo</text>
            <text x="95" y="238" fontSize="11" textAnchor="middle">Trapani</text>
            <text x="318" y="285" fontSize="10" textAnchor="middle">Caltanissetta</text>
            <text x="408" y="192" fontSize="11" textAnchor="middle">Enna</text>
            <text x="512" y="202" fontSize="11" textAnchor="middle">Catania</text>
            <text x="545" y="328" fontSize="11" textAnchor="middle">Siracusa</text>
            <text x="422" y="365" fontSize="11" textAnchor="middle">Ragusa</text>
            <text x="568" y="112" fontSize="11" textAnchor="middle">Messina</text>
            <text x="185" y="348" fontSize="13" textAnchor="middle" fill="#8B1A1A" opacity="0.9" fontWeight="bold">
              AGRIGENTO
            </text>
          </g>

          {/* Compass rose */}
          <g transform="translate(620,55)" opacity="0.7">
            <circle r="22" fill="none" stroke="#5a4a32" strokeWidth="1.5" />
            <path d="M 0 -18 L 4 0 L 0 18 L -4 0 Z" fill="#8B1A1A" />
            <path d="M -18 0 L 0 -4 L 18 0 L 0 4 Z" fill="#5a4a32" />
          </g>

          {/* Legend points */}
          {allPoints.map((p) => (
            <g
              key={p.id}
              transform={`translate(${p.x}, ${p.y})`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelected(p)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={p.name}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(p);
              }}
            >
              {hovered === p.id && !prefersReduced && (
                <circle r="18" fill="url(#pointGlowSicily)" />
              )}
              <circle
                r="9"
                fill={hovered === p.id ? "#8B1A1A" : "#2A2014"}
                stroke="#B8860B"
                strokeWidth="1.2"
                style={{ transition: "fill 0.3s" }}
              />
              <path
                d={ICONS[p.icon]}
                fill="#F2E4C2"
                transform="scale(0.7)"
              />
              {hovered === p.id && (
                <g transform="translate(0, -20)">
                  <rect
                    x={-p.name.length * 2.9}
                    y={-12}
                    width={p.name.length * 5.8}
                    height={18}
                    rx={4}
                    fill="#15101c"
                    opacity="0.92"
                  />
                  <text
                    textAnchor="middle"
                    y={1}
                    fontFamily="Georgia, serif"
                    fontSize="10"
                    fill="#E8D5B0"
                  >
                    {p.name}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            style={{ background: "rgba(10,10,15,0.85)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
          >
            <motion.div
              className="relative max-w-md w-full p-8 rounded-sm text-center flex flex-col items-center gap-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(184,134,11,0.35)",
                boxShadow: "0 0 60px rgba(139,26,26,0.3)",
              }}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.id === 1 ? (
                <>
                  <span className="text-4xl" aria-hidden="true">💀</span>
                  <h3 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                    I Morti di Ognissanti
                  </h3>
                  <p className="font-crimson italic text-lg" style={{ color: "var(--accent-ghost)" }}>
                    Ad Agrigento, la notte tra il primo e il secondo novembre, i morti tornano a casa.
                  </p>
                  <p className="font-crimson text-base leading-relaxed" style={{ color: "var(--accent-ghost)", opacity: 0.85 }}>
                    In Sicilia Ognissanti non è una commemorazione. È un appuntamento.
                    I morti tornano a tavola, i bambini trovano i regali lasciati dai nonni,
                    e chi non rispetta il rito paga il prezzo. Lo chiamano il ritorno dei cari.
                    Ma non tutti quelli che bussano alla porta erano cari.
                  </p>
                  <a
                    href="https://www.amazon.it/dp/B0HPGLGQKJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all"
                    style={{ background: "var(--accent-blood)", color: "var(--accent-moon)" }}
                    onClick={() => setSelected(null)}
                  >
                    Scopri la Leggenda →
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:bg-[var(--accent-blood)]/10"
                    style={{ border: "1px solid rgba(139,26,26,0.4)", color: "var(--accent-moon)" }}
                  >
                    Chiudi
                  </button>
                </>
              ) : (
                <>
                  <span className="text-4xl" aria-hidden="true">🔒</span>
                  <h3 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                    La Leggenda di {selected.name}
                  </h3>
                  <p className="font-crimson italic text-lg" style={{ color: "var(--accent-ghost)" }}>
                    Questa leggenda sarà svelata presto.
                  </p>
                  <p className="font-crimson text-base" style={{ color: "var(--accent-ghost)", opacity: 0.7 }}>
                    Ogni mese una nuova creatura prende vita su questa mappa.
                  </p>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:bg-[var(--accent-blood)]/10"
                    style={{ border: "1px solid rgba(139,26,26,0.4)", color: "var(--accent-moon)" }}
                  >
                    Chiudi
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
