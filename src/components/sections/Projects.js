"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { 
  Cpu, CreditCard, Truck, Warehouse, Calculator, Settings,
  LayoutDashboard, GitMerge, Smartphone, Clock, Code,
  Database, ShoppingCart, Receipt, BarChart3, MapPin, Bell
} from "lucide-react";

import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { useLanguage } from "@/context/LanguageContext";
import {
  getFeaturedProjects,
  getSecondaryProjects,
} from "../../../data/projects.js";

const HIGHLIGHT_ICONS = {
  "mbe-ecosystem": [Cpu, CreditCard, Truck, Warehouse, Calculator],
  "global-accessories": [LayoutDashboard, GitMerge, Smartphone, Clock, Code],
  "kpitan": [Database, ShoppingCart, CreditCard, Receipt, BarChart3],
  "wood-chips": [Smartphone, MapPin, CreditCard, Bell, Settings]
};

function FeaturedKeyHighlights({ project }) {
  const { lang, t } = useLanguage();
  const highlights = project.highlights?.[lang] ?? project.highlights?.en ?? [];
  const icons = HIGHLIGHT_ICONS[project.id] ?? [Settings, Settings, Settings, Settings, Settings];

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      padding: "24px 28px",
      gap: "16px",
      justifyContent: "center",
      background: "radial-gradient(circle at top right, rgba(99, 102, 241, 0.06) 0%, transparent 60%)"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "4px"
      }}>
        <span style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#818CF8",
          boxShadow: "0 0 8px #6366F1"
        }} />
        <span style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#818CF8"
        }}>
          {t({ en: "KEY ASPECTS", es: "ASPECTOS CLAVE" })}
        </span>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
        {highlights.map((item, index) => {
          const Icon = icons[index] ?? Settings;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                transition: "all 200ms ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.20)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "6px",
                backgroundColor: "rgba(99, 102, 241, 0.12)",
                color: "#818CF8",
                flexShrink: 0
              }}>
                <Icon size={16} strokeWidth={2} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h4 style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#F8FAFC",
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif"
                }}>
                  {item.title}
                </h4>
                <p style={{
                  margin: "2px 0 0",
                  fontSize: "11.5px",
                  color: "#94A3B8",
                  lineHeight: "1.45",
                  fontFamily: "var(--font-inter), system-ui, sans-serif"
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
  const badges = project.badges?.[lang] ?? project.badges?.en ?? [];
  const stats = project.stats ?? [];

  return (
    <article
      className="projects-featured-card"
      style={{
        backgroundColor: "transparent",
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
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
              color: "#F8FAFC",
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
            <span style={{ fontWeight: 500, color: "#F8FAFC" }}>
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

        <div className="projects-featured-right" style={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          overflow: "hidden",
          borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(13, 13, 17, 0.70)"
        }}>
          <FeaturedKeyHighlights project={project} />
        </div>
      </div>

      <div className="project-featured-detail-row">
        <Link href={`/projects/${project.id}`} className="project-card-detail-link">
          {t({ en: "View full case study", es: "Ver caso completo" })}
          <span className="project-card-detail-link-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>

      {stats.length > 0 ? (
        <footer
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(13, 13, 17, 0.70)",
          }}
        >
          {stats.map((row, i) => (
            <div
              key={`${project.id}-stat-${i}`}
              style={{
                padding: "18px",
                textAlign: "center",
                borderRight:
                  i < stats.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "#818CF8",
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

function RutaPymeBentoWidget() {
  const { t } = useLanguage();
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.04)"
    }}>
      <span style={{ fontSize: "9px", fontWeight: 700, color: "#818CF8", letterSpacing: "1.2px", textTransform: "uppercase" }}>
        {t({ en: "FORMALIZATION PROCESS", es: "PROCESO DE FORMALIZACIÓN" })}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          { label: { en: "1. Smart Checklist Form", es: "1. Formulario Checklist" }, status: "done" },
          { label: { en: "2. City Municipal Permit", es: "2. Patente Municipal" }, status: "pulse" },
          { label: { en: "3. Tax Registry (SII Chile)", es: "3. Inicio de Actividades SII" }, status: "pending" }
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: item.status === "done" ? "#10B981" : item.status === "pulse" ? "#6366F1" : "rgba(255,255,255,0.06)",
              boxShadow: item.status === "pulse" ? "0 0 8px #6366F1" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#FFF",
              fontWeight: "bold",
              flexShrink: 0
            }}>
              {item.status === "done" ? "✓" : item.status === "pulse" ? "➔" : ""}
            </span>
            <span style={{
              fontSize: "11px",
              color: item.status === "pending" ? "#64748B" : "#E2E8F0",
              fontWeight: item.status === "pulse" ? "600" : "400",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}>
              {t(item.label)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutosummitBentoWidget() {
  const { t } = useLanguage();
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.04)"
    }}>
      <span style={{ fontSize: "9px", fontWeight: 700, color: "#0EA5E9", letterSpacing: "1.2px", textTransform: "uppercase" }}>
        {t({ en: "VEHICLE QUOTATOR", es: "SIMULADOR DE COTIZACIÓN" })}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Model:", es: "Modelo:" })}</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#F8FAFC" }}>SUV Summit Pro</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Downpayment:", es: "Pie / Entrada:" })}</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#F8FAFC" }}>20% ($6,400)</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Monthly:", es: "Cuota Mensual:" })}</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#10B981" }}>$420 USD</span>
        </div>
      </div>
    </div>
  );
}

