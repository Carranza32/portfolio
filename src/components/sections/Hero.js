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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const [photoOk, setPhotoOk] = useState(true);

  const stats = [
    {
      value: "6+",
      label: { en: "Years exp.", es: "Años exp." },
    },
    {
      value: "3+",
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
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(34, 197, 94, 0.10)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(34, 197, 94, 0.25)",
                borderRadius: "100px",
                padding: "8px 16px",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.40)",
              }}
            >
              <span className="hero-availability-dot" />
              <span
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#4ADE80",
                }}
              >
                {t({
                  en: "Available for new projects",
                  es: "Disponible para nuevos proyectos",
                })}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#F8FAFC", display: "block" }}>
              Senior Full Stack
            </span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #6366F1 20%, #06B6D4 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Developer.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              marginTop: "1.25rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              color: "#94A3B8",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            {t({
              en: "Laravel & Flutter specialist. I design robust architectures and build end-to-end digital products — from SaaS platforms to enterprise mobile apps.",
              es: "Especialista en Laravel & Flutter. Diseño arquitecturas robustas y construyo productos digitales completos — desde plataformas SaaS hasta apps móviles empresariales.",
            })}
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: "1.5rem",
              rowGap: "0.75rem",
            }}
          >
            {stats.map((s, i) => (
              <Fragment key={s.value}>
                {i > 0 ? (
                  <div
                    aria-hidden
                    style={{
                      width: "1px",
                      height: "32px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      flexShrink: 0,
                    }}
                  />
                ) : null}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    minWidth: "fit-content",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: "28px",
                      background: "linear-gradient(135deg, #6366F1, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "12px",
                      color: "#94A3B8",
                    }}
                  >
                    {t(s.label)}
                  </span>
                </div>
              </Fragment>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #6366F1, #2563EB)",
                color: "#ffffff",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "12px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(99, 102, 241, 0.35)",
                transition: "filter 200ms ease, transform 200ms ease, box-shadow 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.08)";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(99,102,241,0.40)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.35)";
              }}
            >
              {t({ en: "View Projects", es: "Ver Proyectos" })}
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#F8FAFC",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                padding: "12px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                transition: "background-color 200ms ease, border-color 200ms ease",
              }}
            >
              {t({ en: "Get in Touch", es: "Contactar" })}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-photo-column"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div className="hero-photo-wrap">
            <div className="hero-photo-glow" aria-hidden />
            <div className="hero-photo-frame">
              <div className="hero-photo-inner">
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
                      fontSize: "clamp(3rem, 12vw, 4.5rem)",
                      background: "linear-gradient(135deg, #4F46E5, #0284C7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.02em",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    MC
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
