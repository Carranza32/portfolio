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
  Activity,
  Camera
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Landowner App vs Evaluator Backoffice ───── */
const clientFeatures = [
  {
    icon: Compass,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "gps-mapping",
    title: { en: "Native GPS Coordinates Mapping", es: "Geolocalización GPS Nativa" },
    desc: {
      en: "Direct integration with native GPS hardware sensors. Extracted verified latitude and longitude coordinates of landowners' parcels to build highly precise georeferenced maps.",
      es: "Integración directa con sensores GPS nativos. Captura coordenadas de latitud y longitud con precisión para georreferenciar parcelas de forma transparente.",
    },
  },
  {
    icon: Camera,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "photo-onboarding",
    title: { en: "High-Res Land Photo Uploads", es: "Carga Fotográfica del Terreno" },
    desc: {
      en: "Direct integration with phone cameras. Built an automated clientside compression flow enabling applicants to upload heavy land images without data bottlenecks.",
      es: "Uso integrado de la cámara nativa del celular. Cuenta con un compresor automático para que los usuarios suban fotos de sus terrenos sin consumir todo su plan de datos.",
    },
  },
  {
    icon: ClipboardList,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "grant-wizard",
    title: { en: "Step-by-Step Grant Wizard", es: "Asistente de Postulación Paso a Paso" },
    desc: {
      en: "Guided green grant registration pipeline. Walks landowners through outlining plantation dimensions, describing soil quality, and attaching proof-of-ownership files in a clean layout.",
      es: "Flujo guiado interactivo para postular a fondos forestales. El usuario ingresa la superficie a plantar, calidad del suelo y títulos de propiedad fácilmente.",
    },
  },
];

