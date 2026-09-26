import type { TeamMember } from "@/types";

/**
 * Fallback team data used when the GitHub API is unavailable.
 * This ensures the team section always renders.
 */
export const teamFallback: TeamMember[] = [
  {
    login: "bibek-poudel",
    name: "Bibek Poudel",
    avatar_url: "https://avatars.githubusercontent.com/u/0?v=4",
    html_url: "https://github.com/bibek-poudel",
    role: "Co-Founder & Lead Developer",
    bio: "Full-stack developer with a passion for building real products.",
  },
  {
    login: "aviyan-thapa",
    name: "Aviyan Thapa",
    avatar_url: "https://avatars.githubusercontent.com/u/0?v=4",
    html_url: "https://github.com/aviyan-thapa",
    role: "Co-Founder & Hardware Lead",
    bio: "IoT and embedded systems enthusiast who makes hardware work.",
  },
  {
    login: "parbin-shrees",
    name: "Parbin Shrees",
    avatar_url: "https://avatars.githubusercontent.com/u/0?v=4",
    html_url: "https://github.com/parbin-shrees",
    role: "Developer",
    bio: "Software developer focused on building clean, scalable solutions.",
  },
  {
    login: "subodh-bhandari",
    name: "Subodh Man Singh Bhandari",
    avatar_url: "https://avatars.githubusercontent.com/u/0?v=4",
    html_url: "https://github.com/subodh-bhandari",
    role: "Developer",
    bio: "Building things that work, one line at a time.",
  },
  {
    login: "unita-rai",
    name: "Unita Rai",
    avatar_url: "https://avatars.githubusercontent.com/u/0?v=4",
    html_url: "https://github.com/unita-rai",
    role: "Developer",
    bio: "Creative problem solver with a knack for innovation.",
  },
];
