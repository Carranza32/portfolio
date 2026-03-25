export const projects = [
  // ─── TIER 1 — Proyectos destacados (featured: true) ───

  {
    id: "mbe-ecosystem",
    featured: true,
    order: 1,
    title: {
      en: "MBE Ecosystem",
      es: "MBE Ecosystem",
    },
    category: {
      en: "Enterprise Logistics Platform",
      es: "Plataforma Logística Empresarial",
    },
    client: "Mail Boxes Etc.",
    country: "El Salvador",
    year: "2024–2025",
    tags: ["Web / SaaS", "Mobile / Flutter"],
    badges: {
      en: ["Enterprise", "End-to-End", "AI / OCR"],
      es: ["Empresarial", "End-to-End", "IA / OCR"],
    },
    description: {
      en: "Architected a complete end-to-end logistics platform for a major international franchise. Combines a Flutter mobile app for customers with a SaaS admin panel for operators, fully digitizing package tracking, customs calculations, and last-mile delivery.",
      es: "Arquitecté una plataforma logística End-to-End para una franquicia internacional. Combina una app móvil Flutter para clientes con un panel SaaS para operadores, digitalizando completamente el seguimiento de paquetes, cálculo de impuestos aduanales y entrega de última milla.",
    },
    role: {
      en: "Tech Lead & Senior Full Stack Developer",
      es: "Líder Técnico y Desarrollador Senior Full Stack",
    },
    stack: [
      "Laravel",
      "Flutter",
      "Filament",
      "CyberSource",
      "DHL API",
      "Boxful API",
      "AI / OCR",
      "Laravel Reverb",
      "WebSockets",
    ],
    highlights: {
      en: [
        {
          title: "AI Invoice Parsing",
          desc: "Integrated AI/OCR to auto-extract product data from customer invoices (PDF/images) during pre-alerts.",
        },
        {
          title: "CyberSource Payments",
          desc: "Secure in-app credit card processing plus cash and transfer validation flows.",
        },
        {
          title: "DHL & Boxful APIs",
          desc: "Real-time package tracking with DHL and automated smart-locker dispatching via Boxful.",
        },
        {
          title: "Warehouse Management",
          desc: "Operator app with barcode scanning, rack assignments and QR-code locker deliveries.",
        },
        {
          title: "Customs Tax Engine",
          desc: "Automatic DAI + IVA calculation engine for international package imports.",
        },
      ],
      es: [
        {
          title: "IA para Facturas",
          desc: "IA/OCR para extraer automáticamente datos de facturas en PDF/imágenes durante pre-alertas.",
        },
        {
          title: "Pagos CyberSource",
          desc: "Procesamiento seguro de tarjetas en la app más flujos de pago en efectivo y transferencia.",
        },
        {
          title: "APIs DHL & Boxful",
          desc: "Tracking en tiempo real con DHL y despacho automatizado en casilleros inteligentes Boxful.",
        },
        {
          title: "Gestión de Bodega",
          desc: "App de operador con escaneo de códigos de barra, asignación de racks y entrega por QR.",
        },
        {
          title: "Motor de Impuestos",
          desc: "Cálculo automático de DAI + IVA para importaciones de paquetes internacionales.",
        },
      ],
    },
    stats: [
      { value: "4", label: { en: "Platforms", es: "Plataformas" } },
      { value: "3+", label: { en: "APIs Integrated", es: "APIs Integradas" } },
      { value: "100%", label: { en: "Digital Flow", es: "Flujo Digital" } },
    ],
    images: [],
  },

  {
    id: "global-accessories",
    featured: true,
    order: 2,
    title: { en: "Global Accessories", es: "Global Accessories" },
    category: { en: "Industrial Automation", es: "Automatización Industrial" },
    client: "Global Accessories",
    country: "El Salvador",
    year: "2024–2025",
    tags: ["Web / SaaS", "Mobile / Flutter"],
    badges: {
      en: ["Real-time", "Team Lead", "WebSockets"],
      es: ["Tiempo Real", "Líder de Equipo", "WebSockets"],
    },
    description: {
      en: "Led full development of a production control & traceability system for a manufacturing plant. From barcode scanning on the factory floor to live executive KPI dashboards — managed a team of 2 junior developers under Scrum.",
      es: "Lideré el desarrollo completo de un sistema de control de producción y trazabilidad para una planta de manufactura. Desde escaneo de códigos de barra en piso de planta hasta dashboards gerenciales en vivo — gestioné un equipo de 2 desarrolladores junior bajo Scrum.",
    },
    role: {
      en: "Senior Full Stack Developer & Team Lead",
      es: "Desarrollador Senior Full Stack y Líder de Equipo",
    },
    stack: [
      "Laravel",
      "React",
      "Inertia.js",
      "PrimeReact",
      "Flutter",
      "WebSockets",
      "Docker",
      "JWT",
      "MySQL",
    ],
    highlights: {
      en: [
        {
          title: "Real-time Dashboard",
          desc: "Live KPIs: operator efficiency, active vs. downtime, daily capacity vs. actual output via WebSockets.",
        },
        {
          title: "Production Traceability",
          desc: "Full lifecycle tracking per production order — start to finish with bottleneck detection.",
        },
        {
          title: "Flutter Executive App",
          desc: "Mobile app for management to monitor active POs, KPI charts and daily planning from anywhere.",
        },
        {
          title: "Barcode Time Tracking",
          desc: "Operators register process times and task assignments by scanning barcodes in real time.",
        },
        {
          title: "Custom CRUD Package",
          desc: "Built a Laravel package to auto-generate full CRUD modules + permissions from column definitions.",
        },
      ],
      es: [
        {
          title: "Dashboard en Tiempo Real",
          desc: "KPIs en vivo: eficiencia de operarios, tiempos activos vs. muertos, capacidad diaria vs. producción real.",
        },
        {
          title: "Trazabilidad de Producción",
          desc: "Seguimiento completo del ciclo de vida por orden de producción con detección de cuellos de botella.",
        },
        {
          title: "App Gerencial Flutter",
          desc: "App móvil para que la gerencia monitoree POs activas, gráficos KPI y planificación diaria desde cualquier lugar.",
        },
        {
          title: "Toma de Tiempos por Barcodes",
          desc: "Operarios registran tiempos de proceso y asignaciones escaneando códigos de barra en tiempo real.",
        },
        {
          title: "Paquete CRUD Personalizado",
          desc: "Desarrollé un paquete Laravel para generar módulos CRUD completos + permisos desde definición de columnas.",
        },
      ],
    },
    stats: [
      { value: "2", label: { en: "Devs Led", es: "Devs Liderados" } },
      { value: "3", label: { en: "Apps Built", es: "Apps Creadas" } },
      { value: "Live", label: { en: "WebSockets", es: "WebSockets" } },
    ],
    images: [],
  },

  {
    id: "kpitan",
    featured: true,
    order: 3,
    title: { en: "KPitan", es: "KPitan" },
    category: { en: "SaaS Platform", es: "Plataforma SaaS" },
    client: "TWGroup",
    country: "Chile",
    year: "2021–2023",
    tags: ["Web / SaaS"],
    badges: {
      en: ["Multi-tenant", "POS", "Payments"],
      es: ["Multi-tenant", "POS", "Pagos"],
    },
    description: {
      en: "Multi-tenant SaaS platform for SME business management. Automatically provisions a dedicated subdomain and isolated database per client. Includes POS, inventory, commercial management, electronic invoicing and advanced reporting.",
      es: "Plataforma SaaS multitenant para gestión empresarial de PYMES. Aprovisiona automáticamente un subdominio e base de datos independiente por cliente. Incluye POS, inventario, gestión comercial, facturación electrónica y reportes avanzados.",
    },
    role: {
      en: "Full Stack Developer — Architecture, Backend, Payments & Dashboard",
      es: "Desarrollador Full Stack — Arquitectura, Backend, Pagos y Dashboard",
    },
    stack: [
      "Laravel",
      "Vue.js",
      "Laravel Backpack",
      "Stripe",
      "Transbank",
      "Webpay",
      "MySQL",
    ],
    highlights: {
      en: [
        {
          title: "Automated Tenant Provisioning",
          desc: "Each new company gets its own subdomain and isolated database — zero manual setup.",
        },
        {
          title: "POS + Inventory",
          desc: "Full point-of-sale with cash register flows, stock control, supplier orders and recipe management.",
        },
        {
          title: "Payment Gateways",
          desc: "Stripe, Transbank and Webpay for recurring subscriptions and manual billing cycles.",
        },
        {
          title: "Electronic Invoicing (DTE)",
          desc: "Integrated with certified providers for full legal compliance in the Chilean market.",
        },
        {
          title: "Reporting Dashboard",
          desc: "Real-time panels covering sales, margins, debts, credits and operator productivity.",
        },
      ],
      es: [
        {
          title: "Aprovisionamiento Automático",
          desc: "Cada empresa obtiene su subdominio y base de datos aislada — cero configuración manual.",
        },
        {
          title: "POS + Inventario",
          desc: "Punto de venta completo con flujos de caja, control de stock, pedidos a proveedores y recetas.",
        },
        {
          title: "Pasarelas de Pago",
          desc: "Stripe, Transbank y Webpay para suscripciones recurrentes y ciclos de facturación manual.",
        },
        {
          title: "Facturación Electrónica (DTE)",
          desc: "Integración con proveedores certificados para cumplimiento legal en el mercado chileno.",
        },
        {
          title: "Dashboard de Reportes",
          desc: "Paneles en tiempo real con ventas, márgenes, deudas, créditos y productividad de operarios.",
        },
      ],
    },
    stats: [
      { value: "5+", label: { en: "Modules", es: "Módulos" } },
      {
        value: "4",
        label: { en: "Payment Gateways", es: "Pasarelas de Pago" },
      },
      { value: "∞", label: { en: "Tenants", es: "Tenants" } },
    ],
    images: [],
  },

  {
    id: "wood-chips",
    featured: true,
    order: 4,
    title: { en: "Wood Chips", es: "Wood Chips" },
    category: { en: "Last-mile Logistics", es: "Logística de Última Milla" },
    client: "SoftVi",
    country: "USA 🇺🇸",
    year: "2022–2023",
    tags: ["Web / SaaS", "Mobile / Flutter"],
    badges: {
      en: ["US Client", "GPS", "Stripe + Square"],
      es: ["Cliente USA", "GPS", "Stripe + Square"],
    },
    description: {
      en: "Complete digital ecosystem for wood chip logistics in the US — connecting arborists who need to dispose of chips with users who need them for landscaping. Built simultaneously for iOS, Android and Web.",
      es: "Ecosistema digital completo para logística de astillas de madera en EE.UU. — conecta arboristas que necesitan deshacerse de astillas con usuarios que las necesitan para jardinería. Desarrollado simultáneamente para iOS, Android y Web.",
    },
    role: {
      en: "Full Stack Developer — End-to-end platform development",
      es: "Desarrollador Full Stack — Desarrollo integral de la plataforma",
    },
    stack: [
      "Laravel",
      "Flutter",
      "Stripe",
      "Square",
      "Firebase",
      "Google Maps API",
      "MySQL",
    ],
    highlights: {
      en: [
        {
          title: "Dual-role Mobile Apps",
          desc: "Separate Flutter apps for customers and arborists with tailored flows and GPS tracking.",
        },
        {
          title: "Geolocation & Maps",
          desc: "Google Maps integration for pickup point discovery, route optimization and real-time tracking.",
        },
        {
          title: "Multi-gateway Payments",
          desc: "Stripe and Square for in-app and web payments, supporting direct API and WebPay flows.",
        },
        {
          title: "Push Notifications",
          desc: "Firebase FCM notifications and email alerts for every delivery status change.",
        },
        {
          title: "Full Admin Panel",
          desc: "Laravel backoffice for managing users, orders, pickup points, payments and configuration.",
        },
      ],
      es: [
        {
          title: "Apps de Doble Rol",
          desc: "Apps Flutter separadas para clientes y arboristas con flujos específicos y tracking GPS.",
        },
        {
          title: "Geolocalización y Mapas",
          desc: "Google Maps para descubrir puntos de recolección, optimizar rutas y tracking en tiempo real.",
        },
        {
          title: "Pagos Multi-gateway",
          desc: "Stripe y Square para pagos en app y web, soportando API directa y flujos WebPay.",
        },
        {
          title: "Notificaciones Push",
          desc: "Firebase FCM y alertas por email para cada cambio de estado en el proceso de entrega.",
        },
        {
          title: "Panel Administrativo",
          desc: "Backoffice en Laravel para gestionar usuarios, órdenes, puntos de recolección y pagos.",
        },
      ],
    },
    stats: [
      { value: "5", label: { en: "Platforms", es: "Plataformas" } },
      { value: "2", label: { en: "Payment Gateways", es: "Pasarelas" } },
      { value: "🇺🇸", label: { en: "US Client", es: "Cliente USA" } },
    ],
    images: [],
  },

  // ─── TIER 2 — Grid secundario (featured: false) ───

  {
    id: "ruta-pyme",
    featured: false,
    order: 5,
    title: { en: "Ruta de la Pyme", es: "Ruta de la Pyme" },
    category: { en: "Government Platform", es: "Plataforma de Gobierno" },
    client: "Gobierno de Santiago",
    country: "Chile",
    year: "2022",
    tags: ["Web / SaaS"],
    badges: { en: ["Government", "Laravel"], es: ["Gobierno", "Laravel"] },
    description: {
      en: "Digital platform for the Santiago Government to guide entrepreneurs through business formalization — 100% online, with smart questionnaires and dynamic checklists.",
      es: "Plataforma digital para el Gobierno de Santiago que guía a emprendedores en la formalización de negocios — 100% en línea, con cuestionarios inteligentes y checklists dinámicos.",
    },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    stack: ["Laravel", "Livewire", "Alpine.js", "MySQL"],
    highlights: { en: [], es: [] },
    stats: [],
    images: [],
  },

  {
    id: "autosummit",
    featured: false,
    order: 6,
    title: { en: "Autosummit", es: "Autosummit" },
    category: { en: "E-commerce Platform", es: "Plataforma E-commerce" },
    client: "TWGroup",
    country: "Chile",
    year: "2022",
    tags: ["Web / SaaS"],
    badges: {
      en: ["E-commerce", "CMS", "Laravel"],
      es: ["E-commerce", "CMS", "Laravel"],
    },
    description: {
      en: "Online vehicle sales platform with dynamic catalog, quotation system and full CMS for administrators to manage inventory and page content.",
      es: "Plataforma de venta de vehículos en línea con catálogo dinámico, sistema de cotizaciones y CMS completo para que los administradores gestionen inventario y contenido.",
    },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    stack: ["Laravel", "Blade", "MySQL"],
    highlights: { en: [], es: [] },
    stats: [],
    images: [],
  },

  {
    id: "endolap",
    featured: false,
    order: 7,
    title: { en: "Endolap", es: "Endolap" },
    category: { en: "Healthcare App", es: "App de Salud" },
    client: "TWGroup",
    country: "Chile",
    year: "2022",
    tags: ["Mobile / Flutter"],
    badges: {
      en: ["Healthcare", "Flutter", "Multi-role"],
      es: ["Salud", "Flutter", "Multi-rol"],
    },
    description: {
      en: "Two independent Flutter apps for a medical center — one for patients to book appointments and one for coordinators to manage schedules and assign procedures to medical teams.",
      es: "Dos apps Flutter independientes para un centro médico — una para pacientes para agendar citas y otra para coordinadores para gestionar agendas y asignar procedimientos a equipos médicos.",
    },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    stack: ["Flutter", "Laravel", "MySQL"],
    highlights: { en: [], es: [] },
    stats: [],
    images: [],
  },

  {
    id: "planapp",
    featured: false,
    order: 8,
    title: { en: "PlanApp", es: "PlanApp" },
    category: { en: "Construction Management", es: "Gestión de Obras" },
    client: "TWGroup",
    country: "Chile",
    year: "2022",
    tags: ["Mobile / Flutter"],
    badges: {
      en: ["Construction", "Flutter", "Critical Path"],
      es: ["Construcción", "Flutter", "Ruta Crítica"],
    },
    description: {
      en: "Mobile app for construction sites to track work orders in real time, identify critical paths and generate progress reports for management and project directors.",
      es: "App móvil para obras de construcción que permite rastrear órdenes de trabajo en tiempo real, identificar rutas críticas y generar reportes de avance para gerencia y dirección de obra.",
    },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    stack: ["Flutter", "Laravel", "MySQL"],
    highlights: { en: [], es: [] },
    stats: [],
    images: [],
  },

  {
    id: "huge-forest",
    featured: false,
    order: 9,
    title: { en: "Huge Forest", es: "Huge Forest" },
    category: { en: "Environmental App", es: "App Medioambiental" },
    client: "TWGroup",
    country: "Chile",
    year: "2022",
    tags: ["Mobile / Flutter"],
    badges: {
      en: ["Mobile", "Flutter", "Environmental"],
      es: ["Móvil", "Flutter", "Ambiental"],
    },
    description: {
      en: "Mobile app for landowners to request financing for reforestation projects — with photo uploads, status notifications and an admin panel to review and approve applications.",
      es: "App móvil para propietarios de terrenos que solicitan financiamiento para proyectos de reforestación — con carga de fotos, notificaciones de estado y panel admin para revisar y aprobar solicitudes.",
    },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    stack: ["Flutter", "Laravel", "MySQL"],
    highlights: { en: [], es: [] },
    stats: [],
    images: [],
  },

  {
    id: "replavinos",
    featured: false,
    order: 10,
    title: { en: "Replavinos", es: "Replavinos" },
    category: { en: "AgriTech App", es: "App AgriTech" },
    client: "Consorcio I+D",
    country: "Chile",
    year: "2022",
    tags: ["Mobile / Flutter"],
    badges: {
      en: ["Flutter", "AgriTech", "Web + Mobile"],
      es: ["Flutter", "AgriTech", "Web + Móvil"],
    },
    description: {
      en: "Flutter app (Android + Web) for vineyard producers to calculate pesticide protection periods — helping ensure food safety and compliance with agricultural regulations.",
      es: "App Flutter (Android + Web) para productores vitivinícolas que calcula períodos de resguardo de plaguicidas — ayudando a garantizar la seguridad alimentaria y el cumplimiento de normativas agrícolas.",
    },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    stack: ["Flutter", "Dart"],
    highlights: { en: [], es: [] },
    stats: [],
    images: [],
  },
];

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
export const getSecondaryProjects = () =>
  projects.filter((p) => !p.featured).sort((a, b) => a.order - b.order);
export const getProjectsByTag = (tag) =>
  projects.filter((p) => p.tags.includes(tag));
