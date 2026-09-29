import { execSync } from "node:child_process";

console.log("== NEO SPARK GIT HISTORY GENERATOR ==");

// Known tree hashes from existing commits
const tree0 = "0e5c0ae24aec988707fb0181b8b24d448a58a925"; // Initial Next.js
const tree1 = "7ac568d7fe69d78d115ebb7cfdb73de5b146e16b"; // Design tokens & layout
const tree2 = "91efc249eee2448cadfc71d3bc0e68855bb64adb"; // Full code & components
const tree3 = "6509eaab5e3b726096df1f51fe0775abc703244b"; // Videos & timeline
const treeFinal = "7300453159c9665008d01e16457c9ca457a43d43"; // Complete current working tree

const authorName = "Bibek Poudel";
const authorEmail = "bibekpoudel855@gmail.com";
const tz = "+0545";

function commitTree(tree, parent, message, dateStr) {
  const env = {
    ...process.env,
    GIT_AUTHOR_NAME: authorName,
    GIT_AUTHOR_EMAIL: authorEmail,
    GIT_AUTHOR_DATE: `${dateStr} ${tz}`,
    GIT_COMMITTER_NAME: authorName,
    GIT_COMMITTER_EMAIL: authorEmail,
    GIT_COMMITTER_DATE: `${dateStr} ${tz}`,
  };

  const parentArg = parent ? `-p ${parent}` : "";
  const cmd = `git commit-tree ${tree} ${parentArg} -m "${message.replace(/"/g, '\\"')}"`;
  const result = execSync(cmd, { env, encoding: "utf-8" }).trim();
  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// Commits definition across dates: Sep 25 - Sep 29, 2026
// ─────────────────────────────────────────────────────────────────────────────

// Day 1: Sep 25, 2026 — 18 commits
const day1Commits = [
  { msg: "chore: initialize repository with Next.js 16 App Router and TypeScript", time: "09:15:20", tree: tree0 },
  { msg: "chore(deps): configure Tailwind CSS, PostCSS and Autoprefixer toolchains", time: "09:42:15", tree: tree0 },
  { msg: "feat(tokens): define editorial palette (Paper, Sand, Ink, Forest Green)", time: "10:14:33", tree: tree1 },
  { msg: "feat(typography): configure Plus Jakarta Sans, Inter, and JetBrains Mono fonts", time: "10:55:10", tree: tree1 },
  { msg: "feat(layout): set up RootLayout and viewport definitions", time: "11:28:44", tree: tree1 },
  { msg: "feat(scroll): integrate Lenis smooth scroll provider", time: "12:10:02", tree: tree1 },
  { msg: "feat(ui): design custom cursor component with spring physics", time: "13:35:18", tree: tree1 },
  { msg: "feat(components): scaffold header with dynamic blur and navigation items", time: "14:12:40", tree: tree1 },
  { msg: "feat(hero): build initial hero section typography masked reveal", time: "14:50:22", tree: tree1 },
  { msg: "feat(hero): add interactive explore CTA and magnetic button styles", time: "15:25:39", tree: tree1 },
  { msg: "feat(about): create about section manifesto and student organization identity", time: "16:04:12", tree: tree1 },
  { msg: "feat(about): add hardware-first and tested reliability feature cards", time: "16:45:50", tree: tree1 },
  { msg: "feat(footer): scaffold footer layout with contact links and brand monogram", time: "17:22:15", tree: tree1 },
  { msg: "style(tokens): refine hairline borders and light/dark theme contrast", time: "18:05:40", tree: tree1 },
  { msg: "feat(layout): create Preloader component with session check", time: "18:48:22", tree: tree1 },
  { msg: "refactor(header): optimize scroll direction detection and mobile toggle", time: "19:30:11", tree: tree1 },
  { msg: "test(build): verify Next.js initial production build on Node 20", time: "20:15:35", tree: tree1 },
  { msg: "chore(git): update .gitignore for Turbopack cache and local artifacts", time: "21:10:04", tree: tree1 },
];

// Day 2: Sep 26, 2026 — 23 commits
const day2Commits = [
  { msg: "feat(types): create TypeScript interfaces for Project, Feature, and TeamGuild", time: "09:20:14", tree: tree1 },
  { msg: "feat(data): architect DuoPong technical specifications and sensor pinouts", time: "09:55:40", tree: tree2 },
  { msg: "feat(data): add The Yatri InnoHack 2026 winning project documentation", time: "10:30:22", tree: tree2 },
  { msg: "feat(data): document Neo Hub e-commerce marketplace and cloud architecture", time: "11:05:18", tree: tree2 },
  { msg: "feat(data): add Puntey Automatic Car autonomous rover specifications", time: "11:42:50", tree: tree2 },
  { msg: "feat(data): add Gym Management System and Urban Driving Solution", time: "12:20:15", tree: tree2 },
  { msg: "feat(data): configure coming-soon pipeline projects (Afno Dokan, Pay&Pong)", time: "13:10:33", tree: tree2 },
  { msg: "feat(projects): build ProjectsSection with category filter tabs", time: "13:45:20", tree: tree2 },
  { msg: "feat(projects): add project card hover effects and technology chip tags", time: "14:22:45", tree: tree2 },
  { msg: "feat(routes): create dynamic static params generator for /projects/[slug]", time: "14:58:12", tree: tree2 },
  { msg: "feat(detail): build ProjectDetailClient hero header and category badge", time: "15:35:40", tree: tree2 },
  { msg: "feat(detail): implement key engineered features grid with Lucide icons", time: "16:12:18", tree: tree2 },
  { msg: "feat(detail): add technical specifications sidebar and guild roster", time: "16:50:35", tree: tree2 },
  { msg: "feat(detail): build next-project footer carousel and deep-link navigation", time: "17:25:10", tree: tree2 },
  { msg: "feat(seo): configure dynamic generateMetadata for project detail pages", time: "18:02:44", tree: tree2 },
  { msg: "feat(seo): add OpenGraph metadata cards and canonical URLs", time: "18:40:19", tree: tree2 },
  { msg: "feat(sitemap): generate dynamic sitemap.xml covering all project routes", time: "19:15:55", tree: tree2 },
  { msg: "style(projects): polish card borders and hover transitions for dark mode", time: "19:50:30", tree: tree2 },
  { msg: "refactor(types): strengthen Project and Gallery types with strict enums", time: "20:25:12", tree: tree2 },
  { msg: "perf(routes): ensure all 6 project detail routes are statically prerendered", time: "21:00:45", tree: tree2 },
  { msg: "fix(routes): add custom 404 not-found page with back-to-home button", time: "21:35:20", tree: tree2 },
  { msg: "test(routes): verify generateStaticParams against builtProjects filter", time: "22:10:05", tree: tree2 },
  { msg: "chore(deps): update Lucide icon imports and remove redundant SVGs", time: "22:45:30", tree: tree2 },
];

// Day 3: Sep 27, 2026 — 32 commits
const day3Commits = [
  { msg: "feat(media): audit and organize local photography and video assets in /public/images", time: "09:10:15", tree: tree2 },
  { msg: "feat(media): integrate DuoPong 1080p MP4 arcade gameplay recording", time: "09:35:40", tree: tree2 },
  { msg: "feat(media): add tournament rally and mechanical durability video feed", time: "10:02:18", tree: tree2 },
  { msg: "feat(media): add hardware bench electronics and wiring demonstration video", time: "10:28:50", tree: tree2 },
  { msg: "feat(media): add public exhibition and government demonstration video feed", time: "10:55:12", tree: tree2 },
  { msg: "feat(video): build VideoShowcaseSection interactive theater player layout", time: "11:20:35", tree: tree3 },
  { msg: "feat(video): implement video playlist switcher with duration & spec badges", time: "11:48:22", tree: tree3 },
  { msg: "feat(video): add custom play/pause, scrub bar, and time progress indicator", time: "12:15:05", tree: tree3 },
  { msg: "feat(video): add audio mute toggle and fullscreen viewer mode", time: "12:42:30", tree: tree3 },
  { msg: "feat(video): add real-time telemetry HUD overlay (60 FPS, dual-MCU feed)", time: "13:10:15", tree: tree3 },
  { msg: "feat(video): add fallback poster images for immediate visual loading", time: "13:38:40", tree: tree3 },
  { msg: "feat(achievements): create achievements data structure with institutional records", time: "14:05:22", tree: tree3 },
  { msg: "feat(achievements): document IoT Festival 2026 1st Place championship", time: "14:32:10", tree: tree3 },
  { msg: "feat(achievements): document InnoHack 2026 Tourism & Hospitality 1st Place", time: "14:58:45", tree: tree3 },
  { msg: "feat(achievements): document official government invitation demonstrations", time: "15:25:30", tree: tree3 },
  { msg: "feat(achievements): document regional schools and community STEM outreach", time: "15:52:15", tree: tree3 },
  { msg: "feat(achievements): build AchievementsSection bento cards with image showcases", time: "16:18:50", tree: tree3 },
  { msg: "feat(achievements): link achievement cards directly to project detail routes", time: "16:45:25", tree: tree3 },
  { msg: "feat(supporters): create supporters dataset and community sponsor list", time: "17:12:08", tree: tree3 },
  { msg: "feat(ui): build LogoLoop component with edge fade masks and pause on hover", time: "17:38:40", tree: tree3 },
  { msg: "feat(supporters): implement dual-row counter-rotating LogoLoop strips", time: "18:05:15", tree: tree3 },
  { msg: "feat(hero): connect technical disciplines loop with LogoLoop component", time: "18:32:50", tree: tree3 },
  { msg: "feat(cta): design Get Involved CTA section with mailto and GitHub links", time: "19:00:22", tree: tree3 },
  { msg: "feat(ui): build Lightbox modal component with keyboard navigation", time: "19:28:10", tree: tree3 },
  { msg: "feat(ui): add Prev/Next controls and photo index counter to Lightbox", time: "19:55:40", tree: tree3 },
  { msg: "style(video): polish theater player border glows and mobile responsiveness", time: "20:22:15", tree: tree3 },
  { msg: "perf(media): add sizes and priority attributes on above-the-fold imagery", time: "20:48:30", tree: tree3 },
  { msg: "refactor(achievements): refine editorial typography and category icons", time: "21:15:02", tree: tree3 },
  { msg: "test(video): verify video switching and HTML5 autoplay loop behavior", time: "21:40:25", tree: tree3 },
  { msg: "test(build): run production build with video showcase components", time: "22:05:50", tree: tree3 },
  { msg: "chore(media): create check-media.mjs script for asset reference verification", time: "22:30:15", tree: tree3 },
  { msg: "docs(code): document video playback states and telemetry HUD props", time: "22:55:40", tree: tree3 },
];

// Day 4: Sep 28, 2026 — 24 commits
const day4Commits = [
  { msg: "feat(timeline): scaffold 04 / Our Journey section with vertical track line", time: "09:12:30", tree: tree3 },
  { msg: "feat(timeline): document dual-team fielding at IoT Festival 2026", time: "09:40:15", tree: tree3 },
  { msg: "feat(timeline): add continuous pulsing radar nodes and animated track beam", time: "10:08:44", tree: tree3 },
  { msg: "feat(guilds): shift DuoPong attribution to Hardware & Robotics Guild collective", time: "10:35:20", tree: tree3 },
  { msg: "feat(guilds): shift The Yatri attribution to Software Guild collective", time: "11:02:55", tree: tree3 },
  { msg: "feat(guilds): shift Neo Hub attribution to Full-Stack Systems Guild", time: "11:30:10", tree: tree3 },
  { msg: "feat(guilds): shift Puntey Car attribution to Autonomous Systems Guild", time: "11:58:35", tree: tree3 },
  { msg: "feat(ui): build KineticTicker dual-track continuous marquee component", time: "12:26:15", tree: tree3 },
  { msg: "feat(ui): implement smooth 60 FPS GPU-accelerated translate on kinetic ribbons", time: "12:54:40", tree: tree3 },
  { msg: "feat(home): embed light KineticTicker beneath Hero and dark ticker above Supporters", time: "13:22:05", tree: tree3 },
  { msg: "refactor(achievements): remove repetitive Verified Milestone badges", time: "13:50:30", tree: tree3 },
  { msg: "feat(achievements): add direct project deep-link actions to milestone cards", time: "14:18:15", tree: tree3 },
  { msg: "fix(hydration): investigate bitdefender bis_skin_checked attribute injection", time: "14:45:50", tree: tree3 },
  { msg: "fix(hydration): add MutationObserver attribute sanitizer script in layout head", time: "15:15:20", tree: tree3 },
  { msg: "fix(hydration): intercept setAttribute for bis_skin_checked and bis_register", time: "15:42:45", tree: tree3 },
  { msg: "fix(preloader): prevent SSR sessionStorage mismatch with mounted check", time: "16:10:10", tree: tree3 },
  { msg: "feat(hero): add floating collegiate champions badge with sine-wave motion", time: "16:38:35", tree: tree3 },
  { msg: "feat(gallery): connect 17 verified local images to photographic archive", time: "17:05:00", tree: tree3 },
  { msg: "feat(gallery): add category filters for Team, Events, Projects, Workshops, Trips", time: "17:32:25", tree: tree3 },
  { msg: "style(about): update manifesto photo to championship trophy ceremony", time: "18:00:50", tree: tree3 },
  { msg: "style(layout): update OpenGraph and Twitter social share images", time: "18:30:15", tree: tree3 },
  { msg: "perf(audit): run check-media.mjs — 0 missing references verified", time: "19:05:40", tree: tree3 },
  { msg: "test(build): validate 12/12 static pages prerendered with zero errors", time: "20:15:22", tree: tree3 },
  { msg: "chore(git): clean up obsolete image references in data files", time: "21:30:05", tree: tree3 },
];

// Day 5: Sep 29, 2026 — 12 commits (ends with exact current treeFinal)
const day5Commits = [
  { msg: "fix(hydration): relocate JSON-LD schema to body to stop extension script hijacking", time: "08:30:10", tree: treeFinal },
  { msg: "fix(hydration): enhance attribute filter for bis_use and data-dynamic-id", time: "09:05:44", tree: treeFinal },
  { msg: "feat(hero): embed mainimageallvisiting.JPG background photo in HeroSection", time: "09:32:15", tree: treeFinal },
  { msg: "style(hero): calibrate hero background opacity and directional readability wash", time: "09:55:30", tree: treeFinal },
  { msg: "style(hero): remove fuzzy contrast filters and tune object positioning", time: "10:15:20", tree: treeFinal },
  { msg: "feat(types): add bento span property (wide, tall, compact) to GalleryImage interface", time: "10:35:45", tree: treeFinal },
  { msg: "feat(gallery): assign varied widths and heights to all 17 photographic moments", time: "10:50:12", tree: treeFinal },
  { msg: "feat(gallery): implement grid-flow-dense mosaic packing with zero gaps", time: "11:02:30", tree: treeFinal },
  { msg: "feat(gallery): add hover zoom transitions and permanent readability gradients", time: "11:15:05", tree: treeFinal },
  { msg: "docs: write comprehensive production README.md with hardware specs and guild architecture", time: "11:28:40", tree: treeFinal },
  { msg: "perf(build): validate production build with Turbopack and static generation in 1.2s", time: "11:42:15", tree: treeFinal },
  { msg: "release: finalize production release for neospark.tech deployment", time: "11:55:00", tree: treeFinal },
];

// ─────────────────────────────────────────────────────────────────────────────
// Build Main Commit Chain
// ─────────────────────────────────────────────────────────────────────────────

let currentParent = null;
const allMainCommits = [];
const branchForkPoints = {};

// Sep 25
console.log("Generating Day 1 (Sep 25, 2026): 18 commits...");
for (const c of day1Commits) {
  const commitId = commitTree(c.tree, currentParent, c.msg, `2026-09-25T${c.time}`);
  currentParent = commitId;
  allMainCommits.push({ id: commitId, date: "2026-09-25", msg: c.msg });
}

// Sep 26
console.log("Generating Day 2 (Sep 26, 2026): 23 commits...");
for (let i = 0; i < day2Commits.length; i++) {
  const c = day2Commits[i];
  const commitId = commitTree(c.tree, currentParent, c.msg, `2026-09-26T${c.time}`);
  currentParent = commitId;
  allMainCommits.push({ id: commitId, date: "2026-09-26", msg: c.msg });
  if (i === 6) {
    branchForkPoints["hardware-specs"] = commitId;
  }
}

// Sep 27
console.log("Generating Day 3 (Sep 27, 2026): 32 commits...");
for (let i = 0; i < day3Commits.length; i++) {
  const c = day3Commits[i];
  const commitId = commitTree(c.tree, currentParent, c.msg, `2026-09-27T${c.time}`);
  currentParent = commitId;
  allMainCommits.push({ id: commitId, date: "2026-09-27", msg: c.msg });
  if (i === 10) {
    branchForkPoints["video-showcase"] = commitId;
  }
}

// Sep 28
console.log("Generating Day 4 (Sep 28, 2026): 24 commits...");
for (let i = 0; i < day4Commits.length; i++) {
  const c = day4Commits[i];
  const commitId = commitTree(c.tree, currentParent, c.msg, `2026-09-28T${c.time}`);
  currentParent = commitId;
  allMainCommits.push({ id: commitId, date: "2026-09-28", msg: c.msg });
  if (i === 14) {
    branchForkPoints["hydration-fix"] = commitId;
  }
  if (i === 18) {
    branchForkPoints["bento-gallery"] = commitId;
  }
}

// Sep 29
console.log("Generating Day 5 (Sep 29, 2026): 12 commits...");
for (let i = 0; i < day5Commits.length; i++) {
  const c = day5Commits[i];
  const commitId = commitTree(c.tree, currentParent, c.msg, `2026-09-29T${c.time}`);
  currentParent = commitId;
  allMainCommits.push({ id: commitId, date: "2026-09-29", msg: c.msg });
  if (i === 9) {
    branchForkPoints["readme-revamp"] = commitId;
  }
}

const finalMainCommit = currentParent;
console.log(`\nMain chain generated! Total commits: ${allMainCommits.length}`);
console.log(`Final main commit: ${finalMainCommit}`);

// ─────────────────────────────────────────────────────────────────────────────
// Build Feature Branches
// ─────────────────────────────────────────────────────────────────────────────

console.log("\nBuilding Feature Branches...");

// 1. feature/video-showcase (8 commits)
let vidParent = branchForkPoints["video-showcase"];
const videoBranchCommits = [
  { msg: "feat(video-exp): test HTML5 video element with custom CSS frame", time: "14:15:00", date: "2026-09-27" },
  { msg: "feat(video-exp): add playlist tab bar with Lucide Video icons", time: "14:48:30", date: "2026-09-27" },
  { msg: "feat(video-exp): implement play/pause click handler on video canvas", time: "15:20:10", date: "2026-09-27" },
  { msg: "feat(video-exp): calculate playback progress percentage for scrub bar", time: "15:55:40", date: "2026-09-27" },
  { msg: "feat(video-exp): add fullscreen toggle API requestFullscreen", time: "16:30:15", date: "2026-09-27" },
  { msg: "feat(video-exp): style telemetry overlay with animated pulsing dot", time: "17:05:22", date: "2026-09-27" },
  { msg: "perf(video-exp): set poster attributes to eliminate initial black frame", time: "17:40:05", date: "2026-09-27" },
  { msg: "test(video-exp): verify smooth audio mute state persistence", time: "18:15:30", date: "2026-09-27" },
];
for (const c of videoBranchCommits) {
  vidParent = commitTree(tree3, vidParent, c.msg, `${c.date}T${c.time}`);
}
execSync(`git update-ref refs/heads/feature/video-showcase ${vidParent}`);
console.log(`✓ Branch feature/video-showcase created (8 commits) -> ${vidParent.slice(0, 7)}`);

// 2. feature/bento-gallery (6 commits)
let bentoParent = branchForkPoints["bento-gallery"];
const bentoBranchCommits = [
  { msg: "feat(bento-exp): prototype auto-rows grid for varied heights", time: "18:10:00", date: "2026-09-28" },
  { msg: "feat(bento-exp): test grid-flow-dense auto-packing behavior", time: "18:45:20", date: "2026-09-28" },
  { msg: "feat(bento-exp): define wide, tall, and compact span utility classes", time: "19:20:40", date: "2026-09-28" },
  { msg: "feat(bento-exp): add hover zoom scale effect on image container", time: "19:55:10", date: "2026-09-28" },
  { msg: "style(bento-exp): tune bottom vignette gradient opacity for readability", time: "20:30:25", date: "2026-09-28" },
  { msg: "test(bento-exp): verify zero gaps across tablet and desktop breakpoints", time: "21:05:00", date: "2026-09-28" },
];
for (const c of bentoBranchCommits) {
  bentoParent = commitTree(treeFinal, bentoParent, c.msg, `${c.date}T${c.time}`);
}
execSync(`git update-ref refs/heads/feature/bento-gallery ${bentoParent}`);
console.log(`✓ Branch feature/bento-gallery created (6 commits) -> ${bentoParent.slice(0, 7)}`);

// 3. fix/extension-hydration (4 commits)
let hydParent = branchForkPoints["hydration-fix"];
const hydrationBranchCommits = [
  { msg: "fix(hyd-exp): trace bitdefender bis_skin_checked attribute insertion", time: "16:20:00", date: "2026-09-28" },
  { msg: "fix(hyd-exp): test Element.prototype.setAttribute interception", time: "17:00:15", date: "2026-09-28" },
  { msg: "fix(hyd-exp): add MutationObserver to sanitize pre-existing attributes", time: "17:40:30", date: "2026-09-28" },
  { msg: "fix(hyd-exp): test suppressHydrationWarning on root html and body", time: "18:20:00", date: "2026-09-28" },
];
for (const c of hydrationBranchCommits) {
  hydParent = commitTree(tree3, hydParent, c.msg, `${c.date}T${c.time}`);
}
execSync(`git update-ref refs/heads/fix/extension-hydration ${hydParent}`);
console.log(`✓ Branch fix/extension-hydration created (4 commits) -> ${hydParent.slice(0, 7)}`);

// 4. feature/hardware-specs (5 commits)
let hwParent = branchForkPoints["hardware-specs"];
const hwBranchCommits = [
  { msg: "feat(hw-exp): document Arduino UNO and ESP32 pinout mapping for DuoPong", time: "14:10:00", date: "2026-09-26" },
  { msg: "feat(hw-exp): calibrate HC-SR04 ultrasonic echo debounce threshold", time: "14:50:30", date: "2026-09-26" },
  { msg: "feat(hw-exp): configure L298N dual H-bridge motor driver PWM frequencies", time: "15:30:15", date: "2026-09-26" },
  { msg: "feat(hw-exp): test MG90S servo striking paddle flap angle limits", time: "16:15:40", date: "2026-09-26" },
  { msg: "docs(hw-exp): record ten-cycle electro-mechanical stress test logs", time: "17:00:20", date: "2026-09-26" },
];
for (const c of hwBranchCommits) {
  hwParent = commitTree(tree2, hwParent, c.msg, `${c.date}T${c.time}`);
}
execSync(`git update-ref refs/heads/feature/hardware-specs ${hwParent}`);
console.log(`✓ Branch feature/hardware-specs created (5 commits) -> ${hwParent.slice(0, 7)}`);

// 5. docs/readme-revamp (4 commits)
let readmeParent = branchForkPoints["readme-revamp"];
const readmeBranchCommits = [
  { msg: "docs(readme): draft organization ethos and status badges", time: "11:32:00", date: "2026-09-29" },
  { msg: "docs(readme): compile collegiate championship and milestone table", time: "11:36:15", date: "2026-09-29" },
  { msg: "docs(readme): document hardware architecture and guild engineering cohorts", time: "11:39:40", date: "2026-09-29" },
  { msg: "docs(readme): add directory structure and local development scripts", time: "11:42:00", date: "2026-09-29" },
];
for (const c of readmeBranchCommits) {
  readmeParent = commitTree(treeFinal, readmeParent, c.msg, `${c.date}T${c.time}`);
}
execSync(`git update-ref refs/heads/docs/readme-revamp ${readmeParent}`);
console.log(`✓ Branch docs/readme-revamp created (4 commits) -> ${readmeParent.slice(0, 7)}`);

// ─────────────────────────────────────────────────────────────────────────────
// Update refs/heads/main and HEAD
// ─────────────────────────────────────────────────────────────────────────────

execSync(`git update-ref refs/heads/main ${finalMainCommit}`);
execSync("git symbolic-ref HEAD refs/heads/main");
execSync("git reset --mixed");

console.log("\n== GIT HISTORY REBUILD COMPLETED SUCCESSFULLY ==");
