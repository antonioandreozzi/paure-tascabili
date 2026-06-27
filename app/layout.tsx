import type { Metadata } from "next";
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pauretascabili.com"),
  title: {
    default: "Paure Tascabili | Libri Horror, Fantasy e Mistero per Ragazzi",
    template: "%s | Paure Tascabili",
  },
  description:
    "Scopri la collana Paure Tascabili di Antonio Andreozzi: libri horror, fantasy e mistero per ragazzi. Storie di brivido che insegnano coraggio, amicizia e resilienza.",
  keywords: [
    "libri horror ragazzi",
    "libri mistero bambini",
    "fantasy per ragazzi",
    "Antonio Andreozzi",
    "paure tascabili",
    "libri brivido giovani lettori",
  ],
  authors: [{ name: "Antonio Andreozzi" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.pauretascabili.com",
    siteName: "Paure Tascabili",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paure Tascabili — Libri Horror e Mistero per Ragazzi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@pauretascabili",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://www.pauretascabili.com" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Andreozzi",
  url: "https://www.pauretascabili.com/chi-sono/",
  sameAs: [
    "https://www.facebook.com/share/19AZyYxTMa/",
    "https://www.instagram.com/pauretascabili",
    "https://www.youtube.com/@PaureTascabili",
    "https://x.com/pauretascabili",
  ],
  jobTitle: "Autore di libri horror e fantasy per ragazzi",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Paure Tascabili",
  url: "https://www.pauretascabili.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.pauretascabili.com/blog/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${cinzelDecorative.variable} ${crimsonPro.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
      </body>
    </html>
  );
}
