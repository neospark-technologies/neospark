"use client";

export default function MarqueeDivider() {
  const items = [
    "IoT",
    "Full-Stack",
    "Hardware",
    "Open Source",
    "Student-Built",
    "Hackathons",
    "Arduino",
    "Next.js",
    "React",
    "TypeScript",
    "Embedded Systems",
    "Innovation",
  ];

  return (
    <div className="py-6 border-y border-[var(--border-light)] overflow-hidden bg-[var(--color-cream)]">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-sm font-medium text-[var(--color-stone-300)] uppercase tracking-widest whitespace-nowrap"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-stone-200)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
