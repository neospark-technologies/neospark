// ─── Site Configuration ───────────────────────────────────────────────
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  github: string;
  email: string;
  location: string;
  foundedYear: number;
  socials: {
    github: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

// ─── Team / GitHub ────────────────────────────────────────────────────
export interface TeamMember {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  role?: string;
  bio?: string;
  linkedin?: string;
}

export interface GitHubMember {
  login: string;
  avatar_url: string;
  html_url: string;
}

// ─── Navigation ───────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Projects ─────────────────────────────────────────────────────────
export type ProjectCategory = "hardware" | "software" | "hybrid";
export type ProjectStatus = "completed" | "in-progress" | "coming-soon";

export interface ProjectTeamMember {
  name: string;
  role?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  year: string;
  status: ProjectStatus;
  tagline: string;
  summary: string;
  description: string[];
  features: string[];
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  images: string[];
  thumbnail: string;
  video?: {
    type: "youtube" | "local";
    src: string;
    poster?: string;
  };
  team?: ProjectTeamMember[];
  isComingSoon?: boolean;
  needsReview?: boolean;
  reviewNotes?: string;
}

// ─── Achievements ─────────────────────────────────────────────────────
export interface Achievement {
  title: string;
  event: string;
  description: string;
  date: string;
  image?: string;
  project?: string;
  needsReview?: boolean;
}

// ─── Gallery ──────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: "team" | "event" | "workshop" | "project" | "trip";
  featured?: boolean;
  aspect?: "landscape" | "portrait" | "square";
}

// ─── Timeline ─────────────────────────────────────────────────────────
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "milestone" | "achievement" | "project" | "event";
}

// ─── Supporters ───────────────────────────────────────────────────────
export interface Supporter {
  name: string;
  slug: string;
  role: string;
  logo?: string;
  needsReview?: boolean;
}
