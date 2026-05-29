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
  Heart
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/* ─── Key Features: Patient App vs Coordinator App ───────────── */
const patientFeatures = [
  {
    icon: Heart,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.18)",
    key: "patient-onboarding",
    title: { en: "Patient Clinical Profiles & Onboarding", es: "Perfil Clínico y Registro de Pacientes" },
    desc: {
      en: "Secure patient profile setup. Allows patients to record their medical history, allergy listings, emergency contacts, and authenticate seamlessly through encrypted local state tokens.",
      es: "Registro clínico digital seguro. Los pacientes gestionan antecedentes médicos, alergias y contactos de emergencia, autenticándose con tokens cifrados en el dispositivo.",
    },
  },
  {
    icon: Calendar,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
    key: "appointment-booking",
    title: { en: "Dynamic Exam Scheduling Timeline", es: "Agendador Dinámico de Exámenes" },
    desc: {
      en: "Allows patients to browse specialized endoscopy and diagnostic exam categories, query real-time free slots, and book clinical appointments inside a sleek vertical timeline layout.",
      es: "Navegación de exámenes diagnósticos especializados (endoscopias, colonoscopias). El usuario consulta horarios libres en tiempo real y agenda citas mediante un flujo interactivo.",
    },
  },
  {
    icon: Zap,
    color: "#EC4899",
    glow: "rgba(236,72,153,0.18)",
    key: "push-reminders",
    title: { en: "Firebase FCM Push Notifications", es: "Recordatorios Automáticos vía Push FCM" },
    desc: {
      en: "Automated alert reminder system powered by Firebase Cloud Messaging. Sends dynamic push notifications to patients about prep guidelines, scheduled dates, and cancellation requests.",
      es: "Sistema automatizado de notificaciones push vía Firebase FCM. Envía recordatorios preventivos sobre pautas de preparación pre-examen, fechas y confirmaciones.",
    },
  },
];

const coordinatorFeatures = [
  {
    icon: Layers,
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    key: "or-management",
    title: { en: "Operating Room & Surgical Scheduler", es: "Gestión de Quirófanos y Pabellones" },
    desc: {
      en: "High-level overview interface for medical coordinators. Monitors active operating rooms, schedules diagnostic procedures, and organizes daily clinic throughput on a mobile-first dashboard.",
      es: "Panel táctil para coordinadores médicos. Permite monitorear la disponibilidad de pabellones en vivo, calendarizar cirugías y controlar la fluidez operativa diaria.",
    },
  },
  {
    icon: Users,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    key: "staff-allocation",
    title: { en: "Clinical Staff & Nurse Allocation", es: "Asignación de Personal y Turnos de Guardia" },
    desc: {
      en: "Enables clinical coordinators to dynamically allocate surgeon pools, nurse practitioners, and TENS personnel to active procedures, preventing medical workload collisions.",
      es: "Módulo para distribuir equipos de salud. El coordinador asigna cirujanos, anestesistas, enfermeras y TENS a quirófanos específicos, previniendo choques de horarios.",
    },
  },
  {
    icon: Activity,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.18)",
    key: "realtime-sync",
    title: { en: "Zero-Lag REST Synchronization API", es: "Sincronización en Tiempo Real sin Latencia" },
    desc: {
      en: "Exposes secure Laravel endpoints to synchronize the dual Flutter client apps. Prevents double-booking of surgical bays and updates personnel schedules in milliseconds.",
      es: "Arquitectura Laravel REST API optimizada. Sincroniza ambas aplicaciones en milisegundos, previniendo dobles reservas de quirófanos o solapamiento de turnos médicos.",
    },
  },
];

