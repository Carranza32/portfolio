"use client";

import { Link2 } from "lucide-react";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";

const FOOTER_LINKS = [
  { href: "#about", label: { en: "About", es: "Sobre mí" } },
  { href: "#stack", label: { en: "Stack", es: "Stack" } },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" } },
  { href: "#experience", label: { en: "Experience", es: "Experiencia" } },
  { href: "#contact", label: { en: "Contact", es: "Contacto" } },
];

/** Icono GitHub (lucide-react 1.6 no exporta Github). */
function IconGithub({ size = 18, "aria-hidden": ariaHidden = true }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, t } = useLanguage();
  const cvHref = lang === "es" ? "/cv.pdf" : "/resume.pdf";

  return (
    <footer
      style={{
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href={isHome ? "#hero" : "/"}
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: "var(--white)" }}>Mario</span>
              <span style={{ color: "var(--accent)" }}> Carranza</span>
            </a>
            <p
              style={{
                marginTop: "4px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "13px",
                color: "#64748B",
              }}
            >
              {t({
                en: "Senior Full Stack Developer · Laravel & Flutter",
                es: "Desarrollador Senior Full Stack · Laravel & Flutter",
              })}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="footer-nav"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px 20px",
            }}
          >
            {FOOTER_LINKS.map((item) => {
              const linkHref = isHome ? item.href : `/${item.href}`;
              return (
                <a
                  key={item.href}
                  href={linkHref}
                  className="footer-nav-link"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "13px",
                    color: "#6b7280",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                >
                  {t(item.label)}
                </a>
              );
            })}
          </nav>

          <div className="footer-actions">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://www.linkedin.com/in/mario-ernesto-carranza"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <Link2 size={18} strokeWidth={2} aria-hidden />
              </a>
              {/* TODO: sustituye href por tu perfil de GitHub */}
              <a
                href="https://github.com/Carranza32"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <IconGithub size={18} />
              </a>
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-cv-btn"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "13px",
                  color: "var(--muted)",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  transition: "border-color 200ms ease, color 200ms ease",
                }}
              >
                {t({ en: "Download CV", es: "Descargar CV" })}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "12px",
              color: "#64748B",
            }}
          >
            © 2025 Mario Carranza
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "12px",
              color: "#94A3B8",
            }}
          >
            Built with Next.js & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
