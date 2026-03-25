"use client";

import { Code2, Fingerprint, Navigation } from "lucide-react";

import { TECH_ICONS } from "@/lib/techIcons";

const LUCIDE_BY_LABEL = {
  GPS: Navigation,
  Biometrics: Fingerprint,
};

export default function TechBrandIcon({ name, size = 14 }) {
  const si = TECH_ICONS[name];
  if (si) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <path fill={`#${si.hex}`} d={si.path} />
      </svg>
    );
  }

  const LucideIcon = LUCIDE_BY_LABEL[name];
  if (LucideIcon) {
    return (
      <LucideIcon
        size={size}
        strokeWidth={2}
        color="#6b7280"
        aria-hidden
        style={{ flexShrink: 0 }}
      />
    );
  }

  return (
    <Code2
      size={size}
      strokeWidth={2}
      color="#6b7280"
      aria-hidden
      style={{ flexShrink: 0 }}
    />
  );
}
