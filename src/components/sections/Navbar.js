"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";

const NAV_LINKS = [
  { href: "#about", label: { en: "About", es: "Sobre mí" } },
  { href: "#stack", label: { en: "Stack", es: "Stack" } },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" } },
  { href: "#experience", label: { en: "Experience", es: "Experiencia" } },
  { href: "#contact", label: { en: "Contact", es: "Contacto" } },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
        top: scrolled ? "10px" : "0px",
        left: scrolled ? "12px" : "0px",
        right: scrolled ? "12px" : "0px",
        zIndex: 50,
        width: scrolled ? "calc(100% - 24px)" : "100%",
        backgroundColor: scrolled
          ? "rgba(6, 6, 8, 0.75)"
          : "transparent",
        backdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
        borderRadius: scrolled ? "16px" : "0px",
        border: scrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0, 0, 0, 0.40), 0 1px 4px rgba(0, 0, 0, 0.20)"
          : "none",
        transition:
          "background-color 300ms ease, border-color 300ms ease, border-radius 300ms ease, top 300ms ease, left 300ms ease, right 300ms ease, box-shadow 300ms ease",
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
          href={isHome ? "#" : "/"}
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#F8FAFC" }}>Mario</span>
          <span style={{ color: "#6366F1" }}> Carranza</span>
        </a>

        <nav aria-label="Main" className="navbar-desktop-nav">
          {NAV_LINKS.map((item) => {
            const linkHref = isHome ? item.href : `/${item.href}`;
            return (
              <a key={item.href} href={linkHref} className="navbar-nav-link">
                {t(item.label)}
              </a>
            );
          })}
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
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
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
                color: lang === "en" ? "#6366F1" : "#64748B",
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
                color: lang === "es" ? "#6366F1" : "#64748B",
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
              color: "#F8FAFC",
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
            background: "rgba(6, 6, 8, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "0 0 16px 16px",
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
            {NAV_LINKS.map((item) => {
              const linkHref = isHome ? item.href : `/${item.href}`;
              return (
                <a
                  key={item.href}
                  href={linkHref}
                  className="navbar-nav-link navbar-nav-link--mobile"
                  onClick={closeMobile}
                >
                  {t(item.label)}
                </a>
              );
            })}
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
