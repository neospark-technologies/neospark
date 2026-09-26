import type { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Neo Spark Technologies",
  tagline: "Built by students. Trusted beyond the classroom.",
  description:
    "A student-run technology organization based in Pokhara, Nepal. We design, build, and deliver real hardware and software — from IoT arcade machines to full-stack platforms.",
  url: "https://neospark.tech",
  github: "https://github.com/neospark-technologies",
  email: "neosparktechnologies@gmail.com",
  location: "Pokhara, Nepal",
  foundedYear: 2025,
  socials: {
    github: "https://github.com/neospark-technologies",
    instagram: "https://instagram.com/neospark.tech",
    linkedin: "https://linkedin.com/company/neospark-technologies",
    youtube: "",
  },
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Journey", href: "/#journey" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Supporters", href: "/#supporters" },
  { label: "Contact", href: "/#contact" },
];
