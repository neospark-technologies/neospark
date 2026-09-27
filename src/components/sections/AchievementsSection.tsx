"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Award, Landmark, GraduationCap, ArrowUpRight } from "lucide-react";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  const icons = [Trophy, Award, Landmark, GraduationCap];

  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 bg-[#F3EFE7] text-[#12130F] hairline-t-light relative overflow-hidden"
    >
      {/* Subtle ambient accent background glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#2F4A3A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#7FA38A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b-light gap-6">
          <div>
            <div className="section-header-tag text-[#2F4A3A]">
              <span className="tag-dot" />
              <span>03 / Milestones & Honors</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#12130F]">
              Proof, <span className="text-[#2F4A3A]">not promises.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#6B685E] max-w-md font-sans">
            Every honor confirms that our collective student engineering cohort can
            compete against seasoned standards — and win.
          </p>
        </div>

        {/* 4 Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const projectSlug = item.project;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flat-card-light overflow-hidden flex flex-col justify-between group hover:border-[#12130F] transition-all duration-300"
              >
                {/* Visual Showcase */}
                {item.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E7E0D2] border-b border-[#CFC8B8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12130F]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#12130F]/85 backdrop-blur-md text-[#F3EFE7] font-mono text-[11px] font-semibold tracking-wider flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7FA38A] animate-pulse" />
                      <span>{item.date}</span>
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#E7E0D2]/90 backdrop-blur-md text-[#2F4A3A] font-mono text-[11px] font-medium border border-[#CFC8B8]">
                      {item.event}
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-[#2F4A3A]">
                      <div className="w-7 h-7 rounded-lg bg-[#2F4A3A]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#2F4A3A]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                        Neo Spark Collective
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#12130F] mb-3 group-hover:text-[#2F4A3A] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#6B685E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Clean contextual link to project or guild (replacing repetitive Verified Milestone stamp) */}
                  {projectSlug && (
                    <div className="mt-6 pt-4 border-t border-[#CFC8B8] flex items-center justify-between">
                      <span className="font-mono text-xs text-[#6B685E]">
                        Engineering Cohort Initiative
                      </span>
                      <Link
                        href={`/projects/${projectSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#2F4A3A] hover:text-[#12130F] transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
