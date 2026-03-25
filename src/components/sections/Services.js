"use client";

import { motion } from "framer-motion";
import { Globe, Plug, Smartphone } from "lucide-react";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

function AccentDot() {
  return (
    <span
      aria-hidden
      className="services-accent-dot"
    />
  );
}

const SERVICE_CARDS = [
  {
    id: "saas",
    Icon: Globe,
    title: {
      en: "SaaS & Web Platforms",
      es: "Plataformas SaaS y Web",
    },
    description: {
      en: "Multi-tenant systems, admin panels, RESTful APIs and complex business logic with Laravel and React.",
      es: "Sistemas multitenant, paneles admin, APIs RESTful y lógica empresarial compleja con Laravel y React.",
    },
    deliverables: [
      {
        en: "Multi-tenant architecture",
        es: "Arquitectura multitenant",
      },
      {
        en: "Admin panels (Filament)",
        es: "Paneles admin (Filament)",
      },
      {
        en: "RESTful API design",
        es: "Diseño de APIs RESTful",
      },
      {
        en: "Role & permission systems",
        es: "Sistemas de roles y permisos",
      },
      {
        en: "Payment gateway integration",
        es: "Integración de pasarelas de pago",
      },
    ],
  },
  {
    id: "flutter",
    Icon: Smartphone,
    title: {
      en: "Flutter Mobile Apps",
      es: "Apps móviles Flutter",
    },
    description: {
      en: "Cross-platform apps for iOS and Android with Flutter. Biometrics, GPS, push notifications, payments and native hardware.",
      es: "Apps multiplataforma para iOS y Android con Flutter. Biometría, GPS, push notifications, pagos y hardware nativo.",
    },
    deliverables: [
      {
        en: "iOS & Android from one codebase",
        es: "iOS y Android desde un código base",
      },
      {
        en: "Biometric authentication",
        es: "Autenticación biométrica",
      },
      {
        en: "GPS & Google Maps",
        es: "GPS y Google Maps",
      },
      {
        en: "Push notifications (FCM)",
        es: "Notificaciones push (FCM)",
      },
      {
        en: "In-app payments",
        es: "Pagos en app",
      },
    ],
  },
  {
    id: "integrations",
    Icon: Plug,
    title: {
      en: "API & Enterprise Integrations",
      es: "APIs e Integraciones Empresariales",
    },
    description: {
      en: "Payment gateways, logistics APIs, AI/OCR, real-time systems with WebSockets and third-party service connections.",
      es: "Pasarelas de pago, APIs logísticas, IA/OCR, sistemas en tiempo real con WebSockets y conexiones a servicios de terceros.",
    },
    deliverables: [
      { en: "CyberSource", es: "CyberSource" },
      { en: "Stripe", es: "Stripe" },
      { en: "Square", es: "Square" },
      {
        en: "DHL & logistics APIs",
        es: "APIs DHL y logísticas",
      },
      {
        en: "AI-powered document processing",
        es: "Procesamiento de documentos con IA",
      },
      {
        en: "Real-time with WebSockets",
        es: "Tiempo real con WebSockets",
      },
    ],
  },
];

function ServiceCard({ card }) {
  const { t } = useLanguage();
  const { Icon } = card;

  return (
    <article
      className="services-card"
      style={{
        backgroundColor: "#16161a",
        borderRadius: "12px",
        padding: "32px",
      }}
    >
      <Icon size={28} strokeWidth={2} color="#6c63ff" aria-hidden />

      <h3
        style={{
          marginTop: "1.25rem",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          color: "#eeeef2",
          lineHeight: 1.25,
        }}
      >
        {t(card.title)}
      </h3>

      <p
        style={{
          marginTop: "12px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "15px",
          color: "#6b7280",
          lineHeight: 1.7,
        }}
      >
        {t(card.description)}
      </p>

      <ul
        style={{
          listStyle: "none",
          margin: "20px 0 0",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {card.deliverables.map((item) => (
          <li
            key={item.en}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <AccentDot />
            <span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "14px",
                color: "#9ca3af",
                lineHeight: 1.5,
              }}
            >
              {t(item)}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      style={{
        backgroundColor: "#0d0d0f",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="services-inner">
        <SectionLabel>
          {t({ en: "SERVICES", es: "SERVICIOS" })}
        </SectionLabel>

        <h2
          style={{
            marginTop: "1rem",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
            lineHeight: 1.15,
            color: "#eeeef2",
          }}
        >
          {t({
            en: "What I can build for you.",
            es: "Qué puedo construir para ti.",
          })}
        </h2>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          {SERVICE_CARDS.map((card) => (
            <motion.div key={card.id} variants={fadeUp}>
              <ServiceCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
