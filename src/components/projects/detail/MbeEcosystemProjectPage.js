"use client";

import {
  CreditCard,
  MapPin,
  Package,
  ScanLine,
  Warehouse,
  Smartphone,
  Monitor,
  LayoutDashboard,
  ArrowRight,
  BrainCircuit,
  Globe,
  ShieldCheck,
  Zap,
  Layers,
  Server,
  Link2,
  Plug,
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
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "ai-mobile",
    title: { en: "AI-Powered Mobile OCR Scanning", es: "Escaneo OCR Móvil con Inteligencia Artificial" },
    desc: {
      en: "Native high-performance mobile capture. Customers pre-alert packages instantly, using smart OCR to auto-extract invoice details and product specifications.",
      es: "Captura de cámara móvil optimizada con IA. Permite digitalizar y leer facturas al instante en la app, extrayendo automáticamente el desglose de productos y aranceles mediante OCR inteligente.",
    },
  },
  {
    icon: ShieldCheck,
    color: "#F472B6",
    glow: "rgba(244,114,182,0.18)",
    key: "biometrics-mobile",
    title: { en: "Hardware Biometrics & Secure Keychain", es: "Biometría por Hardware y Llavero Seguro" },
    desc: {
      en: "Secure enterprise validation integrating native Face ID, fingerprint scanning, and encrypted device storage utilizing secure hardware keychains for session credentials.",
      es: "Autenticación nativa ultra-segura mediante Face ID y huella digital en la app móvil, enlazada con almacenamiento local encriptado a nivel de hardware para proteger credenciales de sesión.",
    },
  },
  {
    icon: Zap,
    color: "#FB923C",
    glow: "rgba(251,146,60,0.18)",
    key: "push-mobile",
    title: { en: "Real-Time Push & Device Notifications", es: "Notificaciones Push y Alertas en Tiempo Real" },
    desc: {
      en: "Live synchronization of package statuses powered by custom WebSockets alongside push alert integrations directly to user devices using Firebase FCM.",
      es: "Sincronización instantánea de estados logísticos usando canales de WebSockets dedicados y alertas automatizadas al dispositivo móvil a través de Firebase FCM.",
    },
  },
];

