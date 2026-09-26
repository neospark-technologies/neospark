import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { builtProjects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return builtProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = builtProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Neo Spark Technologies",
    };
  }

  return {
    title: `${project.name} — Neo Spark Technologies`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Neo Spark Technologies`,
      description: project.tagline,
      images: project.thumbnail ? [{ url: project.thumbnail }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = builtProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = builtProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    builtProjects[(currentIndex + 1) % builtProjects.length];

  return (
    <ProjectDetailClient project={project} nextProject={nextProject} />
  );
}
