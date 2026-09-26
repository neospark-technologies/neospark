import type { TeamMember, GitHubMember } from "@/types";
import { teamFallback } from "@/data/team-fallback";

const GITHUB_ORG = "neospark-technologies";
const GITHUB_API = `https://api.github.com/orgs/${GITHUB_ORG}/members`;

/**
 * Fetches the public members of the Neo Spark Technologies GitHub org.
 * This runs server-side only (called from Server Components).
 * Falls back to static data when the API is unreachable or rate-limited.
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(GITHUB_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "neospark-website",
      },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!res.ok) {
      console.warn(
        `GitHub API returned ${res.status}, falling back to static data.`
      );
      return teamFallback;
    }

    const members: GitHubMember[] = await res.json();

    if (!Array.isArray(members) || members.length === 0) {
      return teamFallback;
    }

    // Map GitHub API response to our TeamMember type.
    // Merge with fallback data to fill in roles/bios where available.
    return members.map((member) => {
      const fallbackMatch = teamFallback.find(
        (f) => f.login.toLowerCase() === member.login.toLowerCase()
      );

      return {
        login: member.login,
        name: fallbackMatch?.name ?? member.login,
        avatar_url: member.avatar_url,
        html_url: member.html_url,
        role: fallbackMatch?.role,
        bio: fallbackMatch?.bio,
      };
    });
  } catch (error) {
    console.warn("Failed to fetch GitHub members:", error);
    return teamFallback;
  }
}
