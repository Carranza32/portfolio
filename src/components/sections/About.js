"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Globe,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const QUICK_INFO = [
  {
    Icon: MapPin,
    label: { en: "Location", es: "Ubicación" },
    value: { en: "San Salvador, El Salvador", es: "San Salvador, El Salvador" },
  },
  {
    Icon: Globe,
    label: { en: "English", es: "Inglés" },
    value: { en: "B2 Level", es: "B2 Level" },
  },
  {
    Icon: Briefcase,
    label: { en: "Experience", es: "Experiencia" },
    value: { en: "7+ Years", es: "7+ años" },
  },
  {
    Icon: Code2,
    label: { en: "Specialty", es: "Especialidad" },
    value: { en: "Laravel & Flutter", es: "Laravel & Flutter" },
  },
  {
    Icon: Users,
    label: { en: "Team Lead", es: "Líder de equipo" },
    value: { en: "Scrum / Agile", es: "Scrum / Agile" },
  },
  {
    Icon: GraduationCap,
    label: { en: "Education", es: "Educación" },
    value: {
      en: "Software Engineering",
      es: "Ing. en Desarrollo de Software",
    },
  },
];

function AboutHeadline() {
  const { lang } = useLanguage();
  const accent = { color: "var(--accent)" };

  const headlineFont = {
    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
    fontWeight: 800,
    fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
    lineHeight: 1.15,
    color: "var(--white)",
  };

  if (lang === "es") {
    return (
      <h2 style={headlineFont}>
        Construyo sistemas que resuelven problemas{" "}
        <span style={accent}>reales</span> de negocio.
      </h2>
    );
  }

  return (
    <h2 style={headlineFont}>
      I build systems that solve <span style={accent}>real</span> business
      problems.
    </h2>
  );
}

export default function About() {
  const { t } = useLanguage();

  const paragraphStyle = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "15px",
    color: "var(--muted)",
    lineHeight: 1.8,
    maxWidth: "520px",
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: "transparent",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="about-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          style={{ minWidth: 0 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>
              {t({ en: "ABOUT ME", es: "SOBRE MÍ" })}
            </SectionLabel>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: "1rem" }}>
            <AboutHeadline />
          </motion.div>

          <motion.p variants={fadeUp} style={{ ...paragraphStyle, marginTop: "1.5rem" }}>
            {t({
              en: "I'm a Senior Full Stack Developer with 7+ years of experience designing and building complex digital ecosystems, including more than 4 years of dedicated specialization in crafting premium cross-platform mobile applications with Flutter. I focus on clean architectures, high-performance local synchronization, secure biometrics, and seamless RESTful API integrations.",
              es: "Soy Desarrollador Senior Full Stack con más de 7 años de experiencia diseñando y construyendo ecosistemas digitales complejos, con más de 4 años de especialización dedicada a la creación de aplicaciones móviles multiplataforma premium en Flutter. Me enfoco en arquitecturas limpias, sincronización local de alto rendimiento, biometría segura e integraciones fluidas con APIs RESTful.",
            })}
          </motion.p>

          <motion.p variants={fadeUp} style={{ ...paragraphStyle, marginTop: "1.25rem" }}>
            {t({
              en: "I've led development teams under Scrum, delivered end-to-end solutions for clients in Chile, the US and El Salvador, and integrated payment gateways, real-time systems, and AI services in production environments.",
              es: "He liderado equipos de desarrollo bajo Scrum, entregado soluciones completas para clientes en Chile, EE.UU. y El Salvador, e integrado pasarelas de pago, sistemas en tiempo real e inteligencia artificial en entornos de producción.",
            })}
          </motion.p>
        </motion.div>

        <div style={{ minWidth: 0 }}>
          <div
            style={{
              background: "var(--surface)",
              backdropFilter: "var(--glass-blur)",
              WebkitBackdropFilter: "var(--glass-blur)",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
              borderRadius: "12px",
              padding: "28px",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>
                  {t({ en: "QUICK INFO", es: "DATOS RÁPIDOS" })}
                </SectionLabel>
              </motion.div>

              <div
                role="list"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {QUICK_INFO.map(({ Icon, label, value }) => (
                  <motion.div
                    key={label.en}
                    role="listitem"
                    variants={fadeUp}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      color="#818CF8"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                      aria-hidden
                    />
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: "13px",
                          color: "#64748B",
                        }}
                      >
                        {t(label)}
                      </div>
                      <div
                        style={{
                          marginTop: "2px",
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--white)",
                        }}
                      >
                        {t(value)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
