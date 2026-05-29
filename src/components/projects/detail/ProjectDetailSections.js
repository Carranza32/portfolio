"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectDetailSections({
  project,
  showGallery = true,
  showHighlights = true,
  showStack = true,
  showDescription = true,
  gallerySlot,
}) {
  const { lang, t } = useLanguage();
  const highlights = project.highlights?.[lang] ?? project.highlights?.en ?? [];
  const hasHighlights = showHighlights && highlights.length > 0;

  return (
    <>
      {showDescription ? (
        <p className="project-detail-description">{t(project.description)}</p>
      ) : null}

      {hasHighlights ? (
        <section className="project-detail-section">
          <SectionLabel>
            {t({ en: "KEY HIGHLIGHTS", es: "ASPECTOS CLAVE" })}
          </SectionLabel>
          <ul className="project-detail-highlight-grid">
            {highlights.map((item) => (
              <li key={item.title} className="project-detail-highlight-card">
                <span className="project-detail-highlight-dot" aria-hidden />
                <h3 className="project-detail-highlight-title">{item.title}</h3>
                <p className="project-detail-highlight-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {showStack ? (
        <section className="project-detail-section">
          <SectionLabel>{t({ en: "STACK", es: "STACK" })}</SectionLabel>
          <div className="project-detail-stack">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </section>
      ) : null}

      {showGallery ? (
        <section className="project-detail-section">
          <SectionLabel>
            {t({ en: "GALLERY & UI", es: "GALERÍA E INTERFAZ" })}
          </SectionLabel>
          {gallerySlot ?? (
            <div className="project-detail-gallery">
              {[1, 2, 3].map((i) => (
                <div key={i} className="project-detail-gallery-cell">
                  <span className="project-detail-gallery-placeholder">
                    {t({
                      en: `Screenshot ${i} — add image to /public/projects/${project.id}/`,
                      es: `Captura ${i} — añade imagen en /public/projects/${project.id}/`,
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      ) : null}

      <section className="project-detail-cta-band">
        <div className="project-detail-cta-inner">
          <p className="project-detail-cta-text">
            {t({
              en: "Interested in something similar for your product?",
              es: "¿Te interesa algo similar para tu producto?",
            })}
          </p>
          <a href="/#contact" className="project-detail-cta-btn">
            {t({ en: "Let's talk", es: "Hablemos" })}
          </a>
        </div>
      </section>
    </>
  );
}
