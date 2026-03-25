"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Database,
  Monitor,
  Plug,
  Server,
  Settings,
  Smartphone,
} from "lucide-react";

import TechMarquee from "@/components/sections/TechMarquee";
import SectionLabel from "@/components/ui/SectionLabel";
import TechPill from "@/components/ui/TechPill";
import { useLanguage } from "@/context/LanguageContext";
import { getMarqueeTechs } from "@/lib/techIcons";
import { stack as stackCategories } from "../../../data/stack.js";

const ICON_MAP = {
  Server,
  Smartphone,
  Monitor,
  Database,
  CreditCard,
  Plug,
  Settings,
};

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function Stack() {
  const { t } = useLanguage();
  const marqueeItems = getMarqueeTechs(stackCategories);

  return (
    <section
      id="stack"
      style={{
        backgroundColor: "#0d0d0f",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="stack-inner">
        <SectionLabel>
          {t({ en: "TECH STACK", es: "STACK TECNOLÓGICO" })}
        </SectionLabel>

        <h2
          style={{
            marginTop: "1rem",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
            lineHeight: 1.15,
            color: "#eeeef2",
          }}
        >
          {t({
            en: "Technologies I use in production.",
            es: "Tecnologías que uso en producción.",
          })}
        </h2>

        <motion.div
          className="stack-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
        >
          {stackCategories.map((group) => {
            const Icon = ICON_MAP[group.icon] ?? Server;
            return (
              <motion.article
                key={group.category.en}
                variants={fadeUp}
                className="stack-card"
                style={{
                  backgroundColor: "#16161a",
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    color="#6c63ff"
                    aria-hidden
                  />
                  <span
                    style={{
                      marginLeft: "10px",
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#eeeef2",
                    }}
                  >
                    {t(group.category)}
                  </span>
                </div>

                <div
                  aria-hidden
                  style={{
                    height: "1px",
                    backgroundColor: "#2a2a35",
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {group.items.map((item) => (
                    <TechPill key={item} label={item} />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <TechMarquee items={marqueeItems} />
      </div>
    </section>
  );
}
