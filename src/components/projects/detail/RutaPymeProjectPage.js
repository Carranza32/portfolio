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
  Compass
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Entrepreneur Experience vs Gov Backoffice ─── */
const entrepreneurFeatures = [
  {
    icon: ClipboardList,
    color: "#6366F1",
    glow: "rgba(99,102,241,0.18)",
    key: "smart-questionnaire",
    title: { en: "Smart Diagnostics Questionnaire", es: "Motor de Diagnóstico Inteligente" },
    desc: {
      en: "Dynamic questionnaire engine built on Livewire + Alpine.js. Custom branching trees assess the user's economic activities, employee count, and zoning parameters to determine the exact requirements.",
      es: "Motor dinámico desarrollado en Livewire + Alpine.js. El árbol de decisión evalúa de forma reactiva la actividad económica, personal y zonificación para clasificar y derivar trámites sin recargar la página.",
    },
  },
  {
    icon: CheckSquare,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "interactive-checklists",
    title: { en: "Dynamic Legal Checklists", es: "Checklists de Formalización Dinámicos" },
    desc: {
      en: "Generates step-by-step personalized roads to formalization. Entrepreneurs track completed steps, download pre-filled templates, and receive automated deadlines for municipal permits.",
      es: "Generación interactiva de rutas de formalización personalizadas. El usuario gestiona su avance, descarga documentos pre-llenados y visualiza los plazos legales para sus patentes.",
    },
  },
  {
    icon: ShieldCheck,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "identity-sso",
    title: { en: "Chilean ClaveÚnica Identity Integration", es: "Autenticación Oficial ClaveÚnica" },
    desc: {
      en: "Seamless integration with the Chilean Government's official single sign-on API. Guarantees encrypted data validation, verified national identity numbers (RUT), and legally valid user sessions.",
      es: "Integración directa con la API oficial de ClaveÚnica del Estado. Garantiza la validación encriptada del RUT y la identidad del emprendedor para la validez de los trámites ingresados.",
    },
  },
];