function EndolapBentoWidget() {
  const { t } = useLanguage();
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.04)"
    }}>
      <span style={{ fontSize: "9px", fontWeight: 700, color: "#A855F7", letterSpacing: "1.2px", textTransform: "uppercase" }}>
        {t({ en: "ACTIVE SCHEDULER", es: "AGENDA MÉDICA ACTIVA" })}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Doctor:", es: "Médico:" })}</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#F8FAFC" }}>Dr. Valenzuela</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Specialty:", es: "Especialidad:" })}</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#A855F7" }}>Endoscopia</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Status:", es: "Estado:" })}</span>
          <span style={{
            fontSize: "9px",
            fontWeight: "bold",
            color: "#10B981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            padding: "2px 6px",
            borderRadius: "4px"
          }}>{t({ en: "Confirmed", es: "Confirmado" })}</span>
        </div>
      </div>
    </div>
  );
}

function PlanAppBentoWidget() {
  const { t } = useLanguage();
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.04)"
    }}>
      <span style={{ fontSize: "9px", fontWeight: 700, color: "#F43F5E", letterSpacing: "1.2px", textTransform: "uppercase" }}>
        {t({ en: "CRITICAL PATH CHART", es: "ESTADO DE RUTA CRÍTICA" })}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {[
          { label: { en: "Foundations", es: "Cimientos" }, value: "100%", color: "#10B981" },
          { label: { en: "Structure", es: "Estructura" }, value: "85%", color: "#6366F1" },
          { label: { en: "Plumbing (Critical)", es: "Plomería (Crítica)" }, value: "Delay", color: "#EF4444" }
        ].map((item, i) => (
          <div key={i} style={{ fontSize: "11px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
              <span style={{ color: "#E2E8F0", fontSize: "10.5px" }}>{t(item.label)}</span>
              <span style={{ color: item.color, fontWeight: "bold", fontSize: "10px" }}>{item.value}</span>
            </div>
            <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "99px", overflow: "hidden" }}>
              <div style={{
                width: item.value === "Delay" ? "45%" : item.value,
                height: "100%",
                backgroundColor: item.color
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HugeForestBentoWidget() {
  const { t } = useLanguage();
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.04)"
    }}>
      <span style={{ fontSize: "9px", fontWeight: 700, color: "#10B981", letterSpacing: "1.2px", textTransform: "uppercase" }}>
        {t({ en: "REFORESTATION FUNDING", es: "FINANCIAMIENTO AMBIENTAL" })}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Zone:", es: "Zona:" })}</span>
          <span style={{ fontSize: "11.5px", fontWeight: "bold", color: "#F8FAFC" }}>Valparaíso</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Photos:", es: "Fotos:" })}</span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#10B981" }}>3/3 (100%)</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>{t({ en: "Status:", es: "Estado:" })}</span>
          <span style={{
            fontSize: "9px",
            fontWeight: "bold",
            color: "#0EA5E9",
            backgroundColor: "rgba(14, 165, 233, 0.1)",
            padding: "2px 6px",
            borderRadius: "4px"
          }}>{t({ en: "Approved", es: "Aprobado" })}</span>
        </div>
      </div>
    </div>
  );
}

