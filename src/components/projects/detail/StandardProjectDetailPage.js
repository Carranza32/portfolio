"use client";

import ProjectDetailShell from "./ProjectDetailShell";
import ProjectDetailSections from "./ProjectDetailSections";

/** Plantilla base: descripción, highlights, stack y galería placeholder. Personaliza copiando este archivo por `id`. */
export default function StandardProjectDetailPage({ project }) {
  return (
    <ProjectDetailShell project={project}>
      <ProjectDetailSections project={project} />
    </ProjectDetailShell>
  );
}