/* ─── Journey Steps ────────────────────────────────────── */
const journeySteps = [
  {
    num: "01",
    icon: Users,
    color: "#A855F7",
    key: "patient-reg",
    title: { en: "Patient Registry", es: "Registro del Paciente" },
    desc: { en: "Patient downloads app, creates a secure account, and inputs basic clinical parameters.", es: "El paciente descarga la app, crea su cuenta y detalla sus antecedentes clínicos." },
  },
  {
    num: "02",
    icon: Calendar,
    color: "#0EA5E9",
    key: "exam-booking",
    title: { en: "Schedule Exam", es: "Reserva de Examen" },
    desc: { en: "Selects endoscopy exam types, picks free slots, and books the appointment instantly.", es: "Selecciona el tipo de endoscopia, busca horarios disponibles y agenda la cita al instante." },
  },
  {
    num: "03",
    icon: Server,
    color: "#10B981",
    key: "surgical-allocation",
    title: { en: "Surgical Allocation", es: "Asignación Quirúrgica" },
    desc: { en: "API maps booking to coordinators app. Staff allocates surgical bay and nurse teams.", es: "La API remite la reserva a la app de coordinación para asignar el quirófano y enfermeras." },
  },
  {
    num: "04",
    icon: Clock,
    color: "#F59E0B",
    key: "live-status-sync",
    title: { en: "Live Status Sync", es: "Monitoreo en Vivo" },
    desc: { en: "Surgeons and coordinators update procedure milestones (preparing, in-progress, recovery).", es: "El equipo médico actualiza el estado de la cirugía (preparación, pabellón, recuperación)." },
  },
  {
    num: "05",
    icon: ShieldCheck,
    color: "#EC4899",
    key: "discharge-registry",
    title: { en: "Discharge & Registry", es: "Alta e Historial" },
    desc: { en: "Exam report is signed. Patient receives medical report and invoice directly in-app.", es: "Se firma la epicrisis y el paciente recibe su informe y receta directo en su app móvil." },
  },
];

/* ─── Tech Stack Groups ────────────────────────────────── */
const stackGroups = [
  {
    group: { en: "Dual Mobile Apps (Flutter)", es: "Ecosistema Móvil Dual (Flutter)" },
    icon: Smartphone,
    color: "#A855F7",
    glow: "rgba(168,85,247,0.15)",
    techs: [
      { name: "Flutter Multi-Platform", role: { en: "Single-codebase native performance compilation for iOS and Android targets", es: "Compilación nativa de alto rendimiento desde código único para iOS y Android" } },
      { name: "Riverpod Architecture", role: { en: "Unidirectional data-flow and state management for complex clinic calendars", es: "Flujo unidireccional y control de estado para el agendamiento y turnos" } },
      { name: "Firebase FCM APIs", role: { en: "Push notifications engine for patient clinical reminders and warnings", es: "Envío instantáneo de recordatorios pre-operatorios a dispositivos de pacientes" } },
      { name: "Secure Storage Key", role: { en: "Encrypted clientside storage of patient credentials and clinical tokens", es: "Cifrado seguro local en el teléfono para credenciales y autenticación" } },
    ],
  },
  {
    group: { en: "Core Backend API", es: "Arquitectura Backend y Datos" },
    icon: Server,
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "Laravel REST Core", role: { en: "MVC framework exposing secure endpoints for double-app clinic sync", es: "Framework MVC que provee APIs REST optimizadas para ambas aplicaciones móviles" } },
      { name: "MySQL DB Relational", role: { en: "Highly secure relational databases for patients, clinic shifts, and OR logs", es: "Esquema relacional estricto para pacientes, turnos médicos y quirófanos" } },
      { name: "Apache Web Server", role: { en: "Secure Linux hosting supporting HIPAA-compliant clinical data encryption", es: "Entorno Linux seguro con cifrado HTTPS estricto para datos de salud" } },
    ],
  },
];

/* ─── Architecture Layers ──────────────────────────────── */
const archLayers = [
  {
    layer: { en: "Dual Client Layer (Flutter)", es: "Capa Cliente Móvil (Flutter)" },
    icon: Layers,
    color: "#A855F7",
    nodes: [
      { icon: Heart, label: { en: "Patient App (iOS/And)", es: "App Paciente (iOS/And)" }, sub: { en: "Appointment Booking · Clinical Timeline History", es: "Agendamiento de Citas · Historial Clínico" }, accent: true },
      { icon: Layers, label: { en: "Coordinator App (iOS/And)", es: "App Coordinador (iOS/And)" }, sub: { en: "Operating Room allocations · Nurse shifts control", es: "Asignación de Quirófanos · Turnos Enfermería" }, accent: false },
    ],
  },
  {
    layer: { en: "Security & API Middleware (Laravel)", es: "Capa API y Seguridad (Laravel)" },
    icon: Server,
    color: "#10B981",
    nodes: [
      { icon: Activity, label: { en: "REST API Gateway", es: "APIs REST Centralizadas" }, sub: { en: "Zero-collision schedule calendar engines", es: "Sincronizador de agendas · Cancelaciones" }, accent: false },
      { icon: ShieldCheck, label: { en: "Staff Role Authorization", es: "Control de Roles Clínicos" }, sub: { en: "Operating permission filters for medical teams", es: "Middleware de acceso seguro para el personal" }, accent: true },
    ],
  },
  {
    layer: { en: "Data & Push Infrastructure", es: "Capa de Datos e Infraestructura" },
    icon: Link2,
    color: "#0EA5E9",
    nodes: [
      { name: "MySQL CliniqueDB", color: "#38BDF8", sub: { en: "Relational Patients · Shift logs · Surgery registries", es: "Pacientes · Turnos clínicos · Quirófanos" } },
      { name: "Firebase FCM Engine", color: "#EC4899", sub: { en: "Patient push notifications scheduling", es: "Envío programado de alertas preventivas" } },
    ],
  },
];

