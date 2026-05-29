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
  Wrench,
  Paintbrush,
  Search,
  DollarSign
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Client E-Commerce vs Workshop & CMS ──────── */
const clientFeatures = [
  {
    icon: Search,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "dynamic-catalog",
    title: { en: "Dynamic Vehicle Catalog & Specs", es: "Catálogo de Vehículos Inteligente" },
    desc: {
      en: "Highly interactive automotive display panel. Combines multi-parameter search filters (brand, price, fuel, segment) with sliding media spec sheets and fluid responsive car detail pages.",
      es: "Vitrina automotriz altamente interactiva. Integra filtros cruzados avanzados (marca, precio, combustible, carrocería), carruseles de fotos de alta resolución y fichas técnicas estructuradas.",
    },
  },
  {
    icon: DollarSign,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "credit-calculator",
    title: { en: "Custom Financing & Quote Simulator", es: "Simulador de Crédito y Cotización" },
    desc: {
      en: "Interactive financial slider built inside car sheets. Customers simulate custom downpayments (pie/entrada) and dynamic loan terms, immediately getting monthly fee estimations.",
      es: "Simulador financiero interactivo. Los clientes pueden calcular el pie/entrada de su crédito automotriz, seleccionar plazos en meses y estimar sus cuotas mensuales de forma instantánea.",
    },
  },
  {
    icon: ShieldCheck,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "leads-processor",
    title: { en: "Lead Pipeline Integration", es: "Captura de Leads e Interés Legal" },
    desc: {
      en: "Seamless lead capture system mapping credit simulations directly to sales staff queues. Validates customer documents, phone parameters, and triggers automated email summaries.",
      es: "Captura y procesamiento de prospectos en caliente. Asocia la simulación de cuotas elegidas por el cliente para remitirlas de inmediato al equipo comercial del concesionario.",
    },
  },
];

