import {
  siAlpinedotjs,
  siAndroid,
  siDart,
  siDhl,
  siDocker,
  siDotnet,
  siFilament,
  siFirebase,
  siFlutter,
  siGithubactions,
  siGooglemaps,
  siInertia,
  siIos,
  siJira,
  siJsonwebtokens,
  siLaravel,
  siLivewire,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPrimereact,
  siPython,
  siReact,
  siScrumalliance,
  siSocketdotio,
  siSqlite,
  siSquare,
  siStripe,
  siTailwindcss,
  siTrello,
  siVuedotjs,
} from "simple-icons";

/**
 * Claves = texto exacto en data/stack.js.
 * Si falta una clave, TechBrandIcon usa Lucide genérico o icono por nombre especial.
 */
export const TECH_ICONS = {
  Laravel: siLaravel,
  PHP: siPhp,
  "C# .NET Core": siDotnet,
  Java: siOpenjdk,
  Python: siPython,
  "Node.js": siNodedotjs,
  Flutter: siFlutter,
  Dart: siDart,
  Android: siAndroid,
  iOS: siIos,
  "Google Maps": siGooglemaps,
  "Firebase FCM": siFirebase,
  React: siReact,
  "Vue.js": siVuedotjs,
  "Inertia.js": siInertia,
  "Tailwind CSS": siTailwindcss,
  "Alpine.js": siAlpinedotjs,
  PrimeReact: siPrimereact,
  Livewire: siLivewire,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  SQLite: siSqlite,
  Stripe: siStripe,
  Square: siSquare,
  "DHL API": siDhl,
  "Google Maps API": siGooglemaps,
  Firebase: siFirebase,
  WebSockets: siSocketdotio,
  "Laravel Reverb": siLaravel,
  JWT: siJsonwebtokens,
  Docker: siDocker,
  "GitHub Actions": siGithubactions,
  "Laravel Forge": siLaravel,
  Filament: siFilament,
  Scrum: siScrumalliance,
  Jira: siJira,
  Trello: siTrello,
};

/** Orden del marquee: primera aparición de cada tecnología al recorrer categorías. */
export function getMarqueeTechs(stackCategories) {
  const seen = new Set();
  const ordered = [];
  for (const cat of stackCategories) {
    for (const item of cat.items) {
      if (!seen.has(item)) {
        seen.add(item);
        ordered.push(item);
      }
    }
  }
  return ordered;
}
