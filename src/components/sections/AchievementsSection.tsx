"use client";

import React from "react";
import Image from "next/image";
import { Trophy, Award, Landmark, GraduationCap } from "lucide-react";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  const icons = [Trophy, Award, Landmark, GraduationCap];

  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 bg-[#F3EFE7] text-[#12130F] hairline-t-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b-light gap-4">
          <div>
            <div className="section-header-tag text-[#2F4A3A]">
              <span className="tag-dot" />
              <span>03 / Validation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#12130F]">
              Proof, <span className="text-[#2F4A3A]">not promises.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#6B685E] max-w-md font-sans">
            Every recognition confirms that student-driven engineering can
            compete against seasoned standards — and win.
          </p>
        </div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="flat-card-light overflow-hidden flex flex-col justify-between"
              >
                {/* Image Showcase if present */}
                {item.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E7E0D2] border-b border-[#CFC8B8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#12130F]/80 backdrop-blur-sm text-[#F3EFE7] font-mono text-[11px]">
                      <span>{item.date}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3 text-[#2F4A3A]">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                        {item.event}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#12130F] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#6B685E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CFC8B8] flex items-center justify-between text-xs font-mono text-[#6B685E]">
                    <span>Verified Milestone</span>
                    <span className="uppercase text-[#2F4A3A] font-semibold">
                      Recognized
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
