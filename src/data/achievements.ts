import type { Achievement, GalleryImage, TimelineEvent } from "@/types";

export const achievements: Achievement[] = [
  {
    title: "IoT Festival 2026 — Winner",
    event: "Informatics College Pokhara",
    description:
      "DuoPong won 1st Place in the IoT Projects competition, evaluated on mechanical assembly, sensor responsiveness, and real-time multiplayer arcade gameplay.",
    date: "2026",
    image: "/images/IMG_4829.JPG",
    project: "duopong",
    needsReview: true, // Owner to confirm competition year and details
  },
  {
    title: "InnoHack 2026 — Winner",
    event: "Informatics College Pokhara",
    description:
      "Won 1st Place in the Tourism & Hospitality track with 'The Yatri', a gamified exploration platform introducing travelers to authentic cultural destinations.",
    date: "2026",
    image: "/images/IMG_5620.JPG",
    project: "the-yatri",
    needsReview: true, // Owner to confirm event details
  },
  {
    title: "Government Program Demonstrations",
    event: "Official Invitation Exhibits",
    description:
      "DuoPong was officially invited and demonstrated at regional government programs, showcasing student-engineered robotics to public officials and educators.",
    date: "2026",
    image: "/images/final testing.jpeg",
    project: "duopong",
    needsReview: true, // Owner to confirm event names
  },
  {
    title: "School & Community STEM Showcases",
    event: "Regional Educational Outreaches",
    description:
      "Invited to exhibit hands-on IoT hardware across schools and community organizations, inspiring younger students through interactive robotics.",
    date: "2026",
    image: "/images/testing.jpeg",
    project: "duopong",
    needsReview: true, // Owner to confirm partner schools
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/IMG_6378.JPG",
    alt: "Neo Spark student builders team photo with mountain background",
    caption: "The full team — ready for anything",
    category: "team",
    featured: true,
    aspect: "landscape",
  },
  {
    id: "g2",
    src: "/images/IMG_4554.JPG",
    alt: "Neo Spark team overlooking Pokhara valley and Phewa lake",
    caption: "Team trip to Pokhara",
    category: "trip",
    featured: true,
    aspect: "landscape",
  },
  {
    id: "g3",
    src: "/images/IMG_3451.JPG",
    alt: "Team gathered in front of traditional Nepali architecture",
    caption: "Exploring together, building together",
    category: "trip",
    aspect: "portrait",
  },
  {
    id: "g4",
    src: "/images/IMG_4829.JPG",
    alt: "DuoPong IoT arcade machine showcase at IoT Festival 2026",
    caption: "DuoPong at IoT Festival 2026",
    category: "event",
    featured: true,
    aspect: "landscape",
  },
  {
    id: "g5",
    src: "/images/IMG_5620.JPG",
    alt: "InnoHack 2026 1st place championship trophies",
    caption: "InnoHack 2026 — both trophies, one team",
    category: "event",
    featured: true,
    aspect: "portrait",
  },
  {
    id: "g6",
    src: "/images/testing.jpeg",
    alt: "Hardware prototyping and sensor wiring bench testing",
    caption: "Bench testing sensors and motor drivers",
    category: "workshop",
    aspect: "landscape",
  },
  {
    id: "g7",
    src: "/images/final testing.jpeg",
    alt: "Final calibration of mechanical paddles and goal sensors",
    caption: "Final calibration of mechanical paddles",
    category: "project",
    aspect: "landscape",
  },
  {
    id: "g8",
    src: "/images/group-photo.jpg",
    alt: "Neo Spark engineering crew group photo",
    caption: "Engineering cohort behind the builds",
    category: "team",
    aspect: "landscape",
  },
  {
    id: "g9",
    src: "/images/1 3D.jpg",
    alt: "3D CAD modeling of chassis and structural components",
    caption: "Mechanical CAD modeling and structural design",
    category: "project",
    aspect: "square",
  },
  {
    id: "g10",
    src: "/images/2 3d.jpg",
    alt: "Component layout visualization for arcade mechanical components",
    caption: "Component packaging and spatial alignment",
    category: "project",
    aspect: "square",
  },
  {
    id: "g11",
    src: "/images/IMG_5630.PNG",
    alt: "The Yatri software platform demo and architecture deck",
    caption: "The Yatri platform presentation",
    category: "event",
    aspect: "landscape",
  },
  {
    id: "g12",
    src: "/images/IMG_5631.PNG",
    alt: "InnoHack award ceremony presentation",
    caption: "InnoHack stage showcase",
    category: "event",
    aspect: "landscape",
  },
  {
    id: "g13",
    src: "/images/IMG_0417.JPG",
    alt: "Puntey automatic car chassis assembly and obstacle sensor integration",
    caption: "Puntey autonomous vehicle chassis assembly",
    category: "project",
    aspect: "portrait",
  },
  {
    id: "g14",
    src: "/images/IMG_3841.JPG",
    alt: "Team strategy and design critique session",
    caption: "Technical design review and roadmap planning",
    category: "workshop",
    aspect: "landscape",
  },
];

export const timeline: TimelineEvent[] = [
  {
    date: "2025",
    title: "Neo Spark Technologies Founded",
    description:
      "A group of students at Informatics College Pokhara joined forces with a clear ethos: create genuine, production-grade technology rather than classroom-only coursework.",
    type: "milestone",
  },
  {
    date: "Dec 2025 – Jan 2026",
    title: "DuoPong Development Begins",
    description:
      "The engineering guild began architecting DuoPong — an IoT arcade machine combining custom dual microcontrollers, ultrasonic goal detection, and mechanical servo strikers.",
    type: "project",
  },
  {
    date: "Early 2026",
    title: "IoT Festival 2026 — DuoPong Wins",
    description:
      "DuoPong clinched 1st Place in the IoT Projects competition at Informatics College Pokhara against fierce collegiate engineering contenders.",
    type: "achievement",
  },
  {
    date: "Mid 2026",
    title: "InnoHack 2026 — The Yatri Wins",
    description:
      "The software guild built and won 1st Place at InnoHack 2026 with 'The Yatri', a gamified cultural exploration platform.",
    type: "achievement",
  },
  {
    date: "2026",
    title: "Government Invitations & School Demonstrations",
    description:
      "DuoPong was officially invited and demonstrated at civic events and regional schools, introducing hands-on robotics to broader audiences.",
    type: "event",
  },
  {
    date: "2026",
    title: "Neo Hub Marketplace & Lab Expansion",
    description:
      "Shipped Neo Hub, a full-stack IoT equipment marketplace on Render & Railway, while initiating R&D across autonomous vehicles and digital platforms.",
    type: "project",
  },
];
