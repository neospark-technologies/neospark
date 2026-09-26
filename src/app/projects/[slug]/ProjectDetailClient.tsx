"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Code2,
  Sparkles,
  Trophy,
  CheckCircle2,
  AlertCircle,
  Play,
} from "lucide-react";
import type { Project } from "@/types";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Lightbox } from "@/components/ui/Lightbox";
import { Placeholder } from "@/components/ui/Placeholder";
import { GithubIcon } from "@/components/ui/icons";

const CustomCursor = dynamic(
  () =>
    import("@/components/layout/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

interface ProjectDetailClientProps {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({
  project,
  nextProject,
}: ProjectDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const CategoryIcon =
    project.category === "hardware"
      ? Cpu
      : project.category === "software"
      ? Code2
      : Sparkles;

  const galleryItems = (project.images || []).map((src) => ({
    src,
    alt: `${project.name} documentation photograph`,
    caption: `${project.name} — Hardware & Software Verification`,
  }));

  const openLightbox = (index: number) => {
    setActiveImageIdx(index);
    setLightboxOpen(true);
  };

  return (
    <SmoothScroll>
      <CustomCursor />
      <div
        suppressHydrationWarning
        className="min-h-screen bg-[#F3EFE7] text-[#12130F] selection:bg-[#2F4A3A] selection:text-[#F3EFE7]"
      >
        <Header />

        <main className="pt-28 sm:pt-36 pb-24">
          {/* Back Navigation Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6B685E] hover:text-[#12130F] transition-colors py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Hero Header */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 hairline-b-light">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#2F4A3A] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E7E0D2] border border-[#CFC8B8] flex items-center gap-1.5">
                <CategoryIcon className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </span>

              <span className="font-mono text-xs text-[#6B685E] uppercase tracking-wider px-3 py-1 rounded-full bg-[#E7E0D2]/50 border border-[#CFC8B8]">
                {project.status === "completed" ? "Shipped" : "In Progress"} —{" "}
                {project.year}
              </span>

              {project.needsReview && (
                <span className="font-mono text-[11px] text-[#B5573A] bg-[#B5573A]/10 border border-[#B5573A]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>Specs Pending Review</span>
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#12130F] mb-6 max-w-4xl">
              {project.name}
            </h1>

            <p className="text-lg sm:text-2xl text-[#6B685E] max-w-3xl font-sans leading-relaxed mb-8">
              {project.tagline}
            </p>

            {/* Action Links: GitHub & Live Demo */}
            <div className="flex flex-wrap items-center gap-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic btn-forest-solid px-6 py-3 text-sm font-semibold tracking-wide"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic btn-ink-solid px-6 py-3 text-sm font-semibold tracking-wide"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
            </div>
          </section>

          {/* Featured Primary Visual */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#CFC8B8] bg-[#E7E0D2]">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              ) : (
                <Placeholder
                  label={project.name}
                  category={project.category}
                  aspectRatio="video"
                />
              )}
            </div>
          </section>

          {/* Two-Column Editorial Details */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Main Narrative Column (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                {/* Executive Summary */}
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block">
                    01 / Overview & Summary
                  </span>
                  <p className="text-xl sm:text-2xl font-serif text-[#12130F] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Deep-Dive Narrative Paragraphs */}
                {project.description.length > 0 && (
                  <div className="space-y-6 pt-6 hairline-t-light">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block">
                      02 / Technical Architecture & Story
                    </span>
                    <div className="space-y-5 text-base sm:text-lg text-[#6B685E] leading-relaxed">
                      {project.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features List */}
                {project.features.length > 0 && (
                  <div className="space-y-6 pt-6 hairline-t-light">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block">
                      03 / Engineered Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-[#CFC8B8] bg-[#E7E0D2]/50 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-[#12130F] leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video Demonstration Section if applicable */}
                {project.video && (
                  <div className="space-y-4 pt-6 hairline-t-light">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block">
                      04 / Hardware Video Demo
                    </span>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#CFC8B8] bg-[#12130F]">
                      <video
                        src={project.video.src}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                        poster={project.thumbnail}
                      >
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                  </div>
                )}

                {/* Project Documentation Gallery */}
                {project.images && project.images.length > 1 && (
                  <div className="space-y-6 pt-6 hairline-t-light">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block">
                      05 / Field Documentation & Validation
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {project.images.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          onClick={() => openLightbox(idx)}
                          data-cursor="open"
                          className="relative aspect-square rounded-xl overflow-hidden border border-[#CFC8B8] bg-[#E7E0D2] cursor-pointer group"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${project.name} slide ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-[#12130F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mono text-xs text-white uppercase tracking-wider">
                              Enlarge
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Specifications (4 cols) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                {/* Tech Stack Spec Card */}
                <div className="p-6 sm:p-7 rounded-2xl border border-[#CFC8B8] bg-[#E7E0D2] space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block font-semibold">
                    Technical Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#CFC8B8] text-xs font-mono font-medium text-[#12130F]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights / Recognition Card */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="p-6 sm:p-7 rounded-2xl border border-[#CFC8B8] bg-[#E7E0D2] space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block font-semibold flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-[#2F4A3A]" />
                      <span>Recognition & Milestones</span>
                    </span>
                    <ul className="space-y-3 text-sm text-[#12130F]">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2F4A3A] mt-2 flex-shrink-0" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Builders & Contributors */}
                {project.team && project.team.length > 0 && (
                  <div className="p-6 sm:p-7 rounded-2xl border border-[#CFC8B8] bg-[#E7E0D2] space-y-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] block font-semibold">
                      Student Engineering Team
                    </span>
                    <ul className="space-y-2.5">
                      {project.team.map((member, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="font-medium text-[#12130F]">
                            {member.name}
                          </span>
                          {member.role && (
                            <span className="font-mono text-[#6B685E]">
                              {member.role}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Next Project Carousel Navigation */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mt-16 hairline-t-light">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#12130F] text-[#F3EFE7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#7FA38A] block mb-2">
                  Next Project in Archive
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3EFE7]">
                  {nextProject.name}
                </h3>
                <p className="text-sm text-[#A6A394] mt-1 max-w-lg">
                  {nextProject.tagline}
                </p>
              </div>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="btn-magnetic btn-forest-solid px-6 py-3 text-sm font-semibold flex items-center gap-2 flex-shrink-0"
              >
                <span>Explore Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Lightbox for gallery view */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryItems}
        currentIndex={activeImageIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setActiveImageIdx((prev) =>
            prev === 0 ? galleryItems.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setActiveImageIdx((prev) =>
            prev === galleryItems.length - 1 ? 0 : prev + 1
          )
        }
      />
    </SmoothScroll>
  );
}