const backendFeatures = [
  {
    icon: Layers,
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.18)",
    key: "tax-backend",
    title: { en: "Customs Tariff & Tax Calculation Engine", es: "Motor de Cálculo Arancelario (DAI + IVA)" },
    desc: {
      en: "Robust backend system calculating international import duties dynamically based on customs rate tables, automating PDF billing and digital receipts.",
      es: "Cálculo dinámico automatizado de aranceles de importación internacional y DAI + IVA, estructurado bajo tablas fiscales dinámicas y generación instantánea de comprobantes PDF.",
    },
  },
  {
    icon: CreditCard,
    color: "#34D399",
    glow: "rgba(52,211,153,0.18)",
    key: "pay-backend",
    title: { en: "CyberSource Payment & Token Orchestration", es: "Pasarela y Orquestación de Pagos CyberSource" },
    desc: {
      en: "Enterprise payment orchestration processing high-volume card transactions securely, alongside automated cash and bank transfer approval flows.",
      es: "Procesamiento blindado de transacciones monetarias mediante la API de CyberSource, sincronizado con flujos inteligentes de aprobación de transferencias bancarias.",
    },
  },
  {
    icon: Plug,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "dhl-backend",
    title: { en: "Third-Party Logistics & Smart Locker APIs", es: "Orquestación de APIs de Courier y Casilleros" },
    desc: {
      en: "Centralized server integrations connecting real-time DHL tracking logs and automated smart-locker dispatching through Boxful geolocated APIs.",
      es: "Integración a nivel de servidor que unifica el rastreo en vivo de DHL con el despacho geolocalizado automático en casilleros inteligentes de Boxful.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Package,
    color: "#818CF8",
    key: "prealert",
    title: { en: "Pre-alert & OCR", es: "Pre-alerta y OCR" },
    desc: { en: "Customer uploads invoice PDF. AI extracts customs data automatically.", es: "El cliente sube su factura. La IA extrae los datos aduanales automáticamente." },
  },
  {
    num: "02",
    icon: CreditCard,
    color: "#34D399",
    key: "pay",
    title: { en: "In-app Payment", es: "Pago en la App" },
    desc: { en: "Secure checkout via CyberSource: card, cash or bank transfer.", es: "Pago seguro vía CyberSource: tarjeta, efectivo o transferencia." },
  },
  {
    num: "03",
    icon: ScanLine,
    color: "#38BDF8",
    key: "wh",
    title: { en: "Warehouse Intake", es: "Recepción en Bodega" },
    desc: { en: "Operator scans barcode, assigns rack slot, prints labels.", es: "Operador escanea código, asigna rack e imprime etiquetas." },
  },
  {
    num: "04",
    icon: MapPin,
    color: "#FB923C",
    key: "track",
    title: { en: "Live Tracking", es: "Seguimiento en Vivo" },
    desc: { en: "Real-time status pushed via Laravel Reverb WebSockets + FCM.", es: "Estado en tiempo real vía Laravel Reverb WebSockets + FCM." },
  },
  {
    num: "05",
    icon: Warehouse,
    color: "#F472B6",
    key: "locker",
    title: { en: "Smart Locker Delivery", es: "Entrega en Casillero" },
    desc: { en: "Boxful geo-dispatches package to nearest locker. QR opens it.", es: "Boxful despacha al casillero más cercano. El QR lo abre." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Mobile", es: "Móvil" },
    icon: Smartphone,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.15)",
    techs: [
      { name: "Flutter", role: { en: "iOS & Android client app", es: "App cliente iOS y Android" } },
      { name: "Riverpod", role: { en: "State management & DI", es: "Gestión de estado e inyección" } },
      { name: "Clean Architecture", role: { en: "Scalable feature-driven structure", es: "Arquitectura limpia por features" } },
      { name: "Secure Storage", role: { en: "Encrypted credentials & sessions", es: "Sesiones y credenciales cifradas" } },
    ],
  },
  {
    group: { en: "Backend", es: "Backend" },
    icon: Server,
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.15)",
    techs: [
      { name: "Laravel", role: { en: "REST API & business logic", es: "API REST y lógica de negocio" } },
      { name: "Filament", role: { en: "Admin panel & RBAC", es: "Panel admin y control de roles" } },
      { name: "Laravel Reverb", role: { en: "Real-time WebSocket server", es: "Servidor WebSocket en tiempo real" } },
      { name: "WebSockets", role: { en: "Live push events to clients", es: "Eventos push en tiempo real" } },
    ],
  },
  {
    group: { en: "Integrations", es: "Integraciones" },
    icon: Plug,
    color: "#34D399",
    glow: "rgba(52,211,153,0.15)",
    techs: [
      { name: "CyberSource", role: { en: "Payment gateway", es: "Pasarela de pago" } },
      { name: "DHL API", role: { en: "Package tracking", es: "Rastreo de paquetes" } },
      { name: "Boxful API", role: { en: "Smart locker dispatch", es: "Despacho en casilleros" } },
      { name: "AI / OCR", role: { en: "Invoice data extraction", es: "Extracción de datos de facturas" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Layer", es: "Capa Cliente" },
    icon: Layers,
    color: "#818CF8",
    nodes: [
      { icon: Smartphone, label: { en: "Flutter App", es: "Flutter App" }, sub: { en: "iOS / Android · Clean Arch · Riverpod · Biometrics · FCM", es: "iOS / Android · Clean Arch · Riverpod · Biometría · FCM" }, accent: true },
    ],
  },
  {
    layer: { en: "Backend Layer", es: "Capa Backend" },
    icon: Server,
    color: "#38BDF8",
    nodes: [
      { icon: Monitor, label: { en: "Laravel REST API", es: "Laravel REST API" }, sub: { en: "Queue · Reverb · WebSockets", es: "Colas · Reverb · WebSockets" }, accent: false },
      { icon: LayoutDashboard, label: { en: "Filament Admin", es: "Filament Admin" }, sub: { en: "RBAC · Reports · Operators", es: "RBAC · Reportes · Operadores" }, accent: false },
    ],
  },
  {
    layer: { en: "Integrations", es: "Integraciones" },
    icon: Link2,
    color: "#34D399",
    nodes: [
      { name: "DHL API", color: "#FFCC00", sub: { en: "Package tracking", es: "Rastreo de paquetes" } },
      { name: "Boxful API", color: "#6C63FF", sub: { en: "Smart lockers", es: "Casilleros inteligentes" } },
      { name: "CyberSource", color: "#E5A020", sub: { en: "Payments gateway", es: "Pasarela de pago" } },
      { name: "AI / OCR", color: "#38BDF8", sub: { en: "Invoice parsing", es: "Lectura de facturas" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Mobile", es: "Móvil" },
    platformColor: "#818CF8",
    icon: Smartphone,
    title: { en: "Customer Flutter App", es: "App Flutter del Cliente" },
    desc: {
      en: "iOS & Android app for end customers. Handles pre-alerts with AI invoice scanning, real-time package tracking, in-app payments, and push notifications.",
      es: "App iOS y Android para clientes finales. Gestiona pre-alertas con escaneo IA de facturas, rastreo en tiempo real, pagos en la app y notificaciones push.",
    },
    bullets: [
      { en: "Pre-alert with AI/OCR invoice scan", es: "Pre-alerta con escaneo IA/OCR de facturas" },
      { en: "CyberSource in-app payments", es: "Pagos CyberSource dentro de la app" },
      { en: "Real-time tracking via WebSockets", es: "Rastreo en tiempo real vía WebSockets" },
      { en: "FCM push notifications", es: "Notificaciones push con FCM" },
    ],
  },
  {
    platform: { en: "Mobile", es: "Móvil" },
    platformColor: "#818CF8",
    icon: ScanLine,
    title: { en: "Operator Flutter App", es: "App Flutter del Operador" },
    desc: {
      en: "Warehouse operator tool for intake, scanning, rack assignment and QR delivery confirmation on the factory floor.",
      es: "Herramienta para operadores de bodega: ingreso de paquetes, escaneo, asignación de racks y confirmación de entrega por QR.",
    },
    bullets: [
      { en: "Barcode scanner for package intake", es: "Escáner de código de barras para ingreso" },
      { en: "Rack slot assignment", es: "Asignación de espacio en rack" },
      { en: "QR-code locker delivery confirmation", es: "Confirmación de entrega por QR" },
      { en: "Role-based access (RBAC)", es: "Acceso basado en roles (RBAC)" },
    ],
  },
  {
    platform: { en: "Web", es: "Web" },
    platformColor: "#34D399",
    icon: Monitor,
    title: { en: "Customer Web Portal", es: "Portal Web del Cliente" },
    desc: {
      en: "Laravel + Inertia.js web portal where customers manage pre-alerts, review customs calculations, and check delivery status from any browser.",
      es: "Portal web Laravel + Inertia.js donde los clientes gestionan pre-alertas, revisan cálculos aduanales y consultan el estado de entrega desde cualquier navegador.",
    },
    bullets: [
      { en: "Invoice upload & customs preview", es: "Subida de facturas y vista previa aduanal" },
      { en: "Package status timeline", es: "Línea de tiempo del estado del paquete" },
      { en: "Locker geo-map selection", es: "Selección de casillero en mapa" },
      { en: "DAI + IVA calculation display", es: "Visualización de cálculo DAI + IVA" },
    ],
  },
  {
    platform: { en: "Web", es: "Web" },
    platformColor: "#34D399",
    icon: LayoutDashboard,
    title: { en: "Filament Admin Panel", es: "Panel Admin Filament" },
    desc: {
      en: "Full-featured SaaS back-office for franchise operators: KPI dashboards, user management, RBAC, financial reporting, and DHL/Boxful configuration.",
      es: "Back-office SaaS completo para operadores de franquicia: dashboards KPI, gestión de usuarios, RBAC, reportes financieros y configuración de DHL/Boxful.",
    },
    bullets: [
      { en: "Income & package KPI dashboards", es: "Dashboards de KPI de ingresos y paquetes" },
      { en: "Role & permissions management", es: "Gestión de roles y permisos" },
      { en: "DHL & Boxful API configuration", es: "Configuración de APIs DHL y Boxful" },
      { en: "Financial reports & exports", es: "Reportes financieros y exportaciones" },
    ],
  },
];

/* ─── Product Panels ───────────────────────────────────── */
const webPanels = [
  {
    src: "/img/mbe/web/web_dashboard_income.png",
    url: "admin.mbe.sv",
    label: { en: "Income Dashboard — Revenue & package KPIs", es: "Dashboard de Ingresos — KPIs de ingresos y paquetes" },
    featured: true,
  },
  {
    src: "/img/mbe/web/web_prealert_detail.png",
    url: "operator.mbe.sv",
    label: { en: "Operator Panel — Pre-alert & customs verification", es: "Panel Operador — Verificación de pre-alerta y aduanas" },
    featured: false,
  },
  {
    src: "/img/mbe/web/web_prealert_creation.png",
    url: "operator.mbe.sv/prealerts/new",
    label: { en: "Pre-alert Creation — AI-assisted invoice scan", es: "Creación de Pre-alerta — Escaneo de factura con IA" },
    featured: false,
  },
  {
    src: "/img/mbe/web/web_dashboard1.png",
    url: "admin.mbe.sv/filament",
    label: { en: "Filament Admin — Franchise control panel", es: "Filament Admin — Panel de control de franquicia" },
    featured: false,
  },
];

const mobilePanels = [
  { src: "/img/mbe/mobile/IMG_7047.PNG", label: { en: "Package History", es: "Historial de Paquetes" } },
  { src: "/img/mbe/mobile/IMG_7050.PNG", label: { en: "Live Tracking", es: "Rastreo en Vivo" } },
  { src: "/img/mbe/mobile/IMG_7056.PNG", label: { en: "CyberSource Checkout", es: "Pago CyberSource" } },
  { src: "/img/mbe/mobile/IMG_7045.PNG", label: { en: "Package Details", es: "Detalle de Paquete" } },
  { src: "/img/mbe/mobile/mobile_cus_prealert_list.PNG", label: { en: "Pre-alert List", es: "Lista de Pre-alertas" } },
];

/* ─── Media ───────────────────────────────────────────── */
const MBE_HERO_VIDEO = "/img/mbe/mobile/ScreenRecording_04-14-2026 07-04-10_1.MP4";
const MBE_HERO_POSTER = "/img/mbe/mobile/mobile_cus_prealert_list.PNG";

const ease = [0.22, 1, 0.36, 1];

export default function MbeEcosystemProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Cinematic Hero ────────────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section">
      <div className="mbe-hero-glow mbe-hero-glow--left" aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow">
            <Zap size={13} strokeWidth={2.5} style={{ color: "#818CF8" }} />
            {t({ en: "Enterprise Product", es: "Producto Empresarial" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "One ecosystem for the entire logistics chain",
              es: "Un ecosistema para toda la cadena logística",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "Built end-to-end for Mail Boxes Etc. El Salvador — a multi-platform SaaS that digitizes customs pre-alerts, in-app payments, warehouse ops and smart-locker delivery in a single connected system.",
              es: "Construido de punta a punta para Mail Boxes Etc. El Salvador — un SaaS multiplataforma que digitaliza pre-alertas aduanales, pagos en la app, operaciones de bodega y entrega en casilleros inteligentes en un solo sistema conectado.",
            })}
          </p>


        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" aria-hidden />

          <div className="mbe-laptop-wrap">
            <div className="mbe-laptop-bezel">
              <div className="mbe-laptop-camera" aria-hidden />
              <div className="mbe-laptop-screen">
                <Image
                  src="/img/mbe/web/web_dashboard_income.png"
                  alt={t({ en: "SaaS Admin Dashboard", es: "Dashboard de Administración SaaS" })}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </div>
            <div className="mbe-laptop-base">
              <div className="mbe-laptop-foot" />
            </div>
          </div>

          <div className="mbe-phone-wrap">
            <div className="mbe-phone-bezel">
              <div className="mbe-phone-notch" aria-hidden />
              <div className="mbe-phone-screen">
                <video
                  autoPlay muted loop playsInline preload="metadata"
                  poster={MBE_HERO_POSTER}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  aria-label={t({ en: "Flutter app demo", es: "Demo app Flutter" })}
                >
                  <source src={MBE_HERO_VIDEO} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mbe-hero-caption">
        {t({
          en: "Mail Boxes Etc. Ecosystem — SaaS Admin Panel + Flutter Client App, synced in real time.",
          es: "Ecosistema Mail Boxes Etc. — Panel SaaS + App Flutter, sincronizados en tiempo real.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables ───────────────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Four production-ready products shipped end-to-end.", es: "Cuatro productos en producción entregados de punta a punta." })}
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
            {/* Platform pill */}
            <div className="mbe-deliverable-platform">
              <span className="mbe-deliverable-platform-dot" />
              {t(platform)}
            </div>

            {/* Icon + Title */}
            <div className="mbe-deliverable-header">
              <div className="mbe-deliverable-icon">
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mbe-deliverable-title">{t(title)}</h3>
            </div>

            {/* Description */}
            <p className="mbe-deliverable-desc">{t(desc)}</p>

            {/* Bullet list */}
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
        {t({ en: "Architecture structured into highly responsive client interfaces and robust backend services.", es: "Arquitectura estructurada en interfaces cliente altamente interactivas y servicios backend robustos." })}
      </p>

      {/* 2a. Mobile Features Block */}
      <div style={{ marginTop: "36px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#818CF8",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Smartphone size={16} strokeWidth={2.5} />
          {t({ en: "Mobile Ecosystem (Flutter iOS & Android)", es: "Ecosistema Móvil (Flutter iOS y Android)" })}
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
          {t({ en: "Backend Architecture & Cloud Services (Laravel)", es: "Arquitectura Backend y Servicios Cloud (Laravel)" })}
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
        {t({ en: "Web administration platform built with Laravel + Filament + Inertia.", es: "Plataforma de administración web construida con Laravel + Filament + Inertia." })}
      </p>

      {/* Featured panel — large */}
      <motion.div
        className="mbe-panel-featured"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mbe-browser">
          <div className="mbe-browser-bar">
            <span className="mbe-browser-dot mbe-browser-dot--red" />
            <span className="mbe-browser-dot mbe-browser-dot--yellow" />
            <span className="mbe-browser-dot mbe-browser-dot--green" />
            <div className="mbe-browser-url-bar">
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
        <span className="mbe-panel-label">{t(webPanels[0].label)}</span>
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
            <div className="mbe-browser mbe-browser--sm">
              <div className="mbe-browser-bar">
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
        <p className="mbe-strip-label">
          {t({ en: "Flutter Client App — iOS & Android", es: "App Cliente Flutter — iOS y Android" })}
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
              <div className="mbe-mobile-frame">
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
              <span className="mbe-mobile-caption">{t(m.label)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ── 4. User Journey Pipeline ─────────────────────────── */
  const journey = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "USER JOURNEY", es: "FLUJO DEL USUARIO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "From invoice upload to last-mile delivery — 5 connected steps.", es: "Desde la subida de factura hasta la entrega — 5 pasos conectados." })}
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

  /* ── 5. Tech Stack — Grouped ──────────────────────────── */
  const stackSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "TECH STACK", es: "STACK TECNOLÓGICO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Technologies chosen for reliability, developer experience and scale.", es: "Tecnologías elegidas por confiabilidad, experiencia de desarrollo y escalabilidad." })}
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
            {/* Group header */}
            <div className="mbe-stack-group-header">
              <div className="mbe-stack-group-icon">
                <GroupIcon size={14} strokeWidth={2} aria-hidden />
              </div>
              <span className="mbe-stack-group-name">{t(group)}</span>
            </div>

            {/* Tech cards */}
            <div className="mbe-stack-techs">
              {techs.map(({ name, role }, ti) => (
                <div key={ti} className="mbe-stack-tech-card">
                  <div className="mbe-stack-tech-letter">
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

  /* ── 6. Architecture — Layered Diagram ────────────────── */
  const architecture = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "SYSTEM ARCHITECTURE", es: "ARQUITECTURA DEL SISTEMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Three interconnected layers: client, backend, and third-party integrations.", es: "Tres capas interconectadas: cliente, backend e integraciones de terceros." })}
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
