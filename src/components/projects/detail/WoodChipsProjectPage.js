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
  MapPin,
  Map,
  CreditCard
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import LogisticsMapWidget from "@/components/projects/widgets/LogisticsMapWidget";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Mobile vs Backend ───────────────────── */
const mobileFeatures = [
  {
    icon: MapPin,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "gps-mobile",
    title: { en: "Real-Time GPS Geolocalisation", es: "Geolocalización GPS en Tiempo Real" },
    desc: {
      en: "Advanced Google Maps integration inside Flutter apps, allowing arborists to pin drop-off sites and enabling customers to browse nearby chips dynamically with accurate routing.",
      es: "Integración de Google Maps en la app Flutter. Permite a arboristas fijar puntos de descarga en vivo y a clientes buscar astillas cercanas con trazado de rutas de alta precisión.",
    },
  },
  {
    icon: Users,
    color: "#34D399",
    glow: "rgba(52,211,153,0.18)",
    key: "roles-mobile",
    title: { en: "Dual-Role Mobile Ecosystem", es: "Ecosistema Móvil de Doble Rol" },
    desc: {
      en: "Two fully connected apps built on a shared Flutter codebase: Customer App (for booking, payment, and ETA tracking) and Arborist App (for route navigation and drop-off updates).",
      es: "Dos aplicaciones móviles integradas bajo una base de código Flutter: App de Cliente (reservas, pagos y tracking) y App de Arborista (navegación GPS paso a paso y registro de descargas).",
    },
  },
  {
    icon: CreditCard,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "payments-mobile",
    title: { en: "Multi-Gateway Checkout", es: "Cobro Móvil Multi-Gateway" },
    desc: {
      en: "Seamless native mobile checkout combining Stripe and Square APIs to securely process credit card transactions directly in iOS and Android.",
      es: "Checkout móvil nativo ultra-fluido que unifica las APIs de Stripe y Square para procesar pagos seguros con tarjeta directamente en dispositivos iOS y Android.",
    },
  },
];

