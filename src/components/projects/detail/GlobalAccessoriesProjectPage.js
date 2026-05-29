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
  Settings
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Mobile vs Backend ───────────────────── */
const mobileFeatures = [
  {
    icon: ScanLine,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "barcode-tracking",
    title: { en: "Barcode Time & Session Tracking", es: "Toma de Tiempos por Código de Barras" },
    desc: {
      en: "Accurate industrial time-tracking. Operators scan their personal barcodes to log into shared tablets and scan products to instantly start, pause, and complete manufacturing processes.",
      es: "Registro exacto de tiempos en fábrica. Operarios escanean su código de barras personal para iniciar sesión en tablets y escanean productos para cronometrar procesos de manufactura, pausas y descansos.",
    },
  },
  {
    icon: Users,
    color: "#34D399",
    glow: "rgba(52,211,153,0.18)",
    key: "shared-tablet",
    title: { en: "Multi-Role Tablet Workflows", es: "Flujo Multi-Rol en Tablets Compartidas" },
    desc: {
      en: "Optimized layouts for factory tablets supporting Operator Mode (focused tasks/timers) and Supervisor Mode (real-time progress tracking and direct task assignments on the floor).",
      es: "Pantallas optimizadas para tablets compartidas que soportan el Modo Operario (tareas y cronómetros) y el Modo Supervisor (monitoreo del avance de operarios y asignación directa en piso).",
    },
  },
  {
    icon: Smartphone,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "getx-analytics",
    title: { en: "GetX Mobile Executive Dashboard", es: "Dashboard Gerencial Móvil en GetX" },
    desc: {
      en: "A robust cross-platform Flutter app powered by GetX state management for management to track active PO progress, monitor daily capacity utilized vs. actual output, and view dynamic KPI charts on the go.",
      es: "App Flutter multiplataforma con gestión GetX para que la gerencia monitoree en vivo el avance de órdenes de producción (POs), capacidad utilizada vs. disponible y gráficos de rendimiento diario.",
    },
  },
];

