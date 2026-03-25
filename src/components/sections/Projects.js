"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { useLanguage } from "@/context/LanguageContext";
import {
  getFeaturedProjects,
  getSecondaryProjects,
} from "../../../data/projects.js";

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

const FILTER_OPTIONS = [
  { tag: "all", label: { en: "All", es: "Todos" } },
  { tag: "Web / SaaS", label: { en: "Web / SaaS", es: "Web / SaaS" } },
  {
    tag: "Mobile / Flutter",
    label: { en: "Mobile / Flutter", es: "Mobile / Flutter" },
  },
];

function formatOrder(n) {
  return String(n).padStart(2, "0");
}

function FeaturedProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const highlights = project.highlights?.[lang] ?? project.highlights?.en ?? [];
  const hasHighlights = highlights.length > 0;
  const badges = project.badges?.[lang] ?? project.badges?.en ?? [];
  const stats = project.stats ?? [];

  return (
    <article
      className="projects-featured-card"
      style={{
        backgroundColor: "#16161a",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "20px 28px",
          borderBottom: "1px solid #2a2a35",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              color: "#6c63ff",
            }}
          >
            {formatOrder(project.order)}
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            / {t(project.category)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            justifyContent: "flex-end",
          }}
        >
          {badges.map((b) => (
            <Tag key={b}>{b}</Tag>
          ))}
        </div>
      </header>

      <div className="projects-featured-body">
        <div className="projects-featured-left">
          <h3
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
              lineHeight: 1,
              color: "#eeeef2",
            }}
          >
            {t(project.title)}
          </h3>

          <p
            style={{
              marginTop: "12px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            <span style={{ fontWeight: 500, color: "#eeeef2" }}>
              {project.client}
            </span>{" "}
            · {project.country}
          </p>
          <p
            style={{
              marginTop: "2px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            {project.year}
          </p>

          <div style={{ marginTop: "16px" }}>
            <SectionLabel className="projects-label-compact">
              {t({ en: "MY ROLE", es: "MI ROL" })}
            </SectionLabel>
            <p
              style={{
                marginTop: "8px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "13px",
                color: "#9ca3af",
              }}
            >
              {t(project.role)}
            </p>
          </div>

          <p
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "14px",
              color: "#9ca3af",
              lineHeight: 1.7,
            }}
          >
            {t(project.description)}
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        <div className="projects-featured-right">
          {hasHighlights ? (
            <>
              <SectionLabel>
                {t({ en: "KEY HIGHLIGHTS", es: "ASPECTOS CLAVE" })}
              </SectionLabel>
              <ul
                style={{
                  listStyle: "none",
                  margin: "16px 0 0",
                  padding: 0,
                }}
              >
                {highlights.map((item) => (
                  <li
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        flexShrink: 0,
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#6c63ff",
                        marginTop: "6px",
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#eeeef2",
                        }}
                      >
                        {item.title}
                      </div>
                      <p
                        style={{
                          marginTop: "4px",
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: "13px",
                          color: "#6b7280",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "14px",
                color: "#9ca3af",
                lineHeight: 1.7,
              }}
            >
              {t(project.description)}
            </p>
          )}
        </div>
      </div>

      {stats.length > 0 ? (
        <footer
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
            borderTop: "1px solid #2a2a35",
            backgroundColor: "#0d0d0f",
          }}
        >
          {stats.map((row, i) => (
            <div
              key={`${project.id}-stat-${i}`}
              style={{
                padding: "18px",
                textAlign: "center",
                borderRight:
                  i < stats.length - 1 ? "1px solid #2a2a35" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "#6c63ff",
                }}
              >
                {row.value}
              </div>
              <div
                style={{
                  marginTop: "4px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "11px",
                  color: "#6b7280",
                }}
              >
                {t(row.label)}
              </div>
            </div>
          ))}
        </footer>
      ) : null}
    </article>
  );
}

function SecondaryProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const badges = project.badges?.[lang] ?? project.badges?.en ?? [];

  return (
    <article
      className="projects-secondary-card"
      style={{
        backgroundColor: "#16161a",
        borderRadius: "10px",
        padding: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
        }}
      >
        {badges.map((b) => (
          <Tag key={b}>{b}</Tag>
        ))}
      </div>

      <h3
        style={{
          marginTop: "12px",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#eeeef2",
        }}
      >
        {t(project.title)}
      </h3>

      <p
        className="line-clamp-2"
        style={{
          marginTop: "8px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "13px",
          color: "#6b7280",
          lineHeight: 1.6,
        }}
      >
        {t(project.description)}
      </p>

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
        }}
      >
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <p
        style={{
          marginTop: "20px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        {project.client} · {project.year}
      </p>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [tagFilter, setTagFilter] = useState("all");

  const featured = useMemo(() => getFeaturedProjects(), []);
  const secondaryAll = useMemo(() => getSecondaryProjects(), []);

  const secondaryFiltered = useMemo(() => {
    if (tagFilter === "all") return secondaryAll;
    return secondaryAll.filter((p) => p.tags.includes(tagFilter));
  }, [secondaryAll, tagFilter]);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#0d0d0f",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="projects-inner">
        <SectionLabel>
          {t({ en: "SELECTED WORK", es: "PROYECTOS" })}
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
            en: "Projects that prove what I can do.",
            es: "Proyectos que demuestran lo que sé hacer.",
          })}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={fadeUp} style={{ width: "100%" }}>
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div
          style={{
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            aria-hidden
            style={{ flex: 1, height: "1px", backgroundColor: "#2a2a35" }}
          />
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <SectionLabel>
              {t({ en: "MORE PROJECTS", es: "MÁS PROYECTOS" })}
            </SectionLabel>
          </div>
          <div
            aria-hidden
            style={{ flex: 1, height: "1px", backgroundColor: "#2a2a35" }}
          />
        </div>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {FILTER_OPTIONS.map((opt) => {
            const active = tagFilter === opt.tag;
            return (
              <button
                key={opt.tag}
                type="button"
                onClick={() => setTagFilter(opt.tag)}
                className={
                  active ? "projects-filter-pill is-active" : "projects-filter-pill"
                }
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: "100px",
                  cursor: "pointer",
                }}
              >
                {t(opt.label)}
              </button>
            );
          })}
        </div>

        <motion.div
          className="projects-secondary-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ marginTop: "32px" }}
        >
          {secondaryFiltered.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <SecondaryProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
