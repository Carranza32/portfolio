"use client";

import {
  Smartphone,
  Server,
  Monitor,
  LayoutDashboard,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Link2,
  Plug,
  ScanLine,
  Users,
  Code,
  Clock,
  Settings,
  ClipboardList,
  CheckSquare,
  FileText,
  Compass,
  Calendar,
  Activity,
  Camera
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Field Experience vs Core Algorithms ────── */
const clientFeatures = [
  {
    icon: Smartphone,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "high-contrast-ui",
    title: { en: "High-Contrast In-Field UI", es: "Interfaz de Alto Contraste para Obra" },
    desc: {
      en: "Specialized high-contrast Flutter widgets tailored for construction operators working under direct outdoor sunlight, ensuring optimal readability and minimizing strain on the job site.",
      es: "Widgets Flutter de alto contraste adaptados para operarios de construcción en terreno bajo luz solar directa, garantizando una excelente legibilidad y ergonomía.",
    },
  },
  {
    icon: ClipboardList,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "quick-progress",
    title: { en: "Fast Progress & Work Orders Logging", es: "Reporte Rápido de Órdenes de Trabajo" },
    desc: {
      en: "Allows operators to update work order progress ratios, check completed tasks off site guidelines, and sync real-time comments with zero-latency caching fallbacks.",
      es: "Permite a los operarios actualizar porcentajes de avance de órdenes de trabajo, marcar tareas completadas y sincronizar comentarios en vivo con caché de tolerancia offline.",
    },
  },
  {
    icon: Camera,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "evidence-capture",
    title: { en: "Native Photo Evidence Capture", es: "Captura de Evidencia Fotográfica" },
    desc: {
      en: "Direct integration with the device's native camera. Operators capture and upload physical visual evidence of completed construction milestones directly to the server.",
      es: "Integración directa con la cámara nativa del dispositivo. Permite a los operarios capturar y subir imágenes físicas de los avances completados directo al servidor en la nube.",
    },
  },
];

const backendFeatures = [
  {
    icon: Zap,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "critical-path",
    title: { en: "Dynamic Critical Path Solver", es: "Algoritmo de Ruta Crítica Dinámico" },
    desc: {
      en: "Core client-side mathematical algorithms tracking task dependencies. Automatically identifies critical delay blocks that threaten to slide the general building deadline.",
      es: "Algoritmos matemáticos que analizan las dependencias de tareas en vivo. Identifica automáticamente cuellos de botella e hitos retrasados que ponen en riesgo la entrega final.",
    },
  },
  {
    icon: LayoutDashboard,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "gantt-monitor",
    title: { en: "Real-Time Gantt Admin Command", es: "Monitoreo en Vivo de Carta Gantt" },
    desc: {
      en: "Centralized Laravel web console for engineering directors. Consolidates field logs to render interactive master Gantt charts and project progress projections.",
      es: "Consola centralizada en Laravel para directores de obra. Consolida los reportes en terreno para proyectar avances interactivos en vivo sobre la carta Gantt maestra.",
    },
  },
  {
    icon: FileText,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "executive-reports",
    title: { en: "Automated Executive Progress Reports", es: "Generador de Informes Gerenciales" },
    desc: {
      en: "Generates visual progress reports and PDF summaries ready for stakeholders. Highlights active delays, pending work ratios, and daily active operator charts.",
      es: "Generación automatizada de reportes de avance y resúmenes ejecutivos en PDF. Detalla atrasos detectados, porcentajes de avance de obra y personal activo.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Users,
    color: "#F59E0B",
    key: "milestone-planning",
    title: { en: "Task Planning", es: "Planificación de Obras" },
    desc: { en: "Project manager defines building milestones and tasks on the Laravel admin Gantt.", es: "El administrador del proyecto define hitos y tareas en la carta Gantt de la oficina." },
  },
  {
    num: "02",
    icon: Smartphone,
    color: "#0EA5E9",
    key: "field-download",
    title: { en: "Tasks Download", es: "Descarga de Órdenes" },
    desc: { en: "Field operator accesses their daily assigned work orders directly in the Flutter app.", es: "El operario en terreno accede a sus órdenes de trabajo asignadas en su app Flutter." },
  },
  {
    num: "03",
    icon: Camera,
    color: "#10B981",
    key: "progress-log",
    title: { en: "Progress Registry", es: "Registro de Avances" },
    desc: { en: "Logs progress percentage and attaches native photo captures of the active job site.", es: "Registra el porcentaje de avance y toma fotos como evidencia física de la obra." },
  },
  {
    num: "04",
    icon: Zap,
    color: "#EC4899",
    key: "critical-solve",
    title: { en: "Critical Path Calculation", es: "Algoritmo de Ruta Crítica" },
    desc: { en: "Mathematical engine automatically analyzes delays, flagging processes blocking the deadline.", es: "El algoritmo analiza retrasos de inmediato, alertando si el plazo general peligra." },
  },
  {
    num: "05",
    icon: LayoutDashboard,
    color: "#818CF8",
    key: "director-reporting",
    title: { en: "Executive Reports", es: "Reportes Gerenciales" },
    desc: { en: "Consolidated visual charts are generated in real-time, exporting PDFs for stakeholders.", es: "Se generan reportes consolidados en tiempo real para reuniones directivas en PDF." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Mobile Field App (Flutter)", es: "Aplicación Móvil en Obra (Flutter)" },
    icon: Smartphone,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.15)",
    techs: [
      { name: "Flutter Multi-Platform", role: { en: "Native-performance compilation for iOS and Android, optimized with high contrast widgets", es: "Compilación nativa para iOS y Android con widgets optimizados para el sol" } },
      { name: "Riverpod State Core", role: { en: "Clean separation of architectural states and task databases", es: "Separación limpia del estado del flujo de tareas de obra y base de datos local" } },
      { name: "Native APIs Integration", role: { en: "Direct camera integration and local storage database cache controllers", es: "Controlador nativo de la cámara del dispositivo y persistencia local" } },
    ],
  },
  {
    group: { en: "Central Server & Data Core", es: "Arquitectura Backend e Infraestructura" },
    icon: Server,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Laravel REST APIs", role: { en: "MVC framework exposing secure endpoints and Gantt charts parameters", es: "Framework MVC que provee APIs REST para la sincronización del avance y cartas Gantt" } },
      { name: "MySQL DB Relational", role: { en: "Structured relational databases for construction steps, task checklists, and logs", es: "Esquema relacional estricto para cronogramas, tareas, fotos y usuarios" } },
      { name: "Apache Web Server", role: { en: "Secure hosting environment protecting sensitive project data and blueprints", es: "Alojamiento Linux seguro con encriptación SSL estricta para planos de obra" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Presentation (Flutter & Web)", es: "Capa Presentación (Flutter y Web)" },
    icon: Layers,
    color: "#F59E0B",
    nodes: [
      { icon: Smartphone, label: { en: "Field Operator App (iOS/And)", es: "App Operario (iOS/And)" }, sub: { en: "Task progress reporting · Photo attachments", es: "Reporte de avance en obra · Captura de fotos" }, accent: true },
      { icon: Monitor, label: { en: "Director Gantt Web Portal", es: "Portal Web de Directores" }, sub: { en: "Laravel Blade · Real-time master calendar", es: "Carta Gantt de oficina · Avance maestro" }, accent: false },
    ],
  },
  {
    layer: { en: "Business Logic & Scheduling Core", es: "Capa Lógica y Algoritmos" },
    icon: Server,
    color: "#10B981",
    nodes: [
      { icon: Activity, label: { en: "REST API Endpoint Gateway", es: "APIs REST del Servidor" }, sub: { en: "Field logs intake processor · Secure authorization", es: "Recepción de reportes · Middleware de seguridad" }, accent: false },
      { icon: Zap, label: { en: "Critical Path Engine", es: "Motor de Ruta Crítica" }, sub: { en: "Delayed tasks dependencies mapping algorithm", es: "Algoritmo de cálculo de dependencias y retrasos" }, accent: true },
    ],
  },
  {
    layer: { en: "Database & Storage Layer", es: "Capa de Datos e Infraestructura" },
    icon: Link2,
    color: "#0EA5E9",
    nodes: [
      { name: "MySQL ConstructionDB", color: "#38BDF8", sub: { en: "Relational master cronograms · Tasks · Users", es: "Base de datos de cronogramas · Tareas · Usuarios" } },
      { name: "Cloud Object Storage", color: "#10B981", sub: { en: "Immutable photo evidence folders", es: "Almacenamiento de evidencias y planos" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Flutter iOS / Android", es: "App Móvil de Terreno" },
    platformColor: "#F59E0B",
    icon: Smartphone,
    title: { en: "In-Field Tracking Client", es: "Portal Móvil del Operario" },
    desc: {
      en: "High-contrast mobile client designed for field builders working under harsh light conditions, allowing rapid task updates and photo logging.",
      es: "Aplicación móvil optimizada para operarios bajo luz solar directa. Permite reportar avances físicos de forma ágil y capturar fotos en obra.",
    },
    bullets: [
      { en: "Sunlight-ergonomic high-contrast responsive interface", es: "Interfaz adaptada a la intemperie de alta visibilidad" },
      { en: "Native camera capture flow for physical evidence", es: "Módulo nativo de cámara para evidencias físicas" },
      { en: "Offline resilience cache fallback for remote zones", es: "Caché fuera de línea para obras sin cobertura de red" },
      { en: "Interactive checklist parameters per work order", es: "Lista de control detallada por orden de trabajo" },
    ],
  },
  {
    platform: { en: "Critical Path Core", es: "Algoritmo de Ruta Crítica" },
    platformColor: "#EC4899",
    icon: Zap,
    title: { en: "Mathematical Delay Solver", es: "Calculador Matemático de Plazos" },
    desc: {
      en: "An active client-side algorithm parsing milestones dependencies. Calculates dynamic deadline shifts and immediately red-flags bottleneck delays.",
      es: "Motor algorítmico integrado que evalúa dependencias entre hitos. Proyecta atrasos automáticamente y detecta cuellos de botella críticos.",
    },
    bullets: [
      { en: "Automatic task dependency mapping parameters", es: "Mapeo automático de dependencias en el cronograma" },
      { en: "Active warning flags for delayed master events", es: "Marcación de hitos críticos con demoras bloqueantes" },
      { en: "Dynamic progress projection calculations logic", es: "Cálculos matemáticos para proyección de plazos finales" },
      { en: "Proactive resource redistribution suggestions alerts", es: "Alertas sugeridas para reubicación de personal de obra" },
    ],
  },
  {
    platform: { en: "Director Web Admin", es: "Portal Administrativo Web" },
    platformColor: "#10B981",
    icon: LayoutDashboard,
    title: { en: "Real-Time Gantt Command Control", es: "Consola Gantt de Directores de Obra" },
    desc: {
      en: "Centralized Laravel command panel displaying real-time construction Gantt charts, managing field operator accounts, and exporting PDFs.",
      es: "Consola de control de obra en Laravel. Mapea la carta Gantt general en tiempo real, administra capataces y exporta resúmenes ejecutivos.",
    },
    bullets: [
      { en: "Live interactive Gantt master chart visualizers", es: "Visualizador de la carta Gantt maestra del proyecto" },
      { en: "Comprehensive Excel/PDF progress reports exports", es: "Exportador de reportes de obra detallados a PDF y Excel" },
      { en: "Dynamic work orders allocation dashboard tools", es: "Asignación masiva de tareas a operarios de terreno" },
      { en: "Active field operator productivity metrics logs", es: "Indicadores visuales de rendimiento por equipo de obra" },
    ],
  },
];

/* ─── Mobile Panel (The actual screenshot of the app) ───────── */
const mobilePanels = [
  {
    src: "/img/planapp/planapp.png",
    label: {
      en: "PlanApp Mobile Client — High-contrast screen optimized for in-field operators to log work orders and attach progress milestones.",
      es: "Cliente Móvil PlanApp — Pantalla de alto contraste optimizada para operarios en terreno, permitiendo reportar y adjuntar evidencia."
    },
    color: "#F59E0B"
  }
];

const ease = [0.22, 1, 0.36, 1];

export default function PlanappProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Immersive Field Mobile Hero ────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#F59E0B" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(245, 158, 11, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(14, 165, 233, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.25)", background: "rgba(245, 158, 11, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#F59E0B" }} />
            {t({ en: "Construction Schedulers & Flutter Mobile", es: "Gestión de Obras y Flutter Mobile" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Real-time in-field progress tracking and critical path solvers",
              es: "Seguimiento de obras en terreno y algoritmos de ruta crítica",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A robust mobile construction engineering application designed for TWGroup Chile. Enables field operators to report task progress in real time using high-contrast sunlight-optimized widgets. Incorporates a dynamic critical path analysis engine that calculates project deviations and identifies task bottlenecks, synchronized with a central Laravel backoffice Gantt master scheduler.",
              es: "Aplicación móvil avanzada de ingeniería de obras desarrollada para TWGroup Chile. Permite a los operarios en terreno reportar el avance físico de tareas en vivo mediante interfaces de alto contraste optimizadas para el sol. Cuenta con un algoritmo matemático de ruta crítica que calcula cuellos de botella, sincronizado con una carta Gantt central en Laravel.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(245, 158, 11, 0.22), transparent 80%)" }} aria-hidden />

          {/* Centered Single Phone Presentation */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div className="mbe-phone-bezel" style={{ width: "165px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: "0 24px 50px rgba(0,0,0,0.9), 0 0 30px rgba(245,158,11,0.3)" }}>
              <div className="mbe-phone-notch" aria-hidden />
              <div className="mbe-phone-screen">
                <Image
                  src="/img/planapp/planapp.png"
                  alt={t({ en: "PlanApp In-field operator UI screen", es: "Pantalla Operario PlanApp en Terreno" })}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="165px"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mbe-hero-caption">
        {t({
          en: "PlanApp Platform — Flutter In-field Client App synchronized with Laravel master Gantt charts backoffice, compiled for iOS and Android.",
          es: "Plataforma PlanApp — Aplicación móvil Flutter para terreno sincronizada con la carta Gantt maestra del panel Laravel, para iOS y Android.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables Section ───────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES DEL PROYECTO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Three specialized production products shipped end-to-end to digitize job site operations.", es: "Tres módulos especializados puestos en producción para digitalizar el control operativo de obras." })}
      </p>

      <div className="mbe-deliverables-grid">
        {deliverables.map(({ platform, platformColor, icon: Icon, title, desc, bullets }, i) => (
          <motion.div
            key={i}
            className="mbe-deliverable-card"
            style={{ "--d-color": platformColor }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: i * 0.08 }}
          >
            <div className="mbe-deliverable-platform">
              <span className="mbe-deliverable-platform-dot" />
              {t(platform)}
            </div>

            <div className="mbe-deliverable-header">
              <div className="mbe-deliverable-icon">
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mbe-deliverable-title">{t(title)}</h3>
            </div>

            <p className="mbe-deliverable-desc">{t(desc)}</p>

            <ul className="mbe-deliverable-bullets">
              {bullets.map((b, bi) => (
                <li key={bi} className="mbe-deliverable-bullet">
                  <span className="mbe-deliverable-bullet-dot" aria-hidden />
                  {t(b)}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );

  /* ── 2. Capabilities — Field UI vs Core Algorithms ──────── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PLATFORM CAPABILITIES", es: "CAPACIDADES DE LA PLATAFORMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Ergonomic mobile inputs designed for active builders combined with mathematical scheduling solvers.", es: "Diseño ergonómico para trabajo rudo a la intemperie coordinado con potentes algoritmos de plazos." })}
      </p>

      {/* 2a. Field App Block */}
      <div style={{ marginTop: "36px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#F59E0B",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Smartphone size={16} strokeWidth={2.5} />
          {t({ en: "In-Field Mobile Experience (Flutter iOS & Android)", es: "Experiencia Móvil en Terreno (Flutter iOS y Android)" })}
        </h4>
        <div className="mbe-features-grid">
          {clientFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
            <motion.div
              key={key}
              className="mbe-feature-card"
              style={{ "--f-color": color, "--f-glow": glow }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.07 }}
            >
              <div className="mbe-feature-icon-wrap">
                <Icon size={22} strokeWidth={1.75} aria-hidden />
              </div>
              <div className="mbe-feature-body">
                <h3 className="mbe-feature-title">{t(title)}</h3>
                <p className="mbe-feature-desc">{t(desc)}</p>
              </div>
              <div className="mbe-feature-accent" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2b. Algorithmic Backend Block */}
      <div style={{ marginTop: "48px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#10B981",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Server size={16} strokeWidth={2.5} />
          {t({ en: "Scheduling Solver & Central Backoffice (Backend Laravel)", es: "Algoritmos y Consola de Control de Obra (Backend Laravel)" })}
        </h4>
        <div className="mbe-features-grid">
          {backendFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
            <motion.div
              key={key}
              className="mbe-feature-card"
              style={{ "--f-color": color, "--f-glow": glow }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.07 }}
            >
              <div className="mbe-feature-icon-wrap">
                <Icon size={22} strokeWidth={1.75} aria-hidden />
              </div>
              <div className="mbe-feature-body">
                <h3 className="mbe-feature-title">{t(title)}</h3>
                <p className="mbe-feature-desc">{t(desc)}</p>
              </div>
              <div className="mbe-feature-accent" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ── 3. Interactive User Journey ────────────────────────── */
  const journeySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "CONSTRUCTION PROJECT JOURNEY", es: "EL VIAJE DIGITAL DE GESTIÓN DE OBRAS" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({
          en: "How task planning synchronizes in-field progress reports, triggers delay warnings, and exports executive charts.",
          es: "Cómo la asignación de obras coordina reportes en terreno, calcula alertas críticas y emite informes gerenciales."
        })}
      </p>

      <div className="mbe-journey" style={{ marginTop: "40px" }}>
        {journeySteps.map(({ num, icon: Icon, color, key, title, desc }, i) => (
          <div key={key} className="mbe-journey-step-wrap">
            <motion.div
              className="mbe-journey-step"
              style={{ "--j-color": color }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            >
              <div className="mbe-journey-num">{num}</div>
              <div className="mbe-journey-icon-wrap">
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <h4 className="mbe-journey-title">{t(title)}</h4>
              <p className="mbe-journey-desc">{t(desc)}</p>
            </motion.div>

            {i < journeySteps.length - 1 && (
              <div className="mbe-journey-connector" aria-hidden>
                <div className="mbe-journey-line" />
                <ArrowRight size={14} className="mbe-journey-arrow" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  /* ── 4. Technical Architecture ──────────────────────────── */
  const architectureSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "SYSTEM ARCHITECTURE", es: "ARQUITECTURA DE SISTEMAS" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Topology mapping mobile data intake, critical path solvers logic, and relational Gantt models.", es: "Mapeo de arquitectura que enlaza reportes móviles, algoritmos Gantt y almacenamiento de planos." })}
      </p>

      <div className="mbe-arch" style={{ marginTop: "32px" }}>
        {archLayers.map(({ layer, icon: LayerIcon, color, nodes }, li) => (
          <div key={li} className="mbe-arch-layer-wrap">
            <motion.div
              className="mbe-arch-layer"
              style={{ "--l-color": color }}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: li * 0.1 }}
            >
              <div className="mbe-arch-layer-label">
                <div className="mbe-arch-layer-icon">
                  <LayerIcon size={14} strokeWidth={2} />
                </div>
                <span>{t(layer)}</span>
              </div>

              <div className="mbe-arch-nodes">
                {nodes[0].name ? (
                  nodes.map((n, ni) => (
                    <div key={ni} className="mbe-arch-badge" style={{ "--b-color": n.color }}>
                      <span className="mbe-arch-badge-name">{n.name}</span>
                      <span className="mbe-arch-badge-sub">{t(n.sub)}</span>
                    </div>
                  ))
                ) : (
                  nodes.map((n, ni) => {
                    const NodeIcon = n.icon;
                    return (
                      <div key={ni} className={`mbe-arch-node${n.accent ? " mbe-arch-node--accent" : ""}`}>
                        <div className="mbe-arch-node-icon-wrap">
                          <NodeIcon size={18} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="mbe-arch-node-name">{t(n.label)}</p>
                          <p className="mbe-arch-node-sub">{t(n.sub)}</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>

            {li < archLayers.length - 1 && (
              <div className="mbe-arch-down-connector" aria-hidden>
                <div className="mbe-arch-down-line" />
                <div className="mbe-arch-down-dot" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  /* ── 5. Detailed Tech Stack Groups ──────────────────────── */
  const stackSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DETAILED TECH STACK", es: "STACK TECNOLÓGICO DETALLADO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Production toolkit selected for native phone layout fluid performance and solid scheduling data.", es: "Herramientas de producción elegidas para ejecución fluida en campo y consistencia de datos de obra." })}
      </p>

      <div className="mbe-stack-groups" style={{ marginTop: "32px" }}>
        {stackGroups.map(({ group, icon: GroupIcon, color, glow, techs }, gi) => (
          <motion.div
            key={gi}
            className="mbe-stack-group"
            style={{ "--sg-color": color, "--sg-glow": glow }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: gi * 0.1 }}
          >
            <div className="mbe-stack-group-header">
              <div className="mbe-stack-group-icon">
                <GroupIcon size={14} strokeWidth={2} aria-hidden />
              </div>
              <span className="mbe-stack-group-name">{t(group)}</span>
            </div>

            <div className="mbe-stack-techs">
              {techs.map(({ name, role }, ti) => (
                <div key={ti} className="mbe-stack-tech-card">
                  <div className="mbe-stack-tech-letter" style={{ color: color }}>
                    {name.charAt(0)}
                  </div>
                  <div className="mbe-stack-tech-info">
                    <span className="mbe-stack-tech-name">{name}</span>
                    <span className="mbe-stack-tech-role">{t(role)}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  /* ── 6. Live Interface Showcase (The actual screenshot) ──── */
  const gallerySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PLANAPP IN-FIELD INTERFACE", es: "INTERFAZ DE TERRENO DE PLANAPP" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "28px" }}>
        {t({ en: "Explore the real sunlight-optimized application interface developed for construction crews.", es: "Explora la captura real optimizada para el sol desarrollada para capataces y operarios." })}
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
        <motion.div
          className="mbe-panel-card"
          style={{ maxWidth: "340px", flex: "1 1 300px" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="mbe-phone-bezel" style={{ width: "165px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: "0 24px 50px rgba(0,0,0,0.85), 0 0 30px rgba(245,158,11,0.35)" }}>
              <div className="mbe-phone-notch" aria-hidden />
              <div className="mbe-phone-screen">
                <Image
                  src={mobilePanels[0].src}
                  alt={t(mobilePanels[0].label)}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="165px"
                />
              </div>
            </div>
          </div>
          <span className="mbe-panel-label" style={{ fontSize: "11px", color: "#94A3B8", marginTop: "16px", display: "block", textAlign: "center", lineHeight: "1.4" }}>
            {t(mobilePanels[0].label)}
          </span>
        </motion.div>
      </div>
    </section>
  );

  return (
    <ProjectDetailShell project={project} showStats={false}>
      {heroShowcase}
      {deliverablesSection}
      {featuresSection}
      {journeySection}
      {architectureSection}
      {stackSection}
      {gallerySection}

      <ProjectDetailSections
        project={project}
        showGallery={false}
        showHighlights={false}
        showStack={false}
        showDescription={false}
      />
    </ProjectDetailShell>
  );
}
