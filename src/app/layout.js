import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import LiquidBackground from "@/components/ui/LiquidBackground";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mario Ernesto Carranza Rivas",
  jobTitle: "Senior Full Stack Developer",
  url: "https://mariocarranza.dev",
  image: "https://mariocarranza.dev/mario.png",
  description: "Desarrollador Full Stack Senior especializado en Laravel y Flutter con más de 7 años de experiencia.",
  sameAs: [
    "https://www.linkedin.com/in/mario-ernesto-carranza",
    "https://github.com/Carranza32"
  ],
  knowsAbout: [
    "Laravel",
    "Flutter",
    "SaaS Development",
    "React",
    "API Integration",
    "Mobile App Development",
    "PHP",
    "JavaScript"
  ],
};

export const metadata = {
  metadataBase: new URL("https://mariocarranza.dev"),
  title: "Mario Carranza — Desarrollador Full Stack Senior (Laravel & Flutter)",
  description:
    "Desarrollador Full Stack Senior especializado en Laravel y Flutter. Más de 7 años de experiencia creando plataformas SaaS, aplicaciones móviles empresariales e integraciones de API complejas.",
  keywords: [
    "Desarrollador Laravel",
    "Desarrollador Flutter",
    "Desarrollador Full Stack El Salvador",
    "Desarrollo SaaS",
    "Desarrollador de aplicaciones móviles",
    "Laravel developer",
    "Flutter developer",
    "Full Stack Developer El Salvador",
    "SaaS development",
    "mobile app developer",
  ],
  openGraph: {
    title: "Mario Carranza — Desarrollador Full Stack Senior",
    description:
      "Especialista en Laravel y Flutter. Plataformas SaaS, aplicaciones móviles empresariales e integraciones de API.",
    type: "website",
    locale: "es_SV",
    url: "https://mariocarranza.dev",
    siteName: "Mario Carranza Portfolio",
    images: [
      {
        url: "/mario.png",
        width: 1200,
        height: 630,
        alt: "Mario Carranza — Desarrollador Full Stack Senior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Carranza — Desarrollador Full Stack Senior",
    description:
      "Especialista en Laravel y Flutter. Plataformas SaaS, aplicaciones móviles empresariales e integraciones de API.",
    images: ["/mario.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <LiquidBackground />
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
