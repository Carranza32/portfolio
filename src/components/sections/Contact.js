"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, Link2, Mail } from "lucide-react";
import { useState } from "react";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

const FORMSPREE_URL = "https://formspree.io/f/xreozywn";

const SUBJECT_OPTIONS = [
  {
    value: "fulltime",
    label: {
      en: "Full-time opportunity",
      es: "Oportunidad full-time",
    },
  },
  {
    value: "freelance",
    label: {
      en: "Freelance project",
      es: "Proyecto freelance",
    },
  },
  {
    value: "consulting",
    label: {
      en: "Consulting",
      es: "Consultoría",
    },
  },
  {
    value: "other",
    label: {
      en: "Other",
      es: "Otro",
    },
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectKey, setSubjectKey] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const subjectLabel =
    SUBJECT_OPTIONS.find((o) => o.value === subjectKey)?.label ?? null;
  const subjectForForm = subjectLabel ? t(subjectLabel) : "";

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const payload = {
        name,
        email,
        _replyto: email,
        _subject: `[Portfolio] ${subjectForForm} — ${name}`,
        subject: subjectForForm,
        subject_key: subjectKey,
        message,
        /* Cuerpo legible en el correo si la plantilla solo prioriza un bloque de texto */
        resumen: [
          `Nombre: ${name}`,
          `Email: ${email}`,
          `Asunto (${subjectKey}): ${subjectForForm}`,
          "",
          "Mensaje:",
          message,
        ].join("\n"),
      };

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubjectKey("");
        setMessage("");
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="contact-inner">
        <div style={{ textAlign: "center" }}>
          <SectionLabel>{t({ en: "CONTACT", es: "CONTACTO" })}</SectionLabel>

          <h2
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.15,
              color: "#F8FAFC",
            }}
          >
            {t({
              en: "Let's work together.",
              es: "Trabajemos juntos.",
            })}
          </h2>

          <p
            style={{
              marginTop: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "500px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "16px",
              color: "#94A3B8",
              lineHeight: 1.6,
            }}
          >
            {t({
              en: "Open to new opportunities — full-time roles and freelance projects. I respond within 24 hours.",
              es: "Abierto a nuevas oportunidades — puestos full-time y proyectos freelance. Respondo en menos de 24 horas.",
            })}
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(34, 197, 94, 0.10)",
                border: "1px solid rgba(34, 197, 94, 0.25)",
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
                  color: "#4ADE80",
                }}
              >
                {t({
                  en: "Available now",
                  es: "Disponible ahora",
                })}
              </span>
            </div>

            <div
              style={{
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <a
                href="mailto:mario.carranza996@gmail.com"
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Mail
                  size={20}
                  strokeWidth={2}
                  color="#818CF8"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                  aria-hidden
                />
                <span
                  className="contact-link-text"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "#F8FAFC",
                  }}
                >
                  mario.carranza996@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/mario-ernesto-carranza"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Link2
                  size={20}
                  strokeWidth={2}
                  color="#818CF8"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                  aria-hidden
                />
                <span
                  className="contact-link-text"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "#F8FAFC",
                  }}
                >
                  linkedin.com/in/mario-ernesto-carranza
                </span>
              </a>

              <a
                href="https://github.com/Carranza32"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Link2
                  size={20}
                  strokeWidth={2}
                  color="#818CF8"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                  aria-hidden
                />
                <span
                  className="contact-link-text"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "#F8FAFC",
                  }}
                >
                  github.com/Carranza32
                </span>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Globe
                  size={20}
                  strokeWidth={2}
                  color="#818CF8"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                  aria-hidden
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "#F8FAFC",
                  }}
                >
                  {t({
                    en: "El Salvador — Open to remote worldwide",
                    es: "El Salvador — Abierto a remoto mundial",
                  })}
                </span>
              </div>
            </div>

            <p
              style={{
                marginTop: "40px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "13px",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              {t({
                en: "Prefer a quick call? Mention it in your message and we can schedule one.",
                es: "¿Prefieres una llamada rápida? Menciónalo en tu mensaje y coordinamos.",
              })}
            </p>
          </div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textAlign: "center",
                  padding: "48px 24px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                }}
              >
                <CheckCircle
                  size={48}
                  strokeWidth={1.75}
                  color="#22c55e"
                  style={{ margin: "0 auto", display: "block" }}
                  aria-hidden
                />
                <p
                  style={{
                    marginTop: "1rem",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#22c55e",
                    lineHeight: 1.5,
                  }}
                >
                  {t({
                    en: "Thanks! Your message was sent successfully.",
                    es: "¡Gracias! Tu mensaje se envió correctamente.",
                  })}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "18px" }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      marginBottom: "6px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "13px",
                      color: "#94A3B8",
                    }}
                  >
                    {t({ en: "Name", es: "Nombre" })}{" "}
                    <span aria-hidden style={{ color: "#818CF8" }}>
                      *
                    </span>
                  </label>
                  <input
                    id="contact-name"
                    className="contact-input"
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t({
                      en: "Your name",
                      es: "Tu nombre",
                    })}
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      marginBottom: "6px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "13px",
                      color: "#94A3B8",
                    }}
                  >
                    Email{" "}
                    <span aria-hidden style={{ color: "#818CF8" }}>
                      *
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    className="contact-input"
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t({
                      en: "you@email.com",
                      es: "tu@email.com",
                    })}
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: "block",
                      marginBottom: "6px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "13px",
                      color: "#94A3B8",
                    }}
                  >
                    {t({ en: "Subject", es: "Asunto" })}{" "}
                    <span aria-hidden style={{ color: "#818CF8" }}>
                      *
                    </span>
                  </label>
                  <select
                    id="contact-subject"
                    className="contact-input contact-select"
                    name="subject"
                    required
                    value={subjectKey}
                    onChange={(e) => setSubjectKey(e.target.value)}
                  >
                    <option value="" disabled>
                      {t({
                        en: "Select a topic",
                        es: "Elige un tema",
                      })}
                    </option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      marginBottom: "6px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "13px",
                      color: "#94A3B8",
                    }}
                  >
                    {t({ en: "Message", es: "Mensaje" })}{" "}
                    <span aria-hidden style={{ color: "#818CF8" }}>
                      *
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    className="contact-input contact-textarea"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t({
                      en: "Tell me about your project or role…",
                      es: "Cuéntame sobre tu proyecto o rol…",
                    })}
                  />
                </div>

                {submitError ? (
                  <p
                    role="alert"
                    style={{
                      marginBottom: "14px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "14px",
                      color: "#f87171",
                      lineHeight: 1.5,
                    }}
                  >
                    {t({
                      en: "Could not send. Check your connection or try again in a moment.",
                      es: "No se pudo enviar. Revisa tu conexión o inténtalo de nuevo en un momento.",
                    })}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={submitting}
                >
                  {submitting
                    ? t({ en: "Sending…", es: "Enviando…" })
                    : t({
                        en: "Send Message",
                        es: "Enviar Mensaje",
                      })}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