const backendFeatures = [
  {
    icon: LayoutDashboard,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "committee-admin",
    title: { en: "Auditors Evaluation Backoffice", es: "Backoffice Evaluador de Fondos" },
    desc: {
      en: "Centralized Laravel administration panel for forestry engineers. Restructures parcel applications, displays georeferenced maps, and coordinates the evaluation workflow.",
      es: "Consola de administración Laravel para ingenieros evaluadores. Agrupa expedientes, renderiza mapas de parcelas y coordina el flujo de revisiones.",
    },
  },
  {
    icon: FileText,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "disbursements-scheduler",
    title: { en: "Reforestation Funding Allocator", es: "Control de Desembolsos y Presupuesto" },
    desc: {
      en: "Administrative budget allocation planner. Evaluators configure grant thresholds, schedules fiscal disbursements stages, and tracks reforested hectares metrics in real-time.",
      es: "Planificador de presupuestos forestales. Controla los límites de financiamiento autorizados, programa cuotas de capital y mide hectáreas verdes recuperadas.",
    },
  },
  {
    icon: Settings,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "communication-logs",
    title: { en: "Audited Landowner Feedback Loop", es: "Bitácora de Observaciones y Mensajería" },
    desc: {
      en: "Integrated system for evaluating committees to send dynamic revision guidelines, notes, and approval status updates directly to applicants' mobile clients.",
      es: "Canal bidireccional que permite al comité evaluador remitir observaciones, pautas de corrección y estados de aprobación directo al celular del postulante.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Users,
    color: "#10B981",
    key: "land-details",
    title: { en: "Land Setup", es: "Registro del Terreno" },
    desc: { en: "Landowner registers land details, including parcel dimensions and soil segments.", es: "El propietario detalla el terreno, dimensiones de hectáreas y tipo de suelo en la app." },
  },
  {
    num: "02",
    icon: Compass,
    color: "#0EA5E9",
    key: "coordinate-map",
    title: { en: "GPS Geolocation", es: "Geolocalización GPS" },
    desc: { en: "Uses phone location APIs to map the exact coordinates and bounds of the forest zone.", es: "Usa la API de ubicación nativa para capturar las coordenadas exactas de la parcela." },
  },
  {
    num: "03",
    icon: Camera,
    color: "#F59E0B",
    key: "land-evidence",
    title: { en: "Photo Evidence", es: "Evidencia Fotográfica" },
    desc: { en: "Snaps native land photos to document the current environmental status of the fields.", es: "Toma capturas nativas para documentar la vegetación y estado físico del suelo." },
  },
  {
    num: "04",
    icon: Layers,
    color: "#EC4899",
    key: "committee-eval",
    title: { en: "Committee Audit", es: "Evaluación Ambiental" },
    desc: { en: "Environmental committee reviews soil metrics and photo logs on the Laravel backoffice.", es: "El comité ambiental evalúa las métricas del suelo y fotos en el backoffice de Laravel." },
  },
  {
    num: "05",
    icon: ShieldCheck,
    color: "#818CF8",
    key: "grant-disbursed",
    title: { en: "Grant Approved", es: "Fondo Autorizado" },
    desc: { en: "Funding is officially approved. Landowner tracks budget schedules directly in-app.", es: "Se autoriza el financiamiento y el usuario monitorea las cuotas de capital en su app." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Mobile Grant Client (Flutter)", es: "Aplicación Móvil en Obra (Flutter)" },
    icon: Smartphone,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Flutter Multi-Platform", role: { en: "Single-codebase native performance compilation for iOS and Android devices", es: "Compilación nativa de alto rendimiento desde código único para iOS y Android" } },
      { name: "Riverpod State Core", role: { en: "Clean state management flow binding parcel applications steps", es: "Gestión limpia de estados para la consistencia local de datos de postulación" } },
      { name: "GPS Location APIs", role: { en: "Verifies latitude and longitude parameters directly from hardware sensors", es: "Mapeo exacto de linderos mediante sensores de geolocalización del celular" } },
      { name: "Secure Storage Key", role: { en: "Encrypted clientside storage of patient credentials and clinical tokens", es: "Cifrado seguro en el teléfono para credenciales y tokens del postulante" } },
    ],
  },
  {
    group: { en: "Central Server & Relational Core", es: "Arquitectura Backend e Infraestructura" },
    icon: Server,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.15)",
    techs: [
      { name: "Laravel MVC Core", role: { en: "Secure RESTful endpoints, role middleware, and evaluations CRM", es: "Servicios REST seguros, middleware de roles y CRM evaluador de fondos" } },
      { name: "MySQL Relational DB", role: { en: "Highly secure relational databases for parcel details, coordinates, and reviews", es: "Esquema relacional para parcelas, coordenadas, fotos y postulantes" } },
      { name: "Cloud Object Storage", role: { en: "Highly available folders handling land photos uploads with compression libs", es: "Resguardo en la nube para fotos de terrenos con compresión de peso automatizada" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Presentation (Flutter & Web)", es: "Capa Presentación (Flutter y Web)" },
    icon: Layers,
    color: "#10B981",
    nodes: [
      { icon: Smartphone, label: { en: "Landowner App (iOS/And)", es: "App Propietario (iOS/And)" }, sub: { en: "Grant applications wizard · Camera & GPS mapped", es: "Postulación a fondos · Captura de fotos y coordenadas" }, accent: true },
      { icon: Monitor, label: { en: "Auditors Evaluation Web", es: "Portal Web Evaluador" }, sub: { en: "Laravel Blade · Real-time metrics panels", es: "Bandeja de revisión de ingenieros · Hectáreas" }, accent: false },
    ],
  },
  {
    layer: { en: "Core Service Controllers", es: "Capa Lógica y Servicios de Control" },
    icon: Server,
    color: "#0EA5E9",
    nodes: [
      { icon: Activity, label: { en: "REST API Endpoint Gateway", es: "APIs REST del Servidor" }, sub: { en: "Parcel coordinates validator · Identity handler", es: "Validador de coordenadas · Middleware de seguridad" }, accent: false },
      { icon: Zap, label: { en: "Committee Review Logic", es: "Controlador Evaluador" }, sub: { en: "Grant allocation logs · Push updates triggers", es: "Control de desembolsos · Observaciones de comités" }, accent: true },
    ],
  },
  {
    layer: { en: "Database & Storage Layer", es: "Capa de Datos e Infraestructura" },
    icon: Link2,
    color: "#F59E0B",
    nodes: [
      { name: "MySQL ReforestDB", color: "#38BDF8", sub: { en: "Parcels data · Coordinate records · Review trails", es: "Datos de parcelas · Coordenadas · Auditoría" } },
      { name: "Secure Cloud Storage", color: "#10B981", sub: { en: "Immutable land photos · Legal titles", es: "Fotos de terrenos · Títulos de propiedad" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Flutter iOS / Android", es: "App Móvil de Terreno" },
    platformColor: "#10B981",
    icon: Smartphone,
    title: { en: "Landowner Mobile Application", es: "Portal Móvil del Postulante" },
    desc: {
      en: "Citizen-facing mobile app allowing landowners to register parcel coordinates using GPS sensors, capture land imagery and track green grant progress.",
      es: "Aplicación móvil para propietarios forestales. Facilita el ingreso de coordenadas GPS nativas, fotos de terrenos y consulta de estados del fondo.",
    },
    bullets: [
      { en: "Step-by-step green grant application guided flows", es: "Postulación interactiva a fondos verdes paso a paso" },
      { en: "Native GPS sensor parcel bounding coordinates logging", es: "Captura de linderos mediante geolocalización GPS nativa" },
      { en: "High-resolution native camera photo evidence uploading", es: "Carga optimizada de fotos del suelo con compresión" },
      { en: "Offline resilience for remote and forested building zones", es: "Caché de datos y resiliencia offline en terrenos sin señal" },
    ],
  },
  {
    platform: { en: "Laravel Backoffice", es: "Administrador de Fondos" },
    platformColor: "#F59E0B",
    icon: LayoutDashboard,
    title: { en: "Forestry Evaluation Backoffice", es: "CMS y CRM Forestal de Auditoría" },
    desc: {
      en: "Centralized Laravel administration platform enabling forestry engineers to review land coordinates, leave feedback, and audit budgets.",
      es: "Consola de administración pública para ingenieros forestales. Permite auditar expedientes, inspeccionar linderos y coordinar firmas.",
    },
    bullets: [
      { en: "Interactive geographical map showing parcel coordinates", es: "Mapa interactivo mostrando ubicación y límites de parcelas" },
      { en: "Grant allocation committee evaluation pipeline logs", es: "Bandeja de auditoría y flujo de aprobación de cuotas de capital" },
      { en: "Integrated landowner feedback & observations console", es: "Panel de mensajería y observaciones directas al celular" },
      { en: "Hectares reforested and funding demographic reports", es: "Reportes analíticos de hectáreas verdes recuperadas" },
    ],
  },
  {
    platform: { en: "Cloud Relational API", es: "Servicios Cloud y APIs REST" },
    platformColor: "#0EA5E9",
    icon: Server,
    title: { en: "Laravel MVC Database Integrations Core", es: "Núcleo Laravel e Integración Relacional" },
    desc: {
      en: "Secure RESTful endpoints synchronizing mobile requests, encrypting personal credentials, and saving coordinates data.",
      es: "Núcleo de integración seguro en la nube. Sincroniza datos, encripta identidades y administra almacenamiento de archivos.",
    },
    bullets: [
      { en: "Highly optimized MySQL relational database schemas", es: "Esquemas MySQL relacionales estructurados para parcelas" },
      { en: "Image compression API handling large file uploads", es: "API de compresión automática para cargas de fotos pesadas" },
      { en: "Role-based access controls protecting owner privacy", es: "Middleware de seguridad y control de acceso de comités" },
      { en: "Secure cloud S3 bucket folders management APIs", es: "API de administración de archivos en nube" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function HugeForestProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Immersive Pre-Mocked Environmental Hero ──────────── */
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
            {t({ en: "Environmental Funding & Flutter App", es: "Fondos de Reforestación y Aplicación Flutter" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Connecting landowners with green reforestation grants",
              es: "Conectando propietarios con fondos verdes de reforestación",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A premium environmental mobile application and backoffice designed for TWGroup Chile. Enables landowners to apply for reforestation green funding directly from their phones. Guides applicants through land coordinate mapping using native GPS sensors, taking direct land photos with client-side image compression, and tracking review cycles, synchronized with evaluation backoffice panels in Laravel.",
              es: "Aplicación móvil y backoffice medioambiental desarrollado para TWGroup Chile. Permite a propietarios de terrenos postular a fondos forestales en línea. Guía al usuario en la captura GPS nativa de linderos, toma de fotografías con compresión automática y consulta del avance, enlazado con un backoffice de evaluación Laravel.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(16, 185, 129, 0.22), transparent 80%)" }} aria-hidden />

          {/* Render the pre-mocked composition directly in a sleek glass container */}
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            aspectRatio: "16 / 10",
            borderRadius: "14px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 28px 70px rgba(0,0,0,0.85), 0 0 40px rgba(16, 185, 129, 0.15)",
            overflow: "hidden",
            background: "rgba(10, 10, 15, 0.4)",
            backdropFilter: "blur(8px)"
          }}>
            <Image
              src="/img/hugeforest/hugeforest.png"
              alt={t({ en: "Huge Forest Platform Mockup", es: "Mockup de Plataforma Huge Forest" })}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
          </div>
        </motion.div>
      </div>

      <p className="mbe-hero-caption">
        {t({
          en: "Huge Forest Platform — Pre-mocked client application (Flutter iOS & Android) and evaluation backend systems (Laravel + MySQL) synced in real-time.",
          es: "Plataforma Huge Forest — Aplicación móvil Flutter (iOS y Android) y consola backend de evaluación (Laravel) sincronizados en tiempo real.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables Section ───────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES DEL PROYECTO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Three specialized production products shipped end-to-end to digitize environmental funding.", es: "Tres módulos especializados puestos en producción para digitalizar el acceso a fondos verdes forestales." })}
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

  /* ── 2. Capabilities — Client vs Backend ────────────────── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PLATFORM CAPABILITIES", es: "CAPACIDADES DE LA PLATAFORMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Seamless landowner phone registrations combined with precise environmental committees backoffice.", es: "Mapeo georreferenciado ágil en celulares coordinado con rigurosas bitácoras evaluadoras en servidores." })}
      </p>

      {/* 2a. Client Experience Block */}
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
          {t({ en: "Landowner Mobile Application (Flutter iOS & Android)", es: "Aplicación Móvil de Terrenos (Flutter iOS y Android)" })}
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

      {/* 2b. Evaluator Backoffice Block */}
      <div style={{ marginTop: "48px" }}>
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
          <Server size={16} strokeWidth={2.5} />
          {t({ en: "Committee Evaluator & Data backend (Backend Laravel)", es: "Comités Evaluadores y Núcleo de Datos (Backend Laravel)" })}
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
      <SectionLabel>{t({ en: "GREEN GRANT APPLICATION JOURNEY", es: "EL VIAJE DIGITAL DE FONDOS FORESTALES" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({
          en: "How landowner requests trigger GPS sensor coordinates, photo uploads, committee evaluation, and grant approvals.",
          es: "Cómo la solicitud del propietario captura coordenadas GPS nativas, procesa fotos y coordina la aprobación del comité."
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
        {t({ en: "Topology mapping mobile hardware components, evaluation middleware, and media files cloud systems.", es: "Esquema técnico que conecta el hardware móvil nativo, enrutadores de evaluación y repositorios en la nube." })}
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
        {t({ en: "Production toolkit selected for robust phone integration and highly secure environmental backoffices.", es: "Herramientas de producción elegidas para una sólida integración móvil e integridad relacional rígida." })}
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

  /* ── 6. Live Interface Showcase (Direct composition render) ── */
  const gallerySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PLATFORM INTERFACE SHOWCASE", es: "GALERÍA DE LA PLATAFORMA" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "28px" }}>
        {t({ en: "Explore the verified system screens displaying dual client app and administrative panel layouts.", es: "Explora la captura real integrada que combina las vistas del celular y la consola administrativa." })}
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
        <motion.div
          className="mbe-panel-card"
          style={{ maxWidth: "520px", flex: "1 1 450px" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 28px 70px rgba(0,0,0,0.85), 0 0 40px rgba(16, 185, 129, 0.25)",
              overflow: "hidden",
              background: "rgba(10, 10, 15, 0.4)",
              backdropFilter: "blur(8px)"
            }}>
              <Image
                src="/img/hugeforest/hugeforest.png"
                alt={t({ en: "Huge Forest client and admin dashboard composition mockup", es: "Mockup unificado de app cliente y consola de administración" })}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
          <span className="mbe-panel-label" style={{ fontSize: "11px", color: "#94A3B8", marginTop: "16px", display: "block", textAlign: "center", lineHeight: "1.4" }}>
            {t({
              en: "Huge Forest Mockup — Unified view showing both the Flutter landowner app layouts and evaluating backoffice control panel.",
              es: "Mockup Huge Forest — Vista unificada que expone los flujos de postulación en la app Flutter y la consola administrativa."
            })}
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
