import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19AZyYxTMa/",
    icon: "f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pauretascabili",
    icon: "ig",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@PaureTascabili",
    icon: "yt",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/antonio-andreozzi",
    icon: "in",
  },
  { name: "X / Twitter", href: "https://x.com/pauretascabili", icon: "x" },
  {
    name: "Pinterest",
    href: "https://www.pinterest.it/pauretascabili",
    icon: "p",
  },
];

const navCol = [
  { label: "Home", href: "/" },
  { label: "Chi Sono", href: "/chi-sono" },
  { label: "Collana", href: "/collana-paure-tascabili" },
  { label: "Singoli Volumi", href: "/singoli-volumi" },
  { label: "Blog", href: "/blog" },
  { label: "Il Leggendario", href: "/leggendario" },
  { label: "Risorse Gratuite", href: "/risorse-gratuite" },
  { label: "Anteprime", href: "/anteprime" },
  { label: "FAQ", href: "/faq" },
  { label: "Contatti", href: "/contatti" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-void)",
        borderTop: "1px solid rgba(139,26,26,0.2)",
      }}
    >
      {/* Fog effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(61,43,79,0.15) 0%, transparent 100%)",
          animation: "fog-rise 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + Claim */}
          <div className="flex flex-col gap-4">
            <span className="font-cinzel text-xl font-black tracking-widest text-[var(--accent-moon)]">
              PAURE TASCABILI
            </span>
            <p
              className="font-crimson text-base leading-relaxed italic"
              style={{ color: "var(--accent-ghost)" }}
            >
              Nel Buio della Fantasia, Ogni Ombra Nasconde una Storia
            </p>
            <div
              className="w-12 h-[1px]"
              style={{ background: "var(--accent-blood)" }}
            />
            <p className="font-crimson text-sm" style={{ color: "var(--accent-ghost)" }}>
              © {new Date().getFullYear()} Antonio Andreozzi
              <br />
              Tutti i diritti riservati
            </p>
          </div>

          {/* Col 2: Navigazione */}
          <div>
            <h3
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--accent-blood)" }}
            >
              Navigazione
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {navCol.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-crimson text-base animated-underline transition-colors hover:text-[var(--accent-moon)]"
                    style={{ color: "var(--accent-ghost)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <h3
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--accent-blood)" }}
            >
              Social
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-crimson text-base animated-underline transition-colors hover:text-[var(--accent-blood)]"
                    style={{ color: "var(--accent-ghost)" }}
                    aria-label={`Visita ${s.name} di Paure Tascabili`}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h3
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--accent-blood)" }}
            >
              Legale
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/pauretascabili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-crimson text-base animated-underline transition-colors hover:text-[var(--accent-moon)]"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/pauretascabili/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-crimson text-base animated-underline transition-colors hover:text-[var(--accent-moon)]"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <p
                className="font-crimson text-sm italic leading-relaxed"
                style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
              >
                "Dove il Sussurro del Vento Nasconde Segreti Sconcertanti"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