const backofficeFeatures = [
  {
    icon: LayoutDashboard,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "gov-analytics",
    title: { en: "Government Metrics Backoffice", es: "Backoffice de Métricas y OEE Público" },
    desc: {
      en: "Centralized analytical command center for the Santiago Government. Public officers track aggregate registrations, analyze formalization bottleneck steps, and generate geographical reports.",
      es: "Centro de analítica para el Gobierno de Santiago. Permite a los gestores públicos monitorear el volumen de registros, detectar pasos con mayor deserción y generar reportes demográficos.",
    },
  },
  {
    icon: FileText,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "dynamic-cms",
    title: { en: "No-Code Legal Content CMS", es: "CMS Autogestionable de Contenidos" },
    desc: {
      en: "Integrated custom CMS enabling government staff to update laws, municipal taxation parameters, zoning policies, and legal advice articles dynamically without engineering intervention.",
      es: "Módulo CMS a medida que permite al personal público actualizar marcos normativos, aranceles de patentes, políticas de zonificación y artículos de ayuda sin tocar una sola línea de código.",
    },
  },
  {
    icon: Settings,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "audit-logs",
    title: { en: "Granular Audit & Security System", es: "Sistema de Auditoría y Seguridad Extrema" },
    desc: {
      en: "Robust backend system tracking administrator activities, content modifications, and registration data changes. Guarantees regulatory transparency and data integrity standards.",
      es: "Registros minuciosos de auditoría de todas las acciones administrativas, cambios en contenidos y flujos de usuarios. Asegura altos estándares de transparencia y seguridad estatal.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Users,
    color: "#6366F1",
    key: "sso-access",
    title: { en: "State Single Sign-On", es: "Acceso ClaveÚnica" },
    desc: { en: "Entrepreneur securely authenticates via Chile's official ClaveÚnica identity gateway.", es: "El emprendedor inicia sesión de forma segura y validada utilizando la ClaveÚnica estatal." },
  },
  {
    num: "02",
    icon: ClipboardList,
    color: "#F59E0B",
    key: "smart-survey",
    title: { en: "Dynamic Diagnosis", es: "Diagnóstico Inteligente" },
    desc: { en: "Wizard evaluates economic activities, tax regimes, and zoning to classify the SME.", es: "El asistente evalúa la actividad, régimen tributario y zonificación para clasificar la Pyme." },
  },
  {
    num: "03",
    icon: CheckSquare,
    color: "#10B981",
    key: "checklist-gen",
    title: { en: "Interactive Checklist", es: "Checklist Personalizado" },
    desc: { en: "System compiles a tailored step-by-step roadmap of required municipal permits.", es: "El sistema genera una ruta personalizada paso a paso con los requisitos y patentes requeridas." },
  },
  {
    num: "04",
    icon: FileText,
    color: "#0EA5E9",
    key: "cms-help",
    title: { en: "Legal Resources", es: "Recursos y Guías" },
    desc: { en: "Entrepreneur accesses official template forms and CMS guides to complete paperwork.", es: "El usuario accede a las guías dinámicas del CMS y descarga formatos de trámites pre-llenados." },
  },
  {
    num: "05",
    icon: LayoutDashboard,
    color: "#818CF8",
    key: "gov-tracking",
    title: { en: "Government Monitor", es: "Seguimiento Estatal" },
    desc: { en: "Santiago Government administrators analyze progress rates and geographical impact.", es: "Los administradores públicos analizan la tasa de formalización y el impacto geográfico." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Reactive Web Frontend", es: "Ecosistema Frontend Reactivo" },
    icon: Monitor,
    color: "#6366F1",
    glow: "rgba(99,102,241,0.15)",
    techs: [
      { name: "Laravel Livewire", role: { en: "Server-driven reactive DOM updates without heavy JS", es: "Actualización reactiva de vistas desde el servidor sin sobrecarga JS" } },
      { name: "Alpine.js", role: { en: "Lightweight clientside micro-interactions and modals", es: "Manejo liviano de micro-interacciones y modales del lado del cliente" } },
      { name: "Tailwind CSS", role: { en: "Responsive, clean government-branded visual layout", es: "Maquetación moderna y responsiva bajo la identidad visual de Gobierno" } },
    ],
  },
  {
    group: { en: "Core Backend & Data", es: "Arquitectura Backend y Datos" },
    icon: Server,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Laravel MVC", role: { en: "Secure routing, legal CMS models, and role middleware", es: "Enrutamiento seguro, modelos de datos del CMS y middleware de roles" } },
      { name: "MySQL DB", role: { en: "Relational database storing checklist records and logs", es: "Esquema relacional para checklists de usuarios y logs de auditoría" } },
      { name: "Apache Web Server", role: { en: "Secure hosting environment with strict SSL configurations", es: "Alojamiento gubernamental altamente seguro con cifrado estricto" } },
    ],
  },
  {
    group: { en: "Integrations & Identity", icon: Plug, color: "#0EA5E9" },
    icon: Plug,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.15)",
    techs: [
      { name: "ClaveÚnica SSO", role: { en: "State authenticated single sign-on API integration", es: "Integración segura de inicio de sesión único con el Estado chileno" } },
      { name: "PDF Dompdf", role: { en: "Automated custom formalization guides generation", es: "Creación automática de documentos de formalización descargables" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "User Experience (Livewire)", es: "Capa Usuario (Livewire)" },
    icon: Layers,
    color: "#6366F1",
    nodes: [
      { icon: ClipboardList, label: { en: "Smart Survey Engine", es: "Cuestionario de Diagnóstico" }, sub: { en: "Reactive wizard · Alpine.js overlays", es: "Asistente interactivo · Soporte Alpine.js" }, accent: true },
      { icon: CheckSquare, label: { en: "Interactive Checklist", es: "Checklist de Trámites" }, sub: { en: "Progress track · Documents downloader", es: "Seguimiento de avance · Descarga de PDFs" }, accent: false },
    ],
  },
  {
    layer: { en: "Core Controllers & CMS", es: "Controladores Core y CMS" },
    icon: Server,
    color: "#10B981",
    nodes: [
      { icon: LayoutDashboard, label: { en: "Laravel MVC Backoffice", es: "Laravel MVC Backend" }, sub: { en: "Decision-tree router · Government CMS", es: "Enrutador del árbol de decisiones · CMS Público" }, accent: false },
      { icon: ShieldCheck, label: { en: "SSO Identity Middleware", es: "Middleware de Identidad SSO" }, sub: { en: "ClaveÚnica RUT Decryption gateway", es: "Descifrado y validación de tokens de ClaveÚnica" }, accent: true },
    ],
  },
  {
    layer: { en: "Infrastructure & Integrations", es: "Capa de Datos e Integración" },
    icon: Link2,
    color: "#0EA5E9",
    nodes: [
      { name: "ClaveÚnica Auth", color: "#6366F1", sub: { en: "Chile State identity Gateway", es: "Autenticación ClaveÚnica Chile" } },
      { name: "MySQL Server", color: "#38BDF8", sub: { en: "SME lists · Checklists · Audit", es: "Tablas de Pymes · Checklists · Auditoría" } },
      { name: "Dompdf Engine", color: "#10B981", sub: { en: "Server-side PDF generation", es: "Generador de PDFs en servidor" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Web Frontend Portal", es: "Portal Web del Emprendedor" },
    platformColor: "#6366F1",
    icon: Users,
    title: { en: "Smart Formalization Cockpit", es: "Portal Interactivo de Formalización" },
    desc: {
      en: "Public-facing portal enabling Chilean entrepreneurs to diagnose, structure, and legally register their business setups using interactive roadmaps.",
      es: "Portal ciudadano que permite a los emprendedores chilenos evaluar, estructurar y registrar sus negocios mediante guías de ruta totalmente interactivas.",
    },
    bullets: [
      { en: "Reactive economic activity classification wizard", es: "Asistente dinámico para clasificación de actividades" },
      { en: "Visual progress tracking for legal licensing steps", es: "Registro del avance visual para hitos legales de patentes" },
      { en: "ClaveÚnica single sign-on secure authentication", es: "Inicio de sesión único validado vía ClaveÚnica" },
      { en: "Pre-filled official municipal document downloads", es: "Descarga de formularios y documentos oficiales pre-llenados" },
    ],
  },
  {
    platform: { en: "Content CMS Panel", es: "Panel CMS de Contenidos" },
    platformColor: "#F59E0B",
    icon: FileText,
    title: { en: "No-Code Law & Guideline Editor", es: "CMS Autogestionable de Contenidos" },
    desc: {
      en: "Tailored Content Management System that empowers municipal operators to keep legal instructions, zoning procedures, and fee tables updated without code.",
      es: "Administrador de contenidos a medida que capacita a personal municipal para actualizar normativas, requisitos y aranceles tributarios sin código.",
    },
    bullets: [
      { en: "Drag-and-drop structural help block builder", es: "Constructor de bloques de ayuda visuales e interactivos" },
      { en: "Configurable municipal tax and fee thresholds", es: "Límites y tasas de aranceles tributarios configurables" },
      { en: "Self-managed educational blog & help articles", es: "Publicación de blogs educativos y guías de ayuda al instante" },
      { en: "Instant publishing without engineer redeployment", es: "Publicación inmediata sin requerir soporte de ingenieros" },
    ],
  },
  {
    platform: { en: "Government Command Center", es: "Consola de Gestión Pública" },
    platformColor: "#10B981",
    icon: LayoutDashboard,
    title: { en: "SME Metrics & Analytics Dashboard", es: "Dashboard de Métricas y Analítica" },
    desc: {
      en: "Super-administrative console giving the Santiago Government real-time visibility over the platform's social impact, active registrations, and demographic growth.",
      es: "Consola de administración pública que otorga al Gobierno de Santiago control en vivo sobre el impacto social, registros y tasas de avance.",
    },
    bullets: [
      { en: "Live aggregate graphs of registered SMEs & stages", es: "Gráficos consolidados de Pymes registradas y estados" },
      { en: "Zoning heatmaps pinpointing business locations", es: "Mapas de distribución geográfica y actividades comerciales" },
      { en: "Workflow management pipeline for document auditors", es: "Bandeja de revisión de documentos oficiales para analistas" },
      { en: "Advanced filtering for custom Excel/PDF exports", es: "Filtros complejos y exportaciones analíticas a Excel/PDF" },
    ],
  },
  {
    platform: { en: "Cloud Web Services", es: "Servicios e API Relacional" },
    platformColor: "#0EA5E9",
    icon: Server,
    title: { en: "Relational Engine & Integrations Core", es: "Núcleo de Integración y Base de Datos" },
    desc: {
      en: "Secure cloud backend utilizing strict government standards, implementing identity decryptors and storing immutable audit logs.",
      es: "Backend en la nube estructurado con estándares estatales estrictos, enrutador de decisiones y almacenamiento inmutable de auditoría.",
    },
    bullets: [
      { en: "Highly-normalized MySQL relational DB structures", es: "Esquemas MySQL altamente normalizados para seguridad" },
      { en: "ClaveÚnica SSO token decryption & routing gateway", es: "Descifrado del token oficial de ClaveÚnica y enrutamiento" },
      { en: "Immutable audit log tracking admin modifications", es: "Bitácora inmutable de modificaciones para transparencia" },
      { en: "Server-side dynamic PDF compilation compiler", es: "Generador de PDF en servidor para guías oficiales" },
    ],
  },
];

/* ─── Web Panels (Three actual screenshots) ───────────────── */
const webPanels = [
  {
    src: "/img/ruta_pyme/ruta_pyme_customer_home.png",
    url: "rutapyme.gobiernosantiago.cl/home",
    label: {
      en: "Entrepreneur Panel — Central portal displaying active user businesses and their current formalization checklist progress.",
      es: "Portal del Emprendedor — Panel principal que lista las empresas del usuario y el porcentaje de avance de su formalización."
    },
    featured: true,
  },
  {
    src: "/img/ruta_pyme/ruta_pyme_checklist.png",
    url: "rutapyme.gobiernosantiago.cl/checklist",
    label: {
      en: "Interactive Checklist — Tailored step-by-step licensing guide detailing requirements, document templates, and completed tasks.",
      es: "Checklist de Trámites — Guía interactiva paso a paso con los requisitos, documentos de descarga y tareas completadas."
    },
    featured: false,
  },
  {
    src: "/img/ruta_pyme/ruta_pyme_dashboard.png",
    url: "rutapyme.gobiernosantiago.cl/admin/dashboard",
    label: {
      en: "Government Control Panel — Administrative backoffice featuring aggregate demographic analytics, SME volume, and progress ratios.",
      es: "Backoffice de Gestión Pública — Consola estatal con analíticas agregadas, volumen de registros y tasas de avance del programa."
    },
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function RutaPymeProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Immersive Government Hero ────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#10B981" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(16, 185, 129, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(99, 102, 241, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#10B981", border: "1px solid rgba(16, 185, 129, 0.25)", background: "rgba(16, 185, 129, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#10B981" }} />
            {t({ en: "Government SaaS & Livewire Platform", es: "Plataforma SaaS Gubernamental en Livewire" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Digitizing business formalization for Santiago's entrepreneurs",
              es: "Digitalizando la formalización de Pymes para el Gobierno de Santiago",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A robust digital platform designed and engineered for the Santiago Government (Gobierno de Santiago, Chile). Empowers local entrepreneurs to formalize their business setups 100% online through interactive smart diagnostics, custom legal checklists, and document downloads. Integrated with official ClaveÚnica SSO and equipped with a full administrative backoffice for demographic and OEE tracking.",
              es: "Plataforma digital interactiva desarrollada para el Gobierno de Santiago de Chile. Permite a los emprendedores locales diagnosticar, estructurar y formalizar sus empresas 100% en línea mediante asistentes inteligentes, checklists de trámites dinámicos y descargas documentales. Integrada con la ClaveÚnica del Estado y equipada con un backoffice de control estatal.",
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

          {/* Large Laptop Frame showing customer home screen */}
          <div className="mbe-laptop-wrap" style={{ maxWidth: "560px" }}>
            <div className="mbe-laptop-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-laptop-camera" aria-hidden />
              <div className="mbe-laptop-screen">
                <Image
                  src="/img/ruta_pyme/ruta_pyme_customer_home.png"
                  alt={t({ en: "SME Portal Dashboard", es: "Dashboard Portal Pyme" })}
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
        </motion.div>
      </div>

      <p className="mbe-hero-caption">
        {t({
          en: "Ruta de la Pyme — Official Citizen Portal developed under Santiago Government guidelines, built using Laravel MVC + Livewire + Alpine.js.",
          es: "Ruta de la Pyme — Portal ciudadano oficial bajo la identidad corporativa del Gobierno de Santiago, desarrollado en Laravel + Livewire + Alpine.js.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables Section ───────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES DEL PROYECTO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Four specialized production products delivered to digitize municipal paperwork.", es: "Cuatro módulos especializados puestos en producción para modernizar la gestión de trámites." })}
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

  /* ── 2. Capabilities — Segmented by User/Backoffice ────── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PLATFORM CAPABILITIES", es: "CAPACIDADES DE LA PLATAFORMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Engineered into reactive citizen-facing wizards and fully monitored government analytics.", es: "Arquitectura dividida en asistentes ciudadanos reactivos de alta conversión y robustos paneles de analítica estatal." })}
      </p>

      {/* 2a. Entrepreneur Experience Block */}
      <div style={{ marginTop: "36px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#6366F1",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Users size={16} strokeWidth={2.5} />
          {t({ en: "Entrepreneur & Citizen Experience (Frontend Livewire)", es: "Experiencia del Emprendedor (Frontend Livewire + Alpine)" })}
        </h4>
        <div className="mbe-features-grid">
          {entrepreneurFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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

      {/* 2b. Government Backoffice Block */}
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
          {t({ en: "Government Command & Data Services (Backend Laravel)", es: "Gestión Pública y Servicios Cloud (Backend Laravel)" })}
        </h4>
        <div className="mbe-features-grid">
          {backofficeFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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
      <SectionLabel>{t({ en: "FORMALIZATION USER JOURNEY", es: "EL VIAJE DIGITAL DE FORMALIZACIÓN" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({
          en: "How entrepreneurs go from digital entry to structured legal formalization under Santiago's framework.",
          es: "Cómo un emprendedor pasa desde el acceso único digital hasta la obtención de su ruta legalizada en Santiago."
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
        {t({ en: "Secure government topology integrating citizen authentication with dynamic MVC components.", es: "Topología gubernamental segura que integra autenticación ciudadana con componentes MVC dinámicos." })}
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
        {t({ en: "Production toolset selected for light client execution and high data reliability.", es: "Herramientas de producción elegidas para ejecución liviana en clientes e integridad relacional rígida." })}
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

  /* ── 6. Live Interface Showcase (The 3 actual images) ───── */
  const gallerySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PRODUCT SURFACE & WEB PANELS", es: "SUPERFICIE DEL PRODUCTO Y PANELES WEB" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "28px" }}>
        {t({ en: "Browse real portal screens built for santiago government and chilean citizens.", es: "Explora capturas de pantalla reales del portal construidas para el Gobierno de Santiago y ciudadanos." })}
      </p>

      {/* Featured large browser frame */}
      <motion.div
        className="mbe-panel-featured"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mbe-browser" style={{ borderColor: "rgba(16, 185, 129, 0.25)", boxShadow: "0 28px 70px rgba(0,0,0,0.85), 0 0 30px rgba(16,185,129,0.1)" }}>
          <div className="mbe-browser-bar" style={{ background: "rgba(20, 20, 25, 0.9)" }}>
            <span className="mbe-browser-dot mbe-browser-dot--red" />
            <span className="mbe-browser-dot mbe-browser-dot--yellow" />
            <span className="mbe-browser-dot mbe-browser-dot--green" />
            <div className="mbe-browser-url-bar" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
              <span className="mbe-browser-url-lock" style={{ color: "#10B981" }}>🔒</span>
              <span className="mbe-browser-url-text" style={{ color: "#E2E8F0" }}>{webPanels[0].url}</span>
            </div>
          </div>
          <div className="mbe-browser-screen mbe-browser-screen--featured">
            <Image
              src={webPanels[0].src}
              alt={t(webPanels[0].label)}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
            <div className="mbe-browser-screen-overlay" aria-hidden />
          </div>
        </div>
        <span className="mbe-panel-label" style={{ color: "#E2E8F0", display: "flex", gap: "8px", justifyContent: "center" }}>
          <span style={{ color: "#10B981", fontWeight: "bold" }}>●</span> {t(webPanels[0].label)}
        </span>
      </motion.div>

      {/* Secondary panels (side by side) */}
      <div className="mbe-panels-grid" style={{ marginTop: "32px" }}>
        {webPanels.slice(1).map((panel, i) => (
          <motion.div
            key={i}
            className="mbe-panel-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: i * 0.08 }}
          >
            <div className="mbe-browser mbe-browser--sm" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
              <div className="mbe-browser-bar" style={{ background: "rgba(20, 20, 25, 0.9)" }}>
                <span className="mbe-browser-dot mbe-browser-dot--red" />
                <span className="mbe-browser-dot mbe-browser-dot--yellow" />
                <span className="mbe-browser-dot mbe-browser-dot--green" />
                <span className="mbe-browser-url-text mbe-browser-url-text--sm">{panel.url}</span>
              </div>
              <div className="mbe-browser-screen" style={{ height: "230px" }}>
                <Image
                  src={panel.src}
                  alt={t(panel.label)}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="mbe-browser-screen-overlay" aria-hidden />
              </div>
            </div>
            <span className="mbe-panel-label" style={{ fontSize: "11px", color: "#94A3B8" }}>{t(panel.label)}</span>
          </motion.div>
        ))}
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
