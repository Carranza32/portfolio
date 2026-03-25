import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";

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
  sameAs: ["https://www.linkedin.com/in/mario-ernesto-carranza/"],
  knowsAbout: [
    "Laravel",
    "Flutter",
    "SaaS Development",
    "React",
    "API Integration",
  ],
};

export const metadata = {
  metadataBase: new URL("https://mariocarranza.dev"),
  title: "Mario Carranza — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer specialized in Laravel and Flutter. 6+ years building SaaS platforms, enterprise mobile apps and complex API integrations.",
  keywords: [
    "Laravel developer",
    "Flutter developer",
    "Full Stack Developer El Salvador",
    "SaaS development",
    "mobile app developer",
  ],
  openGraph: {
    title: "Mario Carranza — Senior Full Stack Developer",
    description:
      "Laravel & Flutter specialist. SaaS platforms, enterprise apps and API integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
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
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
