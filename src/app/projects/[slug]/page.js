import { notFound } from "next/navigation";

import { getProjectDetailComponent } from "@/components/projects/detail/projectDetailRegistry";
import { getAllProjectIds, getProjectById } from "../../../../data/projects.js";

export function generateStaticParams() {
  return getAllProjectIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = getProjectById(params.slug);
  if (!project) {
    return { title: "Proyecto — Mario Carranza" };
  }
  const title = `${project.title.es} — Mario Carranza`;
  const description = (project.description.es ?? project.description.en ?? "").slice(
    0,
    160,
  );
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export default function ProjectDetailRoutePage({ params }) {
  const project = getProjectById(params.slug);
  if (!project) notFound();

  const Detail = getProjectDetailComponent(params.slug);
  return <Detail project={project} />;
}
