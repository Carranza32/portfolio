"use client";

import TechBrandIcon from "@/components/ui/TechBrandIcon";

export default function TechPill({ label, className = "" }) {
  return (
    <span className={`tech-pill ${className}`.trim()}>
      <TechBrandIcon name={label} size={14} />
      <span>{label}</span>
    </span>
  );
}
