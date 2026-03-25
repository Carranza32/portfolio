"use client";

import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { useLanguage } from "@/context/LanguageContext";
import { experience as experienceItems } from "../../../data/experience.js";

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#16161a",
        borderTop: "1px solid #2a2a35",
        borderBottom: "1px solid #2a2a35",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="experience-inner">
        <SectionLabel>
          {t({ en: "EXPERIENCE", es: "EXPERIENCIA" })}
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
            en: "Where I've built things.",
            es: "Dónde he construido cosas.",
          })}
        </h2>

        <motion.div
          className="experience-timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          <div className="experience-line" aria-hidden />

          {experienceItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeLeft}
              className="experience-row"
            >
              <div className="experience-dot-cell">
                <span
                  className={
                    item.current
                      ? "experience-dot experience-dot--current"
                      : "experience-dot experience-dot--past"
                  }
                />
              </div>

              <article
                className="experience-card"
                style={{
                  backgroundColor: "#0d0d0f",
                  border: "1px solid #2a2a35",
                  borderRadius: "10px",
                  padding: "24px",
                  marginLeft: "24px",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    gap: "8px 12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#eeeef2",
                      flex: "1 1 auto",
                      minWidth: 0,
                    }}
                  >
                    {item.company}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "12px",
                      color: "#6b7280",
                      flexShrink: 0,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {item.client ? (
                  <p
                    style={{
                      marginTop: "4px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "13px",
                      fontStyle: "italic",
                      color: "#6c63ff",
                    }}
                  >
                    {t({ en: "for", es: "para" })}{" "}
                    {item.client}
                  </p>
                ) : null}

                <p
                  style={{
                    marginTop: "4px",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#9ca3af",
                  }}
                >
                  {t(item.role)}
                </p>

                {item.current ? (
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "8px",
                      backgroundColor: "rgba(108,99,255,0.1)",
                      color: "#6c63ff",
                      border: "1px solid rgba(108,99,255,0.3)",
                      borderRadius: "100px",
                      padding: "2px 10px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    {t({ en: "Current", es: "Actual" })}
                  </span>
                ) : null}

                <p
                  style={{
                    marginTop: "10px",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "14px",
                    color: "#6b7280",
                    lineHeight: 1.7,
                  }}
                >
                  {t(item.description)}
                </p>

                <div
                  style={{
                    marginTop: "14px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {item.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
