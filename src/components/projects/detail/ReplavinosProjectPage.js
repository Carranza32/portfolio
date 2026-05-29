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
  Heart,
  Droplet
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Mobile UI vs Calculation Core ────────────── */
const clientFeatures = [
  {
    icon: Smartphone,
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.18)",
    key: "high-contrast-fields",
    title: { en: "Outdoor Sunlight-Optimized UI", es: "Interfaz de Alto Contraste para el Campo" },
    desc: {
      en: "Material Design interface designed specifically for agricultural fields. Incorporates large fonts, bold layouts, and highly contrasting colors to guarantee legibility under intense outdoor sunlight.",
      es: "Interfaz basada en Material Design diseñada para predios agrícolas. Emplea tipografías grandes, cuadrículas de alto contraste y colores intensos para asegurar legibilidad a pleno sol.",
    },
  },
  {
    icon: Monitor,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "cross-platform",
    title: { en: "Flutter Cross-Platform Core", es: "Multiplataforma Flutter Móvil y Web" },
    desc: {
      en: "High-performance codebase. Compiles natively into lightweight Android mobile binaries for field workers and serves a fully responsive desktop Web dashboard for agricultural administrators.",
      es: "Código unificado de alto rendimiento. Compila nativamente en un binario Android liviano para los operarios agrícolas y sirve un portal Web responsivo para administradores prediales.",
    },
  },
  {
    icon: Server,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "offline-sqlite",
    title: { en: "Offline SQLite Database Caching", es: "Base de Datos SQLite Fuera de Línea" },
    desc: {
      en: "Full local data persistence. Agronomists carry out chemical calculations in remote valleys without active network connections, utilizing a local pre-cached index of certified agrochemicals.",
      es: "Tolerancia total fuera de línea. Los agrónomos ejecutan simulaciones químicas en valles remotos sin señal, utilizando una base de datos local SQLite precargada con agroquímicos del SAG.",
    },
  },
];

