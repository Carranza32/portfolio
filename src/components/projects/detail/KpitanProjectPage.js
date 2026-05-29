"use client";

import {
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
  Database,
  ShoppingCart,
  Receipt,
  BarChart3,
  CreditCard
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import SaaSPosWidget from "@/components/projects/widgets/SaaSPosWidget";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: SaaS Core vs Architecture ───────────── */
const saasCoreFeatures = [
  {
    icon: ShoppingCart,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "pos-core",
    title: { en: "Interactive Touchscreen POS System", es: "Punto de Venta Táctil e Interactivo" },
    desc: {
      en: "A robust retail checkout interface optimized for touchscreen monitors and browser tablets, supporting rapid cash register shifts, barcode entry, and offline sync resilience.",
      es: "Interfaz de caja optimizada para pantallas táctiles de retail y tablets, con apertura/cierre de caja ágil, lectura de códigos de barra y sincronización resiliente fuera de línea.",
    },
  },
  {
    icon: Layers,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "inventory-recipes",
    title: { en: "Advanced Inventory & Recipes Management", es: "Gestión de Inventario y Recetas" },
    desc: {
      en: "Real-time multi-location stock control featuring automated low-stock alarms, supplier purchase tracking, and component recipe breakdown for raw material tracking.",
      es: "Control de stock en tiempo real para múltiples bodegas, con alarmas de stock mínimo, órdenes de compra a proveedores y desglose detallado de recetas e insumos.",
    },
  },
  {
    icon: BarChart3,
    color: "#6366F1",
    glow: "rgba(99,102,241,0.18)",
    key: "quotes-commercial",
    title: { en: "Commercial Pipeline & Quotations", es: "Gestión Comercial y Cotizaciones" },
    desc: {
      en: "Unified pipeline for generating client quotations, managing purchase orders, administering credit limits, and updating dynamic, tier-based price lists.",
      es: "Módulo unificado para emitir cotizaciones comerciales, gestionar órdenes de compra, administrar líneas de crédito a clientes y actualizar listas de precios dinámicas.",
    },
  },
];

const archFeatures = [
  {
    icon: Database,
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.18)",
    key: "multitenant-provisioning",
    title: { en: "Automated Multi-Tenant Provisioning", es: "Aprovisionamiento Multitenant Automático" },
    desc: {
      en: "High-scale server architecture. Automatically creates an isolated database and sets up a dedicated client subdomain in seconds when a new company registers.",
      es: "Arquitectura de base de datos aislada a gran escala. Aprovisiona de forma automática un subdominio dedicado y base de datos independiente para cada cliente al registrarse en segundos.",
    },
  },
  {
    icon: Receipt,
    color: "#34D399",
    glow: "rgba(52,211,153,0.18)",
    key: "dte-invoicing",
    title: { en: "SII-Compliant Electronic Invoicing (DTE)", es: "Facturación Electrónica Legal (DTE Chile)" },
    desc: {
      en: "Full compliance with Chilean tax standards. Integrates certified digital signature libraries for automated boletas, facturas, and guías de despacho sent directly to the SII.",
      es: "Integración directa con los estándares del SII de Chile. Emisión automatizada de boletas, facturas y guías de despacho firmadas digitalmente para cumplimiento normativo chileno.",
    },
  },
  {
    icon: CreditCard,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "gateway-orchestration",
    title: { en: "Subscription Gateway Orchestration", es: "Pasarela y Suscripciones Stripe & Transbank" },
    desc: {
      en: "Integrated automated billing cycles combining Stripe (international recurrences) and Transbank Webpay APIs (local Chilean payments) for flexible subscription plans.",
      es: "Ciclos de facturación y cobro recurrentes automatizados, integrando las APIs de Stripe (internacional) y Transbank Webpay (Chile) para planes de suscripción flexibles.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Users,
    color: "#818CF8",
    key: "tenant-reg",
    title: { en: "Company Onboarding", es: "Registro e Incorp." },
    desc: { en: "New SME registers. System automatically allocates subdomain and database.", es: "Nueva Pyme se registra. El sistema aprovisiona subdominio y base de datos automáticamente." },
  },
  {
    num: "02",
    icon: Layers,
    color: "#A855F7",
    key: "inventory-setup",
    title: { en: "Inventory Sync", es: "Configuración de Inventario" },
    desc: { en: "Importer logs products, active recipe ingredients, and supplier lists.", es: "El cliente ingresa stock de productos, insumos de recetas y listas de proveedores." },
  },
  {
    num: "03",
    icon: ShoppingCart,
    color: "#6366F1",
    key: "pos-sale",
    title: { en: "Touch POS Checkout", es: "Venta en Caja Táctil" },
    desc: { en: "Cashier logs sales, handles barcode items, and triggers payment gateway.", es: "El cajero registra la venta en la interfaz táctil, procesando efectivo o tarjetas." },
  },
  {
    num: "04",
    icon: Receipt,
    color: "#34D399",
    key: "dte-issue",
    title: { en: "Legal Invoicing (DTE)", es: "Factura Electrónica DTE" },
    desc: { en: "System issues signed boleta or factura XML, synced with Chile SII.", es: "El sistema firma digitalmente el XML de boleta o factura y lo transmite al SII de Chile." },
  },
  {
    num: "05",
    icon: BarChart3,
    color: "#F59E0B",
    key: "realtime-kpis",
    title: { en: "SaaS KPI Dashboard", es: "Analíticas Gerenciales" },
    desc: { en: "SME owner tracks real-time sales pipelines, profit margins, and debts.", es: "El dueño de la Pyme analiza márgenes de ganancia, stock e informes comerciales en vivo." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "SaaS Frontend Core", es: "Ecosistema Frontend SaaS" },
    icon: Monitor,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.15)",
    techs: [
      { name: "Vue.js", role: { en: "Reactive admin dashboard & sales interfaces", es: "Panel administrativo reactivo y pantallas de ventas" } },
      { name: "Laravel Backpack", role: { en: "Rapid modular backend admin scaffolds", es: "Estructuras rápidas para paneles de administración" } },
    ],
  },
  {
    group: { en: "Tenant Architecture & Cloud", es: "Arquitectura Multitenant y Servidores" },
    icon: Server,
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.15)",
    techs: [
      { name: "Laravel", role: { en: "Automated tenant provisioning & legal DTE", es: "Aprovisionamiento automático de tenants e IVA/DTE" } },
      { name: "MySQL DB", role: { en: "Isolated relational schemas per client", es: "Esquemas de bases de datos aislados por empresa" } },
      { name: "Linux Apache", role: { en: "Dynamic subdomain routing configuration", es: "Enrutamiento dinámico de subdominios de cliente" } },
    ],
  },
  {
    group: { en: "Integrations & APIs", es: "APIs e Integraciones" },
    icon: Plug,
    color: "#34D399",
    glow: "rgba(52,211,153,0.15)",
    techs: [
      { name: "Stripe API", role: { en: "Automated subscription recurrence cycles", es: "Cobros recurrentes y planes de suscripción" } },
      { name: "Transbank Webpay", role: { en: "Local Chilean credit/debit payments", es: "Pagos locales con tarjetas de crédito/débito Chile" } },
      { name: "DTE Legal Library", role: { en: "XML digital signatures & SII connections", es: "Firma digital de documentos XML y conexión SII" } },
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
      { icon: Monitor, label: { en: "Vue.js SaaS Portal", es: "Portal SaaS Vue.js" }, sub: { en: "Tenant Settings · Reports · Stocks", es: "Ajustes de Tenant · Reportes · Inventario" }, accent: false },
      { icon: ShoppingCart, label: { en: "React Touch POS", es: "POS Táctil React" }, sub: { en: "Cashier Shift · Offline resilient · Barcode", es: "Turno de caja · Resiliencia offline · Códigos de barra" }, accent: true },
    ],
  },
  {
    layer: { en: "Multi-Tenant SaaS API", es: "Capa API Multitenant SaaS" },
    icon: Server,
    color: "#38BDF8",
    nodes: [
      { icon: Monitor, label: { en: "Laravel Multitenant Core", es: "Laravel Multitenant Core" }, sub: { en: "Dynamic Subdomain Router · DTE Signed XML", es: "Enrutador de subdominios · Firma XML para DTE" }, accent: false },
      { icon: LayoutDashboard, label: { en: "Laravel Backpack Admin", es: "Laravel Backpack Admin" }, sub: { en: "Super Admin Platform · Billing Cycles", es: "Panel Super-Admin · Ciclos de facturación" }, accent: false },
    ],
  },
  {
    layer: { en: "Isolated Infrastructure", es: "Infraestructura Aislada" },
    icon: Link2,
    color: "#34D399",
    nodes: [
      { name: "Stripe API", color: "#6366F1", sub: { en: "Subscription Billing", es: "Facturación de Suscripción" } },
      { name: "Transbank Webpay", color: "#F59E0B", sub: { en: "Chilean credit cards", es: "Tarjetas de crédito Chile" } },
      { name: "SII WebServices", color: "#10B981", sub: { en: "Tax documents registry", es: "Registro tributario SII" } },
      { name: "MySQL DB per Tenant", color: "#38BDF8", sub: { en: "Isolated client data", es: "Datos de clientes aislados" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Web Frontend", es: "Web Frontend" },
    platformColor: "#818CF8",
    icon: ShoppingCart,
    title: { en: "Touchscreen Retail POS", es: "Punto de Venta Táctil (POS)" },
    desc: {
      en: "Modern and interactive point-of-sale layout optimized for touchscreen monitors on browser-tablets, with barcode reading and cashier shift controls.",
      es: "Interfaz táctil e interactiva de punto de venta optimizada para monitores y tablets, con control de turnos de caja y lectura por código de barras.",
    },
    bullets: [
      { en: "Cash registers opening & closures shifts", es: "Apertura y cierre rápido de turnos de caja" },
      { en: "Barcode items grid list support", es: "Compatibilidad con lectura de códigos de barra" },
      { en: "SaaS dynamic checkout with cart details", es: "Detalles del carrito y cobro integrado" },
      { en: "Offline resilience cache fallback", es: "Caché fuera de línea para evitar paradas" },
    ],
  },
  {
    platform: { en: "Web Frontend", es: "Web Frontend" },
    platformColor: "#A855F7",
    icon: Layers,
    title: { en: "Inventory & Recipe Controller", es: "Control de Inventario y Recetas" },
    desc: {
      en: "Comprehensive inventory management panel allowing merchants to control stocks, handle low-stock alarms, and set raw material recipes.",
      es: "Panel avanzado de gestión de inventario para controlar existencias, activar alarmas de stock crítico y definir recetas o insumos.",
    },
    bullets: [
      { en: "Multi-warehouse real-time stocks tracking", es: "Control de existencias multi-bodega en vivo" },
      { en: "Alarms threshold for low inventory stock", es: "Límites y alarmas de inventario crítico" },
      { en: "Recipe components insumos raw tracking", es: "Desglose de insumos y recetas por producto" },
      { en: "Supplier listings purchase management", es: "Gestión de compras y contacto con proveedores" },
    ],
  },
  {
    platform: { en: "Web Service API", es: "Web Service API" },
    platformColor: "#34D399",
    icon: Receipt,
    title: { en: "Chilean DTE Legal Invoicing (SII)", es: "Factura Electrónica Legal DTE (SII Chile)" },
    desc: {
      en: "Automated electronic invoicing API generating digitally signed XML documents and transmitting boletas and facturas directly to the SII Chile database.",
      es: "API arancelaria y fiscal chilena. Genera XML firmados digitalmente para emitir boletas, facturas y guías de despacho autorizadas ante el SII.",
    },
    bullets: [
      { en: "XML digital signature certifications", es: "Firma y certificación digital de documentos XML" },
      { en: "Direct connection with SII WebServices", es: "Conexión directa con WebServices del SII" },
      { en: "Boletas, facturas & guías automation", es: "Automatización de boletas, facturas y guías" },
      { en: "Legal compliance Chilean taxation rules", es: "Cumplimiento legal tributario de Chile" },
    ],
  },
  {
    platform: { en: "Web SaaS", es: "Web SaaS" },
    platformColor: "#38BDF8",
    icon: Server,
    title: { en: "Automated Subscription Portal", es: "Portal Multitenant de Suscripciones" },
    desc: {
      en: "Centralized admin panel allowing company super-admins to configure plan structures, recurrent payment frequencies and manage client subdomains.",
      es: "Administrador de suscripciones y tenants. Aprovisiona subdominios, bases de datos aisladas e integra pasarelas recurrentes de cobro.",
    },
    bullets: [
      { en: "Automated subdomain and isolated DB setup", es: "Creación automática de subdominios y DBs aisladas" },
      { en: "Stripe recurring billing international plans", es: "Cobros recurrentes con planes Stripe" },
      { en: "Transbank Webpay local credit card validation", es: "Pagos de tarjeta locales vía Transbank Webpay" },
      { en: "Client tenant suspension & activations logs", es: "Bitácora de activaciones y suspensión de clientes" },
    ],
  },
];

/* ─── Product Panels ───────────────────────────────────── */
const webPanels = [
  {
    src: "/img/kpitan/Kpitan_multitenant.png",
    url: "admin.kpitan.cl/companies",
    label: { en: "SaaS Tenant Portal — Centralized management of client companies, subdomains and subscriptions", es: "Portal Multitenant SaaS — Panel Super-Admin de empresas clientes, subdominios y suscripciones" },
    featured: true,
  },
  {
    src: "/img/kpitan/kpitan_pos_interface.png",
    url: "cafe-del-valle.kpitan.cl/pos",
    label: { en: "Touchscreen POS Checkout — Retail touchscreen layout showing active product grid and payment selectors", es: "Punto de Venta Táctil (POS) — Pantalla optimizada para cajeros con cuadrícula de categorías y checkout de cobro" },
    featured: false,
  },
  {
    src: "/img/kpitan/kpitan_inventory.png",
    url: "cafe-del-valle.kpitan.cl/inventory",
    label: { en: "Inventory Management — Full control of stocks, product variants, alert parameters, and purchase orders", es: "Control de Inventario — Panel de stock, variantes de producto, alertas críticas y órdenes de compra" },
    featured: false,
  },
  {
    src: "/img/kpitan/kpitan-pedidos.png",
    url: "cafe-del-valle.kpitan.cl/orders",
    label: { en: "Order Registry — Consolidated tracking of retail sales, billing details and statuses", es: "Control de Ventas — Monitoreo consolidado de pedidos de caja, montos y estados de entrega" },
    featured: false,
  },
  {
    src: "/img/kpitan/DTE.png",
    url: "cafe-del-valle.kpitan.cl/dte/invoices",
    label: { en: "Electronic Invoicing (DTE) — Complete legal documentation issued and legally transmitted to Chile SII", es: "Facturación Electrónica (DTE) — Módulo legal de documentos tributarios firmados digitalmente para el SII Chile" },
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function KpitanProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Cinematic Hero ────────────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#818CF8" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(129, 140, 248, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(56, 189, 248, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#818CF8", border: "1px solid rgba(129, 140, 248, 0.25)", background: "rgba(129, 140, 248, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#818CF8" }} />
            {t({ en: "Multi-Tenant SaaS & Touch POS", es: "SaaS Multitenant y POS Táctil" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Enterprise retail management built for SMEs",
              es: "Gestión comercial de nivel corporativo diseñada para PYMEs",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A robust multi-tenant SaaS platform built for TWGroup Chile. Houses a fully interactive touchscreen retail point-of-sale (POS) combined with a database-isolated core. Automatically provisions subdomains and secure MySQL schemas per client company, fully integrated with Stripe, Transbank Webpay, and Chilean SII electronic invoicing (DTE).",
              es: "Plataforma SaaS multitenant para la gestión integral de PYMEs en Chile. Combina un punto de venta táctil (POS) con una arquitectura de datos aislada a nivel de servidor. Aprovisiona subdominios y bases de datos independientes por empresa al instante, integrándose con Stripe, Transbank Webpay y DTE legal.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(129, 140, 248, 0.22), transparent 80%)" }} aria-hidden />

          {/* Laptop frame */}
          <div className="mbe-laptop-wrap">
            <div className="mbe-laptop-bezel" style={{ border: "4px solid #1E293B", background: "#0F172A" }}>
              <div className="mbe-laptop-camera" aria-hidden />
              <div className="mbe-laptop-screen">
                <Image
                  src="/img/kpitan/Kpitan_multitenant.png"
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
                  src="/img/kpitan/kpitan_pos_interface.png"
                  alt={t({ en: "SaaS Touch POS interface", es: "Punto de Venta Táctil SaaS" })}
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
          en: "KPitan SaaS Ecosystem — Super-Admin Tenant Panel + React Touch POS Dashboard, synchronized in real time.",
          es: "Ecosistema KPitan SaaS — Panel de Control de Tenants + Punto de Venta Táctil en React, sincronizados en tiempo real.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables ───────────────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Four production-ready SaaS products deployed end-to-end.", es: "Cuatro productos especializados puestos en producción de extremo a extremo." })}
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

  /* ── 2. Key Features Grid — Separated by SaaS POS & Core vs Multi-Tenant Architecture ── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "ECOSYSTEM CAPABILITIES", es: "CAPACIDADES DEL ECOSISTEMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Architecture structured into highly interactive touch interfaces and robust isolated multi-tenant services.", es: "Arquitectura estructurada en interfaces táctiles altamente interactivas y robustos servicios multitenant aislados." })}
      </p>

      {/* 2a. SaaS POS & Core Experience Block */}
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
          <ShoppingCart size={16} strokeWidth={2.5} />
          {t({ en: "SaaS Retail Experience (Core & POS)", es: "Experiencia Retail SaaS (Punto de Venta y Core)" })}
        </h4>
        <div className="mbe-features-grid">
          {saasCoreFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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

      {/* 2b. Multi-Tenant Architecture Block */}
      <div style={{ marginTop: "48px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#38BDF8",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Server size={16} strokeWidth={2.5} />
          {t({ en: "Multi-Tenant Architecture & Integrations (Backend & Cloud)", es: "Arquitectura Multitenant e Integraciones (Backend y Servidores)" })}
        </h4>
        <div className="mbe-features-grid">
          {archFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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

  /* ── 3. Product Surface — Web Screens ────────────────── */
  const productSurface = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "PRODUCT SURFACE", es: "SUPERFICIE DEL PRODUCTO" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "24px" }}>
        {t({ en: "Complete administrative and retail layouts built with Vue.js, React and Laravel.", es: "Entornos completos de retail y administración construidos en Vue.js, React y Laravel." })}
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
    </section>
  );

  /* ── 4. User Journey Pipeline ─────────────────────────── */
  const journey = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "SAAS WORKFLOW", es: "FLUJO DE TRABAJO SAAS" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "From dynamic client onboarding to real-time OEE sales tracking — 5 connected steps.", es: "Desde el aprovisionamiento del tenant hasta el análisis comercial en vivo — 5 etapas conectadas." })}
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
        {t({ en: "Technologies chosen for multi-database routing speed, checkout responsiveness and scale.", es: "Tecnologías elegidas para velocidad de enrutamiento multi-base, fluidez de caja táctil y escala." })}
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
        {t({ en: "Three interconnected layers: reactive web frontends, multi-tenant Laravel APIs, and multi-gateway databases.", es: "Tres capas interconectadas: frontends web reactivos, APIs de Laravel multitenant e infraestructura aislada." })}
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
                        <div className="mbe-arch-node-icon-wrap" style={{ color: n.accent ? "#818CF8" : "#E2E8F0" }}>
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
