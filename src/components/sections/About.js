"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Globe,
  GraduationCap,
  MapPin,
  Users,
  Clock,
  GitBranch,
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

const CORE_STANDARDS = [
  {
    icon: Code2,
    title: { en: "Clean Architecture & Design", es: "Arquitectura Limpia y Diseño" },
    desc: {
      en: "Writing SOLID, modular, and highly testable codebases in both Laravel and Flutter to guarantee long-term system health.",
      es: "Código estructurado bajo SOLID, modular y testeable en Laravel y Flutter para garantizar mantenibilidad a largo plazo.",
    },
  },
  {
    icon: GitBranch,
    title: { en: "CI/CD & Automated Pipelines", es: "CI/CD y Automatización" },
    desc: {
      en: "Automating validation, linting, testing, and deployment workflows using modern GitHub Actions pipelines and Docker.",
      es: "Automatización de validación, testing y despliegue usando pipelines de GitHub Actions y Docker.",
    },
  },
  {
    icon: Users,
    title: { en: "Technical Leadership & Sprints", es: "Liderazgo Técnico y Sprints" },
    desc: {
      en: "Conducting code reviews, mentoring junior engineers, and leading sprint planning under agile Scrum processes.",
      es: "Revisiones de código rigurosas, mentoría de desarrolladores y planeación de sprints bajo metodologías ágiles Scrum.",
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
        Construyo sistemas escalables y lidero equipos de <span style={accent}>ingeniería</span>.
      </h2>
    );
  }

  return (
    <h2 style={headlineFont}>
      I build scalable systems and lead high-performance <span style={accent}>engineering</span> teams.
    </h2>
  );
}

export default function About() {
  const { t } = useLanguage();

  const paragraphStyle = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "15.5px",
    color: "var(--muted)",
    lineHeight: 1.8,
    maxWidth: "540px",
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
        {/* Left Column: Bio & Core Standards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
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
              en: "I'm a Senior Full Stack Engineer & Tech Lead with 7+ years of experience designing complex digital ecosystems, including 4+ years of dedicated specialization in crafting high-performance, modular mobile apps with Flutter. I focus on clean architecture, local data synchronization, hardware biometrics, and secure RESTful integrations.",
              es: "Soy Ingeniero Senior Full Stack y Tech Lead con más de 7 años de experiencia diseñando ecosistemas digitales complejos, con más de 4 años de especialización en la creación de aplicaciones móviles nativas y modulares con Flutter. Me enfoco en arquitectura limpia, sincronización local, biometría por hardware e integraciones RESTful seguras.",
            })}
          </motion.p>

          <motion.p variants={fadeUp} style={{ ...paragraphStyle, marginTop: "1.25rem" }}>
            {t({
              en: "I've led development teams under Scrum, delivered end-to-end solutions for companies in Chile, the US, and Central America, and integrated enterprise payment gateways, real-time sync nodes, and AI OCR scanning services in production environments.",
              es: "He liderado equipos de desarrollo bajo Scrum, entregado soluciones completas para compañías en Chile, EE.UU. y Centroamérica, e integrado pasarelas de pago empresariales, nodos en tiempo real y servicios de escaneo OCR con IA.",
            })}
          </motion.p>

          {/* Core Engineering Standards */}
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <motion.h3
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "var(--white)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: 0
              }}
            >
              {t({ en: "Engineering & Leadership Standards", es: "Estándares de Ingeniería y Liderazgo" })}
            </motion.h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {CORE_STANDARDS.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title.en}
                  variants={fadeUp}
                  className="liquid-glass"
                  style={{
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start"
                  }}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(99, 102, 241, 0.08)",
                    border: "1px solid rgba(99, 102, 241, 0.15)",
                    color: "#818CF8",
                    flexShrink: 0
                  }}>
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h4 style={{
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "14.5px",
                      color: "var(--white)",
                      margin: 0
                    }}>{t(title)}</h4>
                    <p style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "12.5px",
                      color: "var(--muted)",
                      margin: "4px 0 0",
                      lineHeight: "1.55"
                    }}>{t(desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Quick Info & Timezone Widgets */}
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
          <div
            className="liquid-glass"
            style={{
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
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
                  marginTop: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {QUICK_INFO.map(({ Icon, label, value }) => (
                  <motion.div
                    key={label.en}
                    role="listitem"
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                    }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(99, 102, 241, 0.08)",
                      border: "1px solid rgba(99, 102, 241, 0.15)",
                      color: "#818CF8",
                      flexShrink: 0,
                    }}>
                      <Icon
                        size={16}
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <div style={{ minWidth: 0, paddingTop: "2px" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: "12px",
                          fontWeight: 500,
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
                          fontWeight: 600,
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

          {/* Timezone & Overlap Widget */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="liquid-glass"
              style={{
                borderRadius: "24px",
                padding: "28px",
                marginTop: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                  border: "1px solid rgba(99, 102, 241, 0.15)",
                  color: "#818CF8",
                }}>
                  <Clock size={16} strokeWidth={2.5} />
                </div>
                <span style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#818CF8",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  {t({ en: "US/CANADA OVERLAP", es: "COMPATIBILIDAD HORARIA" })}
                </span>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <h3 style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "var(--white)",
                  margin: 0,
                }}>
                  CST / UTC-6
                </h3>
                <p style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginTop: "4px",
                  lineHeight: "1.45",
                }}>
                  {t({
                    en: "Located in Central Standard Time (CST). Ideal for synchronous real-time team collaboration with North American schedules.",
                    es: "Ubicado en horario Central (CST). Ideal para comunicación síncrona en tiempo real con equipos de Norteamérica."
                  })}
                </p>
              </div>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "14px",
                background: "rgba(255,255,255,0.015)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.04)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontFamily: "var(--font-inter), sans-serif" }}>
                  <span style={{ color: "#cbd5e1" }}>Eastern Time (EST/EDT)</span>
                  <span style={{ color: "#4ADE80", fontWeight: 600 }}>{t({ en: "1h difference", es: "1h de diferencia" })}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontFamily: "var(--font-inter), sans-serif" }}>
                  <span style={{ color: "#cbd5e1" }}>Central Time (CST/CDT)</span>
                  <span style={{ color: "#4ADE80", fontWeight: 600 }}>{t({ en: "0h difference", es: "0h de diferencia" })}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontFamily: "var(--font-inter), sans-serif" }}>
                  <span style={{ color: "#cbd5e1" }}>Pacific Time (PST/PDT)</span>
                  <span style={{ color: "#4ADE80", fontWeight: 600 }}>{t({ en: "2h difference", es: "2h de diferencia" })}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