const backendFeatures = [
  {
    icon: Zap,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "safety-path",
    title: { en: "Dynamic Safe Re-Entry Solver", es: "Algoritmo de Tiempos de Resguardo" },
    desc: {
      en: "Mathematical calculation core that estimates the minimum days needed between pesticide spraying and vineyard harvesting, complying with safety thresholds and protecting field workers.",
      es: "Algoritmo matemático que calcula la ventana mínima en días entre la fumigación química y la cosecha o ingreso seguro, previniendo intoxicaciones y resguardando la inocuidad.",
    },
  },
  {
    icon: Droplet,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "chemical-dosage",
    title: { en: "Chemical Active Ingredients Adjuster", es: "Ajuste de Dosis e Ingredientes Activos" },
    desc: {
      en: "Enables precise input of pesticide active compounds, concentration percentages, and dosage volumes, automatically adjusting safety windows based on red/green grape varieties.",
      es: "Permite ingresar compuestos químicos, concentración y volumen aplicado, recalculando automáticamente las ventanas de seguridad según la variedad de uva y destino tinto o blanco.",
    },
  },
  {
    icon: ShieldCheck,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "compliance-safeguards",
    title: { en: "Chilean SAG Legal Compliance", es: "Cumplimiento de Límites SAG Chile" },
    desc: {
      en: "Strict alignment with Chilean Agricultural Service (SAG) standards. Restricts vineyard entry, alerts operators with push countdowns, and generates verified digital security logs.",
      es: "Cumplimiento normativo del Servicio Agrícola y Ganadero de Chile. Bloquea digitalmente predios fumigados, emite cronómetros visuales y genera certificados de inocuidad.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Users,
    color: "#8B5CF6",
    key: "block-setup",
    title: { en: "Predio Registry", es: "Selección del Predio" },
    desc: { en: "Agronomist logs block parameters, active grape variety, and destination vinification type.", es: "El agrónomo selecciona el predio, variedad de cepa y el tipo de vino de destino." },
  },
  {
    num: "02",
    icon: ClipboardList,
    color: "#10B981",
    key: "pesticide-inputs",
    title: { en: "Select Chemical", es: "Ingreso Químico" },
    desc: { en: "Inputs pesticide active chemical compound, concentration details, and spray dose.", es: "Registra el compuesto químico del pesticida, concentración y dosis aplicada." },
  },
  {
    num: "03",
    icon: Zap,
    color: "#F59E0B",
    key: "carestia-estimate",
    title: { en: "Calculate Re-Entry", es: "Estimación de Carencia" },
    desc: { en: "The dynamic engine estimates minimum safe days needed before harvesting begins.", es: "El motor estima en milisegundos los días mínimos de carencia antes de la cosecha." },
  },
  {
    num: "04",
    icon: Clock,
    color: "#EC4899",
    key: "safety-countdown",
    title: { en: "Safety Countdown", es: "Tiempo de Resguardo" },
    desc: { en: "System outputs countdown, locks the block entry status and alerts operators.", es: "El sistema inicia la cuenta regresiva, bloquea el predio y alerta a operarios." },
  },
  {
    num: "05",
    icon: ShieldCheck,
    color: "#0EA5E9",
    key: "harvest-cleared",
    title: { en: "Safe Harvest", es: "Cosecha Segura" },
    desc: { en: "The wait period expires. A safety certificate is generated to approve the grape export.", es: "Vence la carencia. Se emite el certificado de inocuidad para autorizar la cosecha." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Mobile & Web Client (Flutter)", es: "Ecosistema Móvil y Web (Flutter)" },
    icon: Smartphone,
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.15)",
    techs: [
      { name: "Flutter Multi-Platform", role: { en: "Single-codebase native compilation for Android mobile and responsive Web", es: "Código único compilado nativamente para Android móvil y plataformas Web" } },
      { name: "Dart Language", role: { en: "Strictly typed core handling dynamic mathematical and algebraic safety formulas", es: "Lógica tipada estricta para el procesamiento seguro de fórmulas químicas" } },
      { name: "SQLite DB Local", role: { en: "Ultra-fast zero-latency local databases for chemical catalogs inside valleys", es: "Base de datos local SQLite para consultas inmediatas en valles sin cobertura" } },
      { name: "Secure Local Storage", role: { en: "Ciphers operator access credentials and local offline simulation records", es: "Persistencia cifrada local de sesiones e información predial del usuario" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Client Presentation (Flutter)", es: "Capa Cliente (Flutter)" },
    icon: Layers,
    color: "#8B5CF6",
    nodes: [
      { icon: Smartphone, label: { en: "Agronomist Android App", es: "App Agrónomo (Android)" }, sub: { en: "High-contrast chemical calculator · SQLite offline", es: "Calculadora de pesticidas · SQLite fuera de línea" }, accent: true },
      { icon: Monitor, label: { en: "Supervisors Web Portal", es: "Portal Web de Supervisión" }, sub: { en: "Flutter Web App · Spray analytics graphs", es: "Monitoreo de predios · Métricas de carencia" }, accent: false },
    ],
  },
  {
    layer: { en: "Mathematical Solver Core", es: "Capa Lógica y Algoritmos" },
    icon: Server,
    color: "#10B981",
    nodes: [
      { icon: Zap, label: { en: "Dynamic Carestia Engine", es: "Calculador de Carencias" }, sub: { en: "Pesticide composition solver · SAG legal margins", es: "Límites regulatorios SAG · Dosis e insumos" }, accent: true },
      { icon: Clock, label: { en: "Blocks Lock Schedulers", es: "Enrutador de Estados" }, sub: { en: "Spray timestamps · Safety countdown clocks", es: "Bitácora de fumigaciones · Alarmas de reingreso" }, accent: false },
    ],
  },
  {
    layer: { en: "Data & Storage Persistence", es: "Capa de Datos e Infraestructura" },
    icon: Link2,
    color: "#0EA5E9",
    nodes: [
      { name: "SQLite Local DB", color: "#38BDF8", sub: { en: "Agrochemicals list · Chilean SAG rules index", es: "Catálogo de pesticidas · Base legal SAG" } },
      { name: "IndexedDB Web Cache", color: "#10B981", sub: { en: "Offline web local parameters storage", es: "Almacenamiento local del navegador para predios" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Flutter Android / Mobile", es: "App Móvil de Agrónomos" },
    platformColor: "#8B5CF6",
    icon: Smartphone,
    title: { en: "AgriTech Field Calculator", es: "Portal Móvil de Carencias" },
    desc: {
      en: "Highly legible Material Design mobile app built in Flutter. Empowers field engineers to calculate safe re-entry timelines and log spray block records offline.",
      es: "Aplicación móvil Material Design optimizada para predios. Facilita el cálculo del período de carencia, consultas y registros fuera de línea.",
    },
    bullets: [
      { en: "Sunlight-optimized high-contrast grid layouts", es: "Interfaz adaptada al viñedo con visibilidad extrema" },
      { en: "Offline SQLite certified chemical database queries", es: "Consultas offline del catálogo de agroquímicos autorizados" },
      { en: "Instant waiting days mathematical estimations", es: "Cálculo instantáneo matemático de días de resguardo" },
      { en: "Historical spray logs registry by vineyard predio", es: "Bitácora local de fumigación y registro histórico predial" },
    ],
  },
  {
    platform: { en: "Calculation Engine Core", es: "Algoritmo de Inocuidad" },
    platformColor: "#10B981",
    icon: Zap,
    title: { en: "Dynamic Carestia Solver Engine", es: "Calculador Dinámico de Plazos" },
    desc: {
      en: "Dynamic Dart mathematical algorithms. Solves toxic safety timeframes based on active chemical components, dosages, and vinification guidelines.",
      es: "Algoritmos matemáticos en Dart. Estiman los plazos de seguridad basados en la composición química, dosis aplicadas y destino del racimo.",
    },
    bullets: [
      { en: "Strict Chilean SAG legal boundaries mapping rules", es: "Mapeo estricto de los límites legales del SAG de Chile" },
      { en: "Vinification type safety adjustments margins logic", es: "Ajuste dinámico según destino de vinificación (tinto/blanco)" },
      { en: "Visual red flag warnings for unsafe spray dates", es: "Alertas visuales críticas ante infracciones de seguridad" },
      { en: "Agrochemical compositions data updates parser", es: "Procesador parametrizable de dosis y compuestos químicos" },
    ],
  },
  {
    platform: { en: "Flutter Web App", es: "Portal Administrativo Web" },
    platformColor: "#0EA5E9",
    icon: Monitor,
    title: { en: "Central Block Monitoring Console", es: "Consola de Supervisión Web" },
    desc: {
      en: "Desktop responsive Flutter web portal where predio managers audit active spray records, track block statuses, and print PDFs.",
      es: "Portal web de escritorio en Flutter. Permite supervisar predios activos en cuarentena, revisar fechas y exportar reportes de inocuidad.",
    },
    bullets: [
      { en: "Interactive active vineyard blocks status boards", es: "Visualizador interactivo de predios en cuarentena de carencia" },
      { en: "Spray timelines progress analytics reports", es: "Reportes analíticos de fumigaciones y volumen aplicados" },
      { en: "Printable exportable safety certificates (PDF)", es: "Exportador de certificados digitales de reingreso en PDF" },
      { en: "Desktop dashboard view optimized for tablet screens", es: "Diseño optimizado para pantallas de oficina y tablets" },
    ],
  },
];

/* ─── Mobile Panel (The single actual mobile screenshot) ──────── */
const mobilePanels = [
  {
    src: "/img/replavinos/replavinos.jpg",
    label: {
      en: "Replavinos Mobile Client — Sunlight-optimized Android screen running active pesticide safe waiting timeline calculations.",
      es: "Cliente Móvil Replavinos — Interfaz en Android de alta visibilidad ejecutando cálculos matemáticos de períodos de carencia."
    },
    color: "#8B5CF6"
  }
];

const ease = [0.22, 1, 0.36, 1];

export default function ReplavinosProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Immersive AgriTech Mobile Hero ─────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#8B5CF6" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(139, 92, 246, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(16, 185, 129, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#8B5CF6", border: "1px solid rgba(139, 92, 246, 0.25)", background: "rgba(139, 92, 246, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#8B5CF6" }} />
            {t({ en: "AgriTech Food Safety & Flutter App", es: "App AgriTech de Inocuidad y Flutter Mobile" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Safe pesticide re-entry calculations for vineyard predios",
              es: "Cálculo dinámico de períodos de carencia para predios vitivinícolas",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A specialized multi-platform AgriTech application designed in Flutter for the Chilean grape and wine industry (Consorcio I+D, Chile). Empowers agronomists and operators to simulate safe waiting days (período de carencia/resguardo) between pesticide sprays and harvest dates. Features a highly contrasting sunlight-optimized interface, SQLite local databases for remote valleys without signal, and strict compliance with Chilean SAG legal boundaries.",
              es: "Aplicación AgriTech multiplataforma (Android y Web) en Flutter desarrollada para el sector vitivinícola en Chile (Consorcio I+D). Permite a los agrónomos estimar la ventana de seguridad (carencia/resguardo) tras la aplicación de pesticidas. Cuenta con una interfaz ergonómica optimizada para el sol y bases locales SQLite sin conexión a red, alineado a normas del SAG.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(139, 92, 246, 0.22), transparent 80%)" }} aria-hidden />

          {/* Centered Single Phone Presentation */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div className="mbe-phone-bezel" style={{ width: "165px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: "0 24px 50px rgba(0,0,0,0.9), 0 0 30px rgba(139,92,246,0.3)" }}>
              <div className="mbe-phone-notch" aria-hidden />
              <div className="mbe-phone-screen">
                <Image
                  src="/img/replavinos/replavinos.jpg"
                  alt={t({ en: "Replavinos Android mobile client layout", es: "Pantalla de Carencias Predio Replavinos" })}
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
          en: "Replavinos Platform — Flutter AgriTech Client App compiled natively for Android and served on responsive Web portals, aligned with Chilean SAG margins.",
          es: "Plataforma Replavinos — Aplicación AgriTech en Flutter compilada nativamente para Android y Web, alineada con las ventanas de inocuidad SAG de Chile.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables Section ───────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES DEL PROYECTO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Three specialized production products shipped end-to-end to secure food safety.", es: "Tres módulos especializados puestos en producción para asegurar la inocuidad alimentaria." })}
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
        {t({ en: "Outdoor-resilient phone interfaces combined with rigorous toxicity and carestia solver cores.", es: "Interfaces de alta visibilidad para operarios en predio coordinadas con rigurosos motores algorítmicos." })}
      </p>

      {/* 2a. Client Experience Block */}
      <div style={{ marginTop: "36px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#8B5CF6",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Smartphone size={16} strokeWidth={2.5} />
          {t({ en: "Cross-Platform Mobile Experience (Flutter iOS & Android)", es: "Experiencia Multiplataforma (Flutter Android y Web)" })}
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

      {/* 2b. Algorithmic Solver Block */}
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
          {t({ en: "Toxicity Solver Core & Security Rules (Flutter & Web)", es: "Algoritmos Químicos y Control de Carencias (Flutter & Web)" })}
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
      <SectionLabel>{t({ en: "AGRITECH CALCULATION JOURNEY", es: "EL VIAJE DIGITAL DE INOCUIDAD PREDIAL" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({
          en: "How agronomists select blocks, inputs chemical compounds, and dynamically schedules safe grape harvest countdowns.",
          es: "Cómo un agrónomo registra el predio, ingresa componentes de pesticidas y calcula la ventana de carencia para cosechar."
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
        {t({ en: "Topology mapping cross-platform views, caretia algorithms logic, and local database cache databases.", es: "Esquema técnico que detalla la compilación multiplataforma, algoritmos de cálculo e índices SQLite." })}
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
        {t({ en: "Production toolkit selected for cross-platform logic reusability and robust math parsing.", es: "Herramientas de producción elegidas para reutilización de código lógico y solidez algorítmica." })}
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

  /* ── 6. Live Interface Showcase (The actual mobile screenshot) ── */
  const gallerySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "REPLAVINOS FIELD INTERFACE", es: "INTERFAZ DE CAMPO DE REPLAVINOS" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "28px" }}>
        {t({ en: "Explore the real sunlight-optimized application interface developed for grape agronomists.", es: "Explora la captura real optimizada para el sol desarrollada para agrónomos y capataces." })}
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
            <div className="mbe-phone-bezel" style={{ width: "165px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: "0 24px 50px rgba(0,0,0,0.85), 0 0 30px rgba(139,92,246,0.35)" }}>
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