const backendFeatures = [
  {
    icon: Calendar,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "booking-engine",
    title: { en: "Multi-Bay Service Booking Engine", es: "Motor de Reservas Multitaller" },
    desc: {
      en: "Specialized calendar scheduling portal. Allows customers to book workshop dates, choosing among general mechanical repairs, routine maintenance, or specialized body painting services.",
      es: "Módulo avanzado de agendamiento digital. Permite al cliente agendar citas de taller en vivo, seleccionando entre mecánica general, mantenimiento por kilometraje o pintura.",
    },
  },
  {
    icon: LayoutDashboard,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "inventory-cms",
    title: { en: "Fleet Inventory Management CMS", es: "CMS de Inventario y Flota de Vehículos" },
    desc: {
      en: "Robust administrative panel giving staff total control over vehicle additions, specifications editing, batch imports, dynamic frontpage marketing banners, and lead logs.",
      es: "Consola de administración para la gestión de flota. Controla ingresos de stock (altas/bajas), edición de fichas técnicas, banners publicitarios interactivos e historial de cotizaciones.",
    },
  },
  {
    icon: Settings,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "roles-audit",
    title: { en: "Administrative CRM & Audit Trails", es: "CRM Administrativo y Auditoría" },
    desc: {
      en: "Granular administrative role scopes. Logs backoffice actions (car spec updates, booking changes, client reviews) to maintain high data reliability and commercial audit standards.",
      es: "Sistema interno de control de roles comerciales. Registra bitácoras detalladas sobre cambios de precios de vehículos, asignación de citas y contacto con cotizantes.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Search,
    color: "#0EA5E9",
    key: "catalog-browse",
    title: { en: "Explore Catalog", es: "Exploración de Autos" },
    desc: { en: "Customer filters premium vehicle stock, comparing technical specifications and features.", es: "El cliente navega el stock, filtra por marcas/precios y compara especificaciones técnicas." },
  },
  {
    num: "02",
    icon: DollarSign,
    color: "#10B981",
    key: "financing-sim",
    title: { en: "Simulate Credit", es: "Simulador de Financiamiento" },
    desc: { en: "Adjusts downpayment sliders and term options, estimating monthly fees in real-time.", es: "Ajusta los controles de pie/entrada y plazos, visualizando la cuota de crédito en vivo." },
  },
  {
    num: "03",
    icon: Calendar,
    color: "#F59E0B",
    key: "workshop-schedule",
    title: { en: "Book Workshop", es: "Reservar Citas en Taller" },
    desc: { en: "Customer schedules service appointments (general maintenance, repairs, or body paint).", es: "Programa un servicio de taller eligiendo fecha, hora y especialidad de reparación o pintura." },
  },
  {
    num: "04",
    icon: Users,
    color: "#A855F7",
    key: "crm-logging",
    title: { en: "CRM Lead Pipeline", es: "Registro en CRM y Ventas" },
    desc: { en: "The simulation details or workshop bookings are routed to the backoffice sales inbox.", es: "La cotización o cita ingresa de inmediato a la bandeja del CMS para atención comercial." },
  },
  {
    num: "05",
    icon: LayoutDashboard,
    color: "#818CF8",
    key: "stock-admin",
    title: { en: "Fleet Inventory Control", es: "Gestión de Stock de Autos" },
    desc: { en: "Dealer admins import vehicle shipments, update specifications, and change catalog pricing.", es: "El concesionario administra stock, actualiza fichas técnicas de modelos y publica promociones." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Interactive E-Commerce Frontend", es: "Frontend E-Commerce Interactivo" },
    icon: Monitor,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.15)",
    techs: [
      { name: "Laravel Blade Template", role: { en: "Modular layouts, fast load times, and structured SEO headers", es: "Vistas modulares renderizadas desde el servidor para SEO y carga rápida" } },
      { name: "Vanilla Javascript", role: { en: "Lightweight clientside math simulators and image galleries", es: "Lógica matemática e interactiva liviana para simulación de cuotas e imágenes" } },
      { name: "Tailwind CSS", role: { en: "Clean responsive grid sheets and luxury dark elements layout", es: "Maquetación responsiva moderna, grids técnicos y diseño estético pulido" } },
    ],
  },
  {
    group: { en: "Application Backend & Core", es: "Estructura Backend y Datos" },
    icon: Server,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Laravel MVC Engine", role: { en: "Fleet routing, dynamic SQL parameters, and CRM booking modules", es: "Ruteo de flota, consultas dinámicas de inventario y controladores de CRM" } },
      { name: "MySQL DB Server", role: { en: "Relational database storing fleet specifications, logs, and bookings", es: "Esquema relacional para stock de autos, citas de taller y prospectos" } },
      { name: "Linux Deploy", role: { en: "High-performance deployment with TLS security and caching structures", es: "Alojamiento web seguro con compresión estricta y cacheo de consultas" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Presentation (Blade)", es: "Capa Presentación (Blade)" },
    icon: Layers,
    color: "#0EA5E9",
    nodes: [
      { icon: Search, label: { en: "Dynamic Stock Catalog", es: "Buscador de Stock" }, sub: { en: "Cross-filters · Specifications sliding sheets", es: "Filtros dinámicos · Fichas deslizables" }, accent: true },
      { icon: DollarSign, label: { en: "Financing Calculator", es: "Simulador de Cuotas" }, sub: { en: "Credit sliders · PDF quotation requests", es: "Deslizador de pie · Cotizaciones PDF" }, accent: false },
      { icon: Calendar, label: { en: "Workshop Scheduler", es: "Agendador de Taller" }, sub: { en: "Select services · Select dates", es: "Mecánica / Pintura · Calendarios" }, accent: true },
    ],
  },
  {
    layer: { en: "Core Service Controllers", es: "Controladores Core Automotriz" },
    icon: Server,
    color: "#10B981",
    nodes: [
      { icon: LayoutDashboard, label: { en: "Fleet Inventory Handler", es: "CMS de Stock e Inventario" }, sub: { en: "Batch importer · Live spec editor", es: "Carga masiva · Editor de características" }, accent: false },
      { icon: Users, label: { en: "CRM Leads Orchestrator", es: "Controlador de Cotizaciones" }, sub: { en: "Lead queue mapper · Booking calendars", es: "Remisión de prospectos · Calendario taller" }, accent: true },
    ],
  },
  {
    layer: { en: "Database Infrastructure Layer", es: "Infraestructura de Datos" },
    icon: Link2,
    color: "#A855F7",
    nodes: [
      { name: "MySQL FleetDB", color: "#38BDF8", sub: { en: "Vehicles · Specs · Media catalogs", es: "Vehículos · Fichas técnicas · Galería" } },
      { name: "MySQL BookingDB", color: "#10B981", sub: { en: "Appointment calendar slots", es: "Agenda de citas y mantenimiento" } },
      { name: "MySQL LeadDB", color: "#F59E0B", sub: { en: "Amortizations · Client profiles", es: "Cotizaciones de crédito · Leads" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Web E-Commerce Portal", es: "Portal Web E-Commerce" },
    platformColor: "#0EA5E9",
    icon: Monitor,
    title: { en: "Interactive Automotive Catalog", es: "Catálogo Automotriz Interactivo" },
    desc: {
      en: "Responsive vehicle e-commerce storefront allowing customers to apply advanced filters, view detailed specifications, and request official catalog quotes.",
      es: "Plataforma de comercio electrónico responsiva para explorar vehículos, filtrar stock por filtros avanzados, revisar especificaciones técnicas y cotizar.",
    },
    bullets: [
      { en: "Automotive segment cross-filtering search", es: "Buscador de stock con filtros cruzados de segmentos" },
      { en: "Detailed spec sheets with sliding image carousels", es: "Fichas técnicas y carrusel multimedia deslizante" },
      { en: "Fluid responsive structure optimized for tablets", es: "Estructura fluida y adaptable optimizada para tablets" },
      { en: "Interactive pricing adjustments based on trims", es: "Precios dinámicos basados en la versión y transmisión del auto" },
    ],
  },
  {
    platform: { en: "Financial Calculator", es: "Calculadora de Crédito" },
    platformColor: "#10B981",
    icon: Zap,
    title: { en: "Dynamic Credit Simulator", es: "Simulador de Financiamiento" },
    desc: {
      en: "An interactive, client-side calculator embedded in car details allowing users to simulate downpayments, select payment counts, and view dynamic fee details.",
      es: "Simulador integrado en la ficha técnica. Permite calcular el pie/entrada, número de cuotas mensuales y estimar el crédito automotriz en tiempo real.",
    },
    bullets: [
      { en: "Downpayment percentage inputs & currency sliders", es: "Deslizador de pie en montos fijos o porcentuales" },
      { en: "Amortization fee calculations in milliseconds", es: "Cálculo matemático de cuota en milisegundos" },
      { en: "Direct quote lead-capture secure gateway", es: "Formulario integrado de captura y despacho comercial" },
      { en: "Flexible interest rate parameter structures", es: "Estructura parametrizable de tasas de interés y plazos" },
    ],
  },
  {
    platform: { en: "Client Workshop Panel", es: "Portal de Citas y Taller" },
    platformColor: "#F59E0B",
    icon: Calendar,
    title: { en: "Multi-Role Workshop Scheduler", es: "Agendador de Citas de Taller" },
    desc: {
      en: "Digital booking system that enables clients to book appointments, select mechanical services, workshop bays, and print out PDF certificates.",
      es: "Sistema de citas para que el cliente agende visitas de taller eligiendo entre mecánica general, mantenciones obligatorias o cabina de pintura.",
    },
    bullets: [
      { en: "Specialized service flow selection", es: "Selección especializada de pautas de mantenimiento" },
      { en: "Live interactive calendar slots scheduling", es: "Agendamiento en vivo con disponibilidad del taller" },
      { en: "Automated booking details digital coupon receipt", es: "Generación automática del cupón digital de la cita" },
      { en: "Flexible bays mapping (general, wash, painting)", es: "Asignación de citas por área (mecánica, lavado, pintura)" },
    ],
  },
  {
    platform: { en: "Dealer Command Center", es: "CMS y CRM Comercial" },
    platformColor: "#A855F7",
    icon: LayoutDashboard,
    title: { en: "Administrative Fleet & Leads CMS", es: "CMS de Inventario y Bandeja CRM" },
    desc: {
      en: "Administrative console empowering dealers to add cars to the fleet, adjust specifications, audit dynamic banner ads, and track CRM quotation logs.",
      es: "Consola administrativa para control de stock automotriz, actualización de banners interactivos de ofertas y gestión de prospectos de crédito y taller.",
    },
    bullets: [
      { en: "Sleek fleet editor with specifications logs", es: "Editor de vehículos de catálogo con fichas técnicas" },
      { en: "Finance quotes and workshop appointment pipeline", es: "Bandeja comercial de cotizaciones y citas recibidas" },
      { en: "Dynamic banners advertising administration tool", es: "Administrador de banners publicitarios y promociones" },
      { en: "Advanced CSV/Excel data reporting dashboard", es: "Exportación de leads y agendas a reportes de Excel/PDF" },
    ],
  },
];

/* ─── Web Panels (Five actual screenshots of the client platform) ─ */
const webPanels = [
  {
    src: "/img/autosummit/autosummit_home.png",
    url: "autosummit.cl",
    label: {
      en: "Autosummit Home — E-Commerce landing page showing active vehicle catalogs, brand filtering sliders, and marketing banners.",
      es: "Catálogo Principal Autosummit — Inicio e-commerce con vitrina de marcas, filtros dinámicos y banners de promociones."
    },
    featured: true,
  },
  {
    src: "/img/autosummit/autosummit_detail.png",
    url: "autosummit.cl/vehiculos/suv-summit-pro",
    label: {
      en: "Vehicle Spec Sheet — Detailed catalog view showing sliding images, full technical specifications, and interactive credit simulation.",
      es: "Ficha del Vehículo — Ficha técnica con carrusel de fotos, equipamiento, potencia de motor y simulación directa de crédito."
    },
    featured: false,
  },
  {
    src: "/img/autosummit/autosummit_reservacion_general.png",
    url: "autosummit.cl/reservas/general",
    label: {
      en: "General Booking — Guided booking scheduler for general repairs, selecting mechanic bays and workshop dates.",
      es: "Portal de Reservas General — Agenda guiada para reparaciones generales de taller, alineaciones y chequeos mecánicos."
    },
    featured: false,
  },
  {
    src: "/img/autosummit/autosummit_reservacion_mantenimiento.png",
    url: "autosummit.cl/reservas/mantenimiento",
    label: {
      en: "Maintenance Booking — Workshop slot reservation for mileage maintenance milestones and preventives.",
      es: "Reserva de Mantenimiento — Agendamiento de citas preventivas por kilometraje (10k, 20k, 30k) y cambio de fluidos."
    },
    featured: false,
  },
  {
    src: "/img/autosummit/autosummit_reservacion_pintura.png",
    url: "autosummit.cl/reservas/pintura",
    label: {
      en: "Paint Shop Booking — Specialized booking portal screen for body cosmetic repairs, scratch removals, and car paint sessions.",
      es: "Reserva de Pintura y Desabolladura — Agenda dedicada para tratamientos estéticos de carrocería, abolladuras y pintura."
    },
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function AutosummitProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Immersive E-Commerce Hero ────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#0EA5E9" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(14, 165, 233, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(16, 185, 129, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#0EA5E9", border: "1px solid rgba(14, 165, 233, 0.25)", background: "rgba(14, 165, 233, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#0EA5E9" }} />
            {t({ en: "Automotive E-Commerce & Workshop Booking", es: "E-Commerce de Vehículos y Reserva de Taller" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Enterprise vehicle catalog and workshop scheduler",
              es: "Catálogo interactivo de vehículos y agendador digital de taller",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A premium automotive e-commerce and scheduling portal engineered for TWGroup Chile. Empowers customers to browse a dynamic responsive vehicle catalog, view technical spec sheets, and simulate credits through custom financial calculators. Features a multi-bay workshop agendador specialized in general mechanics, mileage maintenance, and paint shop appointments, synchronized with an administrative stock CMS.",
              es: "Portal automotriz premium de comercio electrónico y reserva de taller desarrollado para TWGroup Chile. Permite a los usuarios explorar un catálogo responsivo de vehículos, examinar equipamientos y simular plazos de crédito en cuotas mensuales. Incorpora un agendador digital especializado en mecánica, mantenciones y desabolladura/pintura, coordinado con un CMS de stock.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(14, 165, 233, 0.22), transparent 80%)" }} aria-hidden />

          {/* Large Laptop Frame showing catalog home screen */}
          <div className="mbe-laptop-wrap" style={{ maxWidth: "560px" }}>
            <div className="mbe-laptop-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-laptop-camera" aria-hidden />
              <div className="mbe-laptop-screen">
                <Image
                  src="/img/autosummit/autosummit_home.png"
                  alt={t({ en: "Autosummit E-Commerce catalog home", es: "Inicio de E-Commerce Autosummit" })}
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
          en: "Autosummit Platform — Interactive vehicle e-commerce, built using Laravel MVC + Blade + MySQL relational fleet schemas.",
          es: "Plataforma Autosummit — Portal de comercio electrónico de vehículos y agendador de taller, desarrollado en Laravel + Blade + MySQL.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables Section ───────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES DEL PROYECTO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Four tailored production modules delivered to digitize automotive sales and mechanic bookings.", es: "Cuatro módulos especializados en producción para digitalizar ventas y citas de taller mecánicos." })}
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

  /* ── 2. Capabilities — Segmented by Client/Backend ──────── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PLATFORM CAPABILITIES", es: "CAPACIDADES DE LA PLATAFORMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "High-end vehicle presentation combined with automated workshop and administrative tools.", es: "Vitrina interactiva y simuladores combinados con robustas herramientas de administración y CRM." })}
      </p>

      {/* 2a. Client Experience Block */}
      <div style={{ marginTop: "36px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#0EA5E9",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Monitor size={16} strokeWidth={2.5} />
          {t({ en: "E-Commerce & Client Experience (Web Front)", es: "Experiencia E-Commerce y Cliente (Web Front)" })}
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

      {/* 2b. Workshop & CMS Backoffice Block */}
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
          {t({ en: "Workshop Booking & Administrative Core (Backend Laravel)", es: "Agendador de Reservas e Inventario (Backend Laravel)" })}
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
      <SectionLabel>{t({ en: "AUTOMOTIVE TRANSACTION JOURNEY", es: "EL VIAJE DIGITAL DE COMPRA Y SERVICIO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({
          en: "How customers browse catalogs, simulate finance quotes, and book vehicle maintenance service visits.",
          es: "Cómo un cliente navega el catálogo, cotiza financiamientos y agenda citas de mantención para sus autos."
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
        {t({ en: "Automotive MVC catalog rendering, caching layers, and relational lead-routing schemas.", es: "Enrutamiento MVC de vehículos de flota, capas de caché relacional y encriptación de agendamiento." })}
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
        {t({ en: "Production toolset optimized for immediate server-side catalog loads and CRM queries.", es: "Herramientas elegidas para cargas de catálogo inmediatas del lado del servidor y CRM robusto." })}
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

  /* ── 6. Live Interface Showcase (The 5 actual screenshots) ─ */
  const gallerySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "CLIENT PLATFORM SURFACE", es: "SUPERFICIE DE LA PLATAFORMA DE CLIENTES" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "28px" }}>
        {t({ en: "Browse the actual, beautiful vehicle catalog portal and specialized workshop schedulers.", es: "Explora capturas de pantalla reales de la vitrina de vehículos y agendadores de citas de taller." })}
      </p>

      {/* Featured large browser frame */}
      <motion.div
        className="mbe-panel-featured"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mbe-browser" style={{ borderColor: "rgba(14, 165, 233, 0.25)", boxShadow: "0 28px 70px rgba(0,0,0,0.85), 0 0 30px rgba(14, 165, 233, 0.1)" }}>
          <div className="mbe-browser-bar" style={{ background: "rgba(20, 20, 25, 0.9)" }}>
            <span className="mbe-browser-dot mbe-browser-dot--red" />
            <span className="mbe-browser-dot mbe-browser-dot--yellow" />
            <span className="mbe-browser-dot mbe-browser-dot--green" />
            <div className="mbe-browser-url-bar" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
              <span className="mbe-browser-url-lock" style={{ color: "#0EA5E9" }}>🔒</span>
              <span className="mbe-browser-url-text" style={{ color: "#E2E8F0" }}>{webPanels[0].url}</span>
            </div>
          </div>
          <div className="mbe-browser-screen mbe-browser-screen--featured" style={{ height: "400px" }}>
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
          <span style={{ color: "#0EA5E9", fontWeight: "bold" }}>●</span> {t(webPanels[0].label)}
        </span>
      </motion.div>

      {/* Secondary panels (4 cards in a grid) */}
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
