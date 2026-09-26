"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Cpu, Code2, Sparkles, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";
import { Placeholder } from "@/components/ui/Placeholder";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CustomCursor = dynamic(
  () =>
    import("@/components/layout/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

type FilterTab = "all" | "hardware" | "software" | "coming-soon";

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState<FilterTab>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "coming-soon") return p.isComingSoon;
    return p.category === filter && !p.isComingSoon;
  });

  return (
    <SmoothScroll>
      <CustomCursor />
      <div
        suppressHydrationWarning
        className="min-h-screen bg-[#F3EFE7] text-[#12130F] selection:bg-[#2F4A3A] selection:text-[#F3EFE7]"
      >
        <Header />

        <main className="pt-28 sm:pt-36 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Home */}
            <div className="mb-8">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6B685E] hover:text-[#12130F] transition-colors py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to homepage</span>
              </Link>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 hairline-b-light gap-6">
              <div>
                <div className="section-header-tag text-[#2F4A3A]">
                  <span className="tag-dot" />
                  <span>The Project Archive</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#12130F]">
                  All Shipped Builds & <br />
                  <span className="text-[#2F4A3A]">Active Research.</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#6B685E] max-w-xl font-sans">
                  Complete index of collegiate hardware, robotic systems, and
                  production software platforms.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#E7E0D2] border border-[#CFC8B8]">
                {(
                  [
                    { label: "All Projects", value: "all" },
                    { label: "Hardware", value: "hardware" },
                    { label: "Software", value: "software" },
                    { label: "Coming Soon", value: "coming-soon" },
                  ] as const
                ).map((tab) => {
                  const isActive = filter === tab.value;
                  return (
                    <button
                      key={tab.value}
                      onClick={() => setFilter(tab.value)}
                      className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-colors ${
                        isActive
                          ? "text-[#F3EFE7]"
                          : "text-[#6B685E] hover:text-[#12130F]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="archive-tab-active"
                          className="absolute inset-0 bg-[#2F4A3A] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => {
                  const isComing = project.isComingSoon;
                  const CategoryIcon =
                    project.category === "hardware"
                      ? Cpu
                      : project.category === "software"
                      ? Code2
                      : Sparkles;

                  if (isComing) {
                    return (
                      <motion.div
                        key={project.slug}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        className="p-8 rounded-2xl border border-[#CFC8B8] bg-[#E7E0D2]/50 flex flex-col justify-between opacity-80"
                      >
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12130F]/10 text-[#6B685E] font-mono text-[10px] uppercase tracking-wider mb-4">
                            <Clock className="w-3 h-3" />
                            <span>Coming Soon</span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-[#12130F] mb-2">
                            {project.name}
                          </h3>
                          <p className="text-sm text-[#6B685E]">
                            {project.tagline}
                          </p>
                        </div>
                        <div className="pt-6 border-t border-[#CFC8B8] font-mono text-xs text-[#6B685E]">
                          Neo Spark Experimental Lab
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={project.slug}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: idx * 0.04 }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        data-cursor="view"
                        className="group flex flex-col h-full flat-card-light overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#2F4A3A]"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E7E0D2] border-b border-[#CFC8B8]">
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

                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span className="px-2.5 py-1 rounded-md bg-[#F3EFE7]/90 backdrop-blur-sm border border-[#CFC8B8] font-mono text-[11px] text-[#12130F]">
                              0{idx + 1}
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F3EFE7]/90 backdrop-blur-sm border border-[#CFC8B8] font-mono text-[10px] text-[#2F4A3A] uppercase tracking-wider font-semibold">
                              <CategoryIcon className="w-3 h-3" />
                              <span>{project.category}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-display text-xl font-bold text-[#12130F] group-hover:text-[#2F4A3A] transition-colors">
                                {project.name}
                              </h3>
                              <ArrowUpRight className="w-4 h-4 text-[#6B685E] group-hover:text-[#2F4A3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>

                            <p className="text-sm text-[#6B685E] line-clamp-2 leading-relaxed mb-4">
                              {project.tagline}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-[#CFC8B8] flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                              {project.stack.slice(0, 3).map((tool) => (
                                <span
                                  key={tool}
                                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F3EFE7] border border-[#CFC8B8] text-[#6B685E]"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>

                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#2F4A3A] font-semibold">
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
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
