"use client";

import { useReveal } from "@/hooks/useAnimations";
import Image from "next/image";
import type { TeamMember } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  const headerRef = useReveal();
  const gridRef = useReveal(0.05);

  return (
    <section className="section" id="team">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <span className="section-label">The Team</span>
          <h2 className="section-title">
            The people behind
            <br />
            every line of code.
          </h2>
          <p className="section-description">
            Students first, builders always. Meet the team that turns ideas into
            shipped products.
          </p>
        </div>

        {/* Team grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {members.map((member) => (
            <a
              key={member.login}
              href={member.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-hover"
              id={`team-member-${member.login}`}
            >
              <div className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden mb-3 bg-[var(--color-stone-100)]">
                <Image
                  src={member.avatar_url}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/30 transition-all duration-300 flex items-end justify-end p-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-cream)] rounded-full p-1.5">
                    <ArrowUpRight size={14} className="text-[var(--color-ink)]" />
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors tracking-tight">
                {member.name}
              </h4>
              {member.role && (
                <p className="text-xs text-[var(--color-stone-400)] mt-0.5">
                  {member.role}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
