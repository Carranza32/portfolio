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
      value: "10+",
      label: { en: "Projects", es: "Proyectos" },
    },
    {
      value: "3",
      label: { en: "Countries", es: "Países" },
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
        backgroundColor: "#0d0d0f",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 70% 0%, rgba(108,99,255,0.06) 0%, transparent 60%)",
        }}
      />

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
                backgroundColor: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "100px",
                padding: "8px 16px",
              }}
            >
              <span className="hero-availability-dot" />
              <span
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#eeeef2",
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
            <span style={{ color: "#eeeef2", display: "block" }}>
              Senior Full Stack
            </span>
            <span style={{ color: "#6c63ff", display: "block" }}>
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
              color: "#6b7280",
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
                      backgroundColor: "#2a2a35",
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
                      color: "#6c63ff",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "12px",
                      color: "#6b7280",
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
                backgroundColor: "#6c63ff",
                color: "#eeeef2",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "12px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "filter 200ms ease",
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
                border: "1px solid #2a2a35",
                color: "#eeeef2",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                padding: "12px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                transition:
                  "background-color 200ms ease, border-color 200ms ease",
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
                      color: "#6c63ff",
                      letterSpacing: "-0.02em",
                      backgroundColor: "var(--surface)",
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
