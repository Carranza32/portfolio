"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectDetailShell({ project, children, showStats = true }) {
  const { lang, t } = useLanguage();
  const badges = project.badges?.[lang] ?? project.badges?.es ?? project.badges?.en ?? [];
  const stats = project.stats ?? [];

  return (
    <article className="project-detail">
      <div className="project-detail-ambient" aria-hidden />
      <div className="project-detail-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="project-detail-header-grid"
        >
          {/* Left Column: Title & Info */}
          <div className="project-detail-header-left">
            <Link href="/#projects" className="project-detail-back">
              <span aria-hidden className="project-detail-back-arrow">
                ←
              </span>
              {t({
                en: "Back to projects",
                es: "Volver a proyectos",
              })}
            </Link>

            <SectionLabel className="project-detail-label">
              {t({ en: "CASE STUDY", es: "CASO DE ESTUDIO" })}
            </SectionLabel>

            <h1 className="project-detail-title" style={{
              background: "linear-gradient(to right, #F8FAFC 60%, #818CF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>{t(project.title)}</h1>
            <p className="project-detail-category">{t(project.category)}</p>

            <div className="project-detail-meta">
              <span className="project-detail-meta-strong">{project.client}</span>
              <span className="project-detail-meta-dot" aria-hidden>
                ·
              </span>
              <span>{project.country}</span>
              <span className="project-detail-meta-dot" aria-hidden>
                ·
              </span>
              <span>{project.year}</span>
            </div>

            {badges.length > 0 ? (
              <div className="project-detail-badges">
                {badges.map((b) => (
                  <Tag key={b}>{b}</Tag>
                ))}
              </div>
            ) : null}

            <div className="project-detail-role-block">
              <SectionLabel className="projects-label-compact">
                {t({ en: "MY ROLE", es: "MI ROL" })}
              </SectionLabel>
              <p className="project-detail-role-text">{t(project.role)}</p>
            </div>
          </div>

          {/* Right Column: Bento Stats Panel — only if showStats is true */}
          {showStats && stats.length > 0 ? (
            <div className="project-detail-stats-bento" style={{ marginTop: "28px" }}>
              {stats.map((row, i) => (
                <div
                  key={`${project.id}-stat-${i}`}
                  className="project-detail-stat-bento-card"
                >
                  <span className="project-detail-stat-bento-value">{row.value}</span>
                  <span className="project-detail-stat-bento-label">{t(row.label)}</span>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          className="project-detail-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.08 }}
        >
          {children}
        </motion.div>
      </div>
    </article>
  );
}