function ReplavinosBentoWidget() {
  const { t } = useLanguage();
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "16px",
      borderRadius: "8px",
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.04)"
    }}>
      <span style={{ fontSize: "9px", fontWeight: 700, color: "#10B981", letterSpacing: "1.2px", textTransform: "uppercase" }}>
        {t({ en: "SAFE HARVEST MARGIN", es: "VENTANA DE COSECHA SEGURA" })}
      </span>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "2px solid #10B981",
          background: "rgba(16, 185, 129, 0.08)",
          flexShrink: 0
        }}>
          <span style={{ fontSize: "13px", fontWeight: "bold", color: "#10B981" }}>D14</span>
          <span style={{ fontSize: "6.5px", color: "#94A3B8", textTransform: "uppercase", fontWeight: "bold", marginTop: "-2px" }}>Safe</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, color: "#F8FAFC" }}>
            {t({ en: "Safety Re-entry", es: "Resguardo de Pesticidas" })}
          </p>
          <p style={{ margin: "2px 0 0", fontSize: "9px", color: "#94A3B8", lineHeight: "1.3" }}>
            {t({ en: "Restricted entry: Days 1-7. Safe Day 14+.", es: "Entrada restringida: Días 1-7. Seguro Día 14+." })}
          </p>
        </div>
      </div>
    </div>
  );
}

const BENTO_WIDGETS = {
  "ruta-pyme": RutaPymeBentoWidget,
  "autosummit": AutosummitBentoWidget,
  "endolap": EndolapBentoWidget,
  "planapp": PlanAppBentoWidget,
  "huge-forest": HugeForestBentoWidget,
  "replavinos": ReplavinosBentoWidget
};

function SecondaryProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const badges = project.badges?.[lang] ?? project.badges?.en ?? [];
  const Widget = BENTO_WIDGETS[project.id];

  const content = (
    <>
      <div className="projects-secondary-card-content-wrap">
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
            color: "#F8FAFC",
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
            color: "#94A3B8",
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
      </div>

      <div>
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

        <div className="project-secondary-detail-row">
          <Link href={`/projects/${project.id}`} className="project-card-detail-link project-card-detail-link--compact">
            {t({ en: "Case study", es: "Ver caso" })}
            <span className="project-card-detail-link-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <article
      className="projects-secondary-card"
      style={{
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: "24px",
      }}
    >
      <div className="projects-secondary-card-layout">
        <div className="projects-secondary-card-left">
          {content}
        </div>
        {Widget ? (
          <div className="projects-secondary-card-right">
            <Widget />
          </div>
        ) : null}
      </div>
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
        backgroundColor: "transparent",
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
            color: "#F8FAFC",
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
            style={{ flex: 1, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          />
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <SectionLabel>
              {t({ en: "MORE PROJECTS", es: "MÁS PROYECTOS" })}
            </SectionLabel>
          </div>
          <div
            aria-hidden
            style={{ flex: 1, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
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
          key={tagFilter}
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
