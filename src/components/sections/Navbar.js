"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Cpu,
  Download,
  GraduationCap,
  Home,
  Mail,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

const NAV_LINKS = [
  { href: "#about", label: { en: "About", es: "Sobre mí" }, Icon: User, sectionId: "about" },
  { href: "#stack", label: { en: "Stack", es: "Stack" }, Icon: Cpu, sectionId: "stack" },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" }, Icon: Briefcase, sectionId: "projects" },
  { href: "#experience", label: { en: "Experience", es: "Experiencia" }, Icon: GraduationCap, sectionId: "experience" },
  { href: "#contact", label: { en: "Contact", es: "Contacto" }, Icon: Mail, sectionId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for Scroll Spy
  useEffect(() => {
    if (!isHome) return;

    const sections = ["hero", "about", "stack", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -65% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const cvLabel = t({ en: "CV", es: "CV" });
  const fullCvLabel = t({ en: "Download CV", es: "Descargar CV" });
  const cvHref = lang === "es" ? "/cv.pdf" : "/resume.pdf";

  return (
    <>
      {/* ─── Desktop Header Navigation (Fixed at Top) ─── */}
      <header
        className="navbar-desktop"
        style={{
          position: "fixed",
          top: scrolled ? "16px" : "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: "90%",
          maxWidth: "76rem",
          backgroundColor: scrolled
            ? "rgba(6, 6, 8, 0.45)"
            : "rgba(6, 6, 8, 0.2)",
          backdropFilter: "blur(28px) saturate(185%)",
          WebkitBackdropFilter: "blur(28px) saturate(185%)",
          borderRadius: "24px",
          border: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(255, 255, 255, 0.04)",
          boxShadow: scrolled
            ? "0 12px 40px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.07)"
            : "none",
          transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 24px",
        }}
      >
        <a
          href={isHome ? "#hero" : "/"}
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "#F8FAFC" }}>Mario</span>
          <span style={{ color: "#6366F1" }}> Carranza</span>
        </a>

        {/* Desktop Nav Links with moving hover backdrop */}
        <nav
          aria-label="Main"
          className="navbar-desktop-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "relative",
          }}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {NAV_LINKS.map((item, idx) => {
            const linkHref = isHome ? item.href : `/${item.href}`;
            const isActive = isHome && activeSection === item.sectionId;

            return (
              <a
                key={item.href}
                href={linkHref}
                onMouseEnter={() => setHoveredLink(idx)}
                style={{
                  position: "relative",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "13.5px",
                  color: isActive ? "#FFFFFF" : "#94A3B8",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  transition: "color 250ms ease",
                  zIndex: 1,
                }}
              >
                {hoveredLink === idx && (
                  <motion.div
                    layoutId="desktop-nav-hover"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "100px",
                      zIndex: -1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                {t(item.label)}
              </a>
            );
          })}
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          {/* Language Selector */}
          <div
            role="group"
            aria-label="Language"
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "100px",
              padding: "2px",
              width: "84px",
              height: "28px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "2px",
                bottom: "2px",
                left: lang === "en" ? "2px" : "42px",
                width: "40px",
                background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                borderRadius: "100px",
                transition: "left 250ms cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 0,
                boxShadow: "0 2px 6px rgba(99, 102, 241, 0.3)",
              }}
            />
            <button
              type="button"
              onClick={() => lang !== "en" && toggleLang()}
              style={{
                position: "relative",
                zIndex: 1,
                width: "40px",
                height: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: lang === "en" ? "#FFFFFF" : "#94A3B8",
                padding: 0,
                borderRadius: "100px",
                transition: "color 200ms ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => lang !== "es" && toggleLang()}
              style={{
                position: "relative",
                zIndex: 1,
                width: "40px",
                height: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: lang === "es" ? "#FFFFFF" : "#94A3B8",
                padding: 0,
                borderRadius: "100px",
                transition: "color 200ms ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ES
            </button>
          </div>

          {/* Download CV button */}
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="glass"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F8FAFC",
              padding: "7px 16px",
              borderRadius: "100px",
              textDecoration: "none",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12.5px",
              fontWeight: 500,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              transition: "all 200ms ease",
              cursor: "pointer",
            }}
          >
            {fullCvLabel}
          </a>
        </div>
      </header>

      {/* ─── Mobile Floating Header (Top bar for Brand + Actions) ─── */}
      <div
        className="navbar-mobile-header"
        style={{
          position: "fixed",
          top: "12px",
          left: "12px",
          right: "12px",
          zIndex: 50,
          backgroundColor: "rgba(6, 6, 8, 0.45)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        }}
      >
        <a
          href={isHome ? "#hero" : "/"}
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 800,
            fontSize: "16px",
            color: "#F8FAFC",
          }}
        >
          Mario<span style={{ color: "#6366F1" }}>.C</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Mini Language Selector */}
          <button
            type="button"
            onClick={toggleLang}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              color: "#F8FAFC",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          {/* Circle Download CV Button */}
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#F8FAFC",
              cursor: "pointer",
            }}
            title={fullCvLabel}
            aria-label={fullCvLabel}
          >
            <Download size={13} />
          </a>
        </div>
      </div>

      {/* ─── Mobile Floating Bottom Dock (iOS/macOS Liquid Glass Tab Bar) ─── */}
      <nav
        className="navbar-mobile-bottom-dock"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 90,
          width: "calc(100% - 32px)",
          maxWidth: "400px",
          height: "64px",
          backgroundColor: "rgba(6, 6, 8, 0.55)",
          backdropFilter: "blur(32px) saturate(190%)",
          WebkitBackdropFilter: "blur(32px) saturate(190%)",
          borderRadius: "28px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.65), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
          padding: "6px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          boxSizing: "border-box",
        }}
      >
        {/* Home Tab */}
        <a
          href={isHome ? "#hero" : "/"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "100%",
            textDecoration: "none",
            gap: "3px",
            position: "relative",
          }}
        >
          <Home
            size={18}
            strokeWidth={1.75}
            color={activeSection === "hero" ? "#6366F1" : "#94A3B8"}
            style={{
              transition: "transform 200ms ease, color 200ms ease",
              transform: activeSection === "hero" ? "scale(1.15)" : "scale(1)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "9px",
              fontWeight: 500,
              color: activeSection === "hero" ? "#F8FAFC" : "#64748B",
              transition: "color 200ms ease",
            }}
          >
            {t({ en: "Home", es: "Inicio" })}
          </span>
          {activeSection === "hero" && (
            <motion.div
              layoutId="mobile-dock-active-dot"
              style={{
                position: "absolute",
                bottom: "-2px",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#6366F1",
                boxShadow: "0 0 8px #6366F1",
              }}
            />
          )}
        </a>

        {NAV_LINKS.map((item) => {
          const linkHref = isHome ? item.href : `/${item.href}`;
          const Icon = item.Icon;
          const isActive = isHome && activeSection === item.sectionId;

          return (
            <a
              key={item.href}
              href={linkHref}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "100%",
                textDecoration: "none",
                gap: "3px",
                position: "relative",
              }}
            >
              <Icon
                size={18}
                strokeWidth={1.75}
                color={isActive ? "#6366F1" : "#94A3B8"}
                style={{
                  transition: "transform 200ms ease, color 200ms ease",
                  transform: isActive ? "scale(1.15)" : "scale(1)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "9px",
                  fontWeight: 500,
                  color: isActive ? "#F8FAFC" : "#64748B",
                  transition: "color 200ms ease",
                }}
              >
                {t({
                  en: item.label.en.split(" ")[0], // Keep it short (e.g. "Sobre" -> "Sobre")
                  es: item.label.es.split(" ")[0],
                })}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobile-dock-active-dot"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#6366F1",
                    boxShadow: "0 0 8px #6366F1",
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* Hide desktop header on mobile, and hide mobile navbar elements on desktop */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-mobile-header {
            display: flex !important;
          }
          .navbar-mobile-bottom-dock {
            display: flex !important;
          }
          /* Add bottom padding to body so content doesn't hide behind dock */
          body {
            padding-bottom: 96px !important;
          }
        }
        @media (min-width: 768px) {
          .navbar-desktop {
            display: flex !important;
          }
          .navbar-mobile-header {
            display: none !important;
          }
          .navbar-mobile-bottom-dock {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