const backendFeatures = [
  {
    icon: Zap,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "websockets-engine",
    title: { en: "Real-Time WebSockets Sync Engine", es: "Motor WebSockets en Tiempo Real" },
    desc: {
      en: "High-performance live communications updating administrative dashboards and industrial monitors in real time when operators scan barcodes, preventing data lag on the factory floor.",
      es: "Flujos de comunicación en vivo que transmiten datos de escaneo en milisegundos, actualizando pantallas administrativas de OEE y dashboards de supervisión sin refrescar la página.",
    },
  },
  {
    icon: Code,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "crud-generator",
    title: { en: "Modular CRUD Code Generator", es: "Generador CRUD Modular Inteligente" },
    desc: {
      en: "Built a custom package in Laravel to automatically generate complete database operations, custom API endpoints, and dynamic React + PrimeReact interfaces based on column definitions.",
      es: "Paquete personalizado en Laravel que genera automáticamente operaciones de base de datos, APIs REST y vistas React + PrimeReact dinámicas a partir de definiciones de columnas de tablas.",
    },
  },
  {
    icon: Layers,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "capacity-planner",
    title: { en: "Weekly Capacity & Productivity Planner", es: "Planificador de Capacidad Productiva Semanal" },
    desc: {
      en: "Advanced backend module consolidates raw operator time-tracking data to project future production yields, identify line bottlenecks, and export comprehensive administrative PDF/Excel reports.",
      es: "Módulo administrativo que procesa los tiempos consolidados de operarios para proyectar la productividad semanal, detectar cuellos de botella en las líneas y exportar reportes legales a PDF/Excel.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: ScanLine,
    color: "#10B981",
    key: "login",
    title: { en: "Operator Barcode Login", es: "Ingreso por Código de Barras" },
    desc: { en: "Operator scans personal badge to unlock the shared tablet and open their dashboard.", es: "El operario escanea su gafete personal para iniciar sesión en la tablet de forma instantánea." },
  },
  {
    num: "02",
    icon: Users,
    color: "#34D399",
    key: "assign",
    title: { en: "Supervisor Assignment", es: "Asignación de Supervisor" },
    desc: { en: "Supervisor assigns production orders and tasks directly on the tablet screen.", es: "El supervisor asigna órdenes de producción a las líneas y distribuye tareas en la pantalla." },
  },
  {
    num: "03",
    icon: Clock,
    color: "#0EA5E9",
    key: "timing",
    title: { en: "Live Process Timing", es: "Registro de Tiempos Activos" },
    desc: { en: "Operator scans product barcode to start process. Timers record active vs. idle intervals.", es: "Operario escanea el producto y el cronómetro registra tiempos de trabajo, pausas y descansos." },
  },
  {
    num: "04",
    icon: Zap,
    color: "#F59E0B",
    key: "sync",
    title: { en: "Real-Time WebSocket Sync", es: "Sincronización WebSockets" },
    desc: { en: "Intake data is instantly pushed to backend servers and live manager monitors.", es: "Los datos de piso se transmiten de inmediato al servidor y se reflejan al segundo en los paneles." },
  },
  {
    num: "05",
    icon: LayoutDashboard,
    color: "#6366F1",
    key: "planning",
    title: { en: "Executive Analytics", es: "Planificación y Reportes" },
    desc: { en: "Management tracks OEE metrics, plans weekly output, and prints PDF productivity logs.", es: "Gerencia visualiza métricas de OEE, proyecta la producción semanal y descarga reportes PDF." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Mobile Ecosystem", es: "Ecosistema Móvil" },
    icon: Smartphone,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.15)",
    techs: [
      { name: "Flutter", role: { en: "Shared tablet & executive mobile app", es: "App para tablets compartidas y móvil gerencial" } },
      { name: "GetX", role: { en: "Reactive state management & dynamic routing", es: "Gestión de estado reactivo y rutas dinámicas" } },
      { name: "QR / Barcode API", role: { en: "Native hardware camera scanning", es: "Lectura nativa por cámara del dispositivo" } },
    ],
  },
  {
    group: { en: "Backend & SaaS Panel", es: "Backend y Portal SaaS" },
    icon: Server,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Laravel", role: { en: "REST API & weekly yield engine", es: "API REST y motor de capacidad semanal" } },
      { name: "React JS", role: { en: "Responsive admin interfaces & components", es: "Interfaces administrativas interactivas" } },
      { name: "PrimeReact & Inertia.js", role: { en: "SaaS layout & data synchronization", es: "Componentes de interfaz y sincronización de datos" } },
      { name: "WebSockets", role: { en: "Live floor monitoring broadcasts", es: "Transmisión en vivo de eventos en fábrica" } },
    ],
  },
  {
    group: { en: "Infrastructure & Tools", es: "Infraestructura" },
    icon: Plug,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.15)",
    techs: [
      { name: "Docker", role: { en: "Isolated container environments", es: "Entornos de contenedores aislados y estables" } },
      { name: "MySQL", role: { en: "Relational production database logic", es: "Estructura y persistencia relacional compleja" } },
      { name: "JWT", role: { en: "Secure token mobile authentication", es: "Autenticación segura basada en tokens para apps" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Layer", es: "Capa Cliente" },
    icon: Layers,
    color: "#0EA5E9",
    nodes: [
      { icon: Smartphone, label: { en: "Flutter App (Tablets)", es: "Flutter App (Tablets)" }, sub: { en: "Shared floor use · Barcode · Dual Roles", es: "Uso compartido en planta · Códigos de barra · Doble Rol" }, accent: true },
      { icon: Smartphone, label: { en: "Flutter App (Executive)", es: "Flutter App (Gerencial)" }, sub: { en: "iOS / Android · GetX · Live PO charts", es: "iOS / Android · GetX · Gráficos de POs en vivo" }, accent: true },
    ],
  },
  {
    layer: { en: "Backend & Web SaaS", es: "Capa Backend y Web SaaS" },
    icon: Server,
    color: "#10B981",
    nodes: [
      { icon: Monitor, label: { en: "Laravel REST API", es: "Laravel REST API" }, sub: { en: "Weekly Planner · WebSocket Broadcast", es: "Planificador de capacidad · Canal WebSockets" }, accent: false },
      { icon: LayoutDashboard, label: { en: "React + PrimeReact Admin", es: "React + PrimeReact Admin" }, sub: { en: "Dynamic CRUDs · Live OEE monitors · PDF", es: "CRUDs dinámicos · Monitor OEE en vivo · PDF" }, accent: false },
    ],
  },
  {
    layer: { en: "Infrastructure", es: "Infraestructura" },
    icon: Link2,
    color: "#A855F7",
    nodes: [
      { name: "MySQL DB", color: "#10B981", sub: { en: "Production data logs", es: "Registros de producción" } },
      { name: "Docker Container", color: "#0EA5E9", sub: { en: "Isolated environments", es: "Entornos aislados" } },
      { name: "WebSockets Reverb", color: "#F59E0B", sub: { en: "Real-time sync channels", es: "Canales de sincronización en vivo" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Mobile / Tablet", es: "Móvil / Tablet" },
    platformColor: "#10B981",
    icon: ScanLine,
    title: { en: "Operator Flutter App (Shared Tablet)", es: "App Flutter de Operario (Tablet)" },
    desc: {
      en: "Multiplatform Flutter layout optimized for shared tablet terminals on the factory floor, featuring swift barcode login and accurate task cronometers.",
      es: "Interfaz optimizada para terminales de tablets compartidas en planta. Permite inicios de sesión rápidos por código de barras y registro exacto de tiempos activos y muertos.",
    },
    bullets: [
      { en: "Barcode credentials scanning login", es: "Inicio de sesión por escaneo de gafete" },
      { en: "Cronometer active tasks, pauses & rests", es: "Registro exacto de tiempos, pausas y descansos" },
      { en: "Product item barcode integration scanner", es: "Escáner integrado de código de producto" },
      { en: "High-contrast touch UI for active factory floor", es: "UI táctil de alto contraste para entorno fabril" },
    ],
  },
  {
    platform: { en: "Mobile / Tablet", es: "Móvil / Tablet" },
    platformColor: "#34D399",
    icon: Users,
    title: { en: "Supervisor Flutter App (Shared Tablet)", es: "App Flutter de Supervisor (Tablet)" },
    desc: {
      en: "Visual control panel allowing supervisors to assign production orders, monitor individual operator logs, and track bottle-necks in real time from the factory floor.",
      es: "Panel táctil para supervisores. Permite monitorear el avance del personal en vivo, asignar órdenes de trabajo y detectar retrasos en las líneas desde la misma tablet.",
    },
    bullets: [
      { en: "Real-time operator logs timeline", es: "Línea de tiempo de estados de operarios en vivo" },
      { en: "Swift task & PO assignments directly to workers", es: "Asignación rápida de órdenes a operarios" },
      { en: "Live alarms of process bottlenecks", es: "Alertas inmediatas de cuellos de botella" },
      { en: "Tablet-optimized responsive grids", es: "Grillas responsivas optimizadas para tablet" },
    ],
  },
  {
    platform: { en: "Mobile", es: "Móvil" },
    platformColor: "#0EA5E9",
    icon: Smartphone,
    title: { en: "Executive Flutter Mobile App", es: "App Flutter Gerencial (Móvil)" },
    desc: {
      en: "iOS and Android executive application powered by GetX. Allows management to monitor active PO schedules, view capacity calculations and dynamic KPI analytics.",
      es: "Aplicación ejecutiva iOS y Android en Flutter (GetX). Permite consultar el avance de POs activas, proyectar capacidades semanales y consultar gráficos analíticos.",
    },
    bullets: [
      { en: "Live progress tracking of active PO schedules", es: "Progreso en tiempo real de POs activas" },
      { en: "GetX state manager reactive KPI dashboards", es: "Dashboards KPI reactivos con GetX" },
      { en: "Dynamic yield and OEE analytics charts", es: "Gráficos interactivos de OEE y rendimiento" },
      { en: "Remote production reports access", es: "Acceso remoto a reportes analíticos" },
    ],
  },
  {
    platform: { en: "Web", es: "Web" },
    platformColor: "#6366F1",
    icon: Monitor,
    title: { en: "Administrative Web SaaS Portal", es: "Portal Web de Administración SaaS" },
    desc: {
      en: "Comprehensive Laravel back-office utilizing React and PrimeReact. Houses OEE dashboards, automatic CRUD generators, weekly planner and PDF report export tools.",
      es: "Back-office centralizado con Laravel, React y PrimeReact. Consolida dashboards OEE en vivo, generador automático de CRUDs, planificador de capacidad y reportes PDF.",
    },
    bullets: [
      { en: "Consolidated real-time OEE dashboards", es: "Dashboards de eficiencia general (OEE) en vivo" },
      { en: "Dynamic column CRUD modules generator", es: "Generación automatizada de CRUDs e interfaces" },
      { en: "Weekly yields & bottleneck planner", es: "Planificador de producción semanal y cuellos de botella" },
      { en: "PDF productivity logs & Excel exportations", es: "Generación de reportes PDF y exportación Excel" },
    ],
  },
];

/* ─── Product Panels ───────────────────────────────────── */
const webPanels = [
  {
    src: "/img/global-accessories/web/web_realtime_workers_work.png",
    url: "traceability.global-accessories.com/dashboard/realtime",
    label: { en: "Live Floor Dashboard — Active workers & production PO logs in real time", es: "Dashboard en Vivo — Progreso de operarios activos y órdenes de producción en tiempo real" },
    featured: true,
  },
  {
    src: "/img/global-accessories/web/web_avgtime_by_style.png",
    url: "traceability.global-accessories.com/analytics/efficiency",
    label: { en: "Efficiency Analytics — Average active timing and bottlenecks by style", es: "Análisis de Tiempos — Eficiencia promedio y cuellos de botella por estilo de producto" },
    featured: false,
  },
  {
    src: "/img/global-accessories/web/web_work_order_progress.png",
    url: "traceability.global-accessories.com/orders/tracking",
    label: { en: "Order Traceability — Real-time progress and duration of PO lifecycles", es: "Trazabilidad de Órdenes — Estado de avance y tiempos consolidados por orden de producción (PO)" },
    featured: false,
  },
];

const mobilePanels = [
  { src: "/img/global-accessories/mobile/gerencial1_dashboard.png", label: { en: "Active POs Dashboard", es: "Dashboard de POs Activas" } },
  { src: "/img/global-accessories/mobile/gerencial1_dashboard_realtime_work.png", label: { en: "Yield & Efficiency Charts", es: "Rendimiento y Eficiencia" } },
  { src: "/img/global-accessories/mobile/gerencial1_order_detail.png", label: { en: "Order Details in Flutter", es: "Detalles de Orden en Flutter" } },
  { src: "/img/global-accessories/mobile/supervisor_assign_work_to_worker.png", label: { en: "Supervisor Assignment UI", es: "Asignación de Supervisor" } },
];

const ease = [0.22, 1, 0.36, 1];

export default function GlobalAccessoriesProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Cinematic Hero ────────────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#10B981" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(16, 185, 129, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(14, 165, 233, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#10B981", border: "1px solid rgba(16, 185, 129, 0.25)", background: "rgba(16, 185, 129, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#10B981" }} />
            {t({ en: "Industrial SaaS & Multiplatform Apps", es: "SaaS Industrial y Apps Multiplataforma" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Traceability & time-tracking directly on the factory floor",
              es: "Trazabilidad y control de tiempos en el piso de la fábrica",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A comprehensive industrial automation ecosystem built for Global Accessories. Integrates Flutter shared-tablet applications for workers with a real-time Laravel + React dashboard to calculate overall equipment effectiveness (OEE), plan weekly capacity, and eliminate process bottlenecks.",
              es: "Ecosistema integral de automatización industrial desarrollado para Global Accessories. Integra aplicaciones móviles en Flutter para tablets de operarios y supervisores con un portal administrativo Laravel + React que calcula OEE y planifica la capacidad semanal.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(16, 185, 129, 0.22), transparent 80%)" }} aria-hidden />

          {/* Laptop frame */}
          <div className="mbe-laptop-wrap">
            <div className="mbe-laptop-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-laptop-camera" aria-hidden />
              <div className="mbe-laptop-screen">
                <Image
                  src="/img/global-accessories/web/web_realtime_workers_work.png"
                  alt={t({ en: "SaaS Admin Dashboard", es: "Dashboard de Administración SaaS" })}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </div>
            <div className="mbe-laptop-base" style={{ background: "linear-gradient(to bottom, #475569, #1E293B)" }}>
              <div className="mbe-laptop-foot" style={{ background: "#0F172A" }} />
            </div>
          </div>

          {/* Phone frame */}
          <div className="mbe-phone-wrap">
            <div className="mbe-phone-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-phone-notch" aria-hidden />
              <div className="mbe-phone-screen">
                <Image
                  src="/img/global-accessories/mobile/gerencial1_dashboard.png"
                  alt={t({ en: "Flutter Gerencial App Dashboard", es: "Dashboard App Gerencial Flutter" })}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="180px"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mbe-hero-caption">
        {t({
          en: "Global Accessories Ecosystem — SaaS Web Admin (Laravel + React) + Flutter Tablet Apps (Operator & Supervisor) synced in real time.",
          es: "Ecosistema Global Accessories — SaaS Web Admin (Laravel + React) + Apps Flutter para Tablets (Operario y Supervisor) sincronizados en tiempo real.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables ───────────────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Four tailored production-ready products delivered end-to-end.", es: "Cuatro productos especializados puestos en producción de extremo a extremo." })}
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

  /* ── 2. Key Features Grid — Separated by Mobile & Backend ── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "ECOSYSTEM CAPABILITIES", es: "CAPACIDADES DEL ECOSISTEMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Architecture structured into highly interactive tablet/mobile interfaces and robust industrial backend processes.", es: "Arquitectura estructurada en interfaces táctiles/móviles altamente interactivas y robustos procesos backend industriales." })}
      </p>

      {/* 2a. Mobile Features Block */}
      <div style={{ marginTop: "36px" }}>
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
          <Smartphone size={16} strokeWidth={2.5} />
          {t({ en: "Mobile & Tablet Experience (Flutter)", es: "Experiencia Móvil y Tablet (Flutter)" })}
        </h4>
        <div className="mbe-features-grid">
          {mobileFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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

      {/* 2b. Backend Features Block */}
      <div style={{ marginTop: "48px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#34D399",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Server size={16} strokeWidth={2.5} />
          {t({ en: "Backend & Web SaaS Architecture (Laravel + React)", es: "Arquitectura Backend y SaaS Web (Laravel + React)" })}
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

  /* ── 3. Product Surface — Web + Mobile ────────────────── */
  const productSurface = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PRODUCT SURFACE", es: "SUPERFICIE DEL PRODUCTO" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "24px" }}>
        {t({ en: "Web OEE analytics and capacity planning built with Laravel + React + PrimeReact.", es: "Portal administrativo de análisis OEE y planificación de capacidad en Laravel + React + PrimeReact." })}
      </p>

      {/* Featured panel — large */}
      <motion.div
        className="mbe-panel-featured"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mbe-browser" style={{ border: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(13, 13, 17, 0.70)" }}>
          <div className="mbe-browser-bar" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(255, 255, 255, 0.02)" }}>
            <span className="mbe-browser-dot mbe-browser-dot--red" />
            <span className="mbe-browser-dot mbe-browser-dot--yellow" />
            <span className="mbe-browser-dot mbe-browser-dot--green" />
            <div className="mbe-browser-url-bar" style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
              <span className="mbe-browser-url-lock">🔒</span>
              <span className="mbe-browser-url-text">{webPanels[0].url}</span>
            </div>
          </div>
          <div className="mbe-browser-screen mbe-browser-screen--featured">
            <Image
              src={webPanels[0].src}
              alt={t(webPanels[0].label)}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
            <div className="mbe-browser-screen-overlay" aria-hidden />
          </div>
        </div>
        <span className="mbe-panel-label" style={{ color: "#F8FAFC" }}>{t(webPanels[0].label)}</span>
      </motion.div>

      {/* Secondary panels grid */}
      <div className="mbe-panels-grid">
        {webPanels.slice(1).map((panel, i) => (
          <motion.div
            key={i}
            className="mbe-panel-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: i * 0.08 }}
          >
            <div className="mbe-browser mbe-browser--sm" style={{ border: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(13, 13, 17, 0.70)" }}>
              <div className="mbe-browser-bar" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(255, 255, 255, 0.02)" }}>
                <span className="mbe-browser-dot mbe-browser-dot--red" />
                <span className="mbe-browser-dot mbe-browser-dot--yellow" />
                <span className="mbe-browser-dot mbe-browser-dot--green" />
                <span className="mbe-browser-url-text mbe-browser-url-text--sm">{panel.url}</span>
              </div>
              <div className="mbe-browser-screen">
                <Image
                  src={panel.src}
                  alt={t(panel.label)}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="mbe-browser-screen-overlay" aria-hidden />
              </div>
            </div>
            <span className="mbe-panel-label">{t(panel.label)}</span>
          </motion.div>
        ))}
      </div>

      {/* Mobile strip */}
      <div style={{ marginTop: "32px" }}>
        <p className="mbe-strip-label" style={{ color: "#F8FAFC" }}>
          {t({ en: "Flutter Multi-Role Apps — Shared Tablets & Mobile Gerencial", es: "Apps Flutter Multi-Rol — Tablets Compartidas y Móvil Gerencial" })}
        </p>
        <div className="mbe-mobile-strip">
          {mobilePanels.map((m, i) => (
            <motion.div
              key={i}
              className="mbe-mobile-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.06 }}
            >
              <div className="mbe-mobile-frame" style={{ border: "3px solid #1E293B", background: "#0F172A" }}>
                <div className="mbe-mobile-notch" aria-hidden />
                <div className="mbe-mobile-screen">
                  <Image
                    src={m.src}
                    alt={t(m.label)}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="160px"
                  />
                </div>
              </div>
              <span className="mbe-mobile-caption" style={{ color: "#94A3B8" }}>{t(m.label)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ── 4. User Journey Pipeline ─────────────────────────── */
  const journey = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PRODUCTION WORKFLOW", es: "FLUJO DE TRABAJO EN PLANTA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "From operator login on the factory floor to real-time OEE insights — 5 interconnected stages.", es: "Desde el ingreso del operario en planta hasta las analíticas OEE ejecutivas — 5 etapas interconectadas." })}
      </p>

      <div className="mbe-journey">
        {journeySteps.map(({ num, icon: Icon, color, key, title, desc }, i) => (
          <div key={key} className="mbe-journey-step-wrap">
            <motion.div
              className="mbe-journey-step"
              style={{ "--j-color": color }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.09 }}
            >
              <div className="mbe-journey-num" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>{num}</div>
              <div className="mbe-journey-icon-wrap" style={{ background: "rgba(255,255,255,0.02)", color: color }}>
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <h4 className="mbe-journey-title" style={{ color: "#F8FAFC" }}>{t(title)}</h4>
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

  /* ── 5. Tech Stack — Grouped ──────────────────────────── */
  const stackSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "TECH STACK", es: "STACK TECNOLÓGICO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Technologies chosen for microsecond synchronization, high field-durability and structural scale.", es: "Tecnologías elegidas para sincronización en microsegundos, durabilidad en terreno y escalabilidad." })}
      </p>

      <div className="mbe-stack-groups">
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
              <div className="mbe-stack-group-icon" style={{ color }}>
                <GroupIcon size={14} strokeWidth={2} aria-hidden />
              </div>
              <span className="mbe-stack-group-name" style={{ color: "#F8FAFC" }}>{t(group)}</span>
            </div>

            <div className="mbe-stack-techs">
              {techs.map(({ name, role }, ti) => (
                <div key={ti} className="mbe-stack-tech-card">
                  <div className="mbe-stack-tech-letter" style={{ background: "rgba(255,255,255,0.03)", color }}>
                    {name.charAt(0)}
                  </div>
                  <div className="mbe-stack-tech-info">
                    <span className="mbe-stack-tech-name" style={{ color: "#F8FAFC" }}>{name}</span>
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

  /* ── 6. Architecture — Layered Diagram ────────────────── */
  const architecture = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "SYSTEM ARCHITECTURE", es: "ARQUITECTURA DEL SISTEMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Three interconnected layers: multi-role client terminals, REST API + WebSockets server, and isolated infrastructure.", es: "Tres capas interconectadas: terminales multi-rol de cliente, servidor REST API + WebSockets e infraestructura aislada." })}
      </p>

      <div className="mbe-arch">
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
                <div className="mbe-arch-layer-icon" style={{ color }}>
                  <LayerIcon size={14} strokeWidth={2} />
                </div>
                <span style={{ color: "#F8FAFC" }}>{t(layer)}</span>
              </div>

              <div className="mbe-arch-nodes">
                {nodes[0].name ? (
                  nodes.map((n, ni) => (
                    <div key={ni} className="mbe-arch-badge" style={{ "--b-color": n.color }}>
                      <span className="mbe-arch-badge-name" style={{ color: "#F8FAFC" }}>{n.name}</span>
                      <span className="mbe-arch-badge-sub" style={{ color: "#94A3B8" }}>{t(n.sub)}</span>
                    </div>
                  ))
                ) : (
                  nodes.map((n, ni) => {
                    const NodeIcon = n.icon;
                    return (
                      <div key={ni} className={`mbe-arch-node${n.accent ? " mbe-arch-node--accent" : ""}`}>
                        <div className="mbe-arch-node-icon-wrap" style={{ color: n.accent ? "#10B981" : "#E2E8F0" }}>
                          <NodeIcon size={18} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="mbe-arch-node-name" style={{ color: "#F8FAFC" }}>{t(n.label)}</p>
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

  return (
    <ProjectDetailShell project={project} showStats={false}>
      {heroShowcase}
      {deliverablesSection}
      {featuresSection}
      {productSurface}
      {journey}
      {stackSection}
      {architecture}
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