const backendFeatures = [
  {
    icon: Map,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "routing-backend",
    title: { en: "Logistics Routing & ETA Engine", es: "Motor de Ruteo Logístico y ETAs" },
    desc: {
      en: "A robust backend system utilizing Google Distance Matrix APIs to automatically calculate optimal delivery paths, dispatch closest drivers, and provide live ETAs.",
      es: "Módulo en el servidor que calcula rutas de transporte óptimas mediante Google Distance Matrix, asigna choferes cercanos y proyecta tiempos estimados de llegada (ETAs) exactos.",
    },
  },
  {
    icon: Zap,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "push-backend",
    title: { en: "Firebase FCM Real-Time Push System", es: "Sistema Push FCM en Tiempo Real" },
    desc: {
      en: "Instant automated push notifications sent directly to drivers' and clients' devices using Firebase FCM, providing microsecond status updates as deliveries progress.",
      es: "Notificaciones push automatizadas enviadas al dispositivo de choferes y clientes mediante Firebase FCM, transmitiendo cambios de estado del viaje al segundo.",
    },
  },
  {
    icon: LayoutDashboard,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "control-backend",
    title: { en: "Logistics Admin & Dispute Control", es: "Panel de Orquestación y Disputas" },
    desc: {
      en: "Centralized Laravel administration back-office to coordinate active routes, monitor Stripe/Square payouts, manage customer disputes, and check environmental impact logs.",
      es: "Backoffice centralizado en Laravel para coordinar despachos activos, revisar transferencias de Stripe/Square, gestionar reclamos de usuarios y medir el impacto ecológico.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: MapPin,
    color: "#10B981",
    key: "publish",
    title: { en: "Arborist Pin Drop", es: "Publicación de Carga" },
    desc: { en: "Arborist posts wood chips availability and uploads site pictures from the field app.", es: "El arborista registra existencias de astillas y sube fotos del terreno en terreno." },
  },
  {
    num: "02",
    icon: CreditCard,
    color: "#34D399",
    key: "checkout",
    title: { en: "Secure Booking & Pay", es: "Reserva y Pago Seguro" },
    desc: { en: "Customer finds drops on the map, books volume, and checks out with credit card.", es: "El cliente busca cargas en el mapa, reserva el volumen y paga de forma segura." },
  },
  {
    num: "03",
    icon: Map,
    color: "#0EA5E9",
    key: "dispatch",
    title: { en: "GPS Route Dispatch", es: "Despacho y Ruteo GPS" },
    desc: { en: "Logistics engine calculates optimal paths and notifies the designated driver.", es: "El motor calcula la ruta óptima en el servidor y notifica al conductor asignado." },
  },
  {
    num: "04",
    icon: Zap,
    color: "#F59E0B",
    key: "push",
    title: { en: "FCM Push Updates", es: "Alertas Push en Vivo" },
    desc: { en: "Customer receives live push notification alerts when the truck is nearby.", es: "El cliente recibe notificaciones push instantáneas cuando el camión está por llegar." },
  },
  {
    num: "05",
    icon: ShieldCheck,
    color: "#6366F1",
    key: "confirm",
    title: { en: "Photo Proof & Closure", es: "Confirmación y Cierre" },
    desc: { en: "Driver downloads load, uploads photo proof of delivery, and system issues PDF receipt.", es: "El conductor descarga, sube foto de comprobante y el sistema emite el recibo PDF." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Mobile Ecosystem", es: "Ecosistema Móvil" },
    icon: Smartphone,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Flutter & Dart", role: { en: "Dual iOS & Android client and driver applications", es: "Apps nativas iOS y Android para clientes y choferes" } },
      { name: "Google Maps API", role: { en: "Geolocalisation, routes and proximity searching", es: "Geolocalización en tiempo real y optimización de rutas" } },
      { name: "Firebase FCM", role: { en: "Real-time direct push device notifications", es: "Notificaciones de alertas push directas al dispositivo" } },
    ],
  },
  {
    group: { en: "Logistics & Core API", es: "Backend y Portal SaaS" },
    icon: Server,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.15)",
    techs: [
      { name: "Laravel", role: { en: "REST API, logistical routing and admin panel", es: "API REST, enrutamiento logístico y backend general" } },
      { name: "MySQL DB", role: { en: "Geolocated coordinates & transaction schemas", es: "Persistencia de coordenadas, transacciones y usuarios" } },
      { name: "WebSockets Reverb", role: { en: "Microsecond live status updates broadcasts", es: "Sincronización en tiempo real de ubicaciones y alertas" } },
    ],
  },
  {
    group: { en: "Integrations & APIs", es: "Pasarelas de Pago" },
    icon: Plug,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.15)",
    techs: [
      { name: "Stripe API", role: { en: "Secure card billing & payment captures", es: "Procesamiento blindado de cobros internacionales" } },
      { name: "Square API", role: { en: "Secondary payment gateway for US clients", es: "Pasarela secundaria alternativa para el mercado de EE.UU." } },
      { name: "Distance Matrix", role: { en: "Live travel duration & ETA calculations", es: "Cálculo de tiempos estimados de arribo (ETA) en vivo" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Layer", es: "Capa Cliente" },
    icon: Layers,
    color: "#10B981",
    nodes: [
      { icon: Smartphone, label: { en: "Flutter App (Customer)", es: "Flutter App (Cliente)" }, sub: { en: "iOS / Android · Geolocation · Card Pay", es: "iOS / Android · Geolocalización · Pago tarjeta" }, accent: true },
      { icon: Smartphone, label: { en: "Flutter App (Arborist)", es: "Flutter App (Arborista)" }, sub: { en: "iOS / Android · GPS Routes · Camera Proof", es: "iOS / Android · Rutas GPS · Comprobante cámara" }, accent: true },
    ],
  },
  {
    layer: { en: "Logistical SaaS Core", es: "Capa API Logística SaaS" },
    icon: Server,
    color: "#0EA5E9",
    nodes: [
      { icon: Monitor, label: { en: "Laravel REST API", es: "Laravel REST API" }, sub: { en: "Routing Matrix Engine · WebSocket Sync", es: "Motor de ruteo de distancia · WebSockets" }, accent: false },
      { icon: LayoutDashboard, label: { en: "Laravel Admin Panel", es: "Panel Admin Laravel" }, sub: { en: "Payouts Control · Disputes · Eco Analytics", es: "Control de pagos · Disputas · Métricas ecológicas" }, accent: false },
    ],
  },
  {
    layer: { en: "Logistics Infrastructures", es: "Infraestructura Integrada" },
    icon: Link2,
    color: "#A855F7",
    nodes: [
      { name: "Stripe Gateway", color: "#6366F1", sub: { en: "Payment collection", es: "Pasarela principal de cobro" } },
      { name: "Square Gateway", color: "#F59E0B", sub: { en: "Secondary payment", es: "Pasarela secundaria de cobro" } },
      { name: "Google Maps APIs", color: "#10B981", sub: { en: "Distance & geocoding", es: "Distancias y codificación" } },
      { name: "MySQL DB Server", color: "#38BDF8", sub: { en: "SaaS relational logs", es: "Registros relacionales SaaS" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Mobile", es: "Móvil" },
    platformColor: "#10B981",
    icon: Smartphone,
    title: { en: "Customer Flutter App", es: "App Flutter de Clientes" },
    desc: {
      en: "iOS and Android application for consumers. Features full-screen geolocated map search, automated chip booking, Stripe/Square checkout and push alerts.",
      es: "App iOS y Android para consumidores. Ofrece mapas interactivos para buscar astillas cercanas, reservas inmediatas, cobros con tarjeta y alertas push.",
    },
    bullets: [
      { en: "Proximity drops maps visual search", es: "Búsqueda visual de descargas por proximidad" },
      { en: "Stripe and Square cards checkouts", es: "Checkouts móviles rápidos con Stripe y Square" },
      { en: "Real-time truck routing ETA logs", es: "Monitoreo en vivo de arribo del camión (ETA)" },
      { en: "Firebase direct push status alerts", es: "Notificaciones directas de estado de entrega" },
    ],
  },
  {
    platform: { en: "Mobile", es: "Móvil" },
    platformColor: "#34D399",
    icon: MapPin,
    title: { en: "Arborist Flutter App", es: "App Flutter de Arboristas" },
    desc: {
      en: "iOS and Android application for wood chip producers. Houses dynamic geolocated site creations, GPS step-by-step route navigation and photo delivery confirmations.",
      es: "App iOS y Android para productores. Permite publicar puntos de descarga geolocalizados, seguir indicaciones GPS y subir fotos de entrega.",
    },
    bullets: [
      { en: "Dynamic geolocated drops creation", es: "Publicación instantánea de astillas con GPS" },
      { en: "GPS navigation step-by-step routes", es: "Navegación paso a paso de rutas logísticas" },
      { en: "Camera photos proof of delivery logs", es: "Captura de comprobante fotográfico de descarga" },
      { en: "Active drops duration calendar controls", es: "Control de tiempo y expiración de publicaciones" },
    ],
  },
  {
    platform: { en: "Web Portal", es: "Portal Web" },
    platformColor: "#0EA5E9",
    icon: Monitor,
    title: { en: "Customer Web Portal", es: "Portal Web de Clientes" },
    desc: {
      en: "Browser-based application mirroring mobile flows: geolocated maps exploration, secure Stripe/Square checkout and invoice logs access.",
      es: "Aplicación de navegador que replica el flujo móvil: mapas interactivos para reservar, pasarelas de pago y descarga de facturas en PDF.",
    },
    bullets: [
      { en: "Dynamic maps browser booking checkout", es: "Reservas interactivas en mapas de navegador" },
      { en: "Integrated Stripe & Square web flows", es: "Checkouts web con Stripe y Square" },
      { en: "PDF invoices & booking history access", es: "Descarga de facturas PDF e historial" },
      { en: "Multilanguage & theme selectors", es: "Selector de temas y traducción multiidioma" },
    ],
  },
  {
    platform: { en: "Web SaaS", es: "Web SaaS" },
    platformColor: "#6366F1",
    icon: Server,
    title: { en: "SaaS Admin Dashboard", es: "Panel de Orquestación SaaS" },
    desc: {
      en: "Centralized Laravel administration backend. Directs routing engines, coordinates payments, resolves client disputes and manages ecosystem settings.",
      es: "Backoffice de control en Laravel. Orquesta motores de ruta, gestiona transferencias, resuelve disputas de pagos y administra ajustes del ecosistema.",
    },
    bullets: [
      { en: "Real-time trucks geolocated tracking logs", es: "Monitoreo GPS en tiempo real de choferes" },
      { en: "Payouts Stripe and Square transactions control", es: "Control y conciliación de pagos y disputas" },
      { en: "Client lists dynamic details management", es: "Administración completa de arboristas y clientes" },
      { en: "Eco-impact metric logs & Excel exports", es: "Métricas de volumen ecológico y exportación Excel" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function WoodChipsProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Cinematic Hero ────────────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#10B981" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(16, 185, 129, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(56, 189, 248, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#10B981", border: "1px solid rgba(16, 185, 129, 0.25)", background: "rgba(16, 185, 129, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#10B981" }} />
            {t({ en: "Logistics SaaS & Dual Flutter Apps", es: "SaaS Logístico y Apps Flutter Duales" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Sustainable wood chip logistics engineered for the US",
              es: "Logística sostenible de astillas de madera diseñada para EE.UU.",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "An innovative digital logistics ecosystem built for SoftVi (USA). Connects wood chip producers (arborists) who need disposal with consumers (landscapers) who need raw material. Powered by a dual-role Flutter mobile app (iOS & Android) with real-time GPS routes, and integrated with Stripe, Square, and Firebase push alerts.",
              es: "Innovador ecosistema de logística digital desarrollado para SoftVi (EE.UU.). Conecta productores de astillas (arboristas) con consumidores (jardineros), usando una app Flutter dual en iOS y Android con geolocalización GPS en tiempo real e integrada con Stripe y Square.",
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

          {/* Interactive simulator inside laptop as main highlight */}
          <div className="mbe-laptop-wrap">
            <div className="mbe-laptop-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-laptop-camera" aria-hidden />
              <div className="mbe-laptop-screen" style={{ background: "var(--surface)", overflow: "hidden" }}>
                <LogisticsMapWidget />
              </div>
            </div>
            <div className="mbe-laptop-base" style={{ background: "linear-gradient(to bottom, #475569, #1E293B)" }}>
              <div className="mbe-laptop-foot" style={{ background: "#0F172A" }} />
            </div>
          </div>

          {/* Phone frame with existing mobile app screenshot */}
          <div className="mbe-phone-wrap">
            <div className="mbe-phone-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-phone-notch" aria-hidden />
              <div className="mbe-phone-screen">
                <Image
                  src="/img/wood-chips/wood_chips_mobile.png"
                  alt={t({ en: "Flutter App Client Mockup", es: "Maqueta App Cliente Flutter" })}
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
          en: "Wood Chips Ecosystem — Interactive Logistics Map Simulator + Flutter Dual App Mockup, synchronized in real time.",
          es: "Ecosistema Wood Chips — Simulador de Mapa Logístico Interactivo + Maqueta de App Flutter Dual, sincronizados en tiempo real.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables ───────────────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Four production-ready digital products deployed end-to-end.", es: "Cuatro productos digitales especializados puestos en producción de extremo a extremo." })}
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
        {t({ en: "Architecture structured into geolocated Flutter mobile clients and robust logistics backend processes.", es: "Arquitectura estructurada en clientes móviles geolocalizados de Flutter y robustos procesos logísticos en el servidor." })}
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
          {t({ en: "Mobile Ecosystem Experience (Flutter)", es: "Experiencia de Ecosistema Móvil (Flutter)" })}
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
          {t({ en: "Logistics SaaS & Cloud Architecture (Laravel)", es: "Arquitectura Logística SaaS y Cloud (Laravel)" })}
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

  /* ── 3. Product Surface — Mobile Mockups & Live Simulator ── */
  const productSurface = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PRODUCT SURFACE", es: "SUPERFICIE DEL PRODUCTO" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "24px" }}>
        {t({ en: "Mobile app interfaces and interactive real-time logistics simulator map.", es: "Interfaces de las apps móviles y mapa simulador logístico interactivo en tiempo real." })}
      </p>

      {/* 1. Large Interactive Map Simulator */}
      <motion.div
        className="mbe-panel-featured"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="mbe-strip-label" style={{ color: "#F8FAFC", marginBottom: "12px" }}>
          {t({ en: "Interactive Logistics Map Simulator", es: "Simulador de Mapa Logístico Interactivo" })}
        </p>
        <div style={{
          borderRadius: "14px",
          border: "1px solid var(--border)",
          background: "var(--surface)",
          backdropFilter: "var(--glass-blur)",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)"
        }}>
          <LogisticsMapWidget />
        </div>
      </motion.div>

      {/* 2. Mobile App Mockup Frame */}
      <div style={{ marginTop: "40px" }}>
        <p className="mbe-strip-label" style={{ color: "#F8FAFC", marginBottom: "12px" }}>
          {t({ en: "Flutter Dual Mobile App Mockups (Customer & Arborist)", es: "Maqueta de Apps Móviles Duales Flutter (Cliente y Arborista)" })}
        </p>
        <div className="mbe-mobile-strip" style={{ justifyContent: "center", gap: "32px" }}>
          <motion.div
            className="mbe-mobile-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="mbe-mobile-frame" style={{ border: "4px solid #1E293B", background: "#0F172A", width: "240px", height: "auto", aspectRatio: "4/5" }}>
              <div className="mbe-mobile-notch" aria-hidden />
              <div className="mbe-mobile-screen">
                <Image
                  src="/img/wood-chips/wood_chips_mobile.png"
                  alt={t({ en: "Flutter App Client Mockup", es: "Maqueta de App Flutter de Clientes" })}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="240px"
                />
              </div>
            </div>
            <span className="mbe-mobile-caption" style={{ color: "#94A3B8", marginTop: "12px" }}>
              {t({ en: "Dual Mobile App Mockups", es: "Apps Móviles Duales Lado a Lado" })}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );

  /* ── 4. User Journey Pipeline ─────────────────────────── */
  const journey = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "LOGISTICS WORKFLOW", es: "FLUJO DE TRABAJO LOGÍSTICO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "From site drop-off to push confirmation receipt — 5 connected steps.", es: "Desde la publicación en terreno hasta el comprobante de entrega push — 5 etapas conectadas." })}
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
        {t({ en: "Technologies chosen for geolocation precision, instant transactions routing and scale.", es: "Tecnologías elegidas para precisión de geolocalización, orquestación de pagos y escala." })}
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
        {t({ en: "Three interconnected layers: mobile client apps, routing REST API, and integrated logistics infrastructure.", es: "Tres capas interconectadas: apps móviles cliente, API REST de enrutamiento e infraestructura integrada." })}
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
