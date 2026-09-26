"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Code2, Sparkles, Clock } from "lucide-react";
import { builtProjects, comingSoonProjects } from "@/data/projects";
import { Placeholder } from "@/components/ui/Placeholder";
import type { ProjectCategory } from "@/types";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects = builtProjects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-[#12130F] text-[#F3EFE7] hairline-t-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b-dark gap-6">
          <div>
            <div className="section-header-tag text-[#7FA38A]">
              <span className="tag-dot" />
              <span>02 / Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#F3EFE7]">
              Projects that made it <br />
              <span className="text-[#7FA38A]">out of the classroom.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A6A394] max-w-2xl font-sans">
              Real machines, real users, real impact. Each product represents
              hundreds of hours of independent student engineering.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#1C1E19] border border-[#2B2E27]">
            {(
              [
                { label: "All Projects", value: "all" },
                { label: "Hardware", value: "hardware" },
                { label: "Software", value: "software" },
                { label: "Hybrid", value: "hybrid" },
              ] as const
            ).map((tab) => {
              const isActive = filter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive ? "text-[#12130F]" : "text-[#A6A394] hover:text-[#F3EFE7]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="project-tab-active"
                      className="absolute inset-0 bg-[#F3EFE7] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Built Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const CategoryIcon =
                project.category === "hardware"
                  ? Cpu
                  : project.category === "software"
                  ? Code2
                  : Sparkles;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor="view"
                    className="group flex flex-col h-full flat-card-dark overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#7FA38A]"
                    aria-label={`View ${project.name} project details`}
                  >
                    {/* Media Thumbnail */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1C1E19] border-b border-[#2B2E27]">
                      {project.thumbnail ? (
                        <Image
                          src={project.thumbnail}
                          alt={project.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Placeholder
                          label={project.name}
                          category={project.category}
                          aspectRatio="video"
                        />
                      )}

                      {/* Index Monogram & Category Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-[#12130F]/80 backdrop-blur-sm border border-[#2B2E27] font-mono text-[11px] text-[#A6A394]">
                          0{idx + 1}
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#12130F]/80 backdrop-blur-sm border border-[#2B2E27] font-mono text-[10px] text-[#7FA38A] uppercase tracking-wider">
                          <CategoryIcon className="w-3 h-3" />
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-xl font-bold text-[#F3EFE7] group-hover:text-[#7FA38A] transition-colors">
                            {project.name}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-[#A6A394] group-hover:text-[#7FA38A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>

                        <p className="text-sm text-[#A6A394] line-clamp-2 leading-relaxed mb-4">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Tech Chips & Status */}
                      <div className="pt-4 border-t border-[#2B2E27] flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#2B2E27]/50 text-[#A6A394]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#7FA38A]">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Coming Soon Section (Compact muted cards, NAME and Coming Soon badge only) */}
        <div className="mt-20 pt-12 border-t border-[#2B2E27]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs text-[#7FA38A] tracking-wider uppercase">
                Active Research & Pipeline
              </span>
              <h4 className="text-xl font-display font-semibold text-[#F3EFE7] mt-1">
                Coming Soon from the Lab
              </h4>
            </div>
            <span className="font-mono text-xs text-[#A6A394]">
              {comingSoonProjects.length} Prototypes in R&D
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSoonProjects.map((p) => (
              <div
                key={p.slug}
                className="p-5 rounded-xl border border-[#2B2E27] bg-[#181A15] opacity-80 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#2B2E27] text-[#A6A394] font-mono text-[10px] uppercase tracking-wider mb-3">
                    <Clock className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </div>
                  <h5 className="font-display text-base font-semibold text-[#F3EFE7]">
                    {p.name}
                  </h5>
                </div>
                <p className="font-mono text-[11px] text-[#A6A394] mt-3">
                  Neo Spark Experimental Guild
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
