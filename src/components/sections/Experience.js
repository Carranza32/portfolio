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
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      style={{
        backgroundColor: "transparent",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
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
            color: "var(--white)",
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

          {experienceItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                variants={isLeft ? fadeLeft : fadeRight}
                className={`experience-row ${isLeft ? "experience-row--left" : "experience-row--right"}`}
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

                <article className="experience-card">
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
                        color: "var(--white)",
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
                        color: "var(--muted)",
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
                        color: "var(--accent)",
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
                      color: "#E2E8F0",
                    }}
                  >
                    {t(item.role)}
                  </p>

                  {item.current ? (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "8px",
                        background: "rgba(99, 102, 241, 0.12)",
                        color: "#818CF8",
                        border: "1px solid rgba(99, 102, 241, 0.3)",
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
                      color: "var(--muted)",
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