/* ─── Deliverables ─────────────────────────────────────── */
const deliverables = [
  {
    platform: { en: "Flutter iOS / Android", es: "App Móvil de Pacientes" },
    platformColor: "#A855F7",
    icon: Heart,
    title: { en: "Patient Booking Cockpit", es: "Portal Móvil del Paciente" },
    desc: {
      en: "Citizen-facing mobile app for iOS and Android. Allows users to sign up, catalog diagnostic examinations, book slots, and receive preparation warnings.",
      es: "Aplicación móvil para pacientes en iOS y Android. Permite gestionar su ficha, buscar exámenes diagnósticos, agendar citas y recibir notificaciones.",
    },
    bullets: [
      { en: "Comprehensive medical history & clinical profiles setup", es: "Registro seguro de perfiles clínicos e historial médico" },
      { en: "Sleek vertical timeline showing upcoming appointments", es: "Línea de tiempo para visualización interactiva de citas" },
      { en: "Automated pre-exam prep guidelines push updates", es: "Avisos automáticos sobre preparación pre-operatoria" },
      { en: "Secured local login state credentials storage", es: "Inicio de sesión seguro persistente con tokens locales" },
    ],
  },
  {
    platform: { en: "Flutter Mobile / Tablet", es: "App Móvil de Coordinación" },
    platformColor: "#0EA5E9",
    icon: Layers,
    title: { en: "Operating Room Scheduler App", es: "Agendador Táctil de Pabellones" },
    desc: {
      en: "Specialized mobile and tablet dashboard designed for medical personnel to organize daily clinic operating workloads and assign rooms.",
      es: "Aplicación de agendamiento para personal médico. Optimiza la distribución de cirugías, turnos de enfermería y control de pabellones.",
    },
    bullets: [
      { en: "Live operating room availability visual status monitors", es: "Monitoreo en vivo de disponibilidad de pabellones" },
      { en: "Direct surgeon and clinical nurse assigning workflows", es: "Asignación de cirujanos, anestesistas y TENS a citas" },
      { en: "Multi-bay daily clinique workload progress grids", es: "Grillas de avance diario quirúrgico multi-sala" },
      { en: "Preventive filters avoiding personnel double-booking", es: "Filtros de choque de agendas de equipos clínicos" },
    ],
  },
  {
    platform: { en: "Web REST API", es: "Servicio Web REST API" },
    platformColor: "#10B981",
    icon: Server,
    title: { en: "Laravel MVC Integration Core", es: "Núcleo Laravel e Integración" },
    desc: {
      en: "Secure cloud backend API serving relational endpoints to sync both mobile clients, encrypting medical records and handling bookings.",
      es: "API robusta en la nube. Sincroniza de forma segura ambas apps móviles, gestiona las reprogramaciones y encripta datos de pacientes.",
    },
    bullets: [
      { en: "Highly secure MVC database endpoints architecture", es: "Endpoints REST MVC de alto rendimiento y seguridad" },
      { en: "HIPAA-aligned clinical data privacy compliance", es: "Políticas de resguardo de privacidad de datos de salud" },
      { en: "Instant calendar slot allocation SQL logic rules", es: "Enrutador lógico SQL para calendarización libre de colisiones" },
      { en: "Push messaging schedulers triggers (Firebase FCM)", es: "Módulo programador de notificaciones push a Firebase" },
    ],
  },
];

