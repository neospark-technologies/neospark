import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects Archive | Neo Spark Technologies",
  description:
    "Explore all hardware builds, IoT arcade machines, autonomous robotics, and full-stack software platforms engineered by Neo Spark students.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
