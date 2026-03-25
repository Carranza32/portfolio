"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

const NAV_LINKS = [
  { href: "#about", label: { en: "About", es: "Sobre mí" } },
  { href: "#stack", label: { en: "Stack", es: "Stack" } },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" } },
  { href: "#experience", label: { en: "Experience", es: "Experiencia" } },
  { href: "#contact", label: { en: "Contact", es: "Contacto" } },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const cvLabel = t({ en: "Download CV", es: "Descargar CV" });
  const cvHref = lang === "es" ? "/cv.pdf" : "/resume.pdf";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: scrolled ? "#0d0d0f" : "transparent",
        borderBottom: scrolled ? "1px solid #2a2a35" : "1px solid transparent",
        transition: "background-color 300ms ease, border-color 300ms ease",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "80rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "14px 20px",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#eeeef2" }}>Mario</span>
          <span style={{ color: "#6c63ff" }}> Carranza</span>
        </a>

        <nav aria-label="Main" className="navbar-desktop-nav">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="navbar-nav-link">
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <div
            role="group"
            aria-label="Language"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#1e1e24",
              border: "1px solid #2a2a35",
              borderRadius: "100px",
              padding: "6px 14px",
            }}
          >
            <button
              type="button"
              onClick={() => lang !== "en" && toggleLang()}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                fontWeight: lang === "en" ? 600 : 400,
                color: lang === "en" ? "#6c63ff" : "#6b7280",
                padding: 0,
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => lang !== "es" && toggleLang()}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                fontWeight: lang === "es" ? 600 : 400,
                color: lang === "es" ? "#6c63ff" : "#6b7280",
                padding: 0,
              }}
            >
              ES
            </button>
          </div>

          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cv-btn"
          >
            {cvLabel}
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="navbar-menu-btn"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              color: "#eeeef2",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            {mobileOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="navbar-mobile-drawer"
          style={{
            backgroundColor: "#16161a",
            borderBottom: "1px solid #2a2a35",
            padding: "20px",
          }}
        >
          <nav
            aria-label="Mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar-nav-link navbar-nav-link--mobile"
                onClick={closeMobile}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cv-btn--drawer"
            onClick={closeMobile}
          >
            {cvLabel}
          </a>
        </div>
      ) : null}
    </header>
  );
}
