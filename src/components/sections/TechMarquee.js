"use client";

import TechBrandIcon from "@/components/ui/TechBrandIcon";

export default function TechMarquee({ items }) {
  if (!items?.length) return null;

  const doubled = [...items, ...items];

  return (
    <div className="tech-marquee-wrap" aria-hidden>
      <div className="tech-marquee-fade tech-marquee-fade--left" />
      <div className="tech-marquee-fade tech-marquee-fade--right" />
      <div className="tech-marquee-inner">
        <div className="tech-marquee-track">
          {doubled.map((label, i) => (
            <span key={`${label}-${i}`} className="tech-marquee-item">
              <TechBrandIcon name={label} size={22} />
              <span className="tech-marquee-label">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