/* ─── Mobile Panels (The two actual screenshots of the apps) ──── */
const mobilePanels = [
  {
    src: "/img/endolap/endolap_login.png",
    label: {
      en: "Patient App — Clean access screen designed in Flutter, allowing secure authentication and profile queries.",
      es: "App de Pacientes — Pantalla de ingreso segura diseñada en Flutter, con acceso a citas e historial médico."
    },
    color: "#A855F7"
  },
  {
    src: "/img/endolap/endolap_register_team.png",
    label: {
      en: "Coordinator App — Dynamic scheduling workflow enabling the assignment of surgical teams (Doctors, TENS, Nurses, Coordinators).",
      es: "App de Coordinación — Flujo de registro y asignación para equipos médicos en quirófano (Cirujanos, TENS, Enfermeras)."
    },
    color: "#0EA5E9"
  }
];

const ease = [0.22, 1, 0.36, 1];

export default function EndolapProjectPage({ project }) {
  const { t } = useLanguage();

  /* ── 1. Immersive Dual-Mobile Hero ────────────────────────── */
  const heroShowcase = (
    <section className="mbe-hero-section" style={{ "--j-color": "#A855F7" }}>
      <div className="mbe-hero-glow mbe-hero-glow--left" style={{ background: "radial-gradient(circle 600px at 20% 30%, rgba(168, 85, 247, 0.15), transparent 100%)" }} aria-hidden />
      <div className="mbe-hero-glow mbe-hero-glow--right" style={{ background: "radial-gradient(circle 600px at 80% 60%, rgba(14, 165, 233, 0.12), transparent 100%)" }} aria-hidden />

      <div className="mbe-hero-inner">
        <motion.div
          className="mbe-hero-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mbe-hero-eyebrow" style={{ color: "#A855F7", border: "1px solid rgba(168, 85, 247, 0.25)", background: "rgba(168, 85, 247, 0.08)" }}>
            <Zap size={13} strokeWidth={2.5} style={{ color: "#A855F7" }} />
            {t({ en: "Healthcare Dual Flutter Mobile Apps", es: "Apps Móviles Duales en Flutter para Salud" })}
          </span>

          <h2 className="mbe-hero-headline">
            {t({
              en: "Specialized clinical schedulers and patient timelines",
              es: "Agendador clínico especializado y línea de tiempo para pacientes",
            })}
          </h2>

          <p className="mbe-hero-sub">
            {t({
              en: "A robust mobile clinical ecosystem designed for specialized medical centers. Consists of two independent connected Flutter mobile apps running on iOS and Android: a Patient Booking App to schedule endoscopy exams and check timelines, and a Coordinator App allowing clinic staff to organize operating rooms, allocate nurse teams, and plan surgical shifts, synced via a secure Laravel REST API.",
              es: "Ecosistema móvil clínico para centros de diagnóstico especializados. Consta de dos aplicaciones móviles Flutter independientes y conectadas para iOS y Android: una App para Pacientes (agendamiento de exámenes e historial) y una App de Coordinación Médica (distribución de quirófanos, turnos de guardia y enfermería), enlazadas mediante una REST API en Laravel.",
            })}
          </p>
        </motion.div>

        <motion.div
          className="mbe-hero-devices"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="mbe-device-glow" style={{ background: "radial-gradient(circle 500px at center, rgba(168, 85, 247, 0.22), transparent 80%)" }} aria-hidden />

          {/* Dual Phone Presentation */}
          <div style={{ display: "flex", gap: "28px", justifyContent: "center", alignItems: "center", position: "relative" }}>
            
            {/* Phone 1: Patient Login App */}
            <div style={{ position: "relative", zIndex: 3 }}>
              <div className="mbe-phone-bezel" style={{ width: "160px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: "0 24px 50px rgba(0,0,0,0.9), 0 0 30px rgba(168,85,247,0.3)" }}>
                <div className="mbe-phone-notch" aria-hidden />
                <div className="mbe-phone-screen">
                  <Image
                    src="/img/endolap/endolap_login.png"
                    alt={t({ en: "Patient App Login Screen", es: "Pantalla de Login App Paciente" })}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="160px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Phone 2: Coordinator Register Team App */}
            <div style={{ position: "relative", zIndex: 2, marginTop: "40px" }}>
              <div className="mbe-phone-bezel" style={{ width: "160px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: "0 24px 50px rgba(0,0,0,0.9), 0 0 30px rgba(14,165,233,0.3)" }}>
                <div className="mbe-phone-notch" aria-hidden />
                <div className="mbe-phone-screen">
                  <Image
                    src="/img/endolap/endolap_register_team.png"
                    alt={t({ en: "Coordinator App Surgical Schedulers", es: "Pantalla de Agendamiento Cirugías" })}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="160px"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <p className="mbe-hero-caption">
        {t({
          en: "Endolap Ecosystem — Dual Flutter Apps (Patient Front & Coordinator Dashboard) synchronized in real-time, compiled for iOS and Android.",
          es: "Ecosistema Endolap — Aplicaciones duales en Flutter (Portal Paciente y Panel Coordinador) sincronizadas en tiempo real para iOS y Android.",
        })}
      </p>
    </section>
  );

  /* ── 1b. Deliverables Section ───────────────────────────── */
  const deliverablesSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "DELIVERABLES", es: "ENTREGABLES DEL PROYECTO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Three production products delivered end-to-end to digitize diagnostic clinic workflows.", es: "Tres productos de producción entregados para digitalizar los flujos de exámenes clínicos." })}
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

  /* ── 2. Capabilities — Patient vs Coordinator ───────────── */
  const featuresSection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "ECOSYSTEM CAPABILITIES", es: "CAPACIDADES DEL ECOSISTEMA" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({ en: "Sleek patient-facing UI grids and robust administrative operating room managers.", es: "Interfaces pulidas orientadas a pacientes y robustos administradores móviles de quirófanos." })}
      </p>

      {/* 2a. Patient App Block */}
      <div style={{ marginTop: "36px" }}>
        <h4 style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#A855F7",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <Smartphone size={16} strokeWidth={2.5} />
          {t({ en: "Patient Appointment Application (Flutter Mobile)", es: "Aplicación Móvil de Pacientes (Flutter Mobile)" })}
        </h4>
        <div className="mbe-features-grid">
          {patientFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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

      {/* 2b. Coordinator App Block */}
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
          <Smartphone size={16} strokeWidth={2.5} />
          {t({ en: "Clinical Staff & Schedulers Application (Flutter)", es: "Aplicación Móvil de Coordinación (Flutter Mobile & Tablet)" })}
        </h4>
        <div className="mbe-features-grid">
          {coordinatorFeatures.map(({ icon: Icon, color, glow, key, title, desc }, i) => (
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
      <SectionLabel>{t({ en: "CLINICAL REGISTRATION JOURNEY", es: "EL VIAJE DIGITAL DE AGENDAMIENTO CLÍNICO" })}</SectionLabel>
      <p className="mbe-features-sub">
        {t({
          en: "How patient reservations trigger operating room schedules, medical staff assigns, and medical reports discharges.",
          es: "Cómo la reserva del paciente coordina el quirófano, asigna enfermeras, turnos de TENS y emite recetas clínicas."
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
        {t({ en: "Secure healthcare database routing, role-based tokens authorization, and push notifications gateway.", es: "Enrutamiento seguro de bases de datos de salud, tokenización y encriptación de identidades clínicas." })}
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
        {t({ en: "Dual client multi-platform toolset optimized for native compilation and solid clinical safety.", es: "Herramientas elegidas para rendimiento nativo e integridad estructurada en datos médicos." })}
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

  /* ── 6. Live Mobile Interfaces Showcase (Two actual images) ── */
  const gallerySection = (
    <section className="project-detail-section">
      <SectionLabel>{t({ en: "MOBILE INTERFACE SURFACE", es: "SUPERFICIE DE LA INTERFAZ MÓVIL" })}</SectionLabel>
      <p className="mbe-features-sub" style={{ marginBottom: "28px" }}>
        {t({ en: "Browse the actual dual Flutter apps developed for patient entry and surgical shifts assignment.", es: "Explora capturas de pantalla reales del ecosistema móvil para el agendamiento y control de quirófanos." })}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center", marginTop: "32px" }}>
        {mobilePanels.map((panel, i) => (
          <motion.div
            key={i}
            className="mbe-panel-card"
            style={{ maxWidth: "340px", flex: "1 1 300px" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: i * 0.08 }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="mbe-phone-bezel" style={{ width: "160px", border: "4px solid #1E293B", background: "#0F172A", boxShadow: `0 24px 50px rgba(0,0,0,0.85), 0 0 30px ${panel.color}33` }}>
                <div className="mbe-phone-notch" aria-hidden />
                <div className="mbe-phone-screen">
                  <Image
                    src={panel.src}
                    alt={t(panel.label)}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="160px"
                  />
                </div>
              </div>
            </div>
            <span className="mbe-panel-label" style={{ fontSize: "11px", color: "#94A3B8", marginTop: "16px", display: "block", textAlign: "center", lineHeight: "1.4" }}>
              {t(panel.label)}
            </span>
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
