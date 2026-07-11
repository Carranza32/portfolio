"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

const leftContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { lang, t } = useLanguage();
  const [photoOk, setPhotoOk] = useState(true);
  const cvHref = lang === "es" ? "/cv.pdf" : "/resume.pdf";

  const stats = [
    {
      value: "7+",
      label: { en: "Years exp.", es: "Años exp." },
    },
    {
      value: "4+",
      label: { en: "Flutter years", es: "Años Flutter" },
    },
    {
      value: "6+",
      label: { en: "Mobile apps", es: "Apps móviles" },
    },
    {
      value: "10+",
      label: { en: "Total projects", es: "Proyectos total" },
    },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    >
      <div className="hero-inner">
        <motion.div
          variants={leftContainer}
          initial="hidden"
          animate="visible"
          style={{ width: "100%", maxWidth: "100%" }}
        >
          {/* Availability pill */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(34, 197, 94, 0.06)",
                backdropFilter: "blur(28px) saturate(180%)",
                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                border: "1px solid rgba(34, 197, 94, 0.20)",
                borderRadius: "100px",
                padding: "8px 18px",
                boxShadow: "0 4px 16px rgba(34, 197, 94, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="hero-availability-dot" />
              <span
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "#4ADE80",
                  letterSpacing: "0.2px",
                }}
              >
                {t({
                  en: "Open to Full-Time Remote Opportunities",
                  es: "Abierto a Oportunidades Remotas Full-Time",
                })}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              marginTop: "1.75rem",
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.75rem, 6.5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#F8FAFC", display: "block" }}>
              Senior Full Stack
            </span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #6366F1 10%, #06B6D4 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engineer & Tech Lead.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "17.5px",
              color: "#cbd5e1",
              maxWidth: "500px",
              lineHeight: 1.75,
            }}
          >
            {t({
              en: "Specializing in Laravel & Flutter. I lead engineering teams, design robust backend-mobile systems, and build scalable digital products for global tech companies.",
              es: "Especialista en Laravel & Flutter. Lidero equipos de ingeniería, diseño sistemas backend-móvil robustos y construyo productos digitales escalables para empresas tecnológicas globales.",
            })}
          </motion.p>

          {/* Stats Widget */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2.25rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: "1.75rem",
              rowGap: "0.75rem",
              background: "rgba(255, 255, 255, 0.015)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "16px 24px",
              width: "fit-content",
              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.4)",
            }}
          >
            {stats.map((s, i) => (
              <Fragment key={s.value}>
                {i > 0 ? (
                  <div
                    aria-hidden
                    style={{
                      width: "1px",
                      height: "36px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      flexShrink: 0,
                    }}
                  />
                ) : null}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                    minWidth: "fit-content",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: "26px",
                      background: "linear-gradient(135deg, #6366F1, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#94A3B8",
                    }}
                  >
                    {t(s.label)}
                  </span>
                </div>
              </Fragment>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <a
              href={cvHref}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
                background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                color: "#ffffff",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "13px 26px",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(99, 102, 241, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
                transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(99, 102, 241, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(99, 102, 241, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t({ en: "Download Resume", es: "Descargar CV" })}
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#F8FAFC",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                padding: "13px 26px",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "";
              }}
            >
              {t({ en: "Get in Touch", es: "Contactar" })}
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Photo Column with Tilt / Float Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="hero-photo-column"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <motion.div 
            className="hero-photo-wrap"
            whileHover={{ scale: 1.025, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ cursor: "pointer" }}
          >
            <div className="hero-photo-glow" aria-hidden />
            <div className="hero-photo-frame" style={{ borderRadius: "28px", padding: "1px", background: "linear-gradient(160deg, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(255, 255, 255, 0.1) 100%)" }}>
              <div className="hero-photo-inner" style={{ borderRadius: "27px" }}>
                {photoOk ? (
                  <>
                    <Image
                      src="/mario.png"
                      alt={t({ en: "Mario Carranza", es: "Mario Carranza" })}
                      fill
                      className="hero-photo-img"
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 460px"
                      priority
                      onError={() => setPhotoOk(false)}
                    />
                  </>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(3.5rem, 12vw, 5.5rem)",
                      background: "linear-gradient(135deg, #6366F1, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.03em",
                      backgroundColor: "rgba(255,255,255,0.01)",
                    }}
                  >
                    MC
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
